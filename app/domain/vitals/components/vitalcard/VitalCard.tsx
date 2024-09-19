import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../../constants/ColorConstants';
import Row from '../../../../components/Row/Row';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../../constants/FontType';
import {MaterialIcons} from '../../../../components/Icons/MaterialIcons';

interface HealthMetricProps {
  title: string;
  date: string;
  metrics: string[];
  values: string[];
  onViewPress: () => void;
}

const VitalCard = ({
  title,
  date,
  metrics,
  values,
  onViewPress,
}: HealthMetricProps) => {
  return (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <Row
          style={{
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: Colors.neutral5,
            paddingBottom: 6,
            marginBottom: 6,
          }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </Row>
        {metrics.map((metric, index) => (
          <View key={index} style={styles.metricContainer}>
            <Text style={styles.metricLabel}>{metric} : </Text>
            <Text style={styles.metricValue}>{values[index]}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity>
        <Row
          style={{
            borderTopWidth: 1,
            borderColor: Colors.neutral5,
            height: responsiveHeight(4.5),
            justifyContent: 'space-between',
            backgroundColor: Colors.primary5,
            paddingHorizontal: '4%',
          }}>
          <Text style={styles.viewButton} onPress={onViewPress}>
            View
          </Text>
          <MaterialIcons
            name={'arrow-forward-ios'}
            size={21}
            color={Colors.primary80}
            style={styles.icon}
          />
        </Row>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.neutral5,

    marginBottom: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.09,
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: FontType.Roboto_Medium,
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  metricLabel: {
    fontSize: responsiveFontSize(2),
    fontFamily: FontType.Roboto_Medium,
    color: Colors.neutral60,
  },
  metricValue: {
    fontSize: responsiveFontSize(2),
    fontFamily: FontType.Roboto_Medium,
    color: Colors.neutral80,
  },
  viewButton: {
    fontSize: responsiveFontSize(2),
    color: Colors.primary,
    fontFamily: FontType.Roboto_Medium,
  },
  icon: {
    fontSize: responsiveFontSize(2),
    paddingLeft: '2%',
  },
});

export default VitalCard;
