import React, { useState } from 'react';
import { Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts'
import FormEmail from './form-email'

function CostOfEngagementComparison({ jr, mid, sr, tech, engMan, qa, month, pricesInHouse, pricesNearShoreOffSite, pricesNearShoreOnSite, pricesOffShoreOffSite, pricesOffShoreOnSite }) {
    //170 Valor fijo de la formula
    //Project Team Costs In Hose
    //////////////////////////////cambiar 85 por 95 del tech
    const PTCInHouse = Math.round((jr * pricesInHouse.jr * 170 * month) + (mid * pricesInHouse.mid * 170 * month) + (sr * pricesInHouse.sr * 170 * month) + (tech * pricesInHouse.tech * 170 * month) + (engMan * pricesInHouse.engMan * 170 * month) + (qa * pricesInHouse.qa * 170 * month))

    //Project Team Costs NearShore
    //////////////////////////////Cambiar valores de 40 a 46 
    const PTCNear = Math.round((jr * pricesNearShoreOffSite.jr * 170 * month) + (mid * pricesNearShoreOffSite.mid * 170 * month) + (sr * pricesNearShoreOffSite.sr * 170 * month) + (tech * pricesNearShoreOffSite.tech * 170 * month) + (engMan * pricesNearShoreOffSite.engMan * 170 * month) + (qa * pricesNearShoreOffSite.qa * 170 * month))

    //Project Team Costs OffShore
    const PTCOff = Math.round((jr * pricesOffShoreOffSite.jr * 170 * month) + (mid * pricesOffShoreOffSite.mid * 170 * month) + (sr * pricesOffShoreOffSite.sr * 170 * month) + (tech * pricesOffShoreOffSite.tech * 170 * month) + (engMan * pricesOffShoreOffSite.engMan * 170 * month) + (engMan * pricesOffShoreOnSite.engMan * 170 * month) + (qa * pricesOffShoreOffSite.qa * 170 * month))

    //Project Overhead Cost
    //.10 y .20 Posibles a estar en BD
    const POCNear = PTCNear * .10
    const POCOff = PTCOff * .20

    //Cost of Vendor´s Attrition Nearshore
    //10 y 15 en BD = 25
    //8 valor fijo de la formula
    function CVANear () {
        if(ceroMonth() == true)
        return 0
        else return Math.round((.05 * jr * 25 * 8 * pricesNearShoreOffSite.jr) + (.05 * mid * 25 * 8 * pricesNearShoreOffSite.mid) + (.05 * sr * 25 * 8 * pricesNearShoreOffSite.sr) + (.05 * tech * 25 * 8 * pricesNearShoreOffSite.tech) + (.05 * engMan * 25 * 8 * pricesNearShoreOffSite.engMan) + (.05 * qa * 25 * 8 * pricesNearShoreOffSite.qa))
    }
   
    //Cost of Vendor´s Attrition Offshore
    //10 y 15 en BD = 25
    //8 valor fijo de la formula
    function CVAOff () {
        if(ceroMonth() == true)
        return 0
        else return Math.round((.4 * jr * 25 * 8 * pricesOffShoreOffSite.jr) + (.4 * mid * 25 * 8 * pricesOffShoreOffSite.mid) + (.4 * sr * 25 * 8 * pricesOffShoreOffSite.sr) + (.4 * tech * 25 * 8 * pricesOffShoreOffSite.tech) + (.4 * engMan * 25 * 8 * pricesOffShoreOffSite.engMan) + (.4 * qa * 25 * 8 * pricesOffShoreOffSite.qa) + (.4 * engMan * 25 * 8 * pricesOffShoreOnSite.engMan))
    }
    //On-site Resources Allocation Costs
    //1500 valor fijo por mes
    function ORACOff() {
        if (valCerosMonth() == true)
        return 0
        else  return Math.round(month * 1500)
    }
    //Long Distance Costs Nearshore
    //.19 60 y 30 fijos
    function LDCNear() {
        if (valCerosMonth() == true)
        return 0
        else return Math.round(month * .19 * 60 * 30)
    } 

    //Long Distance Costs OffShore
    //.59 60 y 30 fijos
    function LDCOff() {
        if (valCerosMonth() == true)
        return 0
        else return Math.round(month * .59 * 60 * 30)
    } 


    //Knowledge Transfer Costs NearShore
    //.05 fijo
    const KTCNear = Math.round(PTCNear * .05)

    //Knowledge Transfer Costs OffShore
    //.1 fijo
    const KTCOff = Math.round(PTCOff * .1)

    //Project Trips Costs Near
    function PTCostNear() {
        if (valCerosMonth() == true || ceroMonth() == true)
            return 0
        else return 12540
    }

    function btnDisabled() {
        if (valCerosMonth() == true || ceroMonth() == true)
            return true
        else return false
    }

    //Project Trips Costs Off
    function PTCostOff() {
        if (valCerosMonth() == true || ceroMonth() == true)
            return 0
        else return 34800
    }

    //Productivity Losses Costs Near
    const PLCNear = Math.round(PTCNear * .1)

    //Productivity Losses Costs Off
    const aux = (jr * pricesOffShoreOffSite.jr * 170 * month) + (mid * pricesOffShoreOffSite.mid * 170 * month) + (sr * pricesOffShoreOffSite.sr * 170 * month) + (tech * pricesOffShoreOffSite.tech * 170 * month) + (engMan * pricesOffShoreOffSite.engMan * 170 * month) + (qa * pricesOffShoreOffSite.qa * 170 * month)
    const PLCOff = Math.round(aux * .25)

    //Risk Management Costs Near
    const RMCNear = Math.round((PTCNear + POCNear + CVANear() + LDCNear() + KTCNear + PTCostNear() + PLCNear) * .03)

    //Risk Management Costs Off
    const RMCOff = Math.round((PTCOff + POCOff + CVAOff() + ORACOff() + LDCOff() + KTCOff + PTCostOff() + PLCOff) * .05)

    ////Total cost of Engagement Near
    const TCENear = Math.round(RMCNear + PTCNear + POCNear + CVANear() + LDCNear() + KTCNear + PTCostNear() + PLCNear)

    ////Total cost of Engagement Off
    const TCEOff = Math.round(RMCOff + PTCOff + POCOff + CVAOff() + ORACOff() + LDCOff() + KTCOff + PTCostOff() + PLCOff)

    //Funcion validar ceros sin mes
    function valCerosMonth(){
        if (jr == 0 && mid == 0 && sr == 0 && tech == 0 && qa == 0 && engMan == 0) return true
        else return false
    }

    //Funcion validar cero Month 
    function ceroMonth(){
        if (month == 0) return true
        else return false
    }

    //Total cost of Engagemet Graph Data
    const series = [{
        name: 'Project Team',
        data: [PTCInHouse, PTCNear, PTCOff]
    }, {
        name: 'Project Overhead',
        data: [0, POCNear, POCOff]
    }, {
        name: 'Vendor\'s Attrition',
        data: [0, CVANear(), CVAOff()]
    }, {
        name: 'On-site Resources Allocation',
        data: [0, 0, ORACOff()]
    }, {
        name: 'Long Distance',
        data: [0, LDCNear(), LDCOff()]
    }, {
        name: 'Knowledge Transfer',
        data: [0, KTCNear, KTCOff]
    }, {
        name: 'Project Trips',
        data: [0, PTCostNear(), PTCostOff()]
    }, {
        name: 'Productivity Losses',
        data: [0, PLCNear, PLCOff]
    }, {
        name: 'Risk Management',
        data: [0, RMCNear, RMCOff]
    }]

    //Total cost of Engagemet Graph Props
    const options = {
        chart: {
            type: 'bar',
            height: 400,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        responsive: [{
            breakpoint: 10000,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        xaxis: {
            type: 'category',
            categories: ['In-house ' + "($" + comas(PTCInHouse) + ")", 'Nearshore ' + "($" + comas(TCENear) + ")", 'Offshore ' + "($" + comas(TCEOff) + ")"
            ],
        },
        fill: {
            opacity: 1,
            offsetX: 400
        }
    }

    function comas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Container className="mt-4">
    </Container>
        <Container className="mt-4">
            <Row>
                <Col lg={6}>
                    <ReactApexChart options={options} series={series} type="bar" height={350} />
                    <center>
                        <div>
                            <Button 
                            className="sendEmail" 
                            variant="primary" 
                            onClick={handleShow} 
                            disabled={btnDisabled()}>
                                Send Prices by Email
                            </Button>
                        </div>
                    </center>
                </Col>
                <Col lg={6} className="p-3">
                    <Table className="resp-table2 center" bordered size="sm">
                        <thead className="color text-white">
                            <tr >
                                <th>Cost Component</th>
                                <th>In-house US</th>
                                <th>Nearshore</th>
                                <th>Offshore</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> On-Site Man/Hours * On-Site Rate) + Off-Shore Man/Hours * Off-Shore Rate</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>Project Team</a></td>
                                </OverlayTrigger>
                                <td>${comas(PTCInHouse)}</td>
                                <td>${comas(PTCNear)}</td>
                                <td>${comas(PTCOff)}</td>
                            </tr>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Project Team Costs * Project Overhead Percentage</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>Project Overhead</a></td>
                                </OverlayTrigger>
                                <td>-</td>
                                <td>${comas(POCNear)}</td>
                                <td>${comas(POCOff)}</td>
                            </tr>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Attrition Rate (%) * Number of Resources*Time to be productive * Rate</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>Vendor's Attrition</a></td>
                                </OverlayTrigger>
                                <td>-</td>
                                <td>${comas(CVANear())}</td>
                                <td>${comas(CVAOff())}</td>
                            </tr>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> On-Site Resources * Monthly Facility Use Cost per Resource * Number of Months</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>On-site Resources Allocation</a></td>
                                </OverlayTrigger>
                                <td>-</td>
                                <td>-</td>
                                <td>${comas(ORACOff())}</td>
                            </tr>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Number of LD Minutes/Month * LD Rate * Duration of Engagement in Months</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>Long Distance</a></td>
                                </OverlayTrigger>
                                <td>-</td>
                                <td>${comas(LDCNear())}</td>
                                <td>${comas(LDCOff())}</td>
                            </tr>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Project Team Costs * KT Overhead Percentage</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>Knowledge Transfer</a></td>
                                </OverlayTrigger>
                                <td>-</td>
                                <td>${comas(KTCNear)}</td>
                                <td>${comas(KTCOff)}</td>
                            </tr>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Airfares + Hotel Fares + car rental fees + perdiem</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>Project Trips</a></td>
                                </OverlayTrigger>
                                <td>-</td>
                                <td>${comas(PTCostNear())}</td>
                                <td>${comas(PTCostOff())}</td>
                            </tr>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Off-Shore Man/Hours * Off-Shore Rate * Productivity Loss Percentage</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>Productivity Losses</a></td>
                                </OverlayTrigger>
                                <td>-</td>
                                <td>${comas(PLCNear)}</td>
                                <td>${comas(PLCOff)}</td>
                            </tr>
                            <tr>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Subtotal Engagement Cost * Risk Management Percentage</Tooltip>}>
                                    <td className="table-active text-blue"><a href="" style={{ pointerEvents: 'none' }}>Risk Management</a></td>
                                </OverlayTrigger>
                                <td>-</td>
                                <td>${comas(RMCNear)}</td>
                                <td>${comas(RMCOff)}</td>
                            </tr>
                            <tr className="table-active">
                                <td>Total Cost</td>
                                <td>${comas(PTCInHouse)}</td>
                                <td>${comas(TCENear)}</td>
                                <td>${comas(TCEOff)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Total Cost of Engagement Calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormEmail
                        PTCNear={comas(PTCNear)}
                        PTCOff={comas(PTCOff)}
                        POCNear={comas(POCNear)}
                        POCOff={comas(POCOff)}
                        CVANear={comas(CVANear())}
                        CVAOff={comas(CVAOff())}
                        ORACOff={comas(ORACOff())}
                        LDCNear={comas(LDCNear())}
                        LDCOff={comas(LDCOff())}
                        KTCNear={comas(KTCNear)}
                        KTCOff={comas(KTCOff)}
                        PTCostNear={comas(PTCostNear())}
                        PTCostOff={comas(PTCostOff())}
                        PLCNear={comas(PLCNear)}
                        PLCOff={comas(PLCOff)}
                        RMCNear={comas(RMCNear)}
                        RMCOff={comas(RMCOff)}
                    

                        PTCInHouse={comas(PTCInHouse)}
                        TCENear={comas(TCENear)}
                        TCEOff={comas(TCEOff)}
                        handleClose={handleClose}
                    ></FormEmail>
                </Modal.Body>
            </Modal>
        </Container>
        </>
    )
};

export default CostOfEngagementComparison
