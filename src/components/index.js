import React from 'react';

import colors from '../styles/colors';
import typography from '../styles/typography';
import styled from 'styled-components/native';
import HighchartsReactNative from '@highcharts/highcharts-react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${colors.dark50};
`;

export const Row = styled.View`
  padding-left: ${(props) => (props.fluid ? 0 : '20px')};
  padding-right: ${(props) => (props.fluid ? 0 : '20px')};
  padding-top: ${(props) => (props.spaced ? '20px' : 0)};
  padding-bottom: ${(props) => (props.spaced ? '20px' : 0)};
  margin-top: ${(props) => props.marginTop || 0};
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  z-index: ${(props) => props.zIndex || 0};
`;

export const Box = styled.View`
  padding: ${(props) => (props.noPadding ? '0' : '20px')};
  background-color: ${colors.dark};
  border-radius: 10px;
  overflow: hidden;
`;

export const Picker = styled.TouchableOpacity`
  background: ${(props) => (props.active ? colors.primary : 'transparent')};
  padding: 7px 35px;
  border-radius: 20px;
`;

export const Label = styled.Text`
  color: ${(props) => colors[props.color] || colors.grey};
  font-size: ${(props) => typography[props.type] || typography.label};
  font-weight: ${(props) =>
    ['title', 'subtitle'].includes(props.type) ? 'bold' : 'normal'};
  align-self: ${(props) => props.align || 'flex-start'};
`;

export const Chart = styled(HighchartsReactNative).attrs({})``;
