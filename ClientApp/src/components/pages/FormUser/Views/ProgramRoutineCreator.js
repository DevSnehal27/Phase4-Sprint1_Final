import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MenuItem } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import { RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material';
import { Radio } from "@material-ui/core";
import axios from "axios";

// import { onvaluechangepreposY } from "../Controller/prcController";
import {
    callBlurPreposY1PRC, callBlurPreposX1PRC, callBlurPreposZ1PRC,
    callBlurPreposX2PRC, callBlurPreposY2PRC, callBlurPreposZ2PRC,
    callBlurPreposX3PRC, callBlurPreposY3PRC, callBlurPreposZ3PRC
} from "../Controller/prcController";
import {
    ExpansionPanelDetailsStyle, GridItemStyle, Origin1TextStyle, PRC_MarginTextStyle, containerGridstyle, PRCImgStyle, GridItemStyleNew,
    PRC_MarginTextStyleNew, PRC_Button, PRC_TextfieldStyle, PRC_TextfieldStyle2nd, PRC_TextfieldStyle3rd, DesignP_FontTextStyle,
    PRC_MM_MarginTextStyle, PRC_DivCase_Style, PRC_PreposTextStyle
} from '../../DashboardPage_UI/UICommonStyles'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const ProgramRoutineCreator = ({
    handleChangepanel,
    S_algo_loaded,
    expanded_panel,
    S_errorPreposy,
    S_errorhelpertextForPreposy,
    S_selectedOne,
    S_setnumbery,
    S_setnumbery2,
    // callBlurPreposYPRC,
    onvaluechangepreposY,
    onChange_2ndPrePos,
    onChange_3rdPrePos,
    S_errorPreposx,
    S_errorhelpertextForPreposx,
    S_setnumberx,
    S_setnumberx2,
    onvaluechangepreposX,
    // callBlurPreposXPRC,

    S_errorPreposz,
    S_errorhelpertextForPreposz,
    S_setnumberz,
    S_setnumberz2,
    onvaluechangepreposZ,
    // callBlurPreposZPRC,

    handleAutoGeneratePrepos,
    handleAutoGeneratePreposNEW,
    savePrc,
    S_case_data,
    S_colorA,
    S_colorB,
    showOnFieldsClickGreenRect,
    showOnFieldsClickOrangeRect,
    showOnFieldsClickRedRect,
    showOnFieldsClickAllRect,
    G_casedata,
    S_CasesXYfotGreenRectPRC,
    S_AllAvlNrPosInDropDownList,
    handleValueChangePrepos,
    // callBlurPreposY1PRC,
    // callBlurPreposX1PRC,
    // callBlurPreposZ1PRC,
    S_NrPosInDropDownList,
    noofcaseA,
    noofcaseB,
    noofcaseC,
    objPRC,
    exceptThisSymbols,
    exceptThisSymbolsprc,
    OffsetChangePrc,
    S_selectedTwo,


    name,
    event,

    G_outerRect1_xpos,
    G_outerRect2_xpos,
    G_outerRect1_width,
    G_outerRect2_width,
    G_outerRect1_ypos,
    G_outerRect2_ypos,
    G_outerRect1_length,
    G_outerRect2_length,
    G_ctx_greenRect,
    G_myRef_GR,
    G_ctx_GRCaseFreez,
    G_casedataA1,
    G_casedataB1,
    G_casedataC1,
    G_casedataA2,
    G_casedataB2,
    G_casedataC2,
    G_autoGenerateCasePositionsDistance,
    G_setpreposx,
    G_freezNRarray,
    S_palletid,
    S1_NrPosInDropDownList,
    S1_case_data,
    autoGenerateCaseFreez,
    S_colorC,
    map,
    G_preposx,
    G_preposy,
    G_preposz,
    G_layer_sequence,
    G_case_data,


    t,
    color1,
    Green_arrow,
    Red_arrow,
    Light_Blue_arrow,

    freesedCaseCount,
    palletid,
    handleChangepanel_forToast,
    autoGenerateRadioButton,
    autoGenerateRadioButtonNEW,
    offset_2ndPrePos_X,
    offset_2ndPrePos_Y,
    offset_2ndPrePos_Z,
    offset_3rdPrePos_X,
    offset_3rdPrePos_Y,
    offset_3rdPrePos_Z,
    handleManualMoving,
    pallet1_2,
    enableMoving1,
    enableMoving2,
    G_set_3rdPrePos_Y,
    S_set_3rdPrePos_Y,
    S_set_3rdPrePos_Y2,
    Prepos_set_3rdPrePos_Y,
    callBlur_3rdPrePosY,
    S_set_3rdPrePos_X,
    S_set_3rdPrePos_X2,
    callBlur_3rdPrePosX,
    S_set_3rdPrePos_Z,
    S_set_3rdPrePos_Z2,
    callBlur_3rdPrePosZ,
    S_set_2ndPrePos_Y,
    S_set_2ndPrePos_Y2,
    callBlur_2ndPrePos_Y,
    S_set_2ndPrePos_X,
    S_set_2ndPrePos_X2,
    callBlur_2ndPrePos_X,
    S_set_2ndPrePos_Z,
    S_set_2ndPrePos_Z2,
    callBlur_2ndPrePos_Z,
    onBlurFor1stX,
    onBlurFor1stY,
    onBlurFor1stZ
}) => {


    const caseData = G_casedata;
    const index_FreesedCaseCount = freesedCaseCount;


    const savePrePosPRC = () => {
        // const palletid = this.props.match.params.palletid;
        console.log(palletid);
        try {

            // .put(`/Threed/positions/${palletid}`, {
            //   prePos_X_for_Auto: prePos.prePos_X_for_Auto,
            //   prePos_Y_for_Auto: prePos.prePos_Y_for_Auto,
            //   prePos_Z_for_Auto: prePos.prePos_Z_for_Auto,
            // })
            if (S_selectedOne) {
                axios.put(`/Threed/positions/${palletid}`, {
                    prePos_X_for_Auto: S_setnumberx,
                    prePos_Y_for_Auto: S_setnumbery,
                    prePos_Z_for_Auto: S_setnumberz,
                })
                    .then((res) => {
                        // console.log(res.data);
                    });
            } else {
                axios.put(`/Threed/positions/${palletid}`, {
                    prePos_X_for_Auto: S_setnumberx2,
                    prePos_Y_for_Auto: S_setnumbery2,
                    prePos_Z_for_Auto: S_setnumberz2,
                })
                    .then((res) => {
                        // console.log(res.data);
                    });
            }


        } catch (e) {
            console.log(e);
        }
    };
    const emojisCheck=(e,index)=>{
        console.log(index,'index')
         const name= e.target.name
        const inputValue = e.target.value;
        const numbersRegex = /^[0-9]*$/;
        if (numbersRegex.test(inputValue) && name==='3Y') {
          handleValueChangePrepos({
            name: "pre_Pos_3Y",
            value: index,
          }, e);
        }
        if (numbersRegex.test(inputValue) && name==='2Y') {
          handleValueChangePrepos({
            name: "pre_Pos_2Y",
            value: index,
          }, e);
        }
        if (numbersRegex.test(inputValue) && name==='Y') {
          handleValueChangePrepos({
            name: "pre_Pos_Y",
            value: index,
          }, e);
        }
        if (numbersRegex.test(inputValue) && name==='3X') {
          handleValueChangePrepos({
            name: "pre_Pos_3X",
            value: index,
          }, e);
        }
        if (numbersRegex.test(inputValue) && name==='2X') {
          handleValueChangePrepos({
            name: "pre_Pos_2X",
            value: index,
          }, e);
        }
        if (numbersRegex.test(inputValue) && name==='X') {
          handleValueChangePrepos({
            name: "pre_Pos_X",
            value: index,
          }, e);
        }
        if (numbersRegex.test(inputValue) && name==='3Z') {
          handleValueChangePrepos({
            name: "pre_Pos_3Z",
            value: index,
          }, e);
        }
        if (numbersRegex.test(inputValue) && name==='2Z') {
          handleValueChangePrepos({
            name: "pre_Pos_2Z",
            value: index,
          }, e);
        }
        if (numbersRegex.test(inputValue) && name==='Z') {
          handleValueChangePrepos({
            name: "pre_Pos_Z",
            value: index,
          }, e);
        }
    }
    return (
        <>
            <Grid item xs={12} style={{ marginTop: "7px" }}>
                <ExpansionPanel
                    style={ExpansionPanelDetailsStyle}
                    expanded={expanded_panel === "panel5"}
                    onChange={S_algo_loaded == true ? handleChangepanel("panel5") : handleChangepanel_forToast('panel5')}
                // onClick={this.callSchema1}
                >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panel1-header"
                    >
                        <Typography>{t("programRoutineCreator")}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container style={containerGridstyle}>

                            {/* Pre Pos Offset & Button */}
                            <Grid item xs={12} style={GridItemStyle}>

                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue={t('prePosOffset')}
                                    margin="dense"
                                    style={PRC_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: {
                                            fontSize: 12,
                                            left: "10px",
                                            bottom: "2px",
                                            left: "10px",
                                            padding: 1,
                                        },
                                    }}
                                    variant="standard"
                                    size="small"
                                />

                                <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "18px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '10px', borderRadius: "98px", backgroundColor: "white", border: '1px solid', cursor: "default", pointerEvents: "none", left: 11 }} className="backBtn">
                                    3
                                </Button>

                                <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "18px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '10px', borderRadius: "98px", backgroundColor: "white", border: '1px solid', cursor: "default", pointerEvents: "none", left: 85 }} className="backBtn">
                                    2
                                </Button>

                                <Button style={{ zIndex: "2", marginTop: "10px", fontSize: "18px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '10px', borderRadius: "98px", backgroundColor: "white", border: '1px solid', cursor: "default", pointerEvents: "none", left: 150 }} className="backBtn">
                                    1
                                </Button>

                            </Grid>

                            {/* Pre Pos Y */}
                            <Grid item xs={12} style={GridItemStyle}
                            >
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    // defaultValue={t("prePos")}
                                    defaultValue=""
                                    // className={classes.textField}
                                    margin="dense"
                                    style={PRC_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: {
                                            fontSize: 12,
                                            left: "10px",
                                            bottom: "2px",
                                            left: "10px",
                                            padding: 1,
                                        },
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                                <div>
                                    <section className="one-fourth" id="html">
                                        <img src={Green_arrow} draggable="false" style={PRCImgStyle} />
                                    </section>
                                </div>

                                {/* 3rd PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle}
                                    id="outlined-xdimp1"
                                    type="number"

                                    error={S_errorPreposy}
                                    helperText={S_errorhelpertextForPreposy}
                                    // defaultValue={0}
                                    value={S_selectedOne ? S_set_3rdPrePos_Y : S_set_3rdPrePos_Y2}
                                    onChange={onChange_3rdPrePos("Third_PrePos_Y")}
                                    onBlur={(e) => callBlur_3rdPrePosY(e, S_selectedOne ? S_set_3rdPrePos_Y : S_set_3rdPrePos_Y2)}

                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    InputLabelProps={{shrink: true, style: DesignP_FontTextStyle}}
                                    InputProps={{style: DesignP_FontTextStyle}}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />

                                {/* 2nd PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle2nd}
                                    id="outlined-xdimp1"
                                    type="number"
                                    error={S_errorPreposy}
                                    helperText={S_errorhelpertextForPreposy}

                                    value={S_selectedOne ? S_set_2ndPrePos_Y : S_set_2ndPrePos_Y2}
                                    onChange={onChange_2ndPrePos("Second_PrePos_Y")}
                                    onBlur={(e) => callBlur_2ndPrePos_Y(e, S_selectedOne ? S_set_2ndPrePos_Y : S_set_2ndPrePos_Y2)}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    InputLabelProps={{shrink: true, style: DesignP_FontTextStyle}}
                                    InputProps={{style: DesignP_FontTextStyle}}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />

                                {/* 1st PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle3rd}
                                    id="outlined-xdimp1"
                                    type="number"
                                    error={S_errorPreposy}
                                    helperText={S_errorhelpertextForPreposy}

                                    value={S_selectedOne ? S_setnumbery == null ? 0 : S_setnumbery : S_setnumbery2 == null ? 0 : S_setnumbery2}
                                    onChange={onvaluechangepreposY(S_selectedOne ? "setnumbery" : "setnumbery2")}
                                    onBlur={(e) => { onBlurFor1stY(e) }}

                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    InputLabelProps={{shrink: true, style: DesignP_FontTextStyle}}
                                    InputProps={{style: DesignP_FontTextStyle}}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />

                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue="mm"
                                    // className={classes.textField1}
                                    margin="dense" style={PRC_MM_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        maxLength: 2,
                                        disableUnderline: true,
                                        style: { fontSize: 12, }
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                            </Grid>

                            {/* Pre Pos X */}
                            <Grid item xs={12} style={GridItemStyle}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    // defaultValue={t('prePos')}
                                    defaultValue=""
                                    margin="dense" style={PRC_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: { fontSize: 12, left: "10px", bottom: "2px", left: "10px", padding: 1 }
                                    }}
                                    variant="standard"
                                    size="small"
                                />

                                <div>
                                    <section className="one-fourth" id="html">
                                        <img src={Red_arrow} draggable="false" style={PRCImgStyle} />
                                    </section>
                                </div>

                                {/* 3rd PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle}
                                    id="outlined-ydimp2"
                                    type="number"

                                    error={S_errorPreposx}
                                    helperText={S_errorhelpertextForPreposx}
                                    // defaultValue={0}
                                    value={S_selectedOne ? S_set_3rdPrePos_X : S_set_3rdPrePos_X2}
                                    onChange={onChange_3rdPrePos("Third_PrePos_X")}
                                    onBlur={(e) => callBlur_3rdPrePosX(e, S_selectedOne ? S_set_3rdPrePos_X : S_set_3rdPrePos_X2)}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
                                    }}
                                    margin="dense"
                                    // style={{ height: 38 }}
                                    variant="outlined"
                                    size="small"
                                />

                                {/* 2nd PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle2nd}
                                    id="outlined-ydimp2"
                                    type="number"

                                    error={S_errorPreposx}
                                    helperText={S_errorhelpertextForPreposx}
                                    // defaultValue={0}
                                    value={S_selectedOne ? S_set_2ndPrePos_X : S_set_2ndPrePos_X2}
                                    onChange={onChange_2ndPrePos("Second_PrePos_X")}
                                    onBlur={(e) => callBlur_2ndPrePos_X(e, S_selectedOne ? S_set_2ndPrePos_X : S_set_2ndPrePos_X2)}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}

                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
                                    }}
                                    margin="dense"
                                    // style={{ height: 38 }}
                                    variant="outlined"
                                    size="small"
                                />

                                {/* 1st PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle3rd}
                                    id="outlined-ydimp2"
                                    type="number"

                                    error={S_errorPreposx}
                                    helperText={S_errorhelpertextForPreposx}
                                    // value={S_selectedOne ? S_setnumberx  : S_setnumberx2}
                                    value={S_selectedOne ? S_setnumberx == null ? 0 : S_setnumberx : S_setnumberx2 == null ? 0 : S_setnumberx2}
                                    onChange={onvaluechangepreposX(S_selectedOne ? "setnumberx" : "setnumberx2")}
                                    onBlur={(e) => { onBlurFor1stX(e) }}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}

                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
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
                                    margin="dense" style={PRC_MM_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        maxLength: 2,
                                        disableUnderline: true,
                                        style: { fontSize: 12, }
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                            </Grid>

                            {/* Pre Pos Z */}
                            <Grid item xs={12} style={GridItemStyle}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    // defaultValue={t('prePos')}
                                    defaultValue=""
                                    margin="dense" style={PRC_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: { fontSize: 12, left: "10px", bottom: "2px", left: "10px", padding: 1 }
                                    }}
                                    variant="standard"
                                    size="small"
                                />


                                <div>
                                    <section className="one-fourth" id="html">
                                        <img src={Light_Blue_arrow} draggable="false" style={PRCImgStyle} />
                                    </section>



                                </div>

                                {/* 3rd PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle}
                                    id="outlined-zdimp3"
                                    error={S_errorPreposz}
                                    helperText={S_errorhelpertextForPreposz}
                                    value={S_selectedOne ? S_set_3rdPrePos_Z : S_set_3rdPrePos_Z2}
                                    onChange={onChange_3rdPrePos("Third_PrePos_Z")}
                                    onBlur={(e) => callBlur_3rdPrePosZ(e, S_selectedOne ? S_set_3rdPrePos_Z : S_set_3rdPrePos_Z2)}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    type="number"
                                    // className={classes.textField2}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
                                    }}
                                    // style={{ height: 38}}
                                    variant="outlined"
                                    size="small"
                                />

                                {/* 2nd PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle2nd}
                                    id="outlined-zdimp3"
                                    error={S_errorPreposz}
                                    helperText={S_errorhelpertextForPreposz}
                                    // defaultValue={0}
                                    value={S_selectedOne ? S_set_2ndPrePos_Z : S_set_2ndPrePos_Z2}
                                    onChange={onChange_2ndPrePos("Second_PrePos_Z")}
                                    onBlur={(e) => callBlur_2ndPrePos_Z(e, S_selectedOne ? S_set_2ndPrePos_Z : S_set_2ndPrePos_Z2)}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    type="number"
                                    // className={classes.textField2}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
                                    }}
                                    // style={{ height: 38}}
                                    variant="outlined"
                                    size="small"
                                />

                                {/* 1st PrePos TextField */}
                                <TextField
                                    style={PRC_TextfieldStyle3rd}
                                    id="outlined-zdimp3"
                                    error={S_errorPreposz}
                                    helperText={S_errorhelpertextForPreposz}
                                    value={S_selectedOne ? S_setnumberz == null ? 0 : S_setnumberz : S_setnumberz2 == null ? 0 : S_setnumberz2}
                                    onChange={onvaluechangepreposZ(S_selectedOne ? "setnumberz" : "setnumberz2")}
                                    onBlur={(e) => { onBlurFor1stZ(e) }}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    type="number"
                                    // className={classes.textField2}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
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
                                    margin="dense" style={PRC_MM_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        maxLength: 2,
                                        disableUnderline: true,
                                        style: { fontSize: 12, }
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                            </Grid>

                            {/* Auto generate Case Position */}
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", backgroundColor: "#f5f5f5", marginBottom: "4px" }}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue={t('autoGenerateCasePosition')}
                                    // className={classes.textField}
                                    margin="dense" style={{ height: 27, width: "536px", top: "8px" }}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: Origin1TextStyle
                                    }}
                                    variant="standard"
                                    size="small"
                                />

                                <FormControl>

                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                        onClick={handleAutoGeneratePreposNEW({
                                            name: "auto_generation"
                                        })}
                                        onBlur={savePrc}

                                    >
                                        <FormControlLabel
                                            style={{ marginLeft: "28px", marginBottom: "2px", marginTop: "15px", width: "18%", height: "18px" }}
                                            control={<Radio />}
                                            checked={autoGenerateRadioButtonNEW}
                                        />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            {/* Auto Generate Pre Position */}
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", backgroundColor: "#f5f5f5", marginBottom: "4px" }}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue={t('autoGeneratePrePosition')}
                                    margin="dense" style={{ height: 27, width: "536px", top: "8px" }}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: Origin1TextStyle
                                    }}
                                    variant="standard"
                                    size="small"
                                />

                                <FormControl>

                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                        onClick={handleAutoGeneratePrepos({
                                            name: "auto_generation"
                                        })}
                                        onBlur={savePrc}

                                    >
                                        <FormControlLabel
                                            style={{ marginLeft: "28px", marginBottom: "2px", marginTop: "15px", width: "18%", height: "18px" }}
                                            control={<Radio />}
                                            checked={autoGenerateRadioButton}
                                        />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            {/* Enable Manual Selection */}
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", backgroundColor: "#f5f5f5", marginBottom: "4px" }}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue={t('enableManualSelection')}
                                    margin="dense" style={{ height: 27, width: "536px", top: "8px" }}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: Origin1TextStyle
                                    }}
                                    variant="standard"
                                    size="small"
                                />

                                <Checkbox style={{ height: "18px", width: "18px", top: "16px", right: "50px" }} {...label}
                                    name="enableManualSelection"
                                    checked={pallet1_2==1?enableMoving1 : enableMoving2}
                                    sx={{
                                        color: "grey",
                                        '&.Mui-checked': {
                                            color: "rgb(0,125,129)",
                                        },
                                    }}
                                    onClick={()=>{console.log(pallet1_2,"cheeckkkkk")
                                    handleManualMoving(pallet1_2)

                                }}
                                />
                            </Grid>

                            {S_case_data.length > 0 && [...Array(S_colorA == "#5eb8b3" ? noofcaseA : S_colorB == "#5eb8b3" ? noofcaseB : noofcaseC)].map(

                                (value, index) => {
                                    return (
                                        <Grid item xs={12} style={{ display: index + 1 > S_CasesXYfotGreenRectPRC.length ? 'none' : 'flex', flexDirection: 'column', padding: 8, backgroundColor: "#f5f5f5", marginBottom: "4px" }}>
                                            <>

                                                {/* Nr DropDown, Button And Freez CheckBox */}
                                                <div onClick={(e) => showOnFieldsClickAllRect(index, G_casedata, e)} style={{ display: 'flex', flexDirection: 'row', backgroundColor: "#f5f5f5" }}>

                                                    <TextField
                                                        style={{ border: "1px solid white !important", height: "27px", top: "3px", right: "-3px", width: "20%", backgroundColor: "white", paddingLeft: "3px" }}
                                                        id="outlined-typeNrnum"
                                                        value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.position}
                                                        name="position"
                                                        onChange={(e) => OffsetChangePrc(index, S_case_data[index]?.position, e)}
                                                        onBlur={savePrc}
                                                        select
                                                        disabled={index == 0 || index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                            style: { fontSize: "12px", height: "27px" }
                                                        }}
                                                        InputProps={{
                                                            style: { fontSize: "12px", height: "27px" }
                                                        }}
                                                        margin="dense"
                                                        // style={{ height: "38px" }}
                                                        variant="outlined"
                                                        size="small">

                                                        <MenuItem value="">Set Empty</MenuItem>

                                                        {console.log("this.state.NrPosInDropDownList inside UI: " + S_NrPosInDropDownList)}
                                                        {index + 1 <= S_CasesXYfotGreenRectPRC.length && S_case_data.length > 0 && S_AllAvlNrPosInDropDownList.filter((NrValues, i) => {
                                                            return !S_NrPosInDropDownList.includes(NrValues);
                                                        }).map((NRvalue, index1) => {
                                                            return <MenuItem value={NRvalue}>{NRvalue}</MenuItem>;
                                                        })}



                                                    </TextField>

                                                    <span unselectable="on" style={{ position: "absolute", cursor: "pointer", fontSize: "12px", marginTop: "16px", marginLeft: "41.5px" }}>{index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : S_case_data[index]?.position}</span>

                                                    <Button style={{ zIndex: "2", marginTop: "2px", fontSize: "18px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '5px', borderRadius: "98px", backgroundColor: "white", border: '1px solid', cursor: "default", pointerEvents: "none", left: 32 }} className="backBtn">
                                                        3
                                                    </Button>

                                                    <Button style={{ zIndex: "2", marginTop: "2px", fontSize: "18px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '5px', borderRadius: "98px", backgroundColor: "white", border: '1px solid', cursor: "default", pointerEvents: "none", left: 80 }} className="backBtn">
                                                        2
                                                    </Button>

                                                    <Button style={{ zIndex: "2", marginTop: "2px", fontSize: "18px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '5px', borderRadius: "98px", backgroundColor: "white", border: '1px solid', cursor: "default", pointerEvents: "none", left: 125 }} className="backBtn">
                                                        1
                                                    </Button>

                                                    <Button style={{ zIndex: "2", marginTop: "2px", fontSize: "18px", display: 'flex', alignSelf: 'center', minWidth: 0, width: "35px", height: "35px", marginBottom: '5px', borderRadius: "98px", backgroundColor: "white", border: '1px solid', cursor: "default", pointerEvents: "none", left: 196 }} className="backBtn">
                                                        <TextField
                                                            value={"#" + (index + 1)}
                                                            InputProps={{
                                                                readOnly: true,
                                                                disableUnderline: true,
                                                                style: { fontSize: "13px", left: "0.5px", top: "4px", width:"100px"}
                                                            }}
                                                        >
                                                        </TextField>
                                                    </Button>

                                                    <Checkbox
                                                        className='checkbox'
                                                        name="position_freezed"
                                                        disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : false} //disabled for extra cases
                                                        checked={index + 1 > S_CasesXYfotGreenRectPRC.length ? false : S_case_data[index]?.position_freezed}
                                                        onBlur={savePrc}
                                                        onClick={(e) => OffsetChangePrc(index, S_case_data[index]?.position_freezed, e)}
                                                        sx={{
                                                            color: "grey",
                                                            '&.Mui-checked': {
                                                                color: "rgb(0,125,129)",
                                                            },
                                                        }}
                                                        style={{ width: "18px", height: "18px", top: "10px", left: "214px" }} {...label}
                                                    />
                                                </div>

                                                {/* Pre Pos Y Offset, Negative And End Position*/}
                                                <div style={PRC_DivCase_Style}>
                                                    <div style={{ display: 'flex', flexDirection: 'row', padding: "1px", marginBottom: "1px", }}>
                                                        <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid white !important", height: "27px" }}>
                                                            <div>
                                                                <section className="one-fourth" id="html">
                                                                    <img src={Green_arrow} draggable="false" style={{ color: "green", marginTop: "-4px", marginLeft: "66px", width: "45px", zIndex: "10" }} />
                                                                </section>
                                                            </div>
                                                        </div>


                                                        <div>
                                                            {/* 3rd PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "90px", backgroundColor: "white" }}
                                                                id="outlined-read-only-input_ypos_Prc"
                                                                label=""
                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_3Y}

                                                                onChange={(e) =>{
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }
                                                                      else{

                                                                       handleValueChangePrepos({ name: "pre_Pos_3Y", value: index + 1, }, e)}}}
                                                                onClick={(e) => showOnFieldsClickRedRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposY3PRC(
                                                                    e,
                                                                    index,
                                                                    G_casedata,
                                                                    offset_3rdPrePos_Y,                                                        
                                                                    G_case_data,                                                        
                                                                    S1_case_data,                                                        
                                                                    S_selectedOne,                                                        
                                                                    S_colorA,                                                        
                                                                    G_casedataA1,                                                        
                                                                    S_colorB,                                                        
                                                                    G_casedataB1,                                                        
                                                                    S_colorC,                                                        
                                                                    G_casedataC1,                                                        
                                                                    S_selectedTwo,                                                        
                                                                    G_casedataA2,                                                        
                                                                    G_casedataB2,                                                        
                                                                    G_casedataC2,                                                        
                                                                    savePrc,                                                        
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />
                                                            {/* 2nd PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "115px", backgroundColor: "white", }}
                                                                id="outlined-read-only-input_ypos_Prc"
                                                                label=""
                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_2Y}

                                                                // value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_2Y}
                                                                onChange={(e) => {
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }
                                                                      else{
                                                                      
                                                                    handleValueChangePrepos({ name: "pre_Pos_2Y", value: index + 1, }, e)}}}
                                                                onClick={(e) => showOnFieldsClickOrangeRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposY2PRC(
                                                                    e,
                                                                    index,
                                                                    G_casedata,
                                                                    offset_2ndPrePos_Y,                                                        
                                                                    G_case_data,                                                        
                                                                    S1_case_data,                                                        
                                                                    S_selectedOne,                                                        
                                                                    S_colorA,                                                        
                                                                    G_casedataA1,                                                        
                                                                    S_colorB,                                                        
                                                                    G_casedataB1,                                                        
                                                                    S_colorC,                                                        
                                                                    G_casedataC1,                                                        
                                                                    S_selectedTwo,                                                        
                                                                    G_casedataA2,                                                        
                                                                    G_casedataB2,                                                        
                                                                    G_casedataC2,                                                        
                                                                    savePrc,                                                        
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />
                                                            {/* 1st PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "135px", backgroundColor: "white" }}
                                                                id="outlined-read-only-input_ypos_Prc"
                                                                label=""

                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_Y}
                                                                onChange={(e) =>{
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }else{
                                                                    handleValueChangePrepos({
                                                                    name: "pre_Pos_Y",
                                                                    value: index + 1,

                                                                }, e)}}}
                                                                onClick={(e) => showOnFieldsClickGreenRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposY1PRC(
                                                                    e,
                                                                    index,
                                                                    G_casedata,
                                                                    G_preposy,
                                                                    G_case_data,
                                                                    S1_case_data,
                                                                    S_selectedOne,
                                                                    S_colorA,
                                                                    G_casedataA1,
                                                                    S_colorB,
                                                                    G_casedataB1,
                                                                    S_colorC,
                                                                    G_casedataC1,
                                                                    S_selectedTwo,
                                                                    G_casedataA2,
                                                                    G_casedataB2,
                                                                    G_casedataC2,
                                                                    savePrc,
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                // margin="dense" style={{ height: "27px", width: "61px", marginLeft: "20px", marginTop: "4px", }}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />

                                                            <Checkbox style={{ height: "18px", width: "18px", top: "4px", right: "-150px" }} {...label}

                                                                name="offsetYneg"
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                sx={{
                                                                    color: "grey",
                                                                    '&.Mui-checked': {
                                                                        color: "rgb(0,125,129)",
                                                                    },
                                                                }}
                                                                onClick={(e) => OffsetChangePrc(index, S_case_data[index]?.offset_Y_neg, e)}
                                                                checked={S_case_data[index]?.offset_Y_neg}
                                                                onBlur={savePrc}
                                                            />

                                                            <TextField style={{ height: "27px", marginTop: "3px", left: "160px", width: "91px", }}
                                                                id="outlined-read-only-input-yendposition"
                                                                label=""
                                                                defaultValue=""
                                                                value={G_casedata[index].case_y_position == 0 ? "--" : (G_casedata && G_casedata[index] ? G_casedata[index].case_y_position : '')}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: true,
                                                                    disableUnderline: true,
                                                                    style: { fontSize: "12px", left: "25px", top: "3px" }
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />

                                                            <div className='unit' style={{ fontSize: "12px", marginTop: "-34px", padding: "6px", marginLeft: "420px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>
                                                                mm
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                                {/* Pre Pos X Offset, Negative And End Position*/}
                                                <div style={PRC_DivCase_Style}>
                                                    <div style={{ display: 'flex', flexDirection: 'row', padding: "1px", marginBottom: "1px", marginTop: "6px", height: "30px", }}>
                                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: "0px", height: "27px", }}>
                                                        </div>

                                                        <div>
                                                            <section className="one-fourth" id="html">
                                                                <img src={Red_arrow} draggable="false" style={{ color: "red", marginTop: "-4px", marginLeft: "66px", width: "45px", }} />
                                                            </section>
                                                        </div>

                                                        <div>
                                                            {/* 3rd PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "90px", backgroundColor: "white" }}
                                                                id="outlined-read-only-input_xpos_Prc"
                                                                label=""
                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_3X}

                                                                onChange={(e) => {
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }
                                                                      else{handleValueChangePrepos({ name: "pre_Pos_3X", value: index + 1, }, e)}}}
                                                                onClick={(e) => showOnFieldsClickRedRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposX3PRC(
                                                                    e,
                                                                    index,
                                                                    G_casedata,
                                                                    offset_3rdPrePos_X,                                                        
                                                                    G_case_data,                                                        
                                                                    S1_case_data,                                                        
                                                                    S_selectedOne,                                                        
                                                                    S_colorA,                                                        
                                                                    G_casedataA1,                                                        
                                                                    S_colorB,                                                        
                                                                    G_casedataB1,                                                        
                                                                    S_colorC,                                                        
                                                                    G_casedataC1,                                                        
                                                                    S_selectedTwo,                                                        
                                                                    G_casedataA2,                                                        
                                                                    G_casedataB2,                                                        
                                                                    G_casedataC2,                                                        
                                                                    savePrc,                                                        
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />
                                                            {/* 2nd PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "115px", backgroundColor: "white", }}
                                                                id="outlined-read-only-input_xpos_Prc"
                                                                label=""
                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_2X}

                                                                onChange={(e) => {
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }else{handleValueChangePrepos({ name: "pre_Pos_2X", value: index + 1, }, e)}}}
                                                                onClick={(e) => showOnFieldsClickOrangeRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposX2PRC(
                                                                    e,
                                                                    index,
                                                                    G_casedata,
                                                                    offset_2ndPrePos_X,                                                        
                                                                    G_case_data,                                                        
                                                                    S1_case_data,                                                        
                                                                    S_selectedOne,                                                        
                                                                    S_colorA,                                                        
                                                                    G_casedataA1,                                                        
                                                                    S_colorB,                                                        
                                                                    G_casedataB1,                                                        
                                                                    S_colorC,                                                        
                                                                    G_casedataC1,                                                        
                                                                    S_selectedTwo,                                                        
                                                                    G_casedataA2,                                                        
                                                                    G_casedataB2,                                                        
                                                                    G_casedataC2,                                                        
                                                                    savePrc,                                                        
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />
                                                            {/* 1st PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "135px", backgroundColor: "white" }}
                                                                id="outlined-read-only-input_xpos_Prc"
                                                                label=""
                                                                defaultValue=""
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_X}
                                                                onChange={(e) => {
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }else{handleValueChangePrepos({
                                                                    name: "pre_Pos_X",
                                                                    value: index + 1,
                                                                }, e)}}}
                                                                onClick={(e) => showOnFieldsClickGreenRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposX1PRC(
                                                                    e,
                                                                    index,
                                                                    G_preposx,
                                                                    G_casedata,
                                                                    S1_case_data,
                                                                    G_case_data,
                                                                    S_selectedOne,
                                                                    S_colorA,
                                                                    S_colorB,
                                                                    S_colorC,
                                                                    G_casedataA1,
                                                                    G_casedataB1,
                                                                    G_casedataC1,
                                                                    G_casedataA2,
                                                                    G_casedataB2,
                                                                    G_casedataC2,
                                                                    S_selectedTwo,
                                                                    savePrc,
                                                                )}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />

                                                            <Checkbox style={{ height: "18px", width: "18px", top: "4px", right: "-150px" }}{...label}

                                                                name="offsetXneg"
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onClick={(e) => OffsetChangePrc(index, S_case_data[index]?.offset_X_neg, e)}
                                                                sx={{
                                                                    color: "grey",
                                                                    '&.Mui-checked': {
                                                                        color: "rgb(0,125,129)",
                                                                    },
                                                                }}
                                                                checked={S_case_data[index]?.offset_X_neg}
                                                                onBlur={savePrc}
                                                            />

                                                            <TextField style={{ height: "27px", marginTop: "4px", left: "161px", width: "60px", }}
                                                                id="outlined-read-only-input-xendposition"
                                                                label=""
                                                                defaultValue=""
                                                                value={G_casedata[index].case_x_position == 0 ? "--" : (G_casedata && G_casedata[index] ? G_casedata[index].case_x_position : '')}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: true,
                                                                    disableUnderline: true,
                                                                    style: { fontSize: "12px", left: "23px", top: "3px" }
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />

                                                            <div className='unit' style={{ fontSize: "12px", marginTop: "-34px", padding: "6px", marginLeft: "420px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>
                                                                mm
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                                {/* Pre Pos Z Offset And End Position*/}
                                                <div style={PRC_DivCase_Style}>
                                                    <div style={{ display: 'flex', flexDirection: 'row', padding: "1px", marginBottom: "1px", marginTop: "6px", height: "30px", }}>
                                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: "0px", height: "27px", }}>
                                                           
                                                        </div>

                                                        <div>
                                                            <section className="one-fourth" id="html">
                                                                <img src={Light_Blue_arrow} draggable="false" style={{ color: "red", marginTop: "-4px", marginLeft: "66px", width: "45px", }} />
                                                            </section>
                                                        </div>

                                                        <div>
                                                            {/* 3rd PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "90px", backgroundColor: "white" }}
                                                                id="outlined-read-only-input_zpos_Prc"
                                                                label=""
                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_3Z}

                                                                onChange={(e) => {
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }else{handleValueChangePrepos({ name: "pre_Pos_3Z", value: index + 1, }, e)}}}
                                                                onClick={(e) => showOnFieldsClickRedRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposZ3PRC(
                                                                    e,
                                                                    index,
                                                                    G_casedata,
                                                                    offset_3rdPrePos_Z,                                                        
                                                                    G_case_data,                                                        
                                                                    S1_case_data,                                                        
                                                                    S_selectedOne,                                                        
                                                                    S_colorA,                                                        
                                                                    G_casedataA1,                                                        
                                                                    S_colorB,                                                        
                                                                    G_casedataB1,                                                        
                                                                    S_colorC,                                                        
                                                                    G_casedataC1,                                                        
                                                                    S_selectedTwo,                                                        
                                                                    G_casedataA2,                                                        
                                                                    G_casedataB2,                                                        
                                                                    G_casedataC2,                                                        
                                                                    savePrc,                                                        
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />
                                                            {/* 2nd PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "115px", backgroundColor: "white", }}
                                                                id="outlined-read-only-input_zpos_Prc"
                                                                label=""
                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_2Z}

                                                                onChange={(e) => {
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }else{handleValueChangePrepos({ name: "pre_Pos_2Z", value: index + 1, }, e)}}}
                                                                onClick={(e) => showOnFieldsClickOrangeRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposZ2PRC(
                                                                    e,
                                                                    index,
                                                                    G_casedata,
                                                                    offset_2ndPrePos_Z,                                                        
                                                                    G_case_data,                                                        
                                                                    S1_case_data,                                                        
                                                                    S_selectedOne,                                                        
                                                                    S_colorA,                                                        
                                                                    G_casedataA1,                                                        
                                                                    S_colorB,                                                        
                                                                    G_casedataB1,                                                        
                                                                    S_colorC,                                                        
                                                                    G_casedataC1,                                                        
                                                                    S_selectedTwo,                                                        
                                                                    G_casedataA2,                                                        
                                                                    G_casedataB2,                                                        
                                                                    G_casedataC2,                                                        
                                                                    savePrc,                                                        
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />
                                                            {/* 1st PrePosition Offset */}
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "135px", backgroundColor: "white" }}
                                                                id="outlined-read-only-input_zpos_Prc"
                                                                label=""
                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_Z}
                                                                onChange={(e) => {
                                                                    const allowedCharactersRegex = /^[a-zA-Z0-9#_\- ]*$/;
                                                                    const newInputValue = e.target.value;
                                                                    if (!allowedCharactersRegex.test(newInputValue)) {
                                                                        return
                                                                      }else{handleValueChangePrepos({
                                                                    name: "pre_Pos_Z",
                                                                    value: index + 1,
                                                                }, e)}}}
                                                                onClick={(e) => showOnFieldsClickGreenRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposZ1PRC(e,
                                                                    index,
                                                                    G_preposz,
                                                                    G_casedata,
                                                                    S1_case_data,
                                                                    G_case_data,
                                                                    S_selectedOne,
                                                                    S_selectedTwo,
                                                                    S_colorA,
                                                                    S_colorB,
                                                                    S_colorC,
                                                                    G_casedataA1,
                                                                    G_casedataB1,
                                                                    G_casedataC1,
                                                                    G_casedataA2,
                                                                    G_casedataB2,
                                                                    G_casedataC2,
                                                                    savePrc,
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />

                                                            <TextField style={{ height: "27px", marginTop: "4px", left: "179px", width: "60px", }}
                                                                id="outlined-read-only-input-zendposition"
                                                                label=""
                                                                defaultValue=""
                                                                value={G_casedata[index].case_z_position == 0 || G_casedata[index].case_z_position == "" ? "--" : (G_casedata && G_casedata[index] ? G_casedata[index].case_z_position : '')}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: true,
                                                                    disableUnderline: true,
                                                                    style: { fontSize: "12px", left: "23px", top: "3px" }
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />

                                                            <div className='unit' style={{ fontSize: "12px", marginTop: "-34px", padding: "6px", marginLeft: "420px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>
                                                                mm
                                                            </div>

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
        </>
    );
}

export default ProgramRoutineCreator;
