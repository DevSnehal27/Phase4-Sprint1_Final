


import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";
import { RadioGroup, Radio } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ChromePicker, SketchPicker, TwitterPicker, PhotoshopPicker, CirclePicker, GithubPicker } from "react-color";


import {
    ExpansionPanelStyle, GridItemStyle, ArrowStyle, inputPropsStyle2, LeftTextflied,
  UnitStyles1, inputPropsStyle, UnitStyle2, GridTopStyle, containerGridstyle
} from '../../../DashboardPage_UI/UICommonStyles'

const LabelWizard = ({
    expanded_panel,
    handlexpand,
    S_errorText,
    S_labelname,
    handleTextChange,
    S_operation,
    executeUserAction,
    addMUILabel,
    S_enable,
    S_setHidden,
    forSetHidden,
    S_setColor,
    S_labeltype,
    handleChange,
    labelTypeForDatabase,
    S_topWidthCheck,
    S_topWidthText,
    S_labelwidth,
    handleChangeForWidth,
    callBlur2,
    S_topLengthCheck,
    S_topLengthText,
    S_labellength,
    handleChangeForLength,
    callBlur1,
    S_errorLabelPosACondition,
    S_errorLabelPosA,
    S_labela,
    handleChangeForPositionA,
    callBlurForPosA,
    S_errorLabelPosB,
    S_errorLabelPosBCondition,
    S_labelb,
    handleChangeForPositionB,
    callBlurForPosB,
    S_selectlabel,
    labelNames,
    labelNameLength,
    typeoptions,
    forSetColor,
    role,
    orange,
  S_colorleft,
  S_colormarginTop,
    purple,
    handleSelection,
    exceptThisSymbols,
    t,
    color1,
    classes


}) => {
    return (


    <Grid item xs={12} style={GridTopStyle} >
      <ExpansionPanel
        style={ExpansionPanelStyle}

        expanded={expanded_panel === 'casepanel2'}
        onChange={(event) => handlexpand('casepanel2', event)}                          >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel2-header"
          >
            <Typography>{t('LabelWizard')}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid container style={containerGridstyle} >

            <Grid item xs={12} style={GridItemStyle}>
              {/* <TextField style={{ height: "27px", userSelect: "none", draggable: "false", bottom: "3px", LeftTextflied, left: "1px", width: "43%", }}
                id="outlined-read-only-inputprrt22"
                label=""
                defaultValue={t('AddLabel')}
                className={classes.textField}
                margin="dense"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: inputPropsStyle2
                }}
                variant="standard"
                size="small"
              /> */}
              <div style={{height: "27px", userSelect: "none", draggable: "false", marginTop:"12px",marginLeft:"2px", width: "43%",}}>
                <span
                  style={{height: "27px", userSelect: "none", draggable: "false",marginTop:"12px",marginLeft:"10px", fontSize:"12px",  width: "43%",}}
                >
                  {t('AddLabel')}
                </span>
              </div>
              <TextField
                style={{ border: "1px solid white !important", backgroundColor: "white", width: "42.9%", height: "27px", top: "3px", bottom: "3px", left: "9px" }}
                error={labelNameLength === 0 ? true : false}
                helperText={S_errorText}
                id="outlined-text0"
                // label={t('labelName')}
                value={S_labelname}
                onChange={handleTextChange("labelname")}
                // onBlur={this.addMUILabel}
                inputProps={{ maxLength: 32 }}
                type="text"
                className={classes.textField1}
                InputLabelProps={{ shrink: true, style: { fontSize: 12, top: "3px" } }}
                InputProps={{
                  style: { fontSize: 12, top: "3px" }
                }}
                margin="dense"
                variant="outlined"
                size="small"
              />
              <RadioGroup
                name="source"
                value={S_operation}
                onChange={e => executeUserAction(e.target.value)}
                row
              >
                <FormControlLabel
                  margin="dense" style={{ height: "18px", width: "18px", }}
                  control={<Radio style={{ left: "3px", top: "15px", width: "18px", height: "18px" }} />}
                  labelPlacement="start"
                  onClick={addMUILabel}
                  // classes={classes.radioLabel}
                    disabled={(role === "guest")}
                  />

                </RadioGroup>
              </Grid>
              <Grid item xs={12} style={GridItemStyle}>
              <div id="multiplecolor" style={{userSelect: "none", draggable: "false",}} className="LabelColorForDiv ">{t('LabelColor')}</div>
              <RadioGroup
                  variant="contained" color="success"
                style={{ cursor: "default", display: 'flex', alignSelf: 'self', left: 20, fontSize: 12, zIndex: 1, }}
                hidden={S_enable}
                        onClick={() => forSetHidden(!S_setHidden)}>

                <FormControlLabel className="printingme"
                  value="Color"
                  control={<Radio style={{left: S_colorleft, bottom: "4px", marginTop: S_colormarginTop,  }} />}
                    labelPlacement="start"
                    // label={<Box component="div" fontSize={12} style={{ marginLeft: "-185px" }} >Label Color</Box>}
                  // classes={classes.radioLabel}
                    disabled={(role === "guest")}
                    checked={false}
                  />
                        {S_setHidden && (
                    <CirclePicker className="Picker"
                      // color={this.state.setColor}
                                value={S_setColor}
                                onChange={(updateColor) => forSetColor(updateColor.hex)}
                    />
                  )}
                </RadioGroup>
              </Grid>
              <Grid item xs={12} style={GridItemStyle}>
              {/* <TextField style={{ height: "27px", bottom: "4px", LeftTextflied, left: "2px", width: "43%" }}
                id="outlined-read-only-input"
                label=""
                defaultValue={t('LabelType')}
                className={classes.textField}
                margin="dense"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: inputPropsStyle2
                }}
                variant="standard"
                size="small"
              /> */}
               <div style={{height: "27px", userSelect: "none", draggable: "false", marginTop:"12px",marginLeft:"2px", width: "43%",}}>
                <span
                  style={{height: "27px", userSelect: "none", draggable: "false",marginTop:"12px",marginLeft:"10px", fontSize:"12px",  width: "43%",}}
                >
                  {t('LabelType')}
                </span>
              </div>
                <TextField
                  style={{ border: "1px solid white !important",height:"27px",backgroundColor:"white", width: "42.9%",left: "7px", bottom: "1px", top: "3px",paddingLeft:"5px" }}
                  id="outlined-typepri"
                  // label={t('LabelType')}
                        value={S_labeltype}
                        onChange={handleChange("labeltype")}
                        onBlur={labelTypeForDatabase}
                  select
                  className={classes.textField}
                  InputLabelProps={{ shrink: true, style: { fontSize: 12, top: "2px" } }}
                  InputProps={{
                    style: { fontSize: 12, top: "2px" }
                  }}
                  margin="dense"
                  variant="outlined"
                  size="small">
                  {typeoptions.map((value, index) => {
                    return <MenuItem value={value}>{value}</MenuItem>;
                  })}
                </TextField>
              </Grid>
              <Grid item xs={12} style={GridItemStyle}>
              {/* <TextField style={{ height: "27px", bottom: "3px", LeftTextflied, left: "1px", width: "43%", }}
                id="outlined-read-only-input"
                label=""
                defaultValue={t('labelWidth')}
                className={classes.textField}
                margin="dense"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: inputPropsStyle2
                }}
                variant="standard"
                size="small"
              /> */}
               <div style={{height: "27px", userSelect: "none", draggable: "false", marginTop:"12px",marginLeft:"2px", width: "43%",}}>
                <span
                  style={{height: "27px", userSelect: "none", draggable: "false",marginTop:"12px",marginLeft:"10px", fontSize:"12px",  width: "43%",}}
                >
                  {t('labelWidth')}
                </span>
              </div>
                <TextField
                  style={{ border: "1px solid white !important", backgroundColor: "white", width: "143px", height: "27px", left: "73px", top: "3px", bottom: "2px" }}
                        error={S_topWidthCheck}
                        helperText={S_topWidthText}
                  id="outlined-width"
                  // label={t('labelWidth')}
                        value={S_labelwidth}
                        onChange={handleChangeForWidth("labelwidth")}
                        onBlur={callBlur2}
                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                  type="number"
                  className={classes.textField2}
                  InputLabelProps={{ shrink: true, style: inputPropsStyle }}
                  InputProps={{
                    style:  inputPropsStyle
                  }}
                  margin="dense"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue="mm"
                  className={classes.textField1}
                margin="dense" style={{ height: "27px", left: "84px", width: "35px", bottom: "3px", top: "6px", userSelect: "none", draggable: "false", }}
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
              <Grid item xs={12} style={GridItemStyle}>
              {/* <TextField style={{ height: "27px", bottom: "2px", LeftTextflied, left: "1px", width: "43%", }}
                id="outlined-read-only-input"
                label=""
                defaultValue={t('labelLength')}
                className={classes.textField}
                margin="dense"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: inputPropsStyle2
                }}
                variant="standard"
                size="small"
              /> */}
               <div style={{height: "27px", userSelect: "none", draggable: "false", marginTop:"12px",marginLeft:"2px", width: "43%",}}>
                <span
                  style={{height: "27px", userSelect: "none", draggable: "false",marginTop:"12px",marginLeft:"10px", fontSize:"12px",  width: "43%",}}
                >
                  {t('labelLength')}
                </span>
              </div>
              <TextField
                  style={{ border: "1px solid white !important", backgroundColor: "white", width: "143px", height: "27px", left: "73px", top: "2px" }}
                        error={S_topLengthCheck}
                        helperText={S_topLengthText}
                  id="outlined-length"
                  // label={t('Labellength')}
                        value={S_labellength}
                        onChange={handleChangeForLength("labellength")}
                        onBlur={callBlur1}
                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                  type="number"
                  className={classes.textField2}
                  InputLabelProps={{ shrink: true, style: inputPropsStyle }}
                  InputProps={{
                    style: inputPropsStyle
                  }}
                  margin="dense"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue="mm"
                  className={classes.textField1}
                margin="dense" style={{ height: "27px", left: "84px", width: "35px", bottom: "3px", top: "6px", userSelect: "none", draggable: "false", }}
                InputProps={{
                    readOnly: true,
                    maxLength: 2,
                    disableUnderline: true,
                    style: { fontSize: 12 }
                  }}
                  variant="standard"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} style={GridItemStyle}>
              {/* <TextField style={{ height: "27px", bottom: "2px", LeftTextflied, left: "1px", width: "30%", textAlign: "center", alignItems: "center" }}
                id="outlined-read-only-input"
                label=""
                defaultValue={t('labelPositionA')}
                className={classes.textField}
                margin="dense"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: inputPropsStyle2
                }}
                variant="standard"
                size="small"
              /> */}
               <div style={{height: "27px", userSelect: "none", draggable: "false", marginTop:"12px",marginLeft:"2px", width: "30%",}}>
                <span
                  style={{height: "27px", userSelect: "none", draggable: "false",marginTop:"12px",marginLeft:"10px", fontSize:"12px",  width: "30%",}}
                >
                  {t('labelPositionA')}
                </span>
              </div>
              {/* <div style={{ color: '#ffa500', marginBottom: '0px', padding: "2px", marginTop: "4px", marginLeft: "23px" }} className="arrow" >
                  <TrendingFlatIcon id="trending-flaticon" />
                </div> */}
                <div>
                  <section className="one-fourth" id="html">
                    <img src={orange} draggable="false" style={{ color: "red", marginTop: "4px", marginLeft: "51px", width: "97px", }} />
                  </section>
                </div>

                <TextField
                  style={{ border: "1px solid white !important", backgroundColor: "white", width: "143px", top: "3px", height: "27px", bottom: "3.5px", left: "113px" }}
                        error={S_errorLabelPosACondition}
                        helperText={S_errorLabelPosA}
                  id="outlined-A"
                  // label={t('PositionA')}
                        value={S_labela}
                        onChange={handleChangeForPositionA("labela")}
                        onBlur={callBlurForPosA}
                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}

                  type="number"
                  className={classes.textField2}
                  InputLabelProps={{ shrink: true, style: inputPropsStyle }}
                  InputProps={{
                    style: inputPropsStyle
                  }}
                  margin="dense"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue="mm"
                  className={classes.textField1}
                  margin="dense" style={UnitStyle2}
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
              <Grid item xs={12} style={GridItemStyle}>
              {/* <TextField style={{ height: "27px", bottom: "2px", LeftTextflied, left: "1px", width: "30%", textAlign: "center", alignItems: "center" }}
                id="outlined-read-only-input"
                label=""
                defaultValue={t('labelPositionB')}
                className={classes.textField}
                margin="dense"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: inputPropsStyle2
                }}
                variant="standard"
                size="small"
              /> */}
              <div style={{height: "27px", userSelect: "none", draggable: "false", marginTop:"12px",marginLeft:"2px", width: "30%",}}>
                <span
                  style={{height: "27px", userSelect: "none", draggable: "false",marginTop:"12px",marginLeft:"10px", fontSize:"12px",  width: "30%",}}
                >
                  {t('labelPositionB')}
                </span>
              </div>
              {/* <div style={{ color: '#8f00ff', marginBottom: '0px', padding: "2px", marginTop: "4px", marginLeft: "23px" }} className="arrow" >
                  <TrendingFlatIcon id="trending-flaticon" />
                </div> */}
                <div>
                  <section className="one-fourth" id="html">
                    <img src={purple} draggable="false" style={{ color: "red", marginTop: "4px", marginLeft: "52px", width: "95px", }} />
                  </section>
                </div>
                <TextField
                  style={{ border: "1px solid white !important", backgroundColor: "white", width: "143px", top: "3px", height: "27px", bottom: "3.5px", left: "113px" }}
                        helperText={S_errorLabelPosB}
                        error={S_errorLabelPosBCondition}
                  id="outlined-B"
                  // label={t('PositionB')}
                        value={S_labelb}
                        onChange={handleChangeForPositionB("labelb")}
                        onBlur={callBlurForPosB}
                  onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                  type="number"
                  className={classes.textField2}
                  InputLabelProps={{ shrink: true, style: inputPropsStyle }}
                  InputProps={{
                    style: inputPropsStyle
                  }}
                  margin="dense"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue="mm"
                  className={classes.textField1}
                  margin="dense" style={UnitStyle2}
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
              <Grid item xs={12} style={GridItemStyle}>
              {/* <TextField style={{ height: "27px", bottom: "3px", LeftTextflied, left: "1px", width: "43%", }}
                id="outlined-read-only-input"
                label=""
                defaultValue={t('SelectLabel')}
                className={classes.textField}
                margin="dense"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: inputPropsStyle2
                }}
                variant="standard"
                size="small"
              /> */}
              <div style={{height: "27px", userSelect: "none", draggable: "false", marginTop:"12px",marginLeft:"2px", width: "43%",}}>
                <span
                  style={{height: "27px", userSelect: "none", draggable: "false",marginTop:"12px",marginLeft:"10px", fontSize:"12px",  width: "43%",}}
                >
                  {t('SelectLabel')}
                </span>
              </div>
              <TextField
                  style={{ border: "1px solid white !important", width: "42.9%",height:"27px", top: "2px", bottom: "0px", left: "2px",backgroundColor:"white", paddingLeft:"6px" }}
                  id="outlined-selectlabel"
                  // label={t('SelectedLabel')}
                        value={S_selectlabel}
                        onChange={handleSelection}
                  // onBlur={this.saveLabel}
                  select
                  className={classes.textField3}
                  InputLabelProps={{ shrink: true, style: { fontSize: 12 } }}
                  InputProps={{
                    style: { fontSize: 12, top:"4px" }
                  }}
                  margin="dense"
                  variant="outlined"
                  size="small">
                  {labelNames.map((value, index) => {
                    return <MenuItem value={value}>{value}</MenuItem>;
                  })}
                </TextField>
              </Grid>
              <Grid item xs={12} style={GridItemStyle}>
              {/* <TextField style={{ height: "27px", bottom: "2px", top: "4px", left: "11px", width: "43%", }}
                id="outlined-read-only-input"
                label=""
                defaultValue={t('DeleteLabel')}
                className={classes.textField}
                margin="dense"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: { fontSize: 12, }
                }}
                variant="standard"
                size="small"
              /> */}
               <div style={{height: "27px", userSelect: "none", draggable: "false", marginTop:"12px",marginLeft:"2px", width: "43%",}}>
                <span
                  style={{height: "27px", userSelect: "none", draggable: "false",marginTop:"12px",marginLeft:"10px", fontSize:"12px",  width: "43%",}}
                >
                  {t('DeleteLabel')}
                </span>
              </div>
              <RadioGroup
                  name="source"
                        value={S_operation}
                        onChange={e => executeUserAction(e.target.value)}
                  row
                >
                  <FormControlLabel
                    style={{ height: "18px", width: "18px", marginTop: "13px", marginLeft: "243px" }}
                    value="deleteLabel"
                    control={<Radio />}
                    labelPlacement="start"
                    // label={"Delete Label"}
                    // label={<Box component="div" fontSize={12}>{t('DeleteLabel')}</Box>}
                  // classes={classes.radioLabel}
                    disabled={(role === "guest")}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

          </ExpansionPanelDetails>
        </ExpansionPanel>

      </Grid>


    );
}


export default LabelWizard;
