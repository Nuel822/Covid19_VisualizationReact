import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, InputGroup, FormInput, InputGroupAddon } from "shards-react";
import DisplayPieChart from '../chart/pieChart.component'

const initialState = {
    searchInput: [],
    chartData: [],
    chartInnerTitle: "",
    render: false,
    renderKey: 0
}


const CountryCaseStats = (props) => {

    const [state, setstate] = useState(initialState)

    const displayChart = () => {

        console.log("initialState:", state)
        const countryData = [];
        var filterResult = props.countryCaseData.filter(data => state.searchInput.toLowerCase() == data.country.toLowerCase());

        // const countryData = [
        //     { item: "Active", count: 80, percent: 0.8 },
        //     { item: "Critical", count: 1, percent: 0.01 },
        //     { item: "Recovered", count: 18, percent: 0.18 },
        //     { item: "Deaths", count: 2, percent: 0.02 }
        // ];

        // var filterResult = {

        //     latitude: "9.081999",
        //     longitude: "8.675277",
        //     country: "Nigeria",
        //     recovered: 51,
        //     critical: 2,
        //     totalDeaths: 7,
        //     totalCases: 288,
        //     active: 230
        // }

        if (filterResult.length > 0) {

            const percentageActive = ((filterResult[0].active / filterResult[0].totalCases)).toFixed(2);
            const percentageCritical = (((filterResult[0].critical / filterResult[0].totalCases)).toFixed(2))
            const percentageRecovered = (((filterResult[0].recovered / filterResult[0].totalCases))).toFixed(2)
            const percentageDeaths = (((filterResult[0].totalDeaths / filterResult[0].totalCases))).toFixed(2)

            //  const percentageActive = ((filterResult.active / filterResult.totalCases)).toFixed(2);
            // const percentageCritical = (((filterResult.critical / filterResult.totalCases)).toFixed(2))
            // const percentageRecovered = (((filterResult.recovered / filterResult.totalCases))).toFixed(2)
            // const percentageDeaths = (((filterResult.totalDeaths / filterResult.totalCases))).toFixed(2)

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

            setstate({ chartData: countryData, chartInnerTitle: filterResult[0].totalCases, render: true })

        }
    }

    const handleChange = (e) => {
        setstate(null);
        setstate({ searchInput: e.target.value, chartInnerTitle: [], chartData: [], render: false})
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
                <InputGroup seamless className="mb-3">
                    <FormInput placeholder="Enter Country Name" onChange={handleChange} />
                    <InputGroupAddon type="append">
                        <Button theme="primary" onClick={displayChart}>Search</Button>
                    </InputGroupAddon>
                </InputGroup>
                <div id="containerPieChart"/>

                {state.chartData.length > 0 && state.render && (
                    <DisplayPieChart innerChartTitle={state.chartInnerTitle} chartData={state.chartData} />
                )}
                {state.chartData.length == 0 && state.render && (
                    <h5 className="m-0" style={searchNotFoundStyle}> No Search Record Found </h5>
                )}

            </CardBody>

        </Card>
    );
}

export default CountryCaseStats;
