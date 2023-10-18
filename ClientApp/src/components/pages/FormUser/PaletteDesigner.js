import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import * as THREE from "three";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import PaletteDesignName from "PaletteDesignName";
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import "./PaletteDesigner.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { toast, ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
// import TextField from "@material-ui/core/TextField";
import { Radio } from "@material-ui/core";
import Slider from '@mui/material/Slider';
import { Select, MenuItem } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import OrbitControls from "three-orbitcontrols";
import axios from 'axios';
import { RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material';
import { EqualStencilFunc } from 'three';
import { CanvasTexture } from 'three';
import Paper from '@material-ui/core/Paper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, EffectCoverflow, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { withTranslation, Trans } from 'react-i18next';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import arrowfororigin from "./origin_arrow.png";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import circleImage from "./circle_1.png";
import circle_2 from "./circle_2.png";
import Red_arrow from './Red_arrow.png';
import Green_arrow from './Green_arrow.png';
import priyuimg from './priyuimg.png';
import priyup1 from './priyup1.png';
import priyup from './priyup.png';
import Divider from '@mui/material/Divider';
import Light_Blue_arrow from './Light_Blue_arrow.png';
import CircularProgress from '@mui/material/CircularProgress';
import BasicParameter from './Views/BasicParameter';
import sample from "./3_SIMULATION.mp4";
import LogoPaster from './LogoPaster.png';
import {
  Frame_1, Frame_2, Frame_3, Frame_4, Frame_5, Frame_6, Frame_7, Frame_8, Frame_9, Frame_10, Frame_11, Frame_12, Frame_13
  , Frame_14, Frame_15, Frame_16, Frame_17, Frame_18, Frame_19, Frame_20, Frame_21, Frame_22, Frame_23, Frame_24
  , Frame_25, Frame_26, Frame_27, Frame_28, Frame_29, Frame_30, Frame_31, Frame_32, Frame_33, Frame_34, Frame_35
  , Frame_36, Frame_37
} from './Algorithm/AlgoFrame';
import { DisplayVariant_Core } from './Algorithm/DisplayVarients';
import Simulation from './Views/Simulation/Simulation';

import DesignParameter from './Views/DesignParameter';
import PatternWizard from './Views/PatternWizard';

import LayerCreator from './Views/LayerCreator';
import ProgramRoutineCreator from './Views/ProgramRoutineCreator';
import { saveAs } from 'file-saver';
import GLTFExporter from 'three-gltf-exporter';
import { GetThreedPallet } from "./Views/Simulation/simComponents/BuildingModal3d";
// import {
//   GetEmptyCase,
//   GetCaseTop,
//   GetCaseFront,
//   GetCaseRight,
//   GetCaseLeft,
//   GetCaseBack,
//   GetCaseTopFront,
//   GetCaseTopBack,
//   GetCaseTopRight,
//   GetCaseTopLeft,
//   GetCaseFrontLeft,
//   GetCaseFrontRight,
//   GetCaseRightBack,
//   GetCaseLeftBack
// } from "./Views/Simulation/simComponents/SingleCaseModal";
import {
  GetPallet,
  GetCapturePallet,
  GetEmptyCase,
  GetFrontCase,
  GetTopCase,
  GetBackCase,
  GetRightCase,
  GetLeftCase,
  GetTopBackCase,
  GetTopFrontCase,
  GetTopLeftCase,
  GetTopRightCase,
  GetFrontLeftCase,
  GetFrontRightCase,
  GetLeftBackCase,
  GetRightBackCase
} from "./Views/Simulation/Simulation";
import { getCanvasImage_2D } from "./Views/Simulation/Simulation";
import {
  ParentGridstyle, containerGriddStyle, ExpansionPanelDetailsStyle, containerMarginStyle, GridItemStyle, SimuTextflieStyle, GridTopStyle,
  SizeSimuStyle, RadioGroupStyle, containerGridstyle, DivPFMarginStyle,
} from './UICommonStyle_Pallet';
import { VisibilityRounded } from '@material-ui/icons';
let arrayData = []
const swap = SwiperCore.use([Pagination, Navigation, A11y, EffectCoverflow]);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const threedwidth = 791;
const threedheight = 372;
const widgetwidth = 526;
const paddingadjust = 0;
const exceptThisSymbols = ["e", "a", "d", "E", "+", "-", ".", /[!@$%^&*()+\=\[\]{};':"\\~`|,.<>\/?]+/];
const exceptThisSymbols1 = ["e", "a", "d", "E", "+", ".", /[!@$%^&*()+\=\[\]{};':"\\~`|,.<>\/?]+/];
const exceptThisSymbolsprc = ["e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "#", ",", "v", "'", "w", "x", "y", "z", "b", "c", "p", "]", "{", "}", "=", ")", "(", "*", "|", "[]", "{}", "/", "!", "@", "$", "%", "^", "&",
  "P", "A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "?", ":", ";", "\\", "_", "Z", "a", "d", "E", "<", ">", "!", ":", "+", "-", ".", "[", /[!@$%^&*()+\=\[\]{};':"\\~`|,.<>\/?]+/];

var canvas_forSingle;
var canvasEle;
var canvasEle_GR;
var canvasEle_OR;
var canvasEle_RD;
var canvasEleCase;
var canvasEle_GRCaseFreez;
var canvas_forPRC;
var canvas_forPRCOuterRect;
var canvas_For_PatternWizard;
var canvas_For_LayerCreator;
var canvas_For_PDCanvas;
var canvas_For_PDPatilCanvas;
var canvas_For_PDPatilpriyaCanvas;

var varientsList = [];
var poss_Origin = [];
var numberVar = [];
var number;
var progressNum;

var color1 = "#f5f5f5";
var color2 = "#E8E7DE";
var imgForCase;
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad', 'priyuuuuuuuu'];

class PaletteDesignerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manualMoving1:false,
      manualMoving2:false,
      isDragging: false,
      nasir: {},
      khalid: [],
      prepos2y: 0,
      initialMouseX: 0,
      initialMouseY: 0,
      initialCaseX: 0,
      initialCaseY: 0,
      countOfIntermediateLayer: 0,
      priya: "",
      priyadarshini: "",
      downloadablePDF: true,
      pallet_bool: true,
      isExpanded: false,
      rangeValue: 6,
      completed: {},
      pallet_12: false,
      selected_SchemaA: "",
      dropdownUpdate: false,
      setDefaultPallete: "Euro 1200 x 800 mm",
      setDefaultCase: "case1_200_300_150",
      layers: 1,
      creator: [1],
      errorNumberOfLayer: false,
      errorHelperForLayer: "",

      errorNumberOfInter: false,
      errorNumberOfInterWidth: false,
      errorNumberOfInterLength: false,
      errorHelperForInter: "",
      errorHelperForInterWidth: "",
      errorHelperForInterLength: "",
      errorNumberOfPrc: false,
      errorHelperForPrc: "",


      errorWorkingaraeaWidth: false,
      errorHelperForWorkingareaWidth: "",

      errorWorkingaraeaLength: false,
      errorHelperForWorkingareaLength: "",

      errorWorkingaraeaHeight: false,
      errorHelperForWorkingareaHeight: "",

      errorWorkingaraeaoffsetWidth: false,
      errorHelperForWorkingareaoffsetWidth: "",

      errorWorkingaraeaoffsetLength: false,
      errorHelperForWorkingareaoffsetLength: "",
      errorWorkingaraeaWidthfor2: false,
      errorHelperForWorkingareaWidthfor2: "",

      errorWorkingaraeaLengthfor2: false,
      errorHelperForWorkingareaLengthfor2: "",
      errorWorkingaraeaHeightfor2: false,
      errorHelperForWorkingareaHeightfor2: "",
      simulationToast: false,
      LayerCreatorToast: false,


      errorWorkingaraeaoffsetWidthfor2: false,
      errorHelperForWorkingareaoffsetWidthfor2: "",

      errorWorkingaraeaoffsetLengthfor2: false,
      errorHelperForWorkingareaoffsetLengthfor2: "",
      pallets: [],
      palletid: 0,
      palletname: "",
      originPal1: "",
      originPal2: "",
      firstcase_pal1: "",
      firstcase_pal2: "",
      WA_1_width_X_Dir: 0,
      WA_1_Length_Y_Dir: 0,
      WA_1_Height_Z_Dir: 0,
      WA_1_Offset_X_Dir: 0,
      WA_1_Offset_Y_Dir: 0,
      WA_2_width_X_Dir: 0,
      WA_2_Length_Y_Dir: 0,
      WA_2_Height_Z_Dir: 0,
      WA_2_Offset_X_Dir: 0,
      WA_2_Offset_Y_Dir: 0,
      pallete_Type: "",
      intermediate_Layer_Type: 1,
      intermediate_Layer_Width: 1,
      intermediate_Layer_Length: 1,
      case_Type: "",
      // case_Type1: "",
      // case_Type2: "",
      no_Of_Layers: 1,
      cases_Schema_A: 0,
      cases_Schema_B: 0,
      cases_Schema_C: 0,
      setnumberx: '',
      setnumbery: '',
      setnumberz: '',
      setnumberx2: '',
      setnumbery2: '',
      setnumberz2: '',

      dyMarginTop_swiper: '-30px',
      dyMarginTop_swiperText: '30px',
      dyMarginLeft_swiperText: '0px',
      dyMarginBottom_swiperText: '50px',
      preposx: 0,
      preposy: 0,
      preposz: 0,

      pre_Pos_X: 0,
      pre_Pos_Y: 0,
      pre_Pos_Z: 0,

      ctx: null,
      isDown: false,
      dragTarget: null,
      startX: null,
      startY: null,

      autogenerate: false,

      preValueXBool: false,
      preValueYBool: false,
      preValueZBool: false,

      checkOffestXBool: false,
      checkOffestYBool: false,
      checkOffestZBool: false,

      preOffsetXNeg: false,
      checkOffsetXNeg: false,

      preOffsetYNeg: false,
      checkOffsetYNeg: false,

      predropdownBool: false,
      predropdownBool: false,
      offsetXneg: false,
      offsetYneg: false,


      prenumberx: false,
      prenumbery: false,
      prenumberz: false,

      HWeighted1: false,
      VWeighted1: false,
      HWeighted2: false,
      VWeighted2: false,


      errorPreposx: false,
      errorhelpertextForPreposx: "",
      errorPreposy: false,
      errorhelpertextForPreposy: "",
      errorPreposz: false,
      errorhelpertextForPreposz: "",
      outside_Label_Priority: "",
      // outside_Label_Priority1: "",
      // outside_Label_Priority2: "",
      ruleSymetricMassDistribution: false,
      schemaA_ForPatternWizard: "",
      basic_parameter: [],
      Nr_number: [],
      int_Layer: false,
      expanded: '',
      panelname: '',
      backgroundColor: '#239141',
      colorA: '#5eb8b3',
      colorB: 'white',
      colorC: 'white',
      colorfor1: '#d5e8d4',
      colorfor2: 'white',
      selectedOne: true,
      selectedTwo: false,
      layer_data: [],
      enableCarousel1: true,
      enableHeaderA: false,
      enableHeaderB: false,
      enableHeaderC: false,
      canvasGreenRect: "hidden",
      canvasOrangeRect: "hidden",
      canvasRedRect: "hidden",
      canvas_PatternWizard: "hidden",
      canvas_LayerCreator: "hidden",
      canvasfreezGreenRect: "hidden",
      setVariantName_SchemaA: '',
      setVariantName_SchemaB: '',
      setVariantName_SchemaC: '',
      margintop_prc: 0,

      Margin_Width: "580px",
      Margin_Height: "480px",
      Margin_Left: "20px",
      Margin_Top: "25px",

      mapPinchValue: 0,

      Margin_WidthLC: "0px",
      Margin_HeightLC: "0px",
      Margin_LeftLC: "0px",
      Margin_TopLC: "0px",

      Margin_WidthForprc: "0px",
      Margin_HeightForprc: "0px",

      marginBottom_greenrect: 0,
      enableCanvasPRC: "hidden",
      enableCanvas: "visible",
      layerdataupdated: true,
      casenames: [],
      selectcase: "",
      arcX: 414,
      arcY: 248,
      arcX2: 475,
      arcY2: 326,

      arrowx: 550,
      arrowy: 58,

      arrowx2: 270,
      arrowy2: 58,

      pinchZoom: 0,
      enablefor1: true,
      enablefor2: false,
      case_data: [],
      prePosXneg: 10,
      prePosYneg: 10,
      schema: "",
      Case: "",
      caseTypeSet: false,
      CasesXYfotGreenRectPRC: [],
      CasesXYmanualPRC: [],
      tempNRValue: "",
      caseImageLoad0Deg: [],
      caseImageLoad90Deg: [],
      caseImageLoad180Deg: [],
      caseImageLoad270Deg: [],
      setCanvasBP: true,
      setCircularProgress: "visible",
      arrowUpdate: false,
      AllAvlNrPosInDropDownList: [],
      NrPosInDropDownList: [],
      newAllAvlNrPosInDropDownList: [],
      P_length: 0,
      P_width: 0,
      P_length_2: 0,
      P_width_2: 0,
      role: "admin",
      // setCircularProgress: "visible",

      handlecolorA_ED: false,
      handlecolorB_ED: false,
      handlecolorC_ED: false,

      HWeightedSymmetric: false,
      VWeightedSymmetric: false,
      forSingleCanvas: "hidden",
      simulationRunning: false,
      abordSimulation: false,
      simulationSpeed: 0,
      simulationStatus: "",
      simulationComplete: false,
      algo_loaded: false,
      autoGenerateRadioButton: false,
      autoGenerateRadioButtonNEW: false,
      
      exportButtonForDocument: false,
      exportButtonForPallet: false,
      simulationButton: false,
      abortButton: false,
      caseDimensionToggle: false,
      LabelDescriptionToggle: false,
      scale: 1,
      forPDCanvas: "hidden",
      forPDPatilCanvas: "hidden",
      forPDPatilpriyaCanvas: "hidden",
      new_forOne: true,
      new_forTwo: false,
 setPrc_values_check: "false",
      S_set_3rdPrePos_Y: 0,
      S_set_3rdPrePos_Y2: 0,
      S_set_3rdPrePos_X: 0,
      S_set_3rdPrePos_X2: 0,
      S_set_3rdPrePos_Z: 0,
      S_set_3rdPrePos_Z2: 0,
      S_set_2ndPrePos_Y: 0,
      S_set_2ndPrePos_Y2: 0,
      S_set_2ndPrePos_X: 0,
      S_set_2ndPrePos_X2: 0,
      S_set_2ndPrePos_Z: 0,
      S_set_2ndPrePos_Z2: 0,
       valueforzindex: "0",
    };
    this.canvasRefs = [];
    this.touchStartDistance = 0;
    this.sliderRef = React.createRef();
    this.threeDobjBlobs = []
    this.SchemaABC_images = []
    this.PalletSelection = 1;
    this.framesCache = {};
    this.framesCache_DV = {}
    this.currentVarient = [];
    this.duplicateVarientCheck = []
    this.simCasesPositionsForSchemaA = [];
    this.simCasesPositionsForSchemaB = [];
    this.simCasesPositionsForSchemaC = [];
    this.imga = new Image();
    this.expanded_panel;
    this.imga.src = arrowfororigin;
    this.imgcircle = new Image();
    this.imgcircle.src = circleImage;

    this.imgcircle_2 = new Image();
    this.imgcircle_2.src = circle_2;
    this.stopOverRiteCaseImg = true;
    this.frameForPRC = false;
    this.onceCarousalUpdateIndex = true;
    this.enableCarousel = false;
    this.case_number = 0;
    this.casenames = [];
    this.lid = 0;
    this.pallet_No = 1;
    this.layer = 1;
    this.layerName = "";
    this.layerdata = [];
    // this.layerdata1 = [];
    // this.layerdata2 = [];
    this.casedata = [];
    this.casedataA1 = [];
    this.casedataB1 = [];
    this.casedataC1 = [];
    this.casedataA2 = [];
    this.casedataB2 = [];
    this.casedataC2 = [];
    this.A = true;
    this.B = false;
    this.C = false;
    this.col1 = true;
    this.col2 = false;
    this.palletid = 0;
    this.palletname = "";
    this.pallets = [];
    this.originPal1 = "";
    this.originPal2 = "";
    this.firstcase_pal1 = "";
    this.firstcase_pal2 = "";
    this.WA_1_width_X_Dir = 0;
    this.WA_1_Length_Y_Dir = 0;
    this.WA_1_Height_Z_Dir = 0;
    this.WA_1_Offset_X_Dir = 0;
    this.WA_1_Offset_Y_Dir = 0;
    this.WA_2_width_X_Dir = 0;
    this.WA_2_Length_Y_Dir = 0;
    this.WA_2_Height_Z_Dir = 0;
    this.WA_2_Offset_X_Dir = 0;
    this.WA_2_Offset_Y_Dir = 0;

    this.palletType1 = "";
    this.intermediateLayerType1 = 1;
    // this.int_Layer1 = false;
    // this.caseType1 = "";
    this.outside_Label_Priority = "";

    // this.outside_Label_Priority1 = "";
    // this.outside_Label_Priority2 = "";
    this.noOfLayers = 0;
    // this.noOfLayers1 = 0;
    this.cases_Schema_A1 = 0;
    this.cases_Schema_B1 = 0;
    this.cases_Schema_C1 = 0;
    // this.setVariantName_SchemaA1 = '';
    // this.setVariantName_SchemaB1 = '';
    // this.setVariantName_SchemaC1 = '';

    this.palletType2 = "";
    this.intermediateLayerType2 = 1;
    // this.int_Layer2 = false;
    // this.caseType2 = "";
    // this.noOfLayers2 = 0;
    this.cases_Schema_A2 = 0;
    this.cases_Schema_B2 = 0;
    this.cases_Schema_C2 = 0;
    // this.setVariantName_SchemaA2 = '';
    // this.setVariantName_SchemaB2 = '';
    // this.setVariantName_SchemaC2 = '';
    this.drawCaseImage = true;

    this.palletType = "";
    this.intermediateLayerType = "";
    this.caseType = "";
    this.noOfLayers = 0;
    this.lid = 0;
    this.layer_name = "";
    this.layer_sequence = 0;
    this.intermediate_layer = false;
    this.int_Layer = false;
    // this.int_Layer1 = false;
    // this.int_Layer2 = false;
    this.cases_Schema_A = 0;
    this.cases_Schema_B = 0;
    this.cases_Schema_C = 0;
    this.prenumberx = false;
    this.prenumbery = false;
    this.prenumberz = false;
    this.OffsetXneg = false;
    this.OffsetYneg = false;
    this.checked = false;
    this.PrePosX = 0;
    this.PrePosY = 0;
    this.PrePosZ = 0;
    this.dropdown = false;
    // this.outside_Label_Priority = "";
    this.ruleSymetricMassDistribution = false,
      this.setVariantName_SchemaA = "",
      this.setVariantName_SchemaB = "",
      this.setVariantName_SchemaC = "",
      this.layerdataupdated = true,
      this.enablefor1 = true;
    this.enablefor2 = false;
    this.prcid = 0,
      this.schema = "",
      this.caseName = "",
      this.Offset_X_Neg = false,
      this.Offset_Y_Neg = false,
      this.preposx = 0,
      this.preposy = 0,
      this.preposz = 0,
      this.Position = "",
      this.Position_freezed = false,
      this.Pre_Pos_X = "",
      this.Pre_Pos_Y = "",
      this.Pre_Pos_Z = "",
      this.Auto_Generation = false,
      this.autoGenerateCasePositions = [],
      this.autoGenerateCasePositionsDistance = [],
      this.dyMarginTop_swiperText,
      this.backgroundColor,
      this.dyMarginLeft_swiperText,
      this.dyMarginBottom_swiperText,
      this.typeoptions = ["Upper Right Corner", "Upper Left Corner", "Lower Left Corner", "Lower Right Corner"];


    this.UpdateNr = [];
    this.typeoptions1 = [
      "US 1: 1219 x 1016 ",
      "US 2: 1067 x 1067",
      "EU 1: 1200 x 800",
      "EU 2: 1200 x 1000",
      "EU 6: 800 x 600",
      "AU 1: 1165 x 1165",
      "ASIA 1: 1100 x 1100",
    ];

    this.typeoptions2 = [
      "1119 x 916 x 1mm",
      "1119 x 916 x 2mm",
      "1119 x 916 x 3mm",
      "1119 x 916 x 4mm",
      "1119 x 916 x 5mm",
      "1119 x 916 x 6mm",
      "1119 x 916 x 7mm",
      "1119 x 916 x 8mm",
      "1119 x 916 x 9mm",
      "1119 x 916 x 10mm",
    ];


    this.typeoptions3 = [];
    this.listForOutsideLabelPrior = [];

    this.listForLabel = [];
    this.listForLabel1 = [];
    this.listForLabel2 = [];
    this.tempLabelindex = 0;

    this.typeoptions4 = [
      "Front",
      "Back",
      "Right",
      "Left",
      "Top-Front",
      "Top-Back",
      "Top-Right",
      "Top-Left",
      "Front-Right",
      "Right-Back",
      "Front-Left",
      "Left-Back",
      "Top"]

    this.typeoptions5 = [];

    this.typeoptions6 = ["Schema A", "Schema B", "Schema C"];
    this.typeoptions7 = ["Schema A", "Schema B"];
    this.typeoptions8 = ["Schema A", "Schema B"];
    this.typeoptions9 = ["Schema A", "Schema B"];
    this.typeoptions10 = ["Schema A", "Schema B"];
    this.typeoptionsn = ["Nr.1", "Nr.2", "Nr.3", "Nr.4", "Nr.5", "Nr.6", "Nr.7", "Nr.8", "Nr.9", "Nr.10"];
    // this.typeoptions11 = [];
    this.renderer = new THREE.WebGLRenderer();
    this.delay = this.delay.bind(this);
    //this.QuadGeometry = this.QuadGeometry.bind(this);
    this.draw = this.draw.bind(this);
    this.outsideInitialPriority = this.outsideInitialPriority.bind(this);

    // this.Cal_No_Of_Varients = this.Cal_No_Of_Varients.bind(this);
    // this.Display_Variants = this.Display_Variants.bind(this);

    this.handleBack = this.handleBack.bind(this);
    this.drawPallet_1_2 = this.drawPallet_1_2.bind(this);
    this.callSchema = this.callSchema.bind(this);
    this.callSchema1 = this.callSchema1.bind(this);
    this.callPallet = this.callPallet.bind(this);
    this.drawLargeRectInitially = this.drawLargeRectInitially.bind(this);
    this.drawRect = this.drawRect.bind(this);
    this.drawFillRect = this.drawFillRect.bind(this);
    // this.changeLayer = this.changeLayer.bind(this);
    // this.onchangeLayerBlur = this.onchangeLayerBlur.bind(this);

    this.getPRC = this.getPRC.bind(this);
    this.getPrc1 = this.getPrc1.bind(this);
    this.OffsetChangePrc = this.OffsetChangePrc.bind(this);

    this.initCases = this.initCases.bind(this);
    this.splitForOutSideLabelPriority = this.splitForOutSideLabelPriority.bind(this);
    this.getAllLabels = this.getAllLabels.bind(this);
    this.splitCaseType = this.splitCaseType.bind(this);
    this.downloadFilePallet = this.downloadFilePallet.bind(this)
    this.getPallets = this.getPallets.bind(this);

    this.map = this.map.bind(this);
    this.handleSelection_SchemaA = this.handleSelection_SchemaA.bind(this);
    this.handleSelection_SchemaB = this.handleSelection_SchemaB.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    // this.handleSelection1 = this.handleSelection1.bind(this);
    this.handleSelectionOriginPallet = this.handleSelectionOriginPallet.bind(this);
    // this.handleChangeForCasesSchemaA = this.handleChangeForCasesSchemaA.bind(this);
    // this.handleChangeForCasesSchemaB = this.handleChangeForCasesSchemaB.bind(this);
    // this.handleChangeForCasesSchemaC = this.handleChangeForCasesSchemaC.bind(this);
    // this.updateIntermidateList = this.updateIntermidateList.bind(this);
    this.getPallet = this.getPallet.bind(this);
    // this.handleSelectionLayerPallet = this.handleSelectionLayerPallet.bind(this);
    this.updatePallet = this.updatePallet.bind(this);
    this.layerGrid = this.layerGrid.bind(this);
    this.getdropdown = this.getdropdown.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
    this.updateSelectionPal1 = this.updateSelectionPal1.bind(this);
    // this.updateSelectionPal2 = this.updateSelectionPal2.bind(this);
    // this.updateSelectionCase1 = this.updateSelectionCase1.bind(this);
    // this.updateSelectionCase2 = this.updateSelectionCase2.bind(this);

    this.updateSelection1 = this.updateSelection1.bind(this);
    // this.updateSelectionForCases = this.updateSelectionForCases.bind(this);
    // this.updateSelection2 = this.updateSelection2.bind(this);
    // this.updateSelection3 = this.updateSelection3.bind(this);
    this.updateSelectionSchemaA = this.updateSelectionSchemaA.bind(this);
    this.updateSelectionSchemaB = this.updateSelectionSchemaB.bind(this);
    this.updateSelectionSchemaC = this.updateSelectionSchemaC.bind(this);
    this.handleSelection_intermediateLayer = this.handleSelection_intermediateLayer.bind(this);
    this.handleChangepanel = this.handleChangepanel.bind(this);
    this.callSchemafor1 = this.callSchemafor1.bind(this);
    this.callSchemafor2 = this.callSchemafor2.bind(this);
     this.handlenumoncase = this.handlenumoncase.bind(this);
    this.handlecolorA = this.handlecolorA.bind(this);
    this.handlecolorB = this.handlecolorB.bind(this);
    this.handlecolorC = this.handlecolorC.bind(this);
    this.UpadateNrPRC = this.UpadateNrPRC.bind(this);
    this.handleClickOutsideSlider = this.handleClickOutsideSlider.bind(this);

    this.getLayer = this.getLayer.bind(this);
    this.createVariants = this.createVariants.bind(this);
    this.saveVariantImages = this.saveVariantImages.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
    this.handleCarouselUpdate = this.handleCarouselUpdate.bind(this);
    this.handleCarousel1Update = this.handleCarousel1Update.bind(this);
    // this.handleSelectionIntLayer = this.handleSelectionIntLayer.bind(this);
    // this.workAreaFor_pattern = this.workAreaFor_pattern.bind(this);
    this.callSchemaDropdown = this.callSchemaDropdown.bind(this);

    // this.onvaluechangepreposX = this.onvaluechangepreposX.bind(this);
    this.onvaluechangepreposY = this.onvaluechangepreposY.bind(this);
    this.onvaluechangepreposZ = this.onvaluechangepreposZ.bind(this);

    this.onChange_2ndPrePos = this.onChange_2ndPrePos.bind(this);
    this.onChange_3rdPrePos = this.onChange_3rdPrePos.bind(this);

    this.handleSelectedXneg = this.handleSelectedXneg.bind(this);
    // this.callBlurPreposXPRC = this.callBlurPreposXPRC.bind(this);
    // this.callBlurPreposYPRC = this.callBlurPreposYPRC.bind(this);
    // this.callBlurPreposZPRC = this.callBlurPreposZPRC.bind(this);

    // this.callBlurPreposX1PRC = this.callBlurPreposX1PRC.bind(this);
    // this.callBlurPreposY1PRC = this.callBlurPreposY1PRC.bind(this);
    // this.callBlurPreposZ1PRC = this.callBlurPreposZ1PRC.bind(this);

    this.handleSelectedYneg = this.handleSelectedYneg.bind(this);
    this.drawGreenRect = this.drawGreenRect.bind(this);
    this.drawOrangeRect = this.drawOrangeRect.bind(this);
    this.drawRedRect = this.drawRedRect.bind(this);
    this.drawFillRect1 = this.drawFillRect1.bind(this);
    this.getSortOrder = this.getSortOrder.bind(this);
    this.handlecolor1 = this.handlecolor1.bind(this);
    this.handlecolor2 = this.handlecolor2.bind(this);
    this.valuechangePreposY = this.valuechangePreposY.bind(this);
    this.valuechangePreposZ = this.valuechangePreposZ.bind(this);
    this.assign_casetype = this.assign_casetype.bind(this);
    this.updatefor_Basiparameter_working_Area = this.updatefor_Basiparameter_working_Area.bind(this);
    this.getCallLabel = this.getCallLabel.bind(this);
    this.arrow = this.arrow.bind(this);
    this.arrow_updates = this.arrow_updates.bind(this);

    // this.callBlurFor_WorkingareaX = this.callBlurFor_WorkingareaX.bind(this);
    // this.callBlurFor_WorkingareaY = this.callBlurFor_WorkingareaY.bind(this);
    // this.callBlurFor_WorkingareaoffsetX = this.callBlurFor_WorkingareaoffsetX.bind(this);
    // this.callBlurFor_WorkingareaoffsetY = this.callBlurFor_WorkingareaoffsetY.bind(this);
    this.handleValueChangePrepos = this.handleValueChangePrepos.bind(this);
    this.handleAutoGeneratePrepos = this.handleAutoGeneratePrepos.bind(this);
    this.handleAutoGeneratePreposNEW = this.handleAutoGeneratePreposNEW.bind(this);
    // this.callBlurFor_Workingareafor2X = this.callBlurFor_Workingareafor2X.bind(this);
    // this.callBlurFor_Workingareafor2Y = this.callBlurFor_Workingareafor2Y.bind(this);
    // this.callBlurFor_WorkingareaoffsetXfor2 = this.callBlurFor_WorkingareaoffsetXfor2.bind(this);
    // this.callBlurFor_WorkingareaoffsetYfor2 = this.callBlurFor_WorkingareaoffsetYfor2.bind(this);
    this.drawRect_CaseImage = this.drawRect_CaseImage.bind(this);
    this.drawFillRect_CaseImage = this.drawFillRect_CaseImage.bind(this);
    this.casesSchemaPrcUpdate = this.casesSchemaPrcUpdate.bind(this);
    this.casesSchemaPrc = this.casesSchemaPrc.bind(this);
    this.setintermediate_Layer_Type = this.setintermediate_Layer_Type.bind(this);
    this.setS_errorHelperForInterWidth = this.setS_errorHelperForInterWidth.bind(this);
    this.setS_errorHelperForInterLength = this.setS_errorHelperForInterLength.bind(this);
    this.setS_errorNumberOfInterWidth = this.setS_errorNumberOfInterWidth.bind(this);
    this.setS_errorNumberOfInterLength = this.setS_errorNumberOfInterLength.bind(this);
    this.setS_intermediate_Layer_Width = this.setS_intermediate_Layer_Width.bind(this);
    this.setS_intermediate_Layer_Length = this.setS_intermediate_Layer_Length.bind(this);


    this.Possible_Frames = this.Possible_Frames.bind(this);
    this.Possible_Origins = this.Possible_Origins.bind(this);
    this.reqCombinationForPallet_N_Origin = this.reqCombinationForPallet_N_Origin.bind(this);
    this.generateFrames = this.generateFrames.bind(this);
    this.createVariantsForPRC = this.createVariantsForPRC.bind(this);

    this.arrowimageBotom = this.arrowimageBotom.bind(this);
    this.arrowfor_panel5 = this.arrowfor_panel5.bind(this);
    this.circle = this.circle.bind(this);
    this.circleForOne = this.circleForOne.bind(this);
    this.setWA_1_width_X_Dir = this.setWA_1_width_X_Dir.bind(this)
    this.setErrorWorkingaraeaWidth = this.setErrorWorkingaraeaWidth.bind(this)
    this.setErrorHelperForWorkingareaWidth1 = this.setErrorHelperForWorkingareaWidth1.bind(this)

    this.set_WA_1_Length_Y_Dir = this.set_WA_1_Length_Y_Dir.bind(this)
    this.setErrorWorkingaraeaLength = this.setErrorWorkingaraeaLength.bind(this)
    this.setErrorHelperForWorkingareaLength1 = this.setErrorHelperForWorkingareaLength1.bind(this)

    this.set_WA_1_Height_Z_Dir = this.set_WA_1_Height_Z_Dir.bind(this)
    this.set_WA_2_Height_Z_Dir = this.set_WA_2_Height_Z_Dir.bind(this)
    this.setErrorWorkingaraeaHeight = this.setErrorWorkingaraeaHeight.bind(this)
    this.setErrorHelperForWorkingareaHeight1 = this.setErrorHelperForWorkingareaHeight1.bind(this)
    // For Carousel Button
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);

    // For Pallet Zoom
    this.arrowOfXY_LayerCreator = this.arrowOfXY_LayerCreator.bind(this);
    this.zoomInPallet_LayerCreator = this.zoomInPallet_LayerCreator.bind(this);

    this.swiper = null;
    this.originPal1 = "";
    this.originPal2 = "";
    this.Pallet_Width = 800;
    this.Case_No = 0;
    this.Case_NoForJson = 0;
    // this.tempJsonToPush = {};
    this.Case_EndPositions = [];
    this.toJsonVarientArray = [];  // used for vatient PRC json
    this.selectedVar = "";
    this.freesedCaseCount = -1;
    this.freezNRarray = [];

    this.Pallet_Length = 1200;

    this.Case_Width = 200;

    this.Case_Length = 300;

    this.XPos = 0;

    this.YPos = 0;
    this.checkClicked = false;
    this.HWeighted1 = false;
    this.VWeighted1 = false;
    this.HWeighted2 = false;
    this.VWeighted2 = false;

    this.HWeighted = this.HWeighted1;
    this.VWeighted = this.VWeighted1;

    this.CasesSchemaA = 0;
    this.CasesSchemaB = 0;
    this.CasesSchemaC = 0;
    this.getdropdown();
    this.initCases();

    this.emailid = "xyz@gmail.com";
    this.username = "PeterPan";
    this.usergroup = "service";
    this.role = "regular";
    this.lcid = "1030";
    var auth = "xyz@gmail.com:guest";
    this.getAuthInfo();

    this.getPallet(1);
    this.getPallet(2);
    this.forOneTime = true;
    this.mass_distribution;
    this.iterate = 0;
    this.iterate1 = 0;

    this.colorA = '#5eb8b3';
    this.colorB = '';
    this.colorC = '';

    this.setpreposx = 0;
    this.setpreposy = 0;
    this.setpreposz = 0;
    this.offsetXneg = false;
    this.offsetYneg = false;

    this.colorfor1;
    this.colorfor2;
    this.arcX;
    this.arcY;

    this.arcX2;
    this.arcY2;
    this.actual_X = 185;
    this.actual_Y = 265;
    this.imgForCase;

    this.Xvalue = 300;
    this.Yvalue = 60;
    this.setRectPosX = 10;
    this.setRectPosY = 10;
    this.setRectPosZ = 10;
    this.Xmaxworkarea = 100;
    this.store_selected;
    this.Ymaxworkarea = 100

    this.maxpalletewidth = 200;
    this.maxpalletelength = 280;

    this.globalScalex = 0;
    this.globalScaley = 0;
    this.globalScalez = 0;
    this.globalScalex2 = 0;
    this.globalScaley2 = 0;
    this.globalScalez2 = 0;
    this.state.setnumberx = this.globalScalex;
    // console.log(".................... " + this.state.setnumberx);
    this.state.setnumbery = this.globalScaley;
    this.state.setnumberz = this.globalScaley;
    this.state.setnumberx2 = this.globalScalex2;
    this.state.setnumbery2 = this.globalScaley2;
    this.state.setnumberz2 = this.globalScaley2;


    this.globalScale_pre_Pos_X = 0,
      this.globalScale_pre_Pos_Y = 0,
      this.globalScale_pre_Pos_Z = 0,

      this.state.pre_Pos_X = this.globalScale_pre_Pos_X;
    this.state.pre_Pos_Y = this.globalScale_pre_Pos_Y;
    this.state.pre_Pos_Z = this.globalScale_pre_Pos_Z;

    this.linea = 490;
    this.lineb = 130;
    this.linea1 = 490;
    this.lineb1 = 70;
    this.linea2 = 560;
    this.lineb2 = 70;

    // head down
    this.arrowheaddowna = 480;
    this.arrowheaddownb = 117;
    this.arrowheaddowna1 = 490;
    this.arrowheaddownb1 = 137;
    this.arrowheaddowna2 = 500;
    this.arrowheaddownb2 = 117;



    // head up
    this.arrowheadupa = 540;
    this.arrowheadupb = 60;
    this.arrowheadupa1 = 560;
    this.arrowheadupb1 = 70;
    this.arrowheadupa2 = 540;
    this.arrowheadupb2 = 80;

    this.p_xpos = 350.85;
    this.p_ypos = 112;
    this.P_width1 = 107.14;
    this.P_length1 = 142

    this.P_width2 = 178.57;
    this.P_length2 = 214.28;
    this.p_xpos2 = 333;
    this.p_ypos2 = 112;

    this.UpperRightarrowx_pos;
    this.UpperRightarrowy_pos;

    this.upperLeftarrowx_pos;
    this.UpperLeftarrowy_pos;

    this.LowerLeftarrowx_pos;
    this.LowerLeftarrowy_pos;

    this.LowerRightarrowx_pos;
    this.LowerRightarrowy_pos;

    this.ctxCase;
    this.ctx;
    this.ctx_forSingle;
    this.ctx_forPRC;
    this.ctx_forPRCOuterRect;
    this.ctx_PatternWizard;
    this.ctx_LayerCreator;
    this.ctx_PDCanvas;
    this.ctx_PDPatilCanvas;
    this.ctx_PDPatilpriyaCanvas;

    this.myRef_forPRC = React.createRef();
    this.myRef_forPRCOuterRect = React.createRef();
    this.myRef_for_PatternWizard = React.createRef();
    this.myRef_for_LayerCreator = React.createRef();
    this.myRef_forSingleCanvas = React.createRef();
    this.myRef_forPDCanvas = React.createRef();
    this.myRef_forPDPatilCanvas = React.createRef();
    this.myRef_forPDPatilpriyaCanvas = React.createRef();
    this.myRef = React.createRef();
    this.myRef_GR = React.createRef();
    this.selectedPieceIndex = null;
    this.dragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
     this.myRef_OR = React.createRef();
    this.myRef_RD = React.createRef();
    this.myRefCase = React.createRef();
    this.myRef_GRCaseFreez = React.createRef();
    this.swiperRef = React.createRef();
    this.imageSrc_array = [];
    this.imageSrc_arrayA = [];
    this.imageSrc_arrayB = [];
    this.imageSrc_arrayC = [];
    this.CasesImageSrc_array = [];
    this.variantName_array = [];
    this.variantName_arrayA = [];
    this.variantName_arrayB = [];
    this.variantName_arrayC = [];
    this.realIndexForA;
    this.realIndexForB;
    this.realIndexForC;
    this.downloadLink = React.createRef();
    this.downloadLinkCase = React.createRef();

    // this.typeoptions5 = [];
    // this.Cal_No_Of_Varients(this.Pallet_Length, this.Pallet_Width, this.Case_Width, this.Case_Length);

    this.preposx = 0;
    this.preposy = 0;
    this.preposz = 0;
    this.checked_offsetXneg = false;
    this.checked_offsetYneg = false;
    this.checked_position_freezed = false;
    this.tempVarForSimFaild = 0;
    // this.updateSelection();


    this.secondPrePos_X = 0;
    this.secondPrePos_Y = 0;
    this.secondPrePos_Z = 0;

    this.thirdPrePos_X = 0;
    this.thirdPrePos_Y = 0;
    this.thirdPrePos_Z = 0;

    this.offset_2ndPrePos_X = 0,
      this.offset_2ndPrePos_Y = 0,
      this.offset_2ndPrePos_Z = 0,

      this.offset_3rdPrePos_X = 0,
      this.offset_3rdPrePos_Y = 0,
      this.offset_3rdPrePos_Z = 0

  };

  setDownloadablePDF = (value) => {
    this.state.downloadablePDF = value;
    this.setState({
      downloadablePDF: value
    })
  }

  setWA_1_width_X_Dir = (WA_1_width_X_Dir) => {
    this.WA_1_width_X_Dir = WA_1_width_X_Dir;
    this.state.WA_1_width_X_Dir = WA_1_width_X_Dir;
    this.setState({
      WA_1_width_X_Dir: WA_1_width_X_Dir,
    })
  }
  setErrorWorkingaraeaWidth = (errorWorkingaraeaWidth) => {
    this.state.errorWorkingaraeaWidth = errorWorkingaraeaWidth;
    this.setState({
      errorWorkingaraeaWidth: errorWorkingaraeaWidth,
    })
  }

  setErrorHelperForWorkingareaWidth1 = (errorHelperForWorkingareaWidthVALUE) => {
    this.state.errorHelperForWorkingareaWidth = errorHelperForWorkingareaWidthVALUE;
    this.setState({
      errorHelperForWorkingareaWidth: errorHelperForWorkingareaWidthVALUE,
    })
  }

  //Y
  set_WA_1_Length_Y_Dir = (WA_1_Length_Y_Dir) => {
    this.WA_1_Length_Y_Dir = WA_1_Length_Y_Dir;
    this.state.WA_1_Length_Y_Dir = WA_1_Length_Y_Dir;
    this.setState({
      WA_1_Length_Y_Dir: WA_1_Length_Y_Dir,
    })
  }

  setErrorWorkingaraeaLength = (errorWorkingaraeaLength) => {
    this.state.errorWorkingaraeaLength = errorWorkingaraeaLength;
    this.setState({
      errorWorkingaraeaLength: errorWorkingaraeaLength,
    })
  }


  setErrorHelperForWorkingareaLength1 = (errorHelperForWorkingareaLengthVALUE) => {
    this.state.errorHelperForWorkingareaLength = errorHelperForWorkingareaLengthVALUE;
    this.setState({
      errorHelperForWorkingareaLength: errorHelperForWorkingareaLengthVALUE,
    })
  }


  //Z
  set_WA_1_Height_Z_Dir = (WA_1_Height_Z_Dir) => {
    console.log(WA_1_Height_Z_Dir, "WA_1_Length_Y_Dir line 963")

    this.WA_1_Height_Z_Dir = WA_1_Height_Z_Dir;
    this.state.WA_1_Height_Z_Dir = WA_1_Height_Z_Dir;
    this.setState({
      WA_1_Height_Z_Dir: WA_1_Height_Z_Dir,
    })
  }

  setErrorWorkingaraeaHeight = (errorWorkingaraeaHeight) => {
    console.log(errorWorkingaraeaHeight)

    this.state.errorWorkingaraeaHeight = errorWorkingaraeaHeight;
    this.setState({
      errorWorkingaraeaHeight: errorWorkingaraeaHeight,
    })
  }


  setErrorHelperForWorkingareaHeight1 = (errorHelperForWorkingareaHeightVALUE) => {
    console.log(errorHelperForWorkingareaHeightVALUE)
    this.state.errorHelperForWorkingareaHeight = errorHelperForWorkingareaHeightVALUE;
    this.setState({
      errorHelperForWorkingareaHeight: errorHelperForWorkingareaHeightVALUE,
    })
  }

  ////////////////////////////////////////////

  //offsety
  set_WA_1_Offset_X_Dir = (WA_1_Offset_X_Dir) => {

    this.WA_1_Offset_X_Dir = WA_1_Offset_X_Dir;
    this.state.WA_1_Offset_X_Dir = WA_1_Offset_X_Dir;
    this.setState({
      WA_1_Offset_X_Dir: WA_1_Offset_X_Dir,
    })
  }

  setErrorWorkingaraeaoffsetWidth = (errorWorkingaraeaoffsetWidth) => {
    this.state.errorWorkingaraeaoffsetWidth = errorWorkingaraeaoffsetWidth;
    this.setState({
      errorWorkingaraeaoffsetWidth: errorWorkingaraeaoffsetWidth,
    })
  }

  setErrorHelperForWorkingareaoffsetWidth1 = (errorHelperForWorkingareaoffsetWidthVALUE) => {
    this.state.errorHelperForWorkingareaoffsetWidth = errorHelperForWorkingareaoffsetWidthVALUE;
    this.setState({
      errorHelperForWorkingareaoffsetWidth: errorHelperForWorkingareaoffsetWidthVALUE,
    })
  }

  //offsetY

  set_WA_1_Offset_Y_Dir = (WA_1_Offset_Y_Dir) => {

    this.WA_1_Offset_Y_Dir = WA_1_Offset_Y_Dir;
    this.state.WA_1_Offset_Y_Dir = WA_1_Offset_Y_Dir;
    this.setState({
      WA_1_Offset_Y_Dir: WA_1_Offset_Y_Dir,
    })
  }

  setErrorWorkingaraeaoffsetLength = (errorWorkingaraeaoffsetLength) => {
    this.state.errorWorkingaraeaoffsetLength = errorWorkingaraeaoffsetLength;
    this.setState({
      errorWorkingaraeaoffsetLength: errorWorkingaraeaoffsetLength,
    })
  }

  setErrorHelperForWorkingareaoffsetLenght1 = (errorHelperForWorkingareaoffsetLengthVALUE) => {
    this.state.errorHelperForWorkingareaoffsetLength = errorHelperForWorkingareaoffsetLengthVALUE;
    this.setState({
      errorHelperForWorkingareaoffsetLength: errorHelperForWorkingareaoffsetLengthVALUE,
    })
  }

  //Pallete 2 X

  set_WA_2_width_X_Dir = (WA_2_width_X_Dir) => {
    this.WA_2_width_X_Dir = WA_2_width_X_Dir;
    this.state.WA_2_width_X_Dir = WA_2_width_X_Dir;
    this.setState({
      WA_2_width_X_Dir: WA_2_width_X_Dir,
    })
  }
  getoutsideLabelpriority = () => {
    const id = this.props.match.params.palletid
    axios.get(`/threed/outsideLabelPriority/${id}`)
      .then(response => {
        const outsideLabelPriority = response.data;
        this.setState({
          outsideLabelPriority: outsideLabelPriority
        })
        // Handle the outsideLabelPriority value as needed
      })
      .catch(error => {
        // Handle the error if needed
      });
  }

  setErrorWorkingaraeaWidthfor2 = (errorWorkingaraeaWidthfor2) => {
    this.state.errorWorkingaraeaWidthfor2 = errorWorkingaraeaWidthfor2;
    this.setState({
      errorWorkingaraeaWidthfor2: errorWorkingaraeaWidthfor2,
    })
  }

  setErrorHelperForWorkingareaWidthfor2 = (errorHelperForWorkingareaWidthfor2VALUE) => {
    this.state.errorHelperForWorkingareaWidthfor2 = errorHelperForWorkingareaWidthfor2VALUE;
    this.setState({
      errorHelperForWorkingareaWidthfor2: errorHelperForWorkingareaWidthfor2VALUE,
    })
  }

  //Pallete 2 Y

  set_WA_2_Length_Y_Dir = (WA_2_Length_Y_Dir) => {

    this.WA_2_Length_Y_Dir = WA_2_Length_Y_Dir;
    this.state.WA_2_Length_Y_Dir = WA_2_Length_Y_Dir;
    this.setState({
      WA_2_Length_Y_Dir: WA_2_Length_Y_Dir,
    })
  }

  setErrorWorkingaraeaLengthfor2 = (errorWorkingaraeaLengthfor2) => {
    this.state.errorWorkingaraeaLengthfor2 = errorWorkingaraeaLengthfor2;
    this.setState({
      errorWorkingaraeaLengthfor2: errorWorkingaraeaLengthfor2,
    })
  }

  setErrorHelperForWorkingareaLengthfor2 = (errorHelperForWorkingareaLengthfor2VALUE) => {
    this.state.errorHelperForWorkingareaLengthfor2 = errorHelperForWorkingareaLengthfor2VALUE;
    this.setState({
      errorHelperForWorkingareaLengthfor2: errorHelperForWorkingareaLengthfor2VALUE,
    })
  }

  //Height 2
  set_WA_2_Height_Z_Dir = (WA_2_Height_Z_Dir) => {
    console.log(WA_2_Height_Z_Dir, "WA_2_Length_Y_Dir line 963")

    this.WA_2_Height_Z_Dir = WA_2_Height_Z_Dir;
    this.state.WA_2_Height_Z_Dir = WA_2_Height_Z_Dir;
    this.setState({
      WA_2_Height_Z_Dir: WA_2_Height_Z_Dir,
    })
  }

  setErrorWorkingaraeaHeightfor2 = (errorWorkingaraeaHeightfor2) => {
    console.log(errorWorkingaraeaHeightfor2)

    this.state.errorWorkingaraeaHeightfor2 = errorWorkingaraeaHeightfor2;
    this.setState({
      errorWorkingaraeaHeightfor2: errorWorkingaraeaHeightfor2,
    })
  }

  setErrorHelperForWorkingareaHeightfor2 = (errorHelperForWorkingareaHeightfor2VALUE) => {
    console.log(errorHelperForWorkingareaHeightfor2VALUE)
    this.state.errorHelperForWorkingareaHeightfor2 = errorHelperForWorkingareaHeightfor2VALUE;
    this.setState({
      errorHelperForWorkingareaHeightfor2: errorHelperForWorkingareaHeightfor2VALUE,
    })
  }
  //offsetpallete2 x

  set_WA_2_Offset_X_Dir = (WA_2_Offset_X_Dir) => {

    this.WA_2_Offset_X_Dir = WA_2_Offset_X_Dir;
    this.state.WA_2_Offset_X_Dir = WA_2_Offset_X_Dir;
    this.setState({
      WA_2_Offset_X_Dir: WA_2_Offset_X_Dir,
    })
  }

  setErrorWorkingaraeaoffsetWidthfor2 = (errorWorkingaraeaoffsetWidthfor2) => {
    this.state.errorWorkingaraeaoffsetWidthfor2 = errorWorkingaraeaoffsetWidthfor2;
    this.setState({
      errorWorkingaraeaoffsetWidthfor2: errorWorkingaraeaoffsetWidthfor2,
    })
  }


  setErrorHelperForWorkingareaoffsetWidthfor2 = (errorHelperForWorkingareaoffsetWidthfor2VALUE) => {
    this.state.errorHelperForWorkingareaoffsetWidthfor2 = errorHelperForWorkingareaoffsetWidthfor2VALUE;
    this.setState({
      errorHelperForWorkingareaoffsetWidthfor2: errorHelperForWorkingareaoffsetWidthfor2VALUE,
    })
  }


  set_WA_2_Offset_Y_Dir = (WA_2_Offset_Y_Dir) => {

    this.WA_2_Offset_Y_Dir = WA_2_Offset_Y_Dir;
    this.state.WA_2_Offset_Y_Dir = WA_2_Offset_Y_Dir;
    this.setState({
      WA_2_Offset_Y_Dir: WA_2_Offset_Y_Dir,
    })
  }

  setErrorWorkingaraeaoffsetLengthfor2 = (errorWorkingaraeaoffsetLengthfor2) => {
    this.state.errorWorkingaraeaoffsetLengthfor2 = errorWorkingaraeaoffsetLengthfor2;
    this.setState({
      errorWorkingaraeaoffsetLengthfor2: errorWorkingaraeaoffsetLengthfor2,
    })
  }

  setErrorHelperForWorkingareaoffsetLengthfor2 = (errorHelperForWorkingareaoffsetLengthfor2VALUE) => {
    this.state.errorHelperForWorkingareaoffsetLengthfor2 = errorHelperForWorkingareaoffsetLengthfor2VALUE;
    this.setState({
      errorHelperForWorkingareaoffsetLengthfor2: errorHelperForWorkingareaoffsetLengthfor2VALUE,
    })
  }

  setPallete_Type = (pallete_Type) => {
    this.setState({
      pallete_Type: pallete_Type
    });
  }

  setintermediate_Layer_Type = (intermediate_Layer_Type) => {
    this.intermediateLayerType1 = intermediate_Layer_Type;
    this.intermediateLayerType2 = intermediate_Layer_Type;
    this.state.intermediate_Layer_Type = intermediate_Layer_Type;
    this.Case_Z_Pos = (parseInt(this.Case_Height)) + (parseInt(this.intermediateLayerType1));
    this.setState({
      intermediate_Layer_Type: intermediate_Layer_Type
    });
  }

  setS_errorHelperForInter = (errorHelperForInter) => {
    this.state.errorHelperForInter = errorHelperForInter;
    this.setState({
      errorHelperForInter: errorHelperForInter,
    })
  }

  setS_errorNumberOfInter = (errorNumberOfInter) => {
    this.state.errorNumberOfInter = errorNumberOfInter;
    this.setState({
      errorNumberOfInter: errorNumberOfInter,
    })
  }

  setS_intermediate_Layer_Type = (intermediate_Layer_Type) => {
    this.intermediateLayerType1 = intermediate_Layer_Type;
    this.intermediateLayerType2 = intermediate_Layer_Type;
    this.state.intermediate_Layer_Type = intermediate_Layer_Type;
    this.setState({
      intermediate_Layer_Type: intermediate_Layer_Type,
    })
  }

  setS_errorHelperForInterWidth = (errorHelperForInterWidth) => {
    this.state.errorHelperForInterWidth = errorHelperForInterWidth;
    this.setState({
      errorHelperForInterWidth: errorHelperForInterWidth,
    })
  }
  setS_errorHelperForInterLength = (errorHelperForInterLength) => {
    this.state.errorHelperForInterLength = errorHelperForInterLength;
    this.setState({
      errorHelperForInterLength: errorHelperForInterLength,
    })
  }
  showRedRect = () => {
    conosle.log("hii")
  }
  setS_errorNumberOfInterWidth = (errorNumberOfInterWidth) => {
    this.state.errorNumberOfInterWidth = errorNumberOfInterWidth;
    this.setState({
      errorNumberOfInterWidth: errorNumberOfInterWidth,
    })
  }
  setS_errorNumberOfInterLength = (errorNumberOfInterLength) => {
    this.state.errorNumberOfInterLength = errorNumberOfInterLength;
    this.setState({
      errorNumberOfInterLength: errorNumberOfInterLength,
    })
  }

  setS_intermediate_Layer_Width = (intermediate_Layer_Width) => {
    // this.intermediateLayerType1 = intermediate_Layer_Type;
    // this.intermediateLayerType2 = intermediate_Layer_Type;
    this.state.intermediate_Layer_Width = intermediate_Layer_Width;
    this.setState({
      intermediate_Layer_Width: intermediate_Layer_Width,
    })
  }
  setS_intermediate_Layer_Length = (intermediate_Layer_Length) => {
    // this.intermediateLayerType1 = intermediate_Layer_Type;
    // this.intermediateLayerType2 = intermediate_Layer_Type;
    this.state.intermediate_Layer_Length = intermediate_Layer_Length;
    this.setState({
      intermediate_Layer_Length: intermediate_Layer_Length,
    })
  }

  setSetVariantName_SchemaA = (setVariantName_SchemaA) => {
    this.state.setVariantName_SchemaA = setVariantName_SchemaA;
    this.setState({
      setVariantName_SchemaA: setVariantName_SchemaA,
    })
  }

  setCases_Schema_A = (cases_Schema_A) => {

    this.cases_Schema_A1 = cases_Schema_A;
    this.CasesSchemaA = this.cases_Schema_A1;
    this.cases_Schema_A2 = cases_Schema_A;
    this.CasesSchemaA = this.cases_Schema_A2;

    this.state.cases_Schema_A = cases_Schema_A;
    this.setState({
      cases_Schema_A: cases_Schema_A,
    })
  }

  setSetVariantName_SchemaB = (setVariantName_SchemaB) => {
    this.state.setVariantName_SchemaB = setVariantName_SchemaB;
    this.setState({
      setVariantName_SchemaB: setVariantName_SchemaB,
    })
  }

  setCases_Schema_B = (cases_Schema_B) => {


    this.cases_Schema_B1 = cases_Schema_B;
    this.CasesSchemaB = this.cases_Schema_B1;
    this.cases_Schema_B2 = cases_Schema_B;
    this.CasesSchemaB = this.cases_Schema_B2;

    this.state.cases_Schema_B = cases_Schema_B;
    this.setState({
      cases_Schema_B: cases_Schema_B,
    })
  }

  setS_errorNumberOfLayer = (errorNumberOfLayer) => {
    this.state.errorNumberOfLayer = errorNumberOfLayer;
    this.setState({
      errorNumberOfLayer: errorNumberOfLayer,
    })
  }

  setS_errorHelperForLayer = (errorHelperForLayer) => {
    this.state.errorHelperForLayer = errorHelperForLayer;
    this.setState({
      errorHelperForLayer: errorHelperForLayer,
    })
  }

  setS_layers = (layers) => {
    this.noOfLayers = layers;
    this.state.layers = this.noOfLayers;
    this.state.layers = layers;
    this.setState({
      layers: layers,
    })
  }

  setS_no_Of_Layers = (no_Of_Layers) => {
    this.noOfLayers = no_Of_Layers;
    this.state.no_Of_Layers = no_Of_Layers;
    this.setState({
      no_Of_Layers: no_Of_Layers,
    })
  }

  setS_outside_Label_Priority = (outside_Label_Priority) => {
    this.state.outside_Label_Priority = outside_Label_Priority;
    this.setState({
      outside_Label_Priority: outside_Label_Priority,
    })
  }

  setS_selectedOne = (selectedOne) => {
    this.state.selectedOne = selectedOne;
    this.PalletSelection = selectedOne ? 1 : 2;
    this.setState({
      selectedOne: selectedOne,
    })
  }

  setS_selectedTwo = (selectedTwo) => {
    this.state.selectedTwo = selectedTwo;
    this.PalletSelection = selectedTwo ? 2 : 1;
    this.setState({
      selectedTwo: selectedTwo,
    })
  }

  setS_case_Type = (case_Type) => {
    this.listForOutsideLabelPrior = []
    this.caseType = case_Type
    this.state.case_Type = case_Type;
    this.setState({
      case_Type: case_Type,
    })
  }

  setS_caseTypeSet = (caseTypeSet) => {
    this.state.caseTypeSet = caseTypeSet;
    this.setState({
      caseTypeSet: caseTypeSet,
    })
  }

  setS_setDefaultCase = (setDefaultCase) => {
    this.state.setDefaultCase = setDefaultCase;
    this.setState({
      setDefaultCase: setDefaultCase,
    })
  }

  setS_setVariantName_SchemaC = (setVariantName_SchemaC) => {
    this.state.setVariantName_SchemaC = setVariantName_SchemaC;
    this.setState({
      setVariantName_SchemaC: setVariantName_SchemaC,
    })
  }

  setS_cases_Schema_C = (cases_Schema_C) => {

    this.cases_Schema_C1 = cases_Schema_C;
    this.CasesSchemaC = this.cases_Schema_C1;
    this.cases_Schema_C2 = cases_Schema_C;
    this.CasesSchemaC = this.cases_Schema_C2;

    this.state.cases_Schema_C = cases_Schema_C;
    this.setState({
      cases_Schema_C: cases_Schema_C,
    })
  }

  setS_pallete_Type = (pallete_Type) => {
    this.palletType1 = pallete_Type;
    this.palletType2 = pallete_Type;
    this.state.pallete_Type = pallete_Type;
    this.setState({
      pallete_Type: pallete_Type,
    })
    if(pallete_Type==='EU 6: 800 x 600'){
      this.state.intermediate_Layer_Width="600"
      this.state.intermediate_Layer_Length="800"
    }
    if(pallete_Type==='ASIA 1: 1100 x 1100'){
      this.state.intermediate_Layer_Width="1100"
      this.state.intermediate_Layer_Length="1100"
    }
    if(pallete_Type==='US 2: 1067 x 1067'){
      this.state.intermediate_Layer_Width="1067"
      this.state.intermediate_Layer_Length="1067"
    }
    if (pallete_Type == "US 1: 1219 x 1016 ") {
      this.state.intermediate_Layer_Width="1016"
      this.state.intermediate_Layer_Length="1219"
    }
    if (pallete_Type == "EU 1: 1200 x 800") {
      this.state.intermediate_Layer_Width="800"
      this.state.intermediate_Layer_Length="1200"
    }
    if (pallete_Type == "EU 2: 1200 x 1000") {
      this.state.intermediate_Layer_Width="1000"
      this.state.intermediate_Layer_Length="1200"
    }
    if (pallete_Type == "AU 1: 1165 x 1165") {
      this.state.intermediate_Layer_Width="1165"
      this.state.intermediate_Layer_Length="1165"
    }
    console.log(pallete_Type)
    }


  S1_outside_Label_Priority = (outside_Label_Priority) => {

    this.outside_Label_Priority = outside_Label_Priority;

    this.state.outside_Label_Priority = outside_Label_Priority;
    this.setState({
      outside_Label_Priority: outside_Label_Priority,
    })
  }

  S1_layer_data = (tempLayer_data, G_layerdata) => {

    this.layerdata = G_layerdata;

    this.state.layer_data = tempLayer_data;
    this.setState({
      layer_data: tempLayer_data,
    });
  };
  getPrc1 = async () => {
    const palletid = this.props.match.params.palletid;
    const nasir = await axios.get(`Threed/getPrc/${palletid}`)
    // .then((resp) => {
    // console.log(resp.data);
    const up = nasir.data.filter((name, i) => {
      if (name.position != "") {
        return name
      }
    })
    this.setState({
      khalid: up
    })
    console.log(up, "up")
    nasir.data.map((name, i) => {
      this.setState({
        setnumbery: name.prePos_Y_for_Auto,
        setnumbery2: name.prePos_Y_for_Auto,
        setnumberx: name.prePos_X_for_Auto,
        setnumberx2: name.prePos_X_for_Auto,
        setnumberz: name.prePos_Z_for_Auto,
        setnumberz2: name.prePos_Z_for_Auto
      });
      // this.setState({
      //   setnumberx: name.prePos_X_for_Auto
      // });

      // this.setState({
      //   setnumberz: name.prePos_Z_for_Auto
      // });

    });
    // console.log(this.state.setnumberx)
    // console.log(this.state.setnumbery)
    // console.log(this.state.setnumbez)

  };
  handleManualMoving = (pallet) => {
    if(this.PalletSelection==1|| pallet==1){
      console.log(this.state.manualMoving1, "Before Setting State");
      this.setState({ manualMoving1: !this.state.manualMoving1 }, () => {
        console.log(this.state.manualMoving1, "After Setting State");
      });
    }
    if(this.PalletSelection==2|| pallet==2){
      console.log(this.state.manualMoving2, "Before Setting State");
      this.setState({ manualMoving2: !this.state.manualMoving2 }, () => {
        console.log(this.state.manualMoving2, "After Setting State");
      });
    }
  
  };

  S1_setnumbery = (setnumbery) => {
    // this.state.setnumbery = 0;
    this.setState({
      setnumbery: 0
    });
  }

  S1_setnumbery2 = (setnumbery2) => {
    this.state.setnumbery2 = 0;
    this.setState({
      setnumbery2: 0
    });
  }

  S1_setnumberx = (setnumberx) => {

    // G_setpreposx = event.target.value;

    // G_globalScalex = event.target.value;
    this.state.setnumberx = 0;
    this.setState({
      setnumberx: 0
    });
  }


  S1_setnumberx2 = (setnumberx2) => {
    this.state.setnumberx2 = 0;
    this.setState({
      setnumberx2: 0
    });
  }

  S1_setnumberz = (setnumberz) => {
    this.state.setnumberz = 0;
    this.setState({
      setnumberz: 0
    });
  }

  S1_setnumberz2 = (setnumberz2) => {
    this.state.setnumberz2 = 0;
    this.setState({
      setnumberz2: 0
    });
  }

  S1_NrPosInDropDownList = (temproryNrPosArr) => {
    this.setState({
      NrPosInDropDownList: temproryNrPosArr,
    })
  }

  S1_case_data = (arr) => {
    // this.state.case_data = arr;
    // this.case_data = arr;

    this.setState({
      case_data: arr,
    });
  };

  S2_case_data = (arr) => {
    console.log(arr, "arr")
    // this.state.case_data = arr;
    // this.case_data = arr;

    this.setState({
      case_data: arr
    });
  }


  S1_for_name = (name, event, value, G_globalScalex) => {
    G_globalScalex = event.target.value;


    this.setState({
      [name]: value
    });
  }

  // S1_for_setnumbery = (name,event,value,G_setpreposx) => {
  //   G_setpreposx = event.target.value;

  //   this.setState({
  //     setnumberx: true,
  //   });
  // }

  S1_backgroundColor = (backgroundColor) => {
    console.log("priya S1_backgroundColor..............");
    // this.setState({
    //   backgroundColor: backgroundColor,

    // })

    if (this.state.cases_Schema_A == 0 || this.state.cases_Schema_B == 0 || this.state.cases_Schema_C == 0) {
      this.setState({
        backgroundColor: "#f5f5f5",
      })
      console.log("Inside S1_backgroundColor IF this.state.backgroundColor = ", this.state.backgroundColor);

    }
    else if (this.state.cases_Schema_A !== 0 && this.state.cases_Schema_B !== 0 && this.state.cases_Schema_C !== 0) {
      this.setState({
        backgroundColor: "#239141",
      })
      console.log("Inside S1_backgroundColor ELSE this.state.backgroundColor = ", this.state.backgroundColor);
    }
  }

  S1_pbackgroundColor = (backgroundColor) => {
    if (this.state.setVariantName_SchemaA == "" || this.state.setVariantName_SchemaB == "" || this.state.setVariantName_SchemaB == "") {
      this.setState({
        backgroundColor: "#f5f5f5",
      })
      console.log("Inside S1_pbackgroundColor IF this.state.backgroundColor = ", this.state.backgroundColor);
    }
    else if (this.state.setVariantName_SchemaA !== "" && this.state.setVariantName_SchemaB !== "" && this.state.setVariantName_SchemaB !== "") {
      this.setState({
        backgroundColor: "#239141",
      })
      console.log("Inside S1_pbackgroundColor ELSE this.state.backgroundColor = ", this.state.backgroundColor);
    }
  }

  S1_dyMarginTop_swiperText = (dyMarginTop_swiperText) => {
    // this.dyMarginTop_swiperText = this.state.dyMarginTop_swiperText
    this.setState({
      // dyMarginTop_swiper: '-10px',
      dyMarginTop_swiperText: dyMarginTop_swiperText,
    })

  }
  S1_dyMarginLeft_swiperText = (dyMarginLeft_swiperText) => {
    // this.dyMarginLeft_swiperText = this.state.dyMarginLeft_swiperText

    this.setState({
      // dyMarginTop_swiper: '-10px',
      dyMarginLeft_swiperText: dyMarginLeft_swiperText,
    })

  }

  S1_dyMarginBottom_swiperText = (dyMarginBottom_swiperText) => {
    // this.dyMarginBottom_swiperText = this.state.dyMarginBottom_swiperText

    this.setState({
      // dyMarginTop_swiper: '-10px',
      dyMarginBottom_swiperText: dyMarginBottom_swiperText,
    })

  }
  goNext = () => {
    console.log("going next swiper handler", this.swiper)
    if (this.swiper) this.swiper.slideNext()
  }

  arrowOfXY_LayerCreator = () => {
    this.ctx_PatternWizard.beginPath();
    this.ctx_PatternWizard.lineWidth = 2;
    this.ctx_PatternWizard.drawImage(this.imga, 12, 253, 80, 80);
    this.ctx_PatternWizard.fill();
    this.ctx_PatternWizard.stroke();
  }


  totalSteps = () => {
    return steps.length;
  };

  completedSteps = () => {
    return Object.keys(this.state.completed).length;
  };

  isLastStep = () => {
    return this.state.activeStep === this.totalSteps() - 1;
  };

  allStepsCompleted = () => {
    return this.completedSteps() === this.totalSteps();
  };


  zoomInPallet_LayerCreator = (event, zoomingOperation, newpinchZoomValue) => {

    let newZoomingValue = zoomingOperation == "pinchZooming" ? newpinchZoomValue : event.target.value;
    this.state.mapPinchValue = newZoomingValue;
    this.setState({
      mapPinchValue: newZoomingValue
    })

    //Zoom Canvas 
    // let additionsWidth = parseInt(580, 10) + parseInt(((580 / newZoomingValue) * 600), 10) + "px";
    // let additionsHeight = parseInt(480, 10) + parseInt(((480 / newZoomingValue) * 600), 10) + "px";
    let additionsWidth = `${580 + (((newZoomingValue / 100) * 580) / 9)}px`;
    let additionsHeight = `${480 + (((newZoomingValue / 100) * 480) / 9)}px`;
    let additionsLeft;
    let additionsTop;

    //After Freez the Cases
    let additionsWidthLC = `${791 + (((newZoomingValue / 100) * 791) / 9)}px`;
    let additionsHeightLC = `${372 + (((newZoomingValue / 100) * 372) / 9)}px`;

    let additionsLeftLC;
    let additionsTopLC;

    if (this.state.pallete_Type == "EU 6: 800 x 600") {
      console.log("Inside zoomInPallet_LayerCreator ")

      if (this.outerRect1_ypos > 0 && this.outerRect1_ypos >= 124) {
        console.log("Inside zoomInPallet_LayerCreator if")
        additionsLeft = parseInt(0, 10) - parseInt(newZoomingValue / 2.5, 10) + "px";
        additionsTop = parseInt(25, 10) - parseInt(newZoomingValue / 2.45, 10) + "px";
        additionsLeftLC = parseInt(0, 10) - parseInt(newZoomingValue / 2.5, 10) + "px";
        additionsTopLC = parseInt(25, 10) - parseInt(newZoomingValue / 2.45, 10) + "px";
      }

      else if (this.outerRect1_ypos >= 119.14) {
        console.log("Inside zoomInPallet_LayerCreator else if ")
        additionsLeft = parseInt(0, 10) - parseInt(newZoomingValue / 2.5, 10) + "px";
        additionsTop = parseInt(25, 10) - parseInt(newZoomingValue / 2.45, 10) + "px";
        additionsLeftLC = parseInt(0, 10) - parseInt(newZoomingValue / 2.5, 10) + "px";
        additionsTopLC = parseInt(25, 10) - parseInt(newZoomingValue / 2.45, 10) + "px";
      }

      else {
        console.log("Inside zoomInPallet_LayerCreator else ");
        additionsLeft = parseInt(0, 10) - parseInt(newZoomingValue / 2.5, 10) + "px";
        additionsTop = parseInt(25, 10) - parseInt(newZoomingValue / 4.5, 10) + "px";
        additionsLeftLC = parseInt(0, 10) - parseInt(newZoomingValue / 2.5, 10) + "px";
        additionsTopLC = parseInt(25, 10) - parseInt(newZoomingValue / 4.5, 10) + "px";
      }
    }
    else {
      console.log("Inside zoomInPallet_LayerCreator OutSide else ");
      additionsLeft = parseInt(0, 10) - parseInt(newZoomingValue / 2.5, 10) + "px";
      additionsTop = parseInt(25, 10) - parseInt(newZoomingValue / 4.5, 10) + "px";
      additionsLeftLC = parseInt(0, 10) - parseInt(newZoomingValue / 2.5, 10) + "px";
      additionsTopLC = parseInt(25, 10) - parseInt(newZoomingValue / 4.5, 10) + "px";
    }


    this.setState({
      Margin_Width: additionsWidth,
      Margin_Height: additionsHeight,
      Margin_Left: additionsLeft,
      Margin_Top: additionsTop,

      Margin_LeftLC: additionsLeftLC,
      Margin_TopLC: additionsTopLC,
      Margin_WidthLC: additionsWidthLC,
      Margin_HeightLC: additionsHeightLC
    })
  }

  zoomOutPallet_LayerCreator = () => {

    this.state.Margin_Width = "580px";
    this.state.Margin_Height = "480px";
    this.state.Margin_Left = "20px";
    this.state.Margin_Top = "25px";

    this.setState({
      Margin_Width: "580px",
      Margin_Height: "480px",
      Margin_Left: "0px",
      Margin_Top: "25px",

      Margin_LeftLC: "0px",
      Margin_TopLC: "0px",
      Margin_WidthLC: "0PX",
      Margin_HeightLC: "0PX"

    })
  }
  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }
  initCases = async () => {
    this.casenames = [];

    const records = await this.getAllLabels();
    for (var record of records) {
      // console.log("record.name in PalletDesign= ", record);

      var label_name = record.labelname + "_" + record.typename;
      // console.log("record.labelname inside initCases " + record.labelname)

      var case_name_lbh = record.name + "_" + record.length + "_" + record.height + "_" + record.width;
      // console.log("case_name_lbh inside initCases " + case_name_lbh)

      if ((record.labelname !== "Label0") && (record.length !== null)) {
        if (this.typeoptions3.length == 0) {

          const uniqueCases = Array.from(new Set(this.casenames));
          // console.log("uniqueCases " + uniqueCases);

          var case_name_lbh = record.name + "_" + record.length + "_" + record.height + "_" + record.width;
          // console.log("case_name_lbh " + case_name_lbh)
          // console.log("record.width " + record.width)

          var label_name = record.labelname + "_" + record.typename;
          // console.log("Label name in initcase else condition " + label_name);
          this.listForOutsideLabelPrior.push(label_name);
          // this.listForOutsideLabelPrior1.push(label_name);
          // this.listForOutsideLabelPrior2.push(label_name);

          this.typeoptions3.push(case_name_lbh);
          this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
          // this.outside_Label_Priority1 = this.listForOutsideLabelPrior1[0];
          // this.outside_Label_Priority2 = this.listForOutsideLabelPrior2[0];
        }
        else {
          if (this.casenames.indexOf(record.name) > -1) {
            // console.log("Case name already exists")
          }
          else {

            var case_name_lbh = record.name + "_" + record.length + "_" + record.height + "_" + record.width;
            // console.log("case_name_lbh = " + case_name_lbh)

            const uniqueCases = Array.from(new Set(case_name_lbh));
            // console.log("uniqueCases = " + uniqueCases);
            var label_name = record.labelname + "_" + record.typename;
            // console.log("Label name in initcase else condition " + label_name);
            this.listForOutsideLabelPrior.push(label_name);
            // this.listForOutsideLabelPrior1.push(label_name);
            // this.listForOutsideLabelPrior2.push(label_name);
            //creating array for outsideLabelPrior for drawReact
            try {
              // var split = label_name.split('_', 2);
              var split = label_name.split("_").reverse()
              // console.log("split[0] handleSelection " + split[0] + " split[1] " + split[1]);
              if (this.state.selectedOne) {
                this.listForLabel1 = [];
                this.listForLabel1.push(split[0]);
                // console.log("  this.listForLabel1 " + this.listForLabel1)

              } else if (this.state.selectedTwo) {
                this.listForLabel2 = [];
                this.listForLabel2.push(split[0]);
                // console.log("  this.listForLabel2 " + this.listForLabel2)
              }
              this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
              // this.outside_Label_Priority1 = this.listForOutsideLabelPrior1[0];
              // this.outside_Label_Priority2 = this.listForOutsideLabelPrior2[0];
            }
            catch (e) {
              // console.log("splitError inside initCases " + e);
            }
            if (this.typeoptions3.indexOf(case_name_lbh) > -1) {
              // console.log("Case name already exists")
            }
            else {
              this.typeoptions3.push(case_name_lbh);
            }

          }
        }
      }
    }
    if (this.casenames.length > 0) {
      this.state.selectcase = this.casenames[0];
    }
    // console.log("this.casenames inside initCases = ", this.casenames);
    this.setState({
      casenames: this.casenames
    });
    // console.log("initcases prat ran 1: OLP1: " + this.outside_Label_Priority);
    // console.log("initcases prat ran 1: OLP1: " + this.outside_Label_Priority1);
    // console.log("initcases prat ran 1: OLP2: " + this.outside_Label_Priority2);
  }

  getAuthInfo = async () => {
    let id = 0;
    let auth = "";
    try {
      let resonse = await axios.get(`/Threed/getInfo1`);
      auth = resonse.data;
      // console.log("resonse = ", resonse);
      // console.log("auth = ", auth);
      let authArr = auth.toString().split(':');
      // this.emailid = authArr[0];
      this.username = authArr[0];
      this.role = authArr[1];
      this.usergroup = authArr[2];
      this.lcid = authArr[3];
      const role = this.role;
      // console.log("this.emailid = ", this.emailid);
      // console.log("this.role = ", this.role);
      this.setState({
        role: role
      });
    }
    catch (err) {
      // console.log(err);
    }
  }

  splitForOutSideLabelPriority = () => {
    let outsideLP;
    outsideLP = this.outside_Label_Priority;
    // if (this.state.selectedOne) {
    //   outsideLP = this.outside_Label_Priority1;

    // } else {
    //   outsideLP = this.outside_Label_Priority2;

    // }
    try {
      if (outsideLP) {

        let outSide = outsideLP;
        let split = outSide.split('_', 2);
        this.outsideLabelPrior = split[1];
        // this.state.outside_Label_Priority = outsideLP;
        this.outside_Label_Priority = outsideLP;
        // if (this.state.selectedOne) {
        //   // outsideLP = this.outside_Label_Priority1;
        //   this.outside_Label_Priority1 = outsideLP;

        // } else {
        //   // outsideLP = this.outside_Label_Priority2;
        //   this.outside_Label_Priority2 = outsideLP;

        // }
      }
    }
    catch (e) {
      // console.log("error inside get pallet outside_Label_Priority = " + e)
    }
    // console.log("splitForOutSideLabelPriority prat ran 1: OLP1: " + this.outside_Label_Priority);
    // console.log("splitForOutSideLabelPriority prat ran 1: OLP1: " + this.outside_Label_Priority1);
    // console.log("splitForOutSideLabelPriority prat ran 1: OLP2: " + this.outside_Label_Priority2);
  }

  getAllLabels = async () => {
    let id = 0;
    let records = [];
    try {
      let resonse = await axios.get(`/Threed`);
      records = resonse.data;
      // console.log("getAllLabels records = ", records);
      return records;
    }
    catch (err) {
      // console.log(err);
    }
  }

  updateSelection = (event, name) => {

    this.CasesSchemaA = this.cases_Schema_A1;
    this.CasesSchemaB = this.cases_Schema_B1;
    this.CasesSchemaC = this.cases_Schema_C1;
    this.CasesSchemaA = this.cases_Schema_A2;
    this.CasesSchemaB = this.cases_Schema_B2;
    this.CasesSchemaC = this.cases_Schema_C2;

    this.circle("pal1", this.firstcase_pal1);
    this.circle("pal2", this.firstcase_pal2);
    for (let i = 1; i < 3; i++) {
      this.updatePallet(i);
    }

  };

  //Origin Pal 1
  updateSelectionPal1 = () => {

    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;
    }

    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;
    }
    this.circle("pal1", this.firstcase_pal1);
    this.circle("pal2", this.firstcase_pal2);

    for (let i = 1; i < 3; i++) {
      this.updatePallet(i);
    }
  };



  //Pattern Wizard
  // updateSelectionForCases = () => {

  //   for (let i = 1; i < 3; i++) {
  //     // console.log("Inside updateSelectionForCases For Loop");
  //     this.updatePallet(i);
  //   }
  // };

  //Pallet Type
  updateSelection1 = () => {

    for (let i = 1; i < 3; i++) {
      this.updatePallet(i);
    }
  };

  updateSelectionSchemaA = (event) => {


    if (event.target.value == "") {


      this.cases_Schema_A1 = 0;
      this.cases_Schema_A2 = 0;
      this.state.cases_Schema_A = this.cases_Schema_A1;
      this.state.cases_Schema_A = this.cases_Schema_A2;
      this.setState({
        cases_Schema_A: this.cases_Schema_A1,
        cases_Schema_A: this.cases_Schema_A2,
      });


      // if (this.state.selectedOne) {
      //   this.cases_Schema_A1 = 6;
      //   this.state.cases_Schema_A = this.cases_Schema_A1;
      //   this.setState({
      //     cases_Schema_A: this.cases_Schema_A1,
      //   });

      // }
      // else if (this.state.selectedTwo) {
      //   this.cases_Schema_A2 = 6;
      //   this.state.cases_Schema_A = this.cases_Schema_A2;
      //   this.setState({
      //     cases_Schema_A: this.cases_Schema_A2,
      //   });

      // }
    }


    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;


    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;


    }

    for (let i = 1; i < 3; i++) {
      this.updatePallet(i);
    }
    // console.log("checking for savePrc calling:...updateSelectionschemA ")
    this.savePrc();
  }

  updateSelectionSchemaB = (event) => {

    if (event.target.value == "") {

      this.cases_Schema_B1 = 0;
      this.cases_Schema_B2 = 0;
      this.state.cases_Schema_B = this.cases_Schema_B1;
      this.state.cases_Schema_B = this.cases_Schema_B2;
      this.setState({
        cases_Schema_B: this.cases_Schema_B1,
        cases_Schema_B: this.cases_Schema_B2,
      });



      // if (this.state.selectedOne) {
      //   this.cases_Schema_B1 = 8;
      //   this.setState({
      //     cases_Schema_B: this.cases_Schema_B1,
      //   });
      // }
      // else if (this.state.selectedTwo) {
      //   this.cases_Schema_B2 = 7;
      //   this.setState({
      //     cases_Schema_B: this.cases_Schema_B2,
      //   });
      // }
    }

    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;

    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;

    }
    for (let i = 1; i < 3; i++) {
      this.updatePallet(i);
    }
    // console.log("checking for savePrc calling:...updateSelectionschemB ")
    this.savePrc();
  }

  //Number Cases Schema C
  updateSelectionSchemaC = (event) => {

    if (event.target.value == "") {

      this.cases_Schema_C1 = 0;
      this.cases_Schema_C2 = 0;
      this.state.cases_Schema_C = this.cases_Schema_C1;
      this.state.cases_Schema_C = this.cases_Schema_C2;
      this.setState({
        cases_Schema_C: this.cases_Schema_C1,
        cases_Schema_C: this.cases_Schema_C2,
      });

      // if (this.state.selectedOne) {
      //   this.cases_Schema_C1 = 10;
      //   this.setState({
      //     cases_Schema_C: this.cases_Schema_C1,
      //   });
      // }
      // else if (this.state.selectedTwo) {
      //   this.cases_Schema_C2 = 9;
      //   this.setState({
      //     cases_Schema_C: this.cases_Schema_C2,
      //   });
      // }
    }

    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;
    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;
    }

    for (let i = 1; i < 3; i++) {
      this.updatePallet(i);
    }
    // console.log("checking for savePrc calling:...updateSelectionschemC ")
    this.savePrc();
  }


  getPallet = async (pallet_no) => {
    const palletid = this.props.match.params.palletid;
    let Palletname = "";
    // console.log("palletid inside getPallet = " + palletid);
    // console.log("pallet_no inside getPallet = " + pallet_no);
    let resonse = await axios.get("Threed/getPallet/" + palletid + "/" + pallet_no);
    const palletrecord = resonse.data[0];
    // console.log("pallet inside getPallet = ", palletrecord);
    this.palletid = palletrecord.palletId;
    this.palletname = palletrecord.palletName;
    this.originPal1 = palletrecord.originPal1;
    this.originPal2 = palletrecord.originPal2;
    this.firstcase_pal1 = palletrecord.firstcasepal1;
    this.firstcase_pal2 = palletrecord.firstcasepal2;
    this.WA_1_width_X_Dir = palletrecord.working_area_1_Width_X_Direction;
    this.WA_1_Length_Y_Dir = palletrecord.working_area_1_Length_Y_Direction;
    this.WA_1_Offset_X_Dir = palletrecord.working_area_1_Offset_X_Direction;
    this.WA_1_Offset_Y_Dir = palletrecord.working_area_1_Offset_Y_Direction;
    this.WA_2_width_X_Dir = palletrecord.working_area_2_Width_X_Direction;
    this.WA_2_Length_Y_Dir = palletrecord.working_area_2_Length_Y_Direction;
    this.WA_2_Offset_X_Dir = palletrecord.working_area_2_Offset_X_Direction;
    this.WA_2_Offset_Y_Dir = palletrecord.working_area_2_Offset_Y_Direction;
    this.palletType = palletrecord.palletType;
    this.intermediateLayerType = palletrecord.intermediateLayerType;
    this.int_Layer = palletrecord.intermediate_Layer;
    this.caseType = palletrecord.caseType;
    this.noOfLayers = palletrecord.noOfLayers;
    this.cases_Schema_A = palletrecord.casesSchemaA;
    this.cases_Schema_B = palletrecord.casesSchemaB;
    this.cases_Schema_C = palletrecord.casesSchemaC;

    if (palletrecord.intermediate_Layer) {
      this.int_Layer = palletrecord.intermediate_Layer;
      // if (pallet_no === 1) {
      //   this.int_Layer1 = palletrecord.intermediate_Layer;
      // }
      // else if (pallet_no === 2) {
      //   this.int_Layer2 = palletrecord.intermediate_Layer;
      // }
    }
    else {
      this.int_Layer = true;
      // this.int_Layer1 = true;
      // this.int_Layer2 = true;
    }
    //   
    if (palletrecord.originPal1) {
      this.originPal1 = palletrecord.originPal1;
    }
    else {
      this.originPal1 = "Upper Right Corner";
    }
    //
    if (palletrecord.originPal2) {
      this.originPal2 = palletrecord.originPal2;
      this.handleCarousel1Update();
      // console.log("Inside arrowUpdates getPallet this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
    }
    else {
      this.originPal2 = "Upper Left Corner";
    }
    //
    if (palletrecord.firstcasepal1) {
      this.firstcase_pal1 = palletrecord.firstcasepal1;
    }
    else {
      this.firstcase_pal1 = "Lower Right Corner";
    }
    //
    if (palletrecord.firstcasepal2) {
      this.firstcase_pal2 = palletrecord.firstcasepal2;
    }
    else {
      this.firstcase_pal2 = "Lower Right Corner";
    }
    //
    if (palletrecord.working_area_1_Width_X_Direction) {
      this.WA_1_width_X_Dir = palletrecord.working_area_1_Width_X_Direction;
    }
    else {
      this.WA_1_width_X_Dir = "1400";
    }
    //
    if (palletrecord.working_area_1_Length_Y_Direction) {
      this.WA_1_Length_Y_Dir = palletrecord.working_area_1_Length_Y_Direction;
    }
    else {
      this.WA_1_Length_Y_Dir = "1400";
    }
    //
    if (palletrecord.working_area_1_Offset_X_Direction) {
      this.WA_1_Offset_X_Dir = palletrecord.working_area_1_Offset_X_Direction;
    }
    else {
      this.WA_1_Offset_X_Dir = "0";
    }
    //
    if (palletrecord.working_area_1_Offset_Y_Direction) {
      this.WA_1_Offset_Y_Dir = palletrecord.working_area_1_Offset_Y_Direction;
    }
    else {
      this.WA_1_Offset_Y_Dir = "0";
    }
    //
    if (palletrecord.working_area_2_Width_X_Direction) {
      this.WA_2_width_X_Dir = palletrecord.working_area_2_Width_X_Direction;
    }
    else {
      this.WA_2_width_X_Dir = "1400";
    }
    //
    if (palletrecord.working_area_2_Length_Y_Direction) {
      this.WA_2_Length_Y_Dir = palletrecord.working_area_2_Length_Y_Direction;
    }
    else {
      this.WA_2_Length_Y_Dir = "1400";
    }
    //
    if (palletrecord.working_area_2_Offset_X_Direction) {
      this.WA_2_Offset_X_Dir = palletrecord.working_area_2_Offset_X_Direction;
    }
    else {
      this.WA_2_Offset_X_Dir = "0";
    }
    //
    if (palletrecord.working_area_2_Offset_Y_Direction) {
      this.WA_2_Offset_Y_Dir = palletrecord.working_area_2_Offset_Y_Direction;
    }
    else {
      this.WA_2_Offset_Y_Dir = "0";
    }
    //
    if (palletrecord.palletType) {
      if (pallet_no === 1) {
        this.palletType1 = palletrecord.palletType;
      }
      else if (pallet_no === 2) {
        this.palletType2 = palletrecord.palletType;
      }

    }
    else {
      if (pallet_no === 1) {
        this.palletType1 = "EU 6: 800 x 600";
      }
      else if (pallet_no === 2) {
        this.palletType2 = "EU 6: 800 x 600";
      }

    }
    //
    if (palletrecord.intermediateLayerType) {
      if (pallet_no === 1) {
        this.intermediateLayerType1 = palletrecord.intermediateLayerType;
      }
      else if (pallet_no === 2) {
        this.intermediateLayerType2 = palletrecord.intermediateLayerType;
      }
    }
    else {

      if (pallet_no === 1) {
        var num = "1100 x 700";
        this.Pallet_Length = 800;
        this.Pallet_Width = 600;
        // this.updateIntermidateList(num);
        this.intermediateLayerType1 = 1;
      }
      else if (pallet_no === 2) {
        var num = "1100 x 900";
        this.Pallet_Length = 800;
        this.Pallet_Width = 600;
        // this.updateIntermidateList(num);
        this.intermediateLayerType2 = 1;
      }
    }
    //
    if (palletrecord.caseType) {
      this.caseType = palletrecord.caseType;

    }
    else {
      this.caseType = this.typeoptions3[0];

      this.caseType = this.typeoptions3[0];
      this.splitCaseType(this.caseType);
      if (pallet_no == 1) {
        this.listForOutsideLabelPrior = [];
        // this.listForOutsideLabelPrior1 = [];
        this.getCallLabel(this.caseType, "", pallet_no);

      } else if (pallet_no == 2) {
        this.listForOutsideLabelPrior = [];
        // this.listForOutsideLabelPrior2 = [];
        this.getCallLabel(this.caseType, "", pallet_no);

      }
    }

    //Schema A
    if (palletrecord.casesSchemaA) {
      if (pallet_no === 1) {
        this.cases_Schema_A1 = palletrecord.casesSchemaA;
      }
      else if (pallet_no === 2) {
        this.cases_Schema_A2 = palletrecord.casesSchemaA;
      }
      this.cases_Schema_A = palletrecord.casesSchemaA
    }

    else if (palletrecord.casesSchemaA == 0) {

      this.cases_Schema_A = 0;
      this.cases_Schema_A1 = 0;
      this.cases_Schema_A2 = 0;
    }

    else {
      if (pallet_no === 1) {
        this.cases_Schema_A1 = 0;
      }
      else if (pallet_no === 2) {
        this.cases_Schema_A2 = 0;
      }


    }
    //Schema B
    if (palletrecord.casesSchemaB) {
      if (pallet_no === 1) {
        this.cases_Schema_B1 = palletrecord.casesSchemaB;
      }
      else if (pallet_no === 2) {
        this.cases_Schema_B2 = palletrecord.casesSchemaB;
      }
      this.cases_Schema_B = palletrecord.casesSchemaB
    }

    else if (palletrecord.casesSchemaB == 0) {

      this.cases_Schema_C = 0;
      this.cases_Schema_B1 = 0;
      this.cases_Schema_B2 = 0;
    }

    else {
      if (pallet_no === 1) {
        this.cases_Schema_B1 = 0;
      }
      else if (pallet_no === 2) {
        this.cases_Schema_B2 = 0;
      }

    }
    //Schema C
    if (palletrecord.casesSchemaC) {
      if (pallet_no === 1) {
        this.cases_Schema_C1 = palletrecord.casesSchemaC;
      }
      else if (pallet_no === 2) {
        this.cases_Schema_C2 = palletrecord.casesSchemaC;
      }
      this.cases_Schema_C = palletrecord.casesSchemaC
    }

    else if (palletrecord.casesSchemaC == 0) {

      this.cases_Schema_C = 0;
      this.cases_Schema_C1 = 0;
      this.cases_Schema_C2 = 0;
    }

    else {
      this.cases_Schema_C = 0;
      this.cases_Schema_C1 = 0;
      this.cases_Schema_C2 = 0;
    }

    // console.log("palletrecord.outsideLabelPriority inside getpallet outif== " + palletrecord.outsideLabelPriority);
    if (palletrecord.outsideLabelPriority) {
      this.outside_Label_Priority = palletrecord.outsideLabelPriority;

    }
    else {
      this.outside_Label_Priority = this.listForOutsideLabelPrior[0];

    }

    this.splitForOutSideLabelPriority();

    //
    if (palletrecord.rule_symmetric_mass_distribution) {
      this.ruleSymetricMassDistribution = palletrecord.rule_symmetric_mass_distribution;
    }
    else {
      this.ruleSymetricMassDistribution = false;
    }

    if (palletrecord.horizontal_mass_distribution) {
      if (pallet_no == 1) {
        this.HWeighted1 = palletrecord.horizontal_mass_distribution;

      } else if (pallet_no == 2) {
        this.HWeighted2 = palletrecord.horizontal_mass_distribution;
      }
    }
    else {
      if (pallet_no == 1) {
        this.HWeighted1 = false;

      } else if (pallet_no == 2) {
        this.HWeighted2 = false;
      }
    }

    if (palletrecord.vertical_mass_distribution) {
      if (pallet_no == 1) {
        this.VWeighted1 = palletrecord.vertical_mass_distribution;

      } else if (pallet_no == 2) {
        this.VWeighted2 = palletrecord.vertical_mass_distribution;
      }
    }
    else {
      if (pallet_no == 1) {
        this.VWeighted1 = false;

      } else if (pallet_no == 2) {
        this.VWeighted2 = false;
      }
    }
    //
    if (palletrecord.schemaA) {
      this.setVariantName_SchemaA = palletrecord.schemaA;
      // if (pallet_no === 1) {
      //   this.setVariantName_SchemaA1 = palletrecord.schemaA;
      //   // console.log(" this.setVariantName_SchemaA1 " + this.setVariantName_SchemaA1);

      // }
      // else if (pallet_no === 2) {
      //   this.setVariantName_SchemaA2 = palletrecord.schemaA;
      //   // console.log(" this.setVariantName_SchemaA2 " + this.setVariantName_SchemaA2);

      // }
      // this.setVariantName_SchemaA = palletrecord.schemaA
      // console.log(" this.setVariantName_SchemaA " + this.setVariantName_SchemaA);

    }
    else {
      this.setVariantName_SchemaA = '';
      // if (pallet_no === 1) {
      //   this.setVariantName_SchemaA1 = '';
      // }
      // else if (pallet_no === 2) {
      //   this.setVariantName_SchemaA2 = '';
      // }

    }
    // 
    if (palletrecord.schemaB) {
      this.setVariantName_SchemaB = palletrecord.schemaB;
      // if (pallet_no === 1) {
      //   this.setVariantName_SchemaB1 = palletrecord.schemaB;
      //   // console.log(" this.setVariantName_SchemaB1 " + this.setVariantName_SchemaB1);

      // }
      // else if (pallet_no === 2) {
      //   this.setVariantName_SchemaB2 = palletrecord.schemaB;
      //   // console.log(" this.setVariantName_SchemaB2 " + this.setVariantName_SchemaB2);

      // }
      // this.setVariantName_SchemaB = palletrecord.schemaB
      // console.log(" this.setVariantName_SchemaB " + this.setVariantName_SchemaB);

    }
    else {
      this.setVariantName_SchemaB = '';
      // if (pallet_no === 1) {
      //   this.setVariantName_SchemaB1 = '';
      // }
      // else if (pallet_no === 2) {
      //   this.setVariantName_SchemaB2 = '';
      // }
      // this.setVariantName_SchemaB = '';
      // console.log("var....== " + this.setVariantName_SchemaB);
      // this.setVariantName_SchemaB =  'Var 1';
    }

    if (palletrecord.schemaC) {
      this.setVariantName_SchemaC = palletrecord.schemaC;
      // if (pallet_no === 1) {
      //   this.setVariantName_SchemaC1 = palletrecord.schemaC;
      //   // console.log(" this.setVariantName_SchemaC1 " + this.setVariantName_SchemaC1);

      // }
      // else if (pallet_no === 2) {
      //   this.setVariantName_SchemaC2 = palletrecord.schemaC;
      //   // console.log(" this.pallet_no " + this.pallet_no);

      // }

    }
    else {
      this.setVariantName_SchemaC = '';
      // if (pallet_no === 1) {
      //   this.setVariantName_SchemaC1 = '';
      // }
      // else if (pallet_no === 2) {
      //   this.setVariantName_SchemaC2 = '';
      // }

      // this.setVariantName_SchemaC = '';
    }

    this.pallets.push(palletrecord);
    if (pallet_no === 1) {
      this.handleSelection_intermediateLayer(this.palletType1);
    }
    else if (pallet_no === 2) {
      this.handleSelection_intermediateLayer(this.palletType2);
    }

    if (palletrecord.noOfLayers) {
      this.layerdataupdated = false
      this.noOfLayers = palletrecord.noOfLayers;
      // if (pallet_no === 1) {
      //   this.noOfLayers1 = palletrecord.noOfLayers;
      // }
      // else if (pallet_no === 2) {
      //   this.noOfLayers2 = palletrecord.noOfLayers;
      // }
    }
    else {
      this.noOfLayers = 1;
      // this.noOfLayers1 = 1;
      // this.noOfLayers2 = 1;
      this.layerdataupdated = true;
    }


    let response = await this.getLayer(pallet_no);
    // console.log("layer response inside getPallet " + response);
    let records = [];
    if (response.length > 0) {
      // console.log("layer creator response length inside getPallet if = " + response.length);
      records = response;
      this.layerdata = records;
    }
    else {
      // console.log("layer creator response length inside getPallet else = " + response.length);
      let no_of_layers = 1;

      no_of_layers = this.noOfLayers;
      // no_of_layers = this.noOfLayers1;
      // console.log("no_of_layers conditions if " + no_of_layers);

      for (let p = 0; p < 2; p++) {
        let pallet_no = p + 1;
        let defaultInterLayerType = {
          "l_id": 0,
          "palletid": palletid,
          "pallet_no": pallet_no,
          "layername": "",
          "intermediatelayer": false,
          "layerSequence": 0
        }
        records.push(defaultInterLayerType);
        for (var i = 0; i < no_of_layers; i++)
          records.push({
            "l_id": 0,
            "palletid": palletid,
            "pallet_no": pallet_no,
            "layername": "Schema A",
            "intermediatelayer": false,
            "layerSequence": i + 1
          })


      }
    }
    // Get layers api should be called here.   


    this.layerdata = records;
    this.layerGrid();

    let no_of_cases = [];
    let schema = [];
    if (pallet_no === 1) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;
    }
    else if (pallet_no === 2) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;
    }
    no_of_cases.push(this.CasesSchemaA);
    no_of_cases.push(this.CasesSchemaB);
    no_of_cases.push(this.CasesSchemaC);
    schema.push("Schema A");
    schema.push("Schema B");
    schema.push("Schema C");
    // console.log("no_of_cases inside getPallet array" + no_of_cases);
    // console.log("schema inside getPallet array" + schema);

    let prcResponce = await this.getPRC(pallet_no, schema);
    // console.log("prcResponce response inside getPallet ", prcResponce);
    if (prcResponce[0].length > 0) {
      // console.log("Entering into second time case PRC inside getPallet");
      if (pallet_no === 1) {
        this.casedataA1 = this.sortCaseData(prcResponce[0]);
        this.casedataB1 = this.sortCaseData(prcResponce[1]);
        this.casedataC1 = this.sortCaseData(prcResponce[2]);
      }
      if (pallet_no === 2) {
        this.casedataA2 = this.sortCaseData(prcResponce[0]);
        this.casedataB2 = this.sortCaseData(prcResponce[1]);
        this.casedataC2 = this.sortCaseData(prcResponce[2]);
      }
    }
    else {
      //first time case
      // console.log("casedata creation from getPallet")
      // console.log("Entering into first time case PRC inside getPallet");
      for (var schemaIndex = 0; schemaIndex < no_of_cases.length; schemaIndex++) {
        let records = [];
        // console.log("no_of_cases inside getPallet " + no_of_cases[schemaIndex]);
        // console.log("schema inside getPallet " + schema[schemaIndex]);
        for (var i = 0; i < no_of_cases[schemaIndex]; i++) {
          records.push({
            "prcId": 0,
            "pallet": pallet_no,
            "palletId": palletid,
            "schema": schema[schemaIndex],
            "cases": "Case " + (i + 1),
            "offset_X_neg": this.state.offsetXneg,
            "offset_Y_neg": this.state.offsetYneg,
            "position": "",
            "position_freezed": this.Position_freezed,
            "pre_Pos_X": this.preposx,
            "pre_Pos_Y": this.preposy,
            "pre_Pos_Z": this.preposz,
            "pre_Pos_2X": this.offset_2ndPrePos_X,
            "pre_Pos_2Y": this.offset_2ndPrePos_Y,
            "pre_Pos_2Z": this.offset_2ndPrePos_Z,
            "pre_Pos_3X": this.offset_3rdPrePos_X,
            "pre_Pos_3Y": this.offset_3rdPrePos_Y,
            "pre_Pos_3Z": this.offset_3rdPrePos_Z,
            "auto_generation": this.state.autogenerate,
            "rotation": -1,
            "case_x_position": 0,
            "case_y_position": 0,
            "case_z_position": 0,
          })
        }
        // console.log("updating data caseDataA1 from getpallet:::: ")
        if (pallet_no === 1) {
          if (schemaIndex === 0) {
            this.casedataA1 = [...records];
            // console.log("updating data caseDataA1 from getpallet:::: ")
          }
          else if (schemaIndex === 1) {
            this.casedataB1 = [...records];
          }
          else if (schemaIndex === 2) {
            this.casedataC1 = [...records];
          }
        }
        if (pallet_no === 2) {
          if (schemaIndex === 0) {
            this.casedataA2 = [...records];
          }
          else if (schemaIndex === 1) {
            this.casedataB2 = [...records];
          }
          else if (schemaIndex === 2) {
            this.casedataC2 = [...records];
          }
        }
      }
      if (pallet_no === 1) {
        // console.log("checking for case datachange inside getpallet1:::")
        if (this.state.colorA == '#5eb8b3') {
          this.casedata = [...this.casedataA1];
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedata = [...this.casedataB1];
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedata = [...this.casedataC1];
        }
      }
      else if (pallet_no === 2) {
        // console.log("checking for case datachange inside getpallet2:::")
        if (this.state.colorA == '#5eb8b3') {
          this.casedata = [...this.casedataA2];
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedata = [...this.casedataB2];
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedata = [...this.casedataC2];
        }
      }
      // this.casedata = records;

      // console.log("checking for savePrc calling:...getPallet ")
      this.savePrc();
    } // else complete
    // console.log("this.casedataA1 inside getPallet after = " + this.casedataA1);
    // console.log("this.casedataB1 inside getPallet after = " + this.casedataB1);
    // console.log("this.casedataC1 inside getPallet after = " + this.casedataC1);
    // console.log("this.casedataA2 inside getPallet after = " + this.casedataA2);
    // console.log("this.casedataB2 inside getPallet after = " + this.casedataB2);
    // console.log("this.casedataC2 inside getPallet after = " + this.casedataC2);

    // console.log("getpallet layer_data this.layerdata ", this.layerdata, " this.layerdata.length "
    // , this.layerdata.length, " this.layerdata.length/2 ", this.layerdata.length / 2)
    if (pallet_no === 1) {
      this.setState({
        outside_Label_Priority: this.outside_Label_Priority,
        // outside_Label_Priority1: this.outside_Label_Priority1,
        ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
        HWeighted1: this.HWeighted1,
        VWeighted1: this.VWeighted1,

        palletid: this.palletid,
        palletname: this.palletname,
        originPal1: this.originPal1,
        originPal2: this.originPal2,
        firstcase_pal1: this.firstcase_pal1,
        firstcase_pal2: this.firstcase_pal2,
        WA_1_width_X_Dir: this.WA_1_width_X_Dir,
        WA_1_Length_Y_Dir: this.WA_1_Length_Y_Dir,
        WA_1_Offset_X_Dir: this.WA_1_Offset_X_Dir,
        WA_1_Offset_Y_Dir: this.WA_1_Offset_Y_Dir,
        WA_2_width_X_Dir: this.WA_2_width_X_Dir,
        WA_2_Length_Y_Dir: this.WA_2_Length_Y_Dir,
        WA_2_Offset_X_Dir: this.WA_2_Offset_X_Dir,
        WA_2_Offset_Y_Dir: this.WA_2_Offset_Y_Dir,
        pallete_Type: this.palletType1,
        intermediate_Layer_Type: this.intermediateLayerType1,
        case_Type: this.caseType,
        // case_Type1: this.caseType1,
        no_Of_Layers: this.noOfLayers,
        // no_Of_Layers: this.noOfLayers1,
        cases_Schema_A: this.cases_Schema_A1,
        cases_Schema_B: this.cases_Schema_B1,
        cases_Schema_C: this.cases_Schema_C1,
        setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaA: this.setVariantName_SchemaA1,
        setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaB: this.setVariantName_SchemaB1,
        setVariantName_SchemaC: this.setVariantName_SchemaC,
        // setVariantName_SchemaC: this.setVariantName_SchemaC1,
        layer: this.layer,
        //  layer_data: this.layerdata,
        // layer_data: this.layerdata1,
        case_data: [...this.casedata],
        int_Layer: this.int_Layer,
        // int_Layer: this.int_Layer1,
        layers: this.noOfLayers,
        // layers: this.noOfLayers1,
        layerdataupdated: this.layerdataupdated
      });

      this.HWeighted = this.state.HWeighted1
      this.VWeighted = this.state.VWeighted1

      //
      //
      let tempLayer_data = [];
      for (let i = 0; i < this.layerdata.length; i++) {
        if (this.layerdata[i].pallet_no == 1) {
          tempLayer_data[this.layerdata[i].layerSequence] = this.layerdata[i];
        }
      }
      this.state.layer_data = tempLayer_data;
      // console.log("my layer_data pallet check 1 " + JSON.stringify(tempLayer_data) + "........ " + JSON.stringify(this.layerdata))
      //
      //
      // let half = Math.ceil(this.layerdata.length/2)
      // this.state.layer_data = this.layerdata.slice(0, half);
      // console.log("my layer_data pallet check 1 " + JSON.stringify(this.layerdata.slice(0, half)) + "........ " + JSON.stringify(this.layerdata))
    }
    else if (pallet_no === 2) {
      this.setState({
        outside_Label_Priority: this.outside_Label_Priority,
        // outside_Label_Priority2: this.outside_Label_Priority2,
        ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
        HWeighted2: this.HWeighted2,
        VWeighted2: this.VWeighted2,
        // setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaC: this.setVariantName_SchemaC,
        palletid: this.palletid,
        palletname: this.palletname,
        originPal1: this.originPal1,
        originPal2: this.originPal2,
        firstcase_pal1: this.firstcase_pal1,
        firstcase_pal2: this.firstcase_pal2,
        WA_1_width_X_Dir: this.WA_1_width_X_Dir,
        WA_1_Length_Y_Dir: this.WA_1_Length_Y_Dir,
        WA_1_Offset_X_Dir: this.WA_1_Offset_X_Dir,
        WA_1_Offset_Y_Dir: this.WA_1_Offset_Y_Dir,
        WA_2_width_X_Dir: this.WA_2_width_X_Dir,
        WA_2_Length_Y_Dir: this.WA_2_Length_Y_Dir,
        WA_2_Offset_X_Dir: this.WA_2_Offset_X_Dir,
        WA_2_Offset_Y_Dir: this.WA_2_Offset_Y_Dir,
        pallete_Type: this.palletType2,
        intermediate_Layer_Type: this.intermediateLayerType2,
        case_Type: this.caseType,
        // case_Type2: this.caseType2,
        no_Of_Layers: this.noOfLayers,
        // no_Of_Layers: this.noOfLayers2,
        cases_Schema_A: this.cases_Schema_A2,
        cases_Schema_B: this.cases_Schema_B2,
        cases_Schema_C: this.cases_Schema_C2,
        setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaA: this.setVariantName_SchemaA2,
        setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaB: this.setVariantName_SchemaB2,
        setVariantName_SchemaC: this.setVariantName_SchemaC,
        // setVariantName_SchemaC: this.setVariantName_SchemaC2,
        layer: this.layer,
        //  layer_data: this.layerdata,
        // layer_data: this.layerdata2,
        case_data: [...this.casedata],
        int_Layer: this.int_Layer,
        // int_Layer: this.int_Layer2,
        layers: this.noOfLayers,
        // layers: this.noOfLayers2,
        layerdataupdated: this.layerdataupdated
      });

      this.HWeighted = this.state.HWeighted2
      this.VWeighted = this.state.VWeighted2

    }

    //
    //
    let tempLayer_data = [];
    for (let i = 0; i < this.layerdata.length; i++) {
      if (this.layerdata[i].pallet_no == 1) {
        tempLayer_data[this.layerdata[i].layerSequence] = this.layerdata[i];
      }
    }
    this.state.layer_data = tempLayer_data;
    // console.log("my layer_data pallet check 2 " + JSON.stringify(tempLayer_data) + "........ " + JSON.stringify(this.layerdata))
    //
    //

    // let half = Math.ceil(this.layerdata.length/2)
    // this.state.layer_data = this.layerdata.slice(0, half);
    // console.log("my layer_data pallet check 2 " + JSON.stringify(this.layerdata.slice(0, half)) + "........ " + JSON.stringify(this.layerdata))

    if (pallet_no === 1) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;
      this.splitCaseType(this.caseType);
      // this.forceUpdate(); //
    }
    else if (pallet_no === 2) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;
    }

    // console.log("print state", this.state);
    this.setState({
      pallets: this.pallets
    });
    // this.callSchemafor1();
    this.updatePallet(pallet_no);
    if (pallet_no === 1) {
      // console.log("for pallet 1 ram asasas: ")
      this.listForOutsideLabelPrior = [];
      // this.listForOutsideLabelPrior1 = [];
      this.getCallLabel(this.state.case_Type, "getPallet1", pallet_no);
    } else if (pallet_no === 2) {
      // console.log("for pallet 2 ram asasas: " + this.listForOutsideLabelPrior2)
      this.listForOutsideLabelPrior = [];
      // this.listForOutsideLabelPrior2 = [];
      this.getCallLabel(this.state.case_Type, "getPallet1", pallet_no);
    }
    if (this.state.selectedOne) {
      this.setState({
        setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaA: this.setVariantName_SchemaA1,
        setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaB: this.setVariantName_SchemaB1,
        setVariantName_SchemaC: this.setVariantName_SchemaC,
        // setVariantName_SchemaC: this.setVariantName_SchemaC1,
      });
    }
    else if (this.state.selectedTwo) {
      this.setState({
        setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaA: this.setVariantName_SchemaA2,
        setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaB: this.setVariantName_SchemaB2,
        setVariantName_SchemaC: this.setVariantName_SchemaC,
        // setVariantName_SchemaC: this.setVariantName_SchemaC2,
      });
    }
    // circle Image
    this.ctx.beginPath();
    this.ctx.lineWidth = 2;
    this.ctx.drawImage(this.imgcircle, 120, 76, 70, 70);
    this.ctx.fill();
    this.ctx.stroke();
    this.arrowimageBotom();
    this.arrow();
    // this.circle1();
    this.updateSelectionPal1();
    // this.handleCarousel1Update();
    // this.updateSelectionPal2();


    // console.log("getpallet_end prat ran 1: OLP1: " + this.outside_Label_Priority1 + "  this.listForOutsideLabelPrior1: " + this.listForOutsideLabelPrior1);
    // console.log("getpallet_end prat ran 1: OLP2: " + this.outside_Label_Priority2 + "  this.listForOutsideLabelPrior2: " + this.listForOutsideLabelPrior2);
    this.state.algo_loaded = false;
    // console.log("Inside Panel3 click algo_loaded : 3 ", this.state.algo_loaded);

  };//end of getPallet

  sortCaseData = (data) => {

    let sortedData = new Array(data.length);

    for (let i = 0; i < data.length; i++) {
      let singleCaseName = data[i].cases.split(" ");
      let caseNumber = singleCaseName[1];

      sortedData[caseNumber - 1] = data[i];

    }

    // console.log("my sorted data: " + JSON.stringify(sortedData))
    return sortedData;

  }

  sortLayerData = (data) => {

    let sortedData_pal1 = new Array(data.length / 2);
    let sortedData_pal2 = new Array(data.length / 2);

    for (let i = 0; i < data.length; i++) {
      let layerNo = parseInt(data[i].layerSequence);
      // let caseNumber = singleCaseName[1];
      if (data[i].pallet_no == 1) {
        sortedData_pal1[layerNo] = data[i];
      } else if (data[i].pallet_no == 2) {
        sortedData_pal2[layerNo] = data[i];
      }

    }

    // console.log("my sorted data: " + JSON.stringify(sortedData))
    return sortedData_pal1.concat(sortedData_pal2);

  }

  getPRC = async (pallet_no, schema) => {
    const palletid = this.props.match.params.palletid;
    let resonse = await axios.get(`Threed/getPrc/` + palletid);
    const Prcrecord = resonse.data;
    // console.log("prc records inside getPRC = ", Prcrecord);
    // console.log("prc records inside getPRC = ", JSON.stringify(Prcrecord));
    let schemaArecords = Prcrecord.filter(item => item.pallet === pallet_no && item.schema === schema[0]);
    let schemaBrecords = Prcrecord.filter(item => item.pallet === pallet_no && item.schema === schema[1]);
    let schemaCrecords = Prcrecord.filter(item => item.pallet === pallet_no && item.schema === schema[2]);
    // console.log("schemaArecords inside getPRC =", schemaArecords);
    // console.log("schemaBrecords inside getPRC =", schemaBrecords);
    // console.log("schemaCrecords inside getPRC =", schemaCrecords);
    return [schemaArecords, schemaBrecords, schemaCrecords];
  }

  getLayer = async (pallet_no) => {
    const palletid = this.props.match.params.palletid;
    let response = await axios.get(`Threed/getLayer/` + palletid);
    const layerrecord = response.data;
    console.log(layerrecord, "layerrecord")
    let c = 0
    layerrecord.filter((count) => {
      if (count.intermediatelayer) {
        c++
        this.state.countOfIntermediateLayer = c
        this.setState({
          countOfIntermediateLayer: c
        })
      }
    })
    console.log(this.state.countOfIntermediateLayer)
    // console.log("records inside getLayer = ", JSON.stringify(layerrecord));
    let found = layerrecord.filter(item => item.pallet_no === pallet_no); // not required to filter
    // console.log("pallet_no inside getLayer = " + pallet_no);
    // console.log("found inside getLayer = " + JSON.stringify(found));
    return layerrecord;
  }

  arrowfor_panel5 = () => {

    if ((this.state.colorB == false) || (this.state.colorC == false)) {
      this.state.colorA = true

      // Bottom arrow
      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.lineWidth = 2;
      this.ctx_forPRC.drawImage(this.imga, 10, 280, 80, 80);
      this.ctx_forPRC.fill();
      this.ctx_forPRC.stroke();

    }

    if ((this.state.colorA == false) || (this.state.colorC == false)) {
      this.state.colorB = true;

      // Bottom arrow
      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.lineWidth = 2;
      this.ctx_forPRC.drawImage(this.imga, 10, 280, 80, 80);
      this.ctx_forPRC.fill();
      this.ctx_forPRC.stroke();
    }

    if ((this.state.colorA == false) || (this.state.colorB == false)) {
      this.state.colorC = true;


      // Bottom arrow
      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.lineWidth = 2;
      this.ctx_forPRC.drawImage(this.imga, 10, 280, 80, 80);
      this.ctx_forPRC.fill();
      this.ctx_forPRC.stroke();
    }
  }

  arrowimageBotom = () => {

    // Bottom arrow
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 2;
    this.ctx_forSingle.drawImage(this.imga, 10, 280, 80, 80);
    this.ctx_forSingle.fill();
    this.ctx_forSingle.stroke();
  }
  handlenumoncase = () => {
    this.Case_No = 0;
    if ((this.state.panelname == "panel5")) {
      if (this.state.selectedOne) {
      if (this.firstcase_pal1 == "Upper Left Corner"){
        // const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => (a.y - b.y))      
        const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => {
          if (a.y == b.y) {
            return a.x - b.x;
          } else {
            return a.y - b.y;
          }
        });
        this.state.CasesXYmanualPRC=[...newPosArray];
        console.log("XY For green rect In Upper Left Corner::: i=", "Case XY for ", this.state.CasesXYfotGreenRectPRC, "New Array", newPosArray.length);

        for (let i = 0; i <= newPosArray.length; i++) {
          console.log("Hello")
          if (newPosArray[i] != undefined) {
            let xP = newPosArray[i].x;
            let yP = newPosArray[i].y;
            let wP = newPosArray[i].w;
            let hP = newPosArray[i].h;
            let CaseInfo = { x: xP, y: yP, w: wP, h: hP };
            console.log("CaseInfo inside Upper Right corner::", CaseInfo);
            this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" });
          }
        }
     }else if (this.firstcase_pal1 == "Upper Right Corner") {
      const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => {
        if (a.y == b.y) {
          return b.x - a.x;
        } else {
          return a.y - b.y;
        }
      });
      this.state.CasesXYmanualPRC=[...newPosArray];
      for (let i = 0; i <= newPosArray.length; i++) {
        if (newPosArray[i] != undefined) {
          let xP = newPosArray[i].x;
          let yP = newPosArray[i].y;
          let wP = newPosArray[i].w;
          let hP = newPosArray[i].h;
          let CaseInfo = { x: xP, y: yP, w: wP, h: hP };
          console.log("CaseInfo inside Upper Right corner::", CaseInfo);
          this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" });
        }
      }
    }else if (this.firstcase_pal1 == "Lower Right Corner") {
      const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => {
        if (a.y == b.y) {
          return b.x - a.x;
        } else {
          return b.y - a.y;
        }
      });
      this.state.CasesXYmanualPRC=[...newPosArray];
     for (let i = 0; i <= newPosArray.length; i++) {
           if (newPosArray[i] != undefined) {
          let xP = newPosArray[i].x;
          let yP = newPosArray[i].y;
          let wP = newPosArray[i].w;
          let hP = newPosArray[i].h;
          let CaseInfo = { x: xP, y: yP, w: wP, h: hP };
         this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" });
        }
      }
    }else if (this.firstcase_pal1 == "Lower Left Corner") {
      const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => {
        if (a.y == b.y) {
          return a.x - b.x;
        } else {
          return b.y - a.y;
        }
      });
      this.state.CasesXYmanualPRC=[...newPosArray];
     for (let i = 0; i <= newPosArray.length; i++) {
       if (newPosArray[i] != undefined) {
          let xP = newPosArray[i].x;
          let yP = newPosArray[i].y;
          let wP = newPosArray[i].w;
          let hP = newPosArray[i].h;
          let CaseInfo = { x: xP, y: yP, w: wP, h: hP };
          console.log("CaseInfo inside Upper Right corner::", CaseInfo);
          this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" });
        }
      }
    }
    }
      else if (this.state.selectedTwo) {
        if (this.firstcase_pal2 == "Upper Left Corner") {
          // const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => (a.y - b.y))      
          const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => {
            if (a.y == b.y) {
              return a.x - b.x;
            } else {
              return a.y - b.y;
            }
          });
          this.state.CasesXYmanualPRC = [...newPosArray];
          console.log("XY For green rect In Upper Left Corner::: i=", "Case XY for ", this.state.CasesXYfotGreenRectPRC, "New Array", newPosArray.length);

          for (let i = 0; i <= newPosArray.length; i++) {
            console.log("Hello")
            if (newPosArray[i] != undefined) {
              let xP = newPosArray[i].x;
              let yP = newPosArray[i].y;
              let wP = newPosArray[i].w;
              let hP = newPosArray[i].h;
              let CaseInfo = { x: xP, y: yP, w: wP, h: hP };
              console.log("CaseInfo inside Upper Right corner::", CaseInfo);
              this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" });
            }
          }
        } else if (this.firstcase_pal2 == "Upper Right Corner") {
          const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => {
            if (a.y == b.y) {
              return b.x - a.x;
            } else {
              return a.y - b.y;
            }
          });
          this.state.CasesXYmanualPRC = [...newPosArray];
          for (let i = 0; i <= newPosArray.length; i++) {
            if (newPosArray[i] != undefined) {
              let xP = newPosArray[i].x;
              let yP = newPosArray[i].y;
              let wP = newPosArray[i].w;
              let hP = newPosArray[i].h;
              let CaseInfo = { x: xP, y: yP, w: wP, h: hP };
              console.log("CaseInfo inside Upper Right corner::", CaseInfo);
              this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" });
            }
          }
        } else if (this.firstcase_pal2 == "Lower Right Corner") {
          const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => {
            if (a.y == b.y) {
              return b.x - a.x;
            } else {
              return b.y - a.y;
            }
          });
          this.state.CasesXYmanualPRC = [...newPosArray];
          for (let i = 0; i <= newPosArray.length; i++) {
            if (newPosArray[i] != undefined) {
              let xP = newPosArray[i].x;
              let yP = newPosArray[i].y;
              let wP = newPosArray[i].w;
              let hP = newPosArray[i].h;
              let CaseInfo = { x: xP, y: yP, w: wP, h: hP };
              this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" });
            }
          }
        } else if (this.firstcase_pal2 == "Lower Left Corner") {
          const newPosArray = [...this.state.CasesXYfotGreenRectPRC].sort((a, b) => {
            if (a.y == b.y) {
              return a.x - b.x;
            } else {
              return b.y - a.y;
            }
          });
          this.state.CasesXYmanualPRC = [...newPosArray];
          for (let i = 0; i <= newPosArray.length; i++) {
            if (newPosArray[i] != undefined) {
              let xP = newPosArray[i].x;
              let yP = newPosArray[i].y;
              let wP = newPosArray[i].w;
              let hP = newPosArray[i].h;
              let CaseInfo = { x: xP, y: yP, w: wP, h: hP };
              console.log("CaseInfo inside Upper Right corner::", CaseInfo);
              this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" });
            }
          }
        }
      }

    }
  }
  handlecolorA = (onloadApp) => {

    // if (this.state.panelname === 'panel5') {

    //   if (this.state.selectedOne) {
    //     if (this.casedataA1[0].auto_generation == true) {
    //       this.setState({
    //         autoGenerateRadioButton: true,
    //       })
    //     } else {
    //       this.setState({
    //         autoGenerateRadioButton: false,
    //       })
    //     }
    //     // ((this.casedataA1 && this.casedataA1[this.freesedCaseCount]) ? (this.casedataA1[this.freesedCaseCount].auto_generation == true ? this.state.autoGenerateRadioButton = true : this.state.autoGenerateRadioButton = false) : "")

    //   }
    //   else if (this.state.selectedTwo) {
    //     if (this.casedataA2[0].auto_generation == true) {
    //       this.setState({
    //         autoGenerateRadioButton: true,
    //       })
    //     } else {
    //       this.setState({
    //         autoGenerateRadioButton: false,
    //       })
    //     }
    //     // ((this.casedataA2 && this.casedataA2[this.freesedCaseCount]) ? (this.casedataA2[this.freesedCaseCount].auto_generation == true ? this.state.autoGenerateRadioButton = true : this.state.autoGenerateRadioButton = false) : "")

    //   }
    // }

    this.state.schema = "Schema A";
    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;


    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;


    }
    if ((this.state.colorB = false) || (this.state.colorC = false)) {
      this.state.colorA = true;
      this.A = true;
      this.B = false;
      this.C = false;
    }
    this.setState({
      colorA: '#5eb8b3',
      colorB: 'white',
      colorC: 'white',
      enableCanvasBP: 'hidden'
    })
    this.colorA = '#5eb8b3';
    this.colorB = 'white';
    this.colorC = 'white';
    // console.log('colora' + this.state.colorA)

    if ((this.cases_Schema_B == false) || (this.cases_Schema_C == false)) {
      this.cases_Schema_A = true;
    };

    this.casesSchemaPrc(this.CasesSchemaA);

    if (this.state.panelname === 'panel3' || onloadApp == "loading_App") {
      this.updatelist(this.CasesSchemaA);
      // this.disableAlgoPW(true, "visible");
    }
    else if (this.state.panelname === 'panel5' || this.state.panelname === 'panel4') {
      // console.log("callschemafor1 calling check from handlecolorA:::::", this.colorA, this.colorB, this.colorC)
      this.callSchema1();
      this.setState({
        enableHeaderA: true,
        enableHeaderB: false,
        enableHeaderC: false,
      })
    }
    this.onceCarousalUpdateIndex = false;
    if (onloadApp != "loading_App") {
      if (this.state.setVariantName_SchemaA != undefined || this.state.setVariantName_SchemaA != "") {
        if (this.variantName_array != undefined && this.variantName_array != null && this.variantName_array != []) {
          this.swiperRef?.current.swiper.slideToLoop((this.variantName_array.indexOf(this.state.setVariantName_SchemaA)));
        }

      }
    }


    if (this.state.panelname == "panel3" && this.enableCarousel) { // for auto selection varient based on selected varient in schema A,B,C
      new Promise((resolve, reject) => {
        this.swiperRef?.current?.swiper.slideToLoop(this.variantName_array.length - 2);
        setTimeout(() => {
          this.swiperRef?.current?.swiper.slideNext();
          resolve();
        }, 5)
      }).then(() => {
        this.reOrderingSwiperIndex()

      })

    }

    if ((this.state.panelname == "panel4" || this.state.panelname == "panel5")) {

      if ((this.cases_Schema_A == 1) && this.currentVarient == 0) {
        console.log("this.case_Schema:::A", this.CasesSchemaA, " varient", this.currentVarient);
        let { t } = this.props;
        toast.error(t("pleaseSelectAnotherVarientForSchemaA"), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        this.setState({
          setVariantName_SchemaA: "",
        });
        this.setVariantName_SchemaA = "";
        this.clearingSchemaFields1("Schema-A");

      }

    }
    this.handlenumoncase();

    this.setState({
      canvasOrangeRect: "hidden",
      canvasRedRect: "hidden"
    })
  }

  handlecolorB = () => {

    // if (this.state.panelname === 'panel5') {

    //   if (this.state.selectedOne) {
    //     if (this.casedataB1[0].auto_generation == true) {
    //       this.setState({
    //         autoGenerateRadioButton: true,
    //       })
    //     } else {
    //       this.setState({
    //         autoGenerateRadioButton: false,
    //       })
    //     }
    //     // ((this.casedataB1 && this.casedataB1[this.freesedCaseCount]) ? (this.casedataB1[this.freesedCaseCount].auto_generation == true ? this.state.autoGenerateRadioButton = true : this.state.autoGenerateRadioButton = false) : "")

    //   }
    //   else if (this.state.selectedTwo) {
    //     if (this.casedataB2[0].auto_generation == true) {
    //       this.setState({
    //         autoGenerateRadioButton: true,
    //       })
    //     } else {
    //       this.setState({
    //         autoGenerateRadioButton: false,
    //       })
    //     }
    //     // ((this.casedataB2 && this.casedataB2[this.freesedCaseCount]) ? (this.casedataB2[this.freesedCaseCount].auto_generation == true ? this.state.autoGenerateRadioButton = true : this.state.autoGenerateRadioButton = false) : "")

    //   }
    // }

    this.state.schema = "Schema B";
    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;

    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;

    }
    if ((this.state.colorA = false) || (this.state.colorC = false)) {
      this.state.colorB = true;
      this.B = true;
      this.A = false;
      this.C = false;
    }
    this.setState({
      colorB: '#5eb8b3',
      colorA: 'white',
      colorC: 'white'
    })
    this.colorB = '#5eb8b3';
    this.colorA = 'white';
    this.colorC = 'white';
    if ((this.cases_Schema_A == false) || (this.cases_Schema_C == false)) {
      this.cases_Schema_B = true;
    }

    this.casesSchemaPrc(this.CasesSchemaB);

    // console.log('bbbbb' + this.cases_Schema_B)

    if (this.state.panelname === 'panel3') {
      this.updatelist(this.CasesSchemaB);
      // this.disableAlgoPW(true, "visible");
    }
    else if (this.state.panelname === 'panel5' || this.state.panelname === 'panel4') {
      // console.log("callschemafor1 calling check from handlecolorB:::::", this.colorA, this.colorB, this.colorC)
      this.callSchema1();
      this.setState({
        enableHeaderA: false,
        enableHeaderB: true,
        enableHeaderC: false,
      })
    }
    this.onceCarousalUpdateIndex = false;
    if (this.state.setVariantName_SchemaB != undefined || this.state.setVariantName_SchemaB != "") {
      if (this.variantName_array != undefined && this.variantName_array != null && this.variantName_array != []) {
        this.swiperRef?.current.swiper.slideToLoop((this.variantName_array.indexOf(this.state.setVariantName_SchemaB)));
      }

    }
    this.forceUpdate();

    if (this.state.panelname == "panel3" && this.enableCarousel) { // for auto selection varient based on selected varient in schema A,B,C
      new Promise((resolve, reject) => {
        this.swiperRef?.current?.swiper.slideToLoop(this.variantName_array.length - 2);
        setTimeout(() => {
          this.swiperRef?.current?.swiper.slideNext();
          resolve();
        }, 5)
      }).then(() => {
        this.reOrderingSwiperIndex()

      })

    }
    if ((this.state.panelname == "panel4" || this.state.panelname == "panel5")) {
      console.log("cases_Schema_B ========" + this.cases_Schema_B)
      if ((this.cases_Schema_B == 1) && this.currentVarient == 0) {
        console.log("this.case_Schema:::B", this.CasesSchemaB, " varient", this.currentVarient);
        let { t } = this.props;
        toast.error(t("pleaseSelectAnotherVarientForSchemaB"), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        this.setState({
          setVariantName_SchemaB: "",

        });
        this.setVariantName_SchemaB = "";
        this.clearingSchemaFields1("Schema-B");

      }
    }
    this.setState({
      canvasOrangeRect: "hidden",
      canvasRedRect: "hidden"
    })

    this.handlenumoncase();
  }

  handlecolorC = () => {

    // if (this.state.panelname === 'panel5') {

    //   if (this.state.selectedOne) {
    //     if (this.casedataC1[0].auto_generation == true) {
    //       this.setState({
    //         autoGenerateRadioButton: true,
    //       })
    //     } else {
    //       this.setState({
    //         autoGenerateRadioButton: false,
    //       })
    //     }
    //     // ((this.casedataC1 && this.casedataC1[this.freesedCaseCount]) ? (this.casedataC1[this.freesedCaseCount].auto_generation == true ? this.state.autoGenerateRadioButton = true : this.state.autoGenerateRadioButton = false) : "")

    //   }
    //   else if (this.state.selectedTwo) {
    //     if (this.casedataC2[0].auto_generation == true) {
    //       this.setState({
    //         autoGenerateRadioButton: true,
    //       })
    //     } else {
    //       this.setState({
    //         autoGenerateRadioButton: false,
    //       })
    //     }
    //     // ((this.casedataC2 && this.casedataC2[this.freesedCaseCount]) ? (this.casedataC2[this.freesedCaseCount].auto_generation == true ? this.state.autoGenerateRadioButton = true : this.state.autoGenerateRadioButton = false) : "")

    //   }
    // }

    this.state.schema = "Schema C";
    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;

    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;


    }


    if ((this.state.colorA = false) || (this.state.colorB = false)) {
      this.state.colorC = true;
      this.C = true;
      this.A = false;
      this.B = false;

    }
    this.setState({
      colorC: '#5eb8b3',
      colorA: 'white',
      colorB: 'white'
    })
    this.colorC = '#5eb8b3';
    this.colorA = 'white';
    this.colorB = 'white';
    if ((this.cases_Schema_A == false) || (this.cases_Schema_B == false)) {
      this.cases_Schema_C = true;
    }

    this.casesSchemaPrc(this.CasesSchemaC);
    if (this.state.panelname === 'panel3') {
      this.updatelist(this.CasesSchemaC);
      // this.disableAlgoPW(true, "visible");
    }
    else if (this.state.panelname === 'panel5' || this.state.panelname === 'panel4') {
      // console.log("callschemafor1 calling check from handlecolorC:::::", this.colorA, this.colorB, this.colorC)
      this.callSchema1();
      this.setState({
        enableHeaderA: false,
        enableHeaderB: false,
        enableHeaderC: true,
      })
    }
    this.onceCarousalUpdateIndex = false;
    if (this.state.setVariantName_SchemaC != undefined || this.state.setVariantName_SchemaC != "") {
      if (this.variantName_array != undefined && this.variantName_array != null && this.variantName_array != []) {
        this.swiperRef?.current.swiper.slideToLoop((this.variantName_array.indexOf(this.state.setVariantName_SchemaC)));
      }

    }
    this.forceUpdate();

    if (this.state.panelname == "panel3" && this.enableCarousel) { // for auto selection varient based on selected varient in schema A,B,C
      new Promise((resolve, reject) => {
        this.swiperRef?.current?.swiper.slideToLoop(this.variantName_array.length - 2);
        setTimeout(() => {
          this.swiperRef?.current?.swiper.slideNext();
          resolve();
        }, 5)
      }).then(() => {
        this.reOrderingSwiperIndex()

      })

    }
    if ((this.state.panelname == "panel4" || this.state.panelname == "panel5")) {
      console.log("cases_Schema_C ======== " + this.cases_Schema_C, "this.currentVarient:::", this.currentVarient);
      if ((this.cases_Schema_C == 1 || this.cases_Schema_C == 0) && this.currentVarient == 0) {
        console.log("this.case_Schema:::C", this.CasesSchemaC, " varient", this.currentVarient);
        let { t } = this.props;
        toast.error(t("pleaseSelectAnotherVarientForSchemaC"), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        this.setState({
          setVariantName_SchemaC: "",
        });
        this.setVariantName_SchemaC = "";
        this.clearingSchemaFields1("Schema-C");
      }
    }
    this.handlenumoncase();
    this.setState({
      canvasOrangeRect: "hidden",
      canvasRedRect: "hidden"
    })

  }

  handlecolor1 = () => {
    if (this.state.colorfor2 == false) {
      this.state.colorfor1 = true;
      this.col1 = true;
      this.col2 = false;
    }
    this.setState({
      colorfor1: '#d5e8d4',
      colorfor2: 'white',
    })
    this.colorfor1 = '#d5e8d4';
    this.colorfor2 = 'white';
    // console.log('colora' + this.state.colorfor1)
  }

  handlecolor2 = () => {
    if (this.state.colorfor1 == false) {
      this.state.colorfor2 = true;
      this.col1 = false;
      this.col2 = true;
    }
    this.setState({
      colorfor2: '#d5e8d4',
      colorfor1: 'white'

    })
    this.colorfor1 = 'white';
    this.colorfor2 = '#d5e8d4';
    // console.log('colora' + this.state.colorfor2)
  }

  assign_casetype = (caseType) => (selected) => {

    // console.log("assign_casetype  = " + caseType);
    this.splitCaseType(selected)

  }

  getdropdown = async () => {

    let resonse = await axios.get(`Threed/getDropdown/`);
    const dropdowndata = resonse.data;

    // console.log("dropdown " + dropdowndata);


    const basic_parameter = [];
    dropdowndata.forEach(function (dropdown, index) {
      if (dropdown.ddpName === "Basic Parameter") {
        basic_parameter.push(dropdown.ddpValue)
      }
    });

    this.setState({
      basic_parameter: basic_parameter
    });

    // console.log("basic parameter" + this.state.basic_parameter)
  }


  updatePallet = (pallet_no) => {
    console.log("Inside updatePallet this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
    let pltid = this.state.palletid;
    axios.put("/Threed/updatePallet/" + pltid + "/" + pallet_no, {
      "palletId": pltid,
      "palletName": this.state.palletname,
      "originPal1": this.state.originPal1,
      "originPal2": this.state.originPal2,
      "firstcasepal1": this.state.firstcase_pal1,
      "firstcasepal2": this.state.firstcase_pal2,
      "working_area_1_Width_X_Direction": this.state.WA_1_width_X_Dir,
      "working_area_1_Length_Y_Direction": this.state.WA_1_Length_Y_Dir,

      "working_area_1_Height_Z_Direction": this.state.WA_1_Height_Z_Dir,

      "working_area_1_Offset_X_Direction": this.state.WA_1_Offset_X_Dir,
      "working_area_1_Offset_Y_Direction": this.state.WA_1_Offset_Y_Dir,
      "working_area_2_Width_X_Direction": this.state.WA_2_width_X_Dir,
      "working_area_2_Length_Y_Direction": this.state.WA_2_Length_Y_Dir,
      "working_area_2_Height_Z_Direction": this.state.WA_2_Height_Z_Dir,

      "working_area_2_Offset_X_Direction": this.state.WA_2_Offset_X_Dir,
      "working_area_2_Offset_Y_Direction": this.state.WA_2_Offset_Y_Dir,

      "palletType": this.state.pallete_Type,
      "intermediateLayerType": this.state.intermediate_Layer_Type,
      "intermediateLayerWidth": this.state.intermediate_Layer_Width,
      "intermediateLayerLength": this.state.intermediate_Layer_Length,
      // "intermediateLayerType": 1,
      "caseType": this.state.case_Type,
      "noOfLayers": this.state.no_Of_Layers,
      "casesSchemaA": this.state.cases_Schema_A,
      "casesSchemaB": this.state.cases_Schema_B,
      "casesSchemaC": this.state.cases_Schema_C,
      "intermediate_Layer": this.state.int_Layer,
      "outsideLabelPriority": this.state.outside_Label_Priority,
      "rule_symmetric_mass_distribution": this.state.ruleSymetricMassDistribution,
      "horizontal_mass_distribution": this.state.selectedOne ? this.HWeighted1 : this.HWeighted2,
      "vertical_mass_distribution": this.state.selectedOne ? this.VWeighted1 : this.VWeighted2,
      "schemaA": this.state.setVariantName_SchemaA,
      "schemaB": this.state.setVariantName_SchemaB,
      "schemaC": this.state.setVariantName_SchemaC,
    })
      .then((response) => {
        this.setState({
          formClassName: 'success',
          formSuccessMessage: response.data.msg
        });
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data) {
            this.setState({
              formClassName: 'warning',
              formErrorMessage: err.response.data.msg
            });
          }
        }
        else {
          this.setState({
            formClassName: 'warning',
            formErrorMessage: 'Something went wrong. ' + err
          });
        }
      });

  }

  // workAreaFor_pattern = () => {

  //   var my_gradient5 = this.ctx.createLinearGradient(0, 0, 0, 170);

  //   // /outer rectangle
  //   this.ctx.beginPath();
  //   this.ctx.lineWidth = 5;
  //   my_gradient5.addColorStop(1, "#FFF2CC");
  //   this.ctx.fillStyle = my_gradient5;
  //   this.ctx.strokeStyle = "#FAD7AC";  //borderschema
  //   this.ctx.strokeRect(250, 35, 240, 330);
  //   this.ctx.fillRect(250, 35, 240, 330);

  //   this.ctx.stroke();

  // }

  setOffsetPrc = (axis, objPrc) => {

    // console.log("objPrc 1 " + objPrc);

  }

  casesSchemaPrc = (noOfCases) => {
    // console.log("this.casedataA1 inside casesSchemaPrc after = ", this.casedataA1);
    // console.log("this.casedataB1 inside casesSchemaPrc after = ", this.casedataB1);
    // console.log("this.casedataC1 inside casesSchemaPrc after = ", this.casedataC1);
    // console.log("this.casedataA2 inside casesSchemaPrc after = ", this.casedataA2);
    // console.log("this.casedataB2 inside casesSchemaPrc after = ", this.casedataB2);
    // console.log("this.casedataC2 inside casesSchemaPrc after = ", this.casedataC2);
    //same as changePRC


    // console.log("checking for buttonforTwo click from casesSchemaPrc:::: ", this.PalletSelection, " ::: ", this.colorA, this.colorB, this.colorC)
    // console.log("checking casses")
    if (this.PalletSelection == 1) {
      // console.log("checking for case datachange inside casesSchemaPrc1:::", this.casedata, " :::::::: ", this.casedataA1)
      if (this.colorA == '#5eb8b3') {
        // console.log("this.state.colorA inside casesSchemaPrc for 1 = " + this.state.colorA);
        this.casedata = [...this.casedataA1];
      }

      if (this.colorB == '#5eb8b3') {
        // console.log("this.state.colorB inside casesSchemaPrc for 1 = " + this.state.colorB);
        this.casedata = [...this.casedataB1];
      }

      if (this.colorC == '#5eb8b3') {
        // console.log("this.state.colorC inside casesSchemaPrc for 1 = " + this.state.colorC);
        this.casedata = [...this.casedataC1];
      }
    }
    else if (this.PalletSelection == 2) {
      // console.log("checking for case datachange inside casesSchemaPrc2:::")
      if (this.colorA == '#5eb8b3') {
        // console.log("this.state.colorA inside casesSchemaPrc for 2 = " + this.state.colorA);
        this.casedata = [...this.casedataA2];
      }

      if (this.colorB == '#5eb8b3') {
        // console.log("this.state.colorB inside casesSchemaPrc for 2 = " + this.state.colorB);
        this.casedata = [...this.casedataB2];
      }

      if (this.colorC == '#5eb8b3') {
        // console.log("this.state.colorC inside casesSchemaPrc for 2 = " + this.state.colorC);
        this.casedata = [...this.casedataC2];
      }
    }
    if (this.casedata.length > 0) {
      // console.log("this.casedata length inside casesSchemaPrc ", this.casedata.length)
      this.state.case_data = [...this.casedata];
      this.setState({
        case_data: [...this.casedata]
      })
      this.forceUpdate();

    }
    else {
      let records = [];
      // console.log("casesSchemaPrc noofCases " + noOfCases);
      // console.log("casesSchemaPrc " + this.prcid + " , " + this.palletid + " , " + this.schema + " , " +
      // this.caseName + " , " + this.Position + " , " + this.Position_freezed + " , " + this.Pre_Pos_X
      // + " , " + this.Pre_Pos_Y
      // + " , " + this.Pre_Pos_Z
      // + " , " + this.Auto_Generation)
      let pallet_no = 1;
      if (this.state.selectedOne) {
        pallet_no = 1;
      }
      else if (this.state.selectedTwo) {
        pallet_no = 2;
      }
      // console.log("casedata creation from casesSchemaPrc")

      for (var i = 0; i < noOfCases; i++) {
        records.push({
          "prcId": 0,
          "pallet": pallet_no,
          "palletId": this.state.palletid,
          "schema": this.state.schema,
          "cases": "Case " + (i + 1),
          "offset_X_neg": false,
          "offset_Y_neg": false,
          "position": "",
          "position_freezed": false,
          "pre_Pos_X": this.preposx,
          "pre_Pos_Y": this.preposy,
          "pre_Pos_Z": this.preposz,
          "pre_Pos_2X": this.offset_2ndPrePos_X,
          "pre_Pos_2Y": this.offset_2ndPrePos_Y,
          "pre_Pos_2Z": this.offset_2ndPrePos_Z,
          "pre_Pos_3X": this.offset_3rdPrePos_X,
          "pre_Pos_3Y": this.offset_3rdPrePos_Y,
          "pre_Pos_3Z": this.offset_3rdPrePos_Z,
          "auto_generation": false,
          "rotation": -1,
          "case_x_position": 0,
          "case_y_position": 0,
          "case_z_position": 0,
        })
      }
      // console.log("checking for case datachange inside casesSchemaPrc:::")
      this.casedata = [...records];
      this.setState({
        case_data: [...records]
      })
      this.forceUpdate();
      // console.log("checking for savePrc calling:...casesSchemaPRC ")
      this.savePrc();
      // console.log("records.length 1 casesSchemaPrc  " + records.length);
    }


  }

  casesSchemaPrcUpdate = async (noOfCases, operationFrom, SchemaToChange) => {
    if (noOfCases === 0) {
      return;
    }
    //same as changePRC

    let records = [];
    // console.log("casesSchemaPrc update noofCases inside casesSchemaPrcUpdate " + noOfCases);
    // console.log("casesSchemaPrc " + this.prcid + " , " + this.palletid + " , " + this.schema + " , " + this.caseName + " , " + this.Position
    // + " , " + this.Position_freezed + " , " + this.Pre_Pos_X + " , " + this.Pre_Pos_Y + " , " + this.Pre_Pos_Z + " , " + this.Auto_Generation);
    if (operationFrom == "handleChangeForCasesSchema") {

      // console.log("casedata creation from casesSchemaPrcUpdate:::::noOfCases.... ", noOfCases, " :::SchemaToChange::: ", SchemaToChange)

      for (let pallet_no = 1; pallet_no < 3; pallet_no++) {
        records = [];
        for (var i = 0; i < noOfCases; i++) {
          records.push({
            "prcId": 0,
            "pallet": pallet_no,
            "palletId": this.state.palletid,
            "schema": SchemaToChange,
            "cases": "Case " + (i + 1),
            "offset_X_neg": false,
            "offset_Y_neg": false,
            "position": "",
            "position_freezed": false,
            "pre_Pos_X": 0,
            "pre_Pos_Y": 0,
            "pre_Pos_Z": 0,
            "pre_Pos_2X": 0,
            "pre_Pos_2Y": 0,
            "pre_Pos_2Z": 0,
            "pre_Pos_3X": 0,
            "pre_Pos_3Y": 0,
            "pre_Pos_3Z": 0,
            "auto_generation": false,
            "rotation": -1,
            "case_x_position": 0,
            "case_y_position": 0,
            "case_z_position": 0,
          })
        }

        if (records.length > 0) {

          // console.log("updating data caseDataA1 from casesSchemaPrcUpdate:::: ")
          if (pallet_no == 1) {
            if (SchemaToChange == 'Schema A') {
              this.casedataA1 = [...records];
            }

            if (SchemaToChange == 'Schema B') {
              this.casedataB1 = [...records];
            }

            if (SchemaToChange == 'Schema C') {
              this.casedataC1 = [...records];
            }
          } else if (pallet_no == 2) {
            if (SchemaToChange == 'Schema A') {
              this.casedataA2 = [...records];
            }

            if (SchemaToChange == 'Schema B') {
              this.casedataB2 = [...records];
            }

            if (SchemaToChange == 'Schema C') {
              this.casedataC2 = [...records];
            }
          }

          if (this.state.selectedOne && pallet_no == 1) {
            // console.log("checking for case datachange inside casesSchemaPrcUpdate:::")
            if (this.colorA == '#5eb8b3') {
              this.casedata = [...this.casedataA1];
              this.state.case_data = [...this.casedataA1];
              this.setState({
                case_data: [...this.casedataA1],
              })
            } else if (this.colorB == '#5eb8b3') {
              this.casedata = [...this.casedataB1];
              this.state.case_data = [...this.casedataB1];
              this.setState({
                case_data: [...this.casedataB1],
              })
            } else if (this.colorC == '#5eb8b3') {
              this.casedata = [...this.casedataC1];
              this.state.case_data = [...this.casedataC1];
              this.setState({
                case_data: [...this.casedataC1],
              })
            }
          } else if (this.state.selectedTwo && pallet_no == 2) {
            // console.log("checking for case datachange inside casesSchemaprcupdate2:::")
            if (this.colorA == '#5eb8b3') {
              this.casedata = [...this.casedataA2];
              this.state.case_data = [...this.casedataA2];
              this.setState({
                case_data: [...this.casedataA2],
              })
            } else if (this.colorB == '#5eb8b3') {
              this.casedata = [...this.casedataB2];
              this.state.case_data = [...this.casedataB2];
              this.setState({
                case_data: [...this.casedataB2],
              })
            } else if (this.colorC == '#5eb8b3') {
              this.casedata = [...this.casedataC2];
              this.state.case_data = [...this.casedataC2];
              this.setState({
                case_data: [...this.casedataC2],
              })
            }
          }

        }

      }

    } else {
      let schema = "Schema A";
      if (this.colorA == '#5eb8b3') {
        schema = "Schema A";
      }
      if (this.colorB == '#5eb8b3') {
        schema = "Schema B";
      }
      if (this.colorC == '#5eb8b3') {
        schema = "Schema C";
      }


      let pallet_no = 1;
      if (this.state.selectedOne) {
        pallet_no = 1;
      }
      else if (this.state.selectedTwo) {
        pallet_no = 2;
      }

      for (var i = 0; i < noOfCases; i++) {
        records.push({
          "prcId": 0,
          "pallet": pallet_no,
          "palletId": this.state.palletid,
          "schema": schema,
          "cases": "Case " + (i + 1),
          "offset_X_neg": this.checked_offsetXneg,
          "offset_Y_neg": this.checked_offsetYneg,
          "position": "",
          "position_freezed": this.checked_position_freezed,
          "pre_Pos_X": this.preposx,
          "pre_Pos_Y": this.preposy,
          "pre_Pos_Z": this.preposz,
          "pre_Pos_2X": this.offset_2ndPrePos_X,
          "pre_Pos_2Y": this.offset_2ndPrePos_Y,
          "pre_Pos_2Z": this.offset_2ndPrePos_Z,
          "pre_Pos_3X": this.offset_3rdPrePos_X,
          "pre_Pos_3Y": this.offset_3rdPrePos_Y,
          "pre_Pos_3Z": this.offset_3rdPrePos_Z,
          "auto_generation": false,
          "rotation": -1,
          "case_x_position": 0,
          "case_y_position": 0,
          "case_z_position": 0,
        })
      }
      // console.log("this.state.selectedOne inside casesSchemaPrcUpdate " + this.state.selectedOne);
      // console.log("this.colorA inside casesSchemaPrcUpdate " + this.colorA);
      // console.log("updating data caseDataA1 from casesschemaPrcUpdate 2:::: ")
      if (this.state.selectedOne) {
        if (this.colorA == '#5eb8b3') {
          this.casedataA1 = [...records];
        }

        if (this.colorB == '#5eb8b3') {
          this.casedataB1 = [...records];
        }

        if (this.colorC == '#5eb8b3') {
          this.casedataC1 = [...records];
        }
      }
      else if (this.state.selectedTwo) {
        if (this.colorA == '#5eb8b3') {
          this.casedataA2 = [...records];
        }

        if (this.colorB == '#5eb8b3') {
          this.casedataB2 = [...records];
        }

        if (this.colorC == '#5eb8b3') {
          this.casedataC2 = [...records];
        }
      }
      // console.log("records.length inside casesSchemaPrcUpdate " + records.length);
      this.state.case_data = [...records];
      this.setState({
        case_data: [...records]
      })

    }

    // console.log("this.state.case_data inside casesSchemaPrcUpdate " + this.state.case_data);
    // console.log("checking for savePrc calling:...casesSchemaPRCupdate ")
    this.savePrc();
    this.forceUpdate();
  }

  setting_data_simmulation = () => {
    this.simCasesPositionsForSchemaA = [];
    this.simCasesPositionsForSchemaB = [];
    this.simCasesPositionsForSchemaC = [];

    // console.log("checking varients in pannel6:......A: " + this.state.setVariantName_SchemaA + " ......B: " + this.state.setVariantName_SchemaB + " .......C: " + this.state.setVariantName_SchemaC)
    if (this.state.setVariantName_SchemaA !== "") {
      // console.log("callschemafor1 calling check from setting_data_simulation1:::::", this.colorA, this.colorB, this.colorC)
      this.callSchema1("schema A", true); // run for getting schema A case position
      // console.log("checking varients in pannel6:......A: " + this.state.setVariantName_SchemaA)
    }
    if (this.state.setVariantName_SchemaB !== "") {
      // console.log("callschemafor1 calling check from setting_data_simulation2:::::", this.colorA, this.colorB, this.colorC)
      this.callSchema1("schema B", true); // run for getting schema B case position
      // console.log("checking varients in pannel6:......B: " + this.state.setVariantName_SchemaB)
    }
    if (this.state.setVariantName_SchemaC !== "") {
      // console.log("callschemafor1 calling check from setting_data_simulation2:::::", this.colorA, this.colorB, this.colorC)
      this.callSchema1("schema C", true); // run for getting schema C case position
      // console.log("checking varients in pannel6:.......C: " + this.state.setVariantName_SchemaC)
    }

    this.state.forSingleCanvas = "hidden"
    this.state.simulationRunning = false;
    this.setState({
      forSingleCanvas: "hidden",
      simulationRunning: false,
      pallet_bool: true,
    })

    // console.log("simCasesPositionsForSchemaA inside handle panel:...S-A " + JSON.stringify(this.simCasesPositionsForSchemaA) + " S-B....." + JSON.stringify(this.simCasesPositionsForSchemaB) + " S-C...... " + JSON.stringify(this.simCasesPositionsForSchemaC))

  }

  handleChangepanel_forToast = (name) => (event) => {

    // console.log("Inside Panel3 click algo_loaded : handleChangepanel_forToast ", this.state.algo_loaded);
    let { t } = this.props;
    toast.error(t('pleaseselectaPatterninPatternWizardfirst'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
  }

  handleChangepanel = (name) => (event) => {
    this.state.scale = 1;
    this.state.mapPinchValue = 0;
    this.resetSimulationStates();

    if (name == "panel3") {
      // console.log("Inside Panel3 click algo_loaded : 1 ", this.state.algo_loaded);
      this.state.algo_loaded = true;
      this.setState({
        algo_loaded: true
      })
      // console.log("Inside Panel3 click algo_loaded : 2 ", this.state.algo_loaded);
    }


    // if (( name == "panel4" ) && (this.state.algo_loaded == false)) {
    //   // console.log("Inside Panel3 click algo_loaded : 4 ",this.state.algo_loaded);
    //   toast.error("Panel3 Empty", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
    //   this.state.panelname == ""
    //   this.setState({
    //     expanded: ""
    //   });
    // }

    // console.log("checking for this.casedata calling:...::a1: ", this.casedataA1)
    // console.log("checking for this.casedata calling:...::b1: ", this.casedataB1)
    // console.log("checking for this.casedata calling:...::c1: ", this.casedataC1)
    // console.log("checking for this.casedata calling:...::a2: ", this.casedataA2)
    // console.log("checking for this.casedata calling:...::b2: ", this.casedataB2)
    // console.log("checking for this.casedata calling:...::c2: ", this.casedataC2)
    // console.log("checking for this.casedata calling:...::caseData1: ", this.casedata)
    // console.log("checking for this.state.case_data calling:...::caseData1: ", this.state.case_data)

    // console.log("this.Case_Z_Pos ", this.Case_Z_Pos);

    // console.log("checking colors select5ion in handleChangepanel:::: ", this.state.colorA, this.state.colorB, this.state.colorC)


    if (this.state.selectedOne) {
      // console.log("checking for case datachange inside handleChangepannel:::", this.casedata, " :::: ", this.casedataA1)
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = [...this.casedataA1];
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = [...this.casedataB1];
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = [...this.casedataC1];
      }
    }
    else if (this.state.selectedTwo) {
      // console.log("checking for case datachange inside handleChangepannel2:::")
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = [...this.casedataA2];
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = [...this.casedataB2];
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = [...this.casedataC2];
      }
    }
    if (this.state.selectedOne) {
      this.setState({
        outside_Label_Priority: this.outside_Label_Priority,
        // outside_Label_Priority1: this.outside_Label_Priority1,
        ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
        HWeighted1: this.HWeighted1,
        VWeighted1: this.VWeighted1,
        // setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaC: this.setVariantName_SchemaC,
        palletid: this.palletid,
        palletname: this.palletname,
        originPal1: this.originPal1,
        originPal2: this.originPal2,
        firstcase_pal1: this.firstcase_pal1,
        firstcase_pal2: this.firstcase_pal2,
        WA_1_width_X_Dir: this.WA_1_width_X_Dir,
        WA_1_Length_Y_Dir: this.WA_1_Length_Y_Dir,
        WA_1_Offset_X_Dir: this.WA_1_Offset_X_Dir,
        WA_1_Offset_Y_Dir: this.WA_1_Offset_Y_Dir,
        WA_2_width_X_Dir: this.WA_2_width_X_Dir,
        WA_2_Length_Y_Dir: this.WA_2_Length_Y_Dir,
        WA_2_Offset_X_Dir: this.WA_2_Offset_X_Dir,
        WA_2_Offset_Y_Dir: this.WA_2_Offset_Y_Dir,
        pallete_Type: this.palletType1,
        intermediate_Layer_Type: this.intermediateLayerType1,
        case_Type: this.caseType,
        // case_Type1: this.caseType1,
        no_Of_Layers: this.noOfLayers,
        // no_Of_Layers: this.noOfLayers1,
        cases_Schema_A: this.cases_Schema_A1,
        cases_Schema_B: this.cases_Schema_B1,
        cases_Schema_C: this.cases_Schema_C1,
        setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaA: this.setVariantName_SchemaA1,
        setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaB: this.setVariantName_SchemaB1,
        setVariantName_SchemaC: this.setVariantName_SchemaC,
        // setVariantName_SchemaC: this.setVariantName_SchemaC1,
        layer: this.layer,
        //layer_data: this.layerdata,
        // layer_data: this.layerdata1,
        case_data: [...this.casedata],
        int_Layer: this.int_Layer,
        // int_Layer: this.int_Layer1,
        layers: this.noOfLayers,
        // layers: this.noOfLayers1,
        layerdataupdated: this.layerdataupdated
      });
      //     this.state.pallete_Type = this.palletType1;
      //    this.state.case_Type = this.caseType1;
      //    this.state.case_Type1 = this.caseType1;
      //    this.state.intermediate_Layer_Type = this.intermediateLayerType1;
      //    this.state.no_Of_Layers = this.noOfLayers1;
      //    this.state.cases_Schema_A = this.cases_Schema_A1;
      //    this.state.cases_Schema_B = this.cases_Schema_B1;
      //    this.state.cases_Schema_C = this.cases_Schema_C1;
      //    this.state.outside_Label_Priority = this.outside_Label_Priority1;

    }
    else if (this.state.selectedTwo) {
      this.setState({
        outside_Label_Priority: this.outside_Label_Priority,
        // outside_Label_Priority2: this.outside_Label_Priority2,
        ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
        HWeighted2: this.HWeighted2,
        VWeighted2: this.VWeighted2,
        // setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaC: this.setVariantName_SchemaC,
        palletid: this.palletid,
        palletname: this.palletname,
        originPal1: this.originPal1,
        originPal2: this.originPal2,
        firstcase_pal1: this.firstcase_pal1,
        firstcase_pal2: this.firstcase_pal2,
        WA_1_width_X_Dir: this.WA_1_width_X_Dir,
        WA_1_Length_Y_Dir: this.WA_1_Length_Y_Dir,
        WA_1_Offset_X_Dir: this.WA_1_Offset_X_Dir,
        WA_1_Offset_Y_Dir: this.WA_1_Offset_Y_Dir,
        WA_2_width_X_Dir: this.WA_2_width_X_Dir,
        WA_2_Length_Y_Dir: this.WA_2_Length_Y_Dir,
        WA_2_Offset_X_Dir: this.WA_2_Offset_X_Dir,
        WA_2_Offset_Y_Dir: this.WA_2_Offset_Y_Dir,
        pallete_Type: this.palletType2,
        intermediate_Layer_Type: this.intermediateLayerType2,
        case_Type: this.caseType,
        // case_Type2: this.caseType2,
        no_Of_Layers: this.noOfLayers,
        // no_Of_Layers: this.noOfLayers2,
        cases_Schema_A: this.cases_Schema_A2,
        cases_Schema_B: this.cases_Schema_B2,
        cases_Schema_C: this.cases_Schema_C2,
        setVariantName_SchemaA: this.setVariantName_SchemaA,
        // setVariantName_SchemaA: this.setVariantName_SchemaA2,
        setVariantName_SchemaB: this.setVariantName_SchemaB,
        // setVariantName_SchemaB: this.setVariantName_SchemaB2,
        setVariantName_SchemaC: this.setVariantName_SchemaC,
        // setVariantName_SchemaC: this.setVariantName_SchemaC2,
        layer: this.layer,
        // layer_data: this.layerdata,
        // layer_data: this.layerdata2,
        case_data: [...this.casedata],
        int_Layer: this.int_Layer,
        // int_Layer: this.int_Layer2,
        layers: this.noOfLayers,
        // layers: this.noOfLayers2,
        layerdataupdated: this.layerdataupdated
      });
    }
    //
    //
    let tempLayer_data = [];
    for (let i = 0; i < this.layerdata.length; i++) {
      if (this.layerdata[i].pallet_no == 1) {
        tempLayer_data[this.layerdata[i].layerSequence] = this.layerdata[i];
      }
    }
    this.state.layer_data = tempLayer_data;
    // console.log("my layer_data pallet check 1 " + JSON.stringify(tempLayer_data) + "........ " + JSON.stringify(this.layerdata))
    //
    //
    // let half = Math.ceil(this.layerdata.length/2)
    // this.state.layer_data = this.layerdata.slice(0, half);
    // console.log("handleChnagePanel this.state.layer_data 2 ", this.state.layer_data)
    this.forceUpdate();
    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;
    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;
    }

    // if ((this.state.panelname === 'panel5' || this.state.panelname === 'panel4') && this.state.caseTypeSet == true) {
    //   this.workAreaFor_pattern();
    // }

    // console.log("panelname inside handleChangepanel = " + this.state.panelname)

    if (this.state.panelname != name) {
      this.state.panelname = name;
      // console.log("name inside handleChangepanel if = " + this.state.panelname);

    }
    else {
      this.state.panelname = ''
      // console.log("name inside handleChangepanel = " + this.state.panelname);

    }
    // if((name == "panel3" || name == "panel5") && this.state.caseTypeSet == false){
    if ((name == "panel3" || name == "panel5" || name == "panel4") && (this.state.case_Type == "")) {
      let { t } = this.props;

      toast.error(t('PleasecreateaCaseDesignfirst'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
    }


    if (name == "panel4" || name == "panel5") {

      // console.log("Inside Panel5 this.Case_Height : ", this.Case_Height, " this.intermediateLayerType1 : ", this.intermediateLayerType1);

      this.Case_Z_Pos = (parseInt(this.Case_Height)) + (parseInt(this.intermediateLayerType1));

      // console.log("ABC Panel4 == 0");
      // console.log("ABC Panel4 == 1 A = " + this.state.setVariantName_SchemaA + " B = " + this.state.setVariantName_SchemaB + " C = " + this.state.setVariantName_SchemaC);

      if (this.state.setVariantName_SchemaA !== "" & this.state.setVariantName_SchemaB === "" && this.state.setVariantName_SchemaC === "") {
        this.handlecolorA();
        // console.log("ABC Panel4 == 2");
      }
      else if (this.state.setVariantName_SchemaA === "" & this.state.setVariantName_SchemaB !== "" && this.state.setVariantName_SchemaC === "") {
        this.handlecolorB();
        // console.log("ABC Panel4 == 3");
      }
      else if (this.state.setVariantName_SchemaA === "" & this.state.setVariantName_SchemaB === "" && this.state.setVariantName_SchemaC !== "") {
        this.handlecolorC();
        // console.log("ABC Panel4 == 4");
      }
      else if (this.state.setVariantName_SchemaA !== "" & this.state.setVariantName_SchemaB !== "" && this.state.setVariantName_SchemaC === "") {
        this.handlecolorA();
        // console.log("ABC Panel4 == 5");
      }
      else if (this.state.setVariantName_SchemaA !== "" & this.state.setVariantName_SchemaB === "" && this.state.setVariantName_SchemaC !== "") {
        this.handlecolorC();
        // console.log("ABC Panel4 == 6");
      }
      else if (this.state.setVariantName_SchemaA === "" & this.state.setVariantName_SchemaB !== "" && this.state.setVariantName_SchemaC !== "") {
        this.handlecolorB();
        // console.log("ABC Panel4 == 7");
      }

    }


    // if(name === "panel3" || name === "panel4"){
    //   // console.log("BBBBBBBBBBBBBBBBBB PW :- AA = " + this.state.setVariantName_SchemaA + " BB = " + this.state.setVariantName_SchemaB + " CC = " + this.state.setVariantName_SchemaC)
    //   // console.log("BBBBBBBBBBBBBBBBBB DP :- AA = " + this.state.cases_Schema_A + " BB = " + this.state.cases_Schema_B + " CC = " + this.state.cases_Schema_C)
    // }

    if (this.state.selectedOne) {
      this.setState({
        case_Type: this.caseType,
        // case_Type1: this.caseType1,
      });
    }
    else if (this.state.selectedTwo) {
      this.setState({
        case_Type: this.caseType,
        // case_Type2: this.caseType2,
      });
    }
    // this.setState({
    //   outside_Label_Priority: this.outside_Label_Priority
    // });
    // console.log("name inside handleChangepanel outside " + this.state.panelname);
    // console.log("event inside handleChangepanel " + event);

    // console.log("my conditional schema ABC value AA: " + this.state.setVariantName_SchemaA + " BB: " + this.state.setVariantName_SchemaB + " CC: " + this.state.setVariantName_SchemaC)
    if ((name == "panel3" || name == "panel4" || name == "panel5") && (this.state.cases_Schema_A == 0 && this.state.cases_Schema_B == 0 && this.state.cases_Schema_C == 0)) {

      let { t } = this.props;
      toast.error(t('pleasespecifyaSchemawithatleastonecasefirst'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.state.panelname = ""
    }

    if (name == "panel2") {
      this.S1_backgroundColor();
      console.log("Inside S1_backgroundColor panel2");
    }

    if (name == "panel3") {
      this.S1_pbackgroundColor();
      console.log("Inside S1_pbackgroundColor panel3 = ");
    }



    // if((name == "panel3")&& (this.state.cases_Schema_A == 0 && this.state.cases_Schema_B == 0 && this.state.cases_Schema_C == 0)) {
    //   if(name == "panel2"){
    //    if(this.state.cases_Schema_A == 0 && this.state.cases_Schema_B == 0 && this.state.cases_Schema_C == 0) {
    //     console.log("priya panel3..............");
    //     S1_backgroundColor('#f5f5f5');
    //    }
    //    else if(this.state.cases_Schema_A !== 0 && this.state.cases_Schema_B !== 0 && this.state.cases_Schema_C !== 0) {
    //       console.log("priya else panel3..............");
    //     this.S1_backgroundColor('#00FF00');

    //    }


    // }
    if ((name == "panel5" || name == "panel4" || name == "panel6" || name == "panel7") && (this.state.setVariantName_SchemaA == "" && this.state.setVariantName_SchemaB == "" && this.state.setVariantName_SchemaC == "")) {

      let { t } = this.props;
      toast.error(t('pleaseselectaPalletinParameterfirst'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.state.panelname = ""
    }
    this.setState({
      expanded: this.state.panelname
    });
    if (this.state.panelname === '' || this.state.panelname === 'panel1' || this.state.panelname === 'panel2' || this.state.panelname === 'panel4') {
      this.setState({
        enableCarousel1: false
      });
    } else {
      this.setState({
        enableCarousel1: false
      });
    }
    if (this.state.panelname === 'panel3') {

      // console.log("calling me  this.state.panelname ", this.state.panelname);
      if (this.state.pallete_Type == "EU 6: 800 x 600") {
        this.S1_dyMarginLeft_swiperText('-47px');
        // console.log("print this.state.pallete_Type  ", this.state.pallete_Type, "this.S1_dyMarginLeft_swiperText  ", this.S1_dyMarginLeft_swiperText);
      }
      if (this.state.pallete_Type == "US 1: 1219 x 1016 ") {
        this.S1_dyMarginLeft_swiperText('9px');
      }
      if (this.state.pallete_Type == "EU 1: 1200 x 800") {
        this.S1_dyMarginLeft_swiperText('-19px');
      }
      if (this.state.pallete_Type == "EU 2: 1200 x 1000") {
        this.S1_dyMarginLeft_swiperText('10px');
      }
      if (this.state.pallete_Type == "AU 1: 1165 x 1165") {
        this.S1_dyMarginLeft_swiperText('35px');
      }

      if (this.state.pallete_Type == "ASIA 1: 1100 x 1100") {
        this.S1_dyMarginLeft_swiperText('37px');
      }

      if (this.state.pallete_Type == "US 2: 1067 x 1067") {
        this.S1_dyMarginLeft_swiperText('29px');

      }
      this.frameForPRC = false;

      //   if (this.forOneTime) {
      //     this.outsideInitialPriority();
      //     this.forOneTime = false
      //   } 
      //   else {
      //     this.splitForOutSideLabelPriority();
      //     this.updateSelection();
      // }  

      this.reqCombinationForPallet_N_Origin();
      this.callSchemaDropdown();
      // this.disableAlgoPW(true, "visible");
      this.updateSelectionSchemaA(event);
      this.updateSelectionSchemaB(event);
      this.updateSelectionSchemaC(event);


      this.setState({
        enableCanvas: "hidden",
        enableCanvasPRC: "hidden",
      })

    }
    else {

      this.disableAlgoPW(false, "hidden");

      this.drawPallet_1_2();
      this.enableCarousel = false;
      this.setState({
        enableCanvas: "visible",
        pallet_bool: true,
        pallet_12: false
      })
    }

    if (this.state.panelname === 'panel4') {
      // console.log("this.state.panelname inside handlechangepanel = " + this.state.panelname);
      // console.log("this.state.layerdataupdated inside handlechangepanel = " + this.state.layerdataupdated);
      if (!this.state.layerdataupdated) {

        this.state.layerdataupdated = true;
      }
      let inter_layer = true;
      if (this.state.selectedOne) {
        inter_layer = this.int_Layer;
        // inter_layer = this.int_Layer1;
      }
      else if (this.state.selectedTwo) {
        inter_layer = this.int_Layer;
        // inter_layer = this.int_Layer2;
      }
      this.setState({
        int_Layer: inter_layer
      })
    }

    if (this.state.panelname === 'panel5' || this.state.panelname === 'panel4') {
      this.setState({
        margintop_prc: "25px"
      })

    }
    else {
      this.setState({
        margintop_prc: "0px"
      })


    }
    if (this.state.panelname === "panel2") {
      this.setState({
        pallet_12: false
      })
    }
    if (this.state.panelname === 'panel5' || this.state.panelname === 'panel4') {

      // this.colorA = "#5eb8b3";
      // this.colorB = "white";
      // this.colorC = "white";
      if (this.state.panelname === 'panel5') {
        this.frameForPRC = true;
        // console.log("check me: " + this.state.pallet_12);
        this.drawGreenRect();
        this.drawOrangeRect();
        this.drawRedRect();
        this.state.pallet_12 = false,
          this.setState({
            pallet_12: false
          })
      }
      // this.callSchema1();
      this.UpadateNrPRC();
      this.ctx_forPRC.clearRect(0, 0, this.myRef_forPRC.current.clientWidth, this.myRef_forPRC.current.clientHeight);
      this.ctx_forPRCOuterRect.clearRect(0, 0, this.myRef_forPRCOuterRect.current.clientWidth, this.myRef_forPRCOuterRect.current.clientHeight);
      this.ctx_forSingle.clearRect(0, 0, this.myRef_forSingleCanvas.current.clientWidth, this.myRef_forSingleCanvas.current.clientHeight);
      this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
      this.ctxCase.clearRect(0, 0, this.myRefCase.current.clientWidth, this.myRefCase.current.clientHeight);
      // console.log("callSchemafor1_forPRC calling check from handlechangepanel:::::", this.colorA, this.colorB, this.colorC)
      this.callSchemafor1_forPRC();

      // Bottom arrow
      // if (this.state.panelname !== 'panel3') {
      //   this.ctx_forPRC.beginPath();
      //   this.ctx_forPRC.lineWidth = 2;
      //   this.ctx_forPRC.drawImage(this.imga, 10, 280, 80, 80);
      //   this.ctx_forPRC.fill();
      //   this.ctx_forPRC.stroke();
      // }

      // if(this.state.panelname === 'panel5'){
      this.setState({
        canvasGreenRect: "visible",
        canvasOrangeRect: "visible",
        canvasRedRect: "visible",
        canvasfreezGreenRect: "visible",
        enableCanvasPRC: "visible",
      })

      // }
      if (this.state.colorA == "#5eb8b3") {
        this.setState({
          enableHeaderA: true,
          enableHeaderB: false,
          enableHeaderC: false,
        })
      }
      if (this.state.colorB == "#5eb8b3") {
        this.setState({
          enableHeaderA: false,
          enableHeaderB: true,
          enableHeaderC: false,
        })
      }
      if (this.state.colorC == "#5eb8b3") {
        this.setState({
          enableHeaderA: false,
          enableHeaderB: false,
          enableHeaderC: true,
        })
      }


    }
    else {

      this.setState({
        enableHeaderA: false,
        enableHeaderB: false,
        enableHeaderC: false,
        canvasGreenRect: "hidden",
        canvasOrangeRect: "hidden",
        canvasRedRect: "hidden",
        canvasfreezGreenRect: "hidden",
        canvasPRC: "hidden",
        enableCanvasPRC: "hidden",
      })
      this.frameForPRC = false;
    }
    this.updateSelection();
    // console.log("my swiperRef: this.state.enableCarousel: " + this.enableCarousel)
    if (this.state.panelname == "panel3" && this.enableCarousel) { // for auto selection varient based on selected varient in schema A,B,C
      this.reOrderingSwiperIndex()
    } if (this.state.panelname == "panel3") {
      this.state.forSingleCanvas = "hidden";
      this.setState({
        forSingleCanvas: "hidden"
      })
    }


    if (this.state.panelname == "panel3") {
      if (this.state.cases_Schema_A == 0 && this.state.colorA == '#5eb8b3') {
        if (this.state.cases_Schema_B != 0) {
          this.handlecolorB();
        } else if (this.state.cases_Schema_C != 0) {
          this.handlecolorC();
        }
      } else if (this.state.cases_Schema_B == 0 && this.state.colorB == '#5eb8b3') {
        if (this.state.cases_Schema_A != 0) {
          this.handlecolorA();
        } else if (this.state.cases_Schema_C != 0) {
          this.handlecolorC();
        }
      } else if (this.state.cases_Schema_C == 0 && this.state.colorC == '#5eb8b3') {
        if (this.state.cases_Schema_A != 0) {
          this.handlecolorA();
        } else if (this.state.cases_Schema_B != 0) {
          this.handlecolorB();
        }
        // block Panel3 panel4 and panel5
      }
    }

    if (this.state.panelname === 'panel4' || this.state.panelname === 'panel5') {
      console.log("circle for panel5 for test:")
      console.log("circle for panel4 1")
      this.arrow();

      this.ctx_LayerCreator.clearRect(0, 0, canvas_For_LayerCreator.width, canvas_For_LayerCreator.height);
      if (this.state.selectedOne) {
        console.log("circle for panel4 2")


        // console.log("In the panel4 Z 2: ")
        if (this.state.originPal1 == "Upper Right Corner" && this.state.firstcase_pal1 == "Upper Right Corner") {
          console.log("In the panel4 Z 3: ")

          this.state.valueforzindex = "4";

          this.setState({
            valueforzindex: "4"
          })
        }
        else if (this.state.originPal1 == "Upper Left Corner" && this.state.firstcase_pal1 == "Upper Left Corner") {
          console.log("In the panel4 Z 333333: ")
          this.state.valueforzindex = "4";

          this.setState({
            valueforzindex: "4"
          })
        }
        else if (this.state.originPal1 == "Lower Left Corner" && this.state.firstcase_pal1 == "Lower Left Corner") {
          console.log("In the panel4 Z 3: ")
          this.state.valueforzindex = "4";

          this.setState({
            valueforzindex: "4"
          })
        }
        else if (this.state.originPal1 == "Lower Right Corner" && this.state.firstcase_pal1 == "Lower Right Corner") {
          console.log("In the panel4 Z 3: ")

          this.state.valueforzindex = "4";

          this.setState({
            valueforzindex: "4"
          })
        }
        else {
          this.state.valueforzindex = "0";

          this.setState({
            valueforzindex: "0"
          })
        }

        //upper right corner
        this.ctx_LayerCreator.beginPath();
        this.ctx_LayerCreator.fillStyle = "black";
        this.ctx_LayerCreator.fillStyle = "#E1D5E7";
        this.ctx_LayerCreator.arc(this.state.arcX, this.state.arcY, 20, 0, 2 * Math.PI);
        this.ctx_LayerCreator.fill();
        this.ctx_LayerCreator.stroke();

        // // upper right corner
        this.ctx_LayerCreator.beginPath();
        this.ctx_LayerCreator.lineWidth = 2;
        this.ctx_LayerCreator.fillStyle = "black";
        this.ctx_LayerCreator.fillStyle = "#E1D5E7";
        this.ctx_LayerCreator.drawImage(this.imga, this.state.arrowx, this.state.arrowy, 80, 80);
        console.log("Inside panel4 circle arrowx " + this.state.arrowx + "this.state.arrowy " + this.state.arrowy)
        this.ctx_LayerCreator.fill();
        this.ctx_LayerCreator.stroke();

      }
      else if (this.state.selectedTwo) {
        // this.ctx_forPRC.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);
        // this.ctx_forPRC.clearRect(0, 0, myRef_forSingleCanvas.width, myRef_forSingleCanvas.height);
        this.ctx_LayerCreator.clearRect(0, 0, canvas_For_LayerCreator.width, canvas_For_LayerCreator.height);


        if (this.state.originPal2 == "Upper Right Corner" && this.state.firstcase_pal2 == "Upper Right Corner") {
          console.log("In the panel4 Z 3: ")

          this.state.valueforzindex = "4";

          this.setState({
            valueforzindex: "4"
          })
        }
        else if (this.state.originPal2 == "Upper Left Corner" && this.state.firstcase_pal2 == "Upper Left Corner") {
          console.log("In the panel4 Z 3: ")
          this.state.valueforzindex = "4";

          this.setState({
            valueforzindex: "4"
          })
        }
        else if (this.state.originPal2 == "Lower Left Corner" && this.state.firstcase_pal2 == "Lower Left Corner") {
          console.log("In the panel4 Z 3: ")
          this.state.valueforzindex = "4";

          this.setState({
            valueforzindex: "4"
          })
        }
        else if (this.state.originPal2 == "Lower Right Corner" && this.state.firstcase_pal2 == "Lower Right Corner") {
          console.log("In the panel4 Z 3: ")

          this.state.valueforzindex = "4";

          this.setState({
            valueforzindex: "4"
          })
        }
        else {
          this.state.valueforzindex = "0";

          this.setState({
            valueforzindex: "0"
          })
        }

        this.ctx_LayerCreator.beginPath();
        this.ctx_LayerCreator.fillStyle = "black";
        this.ctx_LayerCreator.fillStyle = "#E1D5E7";
        this.ctx_LayerCreator.arc(this.state.arcX2, this.state.arcY2, 20, 0, 2 * Math.PI);
        this.ctx_LayerCreator.fill();
        this.ctx_LayerCreator.stroke();

        // // upper right corner
        this.ctx_LayerCreator.beginPath();
        this.ctx_LayerCreator.lineWidth = 2;
        this.ctx_LayerCreator.fillStyle = "black";
        this.ctx_LayerCreator.fillStyle = "#E1D5E7";
        this.ctx_LayerCreator.drawImage(this.imga, this.state.arrowx2, this.state.arrowy2, 80, 80);
        this.ctx_LayerCreator.fill();
        this.ctx_LayerCreator.stroke();

      }

      // this.arrowOfXY_LayerCreator();
      this.state.canvas_LayerCreator = "visible";
      this.setState({
        canvas_LayerCreator: "visible"
      })
    }
    else {
      this.state.canvas_LayerCreator = "hidden";
      this.setState({
        canvas_LayerCreator: "hidden"
      })
    }


    if (this.state.panelname === 'panel3') {
      this.arrowOfXY_LayerCreator();
      this.state.canvas_PatternWizard = "visible";
      this.setState({
        canvas_PatternWizard: "visible"
      })
    } else {
      this.state.canvas_PatternWizard = "hidden";
      this.setState({
        canvas_PatternWizard: "hidden"
      })
    }

    
    if (this.state.panelname == "panel3") {
      console.log("display me canvas ");
      this.Vertical_flip();
      this.Horizontally_flip();
      this.state.forPDCanvas = "visible";
      this.state.forPDPatilCanvas = "visible";
      this.state.forPDPatilpriyaCanvas = "visible";
      this.setState({
        forPDCanvas: "visible",
        forPDPatilCanvas: "visible",
        forPDPatilpriyaCanvas: "visible",
      })

    }
    else {
      this.state.forPDCanvas = "hidden";
      this.state.forPDPatilCanvas = "hidden"
      this.state.forPDPatilpriyaCanvas = "hidden";
      this.setState({
        forPDCanvas: "hidden",
        forPDPatilCanvas: "hidden",
        forPDPatilpriyaCanvas: "hidden",
      })
    }
    if (this.state.panelname == "panel4" || this.state.panelname == "panel5") {
      if (this.state.setVariantName_SchemaA == "" && this.state.colorA == '#5eb8b3') {
        if (this.state.setVariantName_SchemaB != "") {
          this.handlecolorB();
        } else if (this.state.setVariantName_SchemaC != "") {
          this.handlecolorC();
        }
      } else if (this.state.setVariantName_SchemaB == "" && this.state.colorB == '#5eb8b3') {
        if (this.state.setVariantName_SchemaA != "") {
          this.handlecolorA();
        } else if (this.state.setVariantName_SchemaC != "") {
          this.handlecolorC();
        }
      } else if (this.state.setVariantName_SchemaC == "" && this.state.colorC == '#5eb8b3') {
        if (this.state.setVariantName_SchemaA != "") {
          this.handlecolorA();
        } else if (this.state.setVariantName_SchemaB != "") {
          this.handlecolorB();
        }
        // block Panel3 panel4 and panel5
      } else {
        if (this.state.colorA == '#5eb8b3') {
          this.handlecolorA();
        } else if (this.state.colorB == '#5eb8b3') {
          this.handlecolorB();
        } else if (this.state.colorC == '#5eb8b3') {
          this.handlecolorC();
        }
      }
this.handlenumoncase();
    
    }

    if (this.state.panelname == "panel6") {
      this.setState({
        simulationButton: false,
        simulationSpeed: 0,
      })
      this.setting_data_simmulation()
    } else {
      this.state.forSingleCanvas = "hidden"
      this.state.simulationRunning = false;
      this.setState({
        forSingleCanvas: "hidden",
        simulationRunning: false,
      })
    }

    if (this.state.panelname == "panel7") {
      this.simCasesPositionsForSchemaA = [];
      this.simCasesPositionsForSchemaB = [];
      this.simCasesPositionsForSchemaC = [];

      // console.log("checking varients in pannel6:......A: " + this.state.setVariantName_SchemaA + " ......B: " + this.state.setVariantName_SchemaB + " .......C: " + this.state.setVariantName_SchemaC)
      if (this.state.setVariantName_SchemaA !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel1:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema A", true); // run for getting schema A case position
        // console.log("checking varients in pannel7:......A: " + this.state.setVariantName_SchemaA)
      }
      if (this.state.setVariantName_SchemaB !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel2:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema B", true); // run for getting schema B case position
        // console.log("checking varients in pannel7:......B: " + this.state.setVariantName_SchemaB)
      }
      if (this.state.setVariantName_SchemaC !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel3:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema C", true); // run for getting schema C case position
        // console.log("checking varients in pannel7:.......C: " + this.state.setVariantName_SchemaC)
      }

      //  if(this.state.setVariantName_SchemaA !== ""){
      //   // this.callSchema1("schema A",true); // run for getting schema A case position
      //   this.simCasesPositionsForSchemaA ;
      // }
      // this.handleStartSimulation();
      this.setState({
        abordSimulation: false,
        simulationRunning: false,
        simulationButton: false,
        simulationStatus: "",
      }, () => {
        setTimeout(() => {
          this.setState({
            abordSimulation: false,
            simulationRunning: true,
            simulationButton: false,
            simulationStatus: "",
            simulationComplete: false,
          })
        }, 50)

      })
      this.state.forSingleCanvas = "hidden"
      this.setState({
        forSingleCanvas: "hidden",
        pallet_bool: true
      })

    }
    this.zoomOutPallet_LayerCreator();

    this.setState({
      canvasOrangeRect: "hidden",
      canvasRedRect : "hidden"
    })
    if (this.state.panelname == "panel6") {
      this.empty_values_check_schemas();
    }
  };
  empty_values_check_schemas = () => {

    this.state.setPrc_values_check = false;
    this.checks = false;
    let layer_schemas = [];

    this.state.layer_data.map((layer) => {
      if (layer.layername !== "" || layer.layername !== null || layer.layername != undefined || layer.layername != " ") {
        if (!layer_schemas.includes(layer.layername)) {
          layer_schemas.push(layer.layername)
        }
      }
    })

    if (!this.checks && layer_schemas.includes("Schema A")) {
      this.simCasesPositionsForSchemaA.map((schema, index) => {
        if (schema.position == "" || schema.position == null || schema.position == undefined || schema.position == " ") {
          this.checks = true;
        }
      })
    }
    if (!this.checks && layer_schemas.includes("Schema B")) {
      this.simCasesPositionsForSchemaB.map((schema, index) => {
        if (schema.position == "" || schema.position == null || schema.position == undefined || schema.position == " ") {
          this.checks = true;
        }
      })
    }
    if (!this.checks && layer_schemas.includes("Schema C")) {
      this.simCasesPositionsForSchemaC.map((schema, index) => {
        if (schema.position == "" || schema.position == null || schema.position == undefined || schema.position == " ") {
          this.checks = true;
        }
      })
    }

    if (this.checks) {
      console.log("Inside this.checks");
      let { t } = this.props;
      toast.error(t(`pleasesetallvaluesandpositionsofcasesinProgramRoutineCreator`), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.state.setPrc_values_check = false;
    } else {
      this.state.setPrc_values_check = true;
    }
  }

  reOrderingSwiperIndex = () => {
    new Promise((resolve, reject) => {
      this.swiperRef?.current?.swiper.slideToLoop(0);
      setTimeout(() => {
        this.swiperRef?.current?.swiper.slideNext();
        resolve();
      }, 5)
    }).then(() => {

      // console.log("my all colors prat: A: " + this.state.colorA + " B: " + this.state.colorB + " C: " + this.state.colorC)
      // console.log("inside reorderingSwiper.then() this.state.setVariantName_SchemaA:.. " + this.state.setVariantName_SchemaA + this.state.setVariantName_SchemaB + this.state.setVariantName_SchemaC)

      if (this.state.colorA == '#5eb8b3') {
        if (this.state.setVariantName_SchemaA != undefined || this.state.setVariantName_SchemaA != "") {
          if (this.variantName_array != undefined && this.variantName_array != null && this.variantName_array != []) {
            this.swiperRef?.current?.swiper.slideToLoop((this.variantName_array.indexOf(this.state.setVariantName_SchemaA)));
          }
        }

      } else if (this.state.colorB == '#5eb8b3') {
        if (this.state.setVariantName_SchemaB != undefined || this.state.setVariantName_SchemaB != "") {
          if (this.variantName_array != undefined && this.variantName_array != null && this.variantName_array != []) {
            this.swiperRef?.current?.swiper.slideToLoop((this.variantName_array.indexOf(this.state.setVariantName_SchemaB)));
          }
        }

      } else if (this.state.colorC == '#5eb8b3') {
        if (this.state.setVariantName_SchemaC != undefined || this.state.setVariantName_SchemaC != "") {
          if (this.variantName_array != undefined && this.variantName_array != null && this.variantName_array != []) {
            this.swiperRef?.current?.swiper.slideToLoop((this.variantName_array.indexOf(this.state.setVariantName_SchemaC)));
          }
        }

      }
    });
  }

  savePrc = async () => {
    // console.log("checking for savePrc calling:...before calling fillCaseRealPositions::a1: ", this.casedataA1)
    // console.log("checking for savePrc calling:...before calling fillCaseRealPositions::a2: ", this.casedataA2)
    // console.log("checking for savePrc calling:... " + JSON.stringify(this.casedataA1) + " length:... " + this.casedataA1.length)
    const palletid = this.props.match.params.palletid;
    // console.log("........" + palletid);
    var finalObj = this.casedataA1.concat(this.casedataB1)
      .concat(this.casedataC1).concat(this.casedataA2).concat(this.casedataB2).concat(this.casedataC2);
    // console.log("finalObj inside savePrc = " + finalObj);
    const request = finalObj;
    let response = await axios.post(`/Threed/savePRC/${palletid} `, request)
      .then((response) => {
        this.setState({
          formClassName: 'success',
          formSuccessMessage: response.data.msg
        });
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data) {
            this.setState({
              formClassName: 'warning',
              formErrorMessage: err.response.data.msg
            });
          }
        }
        else {
          this.setState({
            formClassName: 'warning',
            formErrorMessage: 'Something went wrong. ' + err
          });
        }

        // console.log("response " + response);
        // console.log("Response " + response.data);
      });
  }

  layerGrid = () => {
    const palletid = this.props.match.params.palletid;
    // console.log("request inside layerGrid = " + palletid);
    // var finalObj = this.layerdata.concat(this.layerdata);
    var finalObj = this.layerdata;
    // var finalObj = this.layerdata1.concat(this.layerdata2);
    // console.log("finalObj inside layergrid = " + finalObj);
    const request = finalObj;
    let response = axios.post(`/Threed/saveLayerCreater/${palletid} `, request)
      .then((response) => {
        this.getLayer()
        this.savingSequence()

        this.setState({
          formClassName: 'success',
          formSuccessMessage: response.data.msg
        });
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data) {
            this.setState({
              formClassName: 'warning',
              formErrorMessage: err.response.data.msg
            });
          }
        }
        else {
          this.setState({
            formClassName: 'warning',
            formErrorMessage: 'Something went wrong. ' + err
          });
        }
        // console.log("lid....... " + this.state.palletid + " palletid " + this.state.palletid + " intermediatelayer " + this.state.interLayer
        // + " layername " + this.state.layerName + " layerSequence " + this.state.layerSequence + " isActive " + this.state.isActive
        // + " updatedBy " + this.state.updatedBy + " updated_DateTime " + this.state.updated_DateTime);

        // console.log("Response " + response.data);
      });
  }

  handleClickOutsideSlider = (event) => {
    if (
      this.sliderRef.current &&
      !this.sliderRef.current.contains(event.target)
    ) {
      this.setState({ rangeValue: 6 });
    }
  };
  componentWillMount() {

    this.props.i18n.changeLanguage(localStorage.getItem("language"))

  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutsideSlider);
    const canvas = this.myRef_GR.current;
    canvas.removeEventListener("click", this.manualMoving);
    canvas.removeEventListener("mousedown", this.handleMouseDown);
    canvas.removeEventListener("mousemove", this.handleMouseMove);
    canvas.removeEventListener("mouseup", this.handleMouseUp);
  }

  async componentDidMount() {
    this.savingSequence()
    document.addEventListener("click", this.handleClickOutsideSlider);
    const canvas = this.myRef_GR.current;
    canvas.addEventListener("click", this.manualMoving);
    canvas.addEventListener("mousedown", this.handleMouseDown);
    canvas.addEventListener("mousemove", this.handleMouseMove);
    canvas.addEventListener("mouseup", this.handleMouseUp);
    this.getoutsideLabelpriority()
    this.getLayer()
    this.getPrc1()
    this.getPallets()
    this.setState({
      selectedOne: true
    })
    this.PalletSelection = 1;
    canvas_forSingle = this.myRef_forSingleCanvas.current;
    canvas_forSingle.width = canvas_forSingle.clientWidth;
    canvas_forSingle.height = canvas_forSingle.clientHeight;

    canvasEle = this.myRef.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    canvas_forPRC = this.myRef_forPRC.current;
    canvas_forPRC.width = canvas_forPRC.clientWidth;
    canvas_forPRC.height = canvas_forPRC.clientHeight;

    canvas_forPRCOuterRect = this.myRef_forPRCOuterRect.current;
    canvas_forPRCOuterRect.width = canvas_forPRCOuterRect.clientWidth;
    canvas_forPRCOuterRect.height = canvas_forPRCOuterRect.clientHeight;

    canvas_For_PatternWizard = this.myRef_for_PatternWizard.current;
    canvas_For_PatternWizard.width = canvas_For_PatternWizard.clientWidth;
    canvas_For_PatternWizard.height = canvas_For_PatternWizard.clientHeight;


    canvas_For_LayerCreator = this.myRef_for_LayerCreator.current;
    canvas_For_LayerCreator.width = canvas_For_LayerCreator.clientWidth;
    canvas_For_LayerCreator.height = canvas_For_LayerCreator.clientHeight;

    canvas_For_PDCanvas = this.myRef_forPDCanvas.current;
    canvas_For_PDCanvas.width = canvas_For_PDCanvas.clientWidth;
    canvas_For_PDCanvas.height = canvas_For_PDCanvas.clientHeight;


    canvas_For_PDPatilCanvas = this.myRef_forPDPatilCanvas.current;
    canvas_For_PDPatilCanvas.width = canvas_For_PDPatilCanvas.clientWidth;
    canvas_For_PDPatilCanvas.height = canvas_For_PDPatilCanvas.clientHeight;

    canvas_For_PDPatilpriyaCanvas = this.myRef_forPDPatilpriyaCanvas.current;
    canvas_For_PDPatilpriyaCanvas.width = canvas_For_PDPatilpriyaCanvas.clientWidth;
    canvas_For_PDPatilpriyaCanvas.height = canvas_For_PDPatilpriyaCanvas.clientHeight;


    canvasEle_GR = this.myRef_GR.current;
    canvasEle_GR.width = canvasEle_GR.clientWidth;
    canvasEle_GR.height = canvasEle_GR.clientHeight;

    //Orange
    canvasEle_OR = this.myRef_OR.current;
    canvasEle_OR.width = canvasEle_OR.clientWidth;
    canvasEle_OR.height = canvasEle_OR.clientHeight;

    //Red
    canvasEle_RD = this.myRef_RD.current;
    canvasEle_RD.width = canvasEle_RD.clientWidth;
    canvasEle_RD.height = canvasEle_RD.clientHeight;



    // get context of the canvas

    canvasEleCase = this.myRefCase.current;
    canvasEleCase.width = canvasEleCase.clientWidth;
    canvasEleCase.height = canvasEleCase.clientHeight;


    canvasEle_GRCaseFreez = this.myRef_GRCaseFreez.current;
    canvasEle_GRCaseFreez.width = canvasEle_GR.clientWidth;
    canvasEle_GRCaseFreez.height = canvasEle_GR.clientHeight;

    // console.log("canvasEleCase.clientWidth" + canvasEleCase.clientWidth)

    this.ctx_forPRC = canvas_forPRC.getContext("2d");
    this.ctx_forPRCOuterRect = canvas_forPRCOuterRect.getContext("2d");
    this.ctx_PatternWizard = canvas_For_PatternWizard.getContext("2d");
    this.ctx_LayerCreator = canvas_For_LayerCreator.getContext("2d");
    this.ctx_PDCanvas = canvas_For_PDCanvas.getContext("2d");
    this.ctx_PDPatilCanvas = canvas_For_PDPatilCanvas.getContext("2d");
    this.ctx_PDPatilpriyaCanvas = canvas_For_PDPatilpriyaCanvas.getContext("2d");
    this.ctx_forSingle = canvas_forSingle.getContext("2d");
    this.ctx = canvasEle.getContext("2d");
    this.ctxCase = canvasEleCase.getContext("2d");
    this.ctx_greenRect = canvasEle_GR.getContext("2d");
    this.ctx_orangeRect = canvasEle_OR.getContext("2d");
    this.ctx_redRect = canvasEle_RD.getContext("2d");
    this.ctx_GRCaseFreez = canvasEle_GRCaseFreez.getContext("2d");
    this.drawPallet_1_2();
    this.state.selectedOne = true;
    this.PalletSelection = 1;
    let delayres = await this.delay(3000);
    var promise = new Promise((resolve, reject) => {

      let result = this.arrow();
      let result1 = this.arrowimageBotom();
      if (result === true) {
        resolve("Promise resolved successfully");
      }
      else {
        reject(Error("Promise rejected"));
      }
    });

    let obj = { newName: '' };

    promise.then(result => {
      this.setState({ arrowUpdate: true });
      // console.log("promise success inside componentDidMount");
    }, function (error) {
      this.setState({ arrowUpdate: false });
      // console.log("promise failure inside componentDidMount");
    });

    // this.CaseZPos = this.caseType.split('_');
    // console.log("Inside ComponentDidMount 1 this.CaseZPos ", this.CaseZPos);
    this.Case_Z_Pos = (parseInt(this.Case_Height)) + (parseInt(this.intermediateLayerType1));
    // console.log("Inside ComponentDidMount 2 this.Case_Z_Pos ", this.Case_Z_Pos);
    //  this.handlecolorA("loading_App")

  }

  delay = (delayInms) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    }).then(() => {
      this.setState({
        setCircularProgress: "hidden",
      })
    });
  }

  drawGreenRect = (x, y, w, h) => {

    this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

    let greenRectInfo = { x: x, y: y, w: w, h: h };
    // boxes.map(info => {
    // console.log("info :" + info.toString());

    console.log("case Green rect x=", x, " y=", y, " w=", w, " h=", h);

    this.drawFillRect1(greenRectInfo)
    // })
    // console.log("display draw:" + this.drawGreenRect);

    this.setState({
      canvasGreenRect: "visible",
      canvasfreezGreenRect: "visible",

    })
  }
  // draw rectangle with background
  drawFillRect1 = (info, style = {}) => {

    const { x, y, w, h } = info;
    const { backgroundColor = '#00FF00' } = style;

    this.ctx_greenRect.beginPath();
    this.ctx_greenRect.fillStyle = backgroundColor;

    // let alpha = i * 0.1;
    // ths.ctx.globalAlpha = alpha;


    // this.storeCasesFor_PRC.push(info)

    // this.storeCasesFor_PRC[0].x;
    // this.storeCasesFor_PRC[0].y;
    // this.storeCasesFor_PRC[0].w;
    // this.storeCasesFor_PRC[0].h;

    // this.storeCasesFor_PRC[1].x;
    // this.storeCasesFor_PRC[1].y;
    // this.storeCasesFor_PRC[1].w;
    // this.storeCasesFor_PRC[1].h;

    // this.storeCasesFor_PRC[2].x;
    // this.storeCasesFor_PRC[2].y;
    // this.storeCasesFor_PRC[2].w;
    // this.storeCasesFor_PRC[2].h;

    // this.storeCasesFor_PRC[3].x;
    // this.storeCasesFor_PRC[3].y;
    // this.storeCasesFor_PRC[3].w;
    // this.storeCasesFor_PRC[3].h;

    // this.storeCasesFor_PRC[4].x;
    // this.storeCasesFor_PRC[4].y;
    // this.storeCasesFor_PRC[4].w;
    // this.storeCasesFor_PRC[4].h;

    // this.storeCasesFor_PRC[5].x;
    // this.storeCasesFor_PRC[5].y;
    // this.storeCasesFor_PRC[5].w;
    // this.storeCasesFor_PRC[5].h;

    // console.log(" drawFillRect1 ")
    // if (this.rotate == true) {

    // this.rotate = false;
    // console.log("greenRect drawFillRect1 display greenrect values : " + this.state.setnumberx + " " + this.state.setnumbery);
    // this.ctx_greenRect.fillRect(this.state.setnumberx, this.state.setnumbery, h, w);

    // if (this.checkClicked == true) {
    //   this.checkClicked = false;
    //   this.ctx_greenRect.fillRect(this.state.setnumberx, this.state.setnumbery, w, h);

    // }

    // }
    // else {
    this.ctx_greenRect.globalAlpha = 0.75;
    this.ctx_greenRect.fillRect(x, y, w, h);
    // this.ctx_greenRect.fillRect(50*i, x, y, w, h);
    // }


  }

 drawOrangeRect = (x, y, w, h) => {

    this.ctx_orangeRect.clearRect(0, 0, this.myRef_OR.current.clientWidth, this.myRef_OR.current.clientHeight);

    let orangeRectInfo = { x: x, y: y, w: w, h: h };
    this.drawFillRect2(orangeRectInfo)

    this.setState({
      canvasOrangeRect: "visible",
      canvasfreezGreenRect: "visible"
    })
  }

  drawFillRect2 = (info, style = {}) => {

    const { x, y, w, h } = info;
    const { backgroundColor = '#FFD700' } = style;

    this.ctx_orangeRect.beginPath();
    this.ctx_orangeRect.fillStyle = backgroundColor;
    this.ctx_orangeRect.globalAlpha = 0.75;
    this.ctx_orangeRect.fillRect(x, y, w, h);
  }

  drawRedRect = (x, y, w, h) => {

    this.ctx_redRect.clearRect(0, 0, this.myRef_RD.current.clientWidth, this.myRef_RD.current.clientHeight);

    let redRectInfo = { x: x, y: y, w: w, h: h };
    this.drawFillRect3(redRectInfo)

    this.setState({
      canvasRedRect: "visible",
      canvasfreezGreenRect: "visible"
    })
  }

  drawFillRect3 = (info, style = {}) => {

    const { x, y, w, h } = info;
    const { backgroundColor = '#FF0000' } = style;

    this.ctx_redRect.beginPath();
    this.ctx_redRect.fillStyle = backgroundColor;
    this.ctx_redRect.globalAlpha = 0.75;
    this.ctx_redRect.fillRect(x, y, w, h);
  }

  handleSelected = (event) => {
    this.setState({
      preposx: this.setpreposx,
      preposy: this.setpreposy,
      preposz: this.setpreposz,
    });

  }

  onhandleSelected = () => {

    // console.log("click me :");
    this.iterate1++;

    if ((this.iterate1 % 2) === 0) {
      this.setState({
        preValueXBool: false,
        preValueYBool: false,
        preValueZBool: false,

        checkOffestXBool: false,
        checkOffestYBool: false,
        checkOffestZBool: false,

        preOffsetXNeg: false,
        checkOffsetXNeg: false,


        predropdownBool: false,
        predropdownBool: false,

      });
    }
    else {
      this.setState({
        preValueXBool: true,
        preValueYBool: true,
        preValueZBool: true,

        checkOffestXBool: true,
        checkOffestYBool: true,
        checkOffestZBool: false,

        preOffsetXNeg: true,
        checkOffsetXNeg: true,


        predropdownBool: true,
        predropdownBool: true,

      });
    }

    this.setState({

      preposx: this.setpreposx,
      preposy: this.setpreposy,
      // preposz: this.setpreposz,

    });

    // console.log("display number:" + this.setpreposx);
    // console.log("display number:" + this.setpreposy);
    // console.log("display number:" + this.setpreposz);
  }






  valuechangePreposY = (value) => {
    this.setState({
      // setnumberx: value,
      preposy: value

    });
  }

  valuechangePreposZ = (value) => {
    this.setState({
      // setnumberx: value,
      preposz: value

    });
  }

  onvaluechangepreposX = name => (event) => {

    this.setpreposx = event.target.value;
    let value = event.target.value;
    if (name === "setnumberx") {
      this.setState({
        setnumberx: true,
      });
    }
    if (this.state.selectedOne) {
      if (name === "setnumberx") {

        this.globalScalex = event.target.value;

        this.setState({
          [name]: value
        });
      }
    }

    if (this.state.selectedTwo) {
      if (name === "setnumberx2") {

        this.globalScalex = event.target.value;

        this.setState({
          [name]: value
        });
      }
    }
  }




  onvaluechangepreposY = name => (event) => {
    this.setpreposy = event.target.value;
    let value = event.target.value;
    if (name === "setnumbery") {
      this.setState({
        setnumbery: true,
      });
    }
    if (this.state.selectedOne) {
      if (name === "setnumbery") {

        this.globalScaley = event.target.value;

        this.setState({
          [name]: value
        });
      }
    }

    if (this.state.selectedTwo) {
      if (name === "setnumbery2") {

        this.globalScaley = event.target.value;

        this.setState({
          [name]: value
        });
      }
    }
  }

  onChange_2ndPrePos = name => (event) => {

    console.log("Inside onChange_2ndPrePos event.target.value 1st = ", event.target.value, " name =", name);

    if (name == "Second_PrePos_Y") {
      this.set_2ndPrePos_Y = event.target.value;
      console.log("Inside onChange_2ndPrePos this.set_2ndPrePos_Y = ", this.set_2ndPrePos_Y);
    }
    if (name == "Second_PrePos_X") {
      this.set_2ndPrePos_X = event.target.value;
      console.log("Inside onChange_2ndPrePos this.set_2ndPrePos_X = ", this.set_2ndPrePos_X);
    }
    if (name == "Second_PrePos_Z") {
      this.set_2ndPrePos_Z = event.target.value;
      console.log("Inside onChange_2ndPrePos this.set_2ndPrePos_Z = ", this.set_2ndPrePos_Z);
    }
  }

  onChange_3rdPrePos = name => (event) => {

    console.log("Inside onChange_3rdPrePos event.target.value 1st = ", event.target.value, " name =", name);

    if (name == "Third_PrePos_Y") {
      this.set_3rdPrePos_Y = event.target.value;
      console.log("Inside onChange_3rdPrePos this.set_3rdPrePos_Y = ", this.set_3rdPrePos_Y);
    }
    if (name == "Third_PrePos_X") {
      this.set_3rdPrePos_X = event.target.value;
      console.log("Inside onChange_3rdPrePos this.set_3rdPrePos_X = ", this.set_3rdPrePos_X);
    }
    if (name == "Third_PrePos_Z") {
      this.set_3rdPrePos_Z = event.target.value;
      console.log("Inside onChange_3rdPrePos this.set_3rdPrePos_Z = ", this.set_3rdPrePos_Z);
    }
  }

  onvaluechangepreposZ = name => (event) => {
    this.setpreposz = event.target.value;
    let value = event.target.value;
    if (name === "setnumberz") {
      this.setState({
        setnumberz: true,
      });
    }
    if (this.state.selectedOne) {
      if (name === "setnumberz") {

        this.globalScalez = event.target.value;

        this.setState({
          [name]: value
        });
      }
    }

    if (this.state.selectedTwo) {
      if (name === "setnumberz2") {

        this.globalScalez = event.target.value;

        this.setState({
          [name]: value
        });
      }
    }
  }

  onBlurFor1stX = (e) => {
    console.log("Inside onBlurFor1stX ", e.target.value);
    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.setnumberx = 0;
        this.setState({
          setnumberx: 0
        })
      }
    } else if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.setnumberx2 = 0;
        this.setState({
          setnumberx2: 0
        })
      }
    }
  }
  onBlurFor1stY = (e) => {
    console.log("Inside onBlurFor1stX ", e.target.value);
    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.setnumbery = 0;
        this.setState({
          setnumbery: 0
        })
      }
    } else if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.setnumbery2 = 0;
        this.setState({
          setnumbery2: 0
        })
      }
    }
  }
  onBlurFor1stZ = (e) => {
    console.log("Inside onBlurFor1stZ ", e.target.value);
    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.setnumberz = 0;
        this.setState({
          setnumberz: 0
        })
      }
    } else if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.setnumberz2 = 0;
        this.setState({
          setnumberz2: 0
        })
      }
    }
  }
  onChange_2ndPrePos = name => (event) => {


    if (name == "Second_PrePos_Y") {
      this.secondPrePos_Y = event.target.value
      console.log("Inside onChange_2ndPrePos this.secondPrePos_Y = ", this.secondPrePos_Y);

      if (this.state.selectedOne) {
        this.setState({
          S_set_2ndPrePos_Y: event.target.value
        })
      }
      else if (this.state.selectedTwo) {
        this.setState({
          S_set_2ndPrePos_Y2: event.target.value
        })
      }
    }
    if (name == "Second_PrePos_X") {

      this.secondPrePos_X = event.target.value
      console.log("Inside onChange_2ndPrePos this.secondPrePos_X = ", this.secondPrePos_X);

      if (this.state.selectedOne) {
        this.setState({
          S_set_2ndPrePos_X: event.target.value
        })
      }
      else if (this.state.selectedTwo) {
        this.setState({
          S_set_2ndPrePos_X2: event.target.value
        })
      }
    }
    if (name == "Second_PrePos_Z") {
      console.log("Inside onChange_2ndPrePos this.set_2ndPrePos_Z = ", this.set_2ndPrePos_Z);
      // this.set_2ndPrePos_Z = event.target.value;

      if (this.state.selectedOne) {
        this.setState({
          S_set_2ndPrePos_Z: event.target.value
        })
      }
      else if (this.state.selectedTwo) {
        this.setState({
          S_set_2ndPrePos_Z2: event.target.value
        })
      }
    }
  }

  // Second_PrePos_X
  callBlur_2ndPrePos_X = (e) => {

    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.S_set_2ndPrePos_X = 0;
        this.setState({
          S_set_2ndPrePos_X: 0
        })
      }
    }
    if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.S_set_2ndPrePos_X2 = 0;
        this.setState({
          S_set_2ndPrePos_X2: 0
        })
      }
    }
  }
  // Second_PrePos_Y
  callBlur_2ndPrePos_Y = (e) => {
    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.S_set_2ndPrePos_Y = 0;
        this.setState({
          S_set_2ndPrePos_Y: 0
        })
      }
    }
    if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.S_set_2ndPrePos_Y2 = 0;
        this.setState({
          S_set_2ndPrePos_Y2: 0
        })
      }
    }
  }
  // Second_PrePos_Z
  callBlur_2ndPrePos_Z = (e) => {
    console.log("Inside the callBlur_2ndPrePos_Z = " + e.target.value)

    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.S_set_2ndPrePos_Z = 0;
        this.setState({
          S_set_2ndPrePos_Z: 0
        })
      }
    }
    if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.S_set_2ndPrePos_Z2 = 0;
        this.setState({
          S_set_2ndPrePos_Z2: 0
        })
      }
    }
  }

  onChange_3rdPrePos = name => (event) => {


    if (name == "Third_PrePos_Y") {

      this.thirdPrePos_Y = event.target.value;
      console.log("Inside onChange_3rdPrePos this.thirdPrePos_Y = ", this.thirdPrePos_Y);

      if (this.state.selectedOne) {

        this.setState({
          S_set_3rdPrePos_Y: event.target.value
        })
      }
      else if (this.state.selectedTwo) {
        this.setState({
          S_set_3rdPrePos_Y2: event.target.value
        })
      }
    }
    if (name == "Third_PrePos_X") {
      
      this.thirdPrePos_X = event.target.value;
      console.log("Inside onChange_3rdPrePos this.thirdPrePos_X = ", this.thirdPrePos_X);

      if (this.state.selectedOne) {

        this.setState({
          S_set_3rdPrePos_X: event.target.value
        })
      }
      else if (this.state.selectedTwo) {
        this.setState({
          S_set_3rdPrePos_X2: event.target.value
        })
      }
    }
    if (name == "Third_PrePos_Z") {
      console.log("Inside onChange_3rdPrePos this.set_3rdPrePos_Z = ", this.set_3rdPrePos_Z);

      if (this.state.selectedOne) {
        this.setState({
          S_set_3rdPrePos_Z: event.target.value
        })
      }
      else if (this.state.selectedTwo) {
        this.setState({
          S_set_3rdPrePos_Z2: event.target.value
        })
      }
    }
  }

  // Third_PrePos_X
  callBlur_3rdPrePosX = (e) => {

    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.S_set_3rdPrePos_X = 0;
        this.setState({
          S_set_3rdPrePos_X: 0
        })
      }
    }
    if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.S_set_3rdPrePos_X2 = 0;
        this.setState({
          S_set_3rdPrePos_X2: 0
        })
      }
    }
  }
  // Third_PrePos_Y
  callBlur_3rdPrePosY = (e) => {

    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.S_set_3rdPrePos_Y = 0;
        this.setState({
          S_set_3rdPrePos_Y: 0
        })
      }
    }
    if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.S_set_3rdPrePos_Y2 = 0;
        this.setState({
          S_set_3rdPrePos_Y2: 0
        })
      }
    }
  }
  // Third_PrePos_Z
  callBlur_3rdPrePosZ = (e) => {

    if (this.state.selectedOne) {
      if (e.target.value == "") {
        this.state.S_set_3rdPrePos_Z = 0;
        this.setState({
          S_set_3rdPrePos_Z: 0
        })
      }
    }
    if (this.state.selectedTwo) {
      if (e.target.value == "") {
        this.state.S_set_3rdPrePos_Z2 = 0;
        this.setState({
          S_set_3rdPrePos_Z2: 0
        })
      }
    }
  }

  handleSelectedXneg = (event) => {

    // console.log("this.offsetXneg " + this.offsetXneg);
    if (this.offsetXneg == false) {
      // console.log("this.offsetXneg if " + this.offsetXneg);
      this.setState({
        preposx: -(this.setpreposx),
        offsetXneg: true
      });
    }
    if (this.state.offsetXneg == true) {
      // console.log("this.offsetXneg else " + this.offsetXneg);
      this.setState({
        preposx: this.setpreposx,
        offsetXneg: false
      });
    }
  }

  handleSelectedYneg = (event) => {

    // console.log("this.offsetYneg " + this.offsetYneg);
    if (this.offsetYneg == false) {
      // console.log("this.offsetYneg if " + this.offsetYneg);
      this.setState({
        preposy: -(this.setpreposy),
        offsetYneg: true
      });
    }
    if (this.state.offsetYneg == true) {
      // console.log("this.offsetYneg else " + this.offsetYneg);
      this.setState({
        preposy: this.setpreposy,
        offsetYneg: false
      });
    }
  }


  onchangeLayerBlur = (event) => {

    // console.log("no_Of_Layers event.target.value " + event.target.value);

    if (event.target.value == "" || event.target.value == 0) {
      // console.log("Creator empty event.target.value : " + event.target.value);

      this.noOfLayers = 1;
      this.state.no_Of_Layers = 1;
      this.state.layers = 1;
      // this.noOfLayers1 = 1;
      this.setState({
        no_Of_Layers: this.noOfLayers,
        layers: 1

      });

    }
    if (event.target.value < 0 || event.target.value < 1 || event.target.value < 10) {
      // this.state.setnumberx = 1;
      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""
    }
    if (event.target.value > 50) {
      this.state.setnumberx = 50;
      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""
    }

    // console.log("layer number this.state.layer_data.length " + this.state.layer_data.length);
    // console.log("layer number this.state.layers inside changelayer " + this.state.layers);

    let onchangerecords = [];

    for (let j = 0; j < 2; j++) {

      let pallet_no = j + 1;
      let defaultInterLayerType = {
        "l_id": 0,
        "palletid": this.state.palletid,
        "pallet_no": pallet_no,
        "layername": "",
        "intermediatelayer": false,
        "layerSequence": 0
      }
      onchangerecords.push(defaultInterLayerType);

      for (let i = 0; i < this.state.layers; i++) {
        onchangerecords.push({
          "l_id": 0,
          "palletid": this.state.palletid,
          "pallet_no": pallet_no,
          "layername": "Schema A",
          "intermediatelayer": false,
          "layerSequence": i + 1
        })

      }

    }


    this.layerdata = onchangerecords;

    // console.log("onchangeLayerBlur layer_data onchangerecords ", onchangerecords, " onchangerecords.length "
    // , onchangerecords.length, " onchangerecords.length/2 ", onchangerecords.length / 2);

    // this.setState({
    //   layer_data: onchangerecords.length/2
    // });

    //
    //
    let tempLayer_data = [];
    for (let i = 0; i < this.layerdata.length; i++) {
      if (this.layerdata[i].pallet_no == 1) {
        tempLayer_data[this.layerdata[i].layerSequence] = this.layerdata[i];
      }
    }
    this.state.layer_data = tempLayer_data;
    // console.log("my layer_data pallet check 1 " + JSON.stringify(tempLayer_data) + "........ " + JSON.stringify(this.layerdata))
    //
    //

    // let half = Math.ceil(this.layerdata.length/2)
    // this.state.layer_data = this.layerdata.slice(0, half);

    // console.log("onchangeLayerBlur layer_data ", this.state.layer_data)

    // this.forceUpdate()
    this.layerGrid();
    this.updateSelection1();

  }




  handleChange = name => event => {

    // change layer code integrated here
    if (event.target.value < 0 || event.target.value > 50) {
      // console.log("Out of the range Number of Layer " + event.target.value);
      this.setState({
        errorNumberOfLayer: true
      });
      this.state.errorHelperForLayer = " 1 - 50"
    }
    else if (event.target.value == "" || event.target.value <= 0) {
      this.setState({
        errorNumberOfLayer: true
      });
      this.state.errorHelperForLayer = " 1 - 50"
    }
    else {
      // console.log("Out of the range Number of Layer else part " + event.target.value);
      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""
    }



    // this.state.layers = event.target.value;

    if (event.target.value <= 50) {
      // console.log("less 50 if : " + event.target.value);
      if (event.target.value == "" || event.target.value <= 0) {
        // console.log("Layer empty")
        event.target.value = 1;
      }
      this.state.layers = event.target.value;

      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""

      // console.log("Layers " + event.target.value);
    }
    else if (event.target.value < 0) {
      this.state.layers = 1;
      event.target.value = 1;
    }

    else {
      // console.log("less 50 else : " + event.target.value);
      this.state.layers = 1;
      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""
      this.state.layers = 50;
      event.target.value = 50;
    }

    if (this.state.selectedOne) {
      this.noOfLayers = event.target.value;
      // this.noOfLayers1 = event.target.value;
    }
    else if (this.state.selectedTwo) {
      this.noOfLayers = event.target.value;
      // this.noOfLayers2 = event.target.value;
    }
    this.setState({
      no_Of_Layers: event.target.value

    });
    this.forceUpdate()

  }


  map(Val, in_max, in_min, out_max, out_min) {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    return calculatedVal;
  }



  callSchema = (noOfSchemaCases) => {
    this.imageSrc_array = [];
    this.variantName_array = [];
    if (this.colorA == '#5eb8b3') {
      this.variantName_arrayA = [];
      this.imageSrc_arrayA = [];
    } else if (this.colorB == '#5eb8b3') {
      this.variantName_arrayB = [];
      this.imageSrc_arrayB = [];
    } else if (this.colorC == '#5eb8b3') {
      this.variantName_arrayC = [];
      this.imageSrc_arrayC = [];
    }
    // console.log(" this.cases_Schema_A " + this.cases_Schema_A);
    this.saveVariantImages(noOfSchemaCases);
    this.ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
    this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);

    this.setState({
      pallet_bool: false,
      pallet_12: true
    })

    this.enableCarousel = true

  }

  callSchema1 = (simulationSchema, isSim) => {

    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;

    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;

    }
    if (this.state.selectedOne) {
      this.setVariantName_SchemaA = this.setVariantName_SchemaA;
      // this.setVariantName_SchemaA = this.setVariantName_SchemaA1;
      this.setVariantName_SchemaB = this.setVariantName_SchemaB;
      // this.setVariantName_SchemaB = this.setVariantName_SchemaB1;
      this.setVariantName_SchemaC = this.setVariantName_SchemaC;
      // this.setVariantName_SchemaC = this.setVariantName_SchemaC1;

      this.state.setVariantName_SchemaA = this.setVariantName_SchemaA;
      this.state.setVariantName_SchemaB = this.setVariantName_SchemaB;
      this.state.setVariantName_SchemaC = this.setVariantName_SchemaC;
    }
    else if (this.state.selectedTwo) {
      this.setVariantName_SchemaA = this.setVariantName_SchemaA;
      // this.setVariantName_SchemaA = this.setVariantName_SchemaA2;
      this.setVariantName_SchemaB = this.setVariantName_SchemaB;
      // this.setVariantName_SchemaB = this.setVariantName_SchemaB2;
      this.setVariantName_SchemaC = this.setVariantName_SchemaC;
      // this.setVariantName_SchemaC = this.setVariantName_SchemaC2;

      this.state.setVariantName_SchemaA = this.setVariantName_SchemaA;
      this.state.setVariantName_SchemaB = this.setVariantName_SchemaB;
      this.state.setVariantName_SchemaC = this.setVariantName_SchemaC;

    }

    // console.log(" this.setVariantName_SchemaA " + this.setVariantName_SchemaA);

    // console.log("this.state.colorA " + this.state.colorA + "this.state.colorB  " + this.state.colorB + "this.state.colorc " + this.state.colorC);
    if (simulationSchema) {
      if (simulationSchema == "schema A") {
        var variant = this.state.setVariantName_SchemaA;
        var noOfSchemaCases = this.CasesSchemaA;
      }


      if (simulationSchema == "schema B") {

        var variant = this.state.setVariantName_SchemaB;
        var noOfSchemaCases = this.CasesSchemaB;

      }

      if (simulationSchema == "schema C") {
        var variant = this.state.setVariantName_SchemaC;
        var noOfSchemaCases = this.CasesSchemaC;
      }
    } else {
      if (this.colorA == "#5eb8b3") {
        var variant = this.state.setVariantName_SchemaA;
        var noOfSchemaCases = this.CasesSchemaA;
      }


      if (this.colorB == "#5eb8b3") {

        var variant = this.state.setVariantName_SchemaB;
        var noOfSchemaCases = this.CasesSchemaB;

      }

      if (this.colorC == "#5eb8b3") {
        var variant = this.state.setVariantName_SchemaC;
        var noOfSchemaCases = this.CasesSchemaC;
      }
    }



    // this.createVariants(variant, noOfSchemaCases);
    // console.log("variant  updated list " + variant + "noOfSchemaCases " + noOfSchemaCases);
    console.log("Variant::",variant,"noofSchemaCases::",noOfSchemaCases);
    this.createVariantsForPRC(variant, noOfSchemaCases, isSim, simulationSchema)

    this.setState({
      pallet_bool: false,
      pallet_12: false,
    })

  }

  createVariantsForPRC = (variant, noOfSchemaCases, isSim, simulationSchema) => {

    this.frameForPRC = true;
    // progressNum = 0;

    // console.log("numberVar createVariantsForPRC ", numberVar)

    let index = numberVar.indexOf(variant);

    // console.log("createVariantsForPRC index ", index, " variant ", variant, "poss_Origin[index][0] ", poss_Origin[index][0])

    // console.log("createVariantsForPRC poss_Origin ", poss_Origin.length, " numberVar ", numberVar.length);

    // console.log("createVariantsForPRC variant ", variant, " noOfSchemaCases ", noOfSchemaCases, " index ", index, " poss_Origin[index][0] ", poss_Origin[index][0])
    this.duplicateVarientCheck = [];
     console.log("checking generateFrames pos-origin for limited var,prc:: ", poss_Origin,index)
    this.generateFrames(poss_Origin, index, noOfSchemaCases, isSim, simulationSchema);

  }

  callSchemafor1 = () => {

    this.state.selectedOne = true;
    this.state.selectedTwo = false;
    this.PalletSelection = 1;

    this.setState({
      outside_Label_Priority: this.outside_Label_Priority,
      // outside_Label_Priority1: this.outside_Label_Priority1,
      ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
      HWeighted1: this.HWeighted1,
      VWeighted1: this.VWeighted1,
      setVariantName_SchemaA: this.setVariantName_SchemaA,
      // setVariantName_SchemaA: this.setVariantName_SchemaA1,
      setVariantName_SchemaB: this.setVariantName_SchemaB,
      // setVariantName_SchemaB: this.setVariantName_SchemaB1,
      setVariantName_SchemaC: this.setVariantName_SchemaC,
      // setVariantName_SchemaC: this.setVariantName_SchemaC1,
      palletid: this.palletid,
      palletname: this.palletname,
      // originPal1: this.originPal1,
      originPal2: this.originPal2,
      firstcase_pal1: this.firstcase_pal1,
      firstcase_pal2: this.firstcase_pal2,
      WA_1_width_X_Dir: this.WA_1_width_X_Dir,
      WA_1_Length_Y_Dir: this.WA_1_Length_Y_Dir,
      WA_1_Offset_X_Dir: this.WA_1_Offset_X_Dir,
      WA_1_Offset_Y_Dir: this.WA_1_Offset_Y_Dir,
      WA_2_width_X_Dir: this.WA_2_width_X_Dir,
      WA_2_Length_Y_Dir: this.WA_2_Length_Y_Dir,
      WA_2_Offset_X_Dir: this.WA_2_Offset_X_Dir,
      WA_2_Offset_Y_Dir: this.WA_2_Offset_Y_Dir,
      pallete_Type: this.palletType1,
      intermediate_Layer_Type: this.intermediateLayerType1,
      case_Type: this.caseType,
      // case_Type1: this.caseType1,
      no_Of_Layers: this.noOfLayers,
      // no_Of_Layers: this.noOfLayers1,
      cases_Schema_A: this.cases_Schema_A1,
      cases_Schema_B: this.cases_Schema_B1,
      cases_Schema_C: this.cases_Schema_C1,
      layer: this.layer,
      // layer_data: this.layerdata,
      // layer_data: this.layerdata1,
      int_Layer: this.int_Layer,
      // int_Layer: this.int_Layer1,
      layers: this.noOfLayers,
      // layers: this.noOfLayers1,
      layerdataupdated: this.layerdataupdated
    });
    this.handleSelection_intermediateLayer(this.palletType1);

    // console.log("inside callSchemafor1 = ")
    //
    //
    let tempLayer_data = [];
    for (let i = 0; i < this.layerdata.length; i++) {
      if (this.layerdata[i].pallet_no == 1) {
        tempLayer_data[this.layerdata[i].layerSequence] = this.layerdata[i];
      }
    }
    this.state.layer_data = tempLayer_data;
    // console.log("my layer_data pallet check 1 " + JSON.stringify(tempLayer_data) + "........ " + JSON.stringify(this.layerdata))
    //
    //
    // let half = Math.ceil(this.layerdata.length/2)
    // this.state.layer_data = this.layerdata.slice(0, half);
    // console.log("this.state.layer_data callSchemafor1 ", this.state.layer_data)
    this.forceUpdate();

    // this.getPallet(1);

    this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);
    this.ctx_forPRC.clearRect(0, 0, this.myRef_forPRC.current.clientWidth, this.myRef_forPRC.current.clientHeight);
    this.ctx_forPRCOuterRect.clearRect(0, 0, this.myRef_forPRCOuterRect.current.clientWidth, this.myRef_forPRCOuterRect.current.clientHeight);

    var my_gradient1 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);
    var my_gradient2 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);


    var offset_X;
    var offset_Y;


    //pallete map
    this.P_length1 = this.map(this.Pallet_Length, 0, 1400, 0, 222);  //Y POSITION
    this.P_width1 = this.map(this.Pallet_Width, 0, 1400, 0, 222);     //X POSITION

    this.state.P_length = this.P_length1;
    this.state.P_width = this.P_width1;
    // console.log(" this.state.P_length " + this.state.P_length + " this.state.P_width " + this.state.P_width)
    // console.log(" this.P_length1  " + this.P_length1 + " this.P_width1 " + this.P_width1 + "this.Pallet_Length " + this.Pallet_Length + "Pallet_Width " + this.Pallet_Width);

    this.p_xpos;
    this.p_ypos;

    this.WA_1_Length_Y_Dir = (parseInt(this.state.WA_1_Length_Y_Dir, 10))
    this.WA_1_width_X_Dir = (parseInt(this.state.WA_1_width_X_Dir, 10))


    //workarea  map
    var length = this.map(this.WA_1_Length_Y_Dir, 0, 1400, 0, 222);  //Y POSITION
    var width = this.map(this.WA_1_width_X_Dir, 0, 1400, 0, 222);     //X POSITION
    // console.log(" (parseInt(this.state.WA_1_Length_Y_Dir, 10) + this.Pallet_Length) " + (parseInt(this.state.WA_1_Length_Y_Dir, 10) + this.Pallet_Length) + " (parseInt(this.state.WA_1_width_X_Dir, 10) " + (parseInt(this.state.WA_1_width_X_Dir, 10)));

    var xpos;
    var ypos;


    this.WA_1_Offset_X_Dir = (parseInt(this.state.WA_1_Offset_X_Dir, 10))
    this.WA_1_Offset_Y_Dir = (parseInt(this.state.WA_1_Offset_Y_Dir, 10))

    // if (this.state.originPal1 == "Upper Right Corner") {
    //   this.originPal1 = "Upper Right Corner";
    //   xpos = 505 - width;
    //   ypos = 122;

    //   this.p_xpos = 505 - this.P_width1;
    //   this.p_ypos = 122;

    //   //offset
    //   offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
    //   offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

    //   xpos = xpos + offset_X;
    //   ypos = ypos - offset_Y;

    //   console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
    // }
    // else if (this.state.originPal1 == "Upper Left Corner") {
    //   this.originPal1 = "Upper Left Corner";
    //   xpos = 290;
    //   ypos = 122;

    //   this.p_xpos = 290;
    //   this.p_ypos = 122;

    //   offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
    //   offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

    //   xpos = xpos - offset_X;
    //   ypos = ypos - offset_Y;

    // }
    // else if (this.state.originPal1 == "Lower Left Corner") {
    //   this.originPal1 = "Lower Left Corner";
    //   xpos = 295;
    //   ypos = 248 - length;

    //   this.p_xpos = 295;
    //   this.p_ypos = 248 - this.P_length1;

    //   offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
    //   offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

    //   xpos = xpos - offset_X;
    //   ypos = ypos + offset_Y;
    // }
    // else if (this.state.originPal1 == "Lower Right Corner") {
    //   this.originPal1 = "Lower Right Corner";
    //   xpos = 490 - width;
    //   ypos = 248 - length;

    //   this.p_xpos = 490 - this.P_width1;
    //   this.p_ypos = 248 - this.P_length1;


    //   offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
    //   offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

    //   xpos = xpos + offset_X;
    //   ypos = ypos + offset_Y;
    // }
    if (this.state.pallete_Type == "EU 6: 800 x 600") {
      console.log("called inside if condition ")

      if (this.state.originPal1 == "Upper Right Corner") {
        this.originPal1 = "Upper Right Corner";
        xpos = 442 - width;
        ypos = 124;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 442 - this.P_width1
        this.p_ypos = 124;

        //offset
        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

        console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
      }
      else if (this.state.originPal1 == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
        xpos = 348;
        ypos = 124;

        this.p_xpos = 348;
        this.p_ypos = 124;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal1 == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
        xpos = 350;
        ypos = 246 - length;

        this.p_xpos = 350;
        this.p_ypos = 246 - this.P_length1;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal1 == "Lower Right Corner") {
        this.originPal1 = "Lower Right Corner";
        xpos = 444 - width;
        ypos = 246 - length;

        this.p_xpos = 444 - this.P_width1;
        this.p_ypos = 246 - this.P_length1;


        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "EU 1: 1200 x 800") {
      console.log("called inside else if condition ")
      if (this.state.originPal1 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal1 = "Upper Right Corner";
        xpos = 460 - width;
        ypos = 92;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 460 - this.P_width1
        this.p_ypos = 92;

        //offset
        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

        console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
      }
      else if (this.state.originPal1 == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
        xpos = 333;
        ypos = 92;

        this.p_xpos = 333;
        this.p_ypos = 92;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal1 == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
        xpos = 333;
        ypos = 282 - length;

        this.p_xpos = 333;
        this.p_ypos = 282 - this.P_length1;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal1 == "Lower Right Corner") {
        this.originPal1 = "Lower Right Corner";
        xpos = 457 - width;
        ypos = 282 - length;

        this.p_xpos = 457 - this.P_width1;
        this.p_ypos = 282 - this.P_length1;


        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "EU 2: 1200 x 1000") {
      console.log("called inside else if condition ")
      if (this.state.originPal1 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal1 = "Upper Right Corner";
        xpos = 475 - width;
        ypos = 90;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 475 - this.P_width1
        this.p_ypos = 90;

        //offset
        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

        console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
      }
      else if (this.state.originPal1 == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
        xpos = 315;
        ypos = 90;

        this.p_xpos = 315;
        this.p_ypos = 90;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal1 == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
        xpos = 315;
        ypos = 282 - length;

        this.p_xpos = 315;
        this.p_ypos = 282 - this.P_length1;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal1 == "Lower Right Corner") {
        this.originPal1 = "Lower Right Corner";
        xpos = 475 - width;
        ypos = 282 - length;

        this.p_xpos = 475 - this.P_width1;
        this.p_ypos = 282 - this.P_length1;


        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "US 2: 1067 x 1067") {
      console.log("called inside else if condition ")
      if (this.state.originPal1 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal1 = "Upper Right Corner";
        xpos = 482 - width;
        ypos = 100;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 482 - this.P_width1
        this.p_ypos = 100;

        //offset
        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

        console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
      }
      else if (this.state.originPal1 == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
        xpos = 311;
        ypos = 100;

        this.p_xpos = 311;
        this.p_ypos = 100;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal1 == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
        xpos = 311;
        ypos = 270 - length;

        this.p_xpos = 311;
        this.p_ypos = 270 - this.P_length1;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal1 == "Lower Right Corner") {
        this.originPal1 = "Lower Right Corner";
        xpos = 481 - width;
        ypos = 270 - length;

        this.p_xpos = 481 - this.P_width1;
        this.p_ypos = 270 - this.P_length1;


        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "US 1: 1219 x 1016 ") {
      console.log("called inside else if condition ")
      if (this.state.originPal1 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal1 = "Upper Right Corner";
        xpos = 478 - width;
        ypos = 90;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 478 - this.P_width1
        this.p_ypos = 90;

        //offset
        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

        console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
      }
      else if (this.state.originPal1 == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
        xpos = 315;
        ypos = 89;

        this.p_xpos = 315;
        this.p_ypos = 89;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal1 == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
        xpos = 315;
        ypos = 282 - length;

        this.p_xpos = 315;
        this.p_ypos = 282 - this.P_length1;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal1 == "Lower Right Corner") {
        this.originPal1 = "Lower Right Corner";
        xpos = 475 - width;
        ypos = 282 - length;

        this.p_xpos = 475 - this.P_width1;
        this.p_ypos = 282 - this.P_length1;


        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "ASIA 1: 1100 x 1100") {
      console.log("called inside else if condition ")
      if (this.state.originPal1 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal1 = "Upper Right Corner";
        xpos = 482 - width;
        ypos = 98;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 482 - this.P_width1
        this.p_ypos = 98;

        //offset
        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

        console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
      }
      else if (this.state.originPal1 == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
        xpos = 310;
        ypos = 100;

        this.p_xpos = 310;
        this.p_ypos = 100;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal1 == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
        xpos = 308;
        ypos = 272 - length;

        this.p_xpos = 308;
        this.p_ypos = 272 - this.P_length1;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal1 == "Lower Right Corner") {

        this.originPal1 = "Lower Right Corner";
        xpos = 482 - width;
        ypos = 275 - length;

        this.p_xpos = 482 - this.P_width1;
        this.p_ypos = 275 - this.P_length1;
        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "AU 1: 1165 x 1165") {
      console.log("called inside else if condition ")
      if (this.state.originPal1 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal1 = "Upper Right Corner";
        xpos = 490 - width;
        ypos = 94;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 490 - this.P_width1
        this.p_ypos = 94;

        //offset
        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

        console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
      }
      else if (this.state.originPal1 == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
        xpos = 304;
        ypos = 93;

        this.p_xpos = 304;
        this.p_ypos = 93;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal1 == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
        xpos = 304;
        ypos = 279 - length;

        this.p_xpos = 304;
        this.p_ypos = 279 - this.P_length1;

        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal1 == "Lower Right Corner") {
        this.originPal1 = "Lower Right Corner";
        xpos = 489 - width;
        ypos = 278 - length;

        this.p_xpos = 489 - this.P_width1;
        this.p_ypos = 278 - this.P_length1;


        offset_Y = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }





    //outer rectangle 
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 5;
    my_gradient1.addColorStop(1, "#FFF2CC");
    this.ctx_forSingle.fillStyle = my_gradient1;
    this.ctx_forSingle.strokeStyle = "#FAD7AC";  //border
    this.ctx_forSingle.strokeRect(xpos, ypos, width, length);
    this.ctx_forSingle.fillRect(xpos, ypos, width, length);
    // console.log("this.x_pos for callSchemafor1 workarea " + xpos + " this.y_pos " + ypos + " this.w_width " + width + " this.l_length " + length);

    this.ctx_forSingle.stroke();

    //
    this.outerRect1_xpos = xpos;
    this.outerRect1_ypos = ypos;
    this.outerRect1_width = width;
    this.outerRect1_length = length;





    // //inner rectangle
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 4;
    my_gradient2.addColorStop(1, "white");
    this.ctx_forSingle.fillStyle = my_gradient2;
    this.ctx_forSingle.strokeStyle = "black";
    this.ctx_forSingle.strokeRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    // console.log("this.p_xpos for callSchemafor1 " + this.p_xpos + "this.p_ypos " + this.p_ypos + "this.P_width1 " + this.P_width1 + "this.P_length1" + this.P_length1);
    // console.log("this.p_xpos for callSchemafor1 " + this.p_xpos + "this.p_ypos " + this.p_ypos + "this.P_width1 " + this.P_width1 + "this.P_length1" + this.P_length1);

    this.ctx_forSingle.fillRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    this.ctx_forSingle.stroke();

    // arc
    // this.ctx.fillStyle = "black";
    // this.ctx.lineWidth = 2;
    // this.ctx.fillStyle = "white";
    // this.ctx.arc(160, 80, 20, 0, 2 * Math.PI);
    // this.ctx.fill();

    // this.ctx.font = "bold 15pt Roboto";
    // this.ctx.fillStyle = "black";
    // this.ctx.fillText(1, 155, 87, 100);
    // this.ctx.stroke();



    // circle Image
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 2;
    this.ctx_forSingle.drawImage(this.imgcircle, 120, 76, 70, 70);
    this.ctx_forSingle.fill();
    this.ctx_forSingle.stroke();

    // bottom arc
    //upper right corner
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillStyle = "#E1D5E7";
    // console.log(" this.state.arcX callschemafor1 =  " + this.state.arcX + "this.state.arcY " + this.state.arcY);
    this.ctx_forSingle.arc(this.state.arcX, this.state.arcY, 20, 0, 2 * Math.PI);

    this.ctx_forSingle.fill();
    this.ctx_forSingle.stroke();
    if (this.state.panelname == "panel1") {
      this.state.forSingleCanvas = "Visible";
      this.setState({
        forSingleCanvas: "Visible"
      })
    }

    if (this.state.panelname == "panel2") {
      this.state.forSingleCanvas = "hidden";
      this.setState({
        forSingleCanvas: "hidden"
      })
    }



    //arrow bottom
    this.arrowimageBotom();

    this.handlecolor1();
    this.arrow_updates("OriginPal1", this.originPal1);
    this.arrow();
    this.setState({
      // pallet_bool: true,
      // pallet_12: false,
      enablefor1: true,
      enablefor2: false,
      // WA_1_width_X_Dir: updatedX,
      // WA_1_Length_Y_Dir: updatedY
    })

    if (this.state.panelname == 'panel3' || this.state.panelname == 'panel5') {
      this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);
      this.setState({
        pallet_bool: false,
        pallet_12: true,
      }

      )
    }

    if (this.state.panelname == 'panel5') {
      // console.log("callSchemafor1_forPRC calling check from callschemafor1:::::", this.colorA, this.colorB, this.colorC)
      this.callSchemafor1_forPRC();
    }
  }

  callSchemafor2 = () => {
    this.state.selectedOne = false;
    this.state.selectedTwo = true;
    this.PalletSelection = 2;

    this.setState({
      outside_Label_Priority: this.outside_Label_Priority,
      // outside_Label_Priority2: this.outside_Label_Priority2,
      ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
      HWeighted2: this.HWeighted2,
      VWeighted2: this.VWeighted2,
      setVariantName_SchemaA: this.setVariantName_SchemaA,
      // setVariantName_SchemaA: this.setVariantName_SchemaA2,
      setVariantName_SchemaB: this.setVariantName_SchemaB,
      // setVariantName_SchemaB: this.setVariantName_SchemaB2,
      setVariantName_SchemaC: this.setVariantName_SchemaC,
      // setVariantName_SchemaC: this.setVariantName_SchemaC2,
      palletid: this.palletid,
      palletname: this.palletname,
      originPal1: this.originPal1,
      // originPal2: this.originPal2,
      firstcase_pal1: this.firstcase_pal1,
      firstcase_pal2: this.firstcase_pal2,
      WA_1_width_X_Dir: this.WA_1_width_X_Dir,
      WA_1_Length_Y_Dir: this.WA_1_Length_Y_Dir,
      WA_1_Offset_X_Dir: this.WA_1_Offset_X_Dir,
      WA_1_Offset_Y_Dir: this.WA_1_Offset_Y_Dir,
      WA_2_width_X_Dir: this.WA_2_width_X_Dir,
      WA_2_Length_Y_Dir: this.WA_2_Length_Y_Dir,
      WA_2_Offset_X_Dir: this.WA_2_Offset_X_Dir,
      WA_2_Offset_Y_Dir: this.WA_2_Offset_Y_Dir,
      pallete_Type: this.palletType2,
      intermediate_Layer_Type: this.intermediateLayerType2,
      case_Type: this.caseType,
      // case_Type2: this.caseType2,
      no_Of_Layers: this.noOfLayers,
      // no_Of_Layers: this.noOfLayers2,
      cases_Schema_A: this.cases_Schema_A2,
      cases_Schema_B: this.cases_Schema_B2,
      cases_Schema_C: this.cases_Schema_C2,
      layer: this.layer,
      // layer_data: this.layerdata,
      // layer_data: this.layerdata2,
      int_Layer: this.int_Layer,
      // int_Layer: this.int_Layer2,
      layers: this.noOfLayers,
      // layers: this.noOfLayers2,
      layerdataupdated: this.layerdataupdated
    });
    this.handleSelection_intermediateLayer(this.palletType2);
    this.forceUpdate();
    // this.getPallet(2);
    //
    //
    let tempLayer_data = [];
    for (let i = 0; i < this.layerdata.length; i++) {
      if (this.layerdata[i].pallet_no == 1) {
        tempLayer_data[this.layerdata[i].layerSequence] = this.layerdata[i];
      }
    }
    this.state.layer_data = tempLayer_data;
    // console.log("my layer_data pallet check 1 " + JSON.stringify(tempLayer_data) + "........ " + JSON.stringify(this.layerdata))
    //
    //
    //  let half = Math.ceil(this.layerdata.length/2)
    //   this.state.layer_data = this.layerdata.slice(0, half);
    // console.log("this.state.layer_data callSchemafor2 ", this.state.layer_data)

    this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);
    this.ctx_forPRC.clearRect(0, 0, this.myRef_forPRC.current.clientWidth, this.myRef_forPRC.current.clientHeight);
    this.ctx_forPRCOuterRect.clearRect(0, 0, this.myRef_forPRCOuterRect.current.clientWidth, this.myRef_forPRCOuterRect.current.clientHeight);
    var my_gradient1 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);
    var my_gradient2 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);


    var offset_X;
    var offset_Y;


    //pallete map
    this.P_length1 = this.map(this.Pallet_Length, 0, 1400, 0, 222);  //Y POSITION
    this.P_width1 = this.map(this.Pallet_Width, 0, 1400, 0, 222);     //X POSITION

    this.state.P_length = this.P_length1;
    this.state.P_width = this.P_width1;

    // console.log(" this.state.P_length " + this.state.P_length + " this.state.P_width " + this.state.P_width)

    // console.log(" this.P_length1  " + this.P_length1 + " this.P_width1 " + this.P_width1 + "this.Pallet_Length " + this.Pallet_Length + "Pallet_Width " + this.Pallet_Width);

    this.p_xpos;
    this.p_ypos;

    this.WA_2_Length_Y_Dir = (parseInt(this.state.WA_2_Length_Y_Dir, 10))
    this.WA_2_width_X_Dir = (parseInt(this.state.WA_2_width_X_Dir, 10))


    //workarea  map
    var length = this.map(this.WA_2_Length_Y_Dir, 0, 1400, 0, 222);  //Y POSITION
    var width = this.map(this.WA_2_width_X_Dir, 0, 1400, 0, 222);     //X POSITION
    // console.log(" (parseInt(this.state.WA_1_Length_Y_Dir, 10) + this.Pallet_Length) " + (parseInt(this.state.WA_1_Length_Y_Dir, 10) + this.Pallet_Length) + " (parseInt(this.state.WA_1_width_X_Dir, 10) " + (parseInt(this.state.WA_1_width_X_Dir, 10)));

    var xpos;
    var ypos;


    this.WA_2_Offset_X_Dir = (parseInt(this.state.WA_2_Offset_X_Dir, 10))
    this.WA_2_Offset_Y_Dir = (parseInt(this.state.WA_2_Offset_Y_Dir, 10))

    if (this.state.pallete_Type == "EU 6: 800 x 600") {
      console.log("called inside if condition ")

      if (this.state.originPal2 == "Upper Right Corner") {
        this.originPal2 = "Upper Right Corner";
        xpos = 442 - width;
        ypos = 124;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 442 - this.P_width1
        this.p_ypos = 124;

        //offset
        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

        console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
      }
      else if (this.state.originPal2 == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
        xpos = 348;
        ypos = 124;

        this.p_xpos = 348;
        this.p_ypos = 124;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
        xpos = 350;
        ypos = 246 - length;

        this.p_xpos = 350;
        this.p_ypos = 246 - this.P_length1;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal2 == "Lower Right Corner") {
        this.originPal2 = "Lower Right Corner";
        xpos = 444 - width;
        ypos = 246 - length;

        this.p_xpos = 444 - this.P_width1;
        this.p_ypos = 246 - this.P_length1;


        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "EU 1: 1200 x 800") {
      console.log("called inside else if condition ")
      if (this.state.originPal2 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal2 = "Upper Right Corner";
        xpos = 460 - width;
        ypos = 92;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 460 - this.P_width1
        this.p_ypos = 92;

        //offset
        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
        xpos = 333;
        ypos = 92;

        this.p_xpos = 333;
        this.p_ypos = 92;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
        xpos = 333;
        ypos = 282 - length;

        this.p_xpos = 333;
        this.p_ypos = 282 - this.P_length1;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal2 == "Lower Right Corner") {
        this.originPal2 = "Lower Right Corner";
        xpos = 457 - width;
        ypos = 282 - length;

        this.p_xpos = 457 - this.P_width1;
        this.p_ypos = 282 - this.P_length1;


        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "EU 2: 1200 x 1000") {
      console.log("called inside else if condition ")
      if (this.state.originPal2 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal2 = "Upper Right Corner";
        xpos = 475 - width;
        ypos = 90;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 475 - this.P_width1
        this.p_ypos = 90;

        //offset
        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
        xpos = 315;
        ypos = 90;

        this.p_xpos = 315;
        this.p_ypos = 90;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
        xpos = 315;
        ypos = 282 - length;

        this.p_xpos = 315;
        this.p_ypos = 282 - this.P_length1;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal2 == "Lower Right Corner") {
        this.originPal2 = "Lower Right Corner";
        xpos = 475 - width;
        ypos = 282 - length;

        this.p_xpos = 475 - this.P_width1;
        this.p_ypos = 282 - this.P_length1;


        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "US 2: 1067 x 1067") {
      console.log("called inside else if condition ")
      if (this.state.originPal2 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal2 = "Upper Right Corner";
        xpos = 482 - width;
        ypos = 100;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 482 - this.P_width1
        this.p_ypos = 100;

        //offset
        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
        xpos = 311;
        ypos = 100;

        this.p_xpos = 311;
        this.p_ypos = 100;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
        xpos = 311;
        ypos = 270 - length;

        this.p_xpos = 311;
        this.p_ypos = 270 - this.P_length1;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal2 == "Lower Right Corner") {
        this.originPal2 = "Lower Right Corner";
        xpos = 481 - width;
        ypos = 270 - length;

        this.p_xpos = 481 - this.P_width1;
        this.p_ypos = 270 - this.P_length1;


        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "US 1: 1219 x 1016 ") {
      console.log("called inside else if condition ")
      if (this.state.originPal2 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal2 = "Upper Right Corner";
        xpos = 478 - width;
        ypos = 90;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 478 - this.P_width1
        this.p_ypos = 90;

        //offset
        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
        xpos = 315;
        ypos = 89;

        this.p_xpos = 315;
        this.p_ypos = 89;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
        xpos = 315;
        ypos = 282 - length;

        this.p_xpos = 315;
        this.p_ypos = 282 - this.P_length1;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal2 == "Lower Right Corner") {
        this.originPal2 = "Lower Right Corner";
        xpos = 475 - width;
        ypos = 282 - length;

        this.p_xpos = 475 - this.P_width1;
        this.p_ypos = 282 - this.P_length1;


        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "ASIA 1: 1100 x 1100") {
      console.log("called inside else if condition ")
      if (this.state.originPal2 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal2 = "Upper Right Corner";
        xpos = 482 - width;
        ypos = 98;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 482 - this.P_width1
        this.p_ypos = 98;

        //offset
        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
        xpos = 310;
        ypos = 100;

        this.p_xpos = 310;
        this.p_ypos = 100;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
        xpos = 308;
        ypos = 272 - length;

        this.p_xpos = 308;
        this.p_ypos = 272 - this.P_length1;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal2 == "Lower Right Corner") {

        this.originPal2 = "Lower Right Corner";
        xpos = 482 - width;
        ypos = 275 - length;

        this.p_xpos = 482 - this.P_width1;
        this.p_ypos = 275 - this.P_length1;
        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }

    if (this.state.pallete_Type == "AU 1: 1165 x 1165") {
      console.log("called inside else if condition ")
      if (this.state.originPal2 == "Upper Right Corner") {
        console.log("called inside else if condition ++++++++++++")

        // this.p_xpos = 350
        this.originPal2 = "Upper Right Corner";
        xpos = 490 - width;
        ypos = 94;

        console.log(" xpos ====== " + xpos)
        this.p_xpos = 490 - this.P_width1
        this.p_ypos = 94;

        //offset
        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
        xpos = 304;
        ypos = 93;

        this.p_xpos = 304;
        this.p_ypos = 93;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos - offset_Y;

      }
      else if (this.state.originPal2 == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
        xpos = 304;
        ypos = 279 - length;

        this.p_xpos = 304;
        this.p_ypos = 279 - this.P_length1;

        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 222);     //X POSITION

        xpos = xpos - offset_X;
        ypos = ypos + offset_Y;
      }
      else if (this.state.originPal2 == "Lower Right Corner") {
        this.originPal2 = "Lower Right Corner";
        xpos = 489 - width;
        ypos = 278 - length;

        this.p_xpos = 489 - this.P_width1;
        this.p_ypos = 278 - this.P_length1;


        offset_Y = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 222);  //Y POSITION
        offset_X = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 222);     //X POSITION

        xpos = xpos + offset_X;
        ypos = ypos + offset_Y;
      }
    }




    //outer rectangle 
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 5;
    my_gradient1.addColorStop(1, "#FFF2CC");
    this.ctx_forSingle.fillStyle = my_gradient1;
    this.ctx_forSingle.strokeStyle = "#FAD7AC";  //border
    this.ctx_forSingle.strokeRect(xpos, ypos, width, length);
    // console.log("this.x_pos for callSchemafor1 workarea " + xpos + " this.y_pos " + ypos + " this.w_width " + width + " this.l_length " + length);
    // console.log(" this.outerRect2_xpos for workAreaFor_pattern callSchemafor2 " + this.outerRect2_xpos + " this.outerRect2_ypos " + this.y_pos + " this.w_width " + this.w_width + " this.l_length " + this.l_length);
    // console.log(" this.outerRect2_xpos for workAreaFor_pattern callSchemafor1_forPRC" + this.outerRect2_xpos + " this.outerRect2_ypos " + this.outerRect2_ypos + " this.outerRect2_width " + this.outerRect2_width + " this.outerReact2_length " + this.outerRect2_length);

    this.ctx_forSingle.fillRect(xpos, ypos, width, length);
    this.ctx_forSingle.stroke();

    this.outerRect2_xpos = xpos;
    this.outerRect2_ypos = ypos;
    this.outerRect2_width = width;
    this.outerRect2_length = length;


    // console.log("this.x_pos callSchemafor1 BP ", this.x_pos, " this.y_pos ", this.y_pos, " this.w_width ", this.w_width, " this.l_length ", this.l_length)


    // //inner rectangle
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 4;
    my_gradient2.addColorStop(1, "white");
    this.ctx_forSingle.fillStyle = my_gradient2;
    this.ctx_forSingle.strokeStyle = "black";
    this.ctx_forSingle.strokeRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    // console.log("this.p_xpos for callSchemafor1 " + this.p_xpos + "this.p_ypos " + this.p_ypos + "this.P_width1 " + this.P_width1 + "this.P_length1" + this.P_length1);
    this.ctx_forSingle.fillRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    this.ctx_forSingle.stroke();


    // circle Image
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 2;
    this.ctx_forSingle.drawImage(this.imgcircle_2, 120, 76, 70, 70);
    this.ctx_forSingle.fill();
    this.ctx_forSingle.stroke();

    // bottom arc
    //upper right corner
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillStyle = "#E1D5E7";
    // console.log("Inside callSchemafor2 this.state.arcX2 = " + this.state.arcX2 + "this.state.arcY2 = " + this.state.arcY2);
    this.ctx_forSingle.arc(this.state.arcX2, this.state.arcY2, 20, 0, 2 * Math.PI);
    this.ctx_forSingle.fill();
    this.ctx_forSingle.stroke();

    if (this.state.panelname == "panel1") {
      this.state.forSingleCanvas = "Visible";
      this.setState({
        forSingleCanvas: "Visible"
      })
    }

    if (this.state.panelname == "panel2") {
      this.state.forSingleCanvas = "hidden";
      this.setState({
        forSingleCanvas: "hidden"
      })
    }

    //arrow bottom
    this.arrowimageBotom();


    this.handlecolor2();
    this.arrow_updates("OriginPal2", this.originPal2);
    this.arrow();

    if (this.state.panelname == 'panel3' || this.state.panelname == 'panel5') {
      this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);
      this.setState({
        pallet_bool: false,
        pallet_12: true,
      }

      )
    }

    if (this.state.panelname == 'panel5') {
      // console.log("callSchemafor1_forPRC calling check from callschemafor2:::::", this.colorA, this.colorB, this.colorC)
      this.callSchemafor1_forPRC();
    }
    this.setState({
      enablefor1: false,
      enablefor2: true,
      // WA_1_width_X_Dir: updatedX,
      // WA_1_Length_Y_Dir: updatedY
    })
  }

  callSchemafor1_forPRC = () => {

    this.frameForPRC = true;

    // this.state.selectedOne = true;
    // this.state.selectedTwo = false;

    // this.ctx_forPRC.clearRect(0, 0, canvas_forPRC.width, canvas_forPRC.height);
    // this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);

    var my_gradient1 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);
    var my_gradient2 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);

    // this.ctx_forPRC.clearRect(0, 0, canvas_forPRC.width, canvas_forPRC.height);
    var my_gradient5 = this.ctx_forPRC.createLinearGradient(0, 0, 0, 170);
    var my_gradient6 = this.ctx_forPRC.createLinearGradient(0, 0, 0, 170);

    // console.log("this.x_pos PRC ", this.x_pos, " this.y_pos ", this.y_pos, " this.w_width ", this.w_width, " this.l_length ", this.l_length)

    let outerRect_xpos, outerRect_ypos, outerRect_width, outerRect_length;


    if (this.state.selectedOne) {

      outerRect_xpos = this.outerRect1_xpos;
      outerRect_ypos = this.outerRect1_ypos;
      outerRect_width = this.outerRect1_width;
      outerRect_length = this.outerRect1_length;

      // console.log("outerRect_xpos for workAreaFor_pattern selectedOne " + outerRect_xpos + " outerRect_ypos " + outerRect_ypos + " outerRect_width " + outerRect_width + " outerRect_length " + outerRect_length);

    }
    else if (this.state.selectedTwo) {

      outerRect_xpos = this.outerRect2_xpos;
      outerRect_ypos = this.outerRect2_ypos;
      outerRect_width = this.outerRect2_width;
      outerRect_length = this.outerRect2_length;

      // console.log("outerRect_xpos for workAreaFor_pattern selectedTwo " + outerRect_xpos + " outerRect_ypos " + outerRect_ypos + " outerRect_width " + outerRect_width + " outerRect_length " + outerRect_length);


    }

    // outer rectangle
    this.ctx_forPRCOuterRect.beginPath();
    this.ctx_forPRCOuterRect.lineWidth = 5;
    my_gradient5.addColorStop(1, "#FFF2CC"); // yellow
    this.ctx_forPRCOuterRect.fillStyle = my_gradient5;
    this.ctx_forPRCOuterRect.strokeStyle = "#FAD7AC";  //borderschema
    this.ctx_forPRCOuterRect.strokeRect(outerRect_xpos, outerRect_ypos, outerRect_width, outerRect_length);
    // console.log("outerRect_xpos for workAreaFor_pattern " + outerRect_xpos + " outerRect_ypos " + outerRect_ypos + "outerRect_width " + outerRect_width + "outerRect_length " + outerRect_length);
    this.ctx_forPRCOuterRect.fillRect(outerRect_xpos, outerRect_ypos, outerRect_width, outerRect_length);
    this.ctx_forPRCOuterRect.stroke();


    // //inner rectangle
    this.ctx_forPRC.beginPath();
    this.ctx_forPRC.lineWidth = 4;
    my_gradient6.addColorStop(1, "white");
    this.ctx_forPRC.fillStyle = my_gradient6;
    this.ctx_forPRC.strokeStyle = "black";
    this.ctx_forPRC.strokeRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    // console.log("this.p_xpos for callSchemafor1_forPRC " + this.p_xpos + "this.p_ypos " + this.p_ypos + "this.P_width1 " + this.P_width1 + "this.P_length1" + this.P_length1);

    this.ctx_forPRC.fillRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    this.ctx_forPRC.stroke();

    // console.log("callschemafor1 calling check from callSchema1_forPrc:::::", this.colorA, this.colorB, this.colorC)
    this.callSchema1();

  }


  rotate_180_degrees = (index) => {

    this.ctx_PDPatilpriyaCanvas.clearRect(0, 0, canvas_For_PDPatilpriyaCanvas.width, canvas_For_PDPatilpriyaCanvas.height);

    const selectedImages = this.imageSrc_array.filter((_, i) => i === index);

    var my_gradient2 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);

    selectedImages.forEach(imageSrc => {
      const image = new Image();
      image.src = imageSrc;
     const buttonText = "180"; // Text to display in the button
      image.onload = () => {
        this.ctx_PDPatilpriyaCanvas.beginPath();
        this.ctx_PDPatilpriyaCanvas.lineWidth = 4;
        // Set up the gradient and other styles
        var my_gradient2 = this.ctx_PDPatilpriyaCanvas.createLinearGradient(640, 15, 740, 115);
        my_gradient2.addColorStop(1, "white");
        this.ctx_PDPatilpriyaCanvas.fillStyle = my_gradient2;
        this.ctx_PDPatilpriyaCanvas.strokeStyle = "black";

        // Save the current transformation matrix
        this.ctx_PDPatilpriyaCanvas.save();

       

        // Rotate the canvas by 180 degrees (Math.PI)
        this.ctx_PDPatilpriyaCanvas.translate(640 + 50, 20 + 50); // Translate to the center of the rectangle
        this.ctx_PDPatilpriyaCanvas.rotate(Math.PI); // Rotate by 180 degrees
        this.ctx_PDPatilpriyaCanvas.translate(-(640 + 50), -(20 + 50)); // Translate back to the original position

        // Draw the rectangle and image
        this.ctx_PDPatilpriyaCanvas.strokeRect(640, 20, 100, 110);
        this.ctx_PDPatilpriyaCanvas.fillRect(640, 20, 100, 110);
        this.ctx_PDPatilpriyaCanvas.drawImage(image, 640, 20, 100, 110);

      // Restore the previous transformation matrix
        this.ctx_PDPatilpriyaCanvas.restore();
        this.ctx_PDPatilpriyaCanvas.stroke();
        // Add a round button to the top-right corner
        this.ctx_PDPatilpriyaCanvas.beginPath();
        const buttonRadius = 15;
        const buttonX = 750 - buttonRadius; // X-coordinate of the center of the button
        const buttonY = 10 + buttonRadius;  // Y-coordinate of the center of the button
        this.ctx_PDPatilpriyaCanvas.fillStyle = "white"; // Change the button color
        this.ctx_PDPatilpriyaCanvas.fill();
        this.ctx_PDPatilpriyaCanvas.closePath();

      };
    });

  }



  Horizontally_flip = (index) => {

    this.ctx_PDPatilCanvas.clearRect(0, 0, canvas_For_PDPatilCanvas.width, canvas_For_PDPatilCanvas.height);

    const selectedImages = this.imageSrc_array.filter((_, i) => i === index);

    // var flipH = document.getElementById('horizontalCheckbox').checked
    // const image1 = document.getElementById(selectedImages);

    // var scaleH = image1 ? -1 : 1;
    // console.log("Value of scaleH " + scaleH)
    console.log("Value of scaleH 1" + selectedImages)
    // console.log("Value of scaleH 2" + image1) 

    // var scaleH = flipH ? -1 : 1;
    var my_gradient2 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);



    selectedImages.forEach(imageSrc => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {

        this.ctx_PDPatilCanvas.beginPath();
        this.ctx_PDPatilCanvas.lineWidth = 4;
        my_gradient2.addColorStop(1, "white");
        this.ctx_PDPatilCanvas.fillStyle = my_gradient2;
        this.ctx_PDPatilCanvas.strokeStyle = "black";
        this.ctx_PDPatilCanvas.strokeRect(640, 130, 100, 110);
        // Save the canvas state before scaling
        this.ctx_PDPatilCanvas.save();
        // Scale the canvas horizontally
        this.ctx_PDPatilCanvas.scale(-1, 1);
        // Draw the flipped image
        this.ctx_PDPatilCanvas.drawImage(image, -740, 130, 100, 110);
        // Restore the canvas state to its original state
        this.ctx_PDPatilCanvas.restore();
        this.ctx_PDPatilCanvas.stroke();
      };
    });


  }





 
 
  Vertical_flip = (index) => {
   
    this.ctx_PDCanvas.clearRect(0, 0, canvas_For_PDCanvas.width, canvas_For_PDCanvas.height);
    const selectedImages = this.imageSrc_array.filter((_, i) => i === index);
    var my_gradient2 = this.ctx_PDCanvas.createLinearGradient(0, 0, 0, 170);
    my_gradient2.addColorStop(1, "white");
  
    
    this.ctx_PDCanvas.fillStyle = my_gradient2;
    this.ctx_PDCanvas.strokeStyle = "black";
    this.ctx_PDCanvas.lineWidth = 2;
  
   
    selectedImages.forEach((imageSrc) => {
      const image = new Image();
      image.src = imageSrc;
  
      image.onload = () => {
        this.ctx_PDCanvas.save(); 
        this.ctx_PDCanvas.scale(1, -1); 
        this.ctx_PDCanvas.drawImage(image, 640, -360, 100, 110); 
        this.ctx_PDCanvas.strokeRect(640, -360, 100, 110);
  
        this.ctx_PDCanvas.restore(); 
      };
    });
  };

  

  

  disableAlgoPW = (bol, progress) => {

    // console.log("disableAlgoPW ", bol)

    this.setState({
      handlecolorA_ED: bol,
      handlecolorB_ED: bol,
      handlecolorC_ED: bol,
      HWeightedSymmetric: bol,
      VWeightedSymmetric: bol,

      setCircularProgress: progress
    })


  }


  callPallet = () => {

    this.ctx_forSingle.clearRect(0, 0, this.myRef_forSingleCanvas.current.width, this.myRef_forSingleCanvas.current.height);
    this.drawPallet_1_2();
    this.setState({
      pallet_bool: true,
      pallet_12: false
    })


  }
  drawPallet_1_2 = (style = {}) => {

    // console.log("inside drawPallet_1_2 = ")
    if (this.state.selectedOne == true) {
      this.callSchemafor1();
    }
    else if (this.state.selectedTwo == true) {
      this.callSchemafor2();
    }




  }

  drawLargeRectInitially = () => {

    // console.log("drawLargeRectInitially this.frameForPRC 1 ", this.frameForPRC)

    if (this.frameForPRC) {

      // console.log(" inside if condition drawLargeRectInitially : ")

      // console.log("drawLargeRectInitially this.frameForPRC 2 ", this.frameForPRC)
      // console.log("this.p_xpos for callSchemafor1_forPRC " + this.p_xpos + "this.p_ypos " + this.p_ypos + "this.P_width1 " + this.P_width1 + "this.P_length1" + this.P_length1);

      // if (this.state.selectedOne) {

      const r3Info = { x: this.p_xpos, y: this.p_ypos, w: this.P_width1, h: this.P_length1 }; // pending w, h for
      this.drawFillRectPallet(r3Info, { backgroundColor: "#d1e0e0" });
      this.drawRectPallet(r3Info);

      // }
      // else if(this.state.selectedTwo){

      //   const r3Info = { x: this.p_xpos2, y: this.p_ypos2, w: this.P_width2, h: this.P_length2 }; // pending w, h for
      //   this.drawFillRectPallet(r3Info, { backgroundColor: "#d1e0e0" });
      //   this.drawRectPallet(r3Info);

      // }



    } else {
      // console.log(" inside else condition drawLargeRectInitially : ")

      // console.log("ctx drawLarge this.P_width ", this.state.P_width, " this.P_length ", this.state.P_length)

      const r3Info = { x: 0, y: 0, w: this.state.P_width, h: this.state.P_length };
      // const r3Info = { x: 0, y: 0, w: 175, h: 275 };


      this.drawFillRectPallet(r3Info, { backgroundColor: "#d1e0e0" });
      // this.drawRectPallet(r3Info);

    }
  }
  drawRectPallet = (info, style = {}) => {


    if (this.frameForPRC) {

      // console.log(" inside if condition  drawRectPallet : ")
      const { x, y, w, h } = info;
      const { borderColor = "black", borderWidth = 2 } = style;

      // console.log("inside drawRectPallet info check {x, y, w, h} if(this.frameForPRC): " + JSON.stringify(info))

      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.strokeStyle = borderColor;
      this.ctx_forPRC.lineWidth = borderWidth;
      this.ctx_forPRC.rect(x, y, w, h);
      this.ctx_forPRC.stroke();

    }
    else {

      // console.log(" inside else condition  drawRectPallet: ")

      const { x, y, w, h } = info;

      // console.log("inside drawRectPallet info check {x, y, w, h} else: " + JSON.stringify(info))

      const { borderColor = "black", borderWidth = 3 } = style;
      this.ctx.beginPath();
      this.ctx.strokeStyle = borderColor;
      this.ctx.lineWidth = borderWidth;
      this.ctx.rect(x, y, w, h);
      this.ctx.stroke();

    }
  };
  drawFillRectPallet = (info, style = {}) => {
    if (this.frameForPRC) {

      // console.log(" inside if condition drawFillRectPallet : ")
      var { x, y, w, h } = info;
      var { backgroundColor } = style;

      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.fillStyle = backgroundColor;
      this.ctx_forPRC.fillRect(x, y, w, h);

    } else {

      // console.log(" inside else condition drawFillRectPallet  : ")


      var { x, y, w, h } = info;
      var { backgroundColor } = style;
      this.ctx.beginPath();
      this.ctx.fillStyle = backgroundColor;
      this.ctx.fillRect(x, y, w, h);
    }
  };
  drawRect = (info, style = {}) => {
    //This function draw the case border 

    if (this.frameForPRC) {

      // console.log(" inside if condition drawRect : ")


      // console.log("drawRect this.frameForPRC 2 ", this.frameForPRC)
      const { x, y, w, h } = info;
      const { borderColor = "black", borderWidth = 0.7 } = style;

      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.strokeStyle = borderColor;
      this.ctx_forPRC.lineWidth = borderWidth;
      this.ctx_forPRC.rect(x, y, w, h);
      this.ctx_forPRC.stroke();

    } else {

      // console.log(" inside else condition drawRect  : ")


      const { x, y, w, h } = info;
      const { borderColor = "black", borderWidth = 1.5 } = style;
      this.ctx.beginPath();
      this.ctx.strokeStyle = borderColor;
      this.ctx.lineWidth = borderWidth;
      this.ctx.rect(x, y, w, h);
      this.ctx.stroke();

    }



  };
  drawRect_CaseImage = (info, style = {}) => {

    if (this.frameForPRC) {
      // console.log(" inside if condition drawRect_CaseImage : ")
      const { x, y, w, h } = info;
      const { borderColor = "black", borderWidth = 15 } = style;

      this.ctxCase.beginPath();
      this.ctxCase.strokeStyle = borderColor;
      this.ctxCase.lineWidth = borderWidth;
      this.ctxCase.rect(x, y, w, h);
      this.ctxCase.stroke();

    } else {
      // console.log(" inside else condition drawRect_CaseImage  : ")


      const { x, y, w, h } = info;
      const { borderColor = "black", borderWidth = 1.5 } = style;

      this.ctxCase.beginPath();
      this.ctxCase.strokeStyle = borderColor;
      this.ctxCase.lineWidth = borderWidth;
      this.ctxCase.rect(x, y, w, h);
      this.ctxCase.stroke();

    }
  };
  drawFillRect = (info, style = {}, rotationNewCaseIndex) => {

    if (this.state.panelname == "panel5") {
      // console.log("Inside drawFillRect 1 ", this.state.panelname);
      if (this.frameForPRC) {

        // console.log("Case Data:::",this.state.case_data[0].case_x_position);
        // console.log("Case Distance DistX::",distX,"DistY::",distY);


        //  var X1=this.state.CasesXYfotGreenRectPRC[this.Case_No].x;
        //  var Y1=this.state.CasesXYfotGreenRectPRC[this.Case_No].y;

        var { x, y, w, h } = info;
        // var x=this.state.CasesXYfotGreenRectPRC[this.freesedCaseCount].x;
        // var y=this.state.CasesXYfotGreenRectPRC[this.freesedCaseCount].y;
        var { backgroundColor } = style;
        console.log("Inside the DrawFill Rect:::x=", x, "y=", y, "W=", w, "h=")

        this.Case_No = this.Case_No + 1;
        console.log("Case number", this.Case_No);
        // Text for case No
        this.ctx_forPRC.font = "bold 10pt Roboto";
        this.ctx_forPRC.fillStyle = "black";
        this.ctx_forPRC.textBaseline = 'middle';
        this.ctx_forPRC.textAlign = 'center';
        if (this.state.panelname == "panel4" && rotationNewCaseIndex != undefined) {
          // console.log("drawFillRect rotationNewCaseIndex ", rotationNewCaseIndex)
          this.ctx_forPRC.fillText(rotationNewCaseIndex, (x + (w / 2)), (y + (h / 2)), 50);

        } else {

          this.ctx_forPRC.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
        }


        //this.ctx_forPRC.stroke();

      }
      else {

        var { x, y, w, h } = info;
        var { backgroundColor } = style;
        this.Case_No = this.Case_No + 1;
        this.ctx.font = "bold 10pt Roboto";
        this.ctx.fillStyle = "black";
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        if ((this.state.panelname == "panel5" || this.state.panelname == "panel4") && rotationNewCaseIndex != undefined) {
          console.log("Outside frame PRC")
          this.ctx.fillText(rotationNewCaseIndex, (x + (w / 2)), (y + (h / 2)), 50);
        } else {

          this.ctx.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
        }
        this.ctx.stroke();
      }
    }

    if (this.state.panelname == "panel3" || this.state.panelname == "panel4") {

      // console.log("Inside drawFillRect 2 ", this.state.panelname);

      if (this.frameForPRC) {
        var { x, y, w, h } = info;
        var { backgroundColor } = style;

        // this.Case_No = this.Case_No + 1;
        this.Case_No = "";
        // Text for case No
        this.ctx_forPRC.font = "bold 10pt Roboto";
        this.ctx_forPRC.fillStyle = "black";
        this.ctx_forPRC.textBaseline = 'middle';
        this.ctx_forPRC.textAlign = 'center';
        if (this.state.panelname == "panel4" && rotationNewCaseIndex != undefined) {
          // console.log("drawFillRect rotationNewCaseIndex ", rotationNewCaseIndex)
          this.ctx_forPRC.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
        }
        else {
          this.ctx_forPRC.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
        }
        this.ctx_forPRC.stroke();

      }

      else {
        var { x, y, w, h } = info;
        var { backgroundColor } = style;
        // this.Case_No = this.Case_No + 1;
        this.Case_No = "";
        this.ctx.font = "bold 10pt Roboto";
        this.ctx.fillStyle = "black";
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        if ((this.state.panelname == "panel5" || this.state.panelname == "panel4") && rotationNewCaseIndex != undefined) {
          this.ctx.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
        }
        else {
          this.ctx.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
        }
        this.ctx.stroke();

      }
    }


  };
  drawFillRect_CaseImage = (info, style = {}) => {

    var { x, y, w, h } = info;
    var { backgroundColor } = style;

    this.ctxCase.beginPath();
    this.ctxCase.fillStyle = backgroundColor;
    this.ctxCase.fillRect(x, y, w, h);
    this.Case_No = this.Case_No + 1;
    // Text for case No
    this.ctxCase.font = "15px serif";
    this.ctxCase.fillStyle = "black";
    this.ctxCase.textBaseline = 'middle';
    this.ctxCase.textAlign = 'center';
    // this.ctxCase.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
    this.ctxCase.stroke();

  };


  reqCombinationForPallet_N_Origin = () => {

    // this.disableAlgoPW(true, "visible");

    poss_Origin = [];
    varientsList = [];
    numberVar = [];
    varientsList.push("dummy value at 0")
    numberVar.push("dummy value at 0")
    progressNum = 0;

    // console.log("reqCombinationForPallet_N_Origin this.HWeighted ", this.HWeighted, " this.VWeighted ", this.VWeighted)

    // console.log("reqCombinationForPallet_N_Origin poss_Origin cehck for empty ", poss_Origin)

    let frames = this.Possible_Frames();

     console.log("poss_Origin frames break 1 ", frames)

    frames.forEach((frames, index) => {
      console.log("poss_Origin frames break 2", frames)

      poss_Origin = this.Possible_Origins(frames);

      // console.log(" poss_Origin frames break 2 ", poss_Origin)

    })

    // console.log("reqCombinationForPallet_N_Origin poss_Origin ", poss_Origin)

  }

  Possible_Frames = () => {

    // console.log("Possible_Frames this.Case_Width width " + this.Case_Width);
    // console.log("Possible_Frames this.Case_Width length " + this.Case_Length);

    let Dimentions_In_Percenatge = this.map(this.Case_Length, 0, this.Pallet_Length, 0, 100);

    // let Dimentions_In_Percenatge = this.map((this.Case_Length * this.Case_Width), 0, (this.Pallet_Length * this.Pallet_Width), 0, 100);

    let Frame_List;
    // console.log("Possible_Frames Dimentions_In_Percenatge ", Dimentions_In_Percenatge)

    if (Dimentions_In_Percenatge <= 40) {

      // if (this.HWeighted && this.VWeighted) {
      //   Frame_List = ["Frame_1", "Frame_6", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"];
      // }
      if (this.HWeighted && this.VWeighted && !(this.Case_Length > 200 && this.Case_Length <= 425)) {
        Frame_List = ["Frame_1", "Frame_6", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"];
        console.log("Inside possible frames = 1");
      }

      else if (this.HWeighted && this.VWeighted && (this.Case_Length > 200 && this.Case_Length <= 425)) {
        console.log("Inside possible frames = 2");
        // Frame_List = ["Frame_6", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_37"];
        // Frame_List = ["Frame_6", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_37"];

        if (this.state.pallete_Type == "EU 6: 800 x 600") {
          Frame_List = ["Frame_1", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26",
            // "Frame_31", "Frame_32",
            //  "Frame_33", "Frame_34", 
            "Frame_35", "Frame_37"];
        } else {
          //Todays 16/7/2023
          Frame_List = ["Frame_1", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_31", "Frame_32",
            //  "Frame_33", "Frame_34", 
            "Frame_35", "Frame_37"];
        }
      }

      else if (this.HWeighted && !this.VWeighted && !(this.Case_Length > 200 && this.Case_Length <= 425)) {
        Frame_List = ["Frame_1", "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"];
        console.log("Inside possible frames = 3");
      }

      else if (this.HWeighted && !this.VWeighted && (this.Case_Length > 200 && this.Case_Length <= 425)) {
        // Frame_List = ["Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_37"];
        // Frame_List = ["Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_8", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_37"];
        console.log("Inside possible frames = 4");

        if (this.state.pallete_Type == "EU 6: 800 x 600") {
          console.log("Inside possible frames = 4 inside 800");
          Frame_List = [
            "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_8", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_35", "Frame_37"
            // "Frame_31", "Frame_32",
            // "Frame_33", "Frame_34", 
          ];
        }
        else if (this.state.pallete_Type == "EU 2: 1200 x 1000") {
          console.log("Inside possible frames = 4 inside EU 2: 1200 x 1000");
          Frame_List = [
            "Frame_2",
            "Frame_3", "Frame_4",
            //  "Frame_5", 
            "Frame_8",
            "Frame_21",
            "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_35", "Frame_37"

          ];
        }
        else if (this.state.pallete_Type == "ASIA 1: 1100 x 1100") {
          console.log("Inside possible frames = 4 inside ASIA 1: 1100 x 1100");
          Frame_List = [
            "Frame_2","Frame_3", "Frame_4",
            // "Frame_8",
            "Frame_21",
            "Frame_22", 
            "Frame_23","Frame_24", "Frame_26", "Frame_35", "Frame_37"

          ];
        }
        // else if (this.state.pallete_Type == "AU 1: 1165 x 1165") {
        //   Frame_List = [
        //     "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_8", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_35", "Frame_37"
        //     // "Frame_31", "Frame_32",
        //     // "Frame_33", "Frame_34", 
        //   ];
        // }
        else {
          //Todays 16/7/2023
          Frame_List = [
            "Frame_2",
            // "Frame_3", 
            "Frame_4",
            "Frame_5", "Frame_8",
            "Frame_21", "Frame_22", "Frame_23",
            "Frame_24", "Frame_26", "Frame_31", "Frame_32", "Frame_35", "Frame_37"
          ];
        }
      }

      else if (!this.HWeighted && this.VWeighted && !(this.Case_Length > 200 && this.Case_Length <= 425)) {
        Frame_List = ["Frame_1", "Frame_6", "Frame_7", "Frame_9", "Frame_10", "Frame_11", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"];
        console.log("Inside possible frames = 5");
      }

      else if (!this.HWeighted && this.VWeighted && (this.Case_Length > 200 && this.Case_Length <= 425)) {
        console.log("Inside possible frames = 6");
        // Frame_List = ["Frame_6", "Frame_7", "Frame_9", "Frame_10", "Frame_11", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_37"];
        // Frame_List = ["Frame_6", "Frame_7", "Frame_9", "Frame_10", "Frame_11", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_37"];

        // Frame_List = ["Frame_7", "Frame_9", "Frame_10", "Frame_11", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_37"];
        // Frame_List = ["Frame_9", "Frame_10", "Frame_11", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_34","Frame_37"];

        if (this.state.pallete_Type == "EU 6: 800 x 600") {
          Frame_List = [
            "Frame_1", "Frame_9", "Frame_10", "Frame_11", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26",
            "Frame_35", "Frame_37"
            // "Frame_31", "Frame_32",
            // "Frame_33", "Frame_34", 
            // "Frame_34", 
          ];
        } else {
          Frame_List = [
            "Frame_1", "Frame_9", "Frame_10", "Frame_11", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_26", "Frame_31", "Frame_32", "Frame_35", "Frame_37"
            // "Frame_33", "Frame_34", 
            // "Frame_34", 
          ];
        }
      }

      else if (!this.HWeighted && !this.VWeighted && (this.Case_Length > 200 && this.Case_Length <= 425)) {
        console.log("Inside possible frames = 7 this.state.pallete_Type = ", this.state.pallete_Type);
        if (this.state.pallete_Type == "EU 1: 1200 x 800") {
          Frame_List = ["Frame_1", "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_7", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_31", "Frame_32", "Frame_35", "Frame_36", "Frame_37"];
        } else if (this.state.pallete_Type == "EU 6: 800 x 600") {
          console.log("Framesssssssssssssss")
          Frame_List = ["Frame_1", "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_7", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_37", "Frame_33", "Frame_34", "Frame_35", "Frame_36",
            // "Frame_31",
            // "Frame_32", 
          ];
        }
        else {
          console.log("Inside the else")

          Frame_List = ["Frame_1", "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_7", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_31", "Frame_32", "Frame_37", "Frame_33", "Frame_34", "Frame_35", "Frame_36"]

        }
      }

      // else if (!this.HWeighted && !this.VWeighted && (this.Case_Length > 200 && this.Case_Length <= 425) &&
      //   (this.state.pallete_Type == "EU 1: 1200 x 800")) {
      //   console.log("Inside possible frames = 8");

      //   Frame_List = [
      //     "Frame_1", "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_7", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24",
      //     "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_31", "Frame_32", "Frame_35", "Frame_36", "Frame_37"
      //     // "Frame_33",
      //     // "Frame_34", 
      //   ];
      // }
      else {
        //UnWeighted  "Frame_7","Frame_9"
        console.log("Inside possible frames = 9");

        Frame_List = ["Frame_1", "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_7", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"];
        // Frame_List = ["Frame_1"];
      }
    }
    else {

      if (this.HWeighted && this.VWeighted) {
        Frame_List = ["Frame_1"];
      }
      else if (this.HWeighted && !this.VWeighted) {
        Frame_List = ["Frame_1"]
      }
      else if (!this.HWeighted && this.VWeighted) {
        Frame_List = ["Frame_1"];
      }
      else {
        //UnWeighted
        Frame_List = ["Frame_1"];
      }


    }

    // console.log("Possible_Frames Frame_List ", Frame_List)
    console.log("Frame List After inside Frame List:::",Frame_List);
    return Frame_List;
    
  }


  Possible_Origins = (Selected_Frame) => {

    // console.log("Possible_Origins Selected_Frame ", Selected_Frame)

    if (Selected_Frame === "Frame_1") {

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        let Pal_1 = ["Top-Left", "Top-Right", "TL-to-B", "TR-to-B"]

        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }
      else if ((this.HWeighted === false) && (this.VWeighted === true) && !(this.Case_Length > 239 && this.Case_Length <= 425)) {

        let Pal_1 = ["Top-Left", "Top-Right", "TL-to-B", "TR-to-B"]

        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }
      else if ((this.HWeighted === false) && (this.VWeighted === true) && (this.Case_Length > 239 && this.Case_Length <= 425)) {

        let Pal_1 = ["Top-Left", "Top-Right"]

        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }

      else if ((this.HWeighted === true) && (this.VWeighted === true) && !(this.Case_Length > 239 && this.Case_Length <= 425)) {
        //
        let Pal_1 = ["Top-Left", "Top-Right", "TL-to-B", "TR-to-B"]
        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])
        })

      }
      else if ((this.HWeighted === true) && (this.VWeighted === true) && (this.Case_Length > 239 && this.Case_Length <= 425)) {
        //
        let Pal_1 = ["Top-Left", "Top-Right"]
        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])
        })

      }
      else {

        let Pal_1 = ["Top-Left", "Bottom-Left", "Top-Right", "Bottom-Right", "TL-to-B", "TR-to-B", "BL-to-T", "BR-to-T"];

        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }
    }
    else if (Selected_Frame === "Frame_2") {

      if ((this.HWeighted === true) && (this.VWeighted === false) && !(this.Case_Length > 239 && this.Case_Length <= 425)) {

        let Pal_1 = ["Top-Left-V2"]
        let Pal_2 = ["TL-to-B", "TR-to-B", "Top-Left", "Top-Right"]

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else if ((this.HWeighted === true) && (this.VWeighted === false) && (this.Case_Length > 239 && this.Case_Length <= 425)) {

        let Pal_1 = ["Top-Left-V2"]
        let Pal_2 = ["Top-Left", "Top-Right"]

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else {

        let Pal_1 = ["Top-Left-V2", "Bottom-Left-V2"];
        let Pal_2 = ["TL-to-B", "TR-to-B", "Top-Left", "Top-Right", "Bottom-Left", "Bottom-Right", "BL-to-T", "BR-to-T"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })


      }
    }
    else if (Selected_Frame === "Frame_3") {

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        let Pal_1 = ["Top-Left"];
        let Pal_2 = ["TL-B-V2", "TR-B-V2", "Top-Left-V2", "Top-Right-V2"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })
      } else {

        let Pal_1 = ["Top-Left", "Bottom-Left"];
        let Pal_2 = ["TL-B-V2", "TR-B-V2", "Top-Left-V2", "Top-Right-V2", "Bottom-Left-V2", "Bottom-Right-V2", "BL-T-V2", "BR-T-V2"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }

    }
    else if (Selected_Frame === "Frame_4") {

      if ((this.HWeighted === true) && (this.VWeighted === false) && !(this.Case_Length > 239 && this.Case_Length <= 425)) {

        let Pal_1 = ["Top-Left-V2"]
        let Pal_2 = ["TL-to-B", "TR-to-B", "Top-Left", "Top-Right"]

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else if ((this.HWeighted === true) && (this.VWeighted === false) && (this.Case_Length > 239 && this.Case_Length <= 425)) {

        let Pal_1 = ["Top-Left-V2"]
        let Pal_2 = ["Top-Left", "Top-Right"]

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else {

        let Pal_1 = ["Top-Left-V2", "Bottom-Left-V2"];
        let Pal_2 = ["Top-Left", "Bottom-Left", "Top-Right", "Bottom-Right", "TL-to-B", "TR-to-B", "BL-to-T", "BR-to-T"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })


      }

    }
    else if (Selected_Frame === "Frame_5") {

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        let Pal_1 = ["Top-Left"];
        let Pal_2 = ["TL-to-B", "TR-to-B", "Top-Left", "Top-Right"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })


      } else {

        let Pal_1 = ["Top-Left", "Bottom-Left"];
        let Pal_2 = ["Top-Left", "Bottom-Left", "Top-Right", "Bottom-Right", "TL-to-B", "TR-to-B", "BL-to-T", "BR-to-T"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }

    }
    else if (Selected_Frame === "Frame_6") {

      // console.log(" Possible_origin Frame6 start ")

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        // console.log(" Possible_origin Frame6 1st if part ")

        let Pal_1 = ["Top-Left-V2", "Top-Right-V2"];

        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

        // console.log(" Frame_6 frame list is ", varientsList)

      }
      else if ((this.HWeighted === false) && (this.VWeighted === true)) {
        // console.log(" Possible_origin Frame6 2nd if part ")


        let Pal_1 = ["Top-Left-V2", "Top-Right-V2"];

        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

        // console.log("Frame_6 varientsList ", varientsList)

      }
      else if ((this.HWeighted === true) && (this.VWeighted === true)) {

        // console.log(" Possible_origin Frame6 3rd if part ")


        let Pal_1 = ["Top-Left-V2", "Top-Right-V2"];

        Pal_1.forEach((value1, index) => {

          // console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }
      else if ((this.HWeighted === false) && (this.VWeighted === false)) {
        // console.log(" Possible_origin Frame6 last else part ")

        let Pal_1 = ["Top-Left-V2", "Top-Right-V2", "Bottom-Left-V2", "Bottom-Right-V2", "TL-B-V2", "TR-B-V2", "BL-T-V2", "BR-T-V2"];

        Pal_1.forEach((value1, index) => {
          // console.log("value's ", Selected_Frame, value1)
          varientsList.push([Selected_Frame, value1])
        })

      }
    }
    else if (Selected_Frame === "Frame_7") {

      if ((this.HWeighted === false) && (this.VWeighted === true)) {

        // let Pal_1 = ["Top-Left", "Top-Right"];
        let Pal_1 = ["Top-Left"];
        let Pal_2 = ["Top-Left-V2", "Top-Right-V2", "TL-B-V2", "TR-B-V2"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else {
        let Pal_1 = ["Bottom-Left"];
        let Pal_2 = ["Top-Left-V2", "Top-Right-V2", "TL-B-V2", "TR-B-V2", "Bottom-Right-V2", "Bottom-Left-V2", "BL-T-V2", "BR-T-V2"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
    }
    else if (Selected_Frame === "Frame_8") {

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        // let Pal_1 = ["Top-Left-V2", "Top-Right-V2"];
        // let Pal_2 = ["Top-Left", "Top-Right"];
        // let Pal_3 = ["Top-Left", "Top-Right"];

        let Pal_1 = ["Top-Left-V2"];
        let Pal_2 = ["Top-Left"];
        let Pal_3 = ["Top-Left"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            Pal_3.forEach((value3, index) => {

              // console.log("value's ", Selected_Frame, value1, value2, value3)

              varientsList.push([Selected_Frame, value1, value2, value3])

            })
          })
        })


      }
      else {

        let Pal_1 = ["Top-Left-V2", "Bottom-Left-V2", "Top-Right-V2", "Bottom-Right-V2"];
        let Pal_2 = ["Top-Left", "Top-Right"];
        let Pal_3 = ["Top-Left", "Top-Right"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            Pal_3.forEach((value3, index) => {

              // console.log("value's ", Selected_Frame, value1, value2, value3)

              varientsList.push([Selected_Frame, value1, value2, value3])

            })
          })
        })
      }
    }
    else if (Selected_Frame === "Frame_9") {

      if ((this.HWeighted === false) && (this.VWeighted === true) && !(this.Case_Length > 239 && this.Case_Length <= 350)) {

        let Pal_1 = ["Top-Left", "Top-Right"];
        let Pal_2 = ["Top-Left", "Top-Right"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else if ((this.HWeighted === false) && (this.VWeighted === true) && (this.Case_Length > 239 && this.Case_Length <= 350)) {

        let Pal_1 = [];
        let Pal_2 = ["Top-Left", "Top-Right"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else {

        let Pal_1 = ["Top-Left", "Top-Right"];
        let Pal_2 = ["Top-Left", "Top-Right", "TL-to-B", "TR-to-B", "Bottom-Right", "Bottom-Left"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            // console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
    }
    else if (Selected_Frame === "Frame_20") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_21") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_22") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_23") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_24") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_25") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_26") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_27") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_28") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_29") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_30") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_31") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_32") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_33") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_34") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_35") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_36") {
      varientsList.push([Selected_Frame])
    }
    else if (Selected_Frame === "Frame_38") {
      varientsList.push([Selected_Frame])
    }

    // console.log("varientsList check ", varientsList)

    return varientsList;
  }


  fillCaseRealPositions = () => {

    // console.log("updating data caseDataA1 from fillCaseRealPositions before:::: ", this.casedata, "    :::::::::::::::: ", this.PalletSelection, " ::: ", this.colorA, this.colorB, this.colorC)
    // console.log("updating data caseDataA1 from fillCaseRealPositions:::: ", this.casedataA2)
    if (this.PalletSelection == 1) {
      if (this.colorA == '#5eb8b3') {
        this.casedataA1 = [...this.casedata];
      } else if (this.colorB == '#5eb8b3') {
        this.casedataB1 = [...this.casedata];

      } else if (this.colorC == '#5eb8b3') {
        this.casedataC1 = [...this.casedata];

      }
      // console.log("checking for savePrc calling:...fillCaseRealPositions 1 ")
      this.savePrc();
    } else if (this.PalletSelection == 2) {
      if (this.colorA == '#5eb8b3') {
        this.casedataA2 = [...this.casedata];
      } else if (this.colorB == '#5eb8b3') {
        this.casedataB2 = [...this.casedata];

      } else if (this.colorC == '#5eb8b3') {
        this.casedataC2 = [...this.casedata];

      }
      // console.log("checking for savePrc calling:...fillCaseRealPosition 2 ")
      this.savePrc();
    }

  }

  Display_Variants = (Data, isSim, simulationSchema, isMemoized) => {

    console.log("Display Variants::::")
    this.drawLargeRectInitially();
    this.Case_No = 0;
    this.Case_NoForJson = 0;
    // this.tempJsonToPush = {};
    this.GreenRectPositionBool = true;
    this.state.CasesXYfotGreenRectPRC = [];
    this.state.CasesXYmanualPRC = [];
    this.state.AllAvlNrPosInDropDownList = [];
    this.state.NrPosInDropDownList = [];
    this.freesedCaseCount = -1;
    this.freezNRarray = [];
    this.Case_EndPositions = [];
    // console.log("Data.orientation_Based.length inside Display_Variants = " + Data.orientation_Based?.length);
    // var loop = Data.orientation_Based?.length;
    var i;
    // console.log(
    // "=================================================================================================================="
    // );

    // console.log("data inside display varient checking for panel41 panel5::: ", Data)

    // console.log("this.tempLabelindex in display_varients check: " + this.tempLabelindex)

    // if(isMemoized == "Memoized"){
    //   // console.log("data from memoized function inside Display_Variants... ", Data)
    //   for(let i = 0; i<Data.length; i++){
    //     this.draw(...Data[i])
    //   }
    //   this.currentVarient = Data;
    // }else{
    //   // console.log("DisplayVariant_Core not Memoized")
    this.currentVarient = DisplayVariant_Core(Data, this.draw, isSim, simulationSchema);

    // }

    // console.log("inside return displayVarient_core abc sorted casePositions...  ", this.currentVarient)

    this.setState({
      case_data: [...this.casedata],
    })
    if (this.state.panelname == "panel5") {

      this.arrowfor_panel5();
    }
    // console.log("checking for savePrc calling:...before calling fillCaseRealPositions::a1: ", this.casedataA1)
    // console.log("checking for savePrc calling:...before calling fillCaseRealPositions::a2: ", this.casedataA2)
    if ((this.state.panelname === "panel5" || this.state.panelname === "panel4") && this.currentVarient != 0) {
      // if (this.state.panelname == "panel5" ) {
      // if(this.casedata[0].position === ""){
      let foundNrPos = this.generateOriginFirstCase() // gets first case nrPosition
      this.OffsetChangePrc(0, foundNrPos, "firstCasePosition") // sets first case nrPosition in DB
      if (this.casedata[0].position_freezed) {
        if (!this.freezNRarray.includes(foundNrPos)) {
          this.freezNRarray.push(foundNrPos);
        }
      }
      // console.log("algo for firstCase: foundNrPostforFirstCase: " + `Nr ${foundNrPos + 1}`)

      this.FreezedCasesOnLoad();
      this.fillCaseRealPositions();

    }

    // console.timeEnd("Execution time drawing cases inside display_V")
    return this.currentVarient;
  };

  dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }


  draw = (xpos, ypos, Case_Length, Case_Width, orientation, isSim, simulationSchema) => {

    // console.log(
    //   "draw function is called============================================================================"
    // );]
    let image;
    this.Case_NoForJson += 1;
    this.freesedCaseCount += 1;
    if (this.frameForPRC) {
      // console.log("draw this.frameForPRC 2 ", this.frameForPRC)

      var Xposition = this.map(xpos, 0, this.Pallet_Width, this.p_xpos, this.p_xpos + parseInt(this.state.P_width, 10));
      var Yposition = this.map(ypos, 0, this.Pallet_Length, this.p_ypos, this.p_ypos + parseInt(this.state.P_length, 10));

      var width = this.map(Case_Width, 0, this.Pallet_Width, 0, this.state.P_width);
      var length = this.map(Case_Length, 0, this.Pallet_Length, 0, this.state.P_length);
      // var Xposition = this.p_xpos
      // var Yposition = this.p_ypos

      // var width = this.P_width1
      // var length = this.P_length1

    } else {

      var Xposition = this.map(xpos, 0, this.Pallet_Length, 0, this.state.P_length);
      var Yposition = this.map(ypos, 0, this.Pallet_Width, 0, this.state.P_width);

      var width = this.map(Case_Width, 0, this.Pallet_Width, 0, this.state.P_width);
      var length = this.map(Case_Length, 0, this.Pallet_Length, 0, this.state.P_length);

      // console.log("ctx draw draw this.P_width ", this.state.P_width, " this.P_length ", this.state.P_length)

    }
    // setting index for case images
    if (this.listForOutsideLabelPrior.length > 0) {
      this.tempLabelindex = this.listForOutsideLabelPrior.indexOf(this.outside_Label_Priority);
      // this.tempLabelindex = this.listForOutsideLabelPrior1.indexOf(this.outside_Label_Priority1);

    }
    // else if (this.state.selectedTwo && this.listForOutsideLabelPrior2.length > 0) {
    //   this.tempLabelindex = this.listForOutsideLabelPrior2.indexOf(this.outside_Label_Priority);
    //   // this.tempLabelindex = this.listForOutsideLabelPrior2.indexOf(this.outside_Label_Priority2);

    // }
    if (this.tempLabelindex < 0) {
      this.tempLabelindex = 0;
    }


    // var Xposition = this.map(xpos, 0, this.Pallet_Width, 270, 470);
    // var Yposition = this.map(ypos, 0, this.Pallet_Length, 50, 350);

    // var width = this.map(Case_Width, 0, this.Pallet_Width, 0, 200);
    // var length = this.map(Case_Length, 0, this.Pallet_Length, 0, 300);

    const CaseInfo = { x: Xposition, y: Yposition, w: width, h: length };
    console.log("Case Info", CaseInfo);
    if (isSim) {
      // 

      let caseData;
      if (this.state.selectedOne) {
        if (simulationSchema == "schema A") {
          caseData = this.casedataA1;
        } else if (simulationSchema == "schema B") {
          caseData = this.casedataB1;
        } else if (simulationSchema == "schema C") {
          caseData = this.casedataC1;
        }
      } else if (this.state.selectedTwo) {
        if (simulationSchema == "schema A") {
          caseData = this.casedataA2;
        } else if (simulationSchema == "schema B") {
          caseData = this.casedataB2;
        } else if (simulationSchema == "schema C") {
          caseData = this.casedataC2;
        }
      }
      // let casePositions = { x: ((Xposition + (width / 8)) - (width / 4) / 2), y: Yposition, w: width, h: length }
      console.log("checking values for simulation rotation ::: ", caseData[this.freesedCaseCount])
      if (this.freesedCaseCount < caseData.length) {

        let casePositions = {
          x: ((Xposition + (width / 8)) - (width / 4) / 2),
          y: Yposition,
          orientation: orientation,
          rotation: caseData[this.freesedCaseCount].rotation,
          pre_Pos_X: caseData[this.freesedCaseCount].pre_Pos_X,
          pre_Pos_Y: caseData[this.freesedCaseCount].pre_Pos_Y,
          pre_Pos_Z: caseData[this.freesedCaseCount].pre_Pos_Z,
          pre_Pos_2X: caseData[this.freesedCaseCount].pre_Pos_2X,
          pre_Pos_2Y: caseData[this.freesedCaseCount].pre_Pos_2Y,
          pre_Pos_2Z: caseData[this.freesedCaseCount].pre_Pos_2Z,
          pre_Pos_3X: caseData[this.freesedCaseCount].pre_Pos_3X,
          pre_Pos_3Y: caseData[this.freesedCaseCount].pre_Pos_3Y,
          pre_Pos_3Z: caseData[this.freesedCaseCount].pre_Pos_3Z,
          position: caseData[this.freesedCaseCount].position,
          case_no: (this.freesedCaseCount + 1),
          intermediateLayer: false,
        }

        if (simulationSchema == "schema A") {
          this.simCasesPositionsForSchemaA.push(casePositions)
        } else if (simulationSchema == "schema B") {
          this.simCasesPositionsForSchemaB.push(casePositions)
        } else if (simulationSchema == "schema C") {
          this.simCasesPositionsForSchemaC.push(casePositions)
        }

      }
      // console.log("checkind sim data in draw, simCasesPositionsForSchemaA ", this.simCasesPositionsForSchemaA)
      // console.log("checkind sim data in draw, simCasesPositionsForSchemaB ", this.simCasesPositionsForSchemaB)
      // console.log("checkind sim data in draw, simCasesPositionsForSchemaC ", this.simCasesPositionsForSchemaC)

    }


    // console.log("x1111: " + ((Xposition + (width / 8)) - (width / 4) / 2) + " y: " + Yposition + "wid" + width + "len" + length)
    // console.log("inside draw this.tempLabelIndex:  " + this.tempLabelindex)
    // console.log("casedate index....: " + this.freesedCaseCount + " ....rotation....: " + JSON.stringify(this.casedata[this.freesedCaseCount]))
    // console.log("checking for this.casedataA1 calling:...::a1: ", this.casedataA1)
    // console.log("checking for this.casedataB1 calling:...::b1: ", this.casedataB1)
    // console.log("checking for this.casedataC1 calling:...::c1: ", this.casedataC1)
    // console.log("checking for this.casedataA1 calling:...::a1: ", this.casedataA1)
    // console.log("checking for this.casedataB1 calling:...::b1: ", this.casedataB1)
    // console.log("checking for this.casedataC1 calling:...::c1: ", this.casedataC1)
    // console.log("checking for this.casedata calling:...::caseData1: ", this.casedata)
    if (this.state.panelname == "panel3") {
      if (orientation == "Width") { // ROTATING 0deg
        if (this.state.caseImageLoad0Deg.length > 0) {
          this.ctx.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
        }

      } else if (orientation == "Length") { // ROTATING 90deg
        if (this.state.caseImageLoad0Deg.length > 0) {
          this.ctx.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
        }
      } // ROTATION TO BE ADDED FOR 180deg and 270deg

    }
    else if ((this.state.panelname == "panel5" || this.state.panelname == "panel4") && this.casedata[this.freesedCaseCount] != undefined) {
      if (this.casedata[this.freesedCaseCount]?.rotation == -1) {
        if (orientation == "Width") { // ROTATING 0deg
          if (this.state.caseImageLoad0Deg.length > 0) {
            this.ctx_forPRC.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
            this.OffsetChangePrc((this.freesedCaseCount + 1), 0, "rotation");
          }

        } else if (orientation == "Length") { // ROTATING 90deg
          if (this.state.caseImageLoad0Deg.length > 0) {
            this.ctx_forPRC.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
            this.OffsetChangePrc((this.freesedCaseCount + 1), 90, "rotation");
          }
        } // ROTATION TO BE ADDED FOR 180deg and 270deg

      } else if (this.casedata[this.freesedCaseCount] != undefined) {
        // console.log("checking rotation for square Cases::: R:: ", this.casedata[this.freesedCaseCount]?.rotation, " ::O:: ", orientation, " ::F:: ", this.freesedCaseCount)
        if (this.casedata[this.freesedCaseCount]?.rotation == 0) {
          if (this.Case_Width === this.Case_Length) {
            this.ctx_forPRC.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
          } else {
            if (orientation == "Width") {
              this.ctx_forPRC.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
            } else if (orientation == "Length") {
              this.ctx_forPRC.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
              // console.log("checking offsetChangePrc for rotation from draw3::: ")
              this.OffsetChangePrc((this.freesedCaseCount + 1), 90, "rotation");
            }
          }

        }
        if (this.casedata[this.freesedCaseCount]?.rotation == 90) {
          if (this.Case_Width === this.Case_Length) {
            this.ctx_forPRC.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
          } else {
            if (orientation == "Width") {
              this.ctx_forPRC.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
              // console.log("checking offsetChangePrc for rotation from draw4::: ")
              this.OffsetChangePrc((this.freesedCaseCount + 1), 0, "rotation");
            } else if (orientation == "Length") {
              this.ctx_forPRC.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
            }
          }
        }
        if (this.casedata[this.freesedCaseCount]?.rotation == 180) {
          if (this.Case_Width === this.Case_Length) {
            this.ctx_forPRC.drawImage(this.state.caseImageLoad180Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
          } else {
            if (orientation == "Width") {
              this.ctx_forPRC.drawImage(this.state.caseImageLoad180Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
            } else if (orientation == "Length") {
              this.ctx_forPRC.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
              // console.log("checking offsetChangePrc for rotation from draw5::: ")
              this.OffsetChangePrc((this.freesedCaseCount + 1), 90, "rotation");
            }
          }
        }
        if (this.casedata[this.freesedCaseCount]?.rotation == 270) {
          if (this.Case_Width === this.Case_Length) {
            this.ctx_forPRC.drawImage(this.state.caseImageLoad270Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
          } else {
            if (orientation == "Width") {
              this.ctx_forPRC.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
              // console.log("checking offsetChangePrc for rotation from draw6::: ")
              this.OffsetChangePrc((this.freesedCaseCount + 1), 0, "rotation");
            } else if (orientation == "Length") {
              this.ctx_forPRC.drawImage(this.state.caseImageLoad270Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
            }
          }
        }
      }
    }
    // console.log("image is drawn inside draw for case number = " + this.case_number);
    // this.case_number++;
    // kaaaaa
    // this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" }); //postion number of cases
    this.drawRect(CaseInfo); //rectangle for case positions


    var Case_PosX = 0;
    var Case_PosY = 0;

    var x = xpos + (Case_Width / 2);
    var y = ypos + (Case_Length / 2);

    if (this.state.selectedOne) {
      if (this.originPal1 == "Upper Right Corner") {
        Case_PosX = this.map(x, this.Pallet_Width, 0, 0, (-1 * this.Pallet_Width));
        Case_PosY = this.map(y, 0, this.Pallet_Length, 0, (-1 * this.Pallet_Length));
        console.log("Inside Upper Right corner1:::Case_PosX =", Case_PosX, "Case_PosY =", Case_PosY);

      }
      if (this.originPal1 == "Upper Left Corner") {
        Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
        Case_PosY = this.map(y, 0, this.Pallet_Length, 0, (-1 * this.Pallet_Length));
      }
      if (this.originPal1 == "Lower Right Corner") {
        Case_PosX = this.map(x, this.Pallet_Width, 0, 0, (-1 * this.Pallet_Width));
        Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
      }
      if (this.originPal1 == "Lower Left Corner") {
        Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
        Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
      }
    } else {
      if (this.originPal2 == "Upper Right Corner") {
        Case_PosX = this.map(x, this.Pallet_Width, 0, 0, (-1 * this.Pallet_Width));
        Case_PosY = this.map(y, 0, this.Pallet_Length, 0, (-1 * this.Pallet_Length));
      }
      if (this.originPal2 == "Upper Left Corner") {
        Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
        Case_PosY = this.map(y, 0, this.Pallet_Length, 0, (-1 * this.Pallet_Length));
      }
      if (this.originPal2 == "Lower Right Corner") {
        Case_PosX = this.map(x, this.Pallet_Width, 0, 0, (-1 * this.Pallet_Width));
        Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
      }
      if (this.originPal2 == "Lower Left Corner") {
        Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
        Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
      }
    }

    // console.log(" ( Xposition, Yposition) : (" + Case_PosX + "," + Case_PosY + ")");
    // console.log("============================================================================");

    if ((this.state.panelname == "panel5" || this.state.panelname == "panel4") && this.casedata[this.freesedCaseCount] != undefined) {
      this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

      this.state.case_data[this.freesedCaseCount].position == "" ||
        this.state.case_data[this.freesedCaseCount].position == null ||
        this.state.case_data[this.freesedCaseCount].position == undefined
        ?
        this.state.case_data[this.freesedCaseCount].case_z_position = 0
        :
        this.state.case_data[this.freesedCaseCount].case_z_position = this.Case_Z_Pos;



      // console.log("...........................this.casedata", this.casedata)

      let tempXYpos = {
        case_x_position: Case_PosY,
        case_y_position: Case_PosX,
        case_z_position: this.Case_Z_Pos,
      }
      // console.log("checking this.Case_Z_Pos in draw::::", this.Case_EndPositions)
      this.Case_EndPositions.push(tempXYpos)

      // this.tempJsonToPush[this.selectedVar] = this.Case_EndPositions

      tempXYpos = "";

      // console.log("jsonjson" + JSON.stringify(this.tempJsonToPush));
      let x = Xposition;
      let y = Yposition;
      let tempGreenRectXYWH;
      // let NrPosInDropDownList = [];
      this.state.AllAvlNrPosInDropDownList.push("Nr " + (this.freesedCaseCount + 1));

      if (this.casedata[this.freesedCaseCount]?.rotation == -1) {
        if (orientation == "Width") {
          tempGreenRectXYWH = { x: x, y: y, w: width, h: length, rotation: 0, orientation: orientation };
        } else if (orientation == "Length") {
          tempGreenRectXYWH = { x: x, y: y, w: width, h: length, rotation: 90, orientation: orientation };
        }
      } else {
        tempGreenRectXYWH = { x: x, y: y, w: width, h: length, rotation: this.casedata[this.freesedCaseCount]?.rotation, orientation: orientation };
      }
      // if(this.casedata[this.freesedCaseCount].position != ""){
      // this.state.NrPosInDropDownList.push(this.casedata[this.freesedCaseCount].position);


      this.state.NrPosInDropDownList[this.freesedCaseCount] = this.casedata[this.freesedCaseCount].position;

      // }
      // console.log("case_data for offset prc" + JSON.stringify(tempGreenRectXYWH));
      this.state.CasesXYfotGreenRectPRC.push(tempGreenRectXYWH);
      //  this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" }); //postion number of cases
      this.state.CasesXYmanualPRC.push(tempGreenRectXYWH);

      tempGreenRectXYWH = [];

      // 
      // adding freezing color to case from here
      // 
      // console.log("case_data length freezing: " + this.casedata[this.freesedCaseCount]?.position_freezed)
      if (this.casedata[this.freesedCaseCount]?.position_freezed) {
        if (this.casedata[this.freesedCaseCount]?.position != "") {
          try {
            let NRValue = this.casedata[this.freesedCaseCount].position;
            const NRValueArr = NRValue.split(" ");
            let nrNumber = NRValueArr[1];
            let nrNumberTYPE = parseInt(nrNumber);
            let nrNumberTYPEindex = nrNumberTYPE - 1;

            this.freezNRarray.push(nrNumberTYPEindex);
            // console.log("this.freezNRarray values: " + this.freezNRarray)
          } catch (err) {
            // console.log("error in draw function split" + err)
          }
          // this.freezNRarray
        }
      }
    }
  };
  FreezedCasesOnLoad = () => {
    this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    for (let i = 0; i < this.freezNRarray.length; i++) {
      // console.log("insideinside inside: " + this.freezNRarray)
      if (this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]] != undefined) {
        let x = this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]].x
        let y = this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]].y
        let w = this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]].w
        let h = this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]].h
        // console.log("asdasd x y w l values: x: " + x + "y: " + y + "w: " + w + "l: " + h + " this.freezNRarray[i]: " + this.freezNRarray[i])
        this.drawFreezedCase(x, y, w, h);

      }
    }
  }

  drawFreezedCase = (x, y, w, h) => {

    // this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

    let greenFreezRectInfo = { x: x, y: y, w: w, h: h };


    this.drawFreezFillRect1(greenFreezRectInfo)



    this.setState({
      canvasGreenRect: "visible",
      canvasOrangeRect: "visible",
      canvasRedRect: "visible",
      canvasfreezGreenRect: "visible",

    })

  }

  drawFreezFillRect1 = (info, style = {}) => {

    const { x, y, w, h } = info;
    const { backgroundColor = 'grey' } = style;

    this.ctx_GRCaseFreez.beginPath();
    this.ctx_GRCaseFreez.fillStyle = backgroundColor;


    // console.log(" drawFillRect1 ")

    this.ctx_GRCaseFreez.globalAlpha = 0.75;
    this.ctx_GRCaseFreez.fillRect(x, y, w, h);
    this.ctx_GRCaseFreez.fillText(this.Case_No + 1, (x + (w / 2)), (y + (h / 2)), 50);


  }

  drawCaseImg = (imageNumber, rotation) => {

    // this.splitForOutSideLabelPriority();

    // const records = await this.getAllLabels();
    // for (var record of records) {
    let neededLabelForColor;
    // console.log("find 1:" + this.listForOutsideLabelPrior.length)

    try {

      // console.log("this.state.outside_Label_Priority" + this.state.outside_Label_Priority)
      let splitarray;
      splitarray = this.listForOutsideLabelPrior[imageNumber].split("_");
      console.log("Check for red color listForOutsideLabelPrior 1: " + this.listForOutsideLabelPrior)
      let outside_split = this.listForOutsideLabelPrior[imageNumber].split("_").reverse()
      console.log("Check for red color listForOutsideLabelPrior 2: " + outside_split[0])

      neededLabelForColor = outside_split[0];
      console.log("Inside BIKRAM neededLabelForColor = ", neededLabelForColor);
      // if (this.state.selectedOne) {
      //   splitarray = this.listForOutsideLabelPrior1[imageNumber].split("_");
      // } else {
      //   splitarray = this.listForOutsideLabelPrior2[imageNumber].split("_");

      // }
      // neededLabelForColor = splitarray[1];
      // console.log("check split" + splitarray[1])
      // console.log("this.state.outside_Label_Priority my value: " + neededLabelForColor)
    }
    catch (e) {
      // console.log("error inside drawCaseImg = " + e);
    }

    // var Xposition = this.map(xpos, 0, this.Pallet_Width, 270, 470);
    // var Yposition = this.map(ypos, 0, this.Pallet_Length, 50, 350);

    // var width = this.map(Case_Width, 0, this.Pallet_Width, 0, 200);
    // var length = this.map(Case_Length, 0, this.Pallet_Length, 0, 300);

    const CaseInfo = { x: 0, y: 0, w: 791, h: 400 };

    // Here make a function that will decide position for all 13 labels
    //Top for 0deg
    const CaseInfo0deg = { x: 272, y: 60, w: 247, h: 60 }; // Top 

    //Top for 90deg
    const CaseInfo90deg = { x: 521, y: 120, w: 130, h: 160 }; // Top

    //Top for 180deg
    const CaseInfo180deg = { x: 272, y: 250, w: 247, h: 60 }; // Top

    //Top for 2700deg
    const CaseInfo270deg = { x: 150, y: 120, w: 130, h: 160 }; // Top

    //Down
    const CaseInfo2 = { x: 272, y: 320, w: 247, h: 50 }; //down 

    //Right
    const CaseInfo3 = { x: 661, y: 120, w: 130, h: 120 }; //right 

    //Left
    const CaseInfo4 = { x: 0, y: 120, w: 130, h: 120 }; //left 

    //UP
    const CaseInfo5 = { x: 272, y: 0, w: 247, h: 50 }; // front 

    //Top-corner bottom
    const CaseInfo6 = { x: 272, y: 260, w: 247, h: 70 }; // top-down
    const CaseInfo7 = { x: 272, y: 320, w: 247, h: 50 }; //down

    //Top-corner Up
    const CaseInfo8 = { x: 272, y: 0, w: 247, h: 50 }; // up 
    const CaseInfo9 = { x: 272, y: 50, w: 247, h: 50 }; // Top 

    //Top-corner Right
    const CaseInfo10 = { x: 661, y: 120, w: 130, h: 120 }; //right
    const CaseInfo11 = { x: 544, y: 120, w: 247, h: 120 }; // viewver's right-top

    //Top-corner Left
    const CaseInfo12 = { x: 0, y: 120, w: 20, h: 120 }; //left
    const CaseInfo13 = { x: 0, y: 120, w: 247, h: 120 }; // vievwer's left-top

    //bottom-left side corner
    const CaseInfo14 = { x: 0, y: 350, w: 247, h: 20 }; //down //
    const CaseInfo15 = { x: 0, y: 260, w: 50, h: 110 };// viewver's left

    //bottom-right side corner
    const CaseInfo16 = { x: 544, y: 350, w: 247, h: 20 }; //down
    const CaseInfo17 = { x: 750, y: 260, w: 50, h: 150 }; //viewver's right

    //top-right side corner
    const CaseInfo18 = { x: 750, y: 0, w: 40, h: 110 }; // viewver's right
    const CaseInfo19 = { x: 544, y: 0, w: 247, h: 20 }; // up

    //top-left side corner
    const CaseInfo20 = { x: 0, y: 0, w: 40, h: 110 }; // vievwer's left
    const CaseInfo21 = { x: 0, y: 0, w: 247, h: 20 }; // up

    // this.ctxCase.clearRect(0, 0, canvasEleCase.width, canvasEleCase.height);

    this.drawFillRect_CaseImage(CaseInfo, { backgroundColor: "#eab676" });
    this.drawRect_CaseImage(CaseInfo);

    let currentLabelList;
    if (this.state.selectedOne) {
      currentLabelList = this.listForLabel1;
      // console.log("list fr lable prat1" + this.listForLabel1)
    } else if (this.state.selectedTwo) {
      currentLabelList = this.listForLabel2;
      // console.log("list fr lable prat2" + this.listForLabel2)

    }


    if (currentLabelList.includes("Top")) {
      // Top
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo0deg, { backgroundColor: neededLabelForColor == "Top" ? "red" : "white" });

      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo90deg, { backgroundColor: neededLabelForColor == "Top" ? "red" : "white" });

      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo180deg, { backgroundColor: neededLabelForColor == "Top" ? "red" : "white" });

      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo270deg, { backgroundColor: neededLabelForColor == "Top" ? "red" : "white" });

      }

      // console.log(" drawCaseImg Top ")
    }

    if (currentLabelList.includes("Right")) {
      //Right
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo3, { backgroundColor: neededLabelForColor == "Right" ? "red" : "white" });

      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo2, { backgroundColor: neededLabelForColor == "Right" ? "red" : "white" });

      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo4, { backgroundColor: neededLabelForColor == "Right" ? "red" : "white" });

      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: neededLabelForColor == "Right" ? "red" : "white" });

      }
      // console.log(" drawCaseImg Right ")

    }

    if (currentLabelList.includes("Left")) {
      //Left
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo4, { backgroundColor: neededLabelForColor == "Left" ? "red" : "white" });

      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: neededLabelForColor == "Left" ? "red" : "white" });

      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo3, { backgroundColor: neededLabelForColor == "Left" ? "red" : "white" });

      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo2, { backgroundColor: neededLabelForColor == "Left" ? "red" : "white" });

      }
      // console.log(" drawCaseImg Left ")

    }

    if (currentLabelList.includes("Back")) {
      //Down
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo2, { backgroundColor: neededLabelForColor == "Back" ? "red" : "white" });

      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo4, { backgroundColor: neededLabelForColor == "Back" ? "red" : "white" });

      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: neededLabelForColor == "Back" ? "red" : "white" });

      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo3, { backgroundColor: neededLabelForColor == "Back" ? "red" : "white" });

      }
      // console.log(" drawCaseImg Back ")

    }

    if (currentLabelList.includes("Front")) {
      //Up
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: neededLabelForColor == "Front" ? "red" : "white" });

      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo3, { backgroundColor: neededLabelForColor == "Front" ? "red" : "white" });

      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo2, { backgroundColor: neededLabelForColor == "Front" ? "red" : "white" });

      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo4, { backgroundColor: neededLabelForColor == "Front" ? "red" : "white" });
      }
      // console.log(" drawCaseImg Front ")

    }

    //  //Up
    // this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: "pink" });


    if (currentLabelList.includes("Top-Front")) {
      //Top-corner Up
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo8, { backgroundColor: neededLabelForColor == "Top-Front" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo9, { backgroundColor: neededLabelForColor == "Top-Front" ? "red" : "white" });

      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo10, { backgroundColor: neededLabelForColor == "Top-Front" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo11, { backgroundColor: neededLabelForColor == "Top-Front" ? "red" : "white" });
      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo6, { backgroundColor: neededLabelForColor == "Top-Front" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo7, { backgroundColor: neededLabelForColor == "Top-Front" ? "red" : "white" });
      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo12, { backgroundColor: neededLabelForColor == "Top-Front" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo13, { backgroundColor: neededLabelForColor == "Top-Front" ? "red" : "white" });
      }


      if (neededLabelForColor == "Front") {
        if (currentLabelList.includes("Front")) {
          //Up
          if (rotation == 0) {
            this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: neededLabelForColor == "Front" ? "red" : "white" });

          } else if (rotation == 1) {
            this.drawFillRect_CaseImage(CaseInfo3, { backgroundColor: neededLabelForColor == "Front" ? "red" : "white" });

          } else if (rotation == 2) {
            this.drawFillRect_CaseImage(CaseInfo2, { backgroundColor: neededLabelForColor == "Front" ? "red" : "white" });

          } else if (rotation == 3) {
            this.drawFillRect_CaseImage(CaseInfo4, { backgroundColor: neededLabelForColor == "Front" ? "red" : "white" });
          }
          // console.log(" drawCaseImg Front ")

        }
      }
      if (neededLabelForColor == "Top") {
        if (currentLabelList.includes("Top")) {
          // Top
          if (rotation == 0) {
            this.drawFillRect_CaseImage(CaseInfo0deg, { backgroundColor: neededLabelForColor == "Top" ? "red" : "white" });

          } else if (rotation == 1) {
            this.drawFillRect_CaseImage(CaseInfo90deg, { backgroundColor: neededLabelForColor == "Top" ? "red" : "white" });

          } else if (rotation == 2) {
            this.drawFillRect_CaseImage(CaseInfo180deg, { backgroundColor: neededLabelForColor == "Top" ? "red" : "white" });

          } else if (rotation == 3) {
            this.drawFillRect_CaseImage(CaseInfo270deg, { backgroundColor: neededLabelForColor == "Top" ? "red" : "white" });

          }
        }
      }

      // console.log(" drawCaseImg Top-Front ")

    }

    if (currentLabelList.includes("Top-Back")) {
      //Top-corner bottom
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo6, { backgroundColor: neededLabelForColor == "Top-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo7, { backgroundColor: neededLabelForColor == "Top-Back" ? "red" : "white" });
      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo12, { backgroundColor: neededLabelForColor == "Top-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo13, { backgroundColor: neededLabelForColor == "Top-Back" ? "red" : "white" });
      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo8, { backgroundColor: neededLabelForColor == "Top-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo9, { backgroundColor: neededLabelForColor == "Top-Back" ? "red" : "white" });

      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo10, { backgroundColor: neededLabelForColor == "Top-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo11, { backgroundColor: neededLabelForColor == "Top-Back" ? "red" : "white" });
      }

      if (neededLabelForColor == "Back") {
        if (currentLabelList.includes("Back")) {
          //Down
          if (rotation == 0) {
            this.drawFillRect_CaseImage(CaseInfo2, { backgroundColor: neededLabelForColor == "Back" ? "red" : "white" });
          } else if (rotation == 1) {
            this.drawFillRect_CaseImage(CaseInfo4, { backgroundColor: neededLabelForColor == "Back" ? "red" : "white" });
          } else if (rotation == 2) {
            this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: neededLabelForColor == "Back" ? "red" : "white" });
          } else if (rotation == 3) {
            this.drawFillRect_CaseImage(CaseInfo3, { backgroundColor: neededLabelForColor == "Back" ? "red" : "white" });
          }
        }
      }

    }

    if (currentLabelList.includes("Top-Right")) {
      //Top-corner Right
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo10, { backgroundColor: neededLabelForColor == "Top-Right" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo11, { backgroundColor: neededLabelForColor == "Top-Right" ? "red" : "white" });
      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo6, { backgroundColor: neededLabelForColor == "Top-Right" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo7, { backgroundColor: neededLabelForColor == "Top-Right" ? "red" : "white" });
      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo12, { backgroundColor: neededLabelForColor == "Top-Right" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo13, { backgroundColor: neededLabelForColor == "Top-Right" ? "red" : "white" });
      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo8, { backgroundColor: neededLabelForColor == "Top-Right" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo9, { backgroundColor: neededLabelForColor == "Top-Right" ? "red" : "white" });
      }

      if (neededLabelForColor == "Right") {
        if (currentLabelList.includes("Right")) {
          //Right
          if (rotation == 0) {
            this.drawFillRect_CaseImage(CaseInfo3, { backgroundColor: neededLabelForColor == "Right" ? "red" : "white" });
          } else if (rotation == 1) {
            this.drawFillRect_CaseImage(CaseInfo2, { backgroundColor: neededLabelForColor == "Right" ? "red" : "white" });
          } else if (rotation == 2) {
            this.drawFillRect_CaseImage(CaseInfo4, { backgroundColor: neededLabelForColor == "Right" ? "red" : "white" });
          } else if (rotation == 3) {
            this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: neededLabelForColor == "Right" ? "red" : "white" });
          }
        }
      }


      // console.log(" drawCaseImg Top-Right ")

    }

    if (currentLabelList.includes("Top-Left")) {
      //Top-corner Left
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo12, { backgroundColor: neededLabelForColor == "Top-Left" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo13, { backgroundColor: neededLabelForColor == "Top-Left" ? "red" : "white" });
      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo8, { backgroundColor: neededLabelForColor == "Top-Left" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo9, { backgroundColor: neededLabelForColor == "Top-Left" ? "red" : "white" });
      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo10, { backgroundColor: neededLabelForColor == "Top-Left" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo11, { backgroundColor: neededLabelForColor == "Top-Left" ? "red" : "white" });
      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo6, { backgroundColor: neededLabelForColor == "Top-Left" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo7, { backgroundColor: neededLabelForColor == "Top-Left" ? "red" : "white" });
      }

      if (neededLabelForColor == "Left") {
        if (currentLabelList.includes("Left")) {
          //Left
          if (rotation == 0) {
            this.drawFillRect_CaseImage(CaseInfo4, { backgroundColor: neededLabelForColor == "Left" ? "red" : "white" });
          } else if (rotation == 1) {
            this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: neededLabelForColor == "Left" ? "red" : "white" });
          } else if (rotation == 2) {
            this.drawFillRect_CaseImage(CaseInfo3, { backgroundColor: neededLabelForColor == "Left" ? "red" : "white" });
          } else if (rotation == 3) {
            this.drawFillRect_CaseImage(CaseInfo2, { backgroundColor: neededLabelForColor == "Left" ? "red" : "white" });
          }
          // console.log(" drawCaseImg Left ")

        }
      }
      // console.log(" drawCaseImg Top-Left ")

    }

    //
    if (currentLabelList.includes("Front-Right")) {
      //top-right side corner
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo18, { backgroundColor: neededLabelForColor == "Front-Right" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo19, { backgroundColor: neededLabelForColor == "Front-Right" ? "red" : "white" });
      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo16, { backgroundColor: neededLabelForColor == "Front-Right" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo17, { backgroundColor: neededLabelForColor == "Front-Right" ? "red" : "white" });

      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo14, { backgroundColor: neededLabelForColor == "Front-Right" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo15, { backgroundColor: neededLabelForColor == "Front-Right" ? "red" : "white" });
      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo20, { backgroundColor: neededLabelForColor == "Front-Right" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo21, { backgroundColor: neededLabelForColor == "Front-Right" ? "red" : "white" });
      }

      // console.log(" drawCaseImg Front-Right ")

    }

    if (currentLabelList.includes("Right-Back")) {
      //bottom-right side corner
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo16, { backgroundColor: neededLabelForColor == "Right-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo17, { backgroundColor: neededLabelForColor == "Right-Back" ? "red" : "white" });
      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo14, { backgroundColor: neededLabelForColor == "Right-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo15, { backgroundColor: neededLabelForColor == "Right-Back" ? "red" : "white" });
      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo20, { backgroundColor: neededLabelForColor == "Right-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo21, { backgroundColor: neededLabelForColor == "Right-Back" ? "red" : "white" });
      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo18, { backgroundColor: neededLabelForColor == "Right-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo19, { backgroundColor: neededLabelForColor == "Right-Back" ? "red" : "white" });
      }


      // console.log(" drawCaseImg Right-Back ")


    }

    if (currentLabelList.includes("Left-Back")) {
      //bottom-left side corner
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo14, { backgroundColor: neededLabelForColor == "Left-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo15, { backgroundColor: neededLabelForColor == "Left-Back" ? "red" : "white" });
      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo20, { backgroundColor: neededLabelForColor == "Left-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo21, { backgroundColor: neededLabelForColor == "Left-Back" ? "red" : "white" });
      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo18, { backgroundColor: neededLabelForColor == "Left-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo19, { backgroundColor: neededLabelForColor == "Left-Back" ? "red" : "white" });
      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo16, { backgroundColor: neededLabelForColor == "Left-Back" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo17, { backgroundColor: neededLabelForColor == "Left-Back" ? "red" : "white" });
      }


      // console.log(" drawCaseImg Left-Back ")

    }

    if (currentLabelList.includes("Front-Left")) {
      //top-left side corner
      if (rotation == 0) {
        this.drawFillRect_CaseImage(CaseInfo20, { backgroundColor: neededLabelForColor == "Front-Left" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo21, { backgroundColor: neededLabelForColor == "Front-Left" ? "red" : "white" });
      } else if (rotation == 1) {
        this.drawFillRect_CaseImage(CaseInfo18, { backgroundColor: neededLabelForColor == "Front-Left" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo19, { backgroundColor: neededLabelForColor == "Front-Left" ? "red" : "white" });
      } else if (rotation == 2) {
        this.drawFillRect_CaseImage(CaseInfo16, { backgroundColor: neededLabelForColor == "Front-Left" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo17, { backgroundColor: neededLabelForColor == "Front-Left" ? "red" : "white" });
      } else if (rotation == 3) {
        this.drawFillRect_CaseImage(CaseInfo14, { backgroundColor: neededLabelForColor == "Front-Left" ? "red" : "white" });
        this.drawFillRect_CaseImage(CaseInfo15, { backgroundColor: neededLabelForColor == "Front-Left" ? "red" : "white" });
      }


      // console.log(" drawCaseImg Front-Left ")
    }



    // it will provide that image for case
    this.downloadImageForCase(imageNumber, rotation);

    //return image;


  }


  handelWindowResize = () => {
    if (this.camera) {
      const canvas = this.renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        // you must pass false here or three.js sadly fights the browser
        this.renderer.setSize(width, height, false);
        // this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

      }
    }
  }

  base64ToBlob = (base64Data, contentType) => {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  convertBase64ToImage = (base64Data, format, name) => {
    // Remove the data URL prefix if present
    const dataUrlRegex = /^data:image\/(png|jpg|jpeg);base64,/;
    const cleanedBase64Data = base64Data.replace(dataUrlRegex, '');

    // Convert Base64 to Blob
    const contentType = `images/${format}`;
    const blob = this.base64ToBlob(cleanedBase64Data, contentType);
    blob.name = name;
    return blob;
    // console.log("downloading image base64ToBlob", blob)
    // // Save the Blob as a file
    // saveAs(blob, `image.${format}`);
  }
  canvasToPng = canvas => canvas.toDataURL('image/png');

  downloadImage = (selected) => {

    const image = this.canvasToPng(this.myRef.current);
    // this.imageSrc = image;

    this.imageSrc_array.push(image);
    this.variantName_array.push(selected);
    if (this.colorA == '#5eb8b3') {
      this.variantName_arrayA.push(selected);
      this.imageSrc_arrayA.push(image);

    } else if (this.colorB == '#5eb8b3') {
      this.variantName_arrayB.push(selected);
      this.imageSrc_arrayB.push(image);
    } else if (this.colorC == '#5eb8b3') {
      this.variantName_arrayC.push(selected);
      this.imageSrc_arrayC.push(image);
    }
    console.log("selected inside downloadImage is " + selected)
    console.log("image canvasToPng is ", this.imageSrc_array)
    // console.log("image from photo1 is " + photo1)
    // console.log("image this.imageSrc_array " + this.imageSrc_array[0])

    // const link = this.downloadLink.current;
    // link.href = image;
    // link.click();
    // if (selected == "Var 129") {
    //   this.convertBase64ToImage(image, 'jpg');
    // }

  };
  savingSequence=()=>{
    console.log("haaa hua bhai")
    
    try {
        axios
          .get(`Threed/getLayer/` + this.props.match.params.palletid)
          .then((resp) => {
            console.log(resp.data,"resp")
            let schemaA = resp.data.map((layer, i) => {
              if (layer.layername == "Schema A" && layer.pallet_no==1) {
                return layer.layerSequence;
              } else {
                return null;
              }
            }).filter((layer, i) => {
              return layer != null;
            }).join(", ");
            console.log(schemaA,"schemaA")


            let schemaB = resp.data.map((layer, i) => {
              if (layer.layername == "Schema B" && layer.pallet_no==1) {
                return layer.layerSequence;
              } else {
                return null;
              }
            }).filter((layer, i) => {
              return layer != null;
            }).join(", ");
            console.log(schemaB,"schemaB")

            let schemaC = resp.data.map((layer, i) => {
              if (layer.layername == "Schema C" && layer.pallet_no==1) {
                return layer.layerSequence;
              } else {
                return null;
              }
            }).filter((layer, i) => {
              return layer != null;
            }).join(", ");
            console.log(schemaC,"schemaC")

        axios
        .put(`threed/addsequence/${this.props.match.params.palletid}`, {
          layerSchemaA:schemaA,
          layerSchemaB:schemaB,
          layerSchemaC:schemaC,
        })
        .then((resp) => {
          console.log(resp)
        });
          });

         
      } catch (error) {
        console.log(error);
      }
   
  }

  generatePDF_File = async (Images2D, SchemaABC_images) => {
    try {
      let { t } = this.props;
      const formData = new FormData();
      let case_Type = this.state.case_Type.split("_", (this.state.case_Type.split("_").length - 3)).join('_');
      let schemaA = this.state.layer_data.map((layer, i) => {
        if (layer.layername == "Schema A") {
          return layer.layerSequence;
        } else {
          return null;
        }
      }).filter((layer, i) => {
        return layer != null;
      }).join(", ");
      let schemaB = this.state.layer_data.map((layer, i) => {
        if (layer.layername == "Schema B") {
          return layer.layerSequence;
        } else {
          return null;
        }
      }).filter((layer, i) => {
        return layer != null;
      }).join(", ");
      let schemaC = this.state.layer_data.map((layer, i) => {
        if (layer.layername == "Schema C") {
          return layer.layerSequence;
        } else {
          return null;
        }
      }).filter((layer, i) => {
        return layer != null;
      }).join(", ");
      console.log("checking layerdata for generate pdf ", this.state.layer_data, " schema A ", schemaA, " schema B ", schemaB, " schema C ", schemaC);



      Images2D.forEach((img, i) => {
        formData.append('files', img.file, `${img.label_Type}`); // Replace 'file' with the actual file object
        // console.log("checking all append 2Dimage labeltype :::: ", img.label_Type)
      })

      SchemaABC_images.forEach((files, i) => {
        formData.append('files', files.file, `${files.label_Type}`);
      });
      const SelectedLanguage = localStorage.getItem('language')
      console.log(SelectedLanguage)
      formData.append('SelectedLanguage', SelectedLanguage);

      formData.append('Name', case_Type);
      formData.append('PalletId', this.palletid);
      formData.append('caseDimensionToggle', this.state.caseDimensionToggle);
      formData.append('LabelDescriptionToggle', this.state.LabelDescriptionToggle);
      formData.append('noSchemaA', this.simCasesPositionsForSchemaA.length);
      formData.append('noSchemaB', this.simCasesPositionsForSchemaB.length);
      formData.append('noSchemaC', this.simCasesPositionsForSchemaC.length);

      formData.append('LayersSchema_A', schemaA);
      formData.append('LayersSchema_B', schemaB);
      formData.append('LayersSchema_C', schemaC);


      const response = await fetch('/threed/ConvertToPdf', {
        method: 'POST',
        body: formData,
      });
      // console.log('response generated by PDF API:', response);

      if (response.ok) {
        const data = await response.json();
        // console.log("checking response data::::", data)
        // Assuming the API returns the output file path
        const filePath = data.outputFilePath;
        // console.log("filepath checking::::", filePath)
        this.downloadFile(filePath);
        this.setState({
          exportButtonForDocument: false
        })
        toast.success(t('DocumentationisDownloaded'),
          { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
      } else {
        console.error('Failed to create PDF:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  }

  // downloadFile = (filePath) => {
  downloadFile = () => {
    fetch('/threed/getpdf')
      .then(response => response.blob())
      .then(blob => {
        const fileURL = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = 'Adjupal Export-Doc.pdf';
        link.click();
        URL.revokeObjectURL(fileURL); // Clean up the URL object
      })
      .catch(error => {
        console.error('Error occurred during file download:', error);
      });
  }
  // };

  saveArrayBuffer = (Buffer, fileName, SchemaABC_images, label_Type) => {
    this.save(new Blob([Buffer], { type: 'application/octet-stream' }), fileName, SchemaABC_images, label_Type)
  }

  save = (blob, fileName, SchemaABC_images, label_Type) => {
    // const link = document.createElement('a')
    // document.body.appendChild(link)
    // link.href = URL.createObjectURL(blob);
    // link.download = fileName
    // link.click()
    this.threeDobjBlobs.push({ "label_Type": label_Type, "file": blob });
    // console.log("checking blobs of pallet and cube0:::: ", this.listForOutsideLabelPrior.length, this.listForOutsideLabelPrior);
    // this.generatePDF_File(blob, SchemaABC_images);
    if (this.threeDobjBlobs.length == (this.listForOutsideLabelPrior.length + 1)) {
      this.generatePDF_File(this.threeDobjBlobs, this.SchemaABC_images);
    }
  }

  GeneratePDF = () => {
    if (this.state.downloadablePDF) {
      // console.log("checking original case numbers::::: ", this.simCasesPositionsForSchemaA.length, " ", this.simCasesPositionsForSchemaB.length, " ", this.simCasesPositionsForSchemaC.length)
      // const image2d = getCanvasImage_2D().toDataURL("image/png", 1.0);
      // const a = document.createElement("a");
      // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
      // a.download = "image.png"
      // a.click();

      this.threeDobjBlobs = [];
      this.SchemaABC_images = []
      let imageBlobFile;
      // let schemaA_index = this.state.setVariantName_SchemaA != "" ? this.variantName_arrayA.indexOf(this.state.setVariantName_SchemaA) : null;
      // let schemaB_index = this.state.setVariantName_SchemaB != "" ? this.variantName_arrayB.indexOf(this.state.setVariantName_SchemaB) : null;
      // let schemaC_index = this.state.setVariantName_SchemaC != "" ? this.variantName_arrayC.indexOf(this.state.setVariantName_SchemaC) : null;
      this.setState({
        exportButtonForDocument: true
      })
      console.log("checking pallet type in generate pdf:::", this.state.pallete_Type, " :::type of this.state.pallete_Type::: ", typeof this.state.pallete_Type)
      axios.get(`/threed/getPalImage/${this.palletid}`).then((resp) => {
        // console.log("cehcking images getting from database::::C ", resp.data[0].image_A, resp.data[0].image_B, resp.data[0].image_C);
        console.log("resp.dat[0.image_A::", resp.data[0].image_A);
        if (resp.data[0].image_A != null && resp.data[0].image_A !== "") {
          console.log("resp.dat[0.image_A::", resp.data[0].image_A);
          const img = JSON.parse(resp.data[0].image_A);
          if (img.data != null) {
            imageBlobFile = this.convertBase64ToImage(img.data, 'png', `image${1}`);
            this.SchemaABC_images.push({ "label_Type": `SchemaA_${img.origin}_${this.state.pallete_Type}`, "file": imageBlobFile, "origin": img.origin })
          }
        }
        if (resp.data[0].image_B != null && resp.data[0].image_B != "") {
          const img = JSON.parse(resp.data[0].image_B);
          if (img.data != null) {
            imageBlobFile = this.convertBase64ToImage(img.data, 'png', `image${2}`);
            this.SchemaABC_images.push({ "label_Type": `SchemaB_${img.origin}_${this.state.pallete_Type}`, "file": imageBlobFile, "origin": img.origin })
          }
        }
        if (resp.data[0].image_C != null && resp.data[0].image_C != "") {
          const img = JSON.parse(resp.data[0].image_C);
          if (img.data != null) {
            imageBlobFile = this.convertBase64ToImage(img.data, 'png', `image${3}`);
            this.SchemaABC_images.push({ "label_Type": `SchemaC_${img.origin}_${this.state.pallete_Type}`, "file": imageBlobFile, "origin": img.origin })
          }
        }

        let sceneObjects = this.getAllThreedOBJECT();
        this.generatePDF_File(sceneObjects, this.SchemaABC_images);
        // const exporter = new GLTFExporter();
        // sceneObjects.forEach((singleOBJ, i) => {
        //   exporter.parse(
        //     singleOBJ.file,
        //     (result) => {
        //       this.saveArrayBuffer(result, "threejsScene.glb", this.SchemaABC_images, singleOBJ.label_Type)
        //     },
        //     {
        //       binary: true
        //     }
        //   )
        // })

      });
    } else {
      let { t } = this.props;
      toast.error(t(`pleasesetallvaluesandpositionsofcasesinProgramRoutineCreator`), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
    }
  }

  getAllThreedOBJECT = () => {
    let sceneObjects = [];
    let outsideLabelPriority = [...this.listForOutsideLabelPrior];
    // outsideLabelPriority.shift();



    const image2d = GetEmptyCase().toDataURL("image/png", 1.0);
    const image2dPallet = GetCapturePallet().toDataURL("image/png", 1.0);

    sceneObjects.push({ "label_Type": "Pallet", "file": this.convertBase64ToImage(image2dPallet, 'png', "Pallet") });
    sceneObjects.push({ "label_Type": "emptyCase", "file": this.convertBase64ToImage(image2d, 'png', "emptyCase") });


    outsideLabelPriority.forEach((OLPrior, index) => {
      let checkOLPrior = OLPrior.split("_");
      let shorten_OLPrior = checkOLPrior[checkOLPrior.length - 1];
      console.log("checking shorten_OLPrior for label check shorten_OLPrior/getAllThreedOBJECT::: ", shorten_OLPrior)

      if (shorten_OLPrior == "Front") {
        const image2d = GetFrontCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Front", "file": this.convertBase64ToImage(image2d, 'png', "Front") });
        // const image2d = GetFrontCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Front.png"
        // a.click();
      } else if (shorten_OLPrior == "Top") {
        const image2d = GetTopCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Top", "file": this.convertBase64ToImage(image2d, 'png', "Top") });
        // const image2d = GetTopCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Top.png"
        // a.click();
      } else if (shorten_OLPrior == "Left") {
        const image2d = GetLeftCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Left", "file": this.convertBase64ToImage(image2d, 'png', "Left") });
        // const image2d = GetLeftCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Left.png"
        // a.click();
      } else if (shorten_OLPrior == "Right") {
        const image2d = GetRightCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Right", "file": this.convertBase64ToImage(image2d, 'png', "Right") });
        // const image2d = GetRightCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Right.png"
        // a.click();
      } else if (shorten_OLPrior == "Back") {
        const image2d = GetBackCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Back", "file": this.convertBase64ToImage(image2d, 'png', "Back") });
        // const image2d = GetBackCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Back.png"
        // a.click();
      } else if (shorten_OLPrior == "Top-Front") {
        const image2d = GetTopFrontCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Top-Front", "file": this.convertBase64ToImage(image2d, 'png', "Top-Front") });
        // const image2d = GetTopFrontCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Top-Front.png"
        // a.click();
      } else if (shorten_OLPrior == "Top-Right") {
        const image2d = GetTopRightCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Top-Right", "file": this.convertBase64ToImage(image2d, 'png', "Top-Right") });
        // const image2d = GetTopRightCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Top-Right.png"
        // a.click();
      } else if (shorten_OLPrior == "Top-Left") {
        const image2d = GetTopLeftCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Top-Left", "file": this.convertBase64ToImage(image2d, 'png', "Top-Left") });
        // const image2d = GetTopLeftCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Top-Left.png"
        // a.click();
      } else if (shorten_OLPrior == "Top-Back") {
        const image2d = GetTopBackCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Top-Back", "file": this.convertBase64ToImage(image2d, 'png', "Top-Back") });
        // const image2d = GetTopBackCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Top-Back.png"
        // a.click();
      } else if (shorten_OLPrior == "Front-Right") {
        const image2d = GetFrontRightCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Front-Right", "file": this.convertBase64ToImage(image2d, 'png', "Front-Right") });
        // const image2d = GetFrontRightCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Front-Right.png"
        // a.click();
      } else if (shorten_OLPrior == "Front-Left") {
        const image2d = GetFrontLeftCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Front-Left", "file": this.convertBase64ToImage(image2d, 'png', "Front-Left") });
        // const image2d = GetFrontLeftCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Front-Left.png"
        // a.click();
      } else if (shorten_OLPrior == "Right-Back") {
        const image2d = GetRightBackCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Right-Back", "file": this.convertBase64ToImage(image2d, 'png', "Right-Back") });
        // const image2d = GetRightBackCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Right-Back.png"
        // a.click();
      } else if (shorten_OLPrior == "Left-Back") {
        const image2d = GetLeftBackCase().toDataURL("image/png", 1.0);
        sceneObjects.push({ "label_Type": "Left-Back", "file": this.convertBase64ToImage(image2d, 'png', "Left-Back") });
        // const image2d = GetLeftBackCase().toDataURL("image/png", 1.0);
        // const a = document.createElement("a");
        // a.href = image2d.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        // a.download = "Left-Back.png"
        // a.click();
      }
    })

    return sceneObjects;
  }

  downloadImageForCase = (imageNumber, rotation) => {

    const imageUrl = this.canvasToPng(this.myRefCase.current);

    // this.CasesImageSrc_array.push(imageUrl);
    this.CasesImageSrc_array.push(imageUrl);
    // var blob = this.dataURLtoBlob(image);
    // console.log("image this.CasesImageSrc_array " + this.CasesImageSrc_array.length)
    // this.state.caseImageLoad = new Image();
    if (rotation == 0) {
      this.state.caseImageLoad0Deg[imageNumber] = new Image();
      this.state.caseImageLoad0Deg[imageNumber].src = this.CasesImageSrc_array[imageNumber]; //

    } else if (rotation == 1) {
      this.state.caseImageLoad90Deg[imageNumber] = new Image();
      this.state.caseImageLoad90Deg[imageNumber].src = this.CasesImageSrc_array[imageNumber]; //

    } else if (rotation == 2) {
      this.state.caseImageLoad180Deg[imageNumber] = new Image();
      this.state.caseImageLoad180Deg[imageNumber].src = this.CasesImageSrc_array[imageNumber]; //

    } else if (rotation == 3) {
      this.state.caseImageLoad270Deg[imageNumber] = new Image();
      this.state.caseImageLoad270Deg[imageNumber].src = this.CasesImageSrc_array[imageNumber]; //

    }

    // console.log("image Case canvasToPng is CasesImageSrc_array " + imageUrl)



    return imageUrl;
  };

  // filter_visible_Var = (original_poss_Origin) =>{
  //   let result_Varients_no;
  //   let last_Var_no = original_poss_Origin.length - 1;
  //   let temp_poss_Origin = [...original_poss_Origin]
  //   let schemaA_no = this.state.setVariantName_SchemaA !== "" ? parseInt(this.state.setVariantName_SchemaA.split(" ")[1]) : "";
  //   let schemaB_no = this.state.setVariantName_SchemaB !== "" ? parseInt(this.state.setVariantName_SchemaB.split(" ")[1]) : "";
  //   let schemaC_no = this.state.setVariantName_SchemaC !== "" ? parseInt(this.state.setVariantName_SchemaC.split(" ")[1]) : "";
  //   const selectElementsCircular = (arr, index) => {
  //     const result = [];
  //     for (let i = index - 10; i < index; i++) {
  //       const circularIndex = (i + arr.length) % arr.length;
  //       result.push(arr[circularIndex]);

  //     }
  //     for (let i = index; i < index + 10; i++) {
  //       const circularIndex = i % arr.length;
  //       result.push(arr[circularIndex]);

  //     }
  //     return result;
  //   }

  //   // console.log("checking selected varients using to filter var:::this.state.setVariantName_SchemaA:: ", typeof schemaA_no, schemaA_no, this.colorA)
  //   // console.log("checking selected varients using to filter var:::this.state.setVariantName_SchemaB:: ", typeof schemaB_no, schemaB_no, this.colorB)
  //   // console.log("checking selected varients using to filter var:::this.state.setVariantName_SchemaC:: ",typeof schemaC_no, schemaC_no, this.colorC)
  //   temp_poss_Origin.shift();
  //   let var_index_arr = temp_poss_Origin.map((val,i)=>{
  //     return i+1;
  //   })
  //   if(this.colorA == "#5eb8b3"){
  //     if(schemaA_no == ""){
  //       result_Varients_no = selectElementsCircular(var_index_arr, (var_index_arr.length-1))
  //     }else{
  //       result_Varients_no = selectElementsCircular(var_index_arr, schemaA_no)        
  //     }
  //   }else if(this.colorB == "#5eb8b3"){
  //     if(schemaA_no == ""){
  //       result_Varients_no = selectElementsCircular(var_index_arr, (var_index_arr.length-1))
  //     }else{
  //       result_Varients_no = selectElementsCircular(var_index_arr, schemaB_no)        
  //     }

  //   }else if(this.colorC == "#5eb8b3"){
  //     if(schemaA_no == ""){
  //       result_Varients_no = selectElementsCircular(var_index_arr, (var_index_arr.length-1))
  //     }else{
  //       result_Varients_no = selectElementsCircular(var_index_arr, schemaC_no)       
  //     }      
  //   }

  //   let filt_varient_pos_origin = temp_poss_Origin.filter((varient, i)=>{
  //     return result_Varients_no.includes(i+1)
  //   })

  //   filt_varient_pos_origin.unshift("dummy value at 0")
  //   // console.log("filter_visible_Var check:::: ", filt_varient_pos_origin)

  //   return filt_varient_pos_origin;

  // }


  createVariants = (noOfSchemaCases) => {

    // console.log("createVarient ran check test: ")
    this.ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;

    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;

    }

    // console.log("this.outside_Label_Priority inside createVariants = " + this.outside_Label_Priority)
    // console.log("this.outsideLabelPrior inside createVariants = " + this.outsideLabelPrior)

    // console.log("poss_Origin here createVariants before frame ", poss_Origin)

    number = 1;

    this.duplicateVarientCheck = [];
    console.time('Execution Time inside createVarients');
    // let visible_filtered_poss_Origin = this.filter_visible_Var(poss_Origin);

    this.disableAlgoPW(true, "visible");
    // poss_Origin.forEach((value, index) => {
    //   setTimeout(() => {
    //     this.generateFrames(poss_Origin, index, noOfSchemaCases);
    //     if (poss_Origin.length - 1 == index) {
    //       this.disableAlgoPW(false, "hidden");
    //     }
    //   }, 0)
    // })
    // this.disableAlgoPW(true,"visible")

    poss_Origin.forEach((value, index) => {

      // console.log("poss_origin_list value createVariants ", value, " index ", index)

      // new Promise((resolve, reject) => {
      //   setTimeout(() => {

      //     // console.log("checking generateFrames pos-origin for limited var,:: ", poss_Origin)
      this.generateFrames(poss_Origin, index, noOfSchemaCases);

    })
    this.disableAlgoPW(false, "hidden")
    //     // console.log("in promise setTimeOut")
    //     resolve();
    //   }, 0)
    // })
    //   .then(() => {

    //     progressNum++;
    //     // console.log("in promise then progressNum ", progressNum);
    //     // console.log("in promise then progressNum ", progressNum, " poss_Origin.length ", poss_Origin.length, "poss_Origin.length === progressNum ", (poss_Origin.length === progressNum));

    //     if (poss_Origin.length === progressNum) {

    //       // console.log("in promise setTimeOut progressNum ", progressNum)

    // numberVar.forEach((value, index) => {

    //   // console.log("in promise setTimeOut progressNum index ", index)

    //   // console.log("pairs variants and frame : ", numberVar[index], " eqivalent frame is ", poss_Origin[index][0]
    //     , " poss_Origin[index][1] ", poss_Origin[index][1], " poss_Origin[index][2] ", poss_Origin[index][2])

    // })

    // this.disableAlgoPW(false, "hidden");

    // }

    this.setState({
      pallet_bool: false,
      pallet_12: true,
    })

    this.setState({
      selectlabel: "Var " + number
    });

    // })


    console.timeEnd('Execution Time inside createVarients');
    // console.log(" numberVar is ", numberVar)


    // console.log("in promise then progressNum ", progressNum, " poss_Origin.length ", poss_Origin.length, "poss_Origin.length === progressNum ", (poss_Origin.length === progressNum));

    // console.log("generateVariants variants ", numberVar.length, "poss_Origin[indexVar][0] ", poss_Origin.length)

    // console.log("poss_Origin.length ", poss_Origin.length, " progressNum.length ", progressNum)

    // console.log(" numberVar is ", numberVar)

    // console.log("generateFrames numberVar array ", numberVar)


  }


  memoize = (fn) => {
    console.time('Execution Time memoize');

    return (...args) => {
      if (JSON.stringify(args) in this.framesCache) {
        // if you want to verify result comes from cache
        // console.log("from memoization.. ", this.framesCache[JSON.stringify(args)]);
        console.timeEnd('Execution Time memoize');
        return this.framesCache[JSON.stringify(args)];
      }
      const result = fn(...args);
      this.framesCache[JSON.stringify(args)] = result;
      // console.log("runnung function memoization.. ", this.framesCache);
      console.timeEnd('Execution Time memoize');
      return result;
    }
  }

  memoize_DV = (fn) => {
    return (...args) => {
      if (false && JSON.stringify(args) in this.framesCache_DV) {
        if (this.state.panelname == "panel3") {
          // if you want to verify result comes from cache
          // console.log("from memoization memoize_DV.. ", this.framesCache_DV[JSON.stringify(args)]);
          let argumentsForDraw = this.framesCache_DV[JSON.stringify(args)];

          // console.time('Execution Time inside memoize_DV');

          this.drawLargeRectInitially();
          for (let i = 0; i < argumentsForDraw.length; i++) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(argumentsForDraw.sort()))) {
              this.draw(...argumentsForDraw[i])
            }
          }
          // let varient = this.Display_Variants(argumentsForDraw, "", "", "Memoized");  
          // console.timeEnd('Execution Time inside memoize_DV');
          return argumentsForDraw;
          // return this.framesCache_DV[JSON.stringify(args)];
        } else {
          return fn(...args);
        }
      }
      const result = fn(...args);
      // this.framesCache_DV[JSON.stringify(args)] = result;
      // console.log("runnung memoize_DV function memoization.. ", this.framesCache_DV);
      // console.timeEnd('Execution Time inside memoize_DV');
      return result;
    }
  }

  generateFrames = (P_Origin, index, noOfSchemaCases, isSim, simulationSchema) => {
   

    const memoize_Display_Variants = this.memoize_DV(this.Display_Variants)

    if (P_Origin && index >= 0 && index < P_Origin.length) {

      switch (P_Origin[index][0]) {

        case "Frame_1":

          const memoizeFrame_1 = this.memoize(Frame_1);

          let varientCheck_1 = memoize_Display_Variants(
            memoizeFrame_1(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          // console.log("varientCheck variable checking output structure", varientCheck_1)
          let tempVarientCheck_1 = [...varientCheck_1]
          tempVarientCheck_1.sort()
          if (tempVarientCheck_1.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_1))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_1));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ", number)
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }

          break;
        case "Frame_2":


          // console.log("P_Origin here createVariants ", P_Origin, " index ", index)

          const memoizeFrame_2 = this.memoize(Frame_2);

          let varientCheck_2 = memoize_Display_Variants(
            memoizeFrame_2(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_2 = [...varientCheck_2]
          tempVarientCheck_2.sort()
          if (tempVarientCheck_2.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_2))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_2));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              // this.downloadImage("Var "+number);
              this.downloadImage("Var " + number);

            }
            numberVar.push("Var " + number)
            number++;
          }

          break;
        case "Frame_3":


          const memoizeFrame_3 = this.memoize(Frame_3);

          let varientCheck_3 = memoize_Display_Variants(
            memoizeFrame_3(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_3 = [...varientCheck_3]
          tempVarientCheck_3.sort()
          if (tempVarientCheck_3.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_3))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_3));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              // this.downloadImage("Var "+number);
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }

          break;
        case "Frame_4":


          const memoizeFrame_4 = this.memoize(Frame_4);

          let varientCheck_4 = memoize_Display_Variants(
            memoizeFrame_4(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_4 = [...varientCheck_4]
          tempVarientCheck_4.sort()
          if (tempVarientCheck_4.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_4))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_4));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              // this.downloadImage("Var "+number);
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_5":


          const memoizeFrame_5 = this.memoize(Frame_5);

          let varientCheck_5 = memoize_Display_Variants(
            memoizeFrame_5(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_5 = [...varientCheck_5]
          tempVarientCheck_5.sort()
          if (tempVarientCheck_5.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_5))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_5));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              // this.downloadImage("Var "+number);
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_6":


          const memoizeFrame_6 = this.memoize(Frame_6);

          let varientCheck_6 = memoize_Display_Variants(
            memoizeFrame_6(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_6 = [...varientCheck_6]
          tempVarientCheck_6.sort()
          if (tempVarientCheck_6.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_6))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_6));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }

          break;
        case "Frame_7":


          const memoizeFrame_7 = this.memoize(Frame_7);

          let varientCheck_7 = memoize_Display_Variants(
            memoizeFrame_7(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_7 = [...varientCheck_7]
          tempVarientCheck_7.sort()
          if (tempVarientCheck_7.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_7))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_7));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              // this.downloadImage("Var 7"+number);
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }

          break;
        case "Frame_8":


          const memoizeFrame_8 = this.memoize(Frame_8);

          let varientCheck_8 = memoize_Display_Variants(
            memoizeFrame_8(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );
          console.log("varientCheck_8::",varientCheck_8);

          let tempVarientCheck_8 = [...varientCheck_8]
          tempVarientCheck_8.sort()
          if (tempVarientCheck_8.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_8))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_8));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_9":


          const memoizeFrame_9 = this.memoize(Frame_9);

          let varientCheck_9 = memoize_Display_Variants(
            memoizeFrame_9(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_9 = [...varientCheck_9]
          tempVarientCheck_9.sort()
          if (tempVarientCheck_9.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_9))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_9));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }

          break;
        case "Frame_10":


          const memoizeFrame_10 = this.memoize(Frame_10);

          let varientCheck_10 = memoize_Display_Variants(
            memoizeFrame_10(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_10 = [...varientCheck_10]
          tempVarientCheck_10.sort()
          if (tempVarientCheck_10.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_10))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_10));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_11":


          const memoizeFrame_11 = this.memoize(Frame_11);

          let varientCheck_11 = memoize_Display_Variants(
            memoizeFrame_11(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_11 = [...varientCheck_11]
          tempVarientCheck_11.sort()
          if (tempVarientCheck_11.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_11))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_11));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_20":
          const memoizeFrame_20 = this.memoize(Frame_20);

          let varientCheck_20 = memoize_Display_Variants(
            memoizeFrame_20(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );
          console.log("Varient checj 20:::",varientCheck_20);

          let tempVarientCheck_20 = [...varientCheck_20]
          tempVarientCheck_20.sort()
          if (tempVarientCheck_20.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_20))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_20));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_21":


          const memoizeFrame_21 = this.memoize(Frame_21);

          let varientCheck_21 = memoize_Display_Variants(
            memoizeFrame_21(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_21 = [...varientCheck_21]
          tempVarientCheck_21.sort()
          if (tempVarientCheck_21.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_21))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_21));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_22":


          const memoizeFrame_22 = this.memoize(Frame_22);

          let varientCheck_22 = memoize_Display_Variants(
            memoizeFrame_22(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_22 = [...varientCheck_22]
          tempVarientCheck_22.sort()
          if (tempVarientCheck_22.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_22))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_22));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_23":


          const memoizeFrame_23 = this.memoize(Frame_23);

          let varientCheck_23 = memoize_Display_Variants(
            memoizeFrame_23(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_23 = [...varientCheck_23]
          tempVarientCheck_23.sort()
          if (tempVarientCheck_23.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_23))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_23));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_24":


          const memoizeFrame_24 = this.memoize(Frame_24);

          let varientCheck_24 = memoize_Display_Variants(
            memoizeFrame_24(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_24 = [...varientCheck_24]
          tempVarientCheck_24.sort()
          if (tempVarientCheck_24.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_24))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_24));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_25":


          const memoizeFrame_25 = this.memoize(Frame_25);

          let varientCheck_25 = memoize_Display_Variants(
            memoizeFrame_25(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_25 = [...varientCheck_25]
          tempVarientCheck_25.sort()
          if (tempVarientCheck_25.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_25))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_25));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_26":


          const memoizeFrame_26 = this.memoize(Frame_26);

          let varientCheck_26 = memoize_Display_Variants(
            memoizeFrame_26(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_26 = [...varientCheck_26]
          tempVarientCheck_26.sort()
          if (tempVarientCheck_26.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_26))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_26));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_27":


          const memoizeFrame_27 = this.memoize(Frame_27);

          let varientCheck_27 = memoize_Display_Variants(
            memoizeFrame_27(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_27 = [...varientCheck_27]
          tempVarientCheck_27.sort()
          if (tempVarientCheck_27.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_27))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_27));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_28":


          const memoizeFrame_28 = this.memoize(Frame_28);

          let varientCheck_28 = memoize_Display_Variants(
            memoizeFrame_28(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_28 = [...varientCheck_28]
          tempVarientCheck_28.sort()
          if (tempVarientCheck_28.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_28))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_28));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_29":


          const memoizeFrame_29 = this.memoize(Frame_29);

          let varientCheck_29 = memoize_Display_Variants(
            memoizeFrame_29(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_29 = [...varientCheck_29]
          tempVarientCheck_29.sort()
          if (tempVarientCheck_29.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_29))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_29));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_30":


          const memoizeFrame_30 = this.memoize(Frame_30);

          let varientCheck_30 = memoize_Display_Variants(
            memoizeFrame_30(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_30 = [...varientCheck_30]
          tempVarientCheck_30.sort()
          if (tempVarientCheck_30.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_30))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_30));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_31":


          const memoizeFrame_31 = this.memoize(Frame_31);

          let varientCheck_31 = memoize_Display_Variants(
            memoizeFrame_31(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_31 = [...varientCheck_31]
          tempVarientCheck_31.sort()
          if (tempVarientCheck_31.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_31))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_31));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_32":


          const memoizeFrame_32 = this.memoize(Frame_32);

          let varientCheck_32 = memoize_Display_Variants(
            memoizeFrame_32(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_32 = [...varientCheck_32]
          tempVarientCheck_32.sort()
          if (tempVarientCheck_32.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_32))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_4));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_33":


          const memoizeFrame_33 = this.memoize(Frame_33);

          let varientCheck_33 = memoize_Display_Variants(
            memoizeFrame_33(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_33 = [...varientCheck_33]
          tempVarientCheck_33.sort()
          if (tempVarientCheck_33.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_33))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_33));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_34":


          const memoizeFrame_34 = this.memoize(Frame_34);

          let varientCheck_34 = memoize_Display_Variants(
            memoizeFrame_34(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_34 = [...varientCheck_34]
          tempVarientCheck_34.sort()
          if (tempVarientCheck_34.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_34))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_34));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_35":


          const memoizeFrame_35 = this.memoize(Frame_35);

          let varientCheck_35 = memoize_Display_Variants(
            memoizeFrame_35(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_35 = [...varientCheck_35]
          tempVarientCheck_35.sort()
          if (tempVarientCheck_35.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_35))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_35));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_36":


          const memoizeFrame_36 = this.memoize(Frame_36);

          let varientCheck_36 = memoize_Display_Variants(
            memoizeFrame_36(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_36 = [...varientCheck_36]
          tempVarientCheck_36.sort()
          if (tempVarientCheck_36.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_36))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_36));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;
        case "Frame_37":


          const memoizeFrame_37 = this.memoize(Frame_37);

          let varientCheck_37 = memoize_Display_Variants(
            memoizeFrame_37(
              this.Pallet_Length,
              this.Pallet_Width,
              this.Case_Length,
              this.Case_Width,
              this.XPos,
              this.YPos,
              noOfSchemaCases,
              this.HWeighted,
              this.VWeighted,
              this.outsideLabelPrior,
              P_Origin,
              index
            ), isSim, simulationSchema
          );

          let tempVarientCheck_37 = [...varientCheck_37]
          tempVarientCheck_37.sort()
          if (tempVarientCheck_37.length > 0) {
            if (!this.duplicateVarientCheck.includes(JSON.stringify(tempVarientCheck_37))) {
              this.duplicateVarientCheck.push(JSON.stringify(tempVarientCheck_37));
              // console.log("inside return generateFrames abc sorted casePositions...  ", this.duplicateVarientCheck)
              // console.log("P_Origin here createVariants downloadImage ")
              this.downloadImage("Var " + number);
            }
            numberVar.push("Var " + number)
            number++;
          }


          break;

      }



    }


    console.timeEnd('Execution Time inside generate frames');
  }

  saveVariantImages = (noOfSchemaCases) => {
    // console.log("this.typeoptions5 inside saveVariantImages = " + this.typeoptions5);
    this.createVariants(noOfSchemaCases);

  }

  handleSelection_SchemaA = (event) => {
    // const selected = event.target.value;
    // console.log("selected " + selected);
    // this.createVariants(selected);

  };

  handleSelection_SchemaB = (event) => {
    const selected = event.target.value;
    // console.log("selected = ", selected);

    if (selected == "Var 1") {
      this.Display_Variants_B(
        this.varient_1(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 2") {
      this.Display_Variants_B(
        this.varient_2(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 3") {
      this.Display_Variants_B(
        this.varient_3(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 4") {
      this.Display_Variants_B(
        this.varient_4(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 5") {
      this.Display_Variants_B(
        this.varient_5(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 6") {
      this.Display_Variants_B(
        this.varient_6(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 7") {
      this.Display_Variants_B(this.varient_7(this.Pallet_Length, this.Pallet_Width, this.Case_Length, this.Case_Width, this.XPos, this.YPos));

    }
    if (selected == "Var 8") {
      this.Display_Variants_B(
        this.varient_8(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 9") {
      this.Display_Variants_B(
        this.varient_9(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 10") {
      this.Display_Variants_B(
        this.varient_10(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 11") {
      this.Display_Variants_B(
        this.varient_11(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 12") {
      this.Display_Variants_B(
        this.varient_12(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 13") {
      this.Display_Variants_B(
        this.varient_13(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 14") {
      this.Display_Variants_B(
        this.varient_14(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 15") {
      this.Display_Variants_B(
        this.varient_15(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 16") {
      this.Display_Variants_B(
        this.varient_16(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 17") {
      this.Display_Variants_B(
        this.varient_17(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 18") {
      this.Display_Variants_B(
        this.varient_18(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 19") {
      this.Display_Variants_B(
        this.varient_19(
          this.Pallet_Length,
          this.Pallet_Width,
          this.Case_Length,
          this.Case_Width,
          this.XPos,
          this.YPos
        )
      );
    }
    if (selected == "Var 20") {
      this.Display_Variants_B(this.varient_20(this.Pallet_Length, this.Pallet_Width, this.Case_Length, this.Case_Width, this.XPos, this.YPos));

    }

    this.setState({
      selectlabel: selected,
    });
  };

  splitCaseType = (selected) => {
    try {
      // console.log("selected in splitCaseType" + selected)
      // console.log("Inside splitCaseType");

      var split = selected.split('_').reverse();
      // console.log("split " + split)
      // console.log("split[0] " + split + " split[1] " + split[1] + " split[2] " + split[2] + " split[3] " + split[3]);

      (this.Case_Height = split[0]), (this.Case_Width = split[2]), (this.Case_Length = split[1]);

      // console.log("this.Case_Width width " + this.Case_Width);
      // console.log("this.Case_Width length " + this.Case_Length);
    }
    catch (e) {
      // console.log("error inside splitCaseType = " + e);
    }


  }

  getCallLabel = async (selected, calledBy, pallet_no) => {
    try {
      const records = await this.getAllLabels();
      if (this.state.selectedOne) {
        this.listForLabel1 = [];

      } else if (this.state.selectedTwo) {
        this.listForLabel2 = [];

      }
      for (var record of records) {
        var case_name_lbh = record.name + "_" + record.length + "_" + record.height + "_" + record.width;
        // console.log("case_name_lbh in getCallLabel " + case_name_lbh);

        if (case_name_lbh == selected) {

          try {
            var label_name = record.labelname + "_" + record.typename;
            // console.log("Label name in initcase if condition " + label_name);

            // var split = label_name.split('_', 2);
            var split = label_name.split("_").reverse()

            // console.log("split[0] handleSelection " + split[0] + " split[1] " + split[1]);
            if (this.state.selectedOne) {
              this.listForLabel1.push(split[0]);
              // console.log("  this.listForLabel handleSelection_CaseType aa1 " + this.listForLabel1);

            } else if (this.state.selectedTwo) {
              this.listForLabel2.push(split[0]);
              // console.log("  this.listForLabel handleSelection_CaseType aa2 " + this.listForLabel2);

            }
          } catch (e) {
            // console.log("split error inside getcalllabel" + e);
          }
          let selectedPalletLabelList;
          selectedPalletLabelList = this.listForOutsideLabelPrior;

          // if (pallet_no == 1 || pallet_no == 2) {
          //   if (pallet_no == 1) {
          //     selectedPalletLabelList = this.listForOutsideLabelPrior1;
          //   } else if (pallet_no == 2) {
          //     selectedPalletLabelList = this.listForOutsideLabelPrior2;
          //   }
          // } else {
          //   if (this.state.selectedOne) {
          //     selectedPalletLabelList = this.listForOutsideLabelPrior1;
          //   } else {
          //     selectedPalletLabelList = this.listForOutsideLabelPrior2;
          //   }
          // }

          if (selectedPalletLabelList.indexOf(label_name) > -1) {
            // console.log("labelname already exists inside getCallLabel")
          }
          else {
            if (pallet_no == 1 || pallet_no == 2) {
              if (pallet_no == 1) {
                this.listForOutsideLabelPrior.push(label_name);
                // this.listForOutsideLabelPrior1.push(label_name);
                if (calledBy != "getPallet1") {
                  this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
                  // this.outside_Label_Priority = this.listForOutsideLabelPrior1[0];
                  // this.outside_Label_Priority1 = this.listForOutsideLabelPrior1[0];
                }
                // console.log("getCall lebel ran for olp1 pallet_no1 : " + this.listForOutsideLabelPrior1);
              } else if (pallet_no == 2) {
                this.listForOutsideLabelPrior.push(label_name);
                // this.listForOutsideLabelPrior2.push(label_name);
                if (calledBy != "getPallet1") {
                  this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
                  // this.outside_Label_Priority = this.listForOutsideLabelPrior2[0];
                  // this.outside_Label_Priority2 = this.listForOutsideLabelPrior2[0];
                }
                // console.log("getCall lebel ran for olp1 pallet_no2 : " + this.listForOutsideLabelPrior2);
              }

            } else {
              if (this.state.selectedOne) {
                this.listForOutsideLabelPrior.push(label_name);
                // this.listForOutsideLabelPrior1.push(label_name);
                if (calledBy != "getPallet1") {
                  this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
                  // this.outside_Label_Priority = this.listForOutsideLabelPrior1[0];
                  // this.outside_Label_Priority1 = this.listForOutsideLabelPrior1[0];
                }
                // console.log("getCall lebel ran for olp1 : selectedOne: " + this.listForOutsideLabelPrior1);
              } else {
                this.listForOutsideLabelPrior.push(label_name);
                // this.listForOutsideLabelPrior2.push(label_name);
                if (calledBy != "getPallet1") {
                  this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
                  // this.outside_Label_Priority = this.listForOutsideLabelPrior2[0];
                  // this.outside_Label_Priority2 = this.listForOutsideLabelPrior2[0];
                }
                // console.log("getCall lebel ran for olp1 : selectedTwo: " + this.listForOutsideLabelPrior2);
              }
            }

          }
        }
        // this.outside_Label_Priority = this.listForOutsideLabelPrior[0];


      }
      // console.log("getCallLabel ran 1: OLP1: " + this.outside_Label_Priority);
      // console.log("getCallLabel ran 1: OLP1: " + this.outside_Label_Priority1);
      // console.log("getCallLabel ran 1: OLP2: " + this.outside_Label_Priority2);
      // if(this.state.selectedOne  && this.listForOutsideLabelPrior1.length > 0){
      //   this.tempLabelindex = this.listForOutsideLabelPrior1.indexOf(this.outside_Label_Priority1);

      // }else if(this.state.selectedTwo && this.listForOutsideLabelPrior2.length > 0){
      //   this.tempLabelindex = this.listForOutsideLabelPrior2.indexOf(this.outside_Label_Priority2);

      // }
      if (calledBy == "getPallet1") {
        if (pallet_no == 1) {
          this.createlabeledImg();
        } else if (pallet_no == 2) {
          if (!stopOverRiteCaseImg) {
            this.createlabeledImg();
          }
          this.stopOverRiteCaseImg = false;
        }
      } else {
        this.createlabeledImg();
      }
    }
    catch (e) {
      // console.log("error inside getCallLabel = " + e);
    }

  }

  createlabeledImg = () => {
    // console.log("this.listForOutsideLabelPrior inside handler casetype: " + this.listForOutsideLabelPrior.length)
    // console.log("createlabeledImg called sxsdc: ")

    let selectedPalletLabelList;
    selectedPalletLabelList = this.listForOutsideLabelPrior;

    // if (this.state.selectedOne) {
    //   selectedPalletLabelList = this.listForOutsideLabelPrior1;
    // } else {
    //   selectedPalletLabelList = this.listForOutsideLabelPrior2;
    // }

    for (let rotation = 0; rotation < 4; rotation++) { //FOR DIFFERENT ROTATION (0deg, 90deg, 180deg, 270deg)
      this.CasesImageSrc_array = [];

      // console.log("createlabeledImg selectedPalletLabelList.length: " + selectedPalletLabelList.length)

      for (let imageNumber = 0; imageNumber < selectedPalletLabelList.length; imageNumber++) { //FOR DIFFERENT LABELS
        this.drawCaseImg(imageNumber, rotation);
      }

    }


    // console.log("cases created DONE update list this.CasesImageSrc_array: " + this.CasesImageSrc_array.length)
  }

  clearingSchemaFields = async (value) => {

    if (value == "ruleSym") {
      //
      //
      //
      //
      await axios.put(`/Threed/addImage/${this.palletid}`, {
        "image_A": null,
        "image_B": null,
        "image_C": null
      })
      //
      //
      //
      if (this.state.selectedOne) {
        this.setVariantName_SchemaA = "";
        // this.setVariantName_SchemaA1 = "";
        this.setVariantName_SchemaB = "";
        // this.setVariantName_SchemaB1 = "";
        this.setVariantName_SchemaC = "";
        // this.setVariantName_SchemaC1 = "";

        this.setState({
          setVariantName_SchemaA: "",
          setVariantName_SchemaC: "",
          setVariantName_SchemaB: ""
        })

      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaA = "";
        // this.setVariantName_SchemaA2 = "";
        this.setVariantName_SchemaB = "";
        // this.setVariantName_SchemaB2 = "";
        this.setVariantName_SchemaC = "";
        // this.setVariantName_SchemaC2 = "";
        this.setState({
          setVariantName_SchemaA: "",
          setVariantName_SchemaB: "",
          setVariantName_SchemaC: ""
        })
      }

    } else if (value == "palletType" || value == "caseType" || value == "outsideLabelPriority") {

      //
      //
      //
      //
      await axios.put(`/Threed/addImage/${this.palletid}`, {
        "image_A": null,
        "image_B": null,
        "image_C": null
      })
      //
      //
      //
      //

      this.setVariantName_SchemaA = "";
      // this.setVariantName_SchemaA1 = "";
      this.setVariantName_SchemaB = "";
      // this.setVariantName_SchemaB1 = "";
      this.setVariantName_SchemaC = "";
      // this.setVariantName_SchemaC1 = "";
      // this.setVariantName_SchemaA2 = "";
      // this.setVariantName_SchemaB2 = "";
      // this.setVariantName_SchemaC2 = "";

      this.setState({
        setVariantName_SchemaA: "",
        setVariantName_SchemaC: "",
        setVariantName_SchemaB: ""
      })

    }


    this.updateSelection();
  }

  clearingSchemaFields1 = async (value) => {

    if (value == "Schema-A") {
      //
      //
      //
      await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
        await axios.put(`/Threed/addImage/${this.palletid}`, {
          "image_A": null,
          "image_B": resp.data[0].image_B,
          "image_C": resp.data[0].image_C
        });
      });
      //
      //
      //
      if (this.state.selectedOne) {

        this.setVariantName_SchemaA = "";

        this.setState({
          setVariantName_SchemaA: "",

        })

      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaA = "";

        this.setState({
          setVariantName_SchemaA: "",

        })
      }
    }

    if (value == "Schema-B") {
      //
      //
      //
      await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
        await axios.put(`/Threed/addImage/${this.palletid}`, {
          "image_A": resp.data[0].image_A,
          "image_B": null,
          "image_C": resp.data[0].image_C
        });
      });
      //
      //
      //
      if (this.state.selectedOne) {

        this.setVariantName_SchemaB = "";

        this.setState({

          setVariantName_SchemaB: ""
        })

      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaB = "";
        this.setState({
          setVariantName_SchemaB: "",
        })
      }
    }

    if (value == "Schema-C") {
      //
      //
      //
      await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
        await axios.put(`/Threed/addImage/${this.palletid}`, {
          "image_A": resp.data[0].image_A,
          "image_B": resp.data[0].image_B,
          "image_C": null
        });
      });
      //
      //
      //
      if (this.state.selectedOne) {

        this.setVariantName_SchemaC = "";

        this.setState({
          setVariantName_SchemaC: "",
        })

      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaC = "";
        this.setState({

          setVariantName_SchemaC: ""
        })
      }
    }

    this.updateSelection();
  }


  callSchemaDropdown = () => {
    if (this.state.selectedOne) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;

    }
    else if (this.state.selectedTwo) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;

    }


    if (this.state.panelname === 'panel3') {
      if (this.state.colorA == "#5eb8b3")
        this.callSchema(this.CasesSchemaA);

      if (this.state.colorB == "#5eb8b3")
        this.callSchema(this.CasesSchemaB);

      if (this.state.colorC == "#5eb8b3")
        this.callSchema(this.CasesSchemaC);
    }
  }

  outsideInitialPriority = () => {

    try {

      let label;
      label = this.listForOutsideLabelPrior[this.listForOutsideLabelPrior.indexOf(this.outside_Label_Priority)].split('_', 2);

      this.outsideLabelPrior = label[1];

      if (this.state.selectedOne) {
        this.state.outside_Label_Priority = this.outside_Label_Priority;

      } else {
        this.state.outside_Label_Priority = this.outside_Label_Priority;

      }


      this.updateSelection();
      this.callSchemaDropdown();
    }
    catch (e) {
      // console.log("Error inside outsideInitialPriority due to split = " + e);
    }

  }

  handleSelection = name => event => {

    // console.log(name, "Origin Pal 1");
    // console.log(event.target.value, "value");

    if (name === "HWeighted") {

      //
      //
      //
      //
      axios.put(`/Threed/addImage/${this.palletid}`, {
        "image_A": null,
        "image_B": null,
        "image_C": null
      })
      //
      //
      //
      //

      this.HWeighted1 = this.HWeighted1 ? false : true
      this.state.HWeighted1 = this.HWeighted1;
      this.HWeighted2 = this.HWeighted2 ? false : true
      this.state.HWeighted2 = this.HWeighted2;

      if (this.state.selectedOne) {
        this.HWeighted = this.HWeighted1

      } else if (this.state.selectedTwo) {
        this.HWeighted = this.HWeighted2

      }

      // console.log("handleSelection this.HWeighted ", this.HWeighted)

      this.clearingSchemaFields("ruleSym");
      this.firstCaseOriginChangeFlush("pal1");
      this.firstCaseOriginChangeFlush("pal2");
      this.swiperRef?.current?.swiper.slideNext();
      this.reOrderingSwiperIndex();
      // this.disableAlgoPW(true, "visible");
      this.reqCombinationForPallet_N_Origin();
      this.callSchemaDropdown();


    }

    if (name === "VWeighted") {

      //
      //
      //
      //
      axios.put(`/Threed/addImage/${this.palletid}`, {
        "image_A": null,
        "image_B": null,
        "image_C": null
      })
      //
      //
      //
      //

      this.VWeighted1 = this.VWeighted1 ? false : true
      this.state.VWeighted1 = this.VWeighted1;
      this.VWeighted2 = this.VWeighted2 ? false : true
      this.state.VWeighted2 = this.VWeighted2;


      if (this.state.selectedOne) {
        this.VWeighted = this.VWeighted1

      } else if (this.state.selectedTwo) {
        this.VWeighted = this.VWeighted2

      }

      this.reqCombinationForPallet_N_Origin();
      this.callSchemaDropdown();
      this.clearingSchemaFields("ruleSym");
      // this.disableAlgoPW(true, "visible");
      this.swiperRef?.current?.swiper.slideNext();
      this.reOrderingSwiperIndex();
      this.updateSelection();
      this.firstCaseOriginChangeFlush("pal1");
      this.firstCaseOriginChangeFlush("pal2");

    }

    //Working area   for 1
    if (name === "working_area_1_Width_X_Direction") {

      // console.log(" working_area_1_Width_X_Direction " + event.target.value);

      if (event.target.value > 1400 || event.target.value < this.Pallet_Width) {
        this.setState({
          errorWorkingaraeaWidth: true,
          errorHelperForWorkingareaWidth: this.Pallet_Width + " - " + 1400,
        });
      }
      else {
        this.setState({
          errorWorkingaraeaWidth: false,
          errorHelperForWorkingareaWidth: " "
        });
      }
    }

    if (name === "working_area_1_Length_Y_Direction") {
      if (
        event.target.value > 1400 ||
        event.target.value < this.Pallet_Length
      ) {
        this.setState({
          errorWorkingaraeaLength: true,
          errorHelperForWorkingareaLength: this.Pallet_Length + " - " + 1400,
        });
      } else {
        this.setState({
          errorWorkingaraeaLength: false,
          errorHelperForWorkingareaLength: " ",
        });
      }
    }


    if (name === "working_area_1_Height_Z_Direction") {
      console.log(event.target.value);
      this.setState({
        WA_1_Height_Z_Dir: event.target.value,
      });
      if (event.target.value > 1400 || event.target.value < 10) {
        this.setState({
          errorWorkingaraeaHeight: true,
          errorHelperForWorkingareaHeight: 10 + " - " + 1400,
        });
      } else {
        this.setState({
          errorWorkingaraeaHeight: false,
          errorHelperForWorkingareaHeight: " ",
        });
      }
    }

    if (name === "working_area_1_Offset_X_Direction") {

      this.firstCaseOriginChangeFlush("pal1");

      // console.log("this.WA_1_width_X_Dir *************" + this.WA_1_width_X_Dir + "(event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0) " + (event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0))

      if (this.originPal1 == "Upper Right Corner") {

        if (event.target.value > (this.WA_1_Length_Y_Dir - this.Pallet_Length) || event.target.value <= 0 || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetWidth: true,
            errorHelperForWorkingareaoffsetWidth: 0 + " - " + (this.WA_1_Length_Y_Dir - this.Pallet_Length),
          });

          // console.log("enter into if loop  ")
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidth: false,
            errorHelperForWorkingareaoffsetWidth: " "
          });
          // console.log("enter into else loop  ")
        }
      }

      //upper left
      if (this.originPal1 == "Upper Left Corner") {

        if (event.target.value > (this.WA_1_Length_Y_Dir - this.Pallet_Length) || event.target.value <= 0) {
          this.setState({
            errorWorkingaraeaoffsetWidth: true,
            errorHelperForWorkingareaoffsetWidth: 0 + " - " + (this.WA_1_Length_Y_Dir - this.Pallet_Length),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidth: false,
            errorHelperForWorkingareaoffsetWidth: " "
          });
        }
      }

      //lower right
      if (this.originPal1 == "Lower Right Corner") {

        if (event.target.value < ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value > 0 || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetWidth: true,
            errorHelperForWorkingareaoffsetWidth: 0 + " - " + ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidth: false,
            errorHelperForWorkingareaoffsetWidth: " "
          });
        }
      }
      //
      if (this.originPal1 == "Lower Left Corner") {

        if (event.target.value < ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetWidth: true,
            errorHelperForWorkingareaoffsetWidth: 0 + " - " + ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidth: false,
            errorHelperForWorkingareaoffsetWidth: " "
          });
        }
      }

    }

    if (name === "working_area_1_Offset_Y_Direction") {

      // console.log("this.WA_1_Offset_Y_Dir *************" + this.WA_1_Offset_Y_Dir + "(event.target.value > (this.WA_1_Offset_Y_Dir - this.Pallet_Length) || event.target.value < 0) " + (event.target.value > (this.WA_1_Offset_Y_Dir - this.Pallet_Length) || event.target.value < 0))

      this.firstCaseOriginChangeFlush("pal1");
      if (this.originPal1 == "Upper Right Corner") {

        if (event.target.value <= 0 || event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetLength: true,
            errorHelperForWorkingareaoffsetLength: 0 + " - " + (this.WA_1_width_X_Dir - this.Pallet_Width),
          });

          // console.log("enter into if loop  ")
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLength: false,
            errorHelperForWorkingareaoffsetLength: " "
          });
          // console.log("enter into else loop  ")
        }
      }

      //upper left
      if (this.originPal1 == "Upper Left Corner") {

        if (event.target.value > 0 || event.target.value < ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1) || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetLength: true,
            errorHelperForWorkingareaoffsetLength: 0 + " - " + ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLength: false,
            errorHelperForWorkingareaoffsetLength: " "
          });
        }
      }

      //lower right  


      if (this.originPal1 == "Lower Right Corner") {

        if (event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0 || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetLength: true,
            errorHelperForWorkingareaoffsetLength: 0 + " - " + (this.WA_1_width_X_Dir - this.Pallet_Width),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLength: false,
            errorHelperForWorkingareaoffsetLength: " "
          });
        }
      }
      //
      if (this.originPal1 == "Lower Left Corner") {

        if (event.target.value < ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetLength: true,
            errorHelperForWorkingareaoffsetLength: 0 + " - " + ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLength: false,
            errorHelperForWorkingareaoffsetLength: " "
          });
        }
      }

    }

    //Working area for 2
    if (name === "working_area_2_Width_X_Direction") {

      // console.log(" working_area_2_Width_X_Direction " + event.target.value);

      if (event.target.value > 1400 || event.target.value < this.Pallet_Width) {
        this.setState({
          errorWorkingaraeaWidthfor2: true,
          errorHelperForWorkingareaWidthfor2: this.Pallet_Width + " - " + 1400,
        });
      }
      else {
        this.setState({
          errorWorkingaraeaWidthfor2: false,
          errorHelperForWorkingareaWidthfor2: " "
        });
      }
    }

    if (name === "working_area_2_Length_Y_Direction") {

      if (event.target.value > 1400 || event.target.value < this.Pallet_Length) {
        this.setState({
          errorWorkingaraeaLengthfor2: true,
          errorHelperForWorkingareaLengthfor2: this.Pallet_Length + " - " + 1400,
        });
      }
      else {
        this.setState({
          errorWorkingaraeaLengthfor2: false,
          errorHelperForWorkingareaLengthfor2: " "
        });
      }
    }

    if (name === "working_area_2_Height_Z_Direction") {

      console.log("working_area_2_Height_Z_Direction = " + event.target.value);
      this.setState({
        WA_2_Height_Z_Dir: event.target.value,
      });
      if (event.target.value > 1400 || event.target.value < 10) {
        this.setState({
          errorWorkingaraeaHeightfor2: true,
          errorHelperForWorkingareaHeightfor2: 10 + " - " + 1400,
        });
      } else {
        this.setState({
          errorWorkingaraeaHeightfor2: false,
          errorHelperForWorkingareaHeightfor2: " ",
        });
      }
    }
    if (name === "working_area_2_Offset_X_Direction") {

      this.firstCaseOriginChangeFlush("pal2");

      // console.log("this.WA_2_width_X_Dir *************" + this.WA_2_width_X_Dir + "(event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0) " + (event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0))

      if (this.originPal2 == "Upper Right Corner") {

        if (event.target.value > (this.WA_2_Length_Y_Dir - this.Pallet_Length) || event.target.value < 0 || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: true,
            errorHelperForWorkingareaoffsetWidthfor2: 0 + " - " + (this.WA_2_Length_Y_Dir - this.Pallet_Length),
          });

          // console.log("enter into if loop  ")
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: false,
            errorHelperForWorkingareaoffsetWidthfor2: " "
          });
          // console.log("enter into else loop  ")
        }
      }

      if (this.originPal2 == "Upper Left Corner") {

        if (event.target.value > (this.WA_2_Length_Y_Dir - this.Pallet_Length) || event.target.value <= 0) {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: true,
            errorHelperForWorkingareaoffsetWidthfor2: 0 + " - " + (this.WA_2_Length_Y_Dir - this.Pallet_Length),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: false,
            errorHelperForWorkingareaoffsetWidthfor2: " "
          });
        }
      }

      if (this.originPal2 == "Lower Right Corner") {

        if (event.target.value < ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value > 0 || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: true,
            errorHelperForWorkingareaoffsetWidthfor2: 0 + " - " + ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: false,
            errorHelperForWorkingareaoffsetWidthfor2: " "
          });
        }
      }

      if (this.originPal2 == "Lower Left Corner") {

        if (event.target.value < ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: true,
            errorHelperForWorkingareaoffsetWidthfor2: 0 + " - " + ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: false,
            errorHelperForWorkingareaoffsetWidthfor2: " "
          });
        }
      }

    }

    if (name === "working_area_2_Offset_Y_Direction") {

      this.firstCaseOriginChangeFlush("pal2");

      // console.log("this.WA_1_Offset_Y_Dir *************" + this.WA_1_Offset_Y_Dir + "(event.target.value > (this.WA_1_Offset_Y_Dir - this.Pallet_Length) || event.target.value < 0) " + (event.target.value > (this.WA_1_Offset_Y_Dir - this.Pallet_Length) || event.target.value < 0))

      if (this.originPal2 == "Upper Right Corner") {

        if (event.target.value < 0 || event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: true,
            errorHelperForWorkingareaoffsetLengthfor2: 0 + " - " + (this.WA_2_width_X_Dir - this.Pallet_Width),
          });

          // console.log("enter into if loop  ")
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: false,
            errorHelperForWorkingareaoffsetLengthfor2: " "
          });
          // console.log("enter into else loop  ")
        }
      }

      if (this.originPal2 == "Upper Left Corner") {

        if (event.target.value > 0 || event.target.value < ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1) || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: true,
            errorHelperForWorkingareaoffsetLengthfor2: 0 + " - " + ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: false,
            errorHelperForWorkingareaoffsetLengthfor2: " "
          });
        }
      }

      if (this.originPal2 == "Lower Right Corner") {

        if (event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0 || event.target.value == "") {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: true,
            errorHelperForWorkingareaoffsetLengthfor2: 0 + " - " + (this.WA_2_width_X_Dir - this.Pallet_Width),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: false,
            errorHelperForWorkingareaoffsetLengthfor2: " "
          });
        }
      }

      if (this.originPal2 == "Lower Left Corner") {

        if (event.target.value < ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: true,
            errorHelperForWorkingareaoffsetLengthfor2: 0 + " - " + ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: false,
            errorHelperForWorkingareaoffsetLengthfor2: " "
          });
        }
      }

    }
    if (name === "OriginPal1") {
      const selected = event.target.value;
      this.WA_1_Offset_X_Dir = 0;
      this.WA_1_Offset_Y_Dir = 0;

      this.state.WA_1_Offset_X_Dir = 0;
      this.state.WA_1_Offset_Y_Dir = 0;

      this.setState({
        WA_1_Offset_X_Dir: 0,
        WA_1_Offset_Y_Dir: 0,
      })
      if (selected == "Upper Right Corner") {
        this.originPal1 = "Upper Right Corner";
      }
      else if (selected == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
      }
      else if (selected == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
      }
      else if (selected == "Lower Right Corner") {
        this.originPal1 = "Lower Right Corner";
      }
      // console.log("Selected Pallet Origin " + name + " : " + this.originPal1);
      this.firstCaseOriginChangeFlush();
    }
    else if (name == "OriginPal2") {
      const selected = event.target.value;
      this.WA_2_Offset_X_Dir = 0;
      this.WA_2_Offset_Y_Dir = 0;

      this.state.WA_2_Offset_X_Dir = 0;
      this.state.WA_2_Offset_Y_Dir = 0;

      this.setState({
        WA_2_Offset_X_Dir: 0,
        WA_2_Offset_Y_Dir: 0,
      })
      if (selected == "Upper Right Corner") {
        this.originPal2 = "Upper Right Corner";
      }
      else if (selected == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
      }
      else if (selected == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
      }
      else if (selected == "Lower Right Corner") {
        this.originPal2 = "Lower Right Corner";
      }
      //// console.log("Selected Pallet Origin " + name + " : " + this.originPal2);
      this.firstCaseOriginChangeFlush();
    }

    if (name === "OriginPal1") {
      this.originPal1 = event.target.value;
      this.setState({
        originPal1: event.target.value
      });

    }
    if (name === "OriginPal2") {
      this.originPal2 = event.target.value;
      this.setState({
        originPal2: event.target.value

      });
    }
    if (name === "pal1") {
      this.firstcase_pal1 = event.target.value;
      this.setState({
        firstcase_pal1: event.target.value
      });

    }

    if (name === "pal2") {
      this.firstcase_pal2 = event.target.value;
      this.setState({
        firstcase_pal2: event.target.value
      });

    }
    if (name === "working_area_1_Width_X_Direction") {
      this.WA_1_width_X_Dir = event.target.value;
      this.setState({
        WA_1_width_X_Dir: event.target.value
      });
    }

    if (name === "working_area_1_Length_Y_Direction") {
      this.WA_1_Length_Y_Dir = event.target.value;
      this.setState({
        WA_1_Length_Y_Dir: event.target.value
      });
    }

    if (name === "working_area_1_Height_Z_Direction") {
      this.WA_1_Height_Z_Dir = event.target.value;
      this.setState({
        WA_1_Height_Z_Dir: event.target.value
      });
    }

    if (name === "working_area_1_Offset_X_Direction") {
      this.WA_1_Offset_X_Dir = event.target.value;
      this.setState({
        WA_1_Offset_X_Dir: event.target.value
      });
    }



    if (name === "working_area_1_Offset_Y_Direction") {
      this.WA_1_Offset_Y_Dir = event.target.value;
      this.setState({
        WA_1_Offset_Y_Dir: event.target.value
      });
    }



    if (name === "working_area_2_Width_X_Direction") {
      this.WA_2_width_X_Dir = event.target.value;
      this.setState({
        WA_2_width_X_Dir: event.target.value
      });
    }


    if (name === "working_area_2_Length_Y_Direction") {
      this.WA_2_Length_Y_Dir = event.target.value;
      this.setState({
        WA_2_Length_Y_Dir: event.target.value
      });
    }
    if (name === "working_area_2_Height_Z_Direction") {
      this.WA_2_Height_Z_Dir = event.target.value;
      this.setState({
        WA_2_Height_Z_Dir: event.target.value
      });
    }

    if (name === "working_area_2_Offset_X_Direction") {
      this.WA_2_Offset_X_Dir = event.target.value;
      this.setState({
        WA_2_Offset_X_Dir: event.target.value
      });
    }



    if (name === "working_area_2_Offset_Y_Direction") {
      this.WA_2_Offset_Y_Dir = event.target.value;
      this.setState({
        WA_2_Offset_Y_Dir: event.target.value
      });
    }

    if (name === "intermediate_Layer") {
      if (this.state.selectedOne) {
        this.int_Layer = event.target.checked;
        // this.int_Layer1 = event.target.checked;
      }
      else if (this.state.selectedTwo) {
        this.int_Layer = event.target.checked;
        // this.int_Layer2 = event.target.checked;
      }
      this.setState({
        int_Layer: event.target.checked
      });
    }

    // console.log("handle section", this.state)

  };


  arrow = () => {
    try {
      if (this.state.selectedOne == true) {

        // // upper right corner
        this.ctx_forSingle.beginPath();
        this.ctx_forSingle.lineWidth = 2;
        this.ctx_forSingle.fillStyle = "black";
        this.ctx_forSingle.fillStyle = "#E1D5E7";

        this.ctx_forSingle.drawImage(this.imga, this.state.arrowx, this.state.arrowy, 80, 80);
        // console.log(" this.state.arrowx " + this.state.arrowx + " this.state.arrowy  " + this.state.arrowy);

        this.ctx_forSingle.fill();
        this.ctx_forSingle.stroke();
      }

      else if (this.state.selectedTwo == true) {

        // // upper right corner
        this.ctx_forSingle.beginPath();
        this.ctx_forSingle.lineWidth = 2;
        this.ctx_forSingle.fillStyle = "black";
        this.ctx_forSingle.fillStyle = "#E1D5E7";

        this.ctx_forSingle.drawImage(this.imga, this.state.arrowx2, this.state.arrowy2, 80, 80);
        // console.log(" this.state.arrowx2 " + this.state.arrowx2 + " this.state.arrowy2  " + this.state.arrowy2);

        this.ctx_forSingle.fill();
        this.ctx_forSingle.stroke();
      }
    }
    catch (e) {
      // console.log("Error inside arrow");
    }
    // this.setState({
    //   arrowUpdate: true
    // })
    return true;
  }

  firstCaseOriginChangeFlush = (firstCasePallet, rotation) => {
    this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    // if(this.state.selectedOne){
    let newCaseDataA1 = [...this.casedataA1];
    let newCaseDataB1 = [...this.casedataB1];
    let newCaseDataC1 = [...this.casedataC1];
    let newCaseDataA2 = [...this.casedataA2];
    let newCaseDataB2 = [...this.casedataB2];
    let newCaseDataC2 = [...this.casedataC2];

    if (firstCasePallet == "pal1") {
      if (rotation) {
        for (let i = 0; i < newCaseDataA1.length; i++) {
          if (newCaseDataA1[i] != null) {
            newCaseDataA1[i].rotation = -1;
          }
        }
        for (let i = 0; i < newCaseDataB1.length; i++) {
          if (newCaseDataB1[i] != null) {
            newCaseDataB1[i].rotation = -1;
          }
        }
        for (let i = 0; i < newCaseDataC1.length; i++) {
          if (newCaseDataC1[i] != null) {
            newCaseDataC1[i].rotation = -1;
          }
        }
      } else {
        for (let i = 0; i < newCaseDataA1.length; i++) {
          if (newCaseDataA1[i] != null) {
            newCaseDataA1[i].rotation = -1;
            newCaseDataA1[i].position = "";
            newCaseDataA1[i].position_freezed = false;
            newCaseDataA1[i].offset_X_neg = false;
            newCaseDataA1[i].offset_Y_neg = false;
            newCaseDataA1[i].pre_Pos_X = 0;
            newCaseDataA1[i].pre_Pos_Y = 0;
            newCaseDataA1[i].pre_Pos_Z = 0;
            newCaseDataA1[i].pre_Pos_2X = 0;
            newCaseDataA1[i].pre_Pos_2Y = 0;
            newCaseDataA1[i].pre_Pos_2Z = 0;
            newCaseDataA1[i].pre_Pos_3X = 0;
            newCaseDataA1[i].pre_Pos_3Y = 0;
            newCaseDataA1[i].pre_Pos_3Z = 0;
            newCaseDataA1[i].case_x_position = 0;
            newCaseDataA1[i].case_y_position = 0;
            newCaseDataA1[i].case_z_position = 0;
            newCaseDataA1[i].auto_generation = false;
          }
        }
        for (let i = 0; i < newCaseDataB1.length; i++) {
          if (newCaseDataB1[i] != null) {
            newCaseDataB1[i].rotation = -1;
            newCaseDataB1[i].position = "";
            newCaseDataB1[i].position_freezed = false;
            newCaseDataB1[i].offset_X_neg = false;
            newCaseDataB1[i].offset_Y_neg = false;
            newCaseDataB1[i].pre_Pos_X = 0;
            newCaseDataB1[i].pre_Pos_Y = 0;
            newCaseDataB1[i].pre_Pos_Z = 0;
            newCaseDataB1[i].pre_Pos_2X = 0;
            newCaseDataB1[i].pre_Pos_2Y = 0;
            newCaseDataB1[i].pre_Pos_2Z = 0;
            newCaseDataB1[i].pre_Pos_3X = 0;
            newCaseDataB1[i].pre_Pos_3Y = 0;
            newCaseDataB1[i].pre_Pos_3Z = 0;
            newCaseDataB1[i].case_x_position = 0;
            newCaseDataB1[i].case_y_position = 0;
            newCaseDataB1[i].case_z_position = 0;
            newCaseDataB1[i].auto_generation = false;

          }
        }
        for (let i = 0; i < newCaseDataC1.length; i++) {
          if (newCaseDataC1[i] != null) {
            newCaseDataC1[i].rotation = -1;
            newCaseDataC1[i].position = "";
            newCaseDataC1[i].position_freezed = false;
            newCaseDataC1[i].offset_X_neg = false;
            newCaseDataC1[i].offset_Y_neg = false;
            newCaseDataC1[i].pre_Pos_X = 0;
            newCaseDataC1[i].pre_Pos_Y = 0;
            newCaseDataC1[i].pre_Pos_Z = 0;
            newCaseDataC1[i].pre_Pos_2X = 0;
            newCaseDataC1[i].pre_Pos_2Y = 0;
            newCaseDataC1[i].pre_Pos_2Z = 0;
            newCaseDataC1[i].pre_Pos_3X = 0;
            newCaseDataC1[i].pre_Pos_3Y = 0;
            newCaseDataC1[i].pre_Pos_3Z = 0;
            newCaseDataC1[i].case_x_position = 0;
            newCaseDataC1[i].case_y_position = 0;
            newCaseDataC1[i].case_z_position = 0;
            newCaseDataC1[i].auto_generation = false;
          }
        }
      }
      // this.state.autoGenerateRadioButton = false;
      // this.setState({
      //   autoGenerateRadioButton: false
      // })

    }

    else if (firstCasePallet == "pal2") {

      if (rotation) {
        for (let i = 0; i < newCaseDataA2.length; i++) {
          if (newCaseDataA2[i] != null) {
            newCaseDataA2[i].rotation = -1;
          }
        }
        for (let i = 0; i < newCaseDataB2.length; i++) {
          if (newCaseDataB2[i] != null) {
            newCaseDataB2[i].rotation = -1;
          }
        }
        for (let i = 0; i < newCaseDataC2.length; i++) {
          if (newCaseDataC2[i] != null) {
            newCaseDataC2[i].rotation = -1;
          }
        }
      } else {
        for (let i = 0; i < newCaseDataA2.length; i++) {
          if (newCaseDataA2[i] != null) {
            newCaseDataA2[i].rotation = -1;
            newCaseDataA2[i].position = "";
            newCaseDataA2[i].position_freezed = false;
            newCaseDataA2[i].offset_X_neg = false;
            newCaseDataA2[i].offset_Y_neg = false;
            newCaseDataA2[i].pre_Pos_X = 0;
            newCaseDataA2[i].pre_Pos_Y = 0;
            newCaseDataA2[i].pre_Pos_Z = 0;
            newCaseDataA2[i].pre_Pos_2X = 0;
            newCaseDataA2[i].pre_Pos_2Y = 0;
            newCaseDataA2[i].pre_Pos_2Z = 0;
            newCaseDataA2[i].pre_Pos_3X = 0;
            newCaseDataA2[i].pre_Pos_3Y = 0;
            newCaseDataA2[i].pre_Pos_3Z = 0;
            newCaseDataA2[i].case_x_position = 0;
            newCaseDataA2[i].case_y_position = 0;
            newCaseDataA2[i].case_z_position = 0;
            newCaseDataA2[i].auto_generation = false;

          }
        }
        for (let i = 0; i < newCaseDataB2.length; i++) {
          if (newCaseDataB2[i] != null) {
            newCaseDataB2[i].rotation = -1;
            newCaseDataB2[i].position = "";
            newCaseDataB2[i].position_freezed = false;
            newCaseDataB2[i].offset_X_neg = false;
            newCaseDataB2[i].offset_Y_neg = false;
            newCaseDataB2[i].pre_Pos_Y = 0;
            newCaseDataB2[i].pre_Pos_X = 0;
            newCaseDataB2[i].pre_Pos_Z = 0;
            newCaseDataB2[i].pre_Pos_2X = 0;
            newCaseDataB2[i].pre_Pos_2Y = 0;
            newCaseDataB2[i].pre_Pos_2Z = 0;
            newCaseDataB2[i].pre_Pos_3X = 0;
            newCaseDataB2[i].pre_Pos_3Y = 0;
            newCaseDataB2[i].pre_Pos_3Z = 0;
            newCaseDataB2[i].case_x_position = 0;
            newCaseDataB2[i].case_y_position = 0;
            newCaseDataB2[i].case_z_position = 0;
            newCaseDataB2[i].auto_generation = false;


          }
        }
        for (let i = 0; i < newCaseDataC2.length; i++) {
          if (newCaseDataC2[i] != null) {
            newCaseDataC2[i].rotation = -1;
            newCaseDataC2[i].position = "";
            newCaseDataC2[i].position_freezed = false;
            newCaseDataC2[i].offset_X_neg = false;
            newCaseDataC2[i].offset_Y_neg = false;
            newCaseDataC2[i].pre_Pos_X = 0;
            newCaseDataC2[i].pre_Pos_Y = 0;
            newCaseDataC2[i].pre_Pos_Z = 0;
            newCaseDataC2[i].pre_Pos_2X = 0;
            newCaseDataC2[i].pre_Pos_2Y = 0;
            newCaseDataC2[i].pre_Pos_2Z = 0;
            newCaseDataC2[i].pre_Pos_3X = 0;
            newCaseDataC2[i].pre_Pos_3Y = 0;
            newCaseDataC2[i].pre_Pos_3Z = 0;
            newCaseDataC2[i].case_x_position = 0;
            newCaseDataC2[i].case_y_position = 0;
            newCaseDataC2[i].case_z_position = 0;
            newCaseDataC2[i].auto_generation = false;


          }
        }
      }
      // this.state.autoGenerateRadioButton = false;
      // this.setState({
      //   autoGenerateRadioButton: false
      // })
    }

    else if (firstCasePallet == "pltType") {

      // console.log("Changed PalletType ");

      for (let i = 0; i < newCaseDataA1.length; i++) {
        if (newCaseDataA1[i] != null) {
          newCaseDataA1[i].rotation = -1;
          newCaseDataA1[i].position = "";
          newCaseDataA1[i].position_freezed = false;
          newCaseDataA1[i].offset_X_neg = false;
          newCaseDataA1[i].offset_Y_neg = false;
          newCaseDataA1[i].pre_Pos_X = 0;
          newCaseDataA1[i].pre_Pos_Y = 0;
          newCaseDataA1[i].pre_Pos_Z = 0;
          newCaseDataA1[i].pre_Pos_2X = 0;
          newCaseDataA1[i].pre_Pos_2Y = 0;
          newCaseDataA1[i].pre_Pos_2Z = 0;
          newCaseDataA1[i].pre_Pos_3X = 0;
          newCaseDataA1[i].pre_Pos_3Y = 0;
          newCaseDataA1[i].pre_Pos_3Z = 0;
          newCaseDataA1[i].case_x_position = 0;
          newCaseDataA1[i].case_y_position = 0;
          newCaseDataA1[i].case_z_position = 0;
          newCaseDataA1[i].auto_generation = false;
        }
      }
      for (let i = 0; i < newCaseDataB1.length; i++) {
        if (newCaseDataB1[i] != null) {
          newCaseDataB1[i].rotation = -1;
          newCaseDataB1[i].position = "";
          newCaseDataB1[i].position_freezed = false;
          newCaseDataB1[i].offset_X_neg = false;
          newCaseDataB1[i].offset_Y_neg = false;
          newCaseDataB1[i].pre_Pos_X = 0;
          newCaseDataB1[i].pre_Pos_Y = 0;
          newCaseDataB1[i].pre_Pos_Z = 0;
          newCaseDataB1[i].pre_Pos_2X = 0;
          newCaseDataB1[i].pre_Pos_2Y = 0;
          newCaseDataB1[i].pre_Pos_2Z = 0;
          newCaseDataB1[i].pre_Pos_3X = 0;
          newCaseDataB1[i].pre_Pos_3Y = 0;
          newCaseDataB1[i].pre_Pos_3Z = 0;
          newCaseDataB1[i].case_x_position = 0;
          newCaseDataB1[i].case_y_position = 0;
          newCaseDataB1[i].case_z_position = 0;
          newCaseDataB1[i].auto_generation = false;

        }
      }
      for (let i = 0; i < newCaseDataC1.length; i++) {
        if (newCaseDataC1[i] != null) {
          newCaseDataC1[i].rotation = -1;
          newCaseDataC1[i].position = "";
          newCaseDataC1[i].position_freezed = false;
          newCaseDataC1[i].offset_X_neg = false;
          newCaseDataC1[i].offset_Y_neg = false;
          newCaseDataC1[i].pre_Pos_X = 0;
          newCaseDataC1[i].pre_Pos_Y = 0;
          newCaseDataC1[i].pre_Pos_Z = 0;
          newCaseDataC1[i].pre_Pos_2X = 0;
          newCaseDataC1[i].pre_Pos_2Y = 0;
          newCaseDataC1[i].pre_Pos_2Z = 0;
          newCaseDataC1[i].pre_Pos_3X = 0;
          newCaseDataC1[i].pre_Pos_3Y = 0;
          newCaseDataC1[i].pre_Pos_3Z = 0;
          newCaseDataC1[i].case_x_position = 0;
          newCaseDataC1[i].case_y_position = 0;
          newCaseDataC1[i].case_z_position = 0;
          newCaseDataC1[i].auto_generation = false;
        }
      }


      for (let i = 0; i < newCaseDataA2.length; i++) {
        if (newCaseDataA2[i] != null) {
          newCaseDataA2[i].rotation = -1;
          newCaseDataA2[i].position = "";
          newCaseDataA2[i].position_freezed = false;
          newCaseDataA2[i].offset_X_neg = false;
          newCaseDataA2[i].offset_Y_neg = false;
          newCaseDataA2[i].pre_Pos_X = 0;
          newCaseDataA2[i].pre_Pos_Y = 0;
          newCaseDataA2[i].pre_Pos_Z = 0;
          newCaseDataA2[i].pre_Pos_2X = 0;
          newCaseDataA2[i].pre_Pos_2Y = 0;
          newCaseDataA2[i].pre_Pos_2Z = 0;
          newCaseDataA2[i].pre_Pos_3X = 0;
          newCaseDataA2[i].pre_Pos_3Y = 0;
          newCaseDataA2[i].pre_Pos_3Z = 0;
          newCaseDataA2[i].case_x_position = 0;
          newCaseDataA2[i].case_y_position = 0;
          newCaseDataA2[i].case_z_position = 0;
          newCaseDataA2[i].auto_generation = false;

        }
      }
      for (let i = 0; i < newCaseDataB2.length; i++) {
        if (newCaseDataB2[i] != null) {
          newCaseDataB2[i].rotation = -1;
          newCaseDataB2[i].position = "";
          newCaseDataB2[i].position_freezed = false;
          newCaseDataB2[i].offset_X_neg = false;
          newCaseDataB2[i].offset_Y_neg = false;
          newCaseDataB2[i].pre_Pos_Y = 0;
          newCaseDataB2[i].pre_Pos_X = 0;
          newCaseDataB2[i].pre_Pos_Z = 0;
          newCaseDataB2[i].pre_Pos_2X = 0;
          newCaseDataB2[i].pre_Pos_2Y = 0;
          newCaseDataB2[i].pre_Pos_2Z = 0;
          newCaseDataB2[i].pre_Pos_3X = 0;
          newCaseDataB2[i].pre_Pos_3Y = 0;
          newCaseDataB2[i].pre_Pos_3Z = 0;
          newCaseDataB2[i].case_x_position = 0;
          newCaseDataB2[i].case_y_position = 0;
          newCaseDataB2[i].case_z_position = 0;
          newCaseDataB2[i].auto_generation = false;

        }
      }
      for (let i = 0; i < newCaseDataC2.length; i++) {
        if (newCaseDataC2[i] != null) {
          newCaseDataC2[i].rotation = -1;
          newCaseDataC2[i].position = "";
          newCaseDataC2[i].position_freezed = false;
          newCaseDataC2[i].offset_X_neg = false;
          newCaseDataC2[i].offset_Y_neg = false;
          newCaseDataC2[i].pre_Pos_X = 0;
          newCaseDataC2[i].pre_Pos_Y = 0;
          newCaseDataC2[i].pre_Pos_Z = 0;
          newCaseDataC2[i].pre_Pos_2X = 0;
          newCaseDataC2[i].pre_Pos_2Y = 0;
          newCaseDataC2[i].pre_Pos_2Z = 0;
          newCaseDataC2[i].pre_Pos_3X = 0;
          newCaseDataC2[i].pre_Pos_3Y = 0;
          newCaseDataC2[i].pre_Pos_3Z = 0;
          newCaseDataC2[i].case_x_position = 0;
          newCaseDataC2[i].case_y_position = 0;
          newCaseDataC2[i].case_z_position = 0;
          newCaseDataC2[i].auto_generation = false;

        }
      }

      // this.state.autoGenerateRadioButton = false;
      // this.setState({
      //   autoGenerateRadioButton: false
      // })
    }

    else {

      if (this.state.selectedOne) {
        for (let i = 0; i < newCaseDataA1.length; i++) {
          if (newCaseDataA1[i] != null) {
            newCaseDataA1[i].rotation = -1;
            newCaseDataA1[i].position = "";
            newCaseDataA1[i].position_freezed = false;
            newCaseDataA1[i].offset_X_neg = false;
            newCaseDataA1[i].offset_Y_neg = false;
            newCaseDataA1[i].pre_Pos_X = 0;
            newCaseDataA1[i].pre_Pos_Y = 0;
            newCaseDataA1[i].pre_Pos_Z = 0;
            newCaseDataA1[i].pre_Pos_2X = 0;
            newCaseDataA1[i].pre_Pos_2Y = 0;
            newCaseDataA1[i].pre_Pos_2Z = 0;
            newCaseDataA1[i].pre_Pos_3X = 0;
            newCaseDataA1[i].pre_Pos_3Y = 0;
            newCaseDataA1[i].pre_Pos_3Z = 0;
            newCaseDataA1[i].case_x_position = 0;
            newCaseDataA1[i].case_y_position = 0;
            newCaseDataA1[i].case_z_position = 0;
            newCaseDataA1[i].auto_generation = false;
          }
        }
        for (let i = 0; i < newCaseDataB1.length; i++) {
          if (newCaseDataB1[i] != null) {
            newCaseDataB1[i].rotation = -1;
            newCaseDataB1[i].position = "";
            newCaseDataB1[i].position_freezed = false;
            newCaseDataB1[i].offset_X_neg = false;
            newCaseDataB1[i].offset_Y_neg = false;
            newCaseDataB1[i].pre_Pos_X = 0;
            newCaseDataB1[i].pre_Pos_Y = 0;
            newCaseDataB1[i].pre_Pos_Z = 0;
            newCaseDataB1[i].pre_Pos_2X = 0;
            newCaseDataB1[i].pre_Pos_2Y = 0;
            newCaseDataB1[i].pre_Pos_2Z = 0;
            newCaseDataB1[i].pre_Pos_3X = 0;
            newCaseDataB1[i].pre_Pos_3Y = 0;
            newCaseDataB1[i].pre_Pos_3Z = 0;
            newCaseDataB1[i].case_x_position = 0;
            newCaseDataB1[i].case_y_position = 0;
            newCaseDataB1[i].case_z_position = 0;
            newCaseDataB1[i].auto_generation = false;

          }
        }
        for (let i = 0; i < newCaseDataC1.length; i++) {
          if (newCaseDataC1[i] != null) {
            newCaseDataC1[i].rotation = -1;
            newCaseDataC1[i].position = "";
            newCaseDataC1[i].position_freezed = false;
            newCaseDataC1[i].offset_X_neg = false;
            newCaseDataC1[i].offset_Y_neg = false;
            newCaseDataC1[i].pre_Pos_X = 0;
            newCaseDataC1[i].pre_Pos_Y = 0;
            newCaseDataC1[i].pre_Pos_Z = 0;
            newCaseDataC1[i].pre_Pos_2X = 0;
            newCaseDataC1[i].pre_Pos_2Y = 0;
            newCaseDataC1[i].pre_Pos_2Z = 0;
            newCaseDataC1[i].pre_Pos_3X = 0;
            newCaseDataC1[i].pre_Pos_3Y = 0;
            newCaseDataC1[i].pre_Pos_3Z = 0;
            newCaseDataC1[i].case_x_position = 0;
            newCaseDataC1[i].case_y_position = 0;
            newCaseDataC1[i].case_z_position = 0;
            newCaseDataC1[i].auto_generation = false;
          }
        }
      } else if (this.state.selectedTwo) {
        for (let i = 0; i < newCaseDataA2.length; i++) {
          if (newCaseDataA2[i] != null) {
            newCaseDataA2[i].rotation = -1;
            newCaseDataA2[i].position = "";
            newCaseDataA2[i].position_freezed = false;
            newCaseDataA2[i].offset_X_neg = false;
            newCaseDataA2[i].offset_Y_neg = false;
            newCaseDataA2[i].pre_Pos_X = 0;
            newCaseDataA2[i].pre_Pos_Y = 0;
            newCaseDataA2[i].pre_Pos_Z = 0;
            newCaseDataA2[i].pre_Pos_2X = 0;
            newCaseDataA2[i].pre_Pos_2Y = 0;
            newCaseDataA2[i].pre_Pos_2Z = 0;
            newCaseDataA2[i].pre_Pos_3X = 0;
            newCaseDataA2[i].pre_Pos_3Y = 0;
            newCaseDataA2[i].pre_Pos_3Z = 0;
            newCaseDataA2[i].case_y_position = 0;
            newCaseDataA2[i].case_x_position = 0;
            newCaseDataA2[i].case_z_position = 0;
            newCaseDataA2[i].auto_generation = false;

          }
        }
        for (let i = 0; i < newCaseDataB2.length; i++) {
          if (newCaseDataB2[i] != null) {
            newCaseDataB2[i].rotation = -1;
            newCaseDataB2[i].position = "";
            newCaseDataB2[i].position_freezed = false;
            newCaseDataB2[i].offset_X_neg = false;
            newCaseDataB2[i].offset_Y_neg = false;
            newCaseDataB2[i].pre_Pos_Y = 0;
            newCaseDataB2[i].pre_Pos_X = 0;
            newCaseDataB2[i].pre_Pos_Z = 0;
            newCaseDataB2[i].pre_Pos_2X = 0;
            newCaseDataB2[i].pre_Pos_2Y = 0;
            newCaseDataB2[i].pre_Pos_2Z = 0;
            newCaseDataB2[i].pre_Pos_3X = 0;
            newCaseDataB2[i].pre_Pos_3Y = 0;
            newCaseDataB2[i].pre_Pos_3Z = 0;
            newCaseDataB2[i].case_x_position = 0;
            newCaseDataB2[i].case_y_position = 0;
            newCaseDataB2[i].case_z_position = 0;
            newCaseDataB2[i].auto_generation = false;

          }
        }
        for (let i = 0; i < newCaseDataC2.length; i++) {
          if (newCaseDataC2[i] != null) {
            newCaseDataC2[i].rotation = -1;
            newCaseDataC2[i].position = "";
            newCaseDataC2[i].position_freezed = false;
            newCaseDataC2[i].offset_X_neg = false;
            newCaseDataC2[i].offset_Y_neg = false;
            newCaseDataC2[i].pre_Pos_X = 0;
            newCaseDataC2[i].pre_Pos_Y = 0;
            newCaseDataC2[i].pre_Pos_Z = 0;
            newCaseDataB2[i].pre_Pos_2X = 0;
            newCaseDataB2[i].pre_Pos_2Y = 0;
            newCaseDataB2[i].pre_Pos_2Z = 0;
            newCaseDataB2[i].pre_Pos_3X = 0;
            newCaseDataB2[i].pre_Pos_3Y = 0;
            newCaseDataB2[i].pre_Pos_3Z = 0;
            newCaseDataC2[i].case_x_position = 0;
            newCaseDataC2[i].case_y_position = 0;
            newCaseDataC2[i].case_z_position = 0;
            newCaseDataC2[i].auto_generation = false;

          }
        }
      }

      // this.state.autoGenerateRadioButton = false;
      // this.setState({
      //   autoGenerateRadioButton: false
      // })
    }



    this.casedataA1 = [...newCaseDataA1];
    // console.log("updating data caseDataA1 from firstcaseOriginChangeFlush:::: ")
    this.casedataB1 = [...newCaseDataB1];
    this.casedataC1 = [...newCaseDataC1];

    this.casedataA2 = [...newCaseDataA2];
    this.casedataB2 = [...newCaseDataB2];
    this.casedataC2 = [...newCaseDataC2];

    // console.log("checking for savePrc calling:...firstcaseoriginChangeFlush ")

    this.savePrc();
    // }else if(this.state.selectedTwo){
    // let newCaseDataA2 = this.casedataA2;
    // let newCaseDataB2 = this.casedataB2;
    // let newCaseDataC2 = this.casedataC2;

    // for(let i=0;i<newCaseDataA2.length;i++){
    //   newCaseDataA2[i].position = "";
    //   newCaseDataA2[i].position_freezed = false;
    // }
    // for(let i=0;i<newCaseDataB2.length;i++){
    //   newCaseDataB2[i].position = "";
    //   newCaseDataB2[i].position_freezed = false;
    // }
    // for(let i=0;i<newCaseDataC2.length;i++){
    //   newCaseDataC2[i].position = "";
    //   newCaseDataC2[i].position_freezed = false;
    // }

    // this.casedataA2 = newCaseDataA2;
    // this.casedataB2 = newCaseDataB2;
    // this.casedataC2 = newCaseDataC2;

    // this.savePrc();
    // }

  }

  firstCaseOriginChangeFlushA = (firstCasePallet) => {

    // console.log("SchemaA firstCaseOriginChangeFlushA 1 ");

    if (firstCasePallet === "CasesSchemaA") {

      // console.log("SchemaA firstCaseOriginChangeFlushA 2 ");
      this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
      // if(this.state.selectedOne){
      let newCaseDataA1 = [...this.casedataA1];
      let newCaseDataA2 = [...this.casedataA2];

      if (firstCasePallet == "pal1") {

        for (let i = 0; i < newCaseDataA1.length; i++) {
          if (newCaseDataA1[i] != null) {
            newCaseDataA1[i].rotation = -1;
            newCaseDataA1[i].position = "";
            newCaseDataA1[i].position_freezed = false;
            newCaseDataA1[i].offset_X_neg = false;
            newCaseDataA1[i].offset_Y_neg = false;
            newCaseDataA1[i].pre_Pos_X = 0;
            newCaseDataA1[i].pre_Pos_Y = 0;
            newCaseDataA1[i].pre_Pos_Z = 0;
            newCaseDataA1[i].pre_Pos_2X = 0;
            newCaseDataA1[i].pre_Pos_2Y = 0;
            newCaseDataA1[i].pre_Pos_2Z = 0;
            newCaseDataA1[i].pre_Pos_3X = 0;
            newCaseDataA1[i].pre_Pos_3Y = 0;
            newCaseDataA1[i].pre_Pos_3Z = 0;
            newCaseDataA1[i].case_x_position = 0;
            newCaseDataA1[i].case_y_position = 0;
            newCaseDataA1[i].case_z_position = 0;
            newCaseDataA1[i].auto_generation = false;
          }
        }


      } else if (firstCasePallet == "pal2") {

        for (let i = 0; i < newCaseDataA2.length; i++) {
          if (newCaseDataA2[i] != null) {
            newCaseDataA2[i].rotation = -1;
            newCaseDataA2[i].position = "";
            newCaseDataA2[i].position_freezed = false;
            newCaseDataA2[i].offset_X_neg = false;
            newCaseDataA2[i].offset_Y_neg = false;
            newCaseDataA2[i].pre_Pos_X = 0;
            newCaseDataA2[i].pre_Pos_Y = 0;
            newCaseDataA2[i].pre_Pos_Z = 0;
            newCaseDataA2[i].pre_Pos_2X = 0;
            newCaseDataA2[i].pre_Pos_2Y = 0;
            newCaseDataA2[i].pre_Pos_2Z = 0;
            newCaseDataA2[i].pre_Pos_3X = 0;
            newCaseDataA2[i].pre_Pos_3Y = 0;
            newCaseDataA2[i].pre_Pos_3Z = 0;
            newCaseDataA2[i].case_x_position = 0;
            newCaseDataA2[i].case_y_position = 0;
            newCaseDataA2[i].case_z_position = 0;
            newCaseDataA2[i].auto_generation = false;

          }
        }

      } else {

        for (let i = 0; i < newCaseDataA1.length; i++) {
          if (newCaseDataA1[i] != null) {
            newCaseDataA1[i].rotation = -1;
            newCaseDataA1[i].position = "";
            newCaseDataA1[i].position_freezed = false;
            newCaseDataA1[i].offset_X_neg = false;
            newCaseDataA1[i].offset_Y_neg = false;
            newCaseDataA1[i].pre_Pos_X = 0;
            newCaseDataA1[i].pre_Pos_Y = 0;
            newCaseDataA1[i].pre_Pos_Z = 0;
            newCaseDataA1[i].pre_Pos_2X = 0;
            newCaseDataA1[i].pre_Pos_2Y = 0;
            newCaseDataA1[i].pre_Pos_2Z = 0;
            newCaseDataA1[i].pre_Pos_3X = 0;
            newCaseDataA1[i].pre_Pos_3Y = 0;
            newCaseDataA1[i].pre_Pos_3Z = 0;
            newCaseDataA1[i].case_x_position = 0;
            newCaseDataA1[i].case_y_position = 0;
            newCaseDataA1[i].case_z_position = 0;
          }
        }

        for (let i = 0; i < newCaseDataA2.length; i++) {
          if (newCaseDataA2[i] != null) {
            newCaseDataA2[i].rotation = -1;
            newCaseDataA2[i].position = "";
            newCaseDataA2[i].position_freezed = false;
            newCaseDataA2[i].offset_X_neg = false;
            newCaseDataA2[i].offset_Y_neg = false;
            newCaseDataA2[i].pre_Pos_X = 0;
            newCaseDataA2[i].pre_Pos_Y = 0;
            newCaseDataA2[i].pre_Pos_Z = 0;
            newCaseDataA2[i].pre_Pos_2X = 0;
            newCaseDataA2[i].pre_Pos_2Y = 0;
            newCaseDataA2[i].pre_Pos_2Z = 0;
            newCaseDataA2[i].pre_Pos_3X = 0;
            newCaseDataA2[i].pre_Pos_3Y = 0;
            newCaseDataA2[i].pre_Pos_3Z = 0;
            newCaseDataA2[i].case_x_position = 0;
            newCaseDataA2[i].case_y_position = 0;
            newCaseDataA2[i].case_z_position = 0;
            newCaseDataA2[i].auto_generation = false;

          }
        }
      }


      this.casedataA1 = [...newCaseDataA1];
      this.casedataA2 = [...newCaseDataA2];

      // console.log("checking for savePrc calling:...firstcaseOriginchangeflushA ")

      this.savePrc();
    }

  }

  firstCaseOriginChangeFlushB = (firstCasePallet) => {

    // console.log("SchemaA firstCaseOriginChangeFlushB 1 ");

    if (firstCasePallet === "CasesSchemaB") {

      // console.log("SchemaA firstCaseOriginChangeFlushB 2 ");
      this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
      // if(this.state.selectedOne){
      let newCaseDataB1 = [...this.casedataB1];
      let newCaseDataB2 = [...this.casedataB2];

      if (firstCasePallet == "pal1") {

        for (let i = 0; i < newCaseDataB1.length; i++) {
          if (newCaseDataB1[i] != null) {
            newCaseDataB1[i].rotation = -1;
            newCaseDataB1[i].position = "";
            newCaseDataB1[i].position_freezed = false;
            newCaseDataB1[i].offset_X_neg = false;
            newCaseDataB1[i].offset_Y_neg = false;
            newCaseDataB1[i].pre_Pos_X = 0;
            newCaseDataB1[i].pre_Pos_Y = 0;
            newCaseDataB1[i].pre_Pos_Z = 0;
            newCaseDataB1[i].pre_Pos_2X = 0;
            newCaseDataB1[i].pre_Pos_2Y = 0;
            newCaseDataB1[i].pre_Pos_2Z = 0;
            newCaseDataB1[i].pre_Pos_3X = 0;
            newCaseDataB1[i].pre_Pos_3Y = 0;
            newCaseDataB1[i].pre_Pos_3Z = 0;
            newCaseDataB1[i].case_x_position = 0;
            newCaseDataB1[i].case_y_position = 0;
            newCaseDataB1[i].case_z_position = 0;
            newCaseDataB1[i].auto_generation = false;
          }
        }


      } else if (firstCasePallet == "pal2") {

        for (let i = 0; i < newCaseDataB2.length; i++) {
          if (newCaseDataB2[i] != null) {
            newCaseDataB2[i].rotation = -1;
            newCaseDataB2[i].position = "";
            newCaseDataB2[i].position_freezed = false;
            newCaseDataB2[i].offset_X_neg = false;
            newCaseDataB2[i].offset_Y_neg = false;
            newCaseDataB2[i].pre_Pos_X = 0;
            newCaseDataB2[i].pre_Pos_Y = 0;
            newCaseDataB2[i].pre_Pos_Z = 0;
            newCaseDataB2[i].pre_Pos_2X = 0;
            newCaseDataB2[i].pre_Pos_2Y = 0;
            newCaseDataB2[i].pre_Pos_2Z = 0;
            newCaseDataB2[i].pre_Pos_3X = 0;
            newCaseDataB2[i].pre_Pos_3Y = 0;
            newCaseDataB2[i].pre_Pos_3Z = 0;
            newCaseDataB2[i].case_x_position = 0;
            newCaseDataB2[i].case_y_position = 0;
            newCaseDataB2[i].case_z_position = 0;
            newCaseDataB2[i].auto_generation = false;

          }
        }

      } else {

        for (let i = 0; i < newCaseDataB1.length; i++) {
          if (newCaseDataB1[i] != null) {
            newCaseDataB1[i].rotation = -1;
            newCaseDataB1[i].position = "";
            newCaseDataB1[i].position_freezed = false;
            newCaseDataB1[i].offset_X_neg = false;
            newCaseDataB1[i].offset_Y_neg = false;
            newCaseDataB1[i].pre_Pos_X = 0;
            newCaseDataB1[i].pre_Pos_Y = 0;
            newCaseDataB1[i].pre_Pos_Z = 0;
            newCaseDataB1[i].pre_Pos_2X = 0;
            newCaseDataB1[i].pre_Pos_2Y = 0;
            newCaseDataB1[i].pre_Pos_2Z = 0;
            newCaseDataB1[i].pre_Pos_3X = 0;
            newCaseDataB1[i].pre_Pos_3Y = 0;
            newCaseDataB1[i].pre_Pos_3Z = 0;
            newCaseDataB1[i].case_x_position = 0;
            newCaseDataB1[i].case_y_position = 0;
            newCaseDataB1[i].case_z_position = 0;
            newCaseDataB1[i].auto_generation = false;
          }
        }

        for (let i = 0; i < newCaseDataB2.length; i++) {
          if (newCaseDataB2[i] != null) {
            newCaseDataB2[i].rotation = -1;
            newCaseDataB2[i].position = "";
            newCaseDataB2[i].position_freezed = false;
            newCaseDataB2[i].offset_X_neg = false;
            newCaseDataB2[i].offset_Y_neg = false;
            newCaseDataB2[i].pre_Pos_X = 0;
            newCaseDataB2[i].pre_Pos_Y = 0;
            newCaseDataB2[i].pre_Pos_Z = 0;
            newCaseDataB2[i].pre_Pos_2X = 0;
            newCaseDataB2[i].pre_Pos_2Y = 0;
            newCaseDataB2[i].pre_Pos_2Z = 0;
            newCaseDataB2[i].pre_Pos_3X = 0;
            newCaseDataB2[i].pre_Pos_3Y = 0;
            newCaseDataB2[i].pre_Pos_3Z = 0;
            newCaseDataB2[i].case_x_position = 0;
            newCaseDataB2[i].case_y_position = 0;
            newCaseDataB2[i].case_z_position = 0;
            newCaseDataB2[i].auto_generation = false;

          }
        }
      }


      this.casedataB1 = [...newCaseDataB1];
      this.casedataB2 = [...newCaseDataB2];

      // console.log("checking for savePrc calling:...firstcaseOriginchangeflushB ")

      this.savePrc();
    }

  }

  firstCaseOriginChangeFlushC = (firstCasePallet) => {

    // console.log("SchemaA firstCaseOriginChangeFlushC 1 ");

    if (firstCasePallet === "CasesSchemaC") {

      // console.log("SchemaA firstCaseOriginChangeFlushC 2 ");
      this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
      // if(this.state.selectedOne){
      let newCaseDataC1 = [...this.casedataC1];
      let newCaseDataC2 = [...this.casedataC2];

      if (firstCasePallet == "pal1") {

        for (let i = 0; i < newCaseDataC1.length; i++) {
          if (newCaseDataC1[i] != null) {
            newCaseDataC1[i].rotation = -1;
            newCaseDataC1[i].position = "";
            newCaseDataC1[i].position_freezed = false;
            newCaseDataC1[i].offset_X_neg = false;
            newCaseDataC1[i].offset_Y_neg = false;
            newCaseDataC1[i].pre_Pos_X = 0;
            newCaseDataC1[i].pre_Pos_Y = 0;
            newCaseDataC1[i].pre_Pos_Z = 0;
            newCaseDataC1[i].pre_Pos_2X = 0;
            newCaseDataC1[i].pre_Pos_2Y = 0;
            newCaseDataC1[i].pre_Pos_2Z = 0;
            newCaseDataC1[i].pre_Pos_3X = 0;
            newCaseDataC1[i].pre_Pos_3Y = 0;
            newCaseDataC1[i].pre_Pos_3Z = 0;
            newCaseDataC1[i].case_x_position = 0;
            newCaseDataC1[i].case_y_position = 0;
            newCaseDataC1[i].case_z_position = 0;
            newCaseDataC1[i].auto_generation = false;
          }
        }


      } else if (firstCasePallet == "pal2") {

        for (let i = 0; i < newCaseDataC2.length; i++) {
          if (newCaseDataC2[i] != null) {
            newCaseDataC2[i].rotation = -1;
            newCaseDataC2[i].position = "";
            newCaseDataC2[i].position_freezed = false;
            newCaseDataC2[i].offset_X_neg = false;
            newCaseDataC2[i].offset_Y_neg = false;
            newCaseDataC2[i].pre_Pos_X = 0;
            newCaseDataC2[i].pre_Pos_Y = 0;
            newCaseDataC2[i].pre_Pos_Z = 0;
            newCaseDataC2[i].pre_Pos_2X = 0;
            newCaseDataC2[i].pre_Pos_2Y = 0;
            newCaseDataC2[i].pre_Pos_2Z = 0;
            newCaseDataC2[i].pre_Pos_3X = 0;
            newCaseDataC2[i].pre_Pos_3Y = 0;
            newCaseDataC2[i].pre_Pos_3Z = 0;
            newCaseDataC2[i].case_x_position = 0;
            newCaseDataC2[i].case_y_position = 0;
            newCaseDataC2[i].case_z_position = 0;
            newCaseDataC2[i].auto_generation = false;

          }
        }

      } else {

        for (let i = 0; i < newCaseDataC1.length; i++) {
          if (newCaseDataC1[i] != null) {
            newCaseDataC1[i].rotation = -1;
            newCaseDataC1[i].position = "";
            newCaseDataC1[i].position_freezed = false;
            newCaseDataC1[i].offset_X_neg = false;
            newCaseDataC1[i].offset_Y_neg = false;
            newCaseDataC1[i].pre_Pos_X = 0;
            newCaseDataC1[i].pre_Pos_Y = 0;
            newCaseDataC1[i].pre_Pos_Z = 0;
            newCaseDataC1[i].pre_Pos_2X = 0;
            newCaseDataC1[i].pre_Pos_2Y = 0;
            newCaseDataC1[i].pre_Pos_2Z = 0;
            newCaseDataC1[i].pre_Pos_3X = 0;
            newCaseDataC1[i].pre_Pos_3Y = 0;
            newCaseDataC1[i].pre_Pos_3Z = 0;
            newCaseDataC1[i].case_x_position = 0;
            newCaseDataC1[i].case_y_position = 0;
            newCaseDataC1[i].case_z_position = 0;
            newCaseDataC1[i].auto_generation = false;
          }
        }

        for (let i = 0; i < newCaseDataC2.length; i++) {
          if (newCaseDataC2[i] != null) {
            newCaseDataC2[i].rotation = -1;
            newCaseDataC2[i].position = "";
            newCaseDataC2[i].position_freezed = false;
            newCaseDataC2[i].offset_X_neg = false;
            newCaseDataC2[i].offset_Y_neg = false;
            newCaseDataC2[i].pre_Pos_X = 0;
            newCaseDataC2[i].pre_Pos_Y = 0;
            newCaseDataC2[i].pre_Pos_Z = 0;
            newCaseDataC2[i].pre_Pos_2X = 0;
            newCaseDataC2[i].pre_Pos_2Y = 0;
            newCaseDataC2[i].pre_Pos_2Z = 0;
            newCaseDataC2[i].pre_Pos_3X = 0;
            newCaseDataC2[i].pre_Pos_3Y = 0;
            newCaseDataC2[i].pre_Pos_3Z = 0;
            newCaseDataC2[i].case_x_position = 0;
            newCaseDataC2[i].case_y_position = 0;
            newCaseDataC2[i].case_z_position = 0;
            newCaseDataC2[i].auto_generation = false;

          }
        }
      }


      this.casedataC1 = [...newCaseDataC1];
      this.casedataC2 = [...newCaseDataC2];

      // console.log("checking for savePrc calling:...firstcaseOriginchangeflushC ")

      this.savePrc();
    }

  }
  arrow_updates = (name, event) => {

    if (this.state.selectedOne == true) {

      if (name === "OriginPal1") {
        const selected = event.target != undefined || event.target != null ? event.target.value : event;

        if (this.state.pallete_Type == "EU 6: 800 x 600") {
          if (selected == "Upper Right Corner") {
            this.originPal1 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);

            this.UpperRightarrowx_pos = 425;
            this.UpperRightarrowy_pos = 61;
            this.state.arrowx = this.UpperRightarrowx_pos;
            this.state.arrowy = this.UpperRightarrowy_pos;

            this.setState({
              arrowx: this.UpperRightarrowx_pos,
              arrowy: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal1 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 330;
            this.UpperLeftarrowy_pos = 60;

            this.state.arrowx = this.upperLeftarrowx_pos;
            this.state.arrowy = this.UpperLeftarrowy_pos;

            this.setState({
              arrowx: this.upperLeftarrowx_pos,
              arrowy: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Lower Left Corner") {
            this.originPal1 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 332;
            this.LowerLeftarrowy_pos = 184;
            this.state.arrowx = this.LowerLeftarrowx_pos;
            this.state.arrowy = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx: this.LowerLeftarrowx_pos,
              arrowy: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal1 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 427;
            this.LowerRightarrowy_pos = 183;
            this.state.arrowx = this.LowerRightarrowx_pos;
            this.state.arrowy = this.LowerRightarrowy_pos;

            this.setState({
              arrowx: this.LowerRightarrowx_pos,
              arrowy: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
        }

        if (this.state.pallete_Type == "EU 1: 1200 x 800") {

          if (selected == "Upper Right Corner") {
            this.originPal1 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 444;
            this.UpperRightarrowy_pos = 28;
            this.state.arrowx = this.UpperRightarrowx_pos;
            this.state.arrowy = this.UpperRightarrowy_pos;

            this.setState({
              arrowx: this.UpperRightarrowx_pos,
              arrowy: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal1 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 316;
            this.UpperLeftarrowy_pos = 28;
            this.state.arrowx = this.upperLeftarrowx_pos;
            this.state.arrowy = this.UpperLeftarrowy_pos;


            this.setState({
              arrowx: this.upperLeftarrowx_pos,
              arrowy: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

          else if (selected == "Lower Left Corner") {
            this.originPal1 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 314;
            this.LowerLeftarrowy_pos = 220;
            this.state.arrowx = this.LowerLeftarrowx_pos;
            this.state.arrowy = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx: this.LowerLeftarrowx_pos,
              arrowy: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal1 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 440;
            this.LowerRightarrowy_pos = 219;
            this.state.arrowx = this.LowerRightarrowx_pos;
            this.state.arrowy = this.LowerRightarrowy_pos;


            this.setState({
              arrowx: this.LowerRightarrowx_pos,
              arrowy: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

        }

        if (this.state.pallete_Type == "EU 2: 1200 x 1000") {

          if (selected == "Upper Right Corner") {
            this.originPal1 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 458;
            this.UpperRightarrowy_pos = 25;
            this.state.arrowx = this.UpperRightarrowx_pos;
            this.state.arrowy = this.UpperRightarrowy_pos;

            this.setState({
              arrowx: this.UpperRightarrowx_pos,
              arrowy: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal1 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 297;
            this.UpperLeftarrowy_pos = 26;
            this.state.arrowx = this.upperLeftarrowx_pos;
            this.state.arrowy = this.UpperLeftarrowy_pos;

            this.setState({
              arrowx: this.upperLeftarrowx_pos,
              arrowy: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

          else if (selected == "Lower Left Corner") {
            this.originPal1 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 297;
            this.LowerLeftarrowy_pos = 220;
            this.state.arrowx = this.LowerLeftarrowx_pos;
            this.state.arrowy = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx: this.LowerLeftarrowx_pos,
              arrowy: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal1 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 459;
            this.LowerRightarrowy_pos = 218;
            this.state.arrowx = this.LowerRightarrowx_pos;
            this.state.arrowy = this.LowerRightarrowy_pos;

            this.setState({
              arrowx: this.LowerRightarrowx_pos,
              arrowy: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

        }

        if (this.state.pallete_Type == "US 2: 1067 x 1067") {

          if (selected == "Upper Right Corner") {
            this.originPal1 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 466;
            this.UpperRightarrowy_pos = 35;
            this.state.arrowx = this.UpperRightarrowx_pos;
            this.state.arrowy = this.UpperRightarrowy_pos;

            this.setState({
              arrowx: this.UpperRightarrowx_pos,
              arrowy: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal1 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 292;
            this.UpperLeftarrowy_pos = 36;
            this.state.arrowx = this.upperLeftarrowx_pos;
            this.state.arrowy = this.UpperLeftarrowy_pos;


            this.setState({
              arrowx: this.upperLeftarrowx_pos,
              arrowy: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

          else if (selected == "Lower Left Corner") {
            this.originPal1 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 292;
            this.LowerLeftarrowy_pos = 208;
            this.state.arrowx = this.LowerLeftarrowx_pos;
            this.state.arrowy = this.LowerLeftarrowy_pos;


            this.setState({
              arrowx: this.LowerLeftarrowx_pos,
              arrowy: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal1 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 464;
            this.LowerRightarrowy_pos = 209;

            this.state.arrowx = this.LowerRightarrowx_pos;
            this.state.arrowy = this.LowerRightarrowy_pos;

            this.setState({
              arrowx: this.LowerRightarrowx_pos,
              arrowy: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

        }

        if (this.state.pallete_Type == "US 1: 1219 x 1016 ") {

          if (selected == "Upper Right Corner") {
            this.originPal1 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 462;
            this.UpperRightarrowy_pos = 26;
            this.state.arrowx = this.UpperRightarrowx_pos;
            this.state.arrowy = this.UpperRightarrowy_pos;


            this.setState({
              arrowx: this.UpperRightarrowx_pos,
              arrowy: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal1 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 298;
            this.UpperLeftarrowy_pos = 24;

            this.state.arrowx = this.upperLeftarrowx_pos;
            this.state.arrowy = this.UpperLeftarrowy_pos;

            this.setState({
              arrowx: this.upperLeftarrowx_pos,
              arrowy: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

          else if (selected == "Lower Left Corner") {
            this.originPal1 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 296;
            this.LowerLeftarrowy_pos = 220;

            this.state.arrowx = this.LowerLeftarrowx_pos;
            this.state.arrowy = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx: this.LowerLeftarrowx_pos,
              arrowy: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal1 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 458;
            this.LowerRightarrowy_pos = 218;
            this.state.arrowx = this.LowerRightarrowx_pos;
            this.state.arrowy = this.LowerRightarrowy_pos;

            this.setState({
              arrowx: this.LowerRightarrowx_pos,
              arrowy: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
        }

        if (this.state.pallete_Type == "ASIA 1: 1100 x 1100") {

          if (selected == "Upper Right Corner") {
            this.originPal1 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 465;
            this.UpperRightarrowy_pos = 36;
            this.state.arrowx = this.UpperRightarrowx_pos;
            this.state.arrowy = this.UpperRightarrowy_pos;

            this.setState({
              arrowx: this.UpperRightarrowx_pos,
              arrowy: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal1 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 292;
            this.UpperLeftarrowy_pos = 36;
            this.state.arrowx = this.upperLeftarrowx_pos;
            this.state.arrowy = this.UpperLeftarrowy_pos;


            this.setState({
              arrowx: this.upperLeftarrowx_pos,
              arrowy: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

          else if (selected == "Lower Left Corner") {
            this.originPal1 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 289;
            this.LowerLeftarrowy_pos = 210;
            this.state.arrowx = this.LowerLeftarrowx_pos;
            this.state.arrowy = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx: this.LowerLeftarrowx_pos,
              arrowy: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal1 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 465;
            this.LowerRightarrowy_pos = 212;

            this.state.arrowx = this.LowerRightarrowx_pos;
            this.state.arrowy = this.LowerRightarrowy_pos;

            this.setState({
              arrowx: this.LowerRightarrowx_pos,
              arrowy: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
        }

        if (this.state.pallete_Type == "AU 1: 1165 x 1165") {

          if (selected == "Upper Right Corner") {
            this.originPal1 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 475;
            this.UpperRightarrowy_pos = 29;
            this.state.arrowx = this.UpperRightarrowx_pos;
            this.state.arrowy = this.UpperRightarrowy_pos;


            this.setState({
              arrowx: this.UpperRightarrowx_pos,
              arrowy: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal1 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 285;
            this.UpperLeftarrowy_pos = 28;
            this.state.arrowx = this.upperLeftarrowx_pos;
            this.state.arrowy = this.UpperLeftarrowy_pos;


            this.setState({
              arrowx: this.upperLeftarrowx_pos,
              arrowy: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }

          else if (selected == "Lower Left Corner") {
            this.originPal1 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 285;
            this.LowerLeftarrowy_pos = 216;
            this.state.arrowx = this.LowerLeftarrowx_pos;
            this.state.arrowy = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx: this.LowerLeftarrowx_pos,
              arrowy: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal1 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 472;
            this.LowerRightarrowy_pos = 216;
            this.state.arrowx = this.LowerRightarrowx_pos;
            this.state.arrowy = this.LowerRightarrowy_pos;

            this.setState({
              arrowx: this.LowerRightarrowx_pos,
              arrowy: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates this.state.arrowx = " + this.state.arrowx + " this.state.arrowy = " + this.state.arrowy);
          }
        }
      }
      this.arrow();
    }

    if (this.state.selectedTwo == true) {

      if (name === "OriginPal2") {
        const selected = event.target != undefined || event.target != null ? event.target.value : event;

        if (this.state.pallete_Type == "EU 6: 800 x 600") {

          if (selected == "Upper Right Corner") {
            this.originPal2 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);

            this.UpperRightarrowx_pos = 425;
            this.UpperRightarrowy_pos = 61;
            this.state.arrowx2 = this.UpperRightarrowx_pos;
            this.state.arrowy2 = this.UpperRightarrowy_pos;

            this.setState({
              arrowx2: this.UpperRightarrowx_pos,
              arrowy2: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal2 = "Upper Left Corner";
            this.upperLeftarrowx_pos = 330;
            this.UpperLeftarrowy_pos = 60;
            this.state.arrowx2 = this.upperLeftarrowx_pos;
            this.state.arrowy2 = this.UpperLeftarrowy_pos;

            this.setState({
              arrowx2: this.upperLeftarrowx_pos,
              arrowy2: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Left Corner") {
            this.originPal2 = "Lower Left Corner";
            this.LowerLeftarrowx_pos = 332;
            this.LowerLeftarrowy_pos = 184;
            this.state.arrowx2 = this.LowerLeftarrowx_pos;
            this.state.arrowy2 = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx2: this.LowerLeftarrowx_pos,
              arrowy2: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal2 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 427;
            this.LowerRightarrowy_pos = 183;

            this.state.arrowx2 = this.LowerRightarrowx_pos;
            this.state.arrowy2 = this.LowerRightarrowy_pos;

            this.setState({
              arrowx2: this.LowerRightarrowx_pos,
              arrowy2: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
        }

        if (this.state.pallete_Type == "EU 1: 1200 x 800") {

          if (selected == "Upper Right Corner") {
            this.originPal2 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 444;
            this.UpperRightarrowy_pos = 28;

            this.state.arrowx2 = this.UpperRightarrowx_pos;
            this.state.arrowy2 = this.UpperRightarrowy_pos;

            this.setState({
              arrowx2: this.UpperRightarrowx_pos,
              arrowy2: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal2 = "Upper Left Corner";
            this.upperLeftarrowx_pos = 316;
            this.UpperLeftarrowy_pos = 28;

            this.state.arrowx2 = this.upperLeftarrowx_pos;
            this.state.arrowy2 = this.UpperLeftarrowy_pos;

            this.setState({
              arrowx2: this.upperLeftarrowx_pos,
              arrowy2: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Left Corner") {
            this.originPal2 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 314;
            this.LowerLeftarrowy_pos = 220;

            this.state.arrowx2 = this.LowerLeftarrowx_pos;
            this.state.arrowy2 = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx2: this.LowerLeftarrowx_pos,
              arrowy2: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal2 = "Lower Right Corner";
            this.LowerRightarrowx_pos = 440;
            this.LowerRightarrowy_pos = 219;

            this.state.arrowx2 = this.LowerRightarrowx_pos;
            this.state.arrowy2 = this.LowerRightarrowy_pos;

            this.setState({
              arrowx2: this.LowerRightarrowx_pos,
              arrowy2: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
        }

        if (this.state.pallete_Type == "EU 2: 1200 x 1000") {

          if (selected == "Upper Right Corner") {
            this.originPal2 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);

            this.UpperRightarrowx_pos = 458;
            this.UpperRightarrowy_pos = 25;

            this.state.arrowx2 = this.UpperRightarrowx_pos;
            this.state.arrowy2 = this.UpperRightarrowy_pos;

            this.setState({
              arrowx2: this.UpperRightarrowx_pos,
              arrowy2: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal2 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 297;
            this.UpperLeftarrowy_pos = 26;

            this.state.arrowx2 = this.upperLeftarrowx_pos;
            this.state.arrowy2 = this.UpperLeftarrowy_pos;

            this.setState({
              arrowx2: this.upperLeftarrowx_pos,
              arrowy2: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Left Corner") {
            this.originPal2 = "Lower Left Corner";
            this.LowerLeftarrowx_pos = 297;
            this.LowerLeftarrowy_pos = 220;

            this.state.arrowx2 = this.LowerLeftarrowx_pos;
            this.state.arrowy2 = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx2: this.LowerLeftarrowx_pos,
              arrowy2: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal2 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 459;
            this.LowerRightarrowy_pos = 218;

            this.state.arrowx2 = this.LowerRightarrowx_pos;
            this.state.arrowy2 = this.LowerRightarrowy_pos;

            this.setState({
              arrowx2: this.LowerRightarrowx_pos,
              arrowy2: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }


        }

        if (this.state.pallete_Type == "US 2: 1067 x 1067") {

          if (selected == "Upper Right Corner") {
            this.originPal2 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);

            this.UpperRightarrowx_pos = 466;
            this.UpperRightarrowy_pos = 35;

            this.state.arrowx2 = this.UpperRightarrowx_pos;
            this.state.arrowy2 = this.UpperRightarrowy_pos;

            this.setState({
              arrowx2: this.UpperRightarrowx_pos,
              arrowy2: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal2 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 292;
            this.UpperLeftarrowy_pos = 36;

            this.state.arrowx2 = this.upperLeftarrowx_pos;
            this.state.arrowy2 = this.UpperLeftarrowy_pos;


            this.setState({
              arrowx2: this.upperLeftarrowx_pos,
              arrowy2: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Left Corner") {
            this.originPal2 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 292;
            this.LowerLeftarrowy_pos = 208;
            this.state.arrowx2 = this.LowerLeftarrowx_pos;
            this.state.arrowy2 = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx2: this.LowerLeftarrowx_pos,
              arrowy2: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal2 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 464;
            this.LowerRightarrowy_pos = 209;

            this.state.arrowx2 = this.LowerRightarrowx_pos;
            this.state.arrowy2 = this.LowerRightarrowy_pos;

            this.setState({
              arrowx2: this.LowerRightarrowx_pos,
              arrowy2: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }

        }

        if (this.state.pallete_Type == "US 1: 1219 x 1016 ") {

          if (selected == "Upper Right Corner") {
            this.originPal2 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 462;
            this.UpperRightarrowy_pos = 26;

            this.state.arrowx2 = this.UpperRightarrowx_pos;
            this.state.arrowy2 = this.UpperRightarrowy_pos;

            this.setState({
              arrowx2: this.UpperRightarrowx_pos,
              arrowy2: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal2 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 298;
            this.UpperLeftarrowy_pos = 24;

            this.state.arrowx2 = this.upperLeftarrowx_pos;
            this.state.arrowy2 = this.UpperLeftarrowy_pos;

            this.setState({
              arrowx2: this.upperLeftarrowx_pos,
              arrowy2: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Left Corner") {
            this.originPal2 = "Lower Left Corner";
            this.LowerLeftarrowx_pos = 296;
            this.LowerLeftarrowy_pos = 220;

            this.state.arrowx2 = this.LowerLeftarrowx_pos;
            this.state.arrowy2 = this.LowerLeftarrowy_pos;


            this.setState({
              arrowx2: this.LowerLeftarrowx_pos,
              arrowy2: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal2 = "Lower Right Corner";
            this.LowerRightarrowx_pos = 458;
            this.LowerRightarrowy_pos = 218;

            this.state.arrowx2 = this.LowerRightarrowx_pos;
            this.state.arrowy2 = this.LowerRightarrowy_pos;

            this.setState({
              arrowx2: this.LowerRightarrowx_pos,
              arrowy2: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }

        }

        if (this.state.pallete_Type == "ASIA 1: 1100 x 1100") {

          if (selected == "Upper Right Corner") {
            this.originPal2 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 465;
            this.UpperRightarrowy_pos = 36;
            this.state.arrowx2 = this.UpperRightarrowx_pos;
            this.state.arrowy2 = this.UpperRightarrowy_pos;

            this.setState({
              arrowx2: this.UpperRightarrowx_pos,
              arrowy2: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal2 = "Upper Left Corner";

            this.upperLeftarrowx_pos = 292;
            this.UpperLeftarrowy_pos = 36;

            this.state.arrowx2 = this.upperLeftarrowx_pos;
            this.state.arrowy2 = this.UpperLeftarrowy_pos;


            this.setState({
              arrowx2: this.upperLeftarrowx_pos,
              arrowy2: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Left Corner") {
            this.originPal2 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 289;
            this.LowerLeftarrowy_pos = 210;

            this.state.arrowx2 = this.LowerLeftarrowx_pos;
            this.state.arrowy2 = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx2: this.LowerLeftarrowx_pos,
              arrowy2: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal2 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 465;
            this.LowerRightarrowy_pos = 212;

            this.state.arrowx2 = this.LowerRightarrowx_pos;
            this.state.arrowy2 = this.LowerRightarrowy_pos;

            this.setState({
              arrowx2: this.LowerRightarrowx_pos,
              arrowy2: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
        }

        if (this.state.pallete_Type == "AU 1: 1165 x 1165") {

          if (selected == "Upper Right Corner") {
            this.originPal2 = "Upper Right Corner";
            console.log(" this.arcX " + this.arcX + " this.arrowy " + this.arrowy);
            this.UpperRightarrowx_pos = 475;
            this.UpperRightarrowy_pos = 29;

            this.state.arrowx2 = this.UpperRightarrowx_pos;
            this.state.arrowy2 = this.UpperRightarrowy_pos;

            this.setState({
              arrowx2: this.UpperRightarrowx_pos,
              arrowy2: this.UpperRightarrowy_pos,
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Upper Left Corner") {
            this.originPal2 = "Upper Left Corner";
            this.upperLeftarrowx_pos = 285;
            this.UpperLeftarrowy_pos = 28;

            this.state.arrowx2 = this.upperLeftarrowx_pos;
            this.state.arrowy2 = this.UpperLeftarrowy_pos;

            this.setState({
              arrowx2: this.upperLeftarrowx_pos,
              arrowy2: this.UpperLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Left Corner") {
            this.originPal2 = "Lower Left Corner";

            this.LowerLeftarrowx_pos = 285;
            this.LowerLeftarrowy_pos = 216;
            this.state.arrowx2 = this.LowerLeftarrowx_pos;
            this.state.arrowy2 = this.LowerLeftarrowy_pos;

            this.setState({
              arrowx2: this.LowerLeftarrowx_pos,
              arrowy2: this.LowerLeftarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }
          else if (selected == "Lower Right Corner") {
            this.originPal2 = "Lower Right Corner";

            this.LowerRightarrowx_pos = 472;
            this.LowerRightarrowy_pos = 216;
            this.state.arrowx2 = this.LowerRightarrowx_pos;
            this.state.arrowy2 = this.LowerRightarrowy_pos;


            this.setState({
              arrowx2: this.LowerRightarrowx_pos,
              arrowy2: this.LowerRightarrowy_pos
            })
            console.log("Inside arrowUpdates Pallet2 this.state.arrowx2 = " + this.state.arrowx2 + " this.state.arrowy2 = " + this.state.arrowy2);
          }

        }

      }
      this.arrow();
    }
  }

  circleForOne = () => {

    const selected = this.firstcase_pal1;
    if (selected == "Upper Right Corner") {
      this.callSchemafor1();
      this.firstcase_pal1 = "Upper Right Corner";
      this.state.arcX = this.p_xpos + this.P_width1;
      this.state.arcY = this.p_ypos;
    }

    else if (selected == "Upper Left Corner") {
      this.callSchemafor1();
      this.firstcase_pal1 = "Upper Left Corner";
      this.state.arcX = this.p_xpos;
      this.state.arcY = this.p_ypos;
    }

    else if (selected == "Lower Left Corner") {
      this.callSchemafor1();
      this.firstcase_pal1 = "Lower Left Corner";
      this.state.arcX = this.p_xpos;
      this.state.arcY = this.p_ypos + this.P_length1;

    }

    else if (selected == "Lower Right Corner") {
      this.callSchemafor1();
      this.firstcase_pal1 = "Lower Right Corner";
      // console.log(" this.state.arcX " + this.state.arcX + "this.state.arcY " + this.state.arcY);
      this.state.arcX = this.p_xpos + this.P_width1;
      this.state.arcY = this.p_ypos + this.P_length1;
      // console.log(" this.state.arcX =  " + this.state.arcX + "this.state.arcY " + this.state.arcY);
    }
  }

  circle = (name, event) => {

    // console.log("Inside Circle... event = " + event);

    if (this.state.panelname != 'panel5' && this.state.panelname != 'panel4') {

      if (this.state.selectedOne == true) {

        // console.log("circle " + event);

        if (name === "pal1") {
          const selected = event.target != undefined || event.target != null ? event.target.value : event;
          // console.log("selected value SelectedOne = " + selected);

          // this.state.firstCaseFreezCheckedA1 = true;
          // this.state.firstCaseFreezCheckedB1 = true;
          // this.state.firstCaseFreezCheckedC1 = true;

          // this.flushcasesSchemaA1 = true;
          // this.flushcasesSchemaB1 = true;
          // this.flushcasesSchemaC1 = true;
          // this.OffsetChangePrc(0, "", "flushNRPositions")

          if (selected == "Upper Right Corner") {
            this.callSchemafor1();
            this.firstcase_pal1 = "Upper Right Corner";
            this.state.arcX = this.p_xpos + this.P_width1;
            this.state.arcY = this.p_ypos;
          }
          else if (selected == "Upper Left Corner") {
            this.callSchemafor1();
            this.firstcase_pal1 = "Upper Left Corner";
            this.state.arcX = this.p_xpos;
            this.state.arcY = this.p_ypos;
          }

          else if (selected == "Lower Left Corner") {
            this.callSchemafor1();
            this.firstcase_pal1 = "Lower Left Corner";
            this.state.arcX = this.p_xpos;
            this.state.arcY = this.p_ypos + this.P_length1;

          }
          else if (selected == "Lower Right Corner") {
            this.callSchemafor1();
            this.firstcase_pal1 = "Lower Right Corner";
            // console.log(" this.state.arcX " + this.state.arcX + "this.state.arcY " + this.state.arcY);
            this.state.arcX = this.p_xpos + this.P_width1;
            this.state.arcY = this.p_ypos + this.P_length1;
            // console.log(" this.state.arcX =  " + this.state.arcX + "this.state.arcY " + this.state.arcY);
          }
          // this.circle_Draw();
        }
      }
      if (this.state.selectedTwo == true) {
        if (name === "pal2") {
          const selected = event.target != undefined || event.target != null ? event.target.value : event;
          // console.log("selected value SelectedTwo = " + selected);

          // this.state.firstCaseFreezCheckedA2 = true;
          // this.state.firstCaseFreezCheckedB2 = true;
          // this.state.firstCaseFreezCheckedC2 = true;

          //  this.flushcasesSchemaA2 = true;
          //  this.flushcasesSchemaB2 = true;
          //  this.flushcasesSchemaC2 = true;
          //  this.OffsetChangePrc(0,"","flushNRPositions")

          if (selected == "Upper Right Corner") {
            this.callSchemafor2();

            this.firstcase_pal2 = "Upper Right Corner";
            this.state.arcX2 = this.p_xpos + this.P_width1;
            this.state.arcY2 = this.p_ypos;
          }

          else if (selected == "Upper Left Corner") {
            this.callSchemafor2();

            this.firstcase_pal2 = "Upper Left Corner";
            this.state.arcX2 = this.p_xpos;
            this.state.arcY2 = this.p_ypos;
          }
          else if (selected == "Lower Left Corner") {
            this.callSchemafor2();

            this.firstcase_pal2 = "Lower Left Corner";
            this.state.arcX2 = this.p_xpos;
            this.state.arcY2 = this.p_ypos + this.P_length1;
          }
          else if (selected == "Lower Right Corner") {
            this.callSchemafor2();

            this.firstcase_pal2 = "Lower Right Corner";
            this.state.arcX2 = this.p_xpos + this.P_width1;
            this.state.arcY2 = this.p_ypos + this.P_length1;
          }
        }
      }
    }
  }

  circle1 = () => {

    // console.log("Circle1 Called");
    const selected = this.firstcase_pal2;
    // console.log("selected value inside circle1 = " + selected);

    if (selected == "Upper Right Corner") {
      this.callSchemafor2();
      this.firstcase_pal2 = "Upper Right Corner";
      this.state.arcX2 = this.p_xpos + this.P_width1;
      this.state.arcY2 = this.p_ypos;
    }

    else if (selected == "Upper Left Corner") {
      this.callSchemafor2();
      this.firstcase_pal2 = "Upper Left Corner";
      this.state.arcX2 = this.p_xpos;
      this.state.arcY2 = this.p_ypos;
    }

    else if (selected == "Lower Left Corner") {
      this.callSchemafor2();
      this.firstcase_pal2 = "Lower Left Corner";
      this.state.arcX2 = this.p_xpos;
      this.state.arcY2 = this.p_ypos + this.P_length1;
    }

    else if (selected == "Lower Right Corner") {
      this.callSchemafor2();
      this.firstcase_pal2 = "Lower Right Corner";
      this.state.arcX2 = this.p_xpos + this.P_width1;
      this.state.arcY2 = this.p_ypos + this.P_length1;
    }
  }



  getSortOrder = (prop) => {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  }


  handleValueChangePrepos = ({ name, value }, e) => {

    let pallet_no = 1;
    let layers = [];
    if (this.state.selectedOne) {
      pallet_no = 1;
      // console.log("checking for case datachange inside handlevaluechangePrePos:::")
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = [...this.casedataA1];
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = [...this.casedataB1];
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = [...this.casedataC1];
      }
    }
    else if (this.state.selectedTwo) {
      // console.log("checking for case datachange inside handlevaluechangePrePos2:::")
      pallet_no = 2;
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = [...this.casedataA2];
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = [...this.casedataB2];
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = [...this.casedataC2];
      }
    }
    // const layers = this.state.layer_data;
    if (this.casedata.length === 0) {
      return;
    }
    else {
      const tempArr = this.casedata.map((item) => {
        // console.log("item.cases inside handleValueChangePrepos = " + item.cases);
        if (item.cases === "Case " + value) {
          if ((name === "pre_Pos_X")) {
            let shouldChangeon_negValue = item.offset_X_neg ? e.target.value[0] !== "-" ? false : true : true;

            if (shouldChangeon_negValue) {
              let prePosXValue = e.target.value;
              this.preposx = e.target.value;


              let position = this.casedata[value - 1].position;
              let position_freezed = this.casedata[value - 1].position_freezed;
              let x_negCheckbox = this.casedata[value - 1].offset_X_neg;

              if (!position_freezed) {

                if (position != "") {

                  let NrValue = position.split(" ")[1];
                  let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x - this.map(this.casedata[value - 1].pre_Pos_X, 0, 1400, 0, 222);  // need to change minus prePos x offset
                  let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(prePosXValue, 0, 1400, 0, 222);  // need to change minus prePos y offset
                  let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
                  let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

                  let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;
                  let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;

                  let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
                  let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;


                  if (prePosXValue > 0) {
                    if (yPos < WorkingAreaYpos) {

                      let { t } = this.props;

                      toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                      let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y)), 0, -35.21, 0, 222);
                      prePosXValue = Math.floor(newMapValue);

                      x_negCheckbox = false;
                    }
                  }
                  else if (prePosXValue < 0) {

                    if ((yPos + h) > (WorkingAreaYpos + WorkingArealength)) {

                      let { t } = this.props;

                      toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                      let newMapValue = this.map(((WorkingAreaYpos + WorkingArealength) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y + h)), 0, -35.19, 0, 222);
                      prePosXValue = Math.floor(newMapValue);
                      x_negCheckbox = false;
                    }
                  }
                }
              }

              //
              this.layer_sequence = value;
              return {
                ...item,
                pre_Pos_X: prePosXValue,
                cases: "Case " + value,
                palletid: this.state.palletid,
                offset_X_neg: x_negCheckbox
              }
            }

          }
          else if ((name === "pre_Pos_Y")) {
            let shouldChangeon_negValue = item.offset_Y_neg ? e.target.value[0] !== "-" ? false : true : true;

            if (shouldChangeon_negValue) {
              let prePosYValue = e.target.value;
              this.preposy = e.target.value;

              let position = this.casedata[value - 1].position;
              let position_freezed = this.casedata[value - 1].position_freezed;
              let y_negCheckbox = this.casedata[value - 1].offset_Y_neg;


              if (!position_freezed) {
                if (position != "") {

                  let NrValue = position.split(" ")[1];

                  let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(prePosYValue, 0, 1400, 0, 222);  // need to change minus prePos x offset
                  let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(this.casedata[value - 1].pre_Pos_Y, 0, 1400, 0, 222);  // need to change minus prePos y offset


                  let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
                  let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

                  let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;
                  let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;

                  let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
                  let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;

                  if (prePosYValue < 0) {
                    if (xPos < WorkingAreaXpos) {
                      let { t } = this.props;

                      toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                      let newMapValue = this.map(((WorkingAreaXpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x)), 0, 35.21, 0, 222);
                      prePosYValue = Math.floor(newMapValue);

                      y_negCheckbox = false;

                    }
                  }
                  else if (prePosYValue > 0) {
                    let { t } = this.props;

                    if ((xPos + w) > (WorkingAreaXpos + WorkingAreawidth)) {
                      toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                      let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + w)), 0, 35.19, 0, 222);
                      prePosYValue = Math.floor(newMapValue);

                      y_negCheckbox = false;

                    }
                  }
                }
              }
              this.layer_sequence = value;
              return {
                ...item,
                pre_Pos_Y: prePosYValue,
                cases: "Case " + value,
                palletid: this.state.palletid,
                offset_Y_neg: y_negCheckbox
              }
            }
          }
          else if ((name === "pre_Pos_Z")) {
            let shouldChangeon_negValue = item.offset_Z_neg ? e.target.value === "" ? false : true : true;

            if (shouldChangeon_negValue) {
              const prePosZValue = e.target.value;
              this.preposz = e.target.value;

              this.layer_sequence = value;
              return {
                ...item,
                pre_Pos_Z: prePosZValue,
                cases: "Case " + value,
                palletid: this.state.palletid
              }
            }

          }

          else if ((name === "pre_Pos_2X")) {

            let shouldChangeon_negValue = item.offset_X_neg ? e.target.value[0] !== "-" ? false : true : true;

            if (shouldChangeon_negValue) {

              let prePos2XValue = e.target.value;
              let position = this.casedata[value - 1].position;
              this.offset_2ndPrePos_X = e.target.value;
              let x_negCheckbox = this.casedata[value - 1].offset_X_neg;

              if (position != "") {

                let NrValue = position.split(" ")[1];
                let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(prePos2XValue, 0, 1400, 0, 222);  // need to change minus prePos y offset
                let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

                let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;
                let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;


                if (prePos2XValue > 0) {
                  if (yPos < WorkingAreaYpos) {

                    let { t } = this.props;

                    toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                    let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y)), 0, -35.21, 0, 222);
                    prePos2XValue = Math.floor(newMapValue);

                    x_negCheckbox = false;
                  }
                }
                else if (prePos2XValue < 0) {

                  if ((yPos + h) > (WorkingAreaYpos + WorkingArealength)) {

                    let { t } = this.props;

                    toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                    let newMapValue = this.map(((WorkingAreaYpos + WorkingArealength) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y + h)), 0, -35.19, 0, 222);
                    prePos2XValue = Math.floor(newMapValue);
                    x_negCheckbox = false;
                  }
                }
              }

              return {
                ...item,
                pre_Pos_2X: prePos2XValue
              }
            }
          }
          else if ((name === "pre_Pos_2Y")) {

            let shouldChangeon_negValue = item.offset_Y_neg ? e.target.value[0] !== "-" ? false : true : true;

            if (shouldChangeon_negValue) {

              let prePos2YValue = e.target.value;
              let position = this.casedata[value - 1].position;
              this.offset_2ndPrePos_Y = e.target.value;
              let y_negCheckbox = this.casedata[value - 1].offset_Y_neg;

              console.log("Inside pre_Pos_2Y this.offset_2ndPrePos_Y = ", this.offset_2ndPrePos_Y);


            if (position != "") {

              let NrValue = position.split(" ")[1];

              let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(prePos2YValue, 0, 1400, 0, 222);  // need to change minus prePos x offset

              let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;

              let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
              let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;

              if (prePos2YValue < 0) {
                if (xPos < WorkingAreaXpos) {
                  let { t } = this.props;

                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x)), 0, 35.21, 0, 222);
                  prePos2YValue = Math.floor(newMapValue);

                    y_negCheckbox = false;

                }
              }
              else if (prePos2YValue > 0) {
                let { t } = this.props;

                if ((xPos + w) > (WorkingAreaXpos + WorkingAreawidth)) {
                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + w)), 0, 35.19, 0, 222);
                  prePos2YValue = Math.floor(newMapValue);

                    y_negCheckbox = false;

                }
              }
            }



              return {
                ...item,
                pre_Pos_2Y: prePos2YValue
              }
            }
          }
          else if ((name === "pre_Pos_2Z")) {
            this.offset_2ndPrePos_Z = e.target.value;
            console.log("Inside pre_Pos_2Z this.offset_2ndPrePos_Z = ", this.offset_2ndPrePos_Z);
            return {
              ...item,
              pre_Pos_2Z: this.offset_2ndPrePos_Z
            }
          }

          else if ((name === "pre_Pos_3X")) {

            let shouldChangeon_negValue = item.offset_X_neg ? e.target.value[0] !== "-" ? false : true : true;

            if (shouldChangeon_negValue) {

              let prePos3XValue = e.target.value;
              let position = this.casedata[value - 1].position;
              this.offset_3rdPrePos_X = e.target.value;
              let x_negCheckbox = this.casedata[value - 1].offset_X_neg;



            if (position != "") {

              let NrValue = position.split(" ")[1];
              let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(prePos3XValue, 0, 1400, 0, 222);  // need to change minus prePos y offset
              let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

              let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;
              let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;


              if (prePos3XValue > 0) {
                if (yPos < WorkingAreaYpos) {

                  let { t } = this.props;

                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y)), 0, -35.21, 0, 222);
                  prePos3XValue = Math.floor(newMapValue);

                    x_negCheckbox = false;
                  }
                }
                else if (prePos3XValue < 0) {

                if ((yPos + h) > (WorkingAreaYpos + WorkingArealength)) {

                  let { t } = this.props;

                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                    let newMapValue = this.map(((WorkingAreaYpos + WorkingArealength) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y + h)), 0, -35.19, 0, 222);
                    prePos3XValue = Math.floor(newMapValue);
                    x_negCheckbox = false;
                  }
                }
              }


              return {
                ...item,
                pre_Pos_3X: prePos3XValue
              }
            }
          }
          else if ((name === "pre_Pos_3Y")) {

            let shouldChangeon_negValue = item.offset_Y_neg ? e.target.value[0] !== "-" ? false : true : true;

            if (shouldChangeon_negValue) {

              let prePos3YValue = e.target.value;
              let position = this.casedata[value - 1].position;
              this.offset_3rdPrePos_Y = e.target.value;
              let y_negCheckbox = this.casedata[value - 1].offset_Y_neg;


            if (position != "") {

              let NrValue = position.split(" ")[1];

              let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(prePos3YValue, 0, 1400, 0, 222);  // need to change minus prePos x offset

              let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;

              let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
              let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;

              if (prePos3YValue < 0) {
                if (xPos < WorkingAreaXpos) {
                  let { t } = this.props;

                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x)), 0, 35.21, 0, 222);
                  prePos3YValue = Math.floor(newMapValue);

                    y_negCheckbox = false;

                }
              }
              else if (prePos3YValue > 0) {
                let { t } = this.props;

                if ((xPos + w) > (WorkingAreaXpos + WorkingAreawidth)) {
                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + w)), 0, 35.19, 0, 222);
                  prePos3YValue = Math.floor(newMapValue);

                    y_negCheckbox = false;

                }
              }
            }


              return {
                ...item,
                pre_Pos_3Y: prePos3YValue
              }
            }
          }
          else if ((name === "pre_Pos_3Z")) {
            this.offset_3rdPrePos_Z = e.target.value;
            console.log("Inside pre_Pos_3Z this.offset_3rdPrePos_Z = ", this.offset_3rdPrePos_Z);
            return {
              ...item,
              pre_Pos_3Z: this.offset_3rdPrePos_Z
            }
          }

        }

        return item;
      });

      this.casedata = [...tempArr];

      if (this.state.selectedOne) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA1 = [...this.casedata];
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB1 = [...this.casedata];
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC1 = [...this.casedata];
        }
      }
      else if (this.state.selectedTwo) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA2 = [...this.casedata];
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB2 = [...this.casedata];
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC2 = [...this.casedata];
        }
      }

      // console.log("Sorted arr", arr);
      this.setState({
        case_data: [...tempArr]
      });
      console.log("Inside handleValueChangePrepos this.state.case_data = ", this.state.case_data);
      this.showOnFieldsClickGreenRect((value - 1), [...tempArr]);
      this.showOnFieldsClickOrangeRect((value - 1), [...tempArr]);
      this.showOnFieldsClickRedRect((value - 1), [...tempArr]);
      this.showOnFieldsClickAllRect((value - 1), [...tempArr]);

      // console.log("update layer data inside handleSelectionLayerPallet =", this.state.layer_data);
    }

  }

  findingNrpositionFirstCase = (originXpos, originYpos) => {

    let sDistX;
    let sDistY;
    let distance;
    let tempShortestDistanceCase;
    let foundNrPostforFirstCase;
    let firstCaseOrigin;

    let uniqueXcoOrdinates = [];

    if (this.state.selectedOne) {
      firstCaseOrigin = this.firstcase_pal1;
    } else if (this.state.selectedTwo) {
      firstCaseOrigin = this.firstcase_pal2;
    }

    for (let i = 0; i < this.state.CasesXYfotGreenRectPRC.length; i++) {
      if (firstCaseOrigin == "Upper Right Corner") {
        sDistX = originXpos - (this.state.CasesXYfotGreenRectPRC[i].x + this.state.CasesXYfotGreenRectPRC[i].w);
        sDistY = originYpos - this.state.CasesXYfotGreenRectPRC[i].y;

        if (!uniqueXcoOrdinates.includes(this.state.CasesXYfotGreenRectPRC[i].y)) {
          uniqueXcoOrdinates.push(this.state.CasesXYfotGreenRectPRC[i].y)
        }
      }
      if (firstCaseOrigin == "Upper Left Corner") {
        sDistX = originXpos - this.state.CasesXYfotGreenRectPRC[i].x;
        sDistY = originYpos - this.state.CasesXYfotGreenRectPRC[i].y;

        if (!uniqueXcoOrdinates.includes(this.state.CasesXYfotGreenRectPRC[i].y)) {
          uniqueXcoOrdinates.push(this.state.CasesXYfotGreenRectPRC[i].y)
        }

      }
      if (firstCaseOrigin == "Lower Left Corner") {
        sDistX = originXpos - this.state.CasesXYfotGreenRectPRC[i].x;
        sDistY = originYpos - (this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].h);

        if (this.state.CasesXYfotGreenRectPRC[i].orientation == "Width") {
          if (!uniqueXcoOrdinates.includes((this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].h))) {
            uniqueXcoOrdinates.push((this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].h))
          }

        } else if (this.state.CasesXYfotGreenRectPRC[i].orientation == "Length") {
          if (!uniqueXcoOrdinates.includes((this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].w))) {
            uniqueXcoOrdinates.push((this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].w))
          }

        }
      }
      if (firstCaseOrigin == "Lower Right Corner") {
        sDistX = originXpos - (this.state.CasesXYfotGreenRectPRC[i].x + this.state.CasesXYfotGreenRectPRC[i].w);
        sDistY = originYpos - (this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].h);

        if (this.state.CasesXYfotGreenRectPRC[i].orientation == "Width") {
          if (!uniqueXcoOrdinates.includes((this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].h))) {
            uniqueXcoOrdinates.push((this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].h))
          }

        } else if (this.state.CasesXYfotGreenRectPRC[i].orientation == "Length") {
          if (!uniqueXcoOrdinates.includes((this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].w))) {
            uniqueXcoOrdinates.push((this.state.CasesXYfotGreenRectPRC[i].y + this.state.CasesXYfotGreenRectPRC[i].w))
          }

        }
      }
      distance = Math.sqrt(sDistX * sDistX + sDistY * sDistY);


      this.autoGenerateCasePositionsDistance.push([i + 1, distance, this.state.CasesXYfotGreenRectPRC[i].y, this.state.CasesXYfotGreenRectPRC[i].x, this.state.CasesXYfotGreenRectPRC[i].h, this.state.CasesXYfotGreenRectPRC[i].w, this.state.CasesXYfotGreenRectPRC[i].orientation]); // y co.ordinates is x in application

      // console.log("finding distance: " + distance + " ----index: " + (i + 1))

      if (tempShortestDistanceCase == undefined || distance < tempShortestDistanceCase) {
        tempShortestDistanceCase = distance;
        foundNrPostforFirstCase = i;
      }

    }
    if (firstCaseOrigin == "Upper Right Corner" || firstCaseOrigin == "Upper Left Corner") {
      uniqueXcoOrdinates = uniqueXcoOrdinates.sort(function (a, b) { return a - b })

    } else if (firstCaseOrigin == "Lower Right Corner" || firstCaseOrigin == "Lower Left Corner") {
      uniqueXcoOrdinates = uniqueXcoOrdinates.sort(function (a, b) { return b - a })

    }

    // this.autoGenerateCasePositionsDistance = this.autoGenerateCasePositionsDistance.sort((function (index) {
    //   return function (a, b) {
    //     return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
    //   };
    // })(1)); // 1 is the index, (sorts the case distance in assending order)
    let temp_new_autoGenerateCasePositionsDistance = [];

    for (let i = 0; i < uniqueXcoOrdinates.length; i++) {
      for (let j = 0; j < this.autoGenerateCasePositionsDistance.length; j++) {
        let comp_temp_value = this.autoGenerateCasePositionsDistance[j][2];
        if (firstCaseOrigin == "Lower Right Corner" || firstCaseOrigin == "Lower Left Corner") {
          if (this.autoGenerateCasePositionsDistance[j][6] == "Width") {
            comp_temp_value = (this.autoGenerateCasePositionsDistance[j][2] + this.autoGenerateCasePositionsDistance[j][4]);
          } else if (this.autoGenerateCasePositionsDistance[j][6] == "Length") {
            comp_temp_value = (this.autoGenerateCasePositionsDistance[j][2] + this.autoGenerateCasePositionsDistance[j][5]);
          }
        }
        if (uniqueXcoOrdinates[i] == comp_temp_value) {

          temp_new_autoGenerateCasePositionsDistance.push(this.autoGenerateCasePositionsDistance[j])

        }
      }
    }
    // console.log("checking includes autogenerate" + temp_new_autoGenerateCasePositionsDistance)
    for (let k = 0; k < temp_new_autoGenerateCasePositionsDistance.length; k++) {
      for (let l = k; l < temp_new_autoGenerateCasePositionsDistance.length; l++) {
        if (temp_new_autoGenerateCasePositionsDistance[k][2] == temp_new_autoGenerateCasePositionsDistance[l][2]) {
          if (firstCaseOrigin == "Upper Right Corner" || firstCaseOrigin == "Lower Right Corner") {
            if (temp_new_autoGenerateCasePositionsDistance[k][3] < temp_new_autoGenerateCasePositionsDistance[l][3]) { //desending
              let Temp = temp_new_autoGenerateCasePositionsDistance[k];
              temp_new_autoGenerateCasePositionsDistance[k] = temp_new_autoGenerateCasePositionsDistance[l];
              temp_new_autoGenerateCasePositionsDistance[l] = Temp;
            }

          } else if (firstCaseOrigin == "Upper Left Corner" || firstCaseOrigin == "Lower Left Corner") {
            if (temp_new_autoGenerateCasePositionsDistance[k][3] > temp_new_autoGenerateCasePositionsDistance[l][3]) { //assending
              let Temp = temp_new_autoGenerateCasePositionsDistance[k];
              temp_new_autoGenerateCasePositionsDistance[k] = temp_new_autoGenerateCasePositionsDistance[l];
              temp_new_autoGenerateCasePositionsDistance[l] = Temp;
            }
          }
        }
      }
    }

    this.autoGenerateCasePositionsDistance = temp_new_autoGenerateCasePositionsDistance;

    // console.log("uniqueXcoOrdinates:.......  " + uniqueXcoOrdinates)
    // console.log("my autoGenerateCasePositionsDistance [[index,distance,x co-ord], [index,distance,x co-ord]]: " + this.autoGenerateCasePositionsDistance)

    // return foundNrPostforFirstCase;
    return (this.autoGenerateCasePositionsDistance[0][0] - 1);
  }

  generateOriginFirstCase = () => {
    this.autoGenerateCasePositionsDistance = [];
    const PrcPalletRectInfo = { x: this.p_xpos, y: this.p_ypos, w: this.P_width1, h: this.P_length1 };
    let originXpos;
    let originYpos;

    if (this.state.selectedOne) {

      if (this.firstcase_pal1 == "Upper Right Corner") {
        originXpos = PrcPalletRectInfo.x + PrcPalletRectInfo.w;
        originYpos = PrcPalletRectInfo.y;

        return this.findingNrpositionFirstCase(originXpos, originYpos);
      }
      if (this.firstcase_pal1 == "Upper Left Corner") {
        // console.log("algo for firstCase: Upper Left Corner: ")

        originXpos = PrcPalletRectInfo.x;
        originYpos = PrcPalletRectInfo.y;

        return this.findingNrpositionFirstCase(originXpos, originYpos);

      }
      if (this.firstcase_pal1 == "Lower Left Corner") {
        originXpos = PrcPalletRectInfo.x;
        originYpos = PrcPalletRectInfo.y + PrcPalletRectInfo.h;

        return this.findingNrpositionFirstCase(originXpos, originYpos);
      }
      if (this.firstcase_pal1 == "Lower Right Corner") {
        originXpos = PrcPalletRectInfo.x + PrcPalletRectInfo.w;
        originYpos = PrcPalletRectInfo.y + PrcPalletRectInfo.h;

        return this.findingNrpositionFirstCase(originXpos, originYpos);
      }

    } else if (this.state.selectedTwo) {

      if (this.firstcase_pal2 == "Upper Right Corner") {
        originXpos = PrcPalletRectInfo.x + PrcPalletRectInfo.w;
        originYpos = PrcPalletRectInfo.y;

        return this.findingNrpositionFirstCase(originXpos, originYpos);
      }
      if (this.firstcase_pal2 == "Upper Left Corner") {
        originXpos = PrcPalletRectInfo.x;
        originYpos = PrcPalletRectInfo.y;

        return this.findingNrpositionFirstCase(originXpos, originYpos);
      }
      if (this.firstcase_pal2 == "Lower Left Corner") {
        originXpos = PrcPalletRectInfo.x;
        originYpos = PrcPalletRectInfo.y + PrcPalletRectInfo.h;

        return this.findingNrpositionFirstCase(originXpos, originYpos);
      }
      if (this.firstcase_pal2 == "Lower Right Corner") {
        originXpos = PrcPalletRectInfo.x + PrcPalletRectInfo.w;
        originYpos = PrcPalletRectInfo.y + PrcPalletRectInfo.h;

        return this.findingNrpositionFirstCase(originXpos, originYpos);
      }

    }

    // console.log("algo for firstCase: foundNrPostforFirstCase: " + foundNrPostforFirstCase)
    // return foundNrPostforFirstCase;
  }

  handleAutoGeneratePrepos = ({ name }) => event => {

    this.setState({
      autoGenerateRadioButton: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          autoGenerateRadioButton: false,
        })
      }, 1000)
    })


    let pallet_no = 1;
    let layers = [];

    let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
    let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;

    let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;
    let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;


    this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    if (this.state.selectedOne) {
      pallet_no = 1;
      // console.log("checking for case datachange inside handleautoGenerateprepos1:::")
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = [...this.casedataA1];
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = [...this.casedataB1];
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = [...this.casedataC1];
      }
    }
    else if (this.state.selectedTwo) {
      // console.log("checking for case datachange inside handleautoGenerateprepos2:::")
      pallet_no = 2;
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = [...this.casedataA2];
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = [...this.casedataB2];
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = [...this.casedataC2];
      }
    }
    // const layers = this.state.layer_data;
    if (this.casedata.length === 0) {
      return;
    }
    else {
      let temproryNrPosArr = []
      this.freezNRarray = [];

      const tempArr = this.casedata.map((item, index) => {

        let tempPre_Pos_X;
        let tempPre_Pos_Y;
        let tempPre_Pos_Z = this.state.selectedOne ? this.state.setnumberz : this.state.setnumberz2;

        let tempPre_Pos_2X;
        let tempPre_Pos_2Y;
        let tempPre_Pos_2Z = this.state.selectedOne ? this.state.S_set_2ndPrePos_Z : this.state.S_set_2ndPrePos_Z2;

        let tempPre_Pos_3X;
        let tempPre_Pos_3Y;
        let tempPre_Pos_3Z = this.state.selectedOne ? this.state.S_set_3rdPrePos_Z : this.state.S_set_3rdPrePos_Z2;

        let temp_offset_X_neg = false;
        let temp_offset_Y_neg = false;

        // console.log("Clicked Autogeneration For X this.setpreposx = " + this.setpreposx + " WorkingAreaXpos = " + WorkingAreaXpos);
        // console.log("Clicked Autogeneration For Y this.setpreposy = " + this.setpreposy + " WorkingAreawidth = " + WorkingAreawidth);
        if (this.state.selectedOne) {
          if (this.firstcase_pal1 == "Upper Right Corner") {
            temp_offset_X_neg = true;
            temp_offset_Y_neg = true;

            tempPre_Pos_X = this.state.selectedOne ? -(this.state.setnumberx) : -(this.state.setnumberx2);
            tempPre_Pos_Y = this.state.selectedOne ? -(this.state.setnumbery) : -(this.state.setnumbery2);

            tempPre_Pos_2X = this.state.selectedOne ? -(this.state.S_set_2ndPrePos_X) : -(this.state.S_set_2ndPrePos_X2);
            tempPre_Pos_2Y = this.state.selectedOne ? -(this.state.S_set_2ndPrePos_Y) : -(this.state.S_set_2ndPrePos_Y2);

            tempPre_Pos_3X = this.state.selectedOne ? -(this.state.S_set_3rdPrePos_X) : -(this.state.S_set_3rdPrePos_X2);
            tempPre_Pos_3Y = this.state.selectedOne ? -(this.state.S_set_3rdPrePos_Y) : -(this.state.S_set_3rdPrePos_Y2);

          } else if (this.firstcase_pal1 == "Upper Left Corner") {

            temp_offset_X_neg = true;
            temp_offset_Y_neg = false;

            tempPre_Pos_X = this.state.selectedOne ? -(this.state.setnumberx) : -(this.state.setnumberx2);
            tempPre_Pos_Y = this.state.selectedOne ? this.state.setnumbery : this.state.setnumbery2;

            tempPre_Pos_2X = this.state.selectedOne ? -(this.state.S_set_2ndPrePos_X) : -(this.state.S_set_2ndPrePos_X2);
            tempPre_Pos_2Y = this.state.selectedOne ? this.state.S_set_2ndPrePos_Y : this.state.S_set_2ndPrePos_Y2;

            tempPre_Pos_3X = this.state.selectedOne ? -(this.state.S_set_3rdPrePos_X) : -(this.state.S_set_3rdPrePos_X2);
            tempPre_Pos_3Y = this.state.selectedOne ? this.state.S_set_3rdPrePos_Y : this.state.S_set_3rdPrePos_Y2;


          } else if (this.firstcase_pal1 == "Lower Left Corner") {
            temp_offset_X_neg = false;
            temp_offset_Y_neg = false;

            tempPre_Pos_X = this.state.selectedOne ? this.state.setnumberx : this.state.setnumberx2;
            tempPre_Pos_Y = this.state.selectedOne ? this.state.setnumbery : this.state.setnumbery2;

            tempPre_Pos_2X = this.state.selectedOne ? this.state.S_set_2ndPrePos_X : this.state.S_set_2ndPrePos_X2;
            tempPre_Pos_2Y = this.state.selectedOne ? this.state.S_set_2ndPrePos_Y : this.state.S_set_2ndPrePos_Y2;

            tempPre_Pos_3X = this.state.selectedOne ? this.state.S_set_3rdPrePos_X : this.state.S_set_3rdPrePos_X2;
            tempPre_Pos_3Y = this.state.selectedOne ? this.state.S_set_3rdPrePos_Y : this.state.S_set_3rdPrePos_Y2;

          } else if (this.firstcase_pal1 == "Lower Right Corner") {
            temp_offset_X_neg = false;
            temp_offset_Y_neg = true;
            //
            tempPre_Pos_X = this.state.selectedOne ? this.state.setnumberx : this.state.setnumberx2;
            tempPre_Pos_Y = this.state.selectedOne ? -(this.state.setnumbery) : -(this.state.setnumbery2);

            tempPre_Pos_2X = this.state.selectedOne ? this.state.S_set_2ndPrePos_X : this.state.S_set_2ndPrePos_X2;
            tempPre_Pos_2Y = this.state.selectedOne ? -(this.state.S_set_2ndPrePos_Y) : -(this.state.S_set_2ndPrePos_Y2);

            tempPre_Pos_3X = this.state.selectedOne ? this.state.S_set_3rdPrePos_X : this.state.S_set_3rdPrePos_X2;
            tempPre_Pos_3Y = this.state.selectedOne ? -(this.state.S_set_3rdPrePos_Y) : -(this.state.S_set_3rdPrePos_Y2);

          }
        } else if (this.state.selectedTwo) {
          if (this.firstcase_pal2 == "Upper Right Corner") {
            temp_offset_X_neg = true;
            temp_offset_Y_neg = true;
            //
            tempPre_Pos_X = this.state.selectedOne ? -(this.state.setnumberx) : -(this.state.setnumberx2);
            tempPre_Pos_Y = this.state.selectedOne ? -(this.state.setnumbery) : -(this.state.setnumbery2);

            tempPre_Pos_2X = this.state.selectedOne ? -(this.state.S_set_2ndPrePos_X) : -(this.state.S_set_2ndPrePos_X2);
            tempPre_Pos_2Y = this.state.selectedOne ? -(this.state.S_set_2ndPrePos_Y) : -(this.state.S_set_2ndPrePos_Y2);

            tempPre_Pos_3X = this.state.selectedOne ? -(this.state.S_set_3rdPrePos_X) : -(this.state.S_set_3rdPrePos_X2);
            tempPre_Pos_3Y = this.state.selectedOne ? -(this.state.S_set_3rdPrePos_Y) : -(this.state.S_set_3rdPrePos_Y2);

          } else if (this.firstcase_pal2 == "Upper Left Corner") {
            temp_offset_X_neg = true;
            temp_offset_Y_neg = false;
            //
            tempPre_Pos_X = this.state.selectedOne ? -(this.state.setnumberx) : -(this.state.setnumberx2);
            tempPre_Pos_Y = this.state.selectedOne ? this.state.setnumbery : this.state.setnumbery2;

            tempPre_Pos_2X = this.state.selectedOne ? -(this.state.S_set_2ndPrePos_X) : -(this.state.S_set_2ndPrePos_X2);
            tempPre_Pos_2Y = this.state.selectedOne ? this.state.S_set_2ndPrePos_Y : this.state.S_set_2ndPrePos_Y2;

            tempPre_Pos_3X = this.state.selectedOne ? -(this.state.S_set_3rdPrePos_X) : -(this.state.S_set_3rdPrePos_X2);
            tempPre_Pos_3Y = this.state.selectedOne ? this.state.S_set_3rdPrePos_Y : this.state.S_set_3rdPrePos_Y2;

          } else if (this.firstcase_pal2 == "Lower Left Corner") {
            temp_offset_X_neg = false;
            temp_offset_Y_neg = false;
            //
            tempPre_Pos_X = this.state.selectedOne ? this.state.setnumberx : this.state.setnumberx2;
            tempPre_Pos_Y = this.state.selectedOne ? this.state.setnumbery : this.state.setnumbery2;

            tempPre_Pos_2X = this.state.selectedOne ? this.state.S_set_2ndPrePos_X : this.state.S_set_2ndPrePos_X2;
            tempPre_Pos_2Y = this.state.selectedOne ? this.state.S_set_2ndPrePos_Y : this.state.S_set_2ndPrePos_Y2;

            tempPre_Pos_3X = this.state.selectedOne ? this.state.S_set_3rdPrePos_X : this.state.S_set_3rdPrePos_X2;
            tempPre_Pos_3Y = this.state.selectedOne ? this.state.S_set_3rdPrePos_Y : this.state.S_set_3rdPrePos_Y2;

          } else if (this.firstcase_pal2 == "Lower Right Corner") {
            temp_offset_X_neg = false;
            temp_offset_Y_neg = true;
            //
            tempPre_Pos_X = this.state.selectedOne ? this.state.setnumberx : this.state.setnumberx2;
            tempPre_Pos_Y = this.state.selectedOne ? -(this.state.setnumbery) : -(this.state.setnumbery2);

            tempPre_Pos_2X = this.state.selectedOne ? this.state.S_set_2ndPrePos_X : this.state.S_set_2ndPrePos_X2;
            tempPre_Pos_2Y = this.state.selectedOne ? -(this.state.S_set_2ndPrePos_Y) : -(this.state.S_set_2ndPrePos_Y2);

            tempPre_Pos_3X = this.state.selectedOne ? this.state.S_set_3rdPrePos_X : this.state.S_set_3rdPrePos_X2;
            tempPre_Pos_3Y = this.state.selectedOne ? -(this.state.S_set_3rdPrePos_Y) : -(this.state.S_set_3rdPrePos_Y2);
          }
        }


        if ((this.autoGenerateCasePositionsDistance.length - 1) >= index) { // condition to select possible cases only
          //X
          if ((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y - this.map(this.setpreposx, 0, 1400, 0, 222)) < WorkingAreaYpos) {

            let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.21, 0, 222);
            tempPre_Pos_X = Math.floor(newMapValue);
            temp_offset_X_neg = false;
          }
          if (((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y + this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].h) + this.map(this.setpreposx, 0, 1400, 0, 222)) > (WorkingAreaYpos + WorkingArealength)) {

            let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222);
            tempPre_Pos_X = Math.floor(newMapValue);
            temp_offset_X_neg = false;
          }

          //2X
          if ((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y - this.map(this.secondPrePos_X, 0, 1400, 0, 222)) < WorkingAreaYpos) {

            let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.21, 0, 222);
            tempPre_Pos_2X = Math.floor(newMapValue);
            temp_offset_X_neg = false;
          }
          if (((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y + this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].h) + this.map(this.secondPrePos_X, 0, 1400, 0, 222)) > (WorkingAreaYpos + WorkingArealength)) {

            let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222);
            tempPre_Pos_2X = Math.floor(newMapValue);
            temp_offset_X_neg = false;
          }

          //3X
          if ((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y - this.map(this.thirdPrePos_X, 0, 1400, 0, 222)) < WorkingAreaYpos) {

            let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.21, 0, 222);
            tempPre_Pos_3X = Math.floor(newMapValue);
            temp_offset_X_neg = false;
          }
          if (((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y + this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].h) + this.map(this.thirdPrePos_X, 0, 1400, 0, 222)) > (WorkingAreaYpos + WorkingArealength)) {

            let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222);
            tempPre_Pos_3X = Math.floor(newMapValue);
            temp_offset_X_neg = false;
          }

          //Y
          if ((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x - this.map(this.setpreposy, 0, 1400, 0, 222)) < WorkingAreaXpos) {

            let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w))), 0, 35.21, 0, 222);
            tempPre_Pos_Y = Math.floor(newMapValue);
            temp_offset_Y_neg = false;
          }
          if (((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w) + this.map(this.setpreposy, 0, 1400, 0, 222)) > (WorkingAreaXpos + WorkingAreawidth)) {

            let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w))), 0, 35.19, 0, 222);
            tempPre_Pos_Y = Math.floor(newMapValue);
            temp_offset_Y_neg = false;
          }

          //2Y
          if ((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x - this.map(this.secondPrePos_Y, 0, 1400, 0, 222)) < WorkingAreaXpos) {

            let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w))), 0, 35.21, 0, 222);
            tempPre_Pos_2Y = Math.floor(newMapValue);
            temp_offset_Y_neg = false;
          }
          if (((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w) + this.map(this.secondPrePos_Y, 0, 1400, 0, 222)) > (WorkingAreaXpos + WorkingAreawidth)) {

            let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w))), 0, 35.19, 0, 222);
            tempPre_Pos_2Y = Math.floor(newMapValue);
            temp_offset_Y_neg = false;
          }

          //3Y
          if ((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x - this.map(this.thirdPrePos_Y, 0, 1400, 0, 222)) < WorkingAreaXpos) {

            let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w))), 0, 35.21, 0, 222);
            tempPre_Pos_3Y = Math.floor(newMapValue);
            temp_offset_Y_neg = false;
          }
          if (((this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w) + this.map(this.thirdPrePos_Y, 0, 1400, 0, 222)) > (WorkingAreaXpos + WorkingAreawidth)) {

            let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].x + (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].w))), 0, 35.19, 0, 222);
            tempPre_Pos_3Y = Math.floor(newMapValue);
            temp_offset_Y_neg = false;
          }

          //X
          if (this.state.selectedOne) {

            if (this.setpreposx > 0 && this.setpreposx < this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {
              tempPre_Pos_X = this.setpreposx;
            }
          } else if (this.state.selectedTwo) {
            if (this.setpreposx2 > 0 && this.setpreposx2 < this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {
              tempPre_Pos_X = this.setpreposx2;
            }
          }
          else if (this.setpreposx > 0 && this.setpreposx > this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {

            tempPre_Pos_X = Math.floor(this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222));
          }

          //2X
          if (this.state.selectedOne) {

            if (this.secondPrePos_X > 0 && this.secondPrePos_X < this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {
              tempPre_Pos_2X = this.secondPrePos_X;
            }
          } else if (this.state.selectedTwo) {
            if (this.secondPrePos_X2 > 0 && this.secondPrePos_X2 < this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {
              tempPre_Pos_2X = this.secondPrePos_X2;
            }
          }
          else if (this.secondPrePos_X > 0 && this.secondPrePos_X > this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {
            tempPre_Pos_2X = Math.floor(this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222));
          }

          //3X
          if (this.state.selectedOne) {

            if (this.thirdPrePos_X > 0 && this.thirdPrePos_X < this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {
              tempPre_Pos_3X = this.thirdPrePos_X;
            }
          } else if (this.state.selectedTwo) {
            if (this.thirdPrePos_X2 > 0 && this.thirdPrePos_X2 < this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {
              tempPre_Pos_3X = this.thirdPrePos_X2;
            }
          }
          else if (this.thirdPrePos_X > 0 && this.thirdPrePos_X > this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222)) {
            tempPre_Pos_3X = Math.floor(this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[this.autoGenerateCasePositionsDistance[index][0] - 1].y)), 0, -35.19, 0, 222));
          }


        } else {
          tempPre_Pos_X = 0;
          tempPre_Pos_Y = 0;
          tempPre_Pos_Z = 0;
          tempPre_Pos_2X = 0;
          tempPre_Pos_2Y = 0;
          tempPre_Pos_2Z = 0;
          tempPre_Pos_3X = 0;
          tempPre_Pos_3Y = 0;
          tempPre_Pos_3Z = 0;
          temp_offset_X_neg = false;
          temp_offset_Y_neg = false;
        }

        this.freezNRarray.push(index);
        temproryNrPosArr.push((this.autoGenerateCasePositionsDistance.length - 1) >= index ? "Nr " + this.autoGenerateCasePositionsDistance[index][0] : "")
        // this.state.NrPosInDropDownList[index] = "Nr "+(index+1);
        // console.log("autogenerate NrPosInDropDownList after: " + temproryNrPosArr + " index: " + (index + 1))
        if (tempPre_Pos_X == null) {
          tempPre_Pos_X = 0;
        }
        if (tempPre_Pos_Y == null) {
          tempPre_Pos_Y = 0;
        }
        if (tempPre_Pos_Z == null) {
          tempPre_Pos_Z = 0;
        }
        if (tempPre_Pos_X == 0) {
          tempPre_Pos_X = 0;
          temp_offset_X_neg = false;
        }
        if (tempPre_Pos_Y == 0) {
          tempPre_Pos_Y = 0;
          temp_offset_Y_neg = false;
        }
        return {
          ...item,
          offset_X_neg: temp_offset_X_neg,
          offset_Y_neg: temp_offset_Y_neg,
          pre_Pos_X: tempPre_Pos_X,
          pre_Pos_Y: tempPre_Pos_Y,
          pre_Pos_Z: tempPre_Pos_Z,
          pre_Pos_2X: tempPre_Pos_2X,
          pre_Pos_2Y: tempPre_Pos_2Y,
          pre_Pos_2Z: tempPre_Pos_2Z,
          pre_Pos_3X: tempPre_Pos_3X,
          pre_Pos_3Y: tempPre_Pos_3Y,
          pre_Pos_3Z: tempPre_Pos_3Z,
          auto_generation: true,
          position_freezed: true,
          // position: (this.autoGenerateCasePositionsDistance.length - 1) >= index ? "Nr " + this.autoGenerateCasePositionsDistance[index][0] : "",
          // case_x_position: (this.autoGenerateCasePositionsDistance.length - 1) >= index ? this.Case_EndPositions[(this.autoGenerateCasePositionsDistance[index][0]) - 1].case_x_position : 0,
          // case_y_position: (this.autoGenerateCasePositionsDistance.length - 1) >= index ? this.Case_EndPositions[(this.autoGenerateCasePositionsDistance[index][0]) - 1].case_y_position : 0,
          // case_z_position: (this.autoGenerateCasePositionsDistance.length - 1) >= index ? this.Case_EndPositions[(this.autoGenerateCasePositionsDistance[index][0]) - 1].case_z_position : 0,
          palletid: this.state.palletid
        }
      });

      this.setState({
        NrPosInDropDownList: temproryNrPosArr,
      })


      this.casedata = [...tempArr];
      if (this.state.selectedOne) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA1 = [...this.casedata];
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB1 = [...this.casedata];
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC1 = [...this.casedata];
        }
      }
      else if (this.state.selectedTwo) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA2 = [...this.casedata];
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB2 = [...this.casedata];
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC2 = [...this.casedata];
        }
      }
      this.state.case_data = [...tempArr];
      this.setState({
        case_data: [...tempArr]
      });
    }

    this.autoGenerateCaseFreez();
    this.setState({
      canvasOrangeRect: "hidden",
      canvasRedRect : "hidden"
    })

  }

  handleAutoGeneratePreposNEW = ({ name }) => event => {

    this.setState({
      autoGenerateRadioButtonNEW: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          autoGenerateRadioButtonNEW: false,
        })
      }, 1000)
    })


    let pallet_no = 1;
    let layers = [];

    // this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    // this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    if (this.state.selectedOne) {
      pallet_no = 1;
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = [...this.casedataA1];
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = [...this.casedataB1];
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = [...this.casedataC1];
      }
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = [...this.casedataA2];
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = [...this.casedataB2];
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = [...this.casedataC2];
      }
    }
    if (this.casedata.length === 0) {
      return;
    }
    else {
      let temproryNrPosArr = []
      this.freezNRarray = [];

      const tempArr = this.casedata.map((item, index) => {

        this.freezNRarray.push(index);
        temproryNrPosArr.push((this.autoGenerateCasePositionsDistance.length - 1) >= index ? "Nr " + this.autoGenerateCasePositionsDistance[index][0] : "")


        return {
          ...item,
          position: (this.autoGenerateCasePositionsDistance.length - 1) >= index ? "Nr " + this.autoGenerateCasePositionsDistance[index][0] : "",
          case_x_position: (this.autoGenerateCasePositionsDistance.length - 1) >= index ? this.Case_EndPositions[(this.autoGenerateCasePositionsDistance[index][0]) - 1].case_x_position : 0,
          case_y_position: (this.autoGenerateCasePositionsDistance.length - 1) >= index ? this.Case_EndPositions[(this.autoGenerateCasePositionsDistance[index][0]) - 1].case_y_position : 0,
          case_z_position: (this.autoGenerateCasePositionsDistance.length - 1) >= index ? this.Case_EndPositions[(this.autoGenerateCasePositionsDistance[index][0]) - 1].case_z_position : 0,

        }
      });

      this.setState({
        NrPosInDropDownList: temproryNrPosArr,
      })


      this.casedata = [...tempArr];
      if (this.state.selectedOne) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA1 = [...this.casedata];
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB1 = [...this.casedata];
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC1 = [...this.casedata];
        }
      }
      else if (this.state.selectedTwo) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA2 = [...this.casedata];
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB2 = [...this.casedata];
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC2 = [...this.casedata];
        }
      }
      this.state.case_data = [...tempArr];
      this.setState({
        case_data: [...tempArr]
      });
    }

    // this.autoGenerateCaseFreez();
    this.setState({
      canvasOrangeRect: "hidden",
      canvasRedRect : "hidden"
    })

  }

  autoGenerateCaseFreez = () => {
    this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

    for (let i = 0; i < this.state.CasesXYfotGreenRectPRC.length; i++) {

      let x = this.state.CasesXYfotGreenRectPRC[i].x;
      let y = this.state.CasesXYfotGreenRectPRC[i].y;
      let w = this.state.CasesXYfotGreenRectPRC[i].w;
      let h = this.state.CasesXYfotGreenRectPRC[i].h;
      this.drawFreezedCase(x, y, w, h);
    }
  }

  handleSelectionOriginPallet = name => (event) => {


    if (name === "Pal1") {
      const selected = event.target.value;

      if (selected == "Upper Right Corner") {
        this.originPal1 = "Upper Right Corner";
      }
      else if (selected == "Upper Left Corner") {
        this.originPal1 = "Upper Left Corner";
      }
      else if (selected == "Lower Left Corner") {
        this.originPal1 = "Lower Left Corner";
      }
      else if (selected == "Lower Right Corner") {
        this.originPal1 = "Lower Right Corner";
      }
      // console.log("Selected Pallet Origin " + name + " : " + this.originPal1);
    }
    else if (name == "Pal2") {
      const selected = event.target.value;
      if (selected == "Upper Right Corner") {
        this.originPal2 = "Upper Right Corner";
      }
      else if (selected == "Upper Left Corner") {
        this.originPal2 = "Upper Left Corner";
      }
      else if (selected == "Lower Left Corner") {
        this.originPal2 = "Lower Left Corner";
      }
      else if (selected == "Lower Right Corner") {
        this.originPal2 = "Lower Right Corner";
      }
      //// console.log("Selected Pallet Origin " + name + " : " + this.originPal2);
    }

  }

  // updateIntermidateList = (value) => {
  //   this.typeoptions11 = [];

  //   var num = value;

  //   var i = 0;
  //   for (i = 0; i < 10; i++) {
  //     num = value + "x" + (i + 1) + "mm";

  //     // console.log("var " + num);
  //     this.typeoptions11.push(num);
  //   }
  //   if (this.state.selectedOne) {
  //     this.intermediateLayerType1 = this.typeoptions11[0];
  //   }
  //   else if (this.state.selectedTwo) {
  //     this.intermediateLayerType2 = this.typeoptions11[0];
  //   }
  //   this.setState({
  //     intermediate_Layer_Type: this.typeoptions11[0]
  //   })
  //   this.forceUpdate();
  // };



  updatefor_Basiparameter_working_Area = (pallete_Type) => {

    if (this.state.selectedOne) {
      this.setState({
        WA_1_Offset_X_Dir: 0,
        WA_1_Offset_Y_Dir: 0,
      })
      // var pallete_y = this.map()
      this.circle("pal1", this.firstcase_pal1);
      // console.log(" updatefor_Basiparameter_working_Area  " + pallete_Type)

      // if (this.state.role !== "admin") {
      //   // if (pallete_Type == "US 1: 1219 x 1016 ") {
      //   //   (this.WA_1_width_X_Dir = 1400), (this.WA_1_Length_Y_Dir = 1400);
      //   // }
      //   // else if (pallete_Type == "US 2: 1067 x 1067") {
      //   //   (this.WA_1_width_X_Dir = 1400), (this.WA_1_Length_Y_Dir = 1400);
      //   // }

      //   // else if (pallete_Type == "EU 1: 1200 x 800") {
      //   //   (this.WA_1_width_X_Dir = 1400), (this.WA_1_Length_Y_Dir = 1400);
      //   // }

      //   // else if (pallete_Type == "EU 2: 1200 x 1000") {
      //   //   (this.WA_1_width_X_Dir = 1400), (this.WA_1_Length_Y_Dir = 1400);
      //   // }

      //   // else if (pallete_Type == "EU 6: 800 x 600") {
      //   //   (this.WA_1_width_X_Dir = 1400), (this.WA_1_Length_Y_Dir = 1400);
      //   // }

      //   // else if (pallete_Type == "AU 1: 1165 x 1165") {
      //   //   (this.WA_1_width_X_Dir = 1400), (this.WA_1_Length_Y_Dir = 1400);
      //   // }

      //   // else if (pallete_Type == "ASIA 1: 1100 x 1100") {
      //   //   (this.WA_1_width_X_Dir = 1400), (this.WA_1_Length_Y_Dir = 1400);
      //   // }

      // }
      this.state.WA_1_width_X_Dir = this.WA_1_width_X_Dir;
      this.state.WA_1_Length_Y_Dir = this.WA_1_Length_Y_Dir;

      this.setState({
        WA_1_Length_Y_Dir: this.WA_1_Length_Y_Dir,
        WA_1_width_X_Dir: this.WA_1_width_X_Dir,
      })
    }

    if (this.state.selectedTwo) {

      this.setState({
        WA_2_Offset_X_Dir: 0,
        WA_2_Offset_Y_Dir: 0,
      })
      this.circle("pal2", this.firstcase_pal2);

      // console.log(" updatefor_Basiparameter_working_Area  " + pallete_Type)
      // if (this.state.role !== "admin") {

      //   if (pallete_Type == "US 1: 1219 x 1016 ") {
      //     (this.WA_2_width_X_Dir = 1400), (this.WA_2_Length_Y_Dir = 1400);
      //   }

      //   else if (pallete_Type == "US 2: 1067 x 1067") {
      //     (this.WA_2_width_X_Dir = 1400), (this.WA_2_Length_Y_Dir = 1400);
      //   }

      //   else if (pallete_Type == "EU 1: 1200 x 800") {
      //     (this.WA_2_width_X_Dir = 1400), (this.WA_2_Length_Y_Dir = 1400);
      //   }

      //   else if (pallete_Type == "EU 2: 1200 x 1000") {
      //     (this.WA_2_width_X_Dir = 1400), (this.WA_2_Length_Y_Dir = 1400);
      //   }

      //   else if (pallete_Type == "EU 6: 800 x 600") {
      //     (this.WA_2_width_X_Dir = 1400), (this.WA_2_Length_Y_Dir = 1400);
      //   }

      //   else if (pallete_Type == "AU 1: 1165 x 1165") {
      //     (this.WA_2_width_X_Dir = 1400), (this.WA_2_Length_Y_Dir = 1400);
      //   }

      //   else if (pallete_Type == "ASIA 1: 1100 x 1100") {
      //     (this.WA_2_width_X_Dir = 1400), (this.WA_2_Length_Y_Dir = 1400);
      //   }
      // }
      this.state.WA_2_width_X_Dir = this.WA_2_width_X_Dir;
      this.state.WA_2_Length_Y_Dir = this.WA_2_Length_Y_Dir;


      this.setState({
        WA_2_Length_Y_Dir: this.WA_2_Length_Y_Dir,
        WA_2_width_X_Dir: this.WA_2_width_X_Dir,
      })

    }
  }

  handleSelection_intermediateLayer = (selected) => {

    if (selected == "US 1: 1219 x 1016 ") {
      var num = "1119 x 916";
      this.Pallet_Length = 1219;
      this.Pallet_Width = 1016;
      // this.updateIntermidateList(num);
    }

    if (selected == "US 2: 1067 x 1067") {
      var num = "967 x 967";
      this.Pallet_Length = 1067;
      this.Pallet_Width = 1067;
      // this.updateIntermidateList(num);
    }

    if (selected == "EU 1: 1200 x 800") {
      var num = "1100 x 700";
      this.Pallet_Length = 1200;
      this.Pallet_Width = 800;
      // this.updateIntermidateList(num);
    }

    if (selected == "EU 2: 1200 x 1000") {
      var num = "1100 x 900";
      this.Pallet_Length = 1200;
      this.Pallet_Width = 1000;
      // this.updateIntermidateList(num);
    }

    if (selected == "EU 6: 800 x 600") {
      var num = "700 x 500";
      this.Pallet_Length = 800;
      this.Pallet_Width = 600;
      // this.updateIntermidateList(num);
    }

    if (selected == "AU 1: 1165 x 1165") {
      var num = "1065 x 1065";
      this.Pallet_Length = 1165;
      this.Pallet_Width = 1165;
      // this.updateIntermidateList(num);
    }

    if (selected == "ASIA 1: 1100 x 1100") {
      var num = "1000 x 1000";
      this.Pallet_Length = 1100;
      this.Pallet_Width = 1100;
      // this.updateIntermidateList(num);
    }
  };

  handleBack = () => {
    cancelAnimationFrame(this.id);
    this.root = null;
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.props.history.goBack();
  }

  // updateIntermidateList = (value) => {
  //   this.typeoptions11 = [];

  //   var num = value;

  //   var i = 0;
  //   for (i = 0; i < 10; i++) {
  //     num = value + "x" + (i + 1) + "mm";

  //     // console.log("var " + num);
  //     this.typeoptions11.push(num);
  //   }

  //   this.forceUpdate();
  // };

  updatelist = (noOfSchemaCases) => {

    this.imageSrc_array = [];
    this.variantName_array = [];
    if (this.colorA == '#5eb8b3') {
      this.variantName_arrayA = [];
      this.imageSrc_arrayA = [];
    } else if (this.colorB == '#5eb8b3') {
      this.variantName_arrayB = [];
      this.imageSrc_arrayB = [];
    } else if (this.colorC == '#5eb8b3') {
      this.variantName_arrayC = [];
      this.imageSrc_arrayC = [];
    }

    // console.log(" updatelist called ")

    this.reqCombinationForPallet_N_Origin();


    if (this.colorA == '#5eb8b3') {

      // console.log(" updatelist colorA called ")

      this.saveVariantImages(noOfSchemaCases)


    }

    if (this.colorB == '#5eb8b3') {
      // console.log(" updatelist colorB called ")
      this.saveVariantImages(noOfSchemaCases)

    }

    if (this.colorC == '#5eb8b3') {

      // console.log(" updatelist colorC called ")

      this.saveVariantImages(noOfSchemaCases)

      // this.temp_array.splice(this.realIndexForC, 1);
      // this.temp_name_array.splice(this.realIndexForC, 1);

    }

    // this.variantName_array = [];
    // this.imageSrc_array = [];

    // this.temp_name_array.forEach((value, index) => {
    //   this.variantName_array.push(value);
    // })

    // this.temp_array.forEach((value, index) => {
    //   this.imageSrc_array.push(value);
    // })

  }
  handleCarousel1Update = () => {
    if (this.state.panelname != "panel5") {
      if (this.state.selectedOne) {
        this.state.selectedOne = false;
        this.state.selectedTwo = true;
        this.PalletSelection = 2;
        this.circle1();
        this.callSchemafor2();
      }
      else if (this.state.selectedTwo) {
        this.state.selectedOne = true;
        this.state.selectedTwo = false;
        this.PalletSelection = 1;
        this.circleForOne();
        this.callSchemafor1();
      }
    }
  }

  handleCarouselUpdate = async (e) => {

    let variantname = this.variantName_array[e.realIndex];
    if (this.state.selectedOne) {
      if (this.state.colorA == '#5eb8b3') {

        if (this.setVariantName_SchemaA != "" && this.setVariantName_SchemaA != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      } else if (this.state.colorB == '#5eb8b3') {
        if (this.setVariantName_SchemaB != "" && this.setVariantName_SchemaB != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      } else {
        if (this.setVariantName_SchemaC != "" && this.setVariantName_SchemaC != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      }
    }
    else if (this.state.selectedTwo) {
      if (this.state.colorA == '#5eb8b3') {
        if (this.setVariantName_SchemaA == this.setVariantName_SchemaB || this.setVariantName_SchemaA == this.setVariantName_SchemaC) {
          this.setVariantName_SchemaA = "";
        }
        if (this.setVariantName_SchemaB == this.setVariantName_SchemaA || this.setVariantName_SchemB2 == this.setVariantName_SchemaC) {
          this.setVariantName_SchemaB = "";
        }
        if (this.setVariantName_SchemaC == this.setVariantName_SchemaA || this.setVariantName_SchemaC == this.setVariantName_SchemaB) {
          this.setVariantName_SchemaC = "";
        }
        if (this.setVariantName_SchemaA != "" && this.setVariantName_SchemaA != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      } else if (this.state.colorB == '#5eb8b3') {
        if (this.setVariantName_SchemaB != "" && this.setVariantName_SchemaB != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      } else {
        if (this.setVariantName_SchemaC != "" && this.setVariantName_SchemaC != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      }
    }
    // console.log("real index of of Swiper slide " + variantname);

    if (this.state.colorA == '#5eb8b3') {



      // console.log(" handleCarouselUpdate colorA called ")

      this.realIndexForA = e.realIndex;
      this.realIndexForC = 0;
      this.realIndexForB = 0;

      // console.log(" variantname " + variantname)
      if (this.state.selectedOne) {
        this.setVariantName_SchemaA = variantname;
        // this.setVariantName_SchemaA1 = variantname;
        this.setState({
          setVariantName_SchemaA: variantname
        })
        if (this.setVariantName_SchemaA == this.setVariantName_SchemaB || this.setVariantName_SchemaA == this.setVariantName_SchemaC) {
          this.setVariantName_SchemaA = "";
          this.setState({
            setVariantName_SchemaA: ""
          })
        }

      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaA = variantname;
        // this.setVariantName_SchemaA2 = variantname;
        this.setState({
          setVariantName_SchemaA: variantname
        })

        if (this.setVariantName_SchemaA == this.setVariantName_SchemaB || this.setVariantName_SchemaA == this.setVariantName_SchemaC) {
          this.setVariantName_SchemaA = "";
          this.setState({
            setVariantName_SchemaA: ""
          })
        }
      }

      //
      //
      //
      await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
        // console.log("cehcking images getting from database::::A ", resp.data[0].image_A, resp.data[0].image_B, resp.data[0].image_C);

        let schemaA_index = variantname != "" ? this.variantName_array.indexOf(variantname) : null;

        if (schemaA_index != null && this.imageSrc_array[schemaA_index] !== undefined) {
          let base_var_imageA = ((variantname == this.setVariantName_SchemaB) || (variantname == this.setVariantName_SchemaC)) ? null : this.imageSrc_array[schemaA_index];
          // console.log("checking base64 image to save::::A ", base_var_imageA)

          // await axios.put(`/Threed/addImage/${this.palletid}`, {
          //   "image_A": base_var_imageA,
          //   "image_B": resp.data[0].image_B,
          //   "image_C": resp.data[0].image_C
          // })
          await axios.put(`/Threed/addImage/${this.palletid}`, {
            "image_A": JSON.stringify({ data: base_var_imageA, origin: "pat" }),
            "image_B": resp.data[0].image_B,
            "image_C": resp.data[0].image_C
          })
        }
      });
      //
      //
      //



    }

    if (this.state.colorB == '#5eb8b3') {



      // console.log(" handleCarouselUpdate colorB called ")

      this.realIndexForB = e.realIndex;
      this.realIndexForA = 0;
      this.realIndexForC = 0;

      if (this.state.selectedOne) {
        this.setVariantName_SchemaB = variantname;
        // this.setVariantName_SchemaB1 = variantname;
        this.setState({
          setVariantName_SchemaB: variantname
        })
        if (this.setVariantName_SchemaB == this.setVariantName_SchemaA || this.setVariantName_SchemaB == this.setVariantName_SchemaC) {
          this.setVariantName_SchemaB = "";
          this.setState({
            setVariantName_SchemaB: ""
          })
        }
      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaB = variantname;
        this.setState({
          setVariantName_SchemaB: variantname
        })

        if (this.setVariantName_SchemaB == this.setVariantName_SchemaA || this.setVariantName_SchemaB == this.setVariantName_SchemaC) {
          this.setVariantName_SchemaB = "";
          this.setState({
            setVariantName_SchemaB: ""
          })
        }
      }

      //
      //
      //
      await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
        // console.log("cehcking images getting from database::::B ", resp.data[0].image_A, resp.data[0].image_B, resp.data[0].image_C);

        let schemaB_index = variantname != "" ? this.variantName_array.indexOf(variantname) : null;

        if (schemaB_index != null && this.imageSrc_array[schemaB_index] !== undefined) {
          let base_var_imageB = ((variantname == this.setVariantName_SchemaA) || (variantname == this.setVariantName_SchemaC)) ? null : this.imageSrc_array[schemaB_index];
          // console.log("checking base64 image to save::::B ", base_var_imageB)

          await axios.put(`/Threed/addImage/${this.palletid}`, {
            "image_A": resp.data[0].image_A,
            "image_B": JSON.stringify({ data: base_var_imageB, origin: "pat" }),
            "image_C": resp.data[0].image_C
          })
        }
      });
      //
      //
      //

    }

    if (this.state.colorC == '#5eb8b3') {



      // console.log(" handleCarouselUpdate colorC called ")

      this.realIndexForC = e.realIndex;
      this.realIndexForB = 0;
      this.realIndexForA = 0;
      if (this.state.selectedOne) {
        this.setVariantName_SchemaC = variantname;
        // this.setVariantName_SchemaC1 = variantname;

        this.setState({
          setVariantName_SchemaC: variantname
        })
        if (this.setVariantName_SchemaC == this.setVariantName_SchemaA || this.setVariantName_SchemaC == this.setVariantName_SchemaB) {
          this.setVariantName_SchemaC = "";
          this.setState({
            setVariantName_SchemaC: ""
          })
        }
      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaC = variantname;


        this.setState({
          setVariantName_SchemaC: variantname
        })
        if (this.setVariantName_SchemaC == this.setVariantName_SchemaA || this.setVariantName_SchemaC == this.setVariantName_SchemaB) {
          this.setVariantName_SchemaC = "";
          this.setState({
            setVariantName_SchemaC: ""
          })
        }
      }

      //
      //
      //
      await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
        // console.log("cehcking images getting from database::::C ", resp.data[0].image_A, resp.data[0].image_B, resp.data[0].image_C);

        let schemaC_index = variantname != "" ? this.variantName_array.indexOf(variantname) : null;

        if (schemaC_index != null && this.imageSrc_array[schemaC_index] !== undefined) {
          let base_var_imageC = ((variantname == this.setVariantName_SchemaA) || (variantname == this.setVariantName_SchemaB)) ? null : this.imageSrc_array[schemaC_index];
          // console.log("checking base64 image to save::::C ", base_var_imageC)

          await axios.put(`/Threed/addImage/${this.palletid}`, {
            "image_A": resp.data[0].image_A,
            "image_B": resp.data[0].image_B,
            "image_C": JSON.stringify({ data: base_var_imageC, origin: "pat" })
          })
        }
      });
     
    }
  

  }

  OffsetChangePrc = (index, value, e) => {

    let toUpdateCaseData = this.casedata;

    if (e == "rotation") {
      
      if (this.state.colorA == "#5eb8b3") {
        this.casedataA1[index - 1].rotation = value;
        this.casedataA2[index - 1].rotation = value;
        // console.log("updating data caseDataA1 from offsetchangePrc:::: ")
      } else if (this.state.colorB == "#5eb8b3") {
        this.casedataB1[index - 1].rotation = value;
        this.casedataB2[index - 1].rotation = value;
      } else if (this.state.colorC == "#5eb8b3") {
        this.casedataC1[index - 1].rotation = value;
        this.casedataC2[index - 1].rotation = value;
      }
    } else if (e == "flush") {

      let palletNo = this.state.selectedOne ? 1 : 2;
      let palletid = this.props.match.params.palletid;
      let schema = this.state.colorA == "#5eb8b3" ? "Schema A" : this.state.colorB == "#5eb8b3" ? "Schema B" : "Schema C"

      for (let i = 0; i < toUpdateCaseData.length; i++) {
        toUpdateCaseData[i].pallet = palletNo;
        toUpdateCaseData[i].palletId = palletid;
        toUpdateCaseData[i].schema = schema;
        toUpdateCaseData[i].cases = "Case " + (i + 1);
        toUpdateCaseData[i].offset_X_neg = false;
        toUpdateCaseData[i].offset_Y_neg = false;
        toUpdateCaseData[i].position = "";
        toUpdateCaseData[i].position_freezed = false;
        toUpdateCaseData[i].pre_Pos_X = 0;
        toUpdateCaseData[i].pre_Pos_Y = 0;
        toUpdateCaseData[i].pre_Pos_Z = 0;
        toUpdateCaseData[i].pre_Pos_2X = 0;
        toUpdateCaseData[i].pre_Pos_2Y = 0;
        toUpdateCaseData[i].pre_Pos_2Z = 0;
        toUpdateCaseData[i].pre_Pos_3X = 0;
        toUpdateCaseData[i].pre_Pos_3Y = 0;
        toUpdateCaseData[i].pre_Pos_3Z = 0;
        toUpdateCaseData[i].auto_generation = false;
        toUpdateCaseData[i].rotation = -1;
        toUpdateCaseData[i].case_x_position = 0;
        toUpdateCaseData[i].case_y_position = 0;
        toUpdateCaseData[i].case_z_position = 0;
      }
      if (this.colorA == "#5eb8b3") {
        this.firstCaseOriginChangeFlushA("CasesSchemaA");
      } else if (this.colorB == "#5eb8b3") {
        this.firstCaseOriginChangeFlushB("CasesSchemaB");
      } else if (this.colorC == "#5eb8b3") {
        this.firstCaseOriginChangeFlushC("CasesSchemaC");
      }
    } else if (e == "firstCasePosition") {
      if (!this.state.NrPosInDropDownList.includes(`Nr ${value + 1}`)) {
        this.state.NrPosInDropDownList[0] = `Nr ${value + 1}`;
      }
      toUpdateCaseData[0].position = `Nr ${value + 1}`;      

      if (this.casedata[0].case_x_position == 0 || this.casedata[0].case_y_position == 0) {
        toUpdateCaseData[0].case_x_position = this.Case_EndPositions[value].case_x_position;
        toUpdateCaseData[0].case_y_position = this.Case_EndPositions[value].case_y_position;
        toUpdateCaseData[0].case_z_position = this.Case_EndPositions[value].case_z_position;
      }
    } else {

      if (e.target.name === "offsetXneg") {
        console.log("Inside the OffsetChangePrc for offsetXneg ")

        let offset_X_neg = -(toUpdateCaseData[index].pre_Pos_X);
        let valuetruefalse = !value;
        let offset_2X_neg = -(toUpdateCaseData[index].pre_Pos_2X);
        let valuetruefalse2 = !value;
        let offset_3X_neg = -(toUpdateCaseData[index].pre_Pos_3X);
        let valuetruefalse3 = !value;
        /////
        let position = this.casedata[index].position;
        let position_freezed = this.casedata[index].position_freezed;
        if (offset_X_neg == 0) {
          offset_X_neg = valuetruefalse ? -1 : 1;
        }
        if (offset_2X_neg == 0) {
          offset_2X_neg = valuetruefalse2 ? -1 : 1;
        }
        if (offset_3X_neg == 0) {
          offset_3X_neg = valuetruefalse3 ? -1 : 1;
        }

        if (!position_freezed) {

          if (position != "") {

            let NrValue = position.split(" ")[1];
            let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x - this.map(this.casedata[index].pre_Pos_X, 0, 1400, 0, 222);  // need to change minus prePos x offset
            let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(offset_X_neg, 0, 1400, 0, 222);  // need to change minus prePos y offset
            let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
            let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

            let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
            let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;

            let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;
            let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;

            if (this.checked_offsetXneg = true) {
              if (offset_X_neg > 0) {
                let { t } = this.props;

                if ((yPos) < (WorkingAreaYpos)) {
                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y)), 0, -35.21, 0, 222);
                  offset_X_neg = Math.floor(newMapValue);
                  valuetruefalse = false;
                }

              }
              else if (offset_X_neg < 0) {
                let { t } = this.props;

                if ((yPos + h) > (WorkingAreaYpos + WorkingArealength)) {
                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaYpos + WorkingArealength) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y + h)), 0, -35.19, 0, 222);
                  offset_X_neg = Math.floor(newMapValue);

                  // offset_X_neg = 0;
                  valuetruefalse = false;
                }
              }
              else {
                this.checked_offsetXneg = false;
                offset_X_neg = valuetruefalse ? -1 : 1;
              }
            }
          }

          if (position != "") {
            console.log("inside the  offset_2X_neg ===")

            let NrValue = position.split(" ")[1];
            let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x - this.map(this.casedata[index].pre_Pos_X, 0, 1400, 0, 222);  // need to change minus prePos x offset
            let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(offset_2X_neg, 0, 1400, 0, 222);  // need to change minus prePos y offset
            let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
            let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

            let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
            let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;

            let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;
            let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;

            if (this.checked_offsetXneg = true) {
              console.log("inside the  offset_2X_neg 11")

              // console.log(" Checked inside the offsetprc true: ")
              if (offset_2X_neg > 0) {
                console.log("inside the  offset_2X_neg 22")


                let { t } = this.props;

                if ((yPos) < (WorkingAreaYpos)) {
                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y)), 0, -35.21, 0, 222);
                  offset_2X_neg = Math.floor(newMapValue);

                  valuetruefalse2 = false;
                }

              }
              else if (offset_2X_neg < 0) {
                let { t } = this.props;

                if ((yPos + h) > (WorkingAreaYpos + WorkingArealength)) {
                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaYpos + WorkingArealength) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y + h)), 0, -35.19, 0, 222);
                  offset_2X_neg = Math.floor(newMapValue);

                  valuetruefalse2 = false;
                }
              }
              else {
                this.checked_offsetXneg = false;
                offset_2X_neg = valuetruefalse2 ? -1 : 1;
              }
            }
          }

          if (position != "") {
            console.log("inside the  offset_3X_neg ===")

            let NrValue = position.split(" ")[1];
            let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x - this.map(this.casedata[index].pre_Pos_X, 0, 1400, 0, 222);  // need to change minus prePos x offset
            let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(offset_3X_neg, 0, 1400, 0, 222);  // need to change minus prePos y offset
            let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
            let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

            let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
            let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;

            let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;
            let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;

            if (this.checked_offsetXneg = true) {

              if (offset_3X_neg > 0) {

                let { t } = this.props;

                if ((yPos) < (WorkingAreaYpos)) {
                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaYpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y)), 0, -35.21, 0, 222);
                  offset_3X_neg = Math.floor(newMapValue);

                  valuetruefalse3 = false;
                }

              }
              else if (offset_3X_neg < 0) {
                let { t } = this.props;

                if ((yPos + h) > (WorkingAreaYpos + WorkingArealength)) {
                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaYpos + WorkingArealength) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].y + h)), 0, -35.19, 0, 222);
                  offset_3X_neg = Math.floor(newMapValue);

                  valuetruefalse3 = false;
                }
              }
              else {
                this.checked_offsetXneg = false;
                offset_3X_neg = valuetruefalse3 ? -1 : 1;
              }
            }
          }
        }

        toUpdateCaseData[index].offset_X_neg = valuetruefalse;
        toUpdateCaseData[index].pre_Pos_X = offset_X_neg;

        toUpdateCaseData[index].offset_2X_neg = valuetruefalse;
        toUpdateCaseData[index].pre_Pos_2X = offset_2X_neg;

        toUpdateCaseData[index].offset_3X_neg = valuetruefalse;
        toUpdateCaseData[index].pre_Pos_3X = offset_3X_neg;
      }

      if (e.target.name === "offsetYneg") {
        console.log("Inside the OffsetChangePrc for offsetYneg ")
        
        let offset_Y_neg = -(toUpdateCaseData[index].pre_Pos_Y);
        let value_Y_True_False = !value;
        let offset_2Y_neg = -(toUpdateCaseData[index].pre_Pos_2Y);
        let value_2Y_True_False = !value;
        let offset_3Y_neg = -(toUpdateCaseData[index].pre_Pos_3Y);


        let value_3Y_True_False = !value;

        let position = this.casedata[index].position;
        let position_freezed = this.casedata[index].position_freezed;
       
        if (offset_Y_neg == 0) {
          offset_Y_neg = value_Y_True_False ? -1 : 1;
        }

        if (offset_2Y_neg == 0) {
          offset_2Y_neg = value_2Y_True_False ? -1 : 1;
        }

        if (offset_3Y_neg == 0) {
          offset_3Y_neg = value_3Y_True_False ? -1 : 1;

        }
        if (!position_freezed) {
          if (position != "") {

            let NrValue = position.split(" ")[1];
            let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(offset_Y_neg, 0, 1400, 0, 222);  // need to change minus prePos x offset
            let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(this.casedata[index].pre_Pos_Y, 0, 1400, 0, 222);  // need to change minus prePos y offset
            let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
            let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

            let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
            let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;

            let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;
            let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;

            if (this.checked_offsetYneg = true) {
              console.log("Inside the OffsetChangePrc for checked_offsetYneg ")


              if (offset_Y_neg > 0) {

                if ((xPos + w) > (WorkingAreaXpos + WorkingAreawidth)) {
                  let { t } = this.props;


                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + w)), 0, 35.19, 0, 222);
                  offset_Y_neg = Math.floor(newMapValue);

                  // offset_Y_neg = 0;
                  value_Y_True_False = false;

                }
              }
              else if (offset_Y_neg < 0) {

                if (xPos < WorkingAreaXpos) {
                  let { t } = this.props;

                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x)), 0, 35.21, 0, 222);
                  offset_Y_neg = Math.floor(newMapValue);

                  // offset_Y_neg = 0;
                  value_Y_True_False = false;

                }
              }
              else {
                this.checked_offsetYneg = false;
                offset_Y_neg = value_Y_True_False ? -1 : 1;
              }
            }
            // console.log("new value CasesXYfotGreenRectPRC greenRect values:... " + xPos + " .... " + yPos + " ..... " + w + " .... " + h)
          }

          if (position != "") {
            console.log("Inside the offset_2Y_neg ")

            let NrValue = position.split(" ")[1];
            // let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x - this.casedata[index].pre_Pos_X;  // need to change minus prePos x offset
            let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(offset_2Y_neg, 0, 1400, 0, 222);  // need to change minus prePos x offset
            // let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - offset_Y_neg;  // need to change minus prePos y offset
            let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(this.casedata[index].pre_Pos_Y, 0, 1400, 0, 222);  // need to change minus prePos y offset
            let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
            let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

            let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
            let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;

            let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;
            let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;

            if (this.checked_offsetYneg = true) {
              console.log("Inside the offset_2Y_neg 11")

              console.log("Inside the OffsetChangePrc for checked_offsetYneg ")


              if (offset_2Y_neg > 0) {
                console.log("Inside the offset_2Y_neg 22")


                if ((xPos + w) > (WorkingAreaXpos + WorkingAreawidth)) {
                  let { t } = this.props;


                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + w)), 0, 35.19, 0, 222);
                  offset_2Y_neg = Math.floor(newMapValue);

                  value_2Y_True_False = false;

                }
              }
              else if (offset_2Y_neg < 0) {
                console.log("Inside the offset_2Y_neg 33")
                if (xPos < WorkingAreaXpos) {
                  let { t } = this.props;

                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x)), 0, 35.21, 0, 222);
                  offset_2Y_neg = Math.floor(newMapValue);

                  value_2Y_True_False = false;

                }
              }
              else {
                this.checked_offsetYneg = false;
                offset_2Y_neg = value_2Y_True_False ? -1 : 1;
              }
            }
            // console.log("new value CasesXYfotGreenRectPRC greenRect values:... " + xPos + " .... " + yPos + " ..... " + w + " .... " + h)
          }

          if (position != "") {
            console.log("Inside the offset_3Y_neg ")

            let NrValue = position.split(" ")[1];
            // let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x - this.casedata[index].pre_Pos_X;  // need to change minus prePos x offset
            let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(offset_3Y_neg, 0, 1400, 0, 222);  // need to change minus prePos x offset
            // let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - offset_Y_neg;  // need to change minus prePos y offset
            let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(this.casedata[index].pre_Pos_Y, 0, 1400, 0, 222);  // need to change minus prePos y offset
            let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
            let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

            let WorkingAreaXpos = this.state.selectedOne ? this.outerRect1_xpos : this.outerRect2_xpos;
            let WorkingAreaYpos = this.state.selectedOne ? this.outerRect1_ypos : this.outerRect2_ypos;

            let WorkingAreawidth = this.state.selectedOne ? this.outerRect1_width : this.outerRect2_width;
            let WorkingArealength = this.state.selectedOne ? this.outerRect1_length : this.outerRect2_length;

            if (this.checked_offsetYneg = true) {
              console.log("Inside the offset_3Y_neg 11")

              console.log("Inside the OffsetChangePrc for checked_offsetYneg ")


              if (offset_3Y_neg > 0) {
                console.log("Inside the offset_3Y_neg 22")


                if ((xPos + w) > (WorkingAreaXpos + WorkingAreawidth)) {
                  let { t } = this.props;


                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos + WorkingAreawidth) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + w)), 0, 35.19, 0, 222);
                  offset_3Y_neg = Math.floor(newMapValue);

                  value_3Y_True_False = false;

                }
              }
              else if (offset_3Y_neg < 0) {
                console.log("Inside the offset_3Y_neg 33")
                if (xPos < WorkingAreaXpos) {
                  let { t } = this.props;

                  toast.error(t('thecaseoutliniesexceedtheworkingarea'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });

                  let newMapValue = this.map(((WorkingAreaXpos) - (this.state.CasesXYfotGreenRectPRC[NrValue - 1].x)), 0, 35.21, 0, 222);
                  offset_3Y_neg = Math.floor(newMapValue);

                  value_3Y_True_False = false;

                }
              }
              else {
                this.checked_offsetYneg = false;
                offset_3Y_neg = value_3Y_True_False ? -1 : 1;
              }
            }
            // console.log("new value CasesXYfotGreenRectPRC greenRect values:... " + xPos + " .... " + yPos + " ..... " + w + " .... " + h)
          }
        }

        toUpdateCaseData[index].offset_Y_neg = value_Y_True_False;
        toUpdateCaseData[index].pre_Pos_Y = offset_Y_neg;

        toUpdateCaseData[index].offset_2Y_neg = value_Y_True_False;
        toUpdateCaseData[index].pre_Pos_2Y = offset_2Y_neg;

        toUpdateCaseData[index].offset_3Y_neg = value_Y_True_False;
        toUpdateCaseData[index].pre_Pos_3Y = offset_3Y_neg;


      }

      if (e.target.name === "position_freezed") {

        this.checked_position_freezed = true;

        toUpdateCaseData[index].position_freezed = !value;

        try {
          if (toUpdateCaseData[index].position != "") {
            let NRpositionStr = toUpdateCaseData[index].position;
            let NRpositionStrSplitArr = NRpositionStr.split(" ");
            let nrPos = parseInt(NRpositionStrSplitArr[1]);
            // console.log("nrPosnrPosnrPosnrPos" + (nrPos - 1));

            // updating NR array on freezing checkbox
            if (this.freezNRarray.includes(nrPos - 1)) {
              let indexofNR = this.freezNRarray.indexOf(nrPos - 1);
              this.freezNRarray.splice(indexofNR, 1);
            } else {
              this.freezNRarray.push(nrPos - 1);
            }
            // case position dimentions
            let x = this.state.CasesXYfotGreenRectPRC[nrPos - 1].x;
            let y = this.state.CasesXYfotGreenRectPRC[nrPos - 1].y;
            let w = this.state.CasesXYfotGreenRectPRC[nrPos - 1].w;
            let h = this.state.CasesXYfotGreenRectPRC[nrPos - 1].h;
            if (!value) {

              this.drawFreezedCase(x, y, w, h);
              this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

            } else {
              // console.log("else do nothing")
              this.ctx_GRCaseFreez.clearRect(x, y, w, h);
              this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

            }

          }

        } catch (err) {
          // console.log("error spliting in position freezing" + err)
        }
      }

      if (e.target.name === "position") {

        this.state.NrPosInDropDownList[index] = e.target.value;

        try {
          if (e.target.value == "") {
            this.state.case_data[index].position = "";
            this.setState({
              tempNRValue: "",
            })

            this.checkSelectNrPositions();

            this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

            this.state.case_data[index].case_x_position = 0;
            this.state.case_data[index].case_y_position = 0;
            this.state.case_data[index].case_z_position = 0;

            this.casedata[index].case_x_position = 0;
            this.casedata[index].case_y_position = 0;
            this.casedata[index].case_z_position = 0;
          } else {

            let positionNrValue = e.target.value;
            let gettingNumberFromValue = positionNrValue.split(" ");
            let positionNR = gettingNumberFromValue[1];


            this.checkSelectNrPositions().then((alreadySelectedNrArr) => {
              if (alreadySelectedNrArr.includes(e.target.value)) {
                this.state.case_data[index].position = "";
                this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
                let { t } = this.props;

                toast.error(t('thepositionvalueisalreadyinuse'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
                this.setState({
                  tempNRValue: "",
                })

              } else {
                this.state.case_data[index].position = e.target.value;
                this.casedata[index].position = e.target.value;

                this.state.case_data[index].case_x_position = this.Case_EndPositions[(positionNR - 1)].case_x_position;
                this.state.case_data[index].case_y_position = this.Case_EndPositions[(positionNR - 1)].case_y_position;
                this.state.case_data[index].case_z_position = this.Case_EndPositions[(positionNR - 1)].case_z_position;

                this.casedata[index].case_x_position = this.Case_EndPositions[(positionNR - 1)].case_x_position;
                this.casedata[index].case_y_position = this.Case_EndPositions[(positionNR - 1)].case_y_position;
                this.casedata[index].case_z_position = this.Case_EndPositions[(positionNR - 1)].case_z_position;


                this.setState({
                  tempNRValue: positionNR,
                })

                //For GreenRect
                let xPos = this.state.CasesXYfotGreenRectPRC[positionNR - 1].x - this.map(this.state.case_data[index].pre_Pos_X, 0, 1400, 0, 222);  // need to change minus prePos x offset
                let yPos = this.state.CasesXYfotGreenRectPRC[positionNR - 1].y - this.map(this.state.case_data[index].pre_Pos_Y, 0, 1400, 0, 222);  // need to change minus prePos y offset
                //For OrangeRect
                let xPos1 = this.state.CasesXYfotGreenRectPRC[positionNR - 1].x - this.map(this.state.case_data[index].pre_Pos_2X, 0, 1400, 0, 222);  // need to change minus prePos x offset
                let yPos1 = this.state.CasesXYfotGreenRectPRC[positionNR - 1].y - this.map(this.state.case_data[index].pre_Pos_2Y, 0, 1400, 0, 222);  // need to change minus prePos y offset
                //For RedRect
                let xPos2 = this.state.CasesXYfotGreenRectPRC[positionNR - 1].x - this.map(this.state.case_data[index].pre_Pos_3X, 0, 1400, 0, 222);  // need to change minus prePos x offset
                let yPos2 = this.state.CasesXYfotGreenRectPRC[positionNR - 1].y - this.map(this.state.case_data[index].pre_Pos_3Y, 0, 1400, 0, 222);  // need to change minus prePos y offset

                let w = this.state.CasesXYfotGreenRectPRC[positionNR - 1].w;
                let h = this.state.CasesXYfotGreenRectPRC[positionNR - 1].h;

                this.drawGreenRect(xPos, yPos, w, h);
                this.drawOrangeRect(xPos1, yPos1, w, h);
                this.drawRedRect(xPos2, yPos2, w, h);
              }
            })
          }
        } catch (e) {
        }


        this.setState({
          Nr_number: e.target.value
        });
      }

      if (e.target.name !== "position_freezed" && e.target.name !== "position") {
        this.showOnFieldsClickGreenRect(index, toUpdateCaseData);
        this.showOnFieldsClickOrangeRect(index, toUpdateCaseData);
        this.showOnFieldsClickRedRect(index, toUpdateCaseData);
        this.showOnFieldsClickAllRect(index, toUpdateCaseData);

      }
    }

    this.setState({
      case_data: [...toUpdateCaseData]
    })
    if (e == "rotation" || e == "flush") {
      this.savePrc();
    }

  }

  showOnFieldsClickGreenRect = (index, toUpdateCaseData) => {

    let position = toUpdateCaseData[index].position;
    if (position != "") {
      let NrValue = position.split(" ")[1];
      let xPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(toUpdateCaseData[index].pre_Pos_Y, 0, 1400, 0, 222);  // x y interchanged for PRC
      let yPos = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(toUpdateCaseData[index].pre_Pos_X, 0, 1400, 0, 222);  // x y interchanged for PRC
      let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
      let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

      this.drawGreenRect(xPos, yPos, w, h);
    }
  }

  handleMouseDown = (e) => {
    if(this.state.panelname === "panel5" && (this.PalletSelection==1 && this.state.manualMoving1===true) || this.state.panelname === "panel5" && (this.PalletSelection==2 && this.state.manualMoving2===true))
   {
    const rect = this.myRef_GR.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if the click is within any of the selected puzzle pieces
    for (let i = 0; i < this.state.CasesXYmanualPRC.length; i++) {
      const piece = this.state.CasesXYmanualPRC[i];
      console.log(piece,"ppppp")
      if (x >= piece.x && x <= piece.x + piece.w && y >= piece.y && y <= piece.y + piece.h) {
        this.selectedPieceIndex = i;
        this.dragging = true;
        this.dragStartX = x;
        this.dragStartY = y;
        break;
      }
    }
   }
  }


  handleMouseMove = (e) => {
    // if (this.state.panelname === "panel5" && this.state.manualMoving1===true || this.state.manualMoving2===true) 
    if(this.state.panelname === "panel5" && (this.PalletSelection==1 && this.state.manualMoving1===true) || this.state.panelname === "panel5" && (this.PalletSelection==2 && this.state.manualMoving2===true))
    
    {

      if (!this.dragging || this.selectedPieceIndex === null) return;

      const rect = this.myRef_GR.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const deltaX = x - this.dragStartX;
      const deltaY = y - this.dragStartY;
      let Pallet_xpos= this.p_xpos;
      let Pallet_ypos= this.p_ypos;
      let Pallet_Maxxpos= Pallet_xpos+this.P_width1;
      let Pallet_Maxypos= Pallet_ypos+this.P_length1;
        
      
      console.log("X and Y inside the mouse move:::", 
      "Pallet_xpos",Pallet_xpos,
      "Pallet_ypos",Pallet_ypos,
      "this.Pallet_Width",this.P_width1,
      "this.Pallet_Length",this.Pallet_Length,
      "Pallet_Maxxpos",Pallet_Maxxpos,
     " Pallet_Maxypos",Pallet_Maxypos);
      
      
      const selectedPiece = this.state.CasesXYmanualPRC[this.selectedPieceIndex];
      if (
        selectedPiece.x + deltaX > Pallet_xpos &&
        selectedPiece.x + deltaX + selectedPiece.w < Pallet_Maxxpos &&
        selectedPiece.y + deltaY > Pallet_ypos &&
        selectedPiece.y + deltaY + selectedPiece.h < Pallet_Maxypos
      ) {
        // Update the position only if it's within the allowed boundaries
        selectedPiece.x += deltaX;
        selectedPiece.y += deltaY;
        // ... (rest of your code for drawing and updating)
         // Clear the canvas completelyx
      const canvas = this.myRef_GR.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.ctx_forPRC.clearRect(
        0,
        0,
        this.myRef_forPRC.current.clientWidth,
        this.myRef_forPRC.current.clientHeight
      );
      this.drawLargeRectInitially()

      // Redraw all the puzzle pieces except the selected piece
      for (let i = 0; i < this.state.CasesXYmanualPRC.length; i++) {
        if (i !== this.selectedPieceIndex) {
          const piece = this.state.CasesXYmanualPRC[i];
          this.ctx_forPRC.fillStyle = "#eab676";
          this.ctx_forPRC.fillRect(piece.x, piece.y, piece.w, piece.h);
          this.drawRect(piece)
        }
      }

      // // Draw the selected piece at its new position
      // this.ctx_forPRC.beginPath();
      // this.ctx_forPRC.fillStyle = "#eab676";
      // this.ctx_forPRC.fillRect(selectedPiece.x, selectedPiece.y, selectedPiece.w, selectedPiece.h);

      // // Draw the case number
      // this.ctx_forPRC.font = "15px serif";
      // this.ctx_forPRC.textBaseline = "middle";
      // this.ctx_forPRC.textAlign = "center";
      // this.ctx_forPRC.strokeStyle = "red";
      // this.ctx_forPRC.lineWidth = 0.7;
      // this.ctx_forPRC.rect(selectedPiece.x, selectedPiece.y, selectedPiece.w, selectedPiece.h);
      // this.ctx_forPRC.stroke();

      this.drawFillRect(selectedPiece, { backgroundColor: "#eab676" })
      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.fillStyle = "#eab676";
      this.ctx_forPRC.fillRect(selectedPiece.x, selectedPiece.y, selectedPiece.w, selectedPiece.h);
      this.Case_No = this.Case_No + 1;
      // Text for case No
      this.ctx_forPRC.font = "15px serif";
      this.ctx_forPRC.fillStyle = "black";
      this.ctx_forPRC.textBaseline = "middle";
      this.ctx_forPRC.textAlign = "center";
      // this.ctx_forPRC.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
      this.ctx_forPRC.stroke();
      this.drawRect(selectedPiece)

      // Update the drag starting position
      this.dragStartX = x;
      this.dragStartY = y;

      console.log(this.dragStartX, this.dragStartY)
      }
      
     
     
    }

  }




  handleMouseUp = (e) => {
    // if (this.state.panelname === "panel5" && this.state.manualMoving1===true || this.state.manualMoving2===true) 
    if(this.state.panelname === "panel5" && (this.PalletSelection==1 && this.state.manualMoving1===true) || this.state.panelname === "panel5" && (this.PalletSelection==2 && this.state.manualMoving2===true))
    
    {

      this.Case_EndPositions = []
      console.log("upppppp", this.Case_No)
      this.ctx_forPRC.clearRect(
        0,
        0,
        this.myRef_forPRC.current.clientWidth,
        this.myRef_forPRC.current.clientHeight
      );
      this.ctxCase.clearRect(
        0,
        0,
        this.myRefCase.current.clientWidth,
        this.myRefCase.current.clientHeight
      );
      this.drawLargeRectInitially()

      const canvas = this.myRef_GR.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.state.CasesXYmanualPRC.length; i++) {
        const piece = this.state.CasesXYmanualPRC[i];
        console.log(piece)
        // this.ctx_forPRC.fillStyle = "#eab676";
        // this.ctx_forPRC.fillRect(piece.x, piece.y, piece.w, piece.h);

        // // Draw the case number
        // this.ctx_forPRC.font = "15px serif";
        // this.ctx_forPRC.textBaseline = "middle";
        // this.ctx_forPRC.textAlign = "center";
        // this.ctx_forPRC.strokeStyle = "red";
        // this.ctx_forPRC.lineWidth = 0.7;
        // this.ctx_forPRC.rect(piece.x, piece.y, piece.w, piece.h);
        // this.ctx_forPRC.stroke();
        this.drawFillRect(piece, { backgroundColor: "#eab676" })
        this.ctx_forPRC.beginPath();
        this.ctx_forPRC.fillStyle = "#eab676";
        this.ctx_forPRC.fillRect(piece.x, piece.y, piece.w, piece.h);
        this.Case_No = i + 1;
        // Text for case No
        this.ctx_forPRC.font = "bold 10pt Roboto";
        this.ctx_forPRC.fillStyle = "black";
        this.ctx_forPRC.textBaseline = "middle";
        this.ctx_forPRC.textAlign = "center";
        this.ctx_forPRC.fillText(this.Case_No, (piece.x + (piece.w / 2)), (piece.y + (piece.h / 2)), 50);
        this.ctx_forPRC.stroke();
        this.drawRect(piece)

        // var Xposition = this.map(
        //   piece.x,
        //   0,
        //   this.Pallet_Width,
        //   this.p_xpos,
        //   this.p_xpos + parseInt(this.state.P_width, 10)
        // );
        // var Yposition = this.map(
        //   piece.y,
        //   0,
        //   this.Pallet_Length,
        //   this.p_ypos,
        //   this.p_ypos + parseInt(this.state.P_length, 10)
        // );
        // var length = this.map(
        //   piece.h,
        //   0,
        //   this.Pallet_Length,
        //   0,
        //   this.state.P_length
        // );



        // var Case_PosX = 0;
        // var Case_PosY = 0;

        // var x = piece.x + 210 / 2;
        // var y = piece.y + 310 / 2;

        // Case_PosX = this.map(
        //   x,
        //   this.Pallet_Width,
        //   0,
        //   0,
        //   -1 * this.Pallet_Width
        // );
        // Case_PosY = this.map(
        //   y,
        //   0,
        //   this.Pallet_Length,
        //   0,
        //   -1 * this.Pallet_Length
        // );


        var Case_PosX = 0;
        var Case_PosY = 0;

        var x = piece.x + this.Case_Width / 2;
        var y = piece.y + this.Case_Length / 2;

        console.log(x, y, "x,y")
        console.log(x + piece.w / 8 - piece.w / 4 / 2, y, "oooook")
        if (this.state.selectedOne) {
          if (this.originPal1 == "Upper Right Corner") {
            Case_PosX = this.map(
              x,
              this.Pallet_Width,
              0,
              0,
              -1 * this.Pallet_Width
            );
            Case_PosY = this.map(
              y,
              0,
              this.Pallet_Length,
              0,
              -1 * this.Pallet_Length
            );
          }
          if (this.originPal1 == "Upper Left Corner") {
            Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
            Case_PosY = this.map(
              y,
              0,
              this.Pallet_Length,
              0,
              -1 * this.Pallet_Length
            );
          }
          if (this.originPal1 == "Lower Right Corner") {
            Case_PosX = this.map(
              x,
              this.Pallet_Width,
              0,
              0,
              -1 * this.Pallet_Width
            );
            Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
          }
          if (this.originPal1 == "Lower Left Corner") {
            Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
            Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
          }
        } else {
          if (this.originPal2 == "Upper Right Corner") {
            Case_PosX = this.map(
              x,
              this.Pallet_Width,
              0,
              0,
              -1 * this.Pallet_Width
            );
            Case_PosY = this.map(
              y,
              0,
              this.Pallet_Length,
              0,
              -1 * this.Pallet_Length
            );
          }
          if (this.originPal2 == "Upper Left Corner") {
            Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
            Case_PosY = this.map(
              y,
              0,
              this.Pallet_Length,
              0,
              -1 * this.Pallet_Length
            );
          }
          if (this.originPal2 == "Lower Right Corner") {
            Case_PosX = this.map(
              x,
              this.Pallet_Width,
              0,
              0,
              -1 * this.Pallet_Width
            );
            Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
          }
          if (this.originPal2 == "Lower Left Corner") {
            Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
            Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
          }
        }
        // let tempXYpos = {
        //   case_x_position: Math.floor(Case_PosY),
        //   case_y_position:  Math.floor(Case_PosX),
        //   case_z_position: this.Case_Z_Pos,
        // };
        let tempXYpos = {
          case_x_position: Math.floor(Case_PosY + (piece.w / 8 - piece.w / 4 / 2)),
          case_y_position: Math.floor(Case_PosX),
          case_z_position: this.Case_Z_Pos,
        };

        // console.log(Case_PosX)
        // console.log(tempXYpos.case_y_position)
        // console.log("checking this.Case_Z_Pos in draw::::", this.Case_EndPositions)
        this.Case_EndPositions.push(tempXYpos);
        tempXYpos = "";
        console.log(x, "loooooo", this.Case_EndPositions)

        // // if (isSim) {
        //   //

        //   let caseData =this.casedata
        //   // if (this.state.selectedOne) {
        //   //   if (simulationSchema == "schema A") {
        //   //     caseData = this.casedataA1;
        //   //   } else if (simulationSchema == "schema B") {
        //   //     caseData = this.casedataB1;
        //   //   } else if (simulationSchema == "schema C") {
        //   //     caseData = this.casedataC1;
        //   //   }
        //   // } else if (this.state.selectedTwo) {
        //   //   if (simulationSchema == "schema A") {
        //   //     caseData = this.casedataA2;
        //   //   } else if (simulationSchema == "schema B") {
        //   //     caseData = this.casedataB2;
        //   //   } else if (simulationSchema == "schema C") {
        //   //     caseData = this.casedataC2;
        //   //   }
        //   // }
        //   // let casePositions = { x: ((Xposition + (width / 8)) - (width / 4) / 2), y: Yposition, w: width, h: length }
        //   console.log(
        //     "checking values for simulation rotation ::: ",
        //     caseData[this.freesedCaseCount]
        //   );
        //   if (this.freesedCaseCount < caseData.length) {
        //     let casePositions = {
        //       x: Xposition + piece.w / 8 - piece.w  / 4 / 2,
        //       y: Yposition,
        //       // orientation: orientation,
        //       rotation: caseData[this.freesedCaseCount].rotation,
        //       pre_Pos_X: caseData[this.freesedCaseCount].pre_Pos_X,
        //       pre_Pos_Y: caseData[this.freesedCaseCount].pre_Pos_Y,
        //       pre_Pos_Z: caseData[this.freesedCaseCount].pre_Pos_Z,
        //       position: caseData[this.freesedCaseCount].position,
        //       case_no: this.freesedCaseCount + 1,
        //       intermediateLayer: false,
        //     };
        //     this.simCasesPositionsForSchemaA.push(casePositions);
        // if (simulationSchema == "schema A") {
        //   this.simCasesPositionsForSchemaA.push(casePositions);
        // } else if (simulationSchema == "schema B") {
        //   this.simCasesPositionsForSchemaB.push(casePositions);
        // } else if (simulationSchema == "schema C") {
        //   this.simCasesPositionsForSchemaC.push(casePositions);
        // }
        // }
        // console.log("checkind sim data in draw, simCasesPositionsForSchemaA ", this.simCasesPositionsForSchemaA)
        // console.log("checkind sim data in draw, simCasesPositionsForSchemaB ", this.simCasesPositionsForSchemaB)
        // console.log("checkind sim data in draw, simCasesPositionsForSchemaC ", this.simCasesPositionsForSchemaC)
        // }
        // this.draw(piece.x, piece.y)
        // this.drawFillRect_CaseImage(piece,{ backgroundColor: "#eab676" })


      }
      // this.state.CasesXYfotGreenRectPRC[index - 1].rotation = newRotation;
      // if (newRotation == 0) {
      //   this.ctx_forPRC.drawImage(
      //     this.state.caseImageLoad0Deg[this.tempLabelindex],
      //     x,
      //     y,
      //     w,
      //     h
      //   );
      console.log(this.casedataA1, "this.casedataA1")
      console.log(this.state.case_data, "this.state.case_data")

      this.dragging = false;
      this.selectedPieceIndex = null;
    }
    // this.createlabeledImg()
  }
  showOnFieldsClickOrangeRect = (index, toUpdateCaseData) => {

    console.log("Inside showOnFieldsClickOrangeRect1 Called ORANGE-Rect");

    let position = toUpdateCaseData[index].position;
    if (position != "") {
      let NrValue = position.split(" ")[1];
      let xPos1 = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(toUpdateCaseData[index].pre_Pos_2Y, 0, 1400, 0, 222);  // x y interchanged for PRC
      let yPos1 = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(toUpdateCaseData[index].pre_Pos_2X, 0, 1400, 0, 222);  // x y interchanged for PRC
      let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
      let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

      this.drawOrangeRect(xPos1, yPos1, w, h);
    }
  }
  showOnFieldsClickRedRect = (index, toUpdateCaseData) => {

    console.log("Inside showOnFieldsClickRedRect1 Called RED-Rect");

    let position = toUpdateCaseData[index].position;
    if (position != "") {
      let NrValue = position.split(" ")[1];
      let xPos2 = this.state.CasesXYfotGreenRectPRC[NrValue - 1].x + this.map(toUpdateCaseData[index].pre_Pos_3Y, 0, 1400, 0, 222);  // x y interchanged for PRC
      let yPos2 = this.state.CasesXYfotGreenRectPRC[NrValue - 1].y - this.map(toUpdateCaseData[index].pre_Pos_3X, 0, 1400, 0, 222);  // x y interchanged for PRC
      let w = this.state.CasesXYfotGreenRectPRC[NrValue - 1].w;
      let h = this.state.CasesXYfotGreenRectPRC[NrValue - 1].h;

      this.drawRedRect(xPos2, yPos2, w, h);
    }
  }

  showOnFieldsClickAllRect = (index, toUpdateCaseData) => {
    this.showOnFieldsClickGreenRect(index, toUpdateCaseData);
    this.showOnFieldsClickOrangeRect(index, toUpdateCaseData);
    this.showOnFieldsClickRedRect(index, toUpdateCaseData);
  }


  UpadateNrPRC = () => {

    // console.log("value isplay case_data: " + this.state.case_data.length);

    this.UpdateNr = []  //number of lists coming that list deleting
    let i;
    for (i = 0; i < this.state.case_data.length; i++) {
      let str = "Nr " + (i + 1)
      this.UpdateNr.push(str);
    }
    // console.log("this.updateNr: " + this.UpdateNr)
  }

  checkSelectNrPositions = async () => {

    let alreadySelectedNrArr = [];


    for (let i = 0; i < this.state.case_data.length; i++) {
      if (this.state.case_data[i].position != "") {
        alreadySelectedNrArr.push(this.state.case_data[i].position);
      }
    }

    // console.log("this.state.alreadySelectedNrArr: " + this.state.alreadySelectedNrArr)

    return alreadySelectedNrArr;
  }
  caseRotateOnClickHandler = (e) => {
    if (this.state.panelname === 'panel4') {
      //console.log("Inside caseRotateOnClickHandler");
      let rect = this.myRef_GR.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let i = 0, r;
      let newX, newY, newW, newH, rotation, index;

      // Check if zoomed in
      if (this.state.Margin_Width !== "580px") {
        // Adjust mouse coordinates based on zoom
        x = (x - parseInt(this.state.Margin_Left, 10)) / parseInt(this.state.Margin_Width, 10) * 580;
        y = ((y - parseInt(this.state.Margin_Top, 10)) + 25) / parseInt(this.state.Margin_Height, 10) * 480;
        this.setState({
          Margin_WidthForprc: x,
          Margin_HeightForprc: y
        })
      }

      // console.log("Inside caseRotateOnClickHandler this.state.Margin_WidthForprc = ", this.state.Margin_WidthForprc,this.state.Margin_HeightForprc);

      if (this.state.CasesXYfotGreenRectPRC.length > 0) {
        while (r = this.state.CasesXYfotGreenRectPRC[i++]) {
          this.ctx_forPRC.beginPath();
          this.ctx_forPRC.rect(r.x, r.y, r.w, r.h);
          if (this.ctx_forPRC.isPointInPath(x, y)) {
            newX = r.x;
            newY = r.y;
            newW = r.w;
            newH = r.h;
            rotation = r.rotation;
            index = i;
            break;
          }
        }
      }
      if (x >= newX && x <= newX + newW && y >= newY && y <= newY + newH) {
        //console.log("Clicked selected case dimensions: x:", newX, "y:", newY, "w:", newW, "h:", newH);
        this.rotateCasePRC(newX, newY, newW, newH, rotation, index);
      }
    }
  };

  rotateCasePRC = async (x, y, w, h, rotation, index) => {
    // this.ctx.clearRect(x, y, w, h);
    if (this.freezNRarray.includes(index - 1)) {
      // console.log("position is freezed cannot rotate");
    } else {

      // console.log("dvwvwvwdvsd: x: " + x + " y: " + y + " w: " + w + " h: " + h + " rotation: " + rotation)


      if (x != undefined && y != undefined && w != undefined && h != undefined && rotation != undefined) {
        // console.log("clecked selected case dimentions: x: " + x + " y: " + y + " w: " + w + " h: " + h + " rotation: " + rotation + " caseType: width " + this.Case_Width + " length " + this.Case_Length + " index: " + index);

        let newRotation;
        if (this.Case_Width === this.Case_Length) {
          // console.log("square rectangle check: square");

          if (rotation >= 270) {
            newRotation = 0;
          } else {
            newRotation = rotation + 90;
          }

        } else {
          // console.log("square rectangle check: rectangle");

          if (rotation == 0) {
            newRotation = 180;
          } else if (rotation == 90) {
            newRotation = 270;
          } else if (rotation == 180) {
            newRotation = 0;
          } else if (rotation == 270) {
            newRotation = 90;
          }

        }
        this.state.CasesXYfotGreenRectPRC[index - 1].rotation = newRotation;
        if (newRotation == 0) {
          this.ctx_forPRC.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], x, y, w, h);
        } else if (newRotation == 90) {
          this.ctx_forPRC.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], x, y, w, h);
        } else if (newRotation == 180) {
          this.ctx_forPRC.drawImage(this.state.caseImageLoad180Deg[this.tempLabelindex], x, y, w, h);
        } else if (newRotation == 270) {
          this.ctx_forPRC.drawImage(this.state.caseImageLoad270Deg[this.tempLabelindex], x, y, w, h);
        }
        let newCaseInfo = { x: x, y: y, w: w, h: h }
        // this.drawFillRect(newCaseInfo, { backgroundColor: "#eab676" }, index); //postion number of cases
        this.drawRect(newCaseInfo); //rectangle for case positions
        // this.ctx.drawImage(this.state.caseImageLoad180Deg[this.tempLabelindex],x,y,w,h)
        this.OffsetChangePrc(index, newRotation, "rotation");
        //
        //
        //
        if (this.colorA == "#5eb8b3") {
          const image = this.canvasToPng(this.myRef_forPRC.current);
          await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
            await axios.put(`/Threed/addImage/${this.palletid}`, {
              "image_A": JSON.stringify({ data: image, origin: "lay" }),
              "image_B": resp.data[0].image_B,
              "image_C": resp.data[0].image_C,
            });
          });
        } else if (this.colorB == "#5eb8b3") {
          const image = this.canvasToPng(this.myRef_forPRC.current);
          await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
            await axios.put(`/Threed/addImage/${this.palletid}`, {
              "image_A": resp.data[0].image_A,
              "image_B": JSON.stringify({ data: image, origin: "lay" }),
              "image_C": resp.data[0].image_C,
            });
          });
        } if (this.colorC == "#5eb8b3") {
          const image = this.canvasToPng(this.myRef_forPRC.current);
          await axios.get(`/threed/getPalImage/${this.palletid}`).then(async (resp) => {
            await axios.put(`/Threed/addImage/${this.palletid}`, {
              "image_A": resp.data[0].image_A,
              "image_B": resp.data[0].image_B,
              "image_C": JSON.stringify({ data: image, origin: "lay" }),
            });
          });
        }

        //
        //
        //
      }



      // console.log("position is freezed cannot rotate not freezed");
    }


  }

  buttonForOne = () => {
    this.resetSimulationStates()
    this.PalletSelection = 1;
    // console.log("checking for buttonforOne click:::: ", this.state.colorA, this.state.colorB, this.state.colorC, " ::: ", this.colorA, this.colorB, this.colorC)
    if (this.state.panelname == "panel5") {
      if (this.state.colorA == "#5eb8b3") {
        this.handlecolorA();
      } else if (this.state.colorB == "#5eb8b3") {
        this.handlecolorB();
      } else if (this.state.colorC == "#5eb8b3") {
        this.handlecolorC();
      }
    }
    // console.log("button one clicked: this.caseType: " + this.caseType)
    this.splitCaseType(this.caseType);
    this.circle("pal1", this.firstcase_pal1);
    this.circleForOne();
    this.callSchemafor1();
    this.getCallLabel(this.state.case_Type);

    // console.log("Inside buttonForOne this.state.arcX " + this.state.arcX + " this.state.arcY " + this.state.arcY);
    if (this.state.panelname == "panel5" || this.state.panelname == "panel4") {
      // console.log("123 buttonOneClicked inside panel41&5")
      // console.log("checking for case datachange inside buttonfor1:::")
      if (this.colorA == "#5eb8b3") {
        // console.log("123 buttonOneClicked colorA")
        this.casedata = [...this.casedataA1];
        this.handlecolorA();
      } else if (this.colorB == "#5eb8b3") {
        // console.log("123 buttonOneClicked colorB")
        this.casedata = [...this.casedataB1];
        this.handlecolorB();

      } else if (this.colorC == "#5eb8b3") {
        // console.log("123 buttonOneClicked colorC")
        this.casedata = [...this.casedataC1];
        this.handlecolorC();
      }


    }

    if (this.state.panelname == "panel6") {
      this.setState({
        simulationButton: false,
        simulationSpeed: 0,
      })
      this.setting_data_simmulation()
    }
    if (this.state.panelname == "panel7") {
      this.simCasesPositionsForSchemaA = [];
      this.simCasesPositionsForSchemaB = [];
      this.simCasesPositionsForSchemaC = [];

      // console.log("checking varients in pannel6:......A: " + this.state.setVariantName_SchemaA + " ......B: " + this.state.setVariantName_SchemaB + " .......C: " + this.state.setVariantName_SchemaC)
      if (this.state.setVariantName_SchemaA !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel1:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema A", true); // run for getting schema A case position
        // console.log("checking varients in pannel7:......A: " + this.state.setVariantName_SchemaA)
      }
      if (this.state.setVariantName_SchemaB !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel2:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema B", true); // run for getting schema B case position
        // console.log("checking varients in pannel7:......B: " + this.state.setVariantName_SchemaB)
      }
      if (this.state.setVariantName_SchemaC !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel3:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema C", true); // run for getting schema C case position
        // console.log("checking varients in pannel7:.......C: " + this.state.setVariantName_SchemaC)
      }

      //  if(this.state.setVariantName_SchemaA !== ""){
      //   // this.callSchema1("schema A",true); // run for getting schema A case position
      //   this.simCasesPositionsForSchemaA ;
      // }
      // this.handleStartSimulation();
      this.setState({
        abordSimulation: false,
        simulationRunning: false,
        simulationButton: false,
        simulationStatus: "",
      }, () => {
        setTimeout(() => {
          this.setState({
            abordSimulation: false,
            simulationRunning: true,
            simulationButton: false,
            simulationStatus: "",
            simulationComplete: false,
          })
        }, 50)

      })
      this.state.forSingleCanvas = "hidden"
      this.setState({
        forSingleCanvas: "hidden",
        pallet_bool: true
      })

    }
    this.state.new_forOne = true;
    this.state.new_forTwo = false;
    this.setState({
      new_forOne: true,
      new_forTwo: false,
    })
  }

  buttonForTwo = () => {
    this.resetSimulationStates()
    this.PalletSelection = 2;
    // console.log("checking for buttonforOne click:::: ", this.state.colorA, this.state.colorB, this.state.colorC, " ::: ", this.colorA, this.colorB, this.colorC)
    if (this.state.panelname == "panel5") {
      // console.log("checking for case datachange inside buttonfor2:::")
      if (this.state.colorA == "#5eb8b3") {
        this.casedata = [...this.casedataA2]
        this.handlecolorA();
      } else if (this.state.colorB == "#5eb8b3") {
        this.casedata = [...this.casedataB2]
        this.handlecolorB();
      } else if (this.state.colorC == "#5eb8b3") {
        this.casedata = [...this.casedataC2]
        this.handlecolorC();
      }
    }
    // console.log("button two clicked: this.caseType2: " + this.caseType)
    this.splitCaseType(this.caseType);
    // this.circle("pal2", this.firstcase_pal2);
    this.circle1();
    this.callSchemafor2();
    this.getCallLabel(this.state.case_Type);

    // console.log("Inside buttonForTwo this.state.arcX2 " + this.state.arcX2 + " this.state.arcY2 " + this.state.arcY2);
    if (this.state.panelname == "panel5" || this.state.panelname == "panel4") {
      // console.log("123 buttonTwoClicked inside panel41&5 colorA:.. " + this.colorA + "colorB:... " + this.colorB + "colorC:... " + this.colorC)
      if (this.colorA == "#5eb8b3") {
        // console.log("123 buttonTwoClicked colorA")
        this.handlecolorA();

      } else if (this.colorB == "#5eb8b3") {
        // console.log("123 buttonTwoClicked colorB")
        this.handlecolorB();

      } else if (this.colorC == "#5eb8b3") {
        // console.log("123 buttonTwoClicked colorC")
        this.handlecolorC();
      }

    }

    if (this.state.panelname == "panel6") {
      this.setState({
        simulationButton: false,
        simulationSpeed: 0,
      })
      this.setting_data_simmulation()
    }
    if (this.state.panelname == "panel7") {
      this.simCasesPositionsForSchemaA = [];
      this.simCasesPositionsForSchemaB = [];
      this.simCasesPositionsForSchemaC = [];

      // console.log("checking varients in pannel6:......A: " + this.state.setVariantName_SchemaA + " ......B: " + this.state.setVariantName_SchemaB + " .......C: " + this.state.setVariantName_SchemaC)
      if (this.state.setVariantName_SchemaA !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel1:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema A", true); // run for getting schema A case position
        // console.log("checking varients in pannel7:......A: " + this.state.setVariantName_SchemaA)
      }
      if (this.state.setVariantName_SchemaB !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel2:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema B", true); // run for getting schema B case position
        // console.log("checking varients in pannel7:......B: " + this.state.setVariantName_SchemaB)
      }
      if (this.state.setVariantName_SchemaC !== "") {
        // console.log("callschemafor1 calling check from handlechangepannel3:::::", this.colorA, this.colorB, this.colorC)
        this.callSchema1("schema C", true); // run for getting schema C case position
        // console.log("checking varients in pannel7:.......C: " + this.state.setVariantName_SchemaC)
      }

      //  if(this.state.setVariantName_SchemaA !== ""){
      //   // this.callSchema1("schema A",true); // run for getting schema A case position
      //   this.simCasesPositionsForSchemaA ;
      // }
      // this.handleStartSimulation();
      this.setState({
        abordSimulation: false,
        simulationRunning: false,
        simulationButton: false,
        simulationStatus: "",
      }, () => {
        setTimeout(() => {
          this.setState({
            abordSimulation: false,
            simulationRunning: true,
            simulationButton: false,
            simulationStatus: "",
            simulationComplete: false,
          })
        }, 50)

      })
      this.state.forSingleCanvas = "hidden"
      this.setState({
        forSingleCanvas: "hidden",
        pallet_bool: true
      })

    }
    this.state.new_forOne = false;
    this.state.new_forTwo = true;
    this.setState({
      new_forOne: false,
      new_forTwo: true,
    })
  }
  getPrcForExport = async (palletid, PalletArray) => {

    this.arrayOfSchema = [];
    this.tempVar1 = [];
    this.arrFilter = [];

    let response1 = await axios.get(`Threed/getLayer/` + palletid);
    let layerrecord = this.sortLayerData(response1.data);
    // console.log("Inside getPrcForExport layerrecord :- ", layerrecord);

    let resonse = await axios.get(`Threed/getPrc/` + palletid);
    let Prcrecord = resonse.data;
    // console.log("Inside getPrcForExport Prcrecord :- ", Prcrecord);
    console.log("download JSON layer data:::: ", layerrecord, " :::caseHeight::: ", this.Case_Height, " :::InterLayer Thickness::: ", this.state.intermediate_Layer_Type)
    let addingLayerThickness_pal1 = 0;
    let addingLayerThickness_pal2 = 0;


    let tempVar_layerrecord = layerrecord.map((layer, index1) => {

      if (layer.layername !== "") {

        let Schema = layer.layername;

        let caseData;

        if (this.state.selectedOne) {

          if (Schema == "Schema A") {
            caseData = this.casedataA1;
            // console.log("Inside getPrcForExport Schema SchemaA ", caseData);
            // console.log("Inside getPrcForExport this.casedataA1 ", this.casedataA1);

          } else if (Schema == "Schema B") {
            caseData = this.casedataB1;
            // console.log("Inside getPrcForExport Schema SchemaB ", caseData);
            // console.log("Inside getPrcForExport this.casedataB1 ", this.casedataB1);

          } else if (Schema == "Schema C") {
            caseData = this.casedataC1;
            // console.log("Inside getPrcForExport Schema SchemaC ", caseData);
            // console.log("Inside getPrcForExport this.casedataC1 ", this.casedataC1);

          }

        }
        else if (this.state.selectedTwo) {

          if (Schema == "Schema A") {
            caseData = this.casedataA2;
            // console.log("Inside getPrcForExport Schema SchemaA2 ", caseData);

          } else if (Schema == "Schema B") {
            caseData = this.casedataB2;
            // console.log("Inside getPrcForExport Schema SchemaB2 ", caseData);

          } else if (Schema == "Schema C") {
            caseData = this.casedataC2;
            // console.log("Inside getPrcForExport Schema SchemaC2 ", caseData);

          }
        }


        let finalLayerThickness = 0;
        if (layer.pallet_no == 1) {
          for (let i = 0; i < layer.layerSequence; i++) {
            if (layerrecord[i].intermediatelayer) {
              addingLayerThickness_pal1 += parseInt(this.state.intermediate_Layer_Type)
            }
          }
          finalLayerThickness = addingLayerThickness_pal1;
        } else if (layer.pallet_no == 2) {
          for (let i = 0; i < layer.layerSequence; i++) {
            if (layerrecord[i].intermediatelayer) {
              addingLayerThickness_pal2 += parseInt(this.state.intermediate_Layer_Type)
            }
          }
          finalLayerThickness = addingLayerThickness_pal2;
        }

        console.log("checking final layersThickness::: ", finalLayerThickness, " :::layer.layerSequence::: ", layer.layerSequence, " :::layer.pallet_no::: ", layer.pallet_no)

        let layer_wise_caseData = caseData.map((Case, index) => {

          // console.log("Inside getPrcForExport caseData Case :- ", Case);
          // console.log("Inside getPrcForExport caseData Case.schema :- ", Case.schema);

          return {
            Pallet: Case.pallet,
            Name: Case.cases,
            Schema: Case.schema,
            Layer: layer.layerSequence,
            Prepos: [
              {
                X: Case.pre_Pos_X,
                Y: Case.pre_Pos_Y,
                Z: Case.pre_Pos_Z,
                Rotation: Case.rotation
              }
            ],
            pos: [
              {
                X: Case.case_x_position,
                Y: Case.case_y_position,
                // Z: Case.case_z_position,
                Z: (((this.Case_Height * (layer.layerSequence - 1))) + finalLayerThickness),
                Rotation: Case.rotation
              },
            ]
          }

        })
        addingLayerThickness_pal1 = 0;
        addingLayerThickness_pal2 = 0;
        return { cases: layer_wise_caseData };
      }
    })

    // console.log("Inside getPrcForExport tempVar_layerrecord ", tempVar_layerrecord);

    let layer_After_Filter = tempVar_layerrecord.filter(Boolean);

    // console.log("Inside getPrcForExport layer_After_Filter :- ", layer_After_Filter);

    let layer_Filter_Half = Math.ceil(layer_After_Filter.length / 2);
    // console.log("Inside getPrcForExport layer_Filter_Half :- ", layer_Filter_Half);

    let layer_Half_splice = layer_After_Filter.splice(0, layer_Filter_Half);
    // console.log("Inside getPrcForExport layer_Half_splice :- ", layer_Half_splice);

    this.arrayData1 = [];
    this.arrayData1.push(layer_After_Filter);
    // console.log("Inside getPrcForExport arrayData1 AFTER :- ", this.arrayData1);

  };

  getLayerForExport = async (palletid, pallet_no) => {
    arrayData = [];
    let response = await axios.get(`Threed/getLayer/` + palletid);
    const layerrecord = response.data;
    // console.log("records inside getLayer = ", JSON.stringify(layerrecord));
    // this.pallets.push(layerrecord);
    arrayData.push(layerrecord);
    // console.log(arrayData)
    // console.log("this.pallets 2 " + JSON.stringify(this.pallets));
    let found = layerrecord.filter((item) => item.pallet_no === pallet_no);
    // console.log("pallet_no inside getLayer = " + pallet_no);
    // console.log("found getLayer " + JSON.stringify(found));
    return found;
  };

  getPallets = async () => {
    const paramsid = parseInt(this.props.match.params.palletid)
    let id = 0;
    let records = [];
    try {
      let resonse = await axios.get(`/Threed/getPallets`);
     const designData= resonse.data.filter((item)=>{
        if(item.palletId===paramsid){
          return item
        }

      })
      this.setState({
        intermediate_Layer_Length:designData[0].intermediateLayerLength,
        intermediate_Layer_Width:designData[0].intermediateLayerWidth,
        WA_1_Height_Z_Dir: designData[0].working_area_1_Height_Z_Direction,
        WA_2_Height_Z_Dir: designData[0].working_area_2_Height_Z_Direction
      })
      records = resonse.data;
      // console.log("records = ", records);
      this.pallets.push(records)
      // console.log(this.pallets)
      return records;
    } catch (err) {
      // console.log(err);
    }
  };


  downloadFilePallet = async (pallet_no) => {
    this.setState({
      exportButtonForPallet: true
    })
    let PalletArray = []
    let PalletRowsTemp = [];
    const pltid = this.state.palletid;
    let { t } = this.props;
    const id = parseInt(this.props.match.params.palletid);
    let response = await axios.get(`/threed/GetSinglePallet/${id}`)
    // console.log("Inside downloadFilePallet response.data ", response.data);
    PalletArray.push(response.data)
    // console.log("Inside downloadFilePallet PalletArray ", PalletArray);

    let PalletArray1 = PalletArray.flat();
    let pallet_1 = { ...PalletArray1[0] }
    let pallet_2 = { ...PalletArray1[1] }

    // var layerdate1 = await this.getLayerForExport(pltid);
    var casedate1 = await this.getPrcForExport(pltid, PalletArray);

    try {
      const fileName = this.state.palletname;
      const outputjason = PalletArray.concat(this.arrayData1);
      const outputjason1 = outputjason.flat();

      outputjason1.forEach((item) => {
        const cases = item.cases || [];

        const filteredCases = cases.filter(({ Prepos, pos }) => {
          const filteredPrepos = Prepos || [];

          const filteredPos = pos || [];

          const arePreposAllZeros = filteredPrepos.every(
            (coord) => coord.X === 0 && coord.Y === 0
          );

          const arePosAllZeros = filteredPos.every(
            (coord) => coord.X === 0 && coord.Y === 0
          );

          return !(arePreposAllZeros && arePosAllZeros);
        });

        if (filteredCases.length === 0) {
          delete item.cases;
        } else {
          item.cases = filteredCases;
        }

        for (const key in item) {
          if (key !== "cases" && typeof item[key] === "object") {
            const filteredProps = item[key].filter(
              ({ X, Y, Z }) => X !== 0 || Y !== 0 || Z !== 0
            );

            item[key] = filteredProps;
          }
        }
      });

      const jsonOutput = JSON.stringify(outputjason1);

      const blob = new Blob([jsonOutput], { type: "application/json" });
      const href = await URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.download = fileName + ".json";
      document.body.appendChild(link);
      toast.success(t('PalletDataisDownloaded'),
        { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
      link.click();
      document.body.removeChild(link);

      this.setState({
        exportButtonForPallet: false
      })
    } catch (e) {
      // console.log("error inside downloadFilePallet = " + e);
    }
  };

  handleStartSimulation = (event) => {
    this.tempVarForSimFaild=0;
    let { t } = this.props
    const { rangeValue } = this.state

    if (this.state.simulationSpeed === 0) {
      const rangeValue = this.state.rangeValue;//coming from initial state
      this.state.simulationSpeed = (10 - (rangeValue - 1)) / 3;
    }

    console.log(this.state.simulationSpeed)
    if (rangeValue === 0) {
      toast.error(t('0simulationspeed,simulationcannotbestarted'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      return
    }
    console.log("checking simmulation spped in simulation start::: ", this.state.simulationSpeed, " ::: ", this.state.rangeValue)
    if (this.state.simulationSpeed != 0 && this.state.simulationSpeed != 3.6666666666666665) {

      if (this.state.abordSimulation || this.state.simulationComplete) {
        this.setState({
          abordSimulation: false,
          simulationRunning: false,
          simulationButton: false,
          simulationStatus: "",
        }, () => {
          setTimeout(() => {
            this.state.simulationRunning = true;
            this.state.simulationStatus = "";
            this.setState({
              abortButton: false,
              abordSimulation: false,
              simulationRunning: true,
              simulationButton: true,
              simulationStatus: "",
              simulationComplete: false,
            })
          }, 50)

        })
      }
      if (this.state.simulationRunning == false) {
        this.state.simulationRunning = true;
        this.state.simulationStatus = "";
        this.setState({
          abortButton: false,
          abordSimulation: false,
          simulationRunning: true,
          simulationButton: true,
          simulationStatus: "",
          simulationComplete: false,
        })
      }
    }
  }

  handleAbortSimulation = (event, case_no, schema, layer_no) => {
    this.tempVarForSimFaild = this.tempVarForSimFaild + 1;
       if (event == "collision") {
         let { t } = this.props;
   
    if(this.tempVarForSimFaild == 1){
      toast.error(`${t(`casecollisiondetected`)} : ${t("schema")} ${schema.split(" ")[1]}, ${t("case")} Nr. ${case_no}`, { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
 }
         // console.log("checking case collision::case_No:::: ", case_No)
         this.state.simulationStatus = (t("failed"));
         this.setState({
           simulationStatus: (t("failed")),
           simulationButton: false,
           simulationComplete: true,
         })
       } else {
         if (this.state.simulationRunning == true) {
           let { t } = this.props;
   
           // this.state.simulationRunning = false;
           this.setState({
             abortButton: true,
             abordSimulation: true,
             // simulationRunning: false,
             simulationStatus: (t("aborted")),
             simulationButton: false,
             simulationComplete: true,
           })
         }
       }
   
   
     }

  handleSimSpeedChange = (event) => {
    const rangeValue = Number(event.target.value);
    const simulationSpeed = (10 - (rangeValue - 1)) / 3;

    this.setState({
      rangeValue: rangeValue,
      simulationSpeed: simulationSpeed,
    });

    if (simulationSpeed == 3.6666666666666665) {
      this.setState({
        simulationButton: false,
      })
    } else if (this.state.abordSimulation != true && this.state.simulationRunning) {
      this.setState({
        simulationButton: true,
      })
    }

    // console.log("simulationSpeed......" + simulationSpeed);
  }

  handleSimulationPassed = (event) => {
    let { t } = this.props;
    this.state.simulationStatus = (t("passed"));
    this.setState({
      simulationComplete: true,
      simulationStatus: (t("passed")),
      simulationButton: false,
    })
  }

  resetSimulationStates = () => {
    this.setState({
      abortButton: false,
      simulationRunning: false,
      simulationButton: false,
      simulationStatus: "",
      rangeValue: 6,
      caseDimensionToggle: false,
      LabelDescriptionToggle: false,
    })

  }



  handleTouchStart = (event) => {
    if (this.state.panelname == "panel4") {
      const touches = event.touches;
      if (touches.length === 2) {
        const touch1 = touches[0];
        const touch2 = touches[1];
        const distance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
        this.touchStartDistance = distance;
      }

    }
  };

  handleTouchMove = (event) => {
    if (this.state.panelname == "panel4") {

      this.state.pinchZoom = 1;

      const touches = event.touches;
      if (touches.length === 2) {
        const touch1 = touches[0];
        const touch2 = touches[1];
        const distance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);

        if (distance > this.touchStartDistance) {
          //ZoomIn
          if (this.state.mapPinchValue > 100) {
            this.zoomInPallet_LayerCreator(event, "pinchZooming", 100);

          } else {
            this.zoomInPallet_LayerCreator(event, "pinchZooming", (this.state.mapPinchValue + 10));

          }

        } else if (distance < this.touchStartDistance) {
          //ZoomOut
          if (this.state.mapPinchValue < 0) {
            this.zoomInPallet_LayerCreator(event, "pinchZooming", 0);

          } else {
            this.zoomInPallet_LayerCreator(event, "pinchZooming", (this.state.mapPinchValue - 10));

          }
        }
      }
    }
  };

  handleTouchEnd = () => {
    if (this.state.panelname == "panel4") {
      this.touchStartDistance = 0;

    }
  };
  render() {
    const { isExpanded } = this.state;
    let intermediateValue = this.state.intermediate_Layer_Type;
    // console.log("intermediateValue inside render " + intermediateValue);
    if (this.state.arrowUpdate === true) {
      this.state.arrowUpdate = false;
    }
    var caseDataLength = this.state.case_data.length;
    // console.log("caseDataLength inside render = " + caseDataLength);
    var noofcaseA = 1, noofcaseB = 1, noofcaseC = 1;
    try {
      noofcaseA = parseInt(this.state.cases_Schema_A);
      if (isNaN(noofcaseA)) {
        noofcaseA = 1;
      }
    }
    catch (e) {
      noofcaseA = 1;
      // console.log("error inside render = " + e);

    }

    try {
      noofcaseB = parseInt(this.state.cases_Schema_B);
      if (isNaN(noofcaseB)) {
        noofcaseB = 1;
      }
    }
    catch (e) {
      noofcaseB = 1;
      // console.log("error inside render = " + e);
    }

    try {
      noofcaseC = parseInt(this.state.cases_Schema_C);
      if (isNaN(noofcaseC)) {
        noofcaseC = 1;
      }
    }
    catch (e) {
      noofcaseC = 1;
      // console.log("error inside render = " + e);
    }
    // console.log("noofcaseA inside render = " + noofcaseA);
    // console.log("noofcaseB inside render = " + noofcaseB);
    // console.log("noofcaseC inside render = " + noofcaseC);
    const params = {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      onInit: (swiper) => {
        this.swiper = swiper
      }
    }
    // this.state.setVariantName_SchemaA =  this.setVariantName_SchemaA;
    const typeoptions = this.typeoptions5;
    const palletname = this.state.palletname;
    // console.log("typeoptions = " + typeoptions)
    // console.log("UI updated = " + this.state.dropdownUpdate)
    // console.log("Layer_Data", this.state.layer_data);
    // console.log("case_data", this.state.case_data);

    const obj = this.state.layer_data;
    const objPRC = this.state.case_data;

    // console.log("this.casedata.length " + this.state.case_data.length);
    // if (this.state.case_data.length <= 0) {
    //   // console.log("this.casedata indexed null");
    // } else {
    //   // console.log("this.casedata indexed" + this.state.case_data[this.state.case_data.length - 1].offset_X_neg);

    // }

    const enableCarousel = this.enableCarousel;
    const enableCarousel1 = this.state.enableCarousel1;
    const enableHeaderA = this.state.enableHeaderA;
    const enableHeaderB = this.state.enableHeaderB;
    const enableHeaderC = this.state.enableHeaderC;
    const { t } = this.props; // localization
    return (
      <>
        <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} fontFamily='Roboto'>
          <div className="parentPallet" style={ParentGridstyle}>
            {/* <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} fontFamily='Roboto'> */}
            <Grid container xs={7} sm={7} md={7} lg={7} spacing={0} fontFamily='Roboto' style={containerGriddStyle}>
              <Grid item xs={12} sm={12} md={12} lg={12} width={threedwidth} height={threedheight}>

                {/* <div>

      </div> */}
                <Paper style={{ position: "relative", width: threedwidth, height: threedheight }}>

                  <a href="#" ref={this.downloadLink} />
                  {
                    (this.state.caseImageLoad0Deg.length > 0) &&
                    (<div className="photo-container" style={{ display: enableCarousel ? "block" : "none", position: "absolute", width: '791px', height: '372px' }} >
                      <div
                        class="carousel-classPrev">
                        {/* <button  */}
                        <NavigateBeforeIcon
                          id="newId-Prev"
                          style={{ fontSize: "50px", marginTop: "155px" }}
                          onClick={this.goPrev}>Prev
                        </NavigateBeforeIcon>

                        {/* </button> */}
                      </div>

                      <div
                        class="carousel-classNext">
                        {/* <button  */}
                        <NavigateNextIcon
                          id="newId-Next"
                          style={{ fontSize: "50px", marginTop: "155px" }}
                          onClick={this.goNext}>Next
                        </NavigateNextIcon>
                        {/* </button> */}
                      </div>

                      <Swiper {...params}
                        ref={this.swiperRef}
                        id="swiperCarousal"
                        navigation
                        onTouchStart={
                          (e) => {
                            this.handleCarouselUpdate(e);
                          }
                        }
                        onClick={this.updateSelection}
                        effect="coverflow"
                        // grabCursor="true"
                        centeredSlides="true"
                        spaceBetween={10}
                        slidesPerView={4}
                        loop="true"
                        // pagination={{ clickable: true, dynamicBullets: true }}
                        coverflowEffect={{
                          rotate: 20,
                          stretch: 2,
                          depth: 250,
                          modifier: 1,
                          slideShadows: false,

                        }}

                        style={{ position: "relative", width: "569px", margin: "10px" }}

                      >

                        {this.imageSrc_array.map((image, index) => (


                          <SwiperSlide key={index} style={{ position: "relative" }}
                            onClick={() => {this.rotate_180_degrees(index)
                            this.Vertical_flip(index)
                            this.Horizontally_flip(index)
                            
                            }}

                 
                          >
                            <p style={{ marginTop: this.state.dyMarginTop_swiperText, textAlign: "center", marginBottom: this.state.dyMarginBottom_swiperText, marginLeft: this.state.dyMarginLeft_swiperText, position: "relative" }}>
                              {this.variantName_array[index]}</p>
                            <img src={image} alt="" style={{ marginTop: this.state.dyMarginTop_swiper, left: "-7px", right: "17px", border: "2px solid", position: "relative" }} />

                          </SwiperSlide>

                        ))}

                      </Swiper>


                    </div>)}

                  {enableCarousel1 && (<div className="photo-container" style={{ position: "absolute", width: '791px', height: '372px' }} >
                    <Swiper
                      navigation={{
                        nextEl: ".next",
                        prevEl: ".prev",
                      }}
                      // onTouchStart={(e) => {
                      //   this.handleCarousel1Update(e);
                      // }}
                      initialSlide={this.state.selectedOne ? "0" : "1"}
                      centeredSlides="true" //for one and two
                      spaceBetween={2}
                      slidesPerView={1}
                      breakpoints={{
                        900: {
                          spaceBetween: 0,
                          slidesPerView: 1,
                        },
                        500: {
                          spaceBetween: 1,
                          slidesPerView: 1
                        }

                      }}>

                      {[0, 1].map((onetwo, index) => (

                        <SwiperSlide style={{ height: "400px" }} key={index}>
                          <div></div>
                          {/* <canvas ref={this.myRef} style={{position : "relative", marginTop: this.state.margintop_prc, visibility: this.state.enableCanvas }}></canvas> */}
                        </SwiperSlide>

                      ))}
                    </Swiper>
                  </div>
                  )
                  }
                  {enableHeaderA && (<div>
                    <p style={{ marginBottom: "-50px", marginLeft: "370px" }}>{this.state.setVariantName_SchemaA}</p>
                  </div>
                  )}
                  {enableHeaderB && (<div>
                    <p style={{ marginBottom: "-50px", marginLeft: "370px" }}>{this.state.setVariantName_SchemaB}</p>
                  </div>
                  )}
                  {enableHeaderC && (<div>
                    <p style={{ marginBottom: "-50px", marginLeft: "370px" }}>{this.state.setVariantName_SchemaC}</p>
                  </div>
                  )}

                  {/* rotation hota hai yha se label ka */}
                  {/* GreenRect Canvas */}
                  <canvas
                    id="rotationCanvas"
                    ref={this.myRef_GR}
                    style={{
                      position: "absolute",
                      zIndex: "5",
                      marginTop: this.state.margintop_prc,
                      marginBottom_greenrect: this.marginBottom_greenrect,
                      visibility: this.state.canvasGreenRect,
                    }}
                    onClick={(e) => this.caseRotateOnClickHandler(e)}
                    onTouchStart={(e) => this.handleTouchStart(e)}
                    onTouchMove={(e) => this.handleTouchMove(e)}
                    onTouchEnd={(e) => this.handleTouchEnd(e)}
                  ></canvas>
                  {/* Orange Canvas */}
                  <canvas
                    id="rotationCanvas"
                    ref={this.myRef_OR}
                    style={{
                      position: "absolute",
                      zIndex: "5",
                      marginTop: this.state.margintop_prc,
                      marginBottom_greenrect: this.marginBottom_greenrect,
                      visibility: this.state.canvasOrangeRect,
                    }}
                    onClick={(e) => this.caseRotateOnClickHandler(e)}
                    onTouchStart={(e) => this.handleTouchStart(e)}
                    onTouchMove={(e) => this.handleTouchMove(e)}
                    onTouchEnd={(e) => this.handleTouchEnd(e)}
                  ></canvas>
                  {/* RedRect Canvas */}
                  <canvas
                    id="rotationCanvas"
                    ref={this.myRef_RD}
                    style={{
                      position: "absolute",
                      zIndex: "5",
                      marginTop: this.state.margintop_prc,
                      marginBottom_greenrect: this.marginBottom_greenrect,
                      visibility: this.state.canvasRedRect,
                    }}
                    onClick={(e) => this.caseRotateOnClickHandler(e)}
                    onTouchStart={(e) => this.handleTouchStart(e)}
                    onTouchMove={(e) => this.handleTouchMove(e)}
                    onTouchEnd={(e) => this.handleTouchEnd(e)}
                  ></canvas>

                  {this.state.Margin_Width !== "580px" ?

                    <canvas
                      className='GreenCanCaseFreez'
                      ref={this.myRef_GRCaseFreez}
                      style={{
                        position: "absolute",
                        zIndex: "4",
                        visibility: this.state.canvasfreezGreenRect,
                        marginTop: this.state.Margin_TopLC,
                        width: this.state.Margin_WidthLC,
                        height: this.state.Margin_HeightLC,
                        left: this.state.Margin_LeftLC,
                      }}>
                    </canvas>
                    :

                    <canvas
                      className='GreenCanCaseFreez'
                      ref={this.myRef_GRCaseFreez}
                      style={{
                        position: "absolute",
                        zIndex: "4",
                        visibility: this.state.canvasfreezGreenRect,
                        marginTop: this.state.margintop_prc,
                        marginBottom_greenrect: this.marginBottom_greenrect,
                      }}>
                    </canvas>
                  }
                  {/* zoom hone wala canvaas */}
                  <canvas
                    id="pallet"
                    ref={this.myRef_forPRC}
                    style={{
                      zIndex: "1",
                      visibility: this.state.enableCanvasPRC,
                      position: "absolute",
                      marginTop: this.state.Margin_Top,
                      width: this.state.Margin_Width,
                      height: this.state.Margin_Height,
                      left: this.state.Margin_Left,
                      transform: `scale(${this.state.scale})`
                    }}>

                  </canvas>

                  {/* sirf outerRect walla canvas(working area) */}
                  <canvas
                    id="workingArea"
                    ref={this.myRef_forPRCOuterRect}
                    style={{
                      visibility: this.state.enableCanvasPRC,
                      position: "absolute",
                      marginTop: this.state.Margin_Top,
                      width: this.state.Margin_Width,
                      height: this.state.Margin_Height,
                      left: this.state.Margin_Left,
                      transform: `scale(${this.state.scale})`
                    }}>

                  </canvas>
                  <canvas
                    id="rotationCanvas"
                    ref={this.myRef_forPDCanvas}
                    style={{
                      position: "absolute",
                      visibility: this.state.forPDCanvas,
                      // zIndex: 2
                    }}
                  ></canvas>


                  <canvas
                    id="rotationCanvasPatil"
                    ref={this.myRef_forPDPatilCanvas}
                    style={{
                      position: "absolute",
                      visibility: this.state.forPDPatilCanvas,
                      // zIndex: 2
                    }}
                  ></canvas>

                  <canvas
                    id="rotationpriyuCanvasPatil"
                    ref={this.myRef_forPDPatilpriyaCanvas}
                    style={{
                      position: "absolute",
                      visibility: this.state.forPDPatilpriyaCanvas,
                      // zIndex: 2
                    }}
                  ></canvas>
                  <canvas
                    className='GreenCanCaseFreez'
                    ref={this.myRef_for_PatternWizard}
                    style={{
                      position: "absolute",
                      visibility: this.state.canvas_PatternWizard,
                    }}>
                  </canvas>
                  <canvas
                    className='GreenCanCaseFreez'
                    ref={this.myRef_for_LayerCreator}
                    style={{
                      position: "absolute",
                      zIndex: this.state.valueforzindex,
                      visibility: this.state.canvas_LayerCreator,
                      marginTop: this.state.Margin_Top,
                      width: this.state.Margin_Width,
                      height: this.state.Margin_Height,
                      left: this.state.Margin_Left,
                    }}>
                  </canvas>
                  {this.state.panelname == "" || this.state.panelname == "panel2"
                    ?

                    <div >
                      {/* <video style={{ width: "791px", height: "372px" }} className='videoTag' autoPlay loop muted>
                        <source
                          src={sample}
                          type="video/mp4"
                          autoPlay="true"  />
                      </video> */}
                      <img src={LogoPaster} style={{ height: "338px", marginTop: "18px", marginLeft: "119px" }} className='videoTag' alt="" />
                    </div>
                    :
                    ""
                  }
                  {
                    this.state.panelname == "panel4" ?
                      <Slider
                        style={{ width: "3px", height: "100px", left: "748px", top: "268px", zIndex: "5" }}
                        orientation="vertical"
                        value={this.state.mapPinchValue}
                        min={0}
                        step={1}
                        max={100}
                        onChange={(e) => this.zoomInPallet_LayerCreator(e)}
                        aria-label="Temperature"
                        valueLabelDisplay="auto"
                      />
                      :

                      ""
                  }
                  {/* Below canvas is responsile for Basic Para , this.myRef_forSingleCanvas*/}
                  <canvas ref={this.myRef_forSingleCanvas} style={{ position: "absolute", visibility: this.state.forSingleCanvas }} ></canvas>
                  {(this.state.panelname == "panel6" || this.state.panelname == "panel7") &&
                    // this.state.panelname == "panel7" 
                    <Simulation style={{ position: "absolute", height: '372px !important' }}
                      simulationSpeed={this.state.simulationSpeed}
                      simulationRunning={this.state.simulationRunning}
                      Pallet_Length={this.map(this.Pallet_Length, 0, 1400, 0, 2.990)}
                      Pallet_Width={this.map(this.Pallet_Width, 0, 1400, 0, 2.992)}
                      Case_Length={this.map(this.Case_Length, 0, 1400, 0, 2.965)}
                      Case_Width={this.map(this.Case_Width, 0, 1400, 0, 2.965)}
                      Case_Height={this.map(this.Case_Height, 0, 1400, 0, 2.965)}
                      pallet_xpos={this.p_xpos} // pallet start position to set a start position for case placement
                      pallet_ypos={this.p_ypos} // pallet start position to set a start position for case placement
                      simCasesPositionsForSchemaA={this.simCasesPositionsForSchemaA}
                      simCasesPositionsForSchemaB={this.simCasesPositionsForSchemaB}
                      simCasesPositionsForSchemaC={this.simCasesPositionsForSchemaC}
                      layer_data={this.state.layer_data}
                      S_state={this.state.panelname}
                      intermediate_Layer_Type={this.map(this.state.intermediate_Layer_Type, 0, 1400, 0, 2.965)}
                      intermediate_Layer_Type_Length={this.map(this.state.intermediate_Layer_Length, 0, 1400, 0, 2.965)}
                      intermediate_Layer_Type_Width={this.map(this.state.intermediate_Layer_Width, 0, 1400, 0, 2.965)}
                      handleAbortSimulation={this.handleAbortSimulation}
                      handleSimulationPassed={this.handleSimulationPassed}
                      WA_1_width_X_Dir={this.map(this.WA_1_width_X_Dir, 0, 1400, 0, 2.965)}
                      WA_1_Length_Y_Dir={this.map(this.WA_1_Length_Y_Dir, 0, 1400, 0, 2.965)}
                      WA_2_width_X_Dir={this.map(this.WA_2_width_X_Dir, 0, 1400, 0, 2.965)}
                      WA_2_Length_Y_Dir={this.map(this.WA_2_Length_Y_Dir, 0, 1400, 0, 2.965)}
                      WA_1_Offset_X_Dir={this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 2.965)}
                      WA_1_Offset_Y_Dir={this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 2.965)}
                      WA_2_Offset_X_Dir={this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 2.965)}
                      WA_2_Offset_Y_Dir={this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 2.965)}
                      selectedOne={this.state.selectedOne}
                      selectedTwo={this.state.selectedTwo}
                      originPal1={this.originPal1}
                      originPal2={this.originPal2}
                      case_Type={this.state.case_Type}
                      t={t}
                      setDownloadablePDF={this.setDownloadablePDF}
                      abordSimulation={this.state.abordSimulation}
                      Case_Height_Original={this.Case_Height}
                      noOfLayers={this.noOfLayers}
                      simulationToast={this.state.simulationToast}

                    // callSchema1={this.callSchema1}                    
                    />
                  }


                  {/* Below canvas is responsile for creating pallet  */}
                  <canvas ref={this.myRef} width={this.state.P_width} height={this.state.P_length} style={{
                    position: "relative",
                    visibility: "hidden"
                  }}></canvas>
                  <canvas ref={this.myRefCase} style={{ visibility: "hidden" }}></canvas>
                </Paper>
                {/* <Paper style={{ width: threedwidth, height: threedheight }}>
                  <canvas ref={this.myRef}></canvas>
                  <a href="#" ref={this.downloadLink} />
                </Paper> */}

                {/* </Grid> */}

                <div className="container" style={containerMarginStyle} >
                  <div className='textplate' style={DivPFMarginStyle}>
                    <TextField
                      style={{ left: "30px", marginTop: "15px", marginBottom: '15px', height: "18px", backgroundColor: "#E8E7DE", justifyContent: "center", alignItems: "center", textAlign: "center", }}
                      // style={{ marginLeft:"-45px", marginTop:"16px", marginBottom: '15px', height: "18px", backgroundColor:"white", justifyContent:"center", alignItems:"center", textAlign:"center",  }}
                      id="outlined-typepalletename"
                      value={this.state.palletname}
                      disabled={true}
                      InputLabelProps={{
                        shrink: true,
                        // style: { fontSize: "16px", top:"2px", color: "black", fontWeight: "900", backgroundColor: "#E8E7DE", height: "27px", width: "206px", textAlign: "center", justifyContent: "center", alignItems: "center", bottom: "2px", padding: "6px" }
                      }}
                      InputProps={{
                        disableUnderline: true,
                        readOnly: false,
                        style: { fontSize: "16px", top: "2px", color: "black", backgroundColor: "#E8E7DE", height: "27px", width: "206px", textAlign: "center", justifyContent: "center", alignItems: "center", bottom: "2px", padding: "6px" }
                      }}
                      margin="dense"
                      // variant="outlined"
                      size="small"
                    />
                    <Button style={{ zIndex: 5, marginLeft: "60px", alignSelf: 'center', minWidth: "0px", width: "35px", height: "35px", border: "1px solid black", right: 0, borderRadius: "50%" }} className="backBtn" onClick={this.handleBack}>
                      {/* <Button style={{marginLeft: '45px' , marginTop: "12px", display: 'flex', alignSelf: 'center',  width:"5px", height:"65px",  marginBottom: '10px', marginRight: '200px', border: '1px solid black', borderRadius:"98px", }} className="backBtn"
                      onClick={this.handleBack}> */}
                      <HomeIcon />
                    </Button>

                  </div>
                  <div style={{ marginLeft: "11px", display: 'flex', flexDirection: "row", width: "255px", height: "46px", backgroundColor: color2 }}>
                    {this.state.panelname != "panel4" &&
                      <>
                        {this.state.panelname != "panel2" &&
                          <>
                            {this.state.panelname != "panel5" &&
                              <>
                                {this.state.panelname != "panel6" &&
                                  <>
                                    <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "24px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '10px', borderRadius: "98px", backgroundColor: this.state.colorfor1, border: '1px solid', left: 10 }} className="backBtn"
                                      onClick={this.buttonForOne} hidden={this.state.pallet_12} >
                                      1
                                    </Button>
                                    <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "24px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", padding: 10, marginBottom: '10px', border: '1px solid black', borderRadius: "98px", backgroundColor: this.state.colorfor2, left: 20 }} className="backBtn"
                                      onClick={this.buttonForTwo} hidden={this.state.pallet_12} >
                                      2
                                    </Button>
                                  </>}
                              </>}
                          </>}
                      </>}

                    {(this.state.panelname == "panel5" || this.state.panelname == "panel6") && this.state.new_forOne == true &&
                      <>
                        <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "24px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '10px', borderRadius: "98px", backgroundColor: this.state.colorfor1, border: '1px solid', left: 10 }} className="backBtn"
                          onClick={this.buttonForOne} hidden={this.state.pallet_12}
                        // disabled={this.state.new_forTwo}
                        >
                          1
                        </Button>
                        <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "24px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", padding: 10, marginBottom: '10px', border: '1px solid black', borderRadius: "98px", backgroundColor: this.state.colorfor2, left: 20, visibility: "hidden" }} className="backBtn"
                          onClick={this.buttonForTwo} hidden={this.state.pallet_12}
                          disabled={this.state.new_forTwo}
                        >
                          2
                        </Button>
                      </>}

                    {(this.state.panelname == "panel5" || this.state.panelname == "panel6") && this.state.new_forTwo == true &&
                      <>
                        <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "24px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '10px', borderRadius: "98px", backgroundColor: this.state.colorfor1, border: '1px solid', left: 10, visibility: "hidden" }} className="backBtn"
                          onClick={this.buttonForOne} hidden={this.state.pallet_12}
                        // disabled={this.state.new_forOne}
                        >
                          1
                        </Button>
                        <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "24px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", padding: 10, marginBottom: '10px', border: '1px solid black', borderRadius: "98px", backgroundColor: this.state.colorfor2, left: 20 }} className="backBtn"
                          onClick={this.buttonForTwo} hidden={this.state.pallet_12}
                        // disabled={this.state.new_forTwo}
                        >
                          2
                        </Button>
                      </>}
                  </div>
                  <div style={{ marginLeft: "10px", display: 'flex', flexDirection: "row", width: "255px", height: "46px", backgroundColor: color2 }}>
                    {/* <Button style={{ marginTop: "12px", fontSize:"24px",  display: 'flex', alignSelf: 'center',  minWidth:0,width: "35px",  height: "48px",   marginBottom: '10px', borderRadius:"98px", backgroundColor: this.state.colorfor1, border: '1px solid', left: 10 }} className="backBtn"
                      onClick={this.buttonForOne} hidden={this.state.pallet_12} >
                    1
                  </Button>
                  <Button style={{ marginTop: "12px", fontSize:"24px", display: 'flex', alignSelf: 'center', minWidth:0,width: "35px",  height: "48px",   padding: 10, marginBottom: '10px', border: '1px solid black', borderRadius:"98px", backgroundColor: this.state.colorfor2,  left: 20 }} className="backBtn"
                      onClick={this.buttonForTwo} hidden={this.state.pallet_12} >
                    2
                  </Button> */}

                    <Button style={{ zIndex: 5, marginTop: "12px", fontSize: "24px", display: 'flex', alignSelf: 'center', width: "35px", height: "35px", left: "10px", marginBottom: '10px', borderRadius: "98px", minWidth: "0px", border: '1px solid black', backgroundColor: this.state.colorA }}
                      hidden={this.state.pallet_bool}
                      disabled={this.state.handlecolorA_ED ? this.state.handlecolorA_ED : (this.state.panelname == "panel3" ? this.state.cases_Schema_A == 0 : (this.state.panelname == "panel4" || this.state.panelname == "panel5") ? this.state.setVariantName_SchemaA == "" : false)}
                      onClick={this.state.cases_Schema_A != 0 && this.handlecolorA}
                      className="backBtn"
                    >
                      A
                    </Button>
                    <Button style={{ zIndex: 5, marginTop: "12px", fontSize: "24px", display: 'flex', alignSelf: 'center', width: "35px", height: "35px", left: "20px", marginBottom: '10px', borderRadius: "98px", minWidth: "0px", border: '1px solid black', backgroundColor: this.state.colorB }}
                      hidden={this.state.pallet_bool}
                      disabled={this.state.handlecolorB_ED ? this.state.handlecolorB_ED : (this.state.panelname == "panel3" ? this.state.cases_Schema_B == 0 : (this.state.panelname == "panel4" || this.state.panelname == "panel5") ? this.state.setVariantName_SchemaB == "" : false)}
                      onClick={this.state.cases_Schema_B != 0 && this.handlecolorB}
                      className="backBtn"
                    >
                      B
                    </Button>
                    <Button style={{ zIndex: 5, marginTop: "12px", fontSize: "24px", display: 'flex', alignSelf: 'center', width: "35px", height: "35px", left: 30, marginBottom: '10px', borderRadius: "98px", minWidth: "0px", border: '1px solid black', backgroundColor: this.state.colorC }}
                      hidden={this.state.pallet_bool}
                      // disabled={this.state.cases_Schema_C == 0}
                      disabled={this.state.handlecolorC_ED ? this.state.handlecolorC_ED : (this.state.panelname == "panel3" ? this.state.cases_Schema_C == 0 : (this.state.panelname == "panel4" || this.state.panelname == "panel5") ? this.state.setVariantName_SchemaC == "" : false)}
                      onClick={this.state.cases_Schema_C != 0 && this.handlecolorC}
                      className="backBtn"
                    >
                      C
                    </Button>
                  </div>

                </div>

              </Grid>
            </Grid>

            <Grid container xs={5} sm={5} md={5} lg={5} spacing={1} fontFamily='Roboto'
              style={{ left: "-5px", backgroundColor: "white", width: "526px", marginRight: "24px", overflowY: "scroll", overflowX: "hidden", marginLeft: "-2px", marginTop: "28px", marginBottom: "28px" }}>
              <Grid item xs={12} sm={12} md={12} lg={12} width={widgetwidth} style={{ margin: "10px", paddingLeft: "8px", color: 'white', }}>

                <BasicParameter

                  // originPalfor={this.originPal1}
                  handleChangepanel={this.handleChangepanel}
                  drawPallet_1_2={this.drawPallet_1_2}
                  expanded_panel={this.state.expanded}

                  enablefor2={this.state.enablefor2}
                  originPal1={this.state.originPal1}
                  handleSelection={this.handleSelection}
                  updateSelectionPal1={this.updateSelectionPal1}
                  basic_parameter={this.state.basic_parameter}

                  enablefor1={this.state.enablefor1}
                  originPal2={this.state.originPal2}
                  // onBlur_OriginPal2={updateSelectionPal2}

                  firstcase_pal1={this.state.firstcase_pal1}
                  // firstCase12OnChange={firstCase12OnChange}
                  // updateSelectionCase1={updateSelectionCase1}

                  firstcase_pal2={this.state.firstcase_pal2}
                  // onChange_firstcase_pal2={(e) => firstCase12OnChange}
                  // updateSelectionCase2={this.updateSelectionCase2}
                  firstCaseOriginChangeFlush={this.firstCaseOriginChangeFlush}
                  circle={this.circle}
                  updatePallet={this.updatePallet}
                  selectedOne={this.state.selectedOne}

                  selectedTwo={this.state.selectedTwo}
                  CasesSchemaA={this.CasesSchemaA}
                  CasesSchemaB={this.CasesSchemaB}
                  CasesSchemaC={this.CasesSchemaC}
                  cases_Schema_A1={this.cases_Schema_A1}
                  cases_Schema_B1={this.cases_Schema_B1}
                  cases_Schema_C1={this.cases_Schema_C1}
                  cases_Schema_A2={this.cases_Schema_A2}
                  cases_Schema_B={this.cases_Schema_B}
                  cases_Schema_C2={this.cases_Schema_C2}
                  G_firstcase_pal1={this.firstcase_pal1}
                  G_firstcase_pal2={this.firstcase_pal2}

                  G_Pallet_Width={this.Pallet_Width}

                  //
                  errorWorkingaraeaWidth={this.state.errorWorkingaraeaWidth}
                  errorHelperForWorkingareaWidth={this.state.errorHelperForWorkingareaWidth}
                  S_WA_1_width_X_Dir={this.state.WA_1_width_X_Dir}
                  G_WA_1_width_X_Dir={this.WA_1_width_X_Dir}

                  //
                  errorWorkingaraeaLength={this.state.errorWorkingaraeaLength}
                  errorHelperForWorkingareaLength={this.state.errorHelperForWorkingareaLength}
                  S_WA_1_Length_Y_Dir={this.state.WA_1_Length_Y_Dir}
                  G_WA_1_Length_Y_Dir={this.WA_1_Length_Y_Dir}
                  G_Pallet_Length={this.Pallet_Length}
                  // callBlurFor_WorkingareaY={this.callBlurFor_WorkingareaY}

                  errorWorkingaraeaHeight={this.state.errorWorkingaraeaHeight}
                  errorHelperForWorkingareaHeight={this.state.errorHelperForWorkingareaHeight}
                  S_WA_1_Height_Z_Dir={this.state.WA_1_Height_Z_Dir}
                  G_WA_1_Height_Z_Dir={this.WA_1_Height_Z_Dir}



                  errorWorkingaraeaoffsetLength={this.state.errorWorkingaraeaoffsetLength}
                  errorHelperForWorkingareaoffsetLength={this.state.errorHelperForWorkingareaoffsetLength}
                  G_WA_1_Offset_Y_Dir={this.WA_1_Offset_Y_Dir}
                  S_WA_1_Offset_Y_Dir={this.state.WA_1_Offset_Y_Dir}

                  //
                  errorWorkingaraeaoffsetWidth={this.state.errorWorkingaraeaoffsetWidth}
                  errorHelperForWorkingareaoffsetWidth={this.state.errorHelperForWorkingareaoffsetWidth}
                  S_WA_1_Offset_X_Dir={this.state.WA_1_Offset_X_Dir}
                  G_WA_1_Offset_X_Dir={this.WA_1_Offset_X_Dir}

                  G_originPal1={this.originPal1}
                  G_originPal2={this.originPal2}


                  t={t}
                  color1={color1}
                  Green_arrow={Green_arrow}
                  Red_arrow={Red_arrow}
                  Blue_arrow={Light_Blue_arrow}
                  exceptThisSymbols1={exceptThisSymbols1}
                  exceptThisSymbols={exceptThisSymbols}

                  // 2

                  errorWorkingaraeaWidthfor2={this.state.errorWorkingaraeaWidthfor2}
                  errorHelperForWorkingareaWidthfor2={this.state.errorHelperForWorkingareaWidthfor2}
                  S_WA_2_width_X_Dir={this.state.WA_2_width_X_Dir}
                  G_WA_2_width_X_Dir={this.WA_2_width_X_Dir}
                  // callBlurFor_Workingareafor2X={this.callBlurFor_Workingareafor2X}

                  errorWorkingaraeaLengthfor2={this.state.errorWorkingaraeaLengthfor2}
                  errorHelperForWorkingareaLengthfor2={this.state.errorHelperForWorkingareaLengthfor2}
                  S_WA_2_Length_Y_Dir={this.state.WA_2_Length_Y_Dir}
                  G_WA_2_Length_Y_Dir={this.WA_2_Length_Y_Dir}

                  //Height 2
                  S_WA_2_Height_Z_Dir={this.state.WA_2_Height_Z_Dir}
                  G_WA_2_Height_Z_Dir={this.WA_2_Height_Z_Dir}
                  errorWorkingaraeaHeightfor2={this.state.errorWorkingaraeaHeightfor2}
                  errorHelperForWorkingareaHeightfor2={this.state.errorHelperForWorkingareaHeightfor2}
                  // callBlurFor_Workingareafor2Y={this.callBlurFor_Workingareafor2Y}

                  //offset 2
                  errorWorkingaraeaoffsetLengthfor2={this.state.errorWorkingaraeaoffsetLengthfor2}
                  errorHelperForWorkingareaoffsetLengthfor2={this.state.errorHelperForWorkingareaoffsetLengthfor2}
                  S_WA_2_Offset_Y_Dir={this.state.WA_2_Offset_Y_Dir}

                  G_WA_2_Offset_Y_Dir={this.WA_2_Offset_Y_Dir}
                  // callBlurFor_WorkingareaoffsetYfor2={this.callBlurFor_WorkingareaoffsetYfor2}

                  errorWorkingaraeaoffsetWidthfor2={this.state.errorWorkingaraeaoffsetWidthfor2}
                  errorHelperForWorkingareaoffsetWidthfor2={this.state.errorHelperForWorkingareaoffsetWidthfor2}
                  S_WA_2_Offset_X_Dir={this.state.WA_2_Offset_X_Dir}
                  G_WA_2_Offset_X_Dir={this.WA_2_Offset_X_Dir}
                  // callBlurFor_WorkingareaoffsetXfor2={this.callBlurFor_WorkingareaoffsetXfor2}

                  setWA_1_width_X_Dir={this.setWA_1_width_X_Dir}
                  setErrorWorkingaraeaWidth={this.setErrorWorkingaraeaWidth}
                  setErrorHelperForWorkingareaWidth1={this.setErrorHelperForWorkingareaWidth1}

                  set_WA_1_Length_Y_Dir={this.set_WA_1_Length_Y_Dir}
                  setErrorWorkingaraeaLength={this.setErrorWorkingaraeaLength}
                  setErrorHelperForWorkingareaLength1={this.setErrorHelperForWorkingareaLength1}

                  set_WA_1_Height_Z_Dir={this.set_WA_1_Height_Z_Dir}
                  setErrorWorkingaraeaHeight={this.setErrorWorkingaraeaHeight}
                  setErrorHelperForWorkingareaheight1={this.setErrorHelperForWorkingareaHeight1}

                  set_WA_1_Offset_X_Dir={this.set_WA_1_Offset_X_Dir}
                  setErrorWorkingaraeaoffsetWidth={this.setErrorWorkingaraeaoffsetWidth}
                  setErrorHelperForWorkingareaoffsetWidth1={this.setErrorHelperForWorkingareaoffsetWidth1}


                  set_WA_1_Offset_Y_Dir={this.set_WA_1_Offset_Y_Dir}
                  setErrorWorkingaraeaoffsetLength={this.setErrorWorkingaraeaoffsetLength}
                  setErrorHelperForWorkingareaoffsetLenght1={this.setErrorHelperForWorkingareaoffsetLenght1}

                  set_WA_2_width_X_Dir={this.set_WA_2_width_X_Dir}
                  setErrorWorkingaraeaWidthfor2={this.setErrorWorkingaraeaWidthfor2}
                  setErrorHelperForWorkingareaWidthfor2={this.setErrorHelperForWorkingareaWidthfor2}


                  set_WA_2_Length_Y_Dir={this.set_WA_2_Length_Y_Dir}
                  setErrorWorkingaraeaLengthfor2={this.setErrorWorkingaraeaLengthfor2}
                  setErrorHelperForWorkingareaLengthfor2={this.setErrorHelperForWorkingareaLengthfor2}
                  set_WA_2_Height_Z_Dir={this.set_WA_2_Height_Z_Dir}
                  setErrorWorkingaraeaHeightfor2={this.setErrorWorkingaraeaHeightfor2}
                  setErrorHelperForWorkingareaHeightfor2={this.setErrorHelperForWorkingareaHeightfor2}


                  set_WA_2_Offset_X_Dir={this.set_WA_2_Offset_X_Dir}
                  setErrorWorkingaraeaoffsetWidthfor2={this.setErrorWorkingaraeaoffsetWidthfor2}
                  setErrorHelperForWorkingareaoffsetWidthfor2={this.setErrorHelperForWorkingareaoffsetWidthfor2}

                  set_WA_2_Offset_Y_Dir={this.set_WA_2_Offset_Y_Dir}
                  setErrorWorkingaraeaoffsetLengthfor2={this.setErrorWorkingaraeaoffsetLengthfor2}
                  setErrorHelperForWorkingareaoffsetLengthfor2={this.setErrorHelperForWorkingareaoffsetLengthfor2}
                  setS_role={this.state.role}


                />

                <DesignParameter
                  pallet={this.PalletSelection}
                  handleChangepanel={this.handleChangepanel}
                  drawPallet_1_2={this.drawPallet_1_2}
                  expanded_panel={this.state.expanded}

                  backgroundColor={this.state.backgroundColor}

                  G_palletType1={this.palletType1}
                  G_palletType2={this.palletType2}
                  setS_pallete_Type={this.setS_pallete_Type}


                  value_PalletType={this.state.pallete_Type}
                  firstCaseOriginChangeFlush={this.firstCaseOriginChangeFlush}
                  firstCaseOriginChangeFlushA={this.firstCaseOriginChangeFlushA}
                  firstCaseOriginChangeFlushB={this.firstCaseOriginChangeFlushB}
                  firstCaseOriginChangeFlushC={this.firstCaseOriginChangeFlushC}
                  updatefor_Basiparameter_working_Area={this.updatefor_Basiparameter_working_Area}
                  handleSelection_intermediateLayer={this.handleSelection_intermediateLayer}
                  updatePallet={this.updatePallet}
                  S_intermediate_Layer_Type={this.state.intermediate_Layer_Type}
                  G_intermediateLayerType1={this.intermediateLayerType1}
                  G_intermediateLayerType2={this.intermediateLayerType2}
                  S_errorHelperForInter={this.state.errorHelperForInter}
                  S_errorNumberOfInter={this.state.errorNumberOfInter}
                  selectedOne={this.state.selectedOne}
                  selectedTwo={this.state.selectedTwo}
                  countOfIntermediateLayer={this.state.countOfIntermediateLayer}





                  G_setVariantName_SchemaA={this.setVariantName_SchemaA}
                  G_cases_Schema_A1={this.cases_Schema_A1}
                  G_CasesSchemaA={this.CasesSchemaA}
                  G_cases_Schema_A2={this.cases_Schema_A2}
                  G_colorA={this.colorA}
                  G_colorB={this.colorB}
                  G_colorC={this.colorC}

                  G_setVariantName_SchemaB={this.setVariantName_SchemaB}
                  G_cases_Schema_B1={this.cases_Schema_B1}
                  G_CasesSchemaB={this.CasesSchemaB}
                  G_cases_Schema_B2={this.CasesSchemaB}
                  setSetVariantName_SchemaB={this.setSetVariantName_SchemaB}
                  setCases_Schema_B={this.setCases_Schema_B}


                  setS_errorNumberOfLayer={this.setS_errorNumberOfLayer}
                  setS_errorHelperForLayer={this.setS_errorHelperForLayer}
                  setS_layers={this.setS_layers}
                  G_noOfLayers={this.noOfLayers}
                  setS_no_Of_Layers={this.setS_no_Of_Layers}


                  G_drawCaseImage={this.drawCaseImage}
                  G_outside_Label_Priority={this.outside_Label_Priority}
                  G_listForOutsideLabelPrior={this.listForOutsideLabelPrior}
                  G_typeoptions5={this.typeoptions5}
                  G_caseType={this.caseType}
                  G_tempLabelindex={this.G_tempLabelindex}
                  splitCaseType={this.splitCaseType}
                  getCallLabel={this.getCallLabel}
                  setS_outside_Label_Priority={this.setS_outside_Label_Priority}
                  setS_selectedOne={this.setS_selectedOne}
                  setS_selectedTwo={this.setS_selectedTwo}
                  setS_case_Type={this.setS_case_Type}
                  clearingSchemaFields={this.clearingSchemaFields}
                  setS_caseTypeSet={this.setS_caseTypeSet}
                  setS_setDefaultCase={this.setS_setDefaultCase}



                  G_setVariantName_SchemaC={this.setVariantName_SchemaC}
                  G_cases_Schema_C1={this.cases_Schema_C1}
                  G_CasesSchemaC={this.CasesSchemaC}
                  G_cases_Schema_C2={this.cases_Schema_C2}
                  setS_setVariantName_SchemaC={this.setS_setVariantName_SchemaC}
                  setS_cases_Schema_C={this.setS_cases_Schema_C}



                  // handleSelection_PalletType={this.handleSelection_PalletType}
                  onBlur_PalletType={this.updateSelection1}



                  value_CaseType={this.state.case_Type}
                  onBlur_CaseType={this.updateSelection2}
                  // onChange_CaseType={this.handleSelection_CaseType}


                  value_IntermediateLayerType={this.state.intermediate_Layer_Type}
                  value_IntermediateLayerWidth={this.state.intermediate_Layer_Width}
                  value_IntermediateLayerLength={this.state.intermediate_Layer_Length}

                  // onChange_IntermediateLayerType={this.handleSelection_PalletType}
                  // onBlur_IntermediateLayerType={this.updateSelection3}


                  value_LayerCreator={this.state.no_Of_Layers}
                  // onChange_LayerCreator={this.changeLayer}
                  onBlur_LayerCreator={this.onchangeLayerBlur}


                  value_SchemaA={this.state.cases_Schema_A}
                  // onChange_SchemaA={this.handleChangeForCasesSchemaA}
                  onBlur_SchemaA={this.updateSelectionSchemaA}


                  value_SchemaB={this.state.cases_Schema_B}
                  // onChange_SchemaB={this.handleChangeForCasesSchemaB}
                  onBlur_SchemaB={this.updateSelectionSchemaB}


                  value_SchemaC={this.state.cases_Schema_C}
                  // onChange_SchemaC={this.handleChangeForCasesSchemaC}
                  onBlur_SchemaC={this.updateSelectionSchemaC}

                  typeoptions1={this.typeoptions1}
                  t={t}
                  color1={color1}
                  WA_1_width_X_Dir={this.WA_1_width_X_Dir}
                  WA_1_Length_Y_Dir={this.WA_1_Length_Y_Dir}

                  set_WA_1_Height_Z_Dir={this.state.WA_1_Height_Z_Dir}


                  G_WA_1_Offset_Y_Dir={this.WA_1_Offset_Y_Dir}
                  G_WA_1_Offset_X_Dir={this.WA_1_Offset_X_Dir}

                  WA_2_width_X_Dir={this.WA_2_width_X_Dir}
                  WA_2_Length_Y_Dir={this.WA_2_Length_Y_Dir}
                  set_WA_2_Height_Z_Dir={this.state.WA_2_Height_Z_Dir}

                  G_WA_2_Offset_Y_Dir={this.WA_2_Offset_Y_Dir}
                  G_WA_2_Offset_X_Dir={this.WA_2_Offset_X_Dir}



                  typeoptions3={this.typeoptions3}
                  error_NumberOfInter={this.state.errorNumberOfInter}
                  error_NumberOfInterWidth={this.state.errorNumberOfInterWidth}
                  error_NumberOfInterLength={this.state.errorNumberOfInterLength}
                  helper_Text={this.state.errorHelperForInter}
                  helper_Text_Width={this.state.errorHelperForInterWidth}
                  helper_Text_Length={this.state.errorHelperForInterLength}
                  error1={this.state.errorNumberOfLayer}
                  helperText1={this.state.errorHelperForLayer}
                  exceptThisSymbols={exceptThisSymbols}
                  setPallete_Type={this.setPallete_Type}
                  setintermediate_Layer_Type={this.setintermediate_Layer_Type}
                  palletType1={this.palletType1}
                  palletType2={this.palletType2}
                  setS_errorHelperForInter={this.setS_errorHelperForInter}
                  setS_errorHelperForInterWidth={this.setS_errorHelperForInterWidth}
                  setS_errorHelperForInterLength={this.setS_errorHelperForInterLength}
                  setS_errorNumberOfInter={this.setS_errorNumberOfInter}
                  setS_errorNumberOfInterWidth={this.setS_errorNumberOfInterWidth}
                  setS_errorNumberOfInterLength={this.setS_errorNumberOfInterLength}
                  setS_intermediate_Layer_Type={this.setS_intermediate_Layer_Type}
                  setS_intermediate_Layer_Width={this.setS_intermediate_Layer_Width}
                  setS_intermediate_Layer_Length={this.setS_intermediate_Layer_Length}
                  setSetVariantName_SchemaA={this.setSetVariantName_SchemaA}
                  setCases_Schema_A={this.setCases_Schema_A}
                  casesSchemaPrcUpdate={this.casesSchemaPrcUpdate}
                  forceUpdate={this.forceUpdate}
                  clearingSchemaFields1={this.clearingSchemaFields1}
                  setS_role={this.state.role}
                  S1_dyMarginTop_swiperText={this.S1_dyMarginTop_swiperText}
                  S1_backgroundColor={this.S1_backgroundColor}
                  S1_dyMarginLeft_swiperText={this.S1_dyMarginLeft_swiperText}
                  S1_dyMarginBottom_swiperText={this.S1_dyMarginBottom_swiperText}
                  G_dyMarginTop_swiperText={this.dyMarginTop_swiperText}
                  G_dyMarginLeft_swiperText={this.dyMarginLeft_swiperText}
                  G_dyMarginBottom_swiperText={this.dyMarginBottom_swiperText}
                  S_dyMarginTop_swiperText={this.state.dyMarginTop_swiperText}
                  S_dyMarginLeft_swiperText={this.state.dyMarginLeft_swiperText}
                  S_dyMarginBottom_swiperText={this.state.dyMarginBottom_swiperText}

                />

                <PatternWizard

                  swiperRef={this.swiperRef}
                  handleChangepanel={this.handleChangepanel}
                  drawPallet_1_2={this.drawPallet_1_2}
                  expanded_panel={this.state.expanded}
                  backgroundColor={this.state.backgroundColor}

                  // handleSelection1={this.handleSelection1}
                  // updateSelectionForCases={this.updateSelectionForCases}
                  handleSelection={this.handleSelection}
                  updatePallet={this.updatePallet}
                  Vertical_flip={this.Vertical_flip}
                  Horizontally_flip={this.Horizontally_flip}
                  loadHorizontallyFlippedImage={this.loadHorizontallyFlippedImage}
                  loadVerticallyFlippedImage={this.loadVerticallyFlippedImage}
                  rotate_180_degrees={this.rotate_180_degrees}

                  G_listForOutsideLabelPrior={this.listForOutsideLabelPrior}
                  G_tempLabelindex={this.tempLabelindex}

                  t={t}
                  color1={color1}

                  S_HWeightedSymmetric={this.state.HWeightedSymmetric}
                  selectedOne={this.state.selectedOne}
                  S_HWeighted1={this.state.HWeighted1}
                  S_HWeighted2={this.state.HWeighted2}
                  S_VWeighted1={this.state.VWeighted1}
                  S_VWeighted2={this.state.VWeighted2}
                  S_setVariantName_SchemaA={this.state.setVariantName_SchemaA}
                  S_setVariantName_SchemaB={this.state.setVariantName_SchemaB}
                  S_setVariantName_SchemaC={this.state.setVariantName_SchemaC}
                  S_outside_Label_Priority={this.state.outside_Label_Priority}



                  clearingSchemaFields={this.clearingSchemaFields}
                  firstCaseOriginChangeFlush={this.firstCaseOriginChangeFlush}
                  handlecolorA={this.handlecolorA}
                  handlecolorB={this.handlecolorB}
                  handlecolorC={this.handlecolorC}
                  callSchemaDropdown={this.callSchemaDropdown}
                  reOrderingSwiperIndex={this.reOrderingSwiperIndex}
                  disableAlgoPW={this.disableAlgoPW}
                  S1_pbackgroundColor={this.S1_pbackgroundColor}
                  S1_backgroundColor={this.S1_backgroundColor}

                  G_outsideLabelPrior={this.outsideLabelPrior}
                  G_outside_Label_Priority={this.outside_Label_Priority}

                  S1_outside_Label_Priority={this.S1_outside_Label_Priority}
                  S_colorA={this.state.colorA}
                  S_colorB={this.state.colorB}
                  S_colorC={this.state.colorC}

                  imageSrc_array ={this.imageSrc_array}

                />


                <LayerCreator
                   pallet={this.PalletSelection} 
                  handleChangepanel={this.handleChangepanel}
                  handleChangepanel_forToast={this.handleChangepanel_forToast}

                  expanded_panel={this.state.expanded}
                  S_algo_loaded={this.state.algo_loaded}
                  layerGrid={this.layerGrid}
                  S_layer_data={this.state.layer_data}
                  G_typeoptions6={this.typeoptions6}

                  S_cases_Schema_A={this.state.cases_Schema_A}
                  S_cases_Schema_B={this.state.cases_Schema_B}
                  S_cases_Schema_C={this.state.cases_Schema_C}

                  S_setVariantName_SchemaA={this.state.setVariantName_SchemaA}
                  S_setVariantName_SchemaB={this.state.setVariantName_SchemaB}
                  S_setVariantName_SchemaC={this.state.setVariantName_SchemaC}

                  t={t}
                  color1={color1}
                  value_CaseType={this.state.case_Type}
                  countOfIntermediateLayer={this.state.countOfIntermediateLayer}
                  value_IntermediateLayerType={this.state.intermediate_Layer_Type}
                  S_WA_1_Height_Z_Dir={this.state.WA_1_Height_Z_Dir}
                  S_WA_2_Height_Z_Dir={this.state.WA_2_Height_Z_Dir}
                  value_LayerCreator={this.state.no_Of_Layers}

                  // label={label}
                  obj={this.state.layer_data}

                  G_layerdata={this.layerdata}
                  G_intermediate_layer={this.intermediate_layer}

                  G_layer_name={this.layer_name}
                  G_layer_sequence={this.layer_sequence}
                  S_palletid={this.state.palletid}
                  S1_layer_data={this.S1_layer_data}



                />

                <ProgramRoutineCreator

                  handleChangepanel={this.handleChangepanel}
                  handleChangepanel_forToast={this.handleChangepanel_forToast}
                  S_algo_loaded={this.state.algo_loaded}
                  expanded_panel={this.state.expanded}
                  S_errorPreposy={this.state.errorPreposy}
                  S_errorhelpertextForPreposy={this.state.errorhelpertextForPreposy}
                  S_selectedOne={this.state.selectedOne}
                  S_setnumbery={this.state.setnumbery}
                  S_setnumbery2={this.state.setnumbery2}
                  // callBlurPreposYPRC={this.callBlurPreposYPRC}
                  onvaluechangepreposY={this.onvaluechangepreposY}

                  onChange_2ndPrePos={this.onChange_2ndPrePos}
                  onChange_3rdPrePos={this.onChange_3rdPrePos}
                  handleManualMoving={this.handleManualMoving}
                  enableMoving1={this.state.manualMoving1}
                  enableMoving2={this.state.manualMoving2}
                  pallet1_2={this.PalletSelection}
                  S_errorPreposx={this.state.errorPreposx}
                  S_errorhelpertextForPreposx={this.state.errorhelpertextForPreposx}
                  S_setnumberx={this.state.setnumberx}
                  S_setnumberx2={this.state.setnumberx2}
                  onvaluechangepreposX={this.onvaluechangepreposX}
                  // callBlurPreposXPRC={this.callBlurPreposXPRC}

                  S_errorPreposz={this.state.errorPreposz}
                  S_errorhelpertextForPreposz={this.state.errorhelpertextForPreposz}
                  S_setnumberz={this.state.setnumberz}
                  S_setnumberz2={this.state.setnumberz2}
                  onvaluechangepreposZ={this.onvaluechangepreposZ}
                  // callBlurPreposZPRC={this.callBlurPreposZPRC}
                  handleAutoGeneratePrepos={this.handleAutoGeneratePrepos}
                  handleAutoGeneratePreposNEW={this.handleAutoGeneratePreposNEW}

                  savePrc={this.savePrc}
                  S_case_data={this.state.case_data}
                  S_colorA={this.state.colorA}
                  S_colorB={this.state.colorB}
                  showOnFieldsClickGreenRect={this.showOnFieldsClickGreenRect}
                  showOnFieldsClickOrangeRect={this.showOnFieldsClickOrangeRect}
                  showOnFieldsClickRedRect={this.showOnFieldsClickRedRect}
                  showOnFieldsClickAllRect={this.showOnFieldsClickAllRect}
                  G_casedata={this.casedata}
                  S_CasesXYfotGreenRectPRC={this.state.CasesXYfotGreenRectPRC}
                  OffsetChangePrc={this.OffsetChangePrc}

                  S_AllAvlNrPosInDropDownList={this.state.AllAvlNrPosInDropDownList}
                  S_NrPosInDropDownList={this.state.NrPosInDropDownList}
                  handleValueChangePrepos={this.handleValueChangePrepos}
                  // callBlurPreposY1PRC={this.callBlurPreposY1PRC}
                  // callBlurPreposX1PRC={this.callBlurPreposX1PRC}
                  // callBlurPreposZ1PRC={this.callBlurPreposZ1PRC}

                  noofcaseA={noofcaseA}
                  noofcaseB={noofcaseB}
                  noofcaseC={noofcaseC}

                  G_setpreposy={this.setpreposy}
                  S1_setnumbery={this.S1_setnumbery}
                  G_globalScaley={this.globalScaley}
                  S1_setnumbery2={this.S1_setnumbery2}
                  S_selectedTwo={this.state.selectedTwo}
                  G_globalScaley2={this.globalScaley2}

                  G_globalScalex={this.globalScalex}
                  G_globalScalex2={this.globalScalex2}
                  S1_setnumberx={this.S1_setnumberx}
                  S1_setnumberx2={this.S1_setnumberx2}

                  G_globalScalez={this.globalScalez}
                  S1_setnumberz={this.S1_setnumberz}
                  G_globalScalez2={this.globalScalez2}
                  S1_setnumberz2={this.S1_setnumberz2}

                  G_outerRect1_xpos={this.outerRect1_xpos}
                  G_outerRect2_xpos={this.outerRect2_xpos}
                  G_outerRect1_width={this.outerRect1_width}
                  G_outerRect2_width={this.outerRect2_width}
                  G_outerRect1_ypos={this.outerRect1_ypos}
                  G_outerRect2_ypos={this.outerRect2_ypos}
                  G_outerRect1_length={this.outerRect1_length}
                  G_outerRect2_length={this.outerRect2_length}

                  G_ctx_greenRect={this.ctx_greenRect}
                  G_myRef_GR={this.myRef_GR}
                  G_ctx_GRCaseFreez={this.ctx_GRCaseFreez}
                  G_casedataA1={this.casedataA1}
                  G_casedataB1={this.casedataB1}
                  S_colorC={this.state.colorC}
                  G_casedataC1={this.casedataC1}
                  G_casedataA2={this.casedataA2}
                  G_casedataB2={this.casedataB2}
                  G_casedataC2={this.casedataC2}
                  G_autoGenerateCasePositionsDistance={this.autoGenerateCasePositionsDistance}
                  G_setpreposx={this.setpreposx}
                  G_freezNRarray={this.freezNRarray}
                  S_palletid={this.state.palletid}
                  S1_NrPosInDropDownList={this.S1_NrPosInDropDownList}
                  S1_case_data={this.S1_case_data}
                  autoGenerateCaseFreez={this.autoGenerateCaseFreez}
                  map={this.map}
                  G_layer_sequence={this.layer_sequence}
                  G_preposy={this.preposy}

                  //
                  G_preposx={this.preposx}
                  G_preposz={this.preposz}
                  G_case_data={this.state.case_data}
                  // G_preposz = {this.preposz}
                  S1_for_name={this.S1_for_name}
                  S1_for_setnumbery={this.S1_for_setnumbery}
                  // G_setpreposx = {this.setpreposx}



                  objPRC={this.state.case_data}
                  exceptThisSymbols={exceptThisSymbols}
                  exceptThisSymbolsprc={exceptThisSymbolsprc}
                  t={t}
                  color1={color1}
                  Green_arrow={Green_arrow}
                  Red_arrow={Red_arrow}
                  Light_Blue_arrow={Light_Blue_arrow}
                  palletid={this.props.match.params.palletid}
                  autoGenerateRadioButton={this.state.autoGenerateRadioButton}
                  autoGenerateRadioButtonNEW={this.state.autoGenerateRadioButtonNEW}
                  
                  offset_2ndPrePos_X={this.offset_2ndPrePos_X}
                  offset_2ndPrePos_Y={this.offset_2ndPrePos_Y}
                  offset_2ndPrePos_Z={this.offset_2ndPrePos_Z}
                  offset_3rdPrePos_X={this.offset_3rdPrePos_X}
                  offset_3rdPrePos_Y={this.offset_3rdPrePos_Y}
                  offset_3rdPrePos_Z={this.offset_3rdPrePos_Z}
                  onBlurFor1stX={this.onBlurFor1stX}
                  onBlurFor1stY={this.onBlurFor1stY}
                  onBlurFor1stZ={this.onBlurFor1stZ}

                  G_set_3rdPrePos_Y={this.set_3rdPrePos_Y}
                  S_set_3rdPrePos_Y={this.state.S_set_3rdPrePos_Y}
                  S_set_3rdPrePos_Y2={this.state.S_set_3rdPrePos_Y2}
                  callBlur_3rdPrePosY={this.callBlur_3rdPrePosY}

                  S_set_3rdPrePos_X={this.state.S_set_3rdPrePos_X}
                  S_set_3rdPrePos_X2={this.state.S_set_3rdPrePos_X2}
                  callBlur_3rdPrePosX={this.callBlur_3rdPrePosX}

                  S_set_3rdPrePos_Z={this.state.S_set_3rdPrePos_Z}
                  S_set_3rdPrePos_Z2={this.state.S_set_3rdPrePos_Z2}
                  callBlur_3rdPrePosZ={this.callBlur_3rdPrePosZ}

                  S_set_2ndPrePos_Y={this.state.S_set_2ndPrePos_Y}
                  S_set_2ndPrePos_Y2={this.state.S_set_2ndPrePos_Y2}
                  callBlur_2ndPrePos_Y={this.callBlur_2ndPrePos_Y}

                  S_set_2ndPrePos_X={this.state.S_set_2ndPrePos_X}
                  S_set_2ndPrePos_X2={this.state.S_set_2ndPrePos_X2}
                  callBlur_2ndPrePos_X={this.callBlur_2ndPrePos_X}

                  S_set_2ndPrePos_Z={this.state.S_set_2ndPrePos_Z}
                  S_set_2ndPrePos_Z2={this.state.S_set_2ndPrePos_Z2}
                  callBlur_2ndPrePos_Z={this.callBlur_2ndPrePos_Z}
                />


                <Grid item xs={12} style={GridTopStyle}>
                  <ExpansionPanel style={ExpansionPanelDetailsStyle}
                    expanded={this.state.expanded === 'panel6'}
                    onChange={this.state.algo_loaded == true ? this.handleChangepanel("panel6") : this.handleChangepanel_forToast('panel6')}

                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon style={{ backgroundColor: this.state.expanded_panel ? 'green' : '#f5f5f5', }} />}
                      id="panel1-header"
                    >
                      <Typography>{t("simulation")}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid container style={containerGridstyle} >
                        <Grid item xs={12} style={GridItemStyle}>
                          <TextField style={SimuTextflieStyle}
                            id="Simulation"
                            label=""
                            defaultValue="Simulation"
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: SizeSimuStyle
                            }}
                            variant="standard"
                            size="small"
                          />

                          <FormControl>

                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue=""
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                onClick={(e) => this.handleStartSimulation(e)}
                                value="" style={RadioGroupStyle}
                                control={<Radio />}
                                checked={this.state.simulationButton}
                              />

                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                          <TextField style={SimuTextflieStyle}
                            id="Simulation"
                            label=""
                            defaultValue={t("abortSimulation")}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: SizeSimuStyle
                            }}
                            variant="standard"
                            size="small"
                          />

                          <FormControl>

                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue=""
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                onClick={(e) => this.handleAbortSimulation(e)}
                                value="female" style={RadioGroupStyle}
                                control={<Radio />}
                                checked={this.state.abortButton} />

                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                          <TextField style={SimuTextflieStyle}
                            id="Simulation"
                            label=""
                            defaultValue={t("simulationSpeed")}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: SizeSimuStyle
                            }}
                            variant="standard"
                            size="small"
                          />

                          <Slider
                            size="small"
                            value={this.state.rangeValue}
                            min={0}
                            step={0.1}
                            max={10}
                            onChange={(e) => this.handleSimSpeedChange(e)}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                          />
                          {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", backgroundColor: color1, marginBottom: "4px" }}>
                          <TextField style={{ height: 27, bottom: "3px", width: "43%", }}
                            id="Simulation"
                            label=""
                            defaultValue={t("simulationResult")}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: SizeSimuStyle
                            }}
                            variant="standard"
                            size="small"
                          />
                          <TextField
                            style={{ border: "1px solid white !important", cursor:"default", pointerEvents:"none", margin: "0px", padding: "0px", left: "73px", height: "27px", top: "11px", width: "29%" }}
                            id="outlined-read-only-input_simulationResult"
                            // defaultValue={this.state.simulationStatus}
                            value={this.state.simulationStatus}
                            // defaultValue="Failed"
                            InputLabelProps={{
                              shrink: true,
                              style: { color: this.state.simulationStatus == t("passed") ? "green" : "red", fontSize: "12px",cursor:"default", pointerEvents:"none", top: "3px" }
                            }}
                            InputProps={{
                              style: { color: this.state.simulationStatus == t("passed") ? "green" : "red", fontSize: "12px",cursor:"default", pointerEvents:"none", top: "3px" },
                              disableUnderline: true
                            }}
                            margin="dense"
                            variant="outlined"
                            size="small"
                          />


                        </Grid>

                      </Grid>

                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>

                <Grid item xs={12} style={GridTopStyle} >
                  <ExpansionPanel style={ExpansionPanelDetailsStyle}
                    expanded={this.state.expanded === 'panel7'}
                    onChange={this.state.algo_loaded == true ? this.handleChangepanel('panel7') : this.handleChangepanel_forToast('panel7')}

                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon style={{ backgroundColor: this.state.expanded_panel ? 'green' : '#f5f5f5', }} />}
                      id="panel1-header"
                    >
                      <Typography>{t("summary")}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid container style={containerGridstyle} >
                        <Grid item xs={12} style={GridItemStyle}>
                          <TextField style={SimuTextflieStyle}
                            id="Simulation"
                            label=""
                            defaultValue={t("ExportDocumentation")}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: SizeSimuStyle
                            }}
                            variant="standard"
                            size="small"
                          />

                          <FormControl
                            onClick={() => this.GeneratePDF()}
                          >
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue=""
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value="female"
                                style={RadioGroupStyle}
                                control={<Radio />}
                                checked={this.state.exportButtonForDocument}
                              />

                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                          <TextField style={SimuTextflieStyle}
                            id="Simulation"
                            label=""
                            defaultValue={t("caseDimensions")}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: SizeSimuStyle
                            }}
                            variant="standard"
                            size="small"
                          />

                          <Checkbox
                            className="checkbox1"
                            style={{ left: "-59px", width: "18px", height: "18px", top: "15px" }}
                            // disabled={this.state.HWeightedSymmetric}
                            checked={this.state.caseDimensionToggle}
                            onClick={() => {
                              this.setState({
                                caseDimensionToggle: !this.state.caseDimensionToggle,
                              })
                            }}
                            sx={{
                              color: "grey",
                              '&.Mui-checked': {
                                color: "rgb(0,125,129)",
                              },
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                          <TextField style={SimuTextflieStyle}
                            id="Label_Description"
                            label=""
                            defaultValue={t("labelDescription")}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: SizeSimuStyle
                            }}
                            variant="standard"
                            size="small"
                          />

                          <Checkbox
                            className="checkbox2"
                            style={{ left: "-59px", width: "18px", height: "18px", top: "15px" }}
                            // disabled={this.state.HWeightedSymmetric}
                            checked={this.state.LabelDescriptionToggle}
                            onClick={() => {
                              this.setState({
                                LabelDescriptionToggle: !this.state.LabelDescriptionToggle,
                              })
                            }}

                            sx={{
                              color: "grey",
                              '&.Mui-checked': {
                                color: "rgb(0,125,129)",
                              },
                            }}
                          />
                        </Grid>

                        {/* <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', marginTop:"25%", width: "100%", height: "48px", padding: 0, backgroundColor: color1, marginBottom: "4px" }}> */}
                        <Grid item xs={12} style={GridItemStyle}>
                          <TextField style={SimuTextflieStyle}
                            id="Export_Palette_Data"
                            label=""
                            defaultValue={t("exportPalletData")}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              disableUnderline: true,
                              style: SizeSimuStyle
                            }}
                            variant="standard"
                            size="small"
                          />

                          <FormControl
                            onClick={() => this.downloadFilePallet()}>

                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue=""
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value="female"
                                style={RadioGroupStyle}
                                control={<Radio />}
                                checked={this.state.exportButtonForPallet}
                              />

                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>

                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>
                {/* </Grid> */}
                {/* </Box>
                </div>
              </Grid>
            </Grid>

          </div>
        </Grid> */}
              </Grid>
            </Grid>
            {/* </Grid> */}
          </div>
        </Grid>
        <div className="parent-blur" style={{ zIndex: 25, justifyContent: "center", alignItems: "center", display: this.state.setCircularProgress == "visible" ? "flex" : "none", position: "fixed", width: '100%', height: '100%', marginTop: "-510px", opacity: '0.4', backgroundColor: "black" }}>
          <CircularProgress
            style={{
              // backgroundColor: 'yellow',
              // className:'div.third',
              // opacity:'0.4',
              width: "100px",
              height: "100px",
              color: "#5eb8b3",
              visibility: this.state.setCircularProgress,
            }}
          />
        </div>
      </>
    );
  }
}

PaletteDesignerPage.propTypes = {

};

export default withTranslation()(PaletteDesignerPage);