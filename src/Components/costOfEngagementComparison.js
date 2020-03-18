import React, { useState } from 'react';
import { Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts'
import FormEmail from './form-email'


function CostOfEngagementComparison({ jr, mid, sr, tech, qa, month, pricesInHouse, pricesNearShoreOffSite, pricesNearShoreOnSite, pricesOffShoreOffSite, pricesOffShoreOnSite }) {

    //Valores necesarios en caso de que los limites de los devs Suban
    const jrNearOn = Math.round(jr / 25)
    const midNearOn = Math.round(mid / 25) //25? Podria cambiar
    const srNearOn = Math.round(sr / 10)
    const techNearOn = Math.round(tech / 5)
    const qaNearOn = Math.round(qa / 25) //25? Podria cambiar

    //Valores necesarios en caso de que los limites de los devs Suban
    const jrOffOn = Math.round(jr / 25)
    const midOffOn = Math.round(mid / 25) //25? Podria cambiar
    const srOffOn = Math.round(sr / 10)
    const techOffOn = Math.round(tech / 5)
    const qaOffOn = Math.round(qa / 25) //25? Podria cambiar

    //170 Valor fijo de la formula
    //Project Team Costs In Hose
    //////////////////////////////cambiar 85 por 95 del tech
    const PTCInHouse = Math.round((jr * pricesInHouse.jr * 170 * month) + (mid * pricesInHouse.mid * 170 * month) + (sr * pricesInHouse.sr * 170 * month) + (tech * pricesInHouse.tech * 170 * month) + (qa * pricesInHouse.qa * 170 * month))

    //Project Team Costs NearShore
    //////////////////////////////Cambiar valores de 40 a 46 
    const PTCNear = Math.round((jrNearOn * pricesNearShoreOnSite.jr * 170 * month) + (midNearOn * pricesNearShoreOnSite.mid * 170 * month) + (srNearOn * pricesNearShoreOnSite.sr * 170 * month) + (techNearOn * pricesNearShoreOnSite.tech * 170 * month) + (qaNearOn * pricesNearShoreOnSite.qa * 170 * month) +
        (jr * pricesNearShoreOffSite.jr * 170 * month) + (mid * pricesNearShoreOffSite.mid * 170 * month) + (sr * pricesNearShoreOffSite.sr * 170 * month) + (tech * pricesNearShoreOffSite.tech * 170 * month) + (qa * pricesNearShoreOffSite.qa * 170 * month))

    //Project Team Costs OffShore
    const PTCOff = Math.round((jr * pricesOffShoreOffSite.jr * 170 * month) + (mid * pricesOffShoreOffSite.mid * 170 * month) + (sr * pricesOffShoreOffSite.sr * 170 * month) + (tech * pricesOffShoreOffSite.tech * 170 * month) + (qa * pricesOffShoreOffSite.qa * 170 * month) +
        (jrOffOn * pricesOffShoreOnSite.jr * 170 * month) + (midOffOn * pricesOffShoreOnSite.mid * 170 * month) + (srOffOn * pricesOffShoreOnSite.sr * 170 * month) + (techOffOn * pricesOffShoreOnSite.tech * 170 * month) + (qa * pricesOffShoreOffSite.qa * 170 * month))

    //Project Overhead Cost
    //.10 y .20 Posibles a estar en BD
    const POCNear = PTCNear * .10
    const POCOff = PTCOff * .20

    //Cost of Vendor´s Attrition Nearshore
    //10 y 15 en BD = 25
    //8 valor fijo de la formula
    function CVANear() {
        if (ceroMonth() === true)
            return 0
        else return Math.round((.05 * jr * 25 * 8 * pricesNearShoreOffSite.jr) + (.05 * mid * 25 * 8 * pricesNearShoreOffSite.mid) + (.05 * sr * 25 * 8 * pricesNearShoreOffSite.sr) + (.05 * tech * 25 * 8 * pricesNearShoreOffSite.tech) + (.05 * qa * 25 * 8 * pricesNearShoreOffSite.qa) +
            (.05 * jrNearOn * 25 * 8 * pricesNearShoreOnSite.jr) + (.05 * midNearOn * 25 * 8 * pricesNearShoreOnSite.mid) + (.05 * srNearOn * 25 * 8 * pricesNearShoreOnSite.sr) + (.05 * techNearOn * 25 * 8 * pricesNearShoreOnSite.tech) + (.05 * qaNearOn * 25 * 8 * pricesNearShoreOnSite.qa))
    }

    //Cost of Vendor´s Attrition Offshore
    //10 y 15 en BD = 25
    //8 valor fijo de la formula
    function CVAOff() {
        if (ceroMonth() === true)
            return 0
        else return Math.round((.4 * jr * 25 * 8 * pricesOffShoreOffSite.jr) + (.4 * mid * 25 * 8 * pricesOffShoreOffSite.mid) + (.4 * sr * 25 * 8 * pricesOffShoreOffSite.sr) + (.4 * tech * 25 * 8 * pricesOffShoreOffSite.tech) + (.4 * qa * 25 * 8 * pricesOffShoreOffSite.qa) +
            (.4 * jrOffOn * 25 * 8 * pricesOffShoreOnSite.jr) + (.4 * midOffOn * 25 * 8 * pricesOffShoreOnSite.mid) + (.4 * srOffOn * 25 * 8 * pricesOffShoreOnSite.sr) + (.4 * techOffOn * 25 * 8 * pricesOffShoreOnSite.tech) + (.4 * qaOffOn * 25 * 8 * pricesOffShoreOnSite.qa))
    }
    //OffShore Resources Allocation Costs
    //1500 valor fijo por mes
    function ORACOff() {
        if (valCerosMonth() === true)
            return 0
        else return Math.round(month * (jrOffOn + midOffOn + srOffOn + techOffOn + qaOffOn) * 1500)
    }

    //NearShore Resources Allocation Costs
    //1500 valor fijo por mes
    function ORACNear() {
        if (valCerosMonth() === true)
            return 0
        else return Math.round(month * (jrNearOn + midNearOn + srNearOn + techNearOn + qaNearOn) * 1500)
    }
    /*
        //Long Distance Costs Nearshore
        //.19 60 y 30 fijos
        function LDCNear() {
            if (valCerosMonth() === true)
                return 0
            else return Math.round(month * .19 * 60 * 30)
        }
    
        //Long Distance Costs OffShore
        //.59 60 y 30 fijos
        function LDCOff() {
            if (valCerosMonth() === true)
                return 0
            else return Math.round(month * .59 * 60 * 30)
        }
    */

    //Knowledge Transfer Costs NearShore
    //.05 fijo
    const KTCNear = Math.round(PTCNear * .05)

    //Knowledge Transfer Costs OffShore
    //.1 fijo
    const KTCOff = Math.round(PTCOff * .1)

    //Project Trips Costs Near
    function PTCostNear() {
        if (valCerosMonth() === true || ceroMonth() === true)
            return 0
        else return 12540
    }

    //Project Trips Costs Off
    function PTCostOff() {
        if (valCerosMonth() === true || ceroMonth() === true)
            return 0
        else return 34800
    }

    //Productivity Losses Costs Near
    const aux1 = (jr * pricesNearShoreOffSite.jr * 170 * month) + (mid * pricesNearShoreOffSite.mid * 170 * month) + (sr * pricesNearShoreOffSite.sr * 170 * month) + (tech * pricesNearShoreOffSite.tech * 170 * month) + (qa * pricesNearShoreOffSite.qa * 170 * month)
    const PLCNear = Math.round(aux1 * .1)

    //Productivity Losses Costs Off
    const aux2 = (jr * pricesOffShoreOffSite.jr * 170 * month) + (mid * pricesOffShoreOffSite.mid * 170 * month) + (sr * pricesOffShoreOffSite.sr * 170 * month) + (tech * pricesOffShoreOffSite.tech * 170 * month) + (qa * pricesOffShoreOffSite.qa * 170 * month)
    const PLCOff = Math.round(aux2 * .25)


    //Risk Management Costs Near
    const RMCNear = Math.round((PTCNear + POCNear + CVANear() + /*LDCNear()*/ + KTCNear + PTCostNear() + PLCNear) * .03)

    //Risk Management Costs Off
    const RMCOff = Math.round((PTCOff + POCOff + CVAOff() + ORACOff() + /*LDCOff()*/ + KTCOff + PTCostOff() + PLCOff) * .05)


    ////Total cost of Engagement Near
    const TCENear = Math.round(RMCNear + PTCNear + POCNear + CVANear() + /*LDCNear()*/ + KTCNear + PTCostNear() + PLCNear)

    ////Total cost of Engagement Off
    const TCEOff = Math.round(RMCOff + PTCOff + POCOff + CVAOff() + ORACOff() + /*LDCOff()*/ + KTCOff + PTCostOff() + PLCOff)

    //Funcion validar ceros sin mes
    function valCerosMonth() {
        if (jr === 0 && mid === 0 && sr === 0 && tech === 0 && qa === 0) return true
        else return false
    }

    //Funcion validar cero Month 
    function ceroMonth() {
        if (month === 0) return true
        else return false
    }
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    function btnDisabled() {
        if (valCerosMonth() === true || ceroMonth() === true)
            return true
        else{
                return false
        }
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
    }, /*{
        name: 'Long Distance',
        data: [0, LDCNear(), LDCOff()]
    },*/ {
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
            height: '100%',
            stacked: true,
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    pan: true
                },
            },
            defaultLocale: 'en',
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
        fill: {
            opacity: 1,
            offsetX: 400
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            labels: {
                show: !btnDisabled(),
                formatter: function (val) {
                    return "$" + comas(val);
                }
            }

        },
        xaxis: {
            type: 'category',
            categories: [['In-house',"$" + comas(PTCInHouse)], ['Nearshore', "$" + comas(TCENear)], ['Offshore',  "$" + comas(TCEOff)]],
            axisBorder: {
                show: false
            },
            labels: {
                show: !btnDisabled()
            }
        }
    }

    function comas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <Table className="center" bordered size="sm">
                            <thead className="color text-white">
                                <tr>
                                    <th className="tablePr">Cost Component</th>
                                    <th className="tablePr">In-house US</th>
                                    <th className="tablePr">Nearshore</th>
                                    <th className="tablePr">Offshore</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> On-Site Man/Hours * On-Site Rate) + Off-Shore Man/Hours * Off-Shore Rate</Tooltip>}>
                                        <td className="text-blue hover tablePr">Project Team</td>
                                    </OverlayTrigger>
                                    <td className="tablePr">${comas(PTCInHouse)}</td>
                                    <td className="tablePr">${comas(PTCNear)}</td>
                                    <td className="tablePr">${comas(PTCOff)}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Project Team Costs * Project Overhead Percentage</Tooltip>}>
                                        <td className="tablePr text-blue hover">Project Overhead</td>
                                    </OverlayTrigger>
                                    <td className="tablePr">-</td>
                                    <td className="tablePr">${comas(POCNear)}</td>
                                    <td className="tablePr">${comas(POCOff)}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Attrition Rate (%) * Number of Resources*Time to be productive * Rate</Tooltip>}>
                                        <td className="tablePr text-blue hover">Vendor's Attrition</td>
                                    </OverlayTrigger>
                                    <td className="tablePr">-</td>
                                    <td className="tablePr">${comas(CVANear())}</td>
                                    <td className="tablePr">${comas(CVAOff())}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> On-Site Resources * Monthly Facility Use Cost per Resource * Number of Months</Tooltip>}>
                                        <td className="tablePr text-blue hover">On-site Resources Allocation</td>
                                    </OverlayTrigger>
                                    <td className="tablePr">-</td>
                                    <td className="tablePr">${comas(ORACNear())}</td>
                                    <td className="tablePr">${comas(ORACOff())}</td>
                                </tr>
                                {/*
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Number of LD Minutes/Month * LD Rate * Duration of Engagement in Months</Tooltip>}>
                                    <td className="table-active text-blue hover">Long Distance</td>
                                    </OverlayTrigger>
                                    <td>-</td>
                                    <td>${comas(LDCNear())}</td>
                                    <td>${comas(LDCOff())}</td>
                                </tr>
                                */}
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Project Team Costs * KT Overhead Percentage</Tooltip>}>
                                        <td className="tablePr text-blue hover">Knowledge Transfer</td>
                                    </OverlayTrigger>
                                    <td className="tablePr">-</td>
                                    <td className="tablePr">${comas(KTCNear)}</td>
                                    <td className="tablePr">${comas(KTCOff)}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Airfares + Hotel Fares + car rental fees + perdiem</Tooltip>}>
                                        <td className="tablePr text-blue hover">Project Trips</td>
                                    </OverlayTrigger>
                                    <td className="tablePr">-</td>
                                    <td className="tablePr">${comas(PTCostNear())}</td>
                                    <td className="tablePr">${comas(PTCostOff())}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Off-Shore Man/Hours * Off-Shore Rate * Productivity Loss Percentage</Tooltip>}>
                                        <td className="tablePr text-blue hover">Productivity Losses</td>
                                    </OverlayTrigger>
                                    <td className="tablePr">-</td>
                                    <td className="tablePr">${comas(PLCNear)}</td>
                                    <td className="tablePr">${comas(PLCOff)}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Subtotal Engagement Cost * Risk Management Percentage</Tooltip>}>
                                        <td className="tablePr text-blue hover">Risk Management</td>
                                    </OverlayTrigger>
                                    <td className="tablePr">-</td>
                                    <td className="tablePr">${comas(RMCNear)}</td>
                                    <td className="tablePr">${comas(RMCOff)}</td>
                                </tr>
                                <tr>
                                    <td className="tablePr">Total Cost</td>
                                    <td className="tablePr">${comas(PTCInHouse)}</td>
                                    <td className="tablePr">${comas(TCENear)}</td>
                                    <td className="tablePr">${comas(TCEOff)}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <ReactApexChart options={options} series={series} type="bar" height={370} />
                    </Col>
                </Row>
                <Row>
                    <Col className="center m-4">
                        <h4 className="text-blue">Done building your team?</h4>
                        <Button
                            className="sendEmail"
                            variant="primary"
                            onClick={handleShow}
                            disabled={btnDisabled()}>
                            Send Cost
                            </Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Total Cost of Engagement</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormEmail
                            jr={jr}
                            mid={mid}
                            sr={sr}
                            tech={tech}
                            qa={qa}
                            month={month}
                        
                            PTCNear={comas(PTCNear)}
                            PTCOff={comas(PTCOff)}
                            POCNear={comas(POCNear)}
                            POCOff={comas(POCOff)}
                            CVANear={comas(CVANear())}
                            CVAOff={comas(CVAOff())}
                            ORACOff={comas(ORACOff())}
                            //LDCNear={comas(LDCNear())}
                            //LDCOff={comas(LDCOff())}
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
        </div>
    )
};

export default CostOfEngagementComparison
