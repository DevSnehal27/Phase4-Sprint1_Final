import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import * as THREE from "three";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
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
import { Radio } from "@material-ui/core";
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
import { withTranslation, Trans } from 'react-i18next';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Frame_1, Frame_2, Frame_3, Frame_4, Frame_5, Frame_6, Frame_7, Frame_8, Frame_9, Frame_10, Frame_11, Frame_12, Frame_13
  , Frame_14, Frame_15, Frame_16, Frame_17, Frame_18, Frame_19, Frame_20, Frame_21, Frame_22, Frame_23, Frame_24
  , Frame_25, Frame_26, Frame_27, Frame_28, Frame_29, Frame_30, Frame_31, Frame_32, Frame_33, Frame_34, Frame_35
  , Frame_36, Frame_37
} from './Algorithm/AlgoFrame';
import { DisplayVariant_Core } from './Algorithm/DisplayVarients';


const swap = SwiperCore.use([Pagination, Navigation, A11y, EffectCoverflow]);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const threedwidth = 791;
const threedheight = 400;
const widgetwidth = 456;
const paddingadjust = 0;
const exceptThisSymbols = ["e", "a", "d", "E", "+", "-", ".", /[!@$%^&*()+\=\[\]{};':"\\~`|,.<>\/?]+/];
const exceptThisSymbols1 = ["e", "a", "d", "E", "+", ".", /[!@$%^&*()+\=\[\]{};':"\\~`|,.<>\/?]+/];

var canvas_forSingle;
var canvasEle;
var canvasEle_GR;
var canvasEleCase;
var canvasEle_GRCaseFreez;
var canvas_forPRC;

var varientsList = [];
var poss_Origin = [];
var numberVar = [];
var number;
var progressNum;

var color1 = "#f5f5f5";
var color2 = "#E8E7DE";
var imgForCase;

class PaletteDesignerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pallet_bool: true,
      pallet_12: false,
      selected_SchemaA: "",
      dropdownUpdate: false,
      setDefaultPallete: "Euro 1200 x 800 mm",
      setDefaultCase: "case1_200_300_150",
      layers: 1,
      creator: [1],
      errorNumberOfLayer: false,
      errorHelperForLayer: "",

      errorNumberOfPrc: false,
      errorHelperForPrc: "",


      errorWorkingaraeaWidth: false,
      errorHelperForWorkingareaWidth: "",

      errorWorkingaraeaLength: false,
      errorHelperForWorkingareaLength: "",

      errorWorkingaraeaoffsetWidth: false,
      errorHelperForWorkingareaoffsetWidth: "",

      errorWorkingaraeaoffsetLength: false,
      errorHelperForWorkingareaoffsetLength: "",
      errorWorkingaraeaWidthfor2: false,
      errorHelperForWorkingareaWidthfor2: "",

      errorWorkingaraeaLengthfor2: false,
      errorHelperForWorkingareaLengthfor2: "",


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
      WA_1_Offset_X_Dir: 0,
      WA_1_Offset_Y_Dir: 0,
      WA_2_width_X_Dir: 0,
      WA_2_Length_Y_Dir: 0,
      WA_2_Offset_X_Dir: 0,
      WA_2_Offset_Y_Dir: 0,
      pallete_Type: "",
      intermediate_Layer_Type: "",
      case_Type: "",
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

      handlecolorA_ED: false,
      handlecolorB_ED: false,
      handlecolorC_ED: false,

      HWeightedSymmetric: false,
      VWeightedSymmetric: false,
      preposx: 10,
      preposy: 10,
      preposz: 10,
      HWeighted: false,
      VWeighted: true,

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

      canvasPRC: "hidden",



      errorPreposx: false,
      errorhelpertextForPreposx: "",
      errorPreposy: false,
      errorhelpertextForPreposy: "",
      errorPreposz: false,
      errorhelpertextForPreposz: "",
      outside_Label_Priority: "",
      ruleSymetricMassDistribution: false,
      schemaA_ForPatternWizard: "",
      basic_parameter: [],
      Nr_number: [],
      int_Layer: false,
      expanded: '',
      panelname: '',
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
      canvasfreezGreenRect: "hidden",
      setVariantName_SchemaA: '',
      setVariantName_SchemaB: '',
      setVariantName_SchemaC: '',
      margintop_prc: "0px",
      marginBottom_greenrect: 0,
      marginForSingleCanvas: "-40px",
      enableCanvasPRC: "hidden",
      enableCanvasBP: "visible",
      // enableCanvas: "visible",
      layerdataupdated: true,
      casenames: [],
      selectcase: "",
      arcX: 490,
      arcY: 330,
      arcX2: 490,
      arcY2: 330,
      enablefor1: true,
      enablefor2: false,
      case_data: [],
      prePosXneg: 10,
      prePosYneg: 10,
      schema: "",
      Case: "",
      caseTypeSet: false,
      CasesXYfotGreenRectPRC: [],
      tempNRValue: "",
      caseImageLoad0Deg: [],
      caseImageLoad90Deg: [],
      caseImageLoad180Deg: [],
      caseImageLoad270Deg: [],
      setCanvasBP: true,
      setCircularProgress: "hidden",

      P_length: 0,
      P_width: 0


    };

    this.frameForPRC = false;

    this.onceCarousalUpdateIndex = true;
    this.enableCarousel = false;
    this.HWeighted = false;
    this.VWeighted = true;
    this.case_number = 0;
    this.casenames = [];
    this.lid = 0;
    this.pallet_No = 1;
    this.layer = 1;
    this.layerName = "";
    this.layerdata = [];
    this.layerdata1 = [];
    this.layerdata2 = [];
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
    this.WA_1_Offset_X_Dir = 0;
    this.WA_1_Offset_Y_Dir = 0;
    this.WA_2_width_X_Dir = 0;
    this.WA_2_Length_Y_Dir = 0;
    this.WA_2_Offset_X_Dir = 0;
    this.WA_2_Offset_Y_Dir = 0;

    this.palletType1 = "";
    this.intermediateLayerType1 = "";
    this.int_Layer1 = false;
    this.caseType1 = "";
    this.noOfLayers1 = 0;
    this.cases_Schema_A1 = 0;
    this.cases_Schema_B1 = 0;
    this.cases_Schema_C1 = 0;
    this.setVariantName_SchemaA1 = '';
    this.setVariantName_SchemaB1 = '';
    this.setVariantName_SchemaC1 = '';

    this.palletType2 = "";
    this.intermediateLayerType2 = "";
    this.int_Layer2 = false;
    this.caseType2 = "";
    this.noOfLayers2 = 0;
    this.cases_Schema_A2 = 0;
    this.cases_Schema_B2 = 0;
    this.cases_Schema_C2 = 0;
    this.setVariantName_SchemaA2 = '';
    this.setVariantName_SchemaB2 = '';
    this.setVariantName_SchemaC2 = '';
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
    this.int_Layer1 = false;
    this.int_Layer2 = false;
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
    this.outside_Label_Priority = "";
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
      this.preposx = 10,
      this.preposy = 10,
      this.preposz = 10,
      this.Position = "",
      this.Position_freezed = false,
      this.Pre_Pos_X = "",
      this.Pre_Pos_Y = "",
      this.Pre_Pos_Z = "",
      this.Auto_Generation = false,
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
    this.typeoptions11 = [];
    this.renderer = new THREE.WebGLRenderer();

    //this.QuadGeometry = this.QuadGeometry.bind(this);
    this.draw = this.draw.bind(this);
    this.outsideInitialPriority = this.outsideInitialPriority.bind(this);

    this.Cal_No_Of_Varients = this.Cal_No_Of_Varients.bind(this);
    this.Display_Variants = this.Display_Variants.bind(this);

    this.handleBack = this.handleBack.bind(this);
    this.drawPallet_1_2 = this.drawPallet_1_2.bind(this);
    this.callSchema = this.callSchema.bind(this);
    this.callSchema1 = this.callSchema1.bind(this);
    this.callPallet = this.callPallet.bind(this);
    this.drawLargeRectInitially = this.drawLargeRectInitially.bind(this);
    this.drawRect = this.drawRect.bind(this);
    this.drawFillRect = this.drawFillRect.bind(this);
    this.changeLayer = this.changeLayer.bind(this);
    this.onchangeLayerBlur = this.onchangeLayerBlur.bind(this);

    this.getPRC = this.getPRC.bind(this);
    this.OffsetChangePrc = this.OffsetChangePrc.bind(this);

    this.initCases = this.initCases.bind(this);
    this.splitForOutSideLabelPriority = this.splitForOutSideLabelPriority.bind(this);
    this.getAllLabels = this.getAllLabels.bind(this);
    this.splitCaseType = this.splitCaseType.bind(this);


    this.map = this.map.bind(this);
    this.handleSelection_SchemaA = this.handleSelection_SchemaA.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSelectionOriginPallet = this.handleSelectionOriginPallet.bind(this);
    this.handleChangeForCasesSchemaA = this.handleChangeForCasesSchemaA.bind(this);
    this.handleChangeForCasesSchemaB = this.handleChangeForCasesSchemaB.bind(this);
    this.handleChangeForCasesSchemaC = this.handleChangeForCasesSchemaC.bind(this);
    this.updateIntermidateList = this.updateIntermidateList.bind(this);
    this.getPallet = this.getPallet.bind(this);
    this.handleSelectionLayerPallet = this.handleSelectionLayerPallet.bind(this);
    this.updatePallet = this.updatePallet.bind(this);
    this.layerGrid = this.layerGrid.bind(this);
    this.getdropdown = this.getdropdown.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
    this.updateSelectionSchemaA = this.updateSelectionSchemaA.bind(this);
    this.updateSelectionSchemaB = this.updateSelectionSchemaB.bind(this);
    this.updateSelectionSchemaC = this.updateSelectionSchemaC.bind(this);
    this.handleSelection_intermediateLayer = this.handleSelection_intermediateLayer.bind(this);
    this.handleChangepanel = this.handleChangepanel.bind(this);
    this.callSchemafor1 = this.callSchemafor1.bind(this);
    this.callSchemafor2 = this.callSchemafor2.bind(this);
    this.handlecolorA = this.handlecolorA.bind(this);
    this.handlecolorB = this.handlecolorB.bind(this);
    this.handlecolorC = this.handlecolorC.bind(this);
    this.UpadateNrPRC = this.UpadateNrPRC.bind(this);

    this.getLayer = this.getLayer.bind(this);
    this.createVariants = this.createVariants.bind(this);
    this.saveVariantImages = this.saveVariantImages.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
    this.handleCarouselUpdate = this.handleCarouselUpdate.bind(this);
    this.handleCarousel1Update = this.handleCarousel1Update.bind(this);
    this.handleSelectionIntLayer = this.handleSelectionIntLayer.bind(this);
    this.workAreaFor_pattern = this.workAreaFor_pattern.bind(this);
    this.callSchemaDropdown = this.callSchemaDropdown.bind(this);

    this.onvaluechangepreposX = this.onvaluechangepreposX.bind(this);
    this.callBlurForPreposX = this.callBlurForPreposX.bind(this);
    this.onvaluechangepreposY = this.onvaluechangepreposY.bind(this);
    this.callBlurForPreposY = this.callBlurForPreposY.bind(this);
    this.onvaluechangepreposZ = this.onvaluechangepreposZ.bind(this);
    this.callBlurForPreposZ = this.callBlurForPreposZ.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.onhandleSelected = this.onhandleSelected.bind(this);
    this.onvaluechecked = this.onvaluechecked.bind(this);
    this.handleSelectedXneg = this.handleSelectedXneg.bind(this);
    this.handleSelectedYneg = this.handleSelectedYneg.bind(this);
    this.drawGreenRect = this.drawGreenRect.bind(this);
    this.drawFillRect1 = this.drawFillRect1.bind(this);
    this.getSortOrder = this.getSortOrder.bind(this);
    this.handlecolor1 = this.handlecolor1.bind(this);
    this.handlecolor2 = this.handlecolor2.bind(this);
    this.valuechangePreposX = this.valuechangePreposX.bind(this);
    this.valuechangePreposY = this.valuechangePreposY.bind(this);
    this.valuechangePreposZ = this.valuechangePreposZ.bind(this);
    this.assign_casetype = this.assign_casetype.bind(this);
    this.updatefor_Basiparameter_working_Area = this.updatefor_Basiparameter_working_Area.bind(this);
    this.getCallLabel = this.getCallLabel.bind(this);
    this.arrow = this.arrow.bind(this);

    this.callBlueFor_WorkingareaX = this.callBlueFor_WorkingareaX.bind(this);
    this.callBlurFor_WorkingareaY = this.callBlurFor_WorkingareaY.bind(this);
    this.callBlurFor_WorkingareaoffsetX = this.callBlurFor_WorkingareaoffsetX.bind(this);
    this.callBlurFor_WorkingareaoffsetY = this.callBlurFor_WorkingareaoffsetY.bind(this);
    this.handleValueChangePrepos = this.handleValueChangePrepos.bind(this);
    this.handleAutoGeneratePrepos = this.handleAutoGeneratePrepos.bind(this);
    this.callBlurFor_Workingareafor2X = this.callBlurFor_Workingareafor2X.bind(this);
    this.callBlurFor_Workingareafor2Y = this.callBlurFor_Workingareafor2Y.bind(this);
    this.callBlurFor_WorkingareaoffsetXfor2 = this.callBlurFor_WorkingareaoffsetXfor2.bind(this);
    this.callBlurFor_WorkingareaoffsetYfor2 = this.callBlurFor_WorkingareaoffsetYfor2.bind(this);
    this.drawRect_CaseImage = this.drawRect_CaseImage.bind(this);
    this.drawFillRect_CaseImage = this.drawFillRect_CaseImage.bind(this);
    this.casesSchemaPrcUpdate = this.casesSchemaPrcUpdate.bind(this);
    this.casesSchemaPrc = this.casesSchemaPrc.bind(this);

    this.Possible_Frames = this.Possible_Frames.bind(this);
    this.Possible_Origins = this.Possible_Origins.bind(this);
    this.reqCombinationForPallet_N_Origin = this.reqCombinationForPallet_N_Origin.bind(this);
    this.generateFrames = this.generateFrames.bind(this);
    this.createVariantsForPRC = this.createVariantsForPRC.bind(this);

    // For Carousel Button
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
    this.originPal1 = "";
    this.originPal2 = "";
    this.Pallet_Width = 800;
    this.Case_No = 0;
    this.Case_NoForJson = 0;
    this.tempJsonToPush = {};
    this.tempCase = {};
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

    this.CasesSchemaA = 0;
    this.CasesSchemaB = 0;
    this.CasesSchemaC = 0;
    this.getdropdown();
    this.initCases();

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

    this.globalScalex = 10;
    this.globalScaley = 10;
    this.globalScalez = 10;
    this.globalScalex2 = 10;
    this.globalScaley2 = 10;
    this.globalScalez2 = 10;
    this.state.setnumberx = this.globalScalex;
    console.log(".................... " + this.state.setnumberx);
    this.state.setnumbery = this.globalScaley;
    this.state.setnumberz = this.globalScaley;
    this.state.setnumberx2 = this.globalScalex2;
    this.state.setnumbery2 = this.globalScaley2;
    this.state.setnumberz2 = this.globalScaley2;

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

    // this.P_width;
    // this.P_length;

    this.P_width1 = 171.428;
    this.P_length1 = 257.14;
    this.p_xpos = 318.57;
    this.p_ypos = 70;

    this.P_width2 = 171.428;
    this.P_length2 = 257.14;
    this.p_xpos2 = 318.57;
    this.p_ypos2 = 70;

    this.ctxCase;
    this.ctx;
    this.ctx_forSingle;
    this.ctx_forPRC;

    this.myRef_forPRC = React.createRef();
    this.myRef_forSingleCanvas = React.createRef();
    this.myRef = React.createRef();
    this.myRef_GR = React.createRef();
    this.myRefCase = React.createRef();
    this.myRef_GRCaseFreez = React.createRef();
    this.swiperRef = React.createRef();
    this.imageSrc_array = [];
    this.CasesImageSrc_array = [];
    this.variantName_array = [];
    this.realIndexForA;
    this.realIndexForB;
    this.realIndexForC;
    this.downloadLink = React.createRef();
    this.downloadLinkCase = React.createRef();

    this.typeoptions5 = [];
    this.Cal_No_Of_Varients(this.Pallet_Length, this.Pallet_Width, this.Case_Width, this.Case_Length);

  };

  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }
  initCases = async () => {
    this.casenames = [];

    const records = await this.getAllLabels();
    for (var record of records) {
      console.log("record.name in PalletDesign= ", record);

      var label_name = record.labelname + "_" + record.typename;
      console.log("record.labelname inside initCases " + record.labelname)

      var case_name_lbh = record.name + "_" + record.length + "_" + record.height + "_" + record.width;
      console.log("case_name_lbh inside initCases " + case_name_lbh)

      if ((record.labelname !== "Label0") && (record.length !== null)) {
        if (this.typeoptions3.length == 0) {

          const uniqueCases = Array.from(new Set(this.casenames));
          console.log("uniqueCases " + uniqueCases);

          var case_name_lbh = record.name + "_" + record.length + "_" + record.height + "_" + record.width;
          console.log("case_name_lbh " + case_name_lbh)
          console.log("record.width " + record.width)

          var label_name = record.labelname + "_" + record.typename;
          console.log("Label name in initcase else condition " + label_name);
          this.listForOutsideLabelPrior.push(label_name);

          this.typeoptions3.push(case_name_lbh);
          this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
          console.log("this.outside_Label_Priority in initCases IF " + this.outside_Label_Priority);
        }
        else {
          if (this.casenames.indexOf(record.name) > -1) {
            console.log("Case name already exists")
          }
          else {

            var case_name_lbh = record.name + "_" + record.length + "_" + record.height + "_" + record.width;
            console.log("case_name_lbh = " + case_name_lbh)

            const uniqueCases = Array.from(new Set(case_name_lbh));
            console.log("uniqueCases = " + uniqueCases);
            var label_name = record.labelname + "_" + record.typename;
            console.log("Label name in initcase else condition " + label_name);
            this.listForOutsideLabelPrior.push(label_name);
            //creating array for outsideLabelPrior for drawReact
            try {
              var split = label_name.split('_', 2);
              console.log("split[0] handleSelection " + split[0] + " split[1] " + split[1]);
              this.listForLabel = [];
              this.listForLabel.push(split[1]);
              console.log("  this.listForLabel " + this.listForLabel)
              this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
              console.log("this.outside_Label_Priority in initCases ELSE " + this.outside_Label_Priority);
            }
            catch (e) {
              console.log("splitError inside initCases " + e);
            }
            if (this.typeoptions3.indexOf(case_name_lbh) > -1) {
              console.log("Case name already exists")
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
    console.log("this.casenames inside initCases = ", this.casenames);
    this.setState({
      casenames: this.casenames
    });
  }

  splitForOutSideLabelPriority = () => {

    try {
      if (this.outside_Label_Priority) {
        console.log("this.outside_Label_Priority inside getPallet before " + this.outside_Label_Priority);
        var outSide = this.outside_Label_Priority;
        var split = outSide.split('_', 2);
        console.log("split[0] inside getpallet " + split[0] + " split[1] " + split[1]);
        this.outsideLabelPrior = split[1];
        this.state.outside_Label_Priority = this.outside_Label_Priority;
        console.log("this.outside_Label_Priority inside getPallet after " + this.outside_Label_Priority);
      }
    }
    catch (e) {
      console.log("error inside get pallet outside_Label_Priority = " + e)
    }
  }

  getAllLabels = async () => {
    let id = 0;
    let records = [];
    try {
      let resonse = await axios.get(`/Threed`);
      records = resonse.data;
      console.log("records = ", records);
      return records;
    }
    catch (err) {
      console.log(err);
    }
  }

  updateSelection = () => {

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
    let pallet_no = 1;
    if (this.state.selectedOne) {
      pallet_no = 1;
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
    }

    this.updatePallet(pallet_no);
  };

  updateSelectionSchemaA = (event) => {

    console.log("cases_Schema_A event.target.value " + event.target.value);

    if (event.target.value == "") {

      console.log("Creator empty event.target.value : " + event.target.value);
      console.log("cases_Schema_A  this.cases_Schema_A " + this.state.cases_Schema_A);

      if (this.state.selectedOne) {
        this.cases_Schema_A1 = 6;
        this.setState({
          cases_Schema_A: this.cases_Schema_A1,

        });

      }
      else if (this.state.selectedTwo) {
        this.cases_Schema_A2 = 5;
        this.setState({
          cases_Schema_A: this.cases_Schema_A2,

        });

      }
      console.log(" after this.cases_Schema_A " + this.cases_Schema_A);
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

    let pallet_no = 1;
    if (this.state.selectedOne) {
      pallet_no = 1;
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
    }

    this.updatePallet(pallet_no);
    this.savePrc();
  }

  updateSelectionSchemaB = (event) => {

    console.log("cases_Schema_B event.target.value " + event.target.value);
    if (event.target.value == "") {
      console.log("Creator empty event.target.value : " + event.target.value);



      console.log("cases_Schema_B  this.cases_Schema_B " + this.state.cases_Schema_B);
      console.log(" before this.cases_Schema_B " + this.cases_Schema_B);
      if (this.state.selectedOne) {

        this.cases_Schema_B1 = 8;
        this.setState({

          cases_Schema_B: this.cases_Schema_B1,

        });

      }
      else if (this.state.selectedTwo) {

        this.cases_Schema_B2 = 7;
        this.setState({

          cases_Schema_B: this.cases_Schema_B2,

        });

      }
      console.log(" after this.cases_Schema_B " + this.cases_Schema_B);
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



    let pallet_no = 1;
    if (this.state.selectedOne) {
      pallet_no = 1;
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
    }
    this.updatePallet(pallet_no);
    this.savePrc();

  }

  updateSelectionSchemaC = (event) => {

    console.log("cases_Schema_C event.target.value " + event.target.value);
    if (event.target.value == "") {
      console.log("Creator empty event.target.value : " + event.target.value);

      console.log("cases_Schema_C  this.cases_Schema_C " + this.state.cases_Schema_C);
      console.log(" before this.cases_Schema_C " + this.cases_Schema_C);
      if (this.state.selectedOne) {

        this.cases_Schema_C1 = 10;
        this.setState({

          cases_Schema_C: this.cases_Schema_C1,
        });

      }
      else if (this.state.selectedTwo) {

        this.cases_Schema_C2 = 9;
        this.setState({

          cases_Schema_C: this.cases_Schema_C2,
        });

      }
      console.log(" after this.cases_Schema_C " + this.cases_Schema_C);
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



    let pallet_no = 1;
    if (this.state.selectedOne) {
      pallet_no = 1;
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
    }
    this.updatePallet(pallet_no);
    this.savePrc();

  }

  callBlueFor_WorkingareaX = (event) => {

    if (event.target.value > 1400) {
      this.WA_1_width_X_Dir = 1400;
      this.setState({
        WA_1_width_X_Dir: 1400,
        errorWorkingaraeaWidth: false,
        errorHelperForWorkingareaWidth: " "
      })

    }
    if (event.target.value < this.Pallet_Width) {
      this.WA_1_width_X_Dir = this.Pallet_Width;
      this.setState({
        WA_1_width_X_Dir: this.Pallet_Width,
        errorWorkingaraeaWidth: false,
        errorHelperForWorkingareaWidth: " "
      })
    }

  }

  callBlurFor_WorkingareaY = (event) => {
    if (event.target.value > 1400) {
      this.WA_1_Length_Y_Dir = 1400;
      this.setState({
        WA_1_Length_Y_Dir: 1400,
        errorWorkingaraeaLength: false,
        errorHelperForWorkingareaLength: " "
      })
    }
    if (event.target.value < this.Pallet_Length) {
      this.WA_1_Length_Y_Dir = this.Pallet_Length;
      this.setState({
        WA_1_Length_Y_Dir: this.Pallet_Length,
        errorWorkingaraeaLength: false,
        errorHelperForWorkingareaLength: " "
      })
    }
  }
  callBlurFor_WorkingareaoffsetX = (event) => {


    if (this.originPal1 == "Upper Right Corner") {

      if (event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0) {
        this.WA_1_Offset_X_Dir = (this.WA_1_width_X_Dir - this.Pallet_Width);
        this.setState({
          WA_1_Offset_X_Dir: (this.WA_1_width_X_Dir - this.Pallet_Width),
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: " "
        })
        console.log("callBlurFor_WorkingareaoffsetX " + this.state.errorWorkingaraeaoffsetWidth)
      }
      if (event.target.value == "") {
        this.WA_1_Offset_X_Dir = 0;
        this.setState({
          WA_1_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value < 0) {
        this.WA_1_Offset_X_Dir = 0;
        this.setState({
          WA_1_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }


    if (this.originPal1 == "Upper Left Corner") {

      if (event.target.value < ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
        this.WA_1_Offset_X_Dir = ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1);
        this.setState({
          WA_1_Offset_X_Dir: ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1),
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: " "
        });
      }
      if (event.target.value == "") {
        this.WA_1_Offset_X_Dir = 0;
        this.setState({
          WA_1_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value > 0) {
        this.WA_1_Offset_X_Dir = 0;
        this.setState({
          WA_1_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

    if (this.originPal1 == "Lower Right Corner") {

      if (event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0) {
        this.WA_1_Offset_X_Dir = (this.WA_1_width_X_Dir - this.Pallet_Width);
        this.setState({
          WA_1_Offset_X_Dir: (this.WA_1_width_X_Dir - this.Pallet_Width),
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: " "
        })

      } else if (event.target.value == "") {
        this.WA_1_Offset_X_Dir = 0;
        this.setState({
          WA_1_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: ""
        });
      }
      if (event.target.value < 0) {
        this.WA_1_Offset_X_Dir = 0;
        this.setState({
          WA_1_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

    if (this.originPal1 == "Lower Left Corner") {

      if (event.target.value < ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
        this.WA_1_Offset_X_Dir = ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1);
        this.setState({
          WA_1_Offset_X_Dir: ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1),
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: " "
        })
      }
      if (event.target.value == "") {
        this.WA_1_Offset_X_Dir = 0;
        this.setState({
          WA_1_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: ""
        });
      }
      if (event.target.value > 0) {
        this.WA_1_Offset_X_Dir = 0;
        this.setState({
          WA_1_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidth: false,
          errorHelperForWorkingareaoffsetWidth: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }
  }

  callBlurFor_WorkingareaoffsetY = (event) => {
    if (this.originPal1 == "Upper Right Corner") {

      console.log("(this.WA_1_Offset_Y_Dir - this.Pallet_Length) " + (this.WA_1_Length_Y_Dir - this.Pallet_Length))

      if (event.target.value < 0 || event.target.value > (this.WA_1_Length_Y_Dir - this.Pallet_Length)) {
        this.WA_1_Offset_Y_Dir = (this.WA_1_Length_Y_Dir - this.Pallet_Length);
        this.setState({
          WA_1_Offset_Y_Dir: (this.WA_1_Length_Y_Dir - this.Pallet_Length),
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: " "
        })
        console.log("callBlurFor_WorkingareaoffsetY " + this.state.errorWorkingaraeaoffsetLength)

      }
      else if (event.target.value == "") {
        this.WA_1_Offset_Y_Dir = 0;
        this.setState({
          WA_1_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value < 0) {
        this.WA_1_Offset_Y_Dir = 0;
        this.setState({
          WA_1_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }


    if (this.originPal1 == "Upper Left Corner") {

      if (event.target.value < 0 || event.target.value > (this.WA_1_Length_Y_Dir - this.Pallet_Length)) {
        this.WA_1_Offset_Y_Dir = (this.WA_1_Length_Y_Dir - this.Pallet_Length);
        this.setState({
          WA_1_Offset_Y_Dir: (this.WA_1_Length_Y_Dir - this.Pallet_Length),
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: " "
        });
        console.log("callBlurFor_WorkingareaoffsetY1 " + this.state.errorWorkingaraeaoffsetLength)
      }
      else if (event.target.value == "") {
        this.WA_1_Offset_Y_Dir = 0;
        this.setState({
          WA_1_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value < 0) {
        this.WA_1_Offset_Y_Dir = 0;
        this.setState({
          WA_1_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

    if (this.originPal1 == "Lower Right Corner") {

      if (event.target.value > ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value < 0) {
        this.WA_1_Offset_Y_Dir = ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1);
        this.setState({
          WA_1_Offset_Y_Dir: ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1),
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: " "
        })

      }
      if (event.target.value == "") {
        this.WA_1_Offset_Y_Dir = 0;
        this.setState({
          WA_1_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value > 0) {
        this.WA_1_Offset_Y_Dir = 0;
        this.setState({
          WA_1_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

    if (this.originPal1 == "Lower Left Corner") {

      if (event.target.value < ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value >= 0) {
        this.WA_1_Offset_Y_Dir = ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1);
        this.setState({
          WA_1_Offset_Y_Dir: ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1),
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: " "
        })
      }
      if (event.target.value == "") {
        this.WA_1_Offset_Y_Dir = 0;
        this.setState({
          WA_1_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: ""
        });
      }
      if (event.target.value > 0) {
        this.WA_1_Offset_Y_Dir = 0;
        this.setState({
          WA_1_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLength: false,
          errorHelperForWorkingareaoffsetLength: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_Y_Dir);
      }
    }

  }

  // workinf area for 2

  callBlurFor_Workingareafor2X = (event) => {

    if (event.target.value > 1400) {
      this.WA_2_width_X_Dir = 1400;
      this.setState({
        WA_2_width_X_Dir: 1400,
        errorWorkingaraeaWidthfor2: false,
        errorHelperForWorkingareaWidthfor2: " "
      })

    }
    if (event.target.value < this.Pallet_Width) {
      this.WA_2_width_X_Dir = this.Pallet_Width;
      this.setState({
        WA_2_width_X_Dir: this.Pallet_Width,
        errorWorkingaraeaWidthfor2: false,
        errorHelperForWorkingareaWidthfor2: " "
      })
    }
  }


  callBlurFor_Workingareafor2Y = (event) => {
    if (event.target.value > 1400) {
      this.WA_2_Length_Y_Dir = 1400;
      this.setState({
        WA_2_Length_Y_Dir: 1400,
        errorWorkingaraeaLengthfor2: false,
        errorHelperForWorkingareaLengthfor2: " "
      })
    }
    if (event.target.value < this.Pallet_Length) {
      this.WA_2_Length_Y_Dir = this.Pallet_Length;
      this.setState({
        WA_2_Length_Y_Dir: this.Pallet_Length,
        errorWorkingaraeaLengthfor2: false,
        errorHelperForWorkingareaLengthfor2: " "
      })
    }
  }

  callBlurFor_WorkingareaoffsetXfor2 = (event) => {


    if (this.originPal2 == "Upper Right Corner") {

      if (event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0) {
        this.WA_2_Offset_X_Dir = (this.WA_2_width_X_Dir - this.Pallet_Width);
        this.setState({
          WA_2_Offset_X_Dir: (this.WA_2_width_X_Dir - this.Pallet_Width),
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: " "
        })
        console.log("callBlurFor_WorkingareaoffsetX " + this.state.errorWorkingaraeaoffsetWidthfor2)
      }
      else if (event.target.value == "") {
        this.WA_2_Offset_X_Dir = 0;
        this.setState({
          WA_2_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value < 0) {
        this.WA_2_Offset_X_Dir = 0;
        this.setState({
          WA_2_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

    if (this.originPal2 == "Upper Left Corner") {

      if (event.target.value < ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
        this.WA_2_Offset_X_Dir = ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1);
        this.setState({
          WA_2_Offset_X_Dir: ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1),
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: " "
        });
      }

      if (event.target.value == "") {
        this.WA_2_Offset_X_Dir = 0;
        this.setState({
          WA_2_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: ""
        });
      }
      if (event.target.value > 0) {
        this.WA_2_Offset_X_Dir = 0;
        this.setState({
          WA_2_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

    if (this.originPal2 == "Lower Right Corner") {

      if (event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0) {
        this.WA_2_Offset_X_Dir = (this.WA_2_width_X_Dir - this.Pallet_Width);
        this.setState({
          WA_2_Offset_X_Dir: (this.WA_2_width_X_Dir - this.Pallet_Width),
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: " "
        })

      }
      else if (event.target.value == "") {
        this.WA_2_Offset_X_Dir = 0;
        this.setState({
          WA_2_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value < 0) {
        this.WA_2_Offset_X_Dir = 0;
        this.setState({
          WA_2_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

    if (this.originPal2 == "Lower Left Corner") {

      if (event.target.value < ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
        this.WA_2_Offset_X_Dir = ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1);
        this.setState({
          WA_2_Offset_X_Dir: ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1),
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: " "
        })
      }

      if (event.target.value == "") {
        this.WA_2_Offset_X_Dir = 0;
        this.setState({
          WA_2_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: ""
        });
      }

      if (event.target.value > 0) {
        this.WA_2_Offset_X_Dir = 0;
        this.setState({
          WA_2_Offset_X_Dir: 0,
          errorWorkingaraeaoffsetWidthfor2: false,
          errorHelperForWorkingareaoffsetWidthfor2: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }
  }

  callBlurFor_WorkingareaoffsetYfor2 = (event) => {
    if (this.originPal2 == "Upper Right Corner") {

      console.log("(this.WA_2_Offset_Y_Dir - this.Pallet_Length) " + (this.WA_2_Length_Y_Dir - this.Pallet_Length))

      if (event.target.value < 0 || event.target.value > (this.WA_2_Length_Y_Dir - this.Pallet_Length)) {
        this.WA_2_Offset_Y_Dir = (this.WA_2_Length_Y_Dir - this.Pallet_Length);
        this.setState({
          WA_2_Offset_Y_Dir: (this.WA_2_Length_Y_Dir - this.Pallet_Length),
          errorWorkingaraeaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: " "
        })
        console.log("callBlurFor_WorkingareaoffsetY " + this.state.errorWorkingaraeaoffsetLengthfor2)

      }
      else if (event.target.value == "") {
        this.WA_2_Offset_Y_Dir = 0;
        this.setState({
          WA_2_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value < 0) {
        this.WA_2_Offset_Y_Dir = 0;
        this.setState({
          WA_2_Offset_Y_Dir: 0,
          errorHelperForWorkingareaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

    if (this.originPal2 == "Upper Left Corner") {

      if (event.target.value < 0 || event.target.value > (this.WA_2_Length_Y_Dir - this.Pallet_Length)) {
        this.WA_2_Offset_Y_Dir = (this.WA_2_Length_Y_Dir - this.Pallet_Length);
        this.setState({
          WA_2_Offset_Y_Dir: (this.WA_2_Length_Y_Dir - this.Pallet_Length),
          errorWorkingaraeaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: " "
        });
        console.log("callBlurFor_WorkingareaoffsetY1 " + this.state.errorWorkingaraeaoffsetLengthfor2)
      }
      if (event.target.value == "") {
        this.WA_2_Offset_Y_Dir = 0;
        this.setState({
          WA_2_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value < 0) {
        this.WA_2_Offset_Y_Dir = 0;
        this.setState({
          WA_2_Offset_Y_Dir: 0,
          errorHelperForWorkingareaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }


    if (this.originPal2 == "Lower Right Corner") {

      if (event.target.value < ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value > 0) {
        this.WA_2_Offset_Y_Dir = ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1);
        this.setState({
          WA_2_Offset_Y_Dir: ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1),
          errorWorkingaraeaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: " "
        })
      }
      else if (event.target.value == "") {
        this.WA_2_Offset_Y_Dir = 0;
        this.setState({
          WA_2_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: ""
        });
        // this.state.errorHelperForWorkingareaoffsetWidth = "Enter in 1 - 50"
      }
      if (event.target.value > 0) {
        this.WA_2_Offset_Y_Dir = 0;
        this.setState({
          WA_2_Offset_Y_Dir: 0,
          errorHelperForWorkingareaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }
    if (this.originPal2 == "Lower Left Corner") {

      if (event.target.value < ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value >= 0) {
        this.WA_2_Offset_Y_Dir = ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1);
        this.setState({
          WA_2_Offset_Y_Dir: ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1),
          errorWorkingaraeaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: " "
        })
      }
      if (event.target.value == "") {
        this.WA_2_Offset_Y_Dir = 0;
        this.setState({
          WA_2_Offset_Y_Dir: 0,
          errorWorkingaraeaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: ""
        });
      }
      if (event.target.value > 0) {
        this.WA_2_Offset_Y_Dir = 0;
        this.setState({
          WA_2_Offset_Y_Dir: 0,
          errorHelperForWorkingareaoffsetLengthfor2: false,
          errorHelperForWorkingareaoffsetLengthfor2: " "
        });
        console.log("WA_1_Offset_X_Dir ???????" + this.state.WA_1_Offset_X_Dir);
      }
    }

  }
  getPallet = async (pallet_no) => {
    const palletid = this.props.match.params.palletid;
    let Palletname = "";
    console.log("palletid inside getPallet = " + palletid);
    console.log("pallet_no inside getPallet = " + pallet_no);
    let resonse = await axios.get("Threed/getPallet/" + palletid + "/" + pallet_no);
    const palletrecord = resonse.data[0];
    console.log("pallet inside getPallet = ", palletrecord);
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

    console.log("this.palletname inside getPallet" + this.palletname);
    console.log("palletrecord.intermediate_Layer inside getPallet" + palletrecord.intermediate_Layer);
    if (palletrecord.intermediate_Layer) {
      if (pallet_no === 1) {
        this.int_Layer1 = palletrecord.intermediate_Layer;
      }
      else if (pallet_no === 2) {
        this.int_Layer2 = palletrecord.intermediate_Layer;
      }
    }
    else {
      console.log("palletrecord.intermediate_Layer  inside getpallet== " + palletrecord.intermediate_Layer);
      this.int_Layer1 = true;
      this.int_Layer2 = true;
    }
    if (palletrecord.originPal1) {
      this.originPal1 = palletrecord.originPal1;
    }
    else {
      console.log("palletrecord.originPal1  inside getpallet== " + palletrecord.originPal1);
      this.originPal1 = "Upper Right Corner";
    }

    if (palletrecord.originPal2) {
      this.originPal2 = palletrecord.originPal2;
    }
    else {
      console.log("palletrecord.originPal2  inside getpallet== " + palletrecord.originPal2);
      this.originPal2 = "Upper Left Corner";
    }

    if (palletrecord.firstcasepal1) {
      this.firstcase_pal1 = palletrecord.firstcasepal1;
    }
    else {
      console.log("palletrecord.firstcasepal1  inside getpallet== " + palletrecord.firstcasepal1);
      this.firstcase_pal1 = "Lower Right Corner";
    }

    if (palletrecord.firstcasepal2) {
      this.firstcase_pal2 = palletrecord.firstcasepal2;
    }
    else {
      console.log("palletrecord.firstcasepal2  inside getpallet== " + palletrecord.firstcasepal2);
      this.firstcase_pal2 = "Lower Right Corner";
    }


    if (palletrecord.working_area_1_Width_X_Direction) {
      this.WA_1_width_X_Dir = palletrecord.working_area_1_Width_X_Direction;
    }
    else {
      console.log("palletrecord.working_area_1_Width_X_Direction  inside getpallet== " + palletrecord.working_area_1_Width_X_Direction);
      this.WA_1_width_X_Dir = "800";
    }


    if (palletrecord.working_area_1_Length_Y_Direction) {
      this.WA_1_Length_Y_Dir = palletrecord.working_area_1_Length_Y_Direction;
    }
    else {
      console.log("palletrecord.working_area_1_Width_X_Direction  inside getpallet== " + palletrecord.working_area_1_Length_Y_Direction);
      this.WA_1_Length_Y_Dir = "1200";
    }


    if (palletrecord.working_area_1_Offset_X_Direction) {
      this.WA_1_Offset_X_Dir = palletrecord.working_area_1_Offset_X_Direction;
    }
    else {
      console.log("palletrecord.working_area_1_Offset_X_Direction  inside getpallet== " + palletrecord.working_area_1_Offset_X_Direction);
      this.WA_1_Offset_X_Dir = "0";
    }

    if (palletrecord.working_area_1_Offset_Y_Direction) {
      this.WA_1_Offset_Y_Dir = palletrecord.working_area_1_Offset_Y_Direction;
    }
    else {
      console.log("palletrecord.working_area_1_Offset_Y_Direction  inside getpallet== " + palletrecord.working_area_1_Offset_Y_Direction);
      this.WA_1_Offset_Y_Dir = "0";
    }
    //-----------------------



    if (palletrecord.working_area_2_Width_X_Direction) {
      this.WA_2_width_X_Dir = palletrecord.working_area_2_Width_X_Direction;
    }
    else {
      console.log("palletrecord.working_area_2_Width_X_Direction  inside getpallet== " + palletrecord.working_area_2_Width_X_Direction);
      this.WA_2_width_X_Dir = "1000";
    }


    if (palletrecord.working_area_2_Length_Y_Direction) {
      this.WA_2_Length_Y_Dir = palletrecord.working_area_2_Length_Y_Direction;
    }
    else {
      console.log("palletrecord.working_area_2_Length_Y_Direction  inside getpallet== " + palletrecord.working_area_2_Length_Y_Direction);
      this.WA_2_Length_Y_Dir = "1200";
    }


    if (palletrecord.working_area_2_Offset_X_Direction) {
      this.WA_2_Offset_X_Dir = palletrecord.working_area_2_Offset_X_Direction;
    }
    else {
      console.log("palletrecord.working_area_2_Offset_X_Direction  inside getpallet== " + palletrecord.working_area_2_Offset_X_Direction);
      this.WA_2_Offset_X_Dir = "0";
    }

    if (palletrecord.working_area_2_Offset_Y_Direction) {
      this.WA_2_Offset_Y_Dir = palletrecord.working_area_2_Offset_Y_Direction;
    }
    else {
      console.log("palletrecord.working_area_2_Offset_Y_Direction  inside getpallet== " + palletrecord.working_area_2_Offset_Y_Direction);
      this.WA_2_Offset_Y_Dir = "0";
    }


    if (palletrecord.palletType) {
      console.log("palletrecord.palletType  inside getpallet if == " + palletrecord.palletType);
      if (pallet_no === 1) {
        this.palletType1 = palletrecord.palletType;
      }
      else if (pallet_no === 2) {
        this.palletType2 = palletrecord.palletType;
      }

    }
    else {
      console.log("palletrecord.palletType  inside getpallet== " + palletrecord.palletType);
      if (pallet_no === 1) {
        this.palletType1 = "EU 1: 1200 x 800";
      }
      else if (pallet_no === 2) {
        this.palletType2 = "EU 2: 1200 x 1000";
      }

    }


    if (palletrecord.intermediateLayerType) {
      if (pallet_no === 1) {
        this.intermediateLayerType1 = palletrecord.intermediateLayerType;
      }
      else if (pallet_no === 2) {
        this.intermediateLayerType2 = palletrecord.intermediateLayerType;
      }
      // this.intermediateLayerType = palletrecord.intermediateLayerType;
    }
    else {
      console.log("palletrecord.intermediateLayerType  inside getpallet== " + palletrecord.intermediateLayerType);

      if (pallet_no === 1) {
        var num = "1100 x 700";
        this.Pallet_Length = 1200;
        this.Pallet_Width = 800;
        this.updateIntermidateList(num);
        this.intermediateLayerType1 = this.typeoptions11[0];
      }
      else if (pallet_no === 2) {
        var num = "1100 x 900";
        this.Pallet_Length = 1200;
        this.Pallet_Width = 1000;
        this.updateIntermidateList(num);
        this.intermediateLayerType2 = this.typeoptions11[0];
      }
    }

    if (palletrecord.caseType) {
      if (pallet_no === 1) {
        this.caseType1 = palletrecord.caseType;
        this.splitCaseType(this.caseType1)
        console.log("this.Case_Width pallet_no === 1")
      }
      else if (pallet_no === 2) {
        this.caseType2 = palletrecord.caseType;
      }
      // this.caseType = palletrecord.caseType
    }
    else {
      console.log("this.caseType else part " + palletrecord.caseType)
      if (pallet_no === 1) {
        this.caseType1 = this.typeoptions3[0];
      }
      else if (pallet_no === 2) {
        this.caseType2 = this.typeoptions3[0];
      }
      this.caseType = this.typeoptions3[0];

      console.log("this.caseType inside getpallet else part = " + this.caseType)
      this.splitCaseType(this.caseType);
      this.listForOutsideLabelPrior = [];
      this.getCallLabel(this.caseType);
      // console.log("this.caseType in getPallet " + this.caseType);
    }

    if (palletrecord.casesSchemaA) {
      if (pallet_no === 1) {
        this.cases_Schema_A1 = palletrecord.casesSchemaA;
      }
      else if (pallet_no === 2) {
        this.cases_Schema_A2 = palletrecord.casesSchemaA;
      }
      this.cases_Schema_A = palletrecord.casesSchemaA
    }
    else {
      this.cases_Schema_A = 6;
      this.cases_Schema_A1 = 6;
      this.cases_Schema_A2 = 5;
    }

    if (palletrecord.casesSchemaB) {
      if (pallet_no === 1) {
        this.cases_Schema_B1 = palletrecord.casesSchemaB;
      }
      else if (pallet_no === 2) {
        this.cases_Schema_B2 = palletrecord.casesSchemaB;
      }
      this.cases_Schema_B = palletrecord.casesSchemaB
    }
    else {
      this.cases_Schema_B = 8;
      this.cases_Schema_B1 = 8;
      this.cases_Schema_B2 = 7;
    }
    if (palletrecord.casesSchemaC) {
      if (pallet_no === 1) {
        this.cases_Schema_C1 = palletrecord.casesSchemaC;
      }
      else if (pallet_no === 2) {
        this.cases_Schema_C2 = palletrecord.casesSchemaC;
      }
      this.cases_Schema_C = palletrecord.casesSchemaC
    }
    else {
      this.cases_Schema_C = 10;
      this.cases_Schema_C1 = 10;
      this.cases_Schema_C2 = 9;
    }

    console.log("palletrecord.outsideLabelPriority inside getpallet outif== " + palletrecord.outsideLabelPriority);
    if (palletrecord.outsideLabelPriority) {
      this.outside_Label_Priority = palletrecord.outsideLabelPriority;
    }
    else {
      console.log("palletrecord.outsideLabelPriority inside getpallet== " + palletrecord.outsideLabelPriority);
      console.log("this.outside_Label_Priority :: " + this.listForOutsideLabelPrior[0]);

      this.outside_Label_Priority = this.outside_Label_Priority;
      console.log("this.outside_Label_Priority :::: " + this.outside_Label_Priority);
    }

    this.splitForOutSideLabelPriority();
    // try {
    //   if (this.outside_Label_Priority) {
    //     console.log("this.outside_Label_Priority inside getPallet before " + this.outside_Label_Priority);
    //     var outSide = this.outside_Label_Priority;
    //     var split = outSide.split('_', 2);
    //     console.log("split[0] inside getpallet " + split[0] + " split[1] " + split[1]);
    //     this.outsideLabelPrior = split[1];
    //     this.state.outside_Label_Priority = this.outside_Label_Priority;
    //     console.log("this.outside_Label_Priority inside getPallet after " + this.outside_Label_Priority);
    //   }
    // }
    // catch (e) {
    //   console.log("error inside get pallet outside_Label_Priority = " + e)
    // }


    console.log("palletrecord.rule_symmetric_mass_distribution inside getpallet== " + palletrecord.rule_symmetric_mass_distribution);
    if (palletrecord.rule_symmetric_mass_distribution) {
      this.ruleSymetricMassDistribution = palletrecord.rule_symmetric_mass_distribution;
    }
    else {
      console.log("palletrecord.rule_symmetric_mass_distribution inside getpallet== " + palletrecord.rule_symmetric_mass_distribution);
      this.ruleSymetricMassDistribution = false;
    }

    console.log("palletrecord.schemaA inside getPallet" + palletrecord.schemaA);
    if (palletrecord.schemaA) {
      if (pallet_no === 1) {
        this.setVariantName_SchemaA1 = palletrecord.schemaA;
        console.log(" this.setVariantName_SchemaA1 " + this.setVariantName_SchemaA1);

      }
      else if (pallet_no === 2) {
        this.setVariantName_SchemaA2 = palletrecord.schemaA;
        console.log(" this.setVariantName_SchemaA2 " + this.setVariantName_SchemaA2);

      }
      // this.setVariantName_SchemaA = palletrecord.schemaA
      // console.log(" this.setVariantName_SchemaA " + this.setVariantName_SchemaA);

    }
    else {
      // this.setVariantName_SchemaA = '';
      if (pallet_no === 1) {
        this.setVariantName_SchemaA1 = '';
      }
      else if (pallet_no === 2) {
        this.setVariantName_SchemaA2 = '';
      }

      // console.log("palletrecord.schemaA inside getpallet== " + palletrecord.schemaA);
    }


    if (palletrecord.schemaB) {
      if (pallet_no === 1) {
        this.setVariantName_SchemaB1 = palletrecord.schemaB;
        console.log(" this.setVariantName_SchemaB1 " + this.setVariantName_SchemaB1);

      }
      else if (pallet_no === 2) {
        this.setVariantName_SchemaB2 = palletrecord.schemaB;
        console.log(" this.setVariantName_SchemaB2 " + this.setVariantName_SchemaB2);

      }
      // this.setVariantName_SchemaB = palletrecord.schemaB
      // console.log(" this.setVariantName_SchemaB " + this.setVariantName_SchemaB);

    }
    else {
      if (pallet_no === 1) {
        this.setVariantName_SchemaB1 = '';
      }
      else if (pallet_no === 2) {
        this.setVariantName_SchemaB2 = '';
      }
      // this.setVariantName_SchemaB = '';
      // console.log("var....== " + this.setVariantName_SchemaB);
      // this.setVariantName_SchemaB =  'Var 1';
    }

    if (palletrecord.schemaC) {
      if (pallet_no === 1) {
        this.setVariantName_SchemaC1 = palletrecord.schemaC;
        console.log(" this.setVariantName_SchemaC1 " + this.setVariantName_SchemaC1);

      }
      else if (pallet_no === 2) {
        this.setVariantName_SchemaC2 = palletrecord.schemaC;
        console.log(" this.pallet_no " + this.pallet_no);

      }
      // this.setVariantName_SchemaC = palletrecord.schemaC
      // console.log(" this.setVariantName_SchemaC2 " + this.setVariantName_SchemaC);

    }
    else {
      if (pallet_no === 1) {
        this.setVariantName_SchemaC1 = '';
      }
      else if (pallet_no === 2) {
        this.setVariantName_SchemaC2 = '';
      }

      // this.setVariantName_SchemaC = '';
      // console.log("palletrecord.schemaA inside getpallet== " + palletrecord.schemaC);
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
      if (pallet_no === 1) {
        this.noOfLayers1 = palletrecord.noOfLayers;
      }
      else if (pallet_no === 2) {
        this.noOfLayers2 = palletrecord.noOfLayers;
      }
    }
    else {
      this.noOfLayers = 1;
      this.noOfLayers1 = 1;
      this.noOfLayers2 = 1;
      this.layerdataupdated = true;
    }
    let response = await this.getLayer(pallet_no);
    console.log("layer response inside getPallet " + response);
    let records = [];
    if (response.length > 0) {
      records = response;
    }
    else {
      let no_of_layers = 1;
      if (pallet_no === 1) {
        no_of_layers = this.noOfLayers1;
        console.log("no_of_layers conditions if " + no_of_layers);
      }
      else if (pallet_no === 2) {
        no_of_layers = this.noOfLayers2;
        console.log("no_of_layers conditions else if " + no_of_layers);
      }
      // By default, 1 layer should be loaded with default values.
      for (var i = 0; i < no_of_layers; i++)
        records.push({
          "l_id": 0,
          "palletid": palletid,
          "pallet_no": pallet_no,
          "layername": "Schema A",
          "intermediatelayer": true,
          "layerSequence": i + 1
        })
      this.layerGrid();
    }
    // Get layers api should be called here.   
    this.layerdata = records;
    if (pallet_no === 1) {
      this.layerdata1 = records;
    }
    else if (pallet_no === 2) {
      this.layerdata2 = records;
    }

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
    console.log("no_of_cases inside getPallet array" + no_of_cases);
    console.log("schema inside getPallet array" + schema);

    let prcResponce = await this.getPRC(pallet_no, schema);
    console.log("prcResponce response inside getPallet " + prcResponce);
    if (prcResponce[0].length > 0) {
      console.log("Entering into second time case PRC inside getPallet");
      if (pallet_no === 1) {
        this.casedataA1 = prcResponce[0];
        this.casedataB1 = prcResponce[1];
        this.casedataC1 = this.sortCaseData(prcResponce[2]);
      }
      if (pallet_no === 2) {
        this.casedataA2 = prcResponce[0];
        this.casedataB2 = prcResponce[1];
        this.casedataC2 = prcResponce[2];
      }
    }
    else {
      //first time case
      console.log("Entering into first time case PRC inside getPallet");
      for (var schemaIndex = 0; schemaIndex < no_of_cases.length; schemaIndex++) {
        let records = [];
        console.log("no_of_cases inside getPallet " + no_of_cases[schemaIndex]);
        console.log("schema inside getPallet " + schema[schemaIndex]);
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
            "auto_generation": this.state.autogenerate,
            "rotation": null
          })
        }
        if (pallet_no === 1) {
          if (schemaIndex === 0) {
            this.casedataA1 = records;
          }
          else if (schemaIndex === 1) {
            this.casedataB1 = records;
          }
          else if (schemaIndex === 2) {
            this.casedataC1 = records;
          }
        }
        if (pallet_no === 2) {
          if (schemaIndex === 0) {
            this.casedataA2 = records;
          }
          else if (schemaIndex === 1) {
            this.casedataB2 = records;
          }
          else if (schemaIndex === 2) {
            this.casedataC2 = records;
          }
        }
      }

      if (pallet_no === 1) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedata = this.casedataA1;
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedata = this.casedataB1;
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedata = this.casedataC1;
        }
      }
      else if (pallet_no === 2) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedata = this.casedataA2;
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedata = this.casedataB2;
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedata = this.casedataC2;
        }
      }
      // this.casedata = records;

      this.savePrc();
    } // else complete
    console.log("this.casedataA1 inside getPallet after = " + this.casedataA1);
    console.log("this.casedataB1 inside getPallet after = " + this.casedataB1);
    console.log("this.casedataC1 inside getPallet after = " + this.casedataC1);
    console.log("this.casedataA2 inside getPallet after = " + this.casedataA2);
    console.log("this.casedataB2 inside getPallet after = " + this.casedataB2);
    console.log("this.casedataC2 inside getPallet after = " + this.casedataC2);

    if (pallet_no === 1) {
      this.setState({
        outside_Label_Priority: this.outside_Label_Priority,
        ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
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
        case_Type: this.caseType1,
        no_Of_Layers: this.noOfLayers1,
        cases_Schema_A: this.cases_Schema_A1,
        cases_Schema_B: this.cases_Schema_B1,
        cases_Schema_C: this.cases_Schema_C1,
        setVariantName_SchemaA: this.setVariantName_SchemaA1,
        setVariantName_SchemaB: this.setVariantName_SchemaB1,
        setVariantName_SchemaC: this.setVariantName_SchemaC1,
        layer: this.layer,
        layer_data: this.layerdata1,
        case_data: this.casedata,
        int_Layer: this.int_Layer1,
        layers: this.noOfLayers1,
        layerdataupdated: this.layerdataupdated
      });
    }
    else if (pallet_no === 2) {
      this.setState({
        outside_Label_Priority: this.outside_Label_Priority,
        ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
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
        case_Type: this.caseType2,
        no_Of_Layers: this.noOfLayers2,
        cases_Schema_A: this.cases_Schema_A2,
        cases_Schema_B: this.cases_Schema_B2,
        cases_Schema_C: this.cases_Schema_C2,
        setVariantName_SchemaA: this.setVariantName_SchemaA2,
        setVariantName_SchemaB: this.setVariantName_SchemaB2,
        setVariantName_SchemaC: this.setVariantName_SchemaC2,
        layer: this.layer,
        layer_data: this.layerdata2,
        case_data: this.casedata,
        int_Layer: this.int_Layer2,
        layers: this.noOfLayers2,
        layerdataupdated: this.layerdataupdated
      });
    }



    if (pallet_no === 1) {
      this.CasesSchemaA = this.cases_Schema_A1;
      this.CasesSchemaB = this.cases_Schema_B1;
      this.CasesSchemaC = this.cases_Schema_C1;
      console.log("this.caseType = " + this.caseType1);
      this.splitCaseType(this.caseType1);
      // this.forceUpdate(); //
    }
    else if (pallet_no === 2) {
      this.CasesSchemaA = this.cases_Schema_A2;
      this.CasesSchemaB = this.cases_Schema_B2;
      this.CasesSchemaC = this.cases_Schema_C2;
      console.log("this.caseType = " + this.caseType2);
      // this.splitCaseType(this.caseType2);
      // this.forceUpdate(); //
    }

    console.log("print state", this.state);
    this.setState({
      pallets: this.pallets
    });
    // this.callSchemafor1();
    this.updatePallet(pallet_no);
    if (pallet_no === 1) {
      this.listForOutsideLabelPrior = [];
      this.getCallLabel(this.state.case_Type);
    }
    if (this.state.selectedOne) {
      this.setState({
        setVariantName_SchemaA: this.setVariantName_SchemaA1,
        setVariantName_SchemaB: this.setVariantName_SchemaB1,
        setVariantName_SchemaC: this.setVariantName_SchemaC1,
      });
    }
    else if (this.state.selectedTwo) {
      this.setState({
        setVariantName_SchemaA: this.setVariantName_SchemaA2,
        setVariantName_SchemaB: this.setVariantName_SchemaB2,
        setVariantName_SchemaC: this.setVariantName_SchemaC2,
      });
    }

  };//end of getPallet

  sortCaseData = (data) => {

    let sortedData = new Array(data.length);

    for (let i = 0; i < data.length; i++) {
      let singleCaseName = data[i].cases.split(" ");
      let caseNumber = singleCaseName[1];

      sortedData[caseNumber - 1] = data[i];

    }

    console.log("my sorted data: " + JSON.stringify(sortedData))
    return sortedData;

  }
  getPRC = async (pallet_no, schema) => {
    const palletid = this.props.match.params.palletid;
    let resonse = await axios.get(`Threed/getPrc/` + palletid);
    const Prcrecord = resonse.data;
    console.log("prc records inside getPRC = ", Prcrecord);
    console.log("prc records inside getPRC = ", JSON.stringify(Prcrecord));
    let schemaArecords = Prcrecord.filter(item => item.pallet === pallet_no && item.schema === schema[0]);
    let schemaBrecords = Prcrecord.filter(item => item.pallet === pallet_no && item.schema === schema[1]);
    let schemaCrecords = Prcrecord.filter(item => item.pallet === pallet_no && item.schema === schema[2]);
    console.log("schemaArecords inside getPRC =", schemaArecords);
    console.log("schemaBrecords inside getPRC =", schemaBrecords);
    console.log("schemaCrecords inside getPRC =", schemaCrecords);
    return [schemaArecords, schemaBrecords, schemaCrecords];
  }

  getLayer = async (pallet_no) => {
    const palletid = this.props.match.params.palletid;
    let resonse = await axios.get(`Threed/getLayer/` + palletid);
    const layerrecord = resonse.data;
    console.log("records inside getLayer = ", JSON.stringify(layerrecord));
    let found = layerrecord.filter(item => item.pallet_no === pallet_no);
    console.log("pallet_no inside getLayer = " + pallet_no);
    console.log("found inside getLayer = " + JSON.stringify(found));
    return found;
  }

  handlecolorA = () => {

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
      enableCanvasBP: 'hidden',
      // setCircularProgress: "visible"
    })

    this.colorA = '#5eb8b3';
    this.colorB = 'white';
    this.colorC = 'white';
    console.log('colora' + this.state.colorA)

    if ((this.cases_Schema_B == false) || (this.cases_Schema_C == false)) {
      this.cases_Schema_A = true;
    }

    this.casesSchemaPrc(this.CasesSchemaA);

    if (this.state.panelname === 'panel3') {
      // this.clearSchemaField()
      this.updatelist(this.CasesSchemaA);
      this.disableAlgoPW(true, "visible");

    }

    else if (this.state.panelname === 'panel5') {
      this.callSchema1();
      this.setState({
        enableHeaderA: true,
        enableHeaderB: false,
        enableHeaderC: false,
      })
    }
    this.onceCarousalUpdateIndex = false;
    if (this.state.setVariantName_SchemaA != undefined || this.state.setVariantName_SchemaA != "") {
      if (this.variantName_array != undefined && this.variantName_array != null && this.variantName_array != []) {
        this.swiperRef?.current.swiper.slideToLoop((this.variantName_array.indexOf(this.state.setVariantName_SchemaA)));
      }

    }


  }

  handlecolorB = () => {

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
      colorC: 'white',
      // setCircularProgress: "visible"
    })
    this.colorB = '#5eb8b3';
    this.colorA = 'white';
    this.colorC = 'white';
    if ((this.cases_Schema_A == false) || (this.cases_Schema_C == false)) {
      this.cases_Schema_B = true;
    }

    this.casesSchemaPrc(this.CasesSchemaB);

    console.log('bbbbb' + this.cases_Schema_B)

    if (this.state.panelname === 'panel3') {
      // this.clearSchemaField()
      this.updatelist(this.CasesSchemaB);
      this.disableAlgoPW(true, "visible");

    }
    else if (this.state.panelname === 'panel5') {
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

  }

  handlecolorC = () => {
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
      colorB: 'white',
      // setCircularProgress: "visible"
    })
    this.colorC = '#5eb8b3';
    this.colorA = 'white';
    this.colorB = 'white';
    if ((this.cases_Schema_A == false) || (this.cases_Schema_B == false)) {
      this.cases_Schema_C = true;
    }

    this.casesSchemaPrc(this.CasesSchemaC);
    if (this.state.panelname === 'panel3') {
      // this.clearSchemaField()
      this.updatelist(this.CasesSchemaC);
      this.disableAlgoPW(true, "visible");

    }
    else if (this.state.panelname === 'panel5') {
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
    console.log('colora' + this.state.colorfor1)
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
    console.log('colora' + this.state.colorfor2)
  }

  assign_casetype = (caseType) => (selected) => {

    console.log("assign_casetype  = " + caseType);

    this.splitCaseType(selected)

  }

  getdropdown = async () => {

    let resonse = await axios.get(`Threed/getDropdown/`);
    const dropdowndata = resonse.data;

    console.log("dropdown " + dropdowndata);

    const basic_parameter = [];
    dropdowndata.forEach(function (dropdown, index) {
      if (dropdown.ddpName === "Basic Parameter") {
        basic_parameter.push(dropdown.ddpValue)
      }
    });

    this.setState({
      basic_parameter: basic_parameter
    });

    console.log("basic parameter" + this.state.basic_parameter)
  }


  updatePallet = (pallet_no) => {
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
      "working_area_1_Offset_X_Direction": this.state.WA_1_Offset_X_Dir,
      "working_area_1_Offset_Y_Direction": this.state.WA_1_Offset_Y_Dir,
      "working_area_2_Width_X_Direction": this.state.WA_2_width_X_Dir,
      "working_area_2_Length_Y_Direction": this.state.WA_2_Length_Y_Dir,
      "working_area_2_Offset_X_Direction": this.state.WA_2_Offset_X_Dir,
      "working_area_2_Offset_Y_Direction": this.state.WA_2_Offset_Y_Dir,

      "palletType": this.state.pallete_Type,
      // "intermediateLayerType": this.state.intermediate_Layer_Type,
      "intermediateLayerType": 1,
      "caseType": this.state.case_Type,
      "noOfLayers": this.state.no_Of_Layers,
      "casesSchemaA": this.state.cases_Schema_A,
      "casesSchemaB": this.state.cases_Schema_B,
      "casesSchemaC": this.state.cases_Schema_C,
      "intermediate_Layer": this.state.int_Layer,
      "outsideLabelPriority": this.state.outside_Label_Priority,
      "rule_symmetric_mass_distribution": this.state.ruleSymetricMassDistribution,
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

  workAreaFor_pattern = () => {

    // var my_gradient5 = this.ctx_forPRC.createLinearGradient(0, 0, 0, 170);

    // // /outer rectangle
    // this.ctx_forPRC.beginPath();
    // this.ctx_forPRC.lineWidth = 5;
    // my_gradient5.addColorStop(1, "#FFF2CC");
    // this.ctx_forPRC.fillStyle = my_gradient5;
    // this.ctx_forPRC.strokeStyle = "#FAD7AC";  //borderschema
    // this.ctx_forPRC.strokeRect(this.x_pos, this.y_pos, this.w_width, this.l_length );
    // console.log("this.x_pos for workAreaFor_pattern " + this.x_pos + " this.y_pos " + this.y_pos + " this.w_width " + this.w_width + " this.l_length " + this.l_length);
    // this.ctx_forPRC.fillRect( this.x_pos, this.y_pos, this.w_width, this.l_length );
    // // this.ctx.strokeRect(250, 35, 240, 330);
    // // this.ctx.fillRect(250, 35, 240, 330);
    // this.ctx_forPRC.stroke();

  }

  setOffsetPrc = (axis, objPrc) => {
    console.log("objPrc 1 " + objPrc);
  }

  casesSchemaPrc = (noOfCases) => {
    console.log("this.casedataA1 inside casesSchemaPrc after = " + this.casedataA1);
    console.log("this.casedataB1 inside casesSchemaPrc after = " + this.casedataB1);
    console.log("this.casedataC1 inside casesSchemaPrc after = " + this.casedataC1);
    console.log("this.casedataA2 inside casesSchemaPrc after = " + this.casedataA2);
    console.log("this.casedataB2 inside casesSchemaPrc after = " + this.casedataB2);
    console.log("this.casedataC2 inside casesSchemaPrc after = " + this.casedataC2);
    //same as changePRC
    if (this.state.selectedOne) {
      if (this.colorA == '#5eb8b3') {
        console.log("this.state.colorA inside casesSchemaPrc for 1 = " + this.state.colorA);
        this.casedata = this.casedataA1;
      }

      if (this.colorB == '#5eb8b3') {
        console.log("this.state.colorB inside casesSchemaPrc for 1 = " + this.state.colorB);
        this.casedata = this.casedataB1;
      }

      if (this.colorC == '#5eb8b3') {
        console.log("this.state.colorC inside casesSchemaPrc for 1 = " + this.state.colorC);
        this.casedata = this.casedataC1;
      }
    }
    else if (this.state.selectedTwo) {
      if (this.colorA == '#5eb8b3') {
        console.log("this.state.colorA inside casesSchemaPrc for 2 = " + this.state.colorA);
        this.casedata = this.casedataA2;
      }

      if (this.colorB == '#5eb8b3') {
        console.log("this.state.colorB inside casesSchemaPrc for 2 = " + this.state.colorB);
        this.casedata = this.casedataB2;
      }

      if (this.colorC == '#5eb8b3') {
        console.log("this.state.colorC inside casesSchemaPrc for 2 = " + this.state.colorC);
        this.casedata = this.casedataC2;
      }
    }
    if (this.casedata.length > 0) {
      console.log("this.casedata length inside casesSchemaPrc ", this.casedata.length)
      this.state.case_data = this.casedata;
      this.setState({
        case_data: this.casedata
      })
      this.forceUpdate();

    }
    else {
      let records = [];
      console.log("casesSchemaPrc noofCases " + noOfCases);
      console.log("casesSchemaPrc " + this.prcid + " , " + this.palletid + " , " + this.schema + " , " +
        this.caseName + " , " + this.Position + " , " + this.Position_freezed + " , " + this.Pre_Pos_X
        + " , " + this.Pre_Pos_Y
        + " , " + this.Pre_Pos_Z
        + " , " + this.Auto_Generation)
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
          "schema": this.state.schema,
          "cases": "Case " + (i + 1),
          "offset_X_neg": false,
          "offset_Y_neg": false,
          "position": "",
          "position_freezed": false,
          "pre_Pos_X": this.preposx,
          "pre_Pos_Y": this.preposy,
          "pre_Pos_Z": this.preposz,
          "auto_generation": false,
          "rotation": null
        })
      }

      this.casedata = records;
      this.setState({
        case_data: records
      })
      this.forceUpdate();
      this.savePrc();
      console.log("records.length 1 casesSchemaPrc  " + records.length);
    }


  }

  casesSchemaPrcUpdate = (noOfCases) => {
    if (noOfCases === 0) {
      return;
    }
    //same as changePRC

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
    let records = [];
    console.log("casesSchemaPrc noofCases inside casesSchemaPrcUpdate " + noOfCases);
    console.log("casesSchemaPrc " + this.prcid + " , " + this.palletid + " , " + this.schema + " , " + this.caseName + " , " + this.Position
      + " , " + this.Position_freezed + " , " + this.Pre_Pos_X + " , " + this.Pre_Pos_Y + " , " + this.Pre_Pos_Z + " , " + this.Auto_Generation);
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
        "offset_X_neg": false,
        "offset_Y_neg": false,
        "position": "",
        "position_freezed": false,
        "pre_Pos_X": this.preposx,
        "pre_Pos_Y": this.preposy,
        "pre_Pos_Z": this.preposz,
        "auto_generation": false,
        "rotation": null
      })
    }
    console.log("this.state.selectedOne inside casesSchemaPrcUpdate " + this.state.selectedOne);
    console.log("this.colorA inside casesSchemaPrcUpdate " + this.colorA);
    if (this.state.selectedOne) {
      if (this.colorA == '#5eb8b3') {
        this.casedataA1 = [];
        this.casedataA1 = records;
        console.log("this.casedataA1.length inside casesSchemaPrcUpdate " + this.casedataA1.length)
      }

      if (this.colorB == '#5eb8b3') {
        this.casedataB1 = [];
        this.casedataB1 = records;
      }

      if (this.colorC == '#5eb8b3') {
        this.casedataC1 = [];
        this.casedataC1 = records;
      }
    }
    else if (this.state.selectedTwo) {
      if (this.colorA == '#5eb8b3') {
        this.casedataA2 = [];
        this.casedataA2 = records;
      }

      if (this.colorB == '#5eb8b3') {
        this.casedataB2 = [];
        this.casedataB2 = records;
      }

      if (this.colorC == '#5eb8b3') {
        this.casedataC2 = [];
        this.casedataC2 = records;
      }
    }
    console.log("records.length inside casesSchemaPrcUpdate " + records.length);
    this.state.case_data = records;
    this.setState({
      case_data: records
    })
    console.log("this.state.case_data inside casesSchemaPrcUpdate " + this.state.case_data);
    this.forceUpdate();
  }

  handleChangepanel = (name) => (event) => {

    if (this.state.selectedOne) {
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = this.casedataA1;
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = this.casedataB1;
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = this.casedataC1;
      }
    }
    else if (this.state.selectedTwo) {
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = this.casedataA2;
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = this.casedataB2;
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = this.casedataC2;
      }
    }
    if (this.state.selectedOne) {
      this.setState({
        outside_Label_Priority: this.outside_Label_Priority,
        ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
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
        case_Type: this.caseType1,
        no_Of_Layers: this.noOfLayers1,
        cases_Schema_A: this.cases_Schema_A1,
        cases_Schema_B: this.cases_Schema_B1,
        cases_Schema_C: this.cases_Schema_C1,
        setVariantName_SchemaA: this.setVariantName_SchemaA1,
        setVariantName_SchemaB: this.setVariantName_SchemaB1,
        setVariantName_SchemaC: this.setVariantName_SchemaC1,
        layer: this.layer,
        layer_data: this.layerdata1,
        case_data: this.casedata,
        int_Layer: this.int_Layer1,
        layers: this.noOfLayers1,
        layerdataupdated: this.layerdataupdated
      });
    }
    else if (this.state.selectedTwo) {
      this.setState({
        outside_Label_Priority: this.outside_Label_Priority,
        ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
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
        case_Type: this.caseType2,
        no_Of_Layers: this.noOfLayers2,
        cases_Schema_A: this.cases_Schema_A2,
        cases_Schema_B: this.cases_Schema_B2,
        cases_Schema_C: this.cases_Schema_C2,
        setVariantName_SchemaA: this.setVariantName_SchemaA2,
        setVariantName_SchemaB: this.setVariantName_SchemaB2,
        setVariantName_SchemaC: this.setVariantName_SchemaC2,
        layer: this.layer,
        layer_data: this.layerdata2,
        case_data: this.casedata,
        int_Layer: this.int_Layer2,
        layers: this.noOfLayers2,
        layerdataupdated: this.layerdataupdated
      });
    }
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

    if (this.state.panelname === 'panel5' && this.state.caseTypeSet == true) {
      // this.workAreaFor_pattern();
    }

    console.log("panelname inside handleChangepanel = " + this.state.panelname)

    if (this.state.panelname != name) {
      this.state.panelname = name;
      console.log("name inside handleChangepanel if = " + this.state.panelname);

    }
    else {
      this.state.panelname = ''
      console.log("name inside handleChangepanel = " + this.state.panelname);

    }
    // if((name == "panel3" || name == "panel5") && this.state.caseTypeSet == false){
    if ((name == "panel3" || name == "panel5") && (this.state.case_Type == "")) {
      toast.error("Create atleast one case in Case Design", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
    }

    if (this.state.selectedOne) {
      this.setState({
        case_Type: this.caseType1
      });
    }
    else if (this.state.selectedTwo) {
      this.setState({
        case_Type: this.caseType2
      });
    }
    this.setState({
      outside_Label_Priority: this.outside_Label_Priority
    });
    console.log("name inside handleChangepanel outside " + this.state.panelname);
    console.log("event inside handleChangepanel " + event);

    console.log("my conditional schema ABC value AA: " + this.state.setVariantName_SchemaA + " BB: " + this.state.setVariantName_SchemaB + " CC: " + this.state.setVariantName_SchemaC)

    if (name == "panel5" && (this.state.setVariantName_SchemaA == "" || this.state.setVariantName_SchemaC == "" || this.state.setVariantName_SchemaC == "")) {
      toast.error("Select Pallets for Schema A, Schema B, Schema C in Pattern Wizard", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.state.panelname = ""
    }
    this.setState({
      expanded: this.state.panelname
    });
    if (this.state.panelname === '' || this.state.panelname === 'panel1' || this.state.panelname === 'panel2' || this.state.panelname === 'panel4') {
      this.setState({
        enableCarousel1: true
      });
    } else {
      this.setState({
        enableCarousel1: false
      });
    }

    if (this.state.panelname === 'panel3') {

      this.frameForPRC = false;
      // this.clearSchemaField()


      this.setState({
        enableCanvasPRC: "hidden",
        enableCanvasBP: "hidden",
        // setCircularProgress: "visible"

      })

      if (this.forOneTime) {
        this.outsideInitialPriority();
        this.forOneTime = false;

      } else {

        this.splitForOutSideLabelPriority();
        this.updateSelection();

      }

      this.reqCombinationForPallet_N_Origin();
      this.callSchemaDropdown();
      this.disableAlgoPW(true, "visible");

      this.updateSelectionSchemaA(event);
      this.updateSelectionSchemaB(event);
      this.updateSelectionSchemaC(event);

      this.onchangeLayerBlur(event);


    }
    else {

      this.disableAlgoPW(false, "hidden");

      this.drawPallet_1_2();
      this.enableCarousel = false;
      this.setState({
        enableCanvasPRC: "hidden",
        enableCanvasBP: "visible",
        pallet_bool: true,
        pallet_12: false,

      })
    }

    if (this.state.panelname === 'panel4') {
      console.log("this.state.panelname inside handlechangepanel = " + this.state.panelname);
      console.log("this.state.layerdataupdated inside handlechangepanel = " + this.state.layerdataupdated);
      if (!this.state.layerdataupdated) {

        this.state.layerdataupdated = true;
      }
      let inter_layer = true;
      if (this.state.selectedOne) {
        inter_layer = this.int_Layer1;
      }
      else if (this.state.selectedTwo) {
        inter_layer = this.int_Layer2;
      }
      this.setState({
        int_Layer: inter_layer
      })
    }

    if (this.state.panelname === 'panel5') {
      this.setState({
        margintop_prc: "25px"
      })

    }
    else {
      this.setState({
        margintop_prc: "0px"
      })
    }

    if (this.state.panelname === 'panel5') {


      this.frameForPRC = true;

      this.colorA = "#5eb8b3";
      this.setState({
        canvasGreenRect: "visible",
        canvasfreezGreenRect: "visible",
        enableCanvasBP: "hidden",
        enableCanvasPRC: "visible",
        setCanvasBP: false,
        pallet_bool: false,
        pallet_12: true,
      })

      this.ctx_forPRC.clearRect(0, 0, this.myRef_forPRC.current.clientWidth, this.myRef_forPRC.current.clientHeight);
      this.ctx_forSingle.clearRect(0, 0, this.myRef_forSingleCanvas.current.clientWidth, this.myRef_forSingleCanvas.current.clientHeight);
      this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
      this.drawGreenRect();
      this.UpadateNrPRC();

      //Creating pallet ctx for PRC in similar manner like pallets in Basic parameter
      this.callSchemafor1_forPRC();


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
        canvasfreezGreenRect: "hidden",
        canvasPRC: "hidden",
        enableCanvasBP: "visible",
        enableCanvasPRC: "hidden",
        setCanvasBP: true

      })

      this.frameForPRC = false;
    }

    this.updateSelection();
    console.log("my swiperRef: this.state.enableCarousel: " + this.enableCarousel)
    if (this.state.panelname == "panel3" && this.enableCarousel) { // for auto selection varient based on selected varient in schema A,B,C
      this.reOrderingSwiperIndex()
    }

  };

  reOrderingSwiperIndex = () => {
    new Promise((resolve, reject) => {
      this.swiperRef?.current?.swiper.slideToLoop(0);
      setTimeout(() => {
        this.swiperRef?.current?.swiper.slideNext();
        resolve();
      }, 5)
    }).then(() => {

      console.log("my all colors prat: A: " + this.state.colorA + " B: " + this.state.colorB + " C: " + this.state.colorC)

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

  savePrc = () => {
    const palletid = this.props.match.params.palletid;
    console.log("........" + palletid);
    var finalObj = this.casedataA1.concat(this.casedataB1)
      .concat(this.casedataC1).concat(this.casedataA2).concat(this.casedataB2).concat(this.casedataC2);
    console.log("finalObj inside savePrc = " + finalObj);
    const request = finalObj;
    let response = axios.post(`/Threed/savePRC/${palletid} `, request)
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

        console.log("response " + response);
        console.log("Response " + response.data);
      });
  }

  layerGrid = () => {
    const palletid = this.props.match.params.palletid;
    console.log("request inside layerGrid = " + palletid);
    var finalObj = this.layerdata1.concat(this.layerdata2);
    console.log("finalObj inside layergrid = " + finalObj);
    const request = finalObj;
    let response = axios.post(`/Threed/saveLayerCreater/${palletid} `, request)
      .then((response) => {

        console.log("Response then " + response.data[0]["lid"]);

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
        console.log("lid....... " + this.state.palletid + " palletid " + this.state.palletid + " intermediatelayer " + this.state.interLayer
          + " layername " + this.state.layerName + " layerSequence " + this.state.layerSequence + " isActive " + this.state.isActive
          + " updatedBy " + this.state.updatedBy + " updated_DateTime " + this.state.updated_DateTime);

        console.log("Response " + response.data);
      });
  }

  componentWillMount() {

    this.props.i18n.changeLanguage(localStorage.getItem("language"))

  }

  componentDidMount() {

    this.setState({
      selectedOne: true
    })


    canvas_forSingle = this.myRef_forSingleCanvas.current;
    canvas_forSingle.width = canvas_forSingle.clientWidth;
    canvas_forSingle.height = canvas_forSingle.clientHeight;


    canvas_forPRC = this.myRef_forPRC.current;
    canvas_forPRC.width = canvas_forPRC.clientWidth;
    canvas_forPRC.height = canvas_forPRC.clientHeight;

    canvasEle = this.myRef.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    canvasEle_GR = this.myRef_GR.current;
    canvasEle_GR.width = canvasEle_GR.clientWidth;
    canvasEle_GR.height = canvasEle_GR.clientHeight;
    // get context of the canvas

    canvasEleCase = this.myRefCase.current;
    canvasEleCase.width = canvasEleCase.clientWidth;
    canvasEleCase.height = canvasEleCase.clientHeight;


    canvasEle_GRCaseFreez = this.myRef_GRCaseFreez.current;
    canvasEle_GRCaseFreez.width = canvasEle_GR.clientWidth;
    canvasEle_GRCaseFreez.height = canvasEle_GR.clientHeight;

    console.log("canvasEleCase.clientWidth" + canvasEleCase.clientWidth)

    this.ctx_forPRC = canvas_forPRC.getContext("2d");
    this.ctx_forSingle = canvas_forSingle.getContext("2d");
    this.ctx = canvasEle.getContext("2d");
    this.ctxCase = canvasEleCase.getContext("2d");
    this.ctx_greenRect = canvasEle_GR.getContext("2d");
    this.ctx_GRCaseFreez = canvasEle_GRCaseFreez.getContext("2d");
    this.drawPallet_1_2();

  }

  reqCombinationForPallet_N_Origin = () => {

    poss_Origin = [];
    varientsList = [];
    numberVar = [];
    varientsList.push("dummy value at 0")
    numberVar.push("dummy value at 0")
    progressNum = 0;

    console.log("reqCombinationForPallet_N_Origin this.HWeighted ", this.HWeighted, " this.VWeighted ", this.VWeighted)

    console.log("reqCombinationForPallet_N_Origin poss_Origin cehck for empty ", poss_Origin)

    let frames = this.Possible_Frames();

    console.log("poss_Origin frames break 1 ", frames)

    frames.forEach((frames, index) => {

      poss_Origin = this.Possible_Origins(frames);

      console.log(" poss_Origin frames break 2 ", poss_Origin)

    })

    console.log("reqCombinationForPallet_N_Origin poss_Origin ", poss_Origin)

  }

  Possible_Frames = () => {

    console.log("Possible_Frames this.Case_Width width " + this.Case_Width);
    console.log("Possible_Frames this.Case_Width length " + this.Case_Length);

    let Dimentions_In_Percenatge = this.map(this.Case_Length, 0, this.Pallet_Length, 0, 100);

    // let Dimentions_In_Percenatge = this.map((this.Case_Length * this.Case_Width), 0, (this.Pallet_Length * this.Pallet_Width), 0, 100);

    let Frame_List;
    console.log("Possible_Frames Dimentions_In_Percenatge ", Dimentions_In_Percenatge)

    if (Dimentions_In_Percenatge <= 40) {
      if (this.HWeighted && this.VWeighted) {
        Frame_List = ["Frame_1", "Frame_6", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"];
      }
      else if (this.HWeighted && !this.VWeighted) {
        Frame_List = ["Frame_1", "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"]
      }
      else if (!this.HWeighted && this.VWeighted) {
        Frame_List = ["Frame_1", "Frame_6", "Frame_7", "Frame_9", "Frame_10", "Frame_11", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"];
      }
      else {
        //UnWeighted  "Frame_7","Frame_9"
        Frame_List = ["Frame_1", "Frame_2", "Frame_3", "Frame_4", "Frame_5", "Frame_6", "Frame_7", "Frame_8", "Frame_20", "Frame_21", "Frame_22", "Frame_23", "Frame_24", "Frame_25", "Frame_26", "Frame_27", "Frame_28", "Frame_29", "Frame_30", "Frame_31", "Frame_32", "Frame_33", "Frame_34", "Frame_35", "Frame_36", "Frame_37"];
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

    console.log("Possible_Frames Frame_List ", Frame_List)

    return Frame_List;
  }

  Possible_Origins = (Selected_Frame) => {

    console.log("Possible_Origins Selected_Frame ", Selected_Frame)

    if (Selected_Frame === "Frame_1") {

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        let Pal_1 = ["Top-Left", "Top-Right", "TL-to-B", "TR-to-B"]

        Pal_1.forEach((value1, index) => {

          console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }
      else if ((this.HWeighted === false) && (this.VWeighted === true)) {

        let Pal_1 = ["Top-Left", "Top-Right", "TL-to-B", "TR-to-B"]

        Pal_1.forEach((value1, index) => {

          console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }
      else if ((this.HWeighted === true) && (this.VWeighted === true)) {
        //
        let Pal_1 = ["Top-Left", "Top-Right", "TL-to-B", "TR-to-B"]

        Pal_1.forEach((value1, index) => {

          console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])
        })

      }
      else {

        let Pal_1 = ["Top-Left", "Bottom-Left", "Top-Right", "Bottom-Right", "TL-to-B", "TR-to-B", "BL-to-T", "BR-to-T"];

        Pal_1.forEach((value1, index) => {

          console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }
    }
    else if (Selected_Frame === "Frame_2") {

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        let Pal_1 = ["Top-Left-V2"]
        let Pal_2 = ["TL-to-B", "TR-to-B", "Top-Left", "Top-Right"]

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else {

        let Pal_1 = ["Top-Left-V2", "Bottom-Left-V2"];
        let Pal_2 = ["TL-to-B", "TR-to-B", "Top-Left", "Top-Right", "Bottom-Left", "Bottom-Right", "BL-to-T", "BR-to-T"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

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

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })
      } else {

        let Pal_1 = ["Top-Left", "Bottom-Left"];
        let Pal_2 = ["TL-B-V2", "TR-B-V2", "Top-Left-V2", "Top-Right-V2", "Bottom-Left-V2", "Bottom-Right-V2", "BL-T-V2", "BR-T-V2"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }

    }
    else if (Selected_Frame === "Frame_4") {

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        let Pal_1 = ["Top-Left-V2"]
        let Pal_2 = ["TL-to-B", "TR-to-B", "Top-Left", "Top-Right"]

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      } else {

        let Pal_1 = ["Top-Left-V2", "Bottom-Left-V2"];
        let Pal_2 = ["Top-Left", "Bottom-Left", "Top-Right", "Bottom-Right", "TL-to-B", "TR-to-B", "BL-to-T", "BR-to-T"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

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

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })


      } else {

        let Pal_1 = ["Top-Left", "Bottom-Left"];
        let Pal_2 = ["Top-Left", "Bottom-Left", "Top-Right", "Bottom-Right", "TL-to-B", "TR-to-B", "BL-to-T", "BR-to-T"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }

    }
    else if (Selected_Frame === "Frame_6") {

      console.log(" Possible_origin Frame6 start ")

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        console.log(" Possible_origin Frame6 1st if part ")

        let Pal_1 = ["Top-Left-V2", "Top-Right-V2"];

        Pal_1.forEach((value1, index) => {

          console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

        console.log(" Frame_6 frame list is ", varientsList)

      }
      else if ((this.HWeighted === false) && (this.VWeighted === true)) {
        console.log(" Possible_origin Frame6 2nd if part ")


        let Pal_1 = ["Top-Left-V2", "Top-Right-V2"];

        Pal_1.forEach((value1, index) => {

          console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

        console.log("Frame_6 varientsList ", varientsList)

      }
      else if ((this.HWeighted === true) && (this.VWeighted === true)) {

        console.log(" Possible_origin Frame6 3rd if part ")


        let Pal_1 = ["Top-Left-V2", "Top-Right-V2"];

        Pal_1.forEach((value1, index) => {

          console.log("value's ", Selected_Frame, value1)

          varientsList.push([Selected_Frame, value1])

        })

      }
      else if ((this.HWeighted === false) && (this.VWeighted === false)) {
        console.log(" Possible_origin Frame6 last else part ")

        let Pal_1 = ["Top-Left-V2", "Top-Right-V2", "Bottom-Left-V2", "Bottom-Right-V2", "TL-B-V2", "TR-B-V2", "BL-T-V2", "BR-T-V2"];

        Pal_1.forEach((value1, index) => {
          console.log("value's ", Selected_Frame, value1)
          varientsList.push([Selected_Frame, value1])
        })

      }
    }
    else if (Selected_Frame === "Frame_7") {

      if ((this.HWeighted === false) && (this.VWeighted === true)) {

        let Pal_1 = ["Top-Left", "Top-Right"];
        let Pal_2 = ["Top-Left-V2", "Top-Right-V2", "TL-B-V2", "TR-B-V2"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else {
        let Pal_1 = ["Bottom-Left", "Bottom-Right"];
        let Pal_2 = ["Top-Left-V2", "Top-Right-V2", "TL-B-V2", "TR-B-V2", "Bottom-Right-V2", "Bottom-Left-V2", "BL-T-V2", "BR-T-V2"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
    }
    else if (Selected_Frame === "Frame_8") {

      if ((this.HWeighted === true) && (this.VWeighted === false)) {

        let Pal_1 = ["Top-Left-V2", "Top-Right-V2"];
        let Pal_2 = ["Top-Left", "Top-Right"];
        let Pal_3 = ["Top-Left", "Top-Right"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            Pal_3.forEach((value3, index) => {

              console.log("value's ", Selected_Frame, value1, value2, value3)

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

              console.log("value's ", Selected_Frame, value1, value2, value3)

              varientsList.push([Selected_Frame, value1, value2, value3])

            })
          })
        })
      }
    }
    else if (Selected_Frame === "Frame_9") {

      if ((this.HWeighted === false) && (this.VWeighted === true)) {

        let Pal_1 = ["Top-Left", "Top-Right"];
        let Pal_2 = ["Top-Left", "Top-Right"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

            varientsList.push([Selected_Frame, value1, value2])

          })
        })

      }
      else {

        let Pal_1 = ["Top-Left", "Top-Right"];
        let Pal_2 = ["Top-Left", "Top-Right", "TL-to-B", "TR-to-B", "Bottom-Right", "Bottom-Left"];

        Pal_1.forEach((value1, index) => {

          Pal_2.forEach((value2, index) => {

            console.log("value's ", Selected_Frame, value1, value2)

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

    console.log("varientsList check ", varientsList)

    return varientsList;
  }

  drawGreenRect = (x, y, w, h) => {

    this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

    let greenRectInfo = { x: x, y: y, w: w, h: h };
    // boxes.map(info => {
    // console.log("info :" + info.toString());
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

   

    console.log(" drawFillRect1 ")
    
    this.ctx_greenRect.globalAlpha = 0.75;
    this.ctx_greenRect.fillRect(x, y, w, h);


  }

  handleSelected = (event) => {
    this.setState({
      preposx: this.setpreposx,
      preposy: this.setpreposy,
      preposz: this.setpreposz,
    });

  }

  onhandleSelected = () => {

    console.log("click me :");
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

    console.log("display number:" + this.setpreposx);
    console.log("display number:" + this.setpreposy);
    console.log("display number:" + this.setpreposz);
  }


  onvaluechecked = () => {

    console.log("click me :");

  }

  valuechangePreposX = (value) => {
    this.setState({
      // setnumberx: value,
      preposx: value

    });
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

    if (name === "setnumberx") {
      this.setState({
        setnumberx: true,

      });

      this.state.errorPreposx = "Enter 10 - 500";
    } else if (name === "setnumberx2") {
      this.setState({
        setnumberx2: true,

      });

      this.state.errorPreposx = "Enter 10 - 500";
    }

    let value = event.target.value;
    this.state.errorhelpertextForPreposx = ""
    this.state.errorPreposx = false;

    if (name === "setnumberx") {
      this.globalScalex = value;
      if (value < 10 || value > 500) {
        console.log("Out Prepos1.... " + value);
        this.state.errorhelpertextForPreposx = "Enter 10 - 500";
        this.state.errorPreposx = true;
      }
      else if (value > 10 || value > 500) {
        console.log("Out Prepos1 " + value);
        this.state.errorhelpertextForPreposx = false;
        this.state.errorPreposx = false;
      }
      else if (event.target.value == "" || event.target.value < 10 || event.target.value > 500) {
        this.state.errorPreposx = true;
        this.state.errorhelpertextForPreposx = "Enter 10 - 500";
      }
      this.setState({
        [name]: value
      });
    } else if (name === "setnumberx2") {
      this.globalScalex2 = value;

      if (value < 10 || value > 500) {
        console.log("Out Prepos1.... " + value);
        this.state.errorhelpertextForPreposx = "Enter 10 - 500";
        this.state.errorPreposx = true;
      }
      else if (value > 10 || value > 500) {
        console.log("Out Prepos1 " + value);
        this.state.errorhelpertextForPreposx = false;
        this.state.errorPreposx = false;
      }
      else if (event.target.value == "" || event.target.value < 10 || event.target.value > 500) {
        this.state.errorPreposx = true;
        this.state.errorhelpertextForPreposx = "Enter 10 - 500";
      }
      this.setState({
        [name]: value
      });
    }
  }

  callBlurForPreposX = (event) => {

    this.state.setnumberx = this.globalScalex;
    this.state.errorPreposx = false;
    this.state.errorhelpertextForPreposx = "";
    if (event.target.value == "") {
      console.log("empty " + event.target.value);
      this.state.setnumberx = 10;
      this.setState({
        errorPreposx: false
      });
      this.state.errorhelpertextForPreposx = "Enter 10 - 500";
    }
    if (event.target.value < 0 || event.target.value < 1 || event.target.value < 10) {
      this.state.setnumberx = 10;
      this.setState({
        errorPreposx: false
      });
      this.state.errorhelpertextForPreposx = ""
    }
    if (event.target.value > 500) {
      this.state.setnumberx = 500;
      this.setState({
        errorPreposx: false
      });
      this.state.errorhelpertextForPreposx = ""
    }
  }

  onvaluechangepreposY = name => (event) => {
    this.setpreposy = event.target.value;
    if (name === "setnumbery") {
      this.setState({
        setnumbery: true,

      });
      this.state.errorPreposy = "Enter 10 - 500";
    } else if (name === "setnumbery2") {
      this.setState({
        setnumbery2: true,

      });
      this.state.errorPreposy = "Enter 10 - 500";
    }
    let value = event.target.value;
    this.state.errorhelpertextForPreposy = ""
    this.state.errorPreposy = false;
    if (name === "setnumbery") {
      this.globalScalex = value;
      if (value < 10 || value > 500) {
        console.log("Out Prepos1.... " + value);
        this.state.errorhelpertextForPreposy = "Enter 10 - 500";
        this.state.errorPreposy = true;
      }
      else if (value > 10 || value > 500) {
        console.log("Out Prepos1 " + value);
        this.state.errorhelpertextForPreposy = false;
        this.state.errorPreposy = false;
      }
      else if (event.target.value == "" || event.target.value < 10 || event.target.value > 500) {
        this.state.errorPreposy = true;
        this.state.errorhelpertextForPreposy = "Enter 10 - 500";
      }
      this.setState({
        [name]: value
      });
    } else if (name === "setnumbery2") {
      this.globalScalex2 = value;
      if (value < 10 || value > 500) {
        console.log("Out Prepos1.... " + value);
        this.state.errorhelpertextForPreposy = "Enter 10 - 500";
        this.state.errorPreposy = true;
      }
      else if (value > 10 || value > 500) {
        console.log("Out Prepos1 " + value);
        this.state.errorhelpertextForPreposy = false;
        this.state.errorPreposy = false;
      }
      else if (event.target.value == "" || event.target.value < 10 || event.target.value > 500) {
        this.state.errorPreposy = true;
        this.state.errorhelpertextForPreposy = "Enter 10 - 500";
      }
      this.setState({
        [name]: value
      });
    }
  }

  callBlurForPreposY = (event) => {

    this.state.setnumbery = this.globalScalex;
    this.state.errorPreposy = false;
    this.state.errorhelpertextForPreposy = "";
    if (event.target.value == "") {
      console.log("empty " + event.target.value);
      this.state.setnumbery = 10;
      this.setState({
        errorPreposy: false
      });
      this.state.errorhelpertextForPreposy = "Enter 10 - 500";
    }
    if (event.target.value < 0 || event.target.value < 1 || event.target.value < 10) {
      this.state.setnumbery = 10;
      this.setState({
        errorPreposy: false
      });
      this.state.errorhelpertextForPreposy = ""
    }
    if (event.target.value > 500) {
      this.state.setnumbery = 500;
      this.setState({
        errorPreposy: false
      });
      this.state.errorhelpertextForPreposy = ""
    }
  }

  onvaluechangepreposZ = name => (event) => {
    this.setpreposz = event.target.value;
    if (name === "setnumberz") {
      this.setState({
        setnumberz: true,

      });
      this.state.errorPreposz = "Enter 10 - 500";
    } else if (name === "setnumberz2") {
      this.setState({
        setnumberz2: true,

      });
      this.state.errorPreposz = "Enter 10 - 500";
    }
    let value = event.target.value;
    this.state.errorhelpertextForPreposz = ""
    this.state.errorPreposz = false;
    if (name === "setnumberz") {
      this.globalScalez = value;
      if (value < 10 || value > 500) {
        console.log("Out Prepos1.... " + value);
        this.state.errorhelpertextForPreposz = "Enter 10 - 500";
        this.state.errorPreposz = true;
      }
      else if (value > 10 || value > 500) {
        console.log("Out Prepos1 " + value);
        this.state.errorhelpertextForPreposz = false;
        this.state.errorPreposz = false;
      }
      else if (event.target.value == "" || event.target.value < 10 || event.target.value > 500) {
        this.state.errorPreposz = true;
        this.state.errorhelpertextForPreposz = "Enter 10 - 500";
      }
      this.setState({
        [name]: value
      });
    } else if (name === "setnumberz2") {
      this.globalScalez2 = value;
      if (value < 10 || value > 500) {
        console.log("Out Prepos1.... " + value);
        this.state.errorhelpertextForPreposz = "Enter 10 - 500";
        this.state.errorPreposz = true;
      }
      else if (value > 10 || value > 500) {
        console.log("Out Prepos1 " + value);
        this.state.errorhelpertextForPreposz = false;
        this.state.errorPreposz = false;
      }
      else if (event.target.value == "" || event.target.value < 10 || event.target.value > 500) {
        this.state.errorPreposz = true;
        this.state.errorhelpertextForPreposz = "Enter 10 - 500";
      }
      this.setState({
        [name]: value
      });
    }
    // this.setState({
    //   setnumberx: this.startX,  
    //   setnumbery: this.startY,
    // })
  }

  callBlurForPreposZ = (event) => {

    this.state.setnumberz = this.globalScalez;
    this.state.errorPreposz = false;
    this.state.errorhelpertextForPreposz = "";
    if (event.target.value == "") {
      console.log("empty " + event.target.value);
      this.state.setnumberz = 10;
      this.setState({
        errorPreposz: false
      });
      this.state.errorhelpertextForPreposz = "Enter 10 - 500";
    }
    if (event.target.value < 0 || event.target.value < 1 || event.target.value < 10) {
      this.state.setnumberz = 10;
      this.setState({
        errorPreposz: false
      });
      this.state.errorhelpertextForPreposz = ""
    }
    if (event.target.value > 500) {
      this.state.setnumberz = 500;
      this.setState({
        errorPreposz: false
      });
      this.state.errorhelpertextForPreposz = ""
    }
    this.setState({
      setnumberx: this.startX,
      setnumbery: this.startY,
    })
  }

  handleSelectedXneg = (event) => {

    console.log("this.offsetXneg " + this.offsetXneg);
    if (this.offsetXneg == false) {
      console.log("this.offsetXneg if " + this.offsetXneg);
      this.setState({
        preposx: -(this.setpreposx),
        offsetXneg: true
      });
    }
    if (this.state.offsetXneg == true) {
      console.log("this.offsetXneg else " + this.offsetXneg);
      this.setState({
        preposx: this.setpreposx,
        offsetXneg: false
      });
    }
  }

  handleSelectedYneg = (event) => {

    console.log("this.offsetYneg " + this.offsetYneg);
    if (this.offsetYneg == false) {
      console.log("this.offsetYneg if " + this.offsetYneg);
      this.setState({
        preposy: -(this.setpreposy),
        offsetYneg: true
      });
    }
    if (this.state.offsetYneg == true) {
      console.log("this.offsetYneg else " + this.offsetYneg);
      this.setState({
        preposy: this.setpreposy,
        offsetYneg: false
      });
    }
  }

  onchangeLayerBlur = (event) => {

    console.log("no_Of_Layers event.target.value " + event.target.value);
    if (event.target.value == "") {
      console.log("Creator empty event.target.value : " + event.target.value);

      // this.state.layer_data.length = 1;

      if (this.state.selectedOne) {
        this.noOfLayers1 = 1;
        this.setState({
          no_Of_Layers: this.noOfLayers1,
          layers: 1
          // layers: event.target.value
        });
        console.log("this layers one onblur " + this.state.layers)
      }
      else if (this.state.selectedTwo) {
        this.noOfLayers2 = 1;
        this.setState({
          no_Of_Layers: this.noOfLayers2,
          layers: 1
          // layers: event.target.value
        });
        console.log("this layers two onblur " + this.state.layers)
      }
    }
    if (event.target.value < 0 || event.target.value < 1 || event.target.value < 10) {
      this.state.setnumberx = 1;
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

    let pallet_no = 1;
    if (this.state.selectedOne) {
      this.state.layers = this.noOfLayers1;
      pallet_no = 1;
    }
    else if (this.state.selectedTwo) {
      this.state.layers = this.noOfLayers2;
      pallet_no = 2;
    }
    this.setState({
      layers: 1

    });

    console.log("layer number this.state.layer_data.length " + this.state.layer_data.length);
    console.log("layer number this.state.layers inside changelayer " + this.state.layers);
    let onchangerecords = [];
    for (var i = 0; i < this.state.layers; i++) {
      onchangerecords.push({
        "l_id": 0,
        "palletid": this.state.palletid,
        "pallet_no": pallet_no,
        "layername": "Schema A",
        "intermediatelayer": true,
        "layerSequence": i + 1
      })

    }
    this.layerdata = onchangerecords;
    if (this.state.selectedOne) {
      this.layerdata1 = onchangerecords;
    }
    else if (this.state.selectedTwo) {
      this.layerdata2 = onchangerecords;
    }

    this.setState({
      layer_data: onchangerecords
    });

    this.forceUpdate()
    this.layerGrid();

  }


  changeLayer = (event) => {
    // change layer code integrated here

    this.setState({
      errorNumberOfLayer: false
    });
    this.state.errorHelperForLayer = ""

    if (event.target.value < 0 || event.target.value > 50) {
      console.log("Out of the range Number of Layer " + event.target.value);
      this.setState({
        errorNumberOfLayer: true
      });
      this.state.errorHelperForLayer = "Enter in 1 - 50"
    }
    else if (event.target.value == "" || event.target.value <= 0) {
      this.setState({
        errorNumberOfLayer: true
      });
      this.state.errorHelperForLayer = "Enter in 1 - 50"
    }
    else {
      console.log("Out of the range Number of Layer else part " + event.target.value);
      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""
    }
    if (event.target.value <= 50) {
      if (event.target.value < 0) {
        this.state.layers = 1;
        event.target.value = 1;
      }
    }
    else {
      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""
      this.state.layers = 50;
      event.target.value = 50;
    }

    let pallet_no = 1;
    if (this.state.selectedOne) {
      this.noOfLayers1 = event.target.value;
      this.state.layers = this.noOfLayers1;
      pallet_no = 1;
    }
    else if (this.state.selectedTwo) {
      this.noOfLayers2 = event.target.value;
      this.state.layers = this.noOfLayers2;
      pallet_no = 2;
    }

    this.setState({
      no_Of_Layers: event.target.value,
      layers: event.target.value

    });

    console.log("this.state.layer_data.length " + this.state.layer_data.length);
    console.log("this.state.layers inside changelayer " + this.state.layers);
    let records = [];
    for (var i = 0; i < this.state.layers; i++) {
      records.push({
        "l_id": 0,
        "palletid": this.state.palletid,
        "pallet_no": pallet_no,
        "layername": "Schema A",
        "intermediatelayer": true,
        "layerSequence": i + 1
      })

    }
    this.layerdata = records;
    if (this.state.selectedOne) {
      this.layerdata1 = records;
    }
    else if (this.state.selectedTwo) {
      this.layerdata2 = records;
    }

    this.setState({
      layer_data: records
    });

    this.forceUpdate()
    this.layerGrid();
  }

  handleChange = name => event => {

    // change layer code integrated here
    if (event.target.value < 0 || event.target.value > 50) {
      console.log("Out of the range Number of Layer " + event.target.value);
      this.setState({
        errorNumberOfLayer: true
      });
      this.state.errorHelperForLayer = "Enter in 1 - 50"
    }
    else if (event.target.value == "" || event.target.value <= 0) {
      this.setState({
        errorNumberOfLayer: true
      });
      this.state.errorHelperForLayer = "Enter in 1 - 50"
    }
    else {
      console.log("Out of the range Number of Layer else part " + event.target.value);
      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""
    }



    // this.state.layers = event.target.value;

    if (event.target.value <= 50) {
      console.log("less 50 if : " + event.target.value);
      if (event.target.value == "" || event.target.value <= 0) {
        console.log("Layer empty")
        event.target.value = 1;
      }
      this.state.layers = event.target.value;

      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""

      console.log("Layers " + event.target.value);
    }
    else if (event.target.value < 0) {
      this.state.layers = 1;
      event.target.value = 1;
    }

    else {
      console.log("less 50 else : " + event.target.value);
      this.state.layers = 1;
      this.setState({
        errorNumberOfLayer: false
      });
      this.state.errorHelperForLayer = ""
      this.state.layers = 50;
      event.target.value = 50;
    }

    if (this.state.selectedOne) {
      this.noOfLayers1 = event.target.value;
    }
    else if (this.state.selectedTwo) {
      this.noOfLayers2 = event.target.value;
    }
    this.setState({
      no_Of_Layers: event.target.value

    });
    this.forceUpdate()

  }

  handleChangeForCasesSchemaA = name => event => {

    if (this.state.selectedOne) {
      this.cases_Schema_A1 = event.target.value;
      this.CasesSchemaA = this.cases_Schema_A1;
    }
    else if (this.state.selectedTwo) {
      this.cases_Schema_A2 = event.target.value;
      this.CasesSchemaA = this.cases_Schema_A2;
    }
    this.state.cases_Schema_A = this.CasesSchemaA;
    this.colorA = '#5eb8b3';
    this.colorB = '';
    this.colorC = '';

    this.casesSchemaPrcUpdate(this.CasesSchemaA);
    this.forceUpdate();
  }

  handleChangeForCasesSchemaB = name => event => {

    if (this.state.selectedOne) {
      this.cases_Schema_B1 = event.target.value;
      this.CasesSchemaB = this.cases_Schema_B1;
    }
    else if (this.state.selectedTwo) {
      this.cases_Schema_B2 = event.target.value;
      this.CasesSchemaB = this.cases_Schema_B2;
    }
    this.state.cases_Schema_B = this.CasesSchemaB;
    this.colorA = '';
    this.colorB = '#5eb8b3';
    this.colorC = '';
    this.casesSchemaPrcUpdate(this.CasesSchemaB);
    this.forceUpdate();
  }

  handleChangeForCasesSchemaC = name => event => {

    if (this.state.selectedOne) {
      this.cases_Schema_C1 = event.target.value;
      this.CasesSchemaC = this.cases_Schema_C1;
    }
    else if (this.state.selectedTwo) {
      this.cases_Schema_C2 = event.target.value;
      this.CasesSchemaC = this.cases_Schema_C2;
    }
    this.state.cases_Schema_C = this.CasesSchemaC;
    this.colorA = '';
    this.colorB = '';
    this.colorC = '#5eb8b3';
    this.casesSchemaPrcUpdate(this.CasesSchemaC);
    this.forceUpdate();
  }

  map(Val, in_max, in_min, out_max, out_min) {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    return calculatedVal;
  }

  Cal_No_Of_Varients(Pallet_Len, Pallet_Width, Case_Width, Case_Len) {


    var Var_1 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_1) {
      this.typeoptions5.push("Var 1");
      console.log("this.typeoptions5 1 " + this.typeoptions5);
    }

    var Var_2 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_2) {
      this.typeoptions5.push("Var 2");
      console.log("this.typeoptions5 1 " + this.typeoptions5);
    }

    var Var_3 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Right" ||
      this.outsideLabelPrior == "Top-Right" ||
      this.outsideLabelPrior == "Left" ||
      this.outsideLabelPrior == "Top-Left" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_3) {
      this.typeoptions5.push("Var 3");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }

    var Var_4 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Right" ||
      this.outsideLabelPrior == "Top-Right" ||
      this.outsideLabelPrior == "Left" ||
      this.outsideLabelPrior == "Top-Left" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_4) {
      this.typeoptions5.push("Var 4");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }

    var Var_5 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Right" ||
      this.outsideLabelPrior == "Top-Right" ||
      this.outsideLabelPrior == "Left" ||
      this.outsideLabelPrior == "Top-Left" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_5) {
      this.typeoptions5.push("Var 5");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }
    var Var_6 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_6) {
      this.typeoptions5.push("Var 6");
      console.log("this.typeoptions5 1 " + this.typeoptions5);
    }
    var Var_7 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_7) {
      this.typeoptions5.push("Var 7");
      console.log("this.typeoptions5 1 " + this.typeoptions5);
    }
    var Var_8 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_8) {
      this.typeoptions5.push("Var 8");
      console.log("this.typeoptions5 1 " + this.typeoptions5);
    }
    var Var_9 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_9) {
      this.typeoptions5.push("Var 9");
      console.log("this.typeoptions5 1 " + this.typeoptions5);
    }
    var Var_10 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_10) {
      this.typeoptions5.push("Var 10");
      console.log("this.typeoptions5 1 " + this.typeoptions5);
    }
    var Var_11 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_11) {
      this.typeoptions5.push("Var 11");
      console.log("this.typeoptions5 1 " + this.typeoptions5);
    }
    var Var_12 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Right" ||
      this.outsideLabelPrior == "Top-Right" ||
      this.outsideLabelPrior == "Left" ||
      this.outsideLabelPrior == "Top-Left" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_12) {
      this.typeoptions5.push("Var 12");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }

    var Var_13 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Right" ||
      this.outsideLabelPrior == "Top-Right" ||
      this.outsideLabelPrior == "Left" ||
      this.outsideLabelPrior == "Top-Left" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_13) {
      this.typeoptions5.push("Var 13");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }
    var Var_14 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Right" ||
      this.outsideLabelPrior == "Top-Right" ||
      this.outsideLabelPrior == "Left" ||
      this.outsideLabelPrior == "Top-Left" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_14) {
      this.typeoptions5.push("Var 14");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }
    var Var_15 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Right" ||
      this.outsideLabelPrior == "Top-Right" ||
      this.outsideLabelPrior == "Left" ||
      this.outsideLabelPrior == "Top-Left" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_15) {
      this.typeoptions5.push("Var 15");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }
    var Var_16 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_16) {
      this.typeoptions5.push("Var 16");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }
    var Var_17 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Right" ||
      this.outsideLabelPrior == "Top-Right" ||
      this.outsideLabelPrior == "Left" ||
      this.outsideLabelPrior == "Top-Left" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_17) {
      this.typeoptions5.push("Var 17");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }
    var Var_18 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_18) {
      this.typeoptions5.push("Var 18");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }
    var Var_19 =
      this.outsideLabelPrior == "Top" ||
      this.outsideLabelPrior == "Front" ||
      this.outsideLabelPrior == "Top-Front" ||
      this.outsideLabelPrior == "Back" ||
      this.outsideLabelPrior == "Top-Back" ||
      this.outsideLabelPrior == "Front-Right" ||
      this.outsideLabelPrior == "Right-Back" ||
      this.outsideLabelPrior == "Front-Left" ||
      this.outsideLabelPrior == "Left-Back";
    if (Var_19) {
      this.typeoptions5.push("Var 19");
      console.log("this.typeoptions5 2 " + this.typeoptions5);
    }

    console.log(" this.typeoptions5 final " + this.typeoptions5);
    this.state.dropdownUpdate = true;

    this.forceUpdate();

    this.setState({
      dropdownUpdate: true,
    });
  }

  callSchema = (noOfSchemaCases) => {
    this.imageSrc_array = [];
    this.variantName_array = [];
    console.log(" this.cases_Schema_A " + this.cases_Schema_A);
    this.ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
    this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);
    this.saveVariantImages(noOfSchemaCases);

    this.setState({
      pallet_bool: false,
      pallet_12: true
    })

    this.enableCarousel = true

  }

  callSchema1 = () => {

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
      this.setVariantName_SchemaA = this.setVariantName_SchemaA1;
      this.setVariantName_SchemaB = this.setVariantName_SchemaB1;
      this.setVariantName_SchemaC = this.setVariantName_SchemaC1;

      this.state.setVariantName_SchemaA = this.setVariantName_SchemaA;
      this.state.setVariantName_SchemaB = this.setVariantName_SchemaB;
      this.state.setVariantName_SchemaC = this.setVariantName_SchemaC;
    }
    else if (this.state.selectedTwo) {
      this.setVariantName_SchemaA = this.setVariantName_SchemaA2;
      this.setVariantName_SchemaB = this.setVariantName_SchemaB2;
      this.setVariantName_SchemaC = this.setVariantName_SchemaC2;

      this.state.setVariantName_SchemaA = this.setVariantName_SchemaA;
      this.state.setVariantName_SchemaB = this.setVariantName_SchemaB;
      this.state.setVariantName_SchemaC = this.setVariantName_SchemaC;

    }
    console.log("this.state.setVariantName_SchemaA " + this.state.setVariantName_SchemaA + " this.state.setVariantName_SchemaB " + this.state.setVariantName_SchemaB + "   this.state.setVariantName_SchemaC " + this.state.setVariantName_SchemaC);

    console.log(" this.setVariantName_SchemaA " + this.setVariantName_SchemaA);

    console.log("this.state.colorA " + this.state.colorA + "this.state.colorB  " + this.state.colorB + "this.state.colorc " + this.state.colorC);

    let variant, noOfSchemaCases;
    console.log("variant  updated list 1 " + variant + "noOfSchemaCases " + noOfSchemaCases);


    if (this.colorA == "#5eb8b3") {
      variant = this.state.setVariantName_SchemaA;
      noOfSchemaCases = this.CasesSchemaA;
    }


    if (this.colorB == "#5eb8b3") {

      variant = this.state.setVariantName_SchemaB;
      noOfSchemaCases = this.CasesSchemaB;

    }

    if (this.colorC == "#5eb8b3") {
      variant = this.state.setVariantName_SchemaC;
      noOfSchemaCases = this.CasesSchemaC;
    }

    console.log("variant  updated list 2 " + variant + " noOfSchemaCases " + noOfSchemaCases);

    this.createVariantsForPRC(variant, noOfSchemaCases)
    // this.createVariants(noOfSchemaCases);

    this.setState({
      pallet_bool: false,
      pallet_12: true,
    })

  }

  createVariantsForPRC = (variant, noOfSchemaCases) => {

    this.frameForPRC = true;
    // progressNum = 0;

    console.log("numberVar createVariantsForPRC ", numberVar)

    let index = numberVar.indexOf(variant);

    console.log("createVariantsForPRC index ", index, " variant ", variant, "poss_Origin[index][0] ", poss_Origin[index][0])

    console.log("createVariantsForPRC poss_Origin ", poss_Origin.length, " numberVar ", numberVar.length);

    console.log("createVariantsForPRC variant ", variant, " noOfSchemaCases ", noOfSchemaCases, " index ", index, " poss_Origin[index][0] ", poss_Origin[index][0])

    this.generateFrames(index, noOfSchemaCases);

  }


  callSchemafor1 = () => {

    this.state.selectedOne = true;
    this.state.selectedTwo = false;

    this.setState({
      outside_Label_Priority: this.outside_Label_Priority,
      ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
      setVariantName_SchemaA: this.setVariantName_SchemaA1,
      setVariantName_SchemaB: this.setVariantName_SchemaB1,
      setVariantName_SchemaC: this.setVariantName_SchemaC1,
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
      case_Type: this.caseType1,
      no_Of_Layers: this.noOfLayers1,
      cases_Schema_A: this.cases_Schema_A1,
      cases_Schema_B: this.cases_Schema_B1,
      cases_Schema_C: this.cases_Schema_C1,
      layer: this.layer,
      layer_data: this.layerdata1,
      int_Layer: this.int_Layer1,
      layers: this.noOfLayers1,
      layerdataupdated: this.layerdataupdated
    });
    this.handleSelection_intermediateLayer(this.palletType1);
    this.forceUpdate();
    console.log("inside callSchemafor1 = ")

    // this.getPallet(1);

    this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);
    var my_gradient1 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);
    var my_gradient2 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);

    var offset_X;
    var offset_Y;

    //pallete map
    this.P_length1 = this.map(this.Pallet_Length, 0, 1400, 0, 300);  //Y POSITION
    this.P_width1 = this.map(this.Pallet_Width, 0, 1400, 0, 300);    //X POSITION

    this.state.P_length = this.P_length1;
    this.state.P_width = this.P_width1;

    // canvas_forPRC.width = this.state.P_width;
    // canvas_forPRC.height = this.state.P_length;


    // this.myRef_forPRC.current.width = this.state.P_width;
    // this.myRef_forPRC.current.height = this.state.P_length;

    console.log(" this.P_length1  " + this.P_length1 + " this.P_width1 " + this.P_width1 + "this.Pallet_Length " + this.Pallet_Length + "Pallet_Width " + this.Pallet_Width);

    this.p_xpos;
    this.p_ypos;

    this.WA_1_Length_Y_Dir = (parseInt(this.state.WA_1_Length_Y_Dir, 10))
    this.WA_1_width_X_Dir = (parseInt(this.state.WA_1_width_X_Dir, 10))


    //workarea  map
    var length = this.map(this.WA_1_Length_Y_Dir, 0, 1400, 0, 300);  //Y POSITION
    var width = this.map(this.WA_1_width_X_Dir, 0, 1400, 0, 300);     //X POSITION
    console.log(" (parseInt(this.state.WA_1_Length_Y_Dir, 10) + this.Pallet_Length) " + (parseInt(this.state.WA_1_Length_Y_Dir, 10) + this.Pallet_Length) + " (parseInt(this.state.WA_1_width_X_Dir, 10) " + (parseInt(this.state.WA_1_width_X_Dir, 10)));

    var xpos;
    var ypos;


    this.WA_1_Offset_X_Dir = (parseInt(this.state.WA_1_Offset_X_Dir, 10))
    this.WA_1_Offset_Y_Dir = (parseInt(this.state.WA_1_Offset_Y_Dir, 10))

    if (this.state.originPal1 == "Upper Right Corner") {
      this.originPal1 = "Upper Right Corner";
      xpos = 490 - width;
      ypos = 70;

      this.p_xpos = 490 - this.P_width1;
      this.p_ypos = 70;

      //offset
      offset_Y = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 300);  //Y POSITION
      offset_X = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 300);     //X POSITION

      xpos = xpos + offset_X;
      ypos = ypos - offset_Y;

      console.log("this.WA_1_Offset_Y_Dir " + this.WA_1_Offset_Y_Dir + "this.WA_1_Offset_X_Dir " + this.WA_1_Offset_X_Dir);
    }
    else if (this.state.originPal1 == "Upper Left Corner") {
      this.originPal1 = "Upper Left Corner";
      xpos = 310;
      ypos = 70;

      this.p_xpos = 310;
      this.p_ypos = 70;

      offset_Y = this.map(this.WA_1_Offset_Y_Dir, 0, 1400, 0, 300);  //Y POSITION
      offset_X = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 300);     //X POSITION

      xpos = xpos - offset_X;
      ypos = ypos - offset_Y;

    }
    else if (this.state.originPal1 == "Lower Left Corner") {
      this.originPal1 = "Lower Left Corner";
      xpos = 310;
      ypos = 330 - length;

      this.p_xpos = 310;
      this.p_ypos = 330 - this.P_length1;

      offset_Y = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 300);  //Y POSITION
      offset_X = this.map(this.WA_1_Offset_X_Dir, 0, -1400, 0, 300);     //X POSITION

      xpos = xpos - offset_X;
      ypos = ypos + offset_Y;
    }
    else if (this.state.originPal1 == "Lower Right Corner") {
      this.originPal1 = "Lower Right Corner";
      xpos = 490 - width;
      ypos = 330 - length;

      this.p_xpos = 490 - this.P_width1;
      this.p_ypos = 330 - this.P_length1;


      offset_Y = this.map(this.WA_1_Offset_Y_Dir, 0, -1400, 0, 300);  //Y POSITION
      offset_X = this.map(this.WA_1_Offset_X_Dir, 0, 1400, 0, 300);     //X POSITION

      xpos = xpos + offset_X;
      ypos = ypos + offset_Y;
    }

    // var Xposition = this.map(xpos, 0, this.Pallet_Width, 270, 470);
    // var Yposition = this.map(ypos, 0, this.Pallet_Length, 50, 350);



    //outer rectangle 
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 5;
    my_gradient1.addColorStop(1, "#FFF2CC");
    this.ctx_forSingle.fillStyle = my_gradient1;
    this.ctx_forSingle.strokeStyle = "#FAD7AC";  //border
    this.ctx_forSingle.strokeRect(xpos, ypos, width, length);
    console.log("this.x_pos for callSchemafor1 workarea " + xpos + " this.y_pos " + ypos + " this.w_width " + width + " this.l_length " + length);

    this.ctx_forSingle.fillRect(xpos, ypos, width, length);
    this.ctx_forSingle.stroke();

    this.x_pos = xpos;
    this.y_pos = ypos;
    this.w_width = width;
    this.l_length = length;

  console.log("this.x_pos callSchemafor1 BP ",this.x_pos," this.y_pos ",this.y_pos," this.w_width ",this.w_width," this.l_length ",this.l_length)


    // //inner rectangle
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 4;
    my_gradient2.addColorStop(1, "white");
    this.ctx_forSingle.fillStyle = my_gradient2;
    this.ctx_forSingle.strokeStyle = "black";
    this.ctx_forSingle.strokeRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    console.log("this.p_xpos for callSchemafor1 " + this.p_xpos + "this.p_ypos " + this.p_ypos + "this.P_width1 " + this.P_width1 + "this.P_length1" + this.P_length1);
    this.ctx_forSingle.fillRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    this.ctx_forSingle.stroke();

    // arc
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.lineWidth = 2;
    this.ctx_forSingle.fillStyle = "white";
    this.ctx_forSingle.arc(160, 80, 20, 0, 2 * Math.PI);
    this.ctx_forSingle.fill();

    this.ctx_forSingle.font = "bold 15pt Roboto";
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillText(1, 155, 87, 100);
    this.ctx_forSingle.stroke();

    // bottom arc
    //upper right corner
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillStyle = "#E1D5E7";
    this.ctx_forSingle.arc(this.state.arcX, this.state.arcY, 20, 0, 2 * Math.PI);
    this.ctx_forSingle.fill();
    this.ctx_forSingle.stroke();


    //arrow bottom
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'green';
    this.ctx_forSingle.moveTo(100, 360);// 1st line
    this.ctx_forSingle.lineTo(100, 300);
    // this.ctx_forSingle.lineTo(170, 300);// 2nd line

    this.ctx_forSingle.font = "bold 10pt Roboto";
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillText("Y", 110, 360);
    this.ctx_forSingle.stroke();

    //y posiotion
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'red';
    // this.ctx_forSingle.moveTo(100, 360);// 1st line
    this.ctx_forSingle.lineTo(100, 300);
    this.ctx_forSingle.lineTo(170, 300);// 2nd line

    this.ctx_forSingle.font = "bold 10pt Roboto";
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillText("X", 180, 300);
    this.ctx_forSingle.stroke();


    // //Top_Left Head down
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'green';

    this.ctx_forSingle.moveTo(90, 340);
    this.ctx_forSingle.lineTo(100, 360);
    this.ctx_forSingle.lineTo(110, 340);
    this.ctx_forSingle.stroke();


    //Bottom_left head Right
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'red';

    this.ctx_forSingle.moveTo(150, 290);
    this.ctx_forSingle.lineTo(170, 300);
    this.ctx_forSingle.lineTo(150, 310);
    this.ctx_forSingle.stroke();
    this.handlecolor1();
    this.arrow();
    // if(this.state.panelname == 'panel5'){
    //   this.setState({
    //     pallet_bool: false,
    //     pallet_12: true,
    //   })
    // }
    this.setState({
      pallet_bool: true,
      pallet_12: false,
      enablefor1: true,
      enablefor2: false,
      // WA_1_width_X_Dir: updatedX,
      // WA_1_Length_Y_Dir: updatedY
    })

  }

  callSchemafor2 = () => {
    this.state.selectedOne = false;
    this.state.selectedTwo = true;

    this.setState({
      outside_Label_Priority: this.outside_Label_Priority,
      ruleSymetricMassDistribution: this.ruleSymetricMassDistribution,
      setVariantName_SchemaA: this.setVariantName_SchemaA2,
      setVariantName_SchemaB: this.setVariantName_SchemaB2,
      setVariantName_SchemaC: this.setVariantName_SchemaC2,
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
      case_Type: this.caseType2,
      no_Of_Layers: this.noOfLayers2,
      cases_Schema_A: this.cases_Schema_A2,
      cases_Schema_B: this.cases_Schema_B2,
      cases_Schema_C: this.cases_Schema_C2,
      layer: this.layer,
      layer_data: this.layerdata2,
      int_Layer: this.int_Layer2,
      layers: this.noOfLayers2,
      layerdataupdated: this.layerdataupdated
    });
    this.handleSelection_intermediateLayer(this.palletType2);
    this.forceUpdate();
    // this.getPallet(2);

    this.ctx_forSingle.clearRect(0, 0, canvas_forSingle.width, canvas_forSingle.height);
    var my_gradient1 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);
    var my_gradient2 = this.ctx_forSingle.createLinearGradient(0, 0, 0, 170);


    var offset_X;
    var offset_Y;


    //pallete map
    this.P_length2 = this.map(this.Pallet_Length, 0, 1400, 0, 300);  //Y POSITION
    this.P_width2 = this.map(this.Pallet_Width, 0, 1400, 0, 300);     //X POSITION

    this.state.P_length = this.P_length2;
    this.state.P_width = this.P_width2;

    console.log(" this.P_length2  " + this.P_length2 + " this.P_width2 " + this.P_width2 + "this.Pallet_Length " + this.Pallet_Length + "Pallet_Width " + this.Pallet_Width);

    this.p_xpos2;
    this.p_ypos2;

    this.WA_2_Length_Y_Dir = (parseInt(this.state.WA_2_Length_Y_Dir, 10))
    this.WA_2_width_X_Dir = (parseInt(this.state.WA_2_width_X_Dir, 10))


    //workarea  map
    var length = this.map(this.WA_2_Length_Y_Dir, 0, 1400, 0, 300);  //Y POSITION
    var width = this.map(this.WA_2_width_X_Dir, 0, 1400, 0, 300);     //X POSITION
    console.log(" (parseInt(this.state.WA_2_Length_Y_Dir, 10) + this.Pallet_Length) " + (parseInt(this.state.WA_2_Length_Y_Dir, 10) + this.Pallet_Length) + " (parseInt(this.state.WA_1_width_X_Dir, 10) " + (parseInt(this.state.WA_2_width_X_Dir, 10)));

    var xpos;
    var ypos;


    this.WA_2_Offset_X_Dir = (parseInt(this.state.WA_2_Offset_X_Dir, 10))
    this.WA_2_Offset_Y_Dir = (parseInt(this.state.WA_2_Offset_Y_Dir, 10))

    if (this.state.originPal2 == "Upper Right Corner") {
      this.originPal2 = "Upper Right Corner";
      xpos = 490 - width;
      ypos = 70;

      this.p_xpos2 = 490 - this.P_width2;
      this.p_ypos2 = 70;

      //offset
      offset_Y = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 300);  //Y POSITION
      offset_X = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 300);     //X POSITION

      xpos = xpos + offset_X;
      ypos = ypos - offset_Y;

      console.log("this.WA_2_Offset_Y_Dir " + this.WA_2_Offset_Y_Dir + "this.WA_2_Offset_X_Dir " + this.WA_2_Offset_X_Dir);
    }
    else if (this.state.originPal2 == "Upper Left Corner") {
      this.originPal2 = "Upper Left Corner";
      xpos = 310;
      ypos = 70;

      this.p_xpos2 = 310;
      this.p_ypos2 = 70;

      offset_Y = this.map(this.WA_2_Offset_Y_Dir, 0, 1400, 0, 300);  //Y POSITION
      offset_X = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 300);     //X POSITION

      xpos = xpos - offset_X;
      ypos = ypos - offset_Y;

    }
    else if (this.state.originPal2 == "Lower Left Corner") {
      this.originPal2 = "Lower Left Corner";
      xpos = 310;
      ypos = 330 - length;

      this.p_xpos2 = 310;
      this.p_ypos2 = 330 - this.P_length2;

      offset_Y = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 300);  //Y POSITION
      offset_X = this.map(this.WA_2_Offset_X_Dir, 0, -1400, 0, 300);     //X POSITION

      xpos = xpos - offset_X;
      ypos = ypos + offset_Y;
    }
    else if (this.state.originPal2 == "Lower Right Corner") {
      this.originPal2 = "Lower Right Corner";
      xpos = 490 - width;
      ypos = 330 - length;

      this.p_xpos2 = 490 - this.P_width2;
      this.p_ypos2 = 330 - this.P_length2;


      offset_Y = this.map(this.WA_2_Offset_Y_Dir, 0, -1400, 0, 300);  //Y POSITION
      offset_X = this.map(this.WA_2_Offset_X_Dir, 0, 1400, 0, 300);     //X POSITION

      xpos = xpos + offset_X;
      ypos = ypos + offset_Y;
    }

    const CaseInfo = { x: xpos, y: ypos, w: width, h: length };
    const CaseInfor_p = { x: this.p_xpos2, y: this.p_ypos2, w: this.P_width2, h: this.P_length2 }; //pallete



    //outer rectangle 
    this.ctx_forSingle.font = "bold 10pt Roboto";
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 5;
    my_gradient1.addColorStop(1, "#FFF2CC");
    this.ctx_forSingle.fillStyle = my_gradient1;
    this.ctx_forSingle.strokeStyle = "#FAD7AC";  //border
    this.ctx_forSingle.strokeRect(xpos, ypos, width, length);
    this.ctx_forSingle.fillRect(xpos, ypos, width, length);
    this.ctx_forSingle.stroke();


    // //inner rectangle
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.lineWidth = 4;
    my_gradient2.addColorStop(1, "white");
    this.ctx_forSingle.fillStyle = my_gradient2;
    this.ctx_forSingle.strokeStyle = "black";
    this.ctx_forSingle.strokeRect(this.p_xpos2, this.p_ypos2, this.P_width2, this.P_length2);
    this.ctx_forSingle.fillRect(this.p_xpos2, this.p_ypos2, this.P_width2, this.P_length2);
    this.ctx_forSingle.stroke();



    // arc
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.lineWidth = 2;
    this.ctx_forSingle.fillStyle = "white";
    this.ctx_forSingle.arc(160, 80, 20, 0, 2 * Math.PI);
    this.ctx_forSingle.fill();

    this.ctx_forSingle.font = "bold 15pt Roboto";
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillText(2, 155, 87, 100);
    this.ctx_forSingle.stroke();

    // bottom arc
    //upper right corner
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillStyle = "#E1D5E7";
    this.ctx_forSingle.arc(this.state.arcX2, this.state.arcY2, 20, 0, 2 * Math.PI);
    this.ctx_forSingle.fill();
    this.ctx_forSingle.stroke();


    //arrow bottom
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'green';
    this.ctx_forSingle.moveTo(100, 360);// 1st line
    this.ctx_forSingle.lineTo(100, 300);
    // this.ctx_forSingle.lineTo(170, 300);// 2nd line

    this.ctx_forSingle.font = "bold 10pt Roboto";
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillText("Y", 110, 360);
    this.ctx_forSingle.stroke();

    //y posiotion
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'red';
    // this.ctx_forSingle.moveTo(100, 360);// 1st line
    this.ctx_forSingle.lineTo(100, 300);
    this.ctx_forSingle.lineTo(170, 300);// 2nd line

    this.ctx_forSingle.font = "bold 10pt Roboto";
    this.ctx_forSingle.fillStyle = "black";
    this.ctx_forSingle.fillText("X", 180, 300);
    this.ctx_forSingle.stroke();


    // //Top_Left Head down
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'green';

    this.ctx_forSingle.moveTo(90, 340);
    this.ctx_forSingle.lineTo(100, 360);
    this.ctx_forSingle.lineTo(110, 340);
    this.ctx_forSingle.stroke();


    //Bottom_left head Right
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'red';

    this.ctx_forSingle.moveTo(150, 290);
    this.ctx_forSingle.lineTo(170, 300);
    this.ctx_forSingle.lineTo(150, 310);
    this.ctx_forSingle.stroke();


    this.handlecolor2();
    this.arrow();

    this.setState({
      enablefor1: false,
      enablefor2: true,
      // WA_1_width_X_Dir: updatedX,
      // WA_1_Length_Y_Dir: updatedY
    })
  }


  callSchemafor1_forPRC = () => {

    this.state.selectedOne = true;
    this.state.selectedTwo = false;

    // this.ctx_forPRC.clearRect(0, 0, canvas_forPRC.width, canvas_forPRC.height);
    var my_gradient5 = this.ctx_forPRC.createLinearGradient(0, 0, 0, 170);
    var my_gradient6 = this.ctx_forPRC.createLinearGradient(0, 0, 0, 170);

    // this.x_pos = xpos;
    // this.y_pos = ypos;
    // this.w_width = width;
    // this.l_length = length;

    console.log("this.x_pos PRC ",this.x_pos," this.y_pos ",this.y_pos," this.w_width ",this.w_width," this.l_length ",this.l_length)

    // outer rectangle
    this.ctx_forPRC.beginPath();
    this.ctx_forPRC.lineWidth = 5;
    my_gradient5.addColorStop(1, "#FFF2CC"); // yellow
    this.ctx_forPRC.fillStyle = my_gradient5;
    this.ctx_forPRC.strokeStyle = "#FAD7AC";  //borderschema
    this.ctx_forPRC.strokeRect(this.x_pos, this.y_pos, this.w_width, this.l_length);
    console.log("this.x_pos for workAreaFor_pattern " + this.x_pos + " this.y_pos " + this.y_pos + " this.w_width " + this.w_width + " this.l_length " + this.l_length);
    this.ctx_forPRC.fillRect(this.x_pos, this.y_pos, this.w_width, this.l_length);
    this.ctx_forPRC.stroke();


    // //inner rectangle
    this.ctx_forPRC.beginPath();
    this.ctx_forPRC.lineWidth = 4;
    my_gradient6.addColorStop(1, "white");
    this.ctx_forPRC.fillStyle = my_gradient6;
    this.ctx_forPRC.strokeStyle = "black";
    this.ctx_forPRC.strokeRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    console.log("this.p_xpos for callSchemafor1_forPRC " + this.p_xpos + "this.p_ypos " + this.p_ypos + "this.P_width1 " + this.P_width1 + "this.P_length1" + this.P_length1);
    this.ctx_forPRC.fillRect(this.p_xpos, this.p_ypos, this.P_width1, this.P_length1);
    this.ctx_forPRC.stroke();

    this.callSchema1();

  }

  disableAlgoPW = (bol, progress) => {

    console.log("disableAlgoPW ", bol)

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

    console.log("inside drawPallet_1_2 = ")
    if (this.state.selectedOne == true) {
      this.callSchemafor1();
    }
    else if (this.state.selectedTwo == true) {
      this.callSchemafor2();
    }

  }

  drawLargeRectInitially = () => {

    console.log("drawLargeRectInitially this.frameForPRC 1 ", this.frameForPRC)

    if (this.frameForPRC) {

      console.log("drawLargeRectInitially this.frameForPRC 2 ", this.frameForPRC)
      // console.log("this.p_xpos for callSchemafor1_forPRC " + this.p_xpos + "this.p_ypos " + this.p_ypos + "this.P_width1 " + this.P_width1 + "this.P_length1" + this.P_length1);

      const r3Info = { x: this.p_xpos, y: this.p_ypos, w: this.P_width1, h: this.P_length1 }; // pending w, h for

      this.drawFillRectPallet(r3Info, { backgroundColor: "#d1e0e0" });
      this.drawRectPallet(r3Info);

    } else {

      console.log("ctx drawLarge this.P_width ", this.state.P_width, " this.P_length ", this.state.P_length)
      const r3Info = { x: 0, y: 0, w: this.state.P_width, h: this.state.P_length };
      // const r3Info = { x: 0, y: 0, w: 175, h: 275 };


      this.drawFillRectPallet(r3Info, { backgroundColor: "#d1e0e0" });
      this.drawRectPallet(r3Info);
    }
  }


  drawRectPallet = (info, style = {}) => {

    if (this.frameForPRC) {

      const { x, y, w, h } = info;

      const { borderColor = "black", borderWidth = 2 } = style;

      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.strokeStyle = borderColor;
      this.ctx_forPRC.lineWidth = borderWidth;
      this.ctx_forPRC.rect(x, y, w, h);
      this.ctx_forPRC.stroke();

    }
    else {

      const { x, y, w, h } = info;

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

      var { x, y, w, h } = info;
      var { backgroundColor } = style;

      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.fillStyle = backgroundColor;
      this.ctx_forPRC.fillRect(x, y, w, h);

    } else {

      var { x, y, w, h } = info;
      var { backgroundColor } = style;

      this.ctx.beginPath();
      this.ctx.fillStyle = backgroundColor;
      this.ctx.fillRect(x, y, w, h);


    }
  };

  drawRect = (info, style = {}) => {

    if (this.frameForPRC) {

      console.log("drawRect this.frameForPRC 2 ", this.frameForPRC)

      const { x, y, w, h } = info;
      const { borderColor = "black", borderWidth = 0.7 } = style;

      this.ctx_forPRC.beginPath();
      this.ctx_forPRC.strokeStyle = borderColor;
      this.ctx_forPRC.lineWidth = borderWidth;
      this.ctx_forPRC.rect(x, y, w, h);
      this.ctx_forPRC.stroke();

    } else {

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

      const { x, y, w, h } = info;
      const { borderColor = "black", borderWidth = 15 } = style;

      this.ctxCase.beginPath();
      this.ctxCase.strokeStyle = borderColor;
      this.ctxCase.lineWidth = borderWidth;
      this.ctxCase.rect(x, y, w, h);
      this.ctxCase.stroke();

    } else {

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


    if (this.frameForPRC) {

      var { x, y, w, h } = info;
      var { backgroundColor } = style;

      // this.ctx.beginPath();
      // this.ctx.fillStyle = backgroundColor;
      // this.ctx.fillRect(x, y, w, h);
      console.log("caseData in draw case",this.casedata);
      this.Case_No = this.Case_No + 1;
      // Text for case No
      this.ctx_forPRC.font = "bold 10pt Roboto";
      this.ctx_forPRC.fillStyle = "black";
      this.ctx_forPRC.textBaseline = 'middle';
      this.ctx_forPRC.textAlign = 'center';
      if (this.state.panelname == "panel5" && rotationNewCaseIndex != undefined) {
        this.ctx_forPRC.fillText(rotationNewCaseIndex, (x + (w / 2)), (y + (h / 2)), 50);
      } else {
        this.ctx_forPRC.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
      }
      this.ctx_forPRC.stroke();

    } else {

      var { x, y, w, h } = info;
      var { backgroundColor } = style;

      // this.ctx.beginPath();
      // this.ctx.fillStyle = backgroundColor;
      // this.ctx.fillRect(x, y, w, h);
      this.Case_No = this.Case_No + 1;
      // Text for case No
      this.ctx.font = "bold 10pt Roboto";
      this.ctx.fillStyle = "black";
      this.ctx.textBaseline = 'middle';
      this.ctx.textAlign = 'center';
      if (this.state.panelname == "panel5" && rotationNewCaseIndex != undefined) {
        this.ctx.fillText(rotationNewCaseIndex, (x + (w / 2)), (y + (h / 2)), 50);
      } else {
        this.ctx.fillText(this.Case_No, (x + (w / 2)), (y + (h / 2)), 50);
      }
      this.ctx.stroke();


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


  Display_Variants = (Data) => {

    this.drawLargeRectInitially();
    this.Case_No = 0;
    this.Case_NoForJson = 0;
    this.tempJsonToPush = {};
    this.GreenRectPositionBool = true;
    this.state.CasesXYfotGreenRectPRC = [];
    this.freesedCaseCount = -1;
    this.freezNRarray = [];

    DisplayVariant_Core(Data, this.draw);

    if (this.state.panelname == "panel5") {
      this.FreezedCasesOnLoad();
    }

  };

  dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }


  draw = (xpos, ypos, Case_Length, Case_Width, orientation) => {

    console.log(
      "============================================================================"
    );
    let image;
    this.Case_NoForJson += 1;
    this.freesedCaseCount += 1;


    console.log("draw this.frameForPRC 1 ", this.frameForPRC)


    if (this.frameForPRC) {
      console.log("draw this.frameForPRC 2 ", this.frameForPRC)

      var Xposition = this.map(xpos, 0, this.Pallet_Width, this.p_xpos, this.p_xpos + parseInt(this.state.P_width, 10));
      var Yposition = this.map(ypos, 0, this.Pallet_Length, this.p_ypos, this.p_ypos + parseInt(this.state.P_length, 10));

      var width = this.map(Case_Width, 0, this.Pallet_Width, 0, this.state.P_width);
      var length = this.map(Case_Length, 0, this.Pallet_Length, 0, this.state.P_length);

      // var Xposition = this.p_xpos
      // var Yposition = this.p_ypos

      // var width = this.P_width1
      // var length = this.P_length1

    } else {

      var Xposition = this.map(xpos, 0, this.Pallet_Width, 0, this.state.P_width);
      var Yposition = this.map(ypos, 0, this.Pallet_Length, 0, this.state.P_length);

      var width = this.map(Case_Width, 0, this.Pallet_Width, 0, this.state.P_width);
      var length = this.map(Case_Length, 0, this.Pallet_Length, 0, this.state.P_length);

      console.log("ctx draw draw this.P_width ", this.state.P_width, " this.P_length ", this.state.P_length)

    }

    const CaseInfo = { x: Xposition, y: Yposition, w: width, h: length };

    console.log("x1111: " + ((Xposition + (width / 8)) - (width / 4) / 2) + " y: " + Yposition + "wid" + width + "len" + length)
    console.log("inside draw this.tempLabelIndex:  " + this.tempLabelindex)

    console.log("checking image for orientation " + orientation)


    if (this.state.panelname == "panel3") {
      if (orientation == "Width") { // ROTATING 0deg
        if (this.state.caseImageLoad0Deg.length > 0) {
          console.log("draw this.state.caseImageLoad0Deg.length 1 ", this.state.caseImageLoad0Deg.length)

          console.log("checking image for this.state.caseImageLoad0Deg[this.tempLabelindex]: " + this.state.caseImageLoad0Deg[this.tempLabelindex])
          this.ctx.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
        }

      } else if (orientation == "Length") { // ROTATING 90deg
        if (this.state.caseImageLoad0Deg.length > 0) {

          console.log("draw this.state.caseImageLoad0Deg.length 2 ", this.state.caseImageLoad0Deg.length)

          this.ctx.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
        }
      } // ROTATION TO BE ADDED FOR 180deg and 270deg

    } else if (this.state.panelname == "panel5") {


      if (this.casedata[this.freesedCaseCount].rotation == null) {
        if (orientation == "Width") { // ROTATING 0deg
          if (this.state.caseImageLoad0Deg.length > 0) {

            console.log("draw this.state.caseImageLoad0Deg.length 3 ", this.state.caseImageLoad0Deg.length)

            this.ctx_forPRC.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
            this.OffsetChangePrc((this.freesedCaseCount + 1), 0, "rotation");
          }

        } else if (orientation == "Length") { // ROTATING 90deg
          if (this.state.caseImageLoad0Deg.length > 0) {
            console.log("draw this.state.caseImageLoad0Deg.length 4 ", this.state.caseImageLoad0Deg.length)

            this.ctx_forPRC.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);
            this.OffsetChangePrc((this.freesedCaseCount + 1), 90, "rotation");
          }
        } // ROTATION TO BE ADDED FOR 180deg and 270deg

      } else {
        if (this.casedata[this.freesedCaseCount].rotation == 0) {
          console.log("draw this.casedata[this.freesedCaseCount].rotation 1 ", this.casedata[this.freesedCaseCount].rotation)

          this.ctx_forPRC.drawImage(this.state.caseImageLoad0Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);

        }
        if (this.casedata[this.freesedCaseCount].rotation == 90) {
          console.log("draw this.casedata[this.freesedCaseCount].rotation 2 ", this.casedata[this.freesedCaseCount].rotation)

          this.ctx_forPRC.drawImage(this.state.caseImageLoad90Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);

        }
        if (this.casedata[this.freesedCaseCount].rotation == 180) {
          console.log("draw this.casedata[this.freesedCaseCount].rotation 3 ", this.casedata[this.freesedCaseCount].rotation)

          this.ctx_forPRC.drawImage(this.state.caseImageLoad180Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);

        }
        if (this.casedata[this.freesedCaseCount].rotation == 270) {

          console.log("draw this.casedata[this.freesedCaseCount].rotation 4 ", this.casedata[this.freesedCaseCount].rotation)

          this.ctx_forPRC.drawImage(this.state.caseImageLoad270Deg[this.tempLabelindex], ((Xposition + (width / 8)) - (width / 4) / 2), Yposition, width, length);

        }
      }
    }

    console.log("image is drawn inside draw for case number = " + this.case_number);
    // this.case_number++;
    this.drawFillRect(CaseInfo, { backgroundColor: "#eab676" }); //postion number of cases
    this.drawRect(CaseInfo); //rectangle for case positions

    var Case_PosX = 0;
    var Case_PosY = 0;

    var x = xpos + (Case_Width / 2);
    var y = ypos + (Case_Length / 2);

    if (this.originPal1 == "Upper Right Corner" || this.originPal2 == "Upper Right Corner") {
      Case_PosX = this.map(x, this.Pallet_Width, 0, 0, (-1 * this.Pallet_Width));
      Case_PosY = this.map(y, 0, this.Pallet_Length, 0, (-1 * this.Pallet_Length));
    }
    if (this.originPal1 == "Upper Left Corner" || this.originPal2 == "Upper Left Corner") {
      Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
      Case_PosY = this.map(y, 0, this.Pallet_Length, 0, (-1 * this.Pallet_Length));
    }
    if (this.originPal1 == "Lower Right Corner" || this.originPal2 == "Lower Right Corner") {
      Case_PosX = this.map(x, this.Pallet_Width, 0, 0, (-1 * this.Pallet_Width));
      Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
    }
    if (this.originPal1 == "Lower Left Corner" || this.originPal2 == "Lower Left Corner") {
      Case_PosX = this.map(x, 0, this.Pallet_Width, 0, this.Pallet_Width);
      Case_PosY = this.map(y, this.Pallet_Length, 0, 0, this.Pallet_Length);
    }

    console.log(" ( Xposition, Yposition) : (" + Case_PosX + "," + Case_PosY + ")");
    console.log("============================================================================");

    if (this.state.panelname == "panel5") {
      this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
      let tempXYpos = {
        x_pos: Case_PosX,
        y_pos: Case_PosY,
      }
      this.tempCase[`Case_${this.Case_NoForJson}`] = tempXYpos;

      console.log("selected var" + this.selectedVar)
      this.tempJsonToPush[this.selectedVar] = this.tempCase

      tempXYpos = "";

      // console.log("jsonjson" + JSON.stringify(this.tempJsonToPush));
      let x = Xposition;
      let y = Yposition;
      let tempGreenRectXYWH;

      if (orientation == "Width") {
        tempGreenRectXYWH = { x: x, y: y, w: width, h: length, rotation: 0 };
      } else if (orientation == "Length") {
        tempGreenRectXYWH = { x: x, y: y, w: width, h: length, rotation: 90 };
      }
      // console.log("case_data for offset prc" + JSON.stringify(tempGreenRectXYWH));
      this.state.CasesXYfotGreenRectPRC.push(tempGreenRectXYWH);
      tempGreenRectXYWH = [];

      // 
      // adding freezing color to case from here
      // 
      console.log("case_data length freezing: " + this.casedata.length)
      if (this.casedata[this.freesedCaseCount]?.position_freezed) {
        if (this.casedata[this.freesedCaseCount]?.position != "") {
          try {
            let NRValue = this.casedata[this.freesedCaseCount].position;
            const NRValueArr = NRValue.split(" ");
            let nrNumber = NRValueArr[1];
            let nrNumberTYPE = parseInt(nrNumber);
            let nrNumberTYPEindex = nrNumberTYPE - 1;

            this.freezNRarray.push(nrNumberTYPEindex);
            console.log("this.freezNRarray values: " + this.freezNRarray)
          } catch (err) {
            console.log("error in draw function split" + err)
          }
          // this.freezNRarray
        }
      }
    }
  };

  FreezedCasesOnLoad = () => {
    this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    for (let i = 0; i < this.freezNRarray.length; i++) {
      console.log("insideinside inside: " + this.freezNRarray)
      if (this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]] != undefined) {
        let x = this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]].x
        let y = this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]].y
        let w = this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]].w
        let h = this.state.CasesXYfotGreenRectPRC[this.freezNRarray[i]].h
        console.log("asdasd x y w l values: x: " + x + "y: " + y + "w: " + w + "l: " + h + " this.freezNRarray[i]: " + this.freezNRarray[i])
        this.drawFreezedCase(x, y, w, h);

      }
    }
  }

  drawFreezedCase = (x, y, w, h) => {

    // this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

    let greenFreezRectInfo = { x: x, y: y, w: w, h: h };

    this.drawFreezFillRect1(greenFreezRectInfo);


    this.setState({
      canvasGreenRect: "visible",
      canvasfreezGreenRect: "visible",

    })

  }

  drawFreezFillRect1 = (info, style = {}) => {

    const { x, y, w, h } = info;
    const { backgroundColor = 'grey' } = style;

    this.ctx_GRCaseFreez.beginPath();
    this.ctx_GRCaseFreez.fillStyle = backgroundColor;


    console.log(" drawFillRect1 ")

    this.ctx_GRCaseFreez.globalAlpha = 0.75;
    this.ctx_GRCaseFreez.fillRect(x, y, w, h);


  }

  drawCaseImg = (imageNumber, rotation) => {

    // this.splitForOutSideLabelPriority();

    // const records = await this.getAllLabels();
    // for (var record of records) {
    let neededLabelForColor;
    console.log("find 1:" + this.listForOutsideLabelPrior.length)

    try {

      console.log("this.state.outside_Label_Priority" + this.state.outside_Label_Priority)
      let splitarray = this.listForOutsideLabelPrior[imageNumber].split("_");
      neededLabelForColor = splitarray[1];
      console.log("check split" + splitarray[1])
      console.log("this.state.outside_Label_Priority my value: " + neededLabelForColor)
    }
    catch (e) {
      console.log("error inside drawCaseImg = " + e);
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
    const CaseInfo180deg = { x: 272, y: 300, w: 247, h: 60 }; // Top

    //Top for 2700deg
    const CaseInfo270deg = { x: 140, y: 120, w: 130, h: 160 }; // Top

    //Down
    const CaseInfo2 = { x: 272, y: 350, w: 247, h: 50 }; //down 

    //Right
    const CaseInfo3 = { x: 661, y: 120, w: 130, h: 160 }; //right 

    //Left
    const CaseInfo4 = { x: 0, y: 120, w: 130, h: 160 }; //left 

    //UP
    const CaseInfo5 = { x: 272, y: 0, w: 247, h: 50 }; // front 

    //Top-corner bottom
    const CaseInfo6 = { x: 272, y: 280, w: 247, h: 70 }; // top-down
    const CaseInfo7 = { x: 272, y: 350, w: 247, h: 50 }; //down

    //Top-corner Up
    const CaseInfo8 = { x: 272, y: 0, w: 247, h: 50 }; // up 
    const CaseInfo9 = { x: 272, y: 50, w: 247, h: 70 }; // Top 

    //Top-corner Right
    const CaseInfo10 = { x: 661, y: 120, w: 130, h: 160 }; //right
    const CaseInfo11 = { x: 544, y: 120, w: 247, h: 160 }; // viewver's right-top

    //Top-corner Left
    const CaseInfo12 = { x: 0, y: 120, w: 20, h: 160 }; //left
    const CaseInfo13 = { x: 0, y: 120, w: 247, h: 160 }; // vievwer's left-top

    //bottom-left side corner
    const CaseInfo14 = { x: 0, y: 380, w: 247, h: 20 }; //down //
    const CaseInfo15 = { x: 0, y: 290, w: 50, h: 110 };// viewver's left

    //bottom-right side corner
    const CaseInfo16 = { x: 544, y: 380, w: 247, h: 20 }; //down
    const CaseInfo17 = { x: 750, y: 290, w: 50, h: 150 }; //viewver's right

    //top-right side corner
    const CaseInfo18 = { x: 750, y: 0, w: 40, h: 110 }; // viewver's right
    const CaseInfo19 = { x: 544, y: 0, w: 247, h: 20 }; // up

    //top-left side corner
    const CaseInfo20 = { x: 0, y: 0, w: 40, h: 110 }; // vievwer's left
    const CaseInfo21 = { x: 0, y: 0, w: 247, h: 20 }; // up

    // this.ctxCase.clearRect(0, 0, canvasEleCase.width, canvasEleCase.height);

    this.drawFillRect_CaseImage(CaseInfo, { backgroundColor: "#eab676" });
    this.drawRect_CaseImage(CaseInfo);

    console.log("list fr lable prat" + this.listForLabel)


    if (this.listForLabel.includes("Top")) {
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

      console.log(" drawCaseImg Top ")
    }

    if (this.listForLabel.includes("Right")) {
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
      console.log(" drawCaseImg Right ")

    }

    if (this.listForLabel.includes("Left")) {
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
      console.log(" drawCaseImg Left ")

    }

    if (this.listForLabel.includes("Back")) {
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
      console.log(" drawCaseImg Back ")

    }

    if (this.listForLabel.includes("Front")) {
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
      console.log(" drawCaseImg Front ")

    }

    //  //Up
    // this.drawFillRect_CaseImage(CaseInfo5, { backgroundColor: "pink" });


    if (this.listForLabel.includes("Top-Front")) {
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

      console.log(" drawCaseImg Top-Front ")

    }

    if (this.listForLabel.includes("Top-Back")) {
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


      console.log(" drawCaseImg Top-Back ")

    }

    if (this.listForLabel.includes("Top-Right")) {
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


      console.log(" drawCaseImg Top-Right ")

    }

    if (this.listForLabel.includes("Top-Left")) {
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


      console.log(" drawCaseImg Top-Left ")

    }

    //
    if (this.listForLabel.includes("Front-Right")) {
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

      console.log(" drawCaseImg Front-Right ")

    }

    if (this.listForLabel.includes("Right-Back")) {
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


      console.log(" drawCaseImg Right-Back ")


    }

    if (this.listForLabel.includes("Left-Back")) {
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


      console.log(" drawCaseImg Left-Back ")

    }

    if (this.listForLabel.includes("Front-Left")) {
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


      console.log(" drawCaseImg Front-Left ")
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

  canvasToPng = canvas => canvas.toDataURL('image/png');

  downloadImage = (selected) => {

    const image = this.canvasToPng(this.myRef.current);

    this.imageSrc_array.push(image);
    this.variantName_array.push(selected);
    console.log("selected inside downloadImage is " + selected)
    console.log("image canvasToPng is " + image)
    // console.log("image from photo1 is " + photo1)
    console.log("image this.imageSrc_array " + this.imageSrc_array.length)
    console.log("image array is ", this.imageSrc_array)

    // const link = this.downloadLink.current;
    // link.href = image;
    // link.click();
  };

  downloadImageForCase = (imageNumber, rotation) => {

    const imageUrl = this.canvasToPng(this.myRefCase.current);

    // this.CasesImageSrc_array.push(imageUrl);
    this.CasesImageSrc_array.push(imageUrl);
    // var blob = this.dataURLtoBlob(image);
    console.log("image this.CasesImageSrc_array " + this.CasesImageSrc_array.length)
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

    // It return HTMLImageElement
    // let img = new Image();
    // await new Promise(r => img.onload = r, img.src = imageUrl);

    console.log("image Case canvasToPng is CasesImageSrc_array " + imageUrl)
    // const link = this.downloadLinkCase.current;
    // link.href = image;
    // link.click();



    return imageUrl;
  };


  createVariants = (noOfSchemaCases) => {

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



    console.log("this.outside_Label_Priority inside createVariants = " + this.outside_Label_Priority)
    console.log("this.outsideLabelPrior inside createVariants = " + this.outsideLabelPrior)

    console.log("poss_Origin here createVariants before frame ", poss_Origin)

    number = 1;

    poss_Origin.forEach((value, index) => {

      console.log("poss_origin_list value createVariants ", value, " index ", index)

      new Promise((resolve, reject) => {
        setTimeout(() => {
          // this.swiperRef?.current?.swiper.slideNext();
          this.generateFrames(index, noOfSchemaCases);

          console.log("in promise setTimeOut")
          resolve();
        }, 0)
      })
        .then(() => {

          progressNum++;
          console.log("in promise then progressNum ", progressNum);
          console.log("in promise then progressNum ", progressNum, " poss_Origin.length ", poss_Origin.length, "poss_Origin.length === progressNum ", (poss_Origin.length === progressNum));

          if (poss_Origin.length === progressNum) {

            console.log("in promise setTimeOut progressNum ", progressNum)

            numberVar.forEach((value, index) => {

              console.log("in promise setTimeOut progressNum index ", index)

              console.log("pairs variants and frame : ", numberVar[index], " eqivalent frame is ", poss_Origin[index][0]
                , " poss_Origin[index][1] ", poss_Origin[index][1], " poss_Origin[index][2] ", poss_Origin[index][2])

            })

            this.disableAlgoPW(false, "hidden");

          }

          this.setState({
            pallet_bool: false,
            pallet_12: true,
          })

          this.setState({
            selectlabel: "Var " + number
          });

        })

    })

    console.log(" numberVar is ", numberVar)


    console.log("in promise then progressNum ", progressNum, " poss_Origin.length ", poss_Origin.length, "poss_Origin.length === progressNum ", (poss_Origin.length === progressNum));

    console.log("generateVariants variants ", numberVar.length, "poss_Origin[indexVar][0] ", poss_Origin.length)

    console.log("poss_Origin.length ", poss_Origin.length, " progressNum.length ", progressNum)

    console.log(" numberVar is ", numberVar)

    console.log("generateFrames numberVar array ", numberVar)

  }


  clearingSchemaFields = (value) => {

    if (value == "ruleSym") {
      if (this.state.selectedOne) {
        this.setVariantName_SchemaA1 = "";
        this.setVariantName_SchemaB1 = "";
        this.setVariantName_SchemaC1 = "";

        this.setState({
          setVariantName_SchemaA: "",
          setVariantName_SchemaC: "",
          setVariantName_SchemaB: ""
        })

      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaA2 = "";
        this.setVariantName_SchemaB2 = "";
        this.setVariantName_SchemaC2 = "";
        this.setState({
          setVariantName_SchemaA: "",
          setVariantName_SchemaB: "",
          setVariantName_SchemaC: ""
        })
      }

    } else if (value == "caseType") {

      this.setVariantName_SchemaA1 = "";
      this.setVariantName_SchemaB1 = "";
      this.setVariantName_SchemaC1 = "";
      this.setVariantName_SchemaA2 = "";
      this.setVariantName_SchemaB2 = "";
      this.setVariantName_SchemaC2 = "";

      this.setState({
        setVariantName_SchemaA: "",
        setVariantName_SchemaC: "",
        setVariantName_SchemaB: ""
      })

    }
  }

  generateFrames = (index, noOfSchemaCases) => {


    //Frame 1
    if (poss_Origin[index][0] === "Frame_1") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)


      this.Display_Variants(
        Frame_1(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ", number)
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)
      number++;
    }

    //Frame 2
    if (poss_Origin[index][0] === "Frame_2") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_2(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      // this.downloadImage("Var "+number);
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)
      number++;
    }

    //Frame_3
    if (poss_Origin[index][0] === "Frame_3") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_3(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      // this.downloadImage("Var "+number);
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)
      number++;
    }

    //Frame_4
    if (poss_Origin[index][0] === "Frame_4") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_4(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      // this.downloadImage("Var "+number);
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    //Frame_5
    if (poss_Origin[index][0] === "Frame_5") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_5(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      // this.downloadImage("Var "+number);
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;

    }

    //Frame_6
    if (poss_Origin[index][0] === "Frame_6") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_6(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    //Frame_7 sayali var20
    if (poss_Origin[index][0] === "Frame_7") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_7(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      // this.downloadImage("Var 7"+number);
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    //Frame_8 gaytri
    if (poss_Origin[index][0] === "Frame_8") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_8(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    //Frame_9 sayali var22
    if (poss_Origin[index][0] === "Frame_9") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_9(
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
          poss_Origin,
          index
        )
      );
      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }
    //Frame_10 sayali 
    if (poss_Origin[index][0] === "Frame_10") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_10(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_11") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_11(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    // if (poss_Origin[index][0] === "Frame_20") {
    //   console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

    //    this.Display_Variants(
    //     Frame_20(
    //       this.Pallet_Length,
    //       this.Pallet_Width,
    //       this.Case_Length,
    //       this.Case_Width,
    //       this.XPos,
    //       this.YPos,
    //       noOfSchemaCases,
    //       this.HWeighted,
    //       this.VWeighted,
    //       this.outsideLabelPrior,
    //       poss_Origin,
    //       index
    //     )
    //   );

    //   console.log("poss_Origin here createVariants downloadImage ")
    //   this.downloadImage("Var "+number);
    //   numberVar.push("Var "+number)

    //   number++;
    // }

    //Old Frames
    if (poss_Origin[index][0] === "Frame_20") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_20(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_21") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_21(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_22") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_22(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_23") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_23(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_24") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_24(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_25") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_25(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_26") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_26(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_27") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_27(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_28") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_28(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_29") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_29(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_30") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_30(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_31") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_31(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_32") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_32(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_33") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_33(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_34") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_34(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_35") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_35(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_36") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_36(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }

    if (poss_Origin[index][0] === "Frame_37") {
      console.log("poss_Origin here createVariants ", poss_Origin, " index ", index)

      this.Display_Variants(
        Frame_37(
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
          poss_Origin,
          index
        )
      );

      console.log("poss_Origin here createVariants downloadImage ")
      this.downloadImage("Var " + number);
      numberVar.push("Var " + number)

      number++;
    }



  }

  saveVariantImages = (noOfSchemaCases) => {
    console.log("this.typeoptions5 inside saveVariantImages = " + this.typeoptions5);

    this.createVariants(noOfSchemaCases);


  }

  handleSelection_SchemaA = (event) => {
    // const selected = event.target.value;
    // console.log("selected " + selected);
    // this.createVariants(selected);

  };


  splitCaseType = (selected) => {
    try {
      console.log("selected in splitCaseType" + selected)
      console.log("Inside splitCaseType");

      var split = selected.split('_').reverse();
      console.log("split " + split)
      console.log("split[0] " + split + " split[1] " + split[1] + " split[2] " + split[2] + " split[3] " + split[3]);

      (this.Case_Width = split[2]), (this.Case_Length = split[1]);

      console.log("this.Case_Width width " + this.Case_Width);
      console.log("this.Case_Width length " + this.Case_Length);
    }
    catch (e) {
      console.log("error inside splitCaseType = " + e);
    }


  }

  getCallLabel = async (selected) => {
    try {
      const records = await this.getAllLabels();
      this.listForLabel = [];
      for (var record of records) {
        var case_name_lbh = record.name + "_" + record.length + "_" + record.height + "_" + record.width;
        console.log("case_name_lbh in getCallLabel " + case_name_lbh);

        if (case_name_lbh == selected) {

          try {
            var label_name = record.labelname + "_" + record.typename;
            console.log("Label name in initcase if condition " + label_name);

            var split = label_name.split('_', 2);
            console.log("split[0] handleSelection " + split[0] + " split[1] " + split[1]);
            this.listForLabel.push(split[1]);
            console.log("  this.listForLabel handleSelection_CaseType aa " + this.listForLabel);

          } catch (e) {
            console.log("split error inside getcalllabel" + e);
          }
          if (this.listForOutsideLabelPrior.indexOf(label_name) > -1) {
            console.log("labelname already exists inside getCallLabel")
          }
          else {
            this.listForOutsideLabelPrior.push(label_name);
          }
        }
        this.outside_Label_Priority = this.listForOutsideLabelPrior[0];
      }
      console.log("this.listForOutsideLabelPrior inside getCallLabel = " + this.listForOutsideLabelPrior);
      this.createlabeledImg();
    }
    catch (e) {
      console.log("error inside getCallLabel = " + e);
    }

  }

  createlabeledImg = () => {
    console.log("this.listForOutsideLabelPrior inside handler casetype: " + this.listForOutsideLabelPrior.length)

    for (let rotation = 0; rotation < 4; rotation++) { //FOR DIFFERENT ROTATION (0deg, 90deg, 180deg, 270deg)
      this.CasesImageSrc_array = [];

      for (let imageNumber = 0; imageNumber < this.listForOutsideLabelPrior.length; imageNumber++) { //FOR DIFFERENT LABELS
        this.drawCaseImg(imageNumber, rotation);
      }

    }


    console.log("cases created DONE update list this.CasesImageSrc_array: " + this.CasesImageSrc_array.length)
  }

  handleSelection_CaseType = name => event => {

    // this.clearSchemaField();

    this.drawCaseImage = true;
    this.setState({
      outside_Label_Priority: this.outside_Label_Priority
    })

    const selected = event.target.value;

    console.log("selected " + selected)
    // Assign CaseWidth and CaseLength
    this.splitCaseType(selected);
    this.listForOutsideLabelPrior = [];
    this.getCallLabel(selected);
    this.typeoptions5 = [];
    this.Cal_No_Of_Varients(this.Pallet_Length, this.Pallet_Width, this.Case_Width, this.Case_Length);
    if (this.state.selectedOne) {
      this.caseType1 = event.target.value;
    }
    else if (this.state.selectedTwo) {
      this.caseType2 = event.target.value;
    }

    if (name === "caseType") {
      this.tempLabelindex = 0;
      this.setState({
        case_Type: event.target.value,
        CasesXYfotGreenRectPRC: [],
      });
      this.clearingSchemaFields("caseType");

    }

    this.setState({
      setDefaultCase: selected
    })
    console.log("event.target.name aaa: " + name)

    if (name == "caseType") {
      console.log("caseTypeset done")
      this.setState({
        caseTypeSet: true,
      })
    }
  };

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
      console.log("outsideInitalPriority listForOutsideLabelPrior " + this.listForOutsideLabelPrior[0])
      let label = this.listForOutsideLabelPrior[0].split('_', 2);
      console.log("outsideInitalPriority split[0]  " + label[0] + " split[1] " + label[1]);
      this.outsideLabelPrior = label[1];
      console.log("outsideInitalPriority this.outsideLabelPriority " + this.outsideLabelPrior);
      this.state.outside_Label_Priority = this.outside_Label_Priority;
      console.log("outsideInitalPriority this.outside_Label_Priority " + this.outside_Label_Priority);



      // this.setState({
      //   setVariantName_SchemaA: "",
      //   setVariantName_SchemaB: "",
      //   setVariantName_SchemaC: ""
      // })
      this.updateSelection();
      // this.reqCombinationForPallet_N_Origin();
      // this.callSchemaDropdown();
    }
    catch (e) {
      console.log("Error inside outsideInitialPriority due to split = " + e);
    }


    // this.setState({
    //   outside_Label_Priority:
    // });

    console.log("outsideInitalPriority event.target.value " + this.outside_Label_Priority);



  }

  handleSelection = name => event => {

    console.log(name, "Origin Pal 1");
    console.log(event.target.value, "value");

    if (name === "outsideLabelPriority") {

      try {
        var outSide = event.target.value;
        var split = outSide.split('_', 2);
        console.log("split[0] handleSelection " + split[0] + " split[1] " + split[1]);
        this.outsideLabelPrior = split[1];
        console.log("this.outside_Label_Priority in handleSelection " + this.outside_Label_Priority);
        this.state.outside_Label_Priority = this.outside_Label_Priority;
      } catch (e) {
        console.log("split error inside handleSelection " + e);
      }

      this.updateSelection();
      this.setState({
        outside_Label_Priority: event.target.value
      });
    }

    if (name === "HWeighted") {

      this.HWeighted = this.HWeighted ? false : true;

      console.log(" this.HWeighted " + this.HWeighted);
      this.state.HWeighted = this.HWeighted;
      this.updateSelection();
      this.setState({
        HWeighted: this.HWeighted,
        // setCircularProgress: "visible"

      });

      this.clearingSchemaFields("ruleSym");
      this.disableAlgoPW(true, "visible");

      this.reqCombinationForPallet_N_Origin();
      this.callSchemaDropdown();

    }

    if (name === "VWeighted") {

      this.VWeighted = this.VWeighted ? false : true

      console.log(" this.VWeighted " + this.VWeighted);

      this.state.VWeighted = this.VWeighted;
      this.updateSelection();
      this.clearingSchemaFields("ruleSym");
      this.disableAlgoPW(true, "visible");

      this.setState({
        VWeighted: this.VWeighted,
        // setCircularProgress: "visible"

      });


      this.reqCombinationForPallet_N_Origin();
      this.callSchemaDropdown();


    }

    //Working area   for 1
    if (name === "working_area_1_Width_X_Direction") {

      console.log(" working_area_1_Width_X_Direction " + event.target.value);

      if (event.target.value > 1400 || event.target.value < this.Pallet_Width) {
        this.setState({
          errorWorkingaraeaWidth: true,
          errorHelperForWorkingareaWidth: "Enter in " + this.Pallet_Width + " - " + 1400,
        });
      }
      else {
        this.setState({
          errorWorkingaraeaWidth: false,
          errorHelperForWorkingareaWidth: " "
        });
      }
    }
    //
    if (name === "working_area_1_Length_Y_Direction") {

      if (event.target.value > 1400 || event.target.value < this.Pallet_Length) {
        this.setState({
          errorWorkingaraeaLength: true,
          errorHelperForWorkingareaLength: "Enter in " + this.Pallet_Length + " - " + 1400,
        });
      }
      else {
        this.setState({
          errorWorkingaraeaLength: false,
          errorHelperForWorkingareaLength: " "
        });
      }
    }

    if (name === "working_area_1_Offset_X_Direction") {

      console.log("this.WA_1_width_X_Dir *************" + this.WA_1_width_X_Dir + "(event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0) " + (event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0))

      if (this.originPal1 == "Upper Right Corner") {

        if (event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0) {
          this.setState({
            errorWorkingaraeaoffsetWidth: true,
            errorHelperForWorkingareaoffsetWidth: "Enter in " + 0 + " - " + (this.WA_1_width_X_Dir - this.Pallet_Width),
          });

          console.log("enter into if loop  ")
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidth: false,
            errorHelperForWorkingareaoffsetWidth: " "
          });
          console.log("enter into else loop  ")
        }
      }

      //upper left
      if (this.originPal1 == "Upper Left Corner") {

        if (event.target.value < ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetWidth: true,
            errorHelperForWorkingareaoffsetWidth: "Enter in " + 0 + " - " + ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1),
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

        if (event.target.value > (this.WA_1_width_X_Dir - this.Pallet_Width) || event.target.value < 0) {
          this.setState({
            errorWorkingaraeaoffsetWidth: true,
            errorHelperForWorkingareaoffsetWidth: "Enter in " + 0 + " - " + (this.WA_1_width_X_Dir - this.Pallet_Width),
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

        if (event.target.value < ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetWidth: true,
            errorHelperForWorkingareaoffsetWidth: "Enter in " + 0 + " - " + ((this.WA_1_width_X_Dir - this.Pallet_Width) * -1),
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

      console.log("this.WA_1_Offset_Y_Dir *************" + this.WA_1_Offset_Y_Dir + "(event.target.value > (this.WA_1_Offset_Y_Dir - this.Pallet_Length) || event.target.value < 0) " + (event.target.value > (this.WA_1_Offset_Y_Dir - this.Pallet_Length) || event.target.value < 0))

      if (this.originPal1 == "Upper Right Corner") {

        if (event.target.value < 0 || event.target.value > (this.WA_1_Length_Y_Dir - this.Pallet_Length)) {
          this.setState({
            errorWorkingaraeaoffsetLength: true,
            errorHelperForWorkingareaoffsetLength: "Enter in " + 0 + " - " + (this.WA_1_Length_Y_Dir - this.Pallet_Length),
          });

          console.log("enter into if loop  ")
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLength: false,
            errorHelperForWorkingareaoffsetLength: " "
          });
          console.log("enter into else loop  ")
        }
      }

      //upper left
      if (this.originPal1 == "Upper Left Corner") {

        if (event.target.value < 0 || event.target.value > (this.WA_1_Length_Y_Dir - this.Pallet_Length)) {
          this.setState({
            errorWorkingaraeaoffsetLength: true,
            errorHelperForWorkingareaoffsetLength: "Enter in " + 0 + " - " + (this.WA_1_Length_Y_Dir - this.Pallet_Length),
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

        if (event.target.value > ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value < 0) {
          this.setState({
            errorWorkingaraeaoffsetLength: true,
            errorHelperForWorkingareaoffsetLength: "Enter in " + 0 + " - " + ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1),
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

        if (event.target.value < ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetLength: true,
            errorHelperForWorkingareaoffsetLength: "Enter in " + 0 + " - " + ((this.WA_1_Length_Y_Dir - this.Pallet_Length) * -1),
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

      console.log(" working_area_2_Width_X_Direction " + event.target.value);

      if (event.target.value > 1400 || event.target.value < this.Pallet_Width) {
        this.setState({
          errorWorkingaraeaWidthfor2: true,
          errorHelperForWorkingareaWidthfor2: "Enter in " + this.Pallet_Width + " - " + 1400,
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
          errorHelperForWorkingareaLengthfor2: "Enter in " + this.Pallet_Length + " - " + 1400,
        });
      }
      else {
        this.setState({
          errorWorkingaraeaLengthfor2: false,
          errorHelperForWorkingareaLengthfor2: " "
        });
      }
    }

    if (name === "working_area_2_Offset_X_Direction") {

      console.log("this.WA_2_width_X_Dir *************" + this.WA_2_width_X_Dir + "(event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0) " + (event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0))

      if (this.originPal2 == "Upper Right Corner") {

        if (event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0) {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: true,
            errorHelperForWorkingareaoffsetWidthfor2: "Enter in " + 0 + " - " + (this.WA_2_width_X_Dir - this.Pallet_Width),
          });

          console.log("enter into if loop  ")
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: false,
            errorHelperForWorkingareaoffsetWidthfor2: " "
          });
          console.log("enter into else loop  ")
        }
      }

      //upper left
      if (this.originPal2 == "Upper Left Corner") {

        if (event.target.value < ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: true,
            errorHelperForWorkingareaoffsetWidthfor2: "Enter in " + 0 + " - " + ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: false,
            errorHelperForWorkingareaoffsetWidthfor2: " "
          });
        }
      }

      //lower right
      if (this.originPal2 == "Lower Right Corner") {

        if (event.target.value > (this.WA_2_width_X_Dir - this.Pallet_Width) || event.target.value < 0) {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: true,
            errorHelperForWorkingareaoffsetWidthfor2: "Enter in " + 0 + " - " + (this.WA_2_width_X_Dir - this.Pallet_Width),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: false,
            errorHelperForWorkingareaoffsetWidthfor2: " "
          });
        }
      }
      //
      if (this.originPal2 == "Lower Left Corner") {

        if (event.target.value < ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetWidthfor2: true,
            errorHelperForWorkingareaoffsetWidthfor2: "Enter in " + 0 + " - " + ((this.WA_2_width_X_Dir - this.Pallet_Width) * -1),
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

      console.log("this.WA_2_Offset_Y_Dir *************" + this.WA_2_Offset_Y_Dir + "(event.target.value > (this.WA_2_Offset_Y_Dir - this.Pallet_Length) || event.target.value < 0) " + (event.target.value > (this.WA_2_Offset_Y_Dir - this.Pallet_Length) || event.target.value < 0))

      if (this.originPal2 == "Upper Right Corner") {

        if (event.target.value < 0 || event.target.value > (this.WA_2_Length_Y_Dir - this.Pallet_Length)) {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: true,
            errorHelperForWorkingareaoffsetLengthfor2: "Enter in " + 0 + " - " + (this.WA_2_Length_Y_Dir - this.Pallet_Length),
          });

          console.log("enter into if loop  ")
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: false,
            errorHelperForWorkingareaoffsetLengthfor2: " "
          });
          console.log("enter into else loop  ")
        }
      }

      //upper left
      if (this.originPal2 == "Upper Left Corner") {

        if (event.target.value < 0 || event.target.value > (this.WA_2_Length_Y_Dir - this.Pallet_Length)) {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: true,
            errorHelperForWorkingareaoffsetLengthfor2: "Enter in " + 0 + " - " + (this.WA_2_Length_Y_Dir - this.Pallet_Length),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: false,
            errorHelperForWorkingareaoffsetLengthfor2: " "
          });
        }
      }

      //lower right  


      if (this.originPal2 == "Lower Right Corner") {

        if (event.target.value < ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value > 0) {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: true,
            errorHelperForWorkingareaoffsetLengthfor2: "Enter in " + 0 + " - " + ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1),
          });
        }
        else {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: false,
            errorHelperForWorkingareaoffsetLengthfor2: " "
          });
        }
      }
      //
      if (this.originPal2 == "Lower Left Corner") {

        if (event.target.value < ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1) || event.target.value >= 0) {
          this.setState({
            errorWorkingaraeaoffsetLengthfor2: true,
            errorHelperForWorkingareaoffsetLengthfor2: "Enter in " + 0 + " - " + ((this.WA_2_Length_Y_Dir - this.Pallet_Length) * -1),
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
      console.log("Selected Pallet Origin " + name + " : " + this.originPal1);
    }
    else if (name == "OriginPal2") {
      const selected = event.target.value;
      this.WA_2_Offset_X_Dir = 0;
      this.WA_2_Offset_Y_Dir = 0;
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
      //console.log("Selected Pallet Origin " + name + " : " + this.originPal2);
    }

    if (this.state.selectedOne == true) {
      if (name === "OriginPal1") {
        const selected = event.target.value;
        console.log("selevted vaule  " + selected);

        if (selected == "Upper Right Corner") {
          this.originPal1 = "Upper Right Corner";

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


        }
        else if (selected == "Upper Left Corner") {
          this.originPal1 = "Upper Left Corner";

          this.linea = 310;
          this.lineb = 130;
          this.linea1 = 310;
          this.lineb1 = 70;
          this.linea2 = 370;
          this.lineb2 = 70;

          // head down
          this.arrowheaddowna = 300;
          this.arrowheaddownb = 117;
          this.arrowheaddowna1 = 310;
          this.arrowheaddownb1 = 137;
          this.arrowheaddowna2 = 320;
          this.arrowheaddownb2 = 117;

          // head up
          this.arrowheadupa = 350;
          this.arrowheadupb = 60;
          this.arrowheadupa1 = 370;
          this.arrowheadupb1 = 70;
          this.arrowheadupa2 = 350;
          this.arrowheadupb2 = 80;

        }

        else if (selected == "Lower Left Corner") {
          this.originPal1 = "Lower Left Corner";


          this.linea = 310;
          this.lineb = 390;
          this.linea1 = 310;
          this.lineb1 = 330;
          this.linea2 = 370;
          this.lineb2 = 330;

          // head down
          this.arrowheaddowna = 300;
          this.arrowheaddownb = 375;
          this.arrowheaddowna1 = 310;
          this.arrowheaddownb1 = 395;
          this.arrowheaddowna2 = 320;
          this.arrowheaddownb2 = 375;

          // head up
          this.arrowheadupa = 350;
          this.arrowheadupb = 320;
          this.arrowheadupa1 = 370;
          this.arrowheadupb1 = 330;
          this.arrowheadupa2 = 350;
          this.arrowheadupb2 = 340;


        }

        else if (selected == "Lower Right Corner") {
          this.originPal1 = "Lower Right Corner";


          this.linea = 490;
          this.lineb = 390;
          this.linea1 = 490;
          this.lineb1 = 330;
          this.linea2 = 560;
          this.lineb2 = 330;

          // head down
          this.arrowheaddowna = 480;
          this.arrowheaddownb = 370;
          this.arrowheaddowna1 = 490;
          this.arrowheaddownb1 = 390;
          this.arrowheaddowna2 = 500;
          this.arrowheaddownb2 = 370;

          // head up
          this.arrowheadupa = 540;
          this.arrowheadupb = 320;
          this.arrowheadupa1 = 560;
          this.arrowheadupb1 = 330;
          this.arrowheadupa2 = 540;
          this.arrowheadupb2 = 340;


        }
        this.arrow();
      }
    }
    if (this.state.selectedTwo == true) {
      if (name === "OriginPal2") {

        const selected = event.target.value;
        console.log("selevted vaule  " + selected);

        if (selected == "Upper Right Corner") {
          this.originPal2 = "Upper Right Corner";

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


        }
        else if (selected == "Upper Left Corner") {
          this.originPal2 = "Upper Left Corner";

          this.linea = 310;
          this.lineb = 130;
          this.linea1 = 310;
          this.lineb1 = 70;
          this.linea2 = 370;
          this.lineb2 = 70;

          // head down
          this.arrowheaddowna = 300;
          this.arrowheaddownb = 117;
          this.arrowheaddowna1 = 310;
          this.arrowheaddownb1 = 137;
          this.arrowheaddowna2 = 320;
          this.arrowheaddownb2 = 117;

          // head up
          this.arrowheadupa = 350;
          this.arrowheadupb = 60;
          this.arrowheadupa1 = 370;
          this.arrowheadupb1 = 70;
          this.arrowheadupa2 = 350;
          this.arrowheadupb2 = 80;

        }

        else if (selected == "Lower Left Corner") {
          this.originPal2 = "Lower Left Corner";


          this.linea = 310;
          this.lineb = 390;
          this.linea1 = 310;
          this.lineb1 = 330;
          this.linea2 = 370;
          this.lineb2 = 330;

          // head down
          this.arrowheaddowna = 300;
          this.arrowheaddownb = 375;
          this.arrowheaddowna1 = 310;
          this.arrowheaddownb1 = 395;
          this.arrowheaddowna2 = 320;
          this.arrowheaddownb2 = 375;

          // head up
          this.arrowheadupa = 350;
          this.arrowheadupb = 320;
          this.arrowheadupa1 = 370;
          this.arrowheadupb1 = 330;
          this.arrowheadupa2 = 350;
          this.arrowheadupb2 = 340;


        }


        else if (selected == "Lower Right Corner") {
          this.originPal2 = "Lower Right Corner";


          this.linea = 490;
          this.lineb = 390;
          this.linea1 = 490;
          this.lineb1 = 330;
          this.linea2 = 560;
          this.lineb2 = 330;

          // head down
          this.arrowheaddowna = 480;
          this.arrowheaddownb = 370;
          this.arrowheaddowna1 = 490;
          this.arrowheaddownb1 = 390;
          this.arrowheaddowna2 = 500;
          this.arrowheaddownb2 = 370;

          // head up
          this.arrowheadupa = 540;
          this.arrowheadupb = 320;
          this.arrowheadupa1 = 560;
          this.arrowheadupb1 = 330;
          this.arrowheadupa2 = 540;
          this.arrowheadupb2 = 340;


        }
        this.arrow();


      }
    }
    if (this.state.selectedOne == true) {
      if (name === "Firstpal1") {
        const selected = event.target.value;
        console.log("selevted vaule  " + selected);

        if (selected == "Upper Right Corner") {
          this.firstcase_pal1 = "Upper Right Corner";
          this.state.arcX = this.p_xpos + this.P_width1;
          this.state.arcY = this.p_ypos;
          this.setState({
            arcX: this.p_xpos + this.P_width1,
            arcY: this.p_ypos,
          })
          this.callSchemafor1();
        }

        else if (selected == "Upper Left Corner") {
          this.firstcase_pal1 = "Upper Left Corner";
          this.state.arcX = this.p_xpos;
          this.state.arcY = this.p_ypos;
          this.setState({
            arcX: this.p_xpos,
            arcY: this.p_ypos
          })
          this.callSchemafor1();
        }
        else if (selected == "Lower Left Corner") {
          this.firstcase_pal1 = "Lower Left Corner";
          this.state.arcX = this.p_xpos;
          this.state.arcY = this.p_ypos + this.P_length1;
          this.setState({
            arcX: this.p_xpos,
            arcY: this.p_ypos + this.P_length1
          })
          this.callSchemafor1();

        }
        else if (selected == "Lower Right Corner") {
          this.firstcase_pal1 = "Lower Right Corner";
          this.state.arcX = this.p_xpos + this.P_width1;
          this.state.arcY = this.p_ypos + this.P_length1;
          this.setState({
            arcX: this.p_xpos + this.P_width1,
            arcY: this.p_ypos + this.P_length1
          })
          this.callSchemafor1();

        }
      }
    }



    if (this.state.selectedTwo == true) {
      if (name === "Firstpal2") {
        const selected = event.target.value;
        console.log("selevted vaule  " + selected);

        if (selected == "Upper Right Corner") {
          this.firstcase_pal2 = "Upper Right Corner";
          this.state.arcX2 = this.p_xpos2 + this.P_width2;
          this.state.arcY2 = this.p_ypos2;
          this.setState({
            arcX2: this.p_xpos2 + this.P_width2,
            arcY2: this.p_ypos2,
          })
          this.callSchemafor2();
        }

        else if (selected == "Upper Left Corner") {
          this.firstcase_pal2 = "Upper Left Corner";
          this.state.arcX2 = this.p_xpos2;
          this.state.arcY2 = this.p_ypos2;
          this.setState({
            arcX2: this.p_xpos2,
            arcY2: this.p_ypos2
          })
          this.callSchemafor2();
        }
        else if (selected == "Lower Left Corner") {
          this.firstcase_pal2 = "Lower Left Corner";
          this.state.arcX2 = this.p_xpos2;
          this.state.arcY2 = this.p_ypos2 + this.P_length2;
          this.setState({
            arcX2: this.p_xpos2,
            arcY2: this.p_ypos2 + this.P_length2
          })
          this.callSchemafor2();

        }
        else if (selected == "Lower Right Corner") {
          this.firstcase_pal2 = "Lower Right Corner";
          this.state.arcX2 = this.p_xpos2 + this.P_width2;
          this.state.arcY2 = this.p_ypos2 + this.P_length2;
          this.setState({
            arcX2: this.p_xpos2 + this.P_width2,
            arcY2: this.p_ypos2 + this.P_length2
          })
          this.callSchemafor2();

        }
      }
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
    if (name === "Firstpal1") {
      this.firstcase_pal1 = event.target.value;
      this.setState({
        firstcase_pal1: event.target.value
      });

    }

    if (name === "Firstpal2") {
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
        this.int_Layer1 = event.target.checked;
      }
      else if (this.state.selectedTwo) {
        this.int_Layer2 = event.target.checked;
      }
      this.setState({
        int_Layer: event.target.checked
      });
    }

    console.log("handle section", this.state)

  };

  arrow = () => {

    this.ctx_forSingle.strokeStyle = 'blue';
    this.ctx_forSingle.lineWidth = 3;


    //Top-Right
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'green';

    this.ctx_forSingle.moveTo(this.linea, this.lineb);// 1st line
    this.ctx_forSingle.lineTo(this.linea1, this.lineb1);
    // this.ctx_forSingle.lineTo(this.linea2, this.lineb2);// 2nd line
    this.ctx_forSingle.stroke();


    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'red';
    // this.ctx_forSingle.moveTo(this.linea, this.lineb);// 1st line
    this.ctx_forSingle.lineTo(this.linea1, this.lineb1);
    this.ctx_forSingle.lineTo(this.linea2, this.lineb2);
    this.ctx_forSingle.stroke();

    //Top-Right head down
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'green';

    this.ctx_forSingle.moveTo(this.arrowheaddowna, this.arrowheaddownb);
    this.ctx_forSingle.lineTo(this.arrowheaddowna1, this.arrowheaddownb1);
    this.ctx_forSingle.lineTo(this.arrowheaddowna2, this.arrowheaddownb2);
    this.ctx_forSingle.stroke();

    //Top_Right head Right
    this.ctx_forSingle.beginPath();
    this.ctx_forSingle.strokeStyle = 'red';

    this.ctx_forSingle.moveTo(this.arrowheadupa, this.arrowheadupb);
    this.ctx_forSingle.lineTo(this.arrowheadupa1, this.arrowheadupb1);
    this.ctx_forSingle.lineTo(this.arrowheadupa2, this.arrowheadupb2);
    this.ctx_forSingle.stroke();
  }


  handleSelectionIntLayer = ({ name, value }) => event => {
    console.log("name inside handleSelectionIntLayer = " + name);
    console.log("value inside handleSelectionIntLayer = " + event.target.value);
    let pallet_no = 1;
    let layers = [];
    if (this.state.selectedOne) {
      pallet_no = 1;
      layers = this.layerdata1;
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
      layers = this.layerdata2;
    }
    // const layers = this.state.layer_data;
    if (name === "intermediatelayer") {
      this.intermediate_layer = event.target.checked;
      this.layer_name = "";
      this.layer_sequence = value;
      if (layers.length === 0) {

        let records = {
          "l_id": 0,
          "palletid": this.state.palletid,
          "pallet_no": pallet_no,
          "layername": this.layer_name,
          "intermediatelayer": this.intermediate_layer,
          "layerSequence": this.layer_sequence
        };
        layers.push(records);


        let arr = [...layers];
        this.layerdata = arr;
        if (this.state.selectedOne) {
          this.layerdata1 = arr;
        }
        else if (this.state.selectedTwo) {
          this.layerdata2 = arr;
        }
        this.setState({
          layer_data: arr
        });
        console.log("insert layer data", this.state.layer_data);

      }
      else {
        const tempArr = layers.map((item) => {
          if ((name === "intermediatelayer") && (item.layerSequence === (value))) {
            this.intermediate_layer = event.target.checked;
            this.layer_sequence = value;
            return {
              ...item,
              intermediatelayer: this.intermediate_layer,
              layerSequence: value,
              palletid: this.state.palletid,
            }
          }

          return item;

        });

        console.log("tempArr", tempArr);
        let arr = [...tempArr];
        this.layerdata = arr;
        if (this.state.selectedOne) {
          this.layerdata1 = arr;
        }
        else if (this.state.selectedTwo) {
          this.layerdata2 = arr;
        }
        this.setState({
          layer_data: arr
        });
        console.log("update layer data", this.state.layer_data);
      }
    }




  };

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

  handleSelectionLayerPallet = ({ name, value }) => event => {
    console.log("name inside handleSelectionLayerPallet = " + name);
    console.log("value inside handleSelectionLayerPallet = " + event.target.value);
    let pallet_no = 1;
    let layers = [];
    if (this.state.selectedOne) {
      pallet_no = 1;
      layers = this.layerdata1;
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
      layers = this.layerdata2;
    }
    // const layers = this.state.layer_data;
    if (layers.length === 0) {

      this.layer_name = event.target.value;
      this.layer_sequence = value;
      const inter_value = true;

      let records = {
        "l_id": 0,
        "palletid": this.state.palletid,
        "pallet_no": pallet_no,
        "layername": this.layer_name,
        "intermediatelayer": inter_value,
        "layerSequence": this.layer_sequence
      };

      layers.push(records);


      let arr = [...layers];
      this.layerdata = arr;
      if (this.state.selectedOne) {
        this.layerdata1 = arr;
      }
      else if (this.state.selectedTwo) {
        this.layerdata2 = arr;
      }
      this.setState({
        layer_data: arr
      });
      console.log("insert layer data", this.state.layer_data);

    }
    else {
      const tempArr = layers.map((item) => {
        if ((name === "layername") && (item.layerSequence === (value))) {
          this.layer_name = event.target.value;
          this.layer_sequence = value;
          return {
            ...item,
            layername: this.layer_name,
            layerSequence: value,
            palletid: this.state.palletid
          }
        }

        return item;

      });

      console.log("tempArr", tempArr);
      let arr = [...tempArr];
      arr.sort(this.getSortOrder("layerSequence"));
      this.layerdata = arr;
      if (this.state.selectedOne) {
        this.layerdata1 = arr;
      }
      else if (this.state.selectedTwo) {
        this.layerdata2 = arr;
      }
      console.log("Sorted arr", arr);
      this.setState({
        layer_data: arr
      });
      console.log("update layer data inside handleSelectionLayerPallet =", this.state.layer_data);
    }

    //layers.sort((a,b) => a.layerSequence - b.layerSequence);

  }

  handleValueChangePrepos = ({ name, value }, e) => {
    console.log("name inside handleValueChangePrepos = " + name);
    console.log("value inside handleValueChangePrepos = " + value);
    console.log("event.target.value inside handleValueChangePrepos = " + e.target.value);
    console.log("value change for: " + name + " value: " + e.target.value + " case index: " + value);  // use for x y offset for green rect
    let pallet_no = 1;
    let layers = [];
    if (this.state.selectedOne) {
      pallet_no = 1;
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = this.casedataA1;
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = this.casedataB1;
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = this.casedataC1;
      }
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = this.casedataA2;
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = this.casedataB2;
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = this.casedataC2;
      }
    }
    // const layers = this.state.layer_data;
    if (this.casedata.length === 0) {
      return;
    }
    else {
      const tempArr = this.casedata.map((item) => {
        console.log("item.cases inside handleValueChangePrepos = " + item.cases);
        if (item.cases === "Case " + value) {
          if ((name === "pre_Pos_X")) {
            const prePosXValue = e.target.value;
            // 
            // console.log("in wich case: " + item.cases)
            console.log("item.position value: " + item.position + "NR VALUE: " + (this.state.tempNRValue) + " condition check: " + (item.position === "Nr " + (this.state.tempNRValue)))
            console.log("this.state.tempNRValue GR: " + this.state.tempNRValue)
            if (this.state.tempNRValue != "" && item.position == "Nr " + this.state.tempNRValue) {
              console.log("inside if condition GR")
              try {
                console.log("this.state.tempNRValue: " + this.state.tempNRValue)
                this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].prePosX = prePosXValue;

                let xPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].x - prePosXValue;  // need to change minus prePos x offset
                // let yPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue-1].y - this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue].prePosY;  // need to change minus prePos y offset
                let yPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].y - item.pre_Pos_Y;  // need to change minus prePos y offset
                let w = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].w;
                let h = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].h;

                this.drawGreenRect(xPos, yPos, w, h);
              } catch (e) {
                console.log("error in green rect prepos x setting" + e)
              }
            }
            console.log("new value CasesXYfotGreenRectPRC" + JSON.stringify(this.state.CasesXYfotGreenRectPRC))
            this.layer_sequence = value;
            return {
              ...item,
              pre_Pos_X: prePosXValue,
              cases: "Case " + value,
              palletid: this.state.palletid
            }
          }
          else if ((name === "pre_Pos_Y")) {
            const prePosYValue = e.target.value;
            // 
            if (this.state.tempNRValue != "" && item.position == "Nr " + this.state.tempNRValue) {
              console.log("inside if condition GR")
              try {
                console.log("this.state.tempNRValue: " + this.state.tempNRValue)
                this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].prePosX = prePosYValue;

                let xPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].x - item.pre_Pos_X;  // need to change minus prePos x offset
                // let yPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue-1].y - this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue].prePosY;  // need to change minus prePos y offset
                let yPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].y - prePosYValue;  // need to change minus prePos y offset
                let w = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].w;
                let h = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].h;

                this.drawGreenRect(xPos, yPos, w, h);
              } catch (e) {
                console.log("error in green rect prepos x setting" + e)
              }
            }
            this.layer_sequence = value;
            return {
              ...item,
              pre_Pos_Y: prePosYValue,
              cases: "Case " + value,
              palletid: this.state.palletid
            }
          }
          else if ((name === "pre_Pos_Z")) {
            const prePosZValue = e.target.value;
            // 
            // this.state.CasesXYfotGreenRectPRC[value-1].prePosZ = prePosZValue;
            // let xPos = this.state.CasesXYfotGreenRectPRC[tempNRValue].x - this.state.CasesXYfotGreenRectPRC[index].prePosX;  // need to change minus prePos x offset
            // let yPos = this.state.CasesXYfotGreenRectPRC[tempNRValue].y - this.state.CasesXYfotGreenRectPRC[index].prePosY;  // need to change minus prePos y offset
            // let w = this.state.CasesXYfotGreenRectPRC[tempNRValue].w;
            // let h = this.state.CasesXYfotGreenRectPRC[tempNRValue].h;

            // this.drawGreenRect(xPos, yPos, w, h);
            // 
            this.layer_sequence = value;
            return {
              ...item,
              pre_Pos_Z: prePosZValue,
              cases: "Case " + value,
              palletid: this.state.palletid
            }
          }
        }

        return item;
      });

      console.log("tempArr", tempArr);
      let arr = [...tempArr];
      // arr.sort(this.getSortOrder("layerSequence"));
      this.casedata = arr;
      if (this.state.selectedOne) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA1 = this.casedata;
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB1 = this.casedata;
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC1 = this.casedata;
        }
      }
      else if (this.state.selectedTwo) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA2 = this.casedata;
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB2 = this.casedata;
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC2 = this.casedata;
        }
      }

      // console.log("Sorted arr", arr);
      this.setState({
        case_data: arr
      });
      // console.log("update layer data inside handleSelectionLayerPallet =", this.state.layer_data);
    }

  }

  handleAutoGeneratePrepos = ({ name }) => event => {

    console.log("name inside handleAutoGeneratePrepos = " + name);
    console.log("event.target.checked inside handleAutoGeneratePrepos = " + event.target.checked);
    let pallet_no = 1;
    let layers = [];
    this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    this.ctx_GRCaseFreez.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
    if (this.state.selectedOne) {
      pallet_no = 1;
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = this.casedataA1;
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = this.casedataB1;
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = this.casedataC1;
      }
    }
    else if (this.state.selectedTwo) {
      pallet_no = 2;
      if (this.state.colorA == '#5eb8b3') {
        this.casedata = this.casedataA2;
      }

      if (this.state.colorB == '#5eb8b3') {
        this.casedata = this.casedataB2;
      }

      if (this.state.colorC == '#5eb8b3') {
        this.casedata = this.casedataC2;
      }
    }
    // const layers = this.state.layer_data;
    if (this.casedata.length === 0) {
      return;
    }
    else {
      let index = 0;
      const tempArr = this.casedata.map((item) => {
        index++;
        return {
          ...item,
          pre_Pos_X: this.state.selectedOne ? this.state.setnumberx : this.state.setnumberx2,
          pre_Pos_Y: this.state.selectedOne ? this.state.setnumbery : this.state.setnumbery2,
          pre_Pos_Z: this.state.selectedOne ? this.state.setnumberz : this.state.setnumberz2,
          position_freezed: true,
          position: "Nr " + index,
          palletid: this.state.palletid
        }
      });

      console.log("tempArr", tempArr);
      let arr = [...tempArr];
      // arr.sort(this.getSortOrder("layerSequence"));
      this.casedata = arr;
      if (this.state.selectedOne) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA1 = this.casedata;
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB1 = this.casedata;
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC1 = this.casedata;
        }
      }
      else if (this.state.selectedTwo) {
        if (this.state.colorA == '#5eb8b3') {
          this.casedataA2 = this.casedata;
        }

        if (this.state.colorB == '#5eb8b3') {
          this.casedataB2 = this.casedata;
        }

        if (this.state.colorC == '#5eb8b3') {
          this.casedataC2 = this.casedata;
        }
      }
      this.state.case_data = arr;
      console.log("this.state.case_data inside handleAutoGeneratePrepos = " + this.state.case_data);
      this.setState({
        case_data: arr
      });
    }

    this.autoGenerateCaseFreez();

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
      console.log("Selected Pallet Origin " + name + " : " + this.originPal1);
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
      //console.log("Selected Pallet Origin " + name + " : " + this.originPal2);
    }

  }

  updateIntermidateList = (value) => {
    this.typeoptions11 = [];

    var num = value;

    var i = 0;
    for (i = 0; i < 10; i++) {
      num = value + "x" + (i + 1) + "mm";

      console.log("var " + num);
      this.typeoptions11.push(num);
    }
    if (this.state.selectedOne) {
      this.intermediateLayerType1 = this.typeoptions11[0];
    }
    else if (this.state.selectedTwo) {
      this.intermediateLayerType2 = this.typeoptions11[0];
    }
    this.setState({
      intermediate_Layer_Type: this.typeoptions11[0]
    })
    this.forceUpdate();
  };

  handleSelection_PalletType = name => event => {

    if (name === "palletType") {
      this.setState({
        pallete_Type: event.target.value
      });
      if (this.state.selectedOne) {
        this.palletType1 = event.target.value;
      }
      else if (this.state.selectedTwo) {
        this.palletType2 = event.target.value;
      }
      this.updatefor_Basiparameter_working_Area(event.target.value);
    }

    if (name === "intermediateLayerType") {
      this.setState({
        intermediate_Layer_Type: event.target.value
      });
    }

    const selected = event.target.value;
    this.handleSelection_intermediateLayer(selected);

  };

  updatefor_Basiparameter_working_Area = (pallete_Type) => {

    if (this.state.selectedOne) {
      this.setState({
        WA_1_Offset_X_Dir: 0,
        WA_1_Offset_Y_Dir: 0,
      })
      // var pallete_y = this.map()

      console.log(" updatefor_Basiparameter_working_Area  " + pallete_Type)

      if (pallete_Type == "US 1: 1219 x 1016 ") {
        (this.WA_1_width_X_Dir = 1016), (this.WA_1_Length_Y_Dir = 1219);
      }
      else if (pallete_Type == "US 2: 1067 x 1067") {
        (this.WA_1_width_X_Dir = 1067), (this.WA_1_Length_Y_Dir = 1067);
      }

      else if (pallete_Type == "EU 1: 1200 x 800") {
        (this.WA_1_width_X_Dir = 800), (this.WA_1_Length_Y_Dir = 1200);
      }

      else if (pallete_Type == "EU 2: 1200 x 1000") {
        (this.WA_1_width_X_Dir = 1000), (this.WA_1_Length_Y_Dir = 1200);
      }

      else if (pallete_Type == "EU 6: 800 x 600") {
        (this.WA_1_width_X_Dir = 600), (this.WA_1_Length_Y_Dir = 800);
      }

      else if (pallete_Type == "AU 1: 1165 x 1165") {
        (this.WA_1_width_X_Dir = 1165), (this.WA_1_Length_Y_Dir = 1165);
      }

      else if (pallete_Type == "ASIA 1: 1100 x 1100") {
        (this.WA_1_width_X_Dir = 1100), (this.WA_1_Length_Y_Dir = 1100);
      }

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

      console.log(" updatefor_Basiparameter_working_Area  " + pallete_Type)

      if (pallete_Type == "US 1: 1219 x 1016 ") {
        (this.WA_2_width_X_Dir = 1016), (this.WA_2_Length_Y_Dir = 1219);
      }

      else if (pallete_Type == "US 2: 1067 x 1067") {
        (this.WA_2_width_X_Dir = 1067), (this.WA_2_Length_Y_Dir = 1067);
      }

      else if (pallete_Type == "EU 1: 1200 x 800") {
        (this.WA_2_width_X_Dir = 800), (this.WA_2_Length_Y_Dir = 1200);
      }

      else if (pallete_Type == "EU 2: 1200 x 1000") {
        (this.WA_2_width_X_Dir = 1000), (this.WA_2_Length_Y_Dir = 1200);
      }

      else if (pallete_Type == "EU 6: 800 x 600") {
        (this.WA_2_width_X_Dir = 600), (this.WA_2_Length_Y_Dir = 800);
      }

      else if (pallete_Type == "AU 1: 1165 x 1165") {
        (this.WA_2_width_X_Dir = 1165), (this.WA_2_Length_Y_Dir = 1165);
      }

      else if (pallete_Type == "ASIA 1: 1100 x 1100") {
        (this.WA_2_width_X_Dir = 1100), (this.WA_2_Length_Y_Dir = 1100);
      }

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
      this.updateIntermidateList(num);
    }

    if (selected == "US 2: 1067 x 1067") {
      var num = "967 x 967";
      this.Pallet_Length = 1067;
      this.Pallet_Width = 1067;
      this.updateIntermidateList(num);
    }

    if (selected == "EU 1: 1200 x 800") {
      var num = "1100 x 700";
      this.Pallet_Length = 1200;
      this.Pallet_Width = 800;
      this.updateIntermidateList(num);
    }

    if (selected == "EU 2: 1200 x 1000") {
      var num = "1100 x 900";
      this.Pallet_Length = 1200;
      this.Pallet_Width = 1000;
      this.updateIntermidateList(num);
    }

    if (selected == "EU 6: 800 x 600") {
      var num = "700 x 500";
      this.Pallet_Length = 800;
      this.Pallet_Width = 600;
      this.updateIntermidateList(num);
    }

    if (selected == "AU 1: 1165 x 1165") {
      var num = "1065 x 1065";
      this.Pallet_Length = 1165;
      this.Pallet_Width = 1165;
      this.updateIntermidateList(num);
    }

    if (selected == "ASIA 1: 1100 x 1100") {
      var num = "1000 x 1000";
      this.Pallet_Length = 1100;
      this.Pallet_Width = 1100;
      this.updateIntermidateList(num);
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

  //     console.log("var " + num);
  //     this.typeoptions11.push(num);
  //   }

  //   this.forceUpdate();
  // };

  updatelist = (noOfSchemaCases) => {

    this.imageSrc_array = [];
    this.variantName_array = [];

    console.log(" updatelist called ")

    this.reqCombinationForPallet_N_Origin();

    if (this.colorA == '#5eb8b3') {

      console.log(" updatelist colorA called ")

      this.saveVariantImages(noOfSchemaCases)

    }

    if (this.colorB == '#5eb8b3') {

      console.log(" updatelist colorB called ")

      this.saveVariantImages(noOfSchemaCases)

    }

    if (this.colorC == '#5eb8b3') {

      console.log(" updatelist colorC called ")
      this.saveVariantImages(noOfSchemaCases)

    }
  }


  handleCarousel1Update = () => {

    if (this.state.selectedOne) {
      this.state.selectedOne = false;
      this.state.selectedTwo = true;
      this.callSchemafor2();
    }
    else if (this.state.selectedTwo) {
      this.state.selectedOne = true;
      this.state.selectedTwo = false;
      this.callSchemafor1();
    }
  }

  handleCarouselUpdate = (e) => {

    let variantname = this.variantName_array[e.realIndex];
    if (this.state.selectedOne) {
      if (this.state.colorA == '#5eb8b3') {

        if (this.setVariantName_SchemaA1 != "" && this.setVariantName_SchemaA1 != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      } else if (this.state.colorB == '#5eb8b3') {
        if (this.setVariantName_SchemaB1 != "" && this.setVariantName_SchemaB1 != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      } else {
        if (this.setVariantName_SchemaC1 != "" && this.setVariantName_SchemaC1 != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      }
    }
    else if (this.state.selectedTwo) {
      if (this.state.colorA == '#5eb8b3') {
        if (this.setVariantName_SchemaA2 != "" && this.setVariantName_SchemaA2 != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      } else if (this.state.colorB == '#5eb8b3') {
        if (this.setVariantName_SchemaB2 != "" && this.setVariantName_SchemaB2 != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      } else {
        if (this.setVariantName_SchemaC2 != "" && this.setVariantName_SchemaC2 != variantname) {
          this.OffsetChangePrc("", "", "flush");
        }
      }
    }
    console.log("real index of of Swiper slide " + variantname);

    if (this.state.colorA == '#5eb8b3') {

      console.log(" handleCarouselUpdate colorA called ")

      this.realIndexForA = e.realIndex;
      this.realIndexForC = 0;
      this.realIndexForB = 0;

      console.log(" variantname " + variantname)
      if (this.state.selectedOne) {
        this.setVariantName_SchemaA1 = variantname;
      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaA2 = variantname;
      }

      this.setState({
        setVariantName_SchemaA: variantname
      })

    }

    if (this.state.colorB == '#5eb8b3') {

      console.log(" handleCarouselUpdate colorB called ")

      this.realIndexForB = e.realIndex;
      this.realIndexForA = 0;
      this.realIndexForC = 0;

      if (this.state.selectedOne) {
        this.setVariantName_SchemaB1 = variantname;
      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaB2 = variantname;
      }
      this.setState({
        setVariantName_SchemaB: variantname,
      })

    }

    if (this.state.colorC == '#5eb8b3') {

      console.log(" handleCarouselUpdate colorC called ")

      this.realIndexForC = e.realIndex;
      this.realIndexForB = 0;
      this.realIndexForA = 0;
      if (this.state.selectedOne) {
        this.setVariantName_SchemaC1 = variantname;
      }
      else if (this.state.selectedTwo) {
        this.setVariantName_SchemaC2 = variantname;
      }

      this.setState({
        setVariantName_SchemaC: variantname
      })

    }
    this.updateSelection();
    console.log("variantName_array  " + this.variantName_array)
    console.log("this.state.setVariantName_SchemaA of Swiper slide " + this.state.setVariantName_SchemaA);

  }

  OffsetChangePrc = (index, value, e) => {

    let toUpdateCaseData = this.casedata;
    console.log("offsetchangePRC rotation value: " + e)

    if (e == "rotation") {
      console.log("offsetchangePRC rotation value: inside if: " + e + " index: " + (index - 1))
      console.log("offsetchangePRC rotation value: inside if1: " + JSON.stringify(toUpdateCaseData))
      toUpdateCaseData[index - 1].rotation = value;

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
        toUpdateCaseData[i].pre_Pos_X = 10;
        toUpdateCaseData[i].pre_Pos_Y = 10;
        toUpdateCaseData[i].pre_Pos_Z = 10;
        toUpdateCaseData[i].auto_generation = false;
        toUpdateCaseData[i].rotation = null;
      }
    } else {
      console.log("Clicked " + index + " " + !value);
      console.log("target name check " + e.target.name);


      if (e.target.name === "offsetXneg") {
        toUpdateCaseData[index].offset_X_neg = !value;
        console.log("before state update case_data x " + toUpdateCaseData[index].offset_X_neg);

        console.log("prePosXneg1[index].pre_Pos_X BEFORE" + toUpdateCaseData[index].pre_Pos_X);
        toUpdateCaseData[index].pre_Pos_X = -(toUpdateCaseData[index].pre_Pos_X);
        console.log("prePosXneg1[index].pre_Pos_X AFTER" + toUpdateCaseData[index].pre_Pos_X);
        if (this.state.tempNRValue != "" && (this.state.case_data[index].position == "Nr " + this.state.tempNRValue)) {

          let xPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].x - (this.state.case_data[index].pre_Pos_X);
          let yPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].y - (this.state.case_data[index].pre_Pos_Y);
          let w = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].w;
          let h = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].h;

          this.drawGreenRect(xPos, yPos, w, h);
        }
      }

      if (e.target.name === "offsetYneg") {
        toUpdateCaseData[index].offset_Y_neg = !value;
        console.log("before state update case_data Y " + toUpdateCaseData[index].offset_Y_neg);

        console.log("prePosXneg1[index].pre_Pos_Y BEFORE" + toUpdateCaseData[index].pre_Pos_Y);
        toUpdateCaseData[index].pre_Pos_Y = -(toUpdateCaseData[index].pre_Pos_Y);
        console.log("prePosXneg1[index].pre_Pos_Y AFTER" + toUpdateCaseData[index].pre_Pos_Y);
        if (this.state.tempNRValue != "" && (this.state.case_data[index].position == "Nr " + this.state.tempNRValue)) {

          let xPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].x - (this.state.case_data[index].pre_Pos_X);
          let yPos = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].y - (this.state.case_data[index].pre_Pos_Y);
          let w = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].w;
          let h = this.state.CasesXYfotGreenRectPRC[this.state.tempNRValue - 1].h;

          this.drawGreenRect(xPos, yPos, w, h);
        }
      }

      if (e.target.name === "position_freezed") {
        toUpdateCaseData[index].position_freezed = !value;
        console.log("before state update case_data position_freezed " + toUpdateCaseData[index].position_freezed);
        // 
        // 
        // freezing case
        // 
        // case index
        // NR
        // !value
        try {
          if (toUpdateCaseData[index].position != "") {
            let NRpositionStr = toUpdateCaseData[index].position;
            let NRpositionStrSplitArr = NRpositionStr.split(" ");
            let nrPos = parseInt(NRpositionStrSplitArr[1]);
            console.log("nrPosnrPosnrPosnrPos" + (nrPos - 1));

            // case position dimentions
            let x = this.state.CasesXYfotGreenRectPRC[nrPos - 1].x;
            let y = this.state.CasesXYfotGreenRectPRC[nrPos - 1].y;
            let w = this.state.CasesXYfotGreenRectPRC[nrPos - 1].w;
            let h = this.state.CasesXYfotGreenRectPRC[nrPos - 1].h;
            if (!value) {

              this.drawFreezedCase(x, y, w, h);
              this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

            } else {
              console.log("else do nothing")
              this.ctx_GRCaseFreez.clearRect(x, y, w, h);
              this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

            }

          }

        } catch (err) {
          console.log("error spliting in position freezing" + err)
        }
      }

      if (e.target.name === "position") {

        console.log("OffsetChangePrc e.target.value " + e.target.value + "caseNo: " + (index + 1));
        console.log("jsonjson" + JSON.stringify(this.tempJsonToPush));
        console.log("real XY pos for greenRect: " + JSON.stringify(this.state.CasesXYfotGreenRectPRC[index]));

        try {


          if (e.target.value == "") {
            this.state.case_data[index].position = "";
            this.setState({
              tempNRValue: "",
            })

            this.checkSelectNrPositions();

            this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);
          } else {

            let positionNrValue = e.target.value;
            let gettingNumberFromValue = positionNrValue.split(" ");
            let positionNR = gettingNumberFromValue[1];


            this.checkSelectNrPositions().then((alreadySelectedNrArr) => {

              if (alreadySelectedNrArr.includes(e.target.value)) {
                this.state.case_data[index].position = "";
                this.ctx_greenRect.clearRect(0, 0, this.myRef_GR.current.clientWidth, this.myRef_GR.current.clientHeight);

                // alert("position value already selected");
                toast.error("Position value already selected", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
                this.setState({
                  tempNRValue: "",
                })

              } else {
                this.state.case_data[index].position = e.target.value;

                this.setState({
                  tempNRValue: positionNR,
                })

                console.log("this.state.case_data[index].prePosX: " + this.state.case_data[index].pre_Pos_X)

                let xPos = this.state.CasesXYfotGreenRectPRC[positionNR - 1].x - this.state.case_data[index].pre_Pos_X;  // need to change minus prePos x offset
                let yPos = this.state.CasesXYfotGreenRectPRC[positionNR - 1].y - this.state.case_data[index].pre_Pos_Y;  // need to change minus prePos y offset
                let w = this.state.CasesXYfotGreenRectPRC[positionNR - 1].w;
                let h = this.state.CasesXYfotGreenRectPRC[positionNR - 1].h;

                this.drawGreenRect(xPos, yPos, w, h);


              }
            })
          }
        } catch (e) {
          console.log("greenRect positioning setting" + e)
        }



        // let selected = e.target.value;
        // let split_Nr = selected.split(" ",2)
        // let correspJsonIndex = split_Nr[1]
        // this.tempCase[`Case_${this.Case_No}`]= correspJsonIndex;


        // console.log("print correspJsonIndex : ", correspJsonIndex );
        // console.log("print index : ", index );

        // changeNr_number = [];


        console.log("OffsetChangePrc this.UpdateNr: " + this.UpdateNr);

        this.setState({
          Nr_number: e.target.value
        });

        // this.UpdateNr.splice(index, 1);
        console.log("OffsetChangePrc display Nr number: " + this.state.Nr_number);

      }
    }

    this.setState({
      case_data: toUpdateCaseData
    })
    if (e == "rotation" || e == "flush") {
      console.log("after rotation db: " + JSON.stringify(toUpdateCaseData))
      this.savePrc();
    }
  }

  UpadateNrPRC = () => {

    console.log("value isplay case_data: " + this.state.case_data.length);

    this.UpdateNr = []  //number of lists coming that list deleting
    let i;

    for (i = 0; i < this.state.case_data.length; i++) {
      let str = "Nr " + (i + 1)
      this.UpdateNr.push(str);
    }
    console.log("this.updateNr: " + this.UpdateNr);

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

    // important: correct mouse position:
    let rect = this.myRef_GR.current.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top
    let i = 0, r;

    // console.log("my mouse move this.ctx: x: " + x + " y: " + y )

    // this.ctx.clearRect(0, 0, canvas.width, canvas.height); // for demo
    let newX;
    let newY;
    let newW;
    let newH;
    let rotation;
    let index;

    if (this.state.CasesXYfotGreenRectPRC.length > 0) {
      while (r = this.state.CasesXYfotGreenRectPRC[i++]) {

        this.ctx_forPRC.beginPath();
        this.ctx_forPRC.rect(r.x, r.y, r.w, r.h);
        this.ctx_forPRC.isPointInPath(x, y) && (newX = r.x, newY = r.y, newW = r.w, newH = r.h, rotation = r.rotation, index = i);
      }

    }

    // console.log("clecked selected case dimentions: x: " + newX + " y: " + newY + " w: " + newW + " h: " + newH )
    this.rotateCasePRC(newX, newY, newW, newH, rotation, index);

  };

  rotateCasePRC = (x, y, w, h, rotation, index) => {
    // this.ctx.clearRect(x, y, w, h);
    if (x != undefined && x != undefined && x != undefined && x != undefined && rotation != undefined) {
      console.log("clecked selected case dimentions: x: " + x + " y: " + y + " w: " + w + " h: " + h + " rotation: " + rotation + " caseType: width " + this.Case_Width + " length " + this.Case_Length + " index: " + index);

      let newRotation;
      if (this.Case_Width === this.Case_Length) {
        console.log("square rectangle check: square");

        if (rotation >= 270) {
          newRotation = 0;
        } else {
          newRotation = rotation + 90;
        }

      } else {
        console.log("square rectangle check: rectangle");

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
      this.drawFillRect(newCaseInfo, { backgroundColor: "#eab676" }, index); //postion number of cases
      this.drawRect(newCaseInfo); //rectangle for case positions
      // this.ctx.drawImage(this.state.caseImageLoad180Deg[this.tempLabelindex],x,y,w,h)
      this.OffsetChangePrc(index, newRotation, "rotation");
    }

  }

  render() {
    var caseDataLength = this.state.case_data.length;
    console.log("caseDataLength inside render = " + caseDataLength);
    var noofcaseA = 1, noofcaseB = 1, noofcaseC = 1;
    try {
      noofcaseA = parseInt(this.state.cases_Schema_A);
      if (isNaN(noofcaseA)) {
        noofcaseA = 1;
      }
    }
    catch (e) {
      noofcaseA = 1;
      console.log("error inside render = " + e);

    }

    try {
      noofcaseB = parseInt(this.state.cases_Schema_B);
      if (isNaN(noofcaseB)) {
        noofcaseB = 1;
      }
    }
    catch (e) {
      noofcaseB = 1;
      console.log("error inside render = " + e);
    }

    try {
      noofcaseC = parseInt(this.state.cases_Schema_C);
      if (isNaN(noofcaseC)) {
        noofcaseC = 1;
      }
    }
    catch (e) {
      noofcaseC = 1;
      console.log("error inside render = " + e);
    }
    console.log("noofcaseA inside render = " + noofcaseA);
    console.log("noofcaseB inside render = " + noofcaseB);
    console.log("noofcaseC inside render = " + noofcaseC);
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
    console.log("typeoptions = " + typeoptions)
    console.log("UI updated = " + this.state.dropdownUpdate)
    console.log("Layer_Data", this.state.layer_data);
    console.log("case_data", this.state.case_data);

    const obj = this.state.layer_data;
    const objPRC = this.state.case_data;

    console.log("this.casedata.length " + this.state.case_data.length);
    if (this.state.case_data.length <= 0) {
      console.log("this.casedata indexed null");
    } else {
      console.log("this.casedata indexed" + this.state.case_data[this.state.case_data.length - 1].offset_X_neg);

    }

    const enableCarousel = this.enableCarousel;
    const enableCarousel1 = this.state.enableCarousel1;
    const enableHeaderA = this.state.enableHeaderA;
    const enableHeaderB = this.state.enableHeaderB;
    const enableHeaderC = this.state.enableHeaderC;

    const { t } = this.props; // localization
    return (
      <div className="parent" style={{ width: '1366px', height: '500px' }}>
        <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} fontFamily='Roboto'>
          <Grid container xs={7} sm={7} md={7} lg={7} spacing={0} fontFamily='Roboto' style={{ marginTop: '5px', marginLeft: '23px' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} width={threedwidth} height={threedheight}>

              <Paper style={{ position: "relative", width: threedwidth, height: threedheight }}>

                <a href="#" ref={this.downloadLink} />
                {
                  (this.state.caseImageLoad0Deg.length > 0) &&
                  (<div className="photo-container" style={{ display: enableCarousel ? "block" : "none", position: "relative", width: '790px', height: '400px' }} >
                    <div
                      class="carousel-classPrev">
                      {/* <button  */}
                      <NavigateBeforeIcon
                        id="carousel-prev"
                        style={{ fontSize: "50px", marginTop: "155px" }}
                        onClick={this.goPrev}>Prev
                      </NavigateBeforeIcon>

                      {/* </button> */}
                    </div>

                    <div
                      class="carousel-classNext">
                      {/* <button  */}
                      <NavigateNextIcon
                        id="carousel-next"
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
                      style={{ position: "relative" }}
                    >
                      {console.log(" ctx width img ", this.state.P_width + "px", " ctx height ", this.state.P_length + "px")}

                      {this.imageSrc_array.map((image, index) => (
                        <SwiperSlide key={index} style={{ position: "relative" }}>
                          <p style={{ marginTop: "30px", marginBottom: "50px", marginLeft: "75px", position: "relative" }}>
                            {this.variantName_array[index]}</p>
                          <img src={image} alt="" style={{ marginTop: '-30px', marginLeft: '11px', position: "relative" }} />
                          {/* width={129} height={171} || <img src={image} alt="" width={175} height={275} style={{ marginTop: '-30px', marginLeft: '11px',position:"relative" }} /> */}

                        </SwiperSlide>

                      ))}
                    </Swiper>

                  </div>)}
                <CircularProgress
                  style={{
                    visibility: this.state.setCircularProgress, marginTop: "-45px",
                    marginLeft: "370px", position: "absolute"
                  }} />
                {enableCarousel1 && (<div className="photo-container" style={{ position: "absolute", width: '790px', height: '400px' }} >
                  <Swiper
                    navigation={{
                      nextEl: ".next",
                      prevEl: ".prev",
                    }}
                    onTouchStart={(e) => {
                      this.handleCarousel1Update(e);
                    }}
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

                    }}
                    style={{ position: "relative" }}>

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
                  <p style={{ marginBottom: "-50px", marginLeft: "353px" }}>{this.state.setVariantName_SchemaA}</p>
                </div>
                )}
                {enableHeaderB && (<div>
                  <p style={{ marginBottom: "-50px", marginLeft: "353px" }}>{this.state.setVariantName_SchemaB}</p>
                </div>
                )}
                {enableHeaderC && (<div>
                  <p style={{ marginBottom: "-50px", marginLeft: "353px" }}>{this.state.setVariantName_SchemaC}</p>
                </div>
                )}

                {console.log("variant name under render" + this.state.setVariantName_SchemaA)}

                <canvas ref={this.myRef_GR} style={{ position: "absolute", zIndex: "5", marginTop: this.state.margintop_prc, marginBottom_greenrect: this.marginBottom_greenrect, visibility: this.state.canvasGreenRect }}
                  onClick={(e) => this.caseRotateOnClickHandler(e)}
                >
                </canvas>

                <canvas className='GreenCanCaseFreez' ref={this.myRef_GRCaseFreez} style={{
                  position: "absolute", zIndex: "4", marginTop: this.state.margintop_prc,
                  marginBottom_greenrect: this.marginBottom_greenrect, visibility: this.state.canvasfreezGreenRect
                }}></canvas>

                {console.log("this.state.setCanvasBP ", this.state.setCanvasBP)}

                {/* Below canvas is responsile for PRC ,, position:"absolute",visibility: this.state.enableCanvasPRC style={{ visibility: this.state.enableCanvasPRC }}, this.myRef_forPRC */}
                <canvas ref={this.myRef_forPRC} style={{
                  marginTop: this.state.margintop_prc, visibility: this.state.enableCanvasPRC
                  , position: "absolute"
                }}> </canvas>

                {/* Below canvas is responsile for Basic Para , this.myRef_forSingleCanvas*/}
                <canvas ref={this.myRef_forSingleCanvas} style={{ position: "absolute" }} ></canvas>

                {/* Below canvas is responsile for creating pallet  */}
                <canvas ref={this.myRef} width={this.state.P_width} height={this.state.P_length} style={{
                  position: "relative",
                  visibility: "hidden"
                }}></canvas>

                {/* Below canvas is responsile for creating cases images  */}
                <canvas ref={this.myRefCase} style={{ visibility: "hidden", position: "relative" }}></canvas>

              </Paper>
              <div style={{ position: "absolute", width: threedwidth, height: threedheight, opacity: 0.5 }}>
              </div>

              <div className="container" style={{ margin: "10px" }} >
                <div className='textplate' style={{ marginLeft: "-25px", width: "280px", height: "60px", backgroundColor: color2 }}>
                  <TextField
                    style={{ left: "30px", marginTop: "20px", marginBottom: '15px', height: "18px", backgroundColor: "white", justifyContent: "center", alignItems: "center", textAlign: "center", }}
                    id="outlined-type"
                    value={this.state.palletname}

                    InputLabelProps={{
                      shrink: true,
                      style: { fontSize: "16px", backgroundColor: "white", height: "53px", width: "200px", textAlign: "center", justifyContent: "center", alignItems: "center", padding: "6px" }
                    }}
                    InputProps={{
                      disableUnderline: true,
                      readOnly: false,
                      style: { fontSize: "16px", backgroundColor: "white", height: "53px", width: "200px", textAlign: "center", justifyContent: "center", alignItems: "center", padding: "6px" }
                    }}
                    margin="dense"
                    // variant="outlined"
                    size="small"
                  />
                  <Button style={{ marginLeft: "60px", marginTop: "8px", alignSelf: 'center', minWidth: "0px", width: "45px", height: "45px", border: "1px solid black", right: 0, borderRadius: "50%" }} className="backBtn" onClick={this.handleBack}>
                    {/* <Button style={{marginLeft: '45px' , marginTop: "12px", display: 'flex', alignSelf: 'center',  width:"5px", height:"65px",  marginBottom: '10px', marginRight: '200px', border: '1px solid black', borderRadius:"98px", }} className="backBtn"
                    onClick={this.handleBack}> */}
                    <HomeIcon />
                  </Button>

                </div>
                <div style={{ marginLeft: "10px", display: 'flex', flexDirection: "row", width: "250px", height: "60px", backgroundColor: color2 }}>
                </div>
                <div style={{ marginLeft: "10px", display: 'flex', flexDirection: "row", width: "260px", height: "60px", backgroundColor: color2 }}>
                  <Button style={{ marginTop: "12px", fontSize: "24px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "45px", height: "45px", marginBottom: '10px', borderRadius: "98px", backgroundColor: this.state.colorfor1, border: '1px solid', left: 10 }} className="backBtn"
                    onClick={this.callSchemafor1} hidden={this.state.pallet_12} >
                    1
                  </Button>
                  <Button style={{ marginTop: "12px", fontSize: "24px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "45px", height: "45px", padding: 10, marginBottom: '10px', border: '1px solid black', borderRadius: "98px", backgroundColor: this.state.colorfor2, left: 20 }} className="backBtn"
                    onClick={this.callSchemafor2} hidden={this.state.pallet_12} >
                    2
                  </Button>

                  <Button style={{ marginTop: "12px", fontSize: "24px", display: 'flex', alignSelf: 'center', width: "45px", height: "45px", left: "10px", marginBottom: '10px', borderRadius: "98px", minWidth: "0px", border: '1px solid black', backgroundColor: this.state.colorA }}
                    hidden={this.state.pallet_bool}
                    onClick={this.handlecolorA}
                    disabled={this.state.handlecolorA_ED}
                    className="backBtn"
                  >
                    A
                  </Button>
                  <Button style={{ marginTop: "12px", fontSize: "24px", display: 'flex', alignSelf: 'center', width: "45px", height: "45px", left: "20px", marginBottom: '10px', borderRadius: "98px", minWidth: "0px", border: '1px solid black', backgroundColor: this.state.colorB }}
                    hidden={this.state.pallet_bool}
                    onClick={this.handlecolorB}
                    disabled={this.state.handlecolorB_ED}
                    className="backBtn"
                  >
                    B
                  </Button>
                  <Button style={{ marginTop: "12px", fontSize: "24px", display: 'flex', alignSelf: 'center', width: "45px", height: "45px", left: 30, marginBottom: '10px', borderRadius: "98px", minWidth: "0px", border: '1px solid', backgroundColor: this.state.colorC }}
                    hidden={this.state.pallet_bool}
                    onClick={this.handlecolorC}
                    disabled={this.state.handlecolorC_ED}
                    className="backBtn"
                  >
                    C
                  </Button>
                </div>

              </div>

            </Grid>
          </Grid>

          <Grid container xs={4} sm={4} md={4} lg={4} spacing={0} fontFamily='Roboto'
            sx={{ display: 'flex' }} style={{ marginBottom: '100px', marginTop: '5px', marginRight: '23px', marginLeft: "19px" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} width={widgetwidth} style={{ color: 'white', backgroundColor: '#f2f2f2' }}>
              <div sx={{ display: 'flex', maxHeight: '100vh', overflow: 'auto' }}>
                <Box sx={{ display: 'flex', maxHeight: '100vh', overflow: 'auto', width: '512px' }}>
                  <Grid container
                    style={{ display: 'flex', flexDirection: 'row', padding: 0, overflow: 'auto' }} >
                    <Grid item xs={12} className='Basic' >
                      <ExpansionPanel style={{ boxShadow: "none" }}
                        expanded={this.state.expanded === 'panel1'}
                        onChange={this.state.setCircularProgress == "hidden" ? this.handleChangepanel('panel1') : null}
                        onClick={this.state.setCircularProgress == "hidden" ? this.drawPallet_1_2 : null}>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          id="panel1-header"
                        >
                          <Typography>{t('BasicParameter')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Grid container style={{ display: 'flex', flexDirection: 'row', padding: 0 }} >
                            <Grid item xs={12} className='Basics' style={{ display: 'flex', flexDirection: 'row', padding: 0, marginBottom: "4px", backgroundColor: color1 }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('originPal1')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 85 }}
                                id="outlined-type"
                                disabled={this.state.enablefor2}
                                value={this.state.originPal1}
                                onChange={this.handleSelection("OriginPal1")}
                                onBlur={this.updateSelection}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {this.state.basic_parameter.map((value, index) => {
                                  return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                                {/* {this.state.casenames.map((value, index) => {
                            return <MenuItem value={value}>{value}</MenuItem>;
                          })} */}
                              </TextField>
                            </Grid>

                            <Grid item xs={12} className="Basics" style={{ display: 'flex', backgroundColor: color1, flexDirection: 'row', padding: 0, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('originPal2')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 85 }}
                                id="outlined-type"
                                disabled={this.state.enablefor1}
                                value={this.state.originPal2}

                                onChange={this.handleSelection("OriginPal2")}
                                onBlur={this.updateSelection}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {this.state.basic_parameter.map((value, index) => {
                                  return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                                {/* {this.state.casenames.map((value, index) => {
                            return <MenuItem value={value}>{value}</MenuItem>;
                          })} */}
                              </TextField>
                            </Grid>

                            <Grid item xs={12} className="Basics" style={{ display: 'flex', backgroundColor: color1, flexDirection: 'row', padding: 0, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('firstCasePal1')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 85 }}
                                id="outlined-type"
                                disabled={this.state.enablefor2}
                                value={this.state.firstcase_pal1}
                                onChange={this.handleSelection("Firstpal1")}
                                onBlur={this.updateSelection}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {this.state.basic_parameter.map((value, index) => {
                                  return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                              </TextField>
                            </Grid>


                            <Grid item xs={12} className="Basics" style={{ display: 'flex', backgroundColor: color1, flexDirection: 'row', padding: 0, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('firstCasePal2')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 85 }}
                                id="outlined-type"
                                disabled={this.state.enablefor1}
                                value={this.state.firstcase_pal2}

                                onChange={this.handleSelection("Firstpal2")}
                                onBlur={this.updateSelection}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {this.state.basic_parameter.map((value, index) => {
                                  return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                              </TextField>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              className="Basics"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1
                              }}
                            >
                              <div id="parent_div_1">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('workingArea1Width')}
                                </div>
                              </div>
                              <div id="parent_div_2">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('xDirection')}
                                </div>
                              </div>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  marginBottom: 8,
                                }}
                              >
                                <TextField
                                  style={{ border: "1px solid white !important", backgroundColor: "white", zIndex: "2", borderRadius: "4px" }}
                                  error={this.state.errorWorkingaraeaWidth}
                                  helperText={this.state.errorHelperForWorkingareaWidth}
                                  type="number"
                                  margin="dense"
                                  disabled={this.state.enablefor2}
                                  value={this.state.WA_1_width_X_Dir}
                                  onBlur={this.callBlueFor_WorkingareaX}
                                  onChange={this.handleSelection("working_area_1_Width_X_Direction")}
                                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                  // width="60"
                                  InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px" }
                                  }}
                                  InputProps={{
                                    style: { fontSize: "12px" }
                                  }}
                                  variant="outlined"
                                  size="small"
                                />
                              </div>
                              <div id="parent_div_3">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  mm{" "}
                                </div>
                              </div>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              className="Basics"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1
                              }}
                            >
                              <div id="parent_div_1">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('workingArea1Length')}
                                </div>
                              </div>
                              <div id="parent_div_2">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('yDirection')}
                                </div>
                              </div>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  marginBottom: 8,
                                }}
                              >
                                <TextField
                                  style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px" }}
                                  error={this.state.errorWorkingaraeaLength}
                                  helperText={this.state.errorHelperForWorkingareaLength}
                                  type="number"
                                  margin="dense"
                                  disabled={this.state.enablefor2}
                                  value={this.state.WA_1_Length_Y_Dir}
                                  onBlur={this.callBlurFor_WorkingareaY}
                                  onChange={this.handleSelection("working_area_1_Length_Y_Direction")}
                                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                  InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: 12 }
                                  }}
                                  InputProps={{
                                    style: { fontSize: 12 }
                                  }}
                                  width="60"
                                  variant="outlined"
                                  size="small"
                                />
                              </div>
                              <div id="parent_div_3">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  mm{" "}
                                </div>
                              </div>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              className="Basics"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1
                              }}
                            >
                              <div id="parent_div_1">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('workingArea1Offset')}
                                </div>
                              </div>
                              <div id="parent_div_2">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('xDirection')}
                                </div>
                              </div>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  marginBottom: 8,
                                }}
                              >
                                <TextField
                                  style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px" }}
                                  error={this.state.errorWorkingaraeaoffsetWidth}
                                  helperText={this.state.errorHelperForWorkingareaoffsetWidth}
                                  type="number"
                                  margin="dense"
                                  disabled={this.state.enablefor2}
                                  value={this.state.WA_1_Offset_X_Dir}
                                  onBlur={this.callBlurFor_WorkingareaoffsetX}
                                  onChange={this.handleSelection("working_area_1_Offset_X_Direction")}
                                  onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                  width="60"
                                  InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px" }
                                  }}
                                  InputProps={{
                                    style: { fontSize: "12px" }
                                  }}
                                  variant="outlined"
                                  size="small"
                                />
                              </div>
                              <div id="parent_div_3">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  mm{" "}
                                </div>
                              </div>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              className="Basics"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1
                              }}
                            >
                              <div id="parent_div_1">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('workingArea1Offset')}
                                </div>
                              </div>
                              <div id="parent_div_2">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('yDirection')}
                                </div>
                              </div>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  marginBottom: 8,
                                }}
                              >
                                <TextField
                                  style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px" }}
                                  error={this.state.errorWorkingaraeaoffsetLength}
                                  helperText={this.state.errorHelperForWorkingareaoffsetLength}
                                  type="number"
                                  margin="dense"
                                  disabled={this.state.enablefor2}
                                  value={this.state.WA_1_Offset_Y_Dir}
                                  onBlur={this.callBlurFor_WorkingareaoffsetY}
                                  onChange={this.handleSelection("working_area_1_Offset_Y_Direction")}
                                  onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                  width="60"
                                  InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px" }
                                  }}
                                  InputProps={{
                                    style: { fontSize: "12px" }
                                  }}
                                  variant="outlined"
                                  size="small"
                                />
                              </div>
                              <div id="parent_div_3">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: "12px" }}
                                >
                                  mm{" "}
                                </div>
                              </div>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              className="Basics"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1
                              }}
                            >
                              <div id="parent_div_1">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: "12px" }}
                                >
                                  {t('workingArea2Width')}
                                </div>
                              </div>
                              <div id="parent_div_2">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: "12px" }}
                                >
                                  {t('xDirection')}
                                </div>
                              </div>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  marginBottom: 8,
                                }}
                              >
                                <TextField
                                  style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px" }}
                                  error={this.state.errorWorkingaraeaWidthfor2}
                                  helperText={this.state.errorHelperForWorkingareaWidthfor2}
                                  type="number"
                                  margin="dense"
                                  disabled={this.state.enablefor1}
                                  value={this.state.WA_2_width_X_Dir}
                                  onChange={this.handleSelection("working_area_2_Width_X_Direction")}
                                  onBlur={this.callBlurFor_Workingareafor2X}
                                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                  width="60"
                                  InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px" }
                                  }}
                                  InputProps={{
                                    style: { fontSize: "12px" }
                                  }}
                                  variant="outlined"
                                  size="small"
                                />
                              </div>
                              <div id="parent_div_3">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  mm{" "}
                                </div>
                              </div>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              className="Basics"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1
                              }}
                            >
                              <div id="parent_div_1">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('workingArea2Length')}
                                </div>
                              </div>
                              <div id="parent_div_2">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('yDirection')}
                                </div>
                              </div>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  marginBottom: 8,
                                }}
                              >
                                <TextField
                                  style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px" }}
                                  error={this.state.errorWorkingaraeaLengthfor2}
                                  helperText={this.state.errorHelperForWorkingareaLengthfor2}
                                  type="number"
                                  margin="dense"
                                  disabled={this.state.enablefor1}

                                  value={this.state.WA_2_Length_Y_Dir}
                                  onChange={this.handleSelection("working_area_2_Length_Y_Direction")}
                                  onBlur={this.callBlurFor_Workingareafor2Y}
                                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                  width="60"
                                  InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px" }
                                  }}
                                  InputProps={{
                                    style: { fontSize: "12px" }
                                  }}
                                  variant="outlined"
                                  size="small"
                                />
                              </div>
                              <div id="parent_div_3">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  mm{" "}
                                </div>
                              </div>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              className="Basics"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1
                              }}
                            >
                              <div id="parent_div_1">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: "12px" }}
                                >
                                  {t('workingArea2Offset')}
                                </div>
                              </div>
                              <div id="parent_div_2">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: "12px" }}
                                >
                                  {t('xDirection')}
                                </div>
                              </div>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  marginBottom: 8,
                                }}
                              >
                                <TextField
                                  style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px" }}
                                  error={this.state.errorWorkingaraeaoffsetWidthfor2}
                                  helperText={this.state.errorHelperForWorkingareaoffsetWidthfor2}
                                  type="number"
                                  margin="dense"
                                  disabled={this.state.enablefor1}

                                  value={this.state.WA_2_Offset_X_Dir}
                                  onChange={this.handleSelection("working_area_2_Offset_X_Direction")}
                                  onBlur={this.callBlurFor_WorkingareaoffsetXfor2}
                                  onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                  width="60"
                                  InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: 12 }
                                  }}
                                  InputProps={{
                                    style: { fontSize: 12 }
                                  }}
                                  variant="outlined"
                                  size="small"
                                />
                              </div>
                              <div id="parent_div_3">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  mm{" "}
                                </div>
                              </div>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              className="Basics"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1
                              }}
                            >
                              <div id="parent_div_1">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('workingArea2Offset')}
                                </div>
                              </div>
                              <div id="parent_div_2">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  {t('yDirection')}
                                </div>
                              </div>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  marginBottom: 8,
                                }}
                              >
                                <TextField
                                  style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px" }}
                                  error={this.state.errorWorkingaraeaoffsetLengthfor2}
                                  helperText={this.state.errorHelperForWorkingareaoffsetLengthfor2}
                                  type="number"
                                  margin="dense"
                                  disabled={this.state.enablefor1}

                                  value={this.state.WA_2_Offset_Y_Dir}
                                  onChange={this.handleSelection("working_area_2_Offset_Y_Direction")}
                                  onBlur={this.callBlurFor_WorkingareaoffsetYfor2}
                                  onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                  width="60"
                                  InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: "12px" }
                                  }}
                                  InputProps={{
                                    style: { fontSize: "12px" }
                                  }}
                                  variant="outlined"
                                  size="small"
                                />
                              </div>
                              <div id="parent_div_3">
                                <div
                                  class="child_div_1"
                                  style={{ fontSize: 12 }}
                                >
                                  mm{" "}
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "7px", }} className="Basic">
                      <ExpansionPanel style={{ boxShadow: "none" }}
                        expanded={this.state.expanded === 'panel2'}
                        onChange={this.state.setCircularProgress == "hidden" ? this.handleChangepanel('panel2') : null}
                        onClick={this.state.setCircularProgress == "hidden" ? this.drawPallet_1_2 : null}>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          id="panel1-header"
                        >
                          <Typography>{t('designParameter')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Grid container style={{ display: 'flex', flexDirection: 'row', padding: 0 }} >
                            <Grid item xs={12} className="Basic" style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('palletType')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38, }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="large"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 90 }}
                                id="outlined-type"
                                value={this.state.pallete_Type}

                                onChange={this.handleSelection_PalletType("palletType")}
                                onBlur={this.updateSelection}
                                select

                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {this.typeoptions1.map((value, index) => {
                                  return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                                {/* {this.state.casenames.map((value, index) => {
                            return <MenuItem value={value}>{value}</MenuItem>;
                          })} */}
                              </TextField>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('intermediateLayerType')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 90 }}
                                id="outlined-type"

                                value={this.state.intermediate_Layer_Type}
                                onChange={this.handleSelection_PalletType("intermediateLayerType")}
                                onBlur={this.updateSelection}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {this.typeoptions11.map((value, index) => {
                                  return (
                                    <MenuItem value={value}>{value}</MenuItem>
                                  );
                                })}
                                {/* {this.state.casenames.map((value, index) => {
                            return <MenuItem value={value}>{value}</MenuItem>;
                          })} */}
                              </TextField>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('caseType')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />

                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 90 }}
                                id="outlined-type"
                                // value={this.state.setDefaultCase}
                                value={this.state.case_Type}
                                onBlur={this.updateSelection}
                                onChange={(event) => this.handleSelection_CaseType("caseType")(event)}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {this.typeoptions3.map((value, index) => {
                                  return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                                {/* {this.state.casenames.map((value, index) => {
                            return <MenuItem value={value}>{value}</MenuItem>;
                          })} */}
                              </TextField>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberOfLayers')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 90 }}
                                error={this.state.errorNumberOfLayer}
                                helperText={this.state.errorHelperForLayer}
                                id="outlined-zdim"
                                // label="Height"
                                value={this.state.no_Of_Layers}
                                onChange={this.changeLayer}
                                // onBlur={this.updateSelection}
                                onBlur={this.onchangeLayerBlur}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                              />
                              {/* <TextField
                                id="outlined-read-only-input"
                                label=""
                                // defaultValue="mm"
                                // className={classes.textField1}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  maxLength: 2,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              /> */}

                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('Number cases Schema A')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 90 }}
                                id="outlined-zdim"
                                // label="Height"
                                value={this.state.cases_Schema_A}
                                onChange={this.handleChangeForCasesSchemaA("CasesSchemaA")}
                                onBlur={this.updateSelectionSchemaA}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                // value={this.state.setDefaultCase}
                                // onBlur={this.callBlur}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px", }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px", }
                                }}
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                              />
                              {/* <TextField
                                id="outlined-read-only-input"
                                label=""
                                // defaultValue="mm"
                                // className={classes.textField1}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  maxLength: 2,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              /> */}

                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('Number cases Schema B')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 90 }}
                                id="outlined-zdim"
                                // label="Height"
                                value={this.state.cases_Schema_B}
                                //disabled={true}
                                onChange={this.handleChangeForCasesSchemaB("CasesSchemaB")}
                                onBlur={this.updateSelectionSchemaB}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                // onBlur={this.callBlur}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                              />
                              {/* <TextField
                                id="outlined-read-only-input"
                                label=""
                                // defaultValue="mm"
                                // className={classes.textField1}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  maxLength: 2,
                                  disableUnderline: true,
                                  style: { fontSize: "12px", padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              /> */}

                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('Number cases Schema C')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 90 }}
                                id="outlined-zdim"
                                // label="Height"
                                value={this.state.cases_Schema_C}
                                onChange={this.handleChangeForCasesSchemaC("CasesSchemaC")}
                                onBlur={this.updateSelectionSchemaC}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                //disabled={true}
                                // onBlur={this.callBlur}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: 12 }
                                }}
                                InputProps={{
                                  style: { fontSize: 12 }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small"
                              />
                              {/* <TextField
                                id="outlined-read-only-input"
                                label=""
                                // defaultValue="mm"
                                // className={classes.textField1}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  maxLength: 2,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              /> */}

                            </Grid>
                          </Grid>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Grid>

                    <Grid item xs={12} className="Basic" style={{ marginTop: "7px" }} >
                      <ExpansionPanel style={{ boxShadow: "none" }}
                        expanded={this.state.expanded === 'panel3'}
                        onChange={this.state.setCircularProgress == "hidden" ? this.handleChangepanel('panel3') : null}
                      // onClick={this.callSchema}
                      >
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          id="panel1-header"
                        >
                          <Typography>{t('patternWizard')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Grid container style={{ display: 'flex', flexDirection: 'row', padding: 0 }} >
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('outsideLabelPriority')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38, width: "200px" }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 80 }}
                                id="outlined-type"

                                value={this.state.outside_Label_Priority}
                                // value={this.state.selectcase}
                                onChange={this.handleSelection("outsideLabelPriority")}
                                onBlur={this.updateSelection}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px" }
                                }}
                                margin="dense"
                                //  style={{ height: 38,marginLeft:50 }}
                                variant="outlined"
                                size="small">
                                {this.listForOutsideLabelPrior.map((value, index) => {
                                  return <MenuItem onClick={(e) => this.tempLabelindex = index} value={value}>{value}</MenuItem>;
                                })}
                                {/* {this.state.casenames.map((value, index) => {
                            return <MenuItem value={value}>{value}</MenuItem>;
                          })} */}
                              </TextField>
                            </Grid>

                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('Rule - Horizontal Symmetric Mass Distribution')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38, width: 300 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <Checkbox
                                className="checkbox"
                                disabled={this.state.HWeightedSymmetric}
                                style={{ marginLeft: "100px" }}
                                sx={{
                                  color: "grey",
                                  '&.Mui-checked': {
                                    color: "rgb(0,125,129)",
                                  },
                                }}
                                onChange={this.handleSelection("HWeighted")}
                                checked={this.state.HWeighted}
                                onBlur={this.updateSelection}
                              />
                            </Grid>

                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('Rule - Vertical Symmetric Mass Distribution')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38, width: 300 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <Checkbox
                                className="checkbox"
                                disabled={this.state.VWeightedSymmetric}
                                style={{ marginLeft: "100px" }}
                                sx={{
                                  color: "grey",
                                  '&.Mui-checked': {
                                    color: "rgb(0,125,129)",
                                  },
                                }}
                                onChange={this.handleSelection("VWeighted")}
                                checked={this.state.VWeighted}
                                onBlur={this.updateSelection}
                              />
                            </Grid>

                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('schemaA')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 120, marginTop: "6px" }}
                                id="outlined-read-only-input"
                                defaultValue=""
                                value={this.state.setVariantName_SchemaA}
                                // onChange = {this.handleCarouselUpdate}
                                onBlur={this.updateSelection}
                                // disabled="true"
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12Px", marginLeft: "45px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12px", marginLeft: "45px" },
                                  disableUnderline: true
                                }}
                                margin="dense"
                                //  style={{ height: 38 ,marginLeft:150}}
                                variant="outlined"
                                size="small"
                              />


                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('schemaB')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 120, marginTop: "6px" }}
                                id="outlined-read-only-input"
                                defaultValue=""
                                value={this.state.setVariantName_SchemaB}
                                // onChange = {this.handleCarouselUpdate}
                                onBlur={this.updateSelection}
                                // disabled="true"
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12Px", marginLeft: "45px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12Px", marginLeft: "45px" },
                                  disableUnderline: true
                                }}
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:150}}
                                variant="outlined"
                                size="small"
                              />



                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('schemaC')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 120, marginTop: "6px" }}
                                id="outlined-read-only-input"
                                defaultValue=""
                                value={this.state.setVariantName_SchemaC}
                                // onChange = {this.handleCarouselUpdate}
                                onBlur={this.updateSelection}
                                // disabled="true"
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: "12Px", marginLeft: "45px" }
                                }}
                                InputProps={{
                                  style: { fontSize: "12Px", marginLeft: "45px" },
                                  disableUnderline: true
                                }}
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:150}}
                                variant="outlined"
                                size="small"
                              />



                            </Grid>
                          </Grid>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Grid>

                    <Grid item xs={12} className="Basic" style={{ marginTop: "7px" }} >
                      <ExpansionPanel style={{ boxShadow: "none" }}
                        expanded={this.state.expanded === 'panel4'}
                        onChange={this.state.setCircularProgress == "hidden" ? this.handleChangepanel('panel4') : null}
                        onClick={this.state.setCircularProgress == "hidden" ? this.drawPallet_1_2 : null}>

                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          id="panel1-header"
                        >
                          <Typography>{t('layerCreator')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Grid
                            container
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              padding: 0,
                            }}
                          >
                            <Grid
                              item
                              xs={12}
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,

                                marginBottom: "4px",
                                backgroundColor: color1,
                              }}
                            >
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('intermediateLayer')}
                                // className={classes.textField}
                                margin="dense"
                                style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 },
                                }}
                                variant="standard"
                                size="small"
                              />
                              <Checkbox
                                className="checkbox"
                                style={{ marginLeft: "220px" }}
                                {...label}
                                checked={this.state.int_Layer}
                                onChange={this.handleSelection("intermediate_Layer")}
                                onBlur={this.updateSelection}
                              />
                            </Grid>
                            {/* {[...Array(this.state.layer_data.length)].map( */}
                            {[...Array(this.state.layer_data.length)].map(
                              (value, index) => {
                                console.log(
                                  "array1" + this.state.layer_data.length
                                );
                                return (
                                  <>

                                    <Grid
                                      item
                                      xs={12}
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: 0,

                                        marginBottom: "4px",
                                        backgroundColor: color1,
                                      }}
                                    >


                                      <TextField
                                        id="outlined-read-only-input"
                                        label=""
                                        value={t('layer') + " " + (index + 1)}
                                        // className={classes.textField}
                                        margin="dense"
                                        style={{ height: 38 }}
                                        InputProps={{
                                          readOnly: true,
                                          disableUnderline: true,
                                          style: { fontSize: 12, padding: 10 },
                                        }}
                                        variant="standard"
                                        size="small"
                                      />
                                      <TextField
                                        style={{ border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", marginLeft: 100 }}
                                        id="outlined-type"
                                        value={obj[index].layername}
                                        onChange={this.handleSelectionLayerPallet({ name: "layername", value: index + 1 })}
                                        onBlur={this.layerGrid}
                                        select
                                        // className={classes.textField3}
                                        InputLabelProps={{
                                          shrink: true,
                                          style: { fontSize: "12px" },
                                        }}
                                        InputProps={{
                                          style: { fontSize: "12px" },
                                        }}
                                        margin="dense"
                                        // style={{ height: 38 ,marginLeft:110}}
                                        variant="outlined"
                                        size="small"
                                      >
                                        {this.typeoptions6.map(
                                          (value, index) => {
                                            return (
                                              <MenuItem value={value}>
                                                {value}
                                              </MenuItem>
                                            );
                                          }
                                        )}
                                      </TextField>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: 0,

                                        marginBottom: "4px",
                                        backgroundColor: color1,
                                      }}
                                    >
                                      <TextField
                                        id="outlined-read-only-input"
                                        label=""
                                        defaultValue={t('intermediateLayer')}
                                        // className={classes.textField}
                                        margin="dense"
                                        style={{ height: 38 }}
                                        InputProps={{
                                          readOnly: true,
                                          disableUnderline: true,
                                          style: { fontSize: 12, padding: 10 },
                                        }}
                                        variant="standard"
                                        size="small"
                                      />
                                      <Checkbox
                                        className="checkbox"
                                        // style={{ marginLeft: "124px" }}
                                        // {...label}
                                        style={{ marginLeft: "220px" }}
                                        {...label}
                                        checked={obj[index].intermediatelayer}
                                        onChange={this.handleSelectionIntLayer({ name: "intermediatelayer", value: index + 1 })}
                                        onBlur={this.layerGrid}
                                      />
                                    </Grid>
                                  </>
                                );
                              }
                            )}

                          </Grid>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Grid>

                    <Grid item xs={12} className='Basic' style={{ marginTop: "7px" }} >
                      <ExpansionPanel style={{ boxShadow: "none" }}
                        expanded={this.state.expanded === 'panel5'}
                        onChange={this.state.setCircularProgress == "hidden" ? this.handleChangepanel('panel5') : null}
                      // onClick={this.callSchema1}
                      >
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          id="panel1-header"
                        >
                          <Typography>{t('programRoutineCreator')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Grid container style={{ display: 'flex', flexDirection: 'row', padding: 0 }} >
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('prePos')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('xAxis')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", left: "40px", borderRadius: "4px", width: 200 }}
                                id="outlined-xdim"
                                type="number"
                                error={this.state.errorPreposx}
                                helperText={this.state.errorhelpertextForPreposx}
                                value={this.state.selectedOne ? this.state.setnumberx : this.state.setnumberx2}
                                onChange={this.onvaluechangepreposX(this.state.selectedOne ? "setnumberx" : "setnumberx2")}
                                // onBlur={this.callBlurForPreposX}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                onBlur={this.savePrc}

                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: 12 }
                                }}
                                InputProps={{
                                  style: { fontSize: 12 }
                                }}
                                margin="dense"
                                // style={{ height: 38 }}
                                variant="outlined"
                                size="small"
                              />
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue="mm"
                                // className={classes.textField1}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  maxLength: 2,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10, marginLeft: "50px" }
                                }}
                                variant="standard"
                                size="small"
                              />
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('prePos')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('yAxis')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", left: "40px", borderRadius: "4px", width: 200 }}
                                id="outlined-ydim"
                                type="number"
                                error={this.state.errorPreposy}
                                helperText={this.state.errorhelpertextForPreposy}
                                value={this.state.selectedOne ? this.state.setnumbery : this.state.setnumbery2}
                                onChange={this.onvaluechangepreposY(this.state.selectedOne ? "setnumbery" : "setnumbery2")}
                                // onBlur={this.callBlurForPreposY}
                                onBlur={this.savePrc}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: 12 }
                                }}
                                InputProps={{
                                  style: { fontSize: 12 }
                                }}
                                margin="dense"
                                //  style={{ height: 38}}
                                variant="outlined"
                                size="small"
                              />
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue="mm"
                                // className={classes.textField1}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  maxLength: 2,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10, marginLeft: "50px" }
                                }}
                                variant="standard"
                                size="small"
                              />
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('prePos')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('zAxis')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />
                              <TextField
                                style={{ border: "1px solid white !important", marginTop: "8px", backgroundColor: "white", borderRadius: "4px", width: 200, left: "40px" }}
                                id="outlined-zdim"
                                error={this.state.errorPreposz}
                                helperText={this.state.errorhelpertextForPreposz}
                                value={this.state.selectedOne ? this.state.setnumberz : this.state.setnumberz2}
                                onChange={this.onvaluechangepreposZ(this.state.selectedOne ? "setnumberz" : "setnumberz2")}
                                // onBlur={this.callBlurForPreposZ}
                                onBlur={this.savePrc}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                  shrink: true,
                                  style: { fontSize: 12 }
                                }}
                                InputProps={{
                                  style: { fontSize: 12 }
                                }}
                                // style={{ height: 38}}
                                variant="outlined"
                                size="small"
                              />
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue="mm"
                                // className={classes.textField1}
                                margin="dense" style={{ height: 38 }}
                                InputProps={{
                                  readOnly: true,
                                  maxLength: 2,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10, marginLeft: "50px" }
                                }}
                                variant="standard"
                                size="small"
                              />
                            </Grid>

                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: "#f5f5f5", marginBottom: "4px" }}>
                              <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('autoGenerateCasePosition')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 38, width: "195px" }}
                                InputProps={{
                                  readOnly: true,
                                  disableUnderline: true,
                                  style: { fontSize: 12, padding: 10 }
                                }}
                                variant="standard"
                                size="small"
                              />

                              <FormControl>

                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue=""
                                  name="radio-buttons-group"
                                  onClick={this.handleAutoGeneratePrepos({ name: "auto_generation" })}
                                  onBlur={this.savePrc}

                                >
                                  <FormControlLabel value="female" style={{ marginLeft: "210px" }} control={<Radio />} />

                                </RadioGroup>
                              </FormControl>
                            </Grid>

                            {this.state.case_data.length > 0 && [...Array(this.state.colorA == "#5eb8b3" ? noofcaseA : this.state.colorB == "#5eb8b3" ? noofcaseB : noofcaseC)].map(

                              (value, index) => {

                                return (
                                  <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column', padding: 8, backgroundColor: "#f5f5f5", marginBottom: "4px" }}>
                                    <>
                                      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: "#f5f5f5" }}>
                                        <TextField
                                          id="Case"
                                          label="" // handleSelection
                                          value={t('case') + " " + (index + 1)}
                                          margin="dense" style={{ height: 38 }}
                                          InputProps={{
                                            readOnly: true,
                                            disableUnderline: true,
                                            style: { fontSize: 12, color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }
                                          }}
                                          variant="standard"
                                          size="small"
                                        />
                                        <TextField
                                          id="outlined-read-only-input"
                                          label=""
                                          // defaultValue="Pre Pos X:" 
                                          // className={classes.textField}
                                          margin="dense" style={{ height: 38 }}
                                          InputProps={{
                                            readOnly: true,
                                            disableUnderline: true,
                                            defaultValue: t('offset') + ": X neg",
                                            style: { fontSize: 12, padding: 5, marginLeft: "-18px", color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }
                                          }}
                                          variant="standard"
                                          size="small"
                                        />
                                        <Checkbox style={{ marginLeft: "-49px", marginTop: "-5px" }} {...label}
                                          name="offsetXneg"
                                          disabled={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? true : this.state.case_data[index]?.position_freezed}
                                          onClick={(e) => this.OffsetChangePrc(index, this.state.case_data[index]?.offset_X_neg, e)}

                                          checked={this.state.case_data[index]?.offset_X_neg}
                                          onBlur={this.savePrc}
                                        />
                                        <TextField
                                          id="outlined-read-only-input"
                                          label=""

                                          margin="dense" style={{ height: 38 }}
                                          InputProps={{
                                            readOnly: true,
                                            disableUnderline: true,
                                            defaultValue: " Y neg",
                                            style: { fontSize: 12, padding: 5, marginLeft: "-5px", color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }
                                          }}
                                          variant="standard"
                                          size="small"
                                        />

                                        {console.log("checked index " + index + " this.state.case_data[index] " + this.casedata[index])}

                                        <Checkbox style={{ marginLeft: "-74px", marginTop: "-5px" }}{...label}
                                          name="offsetYneg"
                                          disabled={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? true : this.state.case_data[index]?.position_freezed}

                                          onClick={(e) => this.OffsetChangePrc(index, this.state.case_data[index]?.offset_Y_neg, e)}
                                          checked={this.state.case_data[index]?.offset_Y_neg}
                                          onBlur={this.savePrc}

                                        />
                                        <TextField
                                          style={{ border: "1px solid white !important", height: "20px", marginTop: "12px", backgroundColor: "white", borderRadius: "4px" }}
                                          id="outlined-type"
                                          value={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.position}
                                          name="position"
                                          onChange={(e) => this.OffsetChangePrc(index, this.state.case_data[index]?.position, e)}
                                          onBlur={this.savePrc}
                                          select
                                          disabled={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? true : this.state.case_data[index]?.position_freezed}
                                          InputLabelProps={{
                                            shrink: true,
                                            style: { fontSize: "12px", marginTop: "-7px" }
                                          }}
                                          InputProps={{
                                            style: { fontSize: "12px", marginTop: "-7px" }
                                          }}
                                          margin="dense"
                                          // style={{ height: "38px" }}
                                          variant="outlined"
                                          size="small">

                                          {index + 1 <= this.state.CasesXYfotGreenRectPRC.length && this.state.case_data.length > 0 && this.state.CasesXYfotGreenRectPRC.map((value, index1) => {
                                            return <MenuItem value={`Nr ${index1 + 1}`}>{`Nr ${index1 + 1}`}</MenuItem>;
                                          })}

                                        </TextField>

                                        <Checkbox
                                          className='checkbox'
                                          name="position_freezed"
                                          disabled={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? true : false}
                                          checked={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? false : this.state.case_data[index]?.position_freezed}
                                          onBlur={this.savePrc}
                                          onClick={(e) => this.OffsetChangePrc(index, this.state.case_data[index]?.position_freezed, e)}

                                          style={{ marginTop: "-5px" }} {...label} />
                                      </div>

                                      <div style={{ display: 'flex', flexDirection: 'row', padding: "1px", backgroundColor: "#f5f5f5", marginBottom: "1px" }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', padding: "1px", marginBottom: "1px" }}>
                                          {/* <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid grey", height: "40px" }}> */}
                                          <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", height: "40px" }}>
                                            <div style={{ fontSize: "12px", marginTop: "19px", marginLeft: "3px", marginTop: "10px", color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>{t('prePos')}X:</div>
                                            <TextField
                                              id="outlined-read-only-input"
                                              label=""
                                              defaultValue=""
                                              disabled={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? true : this.state.case_data[index]?.position_freezed}
                                              value={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_X}
                                              onChange={(e) => this.handleValueChangePrepos({ name: "pre_Pos_X", value: index + 1 }, e)}
                                              onBlur={this.savePrc}

                                              margin="dense" style={{ height: "33px", width: "48px", marginLeft: "12px", marginTop: "9px" }}
                                              InputProps={{
                                                readOnly: false,
                                                disableUnderline: true,
                                                style: { fontSize: "12px" }
                                              }}
                                              variant="standard"
                                              size="small"
                                            />
                                            <div className='unit' style={{ fontSize: "12px", marginTop: "5px", padding: "6px", marginLeft: "-14px", color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>mm</div>
                                          </div>

                                          {/* <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid grey", height: "40px", marginLeft: "12px", }}> */}
                                          <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", height: "40px", marginLeft: "12px", }}>
                                            <div style={{ fontSize: "12px", marginTop: "19px", marginLeft: "3px", marginTop: "10px", color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>{t('prePos')}Y:</div>
                                            <TextField
                                              id="outlined-read-only-input"
                                              label=""
                                              defaultValue=""
                                              value={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_Y}
                                              onChange={(e) => this.handleValueChangePrepos({ name: "pre_Pos_Y", value: index + 1 }, e)}
                                              onBlur={this.savePrc}
                                              disabled={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? true : this.state.case_data[index]?.position_freezed}

                                              margin="dense" style={{ height: "33px", width: "48px", marginLeft: "12px", marginTop: "9px" }}
                                              InputProps={{
                                                readOnly: false,
                                                disableUnderline: true,
                                                style: { fontSize: "12px" }
                                              }}
                                              variant="standard"
                                              size="small"
                                            />
                                            <div className='unit' style={{ fontSize: "12px", marginTop: "5px", padding: "6px", marginLeft: "-14px", color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>mm</div>
                                          </div>

                                          {/* <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid grey", boxSizing: "border-box", marginLeft: "12px", height: "40px", }}> */}
                                          <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid white !important", backgroundColor: "white", borderRadius: "4px", boxSizing: "border-box", marginLeft: "12px", height: "40px", }}>
                                            <div style={{ fontSize: "12px", marginTop: "19px", marginLeft: "3px", marginTop: "10px", color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>{t('prePos')}Z:</div>
                                            <TextField
                                              id="outlined-read-only-input"
                                              label=""
                                              defaultValue=""
                                              value={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_Z}
                                              onChange={(e) => this.handleValueChangePrepos({ name: "pre_Pos_Z", value: index + 1 }, e)}
                                              onBlur={this.savePrc}
                                              disabled={index + 1 > this.state.CasesXYfotGreenRectPRC.length ? true : this.state.case_data[index]?.position_freezed}

                                              margin="dense" style={{ height: "33px", width: "48px", marginLeft: "12px", marginTop: "9px" }}
                                              InputProps={{
                                                readOnly: false,
                                                disableUnderline: true,
                                                style: { fontSize: "12px" }
                                              }}
                                              variant="standard"
                                              size="small"
                                            />
                                            <div className='unit' style={{ fontSize: "12px", marginTop: "5px", padding: "6px", marginLeft: "-14px", color: index + 1 > this.state.CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>mm</div>
                                          </div>
                                        </div>
                                      </div>
                                    </>

                                  </Grid>
                                );

                              }
                            )}
                          </Grid>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Grid>


                  </Grid>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

PaletteDesignerPage.propTypes = {

};

export default withTranslation()(PaletteDesignerPage);