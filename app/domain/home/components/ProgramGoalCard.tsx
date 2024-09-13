import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import Card from '../../../components/Card/Card';
import {FontAwesome} from '../../../components/Icons/FontAwesome';
import Row from '../../../components/Row/Row';
import CustomText from '../../../components/Text/CustomText';
import {FontType} from '../../../constants/FontType';
import {Colors} from '../../../constants/ColorConstants';

const ProgramGoalCard = () => {
  return (
    <Card style={styles.goalCard}>
      <Row
        style={{
          borderBottomWidth: 1,
          borderColor: Colors.neutral5,
          padding: '3%',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FontType.Roboto_Medium,
              color: Colors.primary,
              marginBottom: 7,
              fontSize: responsiveFontSize(1.9),
            }}>
            BP Balance and Control Care Plan
          </Text>
          <Text
            style={{
              fontFamily: FontType.Roboto_Regular,
              color: Colors.neutral50,
              fontSize: responsiveFontSize(1.7),
            }}>
            Dec 30, 2024 05:18 PM
          </Text>
        </View>
        <FontAwesome name="angle-right" size={responsiveFontSize(3)} />
      </Row>
      <View style={{padding: '2%'}}>
        <CustomText
          color={Colors.neutral70}
          fontFamily={FontType.Roboto_Medium}>
          Today’s Goals
        </CustomText>
        <Row style={{marginVertical: 6}}>
          {[
            {1: '90', 2: 'Glucose', 3: '115'},
            {1: '115/70', 2: 'BP', 3: '92'},
          ].map((item, index) => (
            <Card key={index} style={styles.goalVitalCard}>
              <Row style={{justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2.2),
                      fontFamily: FontType.Roboto_Medium,
                      color: Colors.neutral80,
                    }}>
                    {item[1]}
                  </Text>
                  <Text
                    style={{
                      color: Colors.neutral60,
                      fontSize: responsiveFontSize(2),
                    }}>
                    {item[2]}
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 5,
                    height: responsiveHeight(6),
                    width: responsiveHeight(6),
                    borderRadius: responsiveHeight(3),
                    borderColor: Colors.informative10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontFamily: FontType.Roboto_Medium}}>{item[3]}</Text>
                </View>
              </Row>
            </Card>
          ))}
        </Row>
        <TouchableOpacity>
          <Row
            style={{
              justifyContent: 'space-between',
              backgroundColor: Colors.white,
              borderRadius: 8,
              padding: 5,
              elevation: 1,
              shadowOffset: {
                height: 1,
                width: 0,
              },
              shadowOpacity: 0.1,
              paddingHorizontal: 7,
            }}>
            <CustomText
              fontFamily={FontType.Roboto_Medium}
              color={Colors.primary}>
              View Details
            </CustomText>
            <FontAwesome
              name="angle-right"
              size={responsiveFontSize(2)}
              color={Colors.primary}></FontAwesome>
          </Row>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default ProgramGoalCard;

const styles = StyleSheet.create({
  goalVitalCard: {
    height: null,
    width: '49%',
    marginRight: 5,
    padding: 5,
    borderWidth: 0,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 1,
  },
  goalCard: {
    height: null,
    width: '100%',
  },
});
