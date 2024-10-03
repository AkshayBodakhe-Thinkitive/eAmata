import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Status from '../../../components/Status/Status';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import {Colors} from '../../../constants/ColorConstants';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {AppNavConstants} from '../../../constants/NavConstants';

const getRelativeDateLabel = (date: string) => {
  const today = moment().startOf('day');
  const eventDate = moment(date, moment.ISO_8601).startOf('day');

  if (eventDate.isSame(today)) {
    return `Today, ${eventDate.format('MM/DD/YYYY')}`;
  } else if (eventDate.isSame(today.clone().add(1, 'day'))) {
    return `Tomorrow, ${eventDate.format('MM/DD/YYYY')}`;
  } else if (eventDate.isSame(today.clone().subtract(1, 'day'))) {
    return `Yesterday, ${eventDate.format('MM/DD/YYYY')}`;
  } else {
    return eventDate.format('MM/DD/YYYY');
  }
};

const getFormattedDateTime = (dateTime: string) => {
  return moment(dateTime, moment.ISO_8601).format('MMM DD, YYYY hh:mm A');
};

const EventItem = ({
  dateKey,
  type,
  startDate,
  status,
  showDate,
  eventType,
}: any) => {
  const navigation = useNavigation<any>();

  const handleTouch = () => {
    if (eventType === 'virtual') {
      navigation.navigate(AppNavConstants.VIRTUAL_EVENT_START);
    }
    if (eventType === 'normal') {
      navigation.navigate(AppNavConstants.EVENT_DETAIL);
    }
  };

  return (
    <View>
      {showDate && (
        <Text style={styles.dateHeader}>{getRelativeDateLabel(dateKey)}</Text>
      )}
      <TouchableOpacity style={styles.eventItem} onPress={handleTouch}>
        <View style={styles.eventDetails}>
          <Text style={styles.eventType}>{type}</Text>
          <Text style={styles.eventDate}>
            {getFormattedDateTime(startDate)}
          </Text>
        </View>
        <Status status={status} />
      </TouchableOpacity>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  dateHeader: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: FontType.Roboto_Regular,
    color: Colors.neutral60,
    marginBottom: 10,
    marginTop: responsiveHeight(2),
  },
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.neutral5,
  },
  eventDetails: {},
  eventType: {
    color: Colors.primary70,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.8),
    marginBottom: 5,
  },
  eventDate: {
    color: Colors.neutral50,
    fontFamily: FontType.Roboto_Regular,
  },
});
