
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";
import { RadioGroup, Radio } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import { FormGroup, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import "../styles.css"



import {
    containerGridstyle, GridStyle, TextFieldStyle, CDropdown, ImportDataStyle, NamesTextFlied, EditTextFlied, DeleteStyle,
    ExportTextFlied, RadioButtonStyle, EditRadioStyle, Radiostyle, importradio, ExportRadio, EdittRadio, Deleteradio
} from './UICommonStyles';

const handleClick = (e) => {
    e.preventDefault();
};


const CaseDesign = ({
    expanded_panel,
    handlexpand,
    S_operation,
    executeUserAction,
    S_item,
    charallow,
    S_selectcase,
    handleSelection,
    S_caseSave,
    S_caseRename,
    handleSelectionRename,
    handleSelectionSaveAs,
    role,
    S_caseImport,
    ImporthandleSelection,
    S_imprtData1,
    classes,
    S_casenames,
    t,
    color1

}) => {
    return (
        <Grid item xs={12} style={{ marginTop: "7px" }}>
            <ExpansionPanel
                style={{
                    boxShadow: "none",
                    width: "100%",
                    backgroundColor: "#f5f5f5",
                }}
                expanded={expanded_panel === "panel2"}
                onChange={(event) => handlexpand("panel2", event)}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel2-header"
                >
                    <Typography id="service2">{t("caseDesign")}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid
                        container
                        style={containerGridstyle}

                    >
                        <Grid
                            item
                            xs={12}
                            style={GridStyle}
                        >
                            <RadioGroup
                                name="source"
                                value={S_operation}
                                onChange={(e) =>
                                    executeUserAction(e.target.value)
                                }
                                inputProps={{ size: "small" }}
                                row
                                style={{ width: "100%" }}
                            >

                                <div
                                    style={Radiostyle}
                                    className={classes.textField}
                                >
                                    <span
                                        style={NamesTextFlied}
                                    >
                                        {t("addCase")}
                                    </span>
                                </div>
                                <TextField
                                    style={TextFieldStyle}

                                    placeholder=""
                                    id="outlined-textcase1"
                                    // label={t('caseName')}
                                    value={S_item}
                                    inputProps={{ maxLength: 32 }}
                                    onChange={charallow}
                                    type="text"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,

                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: { fontSize: "12px", top: "3px" },
                                    }}
                                    disabled={role === "guest"}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />
                                <FormControlLabel
                                    value="addCase"
                                    control={
                                        <Radio
                                            style={RadioButtonStyle}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={<Box component="div" fontSize={2}></Box>}
                                    classes={classes.radioLabel}
                                    disabled={role === "guest"}
                                    className="RadioButtonControl"
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >

                            <div
                                style={Radiostyle}
                                className={classes.textField}
                            >
                                <span
                                    style={NamesTextFlied}
                                >
                                    {t("selectCase")}
                                </span>
                            </div>
                            <TextField
                                style={CDropdown}
                                id="outlined-typeselectcase"
                                value={S_selectcase}
                                onChange={handleSelection}
                                select
                                InputLabelProps={{
                                    shrink: true,

                                }}
                                InputProps={{
                                    style: { fontSize: "12px", bottom: "2px", top: "2px", height: "27px" },
                                }}
                                disabled={role === "guest"}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            >
                                {S_casenames.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                            </TextField>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <RadioGroup
                                name="source"
                                value={S_operation}
                                onChange={(e) =>
                                    executeUserAction(e.target.value)
                                }
                                row
                                style={{ width: "100%" }}
                            >
                                <FormControlLabel
                                    value="editCase"
                                    className="EditcaseradioGroup"
                                    style={EditRadioStyle}
                                    control={
                                        <Radio
                                            style={{ marginTop: "8px", marginLeft: "0px", height: "18px", marginBottom: "8px",padding: "0px" }}
                                            id="edit-case1"
                                        />
                                    }
                                    labelPlacement="start"
                                    label={
                                        <Box
                                            className="editcase"
                                            component="div"
                                            style={{ userSelect: "none", fontSize: "12px !important", marginTop: "12px", marginLeft: "0px", marginBottom: "10px", lineHeight: "1", lineBreak: "auto", }}
                                            fontsize={12}
                                        >
                                            {t("editCase")}
                                        </Box>
                                    }
                                    onClick={handleClick}
                                    classes={classes.radioLabel}
                                    disabled={
                                        role === "guest" || S_selectcase === ""
                                    }
                                />
                                <FormControlLabel
                                    value="deleteCase"
                                    className="EditcaseradioGroup"
                                    style={EditRadioStyle}
                                    control={
                                        <Radio
                                            style={{ marginTop: "9px", marginLeft: "0px", width: "20%", height: "18px", marginBottom: "9px" }}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={
                                        <Box className="deleteCase"
                                            component="div"
                                            style={{ width: "80%", userSelect: "none", fontSize: "12px !important", marginTop: "11px", marginLeft: "0px", lineBreak: "auto", lineHeight: "1", marginBottom: "9px" }}
                                            fontsize={12}
                                        >
                                            {t("deleteCase")}
                                        </Box>
                                    }
                                    onClick={handleClick}
                                    classes={classes.radioLabel}
                                    disabled={
                                        role === "guest" || S_selectcase === ""
                                    }
                                />
                                <FormControlLabel
                                    className="EditcaseradioGroup"
                                    value="exportData"
                                    control={
                                        <Radio
                                            style={{
                                                marginTop: "14px",
                                                left: "0px",
                                                bottom: "6px",
                                                width: "20%",
                                                height: "18px"
                                            }}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={
                                        <Box className="exportcasedata"
                                            component="div"
                                            style={{ width: "80%", userSelect: "none", pointerEvents: "none", fontSize: "12px !important", marginTop: "7px", marginLeft: "0px", marginBottom: "4px", lineBreak: "auto", lineHeight: 1, }}
                                            fontsize={12}
                                        >
                                            {t("exportData")}
                                        </Box>
                                    }
                                    onClick={handleClick}
                                    classes={classes.radioLabel}
                                    disabled={
                                        role === "guest" || S_selectcase === ""
                                    }
                                />
                            </RadioGroup>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <RadioGroup
                                name="source"
                                value={S_operation}
                                onChange={(e) =>
                                    executeUserAction(e.target.value)
                                }
                                inputProps={{ size: "small" }}
                                row
                                style={{ width: "100%" }}
                            >
                                <div
                                    style={Radiostyle}
                                    className={classes.textField}
                                >
                                    <span
                                        style={NamesTextFlied}
                                    >
                                        {t("rename")}
                                    </span>
                                </div>
                                <TextField
                                    style={TextFieldStyle}

                                    placeholder=""
                                    id="outlined-textcase2"
                                    inputProps={{ maxLength: 32 }}
                                    value={S_caseRename}
                                    onChange={handleSelectionRename}
                                    type="text"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,

                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: { fontSize: "12px", top: "3px" },
                                    }}
                                    disabled={role === "guest"}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />
                                <FormControlLabel
                                    value="Rename"
                                    control={
                                        <Radio
                                            style={RadioButtonStyle}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={<Box component="div" fontSize={2}></Box>}
                                    classes={classes.radioLabel}
                                    disabled={role === "guest"}
                                    style={{ margin: "auto 0%" }}
                                    className="RadioButtonControl"
                                />
                            </RadioGroup>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <RadioGroup
                                name="source"
                                value={S_operation}
                                onChange={(e) =>
                                    executeUserAction(e.target.value)
                                }
                                inputProps={{ size: "small" }}
                                row
                                style={{ width: "100%" }}
                            >
                                <div
                                    style={Radiostyle}
                                    className={classes.textField}
                                >
                                    <span
                                        style={NamesTextFlied}
                                    >
                                        {t("saveAs")}
                                    </span>
                                </div>
                                <TextField
                                    style={TextFieldStyle}

                                    placeholder=""
                                    id="outlined-textcase3"
                                    inputProps={{ maxLength: 32 }}
                                    value={S_caseSave}
                                    onChange={handleSelectionSaveAs}
                                    type="text"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,

                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: { fontSize: "12px", top: "3px" },
                                    }}
                                    disabled={role === "guest"}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />
                                <FormControlLabel
                                    value="SaveAs"
                                    control={
                                        <Radio
                                            style={RadioButtonStyle}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={<Box component="div" fontSize={2}></Box>}
                                    classes={classes.radioLabel}
                                    disabled={role === "guest"}
                                    style={{ margin: "auto 0%" }}
                                    className="RadioButtonControl"
                                />
                            </RadioGroup>
                        </Grid>
                       


                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <div
                                style={Radiostyle}
                                className={classes.textField}
                            >
                                <span
                                    style={NamesTextFlied}
                                >
                                    {t("importData")}
                                </span>
                            </div>
                            <TextField
                                style={ImportDataStyle}
                                id="outlined-typeimportDatacase"
                                select
                                InputLabelProps={{
                                    shrink: true,

                                }}
                                value={S_caseImport}
                                onChange={ImporthandleSelection}
                                InputProps={{
                                    style: { fontSize: "12px", bottom: "2px", top: "2px", height: "27px" },
                                }}
                                disabled={role === "guest"}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            >

                                {Array.isArray(S_imprtData1) && S_imprtData1.length !== 0 ?
                                    (S_imprtData1.map((value, index) =>
                                        (<MenuItem key={index} value={value.name}>{value.name}</MenuItem>)))
                                    :
                                    (<MenuItem disabled>No data found</MenuItem>)}
                            </TextField>

                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                    value={S_operation}
                                    onChange={(e) =>
                                        executeUserAction(e.target.value)
                                    }
                                    disabled={
                                        role === "guest" || S_selectcase === ""
                                    }
                                    style={{ width: "100%" }}
                                >
                                    <FormControlLabel
                                        id="ImportData1"
                                        value="ImportData"
                                        style={
                                            importradio
                                        }
                                        control={<Radio />}
                                        disabled={
                                            role === "guest" || S_selectcase === ""
                                        }
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>

    );
}


export default CaseDesign;