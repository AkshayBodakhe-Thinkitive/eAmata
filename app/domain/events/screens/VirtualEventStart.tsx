import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  SafeAreaView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import {Colors} from '../../../constants/ColorConstants';
import {MaterialIcons} from '../../../components/Icons/MaterialIcons';
import {FeatherIcon} from '../../../components/Icons/FeatherIcon';
import Header from '../../../components/Header/Header';
import Row from '../../../components/Row/Row';
import {OctiIcons} from '../../../components/Icons/OctiIcons';
import { ImagePath } from '../../../constants/ImagePaths';

const VirtualEventStart = () => {
  const handleStartPress = () => {
    // Handle Start button press
  };

  const openLink = () => {
    Linking.openURL('https://sample.zoom.meet/session');
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Appointment Info */}
        <Text style={styles.title}>Nurse Assistance Visit</Text>
        <Text style={styles.dateText}>
          Thursday, 5 September - 10:00 - 11:00am
        </Text>

        {/* Televisit Link */}
        <View style={styles.televistContainer}>
          <Row>
            <OctiIcons
              name="location"
              size={responsiveFontSize(2)}
              color={Colors.neutral70}
            />
            <Text
              style={{
                marginLeft: 5,
                fontFamily: FontType.Roboto_Medium,
                color: Colors.neutral70,
                fontSize: responsiveFontSize(2),
              }}>
              Televisit
            </Text>
          </Row>
          <TouchableOpacity onPress={openLink}>
            <Text style={styles.linkText}>
              https://sample.zoom.meet/session
            </Text>
          </TouchableOpacity>
        </View>

        {/* Guests Section */}
        <View style={styles.guestsContainer}>
          <TouchableOpacity style={styles.guestHeader} activeOpacity={0.7}>
          <Row>
          {/* <MaterialIcons name="group" size={24} color={Colors.neutral70} /> */}
           <Image source={ImagePath.group} style={{resizeMode:'contain',height:responsiveHeight(3),width:responsiveWidth(6)}}/>
            <Text style={styles.guestText}>2 guests</Text>
          </Row>
            <FeatherIcon
              name="chevron-down"
              size={24}
              color={Colors.neutral60}
            />
          </TouchableOpacity>

          {/* Guests List */}
          <View style={styles.guestList}>
            <View style={styles.guestItem}>
              <Image
                source={{uri: 'https://placekitten.com/100/100'}}
                style={styles.guestImage}
              />
              <View>
                <Text style={styles.guestName}>Annette Black</Text>
                <Text style={styles.guestRole}>Provider</Text>
              </View>
            </View>
            <View style={styles.guestItem}>
              <Image
                source={{uri: 'https://placekitten.com/101/101'}}
                style={styles.guestImage}
              />
              <View>
                <Text style={styles.guestName}>Kristin Watson</Text>
                <Text style={styles.guestRole}>You</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <MaterialIcons name="description" size={24} color={Colors.primary} />
          <Text style={styles.descriptionText}>
            I am struggling to understand how to manage my IV infusion at home.
            The instructions are unclear, and I’m worried about administering
            the wrong dosage or frequency. I need help understanding the process
            and ensuring I do it correctly.
          </Text>
        </View>
      </ScrollView>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
  },
  title: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2.8),
    color: Colors.neutral80,
    marginBottom: responsiveHeight(1),
  },
  dateText: {
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(2),
    color: Colors.neutral60,
    marginBottom: responsiveHeight(2),
  },
  televistContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },
  linkText: {
    color: Colors.primary,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  guestsContainer: {
    backgroundColor: Colors.neutral10,
    padding: responsiveHeight(2),
    borderRadius: 10,
    marginBottom: responsiveHeight(3),
  },
  guestHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guestText: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2),
    color: Colors.neutral80,
    marginLeft: responsiveWidth(2),
  },
  guestList: {
    marginTop: responsiveHeight(2),
  },
  guestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(1.5),
  },
  guestImage: {
    width: responsiveHeight(6),
    height: responsiveHeight(6),
    borderRadius: responsiveHeight(3),
    marginRight: responsiveWidth(3),
  },
  guestName: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2),
    color: Colors.neutral80,
  },
  guestRole: {
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    color: Colors.neutral60,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(3),
  },
  descriptionText: {
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(2),
    color: Colors.neutral80,
    marginLeft: responsiveWidth(2),
    flex: 1,
  },
  startButton: {
    backgroundColor: Colors.primary,
    paddingVertical: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2.2),
  },
});

export default VirtualEventStart;
