import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Container, Row, Box, Picker, Label} from '../../components';
import colors from '../../styles/colors';
import {VerticalBarChart, HorizontalBarChart} from '../../components/charts/bars'
import {DonutPieChart} from '../../components/charts/pie'
import {AreaChart} from '../../components/charts/area'
const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor={colors.dark50} />
      <SafeAreaView>
        <Row justify="space-between" flexDirection="row" spaced>
          <Picker active>
            <Label color="light">Week</Label>
          </Picker>
          <Picker>
            <Label>Month</Label>
          </Picker>
          <Picker>
            <Label>Year</Label>
          </Picker>
        </Row>
        <Row spaced zIndex="1">
          <Label type="title" color="light" align="center">
            $ 59,271,90
          </Label>
          <Label align="center">Last 7 days: +15%</Label>
        </Row>
        <Row fluid marginTop="-50px">
          <AreaChart />
          </Row>
        <Row marginTop="-50px">
          <Box>
            <Row fluid >
              <Label type="subtitle" color="light">
                Operation Results.
              </Label>
              <Label>Last 7 days</Label>
            </Row>
            <Row fluid ><DonutPieChart /></Row>
          </Box>
        </Row>
        <Row marginTop="20px">
          <Box>
            <Row fluid>
              <Label type="subtitle" color="light">
                Currency Pairs.
              </Label>
              <Label>Last 7 days</Label>
            </Row>
            <Row spaced fluid><HorizontalBarChart /></Row>
          </Box>
        </Row>
        <Row marginTop="20px">
          <Box>
            <Row fluid>
              <Label type="subtitle" color="light">
                Call x Put Operations.
              </Label>
              <Label>Last 7 days</Label>
            </Row >
            <Row fluid><VerticalBarChart /></Row>
          </Box>
        </Row>
      </SafeAreaView>
    </Container>
  );
};

export default Home;
