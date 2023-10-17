import react, { Component, useEffect, useState, Fragment } from "react";
import React from 'react';
import {
  BoxGeometry,
  Mesh,
  MeshPhysicalMaterial,
  SpotLight,
  PlaneGeometry,
  DirectionalLight
} from "three";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import PropTypes from "prop-types";
import gsap from "gsap";
import axios from 'axios';
import DatGui, {
  DatBoolean,
  DatButton,
  DatColor,
  DatFolder,
  DatNumber,
  DatPresets,
  DatSelect,
  DatString
} from "@tim-soft/react-dat-gui";
import { GUI } from 'dat.gui'
import './FormUser1.css'
// import Stats from "./Stats";
import Button from "@material-ui/core/Button";
import ForwardIcon from "@material-ui/icons/DoubleArrow";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
// import ZIcon from '@mui/icons-material/Rotate90DegreesCcw';
// import XIcon from '@mui/icons-material/ThreeSixty';
// import YIcon from '@mui/icons-material/Rotate90DegreesCw';
import { withRouter } from 'react-router-dom';
import { ContactsOutlined } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { CenterFocusStrongOutlined } from "@mui/icons-material";
import { Select, MenuItem } from "@material-ui/core";
import { RadioGroup, Radio } from "@material-ui/core";
import { fontSize } from "@mui/system";
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import arrowImage from './plan.png';
import Red_arrow from './Red_arrow.png';
import Green_arrow from './Green_arrow.png';
import Blue_arrow from './Blue_arrow.png';
import orange from './orange.png';
import purple from './purple.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import brown from './plane.png';
// import Texture from './texture.png';
import Texture1 from './texture1.png';
import Texture2 from './texture2.png';
import Texture3 from './texture3.png';
import Texture4 from './texture4.png';
import DarkTexture1 from './DarkTexture1.png';
import DarkTexture2 from './DarkTexture2.png';
import DarkTexture3 from './DarkTexture3.png';
import DarkTexture4 from './DarkTexture4.png';

