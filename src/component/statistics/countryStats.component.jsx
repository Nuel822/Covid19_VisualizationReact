import React from 'react';
import  DisplayMapChart  from '../chart/mapChart.component'
import { CardHeader, CardBody, Card } from "shards-react";

const CountryStats = (props) => {
  
  return (

    <>
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0 text-center text-uppercase">{props.title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          {props.geoData.type && props.countryData.length > 0  && ( 
             <DisplayMapChart countryData={props.countryData} geoData={props.geoData}/>
          )}
          <div id="container" />
        </CardBody>
      </Card>
    </>
  );
}
export default CountryStats;


