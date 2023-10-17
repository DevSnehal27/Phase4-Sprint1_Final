import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";

import { ExpansionPanelStyle, GridTopStyle } from '../../../DashboardPage_UI/UICommonStyles'


const Summary = ({

    expanded_panel,
    handlexpand,
    enableTable,
    tableRef,
    tableIcons,
    labelcolumns,
    labelSet,
    color1,
    t

}) => {
    return (

        <Grid item xs={12} style={GridTopStyle} >
            <ExpansionPanel
                style={ExpansionPanelStyle}
                expanded={expanded_panel === 'casepanel3'}
                onChange={(event) => handlexpand('casepanel3', event)}
            // onChange={this.handlePanel('panel1' )}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel3-header"
                >
                    <Typography>{t('Summary')}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {enableTable &&
                        (<div style={{ marginLeft: 0, padding: 0, marginBottom: "4px", backgroundColor: color1 }}>
                            <MaterialTable
                                tableRef={tableRef}
                                title={t('Labels')}
                                icons={tableIcons}
                                columns={labelcolumns}
                                data={labelSet}
                                options={{
                                    grouping: true,
                                    search: false,
                                    headerStyle: {
                                        fontSize: 12,
                                    },
                                    headerStyle: {
                                        top: 0,
                                        fontSize: 12,
                                        marginLeft: 0,
                                    },
                                    rowStyle: {
                                        whiteSpace: 'nowrap',
                                        marginLeft: 0,
                                        fontSize: 12,
                                    },
                                    paging: true,
                                    tableLayout: "Fixed",
                                }}
                            />
                        </div>
                        )}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>


    );
}


export default Summary;
