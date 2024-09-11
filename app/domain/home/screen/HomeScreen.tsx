import {
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Row from '../../../components/Row/Row';
import CustomText from '../../../components/Text/CustomText';
import {Homescreenstyles as styles} from '../styles/HomeScreenStyles';
import {FontType} from '../../../constants/FontType';
import TextButton from '../../../components/TextButton/TextButton';
import Card from '../../../components/Card/Card';
import {FontAwesome} from '../../../components/Icons/FontAwesome';
import CommonHeader from '../../../components/Header/CommonHeader';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
    <CommonHeader></CommonHeader>
      <ScrollView style={styles.pageContainer} nestedScrollEnabled={true}>
        <View>
          <Row style={{justifyContent: 'space-between'}}>
            <CustomText fontFamily={FontType.Roboto_Medium}>Events</CustomText>
            <TextButton text="View all" />
          </Row>
          <FlatList
            data={[{name: 'Chemo therapy Infusion'}, {name: 'Health Check-Up'}]}
            scrollEnabled={false}
            renderItem={({item}) => {
              return (
                <Card style={styles.eventCard}>
                  <CustomText
                    fontFamily={FontType.Roboto_Medium}
                    color={Colors.primary70}
                    fontSize={responsiveFontSize(2)}>
                    {item?.name}
                  </CustomText>
                  <CustomText
                    color={Colors.neutral50}
                    fontSize={responsiveFontSize(1.8)}>
                    Dec 30, 2024 05:18 PM
                  </CustomText>
                </Card>
              );
            }}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Row style={{justifyContent: 'space-between'}}>
            <CustomText fontFamily={FontType.Roboto_Medium}>
              Recent Vitals
            </CustomText>
          </Row>
          <FlatList
            data={[
              {
                name: 'Blood Pressure',
                vital: [
                  {label: 'Pressure', value: '115/90 mmHg'},
                  {label: 'Heart Rate:', value: '72 BPM'},
                ],
              },
              {
                name: 'Glucose',
                vital: [
                  {label: 'Before Meal', value: '115 mmHg'},
                  {label: 'After Meal', value: 'mmHg'},
                ],
              },
              {
                name: 'Glucose',
                vital: [
                  {label: 'Pressure', value: '115/90 mmHg'},
                  {label: 'Heart Rate:', value: '72 BPM'},
                ],
              },
            ]}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <Card style={styles.vitalCard}>
                  <CustomText
                    fontFamily={FontType.Roboto_Medium}
                    color={Colors.neutral80}
                    fontSize={responsiveFontSize(2)}>
                    {item?.name}
                  </CustomText>
                  <View
                    style={{borderWidth: 0.6, borderColor: Colors.neutral5}}
                  />
                  <Row>
                    <CustomText
                      color={Colors.neutral60}
                      fontSize={responsiveFontSize(1.8)}>
                      {item?.vital?.[0]?.label} :
                    </CustomText>
                    <CustomText
                      color={Colors.neutral80}
                      fontSize={responsiveFontSize(1.8)}>
                      {item?.vital?.[0]?.value}
                    </CustomText>
                  </Row>
                  <Row>
                    <CustomText
                      color={Colors.neutral60}
                      fontSize={responsiveFontSize(1.8)}>
                      {item?.vital?.[1]?.label} :
                    </CustomText>
                    <CustomText
                      color={Colors.neutral80}
                      fontSize={responsiveFontSize(1.8)}>
                      {item?.vital?.[1]?.value}
                    </CustomText>
                  </Row>
                </Card>
              );
            }}
          />
        </View>
        <View>
          <CustomText fontFamily={FontType.Roboto_Medium}>
            Program and Goals
          </CustomText>
          <Card style={styles.goalCard}>
            <Row
              style={{
                borderBottomWidth: 1,
                borderColor: Colors.neutral5,
                padding: '3%',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text>BP Balance and Control Care Plan</Text>
                <Text>Dec 30, 2024 05:18 PM</Text>
              </View>
              <FontAwesome name="angle-right" size={responsiveFontSize(2)}/>
            </Row>
            <View style={{padding: '2%'}}>
              <CustomText>Today’s Goals</CustomText>
              <Row>
                <Card style={styles.goaLVitalCard}>
                  <Text>90</Text>
                  <Text>Glucose</Text>
                </Card>
                <Card style={styles.goaLVitalCard}>
                  <Text>115/70</Text>
                  <Text>BP</Text>
                </Card>
              </Row>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
