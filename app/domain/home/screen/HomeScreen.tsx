import {FlatList, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Row from '../../../components/Row/Row';
import {Homescreenstyles as styles} from '../styles/HomeScreenStyles';
import TextButton from '../../../components/TextButton/TextButton';
import CommonHeader from '../../../components/Header/CommonHeader';
import {staticEventData, staticVitalsData} from '../constants/StringConstants';
import EventCard from '../components/EventCard';
import VitalCard from '../components/VitalCard';
import ProgramGoalCard from '../components/ProgramGoalCard';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <CommonHeader ></CommonHeader>
      <ScrollView style={styles.pageContainer} nestedScrollEnabled={true}>
      <View style={{marginBottom: 8}}>
          <Row style={{justifyContent: 'space-between'}}>
            <Text style={styles.titleTxt}>Events</Text>
            <TextButton text="View all" />
          </Row>
          <FlatList
            data={staticEventData}
            scrollEnabled={false}
            renderItem={({item}) => {
              return <EventCard item={item} />;
            }}
          />
        </View>
        <View style={{marginBottom: 8}}>
          <Row style={{justifyContent: 'space-between'}}>
            <Text style={styles.titleTxt}>Recent Vitals</Text>
          </Row>
          <FlatList
            data={staticVitalsData}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={{justifyContent:"space-between",marginBottom:8}}
            contentContainerStyle={{marginBottom: responsiveHeight(1.2)}}
            renderItem={({item}) => {
              return <VitalCard item={item} />;
            }}
          />
        </View>
        <View>
          <Text style={styles.titleTxt}>Program and Goals</Text>
          <ProgramGoalCard></ProgramGoalCard>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
