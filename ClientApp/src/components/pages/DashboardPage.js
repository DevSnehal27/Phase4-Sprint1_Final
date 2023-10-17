import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import logo from "./logo.png";
import PesterupdatedLog from "./PesterUpdatedLogo.svg";
import FormUserPage1 from "./FormUser/FormUser1";
import PaletteDesignerPage from "./FormUser/PaletteDesigner";
import { useState } from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import IconButton from '@mui/material/IconButton';
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  DeleteOutline, EditOutlined, CloudDownloadOutlined,
} from "@material-ui/icons";
import { FileDownload } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import { RadioGroup, Radio } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Dropdown } from "semantic-ui-react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import { FormGroup, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import { Select, MenuItem } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import TranslateIcon from "@mui/icons-material/Translate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CaseDesign from "./DashboardPage_UI/Case_Design";
import PalletDesign from './DashboardPage_UI/Pallet_Design';
import CompareCase from './DashboardPage_UI/CompareCase';
import ComparePallet from './DashboardPage_UI/ComparePallet';
import HelpMaual from "../../HelpMamual";
toast.configure();

var color1 = "#f5f5f5";
let arrayData = [];
let arrayData1 = [];

const useStyles = (theme) => ({
  table: {
    minWidth: 650,
    fontFamily: "Roboto",
    display: "flex",
  },
  tableHead: {
    display: "flex",
    fontFamily: "Roboto",
    flexDirection: "column",
  },
  tableBody: {
    display: "flex",
    fontFamily: "Roboto",
  },
  tableRow: {
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "#f2f2f2",
    },

    display: "flex",
    fontFamily: "Roboto",
    flexDirection: "column",
  },
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
    border: "1px dashed",
  },
  textField: {
    marginLeft: 2,
    marginRight: 2,
    fontSize: 12,
  },
  textField5: {
    marginLeft: 2,
    marginRight: 2,
    fontSize: 12,
  },
  textField1: {
    marginLeft: 2,
    marginRight: 2,
    width: 18,
    fontSize: 12,
  },
  textField2: {
    marginLeft: 2,
    marginRight: 2,
    width: 100,
    fontSize: 12,
  },
  textField3: {
    marginLeft: 2,
    marginRight: 2,
    height: 27,
    width: 120,
    fontSize: 12,
  },
  radioLabel: {
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 18,
    fontSize: 12,
  },
  dense: {
    marginTop: 16,
  },
  scrollable: {
    maxHeight: "0vh",
    overflow: "auto",
  },
  menu: {
    width: 200,
  },
  /* STYLES FOR THE OUTLINE BORDER */
  specialOutline: {
    borderColor: "pink",
    borderWidth: 4,
  },
});

