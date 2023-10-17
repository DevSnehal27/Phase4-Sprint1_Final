import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";

import {
    ExpansionPanelDetailsStyle, containerGridstyle, GridItemStyle, Origin1NameMargin, Origin1TextStyle, Origin1TextField, BasicImgStyle
    , Basic_WA_TextStyle, Basic_parent_div_3Style, Basic_parent_div_2_Style, Basic_WA_FontTextStyle
} from '../../DashboardPage_UI/UICommonStyles'




import {
    updateSelectionPal2,
    firstCase12OnChange, updateSelectionCase1, updateSelectionCase2,
    callBlurFor_WorkingareaX, callBlurFor_WorkingareaY, callBlurFor_WorkingareaoffsetX, callBlurFor_WorkingareaoffsetY, callBlurFor_WorkingareaZ
    , callBlurFor_Workingareafor2X, callBlurFor_Workingareafor2Y, callBlurFor_WorkingareaZfor2, callBlurFor_WorkingareaoffsetXfor2, callBlurFor_WorkingareaoffsetYfor2
} from '../Controller/bpController';





const BasicParameter = ({ handleChangepanel,
    drawPallet_1_2,
    colorchangepanel,
    isExpanded,
    handlePanelToggle,
    ChevronRightIcon,
    expanded_panel,
    enablefor2,
    handleSelection,
    originPal1,
    updateSelectionPal1,
    basic_parameter,
    enablefor1,
    originPal2,
    // onBlur_OriginPal2,
    firstcase_pal1,
    // firstCase12OnChange,
    // updateSelectionCase1,
    firstcase_pal2,
    // updateSelectionCase2,

    //
    errorWorkingaraeaWidth,
    errorHelperForWorkingareaWidth,
    // callBlurFor_WorkingareaX,

    errorWorkingaraeaLength,
    errorHelperForWorkingareaLength,
    G_Pallet_Length,
    S_WA_1_Length_Y_Dir,
    G_WA_1_Length_Y_Dir,

    errorWorkingaraeaHeight,
    errorHelperForWorkingareaHeight,
    S_WA_1_Height_Z_Dir,
    G_WA_1_Height_Z_Dir,

    // callBlurFor_WorkingareaY,

    //Offset
    errorWorkingaraeaoffsetLength,
    errorHelperForWorkingareaoffsetLength,
    WA_1_Offset_Y_Dir,

    errorWorkingaraeaoffsetWidth,
    errorHelperForWorkingareaoffsetWidth,
    // S_WA_1_Offset_X_Dir,
    // callBlurFor_WorkingareaoffsetX,

    //2
    errorWorkingaraeaWidthfor2,
    errorHelperForWorkingareaWidthfor2,
    WA_2_width_X_Dir,
    // callBlurFor_Workingareafor2X,

    errorWorkingaraeaLengthfor2,
    errorHelperForWorkingareaLengthfor2,
    S_WA_2_Length_Y_Dir,
    // callBlurFor_Workingareafor2Y,

    errorWorkingaraeaoffsetLengthfor2,
    errorHelperForWorkingareaoffsetLengthfor2,
    S_WA_2_Offset_Y_Dir,
    // callBlurFor_WorkingareaoffsetYfor2,

    errorWorkingaraeaoffsetWidthfor2,
    errorHelperForWorkingareaoffsetWidthfor2,
    S_WA_2_Offset_X_Dir,
    // callBlurFor_WorkingareaoffsetXfor2,


    t,
    color1,
    Green_arrow,
    Red_arrow,
    Blue_arrow,
    exceptThisSymbols1,
    exceptThisSymbols,
    firstCaseOriginChangeFlush,
    circle,
    updatePallet,
    selectedOne,
    selectedTwo,
    CasesSchemaA,
    CasesSchemaB,
    CasesSchemaC,
    cases_Schema_A1,
    cases_Schema_B1,
    cases_Schema_C1,
    cases_Schema_A2,
    cases_Schema_B2,
    cases_Schema_C2,
    G_firstcase_pal1,
    G_firstcase_pal2,

    G_WA_1_width_X_Dir,
    S_WA_1_width_X_Dir,
    G_Pallet_Width,
    setWA_1_width_X_Dir,
    setErrorWorkingaraeaWidth,
    setErrorHelperForWorkingareaWidth1,
    set_WA_1_Length_Y_Dir,
    setErrorWorkingaraeaLength,
    setErrorHelperForWorkingareaLength1,

    set_WA_1_Height_Z_Dir,
    setErrorWorkingaraeaHeight,
    setErrorHelperForWorkingareaheight1,

    G_originPal1,
    G_WA_1_Offset_X_Dir,
    S_WA_1_Offset_X_Dir,
    set_WA_1_Offset_X_Dir,
    setErrorWorkingaraeaoffsetWidth,
    setErrorHelperForWorkingareaoffsetWidth1,


    G_WA_1_Offset_Y_Dir,
    S_WA_1_Offset_Y_Dir,
    set_WA_1_Offset_Y_Dir,
    setErrorWorkingaraeaoffsetLength,
    setErrorHelperForWorkingareaoffsetLenght1,

    //Height 2
    errorWorkingaraeaHeightfor2,
    errorHelperForWorkingareaHeightfor2,
    S_WA_2_Height_Z_Dir,
    G_WA_2_Height_Z_Dir,
    set_WA_2_Height_Z_Dir,
    setErrorWorkingaraeaHeightfor2,
    setErrorHelperForWorkingareaHeightfor2,


    G_WA_2_width_X_Dir,
    S_WA_2_width_X_Dir,
    set_WA_2_width_X_Dir,
    setErrorWorkingaraeaWidthfor2,
    setErrorHelperForWorkingareaWidthfor2,


    G_WA_2_Length_Y_Dir,
    set_WA_2_Length_Y_Dir,
    setErrorWorkingaraeaLengthfor2,
    setErrorHelperForWorkingareaLengthfor2,

    G_originPal2,
    G_WA_2_Offset_X_Dir,
    set_WA_2_Offset_X_Dir,
    setErrorWorkingaraeaoffsetWidthfor2,
    setErrorHelperForWorkingareaoffsetWidthfor2,

    G_WA_2_Offset_Y_Dir,
    set_WA_2_Offset_Y_Dir,
    setErrorWorkingaraeaoffsetLengthfor2,
    setErrorHelperForWorkingareaoffsetLengthfor2,
    setS_role


}) => {
    return (

        <Grid item xs={12} style={{ marginTop: "-9px", display: setS_role !== "admin" ? "none" : "block" }}>
            <ExpansionPanel style={ExpansionPanelDetailsStyle}
                expanded={expanded_panel === 'panel1'}
                onChange={handleChangepanel('panel1')}
                onClick={(e) => drawPallet_1_2(e)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon style={{backgroundColor: expanded_panel ? 'green' : 'green',}} />}
                    id="panel1-header"
                >
                    <Typography>{t('BasicParameter')}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container style={containerGridstyle} >

                        <Grid item xs={12} className='Basics' style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('originPal1')}
                                // className={classes.textField}
                                margin="dense" style={Origin1NameMargin}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: Origin1TextStyle
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={Origin1TextField}
                                id="outlined-typebp1"
                                disabled={enablefor2 || setS_role === "regular"}
                                value={originPal1}
                                onChange={handleSelection("OriginPal1")}
                                onBlur={updateSelectionPal1}
                                select
                                InputLabelProps={{
                                    shrink: true,
                                    // style: { fontSize: "12px", top: "2px", height: "27px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "2px", height: "27px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {basic_parameter.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} className="Basics" style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('originPal2')}
                                // className={classes.textField}
                                margin="dense" style={Origin1NameMargin}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: Origin1TextStyle
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={Origin1TextField}
                                id="outlined-typebp2"
                                disabled={enablefor1 || setS_role === "regular"}
                                value={originPal2}

                                onChange={handleSelection("OriginPal2")}
                                onBlur={(e) => updateSelectionPal2(
                                    CasesSchemaA,
                                    CasesSchemaB,
                                    CasesSchemaC,
                                    cases_Schema_A1,
                                    cases_Schema_B1,
                                    cases_Schema_C1,
                                    cases_Schema_A2,
                                    cases_Schema_B2,
                                    cases_Schema_C2,
                                    selectedOne,
                                    selectedTwo,
                                    circle,
                                    G_firstcase_pal2,
                                    G_firstcase_pal1,
                                    updatePallet,
                                )}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                    shrink: true,
                                    // style: { fontSize: "12px", top: "2px", height: "27px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "2px", height: "27px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {basic_parameter.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>

                        <Grid item xs={12} className="Basics" style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('firstCasePal1')}
                                // className={classes.textField}
                                margin="dense" style={Origin1NameMargin}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: Origin1TextStyle
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={Origin1TextField}
                                id="outlined-typebp3"
                                disabled={enablefor2 || setS_role === "regular"}
                                value={firstcase_pal1}
                                onChange={(e) => firstCase12OnChange("pal1", e, firstCaseOriginChangeFlush, circle)}
                                onBlur={(e) => updateSelectionCase1(
                                    circle,
                                    updatePallet,
                                    selectedOne,
                                    selectedTwo,
                                    CasesSchemaA,
                                    CasesSchemaB,
                                    CasesSchemaC,
                                    cases_Schema_A1,
                                    cases_Schema_B1,
                                    cases_Schema_C1,
                                    cases_Schema_A2,
                                    cases_Schema_B2,
                                    cases_Schema_C2,
                                    G_firstcase_pal1,
                                    G_firstcase_pal2,
                                    e
                                )}
                                select
                                InputLabelProps={{
                                    shrink: true,
                                    // style: { fontSize: "12px", top: "2px", height: "27px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "2px", height: "27px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {basic_parameter.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>


                        <Grid item xs={12} className="Basics" style={GridItemStyle}>
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('firstCasePal2')}
                                // className={classes.textField}
                                margin="dense" style={Origin1NameMargin}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: Origin1TextStyle
                                }}
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                style={Origin1TextField}
                                id="outlined-typebp4"
                                disabled={enablefor1 || setS_role === "regular"}
                                value={firstcase_pal2}

                                // onChange={this.handleSelection("Firstpal2")}
                                onChange={(e) => firstCase12OnChange("pal2", e, firstCaseOriginChangeFlush, circle)}
                                onBlur={(e) => updateSelectionCase2(
                                    circle,
                                    updatePallet,
                                    selectedOne,
                                    selectedTwo,
                                    CasesSchemaA,
                                    CasesSchemaB,
                                    CasesSchemaC,
                                    cases_Schema_A1,
                                    cases_Schema_B1,
                                    cases_Schema_C1,
                                    cases_Schema_A2,
                                    cases_Schema_B2,
                                    cases_Schema_C2,
                                    G_firstcase_pal1,
                                    G_firstcase_pal2,
                                    e,
                                )}
                                select
                                // className={classes.textField3}
                                InputLabelProps={{
                                    shrink: true,
                                    // style: { fontSize: "12px", top: "2px", height: "27px" }
                                }}
                                InputProps={{
                                    style: { fontSize: "12px", top: "2px", height: "27px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {basic_parameter.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}

                            </TextField>
                        </Grid>


                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
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
                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Green_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA1_width"
                                    error={errorWorkingaraeaWidth}
                                    helperText={errorHelperForWorkingareaWidth}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_width_X_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaX(
                                        e,
                                        updatePallet,
                                        G_WA_1_width_X_Dir,
                                        S_WA_1_width_X_Dir,
                                        G_Pallet_Width,
                                        setWA_1_width_X_Dir,
                                        setErrorWorkingaraeaWidth,
                                        setErrorHelperForWorkingareaWidth1,
                                    )}
                                    onChange={handleSelection("working_area_1_Width_X_Direction")}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    // width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
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

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Red_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA1_length"
                                    error={errorWorkingaraeaLength}
                                    helperText={errorHelperForWorkingareaLength}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_Length_Y_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaY(
                                        e,
                                        updatePallet,
                                        G_WA_1_Length_Y_Dir,
                                        G_Pallet_Length,
                                        set_WA_1_Length_Y_Dir,
                                        setErrorWorkingaraeaLength,
                                        setErrorHelperForWorkingareaLength1,
                                    )}
                                    onChange={handleSelection("working_area_1_Length_Y_Direction")}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    width="60"
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

{/* for height area 1 */}
<Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {t('workingArea1Height')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Blue_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA1_length"
                                    error={errorWorkingaraeaHeight}
                                    helperText={errorHelperForWorkingareaHeight}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_Height_Z_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaZ(
                                        e,
                                        updatePallet,
                                        G_WA_1_Height_Z_Dir,
                                        set_WA_1_Height_Z_Dir,
                                        setErrorWorkingaraeaHeight,
                                        setErrorHelperForWorkingareaheight1,
                                        // G_WA_1_Length_Y_Dir,
                                        // G_Pallet_Length,
                                        // set_WA_1_Length_Y_Dir,
                                        // setErrorWorkingaraeaLength,
                                        // setErrorHelperForWorkingareaLength1,
                                    )}
                                    onChange={handleSelection("working_area_1_Height_Z_Direction")}
                                    // onChange={(e)=>{
                                    //     console.log(e.target.value)
                                    //     set_WA_1_Height_Z_Dir=e.target.value
                                    //     // this.setState({
                                    //     //     set_WA_1_Height_Z_Dir:e.target.value
                                    //     // })
                                    // }}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    width="60"
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>
{/* for height area 1*/}

                        {/* Offset  */}

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
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

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Green_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA1_offsetY"
                                    error={errorWorkingaraeaoffsetLength}
                                    helperText={errorHelperForWorkingareaoffsetLength}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_Offset_Y_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaoffsetY(
                                        e,
                                        G_originPal1,
                                        G_Pallet_Width,
                                        G_WA_1_width_X_Dir,
                                        G_WA_1_Offset_Y_Dir,
                                        S_WA_1_Offset_Y_Dir,
                                        set_WA_1_Offset_Y_Dir,
                                        setErrorWorkingaraeaoffsetLength,
                                        setErrorHelperForWorkingareaoffsetLenght1,
                                        updatePallet,
                                    )}
                                    onChange={handleSelection("working_area_1_Offset_Y_Direction")}
                                    onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}

                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
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

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Red_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA1_offsetX"
                                    error={errorWorkingaraeaoffsetWidth}
                                    helperText={errorHelperForWorkingareaoffsetWidth}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor2 || setS_role === "regular"}
                                    value={S_WA_1_Offset_X_Dir}
                                    onBlur={(e) => callBlurFor_WorkingareaoffsetX(
                                        e,
                                        G_originPal1,
                                        G_Pallet_Length,
                                        G_WA_1_Length_Y_Dir,
                                        G_WA_1_Offset_X_Dir,
                                        S_WA_1_Offset_X_Dir,
                                        set_WA_1_Offset_X_Dir,
                                        setErrorWorkingaraeaoffsetWidth,
                                        setErrorHelperForWorkingareaoffsetWidth1,
                                        updatePallet
                                    )}
                                    onChange={handleSelection("working_area_1_Offset_X_Direction")}
                                    onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        {/* 2 */}

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
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

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Green_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA2_width"
                                    error={errorWorkingaraeaWidthfor2}
                                    helperText={errorHelperForWorkingareaWidthfor2} //done up to 
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}
                                    value={S_WA_2_width_X_Dir}
                                    onChange={handleSelection("working_area_2_Width_X_Direction")}
                                    onBlur={(e) => callBlurFor_Workingareafor2X(
                                        e,
                                        G_WA_2_width_X_Dir,

                                        G_Pallet_Width,
                                        set_WA_2_width_X_Dir,
                                        setErrorWorkingaraeaWidthfor2,
                                        setErrorHelperForWorkingareaWidthfor2,
                                        updatePallet,

                                    )}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}

                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
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

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Red_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA2_length"
                                    error={errorWorkingaraeaLengthfor2}
                                    helperText={errorHelperForWorkingareaLengthfor2}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}

                                    value={S_WA_2_Length_Y_Dir}
                                    onChange={handleSelection("working_area_2_Length_Y_Direction")}
                                    onBlur={(e) => callBlurFor_Workingareafor2Y(
                                        e,
                                        G_Pallet_Length,
                                        G_WA_2_Length_Y_Dir,
                                        set_WA_2_Length_Y_Dir,
                                        setErrorWorkingaraeaLengthfor2,
                                        setErrorHelperForWorkingareaLengthfor2,
                                        updatePallet
                                    )}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

