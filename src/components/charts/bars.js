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
    option={{
        chart: {
            type: 'column',
            backgroundColor: colors.dark,
            spacing: [0, 0, 0, 0],
            margin: [0, 0, 0, 0],
        }
    }}
     />;
}