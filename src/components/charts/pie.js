import React from 'react';
import {Chart} from '../../components'
import colors from '../../styles/colors';
import typography from '../../styles/typography';

export const DonutPieChart = () => {
    return <Chart
        styles={{
            flex: 1,
            widht: '100%',
            height: 250,
        }}
        options={{
            chart: {
                type: 'pie',
                backgroundColor: colors.dark,
                spacing: [0, 0, 0, 0],
                margin: [0, 0, 0, 0],
            },
            credits: {
                enabled: false,
            },
            title: {
                text: '',
            },
            legends: {
                enabled: false,
            },
            series:[
                {
                    name: 'Operation Result',
                    data: [
                        {
                            name: 'WIN',
                            y: 8,
                            color: colors.success,
                            borderWidth: 7,
                            borderColor: colors.dark,
                        },
                        {
                            name: 'LOSS',
                            y: 3,
                            color: colors.danger,
                            borderWidth: 7,
                            borderColor: colors.dark,
                        },
                        {
                            name: 'TIES',
                            y: 2,
                            color: colors.grey50,
                            borderWidth: 7,
                            borderColor: colors.dark,
                        },
                    ],
                    innerSize: '50%',
                    dataLabels:{
                        style: {
                            color: colors.grey50,
                            fontSize: typography.small,
                            textOutline: false
                        }
                    }
                }
            ]
        }}
    
    />
}