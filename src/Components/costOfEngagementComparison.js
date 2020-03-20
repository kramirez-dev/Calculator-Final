import React, { useState } from 'react';
import { Table, Col, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts'
import FormEmail from './form-email'


function CostOfEngagementComparison({ jr, mid, sr, tech, qa, month, pricesInHouse, pricesNearShoreOffSite, pricesNearShoreOnSite, pricesOffShoreOffSite, pricesOffShoreOnSite }) {

    const jrNearOn = Math.round(jr / 25)
    const midNearOn = Math.round(mid / 15)
    const srNearOn = Math.round(sr / 10)
    const techNearOn = Math.round(tech / 5)
    const qaNearOn = Math.round(qa / 25) 

    const jrOffOn = Math.round(jr / 25)
    const midOffOn = Math.round(mid / 15) 
    const srOffOn = Math.round(sr / 10)
    const techOffOn = Math.round(tech / 5)
    const qaOffOn = Math.round(qa / 25) 

    //170 Valor fijo de la formula
    //Project Team Costs In Hose
    const PTCInHouse = Math.round((jr * pricesInHouse.jr * 170 * month) + (mid * pricesInHouse.mid * 170 * month) + (sr * pricesInHouse.sr * 170 * month) + (tech * pricesInHouse.tech * 170 * month) + (qa * pricesInHouse.qa * 170 * month))

    //Project Team Costs NearShore
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
        else {
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
                    return "$" + commas(val);
                }
            }

        },
        xaxis: {
            type: 'category',
            categories: [['In-house', "$" + commas(PTCInHouse)], ['Nearshore', "$" + commas(TCENear)], ['Offshore', "$" + commas(TCEOff)]],
            axisBorder: {
                show: false
            },
            labels: {
                show: true
            }
        }
    }

    function commas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
         <Col lg={5} md={6}>
                <h3 className="tittles3 ml-3">Graph</h3>
                <ReactApexChart className="padLeftGraph" options={options} series={series} type="bar" height={530}/>
            </Col>
            <Col lg={4}>
                <h3  className="tittles3">Team Cost</h3>
                <Table className="center asd1" bordered size="sm">
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
                                <td className="text-blue hover tablePr left">Project Team</td>
                            </OverlayTrigger>
                            <td className="tablePr">${commas(PTCInHouse)}</td>
                            <td className="tablePr">${commas(PTCNear)}</td>
                            <td className="tablePr">${commas(PTCOff)}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Project Team Costs * Project Overhead Percentage</Tooltip>}>
                                <td className="tablePr text-blue hover left">Project Overhead</td>
                            </OverlayTrigger>
                            <td className="tablePr">-</td>
                            <td className="tablePr">${commas(POCNear)}</td>
                            <td className="tablePr">${commas(POCOff)}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Attrition Rate (%) * Number of Resources*Time to be productive * Rate</Tooltip>}>
                                <td className="tablePr text-blue hover left">Vendor's Attrition</td>
                            </OverlayTrigger>
                            <td className="tablePr">-</td>
                            <td className="tablePr">${commas(CVANear())}</td>
                            <td className="tablePr">${commas(CVAOff())}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> On-Site Resources * Monthly Facility Use Cost per Resource * Number of Months</Tooltip>}>
                                <td className="tablePr text-blue hover left">On-site Resources Allocation</td>
                            </OverlayTrigger>
                            <td className="tablePr">-</td>
                            <td className="tablePr">${commas(ORACNear())}</td>
                            <td className="tablePr">${commas(ORACOff())}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Project Team Costs * KT Overhead Percentage</Tooltip>}>
                                <td className="tablePr text-blue hover left">Knowledge Transfer</td>
                            </OverlayTrigger>
                            <td className="tablePr">-</td>
                            <td className="tablePr">${commas(KTCNear)}</td>
                            <td className="tablePr">${commas(KTCOff)}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Airfares + Hotel Fares + car rental fees + perdiem</Tooltip>}>
                                <td className="tablePr text-blue hover left">Project Trips</td>
                            </OverlayTrigger>
                            <td className="tablePr">-</td>
                            <td className="tablePr">${commas(PTCostNear())}</td>
                            <td className="tablePr">${commas(PTCostOff())}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Off-Shore Man/Hours * Off-Shore Rate * Productivity Loss Percentage</Tooltip>}>
                                <td className="tablePr text-blue hover left">Productivity Losses</td>
                            </OverlayTrigger>
                            <td className="tablePr">-</td>
                            <td className="tablePr">${commas(PLCNear)}</td>
                            <td className="tablePr">${commas(PLCOff)}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> Subtotal Engagement Cost * Risk Management Percentage</Tooltip>}>
                                <td className="tablePr text-blue hover left">Risk Management</td>
                            </OverlayTrigger>
                            <td className="tablePr">-</td>
                            <td className="tablePr">${commas(RMCNear)}</td>
                            <td className="tablePr">${commas(RMCOff)}</td>
                        </tr>
                        <tr className="totals">
                            <td className="tablePr bold right">Total Cost (USD)</td>
                            <td className="tablePr bold">${commas(PTCInHouse)}</td>
                            <td className="tablePr bold">${commas(TCENear)}</td>
                            <td className="tablePr bold">${commas(TCEOff)}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="sendEmailDiv">
                <h3 className="text-blue tittles3">Done building your team?</h3>
                    <Button
                        className="sendEmail"
                        variant="primary"
                        onClick={handleShow}
                        disabled={btnDisabled()}>
                        Send Cost
                    </Button>
                    </div>
            </Col>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Total Cost of Engagement (USD)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormEmail
                        jr={jr}
                        mid={mid}
                        sr={sr}
                        tech={tech}
                        qa={qa}
                        month={month}

                        PTCNear={commas(PTCNear)}
                        PTCOff={commas(PTCOff)}
                        POCNear={commas(POCNear)}
                        POCOff={commas(POCOff)}
                        CVANear={commas(CVANear())}
                        CVAOff={commas(CVAOff())}
                        ORACOff={commas(ORACOff())}
                        ORACNear={commas(ORACNear())}
                        KTCNear={commas(KTCNear)}
                        KTCOff={commas(KTCOff)}
                        PTCostNear={commas(PTCostNear())}
                        PTCostOff={commas(PTCostOff())}
                        PLCNear={commas(PLCNear)}
                        PLCOff={commas(PLCOff)}
                        RMCNear={commas(RMCNear)}
                        RMCOff={commas(RMCOff)}


                        PTCInHouse={commas(PTCInHouse)}
                        TCENear={commas(TCENear)}
                        TCEOff={commas(TCEOff)}
                        handleClose={handleClose}
                    ></FormEmail>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default CostOfEngagementComparison
