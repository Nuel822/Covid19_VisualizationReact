import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, FormGroup } from "shards-react";
import DisplayPieChart from '../chart/pieChart.component';
import { Typeahead } from 'react-bootstrap-typeahead';

const initialState = {
    searchInput: [],
    chartData: [],
    chartInnerTitle: "",
    render: false,
    renderKey: 0,
    previousSearch: "",
    filterResult: []
}

const CountryCaseStats = (props) => {

    const [state, setstate] = useState(initialState);


    const displayChart = () => {

        const countryData = [];
        let noSearchRecordRender = true;

        if (state.previousSearch !== state.searchInput) {

            const percentageActive = ((state.filterResult[0].active / state.filterResult[0].totalCases)).toFixed(2);
            const percentageCritical = (((state.filterResult[0].critical / state.filterResult[0].totalCases)).toFixed(2)) == 0 ? 0.01 : (((state.filterResult[0].critical / state.filterResult[0].totalCases)).toFixed(2))
            const percentageRecovered = (((state.filterResult[0].recovered / state.filterResult[0].totalCases))).toFixed(2) == 0 ? 0.01 : (((state.filterResult[0].recovered / state.filterResult[0].totalCases))).toFixed(2)
            const percentageDeaths = (((state.filterResult[0].totalDeaths / state.filterResult[0].totalCases))).toFixed(2) == 0 ? 0.01 : (((state.filterResult[0].totalDeaths / state.filterResult[0].totalCases))).toFixed(2)

            countryData.push({
                item: "Active",
                count: ~~(percentageActive * 100),
                percent: parseFloat(percentageActive)
            });

            countryData.push({
                item: "Critical",
                count: ~~(percentageCritical * 100),
                percent: parseFloat(percentageCritical)
            });

            countryData.push({
                item: "Recovered",
                count: ~~(percentageRecovered * 100),
                percent: parseFloat(percentageRecovered)
            });

            countryData.push({
                item: "Deaths",
                count: ~~(percentageDeaths * 100),
                percent: parseFloat(percentageDeaths)
            });
            noSearchRecordRender = false;
            setstate({ searchInput: state.searchInput, chartData: countryData, chartInnerTitle: state.filterResult[0].totalCases, render: true, previousSearch: state.searchInput })
        }
        if (noSearchRecordRender && state.previousSearch !== state.searchInput) {
            setstate({ ...state, render: true })
        }
    }

    const handleChange = (filter) => {
        console.log(filter);
        if (Array.isArray(filter) && filter.length > 0) {
            setstate({ searchInput: filter[0].country, chartData: [], filterResult: filter })
        }
    }

    const searchNotFoundStyle = {
        color: '#FF0000'
    }

    return (

        <Card small className="h-100">
            <CardHeader className="border-bottom">
                <h6 className="m-0">{props.title}</h6>
            </CardHeader>
            <CardBody className="py-0">
                <FormGroup>
                    <Typeahead
                        id="filtering-example"
                        caseSensitive={true}
                        labelKey={(option) => `${option.country}`}
                        onChange={handleChange}
                        options={props.countryCaseData}
                        placeholder="Enter Country Name..."
                    />
                </FormGroup>
                <FormGroup>
                    <Button theme="primary" onClick={displayChart}>Search</Button>
                </FormGroup>
                <div id="containerPieChart" key={state.searchInput} />

                {state.chartData && state.chartData.length > 0 && (
                    <DisplayPieChart innerChartTitle={state.chartInnerTitle} chartData={state.chartData} />
                )}

                {state.chartData && state.chartData.length === 0 && state.render && (
                    <h5 className="m-0" style={searchNotFoundStyle}> No Search Record Found </h5>
                )}
            </CardBody>

        </Card>
    );
}

export default CountryCaseStats;
