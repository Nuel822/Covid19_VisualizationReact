import React from 'react';
import { Chart } from '@antv/g2';


const DisplayPieChart = (props) => {

    if (props.chartData && props.chartData.length > 0) {
        const chart = new Chart({
            container: 'containerPieChart',
            autoFit: true,
            height: 500,
        });

        chart.data(props.chartData);
        chart.scale('percent', {
            formatter: (val) => {
                val = val * 100 + '%';
                return val;
            },
        });
        chart.coordinate('theta', {
            radius: 0.75,
            innerRadius: 0.6,
        });
        chart.tooltip({
            showTitle: false,
            showMarkers: false,
            itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
        });
        chart.annotation()
            .text({
                position: ['50%', '50%'],
                content: "Total Confirmed Cases",
                style: {
                    fontSize: 14,
                    fill: '#8c8c8c',
                    textAlign: 'center',
                },
                offsetY: -20,
            })
            .text({
                position: ['50%', '50%'],
                content: props.innerChartTitle,
                style: {
                    fontSize: 20,
                    fill: '#8c8c8c',
                    textAlign: 'center',
                },
                offsetX: -10,
                offsetY: 20,
            });
        chart.interval()
            .adjust('stack')
            .position('percent')
            .color('item')
            .tooltip('item*percent', (item, percent) => {
                percent = percent * 100 + '%';
                return {
                    name: item,
                    value: percent,
                };
            });
        
        chart.interaction('element-active');
        chart.render(true);
    }
        return (
            <></>
        );
    }
export default DisplayPieChart;