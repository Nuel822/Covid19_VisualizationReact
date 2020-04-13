import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actionForTotalStat from '../action/totalstats.action';
import * as actionForCountryStat from '../action/countryStats.action';
import { Row, Container, Col } from "shards-react";
import PageHeader from '../component/common/pageheader.component';
import CountryStat from '../component/statistics/countryStats.component';
import GeoLocation from '../utils/geoCountryData';
import CountryCaseStats from '../component/statistics/countryCaseStats.component';
import TotalStats from '../component/statistics/totalStats.component';


const DefaultLayout = () => {

    const countryData = [];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionForTotalStat.fetch());
        dispatch(actionForCountryStat.fetch());
        dispatch(actionForCountryStat.fetchDvData());
    }, [dispatch])

    const { allCountryData, geoData, totalFigure } = useSelector(state => ({

        allCountryData: state.CountryStats.allCountryData,
        geoData: state.CountryStats.geoData,
        totalFigure: state.TotalStats.totalFigure

    }));
    if (allCountryData && allCountryData.response) {

       allCountryData.response.map(data => {
            const geolocation = GeoLocation(data.country);
            if (geolocation.length > 0) {
                countryData.push({
                    latitude: geolocation[0].latitude,
                    longitude: geolocation[0].longitude,
                    country: data.country,
                    recovered: data.cases.recovered,
                    critical: data.cases.critical,
                    totalDeaths: data.deaths.total,
                    totalCases: data.cases.total,
                    active: data.cases.active
                })
            }
        })
    }

    return (
        <>
            <Container fluid className="main-content-container px-4 container-fluid">

                <Row noGutters className="page-header py-4">
                    <PageHeader title={`Covid-19 Quick Stats as at (${totalFigure.statistic_taken_at})`} subtitle="Dashboard" className="text-sm-left mb-3" />
                </Row>
                <Row>
                    <Col className="col-lg mb-4">
                        <TotalStats
                            id={'small-stats-one'}
                            variation="1"
                            label="Total Cases"
                            value={totalFigure.total_cases}
                        />
                    </Col>
                    <Col className="col-lg mb-4">
                        <TotalStats
                            id={'small-stats-two'}
                            variation="1"
                            label="Total Deaths"
                            value={totalFigure.total_deaths}
                        />
                    </Col>
                    <Col className="col-lg mb-4">
                        <TotalStats
                            id={'small-stats-three'}
                            variation="1"
                            label="Total Recovered"
                            value={totalFigure.total_recovered}
                        />
                    </Col>
                    <Col className="col-lg mb-4">
                        <TotalStats
                            id={'small-stats-four'}
                            variation="1"
                            label="New Cases"
                            value={totalFigure.new_cases}
                        />
                    </Col>
                    <Col className="col-lg mb-4">
                        <TotalStats
                            id={'small-stats-four'}
                            variation="1"
                            label="New Deaths"
                            value={totalFigure.new_deaths}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="8" md="12" sm="12" className="mb-4">
                        <CountryStat title="Quick Stat by Country" countryData={countryData} geoData={geoData} />
                    </Col >
                    <Col lg="4" md="6" sm="12" className="mb-4">
                        <CountryCaseStats title="Covid-19 Case Breakdown By Country" countryCaseData={countryData} />
                    </Col>
                </Row>

            </Container>
        </>
    );
}
export default DefaultLayout;