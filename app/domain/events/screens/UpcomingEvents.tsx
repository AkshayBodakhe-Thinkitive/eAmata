import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {infusionData} from '../constants/StringConstants';
import EventItem from '../components/EventItem';

const UpcomingEvents = () => {
  const groupedData = infusionData.reduce((acc: any, infusion: any) => {
    const dateKey = infusion.startDate;
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(infusion);
    return acc;
  }, {});

  const flatListData = Object.keys(groupedData).flatMap(dateKey =>
    groupedData[dateKey].map((infusion: any, index: any) => ({
      ...infusion,
      dateKey,
      index,
    })),
  );

  const renderItem = ({item, index}: any) => {
    const showDate =
      index === 0 || flatListData[index - 1].dateKey !== item.dateKey;

    return (
      <EventItem
        dateKey={item.dateKey}
        type={item.type}
        startDate={item.startDate}
        status={item.status}
        showDate={showDate}
      />
    );
  };

  return (
    <View style={{padding: '3%'}}>
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({});
