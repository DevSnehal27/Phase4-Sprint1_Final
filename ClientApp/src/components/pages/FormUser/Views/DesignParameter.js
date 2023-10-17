import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";
import { toast } from 'material-react-toastify';

import {
    handleSelection_PalletType,
    handleSelectionForinterWidth,
    handleSelectionForinterLength,
    updateSelectionForWidth,
    updateSelectionForLength,
    updateSelection3,
    handleChangeForCasesSchemaA,
    handleChangeForCasesSchemaB,
    handleChangeForCasesSchemaC,
    changeLayer,
    handleSelection_CaseType,
    updateSelection2
} from '../Controller/dpController'


import {
    ExpansionPanelDetailsStyle, GridTopStyle, containerGridstyle, GridItemStyle, DesignP_TextStyle
    , Origin1TextField, DesignP_TextName_Style, DesignP_TextfieldStyle, DesignP_FontTextStyle
} from '../../DashboardPage_UI/UICommonStyles'

const DesignParameter = ({ handleChangepanel,
    drawPallet_1_2,
    expanded_panel,
    value_PalletType,
    onBlur_PalletType,
    value_CaseType,
    onBlur_CaseType,
    onChange_CaseType,
    value_IntermediateLayerType,
    value_IntermediateLayerWidth,
    value_IntermediateLayerLength,
    value_LayerCreator,
    onChange_LayerCreator,
    onBlur_LayerCreator,
    value_SchemaA,
    onChange_SchemaA,
    onBlur_SchemaA,
    value_SchemaB,
    onChange_SchemaB,
    onBlur_SchemaB,
    value_SchemaC,
    onChange_SchemaC,
    onBlur_SchemaC,
    t,
    color1,
    typeoptions1,
    WA_1_width_X_Dir,
    WA_1_Length_Y_Dir,
    set_WA_1_Height_Z_Dir,
    set_WA_2_Height_Z_Dir,
    countOfIntermediateLayer,
    G_WA_1_Offset_Y_Dir,
    G_WA_1_Offset_X_Dir,
    WA_2_width_X_Dir,
    WA_2_Length_Y_Dir,
    G_WA_2_Offset_Y_Dir,
    G_WA_2_Offset_X_Dir,
    typeoptions3,
    error_NumberOfInter,
    error_NumberOfInterWidth,
    error_NumberOfInterLength,
    helper_Text,
    helper_Text_Width,
    helper_Text_Length,
    error1,
    helperText1,
    exceptThisSymbols,
    palletType1,
    palletType2,
    updatefor_Basiparameter_working_Area,
    handleSelection_intermediateLayer,
    setPallete_Type,
    setintermediate_Layer_Type,
    updatePallet,
    G_intermediateLayerType1,
    G_intermediateLayerType2,
    S_errorHelperForInter,
    S_errorNumberOfInter,
    setS_errorHelperForInter,
    setS_errorHelperForInterWidth,
    setS_errorHelperForInterLength,
    setS_errorNumberOfInter,
    setS_errorNumberOfInterWidth,
    setS_errorNumberOfInterLength,
    setS_intermediate_Layer_Type,
    setS_intermediate_Layer_Width,
    setS_intermediate_Layer_Length,
    G_setVariantName_SchemaA,
    G_cases_Schema_A1,
    G_CasesSchemaA,
    G_cases_Schema_A2,
    G_colorA,
    G_colorB,
    G_colorC,
    setSetVariantName_SchemaA,
    setCases_Schema_A,
    casesSchemaPrcUpdate,
    forceUpdate,
    G_setVariantName_SchemaB,
    G_cases_Schema_B1,
    G_CasesSchemaB,
    G_cases_Schema_B2,
    setSetVariantName_SchemaB,
    setCases_Schema_B,
    setS_errorNumberOfLayer,
    setS_errorHelperForLayer,
    setS_layers,
    G_noOfLayers,
    setS_no_Of_Layers,
    G_drawCaseImage,
    setS_outside_Label_Priority,
    G_outside_Label_Priority,
    splitCaseType,
    G_listForOutsideLabelPrior,
    getCallLabel,
    G_typeoptions5,
    G_caseType,
    selectedOne,
    selectedTwo,
    firstCaseOriginChangeFlush,
    firstCaseOriginChangeFlushA,
    firstCaseOriginChangeFlushB,
    firstCaseOriginChangeFlushC,
    G_tempLabelindex,
    setS_case_Type,
    clearingSchemaFields,
    setS_setDefaultCase,
    setS_caseTypeSet,
    G_setVariantName_SchemaC,
    setS_setVariantName_SchemaC,
    G_cases_Schema_C1,
    G_CasesSchemaC,
    G_cases_Schema_C2,
    setS_cases_Schema_C,
    setS_pallete_Type,
    G_palletType1,
    G_palletType2,
    clearingSchemaFields1,
    S1_dyMarginTop_swiperText,
    S1_dyMarginLeft_swiperText,
    S1_dyMarginBottom_swiperText,
    // toast,
    setS_role,
    backgroundColor,
    pallet
}) => {
    console.log(pallet,"kkkkk",set_WA_2_Height_Z_Dir)
    var height
    if(value_CaseType != null){
        var height=value_CaseType.split("_")
    }
    else{
        var height=0
    }
    return (

        <Grid item xs={12} style={setS_role === "admin" ? GridTopStyle : { marginTop: "-9px" }} >
            <ExpansionPanel style={ExpansionPanelDetailsStyle}
                expanded={expanded_panel === 'panel2'}
                onChange={handleChangepanel('panel2')}
                onClick={(e) => drawPallet_1_2(e)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon style={{backgroundColor}}
                        // style={{backgroundColor: expanded_panel !==(setCases_Schema_B == 0 && setCases_Schema_A == 0 && setCases_Schema_B == 0)? '#f5f5f5' : '#f5f5f5', }}
                        />}
                    // display: setS_role !== "admin" ? "none" : "block" 
                    id="panel1-header"
                >
                    <Typography>{t('designParameter')}</Typography>

                </ExpansionPanelSummary>

                <ExpansionPanelDetails>

                    <Grid container style={containerGridstyle} >

                        <Grid item xs={12} className="Basic" style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('palletType')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27, width: "42.8%" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextStyle
                                }}
                                variant="standard"
                                size="large"
                            />
                            <TextField
                                style={Origin1TextField}
                                id="outlined-typedp1"
                                value={value_PalletType}
                                onChange={(e) => handleSelection_PalletType(
                                    "palletType",
                                    e,
                                    firstCaseOriginChangeFlush,
                                    setS_pallete_Type,
                                    G_palletType1,
                                    G_palletType2,
                                    updatefor_Basiparameter_working_Area,
                                    handleSelection_intermediateLayer,
                                    setPallete_Type,
                                    setintermediate_Layer_Type,
                                    setS_errorHelperForInter,
                                    setS_errorNumberOfInter,
                                    S1_dyMarginTop_swiperText,
                                    S1_dyMarginLeft_swiperText,
                                    S1_dyMarginBottom_swiperText,
                                    toast,
                                    clearingSchemaFields
                                )}
                                onBlur={onBlur_PalletType}
                                select


                                InputLabelProps={{
                                    shrink: true,
                                    // style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "3px", height: "27px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {typeoptions1.filter((onePalType, i) => {

                                    let split_width = onePalType.split(" ")[4];
                                    let split_Length = onePalType.split(" ")[2];
                                    // let WA_width_X_Dir = selectedOne ? WA_1_width_X_Dir : WA_2_width_X_Dir ;
                                    // let WA_Length_Y_Dir = selectedOne ? WA_1_Length_Y_Dir : WA_2_Length_Y_Dir;
                                    // let G_WA_Offset_Y_Dir = selectedOne ? G_WA_1_Offset_Y_Dir : G_WA_2_Offset_Y_Dir;
                                    // let G_WA_Offset_X_Dir = selectedOne ? G_WA_1_Offset_X_Dir : G_WA_2_Offset_X_Dir ;

                                    if (((WA_1_Length_Y_Dir - Math.abs(G_WA_1_Offset_X_Dir)) >= split_Length && (WA_1_width_X_Dir - Math.abs(G_WA_1_Offset_Y_Dir)) >= split_width) && ((WA_2_Length_Y_Dir - Math.abs(G_WA_2_Offset_X_Dir)) >= split_Length && (WA_2_width_X_Dir - Math.abs(G_WA_2_Offset_Y_Dir)) >= split_width)) {

                                        return true;
                                    } else {
                                        return false;
                                    }

                                }).map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('caseType')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27, width: "42.8%" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextStyle
                                }}
                                variant="standard"
                                size="small"
                            />

                            <TextField
                                style={Origin1TextField}
                                id="outlined-typedp2"
                                value={value_CaseType}
                                onBlur={(e) => updateSelection2(updatePallet, e)}
                                onChange={(event) => handleSelection_CaseType(
                                    "caseType",
                                    event,
                                    G_drawCaseImage,
                                    setS_outside_Label_Priority,
                                    G_outside_Label_Priority,
                                    splitCaseType,
                                    G_listForOutsideLabelPrior,
                                    getCallLabel,
                                    G_typeoptions5,
                                    G_caseType,
                                    selectedOne,
                                    selectedTwo,
                                    firstCaseOriginChangeFlush,
                                    G_tempLabelindex,
                                    setS_case_Type,
                                    clearingSchemaFields,
                                    setS_setDefaultCase,
                                    setS_caseTypeSet
                                )}
                                // onChange={(event)=>onChange_CaseType("caseType")(event)}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                    shrink: true,
                                    // style: { fontSize: "12px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "3px", height: "27px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {typeoptions3.map((value, index) => {

                                    // let displayingValue = value.split("_")[0];
                                    let displayingValue = value.split("_", (value.split("_").length - 3)).join('_');

                                    return <MenuItem value={value}>{displayingValue}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('intermediateLayerType')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27 }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextName_Style
                                }}
                                variant="standard"
                                size="small"
                            />

                            <TextField
                                style={DesignP_TextfieldStyle}
                                error={error_NumberOfInter}
                                helperText={helper_Text}
                                id="outlined-zdimdp3"
                                value={value_IntermediateLayerType}
                                onChange={(e) => handleSelection_PalletType(
                                    "intermediateLayerType",
                                    e,
                                    firstCaseOriginChangeFlush,
                                    setS_pallete_Type,
                                    G_palletType1,
                                    G_palletType2,
                                    updatefor_Basiparameter_working_Area,
                                    handleSelection_intermediateLayer,
                                    setPallete_Type,
                                    setintermediate_Layer_Type,
                                    setS_errorHelperForInter,
                                    setS_errorNumberOfInter,
                                    S1_dyMarginTop_swiperText,
                                    S1_dyMarginLeft_swiperText,
                                    S1_dyMarginBottom_swiperText,
                                )}
                                onBlur={(e) => updateSelection3(
                                    e,
                                    "intermediateLayerType",
                                    updatePallet,
                                    G_intermediateLayerType1,
                                    G_intermediateLayerType2,
                                    setS_errorHelperForInter,
                                    setS_errorNumberOfInter,
                                    setS_intermediate_Layer_Type)}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                    style: DesignP_FontTextStyle
                                }}
                                InputProps={{
                                    style: DesignP_FontTextStyle
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            />
                            <div
                                class="child_div_2"
                                style={{ fontSize: 12, marginTop: "16px", marginLeft: "148px" }}
                            >
                                mm{" "}
                            </div>
                        </Grid>

                        {/* -------------------------------------------------------------------------------------------------------------------------------*/}
                        <Grid item xs={12} style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('intermediateLayerWidth')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27 }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextName_Style
                                }}
                                variant="standard"
                                size="small"
                            />

                            <TextField
                                style={DesignP_TextfieldStyle}
                                error={error_NumberOfInterWidth}
                                helperText={helper_Text_Width}
                                id="outlined-zdimdp3"
                                value={value_IntermediateLayerWidth}
                                // onChange={(e)=>console.log(e.target.value)}
                                onChange={(e) => handleSelectionForinterWidth(
                                    "intermediateLayerWidth",
                                    e,
                                    firstCaseOriginChangeFlush,
                                    setS_pallete_Type,
                                    G_palletType1,
                                    G_palletType2,
                                    updatefor_Basiparameter_working_Area,
                                    handleSelection_intermediateLayer,
                                    setPallete_Type,
                                    setS_errorHelperForInterWidth,
                                    setS_errorNumberOfInterWidth,
                                    setS_intermediate_Layer_Width,
                                    // setintermediate_Layer_Type,
                                    // setS_errorHelperForInter,
                                    // setS_errorNumberOfInter,
                                    S1_dyMarginTop_swiperText,
                                    S1_dyMarginLeft_swiperText,
                                    S1_dyMarginBottom_swiperText,

                                )}
                                onBlur={(e) => updateSelectionForWidth(
                                    e,
                                    "intermediateLayerWidth",
                                    updatePallet,
                                    G_palletType1,
                                    G_palletType2,
                                    // G_intermediateLayerType1,
                                    // G_intermediateLayerType2,
                                    // setS_errorHelperForInter,
                                    // setS_errorNumberOfInter,
                                    // setS_intermediate_Layer_Type,
                                    setS_errorHelperForInterWidth,
                                    setS_errorNumberOfInterWidth,
                                    setS_intermediate_Layer_Width,
                                )}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                    style: DesignP_FontTextStyle
                                }}
                                InputProps={{
                                    style: DesignP_FontTextStyle
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            />
                            <div
                                class="child_div_2"
                                style={{ fontSize: 12, marginTop: "16px", marginLeft: "148px" }}
                            >
                                mm{" "}
                            </div>
                        </Grid>
                        <Grid item xs={12} style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('intermediateLayerLength')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27 }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextName_Style
                                }}
                                variant="standard"
                                size="small"
                            />

                            <TextField
                                style={DesignP_TextfieldStyle}
                                error={error_NumberOfInterLength}
                                helperText={helper_Text_Length}
                                id="outlined-zdimdp3"
                                value={value_IntermediateLayerLength}
                                // onChange={(e)=>console.log(e.target.value)}
                                onChange={(e) => handleSelectionForinterLength(
                                    "intermediateLayerLength",
                                    e,
                                    firstCaseOriginChangeFlush,
                                    setS_pallete_Type,
                                    G_palletType1,
                                    G_palletType2,
                                    updatefor_Basiparameter_working_Area,
                                    handleSelection_intermediateLayer,
                                    setPallete_Type,
                                    setS_errorHelperForInterLength,
                                    setS_errorNumberOfInterLength,
                                    setS_intermediate_Layer_Length,
                                    // setintermediate_Layer_Type,
                                    // setS_errorHelperForInter,
                                    // setS_errorNumberOfInter,
                                    S1_dyMarginTop_swiperText,
                                    S1_dyMarginLeft_swiperText,
                                    S1_dyMarginBottom_swiperText,

                                )}
                                onBlur={(e) => updateSelectionForLength(
                                    e,
                                    "intermediateLayerLength",
                                    updatePallet,
                                    G_palletType1,
                                    G_palletType2,
                                    // G_intermediateLayerType1,
                                    // G_intermediateLayerType2,
                                    // setS_errorHelperForInter,
                                    // setS_errorNumberOfInter,
                                    // setS_intermediate_Layer_Type,
                                    setS_errorHelperForInterLength,
                                    setS_errorNumberOfInterLength,
                                    setS_intermediate_Layer_Length,
                                )}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                    style: DesignP_FontTextStyle
                                }}
                                InputProps={{
                                    style: DesignP_FontTextStyle
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            />
                            <div
                                class="child_div_2"
                                style={{ fontSize: 12, marginTop: "16px", marginLeft: "148px" }}
                            >
                                mm{" "}
                            </div>
                        </Grid>
                        {/* ..................................................................................... */}
                        <Grid item xs={12} style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberOfLayers')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27 }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextName_Style
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={DesignP_TextfieldStyle}
                                error={error1}
                                helperText={helperText1}
                                id="outlined-zdim-dpzdim"
                                // label="Height"
                                value={value_LayerCreator}
                                onChange={(e) => changeLayer(
                                    e,
                                    setS_errorNumberOfLayer,
                                    setS_errorHelperForLayer,
                                    setS_layers,
                                    G_noOfLayers,
                                    setS_no_Of_Layers,
                                    height,
                                    set_WA_1_Height_Z_Dir,
                                    set_WA_2_Height_Z_Dir,
                                    pallet
                                )}
                                onBlur={onBlur_LayerCreator}
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
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                            />


                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberCasesSchemaA')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27 }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextName_Style
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={DesignP_TextfieldStyle}
                                id="outlined-zdim-dpA"
                                // label="Height"
                                value={value_SchemaA}
                                onChange={(e) => handleChangeForCasesSchemaA(
                                    "CasesSchemaA",
                                    e,
                                    G_setVariantName_SchemaA,
                                    G_cases_Schema_A1,
                                    G_CasesSchemaA,
                                    G_cases_Schema_A2,
                                    G_colorA,
                                    G_colorB,
                                    G_colorC,
                                    setSetVariantName_SchemaA,
                                    setCases_Schema_A,
                                    casesSchemaPrcUpdate,
                                    forceUpdate,
                                    clearingSchemaFields1,
                                    firstCaseOriginChangeFlushA
                                )}
                                onBlur={onBlur_SchemaA}
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
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                            />


                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberCasesSchemaB')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27 }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextName_Style
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={DesignP_TextfieldStyle}
                                id="outlined-zdimdpB"
                                // label="Height"
                                value={value_SchemaB}
                                //disabled={true}
                                onChange={(e) => handleChangeForCasesSchemaB(
                                    "CasesSchemaB",
                                    e,
                                    G_setVariantName_SchemaB,
                                    G_cases_Schema_B1,
                                    G_CasesSchemaB,
                                    G_cases_Schema_B2,
                                    G_colorA,
                                    G_colorB,
                                    G_colorC,
                                    setSetVariantName_SchemaB,
                                    setCases_Schema_B,
                                    forceUpdate,
                                    casesSchemaPrcUpdate,
                                    clearingSchemaFields1,
                                    firstCaseOriginChangeFlushB
                                )}
                                onBlur={onBlur_SchemaB}
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
                                margin="dense"
                                // style={{ height: 38 ,marginLeft:90}}
                                variant="outlined"
                                size="small"
                            />


                        </Grid>

                        <Grid item xs={12} style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('numberCasesSchemaC')}
                                // className={classes.textField}
                                margin="dense" style={{ height: 27 }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: DesignP_TextName_Style
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={DesignP_TextfieldStyle}
                                id="outlined-zdidpC"
                                // label="Height"
                                value={value_SchemaC}
                                onChange={(e) => handleChangeForCasesSchemaC(
                                    "CasesSchemaC",
                                    e,
                                    G_setVariantName_SchemaC,
                                    setS_setVariantName_SchemaC,
                                    G_cases_Schema_C1,
                                    G_CasesSchemaC,
                                    G_cases_Schema_C2,
                                    setS_cases_Schema_C,
                                    G_colorA,
                                    G_colorB,
                                    G_colorC,
                                    casesSchemaPrcUpdate,
                                    forceUpdate,
                                    clearingSchemaFields1,
                                    firstCaseOriginChangeFlushC
                                )}
                                onBlur={onBlur_SchemaC}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                //disabled={true}
                                type="number"
                                // className={classes.textField2}
                                InputLabelProps={{
                                    shrink: true,
                                    style: DesignP_FontTextStyle
                                }}
                                InputProps={{
                                    style: DesignP_FontTextStyle
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
    );
}


export default DesignParameter;



