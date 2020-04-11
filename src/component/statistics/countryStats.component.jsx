import React from 'react';
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';
import { CardHeader, CardBody, Card } from "shards-react";



let renderCount = 0;

const CountryStats = (props) => {

  const renderChart = () => {

    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
      padding: [0, 20, 40]
    });

    chart.scale({
      x: { sync: true },
      y: { sync: true }
    });
    chart.coordinate('rect').reflect('y');
    chart.legend(false);
    chart.axis(false);

    chart.tooltip({
      showTitle: false,
      shared: true,
      showMarkers: false,
      containerTpl: '<div class="g2-tooltip"><table class="g2-tooltip-list"></table></div>',
      itemTpl: '<tr data-index="{index}"><td style="padding:5px;background-color:#852323; color:#fff;">{name}</td><td style="padding:5px;background-color:#fff;color:#000;">{value}</td></tr>',
      domStyles: {
        'g2-tooltip': {
          borderRadius: '2px',
          backgroundColor: '#DDDDDD',
          padding: 0,
          border: '1px solid #333'
        }
      }
    });
    const ds = new DataSet();
    // draw the map
    const dv = ds.createView('back')
      .source(props.geoData, {
        type: 'GeoJSON'
      })
      .transform({
        type: 'geo.projection',
        projection: 'geoMercator',
        as: ['x', 'y', 'centroidX', 'centroidY']
      });

    const bgView = chart.createView();
    bgView.data(dv.rows);
    bgView.tooltip(false);
    bgView.polygon()
      .position('x*y')
      .style({
        fill: '#DDDDDD',
        stroke: '#b1b1b1',
        lineWidth: 0.5,
        fillOpacity: 0.85

      });

    const userData = ds.createView().source(props.countryData);
    userData.transform({
      type: 'map',
      callback: obj => {
        const projectedCoord = dv.geoProjectPosition([obj.longitude * 1, obj.latitude * 1], 'geoMercator');
        obj.x = projectedCoord[0];
        obj.y = projectedCoord[1];
        obj.deaths = obj.totalDeaths * 1; // check this line for improper map
        obj.magnitude = obj.totalCases * 1;
        return obj;
      }
    });

    const pointView = chart.createView();
    pointView.data(userData.rows);
    pointView.point()
      .position('x*y')
      .size('magnitude', [2, 30])
      .shape('circle')
      .color('#FF2F29')
      .tooltip('country*active*recovered*critical*total*totalCases')
      .style({
        fillOpacity: 0.45,
      })
      .state({
        active: {
          style: {
            lineWidth: 1,
            stroke: '#FF2F29'
          }
        }
      });
    pointView.interaction('element-active');
    chart.render();
  }

  if (props.geoData.type && props.countryData.length > 0 && renderCount == 0 ){
    renderCount += 1
    console.log(props.countryData)
       renderChart();
  }
  return (
 
    <>
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0 text-center text-uppercase">{props.title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <div id="container" />
        </CardBody>
      </Card>
    </>
  );
}
export default CountryStats;


