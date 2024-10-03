import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import Card from '../../../components/Card/Card';
import { Colors } from '../../../constants/ColorConstants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { FontType } from '../../../constants/FontType';

interface Props {
  providerData: any;
  selectedSlot: any;
  setSelectedSlot: any;
}

const ProviderSlots = ({
  providerData,
  selectedSlot,
  setSelectedSlot,
}: Props) => {
  const [selected, setSelected] = useState(selectedSlot);

  const handleSlotSelection = (slot: any) => {
    setSelected(slot);
    setSelectedSlot && setSelectedSlot(slot);
  };

  const renderSlot = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.slotContainer,
        {
          backgroundColor: selected === item ? Colors.primary1 : Colors.white,
          borderColor: selected === item ? Colors.primary : Colors.neutral20,
        },
      ]}
      onPress={() => handleSlotSelection(item)}
    >
      <Text
        style={{
          color: selected === item ? Colors.primary : Colors.neutral80,
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderTimeSlotSection = (title: string, slots: any[]) => (
    <View style={styles.timeSlotSection}>
      <Text style={styles.timeSlotTitle}>{title}</Text>
      <FlatList
        data={slots}
        renderItem={renderSlot}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <Card style={styles.card}>
      <View style={styles.providerInfoContainer}>
        <Image
          source={{ uri: providerData.image }}
          style={styles.providerImage}
        />
        <View>
          <Text style={styles.providerName}>{providerData.name}</Text>
          <Text style={styles.providerTitle}>Provider</Text>
        </View>
      </View>

      {renderTimeSlotSection('Morning', providerData.slots.morning)}
      {renderTimeSlotSection('Afternoon', providerData.slots.afternoon)}
      {renderTimeSlotSection('Evening', providerData.slots.evening)}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: null,
    width: '100%',
    backgroundColor: '#F2F6F8',
    marginBottom: responsiveHeight(2),
  },
  providerInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Colors.white,
    margin: responsiveHeight(1),
    padding: responsiveHeight(1),
    borderRadius: 16,
  },
  providerImage: {
    width: responsiveHeight(5),
    height: responsiveHeight(5),
    borderRadius: responsiveHeight(2.5),
  },
  providerName: {
    marginLeft: responsiveWidth(2.5),
    fontSize: responsiveFontSize(2),
    fontFamily: FontType.Roboto_Medium,
  },
  providerTitle: {
    marginLeft: responsiveWidth(2.5),
    fontSize: responsiveFontSize(1.5),
    fontFamily: FontType.Roboto_Regular,
  },
  timeSlotSection: {
    marginBottom: 10,
    borderWidth: 0,
    paddingHorizontal: responsiveWidth(3),
  },
  timeSlotTitle: {
    marginBottom: 5,
    fontFamily: FontType.Roboto_Regular,
    color: Colors.neutral60,
  },
  slotContainer: {
    padding: responsiveHeight(0.6),
    borderRadius: 8,
    borderWidth: 1,
    marginRight: responsiveWidth(2),
  },
});

export default ProviderSlots;