const threedwidth = 791;
const threedheight = 372;
const widgetwidth = 526;
const paddingadjust = 0;
const styles = {
  listItem: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginLeft: "-8px",
    textAlign: "left",
  },
};

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectDropdown: "admin_pallet",
      checkforimport: false,
      checkforDropdown: false,
      checkforDropdownforsaveasPallet: false,
      checked: [],
      palletChecked: [],
      item: "",
      item1: "",
      item2: "",
      item3: "",
      item4: "",
      item5: "",
      id: "",
      pId: "",
      AllPid: [],
      Allcases: [],
      caseRename: "",
      caseSave: "",
      PalletRename: "",
      PalletSaveAs: "",
      caseName: "",
      palletName: "",
      palletnames: [],
      pallets: [],
      threedcases: [],
      threedRows: [],
      palletRows: [],
      casenames: [],
      imprtData: [],
      role: "guest",
      selectcase: "",
      importCase: "",
      compareAddCase: "",
      compareSaveCase: "",
      compareAddPallet: "",
      compareSavePallet: "",
      compareValues: [],
      importFile: [],
      importFilePallet: [],
      caseImport: "",
      casepallet: "",

      selectpallet: "",
      operationCompleted: false,
      operation: "",
      expanded: "",
      panelname: "",
      threedcases: [],
      imprtData1: [],
      imprtData2: [],
      threedPallet: [],
      localFiles: ["en", "de"]
    };
    // this.threedcases = [];
    this.threedpallet = [];
    this.Allcases = [];
    this.casenames = [];
    this.imprtData1 = [];
    this.imprtData2 = [];
    this.compareValues = [];
    this.importFile = [];
    this.importFilePallet = [];
    this.palletnames = [];
    this.updatedCheckedState = [];
    this.AllPid = [];
    this.handleSelectionRename = this.handleSelectionRename.bind(this);
    this.importFilePalletToDB = this.importFilePalletToDB.bind(this);
    this.ImporthandleSelection = this.ImporthandleSelection.bind(this);
    this.ImporthandleSelectionForPalletFile = this.ImporthandleSelectionForPalletFile.bind(this);
    this.handleSelectionFileImport = this.handleSelectionFileImport.bind(this);
    this.handleSelectionSaveAs = this.handleSelectionSaveAs.bind(this);
    this.handleSelectionPalletRename = this.handleSelectionPalletRename.bind(this);
    this.handleSelectionPalletSaveAS = this.handleSelectionPalletSaveAS.bind(this);
    this.RenamePallet = this.RenamePallet.bind(this);
    this.SaveAsPallet = this.SaveAsPallet.bind(this);
    this.RenameCase = this.RenameCase.bind(this);
    this.SaveCase = this.SaveCase.bind(this);
    this.VerifyOldCaseAndNewCase = this.VerifyOldCaseAndNewCase.bind(this);
    this.VerifyOldPalletAndPallet = this.VerifyOldPalletAndPallet.bind(this);

    this.firstEvent = this.firstEvent.bind(this);
    this.secondEvent = this.secondEvent.bind(this);
    this.palletEvent = this.palletEvent.bind(this);
    this.thirdEvent = this.thirdEvent.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.saveLabel = this.saveLabel.bind(this);
    this.deleteAllLabel = this.deleteAllLabel.bind(this);
    this.getAllLabels = this.getAllLabels.bind(this);
    this.initCases = this.initCases.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.getAuthInfo = this.getAuthInfo.bind(this);
    this.sleep = this.sleep.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.executeUserAction = this.executeUserAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.charallow = this.charallow.bind(this);
    this.charallowpallet = this.charallowpallet.bind(this);
    this.deleteOneCase = this.deleteOneCase.bind(this);
    this.deleteOnePallet = this.deleteOnePallet.bind(this);
    this.createThreedDataExport = this.createThreedDataExport.bind(this);
    this.createThreedData = this.createThreedData.bind(this);
    this.getPallets = this.getPallets.bind(this);
    this.downloadFilePallet = this.downloadFilePallet.bind(this);
    this.handleSelectionPallet = this.handleSelectionPallet.bind(this);
    this.executeUserActionPallet = this.executeUserActionPallet.bind(this);
    this.palletcharallow = this.palletcharallow.bind(this);
    this.deleteOnePallet = this.deleteOnePallet.bind(this);
    this.deleteAllPallet = this.deleteAllPallet.bind(this);
    this.addPallet = this.addPallet.bind(this);
    this.createPalletDataExport = this.createPalletDataExport.bind(this);
    this.handlexpand = this.handlexpand.bind(this);
    this.getImport = this.getImport.bind(this);
    this.getImport1 = this.getImport1.bind(this);

    this.initCases();
    this.toggle = false;
    this.tablecasenames = [];
    this.emailid = "xyz@gmail.com";
    this.username = "PeterPan";
    this.usergroup = "service";
    this.role = "guest";
    this.lcid = "1030";
    var auth = "xyz@gmail.com:guest";
    this.getAuthInfo();
    this.orgPalID = [];
    this.orgPalVal = [];
    this.pallets = [];
    this.setState({
      threedRows: [],
    });
  }

  initCases = async () => {
    // this.threedcases = [];
    this.state.threedcases = [];
    this.casenames = [];
    const records = await this.getAllLabels();

    let tempCaseNamesDuplicateCheck = [];

    for (let i = 0; i < records.length; i++) {
      tempCaseNamesDuplicateCheck.push(records[i].name);
    }

    for (var record of records) {
      let tempnamecount = 0;
      for (let i = 0; i < tempCaseNamesDuplicateCheck.length; i++) {
        if (tempCaseNamesDuplicateCheck[i] == record.name) {
          tempnamecount += 1;
        }
      }
      console.log("record.name = ", record.name, " count : ", tempnamecount);
      if (tempnamecount > 1) {
        if (record.labelname != null) {
          this.state.threedcases.push(record);
        }
      } else {
        this.state.threedcases.push(record);
      }

      if (this.casenames.length == 0) {
        this.casenames.push(record.name);
      } else {
        if (this.casenames.indexOf(record.name) > -1) {
          console.log("Case name already exists");
        } else {
          this.casenames.push(record.name);
        }
      }
    }

    if (this.casenames.length > 0 && this.state.checkforDropdown == false) {
      this.state.selectcase = this.casenames[0];
    }
    console.log("this.casenames inside initCases = ", this.casenames);
    this.setState({
      casenames: this.casenames,
    });

    const palletRecords = await this.getPallets();
    for (var record of palletRecords) {
      console.log("record.name = ", record.palletName);
      this.pallets.push(record);

      let plt = {
        id: record.palletId,
        value: record.palletName,
      };
      if (this.palletnames.length == 0) {
        this.palletnames.push(plt);
      } else {
        if (this.palletnames.indexOf(record.palletName) > -1) {
          console.log("Pallet name already exists");
        } else {
          this.palletnames.push(plt);
        }
      }
    }
    if (this.palletnames.length > 0 && this.state.role !== 'admin' && this.state.checkforDropdown == false) {
      this.setState({
        // selectpallet: this.palletnames[2].id,
        selectpallet: this.palletnames[2]?.id ?? null,
      });

    }
    if (this.palletnames.length > 0 && this.state.checkforDropdown == false && this.state.role === 'admin') {
      this.setState({
        selectpallet: this.palletnames[0].id,
      });
    }

    if (this.palletnames.length > 0 && this.state.checkforDropdownforsaveasPallet == true) {
      this.setState({
        selectpallet: this.palletnames[this.palletnames.length - 1].id,
      });
    }

    var clean;
    try {
      var arr = this.palletnames;
      clean = arr.filter(
        (arr, index, self) =>
          index === self.findIndex((t) => t.value === arr.value)
      );
      console.log("clean inside initCases = " + JSON.stringify(clean));
    } catch (e) {
      console.log("error inside initCases = " + e);
    }
    this.palletnames = [];
    this.palletnames = clean;
    if (this.palletnames.length > 0 && this.state.role !== 'admin' && this.state.checkforimport == true) {
      this.setState({
        selectpallet: this.palletnames[1]?.id ?? null,
      });
    }
    console.log("this.palletnames inside initCases = ", this.palletnames);
    this.setState({
      palletnames: this.palletnames,
      checkforDropdownforsaveasPallet: false
    });
  };

  getLocalization = async () => {
    try {
      await axios.get(`/Threed/getLocalizationFiles`).then((response) => {
        console.log(response.data, "getLocalizationFiles");
        if (response.data.length > -1) {
          let local = response.data.map((lang, i) => {
            return lang.name;
          })
          this.state.localFiles = [...local];
          this.setState({
            localFiles: [...local],
          })

          console.log("records inside getImport localFiles dashboard= ", this.state.localFiles);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getLocalization();
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "en");
      this.props.i18n.changeLanguage("en");
    } else {
      this.props.i18n.changeLanguage(localStorage.getItem("language"));
    }
    this.getImport();
    this.getImport1();
    this.timer = setInterval(() => {
      this.getLocalization();
      this.getImport();
      this.getImport1();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentDidUpdate(prevProps, prevState) {

    if (prevState.selectpallet !== this.state.selectpallet) {

      this.getPallets();
    }
  }


  componentWillMount() {
    this.props.i18n.changeLanguage(localStorage.getItem("language"));
  }




  saveLabel = (value) => {
    axios
      .post("/Threed", value)
      .then((response) => {
        console.log("Case is saved successfully");
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data) {
            console.log("Case save failure");
          }
        } else {
          console.log("Something went wrong. " + err);
        }
      });
  };
  handleSetLocalization = (e) => {

    localStorage.setItem("language", e.target.value);
    this.props.i18n.changeLanguage(e.target.value);

  };

  createThreedDataExport = (
    name,
    width,
    length,
    height,
    mass,
    material,
    labelname,
    labelcolour,
    typename,
    labelx,
    labely,
    labelwidth,
    labelheight,
    directionx,
    directiony,
    directionz,
    createdBy,
    createdDatetime,
    updatedBy,
    updatedDatetime
  ) => {
    return {
      name,
      width,
      length,
      height,
      mass,
      material,
      labelname,
      labelcolour,
      typename,
      labelx,
      labely,
      labelwidth,
      labelheight,
      directionx,
      directiony,
      directionz,
      createdBy,
      createdDatetime,
      updatedBy,
      updatedDatetime,
    };
  };

  createThreedData = (
    id,
    name,
    width,
    length,
    height,
    mass,
    material,
    labelname,
    labelcolour,
    typename,
    labelx,
    labely,
    labelwidth,
    labelheight,
    directionx,
    directiony,
    directionz,
    createdBy,
    createdDatetime,
    updatedBy,
    updatedDatetime
  ) => {
    return {
      id,
      name,
      width,
      length,
      height,
      mass,
      material,
      labelname,
      labelcolour,
      typename,
      labelx,
      labely,
      labelwidth,
      labelheight,
      directionx,
      directiony,
      directionz,
      createdBy,
      createdDatetime,
      updatedBy,
      updatedDatetime,
    };
  };

  createPalletData = (
    palletId,
    palletName,
    palletType,
    caseType,
    intermediateLayerWidth,
    intermediateLayerLength,
    intermediateLayerType,
    noOfLayers,
    casesSchemaA,
    layerSchemaA,
    casesSchemaB,
    layerSchemaB,
    casesSchemaC,
    layerSchemaC,
  ) => {
    return {
      palletId,
      palletName,
      palletType,
      caseType,
      intermediateLayerWidth,
      intermediateLayerLength,
      intermediateLayerType,
      noOfLayers,
      casesSchemaA,
      layerSchemaA,
      casesSchemaB,
      layerSchemaB,
      casesSchemaC,
      layerSchemaC,
    };
  };
  createPalletDataExport = (
    palletId,
    pallet_no,
    palletName,
    originPal1,
    originPal2,
    firstcasepal1,
    firstcasepal2,
    working_area_1_Width_X_Direction,
    working_area_1_Length_Y_Direction,
    working_area_1_Offset_X_Direction,
    working_area_1_Offset_Y_Direction,
    working_area_2_Offset_Y_Direction,
    working_area_2_Width_X_Direction,
    working_area_2_Length_Y_Direction,
    working_area_2_Offset_X_Direction,
    palletType,
    intermediateLayerType,
    caseType,
    noOfLayers,
    casesSchemaA,
    casesSchemaB,
    casesSchemaC,
    outsideLabelPriority,
    rule_symmetric_mass_distribution,
    horizontal_mass_distribution,
    vertical_mass_distribution,
    schemaA,
    schemaB,
    schemaC,
    layername,
    layerSequence,
    intermediatelayer,
    schema,
    pre_Pos_X,
    pre_Pos_Y,
    pre_Pos_Z,
    auto_generation,
    rotation,
    cases,
    offset_X_neg,
    offset_Y_neg,
    position,
    position_freezed
  ) => {
    return {
      palletId,
      pallet_no,
      palletName,
      originPal1,
      originPal2,
      firstcasepal1,
      firstcasepal2,
      working_area_1_Width_X_Direction,
      working_area_1_Length_Y_Direction,
      working_area_1_Offset_X_Direction,
      working_area_1_Offset_Y_Direction,
      working_area_2_Offset_Y_Direction,
      working_area_2_Width_X_Direction,
      working_area_2_Length_Y_Direction,
      working_area_2_Offset_X_Direction,
      palletType,
      intermediateLayerType,
      caseType,
      noOfLayers,
      casesSchemaA,
      casesSchemaB,
      casesSchemaC,
      outsideLabelPriority,
      rule_symmetric_mass_distribution,
      horizontal_mass_distribution,
      vertical_mass_distribution,
      schemaA,
      schemaB,
      schemaC,
      layername,
      layerSequence,
      intermediatelayer,
      schema,
      pre_Pos_X,
      pre_Pos_Y,
      pre_Pos_Z,
      auto_generation,
      rotation,
      cases,
      offset_X_neg,
      offset_Y_neg,
      position,
      position_freezed,
    };
  };
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  charallow(e) {
    const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\u261D|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]/;

    if (this.casenames.indexOf(e.target.value) > -1) {
      let { t } = this.props;


      toast.error(t('namealreadyexists'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });

      this.setState({
        item: "",
      });
    } else if (e.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
      let { t } = this.props;

      toast.error(t('allowedCharacters: _ # -'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item: "",
      });
    } else if (emojiRegex.test(e.target.value) && this.state.doubletoasthandelemoji == false) {

      let { t } = this.props;

      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item: "",

      });
    } else {
      this.setState({ item: e.target.value.trim() });

    }
  }

  charallowpallet(e) {
    const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\u261D|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]/;

    if (this.palletnames.indexOf(e.target.value) > -1) {
      let { t } = this.props;
      toast.error(t('namealreadyexists'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item1: "",
      });
    } else if (e.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {

      let { t } = this.props;

      toast.error(t('allowedCharacters: _ # -'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item1: "",
      });
    } else if (emojiRegex.test(e.target.value) && this.state.doubletoasthandelemoji == false) {      // Clear the textarea content
      let { t } = this.props;

      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item1: "",
      });
    }
    else {
      this.setState({ item1: e.target.value.trim() });

    }
  }

  firstEvent = (event) => {
    if (this.casenames.indexOf(event.target.value) > -1) {
      let { t } = this.props;
      toast.error(t('namealreadyexists'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });

      this.setState({
        item: "",
      });
    } else {
      this.setState({
        item: event.target.value,
      });
    }
  };

  secondEvent = () => {
    let inputValue = this.state.item;
    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
    if (!allowedCharactersRegex.test(inputValue)) {
      let { t } = this.props;
      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item: "",
      });
      return
    }
    if (this.state.item.trim() != "") {
      this.casenames.push(this.state.item);
      this.state.selectcase = this.state.item;
      this.setState({
        casenames: this.casenames,
      });
      this.setState({
        item: "",
      });
      axios
        .post("/Threed/addcase", {
          id: 0,
          name: this.state.selectcase,
        })
        .then((response) => {
          let data = response.data;
          console.log("data inside addCase " + JSON.stringify(data));
          this.setState({
            formClassName: "success",
            formSuccessMessage: response.data.msg,
          });

          let tempObj = {
            name: this.state.selectcase,
            length: 10,
            height: 10,
            width: 10,
            mass: 0,
            material: "Texture1",
            labelname: null,
            labelcolour: null,
            typename: null,
            labelx: null,
            labely: null,
            labelwidth: null,
            labelheight: null,
            directionx: null,
            directiony: null,
            directionz: null,
            createdBy: data.createdBy,
            createdDatetime: data.createdDatetime,
            updatedBy: data.updatedBy,
            updatedDatetime: data.updatedDatetime,
          };
          this.state.threedcases.unshift(tempObj);

        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data) {
              this.setState({
                formClassName: "warning",
                formErrorMessage: err.response.data.msg,
              });
            }
          } else {
            this.setState({
              formClassName: "warning",
              formErrorMessage: "Something went wrong. " + err,
            });
          }
        });
    } else {
      console.log("Case name is invalid");

      let { t } = this.props;

      toast.error(t('nameisinvalid'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
    }
  };

  palletEvent = () => {
    console.log("this.state.item1 inside palletEvent = " + this.state.item1);
    if (this.state.item1.trim() != "") {
      this.palletnames.push(this.state.item1);
      this.state.selectpallet = this.state.item1;
      this.setState({
        palletnames: this.palletnames,
      });
      this.setState({
        item1: "",
      });
    } else {
      console.log("Pallet name is invalid");
      let { t } = this.props;

      toast.error(t('nameisinvalid'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });

    }
  };

  addPallet = async () => {
    let inputValue = this.state.item1;
    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
    if (!allowedCharactersRegex.test(inputValue)) {
      let { t } = this.props;
      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item1: "",
      });
      return
    }
    if (this.state.item1.trim() !== "") {
      // Set the selected pallet name
      this.setState({
        selectpallet: this.state.item1,
        item1: "",
      });

      try {
        // Call the getDataset API
        const response = await axios.get("threed/getDataSet");
        const data = response.data;
        // console.log(data, 'dataset')

        // If the dataset is available, make the post request to save the pallet

        const saveResponse = await axios.post("/Threed/savePallet", {
          palletId: 0,
          palletName: this.state.selectpallet,
          originPal1: data.originPal1,
          originPal2: data.originPal2,
          firstcasepal1: data.firstcasepal1,
          firstcasepal2: data.firstcasepal2,
          working_area_1_Width_X_Direction:
            data.working_area_1_Width_X_Direction,
          working_area_1_Length_Y_Direction:
            data.working_area_1_Length_Y_Direction,
          working_area_1_Offset_X_Direction:
            data.working_area_1_Offset_X_Direction,
          working_area_1_Offset_Y_Direction:
            data.working_area_1_Offset_Y_Direction,
          working_area_2_Width_X_Direction:
            data.working_area_2_Width_X_Direction,
          working_area_2_Length_Y_Direction:
            data.working_area_2_Length_Y_Direction,
          working_area_2_Offset_X_Direction:
            data.working_area_2_Offset_X_Direction,
          working_area_2_Offset_Y_Direction:
            data.working_area_2_Offset_Y_Direction,
          working_area_1_Height_Z_Direction:
            data.working_area_1_Height_Z_Direction,
          working_area_2_Height_Z_Direction:
            data.working_area_2_Height_Z_Direction
        });
        const savedPallet = saveResponse.data;

        let plt = {
          id: savedPallet.palletId,
          value: savedPallet.palletName,
        };

        // Add the saved pallet to the state
        this.pallets.push(savedPallet);
        this.palletnames.push(plt);
        this.setState({
          palletnames: this.palletnames,
          selectpallet: plt.id,
          formClassName: "success",
          formSuccessMessage: saveResponse.data.msg,
        });
      } catch (err) {
        if (err.response) {
          if (err.response.data) {
            this.setState({
              formClassName: "warning",
              formErrorMessage: err.response.data.msg,
            });
          }
        } else {
          this.setState({
            formClassName: "warning",
            formErrorMessage: "Something went wrong. " + err,
          });
        }
      }
    } else {
      console.log("Pallet name is invalid");
      let { t } = this.props;

      toast.error(t('nameisinvalid'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
    }
  };

  palletcharallow(e) {
    const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\u261D|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]/;

    console.log("value inside palletcharallow" + e.target.value);
    let palletid = e.target.value;
    let palletTemp = this.palletnames;
    let palletnamesTemp = [];
    palletTemp.forEach(function (pallet, index) {
      palletnamesTemp.push(pallet.value);
    });
    if (palletnamesTemp.indexOf(e.target.value) > -1) {
      let { t } = this.props;


      toast.error(t('namealreadyexists'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });

      this.setState({
        item1: "",
      });
    } else if (e.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,.<>\/+?~`]/)) {
      let { t } = this.props;

      toast.error(t('allowedCharacters: _ # -'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });


      this.setState({
        item1: "",
      });
    } else if (emojiRegex.test(e.target.value) && this.state.doubletoasthandelemoji == false) {

      let { t } = this.props;

      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item1: "",

      });
    } else {
      this.setState({ item1: e.target.value.trim() });

    }
  }

  getAuthInfo = async () => {
    let id = 0;
    let auth = "";
    try {
      let resonse = await axios.get(`/Threed/getInfo1`);
      auth = resonse.data;
      console.log("resonse = ", resonse);
      console.log("auth = ", auth);
      let authArr = auth.toString().split(":");
      // this.emailid = authArr[0];
      this.username = authArr[0];
      this.role = authArr[1];
      this.usergroup = authArr[2];
      this.lcid = authArr[3];
      const role = this.role;
      console.log("this.emailid = ", this.emailid);
      console.log("this.role = ", this.role);
      this.setState({
        role: role,
      });
    } catch (err) {
      console.log(err);
    }
  };

  getAllLabels = async () => {
    let id = 0;
    let records = [];
    try {
      let resonse = await axios.get(`/Threed`);
      records = resonse.data;
      console.log("records = ", records);
      return records;
    } catch (err) {
      console.log(err);
    }
  };

  getImport = async () => {
    try {
      await axios.get(`/Threed/getFiles`).then((response) => {
        console.log(response.data, "getFiles");
        if (response.data.length > -1) {
          this.setState({
            imprtData1: response.data,
          });
          console.log("records inside getImport = ", this.state.imprtData1);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  getImport1 = async () => {
    try {
      await axios.get(`/Threed/getFilesForPallet`).then((response) => {
        console.log(response.data, "getFilesforpalleet");
        if (response.data.length > -1) {
          this.setState({
            imprtData2: response.data,
          });
          console.log("records inside getImport 2 = ", this.state.imprtData2);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  getPallets = async () => {
    let id = 0;
    let records = [];
    try {
      let resonse = await axios.get(`/Threed/getPallets`);
      records = resonse.data;
      this.setState({
        threedPallet: resonse.data
      })
      console.log("records = ", records);
      return records;
    } catch (err) {
      console.log(err);
    }
  };

  deleteAllPallet = async (namein) => {
    let id = 0;
    let errorShownFor = [];
    const records = await this.getPallets();
    for (var record of records) {
      console.log(record, "record");
      if (record.palletId === namein) {
        id = record.palletId;
        const url = "/Threed/deletePallet/" + id;
        await axios.delete(url, {})
          .then(() => {
          })
          .catch((err) => {
            if (err.response) {

              if (
                err.response &&
                err.response.status === 400 &&
                !errorShownFor.includes(record.palletId)
              ) {

                errorShownFor.push(record.palletId);

              }
            } else {
              this.setState({
                formClassName: "warning",
                formErrorMessage: "Something went wrong. " + err,
              });
            }
          });
      }
    }

    return "deleted";
  };

  deleteAllLabel = async (namein) => {
    let id = 0;
    const records = await this.getAllLabels();
    for (var record of records) {
      if (record.name === namein) {
        id = record.id;
        const url = "/Threed/" + id;
        axios.delete(url, {})
          .then((resp) => {
            this.updateTable();
          })
          .catch((err) => {
            if (err.response) {
              if (err.response.data) {
                this.setState({
                  formClassName: "warning",
                  formErrorMessage: err.response.data.msg,
                });
              }
            } else {
              this.setState({
                formClassName: "warning",
                formErrorMessage: "Something went wrong. " + err,
              });
            }
          });
      }
    }
    // this.initCases()
    return "deleted";
  };

  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  deleteOneCase = () => {
    const deletecasename = this.state.selectcase;
    const status = this.deleteAllLabel(deletecasename);
    this.sleep(2000);
    let casenamesTemp = this.casenames;
    casenamesTemp.forEach(function (casename, index) {
      if (casename === deletecasename) {
        //Remove from array
        casenamesTemp.splice(index, 1);
      }
    });
    this.casenames = casenamesTemp;
    this.state.threedcases.map(({ name }, index) => {
      console.log(name);
      if (deletecasename === name) {
        this.state.threedcases.splice(index, 1);
      }
    });
    if (this.casenames.length > 0) {
      this.state.selectcase = this.casenames[0];
    } else {
      this.state.selectcase = "";
    }
    this.updateTable();
    this.updatedCheckedState = [];
    this.setState({
      checked: [],
    });
  };

  deleteOnePallet = () => {
    const deletePallet = this.state.selectpallet;
    console.log(deletePallet)
    if (deletePallet === 462) {
      let { t } = this.props;
      toast.warn(t('thisdatasetcannotbedeleted'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return
    }
    const status = this.deleteAllPallet(deletePallet);
    this.sleep(2000);
    let palletsTemp = this.pallets;
    palletsTemp.forEach(function (id, index) {
      if (id.palletId === deletePallet) {
        //Remove from array
        palletsTemp.splice(index, 1);
      }
    });
    this.pallets = palletsTemp;
    this.pallets.map(({ id }, index) => {
      console.log(id);
      if (deletePallet === id) {
        this.pallets.splice(index, 1);
      }
    });

    let palletsTemp1 = this.palletnames;
    palletsTemp1.forEach(function (id, index) {
      if (id.palletId === deletePallet) {
        //Remove from array
        palletsTemp1.splice(index, 1);
      }
    });
    this.palletnames = palletsTemp1;
    this.palletnames.map(({ id }, index) => {
      console.log(id);
      if (deletePallet === id) {
        this.palletnames.splice(index, 1);
      }
    });
    console.log("palletsTemp1 inside deleteOnePallet = " + palletsTemp1);
    this.setState({
      palletnames: this.palletnames,
    });
    let palname = "";
    if (palletsTemp1.length > 0 && this.state.role == "admin") {
      this.state.selectpallet = palletsTemp1[0].id;
      palname = palletsTemp1[0].value;
    }
    else if (palletsTemp1.length > 0 && this.state.role == "regular") {
      this.state.selectpallet = this.palletnames[1]?.id ?? null;
      palname = palletsTemp1[1]?.value ?? null;
    }
    else {
      this.state.selectpallet = "";
      palname = "";
    }
    console.log("palname inside deleteOnePallet = " + palname);
    this.setState({
      pallet: palname,
    });
  };

  thirdEvent = () => {
    console.log("this.updatedCheckedState = ", this.updatedCheckedState);
    const names = [];
    console.log("this.casenames inside thirdEvent", this.casenames);
    this.updatedCheckedState.map((index) => {
      names.push(this.casenames[index]);
    });
    console.log("names inside thirdEvent", names);
    names.map((nameIn, indexin) => {
      console.log("nameIn inside thirdEvent", nameIn);
      const status = this.deleteAllLabel(nameIn);
      this.sleep(2000);
      let casenamesTemp = this.casenames;
      casenamesTemp.forEach(function (casename, index) {
        if (casename === nameIn) {
          //Remove from array
          casenamesTemp.splice(index, 1);
        }
      });
      this.casenames = casenamesTemp;
      console.log("casenamesTemp inside thirdEvent - after", casenamesTemp);
      console.log("this.casenames inside thirdEvent - after", this.casenames);
      this.state.threedcases.map(({ name }, index) => {
        console.log(name);
        if (nameIn === name) {
          this.state.threedcases.splice(index, 1);
        }
      });
    });
    this.updatedCheckedState = [];
    this.updateTable();
    // setChecked([]);
    this.setState({
      checked: [],
    });
  };

  updateTable = () => {
    let threedRowsTemp = [];
    threedRowsTemp.length = 0;
    console.log("threedRowsTemp inside updateTable beginning", threedRowsTemp);
    console.log(
      "this.updatedCheckedState inside updateTable beginning",
      this.updatedCheckedState
    );
    let counter = 1;
    this.updatedCheckedState.map((index) => {
      const casename = this.casenames[index];
      console.log("casename inside updateTable", casename);
      this.state.threedcases.map(({ name, labelname, ...rest }, index) => {
        console.log("name inside updateTable", name);

        console.log(
          "this.state.threedcases[index].labelname inside updateTable = ",

          labelname
        );

        if (
          casename === name &&
          labelname !== "Label0" &&
          !threedRowsTemp.some(
            (row) => row.name === name && row.labelname === labelname
          )
        ) {
          threedRowsTemp.push(
            this.createThreedData(
              "Label" + counter++,
              this.state.threedcases[index].name,
              this.state.threedcases[index].length,
              this.state.threedcases[index].height,
              this.state.threedcases[index].width,
              this.state.threedcases[index].mass,
              this.state.threedcases[index].material,
              this.state.threedcases[index].labelname,
              this.state.threedcases[index].labelcolour,
              this.state.threedcases[index].typename,
              this.state.threedcases[index].labelx,
              this.state.threedcases[index].labely,
              this.state.threedcases[index].labelwidth,
              this.state.threedcases[index].labelheight,
              this.state.threedcases[index].directionx,
              this.state.threedcases[index].directiony,
              this.state.threedcases[index].directionz,
              this.state.threedcases[index].createdBy,
              this.state.threedcases[index].createdDatetime,
              this.state.threedcases[index].updatedBy,
              this.state.threedcases[index].updatedDatetime
            )
          );
        }
      });
    });
    this.setState({
      threedRows: threedRowsTemp,
    });
    console.log("threedRowsTemp inside updateTable end", threedRowsTemp);
  };

  handleToggle = (value) => () => {
    console.log("Checkbox is clicked");

    this.state.threedRows = [];

    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // setChecked(newChecked);
    this.updatedCheckedState = newChecked;
    this.updateTable();
    console.log("newChecked = ", newChecked);
    console.log("this.state.checked = ", this.state.checked);
    this.setState({
      checked: newChecked,
    });
    // this.initCases();

  };

  updateTableForPallet = () => {
    let palletRowsTemp = [];
    palletRowsTemp.length = 0;
    console.log(this.state.threedPallet, "palletRowsTemp inside updateTable beginning", palletRowsTemp);
    console.log(
      "this.updatedCheckedState inside updateTable beginning",
      this.updatedCheckedState
    );
    if (this.state.role != "admin") {
      this.state.threedPallet = this.state.threedPallet.filter((pallet, i) => {
        console.log(pallet)
        if (pallet.palletId != 462) {
          return pallet
        }
      })
      this.palletnames = this.palletnames.filter((name, i) => {
        console.log(name)
        if (name.id != 462) {
          return name
        }
      })
    }
    let counter = 1;
    this.updatedCheckedState.map((index) => {
      const palletname = this.palletnames[index];
      console.log("palletName inside updateTable", palletname.value);
      this.state.threedPallet.map(({ palletName, pallet_no, ...rest }, index) => {
        console.log("name inside updateTable", palletName);

        console.log(
          "this.state.threedPallet[index].labelname inside updateTable = ",

          pallet_no
        );

        if (
          palletname.value === palletName &&
          pallet_no == 1 && //if we want to show both rowfrom db
          !palletRowsTemp.some(
            (row) => {
              console.log(row)
              row.palletName === palletName
              // && row.pallet_no === pallet_no
            }

          )
        ) {
          palletRowsTemp.push(
            this.createPalletData(
              // "pallet" + counter++,
              this.state.threedPallet[index].palletId,
              this.state.threedPallet[index].palletName,
              this.state.threedPallet[index].palletType,
              this.state.threedPallet[index].caseType,
              this.state.threedPallet[index].intermediateLayerWidth,
              this.state.threedPallet[index].intermediateLayerLength,
              this.state.threedPallet[index].intermediateLayerType,
              this.state.threedPallet[index].noOfLayers,
              this.state.threedPallet[index].casesSchemaA,
              this.state.threedPallet[index].layerSchemaA,
              this.state.threedPallet[index].casesSchemaB,
              this.state.threedPallet[index].layerSchemaB,
              this.state.threedPallet[index].casesSchemaC,
              this.state.threedPallet[index].layerSchemaC,
            )
          );
        }
      });
    });
    this.setState({
      palletRows: palletRowsTemp,
    });
    console.log(this.state.palletRows, "palletRowsTemp inside updateTable end", palletRowsTemp);
  };

  handleToggleForPallet = (value) => () => {
    console.log("Checkbox is clicked", value);
    console.log("this.state.palletRows", this.state.palletRows);

    this.state.palletRows = [];
    console.log("this.state.palletRows", this.state.palletRows);

    const currentIndex = this.state.palletChecked.indexOf(value);
    const newChecked = [...this.state.palletChecked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // setChecked(newChecked);
    this.updatedCheckedState = newChecked;
    // this.updateTable();
    this.updateTableForPallet()
    console.log("newChecked = ", newChecked);
    console.log("this.state.palletChecked = ", this.state.palletChecked);
    this.setState({
      palletChecked: newChecked,
    });
    // // this.initCases();

  };

  downloadFile = async () => {
    let { t } = this.props;
    let threedRowsTemp = [];
    const casename = this.state.selectcase;
    this.state.threedcases.map(({ name }, index) => {
      if (this.state.role === "admin" || this.state.role === "regular")
        if (casename === name) {
          if (
            this.state.threedcases[index].labelname &&
            this.state.threedcases[index].labelname != "Label0" &&
            this.state.threedcases[index].labelname != ""
          ) {
            threedRowsTemp.push(
              this.createThreedDataExport(
                this.state.threedcases[index].name,
                this.state.threedcases[index].length,
                this.state.threedcases[index].height,
                this.state.threedcases[index].width,
                this.state.threedcases[index].mass,
                this.state.threedcases[index].material,
                this.state.threedcases[index].labelname,
                this.state.threedcases[index].labelcolour,
                this.state.threedcases[index].typename,
                this.state.threedcases[index].labelx,
                this.state.threedcases[index].labely,
                this.state.threedcases[index].labelwidth,
                this.state.threedcases[index].labelheight,
                this.state.threedcases[index].directionx,
                this.state.threedcases[index].directiony,
                this.state.threedcases[index].directionz,
                this.state.threedcases[index].createdBy,
                this.state.threedcases[index].createdDatetime,
                this.state.threedcases[index].updatedBy,
                this.state.threedcases[index].updatedDatetime
              )
            );
          }
        }
    });
    const fileName = this.state.selectcase;
    const json = JSON.stringify(threedRowsTemp);
    const blob = new Blob([json], { type: "application/json" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    toast.success(t('casedetailsdownloaded'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    link.click();
    document.body.removeChild(link);
  };

  getPRC = async (palletid, pallet_no) => {
    // arrayData=[];
    console.log(
      "all pallets schema add:... " +
      (this.pallets[0].casesSchemaA +
        this.pallets[0].casesSchemaB +
        this.pallets[0].casesSchemaC)
    );
    await axios.get(`Threed/getPrc/` + palletid).then((resonse) => {
      let Prcrecord = resonse.data;
      let PrcrecordSortedArray = [];
      let pal1SchemaAtempRec = [];
      let pal1SchemaBtempRec = [];
      let pal1SchemaCtempRec = [];
      let pal2SchemaAtempRec = [];
      let pal2SchemaBtempRec = [];
      let pal2SchemaCtempRec = [];
      for (let i = 0; i < Prcrecord.length; i++) {
        if (Prcrecord[i].pallet == 1) {
          if (Prcrecord[i].schema == "Schema A") {
            if (!pal1SchemaAtempRec.includes(Prcrecord[i].cases)) {
              pal1SchemaAtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          } else if (Prcrecord[i].schema == "Schema B") {
            if (!pal1SchemaBtempRec.includes(Prcrecord[i].cases)) {
              pal1SchemaBtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          } else if (Prcrecord[i].schema == "Schema C") {
            if (!pal1SchemaCtempRec.includes(Prcrecord[i].cases)) {
              pal1SchemaCtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          }
        } else if (Prcrecord[i].pallet == 2) {
          if (Prcrecord[i].schema == "Schema A") {
            if (!pal2SchemaAtempRec.includes(Prcrecord[i].cases)) {
              pal2SchemaAtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          } else if (Prcrecord[i].schema == "Schema B") {
            if (!pal2SchemaBtempRec.includes(Prcrecord[i].cases)) {
              pal2SchemaBtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          } else if (Prcrecord[i].schema == "Schema C") {
            if (!pal2SchemaCtempRec.includes(Prcrecord[i].cases)) {
              pal2SchemaCtempRec.push(Prcrecord[i].cases);
              PrcrecordSortedArray.push(Prcrecord[i]);
            }
          }
        }
      }
      console.log("prc records inside getPRC = ", PrcrecordSortedArray);
      console.log(
        "prc records inside getPRC = ",
        JSON.stringify(PrcrecordSortedArray)
      );
      arrayData.push(PrcrecordSortedArray);
      let schemaArecords = PrcrecordSortedArray.filter(
        (item) => item.pallet === pallet_no && item.schema === schema[0]
      );
      let schemaBrecords = PrcrecordSortedArray.filter(
        (item) => item.pallet === pallet_no && item.schema === schema[1]
      );
      let schemaCrecords = PrcrecordSortedArray.filter(
        (item) => item.pallet === pallet_no && item.schema === schema[2]
      );
      console.log("schemaArecords inside getPRC =", schemaArecords);
      console.log("schemaBrecords inside getPRC =", schemaBrecords);
      console.log("schemaCrecords inside getPRC =", schemaCrecords);
      return [schemaArecords, schemaBrecords, schemaCrecords];
    });
  };

  getLayer = async (palletid, pallet_no) => {
    arrayData = [];
    let response = await axios.get(`Threed/getLayer/` + palletid);
    const layerrecord = response.data;
    console.log("records inside getLayer = ", JSON.stringify(layerrecord));
    // this.pallets.push(layerrecord);
    arrayData.push(layerrecord);
    // console.log("this.pallets 2 " + JSON.stringify(this.pallets));
    let found = layerrecord.filter((item) => item.pallet_no === pallet_no);
    console.log("pallet_no inside getLayer = " + pallet_no);
    console.log("found getLayer " + JSON.stringify(found));
    return found;
  };

  downloadFilePallet = async (pallet_no) => {
    let { t } = this.props;
    let PalletRowsTemp = [];
    const pltid = this.state.selectpallet;

    var layerdate1 = await this.getLayer(pltid);
    console.log("response 1" + layerdate1);

    var casedate1 = await this.getPRC(pltid);
    console.log("response 2 " + casedate1);

    let records = []
    let response = await axios.get(`/Threed/getPallets`);
    records = response.data;
    try {
      this.pallets = records
      this.pallets.map((val, index) => {
        // console.log(val)
        if (this.state.role === "admin" || this.state.role === "regular")
          if (pltid === val.palletId) {
            PalletRowsTemp.push(
              this.createPalletDataExport(
                this.pallets[index].palletId,
                this.pallets[index].pallet_no,
                this.pallets[index].palletName,
                this.pallets[index].originPal1,
                this.pallets[index].originPal2,
                this.pallets[index].firstcasepal1,
                this.pallets[index].firstcasepal2,
                this.pallets[index].working_area_1_Width_X_Direction,
                this.pallets[index].working_area_1_Length_Y_Direction,
                this.pallets[index].working_area_1_Offset_X_Direction,
                this.pallets[index].working_area_1_Offset_Y_Direction,
                this.pallets[index].working_area_2_Width_X_Direction,
                this.pallets[index].working_area_2_Length_Y_Direction,
                this.pallets[index].working_area_2_Offset_X_Direction,
                this.pallets[index].working_area_2_Offset_Y_Direction,
                this.pallets[index].palletType,
                this.pallets[index].intermediateLayerType,
                this.pallets[index].caseType.split("_")[0],
                this.pallets[index].noOfLayers,
                this.pallets[index].casesSchemaA,
                this.pallets[index].casesSchemaB,
                this.pallets[index].casesSchemaC,
                this.pallets[index].outsideLabelPriority,
                this.pallets[index].rule_symmetric_mass_distribution,
                this.pallets[index].horizontal_mass_distribution,
                this.pallets[index].vertical_mass_distribution,
                this.pallets[index].schemaA,
                this.pallets[index].schemaB,
                this.pallets[index].schemaC,
                this.pallets[index].layername,
                this.pallets[index].layerSequence,
                this.pallets[index].intermediatelayer,
                this.pallets[index].schema,
                this.pallets[index].pre_Pos_X,
                this.pallets[index].pre_Pos_Y,
                this.pallets[index].pre_Pos_Z,
                this.pallets[index].auto_generation,
                this.pallets[index].cases,
                this.pallets[index].offset_X_neg,
                this.pallets[index].offset_Y_neg,
                this.pallets[index].position,
                this.pallets[index].position_freezed,
                this.pallets[index].rotation,
                this.pallets[index].createdBy,
                this.pallets[index].createdDate,
                this.pallets[index].updatedBy,
                this.pallets[index].updatedDate
              )
            );
          }
      });

      const name = PalletRowsTemp.map((name) => {
        return name.palletName
      })
      const fileName = name[0];
      const outputjason = PalletRowsTemp.concat(arrayData);
      console.log("outputjason " + JSON.stringify(outputjason));
      const json1 = JSON.stringify(outputjason);
      const blob = new Blob([json1], { type: "application/json" });
      const href = await URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.download = fileName + ".json";
      document.body.appendChild(link);
      toast.success(t('palletdetailsdownloaded'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.log("error inside downloadFilePallet = " + e);
    }
  };

  handleSelectionPalletRename = (event) => {
    const select = event.target.value;
    const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\u261D|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]/;
    this.setState({
      PalletRename: select,
    });

    if (event.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {

      let { t } = this.props;
      // alert(t('allowedCharacters: _ # -'));
      toast.error(t('allowedCharacters: _ # -'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item4: "",
        PalletRename: "",
      });
    } else if (emojiRegex.test(event.target.value) && this.state.doubletoasthandelemoji == false) {
      let { t } = this.props;
      // alert(t('allowedCharacters: _ # -'));
      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item4: "",
        PalletRename: "",
      });
    } else {
      this.setState({ item4: event.target.value });
    }
    console.log(select, "palletRename");
  };

  handleSelectionPalletSaveAS = (event) => {
    const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\u261D|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]/;
    const select = event.target.value;
    this.setState({
      PalletSaveAs: select,
      compareSavePallet: select,
    });


    if (event.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {

      let { t } = this.props;
      // alert(t('allowedCharacters: _ # -'));
      toast.error(t('allowedCharacters: _ # -'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });

      this.setState({
        item5: "",
        PalletSaveAs: "",
      });
    } else if (emojiRegex.test(event.target.value) && this.state.doubletoasthandelemoji == false) {
      let { t } = this.props;
      // alert(t('allowedCharacters: _ # -'));
      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        item5: "",
        PalletSaveAs: "",
        // doubletoasthandelemoji: true,
      });
    } else {
      this.setState({ item5: event.target.value });
    }
    console.log(select, "saveaspallet");
  };

  handleSelectionRename = (event) => {
    const select = event.target.value;
    if (this.casenames.indexOf(event.target.value) > -1) {
      let { t } = this.props;

      // alert(t('namealreadyexists'));
      toast.error(t('namealreadyexists'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });

      this.setState({
        item2: "",
        caseRename: ""
      });
    }
    else {
      this.setState({
        caseRename: select,
      });
      //


      if (event.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
        let { t } = this.props;
        // alert(t('allowedCharacters: _ # -'));
        toast.error(t('allowedCharacters: _ # -'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        this.setState({
          item2: "",
          caseRename: "",
        });
      }
       else {
        this.setState({ item2: event.target.value });
        // this.setState({ item: e.target.value.replace(/[^a-zA-Z0-9-#_]/ig, '') });
      }




      console.log(select, "caseRename");
    }
  };

  handleSelectionSaveAs = (event) => {
 
    const select = event.target.value;
    this.setState({
      caseSave: select,
      compareSaveCase: select,
    });
    if (event.target.value.match(/[!@$%^&*()\=\[\]{};':"\\|,~`.<>\/+?]/)) {
      let { t } = this.props;
      // alert(t('allowedCharacters: _ # -'));
      toast.error(t('allowedCharacters: _ # -'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
      this.setState({
        item3: "",
        caseSave: "",
      });
    } 
   
    else {
      this.setState({ item3: event.target.value });
    }
    console.log(select, "Saveas");
  };

  handleSelection = (event) => {
    const selected = event.target.value;
    console.log("selected label = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      selectcase: selected,
      compareAddCase: selected,
    });
  };

  ImporthandleSelection = async (event) => {
    const selected = event.target.value;
    console.log("selectedlabel = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      caseImport: selected,
    });
    await axios
      .get(`threed/getCaseContents?Filename=${selected}`)
      .then((response) =>
        this.setState({
          importFile: response.data,
        })
      );
    // if (selected) {
    //   this.getCaseFileContent();
    // }
  };
  ImporthandleSelectionForPalletFile = async (event) => {
    const selected = event.target.value;
    console.log("selectedlabel = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      casepallet: selected,
    });
    await axios
      .get(`threed/getPalletContents?Filename=${selected}`)
      .then((response) =>
        this.setState({
          importFilePallet: response.data,
        })
      );
    // if (selected) {
    //   this.getCaseFileContent();
    // }
  };
  handleSelectionFileImport = (event) => {
    const selected = event.target.value;
    console.log("selectedimport = ", selected);
    // this.dropdownCallback(selected);
    this.setState({
      importCase: selected,
    });
  };

  handleSelectionPallet = (event) => {
    const selected = event.target.value;
    // console.log("selected label = ", selected);
    // // this.dropdownCallback(selected);
    // const id = selected;
    // axios.get(`/threed/Getpalletdropdown/${id}`).then((resp) => {
    //   const result = resp.data;
    //   console.log(result.palletName)
    //   this.setState(({
    //     selectDropdown: result.palletName
    //   }))
    // })

    this.setState({
      selectpallet: selected,
      compareAddPallet: selected,
    });
  };

  SaveCase = async () => {
    this.setState({
      checkforDropdown: true,
    })
    const caseSave = this.state.caseSave.trim();
    //to include everything after # we use encodeURIComponent
    const name = encodeURIComponent(this.state.selectcase);
    console.log(this.state.caseSave, "saveas");

    let { t } = this.props;
    if (!caseSave) {
      return toast.error(t('valuerequired'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
    if (!allowedCharactersRegex.test(caseSave)) {
      let { t } = this.props;
      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        caseSave: "",
      });
      return
    }

    await axios
      .post(`/threed/savecase/${name}`, { Name: caseSave })
      .then((response) => {
        if (response.data) {
          this.state.selectcase = caseSave;
          this.VerifyOldCaseAndNewCase();
          this.initCases();
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          let { t } = this.props;

          toast.error(t('namealreadyexists'), {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    this.setState({
      caseSave: "",
    });
  };

  VerifyOldCaseAndNewCase = () => {

    const comparecase = this.state.casenames && this.state.threedRows &&
      this.state.threedRows.filter((item) => item.name === this.state.compareAddCase);

    const comparesave = this.state.casenames && this.state.threedRows &&
      this.state.threedRows.filter((item) => item.name === this.state.compareSaveCase);

    console.log("Inside VerifyOldCaseAndNewCase comparecase = " + JSON.stringify(comparecase) + " comparesave = " + JSON.stringify(comparesave));
    const isSame = JSON.stringify(comparecase) === JSON.stringify(comparesave);
    console.log("Inside VerifyOldCaseAndNewCase isSame = " + isSame);

    if (isSame) {
      let { t } = this.props;
      toast.info(t('dataiscomparedandverifiedsuccessfully'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    }
    else {
      let { t } = this.props;
      toast.info(t('Comparedatasetsandcheckforerrorfailed'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    }
  };

  RenameCase = async () => {
    this.setState({
      checkforDropdown: true
    })
    const id = this.state.id;
    //to include everything after # we use encodeURIComponent
    const name = encodeURIComponent(this.state.selectcase);
    const caseRename = this.state.caseRename.trim();
    let { t } = this.props;
    if (!caseRename) {
      return toast.error(t('valuerequired'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
    if (!allowedCharactersRegex.test(caseRename)) {
      let { t } = this.props;
      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        caseRename: "",
      });
      return
    }
    
    

    await axios
      .put(`/threed/renamecase/${name}`, { Name: caseRename })
      .then((response) => {
        console.log("display data ", this.renamecase);
        if (response.data) {

          this.state.selectcase = caseRename;

          const updatedItem = response.data[0];

          this.setState(prevState => {
            const updatedThreedCases = prevState.threedcases.map(item => {
              if (item.name === prevState.selectcase) {
                return updatedItem;
              } else {
                return item;
              }
            });

            const updatedThreedRows = prevState.threedRows.map(row => {
              if (row.name !== prevState.selectcase) {
                return {
                  ...row,
                  name: updatedItem.name,
                  updatedDatetime: updatedItem.renamed_datetime
                };
              } else {
                return row;
              }
            });

            return {
              threedcases: updatedThreedCases,
              threedRows: updatedThreedRows
            };
          });
          this.initCases();
        }
        toast.info(t('renamedsuccessfully'), {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        let { t } = this.props;

        if (err.response && err.response.status === 400) {
          toast.error(t('namealreadyexists'), {
            position: toast.POSITION.TOP_CENTER, autoClose: 2000
          });

        }
      });
    this.setState({
      caseRename: "",
    });
  };

  RenamePallet = async () => {
    this.setState({
      checkforDropdown: true,
    })
    let { t } = this.props;
    // const PalletRename = this.state.PalletRename;
    const id = this.state.selectpallet;
    const { palletnames, PalletRename, selectpallet } = this.state;
    if (!PalletRename) {
      let { t } = this.props;
      return toast.error(t('pleasespecifyanewname'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
    if (!allowedCharactersRegex.test(PalletRename)) {
      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        PalletRename: "",
      });
      return
    }
    if (id == 462) {
      let { t } = this.props;
      toast.error(t('adminpalletcannotberenamed'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      this.setState({
        PalletRename: "",
      });
      return
    }
    await axios
      .put(`threed/renamepallet/${id}`, { PalletName: PalletRename.trim() })
      .then((response) => {
        if (response.data) {
          const updatePalletTableName = response.data[0]
          this.setState(prevState => {

            const updatedPalletRows = prevState.palletRows.map(row => {
              if (row.palletId === id) {
                return {
                  ...row,
                  palletName: updatePalletTableName.palletName,
                };
              } else {
                return row;
              }
            });

            return {
              palletRows: updatedPalletRows,
            };
          });
          this.state.selectpallet = id;
          this.palletnames = [];
          toast.info(t('renamedsuccessfully'), {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000
          });

          this.initCases();
        }
      })
      .catch((err) => {
        let { t } = this.props;

        if (err.response && err.response.status === 400) {
          toast.error(t('namealreadyexists'), {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    this.setState({
      PalletRename: "",
    });
  };

  importData = async () => {
    const dataArray = this.state.importFile;
    let { t } = this.props;
    if (dataArray.length == 0) {
      return toast.error(t('PleaseSelectFile'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    // Send a GET request to retrieve all the data items from the server
    axios
      .get("/threed")
      .then((response) => {
        const dataItems = response.data;
        console.log(dataItems);
        // Iterate over each item in the dataArray
        dataArray.forEach((dataItem) => {
          let payload = {
            name: dataItem.name,
            width: dataItem.height,
            length: dataItem.width,
            height: dataItem.length,
            mass: dataItem.mass,
            material: dataItem.material,
            labelname: dataItem.labelname,
            labelcolour: dataItem.labelcolour,
            typename: dataItem.typename,
            labelx: dataItem.labelx,
            labely: dataItem.labely,
            labelwidth: dataItem.labelwidth,
            labelheight: dataItem.labelheight,
            directionx: dataItem.directionx,
            directiony: dataItem.directiony,
            directionz: dataItem.directionz,
            line_rotation: dataItem.line_rotation ? dataItem.line_rotation : "Vertical",
            line_position: dataItem.line_position ? dataItem.line_position : "Topside",
          };
          // Check if a data item with the same labelname and casename already exists
          const matchingItem = dataItems.find(
            (item) =>
              item.labelname === dataItem.labelname &&
              item.name === dataItem.name
          );

          if (matchingItem) {
            let { t } = this.props;
            console.log(matchingItem.labelname);

            axios

              .put(`/threed/importforCase1/${matchingItem.id}`, payload)

              .then((response) => {
                console.log(response.data);
                this.initCases();
                toast.info(t('datasetsuccessfullyimported'), {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            let { t } = this.props;
            // Data item does not exist, make a POST request to create it
            axios
              .post("/threed/addcase", payload)
              .then((response) => {
                this.initCases();
                toast.info(t('datasetsuccessfullyimported'), {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  importFilePalletToDB = async () => {
    this.setState({
      checkforimport: true
    })
    let { t } = this.props;
    const dataArray = this.state.importFilePallet;
    const response = await axios.get(`/threed/adminpallet/${462}`);
    const adminPallet = {
      "originPal1": response.data.originPal1,
      "originPal2": response.data.originPal1,
      "firstcasepal1": response.data.firstcasepal1,
      "firstcasepal2": response.data.firstcasepal2,
      "working_area_1_Width_X_Direction": response.data.working_area_1_Width_X_Direction,
      "working_area_1_Length_Y_Direction": response.data.working_area_1_Length_Y_Direction,
      "working_area_1_Offset_X_Direction": response.data.working_area_1_Offset_X_Direction,
      "working_area_1_Offset_Y_Direction": response.data.working_area_1_Offset_Y_Direction,
      "working_area_2_Width_X_Direction": response.data.working_area_2_Width_X_Direction,
      "working_area_2_Length_Y_Direction": response.data.working_area_2_Length_Y_Direction,
      "working_area_2_Offset_X_Direction": response.data.working_area_2_Offset_X_Direction,
      "working_area_2_Offset_Y_Direction": response.data.working_area_2_Offset_Y_Direction,
    };
    if (dataArray.length == 0) {
      return toast.error(t('PleaseSelectFile'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    const dataItems = dataArray.slice(0, 1); // extracts first two elements
    dataItems.forEach((dataItem) => {
      dataItem = {
        ...dataItem,
        originPal1: adminPallet.originPal1,
        originPal2: adminPallet.originPal2,
        firstcasepal1: adminPallet.firstcasepal1,
        firstcasepal2: adminPallet.firstcasepal2,
        working_area_1_Width_X_Direction: adminPallet.working_area_1_Width_X_Direction,
        working_area_1_Length_Y_Direction: adminPallet.working_area_1_Length_Y_Direction,
        working_area_1_Offset_X_Direction: adminPallet.working_area_1_Offset_X_Direction,
        working_area_1_Offset_Y_Direction: adminPallet.working_area_1_Offset_Y_Direction,
        working_area_2_Width_X_Direction: adminPallet.working_area_2_Width_X_Direction,
        working_area_2_Length_Y_Direction: adminPallet.working_area_2_Length_Y_Direction,
        working_area_2_Offset_X_Direction: adminPallet.working_area_2_Offset_X_Direction,
        working_area_2_Offset_Y_Direction: adminPallet.working_area_2_Offset_Y_Direction,
      };
      axios
        .get(`/threed/getPallet/${dataItem.palletName}`)
        .then((response) => {
          if (response.data.length > 0) {
            // Data item already exists, make a PUT request to update it
            axios
              .put(`/threed/importForPallet/${dataItem.palletName}`, dataItem)
              .then((response) => {
                console.log(response.data);
                this.initCases();
                toast.info(t('datasetsuccessfullyimported'), {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            // Data item does not exist, make a POST request to create it
            axios
              .post("/threed/savePallet", dataItem)
              .then((response) => {
                this.initCases();
                toast.info(t('datasetsuccessfullyimported'), {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  VerifyOldPalletAndPallet = () => {

    const comparecase = this.state.casenames && this.state.threedRows &&
      this.state.threedRows.filter((item) => item.name === this.state.compareAddCase);

    const comparesave = this.state.casenames && this.state.threedRows &&
      this.state.threedRows.filter((item) => item.name === this.state.compareSaveCase);

    console.log("Inside VerifyOldPalletAndPallet comparecase = " + JSON.stringify(comparecase) + " comparesave = " + JSON.stringify(comparesave));
    const isSame = JSON.stringify(comparecase) === JSON.stringify(comparesave);
    console.log("Inside VerifyOldPalletAndPallet isSame = " + isSame);

    if (isSame) {
      let { t } = this.props;
      toast.info(t('dataiscomparedandverifiedsuccessfully'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    }
    else {
      let { t } = this.props;
      toast.info(t('Comparedatasetsandcheckforerrorfailed'), { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    }
  };
  SaveAsPallet = async () => {
    this.setState({
      checkforDropdownforsaveasPallet: true,
    })
    let { t } = this.props;
    const id = this.state.selectpallet;
    const PalletName = this.state.PalletSaveAs;
    if (!PalletName) {
      return toast.error(t('pleasespecifyaname'), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
    if (!allowedCharactersRegex.test(PalletName)) {
      let { t } = this.props;
      toast.error(t('EmojisAreNotAllowed'), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      this.setState({
        PalletSaveAs:" ",
      });
      return
    }
    axios
      .post(`/threed/savepallet/${id}`, { palletName: PalletName.trim() })
      .then((response) => {
        if (response.data) {
          this.VerifyOldPalletAndPallet();
          this.initCases();
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          let { t } = this.props;

          toast.error(t('namealreadyexists'), {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
    this.setState({
      PalletSaveAs: "",
    });
  };

  executeUserAction = (operation) => {
    console.log("operation = ", operation);
    if (operation === "addCase") {
      this.secondEvent();
    } else if (operation === "editCase") {
      let casename = "";
      casename = this.state.selectcase;
      console.log("casename.. " + casename);
      if (casename.includes("#")) {
        var values = casename;
        casename = values.replaceAll("#", "$");
        console.log("replaced case: " + casename);
      }
      console.log("this.casename", casename);
      const path = "/profile1/" + casename;
      console.log("Path is " + path);
      this.props.history.push(path);
    } else if (operation === "Rename") {
      this.RenameCase();
    } else if (operation === "SaveAs") {
      this.SaveCase();
    } else if (operation === "deleteCase") {
      this.deleteOneCase();
    } else if (operation === "exportData") {
      this.downloadFile();
    } else if (operation === "ImportData") {
      console.log("operation inside executeUserAction1 = " + operation);
      this.importData();
    }


    this.setState({
      operationCompleted: true,
    });
  };

  executeUserActionPallet = (operation) => {
    let { t } = this.props;
    console.log("operation = ", operation);
    if (operation === "addPallet") {
      this.addPallet();
    } else if (operation === "editPallet") {
      let palletid = 0;
      let palletname = "";
      palletid = this.state.selectpallet;
      console.log("Pallet id.. " + palletid);

      if (palletid === 462 && this.state.role !== "admin") {
        toast.warn(t('writeaccessonlywithadminaccount'), {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        return;
      }
      if (palletid === 462 && this.state.role === "admin") {
        const path = "/palette/" + palletid;
        console.log("Path is " + path);
        this.props.history.push(path);
      } else {

        const path = "/palette/" + palletid;
        console.log("Path is " + path);
        this.props.history.push(path);
      }
    } else if (operation === "RenamePallet") {
      this.RenamePallet();
    } else if (operation === "SaveAsPallet") {
      this.SaveAsPallet();
    } else if (operation === "deletePallet") {
      this.deleteOnePallet();
    } else if (operation === "exportPalletData") {
      this.downloadFilePallet();
    } else if (operation === "ImportData2") {
      this.importFilePalletToDB();
    }


    this.setState({
      operationCompleted: true,
    });
  };


  handlexpand = (name) => {
    if (this.state.panelname != name) {
      this.state.panelname = name;
      console.log("name inside handleChangepanel if = " + this.state.panelname);
    } else {
      this.state.panelname = "";
      console.log("name inside handleChangepanel = " + this.state.panelname);
    }

    this.setState({
      expanded: this.state.panelname,
    });
  };
  render() {
    const { classes } = this.props;
    const {
      item,
      item1,
      caseName,
      palletName,
      imprtData1,
      imprtData2,
    } = this.state;

    console.log(imprtData1, "render imparetData");
    console.log(imprtData2, "render imparetData");

    this.state.casenames = this.casenames;

    console.log(this.state.palletnames, "this.state.palletnames");
    if (this.state.role !== "admin") {
      this.state.palletnames = this.palletnames.filter((name, i) => {
        if (name.id != 462) {
          console.log(name)
          return name.value
        }
      })
    }
    console.log(this.state.palletnames, "this.state.palletnames");

    this.tablecasenames = [];
    this.tablePalletNames = [];

    this.toggle = false;
    const role = this.state.role;
    console.log("role under render = ", role);
    console.log("this.props dashboard = ", this.props);
    let casename = "";
    let palletname = "";
    console.log("this.state.checked under render = ", this.state.checked);
    console.log("this.state.threedRows under render = ", this.state.threedRows);
    if (this.state.checked.length === 1) {
      const index = this.state.checked[0];
      this.state.caseName = this.casenames[index];
      casename = this.state.caseName;
    }

    const path = "/profile1/" + casename;
    const { t } = this.props; // localization
    console.log("this is", this);
    return (
      <div className="parent">

        <div>
          <nav className="header navbar navbar-expand-md navbar-light bg-light" style={{ display: "flex", flexDirection: "row",padding: "1%" }}>


            <Link to="/" className="navbar-brand" disabled={true} style={{marginLeft:"1%"}}>
              <div style={{ cursor: "default", }} disabled={true}>{t("3dCaseDesign")}</div>
            </Link>
            <div style={{ marginLeft: "auto" }}>

              <Button className="Activeuserbtn" startIcon={<PermIdentityIcon sx={{ fontSize: 33 }} />}>

                <Typography className="Activeusertxt" >{this.username}</Typography>
              </Button>


              <Button className="Activeuserbtn" startIcon={<PeopleAltOutlinedIcon sx={{ fontSize: 33 }} />}>

                <Typography className="Activeusertxt">{this.state.role}</Typography>
              </Button>
              <FormControl
                id="localizationDropdown"
                sx={{ width: 50, marginLeft: "" }}
                style={{ display: "inline", paddingLeft: "8px" }}
              >
                <Select
                  onChange={(e) => {
                    this.handleSetLocalization(e);
                    // e.target.blur();
                  }}
                  defaultValue={
                    localStorage.getItem("language")
                  }
                  disableUnderline
                >
                  {this.state.localFiles.map((lang, index) => {

                    return <MenuItem value={lang}>{lang}</MenuItem>

                  })}

                </Select>
              </FormControl>


            </div>

          </nav>

          <Route
            path="/profile1/:casename"
            component={<FormUserPage1 casename={casename} />}
          />
          <Route
            path="/palette/:palletid"
            component={<PaletteDesignerPage />}
          />
        </div>

        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          spacing={0}
          fontFamily="Roboto"
        >
          <div
            className="parent"
            style={{
              width: "100%",
              height: "87.3vh",
              display: "flex",
              flexDirection: "row",
            }}
          >


            <Grid
              container
              xs={5}
              sm={6}
              md={5}
              lg={5}
              spacing={1}
              fontFamily="Roboto"
              style={{
                backgroundColor: "white",
                overflow: "auto",
                marginRight: "4px",
                marginLeft: "18px",
                paddingLeft: "3px",
                paddingRight: "7px",
                marginTop: "9px",
                marginBottom: "9px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                width={widgetwidth}
                style={{ width: "100%", color: "white", overflow: "hidden" }}
              >

                <CompareCase

                  expanded_panel={this.state.expanded}
                  handlexpand={this.handlexpand}
                  handleToggle={this.handleToggle}
                  S_casenames={this.state.casenames}
                  S_checked={this.state.checked}
                  styles={styles}
                  t={t}
                />

                <ComparePallet
                  expanded_panel={this.state.expanded}
                  handlexpand={this.handlexpand}
                  handleToggle={this.handleToggleForPallet}
                  S_palletnames={this.state.palletnames}
                  S_checked={this.state.palletChecked}
                  role={this.state.role}
                  styles={styles}
                  t={t}
                />


                <CaseDesign
                  expanded_panel={this.state.expanded}
                  handlexpand={this.handlexpand}
                  S_operation={this.state.operation}
                  executeUserAction={this.executeUserAction}
                  S_item={this.state.item}
                  charallow={this.charallow}
                  S_selectcase={this.state.selectcase}
                  handleSelection={this.handleSelection}
                  S_casenames={this.state.casenames}
                  S_caseRename={this.state.caseRename}
                  handleSelectionRename={this.handleSelectionRename}
                  role={this.role}
                  S_caseSave={this.state.caseSave}
                  handleSelectionSaveAs={this.handleSelectionSaveAs}
                  S_caseImport={this.state.caseImport}
                  ImporthandleSelection={this.ImporthandleSelection}
                  S_imprtData1={this.state.imprtData1}
                  classes={classes}

                  t={t}
                  color1={color1}
                />

                <PalletDesign
                  expanded_panel={this.state.expanded}
                  handlexpand={this.handlexpand}
                  S_operation={this.state.operation}
                  executeUserActionPallet={this.executeUserActionPallet}
                  classes={classes}
                  S_item1={this.state.item1}
                  palletcharallow={this.palletcharallow}
                  role={this.role}
                  S_selectpallet={this.state.selectpallet}
                  handleSelectionPallet={this.handleSelectionPallet}
                  S_palletnames={this.state.palletnames}
                  S_PalletRename={this.state.PalletRename}
                  handleSelectionPalletRename={this.handleSelectionPalletRename}
                  S_PalletSaveAs={this.state.PalletSaveAs}
                  handleSelectionPalletSaveAS={this.handleSelectionPalletSaveAS}
                  S_casepallet={this.state.casepallet}
                  ImporthandleSelectionForPalletFile={this.ImporthandleSelectionForPalletFile}
                  S_imprtData2={this.state.imprtData2}

                  t={t}
                  color1={color1}
                />
              </Grid>
            </Grid>



            <Grid
              container
              xs={7}
              sm={6}
              md={7}
              lg={7}
              spacing={0}
              fontFamily="Roboto"
              style={{
                display: "inline-flex",
                marginTop: "9px",
                marginBottom: "5px",
              }}
            >
              {
                this.state.panelname === ""||this.state.panelname === "panel2"||this.state.panelname === "panel3"
                  ? <Grid item style={{ width: "100%", height: "100%" }} >
                    <img style={{ width: "100%", height: "100%" }} src={PesterupdatedLog} alt="Pester Logo" />
                  </Grid> : null
              }
              {this.state.panelname === "panel1"
                ?
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className="table">
                    <TableContainer
                      component={Paper}
                      style={{
                        height: "84.5vh",
                        width: "100%",
                        right: "2px",
                        marginLeft: "0px",
                        fontFamily: "Roboto",
                        boxShadow: "none",
                      }}
                    >
                      <Table className={classes.table} aria-label="simple table">
                        <TableRow className={classes.tableRow}>

                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("name")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("height")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("length")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("width")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("Mass")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("Material")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("labelName")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("LabelColor")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("typename")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("labelWidth")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("labelLength")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("labelPositionA")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("labelPositionB")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("CreatedBy")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("CreatedDateTime")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("UpdatedBy")}
                          </TableCell>
                          <TableCell
                            style={{
                              fontFamily: "Roboto",
                              fontSize: 12,
                              width: 180,
                              height: 46,
                            }}
                            align="right"
                          >
                            {t("UpdatedDateTime")}
                          </TableCell>
                        </TableRow>
                        <TableBody className={classes.tableBody}>
                          {this.state.threedRows.map((row) => {
                            if (this.tablecasenames.length == 0) {
                              this.tablecasenames.push(row.name);
                              this.toggle = true;
                            } else {
                              if (this.tablecasenames.indexOf(row.name) > -1) {
                                console.log("Table case name already exists");
                              } else {
                                this.tablecasenames.push(row.name);
                                if (this.toggle == true) {
                                  this.toggle = false;
                                } else {
                                  this.toggle = true;
                                }
                              }
                            }
                            return (
                              <TableRow
                                style={{ marginTop: "3px" }}
                                selected={this.toggle}
                                className={classes.tableRow}
                                key={row.id}
                              >
                                <TableCell
                                  component="th"
                                  scope="row"
                                  style={{ fontFamily: "Roboto", fontSize: 12 }}
                                  align="right"
                                >
                                  {row.name}
                                </TableCell>

                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.height == null ? 10 : row.height}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.length == null ? 10 : row.length}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.width == null ? 10 : row.width}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.mass == null ? 0 : row.mass}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.material == null
                                    ? "Texture1"
                                    : row.material}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.labelname == null ? "N/A" : row.labelname}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.labelcolour == null
                                    ? "N/A"
                                    : row.labelcolour}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.typename == null ? "N/A" : row.typename}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.labelwidth == null
                                    ? "N/A"
                                    : row.labelwidth}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.labelheight == null
                                    ? "N/A"
                                    : row.labelheight}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.labelx == null ? "N/A" : row.labelx}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.labely == null ? "N/A" : row.labely}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.createdBy == null ? "N/A" : row.createdBy}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.createdDatetime == null
                                    ? "N/A"
                                    : row.createdDatetime}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.updatedBy == null ? "N/A" : row.updatedBy}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    width: 224,
                                    height: 46,
                                  }}
                                  align="right"
                                >
                                  {row.updatedDatetime == null
                                    ? "N/A"
                                    : row.updatedDatetime}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </Grid>

                : null
              }


              {
                this.state.panelname == "panel0" ?

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className="table">
                      <TableContainer
                        component={Paper}
                        style={{
                          width: "100%",
                          right: "2px",
                          marginLeft: "0px",
                          height: "84.5vh",
                          fontFamily: "Roboto",
                          boxShadow: "none",
                        }}
                      >
                        <Table className={classes.table} aria-label="simple table">
                          <TableRow className={classes.tableRow}>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("palleteName")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("palletType")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("caseType")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("intermediateLayerWidth")}
                              
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("intermediateLayerLength")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("intermediateLayerType")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("numberOfLayers")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("numberCasesSchemaA")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("LayersSchemaA")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("numberCasesSchemaB")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("LayersSchemaB")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("numberCasesSchemaC")}
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                width: 180,
                                height: 46,
                              }}
                              align="right"
                            >
                              {t("LayersSchemaC")}
                            </TableCell>

                          </TableRow>
                          <TableBody className={classes.tableBody}>
                            {this.state.palletRows.map((row) => {
                              console.log(row, "rowwww")
                              if (this.tablePalletNames.length == 0) {
                                this.tablePalletNames.push(row.palletName);
                                console.log(row, "rowwww")
                                this.toggle = true;
                              } else {
                                if (this.tablePalletNames.indexOf(row.palletName) > -1) {
                                  console.log("Table case name already exists");
                                } else {
                                  this.tablePalletNames.push(row.name);
                                  if (this.toggle == true) {
                                    this.toggle = false;
                                  } else {
                                    this.toggle = true;
                                  }
                                }
                              }
                              console.log(this.tablePalletNames, " this.tablePalletNamesfff")
                              return (
                                <TableRow
                                  style={{ marginTop: "3px" }}
                                  selected={this.toggle}
                                  className={classes.tableRow}
                                  key={row.id}
                                >
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    style={{ fontFamily: "Roboto", fontSize: 12 }}
                                    align="right"
                                  >
                                    {row?.palletName}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.palletType !== null ? row.palletType : "EU 6: 800 x 600"}

                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.caseType !== null ? row.caseType : "N/A"}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.intermediateLayerWidth !== null ? row.intermediateLayerWidth : "600"}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.intermediateLayerLength !== null ? row.intermediateLayerLength : "800"}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.intermediateLayerType !== null ? row.intermediateLayerType : "1"}
                                  </TableCell>


                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.noOfLayers !== null ? row.noOfLayers : "1"}
                                  </TableCell>

                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.casesSchemaA !== null ? row.casesSchemaA : "0"}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.layerSchemaA ===null || row?.layerSchemaA === "" ? "N/A":row.layerSchemaA }
                                    {/* {row?.layerSchemaA !== null ? row.layerSchemaA: "N/A"} */}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.casesSchemaB !== null ? row.casesSchemaB : "0"}
                                  </TableCell>
                                  
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.layerSchemaB ===null || row?.layerSchemaB ==="" ? "N/A":row.layerSchemaB }
                                    {/* {row?.layerSchemaB !== null ? row.layerSchemaB : "N/A"} */}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.casesSchemaC !== null ? row.casesSchemaC : "0"}
                                  </TableCell>

                                  <TableCell
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: 12,
                                      width: 224,
                                      height: 46,
                                    }}
                                    align="right"
                                  >
                                    {row?.layerSchemaC ===null || row?.layerSchemaC ==="" ? "N/A":row.layerSchemaC }
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </Grid>


                  :
                  null
              }

            </Grid>

          </div>
        </Grid>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      casename: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
  };
}

export default withTranslation()(
  connect(mapStateToProps)(withStyles(useStyles)(DashboardPage))
);
