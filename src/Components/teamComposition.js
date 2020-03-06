import React, { useState } from 'react';
import { Alert, Table, Container, Row, Col, Popover, Button, Badge } from 'react-bootstrap';
import CostOfEngagementComparisonComponent from '../APICalls/projectTeamCostCall';
import menos from '../menos.png';
import mas from '../mas.png';

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
      </Popover.Content>
    </Popover>
);

export default function TeamCompositionFun() {

    function limitCountRest(val) {

        if (jr > 0 && val === "jr") {
            jrCount(jr - 1)
        }
        if (mid > 0 && val === "mid") {
            midCount(mid - 1)
        }
        if (sr > 0 && val === "sr") {
            srCount(sr - 1)
        }
        if (techLead > 0 && val === "techLead") {
            techLeadCount(techLead - 1)
        }
        if (qa > 0 && val === "qa") {
            qaCount(qa - 1)
        }
        if (engMan > 0 && val === "engMan") {
            engManCount(engMan - 1)
        }
        if (month > 0 && val === "month") {
            monthCount(month - 1)
        }
    }

    function limitCountSum(val) {
        if (jr < 5 && val === "jr") {
            jrCount(jr + 1)
        }
        if (mid < 5 && val === "mid") {
            midCount(mid + 1)
        }
        if (sr < 3 && val === "sr") {
            srCount(sr + 1)
        }
        if (techLead < 1 && val === "techLead") {
            techLeadCount(techLead + 1)
        }
        if (qa < 3 && val === "qa") {
            qaCount(qa + 1)
        }
        if (engMan < 1 && val === "engMan") {
            engManCount(engMan + 1)
        }
        if (month < 12 && val === "month") {
            monthCount(month + 1)
        }
    }

    const [jr, jrCount] = useState(0);
    const [mid, midCount] = useState(0);
    const [sr, srCount] = useState(0);
    const [techLead, techLeadCount] = useState(0);
    const [engMan, engManCount] = useState(0);
    const [qa, qaCount] = useState(0);
    const [month, monthCount] = useState(0);

    const [show1, setShow1] = useState(true);

    return (
        <div>
            <Container className="mt-4">
                <h1 className="center text-blue">Total Cost of Engagement Calculator</h1>
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
                                    <td scope="row" className="table-active text-blue">Junior Developer</td>
                                    <td> <a onClick={() => limitCountRest("jr")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{jr} </label><a onClick={() => limitCountSum("jr")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{jr} </label></td>
                                    <td><label className="card-text">{jr} </label></td>
                                </tr>
                                <tr>
                                    <td scope="row" className="table-active text-blue">Middle Developer</td>
                                    <td> <a onClick={() => limitCountRest("mid")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{mid} </label><a onClick={() => limitCountSum("mid")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{mid} </label></td>
                                    <td><label className="card-text">{mid} </label></td>
                                </tr>
                                <tr>
                                    <td scope="row" className="table-active text-blue">Senior Developer</td>
                                    <td> <a onClick={() => limitCountRest("sr")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{sr} </label><a onClick={() => limitCountSum("sr")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{sr} </label></td>
                                    <td><label className="card-text">{sr} </label></td>
                                </tr>
                                <tr>
                                    <td scope="row" className="table-active text-blue">Technical Lead</td>
                                    <td> <a onClick={() => limitCountRest("techLead")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{techLead} </label><a onClick={() => limitCountSum("techLead")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{techLead} </label></td>
                                    <td><label className="card-text">{techLead} </label></td>
                                </tr>
                                <tr>
                                    <td scope="row" className="table-active text-blue">QA Engineer</td>
                                    <td> <a onClick={() => limitCountRest("qa")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{qa} </label><a onClick={() => limitCountSum("qa")}><img src={mas} className="iconsRight"></img></a> </td>
                                    <td><label className="card-text">{qa} </label></td>
                                    <td><label className="card-text">{qa} </label></td>
                                </tr>
                                <tr>
                                    <td scope="row" className="table-active text-blue"><br></br>Engagement Manager</td>
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
                                            <tr >
                                                <td>
                                                    <label className="card-text">{engMan} </label>
                                                </td>
                                                <td>
                                                    <label className="card-text">{engMan} </label>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row" className="table-active text-blue">Project Duration (months)</td>
                                    <td> <a onClick={() => limitCountRest("month")}><img src={menos} className="iconsLeft"></img></a> <label className="card-text text-center">{month} </label><a onClick={() => limitCountSum("month")}><img src={mas} className="iconsRight"></img></a> </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <CostOfEngagementComparisonComponent
                jr={jr}
                mid={mid}
                sr={sr}
                tech={techLead}
                qa={qa}
                engMan={engMan}
                month={month}
            />
        </div>
    );
}