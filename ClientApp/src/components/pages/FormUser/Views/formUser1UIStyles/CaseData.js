
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";
// import "../formu.css"

import {
    ExpansionPanelStyle, GridItemStyle, ArrowStyle, inputPropsStyle2, LeftTextflied,
    UnitStyles1, containerGridstyle
} from '../../../DashboardPage_UI/UICommonStyles'

const CaseData = ({
    expanded_panel,
    handlexpand,
    S_errorXdim,
    S_xdim,
    S_errorDimensionForX,
    handleDimensionChange,
    callBlur,
    Red_arrow,
    Green_arrow,
    Blue_arrow,
    S_errorYdim,
    S_ydim,
    S_errorDimensionForY,
    S_errorZdim,
    S_errorDimensionForZ,
    S_zdim,
    S_errorMass,
    S_errorKgForMass,
    S_mass,
    callBlurForMass,
    onValueChange,
    S_showcaseTexture,
    handleChangeForTexture,
    materialForDatabase,
    casetexture,
    exceptThisSymbols,
    exceptSymbols,
    t,
    color1,
    classes,


}) => {
    return (


        <Grid item xs={12}>
            <ExpansionPanel
                style={ExpansionPanelStyle}
                expanded={expanded_panel === 'casepanel1'}
                onChange={(event) => handlexpand('casepanel1', event)}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1-header"
                >
                    <Typography>{t('CaseData')}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container style={containerGridstyle} >
                        <Grid item xs={12} style={GridItemStyle}>
                            {/* <TextField style={{ height: "27px", bottom: "2.5px",  width: "43%",}}
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('width')}
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
                            <div style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "2px", width: "43%", }}>
                                <span
                                    style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "10px", fontSize: "12px", width: "43%", }}
                                >
                                    {t('width')}
                                </span>
                            </div>
                            {/* <div style={{ color: '#7e1b1e', marginBottom: '0px', padding: "2px", marginTop: "4px", width:"90px", height:"90px" }} className="arrow" >
                          <ArrowRightAltIcon id="trending-flaticon" sx={{fontsize:90}} />
                        </div> */}
                            <div>
                                <section className="one-fourth" id="html">
                                    <img src={Red_arrow} draggable="false" style={{ color: "red", marginTop: "4px", marginLeft: "-8px", width: "97px"}} />
                                </section>
                            </div>
                            <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", width: "143px", height: "27px", top: "3px", left: "55px" }}
                                error={S_errorXdim}
                                helperText={S_errorDimensionForX}
                                id="outlined-xdim"
                                // label={t('width')}
                                value={S_xdim}
                                onChange={handleDimensionChange("xdim")}
                                onBlur={callBlur}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                className={classes.textField2}
                                InputLabelProps={{ shrink: true, style: { fontSize: 12, top: "3px" } }}
                                InputProps={{
                                    style: { fontSize: 12, top: "3px" }
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
                                margin="dense" style={{ height: "27px", left: "64px", width: "40px", bottom: "-6px", userSelect: "none", draggable: "false", }}
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
                            {/* <TextField style={{ height: "27px", bottom: "2.5px", width: "43%", }}
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('length')}
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

                            <div style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "2px", width: "43%", }}>
                                <span
                                    style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "10px", fontSize: "12px", width: "43%", }}
                                >
                                    {t('length')}
                                </span>
                            </div>
                            {/* <div style={{ color: 'green', marginBottom: '0px', padding: "2px", marginTop: "4px" }} className="arrow" >
                          <TrendingFlatIcon  sx={{fontsize:90}} id="trending-flaticon" />
                        </div> */}
                            <div>
                                <section className="one-fourth" id="html">
                                    <img src={Green_arrow} draggable="false" style={{ color: "red", marginTop: "4px", marginLeft: "-8px", width: "97px"}} />
                                </section>
                            </div>
                            <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", width: "143px", height: "27px", top: "3px", left: "55px" }}
                                error={S_errorYdim}
                                helperText={S_errorDimensionForY}
                                id="outlined-ydim"
                                // label={t('length')}
                                value={S_ydim}
                                onChange={handleDimensionChange("ydim")}
                                onBlur={callBlur}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                className={classes.textField2}
                                InputLabelProps={{ shrink: true, style: { fontSize: 12, top: "3px" } }}
                                InputProps={{
                                    style: { fontSize: 12, top: "3px" }
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
                                margin="dense" style={{ height: "27px", left: "64px", width: "40px", bottom: "-6px", userSelect: "none", draggable: "false", }}
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
                            {/* <TextField style={{ height: "27px", bottom: "2.5px", width: "43%", }}
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('height')}
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
                            <div style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "2px", width: "43%", }}>
                                <span
                                    style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "10px", fontSize: "12px", width: "43%", }}
                                >
                                    {t('height')}
                                </span>
                            </div>
                            {/* <div style={{ color: 'blue', marginBottom: '0px', padding: "2px", marginTop: "4px" }} className="arrow" >
                          <TrendingFlatIcon id="trending-flaticon" />
                        </div> */}
                            <div>
                                <section className="one-fourth" id="html">
                                    <img src={Blue_arrow} draggable="false" style={{ color: "red", marginTop: "4px", marginLeft: "-8px", width: "97px"}} />
                                </section>
                            </div>
                            <TextField
                                style={{ border: "1px solid white !important", backgroundColor: "white", width: "143px", height: "27px", top: "3px", left: "55px" }}
                                error={S_errorZdim}
                                helperText={S_errorDimensionForZ}
                                id="outlined-zdim"
                                // label={t('height')}
                                value={S_zdim}
                                onChange={handleDimensionChange("zdim")}
                                onBlur={callBlur}
                                onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                type="number"
                                className={classes.textField2}
                                InputLabelProps={{ shrink: true, style: { fontSize: 12, top: "3px" } }}
                                InputProps={{
                                    style: { fontSize: 12, top: "3px" }
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
                                margin="dense" style={{ height: "27px", left: "64px", width: "40px", bottom: "-6px", userSelect: "none", draggable: "false", }}
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
                            {/* <TextField style={{ height: "27px", bottom: "4px", LeftTextflied, width: "43%", }}
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('Mass')}
                                // className={classes.textField}
                                margin="dense"
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, padding: 10, left: "6px" }
                                }}
                                variant="standard"
                                size="small"
                            /> */}
                             <div style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "2px", width: "43%", }}>
                                <span
                                    style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "10px", fontSize: "12px", width: "43%", }}
                                >
                                    {t('Mass')}
                                </span>
                            </div>
                            {console.log("s_mass value = " + S_mass)}

                            <TextField style={{ border: "1px solid white !important", backgroundColor: "white", width: "143px", height: "27px", left: "75px", top: "3px", }}
                                id="masspa"
                                label=""
                                error={S_errorMass}
                                helperText={S_errorKgForMass}
                                value={S_mass > 40 ? 40 : S_mass }
                                onChange={onValueChange}
                                onKeyDown={e => exceptSymbols.includes(e.key) && e.preventDefault()}
                                onBlur={callBlurForMass}
                                // multiLine={true}
                                type="number"
                                inputProps={{ min: 0 }}
                                className={classes.textField2}
                                InputLabelProps={{ shrink: true, style: { fontSize: 12, top: "3px" } }}
                                // max="30"
                                // step="0.1"
                                InputProps={{
                                    style: { fontSize: 12, top: "3px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue="kg"
                                className={classes.textField1}
                                margin="dense" style={{ height: "27px", width: "40px", top: "6px", left: "91px" }}
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
                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", marginBottom: "4px", backgroundColor: color1 }}>
                            {/* <TextField style={{ height: "27px", bottom: "5px", LeftTextflied, width: "43%", textAlign: "center", alignItems: "center" }}
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('Material')}
                                className={classes.textField}
                                margin="dense"
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, padding: 10, left: "-24px" }
                                }}
                                variant="standard"
                                size="small"
                            /> */}
                             <div style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "2px", width: "43%", }}>
                                <span
                                    style={{ height: "27px", userSelect: "none", draggable: "false", marginTop: "12px", marginLeft: "10px", fontSize: "12px", width: "43%", }}
                                >
                                    {t('Material')}
                                </span>
                            </div>
                            <TextField
                                id="outlined-typeMaterial"
                                style={{ border: "1px solid white !important", top: "3px", Bottom: "1px", width: "42.9%", left: "9px", height: "27px", backgroundColor: "white", paddingLeft: "4px" }}
                                value={!S_showcaseTexture ? "Texture1" : S_showcaseTexture}
                                onChange={handleChangeForTexture}
                                onBlur={materialForDatabase}
                                select
                                className={classes.textField}
                                InputLabelProps={{ shrink: true, style: { fontSize: 12, height: "27px", top:"2.5px" } }}
                                InputProps={{
                                    style: { fontSize: 12, height: "27px",top:"2.5px" }
                                }}
                                margin="dense"
                                variant="outlined"
                                size="small">
                                {casetexture.map((value, index) => {
                                    return <MenuItem value={value}>{value}</MenuItem>;
                                })}
                            </TextField>
                        </Grid>

                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>


    );
}


export default CaseData;
