import {StyleSheet, View} from 'react-native';
import React from 'react';
import {LineChart, ruleTypes} from 'react-native-gifted-charts';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomText from '../../../../components/Text/CustomText';
import {FontType} from '../../../../constants/FontType';
import { Colors } from '../../../../constants/ColorConstants';

const VitalsChart = ({records, record2}: any) => {
  const getMaxValue = (data: any): number => {
    const max = Math.max(...data.map((item: any) => item.value));
    const step = parseFloat((max / 4).toFixed(2));
    const maxValue = parseFloat((max + step).toFixed(2));
    return maxValue;
  };

  const getMinValue = (data: any): number => {
    const min = Math.min(...data.map((item: any) => item.value));
    const step = parseFloat(
      (Math.max(...data.map((item: any) => item.value)) / 4).toFixed(2),
    );
    const minValue = parseFloat((min - step).toFixed(2));
    return minValue;
  };
  const adjustedMaxValue = getMaxValue(records);
  const adjustedMinValue = getMinValue(records);

  // console.log("records =>",records)
  // console.log("records1 =>",record2)

  const customDataPoint = () => {
    return (
      <View
        style={{
          width: 10,
          height: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: Colors.primary,
        }}
      />
    );
  };

  return (
    <View style={{borderWidth: 0}}>
      <LineChart
        // isAnimated
        data={records}
        data2={record2}
        spacing={responsiveWidth(20)}
        maxValue={adjustedMaxValue}
        // yAxisOffset={adjustedMinValue} // minValue
        // stepValue={10}
        // showVerticalLines={true}
        stepHeight={35}
        animationDuration={2000}
        xAxisColor={'#ACACAC'}
        xAxisLabelsHeight={70}
        yAxisTextStyle={{color: '#ACACAC', fontFamily: FontType.Roboto_Regular}}
        xAxisLabelTextStyle={{
          color: '#ACACAC',
          fontFamily: FontType.Roboto_Regular,
          fontSize: responsiveFontSize(1.5),
          // borderWidth:1,
          // transform: [{rotate: '-30deg'}],
          top: '90%',
        }}
        dataPointsHeight={0}
        rulesType={ruleTypes.SOLID}
        yAxisTextNumberOfLines={0}
        yAxisThickness={0}
        width={responsiveWidth(86)}
        startOpacity={0.3}
        endOpacity={0.3}
        endFillColor={'#0097F01A'}
        startFillColor={'#0097F01A'}
        dataPointsRadius={4}
        customDataPoint={customDataPoint}
        dataPointsColor={Colors.primary}
        color={Colors.primary}
        areaChart
        // curved
        showDataPointOnFocus
        initialSpacing={25}
        endSpacing={0}
        pointerConfig={{
          pointerStripUptoDataPoint: true,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 2,
          strokeDashArray: [2, 5],
          pointerColor: 'lightgray',
          radius: 4,
          pointerLabelWidth: 100,
          pointerLabelHeight: 120,
          activatePointersOnLongPress: true,
          pointerLabelComponent: (items: any) => {
            console.log(items)
            return (
              <View
                style={{
                  borderWidth: 0,
                  height: 50,
                  width: 80,
                  borderRadius: 8,
                  backgroundColor: Colors.primary,
                  paddingLeft: 10,
                  justifyContent: 'center',
                  shadowOpacity: 0.3,
                  shadowOffset: {
                    height: 0,
                    width: 0,
                  },
                }}>
                {records?.[0]?.name && (
                  <CustomText color="white" fontFamily={FontType.Roboto_Medium}>
                    {records?.[0]?.name}
                  </CustomText>
                )}
                <CustomText color="white"> {items[0].value} {items?.[0]?.unit}</CustomText>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default VitalsChart;

const styles = StyleSheet.create({});
