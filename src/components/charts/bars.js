import React from 'react';
import {Chart} from '../../components'
import colors from '../../styles/colors';

export const VerticalBarChart = (props) => {

 return <Chart 
    styles={{
     height: 200, 
     widht: '100%', 
     flex: 1
    }}
    options={{
        chart: {
            type: 'column',
            backgroundColor: colors.dark,
            spacing: [0, 0, 0, 0],
            margin: [0, 0, 0, 0],
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        yAxis: {
            visible: false,
            minPadding: 0,
            maxPadding: 0,
        },
        tooltip: {
            backgroundColor: colors.grey50,
            borderRadius: 10,
            borderWidth: 1,
        },
        series: [
        {
            showInLegend: false,
            color: colors.success,
            borderWidth: 0,
            name: 'Call',
            data: [49.9, 71.5, 50, 89, 34.2, 23.1, 82],
        },
        {
            showInLegend: false,
            color: colors.danger,
            borderWidth: 0,
            name: 'Put',
            data: [83.6, 78.8, 54.1, 34.5, 24.4, 67.1, 12.5],
        }
        ]
}}
     />;
}

export const HorizontalBarChart = (props) => {

    return <Chart
        styles={{
            height: 80,
            widht: '100%',
            flex: 1
        }}
        options={{
            chart: {
                type: 'bar',
                backgroundColor: colors.dark,
                spacing: [0, 0, 0, 0],
                margin: [0, 0, 0, 0],
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                }
            },
            yAxis: {
                visible: false,
                min: 0,
                max: 20,
                padding: [0, 0, 0, 0],
                margin: [0, 0, 0, 0],
            },
            legend: {
                itemStyle:{
                    color: colors.grey50,
                },
            },
            tooltip: {
                backgroundColor: colors.grey50,
                borderRadius: 10,
                borderWidth: 1,
                formatter: function () {
                    return `${this.series.name} : ${this.y} oparations`
                }
            },
            xAxis:{
                max: 10,
                padding: [0, 0, 0, 0],
                margin: [0, 0, 0, 0],
            },
            series: [
                {
                    borderWidth: 0,
                    height: 20,
                    name: 'USD/JPY',
                    data: [5],
                },
                {
                    borderWidth: 0,
                    height: 20,
                    name: 'AUD/CAD',
                    data: [5],
                },
                {
                    borderWidth: 0,
                    height: 20,
                    name: 'EUR/GBP',
                    data: [5],
                },
                {
                    borderWidth: 0,
                    height: 20,
                    name: 'USD/EUR',
                    data: [5],
                },

            ]
        }}
    />
}