import SpriteText from 'three-spritetext';
import { toast, ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { ChromePicker, SketchPicker, TwitterPicker, PhotoshopPicker, CirclePicker, GithubPicker } from "react-color";
import { green, grey, red } from "@material-ui/core/colors";
import { Text } from "troika-three-text";
import { withTranslation, Trans } from "react-i18next";
import Rotate_blue from "./Rotate_blue.svg";
import Rotate_red from "./Rotate_red.svg";
import Rotate_green from "./Rotate_green.svg";
import Box1 from "./Box1.svg";
import { FontLoader } from "three";
import { TextGeometry } from "three";
import textfont from "./Roboto Black_Regular.json"
import CaseData from './Views/formUser1UIStyles/CaseData';
import LabelWizard from './Views/formUser1UIStyles/LabelWizard';
// import Summary from './Views/formUser1UIStyles/Summary';

import { ParentGridstyle, GridContainerStyle, containerGriddStyle, containerMarginStyle, DivPFMarginStyle, buttonStyle, } from './UICommonStyles_Formuser'


toast.configure()
var color1 = "#f5f5f5";
var color2 = "#E8E7DE";
const styles = theme => ({
  root: {
    width: 19,
    height: 19,
    paddingTop: 0,
    paddingBottom: 0,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    marginTop: 50,
    marginLeft: 0,
    margin: "auto",
    border: "1px dashed"
  },
  textField: {
    marginLeft: 2,
    marginRight: 2,
    fontSize: 12
  },
  textField1: {
    marginLeft: 2,
    marginRight: 2,
    width: 60,
    fontSize: 12
  },
  textField2: {
    marginLeft: 2,
    marginRight: 2,
    width: 100,
    fontSize: 12
  },
  textField3: {
    marginLeft: 2,
    marginRight: 2,
    width: 120,
    fontSize: 12
  },
  radioLabel: {
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 60,
    fontSize: 12
  },
  dense: {
    marginTop: 16
  },
  scrollable: {
    maxHeight: '100vh',
    overflow: "auto"
  },
  menu: {
    width: 200
  },
  /* STYLES FOR THE OUTLINE BORDER */
  specialOutline: {
    borderColor: "pink",
    borderWidth: 4
  }
});

const threedwidth = 791;
const threedheight = 372;
const widgetwidth = 526;
const paddingadjust = 0;
//the following variable can not be removed
var camera = new THREE.PerspectiveCamera(45, threedwidth / threedheight, 0.1, 1000);
// var camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);

const drawerWidth = 240;
var format = /[!@$%^&*()+\=\[\]{};':"\\~`|,.<>\/?]+/;
var numberStart = /^\d/;
var alphaStart = /^[a-zA-Z]*$/;
var speacialStart = /^[a-zA-Z0-9]*$/;
var onlyNumber = /^[0-9]{1,3}$/;
const exceptThisSymbols = ["e", "E", "+", "-", "."];
const exceptSymbols = ["e", "E", "+", "-"];


const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

const rotationLibrary = [
  { x: 0, y: 0, z: 0, Top: 1, Front: 2, Right: 3 },
  { x: 0, y: 0, z: 1, Top: 4, Front: 2, Right: 1 },
  { x: 0, y: 0, z: 2, Top: 6, Front: 2, Right: 4 },
  { x: 0, y: 0, z: 3, Top: 3, Front: 2, Right: 6 },
  { x: 0, y: 1, z: 0, Top: 1, Front: 3, Right: 5 },
  { x: 0, y: 1, z: 1, Top: 4, Front: 1, Right: 5 },
  { x: 0, y: 1, z: 2, Top: 6, Front: 4, Right: 5 },
  { x: 0, y: 1, z: 3, Top: 3, Front: 6, Right: 5 },
  { x: 0, y: 2, z: 0, Top: 1, Front: 5, Right: 4 },
  { x: 0, y: 2, z: 1, Top: 4, Front: 5, Right: 6 },
  { x: 0, y: 2, z: 2, Top: 6, Front: 5, Right: 3 },
  { x: 0, y: 2, z: 3, Top: 3, Front: 5, Right: 1 },
  { x: 0, y: 3, z: 0, Top: 1, Front: 4, Right: 2 },
  { x: 0, y: 3, z: 1, Top: 4, Front: 6, Right: 2 },
  { x: 0, y: 3, z: 2, Top: 6, Front: 3, Right: 2 },
  { x: 0, y: 3, z: 3, Top: 3, Front: 1, Right: 2 },
  { x: 1, y: 0, z: 0, Top: 5, Front: 1, Right: 3 },
  { x: 1, y: 0, z: 1, Top: 5, Front: 4, Right: 1 },
  { x: 1, y: 0, z: 2, Top: 5, Front: 6, Right: 4 },
  { x: 1, y: 0, z: 3, Top: 5, Front: 3, Right: 6 },
  { x: 1, y: 1, z: 0, Top: 4, Front: 1, Right: 5 },
  { x: 1, y: 1, z: 1, Top: 6, Front: 4, Right: 5 },
  { x: 1, y: 1, z: 2, Top: 3, Front: 6, Right: 5 },
  { x: 1, y: 1, z: 3, Top: 1, Front: 3, Right: 5 },
  { x: 1, y: 2, z: 0, Top: 2, Front: 1, Right: 4 },
  { x: 1, y: 2, z: 1, Top: 2, Front: 4, Right: 6 },
  { x: 1, y: 2, z: 2, Top: 2, Front: 6, Right: 3 },
  { x: 1, y: 2, z: 3, Top: 2, Front: 3, Right: 1 },
  { x: 1, y: 3, z: 0, Top: 3, Front: 1, Right: 2 },
  { x: 1, y: 3, z: 1, Top: 1, Front: 4, Right: 2 },
  { x: 1, y: 3, z: 2, Top: 4, Front: 6, Right: 2 },
  { x: 1, y: 3, z: 3, Top: 6, Front: 3, Right: 2 },
  { x: 2, y: 0, z: 0, Top: 6, Front: 5, Right: 3 },
  { x: 2, y: 0, z: 1, Top: 3, Front: 5, Right: 1 },
  { x: 2, y: 0, z: 2, Top: 1, Front: 5, Right: 4 },
  { x: 2, y: 0, z: 3, Top: 4, Front: 5, Right: 6 },
  { x: 2, y: 1, z: 0, Top: 6, Front: 4, Right: 5 },
  { x: 2, y: 1, z: 1, Top: 3, Front: 6, Right: 5 },
  { x: 2, y: 1, z: 2, Top: 1, Front: 3, Right: 5 },
  { x: 2, y: 1, z: 3, Top: 4, Front: 1, Right: 5 },
  { x: 2, y: 2, z: 0, Top: 6, Front: 2, Right: 4 },
  { x: 2, y: 2, z: 1, Top: 3, Front: 2, Right: 6 },
  { x: 2, y: 2, z: 2, Top: 1, Front: 2, Right: 3 },
  { x: 2, y: 2, z: 3, Top: 4, Front: 2, Right: 1 },
  { x: 2, y: 3, z: 0, Top: 6, Front: 3, Right: 2 },
  { x: 2, y: 3, z: 1, Top: 3, Front: 1, Right: 2 },
  { x: 2, y: 3, z: 2, Top: 1, Front: 4, Right: 2 },
  { x: 2, y: 3, z: 3, Top: 4, Front: 6, Right: 2 },
  { x: 3, y: 0, z: 0, Top: 2, Front: 6, Right: 3 },
  { x: 3, y: 0, z: 1, Top: 2, Front: 3, Right: 1 },
  { x: 3, y: 0, z: 2, Top: 2, Front: 1, Right: 4 },
  { x: 3, y: 0, z: 3, Top: 2, Front: 4, Right: 6 },
  { x: 3, y: 1, z: 0, Top: 3, Front: 6, Right: 5 },
  { x: 3, y: 1, z: 1, Top: 1, Front: 3, Right: 5 },
  { x: 3, y: 1, z: 2, Top: 4, Front: 1, Right: 5 },
  { x: 3, y: 1, z: 3, Top: 6, Front: 4, Right: 5 },
  { x: 3, y: 2, z: 0, Top: 5, Front: 6, Right: 4 },
  { x: 3, y: 2, z: 1, Top: 5, Front: 3, Right: 6 },
  { x: 3, y: 2, z: 2, Top: 5, Front: 1, Right: 3 },
  { x: 3, y: 2, z: 3, Top: 5, Front: 4, Right: 1 },
  { x: 3, y: 3, z: 0, Top: 4, Front: 6, Right: 2 },
  { x: 3, y: 3, z: 1, Top: 6, Front: 3, Right: 2 },
  { x: 3, y: 3, z: 2, Top: 3, Front: 1, Right: 2 },
  { x: 3, y: 3, z: 3, Top: 1, Front: 4, Right: 2 }
];

let ctxArr = [];
let intersected;

const faceMap = [2, 4, 1, 0, 5, 3];

// const pickerStyles = {
//   default: {
//     picker: {
//       position: "",
//       buttom: "10px",
//       left: "500px"
//     }
//   }
// };


class FormUserPage1 extends Component {
  constructor(props) {
    super(props);
    const initialDatState = {
      length: 2,
      width: 2,
      height: 2
    };
    this.tableRef = React.createRef();
    this.state = {
      showlabels: [],
      newfinalHeight: 0,
      newfinalWidth: 0,
      newfinalXpos: 0,
      newfinalYpos: 0,
      newmapPosition: 0,
      newmapPositionx: 0,
      newmapPositiony: 0,
      newchangeHeight: 0,
      newchangeWidth: 0,
      newchangePositionA: 0,
      newchangePositionB: 0,
      showcaseTexture: "",
      // showmass: 0.0,
      caseTexture: "Texture1",
      case: Texture1,
      data: initialDatState,
      defaultData: initialDatState,
      caseName: "",
      width: 2,
      formClassName: '',
      formSuccessMessage: '',
      formErrorMessage: '',
      role: "guest",
      active: true,
      xdim: 10,
      ydim: 10,
      zdim: 10,
      mass: 0.0,
      labelname: "Label0",
      labeltype: "Front",
      labelwidth: 10,
      labellength: 10,
      initiallengthtopcorner: 20,
      initialawidthsidecorner: 20,
      labela: 0,
      labelb: 0,
      operation: "",
      selectlabel: "Front",
      operationCompleted: false,
      labels: [],
      summaryExpanded: false,
      updateWidgets: false,
      errorMass: false,
      errorKgForMass: "",
      // errorText: incorrectentry,
      errorDimensionForX: "",
      errorDimensionForY: "",
      errorDimensionForZ: "",
      errorDimensionCondition: false,
      errorXdim: false,
      errorYdim: false,
      errorZdim: false,
      minValue: 0,

      topWidthCheck: false,
      topWidthText: " ",

      topLengthCheck: false,
      topLengthText: " ",

      positionBCheck: false,
      positionBCheckText: " ",


      errorLabelPosACondition: false,
      errorLabelPosA: "",

      errorLabelPosBCondition: false,
      errorLabelPosB: "",

      colorleft: '256px',
      colormarginTop: '8px',

      selectedCase: "Advanced",
      // setColor: "white",
      setColor: "",
      setHidden: false,

      expanded: '',
      panelname: '',
      // setAdvanced: true,
      // setBasic: false,
      // showText: false,
      // enable :false

      line_position: "",
      line_rotation: "",
      textures: Texture1,
    };
    this.attachLabel = this.attachLabel.bind(this);
    this.saveLabel = this.saveLabel.bind(this);
    this.getID = this.getID.bind(this);
    this.saveOneLabel = this.saveOneLabel.bind(this);
    this.initLabelWidgets = this.initLabelWidgets.bind(this);
    this.updateWidgetParameters = this.updateWidgetParameters.bind(this);
    this.dropdownCallback = this.dropdownCallback.bind(this);
    this.getAllLabels = this.getAllLabels.bind(this);
    this.deleteOneLabel = this.deleteOneLabel.bind(this);
    this.handleBack = this.handleBack.bind(this);

    // this.colorPick = this.colorPick.bind(this);
    this.forSetColor = this.forSetColor.bind(this);
    this.forSetHidden = this.forSetHidden.bind(this);

    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.addThisLabel = this.addThisLabel.bind(this);
    this.editThisLabel = this.editThisLabel.bind(this);
    this.deleteThisLabel = this.deleteThisLabel.bind(this);
    this.changeScalex = this.changeScalex.bind(this);
    this.changeScaley = this.changeScaley.bind(this);
    this.changeScalez = this.changeScalez.bind(this);
    this.changeGlobalx = this.changeGlobalx.bind(this);
    this.changeGlobaly = this.changeGlobaly.bind(this);
    this.changeGlobalWidth = this.changeGlobalWidth.bind(this);
    this.changeGlobalHeight = this.changeGlobalHeight.bind(this);
    this.changeGlobalType = this.changeGlobalType.bind(this);
    this.changeGlobalName = this.changeGlobalName.bind(this);
    this.attachThisLabel = this.attachThisLabel.bind(this);
    this.setLabelnamedrop = this.setLabelnamedrop.bind(this);
    this.enterlabelname = this.enterlabelname.bind(this);
    this.createLabels = this.createLabels.bind(this);
    this.createRect = this.createRect.bind(this);
    this.createRectTopFront = this.createRectTopFront.bind(this);
    this.createRectTopBack = this.createRectTopBack.bind(this);
    this.createRectTopSide = this.createRectTopSide.bind(this);
    this.createRectTopOpSide = this.createRectTopOpSide.bind(this);
    this.createRectFrontOpSide = this.createRectFrontOpSide.bind(this);
    this.createRectSideBack = this.createRectSideBack.bind(this);
    this.createRectFrontSide = this.createRectFrontSide.bind(this);
    this.createRectOpSideBack = this.createRectOpSideBack.bind(this);
    this.getAuthInfo = this.getAuthInfo.bind(this);
    this.checkRotationsToGetFaces = this.checkRotationsToGetFaces.bind(this);
    this.createRectLeft = this.createRectLeft.bind(this);
    this.createRectRight = this.createRectRight.bind(this);
    this.createRectBack = this.createRectBack.bind(this);
    this.createRectFront = this.createRectFront.bind(this);
    this.createRectTop = this.createRectTop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeForPositionB = this.handleChangeForPositionB.bind(this);
    this.handleChangeForPositionA = this.handleChangeForPositionA.bind(this);
    this.callBlurForPosA = this.callBlurForPosA.bind(this);
    this.callBlurForPosB = this.callBlurForPosB.bind(this);
    this.calculateTotalLabelWidth = this.calculateTotalLabelWidth.bind(this);
    this.setLimitForLabelLength = this.setLimitForLabelLength.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleDimensionChange = this.handleDimensionChange.bind(this);
    this.executeUserAction = this.executeUserAction.bind(this);
    this.rotateX = this.rotateX.bind(this);
    this.createLine = this.createLine.bind(this);
    this.addLine = this.addLine.bind(this);
    this.rotateY = this.rotateY.bind(this);
    this.rotateZ = this.rotateZ.bind(this);
    this.addMUILabel = this.addMUILabel.bind(this);
    this.editMUILabel = this.editMUILabel.bind(this);
    this.deleteMUILabel = this.deleteMUILabel.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.setData = this.setData.bind(this);
    this.handlePanel = this.handlePanel.bind(this);
    this.handleChangeForLength = this.handleChangeForLength.bind(this);
    this.handleChangeForWidth = this.handleChangeForWidth.bind(this);
    this.map = this.map.bind(this);
    this.map2 = this.map2.bind(this);
    this.map3 = this.map3.bind(this);
    this.calFactorWidth = this.calFactorWidth.bind(this);
    this.calFactorHeight = this.calFactorHeight.bind(this);
    this.calPositionFactorX = this.calPositionFactorX.bind(this);
    this.calPositionFactorY = this.calPositionFactorY.bind(this);
    this.calPositionTopFactorX = this.calPositionTopFactorX.bind(this);
    this.calPositionTopFactorY = this.calPositionTopFactorY.bind(this);
    this.constrain = this.constrain.bind(this);
    this.createArrows = this.createArrows.bind(this);
    this.createArrowsTop = this.createArrowsTop.bind(this);
    this.callBlur = this.callBlur.bind(this);
    this.changeHash = this.changeHash.bind(this);
    this.getMinMaxForPositionB = this.getMinMaxForPositionB.bind(this);
    this.callBlur1 = this.callBlur1.bind(this);
    this.callBlur2 = this.callBlur2.bind(this);
    this.Xmax_Limit = this.Xmax_Limit.bind(this);
    this.Ymax_Limit = this.Ymax_Limit.bind(this);
    this.limitCheckWidth = this.limitCheckWidth.bind(this);
    this.setLimitWidth = this.setLimitWidth.bind(this);
    this.setLimitLength = this.setLimitLength.bind(this);
    this.calculateTotalLabelLength = this.calculateTotalLabelLength.bind(this);
    this.limitCheckLength = this.limitCheckLength.bind(this);
    this.showLine = this.showLine.bind(this)
    // this.add3DText = this.add3DText.bind(this);
    // this.createAndAttach3DText = this.createAndAttach3DText.bind(this);
    // this.createAndAttach3DtextFront = this.createAndAttach3DtextFront.bind(this);
    // this.createAndAttach3DtextBack = this.createAndAttach3DtextBack.bind(this);
    // this.createAndAttach3DtextRight = this.createAndAttach3DtextRight.bind(this);
    // this.createAndAttach3DtextRightA = this.createAndAttach3DtextRightA.bind(this);
    // this.createAndAttach3DtextRightB = this.createAndAttach3DtextRightB.bind(this);
    // this.createAndAttach3DtextFrontA = this.createAndAttach3DtextFrontA.bind(this);
    // this.createAndAttach3DtextFrontB = this.createAndAttach3DtextFrontB.bind(this);
    // this.createAndAttach3DtextLeft = this.createAndAttach3DtextLeft.bind(this);
    // this.createAndAttach3DtextTop = this.createAndAttach3DtextTop.bind(this);
    // this.createAndAttach3DtextLeftA = this.createAndAttach3DtextLeftA.bind(this);
    // this.createAndAttach3DtextLeftB = this.createAndAttach3DtextLeftB.bind(this);
    // this.createAndAttach3DtextBackA = this.createAndAttach3DtextBackA.bind(this);
    // this.createAndAttach3DtextBackB = this.createAndAttach3DtextBackB.bind(this);
    // this.createAndAttach3DtextTopA = this.createAndAttach3DtextTopA.bind(this);
    // this.createAndAttach3DtextTopB = this.createAndAttach3DtextTopB.bind(this);
    // this.createAndAttach3DtextTopLeftRightA = this.createAndAttach3DtextTopLeftRightA.bind(this);
    // this.createAndAttach3DtextTopLeftRightB = this.createAndAttach3DtextTopLeftRightB.bind(this);
    this.handleChangeForTexture = this.handleChangeForTexture.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.callBlurForMass = this.callBlurForMass.bind(this);
    this.showCaseData = this.showCaseData.bind(this);
    this.labelTypeForDatabase = this.labelTypeForDatabase.bind(this);
    this.materialForDatabase = this.materialForDatabase.bind(this);
    this.handlexpand = this.handlexpand.bind(this);


    console.log("variables are created freshly");
    this.labels = [];
    this.labelNames = [];
    this.recordnames = [];
    this.arrayforlabels = [];
    // this.gui = new GUI();
    this.root = new THREE.Object3D();
    this.scene = new THREE.Scene();
    this.scene1 = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.arrowRenderer;
    this.arrowCamera;
    this.arrowScene;
    this.controls;
    this.widthPixelMax = 20;
    this.heightPixelMax = 20;
    this.widthPixelMin = 1;
    this.heightPixelMin = 1;
    this.arrowCanvas;
    this.largest;
    this.prevLargest;
    this.distance;
    this.geometry1;
    this.cylinder1;
    this.cylinder2;
    this.material1;
    this.camera = camera;
    this.colorleft;
    this.colormarginTop = '8px';
    this.id = 0;
    // this.typeoptions = ["Top", "Bottom", "Front", "Back", "Side", "Op.Side", "Corner(Top-Front)", "Corner(Top-Back)", "Corner(Top-Side)",
    //   "Corner(Top-Op.Side)", "Corner(Front-Side)", "Corner(Side-Back)", "Corner(Front-Op.Side)", "Corner(Op.Side-Back)"];
    this.typeoptions = ["Top", "Front", "Back", "Right", "Left", "Top-Front", "Top-Back", "Top-Right",
      "Top-Left", "Front-Right", "Right-Back", "Front-Left", "Left-Back"];
    this.globalLinesegs;
    this.globalRotationx = 0;
    this.globalRotationy = 0;
    this.globalRotationz = 0;
    this.globalScalex = 1;
    this.globalScaley = 1;
    this.globalScalez = 1;
    this.globalx = 0;
    this.globaly = 0;
    this.textures = Texture1;
    this.texture = "Texture1";
    this.texture_real = "Texture1";
    this.globalMass = 0.0;
    this.globalWidth = 0;
    this.globalHeight = 0;
    this.storewidth = 10;
    this.newCasename = "";
    this.WidthTopCorners = 10;
    this.LengthEdgeCorners = 10;
    this.setMinRangeForTopCornersForPosA;
    this.setMaxRangeForTopCornersForPosA;
    this.faceSide = "Topside";
    this.orientation = "Vertical"
    this.setMinRangeForTopCornersForPosB;
    this.setMaxRangeForTopCornersForPosB;

    this.storeMaxValue;
    this.storeMinValue;
    this.modifyHeight;
    this.modifyWidth;
    this.storeMaxWidth;
    this.storeMinWidth

    this.currLabelType = "Front";
    this.minposWidth = 4;
    this.maxposWidth = 400;
    this.minposLength = 4.5;
    (this.minposcubeasLabel = 1),
      (this.maxposcubeasLabel = 20);
    this.maxposLength = 450;

    this.heightPixelmin = 1;
    this.heightPixelmax = 20;
    this.heightPixel = 450;
    this.widthPixelmax = 20;
    this.widthPixelmin = 1;
    this.widthPixel = 400;
    this.labelMin = 10;
    this.labelMax = 1000;
    this.labelWidthMapMin = 10;
    this.labelHeightMapMin = 10;
    this.labelPosMinX = 0;
    this.labelPosMinY = 0;
    this.labelPosMaxX = 1000;
    this.labelPosMaxY = 1000;
    this.originMinX = 0;
    this.originMinY = 0;
    this.originMaxX = 300;
    this.originMaxY = 150;
    this.originTopMin = 0.5;
    this.originTopMax = 10;

    this.originTopMinX = 0;
    this.originTopMaxXd = -9.5;
    this.positionAMax = -19;
    this.positionBMax = -19;
    this.originTopMinY = 0;
    this.originTopMaxX = 150;
    this.originTopMaxY = 300;
    this.originTopMaxYd = -9.5;
    this.originTopMaxZd = -9.5;
    this.originTopMaxXdTOCHECK = -9.5;
    this.originTopMaxYdTOCHECK = -9.5;
    this.originTopMaxX2 = 300;
    this.originTopMaxY2 = 150;
    this.minHeight = 0;
    this.maxHeight = 450;
    this.minWidth = 0;
    this.maxWidth = 400;

    this.X;
    this.Y;


    this.labelWidthMapMax = 600;
    this.labelHeightMapMax = 675;
    this.scaleBoxMin = 0.2; //0.5
    this.scaleBoxMax = 20; //1.5

    this.globalType = "Front";
    this.globalName = "Label0";
    this.enterlabelname;
    this.labelnamedrop;

    this.labelColor = "yellow";
    // global variables for map function
    this.globalDimensionMin = 10;
    this.globalDimensionMax = 1000;
    this.cameraZoomMin = 12;
    this.cameraZoomMax = 42;

    this.lengthnew = 20;
    this.Widthnew = 20;
    this.mass;
    this.labelx;
    this.labely;
    this.labelwidth;
    this.labelheight;
    this.labeltype;
    this.addButton;
    this.editButton;
    this.deleteButton;
    this.dimensionButton;
    this.scaleX;
    this.scaleY;
    this.scaleZ;
    this.plane;
    this.rotationStatex = false;
    this.rotationStatey = false;
    this.rotationStatez = false;
    this.emailid = "xyz@gmail.com";
    this.role = "guest";
    var auth = "xyz@gmail.com:guest";
    this.top = 1;
    this.right = 3;
    this.front = 2;
    this.left = 4;
    this.back = 5;
    this.active = true;
    this.isdim = false;
    this.islabel = false;
    this.issummary = false;
    this.panel = "none";

    // this.lineWidth = 4;
    // this.lineArray = [2, 147, 0, 147, 400];
    // this.lineArray1 = [2, 147, 0, 147, 400];
    this.storeWidthMin = 20;
    this.storeWidthMax;
    this.storeLengthMin = 0;
    this.storeLengthMax;
    this.light;
    this.light1;
    this.minPosition;
    this.maxPosition;
    this.Xposition;
    this.TopMap;
    this.BottomMap;
    this.RightMap;
    this.LeftMap;
    this.cube;
    this.boxColor = true;
    this.previouColor = "#FFFFFF";
    this.prevIntersected = false;
    this.currIntersected = false;
    this.myInterval;
    this.selectedColor = "gray";
    this.frontText;
    this.backText;
    this.rightText;
    this.leftText;
    this.topText;
    this.leftTextA;
    this.leftTextB;
    this.rightTextA;
    this.rightTextB;
    this.topTextA;
    this.topTextB;
    this.frontTextA;
    this.frontTextB;
    this.backTextA;
    this.backTextB;
    this.setFloat;
    this.currentOrientation = "vertical";
    this.casetexture = ["Texture1", "Texture2", "Texture3", "Texture4"];
    this.textures = Texture1;
    // this.darktextures = DarkTexture1;

  }

  getAuthInfo = async () => {
    let id = 0;
    let auth = "";
    try {
      let resonse = await axios.get(`/Threed/getInfo1`);
      auth = resonse.data;
      console.log("resonse = ", resonse);
      console.log("auth = ", auth);
      let authArr = auth.toString().split(':');
      this.emailid = authArr[0];
      this.role = authArr[1];
      const role = this.role;
      console.log("this.emailid = ", this.emailid);
      console.log("this.role = ", this.role);
      this.setState({
        role: role
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  componentWillMount() {
    this.props.i18n.changeLanguage(localStorage.getItem("language"));
    localStorage.getItem("label", "labelname");
  }



  componentDidMount() {
    this.changeHash();
    this.showLine()
    this.showCaseData()

    window.addEventListener('popstate', (event) => {
      cancelAnimationFrame(this.id);
      this.labels = [];
      this.labelNames = [];
      this.recordnames = [];
      this.arrayforlabels = [];
      this.cube = null;
      this.root = null;
      // this.scene = null;
      this.renderer = null;
      this.camera = null;
      this.light = null;
      this.light1 = null;
      this.arrowCanvas.hidden = true;
    });


    this.colorleft = this.state.colorleft;
    this.colormarginTop = this.colormarginTop;
    this.scene.background = new THREE.Color(0xffffff);
    // this.scene1.background = new THREE.Color(0xffffff);
    // console.log("window.innerWidth = ", window.innerWidth);
    // console.log("window.innerHeight = ", window.innerHeight);
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(threedwidth, threedheight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    // this.renderer1.setSize(threedwidth, 150);
    this.mount.appendChild(this.renderer.domElement) //check this  
    // this.mount.appendChild(this.renderer1.domElement) //check this 
    this.camera.position.x = -2;
    this.camera.position.y = 1;
    this.camera.position.z = 2;
    // this.camera.setViewOffset(window.innerWidth * 1, window.innerHeight, window.innerWidth * 0.25, 0, window.innerWidth, window.innerHeight);
    // orbitControls
    const controls1 = new OrbitControls(this.camera, this.renderer.domElement);

    controls1.minPolarAngle = Math.PI / 4
    controls1.maxPolarAngle = Math.PI / 2.8
    controls1.enablePan = false;
    //Event Handelers
    window.addEventListener("resize", this.handleWindowResize);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enablePan = false;
    // controls.minDistance = 1;
    // controls.maxDistance = 10;
    // controls.enablePan = false;



    // this.controls.mouseButtons = { RIGHT: THREE.MOUSE.LEFT, LEFT: THREE.MOUSE.ROTATE };

    // this.controls.rightmousemove = true;
    // window.addEventListener("mousemove", function (event) { if (this.rightmousemove === true) { event.preventDefault(); event.stopPropagation(); } });
    // this.controls.listentoKeyEvents(document.body)
    // this.controls.keys = {
    //       LEFT: "ArrowLeft", //left arrow
    //       RIGHT: "keyA", // right arrow
    //   }
    this.controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_ROTATE
    }
    this.valueforx = this.globalScalex
    this.valuefory = this.globalScaley
    this.valueforz = this.globalScalez
    this.checkvalue = Math.max(this.valueforx, this.valuefory, this.valueforz)

    this.controls.minAzimuthAngle = -Math.PI
    this.controls.maxAzimuthAngle = Math.PI

    this.controls.minDistance = this.map(this.checkvalue, 10, 1000, 0.2, 200);
    this.controls.maxDistance = this.map(this.checkvalue, 10, 1000, 75, 400);

    if (this.globalscalex == 10 && this.globalscaley == 10 && this.globalScalez == 10) {
      this.controls.maxDistance == 15
    }
    this.controls.update();
    var CANVAS_WIDTH = 300;
    var CANVAS_HEIGHT = 200;
    this.arrowRenderer = new THREE.WebGLRenderer({ alpha: true }); // clear
    this.arrowRenderer.setClearColor(0x000000, 0);
    this.arrowRenderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
    this.arrowCanvas = document.body.appendChild(this.arrowRenderer.domElement);
    this.arrowCanvas.setAttribute('id', 'arrowCanvas');
    this.arrowCanvas.style.width = CANVAS_WIDTH;
    this.arrowCanvas.style.height = CANVAS_HEIGHT;
    this.arrowScene = new THREE.Scene();
    this.arrowCamera = new THREE.PerspectiveCamera(50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000);
    this.arrowCamera.up = camera.up; // important!
    var arrowPos = new THREE.Vector3(0, 0, 0);
    this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, 60, 0x7F2020, 20, 10);
    this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, 60, 0x20207F, 20, 10);
    this.arrowHelperZ = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, 60, 0x207F20, 20, 10);
    this.arrowScene.add(this.arrowHelperX);
    this.arrowScene.add(this.arrowHelperY);
    this.arrowScene.add(this.arrowHelperZ);

    this.radiustop = this.map(this.globalScalez == null ? 10 : this.globalScalez, 10, 1000, 0.002, 0.2)
    this.radiusbottom = this.map(this.globalScalez == null ? 10 : this.globalScalez, 10, 1000, 0.002, 0.2)
    this.cylinderheight = this.map(this.globalScalez == null ? 10 : this.globalScalez, 10, 1000, 0.2, 20)

    this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
    this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

    this.x = 0;
    // this.y = 0.5;
    this.y = this.map(this.globalScaley == null ? 10 : this.globalScaley, 10, 1000, 0.1, 10);

    // this.y = this.map(this.globalScaley, 10, 1000, 0.51, 10);
    this.z = 0;
    // this.geometry1.translate( 0, height/0.5, 0 );
    this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
    this.cylinder1.position.set(this.x, this.y, this.z);
    this.cylinder1.rotation.set(7.85, 0, 0)
    this.scene.add(this.cylinder1)



    // this.arrowScene.remove(this.cube);


    this.arrowRenderer.render(this.arrowScene, this.arrowCamera);
    // let sprite = new SpriteText("");
    // sprite.color = "#2E2E2E";
    // sprite.backgroundColor = "transparent";
    // sprite.padding = [8, 4];
    // sprite.textHeight = 10;
    // sprite.borderRadius = 10;
    // sprite.fontWeight = 900;
    // sprite.vAlign = "bottom",
    //   sprite.hAlign = "right",
    //   sprite.borderWidth = 1,
    //   sprite.borderRadius = 4,
    //   sprite.borderColor = "black"
    // this.arrowScene.add(sprite);
    // sprite.position.set(60, 0, 15);

    // let spriteY = new SpriteText("");
    // spriteY.color = "#2E2E2E";
    // spriteY.backgroundColor = "transparent";
    // spriteY.padding = [8, 4];
    // spriteY.textHeight = 10;
    // spriteY.borderRadius = 10;
    // spriteY.fontWeight = 900;
    // spriteY.vAlign = "bottom",
    //   spriteY.hAlign = "right",
    //   spriteY.borderWidth = 1,
    //   spriteY.borderRadius = 4,
    //   spriteY.borderColor = "black"
    // spriteY.center = new THREE.Vector2(0, 0);
    // this.arrowScene.add(spriteY);
    // spriteY.position.set(22, 0, 80);

    // let spriteZ = new SpriteText("");
    // spriteZ.color = "#2E2E2E";
    // spriteZ.backgroundColor = "transparent";
    // spriteZ.padding = [8, 4];
    // spriteZ.textHeight = 10;
    // spriteZ.borderRadius = 10;
    // spriteZ.fontWeight = 900;
    // spriteZ.vAlign = "bottom",
    //   spriteZ.hAlign = "right",
    //   spriteZ.borderWidth = 1,
    //   spriteZ.borderRadius = 4,
    //   spriteZ.borderColor = "black"
    // spriteZ.center = new THREE.Vector2(0, 0);
    // this.arrowScene.add(spriteZ);
    // spriteZ.position.set(-15, 60, 0);

    this.animation();
    this.renderer.render(this.scene, this.camera);
    // this.arrowRenderer.render(this.arrowScene, this.arrowCamera);


    this.generateCube();
    this.getAllLabels();
    if (this.labelNames.length > 0) {
      // this.initLabelWidgets(this.labels[0]);
    }
    else if (this.labels.length == 0) {

      this.cubeWithoutLabel()
    }


    //  this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);

    this.onMouseMove();

  }

  cubeWithoutLabel = async () => {
    let caseName = ""
    caseName = this.props.match.params.casename;
    if (caseName.includes("#")) {
      caseName = encodeURIComponent(this.props.match.params.casename)
    }
    let response = await axios.get(`/Threed/getcase`);
    console.log("Inside cubeWithoutLabel response ", response.data);

    this.showLine()
    axios
      .get(`/Threed/getcase/${caseName}`)
      .then((resp) => {
        if (this.scene != null && this.scene != undefined) {
          resp.data.map((value, i) => {
            this.setState({
              gloabalScalex: value.length,
              globalScaley: value.width,
              globalScalez: value.height
            })
          })

          this.scene.remove(this.cube);
          this.scene.remove(this.root);
          this.root.remove(this.cube);
          this.root.remove(this.globalLinesegs);
          this.root.position.x = 0;
          var texture1, texture2, texture3, texture4, texture5, texture6;
          const returnValues = this.createLabels();
          // texture1 = returnValues[0];
          // texture2 = returnValues[1];
          // texture3 = returnValues[2];
          // texture4 = returnValues[3];
          // texture5 = returnValues[4];
          // texture6 = returnValues[5];

          const newScalex = this.map(this.globalScalex == null ? 10 : this.globalScalex, 10, 1000, 0.2, 20);
          const newScaley = this.map(this.globalScaley == null ? 10 : this.globalScaley, 10, 1000, 0.2, 20);
          const newScalez = this.map(this.globalScalez == null ? 10 : this.globalScalez, 10, 1000, 0.2, 20);

          console.log("checking globalscale this.x,y,z initially::::x ", this.globalScalex, " y ", this.globalScaley, " z ", this.globalScalez)

          this.scene.remove(this.plane);

          var textureArrowImage;
          if (this.state.selectedCase == "Basic") {
            textureArrowImage = new THREE.TextureLoader().load(arrowImage1);
          }
          else if (this.state.selectedCase == "Advanced") {
            textureArrowImage = new THREE.TextureLoader().load(brown);
          }
          // var textureArrowImage = new THREE.TextureLoader().load(arrowImage);
          const planeGeo = new THREE.PlaneGeometry(newScalex * 2.5, newScalez * 2.5);
          const planeMaterial = new THREE.MeshPhysicalMaterial(
            {
              color: 0xf2f2f2,
              transparent: false,
              opacity: 0.0,
              side: THREE.DoubleSide,
              map: textureArrowImage,
            }
          );
          this.plane = new THREE.Mesh(planeGeo, planeMaterial);
          this.plane.receiveShadow = true;
          // planeMaterial.needsUpdate = true;
          this.plane.material.needsUpdate = true;
          var planey = this.map(newScaley, 0, 10, 0, -5.1);
          console.log("planey = ");
          console.log(planey);
          this.plane.position.set(0, planey, 0);
          this.plane.rotateX(-Math.PI / 2.0);
          this.scene.add(this.plane);

          const max = Math.max(this.globalScalex, this.globalScaley, this.globalScalez);
          console.log("max is " + max);

          this.camera.remove(this.light);
          this.scene.remove(this.camera);
          this.camera.remove(this.light1);
          this.scene.remove(this.camera);

          //Zoom level according to case diamensions
          const num1 = this.globalScalex;
          const num2 = this.globalScaley;
          const num3 = this.globalScalez;
          this.largest = Math.max(num1, num2, num3);
          console.log("The largest number is " + this.largest);

          var d = 0;
          console.log("distances1 " + this.distance);

          if (this.prevLargest != this.largest) {

            this.prevLargest = this.largest;

            this.distance = this.map(this.largest, 10, 1000, 2, 84);
            console.log("distances2 " + this.distance);
            var newLength = this.distance * (1 + Math.sin(d / 1000) / 2);
            this.camera.position.normalize().multiplyScalar(newLength);

          }

          var brownImageTexture = new THREE.TextureLoader().load(this.textures);
          // var DarkBrownImageTexture = new THREE.TextureLoader().load(this.darktextures);
          let pitchMaterialParams = [];

          for (var i = 0; i < 6; i++) {

            pitchMaterialParams[i] = {
              uniforms: THREE.UniformsUtils.merge([
                {

                  texture1: null,
                  texture2: null,

                }
              ]),
              vertexShader:

                `         
           precision highp float;
           precision highp int;

           //uniform mat4 modelViewMatrix;
           //uniform mat4 projectionMatrix;
           //attribute vec3 position;
           //attribute vec2 uv;
           varying vec2 vUv;

           void main() {
             vUv = uv;
             vec4 worldPosition = modelMatrix * vec4(position, 1.0);
             gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );             
           }           
         `
              ,
              fragmentShader:
                `
           precision mediump float;
           uniform sampler2D texture1;
           uniform sampler2D texture2;
           varying vec2 vUv;

           void main() {
             vec4 t1 = texture2D( texture1, vUv );
             vec4 t2 = texture2D( texture2, vUv );
             gl_FragColor = vec4(mix(t1.rgb, t2.rgb, t2.a), 1.0);
           }

         `,

            };

          }

          var geometry = new THREE.BoxGeometry(newScalex, newScaley, newScalez);
          // var geometry = 1

          const edges = new THREE.EdgesGeometry(geometry);
          const linesegs = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x808080 }));
          this.globalLinesegs = linesegs;
          var cube;
          if (this.state.selectedCase == "Basic") {
            this.plane.receiveShadow = false;
            var cubeMaterials = [
              new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture1 }),  //Left 2
              new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture2 }),  //Right 4
              new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture3 }),  //top 5
              new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture4 }),  //bottom 6
              new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture5 }),  //front 1
              new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture6 })]; //back 3

            var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
            var cube = new THREE.Mesh(geometry, cubeMaterial);

            // this.group.add(cube);
            // this.scene.add(cube)


          } else if (this.state.selectedCase == "Advanced") {
            let material = [];
            material[0] = new THREE.ShaderMaterial(pitchMaterialParams[0]);
            material[0].uniforms.texture1.value = brownImageTexture;
            material[0].uniforms.texture2.value = texture1;
            material[0].side = THREE.DoubleSide;

            material[1] = new THREE.ShaderMaterial(pitchMaterialParams[1]);
            material[1].uniforms.texture1.value = brownImageTexture;
            material[1].uniforms.texture2.value = texture2;
            material[1].side = THREE.DoubleSide;

            material[2] = new THREE.ShaderMaterial(pitchMaterialParams[2]);
            material[2].uniforms.texture1.value = brownImageTexture;
            material[2].uniforms.texture2.value = texture3;
            material[2].side = THREE.DoubleSide;

            material[3] = new THREE.ShaderMaterial(pitchMaterialParams[3]);
            material[3].uniforms.texture1.value = brownImageTexture;
            material[3].uniforms.texture2.value = texture4;
            material[3].side = THREE.DoubleSide;

            material[4] = new THREE.ShaderMaterial(pitchMaterialParams[4]);
            material[4].uniforms.texture1.value = brownImageTexture;
            material[4].uniforms.texture2.value = texture5;
            material[4].side = THREE.DoubleSide;

            material[5] = new THREE.ShaderMaterial(pitchMaterialParams[5]);
            material[5].uniforms.texture1.value = brownImageTexture;
            material[5].uniforms.texture2.value = texture6;
            material[5].side = THREE.DoubleSide;

            this.cube = new THREE.Mesh(geometry, material);
            // this.cube.castShadow = true;
            // this.cube.receiveShadow = false;
            material.needsUpdate = true;
          }

          this.camera.remove(this.light);
          this.scene.remove(this.camera);
          this.scene.remove(this.light1);

          console.log("this.globalRotationx = ", this.globalRotationx);
          console.log("this.globalRotationy = ", this.globalRotationy);
          console.log("this.globalRotationz = ", this.globalRotationz);
          let minPosition = this.map(max, 10, 1000, 22, 50);
          let maxPosition = this.map(max, 10, 1000, 10, 20);
          let Xposition = this.map(max, 10, 1000, -8, -15);
          let TopMap = this.map(max, 10, 1000, 4, 40);
          let BottomMap = this.map(max, 10, 1000, -2, -20);
          let RightMap = this.map(max, 10, 1000, 2, 20);
          let LeftMap = this.map(max, 10, 1000, -2, -20);

          this.light1 = new THREE.HemisphereLight(0xfcfcfc, 0.3);
          this.light1.position.copy(this.scene.position)
          this.light1.intensity = this.map(this.globalScalex, 10, 1000, 1.3, 1.3);

          this.light = new THREE.DirectionalLight(0xfcfcfc, 0.3);
          this.light.position.copy(this.camera.position)
          this.light.castShadow = true;
          this.light.target.position.copy(this.scene.position);
          this.light.intensity = this.map(this.globalScalex, 10, 1000, 1.7, 1.7);
          this.light.shadow.radius = 25;


          this.light.shadow.camera.top = TopMap; // default
          this.light.shadow.camera.bottom = BottomMap; // default
          this.light.shadow.camera.right = RightMap; // default
          this.light.shadow.camera.left = LeftMap; // default

          this.cube.castShadow = true;
          this.light.target.position.add(this.scene.position);
          this.light.shadow.mapSize.width = 1024;
          this.light.shadow.mapSize.height = 1024;

          // this.createAndAttach3DText(this.cube);

          this.root.add(this.light.shadow.camera);
          // this.cube = cube;
          this.root.add(this.cube);
          this.root.add(this.globalLinesegs);
          this.scene.add(this.root);
          this.renderer.render(this.scene, this.camera);
          this.renderer.shadowMap.enabled = true;
          this.renderer.shadowMap.needsUpdate = true;
          this.renderer.castShadow = true;
          this.camera.add(this.light);
          this.scene.add(this.camera);
          this.scene.add(this.light1);
          // this.scene.add(this.cylinder1);


        }

      })
    if (this.state.showcaseTexture == "Texture1") {
      this.textures = Texture1;
      this.state.textures = Texture1;

      this.setState({
        textures: Texture1,
      })
    }
    if (this.state.showcaseTexture == "Texture2") {
      this.textures = Texture2;
      this.state.textures = Texture2;

      this.setState({
        textures: Texture2,
      })
    }
    if (this.state.showcaseTexture == "Texture3") {
      this.textures = Texture3;
      this.state.textures = Texture3;

      this.setState({
        textures: Texture3,
      })

    }
    if (this.state.showcaseTexture == "Texture4") {
      this.textures = Texture4;
      this.state.textures = Texture4;

      this.setState({
        textures: Texture4,
      })
    }

    this.showLine()
  }
  onValueChange = (event) => {

    this.globalMass = parseFloat(event.target.value);

    console.log("display float values 1 " + this.globalMass);
    if (this.globalMass < 0.1) {
      console.log("Inside onValueChange 1 this.globalMass = " + this.globalMass);
      this.setState({
        errorMass: false
      });
      this.state.errorKgForMass = ""
    }

    if (event.target.value == "" || event.target.value < 0) {
      console.log("Inside onValueChange 2 event.target.value = " + event.target.value);
      this.state.mass = 0;
      this.setState({
        errorMass: true
      });
      this.state.errorKgForMass = " 0 - 40"
    }

    if (event.target.value > 40) {
      console.log("Inside onValueChange 3 event.target.value = " + event.target.value);
      // this.state.mass = 40;
      this.setState({
        errorMass: true
      });
      this.state.errorKgForMass = " 0 - 40"
    }

    if (event.target.value > 0 && event.target.value <= 40) {
      console.log("Inside onValueChange 4 event.target.value = " + event.target.value);
      this.setState({
        errorMass: false
      });
      this.state.errorKgForMass = ""
    }

    this.setState({
      mass: event.target.value,
      // showmass:event.target.value
    })
  }

  onMouseMove = (event) => {

    window.addEventListener('pointerdown', (event) => {

      if (this.labels.length > 0 && this.renderer != null && this.renderer != undefined) {
        const canvas = this.renderer.domElement;
        // 
        const rect = canvas.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        // 
        pointer.x = (offsetX / threedwidth) * 2 - 1;
        pointer.y = -(offsetY / threedheight) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);

        const intersects = raycaster.intersectObjects(this.scene.children);

        if (intersects.length > 0) {

          console.log("Inside onMouseMove intersects.length = ", intersects.length, intersects[0].object.userData.id, " :: ", intersects[0].face.materialIndex);
          let object = intersects[0].object;
          let cubeID = object.userData.id;
          if (cubeID !== undefined && cubeID !== null) {

            for (let j = 0; j < this.labels.length; j++) {
              if (cubeID.labelName == this.labels[j].labelname) {
                if (cubeID.labelType == "Top" && intersects[0].face.materialIndex == 2) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Front" && intersects[0].face.materialIndex == 4) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Back" && intersects[0].face.materialIndex == 5) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Left" && intersects[0].face.materialIndex == 0) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Right" && intersects[0].face.materialIndex == 1) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Top-Front" && (intersects[0].face.materialIndex == 2 || intersects[0].face.materialIndex == 4)) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Top-Back" && (intersects[0].face.materialIndex == 2 || intersects[0].face.materialIndex == 5)) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Top-Left" && (intersects[0].face.materialIndex == 2 || intersects[0].face.materialIndex == 0)) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Top-Right" && (intersects[0].face.materialIndex == 2 || intersects[0].face.materialIndex == 1)) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Front-Right" && (intersects[0].face.materialIndex == 4 || intersects[0].face.materialIndex == 1)) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Front-Left" && (intersects[0].face.materialIndex == 4 || intersects[0].face.materialIndex == 0)) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Right-Back" && (intersects[0].face.materialIndex == 1 || intersects[0].face.materialIndex == 5)) {
                  this.dropdownCallback(this.labels[j].labelname);
                }
                if (cubeID.labelType == "Left-Back" && (intersects[0].face.materialIndex == 0 || intersects[0].face.materialIndex == 5)) {
                  this.dropdownCallback(this.labels[j].labelname);
                }

              }
            }
          }
        }
        // for (let i = 0; i < intersects.length; i++) {
        //   let object = intersects[i].object;
        //   let cubeID = object.userData.id;

        //   for (let j = 0; j < this.labels.length; j++) {
        //     if (cubeID == this.labels[j].labelname) {
        //       this.dropdownCallback(this.labels[j].labelname);
        //     }
        //   }
        // }
      }
    })
  }

  showCaseData = async () => {
    let caseName = ""
    caseName = this.props.match.params.casename;
    if (caseName.includes("#")) {
      caseName = encodeURIComponent(this.props.match.params.casename)
    }
    try {
      axios
        .get(`/Threed/getcase/${caseName}`)

        .then((res) => {
          res.data.map((name, i) => {

            if (name.material == "Texture1") {
              this.textures = Texture1;
            }
            if (name.material == "Texture2") {
              this.textures = Texture2;
            }
            if (name.material == "Texture3") {
              this.textures = Texture3;
            }
            if (name.material == "Texture4") {
              this.textures = Texture4;
            }
            this.setState({


              xdim: name.length == null ? 10 : name.length,

              zdim: name.width == null ? 10 : name.width,

              ydim: name.height == null ? 10 : name.height,

              showcaseTexture: name.material,

              mass: this.state.mass > 40 ? 40 : this.state.mass,

              //  showmass: name.mass

            })

          })
        })

    }
    catch (e) {
      console.log(e)

    }

  }

  callBlurForMass = (event) => {

    let caseName = ""
    caseName = this.props.match.params.casename;
    if (caseName.includes("#")) {
      caseName = encodeURIComponent(this.props.match.params.casename)
    }
    axios.put(`/Threed/LineDirection/${caseName}`, {
      "line_rotation": !this.state.line_rotation ? this.orientation : this.state.line_rotation,
      "line_position": !this.state.line_position ? this.faceSide : this.state.line_position
    })
      .then((res) => {

      })
    axios.put(`/Threed/caseDimension/${caseName}`, {
      "Length": this.state.xdim,
      "Width": this.state.zdim,
      "Height": this.state.ydim,

      "material": this.state.showcaseTexture,
      "mass": this.state.mass > 40 ? 40 : this.state.mass,
    }).then((res) => {

      this.showLine()
      this.showCaseData()
      console.log(res.data)
    }).catch(err => {
      console.log(err)

    })
    this.globalMass = parseFloat(event.target.value);

    console.log("display float values 1 " + this.globalMass);
    if (this.globalMass < 0.1) {
      console.log("Inside callBlurForMass 1 this.globalMass = " + this.globalMass);
      this.setState({
        errorMass: false
      });
      this.state.errorKgForMass = ""
    }

    if (event.target.value == "" || event.target.value < 0) {
      console.log("Inside callBlurForMass 2 0 event.target.value = " + event.target.value);
      this.state.mass = 0;
      event.target.value = 0;
      this.globalMass = 0;
      console.log("Inside callBlurForMass 2 1 event.target.value = " + event.target.value);
      this.setState({
        errorMass: false
      });
      this.state.errorKgForMass = ""
    }

    if (event.target.value > 40) {
      console.log("Inside callBlurForMass 3 event.target.value = " + event.target.value);
      this.state.mass = 40;
      event.target.value = 40;
      this.globalMass = 40;
      this.setState({
        errorMass: false
      });
      this.state.errorKgForMass = ""
    }

    if (event.target.value > 0 && event.target.value <= 40) {
      console.log("Inside callBlurForMass 4 event.target.value = " + event.target.value);
      this.setState({
        errorMass: false
      });
      this.state.errorKgForMass = ""
    }

    this.setState({
      mass: event.target.value
    })

    for (let i = 0; i < this.labels.length; i++) {
      let tempLabelInfo = {
        id: this.labels[i].id,
        name: this.labels[i].name,
        length: this.labels[i].length,
        width: this.labels[i].width,
        height: this.labels[i].height,
        material: this.texture,
        mass: this.globalMass,
        labelcolour: this.currentColorArr[i],
        directionx: this.labels[i].directionx,
        directiony: this.labels[i].directiony,
        directionz: this.labels[i].directionz,
        typename: this.labels[i].typename,
        labelname: this.labels[i].labelname,
        labelx: this.labels[i].labelx,
        labely: this.labels[i].labely,
        labelwidth: this.labels[i].labelwidth,
        labelheight: this.labels[i].labelheight,
      }

      this.editMUILabel("settingLabelcolor", tempLabelInfo);

    }
    // this.editMUILabel();
  }

  dropdownCallback = (newValue) => {
    console.log("dropdownCallback is called = ", newValue);
    console.log("name Value changed to:  ", newValue);
    const labels = this.labels;
    console.log("this.labels inside dropdownCallback= ", labels);
    this.globalName = newValue;
    if (this.labelNames.indexOf(this.globalName) > -1) {
      console.log("Label name exists = ", this.globalName);
      console.log("this.labelNames inside dropdownCallback = ", this.labelNames);
      console.log("this.labels inside dropdownCallback dropdown = ", labels);
      const index = this.labelNames.indexOf(this.globalName);
      console.log("click me texture this.texture : " + this.texture);
      console.log("index = ", index);
      console.log("mass name inside dropdownCallback1 " + this.globalMass);
      console.log("mass name inside dropdownCallback1 mass index " + labels[index].mass);
      this.globalScalex = labels[index].length;
      this.globalScaley = labels[index].width;
      this.globalScalez = labels[index].height;
      this.texture = labels[index].caseTexture;
      // this.globalMass = labels[index].mass;
      this.globalx = labels[index].labelx;
      this.globaly = labels[index].labely;
      this.globalWidth = labels[index].labelwidth;
      this.globalHeight = labels[index].labelheight;
      this.globalType = labels[index].typename;
      this.state.labelwidth = this.globalWidth;
      this.state.labellength = this.globalHeight;

      this.WidthTopCorners = this.state.labelwidth;

      this.LengthEdgeCorners = this.state.labellength;

      console.log("Inside dropdownCallback :- this.WidthTopCorners = " + this.WidthTopCorners + " this.LengthEdgeCorners = " + this.LengthEdgeCorners);
      // if(this.texture == null){
      //   this.state.caseTexture = "Texture1";
      //   this.texture = "Texture1";
      // }
      // else{
      //   this.state.caseTexture = this.texture;
      // }      
      // this.state.mass = this.globalMass;
      this.state.labela = this.globalx;
      this.state.labelb = this.globaly;
      this.state.labelname = this.globalName;
      this.state.labeltype = this.globalType;
      this.state.xdim = this.globalScalex;
      this.state.zdim = this.globalScaley;
      this.state.ydim = this.globalScalez;
      console.log("this.state.labela inside dropdownCallback = ", this.state.labela);
      console.log("this.state.labelb inside dropdownCallback = ", this.state.labelb);
      console.log("mass name inside dropdownCallback1 " + this.state.mass);
      this.setState({
        updateWidgets: true
      })
      this.currLabelType = this.globalType;
      console.log("checking for attachlabel run from dropdowncallback::::::")
      this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
      this.globalScalex = labels[index].length;
      this.globalScaley = labels[index].width;
      this.globalScalez = labels[index].height;
      this.texture = labels[index].caseTexture;
      console.log("mass name inside dropdownCallback2 " + this.globalMass);
      // if(this.texture == null){
      //   this.state.caseTexture = "Texture1";
      //   this.texture = "Texture1";
      // }
      // else{
      //   this.state.caseTexture = this.texture;
      // }   
      if (this.texture == undefined) {
        this.texture = this.texture_real
        console.log("click me p this.global click me set part dropdownCallback 33 undefined  if : this.texture: ", this.texture, ",", this.texture_real);
      }
      if (this.globalMass == null) {
        this.state.mass = 0.0;
        this.globalMass = 0.0;
      }
      this.setState({
        mass: this.mass,
      })

      // this.globalMass = labels[index].mass;
      this.globalx = labels[index].labelx;
      this.globaly = labels[index].labely;
      this.globalWidth = labels[index].labelwidth;
      this.globalHeight = labels[index].labelheight;
      this.globalType = labels[index].typename;
      this.state.labelwidth = this.globalWidth;
      this.state.labellength = this.globalHeight;
      // this.state.caseTexture = this.texture;
      // this.state.mass = this.globalMass;
      this.state.labela = this.globalx;
      this.state.labelb = this.globaly;
      this.state.labelname = this.globalName;
      this.state.labeltype = this.globalType;
      this.state.xdim = this.globalScalex;
      this.state.zdim = this.globalScaley;
      this.state.ydim = this.globalScalez;
      console.log("this.state.labela inside dropdownCallback = ", this.state.labela);
      console.log("this.state.labelb inside dropdownCallback = ", this.state.labelb);
      console.log("mass name inside dropdownCallback2 " + this.state.mass);
      this.setState({
        updateWidgets: true
      })
    }
  }

  getAllLabels = async (label) => {
    let colorSave;
    let id = 0;
    let records = [];
    this.labels = [];
    this.labelNames = [];
    this.currentColorArr = [];
    this.recordnames = [];
    try {
      let resonse = await axios.get(`/Threed`);
      records = resonse.data;
      console.log("records = ", records);
      for (var record of records) {
        console.log("record.name", record.name);
        console.log("this.props.match.params.casename", this.props.match.params.casename);
        if (record.labelname == null) {
          continue;
        }
        if (record.labelcolour == null) {
          this.previouColor == "#FFFFFF";
        }
        if (record.name === this.props.match.params.casename) {
          // this.recordnames.push(record.labelname);
        }
        console.log("record.labelname inside getAllLabels = " + record.labelname);
        if (record.name === this.props.match.params.casename &&
          record.labelname != "Label0") {
          console.log("record.caseTexture inside getAllLabels 1 = " + record.material, " this.texture " + this.texture);

          console.log("record.mass inside getAllLabels 1 = " + record.mass);
          console.log("record.length inside getAllLabels 1 = " + record.length);
          id = record.id;
          this.previouColor = record.labelcolour == null ? "#FFFFFF" : record.labelcolour;
          let labelele = {
            id: record.id,
            name: record.name,
            length: record.length,
            width: record.width,
            height: record.height,
            directionx: record.directionx,
            directiony: record.directiony,
            directionz: record.directionz,
            material: record.material,
            mass: record.mass > 40 ? 40 : record.mass,
            labelcolour:
              record.labelcolour == null
                ? this.previouColor
                : record.labelcolour,
            typename: record.typename,
            labelname: record.labelname,
            labelx: record.labelx,
            labely: record.labely,
            labelwidth: record.labelwidth,
            labelheight: record.labelheight,

            finalHeight: record.finalHeight,
            finalWidth: record.finalWidth,
            finalXpos: record.finalXpos,
            finalYpos: record.finalYpos,
            mapPosition: record.mapPosition,
            mapPositionx: record.mapPositionx,
            mapPositiony: record.mapPositiony,
            changeHeight: record.changeHeight,
            changeWidth: record.changeWidth,
            changePositionA: record.changePositionA,
            changePositionB: record.changePositionB,
          };
          localStorage.getItem("label", "label");
          this.labels.push(labelele);
          this.labelNames.push(record.labelname);
          this.currentColor = record.labelcolour;
          this.currentTypeName = record.typename;
          this.currentColorArr.push(record.labelcolour);
          console.log("this.currentColorArr inside getAllLabels = " + this.currentColorArr + " this.currentColor = " + this.currentColor + " this.currentTypeName = " + this.currentTypeName);
          this.recordnames.push(record.labelname);
          colorSave = record.labelcolour == null ? this.previousColor : record.labelcolour;
          console.log("ABC colorSave " + colorSave);

        }
      };

      console.log("colorSave = " + JSON.stringify(this.labels));

    }
    catch (err) {
      console.log(err);
      return id;
    }
    console.log("this.labels inside getAllLabels = ", this.labels);
    console.log("record.caseTexture inside getAllLabels 2 = " + record.material);
    console.log("record.mass inside getAllLabels 2 = " + record.mass);
    console.log("record.length inside getAllLabels 2 = " + record.length);

    if (this.labels.length > 0) {
      for (let i = (this.labels.length - 1); i >= 0; i--) {
        var record = this.labels[i];
        this.globalScalex = record.length;
        this.globalScaley = record.width;
        this.globalScalez = record.height;
        this.texture = record.material;
        console.log("this.texture inside getAllLabels = " + this.texture);
        if (this.texture == null) {
          this.state.caseTexture = "Texture1";
          this.texture = "Texture1";
        }
        else {
          this.state.caseTexture = this.texture;
          // this.state({
          //   caseTexture: this.texture
          // })
          console.log("this.stae.caseTexture inside getAllLabels = " + this.state.caseTexture);
        }
        this.globalMass = record.mass > 40 ? 40 : record.mass;
        console.log("this.globalMass inside getAllLabels = " + this.globalMass);
        if (this.globalMass == null) {
          this.state.mass = 0.0;
          this.globalMass = 0.0;
        }
        else {
          this.state.mass = this.globalMass;
          // this.state({
          //   mass: this.globalMass
          // })
          console.log("this.stae.mass inside getAllLabels = " + this.state.mass);
        }
        this.globalx = record.labelx;
        this.globaly = record.labely;
        this.globalWidth = record.labelwidth;
        this.globalHeight = record.labelheight;
        this.globalType = record.typename;
        if (record.labelname && record.labelname !== "") {
          this.globalName = record.labelname;
        }
        this.state.xdim = this.globalScalex;
        this.state.zdim = this.globalScaley;
        this.state.ydim = this.globalScalez;
        // this.attachLabel(record.labelx, record.labely,
        //    record.labelwidth, record.labelheight, record.caseTexture, record.mass, record.typename, record.labelname);
        this.updateWidgetParameters(record.labelname, record.labelx,
          record.labely, record.labelwidth, record.labelheight, record.typename);
        console.log("checking for attachlabel run from getalllabels::::::")
        this.attachLabel(record.labelx,
          record.labely, record.labelwidth, record.labelheight, record.typename, record.labelname);
        this.showLine()
      }
      //     this.scene.remove(this.cylinder3)
      //     this.radiustop = this.map(this.globalScaley, 10, 1000, 0.01, 0.1)
      //     this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.01, 0.1)
      //     this.cylinderheight = this.map(this.globalScalez, 10, 1000, 1, 20)
      //     console.log("this.radiustop1234" + this.radiustop)
      //     this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      //     this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });
      //     this.x = 0;
      //     this.y = this.map(this.globalScaley, 10, 1000, 0.51, 10);
      //     this.z = 0;
      //     this.cylinder3 = new THREE.Mesh(this.geometry1, this.material1);
      //     this.cylinder3.position.set(this.x, this.y, this.z);
      //     this.cylinder3.rotation.set(7.855, 0, 0)
      //     this.scene.add(this.cylinder3)
      //     this.scene.remove(this.cylinder1)
      // this.radiustop = this.map(this.globalScaley, 10, 1000, 0.01, 0.1)
      // this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.01, 0.1)
      // this.cylinderheight = this.map(this.globalScalez, 10, 1000, 1, 20)
      // console.log("this.radiustop" + this.radiustop)

      // this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      // this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      // this.x = 0;
      // this.y = this.map(this.globalScaley, 10, 1000, -0.5, -10);
      // this.z = 0;
      // this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      // this.cylinder1.position.set(this.x, this.y, this.z);
      // this.cylinder1.rotation.set(7.855, 0, 0)
      // this.scene.add(this.cylinder1)
    }


    this.setState({
      labels: this.labels,
      caseTexture: this.texture,
      mass: record.mass > 40 ? 40 : record.mass,
      setColor: this.previouColor
    })

    this.texture_real = this.state.caseTexture

    this.WidthTopCorners = record.labelwidth;
    this.LengthEdgeCorners = record.labelheight;
    console.log("this.WidthTopCorners..........." + this.WidthTopCorners);
    console.log("this.LengthEdgeCorners..........." + this.LengthEdgeCorners);
    console.log("this.texture inside getAllLabels = this.texture " + this.texture);
    console.log("this.texture inside getAllLabels = this.state.caseTexture " + this.state.caseTexture);

    console.log("record.labelwidth inside 5 = " + record.labelwidth);
    console.log("record.labelheight inside 5 = " + record.labelheight);
    this.Widthnew = 20;
    this.lengthnew = 20;
  }

  getID = async (labelname) => {
    let id = 0;
    let records = [];
    try {
      let resonse = await axios.get(`/Threed`);
      records = resonse.data;
      for (var record of records) {
        if (record.name === this.props.match.params.casename &&
          record.labelname === labelname) {
          id = record.id;
          return id;
        }
      };
    }
    catch (err) {
      console.log(err);
      return id;
    }
  }

  deleteOneLabel = (id) => {
    const url = "/Threed/" + id;
    axios.delete(url, {
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

  showLine = async () => {

    let caseName = ""
    caseName = this.props.match.params.casename;
    if (caseName.includes("#")) {
      caseName = encodeURIComponent(this.props.match.params.casename)
    }
    try {
      await axios
        .get(`/Threed/getcase/${caseName}`)
        .then((res) => {
          console.log(res.data)
          res.data.map((name, i) => {
            this.setState({
              line_rotation: name.line_rotation,
              line_position: name.line_position,
            })
          })
        })
    }

    catch (e) {
      console.log(e)
    }

    if (this.state.line_position === "Topside" && this.state.line_rotation === "Vertical") {
      this.TopVertical()
    } else if (this.state.line_position === "Topside" && this.state.line_rotation === "Horizontal") {
      this.TopHorizontal()
    }
    else if (this.state.line_position === "Bottomside" && this.state.line_rotation === "Vertical") {
      this.BottomVertical()
    } else if (this.state.line_position === "Bottomside" && this.state.line_rotation === "Horizontal") {
      this.BottomHorizontal()
    }
    else if (this.state.line_position === "Leftside" && this.state.line_rotation === "Vertical") {
      this.LeftVertical()
    } else if (this.state.line_position === "Leftside" && this.state.line_rotation === "Horizontal") {
      this.LeftHorizontal()
    }
    else if (this.state.line_position === "Rightside" && this.state.line_rotation === "Vertical") {
      this.RightVertical()
    }
    else if (this.state.line_position === "Rightside" && this.state.line_rotation === "Horizontal") {
      this.RightHorizontal()
    } else if (this.state.line_position === "Frontside" && this.state.line_rotation === "Vertical") {
      this.FrontVertical()
    } else if (this.state.line_position === "Frontside" && this.state.line_rotation === "Horizontal") {
      this.FrontHorizontal()
    }
    else if (this.state.line_position === "Backside" && this.state.line_rotation === "Vertical") {
      this.BackVertical()
    } else if (this.state.line_position === "Backside" && this.state.line_rotation === "Horizontal") {
      this.BackHorizontal()
    }
  }
  saveOneLabel = (id) => {
    console.log("Called editMUILabel saveOneLabel");
    var globalName = "";
    let index = this.labelNames.indexOf(this.globalName);
    console.log("Inside saveOneLabel this.previousColor = " + this.previouColor + " Index = " + index);
    // this.currentColorArr[index] = color;
    let currentLabelColor;
    if (this.currentColorArr[index] == null || this.currentColorArr[index] == undefined || this.currentColorArr[index] == "" || this.currentColorArr[index] == "#FFFFFF") {
      currentLabelColor = "#FFFFFF";
    } else {
      currentLabelColor = this.currentColorArr[index];
    }


    try {
      if (this.globalName && this.globalName !== "") {
        globalName = this.globalName;
      }
      else {
        globalName = "Label0";
      }
    }
    catch (e) {
      console.log("Error inside saveOneLabel1 = " + e);
      globalName = "Label0";
    }

    const url = "/Threed/" + id;
    if (this.texture == undefined) {
      this.texture = this.texture_real
    }
    axios.put(url, {
      id: id,
      name: this.props.match.params.casename,
      length: this.globalScalex,
      width: this.globalScaley,
      height: this.globalScalez,
      // material: this.state.showcaseTexture,
      material: this.texture ? this.texture : "Texture1",
      mass: this.globalMass,
      // "labelcolour" : this.previouColor,
      labelcolour: currentLabelColor,



      directionx: this.globalRotationx,
      directiony: this.globalRotationy,
      directionz: this.globalRotationz,
      typename: this.globalType,
      labelname: globalName,
      labelx: this.globalx,
      labely: this.globaly,
      labelwidth: this.globalWidth,
      labelheight: this.globalHeight,
      "line_rotation": !this.state.line_rotation ? this.orientation : this.state.line_rotation,
      "line_position": !this.state.line_position ? this.faceSide : this.state.line_position,

      finalHeight: this.state.newfinalHeight,
      finalWidth: this.state.newfinalWidth,
      finalXpos: this.state.newfinalXpos,
      finalYpos: this.state.newfinalYpos,
      mapPosition: this.state.newmapPosition,
      mapPositionx: this.state.newmapPositionx,
      mapPositiony: this.state.newmapPositiony,
      changeHeight: this.state.newchangeHeight,
      changeWidth: this.state.newchangeWidth,
      changePositionA: this.state.newchangePositionA,
      changePositionB: this.state.newchangePositionB,
    })
      .then((response) => {
        this.showLine()
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
    console.log("this.previouColor inside saveOneLabel = " + this.previouColor + " setColor = " + this.state.setColor);
    this.showLine()
  }

  saveOneLabelColor = (id, tempLabelInfo) => {

    console.log("Called editMUILabel saveOneLabelColor");
    var globalName = "";
    try {
      if (this.globalName && this.globalName !== "") {
        globalName = this.globalName;
      }
      else {
        globalName = "Label0";
      }
    }
    catch (e) {
      console.log("Error inside saveOneLabe1l = " + e);
      globalName = "Label0";
    }
    console.log("new entered labelcolor: " + tempLabelInfo.labelcolour)

    const url = "/Threed/" + id;
    axios.put(url, {
      "id": id,
      "name": tempLabelInfo.name,
      "length": tempLabelInfo.length,
      "width": tempLabelInfo.width,
      "height": tempLabelInfo.height,
      // "material": tempLabelInfo.material,
      "material": tempLabelInfo.material ? tempLabelInfo.material : "Texture1",
      "mass": tempLabelInfo.mass,
      "labelcolour": tempLabelInfo.labelcolour,
      "directionx": tempLabelInfo.directionx,
      "directiony": tempLabelInfo.directiony,
      "directionz": tempLabelInfo.directionz,
      "typename": tempLabelInfo.typename,
      // "typename": this.state.labeltype,
      "labelname": tempLabelInfo.labelname,
      "labelx": tempLabelInfo.labelx,
      "labely": tempLabelInfo.labely,
      "labelwidth": tempLabelInfo.labelwidth,
      "labelheight": tempLabelInfo.labelheight,
      "line_rotation": !this.state.line_rotation ? this.orientation : this.state.line_rotation,
      "line_position": !this.state.line_position ? this.faceSide : this.state.line_position,

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
  saveLabel = (label) => {
    axios.post("/Threed", {
      name: this.props.match.params.casename,
      length: this.globalScalex,
      width: this.globalScaley,
      height: this.globalScalez,
      // material: this.state.showcaseTexture,
      material: this.texture ? this.texture : "Texture1",
      mass: this.state.mass ? this.state.mass:0,
      // "labelcolour": this.previouColor,
      labelcolour: "#FFFFFF",
      directionx: this.globalRotationx,
      directiony: this.globalRotationy,
      directionz: this.globalRotationz,
      typename: this.globalType,
      labelname: this.globalName,
      labelx: this.globalx,
      labely: this.globaly,
      labelwidth: this.globalWidth,
      labelheight: this.globalHeight,
      "line_rotation": !this.state.line_rotation ? this.orientation : this.state.line_rotation,
      "line_position": !this.state.line_position ? this.faceSide : this.state.line_position,
      finalHeight: this.state.newfinalHeight,
      finalWidth: this.state.newfinalWidth,
      finalXpos: this.state.newfinalXpos,
      finalYpos: this.state.newfinalYpos,
      mapPosition: this.state.newmapPosition,
      mapPositionx: this.state.newmapPositionx,
      mapPositiony: this.state.newmapPositiony,
      changeHeight: this.state.newchangeHeight,
      changeWidth: this.state.newchangeWidth,
      changePositionA: this.state.newchangePositionA,
      changePositionB: this.state.newchangePositionB,
    })
      .then((response) => {
        this.showLine()
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
    console.log("this.previous color inside saveLabel = " + this.previouColor);
  }

  map(Val, in_max, in_min, out_max, out_min) {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    return calculatedVal;
  }

  map2(Val, in_max, in_min, out_max, out_min, label_x) {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min) - label_x;
    return calculatedVal;
  }

  map3(Val, in_max, in_min, out_max, out_min, label_y) {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min) - label_y;
    return calculatedVal;
  }

  calFactorWidth = (x) => {
    console.log("calFactorWidth x is " + x);
    var factor = this.widthPixel / x;
    console.log("calFactorWidth is " + factor)
    return factor;
  }

  calFactorHeight = (y) => {
    var factor = this.heightPixel / y;
    return factor;
  }


  calPositionTopFactorX = (x) => {
    var facX = this.originTopMaxX / x;
    return facX;
  }

  calPositionTopFactorY = (y) => {
    var facY = this.originTopMaxY / y;
    return facY;
  }


  calPositionFactorX = (x) => {
    var facX = this.originMaxX / x;
    return facX;
  }

  calPositionFactorY = (y) => {
    var facY = this.originMaxY / y;
    return facY;
  }

  createRectTop = (label, ctx) => {
    var factorX = this.calPositionTopFactorX(this.globalScalez);
    var factorY = this.calPositionTopFactorY(this.globalScalex);
    var Xpos = factorX * label.labely;
    var Ypos = factorY * label.labelx;
    console.log("Top Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalex);
    var heightfactor = this.calFactorHeight(this.globalScalez);
    console.log("widthfactor " + widthfactor + " heightfactor " + heightfactor);
    var newWidth = label.labelwidth * widthfactor;
    var newHeight = label.labelheight * heightfactor;
    console.log("this.state.setColor inside createRectTop = " + this.state.setColor);

    // ctx.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx.fillStyle = "#FFFFFF";
    } else {
      ctx.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx.fillRect(Ypos, Xpos, (newWidth * 3 / 4), (newHeight / 3));
    console.log("this.globalName inside createRectTop = " + this.globalName);
    if (label.labelname === this.globalName) {
      if (ctx.fillStyle = this.selectedColor) {
        this.currLabelType = "Top"
      };
      ctx.fillRect(Ypos, Xpos, (newWidth * 3 / 4), (newHeight / 3));
      // ctx.strokeRect(Ypos, Xpos, (newWidth * 3 / 4), (newHeight / 3));
    }

    return ctx;
  }

  createRectFront = (label, ctx) => {
    var factorX = this.calPositionFactorX(this.globalScalex);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalex);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    console.log("widthfactor " + widthfactor + " heightfactor " + heightfactor);
    var newWidth = label.labelwidth * widthfactor;
    var newHeight = label.labelheight * heightfactor;
    var y = this.map(Ypos, this.originMinY, this.originMaxY, this.originMaxY, this.originMinY);
    var factor = this.map(newHeight, this.minHeight, this.maxHeight, this.originMinY, this.originMaxY);
    console.log("newWidth is " + newWidth + " newHeight is " + newHeight);


    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null ||
      this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined ||
      this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx.fillStyle = "#FFFFFF";
    } else {
      ctx.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }

    ctx.fillRect(Xpos, (y - factor), (newWidth * 3 / 4), (newHeight / 3));
    if (label.labelname === this.globalName) {
      if (ctx.fillStyle = this.selectedColor) {
        this.currLabelType = "Front"
      }; //this.state.setColor;
      ctx.fillRect(Xpos, (y - factor), (newWidth * 3 / 4), (newHeight / 3));
    }
    return ctx;
  }

  createRectBack = (label, ctx) => {
    var factorX = this.calPositionFactorX(this.globalScalex);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalex);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    console.log("widthfactor " + widthfactor + " heightfactor " + heightfactor);
    var newWidth = label.labelwidth * widthfactor;
    var newHeight = label.labelheight * heightfactor;
    var y = this.map(Ypos, this.originMinY, this.originMaxY, this.originMaxY, this.originMinY);
    var factor = this.map(newHeight, this.minHeight, this.maxHeight, this.originMinY, this.originMaxY);
    // ctx.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx.fillStyle = "#FFFFFF";
    } else {
      ctx.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx.fillRect(Xpos, (y - factor), (newWidth * 3 / 4), (newHeight / 3));
    if (label.labelname === this.globalName) {
      if (ctx.fillStyle = this.selectedColor) {
        this.currLabelType = "Back"
      }; //this.state.setColor;
      ctx.fillRect(Xpos, (y - factor), (newWidth * 3 / 4), (newHeight / 3));
    }
    return ctx;
  }

  createRectRight = (label, ctx) => {
    var factorX = this.calPositionFactorX(this.globalScalez);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalez);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    console.log("widthfactor " + widthfactor + " heightfactor " + heightfactor);
    var newWidth = label.labelwidth * widthfactor;
    var newHeight = label.labelheight * heightfactor;
    var y = this.map(Ypos, this.originMinY, this.originMaxY, this.originMaxY, this.originMinY);
    var factor = this.map(newHeight, this.minHeight, this.maxHeight, this.originMinY, this.originMaxY);
    // ctx.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx.fillStyle = "#FFFFFF";
    } else {
      ctx.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx.fillRect(Xpos, (y - factor), (newWidth * 3 / 4), (newHeight / 3));
    if (label.labelname === this.globalName) {
      if (ctx.fillStyle = this.selectedColor) {
        this.currLabelType = "Right"
      }; //this.state.setColor;
      ctx.fillRect(Xpos, (y - factor), (newWidth * 3 / 4), (newHeight / 3));
    }
    console.log("This is side values , y is " + y)
    console.log(" diff is " + (y - factor));
    return ctx;
  }

  createArrows = (ctx, color, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10) => {
    //Y-axis 
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1); //(10,90)
    ctx.lineTo(x2, y2); //(10,145)
    ctx.stroke();
    //Arrow
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1); //(10,90)
    ctx.lineTo(x3, y3); //(17, 100)
    ctx.stroke();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1); //(10,90)
    ctx.lineTo(x4, y4); //(3, 100)
    ctx.stroke();
    //X-axis
    ctx.fill
    ctx.lineWidth = this.lineWidth / 2;
    ctx.strokeStyle = color;
    ctx.moveTo(x5, y5); //(8, 145)
    ctx.lineTo(x6, y6); //(100,145)
    ctx.stroke();
    //Arrow
    ctx.fill
    ctx.lineWidth = this.lineWidth / 2;
    ctx.strokeStyle = color;
    ctx.moveTo(x7, y7); //(85,141)
    ctx.lineTo(x6, y6); //(100,145)
    ctx.stroke();
    ctx.fill
    ctx.lineWidth = this.lineWidth / 2;
    ctx.strokeStyle = color;
    ctx.moveTo(x8, y8); //(85,149)
    ctx.lineTo(x6, y6); //(100,145)
    ctx.stroke();
    //text 
    ctx.fillText("B", x9, y9); //(20,100)
    ctx.fillText("A", x10, y10); //(90,140)
    return ctx;
  }



  createArrowsTop = (ctx, color, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10) => {

    //X-axis
    ctx.fill
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.moveTo(10, 4);
    ctx.lineTo(10, 50);
    ctx.stroke();

    ctx.fill
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.moveTo(5, 45);
    ctx.lineTo(10, 50);
    ctx.stroke();

    ctx.fill
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.moveTo(15, 45);
    ctx.lineTo(10, 50);
    ctx.stroke();

    ctx.fill
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.moveTo(10, 5);
    ctx.lineTo(110, 5);
    ctx.stroke();

    ctx.fill
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.moveTo(100, 2);
    ctx.lineTo(110, 5);
    ctx.stroke();

    ctx.fill
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.moveTo(100, 8);
    ctx.lineTo(110, 5);
    ctx.stroke();

    if (this.currLabelType == "Top-Right" || this.currLabelType == "Top-Left") {
      ctx.fillText("A", 17, 50);
      ctx.fillText("B", 105, 15);

    } else {
      ctx.fillText("B", 17, 50);
      ctx.fillText("A", 105, 15);
    }
    return ctx;
  }

  createRectLeft = (label, ctx) => {
    var factorX = this.calPositionFactorX(this.globalScalez);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalez);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    console.log("widthfactor " + widthfactor + " heightfactor " + heightfactor);
    var newWidth = label.labelwidth * widthfactor;
    var newHeight = label.labelheight * heightfactor;
    var y = this.map(Ypos, this.originMinY, this.originMaxY, this.originMaxY, this.originMinY);
    var factor = this.map(newHeight, this.minHeight, this.maxHeight, this.originMinY, this.originMaxY);
    // ctx.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx.fillStyle = "#FFFFFF";
    } else {
      ctx.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx.fillRect(Xpos, (y - factor), (newWidth * 3 / 4), (newHeight / 3));
    if (label.labelname === this.globalName) {
      if (ctx.fillStyle = this.selectedColor) {
        this.currLabelType = "Left"
      }; //this.state.setColor;
      ctx.fillRect(Xpos, (y - factor), (newWidth * 3 / 4), (newHeight / 3));
    }
    return ctx;
  }

  createRect = (label, ctx) => {
    console.log("this.globalName inside createRect = ", this.globalName);
    console.log("label.labelname inside createRect = ", label.labelname);
    console.log("label.typename inside createRect = ", label.typename);
    ctx.fillStyle = this.state.setColor;
    ctx.fillRect(label.labely, label.labelx, label.labelwidth * 3 / 4, label.labelheight / 3);
    if (label.labelname === this.globalName) {
      ctx.fillStyle = this.selectedColor; //this.state.setColor;
      ctx.fillRect(label.labely, label.labelx, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return ctx;
  }

  constrain(Val, min, max) {

    return (Val) < (min) ? (min) : (Val) > (max) ? (max) : (Val)

  }

  createRectTopFront = (label, ctx1, ctx2) => {
    var factorX = this.calPositionFactorX(this.globalScalex);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front................ Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalex);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    var lengthfactor = this.calFactorHeight(this.globalScalez);
    console.log("TF widthfactor " + widthfactor + " heightfactor " + heightfactor);
    var newWidth = label.labelwidth * widthfactor;
    var newHeight = label.labelheight * heightfactor;
    var newLength = label.labelheight * lengthfactor;
    //var y = this.map(newLength, this.minHeight, this.maxHeight, this.originTopMaxY2, this.originTopMinY);    
    console.log("label.labely " + label.labely + " label.labelheight " + label.labelheight + " this.globalScaley " + this.globalScaley);
    var actualFrontMinY = this.globalScaley - (label.labelheight - 10);
    var actualFrontMaxY = this.globalScaley - 10;
    var frontHeight;
    var topHeight;
    console.log("actualFrontMinY " + actualFrontMinY + " label.labely " + label.labely + " actualFrontMaxY " + actualFrontMaxY);
    if ((actualFrontMinY <= label.labely) && (actualFrontMaxY >= label.labely)) {
      //Front
      frontHeight = this.globalScaley - label.labely;
      console.log("heightFront " + frontHeight);
      //Top
      topHeight = label.labelheight - frontHeight;
      console.log("topHeight " + topHeight);
    }
    else {

      // toast.error("Enter the value in the range of (" + actualFrontMinY + " to " + actualFrontMaxY + ")!!!. ", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      console.log("...............................this.state.labelb " + this.state.labelb);
      //Front
      frontHeight = this.globalScaley - this.state.labelb;
      console.log("heightFront " + frontHeight);
      //Top
      topHeight = label.labelheight - frontHeight;
      console.log("topHeight " + topHeight);
    }
    var y = this.map(topHeight * lengthfactor, this.minHeight, this.maxHeight, this.originTopMaxY2, this.originTopMinY);
    // ctx1.fillStyle = this.state.setColor;
    // ctx2.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx1.fillStyle = "#FFFFFF";
      ctx2.fillStyle = "#FFFFFF";
    } else {
      ctx1.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
      ctx2.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx1.fillRect(Xpos, y, (newWidth * 3 / 4), ((topHeight * lengthfactor) / 3)); // top
    ctx2.fillRect(Xpos, 0, (newWidth * 3 / 4), ((frontHeight * heightfactor) / 3)); // front
    if (label.labelname === this.globalName) {
      if ((ctx1.fillStyle = this.selectedColor) && (ctx2.fillStyle = this.selectedColor)) {
        this.currLabelType = "Top-Front"
      } //this.state.setColor;
      ctx1.fillRect(Xpos, y, (newWidth * 3 / 4), ((topHeight * lengthfactor) / 3));
      ctx2.fillRect(Xpos, 0, (newWidth * 3 / 4), ((frontHeight * heightfactor) / 3));
    }
    return [ctx1, ctx2];
  }

  createRectTopBack = (label, ctx1, ctx2) => {
    var factorX = this.calPositionFactorX(this.globalScalex);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalex);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    var lengthfactor = this.calFactorHeight(this.globalScalez);
    console.log("widthfactor " + widthfactor + " heightfactor " + heightfactor);
    var newWidth = label.labelwidth * widthfactor;
    var newHeight = label.labelheight * heightfactor;
    var newLength = label.labelheight * lengthfactor;
    // set 
    var actualBackMinY = this.globalScaley - (label.labelheight - 10);
    var actualBackMaxY = this.globalScaley - 10;
    var backHeight;
    var topHeight;
    console.log("actualFrontMinY " + actualBackMinY + " label.labely " + label.labely + " actualFrontMaxY " + actualBackMaxY);
    if ((actualBackMinY <= label.labely) && (actualBackMaxY >= label.labely)) {
      //Front
      backHeight = this.globalScaley - label.labely;
      console.log("heightFront " + backHeight);
      //Top
      topHeight = label.labelheight - backHeight;
      console.log("topHeight " + topHeight);
    }
    else {
      // toast.error("Enter the value in the range of (" + actualBackMinY + " to " + actualBackMaxY + ")!!!", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      // this.state.labelb = this.constrain(label.labely, actualBackMinY, actualBackMaxY);
      console.log("...............................this.state.labelb " + this.state.labelb);
      //back
      backHeight = this.globalScaley - this.state.labelb;
      console.log("heightFront " + backHeight);
      //Top
      topHeight = label.labelheight - backHeight;
      console.log("topHeight " + topHeight);
    }
    var newX = this.map(Xpos, this.originMinX, this.originMaxX, this.originMaxX, this.originMinX);
    var Cx = this.map(newWidth, this.minWidth, this.maxWidth, this.originTopMinX, this.originTopMaxX2);
    // ctx1.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx1.fillStyle = "#FFFFFF";
      ctx2.fillStyle = "#FFFFFF";
    } else {
      ctx1.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
      ctx2.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx1.fillRect(newX - Cx, 0, (newWidth * 3 / 4), (topHeight * lengthfactor / 3)); // top
    ctx2.fillRect(Xpos, 0, (newWidth * 3 / 4), (backHeight * heightfactor / 3)); //back
    if (label.labelname === this.globalName) {
      if ((ctx1.fillStyle = this.selectedColor) && (ctx2.fillStyle = this.selectedColor)) {
        this.currLabelType = "Top-Back"
      }  //this.state.setColor;
      ctx1.fillRect(newX - Cx, 0, (newWidth * 3 / 4), (topHeight * lengthfactor / 3));
      ctx2.fillRect(Xpos, 0, (newWidth * 3 / 4), (backHeight * heightfactor / 3));
    }
    return [ctx1, ctx2];
  }

  createRectTopSide = (label, ctx1, ctx2) => {
    var factorX = this.calPositionFactorX(this.globalScalez);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalez);
    // var heightfactorTop = this.calFactorHeight(this.globalScalex);
    var heightfactorTop = this.calFactorWidth(this.globalScalex);
    var heightfactorSide = this.calFactorHeight(this.globalScaley);
    var newWidth = label.labelwidth * widthfactor;
    var newHeightTop = label.labelheight * heightfactorTop;
    var newHeightSide = label.labelheight * heightfactorSide;
    // set 
    var actualSideMinY = this.globalScaley - (label.labelheight - 10);
    var actualSideMaxY = this.globalScaley - 10;
    var sideHeight;
    var topHeight;
    console.log("actualFrontMinY " + actualSideMinY + " label.labely " + label.labely + " actualFrontMaxY " + actualSideMaxY);
    if ((actualSideMinY <= label.labely) && (actualSideMaxY >= label.labely)) {
      //Side
      sideHeight = this.globalScaley - label.labely;
      console.log("heightFront " + sideHeight);
      //Top
      topHeight = label.labelheight - sideHeight;
      console.log("topHeight " + topHeight);
    }
    else {
      // toast.error("Enter the value in the range of (" + actualSideMinY + " to " + actualSideMaxY + ")!!! ", { autoClose: 5000, position: toast.POSITION.TOP_CENTER
      //  }
      // )
      // this.state.labelb = this.constrain(label.labely, actualSideMinY, actualSideMaxY);
      console.log("...............................this.state.labelb " + this.state.labelb);
      //Side
      sideHeight = this.globalScaley - this.state.labelb;
      console.log("heightFront " + sideHeight);
      //Top
      topHeight = label.labelheight - sideHeight;
      console.log("topHeight " + topHeight);
    }
    var newW = this.map(newWidth, this.minWidth, this.maxWidth, this.minHeight, this.maxHeight);
    var newH = this.map(newHeightSide, this.minWidth, this.maxWidth, this.minHeight, this.maxHeight);
    var newY = this.map(Xpos, this.originMinX, this.originMaxX, this.originMinY, this.originMaxY);
    var x = this.map(newY, this.originMinY, this.originMaxY, this.originMinX, this.originMaxX);
    // ctx1.fillStyle = this.state.setColor;
    // ctx2.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx1.fillStyle = "#FFFFFF";
      ctx2.fillStyle = "#FFFFFF";
    } else {
      ctx1.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
      ctx2.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx1.fillRect(0, newY, ((topHeight * heightfactorTop) * 3 / 4), (newW / 3)); // top
    ctx2.fillRect(x, 0, (newWidth * 3 / 4), ((sideHeight * heightfactorSide) / 3));
    if (label.labelname === this.globalName) {
      if ((ctx1.fillStyle = this.selectedColor) && (ctx2.fillStyle = this.selectedColor)) {
        this.currLabelType = "Top-Right"
      }  //this.state.setColor;
      ctx1.fillRect(0, newY, ((topHeight * heightfactorTop) * 3 / 4), (newW / 3));
      ctx2.fillRect(x, 0, (newWidth * 3 / 4), ((sideHeight * heightfactorSide) / 3));
    }
    return [ctx1, ctx2];
  }

  createRectTopOpSide = (label, ctx1, ctx2) => {
    var factorX = this.calPositionFactorX(this.globalScalez);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactor = this.calFactorWidth(this.globalScalez);
    var heightfactorTop = this.calFactorWidth(this.globalScalex);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    var heightfactorOpside = this.calFactorHeight(this.globalScaley);
    console.log(" tops label.labely " + label.labely + " heightfactor " + heightfactor);
    var newWidth = label.labelwidth * widthfactor;
    var newHeight = label.labelheight * heightfactorTop;
    var factorWidth = label.labelwidth * widthfactor;
    var factorHeightOpside = label.labelheight * heightfactorOpside;
    // set 
    var actualOpSideMinY = this.globalScaley - (label.labelheight - 10);
    var actualOpSideMaxY = this.globalScaley - 10;
    var opSideHeight;
    var topHeight;
    console.log("actualFrontMinY " + actualOpSideMinY + " label.labely " + label.labely + " actualFrontMaxY " + actualOpSideMaxY);
    if ((actualOpSideMinY <= label.labely) && (actualOpSideMaxY >= label.labely)) {
      //OpSide
      opSideHeight = this.globalScaley - label.labely;
      console.log("heightFront " + opSideHeight);
      //Top
      topHeight = label.labelheight - opSideHeight;
      console.log("topHeight " + topHeight);
    }
    else {
      // toast.error("Enter the value in the range of (" + actualOpSideMinY + " to " + actualOpSideMaxY + ")!!!", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      // this.state.labelb = this.constrain(label.labely, actualOpSideMinY, actualOpSideMinY);
      console.log("...............................this.state.labelb " + this.state.labelb);
      //OpSide
      opSideHeight = this.globalScaley - this.state.labelb;
      console.log("heightFront " + opSideHeight);
      //Top
      topHeight = label.labelheight - opSideHeight;
      console.log("topHeight " + topHeight);

    }
    var newH = this.map(factorWidth, this.minWidth, this.maxWidth, this.minHeight, this.maxHeight);
    var Cx = this.map(factorWidth, this.minWidth, this.maxWidth, this.originTopMinY, this.originTopMaxY2);
    var x = this.map(topHeight * heightfactorTop, this.minWidth, this.maxWidth, this.originMaxX, this.originMinX);
    var y = this.map(Xpos, this.originMinX, this.originMaxX, this.originMaxY, this.originMinY);
    console.log("factorWidth is " + factorWidth + " newWidth is " + newWidth + " newHeight is " + newHeight + " newH is " + newH + " x is " + x + " y is ");
    // ctx1.fillStyle = this.state.setColor;
    // ctx2.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx1.fillStyle = "#FFFFFF";
      ctx2.fillStyle = "#FFFFFF";
    } else {
      ctx1.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
      ctx2.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx1.fillRect(x, (y - Cx), ((topHeight * heightfactorTop) * 3 / 4), (newH / 3)); // top
    ctx2.fillRect(Xpos, 0, (newWidth * 3 / 4), (opSideHeight * heightfactorOpside / 3)); // opside
    if (label.labelname === this.globalName) {
      if ((ctx1.fillStyle = this.selectedColor) && (ctx2.fillStyle = this.selectedColor)) {
        this.currLabelType = "Top-Left"
      }  //this.state.setColor;
      ctx1.fillRect(x, (y - Cx), ((topHeight * heightfactorTop) * 3 / 4), (newH / 3));
      ctx2.fillRect(Xpos, 0, (newWidth * 3 / 4), (opSideHeight * heightfactorOpside / 3));
    }
    return [ctx1, ctx2];
  }

  //Over-Edge
  createRectFrontSide = (label, ctx1, ctx2) => {
    var factorX = this.calPositionFactorX(this.globalScalex);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactorFront = this.calFactorWidth(this.globalScalex);
    var widthfactorSide = this.calFactorWidth(this.globalScalez);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    var lengthfactor = this.calFactorHeight(this.globalScalez);
    console.log("FS widthfactorSide " + widthfactorSide + " widthfactorFront " + widthfactorFront);
    var newWidthFront = label.labelwidth * widthfactorFront;
    var newWidthSide = label.labelwidth * widthfactorSide;
    var newHeight = label.labelheight * heightfactor;
    // set 
    var actualRightMinX = this.globalScalez - (label.labelwidth - 10);
    var actualRightMaxX = this.globalScalez - 10;
    var rightWidth;
    var frontWidth;
    console.log("actualRightMinX " + actualRightMinX + " label.labelx " + label.labelx + " actualRightMaxX " + actualRightMaxX);
    if ((actualRightMinX <= label.labelx) && (actualRightMaxX >= label.labelx)) {
      //Right
      rightWidth = this.globalScalez - label.labelx;
      console.log("rightWidth " + rightWidth);
      //Front
      frontWidth = label.labelwidth - rightWidth;
      console.log("frontWidth " + frontWidth);
    }
    else {

      // toast.error("Enter the value in the range of(" + actualRightMinX + " to " + actualRightMaxX + ")!!!", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      // this.state.labela = this.constrain(label.labelx, actualRightMinX, actualRightMaxX);
      console.log("...............................this.state.labelb " + this.state.labela);
      //Right
      rightWidth = this.globalScalez - this.state.labela;
      console.log("rightWidth " + rightWidth);
      //Front
      frontWidth = label.labelwidth - rightWidth;
      console.log("frontWidth " + frontWidth);
    }
    var xSide = this.map(rightWidth * widthfactorSide, this.minWidth, this.maxWidth, this.originMaxX, this.originMinX);
    console.log("FS newWidthSide " + newWidthSide + " newWidthFront " + newWidthFront);
    // ctx1.fillStyle = this.state.setColor;
    // ctx2.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx1.fillStyle = "#FFFFFF";
      ctx2.fillStyle = "#FFFFFF";
    } else {
      ctx1.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
      ctx2.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx1.fillRect(0, Ypos, ((frontWidth * widthfactorFront) * 3 / 4), (newHeight / 3)); // front
    ctx2.fillRect(xSide, Ypos, ((rightWidth * widthfactorSide) * 3 / 4), (newHeight / 3)); // Right
    if (label.labelname === this.globalName) {
      if ((ctx1.fillStyle = this.selectedColor) && (ctx2.fillStyle = this.selectedColor)) {
        this.currLabelType = "Front-Right"
      }  //this.state.setColor;
      ctx1.fillRect(0, Ypos, ((frontWidth * widthfactorFront) * 3 / 4), (newHeight / 3));
      ctx2.fillRect(xSide, Ypos, ((rightWidth * widthfactorSide) * 3 / 4), (newHeight / 3));
    }
    return [ctx1, ctx2];
  }

  createRectSideBack = (label, ctx1, ctx2) => {
    var factorX = this.calPositionFactorX(this.globalScalex);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactorBack = this.calFactorWidth(this.globalScalex);
    var widthfactorSide = this.calFactorWidth(this.globalScalez);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    console.log("OpS_back  widthfactorSide " + widthfactorSide + " widthfactorBack " + widthfactorBack);
    var newWidthBack = label.labelwidth * widthfactorBack;
    var newWidthSide = label.labelwidth * widthfactorSide;
    var newHeight = label.labelheight * heightfactor;
    // set 
    var actualBackMinX = this.globalScalex - (label.labelwidth - 10);
    var actualBackMaxX = this.globalScalex - 10;
    var backWidth;
    var sideWidth;
    console.log("actualRightMinX " + actualBackMinX + " label.labelx " + label.labelx + " actualRightMaxX " + actualBackMaxX);
    if ((actualBackMinX <= label.labelx) && (actualBackMaxX >= label.labelx)) {
      //back
      backWidth = this.globalScalex - label.labelx;
      console.log("rightWidth " + backWidth);
      //side
      sideWidth = label.labelwidth - backWidth;
      console.log("frontWidth " + sideWidth);
    }
    else {
      // toast.error("Enter the value in the range of(" + actualBackMinX + " to " + actualBackMaxX + ")!!!", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      // this.state.labela = this.constrain(label.labelx, actualBackMinX, actualBackMaxX);
      console.log("...............................this.state.labelb " + this.state.labela);
      //back
      backWidth = this.globalScalex - this.state.labela;
      console.log("rightWidth " + backWidth);
      //side
      sideWidth = label.labelwidth - backWidth;
      console.log("frontWidth " + sideWidth);

    }

    var xSide = this.map(backWidth * widthfactorBack, this.minWidth, this.maxWidth, this.originMaxX, this.originMinX);
    console.log("S_back newWidthSide " + newWidthSide + " newWidthBack " + newWidthBack + " xSide_b " + xSide);
    // ctx1.fillStyle = this.state.setColor;
    // ctx2.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx1.fillStyle = "#FFFFFF";
      ctx2.fillStyle = "#FFFFFF";
    } else {
      ctx1.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
      ctx2.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx1.fillRect(0, Ypos, ((sideWidth * widthfactorSide) * 3 / 4), (newHeight / 3)); // side
    ctx2.fillRect(xSide, Ypos, ((backWidth * widthfactorBack) * 3 / 4), (newHeight / 3)); // back
    if (label.labelname === this.globalName) {
      if ((ctx1.fillStyle = this.selectedColor) && (ctx2.fillStyle = this.selectedColor)) {
        this.currLabelType = "Right-Back"
      } //this.state.setColor;
      ctx1.fillRect(0, Ypos, ((sideWidth * widthfactorSide) * 3 / 4), (newHeight / 3));
      ctx2.fillRect(xSide, Ypos, ((backWidth * widthfactorBack) * 3 / 4), (newHeight / 3));
    }
    return [ctx1, ctx2];
  }

  createRectFrontOpSide = (label, ctx1, ctx2) => {
    var factorX = this.calPositionFactorX(this.globalScalex);
    var factorY = this.calPositionFactorY(this.globalScaley);
    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Front Ypos " + Ypos + " Xpos " + Xpos + " factorX " + factorX + " factorY " + factorY);
    var widthfactorFront = this.calFactorWidth(this.globalScalex);
    var widthfactorSide = this.calFactorWidth(this.globalScalez);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    console.log("FopS widthfactorSide " + widthfactorSide + " widthfactorFront " + widthfactorFront);
    var newWidthFront = label.labelwidth * widthfactorFront;
    var newWidthSide = label.labelwidth * widthfactorSide;
    var newHeight = label.labelheight * heightfactor;
    // set 
    var actualFrontMinX = this.globalScalex - (label.labelwidth - 10);
    var actualFrontMaxX = this.globalScalex - 10;
    var frontWidth;
    var leftWidth;
    console.log("actualFrontMinX " + actualFrontMinX + " label.labelx " + label.labelx + " actualFrontMaxX " + actualFrontMaxX);
    if ((actualFrontMinX <= label.labelx) && (actualFrontMaxX >= label.labelx)) {
      //front
      frontWidth = this.globalScalex - label.labelx;
      console.log("frontWidth " + frontWidth);
      //left
      leftWidth = label.labelwidth - frontWidth;
      console.log("leftWidth " + leftWidth);
    }
    else {
      // toast.error("Enter the value in the range of(" + actualFrontMinX + " to " + actualFrontMaxX + ")!!!", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      // this.state.labela = this.constrain(label.labelx, actualFrontMinX, actualFrontMaxX);
      console.log("...............................this.state.labelb " + this.state.labela);
      //front
      frontWidth = this.globalScalex - this.state.labela;
      console.log("frontWidth " + frontWidth);
      //left
      leftWidth = label.labelwidth - frontWidth;
      console.log("leftWidth " + leftWidth);

    }
    var xFront = this.map((frontWidth * widthfactorFront), this.minWidth, this.maxWidth, this.originMaxX, this.originMinX);
    // console.log("FS newWidthSide "+newWidthSide+" newWidthFront "+newWidthFront);  
    // ctx1.fillStyle = this.state.setColor;
    // ctx2.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx1.fillStyle = "#FFFFFF";
      ctx2.fillStyle = "#FFFFFF";
    } else {
      ctx1.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
      ctx2.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx1.fillRect(xFront, Ypos, ((frontWidth * widthfactorFront) * 3 / 4), (newHeight / 3)); // front
    ctx2.fillRect(0, Ypos, ((leftWidth * widthfactorSide) * 3 / 4), (newHeight / 3)); // Opside
    if (label.labelname === this.globalName) {
      if ((ctx1.fillStyle = this.selectedColor) && (ctx2.fillStyle = this.selectedColor)) {
        this.currLabelType = "Front-Left"
      } //this.state.setColor;
      ctx1.fillRect(xFront, Ypos, ((frontWidth * widthfactorFront) * 3 / 4), (newHeight / 3));
      ctx2.fillRect(0, Ypos, ((leftWidth * widthfactorSide) * 3 / 4), (newHeight / 3));
    }
    return [ctx1, ctx2];
  }

  //Left-Back
  createRectOpSideBack = (label, ctx1, ctx2) => {

    var factorX = this.calPositionFactorX(this.globalScalex);
    var factorY = this.calPositionFactorY(this.globalScaley);
    console.log("Inside createRectOpSideBack factorX = " + factorX + " factorY = " + factorY);

    var Xpos = factorX * label.labelx;
    var Ypos = factorY * label.labely;
    console.log("Inside createRectOpSideBack Xpos = " + Xpos + " Ypos = " + Ypos);

    var widthfactorBack = this.calFactorWidth(this.globalScalex);
    var widthfactorOpSide = this.calFactorWidth(this.globalScalez);
    var heightfactor = this.calFactorHeight(this.globalScaley);
    console.log("Inside createRectOpSideBack widthfactorBack = " + widthfactorBack + " widthfactorOpSide = " + widthfactorOpSide + " heightfactor = " + heightfactor);

    // newWidthBack & newWidthOpSide not used
    var newWidthBack = label.labelwidth * widthfactorBack;
    var newWidthOpSide = label.labelwidth * widthfactorOpSide;
    var newHeight = label.labelheight * heightfactor;
    console.log("Inside createRectOpSideBack newWidthBack = " + newWidthBack + " newWidthOpSide = " + newWidthOpSide + " newHeight = " + newHeight);

    // set 
    var actualLeftMinX = this.globalScalez - (label.labelwidth - 10);
    var actualLeftMaxX = this.globalScalez - 10;
    console.log("Inside createRectOpSideBack actualLeftMinX = " + actualLeftMinX + " actualLeftMaxX = " + actualLeftMaxX);

    var leftWidth;
    var backWidth;

    if ((actualLeftMinX <= label.labelx) && (actualLeftMaxX >= label.labelx)) {
      //left
      leftWidth = this.globalScalez - label.labelx;
      console.log("Inside createRectOpSideBack leftWidth if = " + leftWidth);

      //back
      backWidth = label.labelwidth - leftWidth;
      console.log("Inside createRectOpSideBack backWidth if = " + backWidth);
    }

    else {

      //left
      leftWidth = this.globalScalez - this.state.labela;
      console.log("Inside createRectOpSideBack leftWidth else = " + leftWidth);

      //back
      backWidth = label.labelwidth - leftWidth;
      console.log("Inside createRectOpSideBack backWidth else = " + backWidth);
    }

    var xOpSide = this.map(leftWidth * widthfactorOpSide, this.minWidth, this.maxWidth, this.originMaxX, this.originMinX);
    console.log("Inside createRectOpSideBack xOpSide = " + xOpSide);

    // ctx2.fillStyle = this.state.setColor;
    // ctx1.fillStyle = this.state.setColor;
    if (this.currentColorArr[this.labelNames.indexOf(label.labelname)] == null || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == undefined || this.currentColorArr[this.labelNames.indexOf(label.labelname)] == "") {
      ctx1.fillStyle = "#FFFFFF";
      ctx2.fillStyle = "#FFFFFF";
    } else {
      ctx1.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
      ctx2.fillStyle = this.currentColorArr[this.labelNames.indexOf(label.labelname)]
    }
    ctx2.fillRect(0, Ypos, ((backWidth * widthfactorBack) * 3 / 4), (newHeight / 3)); // back
    ctx1.fillRect(xOpSide, Ypos, ((leftWidth * widthfactorOpSide) * 3 / 4), (newHeight / 3)); // Left

    console.log("Inside createRectOpSideBack left-back label.labelname = " + this.globalName);

    if (label.labelname === this.globalName) {

      if ((ctx1.fillStyle = this.selectedColor) && (ctx2.fillStyle = this.selectedColor)) {
        this.currLabelType = "Left-Back"
      }
      ctx2.fillRect(0, Ypos, ((backWidth * widthfactorBack) * 3 / 4), (newHeight / 3));
      ctx1.fillRect(xOpSide, Ypos, ((leftWidth * widthfactorOpSide) * 3 / 4), (newHeight / 3));
    }
    return [ctx1, ctx2];
  }

  createLine = (ctx, x1, y1, x2, y2) => {
    //ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

  }

  createLabels = () => {

    const arrayforlabels = []
    console.log("checking this.labels issue::: ", this.labels)

    for (var label of this.labels) {
      // this.globalx = label.labelx;
      // this.globaly = label.labely;
      // this.globalWidth = label.labelwidth;
      // this.globalHeight = label.labelheight;
      label = this.cubeFor3DLabels(label);
      console.log("check label value" + JSON.stringify(label));
      arrayforlabels.push(label)
    }
    console.log(arrayforlabels)

    console.log("curr label type   " + this.currLabelType);

    this.scene.remove(this.FrontTextMesh);
    this.scene.remove(this.backTextMesh);
    this.scene.remove(this.rightTextMesh);
    this.scene.remove(this.leftTextMesh);
    this.scene.remove(this.topTextMesh)

    console.log("curr label type   " + this.currLabelType);
    // ctxArr[4].font = "bold 10pt Roboto";

    this.scene.remove(this.arrowHelperX);
    this.scene.remove(this.arrowHelperY);
    this.scene.remove(this.arrowHelperX1);
    this.scene.remove(this.arrowHelperY1);
    this.scene.remove(this.arrowHelperX2);
    this.scene.remove(this.arrowHelperY2);
    this.scene.remove(this.arrowHelperX3);
    this.scene.remove(this.arrowHelperY3);
    this.scene.remove(this.arrowHelperX4);
    this.scene.remove(this.arrowHelperY4);
    this.scene.remove(this.arrowHelperX5);
    this.scene.remove(this.arrowHelperY5);
    this.scene.remove(this.arrowHelperX6);
    this.scene.remove(this.arrowHelperY6);
    this.scene.remove(this.arrowHelperX7);
    this.scene.remove(this.arrowHelperY7);
    this.scene.remove(this.arrowHelperX8);
    this.scene.remove(this.arrowHelperY8);

    this.renderer.render(this.scene, this.camera)

    //considering Minimium value
    const num1 = this.globalScaley;
    const num2 = this.globalScalex;
    const num3 = this.globalScalez;
    this.setfront = Math.min(num1, num2, num3);
    console.log("The largest number is " + this.setfront);

    if (this.currLabelType === "Front") {

      //arrow
      var arrowPosmapx = this.map(this.globalScalex == null ? 10 : this.globalScalex, 10, 1000, -0.09, -9.5)
      var arrowPosmapy = this.map(this.globalScaley == null ? 10 : this.globalScaley, 10, 1000, -0.08, -9)
      var arrowPosmapz = this.map(this.globalScalez == null ? 10 : this.globalScalez, 10, 1000, 0.11, 11)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront == 0 ? 10 : this.setfront, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront == 0 ? 10 : this.setfront, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront == 0 ? 10 : this.setfront, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront == 0 ? 10 : this.setfront, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront == 0 ? 10 : this.setfront, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront == 0 ? 10 : this.setfront, 10, 1000, 0.015, 1.5)


      this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX.line = 35;
      this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX);
      this.scene.add(this.arrowHelperY);
      //Text
      var fontSize = this.map(this.globalScalex == null ? 10 : this.globalScalex, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScalex == null ? 10 : this.globalScalex, 10, 1000, 0.0015, 0.15);

      var positionx = this.map(this.globalScalex == null ? 10 : this.globalScalex, 10, 1000, -0.03, -3.3);
      var positiony = this.map(this.globalScaley == null ? 10 : this.globalScaley, 10, 1000, 0.07, 7.2);
      var positionz = this.map(this.globalScalez == null ? 10 : this.globalScalez, 10, 1000, 0.11, 11);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('FRONT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.FrontTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      console.log("check for textMesh" + this.FrontTextMesh)
      this.scene.add(this.FrontTextMesh);
      this.FrontTextMesh.position.set(positionx, positiony, positionz);
    }

    //considering Minimium value
    const num4 = this.globalScaley;
    const num5 = this.globalScalex;
    const num6 = this.globalScalez;
    this.setfront1 = Math.min(num4, num5, num6);
    console.log("The largest number is " + this.setfront1);

    // ctxArr[2].font = "bold 10pt Roboto";
    if (this.currLabelType === "Top") {
      //arrow
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.09, -9.5)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, 0.11, 10.5)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.08, -9.4)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront1, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront1, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)


      this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0X8F00FF, headlength1, headwidth1);
      this.arrowHelperX.line = 35;
      this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length2, 0XFFA500, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX);
      this.scene.add(this.arrowHelperY);
      //text
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, 0.03, -2);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.11, 10.7);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.07, -7);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('TOP', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.topTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.topTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.topTextMesh.rotation.set(-1.6, 0, 0)
      this.scene.add(this.topTextMesh);
    }

    //considering Minimium value
    const num7 = this.globalScaley;
    const num8 = this.globalScalex;
    const num9 = this.globalScalez;
    this.setfront2 = Math.min(num7, num8, num9);
    console.log("The largest number is " + this.setfront2);

    // ctxArr[1].font = "bold 10pt Roboto";
    if (this.currLabelType === "Right") {
      //arrow
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.11, -10.4)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9.2)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.09, -9.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront2, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront2, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront2, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront2, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront2, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront2, 10, 1000, 0.015, 1.5)


      this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX.line = 35;
      this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX);
      this.scene.add(this.arrowHelperY);
      //text
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);
      if (this.globalScaley > this.globalScalez) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -3.5);
      } else if (this.globalScalez > this.globalScaley) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -1.5);
      }
      else {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -3);
      }

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('RIGHT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.rightTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.rightTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.rightTextMesh.rotation.set(0, 29.85, 0)
      this.scene.add(this.rightTextMesh);
    }

    //considering Minimium value
    const num10 = this.globalScaley;
    const num11 = this.globalScalex;
    const num12 = this.globalScalez;
    this.setfront3 = Math.min(num10, num11, num12);
    console.log("The largest number is " + this.setfront3);

    // ctxArr[0].font = "bold 10pt Roboto";
    if (this.currLabelType === "Left") {
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, 0.11, 10.4)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9.2)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, 0.09, 9.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront3, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront3, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront3, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront3, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront3, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront3, 10, 1000, 0.015, 1.5)


      this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX.line = 35;
      this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX);
      this.scene.add(this.arrowHelperY);
      //text
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);

      if (this.globalScaley > this.globalScalez) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 3.5);
      } else if (this.globalScalez > this.globalScaley) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 1.5);
      }
      else {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 3);
      }

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('LEFT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.leftTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.leftTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.leftTextMesh.rotation.set(0, 33, 0)
      this.scene.add(this.leftTextMesh);
    }

    //considering Minimium value
    const num13 = this.globalScaley;
    const num14 = this.globalScalex;
    const num15 = this.globalScalez;
    this.setfront4 = Math.min(num13, num14, num15);
    console.log("The largest number is " + this.setfront4);

    // ctxArr[5].font = "bold 10pt Roboto";
    if (this.currLabelType === "Back") {
      //arrow
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, 0.09, 9.5)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.11, -10.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront4, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront4, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront4, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront4, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront4, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront4, 10, 1000, 0.015, 1.5)


      this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX.line = 35;
      this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX);
      this.scene.add(this.arrowHelperY);
      //text
      var fontSize = this.map(this.globalScalex, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScalex, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, 0.03, 2.8);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.11, -11);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('BACK', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.backTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.backTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.backTextMesh.rotation.set(0, 40.8, 0)
      this.scene.add(this.backTextMesh);
    }

    // ctxArr[2].font = "bold 10pt Roboto";
    // ctxArr[4].font = "bold 10pt Roboto";
    if (this.currLabelType === "Top-Front") {
      //arrow
      //Top
      // var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.09, -9.5)
      // var arrowPosmapy = this.map(this.globalScaley, 10, 1000, 0.11, 10.5)
      // var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.08, -9.4)
      // var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      // var length1 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)
      // var length2 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)

      // var headlength1 = this.map(this.setfront1, 10, 1000, 0.04, 4)
      // var headlength2 = this.map(this.setfront1, 10, 1000, 0.04, 4)

      // var headwidth1 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)
      // var headwidth2 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)


      // this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0X8F00FF, headlength1, headwidth1);
      // this.arrowHelperX.line = 35;
      // this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length2, 0XFFA500, headlength2, headwidth2);
      // this.scene.add(this.arrowHelperX);
      // this.scene.add(this.arrowHelperY);

      //front
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.09, -9.5)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, 0.11, 11)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront, 10, 1000, 0.015, 1.5)


      this.arrowHelperX1 = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX1.line = 35;
      this.arrowHelperY1 = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX1);
      this.scene.add(this.arrowHelperY1);
      //text
      //Top
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, -0.03, -2);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.11, 10.7);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.07, -7);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('TOP', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.topTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.topTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.topTextMesh.rotation.set(-1.6, 0, 0)
      this.scene.add(this.topTextMesh);

      //front
      var fontSize = this.map(this.globalScalex, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScalex, 10, 1000, 0.0015, 0.15);

      var positionx = this.map(this.globalScalex, 10, 1000, -0.03, -3.3);
      var positiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
      var positionz = this.map(this.globalScalez, 10, 1000, 0.11, 11);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('FRONT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.FrontTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      console.log("check for textMesh" + this.FrontTextMesh)
      this.scene.add(this.FrontTextMesh);
      this.FrontTextMesh.position.set(positionx, positiony, positionz);

    }

    if (this.currLabelType === "Top-Back") {
      //Top
      // var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.09, -9.5)
      // var arrowPosmapy = this.map(this.globalScaley, 10, 1000, 0.11, 10.5)
      // var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.08, -9.4)
      // var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      // var length1 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)
      // var length2 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)

      // var headlength1 = this.map(this.setfront1, 10, 1000, 0.04, 4)
      // var headlength2 = this.map(this.setfront1, 10, 1000, 0.04, 4)

      // var headwidth1 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)
      // var headwidth2 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)


      // this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0X8F00FF, headlength1, headwidth1);
      // this.arrowHelperX.line = 35;
      // this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length2, 0XFFA500, headlength2, headwidth2);
      // this.scene.add(this.arrowHelperX);
      // this.scene.add(this.arrowHelperY);

      //back
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, 0.09, 9.5)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.11, -10.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront4, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront4, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront4, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront4, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront4, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront4, 10, 1000, 0.015, 1.5)


      this.arrowHelperX2 = new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX2.line = 35;
      this.arrowHelperY2 = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX2);
      this.scene.add(this.arrowHelperY2);

      //text
      //top
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, -0.03, -2);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.11, 10.7);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.07, -7);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('TOP', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.topTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.topTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.topTextMesh.rotation.set(-1.6, 0, 0)
      this.scene.add(this.topTextMesh);

      //back
      var fontSize = this.map(this.globalScalex, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScalex, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, 0.03, 2.8);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.11, -11);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('BACK', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.backTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.backTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.backTextMesh.rotation.set(0, 40.8, 0)
      this.scene.add(this.backTextMesh);
    }

    if (this.currLabelType === "Top-Right") {
      //Top
      // var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.09, -9.5)
      // var arrowPosmapy = this.map(this.globalScaley, 10, 1000, 0.11, 10.5)
      // var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.08, -9.4)
      // var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      // var length1 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)
      // var length2 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)

      // var headlength1 = this.map(this.setfront1, 10, 1000, 0.04, 4)
      // var headlength2 = this.map(this.setfront1, 10, 1000, 0.04, 4)

      // var headwidth1 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)
      // var headwidth2 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)


      // this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      // this.arrowHelperX.line = 35;
      // this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      // this.scene.add(this.arrowHelperX);
      // this.scene.add(this.arrowHelperY);

      //Right
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.11, -10.4)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9.2)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.09, -9.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront2, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront2, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront2, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront2, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront2, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront2, 10, 1000, 0.015, 1.5)


      this.arrowHelperX3 = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX3.line = 35;
      this.arrowHelperY3 = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX3);
      this.scene.add(this.arrowHelperY3);

      //text
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, -0.03, -2);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.11, 10.7);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.07, -7);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('TOP', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.topTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.topTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.topTextMesh.rotation.set(-1.6, 0, 0)
      this.scene.add(this.topTextMesh);

      //right
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);
      if (this.globalScaley > this.globalScalez) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -3.5);
      } else if (this.globalScalez > this.globalScaley) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -1.5);
      }
      else {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -3);
      }

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('RIGHT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.rightTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.rightTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.rightTextMesh.rotation.set(0, 29.85, 0)
      this.scene.add(this.rightTextMesh);
    }


    if (this.currLabelType === "Top-Left") {
      // var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.09, -9.5)
      // var arrowPosmapy = this.map(this.globalScaley, 10, 1000, 0.11, 10.5)
      // var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.08, -9.4)
      // var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      // var length1 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)
      // var length2 = this.map(this.setfront1, 10, 1000, 0.1, 9.5)

      // var headlength1 = this.map(this.setfront1, 10, 1000, 0.04, 4)
      // var headlength2 = this.map(this.setfront1, 10, 1000, 0.04, 4)

      // var headwidth1 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)
      // var headwidth2 = this.map(this.setfront1, 10, 1000, 0.015, 1.5)


      // this.arrowHelperX4 = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      // this.arrowHelperX4.line = 35;
      // this.arrowHelperY4 = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      // this.scene.add(this.arrowHelperX4);
      // this.scene.add(this.arrowHelperY4);

      //Left
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, 0.11, 10.4)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9.2)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, 0.09, 9.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront3, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront3, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront3, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront3, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront3, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront3, 10, 1000, 0.015, 1.5)


      this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX.line = 35;
      this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX);
      this.scene.add(this.arrowHelperY);

      //text
      //top
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, -0.03, -2);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.11, 10.7);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.07, -7);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('TOP', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.topTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.topTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.topTextMesh.rotation.set(-1.6, 0, 0)
      this.scene.add(this.topTextMesh);

      //left
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);

      if (this.globalScaley > this.globalScalez) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 3.5);
      } else if (this.globalScalez > this.globalScaley) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 1.5);
      }
      else {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 3);
      }

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('LEFT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.leftTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.leftTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.leftTextMesh.rotation.set(0, 33, 0)
      this.scene.add(this.leftTextMesh);
    }

    if (this.currLabelType === "Front-Right") {
      //arrow
      //Front
      // var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.09, -9.5)
      // var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9)
      // var arrowPosmapz = this.map(this.globalScalez, 10, 1000, 0.11, 11)
      // var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      // var length1 = this.map(this.setfront, 10, 1000, 0.1, 9.5)
      // var length2 = this.map(this.setfront, 10, 1000, 0.1, 9.5)

      // var headlength1 = this.map(this.setfront, 10, 1000, 0.04, 4)
      // var headlength2 = this.map(this.setfront, 10, 1000, 0.04, 4)

      // var headwidth1 = this.map(this.setfront, 10, 1000, 0.015, 1.5)
      // var headwidth2 = this.map(this.setfront, 10, 1000, 0.015, 1.5)


      // this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      // this.arrowHelperX.line = 35;
      // this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      // this.scene.add(this.arrowHelperX);
      // this.scene.add(this.arrowHelperY);

      //Right
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.11, -10.4)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9.2)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.09, -9.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront2, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront2, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront2, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront2, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront2, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront2, 10, 1000, 0.015, 1.5)


      this.arrowHelperX5 = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX5.line = 35;
      this.arrowHelperY5 = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX5);
      this.scene.add(this.arrowHelperY5);

      //text
      //front
      var fontSize = this.map(this.globalScalex, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScalex, 10, 1000, 0.0015, 0.15);

      var positionx = this.map(this.globalScalex, 10, 1000, -0.03, -3.3);
      var positiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
      var positionz = this.map(this.globalScalez, 10, 1000, 0.11, 11);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('FRONT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.FrontTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      console.log("check for textMesh" + this.FrontTextMesh)
      this.scene.add(this.FrontTextMesh);
      this.FrontTextMesh.position.set(positionx, positiony, positionz);

      //right
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);
      if (this.globalScaley > this.globalScalez) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -3.5);
      } else if (this.globalScalez > this.globalScaley) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -1.5);
      }
      else {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -3);
      }

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('RIGHT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.rightTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.rightTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.rightTextMesh.rotation.set(0, 29.85, 0)
      this.scene.add(this.rightTextMesh);

    }

    if (this.currLabelType === "Right-Back") {

      //Right
      // var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.11, -10.4)
      // var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9.2)
      // var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.09, -9.5)
      // var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      // var length1 = this.map(this.setfront2, 10, 1000, 0.1, 9.5)
      // var length2 = this.map(this.setfront2, 10, 1000, 0.1, 9.5)

      // var headlength1 = this.map(this.setfront2, 10, 1000, 0.04, 4)
      // var headlength2 = this.map(this.setfront2, 10, 1000, 0.04, 4)

      // var headwidth1 = this.map(this.setfront2, 10, 1000, 0.015, 1.5)
      // var headwidth2 = this.map(this.setfront2, 10, 1000, 0.015, 1.5)


      // this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      // this.arrowHelperX.line = 35;
      // this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      // this.scene.add(this.arrowHelperX);
      // this.scene.add(this.arrowHelperY);

      //Back
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, 0.09, 9.5)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.11, -10.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront4, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront4, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront4, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront4, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront4, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront4, 10, 1000, 0.015, 1.5)


      this.arrowHelperX6 = new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX6.line = 35;
      this.arrowHelperY6 = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX6);
      this.scene.add(this.arrowHelperY6);

      //text
      //right
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);
      if (this.globalScaley > this.globalScalez) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -3.5);
      } else if (this.globalScalez > this.globalScaley) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -1.5);
      }
      else {
        var textPositionx = this.map(this.globalScalex, 10, 1000, -0.11, -10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, -0.035, -3);
      }

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('RIGHT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.rightTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.rightTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.rightTextMesh.rotation.set(0, 29.85, 0)
      this.scene.add(this.rightTextMesh);


      //back
      var fontSize = this.map(this.globalScalex, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScalex, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, 0.03, 2.8);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.11, -11);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('BACK', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.backTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.backTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.backTextMesh.rotation.set(0, 40.8, 0)
      this.scene.add(this.backTextMesh);
    }

    if (this.currLabelType === "Front-Left") {

      //Front
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, -0.09, -9.5)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, 0.11, 11)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront, 10, 1000, 0.015, 1.5)


      this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX.line = 35;
      this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX);
      this.scene.add(this.arrowHelperY);

      //Left
      // var arrowPosmapx = this.map(this.globalScalex, 10, 1000, 0.11, 10.4)
      // var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9.2)
      // var arrowPosmapz = this.map(this.globalScalez, 10, 1000, 0.09, 9.5)
      // var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      // var length1 = this.map(this.setfront3, 10, 1000, 0.1, 9.5)
      // var length2 = this.map(this.setfront3, 10, 1000, 0.1, 9.5)

      // var headlength1 = this.map(this.setfront3, 10, 1000, 0.04, 4)
      // var headlength2 = this.map(this.setfront3, 10, 1000, 0.04, 4)

      // var headwidth1 = this.map(this.setfront3, 10, 1000, 0.015, 1.5)
      // var headwidth2 = this.map(this.setfront3, 10, 1000, 0.015, 1.5)


      // this.arrowHelperX7 = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      // this.arrowHelperX7.line = 35;
      // this.arrowHelperY7 = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      // this.scene.add(this.arrowHelperX7);
      // this.scene.add(this.arrowHelperY7);
      //text
      //front
      var fontSize = this.map(this.globalScalex, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScalex, 10, 1000, 0.0015, 0.15);

      var positionx = this.map(this.globalScalex, 10, 1000, -0.03, -3.3);
      var positiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
      var positionz = this.map(this.globalScalez, 10, 1000, 0.11, 11);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('FRONT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.FrontTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      console.log("check for textMesh" + this.FrontTextMesh)
      this.scene.add(this.FrontTextMesh);
      this.FrontTextMesh.position.set(positionx, positiony, positionz);

      //left
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);
      if (this.globalScaley > this.globalScalez) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 3.5);
      } else if (this.globalScalez > this.globalScaley) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 1.5);
      }
      else {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 3);
      }

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('LEFT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.leftTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.leftTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.leftTextMesh.rotation.set(0, 33, 0)
      this.scene.add(this.leftTextMesh);

    }

    if (this.currLabelType === "Left-Back") {

      //Left
      var arrowPosmapx = this.map(this.globalScalex, 10, 1000, 0.11, 10.4)
      var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9.2)
      var arrowPosmapz = this.map(this.globalScalez, 10, 1000, 0.09, 9.5)
      var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      var length1 = this.map(this.setfront3, 10, 1000, 0.1, 9.5)
      var length2 = this.map(this.setfront3, 10, 1000, 0.1, 9.5)

      var headlength1 = this.map(this.setfront3, 10, 1000, 0.04, 4)
      var headlength2 = this.map(this.setfront3, 10, 1000, 0.04, 4)

      var headwidth1 = this.map(this.setfront3, 10, 1000, 0.015, 1.5)
      var headwidth2 = this.map(this.setfront3, 10, 1000, 0.015, 1.5)


      this.arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      this.arrowHelperX.line = 35;
      this.arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      this.scene.add(this.arrowHelperX);
      this.scene.add(this.arrowHelperY);

      //Back
      // var arrowPosmapx = this.map(this.globalScalex, 10, 1000, 0.09, 9.5)
      // var arrowPosmapy = this.map(this.globalScaley, 10, 1000, -0.08, -9)
      // var arrowPosmapz = this.map(this.globalScalez, 10, 1000, -0.11, -10.5)
      // var arrowPos = new THREE.Vector3(arrowPosmapx, arrowPosmapy, arrowPosmapz);

      // var length1 = this.map(this.setfront4, 10, 1000, 0.1, 9.5)
      // var length2 = this.map(this.setfront4, 10, 1000, 0.1, 9.5)

      // var headlength1 = this.map(this.setfront4, 10, 1000, 0.04, 4)
      // var headlength2 = this.map(this.setfront4, 10, 1000, 0.04, 4)

      // var headwidth1 = this.map(this.setfront4, 10, 1000, 0.015, 1.5)
      // var headwidth2 = this.map(this.setfront4, 10, 1000, 0.015, 1.5)


      // this.arrowHelperX8 = new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), arrowPos, length1, 0XFFA500, headlength1, headwidth1);
      // this.arrowHelperX8.line = 35;
      // this.arrowHelperY8 = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), arrowPos, length2, 0X8F00FF, headlength2, headwidth2);
      // this.scene.add(this.arrowHelperX8);
      // this.scene.add(this.arrowHelperY8);

      //text
      //left
      var fontSize = this.map(this.globalScaley, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScaley, 10, 1000, 0.0015, 0.15);

      if (this.globalScaley > this.globalScalez) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 3.5);
      } else if (this.globalScalez > this.globalScaley) {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 1.5);
      }
      else {
        var textPositionx = this.map(this.globalScalex, 10, 1000, 0.11, 10.7);
        var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
        var textPositionz = this.map(this.globalScalez, 10, 1000, 0.035, 3);
      }

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('LEFT', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.leftTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.leftTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.leftTextMesh.rotation.set(0, 33, 0)
      this.scene.add(this.leftTextMesh);


      //back
      var fontSize = this.map(this.globalScalex, 10, 1000, 0.015, 1.5);
      var fontHeight = this.map(this.globalScalex, 10, 1000, 0.0015, 0.15);

      var textPositionx = this.map(this.globalScalex, 10, 1000, 0.03, 2.8);
      var textPositiony = this.map(this.globalScaley, 10, 1000, 0.07, 7.2);
      var textPositionz = this.map(this.globalScalez, 10, 1000, -0.11, -11);

      var loader = new THREE.FontLoader();
      var font = loader.parse(textfont);
      console.log("check for font" + font)
      var textGeometry = new THREE.TextGeometry('BACK', { font: font, size: fontSize, height: fontHeight, curveSegments: 20 });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.backTextMesh = new THREE.Mesh(textGeometry, textMaterial);
      this.backTextMesh.position.set(textPositionx, textPositiony, textPositionz);
      this.backTextMesh.rotation.set(0, 40.8, 0)
      this.scene.add(this.backTextMesh);
    }




    // texture1 = new THREE.CanvasTexture(ctxArr[0].canvas);
    // texture2 = new THREE.CanvasTexture(ctxArr[1].canvas);
    // texture3 = new THREE.CanvasTexture(ctxArr[2].canvas);
    // texture4 = new THREE.CanvasTexture(ctxArr[3].canvas);
    // texture5 = new THREE.CanvasTexture(ctxArr[4].canvas);
    // texture6 = new THREE.CanvasTexture(ctxArr[5].canvas);
    // return [texture1, texture2, texture3, texture4, texture5, texture6];
  }

  TopVertical = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalez, 10, 1000, 0.2, 20)
      console.log("this.radiustop" + this.radiustop)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = this.map(this.globalScaley, 10, 1000, 0.1, 10);
      this.z = 0;
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.cylinder1.rotation.set(7.855, 0, 0)
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalez, 10, 1000, 0.2, 20)
      console.log("this.radiustop" + this.radiustop)

      this.geometry = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = this.map(this.globalScaley, 10, 1000, -0.1, -10);
      this.z = 0;
      this.cylinder2 = new THREE.Mesh(this.geometry, this.material);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.cylinder2.rotation.set(7.855, 0, 0)
      this.scene.add(this.cylinder2)
    }
  }

  TopHorizontal = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder3)
      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalex, 10, 1000, 0.2, 20)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = this.map(this.globalScaley, 10, 1000, 0.1, 10);
      this.z = 0;
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.cylinder1.rotation.set(0, 0, 7.855)
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalex, 10, 1000, 0.2, 20)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = this.map(this.globalScaley, 10, 1000, -0.1, -10);
      this.z = 0;
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.cylinder2.rotation.set(0, 0, 7.855)
      this.scene.add(this.cylinder2)
    }
  }

  FrontVertical = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder3)
      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScaley, 10, 1000, 0.2, 20)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, -0.009, -0.2);
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, 0.1, 10);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScaley, 10, 1000, 0.2, 20)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, -0.009, -0.2);
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, -0.1, -10);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.scene.add(this.cylinder2)
    }
  }

  FrontHorizontal = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalex, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, 0.1, 10);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.cylinder1.rotation.set(0, 0, 7.855)
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalex, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, -0.1, -10);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.cylinder2.rotation.set(0, 0, 7.855)
      this.scene.add(this.cylinder2)
    }
  }

  LeftHorizontal = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder3)
      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalez, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, 0.1, 10);
      this.y = 0;
      this.z = 0;
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.cylinder1.rotation.set(7.855, 0, 0)
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalez, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, -0.1, -10);
      this.y = 0;
      this.z = 0;
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.cylinder2.rotation.set(7.855, 0, 0)
      this.scene.add(this.cylinder2)
    }
  }

  LeftVertical = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScaley, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, 0.1, 10);
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, 0.009, 0.2);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScaley, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, -0.1, -10);
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, 0.009, 0.2);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.scene.add(this.cylinder2)
    }
  }

  RightHorizontal = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalez, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, -0.1, -10);
      this.y = 0;
      this.z = 0;
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.cylinder1.rotation.set(7.855, 0, 0)
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalez, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, 0.1, 10);
      this.y = 0;
      this.z = 0;
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.cylinder2.rotation.set(7.855, 0, 0)
      this.scene.add(this.cylinder2)
    }
  }

  RightVertical = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScaley, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, -0.1, -10);
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, -0.009, -0.2);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScaley, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, 0.1, 10);
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, -0.009, -0.2);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.scene.add(this.cylinder2)
    }
  }

  BackVertical = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScaley, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, -0.009, -0.2);
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, -0.1, -10);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScaley, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = this.map(this.globalScalex, 10, 1000, -0.009, -0.2);
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, 0.1, 10);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.scene.add(this.cylinder2)
    }
  }

  BackHorizontal = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalex, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, -0.1, -10);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.cylinder1.rotation.set(0, 0, 7.855)
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalex, 10, 1000, 0.2, 20)


      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = 0;
      this.z = this.map(this.globalScalez, 10, 1000, 0.1, 10);
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.cylinder2.rotation.set(0, 0, 7.855)
      this.scene.add(this.cylinder2)
    }
  }

  BottomVertical = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalez, 10, 1000, 0.2, 20)
      console.log("this.radiustop" + this.radiustop)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = this.map(this.globalScaley, 10, 1000, -0.1, -10);
      this.z = 0;
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.cylinder1.rotation.set(7.855, 0, 0)
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalez, 10, 1000, 0.2, 20)
      console.log("this.radiustop" + this.radiustop)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = this.map(this.globalScaley, 10, 1000, 0.1, 10);
      this.z = 0;
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.cylinder2.rotation.set(7.855, 0, 0)
      this.scene.add(this.cylinder2)
    }
  }

  BottomHorizontal = () => {
    if (this.scene != null && this.scene != undefined) {

      this.scene.remove(this.cylinder1)
      this.scene.remove(this.cylinder2)
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalex, 10, 1000, 0.2, 20)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = this.map(this.globalScaley, 10, 1000, -0.1, -10);
      this.z = 0;
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder1 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder1.position.set(this.x, this.y, this.z);
      this.cylinder1.rotation.set(0, 0, 7.855)
      this.scene.add(this.cylinder1)
      //2nd line
      this.radiustop = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.radiusbottom = this.map(this.globalScaley, 10, 1000, 0.002, 0.1)
      this.cylinderheight = this.map(this.globalScalex, 10, 1000, 0.2, 20)

      this.geometry1 = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylinderheight, 32);
      this.material1 = new THREE.MeshBasicMaterial({ color: 0x000000 });

      this.x = 0;
      this.y = this.map(this.globalScaley, 10, 1000, 0.1, 10);
      this.z = 0;
      // this.geometry1.translate( 0, height/0.5, 0 );
      this.cylinder2 = new THREE.Mesh(this.geometry1, this.material1);
      this.cylinder2.position.set(this.x, this.y, this.z);
      this.cylinder2.rotation.set(0, 0, 7.855)
      this.scene.add(this.cylinder2)
    }
  }

  calFactorWidthMaxTOCHECK = (x) => {
    console.log("calFactorWidth x is " + x);
    var factor = this.widthPixelMax / x;
    console.log("calFactorWidth is " + factor);
    return factor;
  };

  calFactorHeightMaxTOCHECK = (y) => {
    var factor = this.heightPixelMax / y;
    return factor;
  };

  calFactorWidthMax = (x) => {
    console.log("calFactorWidth x is " + x);
    var factor = this.widthPixelMax / x;
    console.log("calFactorWidth is " + factor);
    return factor;
  };

  calFactorHeightMax = (y) => {
    var factor = this.heightPixelMax / y;
    return factor;
  };

  calPositionFactorX = (x) => {
    var facX = this.originTopMaxXd / x;
    return facX;
  };

  calPositionFactorXTOCHECK = (x) => {
    var facX = this.originTopMaxXdTOCHECK / x;
    return facX;
  };
  calPositionFactorYTOCHECK = (y) => {
    var facY = this.originTopMaxYdTOCHECK / y;
    return facY;
  };

  calPositionFactorY = (y) => {
    var facY = this.originTopMaxYd / y;
    return facY;
  };

  calPositionFactorZ = (z) => {
    var facZ = this.originTopMaxZd / z;
    return facZ;
  };

  calPositionAFactorX = (x) => {
    var facX = this.positionAMax / x;
    return facX;
  };

  calPositionBFactorY = (y) => {
    var facY = this.positionBMax / y;
    return facY;
  };

  cubeInitialPosition = (label, x, y, position) => {
    if (this.state.labelname === label.labelname) {
      var factorX = this.calPositionFactorX(x);
      var factorY = this.calPositionFactorY(y);
      var initialXpos = factorX * label.labelwidth;
      var initialYpos = factorY * label.labelheight;
      console.log(
        "check factorX" + factorX + "check label.labely" + label.labelwidth
      );
      console.log(
        "check xpos" +
        parseFloat(initialXpos).toFixed(3) +
        "ypos" +
        parseFloat(initialYpos).toFixed(3)
      );
      var initialWidthMax = this.calFactorWidthMax(x);
      var initialHeightMax = this.calFactorHeightMax(y);
      var widthMax = label.labelwidth * initialWidthMax;
      var heightMax = label.labelheight * initialHeightMax;
      label.finalWidth = this.map(x, 10, 1000, 1, widthMax);
      this.setState({
        newfinalWidth: label.newfinalWidth
      })
      label.finalHeight = this.map(y, 10, 1000, 1, heightMax);
      this.setState({
        newfinalHeight: label.finalHeight
      })
      label.mapPosition = this.map(position, 10, 1000, 0.5, 10); //initial position
      this.setState({
        newfinalWidth: label.newmapPosition
      })
      label.mapPositionx = this.map(x, 10, 1000, 0, -9.995 - parseFloat(initialXpos).toFixed(3)); //initial position
      this.setState({
        newfinalWidth: label.newmapPositionx
      })

      label.mapPositiony = this.map(y, 10, 1000, 0, -9.995 - parseFloat(initialYpos).toFixed(3)); //initial position
      this.setState({
        newfinalWidth: label.newmapPositiony
      })
      label.changeWidth = this.map(x, 10, 1000, 0, 0.5); // change the label position for width
      this.setState({
        newfinalWidth: label.newchangeWidth
      })
      label.changeHeight = this.map(y, 10, 1000, 0, 0.5); // change the label position for height
      this.setState({
        newfinalWidth: label.newchangeHeight
      })
      label.changePositionA = this.map(this.globalx, 0, 1000, 0, 0.5);
      this.setState({
        newfinalWidth: label.newchangePositionA
      })
      label.changePositionB = this.map(this.globaly, 0, 1000, 0, 0.5);
      this.setState({
        newfinalWidth: label.newchangePositionB
      })
      var factorPosX = this.calPositionFactorX(x);

      var factorPosY = this.calPositionFactorY(y);
      var Xpos = factorPosX * label.labelx;
      var Ypos = factorPosY * label.labely;
      label.finalXpos = this.map(x, 10, 1000, 0, -Xpos);
      this.setState({
        newfinalWidth: label.newfinalXpos
      })
      label.finalYpos = this.map(y, 10, 1000, 0, -Ypos);
      this.setState({
        newfinalWidth: label.newfinalYpos
      })

      label.changeXpos = this.map(x, 10, 1000, 0.05, 0.5)

      label.changeYpos = this.map(y, 10, 1000, 0.05, 0.5)
    }
    return label;
  };

  cubeInitialPositionRL = (label, x, y, position) => {
    var factorX = this.calPositionFactorX(x);
    var factorY = this.calPositionFactorY(y);
    var initialXpos = factorX * label.labelwidth;
    var initialYpos = factorY * label.labelheight;
    console.log(
      "check factorX" + factorX + "check label.labely" + label.labelwidth
    );
    console.log(
      "check xpos" +
      parseFloat(initialXpos).toFixed(3) +
      "ypos" +
      parseFloat(initialYpos).toFixed(3)
    );
    var initialWidthMax = this.calFactorWidthMax(x);
    var initialHeightMax = this.calFactorHeightMax(y);
    var widthMax = label.labelwidth * initialWidthMax;
    var heightMax = label.labelheight * initialHeightMax;
    label.finalWidthRL = this.map(x, 10, 1000, 1, widthMax);
    this.setState({
      newfinalWidth: label.newfinalWidth
    })
    label.finalHeightRL = this.map(y, 10, 1000, 1, heightMax);
    this.setState({
      newfinalHeight: label.finalHeight
    })
    label.mapPosition = this.map(position, 10, 1000, 0.5, 10); //initial position
    this.setState({
      newfinalWidth: label.newmapPosition
    })
    label.mapPositionxRL = this.map(x, 10, 1000, 0, -9.995 - parseFloat(initialXpos).toFixed(3)); //initial position
    this.setState({
      newfinalWidth: label.newmapPositionx
    })
    label.mapPositionyRL = this.map(y, 10, 1000, 0, -9.995 - parseFloat(initialYpos).toFixed(3)); //initial position
    this.setState({
      newfinalWidth: label.newmapPositiony
    })

    label.changeWidthRL = this.map(x, 10, 1000, 0, 0.5); // change the label position for width
    label.changeWidthRL1 = this.map(x, 10, 1000, 0, 1);
    this.setState({
      newfinalWidth: label.newchangeWidth
    })

    label.changeHeightRL = this.map(y, 10, 1000, 0, 0.5); // change the label position for height
    this.setState({
      newfinalWidth: label.newchangeHeight
    })

    label.changePositionA = this.map(this.globalx, 0, 1000, 0, 9.5);
    this.setState({
      newfinalWidth: label.newchangePositionA
    })

    label.changePositionB = this.map(this.globaly, 0, 1000, 0, 9.5);
    this.setState({
      newfinalWidth: label.newchangePositionB
    })

    var factorPosX = this.calPositionFactorY(x);
    var factorPosY = this.calPositionFactorX(y);
    var Xpos = factorPosX * label.labelx;
    var Ypos = factorPosY * label.labely;
    label.finalXposRL = this.map(x, 10, 1000, 0, -Xpos);
    this.setState({
      newfinalWidth: label.newfinalXpos
    })
    label.finalYposRL = this.map(y, 10, 1000, 0, -Ypos);
    this.setState({
      newfinalWidth: label.newfinalYpos
    })

    label.changeXposRL = this.map(x, 10, 1000, 0.05, 0.5);

    label.changeYposRL = this.map(y, 10, 1000, 0.05, 0.5)
    return label;
  };


  cubeInitialPositionTOPCORNER = (label, x, y, position) => {
    if (this.state.labelname === label.labelname) {
      var factorX = this.calPositionFactorXTOCHECK(x);
      var factorY = this.calPositionFactorYTOCHECK(y);
      var initialXpos = factorX * label.labelwidth;
      var initialYpos = factorY * label.labelheight;
      console.log(
        "check factorX" + factorX + "check label.labely" + label.labelwidth
      );
      console.log(
        "check xpos" +
        parseFloat(initialXpos).toFixed(3) +
        "ypos" +
        parseFloat(initialYpos).toFixed(3)
      );
      var initialWidthMax = this.calFactorWidthMaxTOCHECK(x);
      var initialHeightMax = this.calFactorHeightMaxTOCHECK(y);
      var widthMax = label.labelwidth * initialWidthMax;
      var heightMax = label.labelheight * initialHeightMax;
      label.finalWidthTC = this.map(x, 10, 1000, 1, widthMax);
      this.setState({
        newfinalWidth: label.newfinalWidth
      })
      label.finalHeightTC = this.map(y, 10, 1000, 1, heightMax / 2);
      this.setState({
        newfinalHeight: label.finalHeight
      })
      label.mapPosition = this.map(position, 10, 1000, 0.5, 10); //initial position
      this.setState({
        newfinalWidth: label.newmapPosition
      })
      label.mapPositionxTC = this.map(x, 10, 1000, 0, -9.995 - parseFloat(initialXpos).toFixed(3)); //initial position
      this.setState({
        newfinalWidth: label.newmapPositionx
      })
      label.mapPositionyTC = this.map(y, 10, 1000, 0, -9.995 - parseFloat(initialYpos / 2).toFixed(3)); //initial position
      this.setState({
        newfinalWidth: label.newmapPositiony
      })
      label.changeWidthTC = this.map(this.globalWidth, 10, 1000, 0, 0.5); // change the label position for width
      this.setState({
        newfinalWidth: label.newchangeWidth
      })
      label.changeHeightTC = this.map(this.globalHeight, 10, 1000, 0, 0.5); // change the label position for height
      this.setState({
        newfinalWidth: label.newchangeHeight
      })
      label.changePositionATC = this.map(this.globalx, 0, 1000, 0, 0.5);
      this.setState({
        newfinalWidth: label.newchangePositionA
      })
      label.changePositionBTC = this.map(this.globaly, 0, 1000, 0, 0.5);
      this.setState({
        newfinalWidth: label.newchangePositionB
      })
      var factorPosX = this.calPositionFactorX(x);
      var factorPosY = this.calPositionFactorY(y);
      var Xpos = factorPosX * label.labelx;
      var Ypos = factorPosY * label.labely;
      label.finalXposTC = this.map(x, 10, 1000, 0, -Xpos);
      this.setState({
        newfinalWidth: label.newfinalXpos
      })
      label.finalYposTC = this.map(y, 10, 1000, 0, -Ypos);
      this.setState({
        newfinalWidth: label.newfinalYpos
      })
    }
    return label;
  };

  cubeInitialPositionSIDECORNER = (label, x, y, position) => {
    if (this.state.labelname === label.labelname) {
      var factorX = this.calPositionFactorXTOCHECK(x);
      var factorY = this.calPositionFactorYTOCHECK(y);
      var initialXpos = factorX * label.labelwidth;
      var initialYpos = factorY * label.labelheight;
      console.log(
        "check factorX" + factorX + "check label.labely" + label.labelwidth
      );
      console.log(
        "check xpos" +
        parseFloat(initialXpos).toFixed(3) +
        "ypos" +
        parseFloat(initialYpos).toFixed(3)
      );
      var initialWidthMax = this.calFactorWidthMaxTOCHECK(x);
      var initialHeightMax = this.calFactorHeightMaxTOCHECK(y);
      var widthMax = label.labelwidth * initialWidthMax;
      var heightMax = label.labelheight * initialHeightMax;

      label.finalWidthSC = this.map(x, 10, 1000, 1, widthMax / 2);

      label.finalHeightSC = this.map(y, 10, 1000, 1, heightMax);

      label.mapPosition = this.map(position, 10, 1000, 0.5, 10); //initial position

      label.mapPositionxSC = this.map(x, 10, 1000, 0, -9.995 - parseFloat(initialXpos / 2).toFixed(3)); //initial position

      label.mapPositionySC = this.map(y, 10, 1000, 0, -9.995 - parseFloat(initialYpos).toFixed(3)); //initial position

      label.changeWidthSC = this.map(this.globalWidth, 10, 1000, 0.05, 0.5); // change the label position for width
      label.changeHeightSC = this.map(this.globalHeight, 10, 1000, 0.05, 0.5); // change the label position for height

      label.changePositionASC = this.map(this.globalx, 0, 1000, 0, 9.5);
      label.changePositionBSC = this.map(this.globaly, 0, 1000, 0, 9.5);

      var factorPosX = this.calPositionFactorX(x);
      var factorPosY = this.calPositionFactorY(y);
      var Xpos = factorPosX * label.labelx;
      var Ypos = factorPosY * label.labely;
      label.finalXposSC = this.map(x, 10, 1000, 0, -Xpos);
      label.finalYposSC = this.map(y, 10, 1000, 0, -Ypos);
    }
    return label;
  };

  // cubeInitialPositionSIDECORNERRL = (label, x, y, position) => {
  //   if (this.state.labelname === label.labelname) {
  //     var factorX = this.calPositionFactorXTOCHECK(x);
  //     var factorY = this.calPositionFactorYTOCHECK(y);
  //     var initialXpos = factorX * label.labelwidth;
  //     var initialYpos = factorY * label.labelheight;
  //     console.log(
  //       "check factorX" + factorX + "check label.labely" + label.labelwidth
  //     );
  //     console.log(
  //       "check xpos" +
  //       parseFloat(initialXpos).toFixed(3) +
  //       "ypos" +
  //       parseFloat(initialYpos).toFixed(3)
  //     );
  //     var initialWidthMax = this.calFactorWidthMaxTOCHECK(x);
  //     var initialHeightMax = this.calFactorHeightMaxTOCHECK(y);
  //     var widthMax = label.labelwidth * initialWidthMax;
  //     var heightMax = label.labelheight * initialHeightMax;
  //     label.finalWidth = this.map(x, 10, 1000, 1, widthMax / 2);
  //     label.finalHeight = this.map(y, 10, 1000, 1, heightMax);
  //     label.mapPosition = this.map(position, 10, 1000, 0.5, 10); //initial position
  //     label.mapPositionx = this.map(
  //       x,
  //       10,
  //       1000,
  //       0,
  //       -9.995 - parseFloat(initialYpos).toFixed(3)
  //     ); //initial position
  //     label.mapPositiony = this.map(
  //       y,
  //       10,
  //       1000,
  //       0,
  //       -9.995 - parseFloat(initialXpos / 2).toFixed(3)
  //     ); //initial position

  //     label.changeWidth = this.map(this.globalWidth, 10, 1000, 0, 9.5); // change the label position for width
  //     label.changeHeight = this.map(this.globalHeight, 10, 1000, 0, 9.5); // change the label position for height

  //     label.changePositionA = this.map(this.globalx, 0, 1000, 0, 9.5);
  //     label.changePositionB = this.map(this.globaly, 0, 1000, 0, 9.5);

  //     var factorPosX = this.calPositionFactorX(x);
  //     var factorPosY = this.calPositionFactorY(y);
  //     var Xpos = factorPosX * label.labelx;
  //     var Ypos = factorPosY * label.labely;
  //     label.finalXpos = this.map(x, 10, 1000, 0, -Xpos);
  //     label.finalYpos = this.map(y, 10, 1000, 0, -Ypos);
  //   }
  //   return label;
  // };

  cubeFor3DLabels = (label) => {
    if (this.state.labelname.trim() === label.labelname.trim()) {
      console.log("Inside cubeForFrontandTop label", label);
      console.log(
        "Inside cubeForFrontandTop label.labelname ",
        label.labelname
      );
      // console.log("Inside cubeForFrontandTop this.labelnames ", this.labelNames.indexOf(labelname));
      console.log(
        "Inside cubeForFrontandTop this.state.labelname ",
        this.state.labelname
      );
      this.scene.remove(label.cube);
      this.scene.remove(label.cube1);
      this.scene.remove(label.cube2);
      this.scene.remove(label.cube3);
      this.scene.remove(label.cube4);
      this.scene.remove(label.cube5);
      this.scene.remove(label.cube6);
      this.scene.remove(label.cube7);
      this.scene.remove(label.cube8);
      this.scene.remove(label.cube9);
      this.scene.remove(label.cube10);
      this.scene.remove(label.cube11);
      this.scene.remove(label.cube12);
      this.scene.remove(label.cube13);
      this.scene.remove(label.cube14);
      this.scene.remove(label.cube15);
      this.scene.remove(label.cube16);

      let caseHeight3D = this.map(this.globalScaley, 10, 1000, 0.2, 20);
      let caseWidth3D = this.map(this.globalScalex, 10, 1000, 0.2, 20);
      let caseLength3D = this.map(this.globalScalez, 10, 1000, 0.2, 20);


      //Geometry

      if (label.typename === "Top") {
        // if( this.state.labelname === label.labelname){
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);
        // this.cubeInitialPosition(label,this.globalScalex,this.globalScalez,this.globalScaley);
        // const geometry1 = new THREE.BoxGeometry(parseFloat(label.finalWidth).toFixed(3),0.008,parseFloat(label.finalHeight).toFixed(3)); //length and width
        // if (label.labelname === this.state.labelname) {
        //   label.newcolor = 0x808080
        // }
        // else {
        //   label.newcolor = this.previouColor
        // }

        const geometry1 = new THREE.BoxGeometry(labelWidth3D, 0.008, labelHeight3D); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube = new THREE.Mesh(geometry1, material1);
        label.cube.userData.id = { labelName: label.labelname, labelType: "Top" };
        this.scene.add(label.cube);
        console.log("check for array value" + JSON.stringify(label.cube));

        label.cube.position.set(-(((caseWidth3D / 2) - (labelWidth3D / 2)) - labelPositionA3D), (caseHeight3D / 2), -(((caseLength3D / 2) - (labelHeight3D / 2)) - labelPositionB3D));
      }


      if (label.typename === "Front") {
        console.log("all required for label geometry and positions::::: ", this.globalScalex, " :: ", this.globalScaley, " :: ", this.globalScalez, " :: ", this.globalx, " :: ", this.globaly, " :: ", this.globalWidth, " :: ", this.globalHeight)

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Front";
        // }

        // this.cubeInitialPosition(label, this.globalScalex, this.globalScaley, this.globalScalez);
        // const geometry1 = new THREE.BoxGeometry(parseFloat(label.finalWidth).toFixed(3),parseFloat(label.finalHeight).toFixed(3),0.008); //length and width
        const geometry1 = new THREE.BoxGeometry(labelWidth3D, labelHeight3D, 0.008); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        // if (label.labelname === this.globalName) {
        //   label.newcolor = 0x808080
        // }
        // else {
        //   label.newcolor = this.previouColor
        // }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube = new THREE.Mesh(geometry1, material1);
        label.cube.userData.id = { labelName: label.labelname, labelType: "Front" };
        this.scene.add(label.cube);
        //
        //
        label.cube.position.set(-(((caseWidth3D / 2) - (labelWidth3D / 2)) - labelPositionA3D), -(((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), (caseLength3D / 2));

      }

      if (label.typename === "Back") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Back";
        // }

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        // this.cubeInitialPosition(
        //   label,
        //   this.globalScalex,
        //   this.globalScaley,
        //   this.globalScalez
        // );
        // const geometry1 = new THREE.BoxGeometry(
        //   parseFloat(label.finalWidth).toFixed(3),
        //   parseFloat(label.finalHeight).toFixed(3),
        //   0.008
        // ); //length and width
        const geometry1 = new THREE.BoxGeometry(labelWidth3D, labelHeight3D, 0.008); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube = new THREE.Mesh(geometry1, material1);
        label.cube.userData.id = { labelName: label.labelname, labelType: "Back" };
        this.scene.add(label.cube);

        label.cube.position.set((((caseWidth3D / 2) - (labelWidth3D / 2)) - labelPositionA3D), -(((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), -(caseLength3D / 2));

      }


      if (label.typename === "Right") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Right";
        // }

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        // this.cubeInitialPositionRL(label, this.globalScalez, this.globalScaley, this.globalScalex);
        console.log("check the value for x" + this.globalScalex)
        const geometry1 = new THREE.BoxGeometry(0.008, (labelHeight3D), (labelWidth3D)); //length and width

        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube = new THREE.Mesh(geometry1, material1);
        label.cube.userData.id = { labelName: label.labelname, labelType: "Right" };
        this.scene.add(label.cube);

        label.cube.position.set(-(caseWidth3D / 2), -(((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), -(((caseLength3D / 2) - (labelWidth3D / 2)) - labelPositionA3D))
      }

      if (label.typename === "Left") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Left";
        // }

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        // this.cubeInitialPositionRL(label,this.globalScalez,this.globalScaley,this.globalScalex);
        // const geometry1 = new THREE.BoxGeometry(0.008,parseFloat(label.finalHeightRL).toFixed(3),parseFloat(label.finalWidthRL).toFixed(3)); //length and width
        const geometry1 = new THREE.BoxGeometry(0.008, labelHeight3D, labelWidth3D); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube = new THREE.Mesh(geometry1, material1);
        label.cube.userData.id = { labelName: label.labelname, labelType: "Left" };
        this.scene.add(label.cube);

        label.cube.position.set((caseWidth3D / 2), -(((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), (((caseLength3D / 2) - (labelWidth3D / 2)) - labelPositionA3D));
      }


      //Top-Front

      //Front
      if (label.typename == "Top-Front") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top-Front";
        // }

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        // this.cubeInitialPositionTOPCORNER(label,this.globalScalex,this.globalScaley,this.globalScalez);
        // const geometry2 = new THREE.BoxGeometry(parseFloat(label.finalWidthTC).toFixed(3),parseFloat(label.finalHeightTC).toFixed(3),0.008); //length and width
        const geometry2 = new THREE.BoxGeometry(labelWidth3D, caseHeight3D - labelPositionB3D, 0.008); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        // if (label.labelname === this.globalName) {
        //   label.newcolor = 0x808080
        // }
        // else {
        //   label.newcolor = this.previouColor
        // }
        const material2 = new THREE.MeshBasicMaterial({ color: label.newcolor, });
        label.cube2 = new THREE.Mesh(geometry2, material2);
        label.cube2.userData.id = { labelName: label.labelname, labelType: "Top-Front" };
        this.scene.add(label.cube2);

        label.cube2.position.set(-(((caseWidth3D / 2) - (labelWidth3D / 2)) - labelPositionA3D), -(((caseHeight3D / 2) - ((caseHeight3D - labelPositionB3D) / 2)) - labelPositionB3D), (caseLength3D / 2));

      }
      //Top
      if (label.typename == "Top-Front") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top-Front";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        // this.cubeInitialPositionTOPCORNER(label, this.globalScalex, this.globalScalez, this.globalScaley);
        // const geometry1 = new THREE.BoxGeometry(parseFloat(label.finalWidthTC).toFixed(3), 0.008, parseFloat(label.finalHeightTC).toFixed(3)
        const geometry1 = new THREE.BoxGeometry(labelWidth3D, 0.008, (labelHeight3D - (caseHeight3D - labelPositionB3D))); //length and width
        // if (label.labelname === this.state.labelname) {
        //   label.newcolor = 0x808080
        // }
        // else {
        //   label.newcolor = this.previouColor
        // }
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube1 = new THREE.Mesh(geometry1, material1);
        label.cube1.userData.id = { labelName: label.labelname, labelType: "Top-Front" };
        this.scene.add(label.cube1);

        label.cube1.position.set(-(((caseWidth3D / 2) - (labelWidth3D / 2)) - labelPositionA3D), (caseHeight3D / 2), (((caseLength3D / 2) - ((labelHeight3D - (caseHeight3D - labelPositionB3D)) / 2))));
      }


      //Top-Back
      //Back
      if (label.typename == "Top-Back") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top-Back";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        // this.cubeInitialPositionTOPCORNER(label, this.globalScalex, this.globalScalez, this.globalScaley);
        // const geometry1 = new THREE.BoxGeometry(parseFloat(label.finalWidthTC).toFixed(3), 0.008, parseFloat(label.finalHeightTC).toFixed(3)
        const geometry1 = new THREE.BoxGeometry(labelWidth3D, (caseHeight3D - labelPositionB3D), 0.008); //length and width

        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube4 = new THREE.Mesh(geometry1, material1);
        label.cube4.userData.id = { labelName: label.labelname, labelType: "Top-Back" };
        this.scene.add(label.cube4);

        label.cube4.position.set((((caseWidth3D / 2) - (labelWidth3D / 2)) - labelPositionA3D), -(((caseHeight3D / 2) - ((caseHeight3D - labelPositionB3D) / 2)) - labelPositionB3D), -(caseLength3D / 2));

      }
      //Top
      if (label.typename == "Top-Back") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top-Back";
        // }

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry(labelWidth3D, 0.008, (labelHeight3D - (caseHeight3D - labelPositionB3D))); //length and width

        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube3 = new THREE.Mesh(geometry1, material1);
        label.cube3.userData.id = { labelName: label.labelname, labelType: "Top-Back" };
        this.scene.add(label.cube3);

        label.cube3.position.set((((caseWidth3D / 2) - (labelWidth3D / 2)) - labelPositionA3D), (caseHeight3D / 2), -(((caseLength3D / 2) - ((labelHeight3D - (caseHeight3D - labelPositionB3D)) / 2))));

      }

      //top-right 
      //Right
      if (label.typename == "Top-Right") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top-Right";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry(0.008, (caseHeight3D - labelPositionB3D), labelWidth3D); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube6 = new THREE.Mesh(geometry1, material1);
        label.cube6.userData.id = { labelName: label.labelname, labelType: "Top-Right" };
        this.scene.add(label.cube6);

        label.cube6.position.set(-(caseWidth3D / 2), (((caseHeight3D / 2) - ((caseHeight3D - labelPositionB3D) / 2))), -(((caseLength3D / 2) - (labelWidth3D / 2)) - labelPositionA3D));

      }
      //Top
      if (label.typename == "Top-Right") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top-Right";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry((labelHeight3D - (caseHeight3D - labelPositionB3D)), 0.008, labelWidth3D); //length and width

        // if (label.labelname === this.state.labelname) {
        //   label.newcolor = 0x808080
        // }
        // else {
        //   label.newcolor = this.previouColor
        // }
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube5 = new THREE.Mesh(geometry1, material1);
        label.cube5.userData.id = { labelName: label.labelname, labelType: "Top-Right" };
        this.scene.add(label.cube5);

        label.cube5.position.set(-(((caseWidth3D / 2) - ((labelHeight3D - (caseHeight3D - labelPositionB3D)) / 2))), (caseHeight3D / 2), -(((caseLength3D / 2) - (labelWidth3D / 2)) - labelPositionA3D));


      }

      // top-left
      //Left
      if (label.typename == "Top-Left") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top-Left";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);


        const geometry1 = new THREE.BoxGeometry(0.008, (caseHeight3D - labelPositionB3D), labelWidth3D); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube8 = new THREE.Mesh(geometry1, material1);
        label.cube8.userData.id = { labelName: label.labelname, labelType: "Top-Left" };
        this.scene.add(label.cube8);

        label.cube8.position.set((caseWidth3D / 2), (((caseHeight3D / 2) - ((caseHeight3D - labelPositionB3D) / 2))), (((caseLength3D / 2) - (labelWidth3D / 2)) - labelPositionA3D));


      }
      //Top
      if (label.typename == "Top-Left") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Top-Left";
        // }

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry((labelHeight3D - (caseHeight3D - labelPositionB3D)), 0.008, labelWidth3D); //length and width

        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube7 = new THREE.Mesh(geometry1, material1);
        label.cube7.userData.id = { labelName: label.labelname, labelType: "Top-Left" };
        this.scene.add(label.cube7);

        label.cube7.position.set((((caseWidth3D / 2) - ((labelHeight3D - (caseHeight3D - labelPositionB3D)) / 2))), (caseHeight3D / 2), (((caseLength3D / 2) - (labelWidth3D / 2)) - labelPositionA3D));


      }

      //front-right
      //Front
      if (label.typename == "Front-Right") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Front-Right";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry((labelWidth3D - (caseLength3D - labelPositionA3D)), labelHeight3D, 0.008); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        // if (label.labelname === this.globalName) {
        //   label.newcolor = 0x808080
        // }
        // else {
        //   label.newcolor = this.previouColor
        // }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube9 = new THREE.Mesh(geometry1, material1);
        label.cube9.userData.id = { labelName: label.labelname, labelType: "Front-Right" };
        this.scene.add(label.cube9);

        label.cube9.position.set(-(((caseWidth3D / 2) - ((labelWidth3D - (caseLength3D - (labelPositionA3D))) / 2))), (((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), (caseLength3D / 2));
      }
      //Right
      if (label.typename == "Front-Right") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Front-Right";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry(0.008, (labelHeight3D), (caseLength3D - labelPositionA3D)); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube10 = new THREE.Mesh(geometry1, material1);
        label.cube10.userData.id = { labelName: label.labelname, labelType: "Front-Right" };
        this.scene.add(label.cube10);

        label.cube10.position.set(-(caseWidth3D / 2), (((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), (((caseLength3D / 2) - (caseLength3D - (labelPositionA3D)) / 2)));

      }

      //Right-Back
      //Right
      if (label.typename == "Right-Back") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Right-Back";
        // }

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry(0.008, labelHeight3D, (labelWidth3D - (caseWidth3D - labelPositionA3D))); //length and width

        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube11 = new THREE.Mesh(geometry1, material1);
        label.cube11.userData.id = { labelName: label.labelname, labelType: "Right-Back" };
        this.scene.add(label.cube11);

        label.cube11.position.set(-(caseWidth3D / 2), (((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), -(((caseLength3D / 2) - ((labelWidth3D - (caseWidth3D - labelPositionA3D)) / 2))));

      }
      //Back
      if (label.typename == "Right-Back") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Right-Back";
        // }

        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry((caseWidth3D - labelPositionA3D), labelHeight3D, 0.008); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube12 = new THREE.Mesh(geometry1, material1);
        label.cube12.userData.id = { labelName: label.labelname, labelType: "Right-Back" };
        this.scene.add(label.cube12);

        label.cube12.position.set(-((caseWidth3D / 2) - ((caseWidth3D - labelPositionA3D) / 2)), (((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), -(caseLength3D / 2));

      }

      //Front
      if (label.typename == "Front-Left") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Front-Left";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry((caseWidth3D - (labelPositionA3D)), (labelHeight3D), 0.008); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        // if (label.labelname === this.globalName) {
        //   label.newcolor = 0x808080
        // }
        // else {
        //   label.newcolor = this.previouColor
        // }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube13 = new THREE.Mesh(geometry1, material1);
        label.cube13.userData.id = { labelName: label.labelname, labelType: "Front-Left" };
        this.scene.add(label.cube13);

        label.cube13.position.set((((caseWidth3D / 2) - (caseWidth3D - (labelPositionA3D)) / 2)), (((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), (caseLength3D / 2));
        // if (this.globalx > 0) {
        //   console.log("changing position x")
        //   label.cube.position.set(label.finalXpos, label.mapPositiony, label.mapPosition)
        //   if (this.globalx > 0 && this.globaly > 0) {
        //     label.cube.position.set(label.finalXpos, label.finalYpos, label.mapPosition)
        //   }
        // }
        // if (this.globaly > 0) {
        //   label.cube.position.set(label.mapPositionx, label.finalYpos, label.mapPosition)
        //   if (this.globalx > 0 && this.globaly > 0) {
        //     label.cube.position.set(label.finalXpos, label.finalYpos, label.mapPosition)
        //   }
        // }
      }
      //Left
      if (label.typename == "Front-Left") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Front-Left";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry(0.008, (labelHeight3D), (labelWidth3D - (caseWidth3D - (labelPositionA3D)))); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube14 = new THREE.Mesh(geometry1, material1);
        label.cube14.userData.id = { labelName: label.labelname, labelType: "Front-Left" };
        this.scene.add(label.cube14);

        label.cube14.position.set((caseWidth3D / 2), (((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), (((caseLength3D / 2) - ((labelWidth3D - (caseWidth3D - (labelPositionA3D))) / 2))));
        // if (this.globalx > 0) {
        //   console.log("changing position x")
        //   label.cube.position.set((label.mapPosition), label.mapPositiony, -label.finalXpos)
        //   if (this.globalx > 0 && this.globaly > 0) {
        //     label.cube.position.set((label.mapPosition), label.finalYpos, -label.finalXpos)
        //   }
        // }
        // if (this.globaly > 0) {
        //   label.cube.position.set((label.mapPosition), label.finalYpos, -label.mapPositionx)
        //   if (this.globalx > 0 && this.globaly > 0) {
        //     label.cube.position.set((label.mapPosition), label.finalYpos, -label.finalXpos)
        //   }
        // }
      }

      //Left
      if (label.typename == "Left-Back") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Left-Back";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry(0.008, (labelHeight3D), (caseLength3D - (labelPositionA3D))); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube15 = new THREE.Mesh(geometry1, material1);
        label.cube15.userData.id = { labelName: label.labelname, labelType: "Left-Back" };
        this.scene.add(label.cube15);

        label.cube15.position.set((caseWidth3D / 2), (((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), -((caseLength3D / 2) - ((caseLength3D - (labelPositionA3D)) / 2)));
        // if (this.globalx > 0) {
        //   console.log("changing position x")
        //   label.cube.position.set((label.mapPosition), label.mapPositiony, -label.finalXpos)
        //   if (this.globalx > 0 && this.globaly > 0) {
        //     label.cube.position.set((label.mapPosition), label.finalYpos, -label.finalXpos)
        //   }
        // }
        // if (this.globaly > 0) {
        //   label.cube.position.set((label.mapPosition), label.finalYpos, -label.mapPositionx)
        //   if (this.globalx > 0 && this.globaly > 0) {
        //     label.cube.position.set((label.mapPosition), label.finalYpos, -label.finalXpos)
        //   }
        // }
      }
      //Back
      if (label.typename == "Left-Back") {
        // if (this.state.labelname === label.labelname) {
        this.currLabelType = "Left-Back";
        // }
        let labelPositionA3D = this.map(this.globalx, 10, 1000, 0.2, 20);
        let labelPositionB3D = this.map(this.globaly, 10, 1000, 0.2, 20);

        let labelWidth3D = this.map(this.globalWidth, 10, 1000, 0.2, 20);
        let labelHeight3D = this.map(this.globalHeight, 10, 1000, 0.2, 20);

        const geometry1 = new THREE.BoxGeometry((labelWidth3D - (caseLength3D - (labelPositionA3D))), (labelHeight3D), 0.008); //length and width
        if (
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          null ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] ==
          undefined ||
          this.currentColorArr[this.labelNames.indexOf(label.labelname)] == ""
        ) {
          label.newcolor = "#FFFFFF";
        } else {
          label.newcolor = this.currentColorArr[
            this.labelNames.indexOf(label.labelname)
          ];
        }
        const material1 = new THREE.MeshBasicMaterial({
          color: label.newcolor,
        });
        label.cube16 = new THREE.Mesh(geometry1, material1);
        label.cube16.userData.id = { labelName: label.labelname, labelType: "Left-Back" };
        this.scene.add(label.cube16);

        label.cube16.position.set(((caseWidth3D / 2) - ((labelWidth3D - (caseLength3D - (labelPositionA3D))) / 2)), (((caseHeight3D / 2) - (labelHeight3D / 2)) - labelPositionB3D), -(caseLength3D / 2));
        // if (this.globalx > 0) {
        //   console.log("changing position x")
        //   label.cube.position.set(-(label.finalXpos), label.mapPositiony, -(label.mapPosition))
        //   if (this.globalx > 0 && this.globaly > 0) {
        //     label.cube.position.set(-(label.finalXpos), label.finalYpos, -(label.mapPosition))
        //   }
        // }
        // if (this.globaly > 0) {
        //   label.cube.position.set(-(label.mapPositionx), label.finalYpos, -(label.mapPosition))
        //   if (this.globalx > 0 && this.globaly > 0) {
        //     label.cube.position.set(-(label.finalXpos), label.finalYpos, -(label.mapPosition))
        //   }
        // }
      }

    }

    // if(!this.arrayforlabels.includes(label.labelname)){
    // localStorage.setItem(label.labelname,label.labelname)
    this.arrayforlabels.push(label.labelname);
    //  this.arrayforlabels = [label.labelname]
    console.log("cehck for the array" + label.labelname);
    // console.log("cehck for the array123" + localStorage.setItem(this.globalName,label.labelname))
    //  }

    // this.arrayfunction(label)

    return label;
  };
  attachLabel = (x, y, width, height, type, labelname) => {
    if (this.scene != null && this.scene != undefined) {
      this.scene.remove(this.cube);
      this.scene.remove(this.root);
      this.root.remove(this.cube);
      this.root.remove(this.globalLinesegs);
      this.root.position.x = 0;
      var texture1, texture2, texture3, texture4, texture5, texture6;
      console.log(x, y, width, height, type);

      console.log("record.mass inside attachLabel called = ");
      if (width != 0 && height != 0 && labelname && labelname != "Label0" && labelname != "") {
        console.log("this.labelNames inside attachLabel = ", this.labelNames);
        if (this.labelNames.indexOf(labelname) > -1) {
          console.log("Label name exists = ", labelname);
          const index = this.labelNames.indexOf(labelname);
          this.labels[index].labelx = x;
          this.labels[index].labely = y;
          this.labels[index].labelwidth = width;
          this.labels[index].labelheight = height;
          this.labels[index].typename = type;
        }
        else {
          console.log("record.mass inside attachLabel = " + this.globalMass);
          const labelEle = {
            id: 0,
            name: this.props.match.params.casename,
            length: this.globalScalex,
            width: this.globalScaley,
            height: this.globalScalez,
            material: this.state.showcaseTexture,
            mass: this.mass,
            labelcolour: this.previouColor,
            directionx: this.globalRotationx,
            directiony: this.globalRotationy,
            directionz: this.globalRotationz,
            typename: type,
            labelname: labelname,
            labelx: x,
            labely: y,
            labelwidth: width,
            labelheight: height,
            finalHeight: this.state.newfinalHeight,
            finalWidth: this.state.newfinalWidth,
            finalXpos: this.state.newfinalXpos,
            finalYpos: this.state.newfinalYpos,
            mapPosition: this.state.newmapPosition,
            mapPositionx: this.state.newmapPositionx,
            mapPositiony: this.state.newmapPositiony,
            changeHeight: this.state.newchangeHeight,
            changeWidth: this.state.newchangeWidth,
            changePositionA: this.state.newchangePositionA,
            changePositionB: this.state.newchangePositionB,
          };
          this.labels.push(labelEle);
          this.labelNames.push(labelname);
          this.recordnames.push(labelname);
        }

      }
      const returnValues = this.createLabels();
      // texture1 = returnValues[0];
      // texture2 = returnValues[1];
      // texture3 = returnValues[2];
      // texture4 = returnValues[3];
      // texture5 = returnValues[4];
      // texture6 = returnValues[5];
      console.log("this.globalScalex = ", this.globalScalex);
      console.log("this.globalScaley = ", this.globalScaley);
      console.log("this.globalScalez = ", this.globalScalez);

      const newScalex = this.map(this.globalScalex, this.globalDimensionMin, this.globalDimensionMax, this.scaleBoxMin, this.scaleBoxMax);
      const newScaley = this.map(this.globalScaley, this.globalDimensionMin, this.globalDimensionMax, this.scaleBoxMin, this.scaleBoxMax);
      const newScalez = this.map(this.globalScalez, this.globalDimensionMin, this.globalDimensionMax, this.scaleBoxMin, this.scaleBoxMax);

      this.scene.remove(this.plane);

      var textureArrowImage;
      if (this.state.selectedCase == "Basic") {
        textureArrowImage = new THREE.TextureLoader().load(arrowImage1);
      }
      else if (this.state.selectedCase == "Advanced") {
        textureArrowImage = new THREE.TextureLoader().load(brown);
      }
      // var textureArrowImage = new THREE.TextureLoader().load(arrowImage);
      const planeGeo = new THREE.PlaneGeometry(newScalex * 2.5, newScalez * 2.5);
      const planeMaterial = new THREE.MeshPhysicalMaterial(
        {
          color: 0xf2f2f2,
          transparent: false,
          opacity: 0.0,
          side: THREE.DoubleSide,
          map: textureArrowImage,
        }
      );
      this.plane = new THREE.Mesh(planeGeo, planeMaterial);
      this.plane.receiveShadow = true;
      // planeMaterial.needsUpdate = true;
      this.plane.material.needsUpdate = true;
      var planey = this.map(newScaley, 0, 10, 0, -5.1);
      console.log("planey = ");
      console.log(planey);
      this.plane.position.set(0, planey, 0);
      this.plane.rotateX(-Math.PI / 2.0);
      this.scene.add(this.plane);

      const max = Math.max(this.globalScalex, this.globalScaley, this.globalScalez);
      console.log("max is " + max);

      this.camera.remove(this.light);
      this.scene.remove(this.camera);
      this.camera.remove(this.light1);
      this.scene.remove(this.camera);

      //Zoom level according to case diamensions
      const num1 = this.globalScalex;
      const num2 = this.globalScaley;
      const num3 = this.globalScalez;
      this.largest = Math.max(num1, num2, num3);
      console.log("The largest number is " + this.largest);

      var d = 0;
      console.log("distances1 " + this.distance);

      if (this.prevLargest != this.largest) {

        this.prevLargest = this.largest;
        if (this.state.xdim == 10 || this.state.ydim == 10 || this.state.zdim == 10) {

          this.distance = this.map(this.largest, 10, 1000, 1, 84);
        }
        else {
          this.distance = this.map(this.largest, 10, 1000, 2, 84);

        }
        console.log("distances=2 " + this.distance);
        var newLength = this.distance * (1 + Math.sin(d / 1000) / 2);
        this.camera.position.normalize().multiplyScalar(newLength);

      }

      var brownImageTexture = new THREE.TextureLoader().load(this.textures);
      // var DarkBrownImageTexture = new THREE.TextureLoader().load(this.darktextures);
      let pitchMaterialParams = [];

      for (var i = 0; i < 6; i++) {

        pitchMaterialParams[i] = {
          uniforms: THREE.UniformsUtils.merge([
            {

              texture1: null,
              texture2: null,

            }
          ]),
          vertexShader:

            `         
           precision highp float;
           precision highp int;
           //uniform mat4 modelViewMatrix;
           //uniform mat4 projectionMatrix;
           //attribute vec3 position;
           //attribute vec2 uv;
           varying vec2 vUv;
           void main() {
             vUv = uv;
             vec4 worldPosition = modelMatrix * vec4(position, 1.0);
             gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );             
           }           
         `
          ,
          fragmentShader:
            `
           precision mediump float;
           uniform sampler2D texture1;
           uniform sampler2D texture2;
           varying vec2 vUv;
           void main() {
             vec4 t1 = texture2D( texture1, vUv );
             vec4 t2 = texture2D( texture2, vUv );
             gl_FragColor = vec4(mix(t1.rgb, t2.rgb, t2.a), 1.0);
           }
         `,

          // uniforms: THREE.UniformsUtils.merge([
          //   THREE.UniformsLib['shadowmap'],
          //   {
          //     floorColor: { type: 'f', value: 0.3 },
          //     texture1: null,
          //     texture2: null,
          //     texture3: null,
          //     offset: 400.0,
          //     exponent: 0.6,
          //   },
          // ]),
          // vertexShader: [
          //   THREE.ShaderChunk["shadowmap_pars_vertex"],
          //   "precision highp float;",
          //   "precision highp int;",
          //   "varying vec2 vUv;",
          //   "varying vec3 vWorldPosition;",
          //   "void main() {",
          //   "  vUv = uv;",
          //   "  vec4 worldPosition = modelMatrix * vec4(position, 1.0);",
          //   "  vWorldPosition = worldPosition.xyz;",
          //   "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
          //   THREE.ShaderChunk["shadowmap_vertex"],
          //   "}",
          // ].join('\n'),
          // fragmentShader: [
          //   THREE.ShaderChunk["shadowmap_pars_fragment"],
          //   "precision mediump float;",
          //   "uniform sampler2D texture1;",
          //   "uniform sampler2D texture2;",
          //   "uniform sampler2D texture3;",
          //   "uniform float floorColor;",
          //   "uniform float offset;",
          //   "uniform float exponent;",
          //   "varying vec3 vWorldPosition;",
          //   "varying vec2 vUv;",
          //   "void main() {",
          //   "  float h = normalize( vWorldPosition + 400.0 ).y;",
          //   "  vec4 t1 = texture2D( texture1, vUv );",
          //   "  vec4 t2 = texture2D( texture2, vUv );",
          //   "  vec4 t3 = texture2D( texture3, vUv );",
          //   "  gl_FragColor = vec4(mix(t1.rgb, t2.rgb, t2.a), 1.0);",
          //   "  //gl_FragColor = vec4( mix( t1.rgb, t2.rgb, max( pow( max( h, 0.0 ), 3.0 ), 0.0 ) ), 1.0 );",
          //   THREE.ShaderChunk["shadowmap_fragment"],
          //   "}",
          // ].join('\n'),

        };

      }

      var geometry = new THREE.BoxGeometry(newScalex, newScaley, newScalez);
      const edges = new THREE.EdgesGeometry(geometry);
      const linesegs = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x808080 }));
      this.globalLinesegs = linesegs;
      var cube;
      if (this.state.selectedCase == "Basic") {
        this.plane.receiveShadow = false;
        var cubeMaterials = [
          new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture1 }),  //Left 2
          new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture2 }),  //Right 4
          new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture3 }),  //top 5
          new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture4 }),  //bottom 6
          new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture5 }),  //front 1
          new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 1.5, map: texture6 })]; //back 3

        var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
        var cube = new THREE.Mesh(geometry, cubeMaterial);

        // this.group.add(cube);
        // this.scene.add(cube)


      } else if (this.state.selectedCase == "Advanced") {
        let material = [];
        material[0] = new THREE.ShaderMaterial(pitchMaterialParams[0]);
        material[0].uniforms.texture1.value = brownImageTexture;
        material[0].uniforms.texture2.value = texture1;
        material[0].side = THREE.DoubleSide;

        material[1] = new THREE.ShaderMaterial(pitchMaterialParams[1]);
        material[1].uniforms.texture1.value = brownImageTexture;
        material[1].uniforms.texture2.value = texture2;
        material[1].side = THREE.DoubleSide;

        material[2] = new THREE.ShaderMaterial(pitchMaterialParams[2]);
        material[2].uniforms.texture1.value = brownImageTexture;
        material[2].uniforms.texture2.value = texture3;
        material[2].side = THREE.DoubleSide;

        material[3] = new THREE.ShaderMaterial(pitchMaterialParams[3]);
        material[3].uniforms.texture1.value = brownImageTexture;
        material[3].uniforms.texture2.value = texture4;
        material[3].side = THREE.DoubleSide;

        material[4] = new THREE.ShaderMaterial(pitchMaterialParams[4]);
        material[4].uniforms.texture1.value = brownImageTexture;
        material[4].uniforms.texture2.value = texture5;
        material[4].side = THREE.DoubleSide;

        material[5] = new THREE.ShaderMaterial(pitchMaterialParams[5]);
        material[5].uniforms.texture1.value = brownImageTexture;
        material[5].uniforms.texture2.value = texture6;
        material[5].side = THREE.DoubleSide;

        this.cube = new THREE.Mesh(geometry, material);
        // this.cube.castShadow = true;
        // this.cube.receiveShadow = false;
        material.needsUpdate = true;
      }

      this.camera.remove(this.light);
      this.scene.remove(this.camera);
      this.scene.remove(this.light1);

      console.log("this.globalRotationx = ", this.globalRotationx);
      console.log("this.globalRotationy = ", this.globalRotationy);
      console.log("this.globalRotationz = ", this.globalRotationz);
      let minPosition = this.map(max, 10, 1000, 22, 50);
      let maxPosition = this.map(max, 10, 1000, 10, 20);
      let Xposition = this.map(max, 10, 1000, -8, -15);
      let TopMap = this.map(max, 10, 1000, 4, 40);
      let BottomMap = this.map(max, 10, 1000, -2, -20);
      let RightMap = this.map(max, 10, 1000, 2, 20);
      let LeftMap = this.map(max, 10, 1000, -2, -20);

      this.light1 = new THREE.HemisphereLight(0xfcfcfc, 0.3);
      this.light1.position.copy(this.scene.position)
      this.light1.intensity = this.map(this.globalScalex, 10, 1000, 1.3, 1.3);

      this.light = new THREE.DirectionalLight(0xfcfcfc, 0.3);
      this.light.position.copy(this.camera.position)
      this.light.castShadow = true;
      this.light.target.position.copy(this.scene.position);
      this.light.intensity = this.map(this.globalScalex, 10, 1000, 1.7, 1.7);
      this.light.shadow.radius = 25;


      this.light.shadow.camera.top = TopMap; // default
      this.light.shadow.camera.bottom = BottomMap; // default
      this.light.shadow.camera.right = RightMap; // default
      this.light.shadow.camera.left = LeftMap; // default

      this.cube.castShadow = true;
      this.light.target.position.add(this.scene.position);
      this.light.shadow.mapSize.width = 1024;
      this.light.shadow.mapSize.height = 1024;

      // this.createAndAttach3DText(this.cube);

      this.root.add(this.light.shadow.camera);
      // this.cube = cube;
      this.root.add(this.cube);
      this.root.add(this.globalLinesegs);
      this.scene.add(this.root);
      this.renderer.render(this.scene, this.camera);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.needsUpdate = true;
      this.renderer.castShadow = true;
      this.camera.add(this.light);
      this.scene.add(this.camera);
      this.scene.add(this.light1);
      this.scene.add(this.cylinder1);
    }
  }


  // createAndAttach3DtextFront = () => {
  //   this.size = this.map(this.globalScalex, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, 0, 0)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, 0.5, 9)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, 0.55, 11)

  //   this.frontText = this.add3DText('FRONT', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 0, 0, 0);
  //   return this.frontText;

  // }

  // createAndAttach3DtextFrontA = () => {
  //   this.size = this.map(this.globalScalex, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, 0.01, 0.3)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, -0.3, -6)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, 0.55, 11)
  //   this.frontTextA = this.add3DText('A', this.size, this.positionx, this.positiony, this.positionz, "blue", 'ltr', 'center', 'top-cap', 0, 0, 0);
  //   return this.frontTextA;
  // } 

  // createAndAttach3DtextFrontB = () => {
  //   this.size = this.map(this.globalScalex, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, -0.38, -8)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, 0.01, -0.1)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, 0.55, 11)
  //   this.frontTextB = this.add3DText('B', this.size, this.positionx, this.positiony, this.positionz, "blue", 'ltr', 'center', 'top-cap', 0, 0, 0);
  //   return this.frontTextB;
  // }

  // createAndAttach3DtextBack = () => {
  //   this.size = this.map(this.globalScalex, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, 0, 0)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, 0.5, 9)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, -0.55, -11)

  //   this.backText = this.add3DText('BACK', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 0, 3.14, 0);
  //   return this.backText;
  // }

  // createAndAttach3DtextBackA = () => {
  //   this.size = this.map(this.globalScalex,10,1000,0.1,2)

  //     this.positionx = this.map(this.globalScalex,10,1000,0,0)
  //     this.positiony = this.map(this.globalScaley,10,1000,-0.3,-6)
  //     this.positionz = this.map(this.globalScalez,10,1000,-0.55,-11)

  //     this.backTextA = this.add3DText('A', this.size,this.positionx, this.positiony,this.positionz, "green", 'ltr', 'center', 'top-cap', 0, 3.14, 0);
  //     return this.backTextA;
  // }


  // createAndAttach3DtextBackB = () => {
  //   this.size = this.map(this.globalScalex,10,1000,0.1,2)

  //     this.positionx = this.map(this.globalScalex,10,1000,0.35,8)
  //     this.positiony = this.map(this.globalScaley,10,1000,0.1,-0.1)
  //     this.positionz = this.map(this.globalScalez,10,1000,-0.55,-11)

  //     this.backTextB = this.add3DText('B', this.size,this.positionx, this.positiony,this.positionz, "green", 'ltr', 'center', 'top-cap', 0, 3.14, 0);
  //     return this.backTextB;
  // }

  // createAndAttach3DtextRight = () => {
  //   this.size = this.map(this.globalScalez, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, -0.55, -11)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, 0.5, 9)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, 0, 0)

  //   this.rightText = this.add3DText('RIGHT', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 0, 4.71, 0);
  //   return this.rightText;
  // }

  // createAndAttach3DtextRightA = () => {
  //   this.size = this.map(this.globalScalez,10,1000,0.1,2)

  //   this.positionx = this.map(this.globalScalex,10,1000,-0.55,-11)
  //   this.positiony = this.map(this.globalScaley,10,1000,-0.3,-6)
  //   this.positionz = this.map(this.globalScalez,10,1000,-0.05,-0.9)

  //   this.rightTextA = this.add3DText('A', this.size, this.positionx,this.positiony, this.positionz, "red", 'ltr', 'center', 'top-cap', 0, 4.71, 0);
  //     return this.rightTextA;
  // }

  // createAndAttach3DtextRightB = () => {
  //   this.size = this.map(this.globalScalez,10,1000,0.1,2)

  //   this.positionx = this.map(this.globalScalex,10,1000,-0.55,-11)
  //   this.positiony = this.map(this.globalScaley,10,1000,0.01,-0.1)
  //   this.positionz = this.map(this.globalScalez,10,1000,-0.35,-8)

  //   this.rightTextB = this.add3DText('B', this.size, this.positionx,this.positiony, this.positionz, "red", 'ltr', 'center', 'top-cap', 0, 4.71, 0);
  //     return this.rightTextB;
  // }



  // createAndAttach3DtextLeft = () => {
  //   this.size = this.map(this.globalScalez, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, 0.55, 11)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, 0.5, 9)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, 0, 0)

  //   this.leftText = this.add3DText('LEFT', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 0, 1.57, 0);
  //   return this.leftText;
  // }



  // createAndAttach3DtextLeftA = () => {

  //   this.size = this.map(this.globalScalez,10,1000,0.1,2)

  //     this.positionx = this.map(this.globalScalex,10,1000,0.55,11)
  //     this.positiony = this.map(this.globalScaley,10,1000,-0.3,-6)
  //     this.positionz = this.map(this.globalScalez,10,1000,0.05,0.9)

  //     this.leftTextA = this.add3DText('A', this.size, this.positionx,this.positiony, this.positionz, "orange", 'ltr', 'center', 'top-cap', 0, 1.57, 0);
  //      return this.leftTextA;
  // }

  // createAndAttach3DtextLeftB = () => {

  //   this.size = this.map(this.globalScalez,10,1000,0.1,2)

  //     this.positionx = this.map(this.globalScalex,10,1000,0.55,11)
  //     this.positiony = this.map(this.globalScaley,10,1000,0.01,0.3)
  //     this.positionz = this.map(this.globalScalez,10,1000,0.35,8)

  //     this.leftTextB = this.add3DText('B', this.size, this.positionx,this.positiony, this.positionz, "orange", 'ltr', 'center', 'top-cap', 0, 1.57, 0);
  //     return this.leftTextB;
  // }

  // createAndAttach3DtextTop = () => {
  //   this.size = this.map(this.globalScaley, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, 0, 0)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, 0.55, 11)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, -0.5, -9)

  //   this.topText = this.add3DText('TOP', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 4.71, 0, 0);
  //   return this.topText;
  // }

  // createAndAttach3DtextTopA = () => {
  //   this.size = this.map(this.globalScaley,10,1000,0.1,2)

  //     this.positionx = this.map(this.globalScalex,10,1000,-0.15,-4)
  //     this.positiony = this.map(this.globalScaley,10,1000,0.55,11)
  //     this.positionz = this.map(this.globalScalez,10,1000,-0.4,-9)

  //     this.topTextA = this.add3DText('A', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 4.71, 0, 0);
  //     return this.topTextA;
  // }
  // createAndAttach3DtextTopB = () => {
  //   this.size = this.map(this.globalScaley,10,1000,0.1,2)

  //     this.positionx = this.map(this.globalScalex,10,1000,-0.4,-6)
  //     this.positiony = this.map(this.globalScaley,10,1000,0.55,11)
  //     this.positionz = this.map(this.globalScalez,10,1000,-0.12,-3)

  //     this.topTextB = this.add3DText('B', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 4.71, 0, 0);
  //     return this.topTextB;
  // }

  // createAndAttach3DtextTopLeftRightA = () => {
  //   this.size = this.map(this.globalScaley, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, -0.15, -4)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, 0.55, 11)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, -0.4, -9)
  //   //in the place of A, B has to be displayed
  //   this.topTextA = this.add3DText('B', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 4.71, 0, 0);
  //   return this.topTextA;
  // }
  // createAndAttach3DtextTopLeftRightB = () => {
  //   this.size = this.map(this.globalScaley, 10, 1000, 0.1, 2)

  //   this.positionx = this.map(this.globalScalex, 10, 1000, -0.4, -6)
  //   this.positiony = this.map(this.globalScaley, 10, 1000, 0.55, 11)
  //   this.positionz = this.map(this.globalScalez, 10, 1000, -0.12, -3)
  //   //in the place of B, A has to be displayed
  //   this.topTextB = this.add3DText('A', this.size, this.positionx, this.positiony, this.positionz, "black", 'ltr', 'center', 'top-cap', 4.71, 0, 0);
  //   return this.topTextB;
  // }


  // createAndAttach3DText = (myScene) => {
  //   // if (this.topText !== null) {
  //   //   myScene.remove(this.topText);
  //   //   this.topText = null;
  //   // }
  //   // if (this.topTextA !== null) {
  //   //   myScene.remove(this.topTextA);
  //   //   this.topTextA = null;
  //   // }
  //   // if (this.topTextB !== null) {
  //   //   myScene.remove(this.topTextB);
  //   //   this.topTextB = null;
  //   // }
  //   // if (this.frontText !== null) {
  //   //   // this.frontText = this.TextFront()
  //   //   // myScene.remove(this.frontText);
  //   //   this.frontText = null;
  //   // }
  //   // if (this.frontTextA !== null) {
  //   //   myScene.remove(this.frontTextA);
  //   //   this.frontTextA = null;
  //   // }
  //   // if (this.frontTextB !== null) {
  //   //   myScene.remove(this.frontTextB);
  //   //   this.frontTextB = null;
  //   // }
  //   // if (this.backText !== null) {
  //   //   myScene.remove(this.backText);
  //   //   this.backText = null;
  //   // }
  //   // if (this.backTextA !== null) {
  //   //   myScene.remove(this.backTextA);
  //   //   this.backTextA = null;
  //   // }
  //   // if (this.backTextB !== null) {
  //   //   myScene.remove(this.backTextB);
  //   //   this.backTextB = null;
  //   // }
  //   // if (this.rightText !== null) {
  //   //   myScene.remove(this.rightText);
  //   //   this.rightText = null;
  //   // }
  //   // if (this.rightTextA !== null) {
  //   //   myScene.remove(this.rightTextA);
  //   //   this.rightTextA = null;
  //   // }
  //   // if (this.rightTextB !== null) {
  //   //   myScene.remove(this.rightTextB);
  //   //   this.rightTextB = null;
  //   // }
  //   // if (this.leftText !== null) {
  //   //   myScene.remove(this.leftText);
  //   //   this.leftText = null;
  //   // }
  //   // if (this.leftTextA !== null) {
  //   //   myScene.remove(this.leftTextA);
  //   //   this.leftTextA = null;
  //   // }
  //   // if (this.leftTextB !== null) {
  //   //   myScene.remove(this.leftTextB);
  //   //   this.leftTextB = null;
  //   // }

  //   // if (this.currLabelType === "Top") {
  //   //   this.topText = this.createAndAttach3DtextTop();
  //   //   myScene.add(this.topText);
  //   //   // this.topTextA = this.createAndAttach3DtextTopA();      
  //   //   // myScene.add(this.topTextA);
  //   //   // this.topTextB = this.createAndAttach3DtextTopB();      
  //   //   // myScene.add(this.topTextB);
  //   // }
  //   // else if (this.currLabelType === "Front") {
  //     // this.frontText = this.TextFront();
  //     // myScene.add(this.frontText);
  //     // this.frontTextA = this.createAndAttach3DtextFrontA();      
  //     // myScene.add(this.frontTextA);
  //     // this.frontTextB = this.createAndAttach3DtextFrontB();      
  //     // myScene.add(this.frontTextB);
  //   // }
  //   // else if (this.currLabelType === "Back") {
  //     // this.backText = this.TextBack();
  //     // myScene.add(this.backText);
  //     // this.backTextA = this.createAndAttach3DtextBackA();
  //     // myScene.add(this.backTextA);
  //     // this.backTextB = this.createAndAttach3DtextBackB();
  //     // myScene.add(this.backTextB);
  //   // }
  //   // else if (this.currLabelType === "Right") {
  //   //   // this.rightText = this.createAndAttach3DtextRight();
  //   //   // myScene.add(this.rightText);
  //   //   // this.rightTextA = this.createAndAttach3DtextRightA();     
  //   //   // myScene.add(this.rightTextA);
  //   //   // this.rightTextB = this.createAndAttach3DtextRightB();     
  //   //   // myScene.add(this.rightTextB);
  //   // }
  //   // else if (this.currLabelType === "Left") {
  //   //   this.leftText = this.createAndAttach3DtextLeft();
  //   //   myScene.add(this.leftText);
  //   //   // this.leftTextA = this.createAndAttach3DtextLeftA();     
  //   //   // myScene.add(this.leftTextA);
  //   //   // this.leftTextB = this.createAndAttach3DtextLeftB();     
  //   //   // myScene.add(this.leftTextB);
  //   // }
  //   // else if (this.currLabelType === "Top-Front") {
  //     // this.topText = this.createAndAttach3DtextTop();
  //     // myScene.add(this.topText);
  //     // this.topTextA = this.createAndAttach3DtextTopA();      
  //     // myScene.add(this.topTextA);
  //     // this.topTextB = this.createAndAttach3DtextTopB();      
  //     // myScene.add(this.topTextB);

  //     // this.frontText = this.createAndAttach3DtextFront();
  //     // myScene.add(this.frontText);
  //     // this.frontTextA = this.createAndAttach3DtextFrontA();      
  //     // myScene.add(this.frontTextA);
  //     // this.frontTextB = this.createAndAttach3DtextFrontB();      
  //     // myScene.add(this.frontTextB);
  //   // }
  //   // else if (this.currLabelType === "Top-Back") {
  //     // this.topText = this.createAndAttach3DtextTop();
  //     // myScene.add(this.topText);
  //     // this.topTextA = this.createAndAttach3DtextTopA();      
  //     // myScene.add(this.topTextA);
  //     // this.topTextB = this.createAndAttach3DtextTopB();      
  //     // myScene.add(this.topTextB);

  //     // this.backText = this.createAndAttach3DtextBack();
  //     // myScene.add(this.backText);
  //     // this.backTextA = this.createAndAttach3DtextBackA();
  //     // myScene.add(this.backTextA);
  //     // this.backTextB = this.createAndAttach3DtextBackB();
  //     // myScene.add(this.backTextB);
  //   // }
  //   // else if (this.currLabelType === "Top-Right") {
  //     // this.topText = this.createAndAttach3DtextTop();
  //     // myScene.add(this.topText);
  //     // this.topTextA = this.createAndAttach3DtextTopLeftRightA();      
  //     // myScene.add(this.topTextA);
  //     // this.topTextB = this.createAndAttach3DtextTopLeftRightB();      
  //     // myScene.add(this.topTextB);

  //     // this.rightText = this.createAndAttach3DtextRight();
  //     // myScene.add(this.rightText);
  //     // this.rightTextA = this.createAndAttach3DtextRightA();     
  //     // myScene.add(this.rightTextA);
  //     // this.rightTextB = this.createAndAttach3DtextRightB();     
  //     // myScene.add(this.rightTextB);
  //   // }
  //   // else if (this.currLabelType === "Top-Left") {
  //     // this.topText = this.createAndAttach3DtextTop();
  //     // myScene.add(this.topText);
  //     // this.topTextA = this.createAndAttach3DtextTopLeftRightA();      
  //     // myScene.add(this.topTextA);
  //     // this.topTextB = this.createAndAttach3DtextTopLeftRightB();      
  //     // myScene.add(this.topTextB);

  //     // this.leftText = this.createAndAttach3DtextLeft();
  //     // myScene.add(this.leftText);
  //     // this.leftTextA = this.createAndAttach3DtextLeftA();     
  //     // myScene.add(this.leftTextA);
  //     // this.leftTextB = this.createAndAttach3DtextLeftB();     
  //     // myScene.add(this.leftTextB);
  //   // }
  //   // else if (this.currLabelType === "Front-Right") {
  //     // this.frontText = this.createAndAttach3DtextFront();
  //     // myScene.add(this.frontText);
  //     // this.frontTextA = this.createAndAttach3DtextFrontA();      
  //     // myScene.add(this.frontTextA);
  //     // this.frontTextB = this.createAndAttach3DtextFrontB();      
  //     // myScene.add(this.frontTextB);

  //     // this.rightText = this.createAndAttach3DtextRight();
  //     // myScene.add(this.rightText);
  //     // this.rightTextA = this.createAndAttach3DtextRightA();     
  //     // myScene.add(this.rightTextA);
  //     // this.rightTextB = this.createAndAttach3DtextRightB();     
  //     // myScene.add(this.rightTextB);

  //   // }
  //   // else if (this.currLabelType === "Right-Back") {
  //     // this.rightText = this.createAndAttach3DtextRight();
  //     // myScene.add(this.rightText);
  //     // this.rightTextA = this.createAndAttach3DtextRightA();     
  //     // myScene.add(this.rightTextA);
  //     // this.rightTextB = this.createAndAttach3DtextRightB();     
  //     // myScene.add(this.rightTextB);

  //     // this.backText = this.createAndAttach3DtextBack();
  //     // myScene.add(this.backText);
  //     // this.backTextA = this.createAndAttach3DtextBackA();
  //     // myScene.add(this.backTextA);
  //     // this.backTextB = this.createAndAttach3DtextBackB();
  //     // myScene.add(this.backTextB);
  //   // }
  //   // else if (this.currLabelType === "Front-Left") {
  //     // this.frontText = this.createAndAttach3DtextFront();
  //     // myScene.add(this.frontText);
  //     // this.frontTextA = this.createAndAttach3DtextFrontA();      
  //     // myScene.add(this.frontTextA);
  //     // this.frontTextB = this.createAndAttach3DtextFrontB();      
  //     // myScene.add(this.frontTextB);

  //     // this.leftText = this.createAndAttach3DtextLeft();
  //     // myScene.add(this.leftText);
  //     // this.leftTextA = this.createAndAttach3DtextLeftA();     
  //     // myScene.add(this.leftTextA);
  //     // this.leftTextB = this.createAndAttach3DtextLeftB();     
  //     // myScene.add(this.leftTextB);
  //   // }
  //   // else if (this.currLabelType === "Left-Back") {
  //     // this.leftText = this.createAndAttach3DtextLeft();
  //     // myScene.add(this.leftText);
  //     // this.leftTextA = this.createAndAttach3DtextLeftA();     
  //     // myScene.add(this.leftTextA);
  //     // this.leftTextB = this.createAndAttach3DtextLeftB();     
  //     // myScene.add(this.leftTextB);

  //     // this.backText = this.createAndAttach3DtextBack();
  //     // myScene.add(this.backText);
  //     // this.backTextA = this.createAndAttach3DtextBackA();
  //     // myScene.add(this.backTextA);
  //     // this.backTextB = this.createAndAttach3DtextBackB();
  //     // myScene.add(this.backTextB);
  //   // }
  //   // return myScene;
  // }


  // add3DText = (text, fontsize, posX, posY, posZ, color, direction, anchorX, anchorY, rotX, rotY, rotZ) => {
  //   const myText = new Text();
  //   // Set properties to configure:
  //   myText.text = text;
  //   // myText.text = '!dlrow olleH';
  //   myText.fontSize = fontsize;
  //   myText.position.x = posX;
  //   myText.position.y = posY;
  //   myText.position.z = posZ;
  //   myText.color = color;
  //   myText.direction = direction;
  //   myText.anchorX = anchorX;
  //   myText.anchorY = anchorY;
  //   myText.rotation.x = rotX;
  //   myText.rotation.y = rotY;
  //   myText.rotation.z = rotZ;
  //   // Update the rendering:
  //   myText.sync();
  //   return myText
  // }

  addMUILabel = () => {
    let { t } = this.props;
    let inputValue = this.state.labelname;
    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;

    if (this.state.labelname.trim() === "" || this.state.labelname.trim() === "Label0" ||(!allowedCharactersRegex.test(inputValue)) ) {
      console.log("empty labelName 2");
      this.state.labelname = "Label0"
      toast.error(t('nameisinvalid'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
    }
    
    if (this.state.labelname.trim() !== "" && this.state.labelname.trim() !== "Label0" ) {
      console.log("addMUILabel is called");
      this.globalName = this.state.labelname.trim();
      this.globalWidth = this.state.labelwidth;
      this.globalHeight = this.state.labellength;
      this.globalx = this.state.labela;
      this.globaly = this.state.labelb;
      this.globalType = this.state.labeltype;
      console.log("this.globalName = ", this.globalName);
      this.state.selectlabel = this.globalName;
     

      if ((this.labelNames.indexOf(this.globalName) > -1) || (this.globalName && this.globalName === "Label0" && this.globalName == "")) {
        console.log("Label name is invalid");
        toast.error(t('nameisinvalid'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        return;
      }
      console.log("checking for attachlabel run from addmuilabel::::::")
      this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
      if (this.globalName != "") {
        console.log("addMUILabel Called savelabel")
        this.saveLabel();
      }
      this.setState({
        labels: this.labels,
        operationCompleted: true,
        labelname:this.globalName
      });
    }
  }

  editMUILabel = async (settingColor, tempLabelInfo) => {

    console.log("Called editMUILabel");
    console.log("editLabel is called prat: " + settingColor);
    console.log("this.globalName = ", this.globalName);
    console.log("this.labelNames inside editMUILabel = ", this.labelNames);
    if (this.labelNames.indexOf(this.globalName) > -1) {
      console.log("Label name exists");
      console.log("checking for attachlabel run from editmuilabel::::::")
      this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
      console.log("this.attachLabel this.globalx = " + this.globalx + " this.globaly = " + this.globaly + " this.globalWidth = " + this.globalWidth + " this.globalHeight =  " + this.globalHeight);
      let id = 0;
      if (settingColor == "settingLabelcolor") {
        id = await this.getID(tempLabelInfo.labelname);

      } else {
        id = await this.getID(this.globalName);

      }
      console.log("id = ", id);
      if (id === 0) {
        let { t } = this.props;

        // alert(t('errorinsavinglabel'));
        toast.error(t('errorinsavinglabel'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      }
      else {
        if (settingColor == "settingLabelcolor") {
          this.saveOneLabelColor(id, tempLabelInfo);
        } else {
          this.saveOneLabel(id);

        }
      }
    }
    else {
      // toast.error("Label name does not exist", { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      return;
    }
  }

  deleteMUILabel = async (name) => {

    let index1 = this.labelNames.indexOf(this.globalName);
    console.log("deleteMUILabel this.currentColorArr before = " + this.currentColorArr + " this.labelNames = " + this.labelNames);
    this.currentColorArr.splice(index1, 1);

    console.log("deleteLabel is called");
    console.log("this.globalName = ", this.globalName);
    console.log("this.labelNames inside deleteLabel = ", this.labelNames);
    if (this.labelNames.indexOf(this.globalName) > -1) {
      let lebel3DcubeType_delete;
      let cube_Delete = [];
      for (let i = 0; i < this.labels.length; i++) {
        if (this.labels[i].labelname == this.globalName) {
          lebel3DcubeType_delete = this.labels[i].typename;
          if ('cube' in this.labels[i]) cube_Delete.push(this.labels[i].cube);
          if ('cube1' in this.labels[i]) cube_Delete.push(this.labels[i].cube1);
          if ('cube2' in this.labels[i]) cube_Delete.push(this.labels[i].cube2);
          if ('cube3' in this.labels[i]) cube_Delete.push(this.labels[i].cube3);
          if ('cube4' in this.labels[i]) cube_Delete.push(this.labels[i].cube4);
          if ('cube5' in this.labels[i]) cube_Delete.push(this.labels[i].cube5);
          if ('cube6' in this.labels[i]) cube_Delete.push(this.labels[i].cube6);
          if ('cube7' in this.labels[i]) cube_Delete.push(this.labels[i].cube7);
          if ('cube8' in this.labels[i]) cube_Delete.push(this.labels[i].cube8);
          if ('cube9' in this.labels[i]) cube_Delete.push(this.labels[i].cube9);
          if ('cube10' in this.labels[i]) cube_Delete.push(this.labels[i].cube10);
          if ('cube11' in this.labels[i]) cube_Delete.push(this.labels[i].cube11);
          if ('cube12' in this.labels[i]) cube_Delete.push(this.labels[i].cube12);
          if ('cube13' in this.labels[i]) cube_Delete.push(this.labels[i].cube13);
          if ('cube14' in this.labels[i]) cube_Delete.push(this.labels[i].cube14);
          if ('cube15' in this.labels[i]) cube_Delete.push(this.labels[i].cube15);
          if ('cube16' in this.labels[i]) cube_Delete.push(this.labels[i].cube16);


        }
      }
      console.log("Label name exists");
      // for (var label of this.labels) {
      // label = this.cubeForFrontandTop(label);
      if (lebel3DcubeType_delete == "Left") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Right") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Top") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Front") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Back") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Top-Front") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Top-Back") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Top-Right") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Top-Left") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Front-Right") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Right-Back") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Front-Left") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      } else if (lebel3DcubeType_delete == "Left-Back") {
        for (let i = 0; i < cube_Delete.length; i++) {
          this.scene.remove(cube_Delete[i]);
        }
      }
      // }
      let id = 0;
      id = await this.getID(this.globalName);
      console.log("id = ", id);
      if (id === 0) {
        // alert(t('errorindeletinglabel'));
        toast.error(t('errorinsavinglabel'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      }
      else {
        this.deleteOneLabel(id);
        const index = this.labelNames.indexOf(this.globalName);
        this.labelNames.splice(index, 1);
        this.labels.splice(index, 1);
        console.log("this.labelNames = ", this.labelNames);
        console.log("this.labels = ", this.labels);
        if (this.labelNames.length > 0) {
          const index = 0;
          const record = this.labels[index];
          this.updateWidgetParameters(record.labelname, record.labelx,
            record.labely, record.labelwidth, record.labelheight, record.typename);
          this.setState({
            [name]: this.currLabelType
          });
          this.currLabelType = this.state.labeltype;
          console.log("checking for attachlabel run from deletemuilabel::::::")
          this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
        }
        else {
          this.updateWidgetParameters("Label0", 0, 0, 10, 10, "Front");
          console.log("checking for attachlabel run from deletemuilabel2::::::")
          this.attachLabel(0, 0, 0, 0, "Front", "Label0");
          this.setState({
            [name]: this.currLabelType
          });
          this.currLabelType = "Front";
          console.log("checking for attachlabel run from deletemuilabel3::::::")
          this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
        }
      }
    }
    else {
      let { t } = this.props;
      // alert(t('labeldoesnotexist'));
      toast.error(t('labeldoesnotexist'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });

      return;
    }
    console.log("deleteMUILabel this.currentColorArr after = " + this.currentColorArr + " this.labelNames = " + this.labelNames);
  }

  addThisLabel = () => {
    console.log("addThisLabel is called");
    // this.enterlabelname.setValue("");
    console.log("this.globalName = ", this.globalName);
    if (this.labelNames.indexOf(this.globalName) > -1 || this.globalName && this.globalName === "Label0" && this.globalName == "") {
      console.log("Label name is invalid");
      let { t } = this.props;
      // alert(t('nameisinvalid'));
      toast.error(t('nameisinvalid'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      return;
    }
    console.log("checking for attachlabel run from addThisLabel::::::")
    this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
    this.labelnamedrop = this.labelnamedrop.options(this.labelNames);
    this.labelnamedrop = this.labelnamedrop.setValue(this.globalName);
    let dropDownFunc = this.dropdownCallback;
    this.labelnamedrop = this.labelnamedrop.onChange(function (newValue) {
      dropDownFunc(newValue);
    });
    this.saveLabel();
  }

  editThisLabel = async () => {
    console.log("editLabel is called");
    this.enterlabelname.setValue("");
    console.log("this.globalName = ", this.globalName);
    if (this.labelNames.indexOf(this.globalName) > -1) {
      console.log("Label name exists");
      console.log("checking for attachlabel run from editThisLabel::::::")
      this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
      let id = 0;
      id = await this.getID(this.globalName);
      console.log("id = ", id);
      if (id === 0) {
        let { t } = this.props;
        // alert(t('errorinsavinglabel'));
        toast.error(t('errorinsavinglabel'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      }
      else {
        this.saveOneLabel(id);
      }
    }
    else {
      let { t } = this.props;
      // alert(t('labeldoesnotexist'));
      toast.error(t('labeldoesnotexist'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      return;
    }
  }

  deleteThisLabel = async () => {
    console.log("deleteLabel is called");
    this.enterlabelname.setValue("");
    console.log("this.globalName = ", this.globalName);
    console.log("this.labelNames inside deleteLabel = ", this.labelNames);
    if (this.labelNames.indexOf(this.globalName) > -1) {
      console.log("Label name exists");
      let id = 0;
      id = await this.getID(this.globalName);
      console.log("id = ", id);
      if (id === 0) {
        // alert("errorindeletinglabel");
        toast.error(t('errorindeletinglabel'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      }
      else {
        this.deleteOneLabel(id);
        const index = this.labelNames.indexOf(this.globalName);
        this.labelNames.splice(index, 1);
        this.labels.splice(index, 1);
        console.log("this.labelNames = ", this.labelNames);
        console.log("this.labels = ", this.labels);
        if (this.labelNames.length > 0) {
          const index = 0;
          const record = this.labels[index];
          this.updateWidgetParameters(record.labelname, record.labelx,
            record.labely, record.labelwidth, record.labelheight, record.typename);
          console.log("checking for attachlabel run from deletethislabel1::::::")
          this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
        }
        else {
          this.updateWidgetParameters("Label0", 0, 0, 0, 0, "Front");
          console.log("checking for attachlabel run from deletethislabel2::::::")
          this.attachLabel(0, 0, 0, 0, "Front", "Label0");
        }
      }
    }
    else {
      let { t } = this.props;
      // alert(t('labeldoesnotexist'));
      toast.error(t('labeldoesnotexist'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      return;
    }
  }

  initLabelWidgets = (record) => {
    this.updateWidgetParameters(record.labelname, record.labelx,
      record.labely, record.labelwidth, record.labelheight, record.typename);
    console.log("checking for attachlabel run from initlabel::::::")
    this.attachLabel(record.labelx,
      record.labely, record.labelwidth, record.labelheight, record.typename, record.labelname);
  }

  updateWidgetParameters = (labelNamePara, labelXPara,
    labelYPara, labelWidthPara, labelHeightPara, typeNamePara) => {
    console.log("this.globalx inside updateWidgetParameters = ", this.globalx);
    console.log("this.globaly inside updateWidgetParameters = ", this.globaly);
    console.log("this.global click me if part  : " + this.textures);
    this.globalName = labelNamePara;
    this.globalx = labelXPara;
    this.globaly = labelYPara;
    this.globalWidth = labelWidthPara;
    this.globalHeight = labelHeightPara;
    this.globalType = typeNamePara;
    this.state.labelwidth = this.globalWidth;
    this.state.labellength = this.globalHeight;
    this.state.labela = this.globalx;
    this.state.labelb = this.globaly;
    this.state.labelname = this.globalName;
    this.state.labeltype = this.globalType;
    this.state.selectlabel = this.globalName;
    this.state.caseTexture = this.texture;
    this.state.mass = this.globalMass;
    this.state.setColor = this.previouColor;

    if (this.texture == undefined) {
      this.texture = this.texture_real
    }

    if (this.texture === "Texture1") {
      this.textures = Texture1;
      this.state.textures = Texture1;
      this.setState({
        textures: Texture1
      })

      // this.darktextures = DarkTexture1;
    }
    else if (this.texture === "Texture2") {
      this.textures = Texture2;
      this.state.textures = Texture2;
      this.setState({
        textures: Texture2
      })

      // this.darktextures = DarkTexture2;
    }
    else if (this.texture === "Texture3") {
      this.textures = Texture3;
      this.state.textures = Texture3;
      this.setState({
        textures: Texture3
      })

      // this.darktextures = DarkTexture3;
    }
    else if (this.texture === "Texture4") {
      this.textures = Texture4;
      this.state.textures = Texture4;
      this.setState({
        textures: Texture4
      })

      // this.darktextures = DarkTexture4;
    }
    this.setState({
      updateWidgets: true,
      caseTexture: this.texture,
      mass: this.globalMass,
    })
    console.log("this.labels inside updateWidgetParameters = ", this.labels);
    console.log("this.global click me set part: " + this.state.caseTexture);
  }

  changeScalex = (newValue) => {
    this.globalScalex = newValue;
    console.log("x scale changed to:  ", this.globalScalex);
    // this.scaleX.setValue(this.globalScalex);
  }

  changeScaley = (newValue) => {
    this.globalScaley = newValue;
    console.log("y scale changed to:  ", this.globalScaley);
    // this.scaleY.setValue(this.globalScaley);
  }

  changeScalez = (newValue) => {
    this.globalScalez = newValue;
    console.log("z scale changed to:  ", this.globalScalez);
    // this.scaleZ.setValue(this.globalScalez);
  }

  changeGlobalx = (newValue) => {
    this.globalx = newValue;
    console.log("global x changed to:  ", this.globalx);
    // this.labelx.setValue(this.globalx);
  }

  changeGlobaly = (newValue) => {
    this.globaly = newValue;
    console.log("global y changed to:  ", this.globaly);
    // this.labely.setValue(this.globaly);
  }

  changeGlobalWidth = (newValue) => {
    this.globalWidth = newValue;
    console.log("global width changed to:  ", this.globalWidth);
    // this.labelwidth.setValue(this.globalWidth);
  }

  changeGlobalHeight = (newValue) => {
    this.globalHeight = newValue;
    console.log("global height changed to:  ", this.globalHeight);
    // this.labelheight.setValue(this.globalHeight);
  }

  changeGlobalType = (newValue) => {
    this.globalType = newValue;
    console.log("global type changed to:  ", this.globalType);
  }

  changeGlobalName = (newValue) => {
    this.globalName = newValue;
    console.log("global name changed to:  ", this.globalName);
  }

  attachThisLabel = () => {
    console.log("checking for attachlabel run from attachThisLabel::::::")
    this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
  }

  setLabelnamedrop = (newValue) => {
    this.labelnamedrop.setValue(newValue);
    console.log("this.labelnamedrop is set to:  ", this.labelnamedrop);
  }

  enterlabelname = (newValue) => {
    this.enterlabelname.setValue(newValue);
    console.log("this.enterlabelname is set to:  ", this.enterlabelname);
  }

  checkRotationsToGetFaces = () => {
    for (var i = 0; i < rotationLibrary.length; i++) {
      // check if the objects match, then get the face
      if (rotationLibrary[i].x == this.rotationStatex &&
        rotationLibrary[i].y == this.rotationStatey &&
        rotationLibrary[i].z == this.rotationStatez) {
        this.top = rotationLibrary[i].Top;
        this.front = rotationLibrary[i].Front;
        this.right = rotationLibrary[i].Right;
        console.log("this.top = ", this.top);
        console.log("this.front = ", this.front);
        console.log("this.right = ", this.right);

      }
    }
  }

  Xmax_Limit = (gloabalScalex, width) => {

    var Xmax = gloabalScalex - width;
    Xmax = this.constrain(Xmax, 0, Xmax);

    return Xmax;
  }

  Ymax_Limit = (gloabalScalez, height) => {

    var Ymax = gloabalScalez - height;
    console.log("Xmax_Limit Xmax1 " + Ymax);
    Ymax = this.constrain(Ymax, 0, Ymax);
    console.log("Ymax_Limit Ymax2 " + Ymax);
    // this.globaly = Ymax;
    return Ymax;
  }
  Xmax_LimitRight = (gloabalScalez, width) => {

    var Xmax = gloabalScalez - width;
    Xmax = this.constrain(Xmax, 0, Xmax);

    return Xmax;
  }


  algoToCalMinMaxForPosB = (labelType) => {

    var pos;
    this.lengthnew = this.globalHeight;
    console.log("algoToCalMinMaxForPosB this.lengthnew " + this.lengthnew)

    if (labelType == "Top-Front")
      pos = this.getMinMaxForPositionB(this.globalScaley, this.globalScalez, this.lengthnew) // 

    if (labelType == "Top-Back")
      pos = this.getMinMaxForPositionB(this.globalScaley, this.globalScalez, this.lengthnew) // Top-Front

    if (labelType == "Top-Right")
      pos = this.getMinMaxForPositionB(this.globalScaley, this.globalScalex, this.lengthnew) // Top-Front

    if (labelType == "Top-Left")
      pos = this.getMinMaxForPositionB(this.globalScaley, this.globalScalex, this.lengthnew) // Top-Front

    return pos;
  }
  // Top-Front : 1st Front ,2nd Top  ; Front-Right : 1st Right, 2nd Front
  getMinMaxForPositionB = (globalScaleFront, globalScaleTop, label_length) => {

    var min, max;
    var arrpos = [];

    console.log("min & max getMinMaxForPositionB  ")

    console.log("label_length " + label_length + " globalScaleFront " + globalScaleFront)

    if (globalScaleFront == globalScaleTop) {
      console.log("Even Dimension")
      // even dimension
      if (globalScaleFront > label_length) {

        if (globalScaleFront > globalScaleTop) {

          min = (globalScaleFront - (label_length - 10)) //500 - 390=110
          max = (label_length - 10) // 400 - 10=390

          console.log("min & max getMinMaxForPositionB 1 " + min + " , " + max)
        }
        else if (globalScaleFront < globalScaleTop) {
          min = 0
          max = (globalScaleFront - 10)
          console.log("min & max getMinMaxForPositionB 2 " + min + " , " + max)

        }
        else if (globalScaleFront == globalScaleTop) {
          min = (globalScaleFront - (label_length - 10))
          max = (globalScaleFront - 10)

          console.log("min & max getMinMaxForPositionB 3 " + min + " , " + max)

        }

      }
      else {

        if (globalScaleFront <= label_length) {
          // 900				100
          if (globalScaleFront > globalScaleTop) {
            min = (globalScaleFront - (label_length - 10))
            max = (globalScaleFront - (label_length - globalScaleTop))
            console.log("min & max getMinMaxForPositionB 4 " + min + " , " + max)

          }
          //  100					900
          else if (globalScaleFront < globalScaleTop) {
            min = 0
            max = (globalScaleFront - 10)
            console.log("min & max getMinMaxForPositionB 5 " + min + " , " + max)

          }

          else if ((globalScaleFront == globalScaleTop) && ((label_length - 10) < globalScaleFront)) {

            min = (globalScaleFront - (label_length - 10))
            // max = (parseInt(globalScaleFront,10)  + parseInt(globalScaleTop,10) ) -  label_length
            max = globalScaleFront - 10;

            console.log("min & max getMinMaxForPositionB 6 " + min + " , " + max)

          }
          else if ((globalScaleFront == globalScaleTop) && ((label_length - 10) >= globalScaleFront)) {
            min = 0
            max = (parseInt(globalScaleFront, 10) + parseInt(globalScaleTop, 10)) - label_length // 190

            console.log("min & max getMinMaxForPositionB 7 " + min + " , " + max)

            console.log("min & max getMinMaxForPositionB (globalScaleFront + globalScaleTop)" + (parseInt(globalScaleFront, 10) + parseInt(globalScaleTop, 10)) + " ,label_length  " + label_length)


          }

        }
      }

    } else {
      // uneven dimension
      console.log("Uneven Dimension")

      // let temp = globalScaleFront;
      // globalScaleFront = globalScaleTop;
      // globalScaleTop = temp;

      console.log(" uneven dimension min & max  globalScaleFront " + globalScaleFront + " globalScaleTop " + globalScaleTop)
      // 100  < 200 , 200 
      if (globalScaleFront < globalScaleTop) {
        // 150 < 110      &&      200 >= 20
        if (label_length < (parseInt(globalScaleFront, 10) + 10) && label_length >= 20) {
          min = globalScaleFront - (label_length - 10)
          max = globalScaleFront - 10
          console.log("min & max getMinMaxForPositionB 11 " + min + " , " + max + " label_length " + label_length)


        } else {

          if (label_length <= parseInt(globalScaleTop, 10) + 10) {

            min = 0;
            max = globalScaleFront - 10;
            console.log("min & max getMinMaxForPositionB 12 " + min + " , " + max + " label_length " + label_length)

          } else {

            min = 0;
            max = ((parseInt(globalScaleFront, 10) + parseInt(globalScaleTop, 10)) - label_length)
            console.log("min & max getMinMaxForPositionB 13 " + min + " , " + max + " label_length " + label_length)

          }


        }

      } else {
        //globalScaleFront > globalScaleTop
        console.log("label_length " + label_length + " globalScaleFront " + (globalScaleFront + 10))
        console.log("min & max getMinMaxForPositionB 14 cal " + ((label_length < (globalScaleFront + 10))))

        if ((label_length < (parseInt(globalScaleFront, 10) + 10)) && (label_length >= 20)) {

          if (label_length < (parseInt(globalScaleTop, 10) + 10)) {

            min = (globalScaleFront - (label_length - 10));
            max = globalScaleFront - 10;

            console.log("min & max getMinMaxForPositionB 14 " + min + " , " + max + " label_length " + label_length)


          } else {

            min = (globalScaleFront - (label_length - 10));
            max = (parseInt(globalScaleFront, 10) + parseInt(globalScaleTop, 10)) - parseInt(label_length, 10);

            console.log("min & max getMinMaxForPositionB 15 " + min + " , " + max + " label_length " + label_length)

          }

        } else {

          min = 0;
          max = (parseInt(globalScaleFront, 10) + parseInt(globalScaleTop, 10)) - label_length;  // 

          console.log("min & max getMinMaxForPositionB 16 " + min + " , " + max + " label_length " + label_length)

        }

      }


    }

    console.log("min & max getMinMaxForPositionB main " + min + " , " + max + " label_length " + label_length)

    arrpos.push(min);
    arrpos.push(max);


    return arrpos;



  }


  rotateX = () => {
    console.log("check11")
    if (this.faceSide == "Topside" && this.orientation == "Vertical") {
      this.rotationStatex = true;
      this.FrontVertical();
      this.faceSide = "Frontside";
      this.orientation = "Vertical";
      console.log("this.faceSide" + this.faceSide + "this.orientation" + this.orientation)
    }
    else if (this.faceSide == "Topside" && this.orientation == "Horizontal") {
      this.rotationStatex = true;
      this.FrontHorizontal();
      this.faceSide = "Frontside";
      this.orientation = "Horizontal";
    }
    else if (this.faceSide == "Frontside" && this.orientation == "Vertical") {
      this.rotationStatex = true;
      this.BottomVertical();
      this.faceSide = "Bottomside";
      this.orientation = "Vertical";
    }
    else if (this.faceSide == "Frontside" && this.orientation == "Horizontal") {
      this.rotationStatex = true;
      this.BottomHorizontal();
      this.faceSide = "Bottomside";
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Bottomside" && this.orientation == "Vertical") {
      this.rotationStatex = true;
      this.BackVertical();
      this.faceSide = "Backside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Bottomside" && this.orientation == "Horizontal") {
      this.rotationStatex = true;
      this.BackHorizontal();
      this.faceSide = "Backside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Backside" && this.orientation == "Vertical") {
      this.rotationStatex = true;
      this.TopVertical();
      this.faceSide = "Topside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Backside" && this.orientation == "Horizontal") {
      this.rotationStatex = true;
      this.TopHorizontal();
      this.faceSide = "Topside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Rightside" && this.orientation == "Vertical") {
      this.rotationStatex = true;
      this.RightHorizontal();
      this.faceSide = "Rightside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Rightside" && this.orientation == "Horizontal") {
      this.rotationStatex = true;
      this.RightVertical();
      this.faceSide = "Rightside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Leftside" && this.orientation == "Vertical") {
      this.rotationStatex = true;
      this.LeftHorizontal();
      this.faceSide = "Leftside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Leftside" && this.orientation == "Horizontal") {
      this.rotationStatex = true;
      this.LeftVertical();
      this.faceSide = "Leftside"
      this.orientation = "Vertical"
    }
    console.log("this.rotationStatex = ", this.rotationStatex);
    this.attachThisLabel();
    this.addLine()
  }

  rotateY = () => {
    console.log("this.faceSide8" + this.faceSide + "thi.orientation8" + this.orientation)
    if (this.faceSide == "Topside" && this.orientation == "Vertical") {
      this.rotationStatey = true;
      this.LeftHorizontal();
      this.faceSide = "Leftside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Leftside" && this.orientation == "Horizontal") {
      this.rotationStatey = true;
      this.BottomVertical();
      this.faceSide = "Bottomside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Bottomside" && this.orientation == "Vertical") {
      this.rotationStatey = true;
      this.RightHorizontal();
      this.faceSide = "Rightside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Rightside" && this.orientation == "Horizontal") {
      this.rotationStatey = true;
      this.TopVertical();
      this.faceSide = "Topside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Topside" && this.orientation == "Horizontal") {
      this.rotationStatey = true;
      this.LeftVertical();
      this.faceSide = "Leftside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Leftside" && this.orientation == "Vertical") {
      this.rotationStatey = true;
      this.BottomHorizontal();
      this.faceSide = "Bottomside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Bottomside" && this.orientation == "Horizontal") {
      this.rotationStatey = true;
      this.RightVertical();
      this.faceSide = "Rightside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Rightside" && this.orientation == "Vertical") {
      this.rotationStatey = true;
      this.TopHorizontal();
      this.faceSide = "Topside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Frontside" && this.orientation == "Vertical") {
      this.rotationStatey = true;
      this.FrontHorizontal();
      this.faceSide = "Frontside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Frontside" && this.orientation == "Horizontal") {
      this.rotationStatey = true;
      this.FrontVertical();
      this.faceSide = "Frontside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Backside" && this.orientation == "Vertical") {
      this.rotationStatey = true;
      this.BackHorizontal();
      this.faceSide = "Backside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Backside" && this.orientation == "Horizontal") {
      this.rotationStatey = true;
      this.BackVertical();
      this.faceSide = "Backside"
      this.orientation = "Vertical"
    }
    console.log("this.rotationStatey = ", this.rotationStatey);
    //this.checkRotationsToGetFaces();
    this.attachThisLabel();
    this.addLine()
  }

  rotateZ = () => {

    if (this.faceSide == "Topside" && this.orientation == "Vertical") {
      this.rotationStatez = true;
      this.TopHorizontal();
      this.faceSide = "Topside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Topside" && this.orientation == "Horizontal") {
      this.rotationStatez = true;
      this.TopVertical();
      this.faceSide = "Topside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Bottomside" && this.orientation == "Vertical") {
      this.rotationStatez = true;
      this.BottomHorizontal();
      this.faceSide = "Bottomside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Bottomside" && this.orientation == "Horizontal") {
      this.rotationStatez = true;
      this.BottomVertical();
      this.faceSide = "Bottomside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Frontside" && this.orientation == "Vertical") {
      this.rotationStatez = true;
      this.LeftVertical();
      this.faceSide = "Leftside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Leftside" && this.orientation == "Vertical") {
      this.rotationStatez = true;
      this.BackVertical();
      this.faceSide = "Backside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Backside" && this.orientation == "Vertical") {
      this.rotationStatez = true;
      this.RightVertical();
      this.faceSide = "Rightside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Rightside" && this.orientation == "Vertical") {
      this.rotationStatez = true;
      this.FrontVertical();
      this.faceSide = "Frontside"
      this.orientation = "Vertical"
    }
    else if (this.faceSide == "Frontside" && this.orientation == "Horizontal") {
      this.rotationStatez = true;
      this.LeftHorizontal();
      this.faceSide = "Leftside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Leftside" && this.orientation == "Horizontal") {
      this.rotationStatez = true;
      this.BackHorizontal();
      this.faceSide = "Backside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Backside" && this.orientation == "Horizontal") {
      this.rotationStatez = true;
      this.RightHorizontal();
      this.faceSide = "Rightside"
      this.orientation = "Horizontal"
    }
    else if (this.faceSide == "Rightside" && this.orientation == "Horizontal") {
      this.rotationStatez = true;
      this.FrontHorizontal();
      this.faceSide = "Frontside"
      this.orientation = "Horizontal"
    }

    console.log("this.rotationStatez = ", this.rotationStatez);
    //this.checkRotationsToGetFaces();
    this.attachThisLabel();
    this.addLine()
  }

  addLine = async () => {

    let caseName = ""
    caseName = this.props.match.params.casename;
    if (caseName.includes("#")) {
      caseName = encodeURIComponent(this.props.match.params.casename)
    }
    axios.put(`/Threed/LineDirection/${caseName}`, {
      "line_position": this.faceSide,
      "line_rotation": this.orientation,
    })
      .then((resp) => {
        console.log(resp)
        this.setState({
          line_position: this.faceSide,
          line_rotation: this.orientation
        })
      })
  }


  generateCube = async () => {
    const changescalex = this.changeScalex;
    const changescaley = this.changeScaley;
    const changescalez = this.changeScalez;
    const changeglobalx = this.changeGlobalx;
    const changeglobaly = this.changeGlobaly;
    const changeglobalwidth = this.changeGlobalWidth;
    const changeglobalheight = this.changeGlobalHeight;
    const changeglobaltype = this.changeGlobalType;
    const changeglobalname = this.changeGlobalName;
    const setlabelnamedrop = this.setLabelnamedrop;
    const enterlabelname = this.enterlabelname;
    await this.getAuthInfo();

  }

  animation = () => {
    this.id = requestAnimationFrame(this.animation);
    this.handleWindowResize();
    this.arrowCamera.position.copy(this.camera.position);
    this.arrowCamera.position.sub(this.controls.target);
    this.arrowCamera.position.setLength(300);
    this.arrowCamera.lookAt(this.arrowScene.position);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setPixelRatio(window.devicePixelRatio * 1.6);
    this.arrowRenderer.render(this.arrowScene, this.arrowCamera);

  }

  handleWindowResize = () => {
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

  handleControlResize = (data) => {
    this.camera.aspect = data.width / data.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(data.width, data.height);
    this.renderer.render(this.scene, this.camera);
  }

  handleButtonClick = () => {
    axios.put("/Threed/1", {
      "id": 1,
      "length": this.state.data.length,
      "width": this.state.data.width,
      "height": this.state.data.height
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
    this.setState(prevState => ({
      data: { ...prevState.data, random: Math.random() }
    }));
  }

  forSetHidden = (hidden) => {
    console.log("Hiddennnn" + hidden);
    this.setState({ setHidden: hidden })
  }
  forSetColor = (color) => {

    let index = this.labelNames.indexOf(this.globalName);
    this.currentColorArr[index] = color;

    console.log("Inside forsetColor this.currentColorArr = " + this.currentColorArr);

    this.previouColor = color;
    this.state.setColor = color;

    console.log("checking for attachlabel run from forsetcolor::::::")
    this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
    this.editMUILabel();

  }

  handleBack = () => {
    this.camera.remove(this.light);
    this.scene.remove(this.camera);
    this.scene.remove(this.light1);
    // this.gui.destroy();
    cancelAnimationFrame(this.id);
    this.labels = [];
    this.labelNames = [];
    this.recordnames = [];
    this.cube = null;
    this.root = null;
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.light = null;
    this.light1 = null;
    this.arrowCanvas.hidden = true;

    this.props.history.goBack();
    // () => { this.props.history.goBack() }
  }

  handleClick = (prev) => {
    const current = this.state.active;
    this.setState({
      active: !current
    })

  }

  // Update current state with changes from controls
  handleUpdate = newData => {
    this.setState(prevState => ({
      data: { ...prevState.data, ...newData }
    }));
    // this.generateCube(newData);
  };


  setLimitWidth = (num, globalscale) => {

    console.log("isNaN(num).........." + isNaN(parseInt(num, 10)));

    if (isNaN(parseInt(num, 10))) {
      this.setState({
        labelwidth: 10
      })
      this.globalWidth = 10;
      this.state.topWidthCheck = false;

    }
    else {
      let value = this.constrain(parseInt(num, 10), 10, parseInt(globalscale, 10))
      this.globalWidth = value;
      console.log("console log value " + value)

      this.setState({
        labelwidth: value
      })

    }

    this.state.topWidthCheck = false;
    this.setState({
      topWidthText: " "
    })


  };

  limitCheckWidth = (num, globalscale) => {


    // in between 10 to 100
    if (num < 10 || num > parseInt(globalscale, 10)) {
      this.state.topWidthCheck = true;
      this.setState({
        topWidthText: " " + 10 + " - " + globalscale
      })


    }
    else {
      this.state.topWidthCheck = false;
      this.setState({
        topWidthText: " "
      })

    }


  }

  limitCheckLength = (num, globalscale) => {


    // in between 10 to 100
    if ((num < 10) || (num > globalscale)) {

      this.state.topLengthCheck = true;
      this.setState({
        topLengthText: " " + 10 + " - " + this.globalScalez
      })

    }
    else {

      this.state.topLengthCheck = false;
      this.setState({
        topLengthText: " "
      })
    }
  }


  setLimitLength = (num, globalscale) => {

    console.log(" num " + num + "   globalscale " + globalscale)

    if (isNaN(parseInt(num, 10))) {

      this.setState({
        labellength: 10,
        //topLengthText: ""
      })
      this.globalHeight = 10;
      this.state.topLengthCheck = false;
      //this.topLengthText= " ";

    }
    else {
      let value = this.constrain(parseInt(num, 10), 10, parseInt(globalscale, 10))
      this.globalHeight = value;
      console.log("console log value " + value)

      this.setState({
        labellength: value
      })
    }
    this.state.topLengthCheck = false;
    this.setState({
      topLengthText: " "
    })


  };


  callBlurForPosB = (event) => {

    var value3 = event.target.value;
    var xmax2;
    var min1 = 0;
    if ((this.state.labeltype == "Top") || (this.state.labeltype == "Back") || (this.state.labeltype == "Front") || (this.state.labeltype == "Left") || (this.state.labeltype == "Right")) {
      if (this.state.errorLabelPosBCondition == true) {
        if (this.state.labeltype == "Top") {
          xmax2 = this.Ymax_Limit(parseInt(this.globalScalez, 10), this.state.labellength);
        }
        if (this.state.labeltype == "Back") {
          xmax2 = this.Ymax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
        }
        if (this.state.labeltype == "Front") {
          xmax2 = this.Ymax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
        }
        if (this.state.labeltype == "Left") {
          xmax2 = this.Ymax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
        }
        if (this.state.labeltype == "Right") {
          xmax2 = this.Ymax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
        }
        console.log("min " + 0 + " xmax " + xmax2 + ", " + event.target.value + " event.target.value Pos A inside if")

        console.log("event.target.value===" + (event.target.value === ""))

        if (event.target.value === "") {
          var setValue = 0;
          console.log("setValue1234>>>" + setValue);
          this.state.errorLabelPosBCondition = false;
          this.state.errorLabelPosB = "";
          this.setState({
            labelb: setValue

          })
          this.globaly = 0;
        }

        if (event.target.value < 0 || event.target.value > (xmax2)) {
          var setValue = this.constrain(parseInt(event.target.value, 10), 0, xmax2);
          console.log("setValue1234>>>" + setValue);
          this.globaly = setValue;

          this.setState({
            labelb: setValue
          })

          this.state.errorLabelPosB = "";
          this.state.errorLabelPosBCondition = false;
        }
        else if (min1 == xmax2) {
          console.log("min " + min1 + " xmax " + xmax2 + ", " + " event.target.value Pos A else ")
          this.state.errorLabelPosBCondition = false;
          this.setState({
            errorLabelPosB: " "
          })



        }

      }
      else {
        this.globaly = event.target.value;
      }
    }

    if (this.state.labeltype == "Top-Front" || this.state.labeltype == "Top-Back" || this.state.labeltype == "Top-Right" || this.state.labeltype == "Top-Left") {

      var setValue = this.constrain(parseInt(event.target.value, 10), this.storeMinValue, this.storeMaxValue);
      this.globaly = setValue;

      if (this.state.errorLabelPosBCondition == true) {


        if (event.target.value < this.storeMinValue || event.target.value > this.storeMaxValue) {

          console.log("this.storeMinValue " + this.storeMinValue + " this.storeMaxValue " + this.storeMaxValue + " setValue " + setValue)

          this.setState({
            labelb: setValue
          })

          this.state.errorLabelPosB = "";
          this.state.errorLabelPosBCondition = false;

        }

        if (setValue !== setValue) {

          console.log("NAN value Pos B is reached")
          this.setState({
            labelb: this.storeMinValue
          })
          this.globaly = this.storeMinValue;
          this.state.errorLabelPosBCondition = false;
          this.state.errorLabelPosB = "";


        }



      }

    }

    //storeLengthMax
    //storeLengthMin

    if (this.state.labeltype == "Front-Right" || this.state.labeltype == "Right-Back" || this.state.labeltype == "Front-Left" || this.state.labeltype == "Left-Back") {

      console.log("this.globaly inside callBlurForPosB 1 = " + this.globaly);

      var setValue = this.constrain(parseInt(event.target.value, 10), this.storeLengthMin, this.storeLengthMax);
      this.globaly = setValue;
      console.log("this.globaly inside callBlurForPosB 2 = " + this.globaly);

      console.log("this.state.errorLabelPosBCondition = " + this.state.errorLabelPosBCondition);


      if (this.state.errorLabelPosBCondition == true) {

        // var setValue = this.constrain(parseInt(event.target.value, 10), this.storeLengthMin, this.storeLengthMax);
        // this.globaly = setValue;
        console.log("this.globaly inside callBlurForPosB 3 = " + this.globaly);
        console.log("this.storeLengthMin == " + this.storeLengthMin + " this.storeLengthMax == " + this.storeLengthMax + " event.target.value == " + event.target.value)

        if (event.target.value < this.storeLengthMin || event.target.value > this.storeLengthMax) {

          console.log("this.globaly inside callBlurForPosB 4 = " + this.globaly);

          this.setState({
            labelb: setValue
          })

          this.state.errorLabelPosB = "";
          this.state.errorLabelPosBCondition = false;
          this.globaly = setValue;
          console.log("this.globaly inside callBlurForPosB 5 = " + this.globaly);

        }
        else if (this.storeLengthMin == this.storeLengthMax) {

          this.state.errorLabelPosBCondition = false;
          this.setState({
            errorLabelPosB: " "
          })
          console.log("this.globaly inside callBlurForPosB 6 = " + this.globaly);

        }
        if (setValue !== setValue) {

          console.log("NAN value Pos B is reached")
          this.state.errorLabelPosBCondition = false;
          this.setState({
            labelb: 0,
            errorLabelPosB: " "
          })
          console.log("this.state.labelb insidecallBlurForPosB = " + this.state.labelb);
          this.globaly = 0;
          console.log("this.globaly inside callBlurForPosB 7 = " + this.globaly);

        }
      }
    }
    // this.globaly = this.state.labelb;
    this.editMUILabel();

  }

  callBlurForPosA = (event) => {

    var value2 = event.target.value;
    var xmax1;
    var min = 0;


    if ((this.state.labeltype == "Top") || (this.state.labeltype == "Back") || (this.state.labeltype == "Front") || (this.state.labeltype == "Left") || (this.state.labeltype == "Right")) {

      if (this.state.errorLabelPosACondition == true) {

        if (this.state.labeltype == "Top") {
          xmax1 = this.Xmax_Limit(parseInt(this.globalScalex, 10), this.state.labelwidth);
        }
        if (this.state.labeltype == "Back") {
          xmax1 = this.Xmax_Limit(parseInt(this.globalScalex, 10), this.state.labelwidth);
        }
        if (this.state.labeltype == "Front") {
          xmax1 = this.Xmax_Limit(parseInt(this.globalScalex, 10), this.state.labelwidth);
        }
        if (this.state.labeltype == "Left") {
          xmax1 = this.Xmax_Limit(parseInt(this.globalScalez, 10), this.state.labelwidth);
        }
        if (this.state.labeltype == "Right") {
          xmax1 = this.Xmax_Limit(parseInt(this.globalScalez, 10), this.state.labelwidth);
        }
        console.log("min " + 0 + " xmax " + xmax1 + ", " + event.target.value + " event.target.value Pos A inside if")

        console.log("event.target.value===" + (event.target.value === ""))

        if (event.target.value === "") {

          console.log("setValue1234>>>" + setValue);
          this.state.errorLabelPosACondition = false;
          this.setState({
            labela: 0,
            errorLabelPosA: " "
          })
          this.globalx = 0;
        }

        if (event.target.value < 0 || event.target.value > xmax1) {

          var setValue = this.constrain(parseInt(event.target.value, 10), 0, xmax1);
          console.log("inside callBlurForPosA setValue " + setValue);
          this.globalx = setValue;
          this.state.errorLabelPosA = "";
          this.state.errorLabelPosACondition = false;

          this.setState({
            labela: setValue
          })

        }
        else if (min == xmax1) {

          this.state.errorLabelPosACondition = false;
          this.setState({
            errorLabelPosA: " "
          })
        }
      }
      else {
        this.globalx = event.target.value;
      }
    }

    if (this.state.labeltype == "Top-Front" || this.state.labeltype == "Top-Back" || this.state.labeltype == "Top-Right" || this.state.labeltype == "Top-Left") {

      console.log("this.globalx inside callBlurForPosA 1 = " + this.globalx);

      var setValue = this.constrain(parseInt(event.target.value, 10), this.setMinRangeForTopCornersForPosA, this.setMaxRangeForTopCornersForPosA);

      this.globalx = setValue;
      if (this.state.errorLabelPosACondition == true) {
        console.log("event.target.value pos A value2 inside true " + value2);

        // var setValue = this.constrain(parseInt(event.target.value, 10), this.setMinRangeForTopCornersForPosA, this.setMaxRangeForTopCornersForPosA);
        // this.globalx = setValue;
        console.log("setValue 1 " + setValue + " min " + this.setMinRangeForTopCornersForPosA + " xmax " + this.setMaxRangeForTopCornersForPosA + ", " + event.target.value + " event.target.value Pos A inside if")

        if (event.target.value < this.setMinRangeForTopCornersForPosA || event.target.value > this.setMaxRangeForTopCornersForPosA) {
          console.log("setValue 2 " + setValue + " min " + this.setMinRangeForTopCornersForPosA + " xmax " + this.setMaxRangeForTopCornersForPosA + ", " + event.target.value + " event.target.value Pos A inside if")

          this.state.errorLabelPosA = "";
          this.state.errorLabelPosACondition = false;

          this.setState({
            labela: setValue
          })
        }

        else if (this.setMinRangeForTopCornersForPosA == this.setMaxRangeForTopCornersForPosA) {
          console.log("min " + this.setMinRangeForTopCornersForPosA + " xmax " + this.setMaxRangeForTopCornersForPosA + ",  event.target.value Pos A else ")
          this.state.errorLabelPosACondition = false;
          this.setState({
            errorLabelPosA: " "
          })
        }

        if (event.target.value === "") {

          console.log("setValueFor Label A>>>" + setValue);
          this.state.errorLabelPosACondition = false;
          this.setState({
            labela: 0,
            errorLabelPosA: " "
          })
        }


        if (setValue !== setValue) {

          console.log("NAN value Pos A is reached")
          this.state.errorLabelPosACondition = false;

          this.setState({
            labela: this.setMinRangeForTopCornersForPosA
          })
          this.globalx = this.setMinRangeForTopCornersForPosA;

        }
        // this.globalx = this.state.labela;

      }

    }

    if (this.state.labeltype == "Front-Right" || this.state.labeltype == "Right-Back" || this.state.labeltype == "Front-Left" || this.state.labeltype == "Left-Back") {

      console.log("this.globalx in side corners 1 = " + this.globalx);
      var setValue = this.constrain(parseInt(event.target.value, 10), this.storeWidthMin, this.storeWidthMax);
      this.globalx = setValue;
      if (this.state.errorLabelPosACondition == true) {

        console.log("event.target.value pos A value2 inside true " + value2);

        // var setValue = this.constrain(parseInt(event.target.value, 10), this.storeWidthMin, this.storeWidthMax);
        // this.globalx = setValue;
        if (event.target.value < this.storeWidthMin || event.target.value > this.storeWidthMax) {

          console.log("min " + this.storeWidthMin + " xmax " + this.storeWidthMax + ", " + event.target.value + " event.target.value Pos A inside if")

          this.state.errorLabelPosA = "";
          this.state.errorLabelPosACondition = false;

          this.setState({
            labela: setValue
          })

        }
        else if (this.storeWidthMin == this.storeWidthMax) {

          console.log("min " + this.storeWidthMin + " xmax " + this.storeWidthMax + ",  event.target.value Pos A else ")

          this.state.errorLabelPosACondition = false;
          this.setState({
            errorLabelPosA: " "
          })

          this.globalx = this.storeWidthMin;


        }
        if (isNaN(setValue)) {

          console.log("NAN value Pos A is reached")
          this.state.errorLabelPosACondition = false;

          this.setState({
            labela: this.storeWidthMin,
            errorLabelPosA: " "
          })

          this.globalx = this.storeWidthMin;

        }
      }
    }
    // this.globalx = this.state.labela;
    this.editMUILabel();
  }

  handleChangeForPositionB = name => event => {


    let num = event.target.value;

    if (this.state.labeltype == "Top-Front" || this.state.labeltype == "Top-Back" || this.state.labeltype == "Top-Right" || this.state.labeltype == "Top-Left") {

      // Position B
      var pos = this.algoToCalMinMaxForPosB(this.state.labeltype);

      var min = pos[0];
      var max = pos[1];

      // this.setMinRangeForTopCornersForPosB = min;
      // this.setMaxRangeForTopCornersForPosB = max;
      this.storeMaxValue = max;
      this.storeMinValue = min;

      console.log(" min & max callBlur1 is, min " + min + " ,max " + max + " event.target.value  " + event.target.value);
      console.log("this.state.labellength " + this.state.labellength);

      if (this.lengthnew < 10) {
        var temp;

        console.log("temp, min, max this.lengthnew " + this.lengthnew)

        temp = min;
        min = max;
        max = temp;

      }

      if (event.target.value < min || event.target.value > max) {

        console.log(" in range ")
        this.state.errorLabelPosBCondition = true

        this.setState({
          errorLabelPosB: " " + min + " - " + max
        })


      }
      else {

        console.log(" out range ")
        this.state.errorLabelPosBCondition = false;

        this.setState({
          errorLabelPosB: " "
        })
      }

      if (num == "") {

        this.setState({
          errorLabelPosB: " " + min + " - " + max
        })
        this.state.errorLabelPosBCondition = true;

      }

    }

    if (this.state.labeltype == "Front-Right" || this.state.labeltype == "Right-Back" || this.state.labeltype == "Front-Left" || this.state.labeltype == "Left-Back") {

      let xmax;
      let min = 0;

      console.log("console log this.LengthEdgeCorners width 2 " + this.LengthEdgeCorners)

      this.state.errorLabelPosB = "";
      this.state.errorLabelPosBCondition = false;

      let num = event.target.value;

      if (this.state.labeltype == "Front-Right") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Right-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Front-Left") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Left-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      this.storeLengthMax = xmax;

      console.log("min " + min + " xmax " + xmax + ", " + num + " event.target.value Pos B outside if ")

      if (num < min || num > xmax) {

        console.log("min " + min + " xmax " + xmax + ", " + num + " event.target.value Pos B inside if")

        this.setState({
          errorLabelPosB: " " + min + " - " + xmax
        })

        this.state.errorLabelPosBCondition = true;

      }
      else if (min == xmax) {

        console.log("min " + min + " xmax " + xmax + ", " + num + " event.target.value Pos B else ")

        this.state.errorLabelPosBCondition = false;

        this.setState({
          errorLabelPosB: " "
        })

      }

      if (num == "") {

        this.setState({
          errorLabelPosB: " " + min + " - " + xmax
        })
        this.state.errorLabelPosBCondition = true;

      }

    }

    if (this.state.labeltype == "Top" || this.state.labeltype == "Back" || this.state.labeltype == "Right" || this.state.labeltype == "Left"
      || this.state.labeltype == "Front") {

      let xmax4;
      let min2 = 0;

      console.log("console log event.target.value width 11 " + event.target.value)


      if (this.state.labeltype == "Top") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScalez, 10), this.state.labellength);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax4)
      }

      if (this.state.labeltype == "Back") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax4)
      }

      if (this.state.labeltype == "Right") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax4)
      }

      if (this.state.labeltype == "Left") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax4)
      }

      if (this.state.labeltype == "Front") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax4)
      }

      // if(value<10 || value>1000){
      //   this.state.errorDimension = "Invalid";
      //   this.state.errorXdim = true;
      // }
      console.log("min 1 " + min2 + " xmax " + xmax4 + ", " + event.target.value + " event.target.value");

      if (event.target.value < parseInt(min2, 10) || event.target.value > parseInt(xmax4, 10)) {

        console.log("min 2 " + min2 + " xmax " + xmax4 + ", " + event.target.value + " event.target.value");

        this.state.errorLabelPosBCondition = true;
        this.setState({
          errorLabelPosB: " " + min2 + " - " + xmax4
        })

      } else if (min2 == xmax4) {

        this.state.errorLabelPosBCondition = false;
        this.setState({
          errorLabelPosB: " "
        })

      }
      else {

        this.state.errorLabelPosBCondition = false;
        this.setState({
          errorLabelPosB: " "
        })

      }

      if (event.target.value == "") {

        console.log("min 3 " + min2 + " xmax " + xmax4 + ", " + event.target.value + " event.target.value");

        this.state.errorLabelPosBCondition = true;
        this.setState({
          errorLabelPosB: " " + min2 + " - " + xmax4
        })
      }



    }

    this.setState({
      [name]: event.target.value
    });

  }

  handleChangeForPositionA = name => event => {

    let value = event.target.value;

    // debugger

    console.log("event.target.value pos A " + value + " name is " + name);

    console.log("console log this.WidthTopCorners width 1 " + this.WidthTopCorners)


    if (this.state.labeltype == "Top-Front" || this.state.labeltype == "Top-Back" || this.state.labeltype == "Top-Right" || this.state.labeltype == "Top-Left") {

      let xmax;
      let min = 0;

      console.log("console log this.WidthTopCorners width 2 " + this.WidthTopCorners)

      let num = event.target.value;

      // if (this.globalScalex == this.globalScaley && this.globalScalex == this.globalScalez && this.globalScalez == this.globalScaley) 
      // {

      console.log(" handleChangeForPositionA Even scales ")

      if (this.state.labeltype == "Top-Front") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), parseInt(this.WidthTopCorners, 10));
      }

      if (this.state.labeltype == "Top-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), parseInt(this.WidthTopCorners, 10));
      }

      if (this.state.labeltype == "Top-Right") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), parseInt(this.WidthTopCorners, 10));
      }

      if (this.state.labeltype == "Top-Left") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), parseInt(this.WidthTopCorners, 10));
      }





      //  else {

      //   console.log(" handleChangeForPositionA Uneven scales ")

      //   if (this.state.labeltype == "Top-Front")
      //                                             // Front                Top
      //     var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScaley, event.target.value) // Top-Front

      //   if (this.state.labeltype == "Top-Back")
      //     var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScaley, event.target.value) // Top-Front

      //   if (this.state.labeltype == "Top-Right")
      //     var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, event.target.value) // Top-Front

      //   if (this.state.labeltype == "Top-Left")
      //     var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, event.target.value) // Top-Front

      //     min = pos[0];
      //     xmax = pos[1];

      //   }

      console.log("min " + min + " xmax " + xmax + ", " + num + " event.target.value Pos A outside if handleChangeForPositionA")


      this.setMinRangeForTopCornersForPosA = min;
      this.setMaxRangeForTopCornersForPosA = xmax;


      if (num < min || num > xmax) {

        console.log("min " + min + " xmax " + xmax + ", " + num + " event.target.value Pos A inside if")


        this.setState({
          errorLabelPosA: " " + min + " - " + xmax
        })

        this.state.errorLabelPosACondition = true;


      }
      else if (min == xmax) {

        console.log("min " + min + " xmax " + xmax + ", " + num + " event.target.value Pos A else ")


        this.state.errorLabelPosACondition = false;
        this.setState({
          errorLabelPosA: " "
        })

      }
      else {

        this.state.errorLabelPosACondition = false;
        this.setState({
          errorLabelPosA: " "
        })

      }

      if (num == "") {

        this.setState({
          errorLabelPosA: " " + min + " - " + xmax
        })
        this.state.errorLabelPosACondition = true;

      }

    }


    if (this.state.labeltype == "Front-Right" || this.state.labeltype == "Right-Back" || this.state.labeltype == "Front-Left" || this.state.labeltype == "Left-Back") {
      this.Widthnew = this.globalWidth;

      if (this.state.labeltype == "Front-Right")
        // Right            //Front
        var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, this.Widthnew) // Top-Front

      if (this.state.labeltype == "Right-Back")
        var pos = this.getMinMaxForPositionB(this.globalScalex, this.globalScalez, this.Widthnew) // Top-Front

      if (this.state.labeltype == "Front-Left")
        var pos = this.getMinMaxForPositionB(this.globalScalex, this.globalScalez, this.Widthnew) // Top-Front

      if (this.state.labeltype == "Left-Back")
        var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, this.Widthnew) // Top-Front


      var min = pos[0];
      var max = pos[1];

      this.storeWidthMin = min;
      this.storeWidthMax = max;

      console.log(" min & max callBlur1 is, width, min  " + min + " ,max " + max);


      if (event.target.value < min || event.target.value > max) {


        this.state.errorLabelPosACondition = true
        this.setState({
          errorLabelPosA: " " + min + " - " + max
        })

      } else if (min == max) {

        console.log("min " + min + " max " + max + ", " + event.target.value + " event.target.value Pos A else ")

        this.state.errorLabelPosACondition = false;
        this.setState({
          errorLabelPosA: " "
        })

      }
      else {

        this.state.errorLabelPosACondition = false;
        this.setState({
          errorLabelPosA: " "
        })

      }

      if (value == "") {

        this.setState({
          errorLabelPosA: " " + min + " - " + max
        })
        this.state.errorLabelPosACondition = true;


      }
    }

    if (this.state.labeltype == "Top" || this.state.labeltype == "Back" || this.state.labeltype == "Right" || this.state.labeltype == "Left"
      || this.state.labeltype == "Front") {

      let xmax;
      let min = 0;

      console.log("console log event.target.value width 11 " + event.target.value)


      if (this.state.labeltype == "Top") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), this.state.labelwidth);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax)
      }

      if (this.state.labeltype == "Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), this.state.labelwidth);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax)
      }

      if (this.state.labeltype == "Right") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), this.state.labelwidth);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax)
      }

      if (this.state.labeltype == "Left") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), this.state.labelwidth);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax)
      }

      if (this.state.labeltype == "Front") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), this.state.labelwidth);
        console.log("Xmax for" + this.state.labeltype + " Xmax : " + xmax)
      }

      if (event.target.value < parseInt(min, 10) || event.target.value > parseInt(xmax, 10)) {

        console.log("min " + min + " xmax " + xmax + ", " + event.target.value + " event.target.value");

        this.state.errorLabelPosACondition = true;
        this.setState({
          errorLabelPosA: " " + min + " - " + xmax
        })

      } else if (min == xmax) {

        this.state.errorLabelPosACondition = false;
        this.setState({
          errorLabelPosA: " "
        })

      }
      else {

        this.state.errorLabelPosACondition = false;
        this.setState({
          errorLabelPosA: " "
        })

      }

      if (event.target.value === "") {
        this.state.errorLabelPosACondition = true;
        this.setState({
          errorLabelPosA: " " + min + " - " + xmax
        })
      }

    }

    console.log("min to Check setState" + event.target.value + " event.target.value");

    this.setState({
      [name]: event.target.value
    });


  }


  handleChangeForTexture = (event) => {

    console.log("click me handlechangefortexture : " + this.textures);

    this.state.showcaseTexture = event.target.value;


    if (this.state.showcaseTexture === "Texture1") {
      this.textures = Texture1;
      this.state.textures = Texture1;

      this.state.caseTexture = "Texture1";
      this.state.showcaseTexture = "Texture1";


      this.setState({
        textures: Texture1,
        caseTexture: "Texture1",
        showcaseTexture: "Texture1"
      })
      // this.darktextures = DarkTexture1;
    }
    else if (this.state.showcaseTexture === "Texture2") {
      this.textures = Texture2;
      this.state.textures = Texture2;
      this.state.caseTexture = "Texture2";
      this.state.showcaseTexture = "Texture2";

      this.setState({
        textures: Texture2,
        caseTexture: "Texture2",
        showcaseTexture: "Texture2"

      })
      // this.darktextures = DarkTexture2;
    }
    else if (this.state.showcaseTexture === "Texture3") {
      this.textures = Texture3;
      this.state.textures = Texture3;
      this.state.caseTexture = "Texture3";
      this.state.showcaseTexture = "Texture3";


      this.setState({
        textures: Texture3,
        caseTexture: "Texture3",
        showcaseTexture: "Texture3"

      })
      // this.darktextures = DarkTexture3;
    }
    else if (this.state.showcaseTexture === "Texture4") {
      this.textures = Texture4;
      this.state.textures = Texture4;
      this.state.caseTexture = "Texture4";
      this.state.showcaseTexture = "Texture4";



      this.setState({
        textures: Texture4,
        caseTexture: "Texture4",
        showcaseTexture: "Texture4"

      })
      // this.darktextures = DarkTexture4;
    }
    this.texture_real = this.state.caseTexture;
    this.texture = this.state.caseTexture;
    console.log("handle change for Texture " + this.texture);
    this.setState({
      case: event.target.value,
      caseTexture: this.texture,
    })
    console.log("click me handlechangefortexture after setstate : " + this.state.caseTexture);

    console.log("checking for attachlabel run from handelchangefortexture::::::")
    this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
  }


  materialForDatabase = () => {
    let caseName = ""
    caseName = this.props.match.params.casename;
    if (caseName.includes("#")) {
      caseName = encodeURIComponent(this.props.match.params.casename)
    }
    axios.put(`/Threed/caseDimension/${caseName}`, {

      "Length": this.state.xdim,
      "Width": this.state.zdim,
      "Height": this.state.ydim,

      "material": this.state.showcaseTexture,

      "mass": this.state.mass,

    }).then((res) => {
      this.showLine()
      this.showCaseData()

      console.log(res.data)

    }).catch(err => {

      console.log(err)

    })
    this.texture = this.state.showcaseTexture

    for (let i = 0; i < this.labels.length; i++) {
      let tempLabelInfo = {
        id: this.labels[i].id,
        name: this.labels[i].name,
        length: this.labels[i].length,
        width: this.labels[i].width,
        height: this.labels[i].height,
        material: this.texture,
        mass: this.globalMass,
        labelcolour: this.currentColorArr[i],
        directionx: this.labels[i].directionx,
        directiony: this.labels[i].directiony,
        directionz: this.labels[i].directionz,
        typename: this.labels[i].typename,
        labelname: this.labels[i].labelname,
        labelx: this.labels[i].labelx,
        labely: this.labels[i].labely,
        labelwidth: this.labels[i].labelwidth,
        labelheight: this.labels[i].labelheight,
      }

      this.editMUILabel("settingLabelcolor", tempLabelInfo);

    }



    this.editMUILabel();
    console.log("inside materialForDatabase material after " + this.texture);
  }
  labelTypeForDatabase = (event) => {

    if (event.target.value == "Top" || event.target.value == "Front" || event.target.value == "Right" || event.target.value == "Left" || event.target.value == "Back") {
      // this.TopVertical();
      this.state.labelwidth = 10;
      this.state.labellength = 10;
      this.state.labela = 0;
      this.state.labelb = 0;
      this.globalWidth = 10;
      this.globalHeight = 10;
      this.globalx = 0;
      this.globaly = 0;
      console.log("inside labelTypeForDatabase globalWidth = " + this.globalWidth + " globalHeight = " + this.globalHeight + " globalx = " + this.globalx + " globaly = " + this.globaly)
    }

    if (event.target.value == "Top-Front" || event.target.value == "Top-Back" || event.target.value == "Top-Right" || event.target.value == "Top-Left") {

      this.state.labellength = 20;
      this.state.labelwidth = 10;
      this.globalWidth = this.state.labelwidth;
      this.globalHeight = this.state.labellength;
      this.state.labela = 0;
      this.globalx = 0;

      this.state.labelb = this.globalScaley - this.state.labelwidth;
      this.globaly = this.state.labelb;

      console.log("this.state.labelb inside labelTypeForDatabase = " + this.state.labelb);
    }

    if (event.target.value == "Front-Right" || event.target.value == "Left-Back") {

      this.LengthEdgeCorners = 10;

      this.state.labellength = 10;
      this.state.labelwidth = 20;

      this.globalWidth = this.state.labelwidth;
      this.globalHeight = this.state.labellength;

      this.state.labelb = 0;
      this.globaly = 0;

      this.state.labela = this.globalScalez - this.state.labellength;
      this.globalx = this.state.labela;

      console.log("this.state.labela inside labelTypeForDatabase = " + this.state.labela);
    }

    if (event.target.value == "Right-Back" || event.target.value == "Front-Left") {

      this.LengthEdgeCorners = 10;

      this.state.labellength = 10;
      this.state.labelwidth = 20;

      this.globalWidth = this.state.labelwidth;
      this.globalHeight = this.state.labellength;

      this.state.labelb = 0;
      this.globaly = 0;

      this.state.labela = this.globalScalex - this.state.labellength;
      this.globalx = this.state.labela;

      console.log("this.state.labela inside labelTypeForDatabase = " + this.state.labela);
    }

    this.globalType = this.state.labeltype;
    this.editMUILabel();
  }
  handleChange = name => event => {
    let { t } = this.props;

    if (event.target.value == "Top-Front" || event.target.value == "Top-Back" || event.target.value == "Top-Right" || event.target.value == "Top-Left") {
      console.log("event.target.value int is " + event.target.value);

      // this.state.labellength = 20;
      // this.state.labelwidth = 10;
      // this.state.labela = 0;

      this.globalHeight = 20;
      this.globalWidth = this.state.labelwidth;
      var xmax;

      if (event.target.value == "Top-Front") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), this.state.labelwidth);
        // this.state.labelb = this.globalScalex - this.state.labelwidth;

      }

      if (event.target.value == "Top-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), this.state.labelwidth);
        // this.state.labelb = this.globalScalex - this.state.labelwidth;

      }

      if (event.target.value == "Top-Right") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), this.state.labelwidth);
        // this.state.labelb = this.globalScalez - this.state.labelwidth;

      }

      if (event.target.value == "Top-Left") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labelwidth);
        // this.state.labelb = this.globalScaley - this.state.labelwidth;

      }
      // let pos = this.algoToCalMinMaxForPosB(event.target.value);
      // console.log("handleChange Top Corners pos 0 ", pos[0])

      // this.state.labelb = pos[0];
      // this.state.labela = 0;
      // this.globalx = this.state.labela;
      // this.globaly = this.state.labelb;

      this.storeMaxWidth = xmax;
      this.storeMinWidth = 0;

      console.log("this.storeMaxWidth Label type" + this.storeMaxWidth + " parseInt(this.globalScaley, 10) " + parseInt(this.globalScaley, 10) + " this.state.labelwidth " + this.state.labelwidth);
      let { t } = this.props;
      toast.warning(t('forTop-Cornerlabels,minimumlabellengthis20mm'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER })
      this.lengthnew = 20;
      this.WidthTopCorners = 10;

    }

    if (event.target.value == "Front-Right" || event.target.value == "Right-Back" || event.target.value == "Front-Left" || event.target.value == "Left-Back") {
      console.log("event.target.value int is " + event.target.value);

      this.globalx = this.state.labela;
      this.globaly = this.state.labelb;
      // this.state.labellength = 10;
      // this.state.labelwidth = 20;
      this.globalWidth = this.state.labelwidth;
      this.globalHeight = this.state.labellength;

      var pos;

      if (event.target.value == "Front-Right") {
        pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, this.Widthnew) // Top-Front
        // this.state.labela = this.globalScaley - this.state.labellength;
      }


      if (event.target.value == "Right-Back") {
        pos = this.getMinMaxForPositionB(this.globalScalex, this.globalScaley, this.Widthnew) // Top-Front
        // this.state.labela = this.globalScalex - this.state.labellength;
      }


      if (event.target.value == "Front-Left") {
        pos = this.getMinMaxForPositionB(this.globalScalex, this.globalScaley, this.Widthnew) // Top-Front
        // this.state.labela = this.globalScalex - this.state.labellength;
      }


      if (event.target.value == "Left-Back") {
        pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, this.Widthnew)// Top-Front
        // this.state.labela = this.globalScaley - this.state.labellength;
      }


      // var min = pos[0];
      // var max = pos[1];
      // this.state.labela = min;
      // this.state.labelb = 0;
      // this.globalx = this.state.labela;
      // this.globaly = this.state.labelb;
      // this.storeWidthMin = min;
      // this.storeWidthMax = max;
      // this.LengthEdgeCorners = 10;

      let xmax;

      if (this.state.labeltype == "Front-Right") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Right-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Front-Left") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Left-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      this.storeLengthMin = 0;
      this.storeLengthMax = xmax;

      toast.warning(t('forOver-Edgelabels,theminimumlabelwidthis20mm'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER })
      this.Widthnew = 20

    }

    if (event.target.value == "Top" || event.target.value == "Front" || event.target.value == "Right" || event.target.value == "Left" || event.target.value == "Back") {

      // this.state.labellength = 10;
      // this.state.labelwidth = 10;

      console.log("after setState")

    }

    this.setState({
      [name]: event.target.value
    });
    this.currLabelType = event.target.value;
    console.log("checking for attachlabel run from handelchange::::::")
    this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);

  };

  calculateTotalLabelLength = (num, globalScaleFront, globalScaleTop) => {

    if (num >= 20 && num <= (globalScaleFront + globalScaleTop)) {
      this.state.topLengthCheck = false;
      this.setState({
        topLengthText: " "
      })

    }
    else if (num == "") {
      this.state.topLengthCheck = true;
    }
    else {

      console.log("(globalScaleFront + globalScaleTop) " + (globalScaleFront + globalScaleTop) + " num " + num)

      this.state.topLengthCheck = true;
      this.setState({
        topLengthText: " " + 20 + " - " + (globalScaleFront + globalScaleTop)
      })
    }
  }

  calculateTotalLabelWidth = (num, globalScaleFront) => {

    // in between 10 to 100
    if ((num < 10) || (num > parseInt(globalScaleFront, 10))) {

      this.state.topWidthCheck = true;
      this.state.topWidthText = " " + 10 + " - " + globalScaleFront;
    }
    else {
      this.state.topWidthCheck = false;
      this.state.topWidthText = "";

    }

    if (isNaN(num)) {
      console.log("Empty labelWidth Top-Corners 1 ");
      this.state.topWidthCheck = true;
      this.state.topWidthText = " " + 10 + " - " + globalScaleFront;
    }
  }

  setLimitForLabelLength = (num, min, globalScaleFront, globalScaleTop) => {
    let valueforLength = this.constrain(parseInt(num, 10), min, (parseInt(globalScaleFront, 10) + parseInt(globalScaleTop, 10)))

    console.log("console log valueforLenght 2 " + valueforLength)

    this.setState({
      labellength: valueforLength
    });

    this.globalHeight = valueforLength;
    this.lengthnew = valueforLength;
    this.state.topLengthCheck = false;
    this.state.topLengthText = " ";

    if (valueforLength !== valueforLength) {
      console.log("console log valueforLenght 4 " + valueforLength)
      this.setState({
        labellength: 20
      });

      this.lengthnew = 20;
      this.globalHeight = 20;
    }
  }

  handleChangeForLength = name => event => {
    let value = event.target.value;

    if ((this.state.labeltype == "Front") || (this.state.labeltype == "Right") || (this.state.labeltype == "Left") || (this.state.labeltype == "Back")) {
      console.log(" event.target.value handleChangeForLength " + value + " this.globalScalez " + this.globalScalez)

      if (value < 10 || value > parseInt(this.globalScaley, 10)) {

        this.state.topLengthCheck = true;
        this.state.topLengthText = " " + 10 + " - " + this.globalScaley;
        console.log("out of range handleChangeForLength")

      }
      else {

        this.state.topLengthCheck = false;
        this.state.topLengthText = "";
        console.log("within range handleChangeForLength")
      }

    }

    if (this.state.labeltype == "Top") {

      if (value < 10 || value > parseInt(this.globalScalez, 10)) {

        this.state.topLengthCheck = true;
        this.state.topLengthText = " " + 10 + " - " + this.globalScalez;
        console.log("out of range handleChangeForLength")

      }
      else {

        this.state.topLengthCheck = false;
        this.state.topLengthText = "";
        console.log("within range handleChangeForLength")
      }

      // this.state.topLengthCheck = true;
      // this.state.topLengthText = "Enter in " + 10 + " - " + this.globalScalez;
    }

    // Limit length for top corner 
    if (this.state.labeltype == "Top-Front" || this.state.labeltype == "Top-Back" || this.state.labeltype == "Top-Right" || this.state.labeltype == "Top-Left") {


      if (this.state.labeltype == "Top-Front")
        this.calculateTotalLabelLength(parseInt(event.target.value, 10), parseInt(this.globalScaley, 10), parseInt(this.globalScalez, 10));

      if (this.state.labeltype == "Top-Back")
        this.calculateTotalLabelLength(parseInt(event.target.value, 10), parseInt(this.globalScaley, 10), parseInt(this.globalScalez, 10));

      if (this.state.labeltype == "Top-Right")
        this.calculateTotalLabelLength(parseInt(event.target.value, 10), parseInt(this.globalScalex, 10), parseInt(this.globalScaley, 10));

      if (this.state.labeltype == "Top-Left")
        this.calculateTotalLabelLength(parseInt(event.target.value, 10), parseInt(this.globalScalex, 10), parseInt(this.globalScaley, 10));

    }


    if (this.state.labeltype == "Front-Right" || this.state.labeltype == "Right-Back" || this.state.labeltype == "Front-Left" || this.state.labeltype == "Left-Back") {

      var num = event.target.value;

      // in between 10 to 100
      if (num < 10 || num > parseInt(this.globalScaley, 10)) {

        this.state.topLengthCheck = true;
        this.state.topLengthText = " " + 10 + " - " + this.globalScaley;

      }
      else {

        this.state.topLengthCheck = false;
        this.state.topLengthText = "";


      }

      console.log("isNaN(num)" + isNaN(parseInt(num, 10)));

      if (isNaN(parseInt(num, 10))) {
        this.state.labellength = 20;
        this.state.topLengthCheck = true;

        console.log("this.state.topLengthCheck  " + this.state.topLengthCheck + " this.state.labellength " + this.state.labellength)

      }

    }

    this.setState({
      [name]: event.target.value
    });
  };

  callBlur1 = (event) => {

    if (this.state.labeltype == "Top-Front" || this.state.labeltype == "Top-Back" || this.state.labeltype == "Top-Right" || this.state.labeltype == "Top-Left") {

      var newvalue = event.target.value;

      if (newvalue < 20) {
        newvalue = 20;
        let { t } = this.props;
        toast.warning(t('forTop-Cornerlabels,minimumlabellengthis20mm'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER })
      }
      // this.state.labellength = newvalue;


      //Cal Position B
      this.lengthnew = event.target.value;

      if (this.state.topLengthCheck == true) {

        if (this.state.labeltype == "Top-Front")
          this.setLimitForLabelLength(event.target.value, 20, this.globalScalez, this.globalScaley)

        if (this.state.labeltype == "Top-Back")
          this.setLimitForLabelLength(event.target.value, 20, this.globalScalez, this.globalScaley)

        if (this.state.labeltype == "Top-Right")
          this.setLimitForLabelLength(event.target.value, 20, this.globalScaley, this.globalScalex)

        if (this.state.labeltype == "Top-Left")
          this.setLimitForLabelLength(event.target.value, 20, this.globalScaley, this.globalScalex)

      }
      else {
        this.globalHeight = event.target.value;
      }

      // if (this.state.labeltype == "Top-Front")
      //   // Front                Top
      //   var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScaley, event.target.value) // Top-Front

      // if (this.state.labeltype == "Top-Back")
      //   var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScaley, event.target.value) // Top-Front

      // if (this.state.labeltype == "Top-Right")
      //   var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, event.target.value) // Top-Front

      // if (this.state.labeltype == "Top-Left")
      //   var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, event.target.value) // Top-Front


      // var min = pos[0];
      // var max = pos[1];

      // console.log(" min & max callBlur1 is, min " + min + " ,max " + max + " event.target.value" + this.lengthnew);

      // this.storeMaxValue = max;
      // this.storeMinValue = min;

      var pos = this.algoToCalMinMaxForPosB(this.state.labeltype);

      var min = pos[0];
      var max = pos[1];

      this.state.labelb = min;
      this.globaly = min;


    }


    if (this.state.labeltype == "Top" || this.state.labeltype == "Back" || this.state.labeltype == "Right" || this.state.labeltype == "Left"
      || this.state.labeltype == "Front") {

      // if (this.state.topLengthCheck == false) {
      //   let xmax;
      //   let min = 0;

      //   console.log("console log event.target.value width 11 " + event.target.value)


      //   if (this.state.labeltype == "Top") {
      //     xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), event.target.value);
      //   }

      //   if (this.state.labeltype == "Back") {
      //     xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), event.target.value);
      //   }

      //   if (this.state.labeltype == "Right") {
      //     xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), event.target.value);
      //   }

      //   if (this.state.labeltype == "Left") {
      //     xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), event.target.value);
      //   }

      //   if (this.state.labeltype == "Front") {
      //     xmax = this.Xmax_Limit(parseInt(this.globalScalez, 10), event.target.value);
      //   }


      //   if (event.target.value >= min && event.target.value <= xmax) {

      //     console.log("min " + min + " xmax " + xmax + ", " + event.target.value + " event.target.value")


      //     this.state.errorLabelPosACondition = false;
      //     this.state.errorLabelPosA = "";


      //   } else if (min == xmax) {


      //     this.state.errorLabelPosACondition = false;
      //     this.state.errorLabelPosA = "";

      //   }
      //   else {

      //     this.state.errorLabelPosACondition = true;
      //     this.state.errorLabelPosA = "Enter in " + min + " - " + xmax;

      //   }

      // }
    }

    if (this.state.labeltype == "Front-Right" || this.state.labeltype == "Right-Back" || this.state.labeltype == "Front-Left" || this.state.labeltype == "Left-Back") {

      // Limit Length from 10 to 100
      let valueforLength = this.constrain(parseInt(event.target.value, 10), 10, parseInt(this.globalScaley, 10));
      this.globalHeight = valueforLength;

      console.log("console log valueforLenght " + valueforLength)
      this.state.labellength = valueforLength;

      this.state.topLengthCheck = false;
      this.state.topLengthText = "";
      this.LengthEdgeCorners = event.target.value;

      // let xmax;
      // let min = 0;

      // console.log("console log event.target.value width 11 " + event.target.value)


      // if (this.state.labeltype == "Front-Right") {
      //   xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), event.target.value);
      // }

      // if (this.state.labeltype == "Right-Back") {
      //   xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), event.target.value);
      // }

      // if (this.state.labeltype == "Front-Left") {
      //   xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), event.target.value);
      // }

      // if (this.state.labeltype == "Left-Back") {
      //   xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), event.target.value);
      // }

      if (event.target.value === "") {
        this.state.labellength = 10;
        this.LengthEdgeCorners = 10;
        this.globalHeight = valueforLength;
      }

      if (event.target.value < 10) {
        this.state.labellength = 10;
        this.LengthEdgeCorners = 10;
        this.globalHeight = valueforLength;
      }


      console.log("isNaN(num)" + isNaN(parseInt(event.target.value, 10)));

      if (isNaN(valueforLength)) {
        this.state.labellength = 10;
        this.state.topLengthCheck = false;

        this.LengthEdgeCorners = 10;
        this.globalHeight = 10;
        console.log("this.state.topLengthCheck  " + this.state.topLengthCheck + " this.state.labellength " + this.state.labellength);

      }

      let xmax;

      if (this.state.labeltype == "Front-Right") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Right-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Front-Left") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), parseInt(this.LengthEdgeCorners, 10));
      }

      if (this.state.labeltype == "Left-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), parseInt(this.LengthEdgeCorners, 10));
      }
      this.state.labelb = xmax;
      this.globaly = xmax;
    }

    if (this.state.labeltype == "Top" || this.state.labeltype == "Right" || this.state.labeltype == "Left" || this.state.labeltype == "Back" || this.state.labeltype == "Front") {

      if (this.state.topLengthCheck == true) {

        if (this.state.labeltype == "Top")
          this.setLimitLength(event.target.value, this.globalScalez);

        if (this.state.labeltype == "Right")
          this.setLimitLength(event.target.value, this.globalScaley);

        if (this.state.labeltype == "Left")
          this.setLimitLength(event.target.value, this.globalScaley);

        if (this.state.labeltype == "Back")
          this.setLimitLength(event.target.value, this.globalScaley);

        if (this.state.labeltype == "Front")
          this.setLimitLength(event.target.value, this.globalScaley);
      }
      else {
        this.globalHeight = event.target.value;
      }

      let xmax4;
      let min2 = 0;
      if (this.state.labeltype == "Top") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScalez, 10), this.state.labellength);
      }

      if (this.state.labeltype == "Back") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
      }

      if (this.state.labeltype == "Right") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
      }

      if (this.state.labeltype == "Left") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
      }

      if (this.state.labeltype == "Front") {
        xmax4 = this.Xmax_Limit(parseInt(this.globalScaley, 10), this.state.labellength);
      }

      this.state.labelb = 0;
      this.globaly = 0;


    }

    this.setState({
      updateWidgets: true
    })

    // this.globalHeight = this.state.labellength;
    this.editMUILabel();
  }

  handleChangeForWidth = name => event => {

    console.log(" Width check for - " + event.target.value);

    if (this.state.labeltype == "Top-Front" || this.state.labeltype == "Top-Back" || this.state.labeltype == "Top-Right" || this.state.labeltype == "Top-Left") {

      //
      if (this.state.labeltype == "Top-Front")
        this.calculateTotalLabelWidth(parseInt(event.target.value, 10), parseInt(this.globalScalex, 10));

      if (this.state.labeltype == "Top-Back")
        this.calculateTotalLabelWidth(parseInt(event.target.value, 10), parseInt(this.globalScalex, 10));

      if (this.state.labeltype == "Top-Right")
        this.calculateTotalLabelWidth(parseInt(event.target.value, 10), parseInt(this.globalScalez, 10));

      if (this.state.labeltype == "Top-Left")
        this.calculateTotalLabelWidth(parseInt(event.target.value, 10), parseInt(this.globalScalez, 10));

    }

    if (this.state.labeltype == "Top")
      this.limitCheckWidth(event.target.value, this.globalScalex)

    if (this.state.labeltype == "Front")
      this.limitCheckWidth(event.target.value, this.globalScalex)

    if (this.state.labeltype == "Back")
      this.limitCheckWidth(event.target.value, this.globalScalex)

    if (this.state.labeltype == "Left")
      this.limitCheckWidth(event.target.value, this.globalScalez)

    if (this.state.labeltype == "Right")
      this.limitCheckWidth(event.target.value, this.globalScalez)

    // Limit width for over-edge corner 
    if (this.state.labeltype == "Front-Right" || this.state.labeltype == "Right-Back" || this.state.labeltype == "Front-Left" || this.state.labeltype == "Left-Back") {

      if (event.target.value < 20 || event.target.value > (parseInt(this.globalScalez, 10) + parseInt(this.globalScalex, 10))) {

        this.state.topWidthCheck = true;
        this.state.topWidthText = " " + 20 + " - " + (parseInt(this.globalScalez, 10) + parseInt(this.globalScalex, 10));

      }
      else {

        this.state.topWidthCheck = false;
        this.state.topWidthText = "";

      }

    }

    this.setState({
      [name]: event.target.value
    });
  }

  changeScale = (num, globalScale) => {

    return this.constrain(parseInt(num, 10), 10, parseInt(globalScale, 10));

  }

  callBlur2 = (event) => {

    let value = event.target.value;
    let { t } = this.props;

    if (this.state.labeltype == "Front-Right" || this.state.labeltype == "Right-Back" || this.state.labeltype == "Front-Left" || this.state.labeltype == "Left-Back") {

      console.log("event.target.value int is " + event.target.value);

      var newvalue = event.target.value;

      if (newvalue < 20) {
        newvalue = 20;


        toast.warning(t('forOver-Edgelabels,theminimumlabelwidthis20mm'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER })
        this.Widthnew = newvalue;
        this.state.labelwidth = newvalue;
      }


      let valueforWidth = this.constrain(parseInt(event.target.value, 10), 20, parseInt(this.globalScalez, 10) + parseInt(this.globalScalex, 10))
      this.globalWidth = valueforWidth;

      this.Widthnew = valueforWidth;


      if (event.target.value > valueforWidth || event.target.value < valueforWidth) {
        this.setState({
          labelwidth: valueforWidth
        });
        console.log(" valueforWidth  callBlur2 " + valueforWidth);

        this.state.topWidthCheck = false;
        this.state.topWidthText = "";
        this.Widthnew = valueforWidth;
        this.globalWidth = valueforWidth;
      }


      if (valueforWidth != valueforWidth) {

        this.state.labelwidth = 20;
        this.state.topWidthCheck = false;
        this.state.topWidthText = "";
        this.Widthnew = 20;
        this.globalWidth = 20;
        console.log(" newvalue 2 " + newvalue);

      }


      if (this.state.labeltype == "Front-Right")

        var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, this.Widthnew) // Top-Front

      if (this.state.labeltype == "Right-Back")
        var pos = this.getMinMaxForPositionB(this.globalScalex, this.globalScalez, this.Widthnew) // Top-Front

      if (this.state.labeltype == "Front-Left")
        var pos = this.getMinMaxForPositionB(this.globalScalex, this.globalScalez, this.Widthnew) // Top-Front

      if (this.state.labeltype == "Left-Back")
        var pos = this.getMinMaxForPositionB(this.globalScalez, this.globalScalex, this.Widthnew) // Top-Front


      var min = pos[0];

      this.state.labela = min;
      this.globalx = min;

    }

    if (this.state.labeltype == "Top" || this.state.labeltype == "Right" || this.state.labeltype == "Left" || this.state.labeltype == "Back" || this.state.labeltype == "Front") {
      if (this.state.topWidthCheck == true) {


        if (this.state.labeltype == "Top")
          this.setLimitWidth(event.target.value, this.globalScalex);

        if (this.state.labeltype == "Right")
          this.setLimitWidth(event.target.value, this.globalScalez);

        if (this.state.labeltype == "Left")
          this.setLimitWidth(event.target.value, this.globalScalez);

        if (this.state.labeltype == "Back")
          this.setLimitWidth(event.target.value, this.globalScalex);

        if (this.state.labeltype == "Front")
          this.setLimitWidth(event.target.value, this.globalScalex);

      }
      else {
        this.globalWidth = event.target.value;
      }
      this.state.labela = 0;
      this.globalx = 0;

    }

    if (this.state.labeltype == "Top-Front" || this.state.labeltype == "Top-Back" || this.state.labeltype == "Top-Right" || this.state.labeltype == "Top-Left") {
      let valueforWidth;

      if (this.state.labeltype == "Top-Front")
        valueforWidth = this.changeScale(value, this.globalScalex)

      if (this.state.labeltype == "Top-Back")
        valueforWidth = this.changeScale(value, this.globalScalex)

      if (this.state.labeltype == "Top-Right")
        valueforWidth = this.changeScale(value, this.globalScalez)

      if (this.state.labeltype == "Top-Left")
        valueforWidth = this.changeScale(value, this.globalScalez)

      console.log("console log valueforWidth " + valueforWidth);
      this.state.labelwidth = valueforWidth;
      this.globalWidth = valueforWidth;
      this.state.topWidthCheck = false;
      this.state.topWidthText = "";
      this.WidthTopCorners = valueforWidth
      // Checking for NAN
      if (valueforWidth !== valueforWidth) {
        this.state.labelwidth = 10;
        this.WidthTopCorners = 10;
        this.globalWidth = 10;

      }

      //***************
      let xmax;
      let min = 0;

      console.log("console log event.target.value width 11 " + event.target.value)


      if (this.state.labeltype == "Top-Front") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), event.target.value);
      }

      if (this.state.labeltype == "Top-Back") {
        xmax = this.Xmax_Limit(parseInt(this.globalScalex, 10), event.target.value);
      }

      if (this.state.labeltype == "Top-Right") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), event.target.value);
      }

      if (this.state.labeltype == "Top-Left") {
        xmax = this.Xmax_Limit(parseInt(this.globalScaley, 10), event.target.value);
      }

      this.storeMaxWidth = xmax;
      this.storeMinWidth = min;

      console.log("this.storeMaxWidth " + this.storeMaxWidth + " xmax " + xmax + ", " + event.target.value + " event.target.value");


      if (event.target.value >= min && event.target.value <= xmax) {

        console.log("min " + min + " xmax " + xmax + ", " + event.target.value + " event.target.value");
        this.state.errorLabelPosACondition = false;
        this.state.errorLabelPosA = "";


      } else if (min == xmax) {
        this.state.errorLabelPosACondition = false;
        this.state.errorLabelPosA = "";

      }

      this.state.labela = 0;
      this.globalx = 0;

    }

    // this.WidthTopCorners = event.target.value;
    // For Label Width limit for top corners and particular top
    this.storewidth = event.target.value;
    this.setState({
      updateWidgets: true
    })
    // this.globalWidth = this.state.labelwidth;

    this.editMUILabel();
  }

  handleTextChange = name => event => {
    const newValue = event.target.value;

    if (name === "labelname") {
      if (format.test(newValue)) {

        let { t } = this.props;
        // alert(t('allowedCharacters: _ # -'));
        toast.error(t('allowedCharacters: _ # -'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });

        // console.log("alert me .........");

        this.setState({
          labelname: ""
        })
        return;
      }
    }
    this.setState({
      [name]: event.target.value
    });
  };


  callBlur = () => {

    let caseName = ""
    caseName = this.props.match.params.casename;
    if (caseName.includes("#")) {
      caseName = encodeURIComponent(this.props.match.params.casename)
    }
    axios.put(`/Threed/LineDirection/${caseName}`, {
      "line_rotation": !this.state.line_rotation ? this.orientation : this.state.line_rotation,
      "line_position": !this.state.line_position ? this.faceSide : this.state.line_position
    })
      .then((res) => {

      })
    axios.put(`/Threed/caseDimension/${caseName}`, {

      //   "Length": this.state.xdim,   
      //      "Width": this.state.zdim,     
      //      "Height": this.state.ydim,
      "Length": this.globalScalex = this.constrain(this.globalScalex, 10, 1000),
      "Width": this.globalScaley = this.constrain(this.globalScaley, 10, 1000),
      "Height": this.globalScalez = this.constrain(this.globalScalez, 10, 1000),
      "Length": this.state.xdim = this.globalScalex,
      "Width": this.state.zdim = this.globalScaley,
      "Height": this.state.ydim = this.globalScalez,

      "material": this.state.showcaseTexture,

      "mass": this.state.mass,

    }).then((res) => {
      this.showLine()
      this.showCaseData()

      console.log(res.data)

    }).catch(err => {

      console.log(err)

    })
    if (this.state.line_position === "Topside" && this.state.line_rotation === "Vertical") {
      this.TopVertical()
    } else if (this.state.line_position === "Topside" && this.state.line_rotation === "Horizontal") {
      this.TopHorizontal()
    }
    else if (this.state.line_position === "Bottomside" && this.state.line_rotation === "Vertical") {
      this.BottomVertical()
    } else if (this.state.line_position === "Bottomside" && this.state.line_rotation === "Horizontal") {
      this.BottomHorizontal()
    }
    else if (this.state.line_position === "Leftside" && this.state.line_rotation === "Vertical") {
      this.LeftVertical()
    } else if (this.state.line_position === "Leftside" && this.state.line_rotation === "Horizontal") {
      this.LeftHorizontal()
    }
    else if (this.state.line_position === "Rightside" && this.state.line_rotation === "Vertical") {
      this.RightVertical()
    }
    else if (this.state.line_position === "Rightside" && this.state.line_rotation === "Horizontal") {
      this.RightHorizontal()
    } else if (this.state.line_position === "Frontside" && this.state.line_rotation === "Vertical") {
      this.FrontVertical()
    } else if (this.state.line_position === "Frontside" && this.state.line_rotation === "Horizontal") {
      this.FrontHorizontal()
    }
    else if (this.state.line_position === "Backside" && this.state.line_rotation === "Vertical") {
      this.BackVertical()
    } else if (this.state.line_position === "Backside" && this.state.line_rotation === "Horizontal") {
      this.BackHorizontal()
    }
    this.globalScalex = this.constrain(this.globalScalex, 10, 1000);
    this.globalScaley = this.constrain(this.globalScaley, 10, 1000);
    this.globalScalez = this.constrain(this.globalScalez, 10, 1000);
    this.state.xdim = this.globalScalex;
    this.state.zdim = this.globalScaley;
    this.state.ydim = this.globalScalez;
    // this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
    this.state.errorXdim = false;
    this.state.errorYdim = false;
    this.state.errorZdim = false;
    this.state.errorDimensionForX = "";
    this.state.errorDimensionForY = "";
    this.state.errorDimensionForZ = "";
    let { t } = this.props;
    if (this.labels.length > 0) {
      let { t } = this.props;
      toast.error(t('deletealllabelstochangethecasedimensions'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      if (this.labelNames.length > 0) {

        if (name === "xdim") {
          this.setState({
            errorXdim: false
          });
          this.state.errorDimensionForX = "10 -1000";
        }
        else if (name === "ydim") {
          this.setState({
            errorYdim: false
          });
          this.state.errorDimensionForY = "10 -1000";

        }
        else if (name === "zdim") {
          this.setState({
            errorZdim: false
          });
          this.state.errorDimensionForZ = "10 -1000";

        }
        // this.setState({
        //   errorDimensionCondition: true
        // });
      }
      return;
    }
    this.setState({
      errorDimensionCondition: false
    });
    try {
      console.log("this.globalName inside callBlur = " + this.globalName);
      if (this.globalName && this.globalName === "Label0") {
        console.log("checking for attachlabel run from callblur::::::")
        this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
      }
      this.globalType = "Front";
      this.globalx = 0;
      this.globaly = 0;
      this.globalWidth = 10;
      this.globalHeight = 10;
      // this.TopVertical();

      this.editMUILabel();
    }
    catch (e) {
      console.log("error inside callBlur = " + e);
    }

  }

  handleDimensionChange = name => event => {
    console.log("this.labelNames inside handleDimensionChange = " + this.labelNames);
    console.log("this.recordnames inside handleDimensionChange = " + this.recordnames);
    // if (this.labelNames.length > 1) {
    // if (this.recordnames.length > 1) {
    let { t } = this.props;
    if (this.labels.length > 0) {
      toast.error(t('deletealllabelstochangethecasedimensions'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      if (this.labelNames.length > 0) {

        if (name === "xdim") {
          this.setState({
            errorXdim: true
          });
          this.state.errorDimensionForX = "10 -1000";
        }
        else if (name === "ydim") {
          this.setState({
            errorYdim: true
          });
          this.state.errorDimensionForY = "10 -1000";

        }
        else if (name === "zdim") {
          this.setState({
            errorZdim: true
          });
          this.state.errorDimensionForZ = "10 -1000";

        }
        // this.setState({
        //   errorDimensionCondition: true
        // });
      }
      return;
    }
    // let value = this.constrain(event.target.value, 10, 1000);
    let value = event.target.value;

    this.state.errorDimensionForX = "";
    this.state.errorDimensionForY = "";
    this.state.errorDimensionForZ = "";

    this.state.errorXdim = false;
    this.state.errorYdim = false;
    this.state.errorZdim = false;


    if (name === "xdim") {
      this.globalScalex = value;
      if (value < 10 || value > 1000) {
        this.state.errorDimensionForX = "10 -1000";
        this.state.errorXdim = true;
      }
    }
    else if (name === "ydim") {
      this.globalScaley = value;
      if (value < 10 || value > 1000) {
        this.state.errorDimensionForY = "10 -1000";
        this.state.errorYdim = true;
      }
    }
    else if (name === "zdim") {
      this.globalScalez = value;
      if (value < 10 || value > 1000) {
        this.state.errorDimensionForZ = "10 -1000";
        this.state.errorZdim = true;
      }
    }

    this.setState({
      [name]: value
    });
  };

  handleSelection = (event) => {
    const selected = event.target.value;
    console.log("selected label = ", selected);
    this.dropdownCallback(selected);
    this.setState({
      selectlabel: selected
    })
  }

  executeUserAction = (operation) => {
    console.log("operation = ", operation)
    if (operation === "addLabel") {
      this.addMUILabel();
      // this.TopVertical();
    }
    else if (operation === "saveLabel") {
      this.editMUILabel();
    }
    else if (operation === "deleteLabel") {
      this.deleteMUILabel();
    }
    this.setState({
      operationCompleted: true
    })
  }


  changeHash = () => {

    console.log("replaced case 1: " + this.props.match.params.casename);


    if (this.props.match.params.casename.includes("$")) {
      var values = this.props.match.params.casename;
      //casename=values.replace(/#|,/g, '');

      this.props.match.params.casename = values.replaceAll("$", "#");
      this.newCasename = this.props.match.params.casename;

      console.log("replaced case 2: " + this.props.match.params.casename + " " + this.newCasename);
    }
  }

  setData = (labelset) => {
    return labelset;
  }

  handlePanel = panel => (event, expanded) => {
    // console.log(event);
    // console.log(expanded);
    // this.setState({
    //   summaryExpanded: expanded
    // })
  }



  handlexpand = (name) => {

    if (this.state.panelname === 'casepanel2') {
      console.log("handlexpand called else if condition111111 ................", ",", this.state.colorleft, ",", this.state.colormarginTop);
      // this.colortop =  this.state.colortop;
      this.colorleft = this.state.colorleft;
      this.colormarginTop = this.colormarginTop;

      this.setState({
        colorleft: '256px',
        // colortop: '15px',
        colormarginTop: "8px"
      })

      console.log("handlexpand called else if condition 222222................", ",", this.state.colorleft, ",", this.state.colormarginTop);
    }


    if (name === "casepanel3") {
      console.log("inside handlexpand Expand");
      this.setState({
        operationCompleted: false
      })
    }
    else {
      console.log("inside handlexpand Collapse");
      this.setState({
        operationCompleted: true
      })
    }

    console.log("Onchange in summary");

    if (this.state.panelname != name) {
      this.state.panelname = name;
      console.log("name inside handlexpand if = " + this.state.panelname);
    }
    else {
      this.state.panelname = ''
      console.log("name inside handlexpand = " + this.state.panelname);
    }

    this.setState({
      expanded: this.state.panelname,
      labels: this.labels,
    });
    console.log("this.labels inside handlexpand " + this.labels)

    // this.getAllLabels();
    // this.forceUpdate();
  }

  render() {
    this.colorleft = this.state.colorleft;
    this.colormarginTop = this.colormarginTop;
    const { t } = this.props; //localization
    const { classes } = this.props;
    const enableTable = !this.state.operationCompleted;
    var labelNameLength = 0;
    if (this.state.labelname && this.state.labelname.length > 0) {
      labelNameLength = this.state.labelname.length;
      this.state.errorText = "";
    }
    else {
      let { t } = this.props;
      this.state.errorText = t('incorrectentry');
      // let { t } = this.props;
      // toast.error(t('incorrectentry'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
    }
    const labelcolumns = [
      {
        title: t('Name'), field: 'labelname', defaultGroupOrder: 0, width: "0%"
      },
      { title: t('Type'), field: "typename", width: "20%" },
      { title: t('width') + " (mm)", field: "labelwidth", width: "10%" },
      { title: t('length') + " (mm)", field: "labelheight", width: "10%" },
      { title: "A (mm)", field: "labelx", width: "10%" },
      { title: "B (mm)", field: "labely", width: "10%" },
    ];
    const labelSet = this.state.labels;
    console.log("labelSet = ", labelSet);
    const { data, defaultData } = this.state;
    const role = this.state.role;
    const active = this.state.active;
    this.state.operationCompleted = false;
    this.state.updateWidgets = false;
    console.log("this.props formuser = ", this.props);
    console.log("this.state.xdim = ", this.state.xdim);
    console.log("this.state.ydim = ", this.state.ydim);
    console.log("this.state.zdim = ", this.state.zdim);
    this.globalScalex = this.state.xdim;
    this.globalScaley = this.state.zdim;
    this.globalScalez = this.state.ydim;
    console.log("x scale changed to:  ", this.globalScalex);
    console.log("y scale changed to:  ", this.globalScaley);
    console.log("z scale changed to:  ", this.globalScalez);
    console.log("this.globalx changed to:  ", this.globalx);
    console.log("this.globaly changed to:  ", this.globaly);
    console.log("this.globalWidth changed to:  ", this.globalWidth);
    console.log("this.globalHeight changed to:  ", this.globalHeight);
    console.log("this.globalType changed to:  ", this.globalType);
    console.log("this.globalName changed to:  ", this.globalName);
    return (

      <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} fontFamily='Roboto'>
        <div className="parentFormuser" style={ParentGridstyle}>
          {/* <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} fontFamily='Roboto'> */}
          <Grid container xs={7} sm={7} md={7} lg={7} spacing={0} fontFamily='Roboto' style={containerGriddStyle}>
            <Grid item xs={12} sm={12} md={12} lg={12} width={threedwidth} height={threedheight}>
              <main >
                <div
                  ref={mount => {
                    this.mount = mount;
                  }}
                />
              </main>
              {/* </Grid> */}

              <div className="container" style={containerMarginStyle}>
                <div className="textflield" style={DivPFMarginStyle} >
                  <TextField
                    style={{ left: "29px", marginTop: "14px", marginBottom: '15px', height: "18px", backgroundColor: "#E8E7DE", justifyContent: "center", alignItems: "center", textAlign: "center", }}
                    id="outlined-typecasename"
                    label=""
                    disabled={true}
                    value={this.props.match.params.casename}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                      // style: { fontSize: "15px", color: "black", backgroundColor: "#E8E7DE", height: "27px", width: "206px", textAlign: "center", justifyContent: "center", alignItems: "center", padding: "6px" }
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: { fontSize: "15px", top: "3px", color: "black", backgroundColor: "#E8E7DE", height: "27px", width: "206px", textAlign: "center", justifyContent: "center", alignItems: "center", padding: "6px" }
                    }}
                    margin="dense"
                    // variant="outlined"
                    size="small"

                  />
                  <Button style={{ marginLeft: "55px", alignSelf: 'center', minWidth: "0px", width: "35px", height: "35px", border: "1px solid black", right: 0, borderRadius: "50%" }} className="backBtn" onClick={this.handleBack}>
                    {/* <ArrowBackIcon /> */}
                    <HomeIcon id="home-icon" />
                    {/* Back */}
                  </Button>
                </div>

                <div className="icobutton" style={{ marginLeft: "10px", display: 'flex', flexDirection: "row", width: "255px", height: "46px", backgroundColor: color2 }}>
                  <Button style={{ display: 'flex', alignSelf: 'center', width: "5px !important", marginLeft: "-5px", height: "65px", right: "0px" }} className="backBtn"
                    disabled={true}>
                    {/* <ArrowBackIcon /> */}
                    <img height={35} width={35} draggable="false" src={Box1} />
                    {/* Back */}
                  </Button>
                  <Button style={{ alignSelf: 'center', minWidth: "0px", width: "35px", height: "35px", marginLeft: "1px", border: "1px solid black", right: 0, borderRadius: "50%", }} className="backBtn" onClick={this.rotateX}>
                    {/* <ArrowBackIcon /> */}
                    <img height={30} width={28} draggable="false" src={Rotate_red} />
                    {/* Back */}
                  </Button>
                  <Button style={buttonStyle} className="backBtn" onClick={this.rotateY}>
                    {/* <ArrowBackIcon /> */}
                    <img height={30} width={28} draggable="false" src={Rotate_green} />
                    {/* Back */}
                  </Button>
                  <Button style={buttonStyle} className="backBtn" onClick={this.rotateZ}>
                    {/* <ArrowBackIcon /> */}
                    <img height={30} width={28} draggable="false" src={Rotate_blue} />
                    {/* Back */}
                  </Button>
                </div>
                <div style={{ marginLeft: "10px", marginRight: "2px", display: 'flex', flexDirection: "row", width: "255px", height: "46px", backgroundColor: color2 }}>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container xs={8} sm={8} md={8} lg={8} spacing={1} fontFamily='Roboto'
            style={GridContainerStyle}>
            <Grid item xs={12} sm={12} md={12} lg={12} width={widgetwidth} style={{ width: "526px", color: 'white', overflow: "hidden" }}>

              <CaseData

                expanded_panel={this.state.expanded}
                handlexpand={this.handlexpand}
                S_errorXdim={this.state.errorXdim}
                S_errorDimensionForX={this.state.errorDimensionForX}
                S_xdim={this.state.xdim}
                handleDimensionChange={this.handleDimensionChange}
                callBlur={this.callBlur}
                Red_arrow={Red_arrow}
                Green_arrow={Green_arrow}
                Blue_arrow={Blue_arrow}
                S_errorYdim={this.state.errorYdim}
                S_errorDimensionForY={this.state.errorDimensionForY}
                S_ydim={this.state.ydim}
                S_errorZdim={this.state.errorZdim}
                S_errorDimensionForZ={this.state.errorDimensionForZ}
                S_zdim={this.state.zdim}
                S_errorMass={this.state.errorMass}
                S_errorKgForMass={this.state.errorKgForMass}
                S_mass={this.state.mass}
                onValueChange={this.onValueChange}
                callBlurForMass={this.callBlurForMass}
                S_showcaseTexture={this.state.showcaseTexture}
                handleChangeForTexture={this.handleChangeForTexture}
                materialForDatabase={this.materialForDatabase}
                classes={classes}
                casetexture={this.casetexture}
                exceptThisSymbols={exceptThisSymbols}
                exceptSymbols={exceptSymbols}
                t={t}
                color1={color1}
              />

              <LabelWizard

                expanded_panel={this.state.expanded}
                handlexpand={this.handlexpand}
                S_errorText={this.state.errorText}
                S_labelname={this.state.labelname}
                handleTextChange={this.handleTextChange}
                S_operation={this.state.operation}
                executeUserAction={this.executeUserAction}
                addMUILabel={this.addMUILabel}
                S_enable={this.state.enable}
                S_setHidden={this.state.setHidden}
                forSetHidden={this.forSetHidden}
                S_setColor={this.state.setColor}
                forSetColor={this.forSetColor}
                S_labeltype={this.state.labeltype}
                handleChange={this.handleChange}
                labelTypeForDatabase={this.labelTypeForDatabase}
                typeoptions={this.typeoptions}
                S_topWidthCheck={this.state.topWidthCheck}
                S_topWidthText={this.state.topWidthText}
                S_labelwidth={this.state.labelwidth}
                handleChangeForWidth={this.handleChangeForWidth}
                callBlur2={this.callBlur2}
                S_topLengthCheck={this.state.topLengthCheck}
                S_topLengthText={this.state.topLengthText}
                S_labellength={this.state.labellength}
                handleChangeForLength={this.handleChangeForLength}
                callBlur1={this.callBlur1}
                S_errorLabelPosACondition={this.state.errorLabelPosACondition}
                S_errorLabelPosA={this.state.errorLabelPosA}
                S_labela={this.state.labela}
                handleChangeForPositionA={this.handleChangeForPositionA}
                callBlurForPosA={this.callBlurForPosA}
                S_errorLabelPosB={this.state.errorLabelPosB}
                S_errorLabelPosBCondition={this.state.errorLabelPosBCondition}
                S_labelb={this.state.labelb}
                handleChangeForPositionB={this.handleChangeForPositionB}
                callBlurForPosB={this.callBlurForPosB}
                S_selectlabel={this.state.selectlabel}
                handleSelection={this.handleSelection}
                labelNames={this.labelNames}
                orange={orange}
                purple={purple}
                exceptThisSymbols={exceptThisSymbols}
                t={t}
                color1={color1}
                classes={classes}
                labelNameLength={labelNameLength}
                role={role}
                S_colorleft={this.state.colorleft}
                S_colormarginTop={this.state.colormarginTop}
              />

              {/* <Summary
                expanded_panel={this.state.expanded}
                handlexpand={this.handlexpand}
                color1={color1}
                t={t}
                enableTable={enableTable}
                tableRef={this.tableRef}
                tableIcons={tableIcons}
                labelcolumns={labelcolumns}
                labelSet={labelSet}
              /> */}

              {/* </Grid> */}
              {/* </Box>  */}
              {/* </div>
                </div> */}
            </Grid>
          </Grid>
          {/* </Grid> */}
        </div>
      </Grid>

    )
  }
}

FormUserPage1.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      casename: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};


export default withTranslation()(withRouter(withStyles(styles)(FormUserPage1)));