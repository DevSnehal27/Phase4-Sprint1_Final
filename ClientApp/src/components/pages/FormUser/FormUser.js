import react, { Component, useEffect } from "react";
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
import './styles.css'
// import Stats from "./Stats";
import Button from "@material-ui/core/Button";
import ForwardIcon from "@material-ui/icons/DoubleArrow";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import { ContactsOutlined } from "@material-ui/icons";

//the following variable can not be removed
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var numberStart = /^\d/;
var alphaStart = /^[a-zA-Z]*$/;
var speacialStart = /^[a-zA-Z0-9]*$/;
var onlyNumber = /^[0-9]{1,3}$/;
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

const faceMap = [2,4,1,0,5,3];

class FormUserPage extends Component {
  constructor(props) {
    super(props);
    const initialDatState = {
      length: 2,
      width: 2,
      height: 2
    };
    this.state = {
      data: initialDatState,
      defaultData: initialDatState,
      caseName: "",
      width: 2,
      formClassName: '',
      formSuccessMessage: '',
      formErrorMessage: '',
      role: "guest"
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
    this.map = this.map.bind(this);
    this.map2 = this.map2.bind(this);
    this.map3 = this.map3.bind(this);

    console.log("variables are created freshly");
    this.labels = [];
    this.labelNames = [];
    this.gui = new GUI();
    this.root = new THREE.Object3D();
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.camera = camera;
    this.id = 0;
    // this.typeoptions = ["dummy", "Top", "Bottom", "Front", "Back", "Side", "Op.Side", "Corner(Top-Front)", "Corner(Top-Back)", "Corner(Top-Side)",
    //   "Corner(Top-Op.Side)", "Corner(Front-Side)", "Corner(Side-Back)", "Corner(Front-Op.Side)", "Corner(Op.Side-Back)"];
    this.typeoptions = ["dummy", "Top", "Front", "Back", "Right", "Left", "Top-Front", "Top-Back", "Top-Right",
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
    this.globalWidth = 0;
    this.globalHeight = 0;
    this.globalType = "Front";
    this.globalName = "Label0";
    this.enterlabelname; 
    this.labelnamedrop;
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
    this.rotationStatex=0;
    this.rotationStatey=0;
    this.rotationStatez=0;
    this.emailid = "xyz@gmail.com";
    this.role = "guest";
    var auth = "xyz@gmail.com:guest";    
    this.top = 1;
    this.right = 3;
    this.front = 2; 
     
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

  componentDidMount() {
    this.scene.background = new THREE.Color(0xffffff);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(this.renderer.domElement) //check this       
    this.camera.position.z = 4;
    // orbitControls
    new OrbitControls(this.camera, this.renderer.domElement);
    //Event Handelers
    window.addEventListener("resize", this.handleWindowResize);
    this.animation();
    this.renderer.render(this.scene, this.camera);          
    this.generateCube();
    this.getAllLabels();
    if(this.labels.length==0){
      // this.attachLabel(0, 0, 0, 0, this.globalType, this.globalName);
      this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
    }
  }

  dropdownCallback = (newValue) => {
    const changeglobaltype = this.changeGlobalType;
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
      console.log("index = ", index);
      this.scaleX = this.scaleX.setValue(this.globalScalex);
      this.scaleY = this.scaleY.setValue(this.globalScaley);
      this.scaleZ = this.scaleZ.setValue(this.globalScalez);
      this.globalx = labels[index].labelx;
      this.globaly = labels[index].labely;
      this.globalWidth = labels[index].labelwidth;
      this.globalHeight = labels[index].labelheight;
      this.globalType = labels[index].typename;
      this.labelx = this.labelx.setValue(this.globalx);
      this.labely = this.labely.setValue(this.globaly);
      this.labelwidth = this.labelwidth.setValue(this.globalWidth);
      this.labelheight = this.labelheight.setValue(this.globalHeight);
      this.labeltype = this.labeltype.options(this.typeoptions);
      this.labeltype = this.labeltype.setValue(this.globalType);
      this.labeltype = this.labeltype.onChange(function (newValue) {        
        changeglobaltype(newValue);
      });
      this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
    }
  }  

  getAllLabels = async () => {
    let id = 0;
    let records = [];
    this.labels = [];
    this.labelNames = [];
    try {
      let resonse = await axios.get(`/Threed`);
      records = resonse.data;
      console.log("records = ", records);
      for (var record of records) {
        console.log("record.name",record.name);
        console.log("this.props.match.params.casename",this.props.match.params.casename);
        if (record.name === this.props.match.params.casename &&
          record.labelname != "Label0") {
          id = record.id;
          let labelele = {
            "id": record.id,
            "name": record.name,
            "length": record.length,
            "width": record.width,
            "height": record.height,
            "directionx": record.directionx,
            "directiony": record.directiony,
            "directionz": record.directionz,
            "typename": record.typename,
            "labelname": record.labelname,
            "labelx": record.labelx,
            "labely": record.labely,
            "labelwidth": record.labelwidth,
            "labelheight": record.labelheight
          }
          this.labels.push(labelele);
          this.labelNames.push(record.labelname);         
          this.globalScalex = record.length;
          this.globalScaley = record.width;
          this.globalScalez = record.height;
          this.globalRotationx = record.directionx;
          this.globalRotationy = record.directiony;
          this.globalRotationz = record.directionz;
          this.globalx = record.labelx;
          this.globaly = record.labely;
          this.globalWidth = record.labelwidth;
          this.globalHeight = record.labelheight;
          this.globalType = record.typename;
          this.globalName = record.labelname;
          this.attachLabel(record.labelx, record.labely,
            record.labelwidth, record.labelheight, record.typename, record.labelname);
        }
      };
      if (this.labelNames.length > 0) {        
        this.initLabelWidgets(this.labels[0]);
      }
    }
    catch (err) {
      console.log(err);
      return id;
    }
    console.log("this.labels inside getAllLabels = ", this.labels);
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

  saveOneLabel = (id) => {
    const url = "/Threed/" + id;
    axios.put(url, {
      "id": id,
      "name": this.props.match.params.casename,
      "length": this.globalScalex,
      "width": this.globalScaley,
      "height": this.globalScalez,
      "directionx": this.globalRotationx,
      "directiony": this.globalRotationy,
      "directionz": this.globalRotationz,
      "typename": this.globalType,
      "labelname": this.globalName,
      "labelx": this.globalx,
      "labely": this.globaly,
      "labelwidth": this.globalWidth,
      "labelheight": this.globalHeight
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

  saveLabel = () => {
    axios.post("/Threed", {
      "name": this.props.match.params.casename,
      "length": this.globalScalex,
      "width": this.globalScaley,
      "height": this.globalScalez,
      "directionx": this.globalRotationx,
      "directiony": this.globalRotationy,
      "directionz": this.globalRotationz,
      "typename": this.globalType,
      "labelname": this.globalName,
      "labelx": this.globalx,
      "labely": this.globaly,
      "labelwidth": this.globalWidth,
      "labelheight": this.globalHeight
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

  createRectTop = (label, ctx) => {
    ctx.fillRect(label.labely, label.labelx, label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){    
      ctx.strokeRect(label.labely, label.labelx, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return ctx;
  }

  createRectFront = (label, ctx) => {
    var y = this.map(label.labely, 0, 150, 150, 0);
    var factor = this.map(label.labelheight, 0, 450, 0, 150);
    ctx.fillRect(label.labelx, (y-factor), label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){    
      ctx.strokeRect(label.labelx, (y-factor), label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return ctx;
  }

  createRectBack = (label, ctx) => {
    var y = this.map(label.labely, 0, 150, 150, 0);
    var factor = this.map(label.labelheight, 0, 450, 0, 150);
    ctx.fillRect(label.labelx, (y-factor), label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){    
      ctx.strokeRect(label.labelx, (y-factor), label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return ctx;
  }

  createRectRight = (label, ctx) => {
    var y = this.map(label.labely, 0, 150, 150, 0);
    var factor = this.map(label.labelheight, 0, 450, 0, 150);
    ctx.fillRect(label.labelx, (y-factor) , label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){    
      ctx.strokeRect(label.labelx, (y-factor) , label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    console.log("This is side values , y is "+y)
    console.log(" diff is "+ (y-factor));
    return ctx;
  }

  createRectLeft = (label, ctx) => {
    var y = this.map(label.labely, 0, 150, 150, 0);
    var factor = this.map(label.labelheight, 0, 450, 0, 150);
    console.log(" y is "+ label.labely);
    console.log(" diff is "+ (label.labely+factor));
    console.log(" factor "+ factor);
    if(label.labely+factor>151){
    alert("Y is at max");
    this.globalY = 0;
    }
    ctx.fillRect(label.labelx, (y-factor), label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){    
      ctx.strokeRect(label.labelx, (y-factor), label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return ctx;
  }

  createRect = (label, ctx) => {
    console.log("this.globalName inside createRect = ", this.globalName);
    console.log("label.labelname inside createRect = ", label.labelname);
    console.log("label.typename inside createRect = ", label.typename);
    ctx.fillRect(label.labelx, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){    
      ctx.strokeRect(label.labelx, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return ctx;
  }

  createRectTopFront = (label, ctx1, ctx2) => {
    var y = this.map(label.labelheight, 0, 450, 150, 0);
    ctx1.fillRect(label.labelx, y, label.labelwidth * 3 / 4, label.labelheight / 3);
    ctx2.fillRect(label.labelx, 0, label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){   
      ctx1.strokeRect(label.labelx, y, label.labelwidth * 3 / 4, label.labelheight / 3);
      ctx2.strokeRect(label.labelx, 0, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return [ctx1, ctx2];
  }

  createRectTopBack = (label, ctx1, ctx2) => {
    var newX = this.map(label.labelx, 0, 300 ,300, 0);
    var Cx = this.map(label.labelwidth, 0, 400, 0, 300);
    ctx1.fillRect(newX-Cx, 0, label.labelwidth * 3 / 4, label.labelheight / 3);
    ctx2.fillRect(label.labelx, 0, label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){   
      ctx1.strokeRect(newX-Cx, 0, label.labelwidth * 3 / 4, label.labelheight / 3);
      ctx2.strokeRect(label.labelx, 0, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return [ctx1, ctx2];
  }

  createRectTopSide = (label, ctx1, ctx2) => {    
    var newW = this.map(label.labelwidth, 0, 400, 0, 450);
    var newH = this.map(label.labelheight, 0, 400, 0, 450);
    var newY = this.map(label.labelx,0,300,0,150);
    var x = this.map(newY, 0, 150, 0, 300);
    ctx1.fillRect(0, newY, label.labelheight * 3 / 4, newW / 3);
    ctx2.fillRect(x, 0, label.labelwidth * 3 / 4, newH / 3);
    if(label.labelname === this.globalName){
      ctx1.strokeRect(0, newY, label.labelheight * 3 / 4, newW / 3);
      ctx2.strokeRect(x, 0, label.labelwidth * 3 / 4, newH / 3);
    }
    return [ctx1, ctx2];
  }

  createRectTopOpSide = (label, ctx1, ctx2) => {
    var x = this.map(label.labely, 0, 150, 300, 0);
    var y = this.map(label.labelx,0,300,150,0);
    var topX = this.map(label.labelheight, 0, 400, 300, 0);
    var factor = this.map(label.labelwidth, 0, 400, 0, 150);
    var newH = this.map(label.labelheight, 0, 400, 0, 450);
    var newW = this.map(label.labelwidth, 0, 400, 0, 450);
    ctx1.fillRect(topX, (y-factor), label.labelheight * 3 / 4, newW / 3);
    ctx2.fillRect(label.labelx, 0, label.labelwidth * 3 / 4, newH / 3);
    if(label.labelname === this.globalName){
      ctx1.strokeRect(topX, (y-factor), label.labelheight * 3 / 4, newW / 3);
      ctx2.strokeRect(label.labelx, 0, label.labelwidth * 3 / 4, newH / 3);
    }
    return [ctx1, ctx2];
  }

  createRectFrontSide = (label, ctx1, ctx2) => {
    var x = this.map(label.labelwidth,0,400,300,0);
    ctx1.fillRect(0, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    ctx2.fillRect(x, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){
      ctx1.strokeRect(0, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
      ctx2.strokeRect(x, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return [ctx1, ctx2];
  }

  createRectSideBack = (label, ctx1, ctx2) => {
    var x = this.map(label.labelwidth,0,400,300,0);
    ctx1.fillRect(0, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    ctx2.fillRect(x, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){
      ctx1.strokeRect(0, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
      ctx2.strokeRect(x, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return [ctx1, ctx2];
  }

  createRectFrontOpSide = (label, ctx1, ctx2) => {
    var x = this.map(label.labelwidth,0,400,300,0);
    ctx1.fillRect(x, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    ctx2.fillRect(0, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){
      ctx1.strokeRect(x, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
      ctx2.strokeRect(0, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return [ctx1, ctx2];
  }

  createRectOpSideBack = (label, ctx1, ctx2) => {
    var x = this.map(label.labelwidth, 0, 400, 300, 0);    
    ctx1.fillRect(x, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    ctx2.fillRect(0, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    if(label.labelname === this.globalName){
      ctx1.strokeRect(x, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
      ctx2.strokeRect(0, label.labely, label.labelwidth * 3 / 4, label.labelheight / 3);
    }
    return [ctx1, ctx2];
  }
  
  getMinMaxForScale = (newScalex, newScaley, newScalez)=>{
    console.log(" fun newScalex is " + newScalex + " newScaley is " + newScaley + " newScalez is " + newScalez);
    let min;
    if (newScalex < newScaley && newScalex < newScalez) {
      min = newScalex;
    }
    else if(newScaley < newScalex && newScaley < newScalez)
    {
      min = newScaley;
    }
    else if(newScalez < newScaley && newScalez < newScalex)
    {
      min = newScalez;
    }
    else (newScalex==newScaley && newScalex==newScalez)
    {
      min = newScalex;
    }
    console.log("min is "+ min);
    return min;
  }

  createLabels = () => {
    var texture1, texture2, texture3, texture4, texture5, texture6;
    let ctxArr = [];
    for (var i = 0; i < 6; i++) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = "red";
      ctx.strokeStyle="green";
      ctx.lineWidth = 6;
      ctxArr[i] = ctx;
    } 
    for (var i = 1; i < 7; i++) {
      let top, front, right;
      if(i===this.top){
        top = faceMap[i-1];
        ctxArr[top].fillText("Top", 0, 10);
      }
      else if(i===this.front){
        front = faceMap[i-1];
        ctxArr[front].fillText("Front", 0, 150);
      }
      else if(i===this.right){
        right = faceMap[i-1];
        ctxArr[right].fillText("Right", 10, 150);
      }      
    } 
    for (var label of this.labels) {
      if (label.typename == "Left"){
        ctxArr[0] = this.createRectLeft(label, ctxArr[0]);
      }
      else if (label.typename == "Right"){
        ctxArr[1] = this.createRectRight(label, ctxArr[1]);
      }
      else if (label.typename == "Top"){
        ctxArr[2] = this.createRectTop(label, ctxArr[2]);
      }    
      else if (label.typename == "Bottom"){
        ctxArr[3] = this.createRect(label, ctxArr[3]);
      } 
      else if (label.typename == "Front"){
        ctxArr[4] = this.createRectFront(label, ctxArr[4]);
      }
      else if (label.typename == "Back"){
        ctxArr[5] = this.createRectBack(label, ctxArr[5]);
      }
      else if (label.typename == "Top-Front"){
        const returnValues = this.createRectTopFront(label, ctxArr[2], ctxArr[4]);
        ctxArr[2] = returnValues[0];
        ctxArr[4] = returnValues[1];
      }
      else if (label.typename == "Top-Back"){
        const returnValues = this.createRectTopBack(label, ctxArr[2], ctxArr[5]);
        ctxArr[2] = returnValues[0];
        ctxArr[5] = returnValues[1];
      }
      else if (label.typename == "Top-Right"){
        const returnValues = this.createRectTopSide(label, ctxArr[2], ctxArr[1]);
        ctxArr[2] = returnValues[0];
        ctxArr[1] = returnValues[1];
      }
      else if (label.typename == "Top-Left"){
        const returnValues = this.createRectTopOpSide(label, ctxArr[2], ctxArr[0]);
        ctxArr[2] = returnValues[0];
        ctxArr[0] = returnValues[1];
      }
      else if (label.typename == "Front-Right"){
        const returnValues = this.createRectFrontSide(label, ctxArr[4], ctxArr[1]);
        ctxArr[4] = returnValues[0];
        ctxArr[1] = returnValues[1];
      }
      else if (label.typename == "Right-Back"){
        const returnValues = this.createRectSideBack(label, ctxArr[1], ctxArr[5]);
        ctxArr[1] = returnValues[0];
        ctxArr[5] = returnValues[1];
      }
      else if (label.typename == "Front-Left"){
        const returnValues = this.createRectFrontOpSide(label, ctxArr[4], ctxArr[0]);
        ctxArr[4] = returnValues[0];
        ctxArr[0] = returnValues[1];
      }
      else if (label.typename == "Left-Back"){
        const returnValues = this.createRectFrontOpSide(label, ctxArr[0], ctxArr[5]);
        ctxArr[0] = returnValues[0];
        ctxArr[5] = returnValues[1];
      }
    }
    ctxArr[0].fill
    texture1 = new THREE.CanvasTexture(ctxArr[0].canvas);
    ctxArr[1].fill
    texture2 = new THREE.CanvasTexture(ctxArr[1].canvas);
    ctxArr[2].fill
    ctxArr[2].lineWidth = 4;
    ctxArr[2].strokeStyle = 'black';
    // ctxArr[2].moveTo(400,74);
    // ctxArr[2].lineTo(0, 74);
    ctxArr[2].moveTo(147,0);
    ctxArr[2].lineTo(147,400);
    ctxArr[2].stroke();

    texture3 = new THREE.CanvasTexture(ctxArr[2].canvas);
    ctxArr[3].fill
    texture4 = new THREE.CanvasTexture(ctxArr[3].canvas);
    ctxArr[4].fill
    texture5 = new THREE.CanvasTexture(ctxArr[4].canvas);
    ctxArr[5].fill
    texture6 = new THREE.CanvasTexture(ctxArr[5].canvas);
    return [texture1, texture2, texture3, texture4, texture5, texture6];
  }

  attachLabel = (x, y, width, height, type, labelname) => {
    this.scene.remove(this.cube);
    this.scene.remove(this.root);
    this.root.remove(this.cube);
    this.root.remove(this.globalLinesegs);
    this.root.position.x = 0;
    var texture1, texture2, texture3, texture4, texture5, texture6;
    console.log(x, y, width, height, type);

    if (width != 0 && height != 0 && labelname != "Label0") {
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
        const labelEle = {
          "id": 0,
          "name": this.props.match.params.casename,
          "length": this.globalScalex,
          "width": this.globalScaley,
          "height": this.globalScalez,
          "directionx": this.globalRotationx,
          "directiony": this.globalRotationy,
          "directionz": this.globalRotationz,
          "typename": type,
          "labelname": labelname,
          "labelx": x,
          "labely": y,
          "labelwidth": width,
          "labelheight": height
        };
        this.labels.push(labelEle);
        this.labelNames.push(labelname);
      }  
      
    }
    const returnValues = this.createLabels();
    texture1 = returnValues[0];
    texture2 = returnValues[1];
    texture3 = returnValues[2];
    texture4 = returnValues[3];
    texture5 = returnValues[4];
    texture6 = returnValues[5];
    console.log("this.globalScalex = ", this.globalScalex);
    console.log("this.globalScaley = ", this.globalScaley);
    console.log("this.globalScalez = ", this.globalScalez);
    
    this.scene.remove(this.plane);
    const planeGeo = new THREE.PlaneGeometry(this.globalScalex+1, this.globalScaley+1);
    const planeMaterial = new THREE.MeshBasicMaterial(
      {
        color: 0xf2f2f2,
        transparent: false,
        opacity: 0.0,
        side: THREE.DoubleSide,
      }
    );
    this.plane = new THREE.Mesh(planeGeo, planeMaterial);    
    var planex = this.map(this.globalScaley, 0, 10, 0, -5.1);
    console.log("planex = ");
    console.log(planex);
    this.plane.position.set(0, planex, 0);
    this.plane.rotateX(-Math.PI / 2.0);
    this.scene.add(this.plane);

    var geometry = new THREE.BoxGeometry(this.globalScalex, this.globalScaley, this.globalScalez);
    const edges = new THREE.EdgesGeometry(geometry);
    const linesegs = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x808080 }));
    this.globalLinesegs = linesegs;
    var cubeMaterials = [
      new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, color: 0x6b5120, transparent: true, opacity: 0.8, map: texture1 }),  //Left 2
      new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, color: 0x6b5120, transparent: true, opacity: 0.8, map: texture2 }),  //Right 4
      new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, color: 0x6b5120, transparent: true, opacity: 0.8, map: texture3 }),  //top 5
      new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, color: 0x6b5120, transparent: true, opacity: 0.8, map: texture4 }),  //bottom 6
      new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, color: 0x6b5120, transparent: true, opacity: 0.8, map: texture5 }),  //front 1
      new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, color: 0x6b5120, transparent: true, opacity: 0.8, map: texture6 })]; //back 3
    var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    var cube = new THREE.Mesh(geometry, cubeMaterial);   
    console.log("this.globalRotationx = ", this.globalRotationx);
    console.log("this.globalRotationy = ", this.globalRotationy);
    console.log("this.globalRotationz = ", this.globalRotationz);
    cube.rotation.x = this.globalRotationx;
    cube.rotation.y = this.globalRotationy;
    cube.rotation.z = this.globalRotationz;
 
    this.cube = cube;
    this.root.add(this.cube);
    this.root.add(this.globalLinesegs);
    this.scene.add(this.root);
    this.renderer.render(this.scene, this.camera);
  }

  addThisLabel = () => {    
    console.log("addLabel is called");
    this.enterlabelname.setValue("");
    console.log("this.globalName = ", this.globalName);
    if (this.labelNames.indexOf(this.globalName) > -1 || this.globalName === "Label0") {
      console.log("Label name is invalid");
      alert("Label name is invalid");
      return;
    }
    this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
    this.labelnamedrop = this.labelnamedrop.options(this.labelNames);
    this.labelnamedrop = this.labelnamedrop.setValue(this.globalName);
    let dropDownFunc = this.dropdownCallback;
    this.labelnamedrop = this.labelnamedrop.onChange(function (newValue) { 
      dropDownFunc(newValue);     
    });
    this.saveLabel();
  }

  editThisLabel = async() => {
    console.log("editLabel is called");
    this.enterlabelname.setValue("");
    console.log("this.globalName = ", this.globalName);
    if (this.labelNames.indexOf(this.globalName) > -1) {
      console.log("Label name exists");
      this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
      let id = 0;
      id = await this.getID(this.globalName);
      console.log("id = ", id);
      if (id === 0) {
        alert("Error in saving label");
      }
      else {
        this.saveOneLabel(id);
      }
    }
    else {
      alert("Label name does not exist");
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
        alert("Error in deleting label");
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
          this.attachLabel(this.globalx, this.globaly, this.globalWidth, this.globalHeight, this.globalType, this.globalName);
        }
        else {
          this.updateWidgetParameters("Label0", 0, 0, 0, 0, "dummy");          
          this.attachLabel(0, 0, 0, 0, "dummy", "Label0");
        }
      }
    }
    else {
      alert("Label name does not exist");
      return;
    }
  }

  initLabelWidgets = (record) => {
    this.updateWidgetParameters(record.labelname, record.labelx, 
              record.labely, record.labelwidth, record.labelheight, record.typename);    
    this.attachLabel(record.labelx, 
      record.labely, record.labelwidth, record.labelheight, record.typename, record.labelname);
  }

  updateWidgetParameters = (labelNamePara, labelXPara,
    labelYPara, labelWidthPara, labelHeightPara, typeNamePara) => {
    const changeglobaltype = this.changeGlobalType;
    this.globalName = labelNamePara;
    this.globalx = labelXPara;
    this.globaly = labelYPara;
    this.globalWidth = labelWidthPara;
    this.globalHeight = labelHeightPara;
    this.globalType = typeNamePara;    
    this.scaleX = this.scaleX.setValue(this.globalScalex);
    this.scaleY = this.scaleY.setValue(this.globalScaley);
    this.scaleZ = this.scaleZ.setValue(this.globalScalez);
    this.labelx = this.labelx.setValue(this.globalx);
    this.labely = this.labely.setValue(this.globaly);
    this.labelwidth = this.labelwidth.setValue(this.globalWidth);
    this.labelheight = this.labelheight.setValue(this.globalHeight);
    this.labeltype = this.labeltype.options(this.typeoptions);
    this.labeltype = this.labeltype.setValue(this.globalType);
    this.labeltype = this.labeltype.onChange(function (newValue) {      
      changeglobaltype(newValue);
    });
    console.log("this.labels inside updateWidgetParameters = ", this.labels);
    this.labelnamedrop = this.labelnamedrop.options(this.labelNames);
    this.labelnamedrop = this.labelnamedrop.setValue(this.globalName);
    let dropDownFunc = this.dropdownCallback;
    this.labelnamedrop = this.labelnamedrop.onChange(function (newValue) {
      dropDownFunc(newValue);
    });
  }

  changeScalex = (newValue) => {
    this.globalScalex = newValue;
    console.log("x scale changed to:  ", this.globalScalex);
    this.scaleX.setValue(this.globalScalex);
  }

  changeScaley = (newValue) => {
    this.globalScaley = newValue;
    console.log("y scale changed to:  ", this.globalScaley);
    this.scaleY.setValue(this.globalScaley);
  }

  changeScalez = (newValue) => {
    this.globalScalez = newValue;
    console.log("z scale changed to:  ", this.globalScalez);
    this.scaleZ.setValue(this.globalScalez);
  }

  changeGlobalx = (newValue) => {
    this.globalx = newValue;
    console.log("global x changed to:  ", this.globalx);
    this.labelx.setValue(this.globalx);
  }

  changeGlobaly = (newValue) => {
    this.globaly = newValue;
    console.log("global y changed to:  ", this.globaly);
    this.labely.setValue(this.globaly);
  }

  changeGlobalWidth = (newValue) => {
    this.globalWidth = newValue;
    console.log("global width changed to:  ", this.globalWidth);
    this.labelwidth.setValue(this.globalWidth);
  }

  changeGlobalHeight = (newValue) => {
    this.globalHeight = newValue;
    console.log("global height changed to:  ", this.globalHeight);
    this.labelheight.setValue(this.globalHeight);
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

  generateCube = async() => {
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

    var cubeparameters = {
      scalex: 1,
      scaley: 1,
      scalez: 1,
      changeDimension: () => {
        this.attachThisLabel();
      }
    }    
    const panelFolder = this.gui.addFolder('Panel')
    const cubeFolder = panelFolder.addFolder('3D Case Parameters')    
    this.scaleX = cubeFolder.add(cubeparameters, 'scalex', 1, 10, 1).name('Width').onFinishChange(function (newValue) {     
      changescalex(newValue);
    });
    this.globalScalex = 1;
    this.scaleX.setValue(this.globalScalex);
    this.scaleY = cubeFolder.add(cubeparameters, 'scaley', 1, 10, 1).name('Length').onFinishChange(function (newValue) {
      changescaley(newValue);
    });
    this.globalScaley = 1;
    this.scaleY.setValue(this.globalScaley);
    this.scaleZ = cubeFolder.add(cubeparameters, 'scaley', 1, 10, 1).name('Height').onFinishChange(function (newValue) {
      changescalez(newValue);
    });
    this.globalScalez = 1;
    this.scaleZ.setValue(this.globalScalez);
    this.dimensionButton = cubeFolder.add(cubeparameters, "changeDimension").name("Change Dimension");
    cubeFolder.open();

    var rotationparameters = {
      rotateXdirection: () => {
        this.globalRotationx = this.globalRotationx + Math.PI / 2;
        if (this.globalRotationx >= 2 * Math.PI || this.globalRotationx == 0) {
          this.globalRotationx = 0;
          this.rotationStatex = 0;
        }  
        else if(this.globalRotationx >= Math.PI/2 && this.globalRotationx < Math.PI){
          this.rotationStatex = 1;
        }  
        else if(this.globalRotationx >= Math.PI && this.globalRotationx < 3/2*Math.PI){
          this.rotationStatex = 2;
        } 
        else if(this.globalRotationx >= 3/2*Math.PI && this.globalRotationx < 2 * Math.PI){
          this.rotationStatex = 3;
        }
        console.log("this.rotationStatex = ", this.rotationStatex);
        this.checkRotationsToGetFaces();
        this.attachThisLabel();
      },
      rotateYdirection: () => {
        this.globalRotationy = this.globalRotationy + Math.PI / 2;        
        if (this.globalRotationy >= 2 * Math.PI || this.globalRotationy == 0) {
          this.globalRotationy = 0;
          this.rotationStatey = 0;
        }  
        else if(this.globalRotationy >= Math.PI/2 && this.globalRotationy < Math.PI){
          this.rotationStatey = 1;
        }  
        else if(this.globalRotationy >= Math.PI && this.globalRotationy < 3/2*Math.PI){
          this.rotationStatey = 2;
        } 
        else if(this.globalRotationy >= 3/2*Math.PI && this.globalRotationy < 2 * Math.PI){
          this.rotationStatey = 3;
        }
        console.log("this.rotationStatey = ", this.rotationStatey);  
        this.checkRotationsToGetFaces();     
        this.attachThisLabel();
      },
      rotateZdirection: () => {
        this.globalRotationz = this.globalRotationz + Math.PI / 2;           
        if (this.globalRotationz >= 2 * Math.PI || this.globalRotationz == 0) {
          this.globalRotationz = 0;
          this.rotationStatez = 0;
        }  
        else if(this.globalRotationz >= Math.PI/2 && this.globalRotationz < Math.PI){
          this.rotationStatez = 1;
        }  
        else if(this.globalRotationz >= Math.PI && this.globalRotationz < 3/2*Math.PI){
          this.rotationStatez = 2;
        } 
        else if(this.globalRotationz >= 3/2*Math.PI && this.globalRotationz < 2 * Math.PI){
          this.rotationStatez = 3;
        }   
        console.log("this.rotationStatez = ", this.rotationStatez); 
        this.checkRotationsToGetFaces();
        this.attachThisLabel();
      },
    }
    const rotationFolder = panelFolder.addFolder('Rotation');
    rotationFolder.add(rotationparameters, "rotateXdirection").name("Rotate X direction");
    rotationFolder.add(rotationparameters, "rotateYdirection").name("Rotate Y direction");
    rotationFolder.add(rotationparameters, "rotateZdirection").name("Rotate Z direction");
    rotationFolder.open();

    const labelFolder = panelFolder.addFolder('LabelWizard');

    var parameters = {
      enterlabel: "",
      labelname: "labelname",
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      type: "somename",      
      dropDown: () => {
        console.log("dropDown function is called");
      },
      addLabel: () => {
        this.addThisLabel();
      },
      editLabel: async () => {
        this.editThisLabel();
      },
      deleteLabel: async () => {
        this.deleteThisLabel();
      }
    };
    const labelNamesPara = this.labelNames;    
    this.enterlabelname = labelFolder.add(parameters, 'enterlabel').name("Enter Label")    
    .onFinishChange(function (newValue) {
      console.log("Label entered as:  ", newValue);      
      if (labelNamesPara.length>0 && labelNamesPara.indexOf(newValue) > -1) {
        console.log("Label name exists");
        alert("Label name exists");
        enterlabelname("");
      }
      else if (newValue === "Label0") {
        console.log("Label name is invalid");
        alert("Label name is invalid");
        enterlabelname("");
      }
      else if(format.test(newValue))
      {
        alert("Special characters not allowed");
        enterlabelname("");
      }
      else if(numberStart.test(newValue))
      {
        alert("Label name should not start with number");
        enterlabelname("");
      }
      else {      
        setlabelnamedrop(newValue);  
        changeglobalname(newValue);
      }
    });
    this.labelnamedrop = labelFolder.add(parameters, 'labelname', labelNamesPara).listen().onChange(function (newValue) {      
      changeglobalname(newValue);
    });
    this.labelx = labelFolder.add(parameters, 'x', 0, 299, 1)
    .onFinishChange(function (newValue) {  
      console.log("newValue = ",newValue)
      changeglobalx(newValue);
    });
    this.globalx = 0;
    this.labelx.setValue(this.globalx);
    this.labely = labelFolder.add(parameters, 'y', 0, 149, 1).onFinishChange(function (newValue) {     
      changeglobaly(newValue);
    });
    this.globaly = 0;
    this.labely.setValue(this.globaly);
    this.labelwidth = labelFolder.add(parameters, 'width', 0, 400, 1).onFinishChange(function (newValue) {    
      changeglobalwidth(newValue);
    });
    this.globalWidth = 0;
    this.labelwidth.setValue(this.globalWidth);
    this.labelheight = labelFolder.add(parameters, 'height', 0, 450, 1).onFinishChange(function (newValue) {   
      changeglobalheight(newValue);
    });
    this.globalHeight = 0;
    this.labelheight.setValue(this.globalHeight);
    this.labeltype = labelFolder.add(parameters, 'type', this.typeoptions).onChange(function (newValue) {    
      changeglobaltype(newValue);
    });
    this.globalType = "dummy";
    this.labeltype.setValue("dummy");
    // parameters.width=parameters.height=parameters.x=parameters.y=100
    if(this.state.role != "guest"){
      this.addButton = labelFolder.add(parameters, "addLabel").name("Add Label");
      this.editButton = labelFolder.add(parameters, "editLabel").name("Edit & Save Label");
      this.deleteButton = labelFolder.add(parameters, "deleteLabel").name("Delete Label"); 
    }
      
    labelFolder.open();
    panelFolder.open(); 
  }

  animation = () => {
    this.id = requestAnimationFrame(this.animation);
    // this.cube.rotation.x +=0.01;
    // this.cube.rotation.y +=0.01;
    this.renderer.render(this.scene, this.camera);
  }

  handleWindowResize = () => {
    if (this.camera) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.render(this.scene, this.camera);
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

  handleBack = () => {
    this.gui.destroy();
    cancelAnimationFrame( this.id );
    this.labels = [];
    this.labelNames = [];    
    this.root = null;
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.props.history.goBack();
    // () => { this.props.history.goBack() }
  }

  // Update current state with changes from controls
  handleUpdate = newData => {
    this.setState(prevState => ({
      data: { ...prevState.data, ...newData }
    }));
    // this.generateCube(newData);
  };

  render() {
    const { data, defaultData } = this.state;
    console.log("this.props formuser = ", this.props);
    const role = this.state.role;

    return (
      <main className="react-dat-gui-demo">
        {/* <Stats data={data} /> */}
        <div className="container" >
          <Button style={{ display: 'flex', alignSelf: 'left', margin: 10, padding: 10, right: 600, }} className="backBtn" onClick={this.handleBack}>
            <ArrowBackIcon />
            Back
          </Button>
          <h2 style={{ display: 'flex', alignSelf: 'center', margin: 10, padding: 10 }}>{this.props.match.params.casename}</h2>
        </div>

        <div
          ref={mount => {
            this.mount = mount;
          }}
        />
      </main>
    )
  }
}

FormUserPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      casename: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(FormUserPage);