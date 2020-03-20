import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CostOfEngagementComparisonComponent from '../APICalls/projectTeamCostCall';
import Header from './header'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    slider: {
        color: "#0087ff",
    },
    root: {
        color: "#0087ff",
        width: '100%',
        fontSize: '15px',
        margin: 0
    },
}));

const PrettoSlider = withStyles({
    root: {
        color: '#0087ff',
        height: 0,
        marginTop: '-4px'
    },
    thumb: {
        height: 18,
        width: 18,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -7,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 6,
        borderRadius: 1,
    },
    rail: {
        height: 6,
        width: '100.5%',
        borderRadius: 1,
    },
})(Slider);

export default function TeamCompositionFun() {

    const [jr, jrCount] = useState(0);
    const [mid, midCount] = useState(0);
    const [sr, srCount] = useState(0);
    const [techLead, techLeadCount] = useState(0);
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

    function jrHandler(event, value) {
        jrCount(value)
    }

    function monthHandler(event, value) {
        monthCount(value)
    }

    function midHandler(event, value) {
        midCount(value)
    }

    function techHandler(event, value) {
        techLeadCount(value)
    }

    function srHandler(event, value) {
        srCount(value)
    }

    function qaHandler(event, value) {
        qaCount(value)
    }

    function ResetValues() {
        qaCount(0)
        jrCount(0)
        monthCount(0)
        midCount(0)
        techLeadCount(0)
        srCount(0)
    }

    function ResetValuesDisabled() {
        if (jr !== 0 || mid !== 0 || sr !== 0 || qa !== 0 || techLead !== 0 || month !== 0)
        return false
        return true
    }

    return (
        <div>
            <Header></Header>
            <Container className="mt-4" fluid={true}>
                <div className={classes.root}>
                    <Row className="padLeft">
                        <Col lg={3} md={6} className="pr-2 pl-2">
                        <h3 className="tittles3">Build your Team</h3>
                            <label>Project Duration (Months)</label>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={0}
                                value={month}
                                max={12}
                                marks={marks12}
                                onChangeCommitted={monthHandler}
                            />
                            <label>Lead Developer</label>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={0}
                                value={techLead}
                                marks={marks}
                                max={10}
                                onChangeCommitted={techHandler}
                            />
                            <label>Senior Developer</label>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={0}
                                value={sr}
                                marks={marks}
                                max={10}
                                onChangeCommitted={srHandler}
                            />
                            <label>Mid-Level Developer</label>
                            <PrettoSlider
                                 valueLabelDisplay="auto"
                                 aria-label="pretto slider"
                                defaultValue={0}
                                value={mid}
                                marks={marks}
                                max={10}
                                onChangeCommitted={midHandler}
                            />
                            <label>Jr Developer</label>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={0}
                                value={jr}
                                marks={marks}
                                max={10}
                                onChangeCommitted={jrHandler}
                            />
                            <label>QA Engineer</label>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={0}
                                value={qa}
                                marks={marks}
                                max={10}
                                onChangeCommitted={qaHandler}
                            />
                            <div className="mt-1 center">
                                <Button
                                    variant="primary"
                                    onClick={ResetValues}
                                    disabled={ResetValuesDisabled()}>
                                    Reset values
                                </Button>
                            </div>
                        </Col>
 
                        <CostOfEngagementComparisonComponent
                            jr={jr}
                            mid={mid}
                            sr={sr}
                            tech={techLead}
                            qa={qa}
                            month={month}
                        />
                    </Row>
                </div>
            </Container>
        </div>

    );
}