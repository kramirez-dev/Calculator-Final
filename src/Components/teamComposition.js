import React, { useState } from 'react';
import { Table, Container, Row, Col, Badge } from 'react-bootstrap';
import CostOfEngagementComparisonComponent from '../APICalls/projectTeamCostCall';
import menos from '../menos.png';
import mas from '../mas.png';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  slider: {
    color: "#0087ff",
  },
  root: {
    color: "#0087ff",
    width: '100%',
    fontSize: '15px',
  },
}));

export default function TeamCompositionFun() {

    const [jr, jrCount] = useState(0);
    const [mid, midCount] = useState(0);
    const [sr, srCount] = useState(0);
    const [techLead, techLeadCount] = useState(0);
    const [engMan, engManCount] = useState(0);
    const [qa, qaCount] = useState(0);
    const [month, monthCount] = useState(0);
    const classes = useStyles()

    const marks = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
    ]

    const marks12 = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
        { value: 11, label: '11' },
        { value: 12, label: '12' },
    ]

    function jrHandler(event, value){
        jrCount(value)
    }

    function monthHandler(event, value){
        monthCount(value)
    }
    
    function midHandler(event, value){
        midCount(value)
    }

    function techHandler(event, value){
        techLeadCount(value)
    }

    function srHandler(event, value){
        srCount(value)
    }

    function qaHandler(event, value){
        qaCount(value)
    }


    return (
        <div>
            <Container className="mt-4" fluid={true}>
                <h1 className="center text-blue">Total Cost of Engagement Calculator</h1>
                <div className={classes.root}>
                <Row className="p-3">
                    <Col md={12} lg={3}>
                    <Row >
                    <label>Project Duration (Months): </label>
                    <Slider
                         aria-labelledby="discrete-slider"
                         valueLabelDisplay="auto"
                        defaultValue={0}
                        step={1}
                        marks={marks12}
                        className={classes.slider}
                        max={12}
                        onChangeCommitted={monthHandler}
                    />
                    <label>Lead Developer</label>
                    <Slider
                         aria-labelledby="discrete-slider"
                         valueLabelDisplay="auto"
                        defaultValue={0}
                        step={1}
                        marks={marks}
                        className={classes.slider}
                        max={10}
                        onChangeCommitted={techHandler}
                    />
                    <label>Senior Developer</label>
                    <Slider
                         aria-labelledby="discrete-slider"
                         valueLabelDisplay="auto"
                        defaultValue={0}
                        step={1}
                        marks={marks}
                        className={classes.slider}
                        max={10}
                        onChangeCommitted={srHandler}
                    />
                    <label>Mid-Level Developer</label>
                    <Slider
                         aria-labelledby="discrete-slider"
                         valueLabelDisplay="auto"
                        defaultValue={0}
                        step={1}
                        marks={marks}
                        className={classes.slider}
                        max={10}
                        onChangeCommitted={midHandler}
                    />
                    <label>Jr Developer</label>
                    <Slider
                         aria-labelledby="discrete-slider"
                         valueLabelDisplay="auto"
                        defaultValue={0}
                        step={1}
                        marks={marks}
                        className={classes.slider}
                        max={10}
                        onChangeCommitted={jrHandler}
                    />
                    <label>QA Engineer</label>
                    <Slider
                         aria-labelledby="discrete-slider"
                         valueLabelDisplay="auto"
                        defaultValue={0}
                        step={1}
                        marks={marks}
                        className={classes.slider}
                        max={10}
                        onChangeCommitted={qaHandler}
                    />
                    </Row>
                    </Col>
                    <Col md={9}>
                    <CostOfEngagementComparisonComponent
                        jr={jr}
                        mid={mid}
                        sr={sr}
                        tech={techLead}
                        qa={qa}
                        engMan={engMan}
                        month={month}
                    />
                    </Col>
                </Row>
                    </div>
            </Container>
        </div>
        
    );
}

/*

<Row className="mt-4">
                    <Col>
                        <Table className="resp-table2 center" bordered size="sm">
                            <thead className="tex-white">
                                <tr className="color">
                                    <th scope="col">Team Composition</th>
                                    <th scope="col" >In-House US</th>
                                    <th >Nearshore</th>
                                    <th >Offshore</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-active text-blue">Junior Developer</td>
                                    <td> <a onClick={() => limitCountRest("jr")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{jr} </label><a onClick={() => limitCountSum("jr")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{jr} </label></td>
                                    <td><label className="card-text">{jr} </label></td>
                                </tr>
                                <tr>
                                    <td className="table-active text-blue">Middle Developer</td>
                                    <td> <a onClick={() => limitCountRest("mid")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{mid} </label><a onClick={() => limitCountSum("mid")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{mid} </label></td>
                                    <td><label className="card-text">{mid} </label></td>
                                </tr>
                                <tr>
                                    <td className="table-active text-blue">Senior Developer</td>
                                    <td> <a onClick={() => limitCountRest("sr")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{sr} </label><a onClick={() => limitCountSum("sr")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{sr} </label></td>
                                    <td><label className="card-text">{sr} </label></td>
                                </tr>
                                <tr>
                                    <td className="table-active text-blue">Technical Lead</td>
                                    <td> <a onClick={() => limitCountRest("techLead")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{techLead} </label><a onClick={() => limitCountSum("techLead")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{techLead} </label></td>
                                    <td><label className="card-text">{techLead} </label></td>
                                </tr>
                                <tr>
                                    <td className="table-active text-blue">QA Engineer</td>
                                    <td> <a onClick={() => limitCountRest("qa")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{qa} </label><a onClick={() => limitCountSum("qa")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{qa} </label></td>
                                    <td><label className="card-text">{qa} </label></td>
                                </tr>
                                <tr>
                                    <td className="table-active text-blue"><br></br>Engagement Manager</td>
                                    <td>

                                        <Badge variant="primary">At least one</Badge>
                                        <br></br>
                                        <a onClick={() => limitCountRest("engMan")}><img src={menos} className="iconsLeft"></img></a>


                                        <label className="card-text text-center">{engMan} </label>


                                        <a onClick={() => limitCountSum("engMan")}><img src={mas} className="iconsRight"></img></a>


                                    </td>
                                    <td ><br></br><label className="card-text">{engMan}</label></td>
                                    <td>
                                        <table className="tab">
                                            <thead className="tex-white">
                                                <tr className="color">
                                                    <th >Off-site</th>
                                                    <th>On-site</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="card-text">{engMan} </label>
                                                    </td>
                                                    <td>
                                                        <label className="card-text">{engMan} </label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-active text-blue">Project Duration (months)</td>
                                    <td> <a onClick={() => limitCountRest("month")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{month} </label><a onClick={() => limitCountSum("month")}><img src={mas} className="iconsRight"></img></a> </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

* */