import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Row from '../../../components/Row/Row';
import {Homescreenstyles as styles} from '../styles/HomeScreenStyles';
import TextButton from '../../../components/TextButton/TextButton';
import CommonHeader from '../../../components/Header/CommonHeader';
import {staticEventData, staticVitalsData} from '../constants/StringConstants';
import EventCard from '../components/EventCard';
import VitalCard from '../components/VitalCard';
import ProgramGoalCard from '../components/ProgramGoalCard';

const HomeScreen = ({navigation}: any) => {
  const viewAllEvents = () => navigation.navigate('Events');


  return (
    <View style={styles.container}>
      <CommonHeader></CommonHeader>
      <ScrollView style={styles.pageContainer} nestedScrollEnabled={true}>
        <View style={{marginBottom: 8}}>
          <Row style={{justifyContent: 'space-between'}}>
            <Text style={styles.titleTxt}>Events</Text>
            <TextButton text="View all" onPress={viewAllEvents} />
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
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
            contentContainerStyle={{marginBottom: responsiveHeight(1.2)}}
            renderItem={({item}) => {
              return (
                <VitalCard 
                item={item} 
                onPress={() => navigation.navigate('Vitals', { selectedVital: item })} 
              />
              );
            }}
          />
        </View>
        <View style={{marginBottom: 50}}>
          <Text style={styles.titleTxt}>Program and Goals</Text>
          <ProgramGoalCard></ProgramGoalCard>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