{/* for height area 2*/}

<Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
                        >
                            <div id="parent_div_1">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >
                                    {t('workingArea2Height')}
                                </div>
                            </div>
                            <div id="parent_div_2">
                                <div
                                    class="child_div_1"
                                    style={{ fontSize: 12 }}
                                >

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Blue_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA2_length"
                                    error={errorWorkingaraeaHeightfor2}
                                    helperText={errorHelperForWorkingareaHeightfor2}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}
                                    value={S_WA_2_Height_Z_Dir}
                                    onChange={handleSelection("working_area_2_Height_Z_Direction")}
                                    onBlur={(e) => callBlurFor_WorkingareaZfor2(
                                        e,
                                        updatePallet,
                                        G_WA_2_Height_Z_Dir,
                                        // G_Pallet_Length,
                                        set_WA_2_Height_Z_Dir,
                                        setErrorWorkingaraeaHeightfor2,
                                        setErrorHelperForWorkingareaHeightfor2,
                                    )}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

{/* for height area 2*/}
                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
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

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Green_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA2_offsetY"
                                    error={errorWorkingaraeaoffsetLengthfor2}
                                    helperText={errorHelperForWorkingareaoffsetLengthfor2}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}

                                    value={S_WA_2_Offset_Y_Dir}
                                    onChange={handleSelection("working_area_2_Offset_Y_Direction")}
                                    onBlur={(e) => callBlurFor_WorkingareaoffsetYfor2(
                                        e,
                                        G_originPal2,
                                        G_WA_2_Offset_Y_Dir,
                                        G_WA_2_width_X_Dir,
                                        G_Pallet_Width,
                                        set_WA_2_Offset_Y_Dir,
                                        setErrorWorkingaraeaoffsetLengthfor2,
                                        setErrorHelperForWorkingareaoffsetLengthfor2,
                                        updatePallet,
                                    )}
                                    onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className="Basics"
                            style={GridItemStyle}
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

                                    <div>
                                        <section className="one-fourth" id="html">
                                            <img src={Red_arrow} draggable="false" style={BasicImgStyle} />
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={Basic_parent_div_2_Style}
                            >
                                <TextField
                                    style={Basic_WA_TextStyle}
                                    id="WA2_offsetX"
                                    error={errorWorkingaraeaoffsetWidthfor2}
                                    helperText={errorHelperForWorkingareaoffsetWidthfor2}
                                    type="number"
                                    margin="dense"
                                    disabled={enablefor1 || setS_role === "regular"}

                                    value={S_WA_2_Offset_X_Dir}
                                    onChange={handleSelection("working_area_2_Offset_X_Direction")}
                                    onBlur={(e) => callBlurFor_WorkingareaoffsetXfor2(
                                        e,
                                        G_originPal2,
                                        G_WA_2_Length_Y_Dir,
                                        G_Pallet_Length,
                                        G_WA_2_Offset_X_Dir,
                                        set_WA_2_Offset_X_Dir,
                                        setErrorWorkingaraeaoffsetWidthfor2,
                                        setErrorHelperForWorkingareaoffsetWidthfor2,
                                        updatePallet,
                                    )}
                                    onKeyDown={e => exceptThisSymbols1.includes(e.key) && e.preventDefault()}
                                    width="60"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: Basic_WA_FontTextStyle
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div id="parent_div_3">
                                <div
                                    class="child_div_1"
                                    style={Basic_parent_div_3Style}
                                >
                                    mm{" "}
                                </div>
                            </div>
                        </Grid>



                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    );
}


export default BasicParameter;