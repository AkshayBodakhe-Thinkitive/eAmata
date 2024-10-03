import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from 'react-native';
import {ivInfusionData} from '../constants/StringConstants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import {Colors} from '../../../constants/ColorConstants';
import Header from '../../../components/Header/Header';
import BottomButton from '../../auth/components/BottomButton/BottomButton';
import Row from '../../../components/Row/Row';
import moment from 'moment';
import Status from '../../../components/Status/Status';
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from '../../../components/Icons/Ionicons';
import {ImagePath} from '../../../constants/ImagePaths';
import {EntypoIcons} from '../../../components/Icons/EntypoIcons';
import {AppNavConstants} from '../../../constants/NavConstants';
import ThreeDotsMenu from '../components/ThreeDotsMenu';

const EventDetailScreen = () => {
  const getFormattedDateTime = (dateTime: string) => {
    return moment(dateTime, moment.ISO_8601).format('MMM DD, YYYY hh:mm A');
  };

  const navigation = useNavigation<any>();

  const navigateBack = () => navigation.goBack();

  const navigateRequestAss = () =>
    navigation.navigate(AppNavConstants.REQUEST_ASSISTANCE);

  const handleCancel = () => {
    Alert.alert('Cancel', 'Appointment has been cancelled.');
  };

  const handleReschedule = () => {
    Alert.alert('Reschedule', 'Appointment has been rescheduled.');
  };

  const menuOptions = [
    {label: 'Cancel', onPress: handleCancel},
    {label: 'Reschedule', onPress: handleReschedule},
  ];

  return (
    <View style={styles.container}>
      <Header>
        <Row style={styles.headerRow}>
          <Row>
            <TouchableOpacity onPress={navigateBack}>
              <Ionicons
                name="arrow-back-sharp"
                color={Colors.neutral90}
                size={responsiveFontSize(3)}
              />
            </TouchableOpacity>
            <View style={{marginLeft: responsiveWidth(4)}}>
              <Text style={[styles.sectionTitle, {marginBottom: 2}]}>
                IV Hydration Infusion
              </Text>
              <Text style={styles.eventDate}>
                {getFormattedDateTime('2024-09-18T00:00:00Z')}
              </Text>
            </View>
          </Row>
          <Row style={{width: '25%', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={styles.threeDots}
              onPress={navigateRequestAss}>
              <Image source={ImagePath.support_agent} style={styles.agentImg} />
            </TouchableOpacity>
            <ThreeDotsMenu options={menuOptions} />
          </Row>
        </Row>
      </Header>
      <ScrollView style={styles.page}>
        <FlatList
          data={ivInfusionData}
          scrollEnabled={false}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={styles.header}>
                <View style={styles.eventDetails}>
                  <Text style={styles.eventType}>
                    {'IV Hydration Infusion'}
                  </Text>
                  <Text style={styles.eventDate}>
                    {getFormattedDateTime('2024-09-18T00:00:00Z')}
                  </Text>
                </View>
                <Status status={'Upcoming'} />
              </View>

              <Text style={styles.sectionTitle}>Purpose:</Text>
              <Text style={styles.purpose}>{item.purpose}</Text>

              <Row style={styles.row}>
                <Text style={styles.sectionTitle}>Medication : </Text>
                <Text style={styles.detail}>{item.medication}</Text>
              </Row>

              <Row style={styles.row}>
                <Text style={styles.sectionTitle}>Dosage : </Text>
                <Text style={styles.detail}>{item.dosage}</Text>
              </Row>

              <Row style={styles.row}>
                <Text style={styles.sectionTitle}>Infusion Rate: </Text>
                <Text style={styles.detail}>{item.infusionRate}</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.sectionTitle}>Duration : </Text>
                <Text style={styles.detail}>{item.duration}</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.sectionTitle}>Route : </Text>
                <Text style={styles.detail}>{item.route}</Text>
              </Row>

              <Text
                style={[
                  styles.sectionTitle,
                  {marginBottom: responsiveHeight(2)},
                ]}>
                Monitoring and Precautions:
              </Text>
              {item.precautions.map((precaution, index) => (
                <Text key={index} style={styles.precaution}>
                  • {precaution}
                </Text>
              ))}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      <BottomButton title="Scan" onPress={() => {}} />
    </View>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex: 1,
    padding: '3%',
    paddingTop: responsiveHeight(2),
  },
  card: {
    //
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(3),
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: FontType.Roboto_Bold,
    color: Colors.black,
  },
  date: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.neutral60,
    fontFamily: FontType.Roboto_Regular,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.warning5,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 10,
  },
  row: {
    marginVertical: responsiveHeight(0.9),
    marginBottom: responsiveHeight(2),
  },
  statusText: {
    fontSize: responsiveFontSize(1.6),
    color: Colors.white,
    fontFamily: FontType.Roboto_Medium,
  },
  sectionTitle: {
    fontSize: responsiveFontSize(2),
    color: Colors.black,
    fontFamily: FontType.Roboto_Medium,
  },
  purpose: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.neutral70,
    fontFamily: FontType.Roboto_Regular,
    marginBottom: 10,
  },
  detail: {
    fontSize: responsiveFontSize(2),
    color: Colors.neutral70,
    fontFamily: FontType.Roboto_Regular,
  },
  precaution: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.neutral70,
    fontFamily: FontType.Roboto_Regular,
    marginLeft: 5,
    marginBottom: responsiveFontSize(1.8),
  },
  eventDetails: {},
  eventType: {
    color: Colors.neutral80,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2),
    marginBottom: 5,
  },
  eventDate: {
    color: Colors.neutral50,
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(1.6),
  },
  headerRow: {
    paddingHorizontal: '2%',
    marginTop: Platform.OS === 'android' ? responsiveHeight(4) : null,
    justifyContent: 'space-between',
    // borderWidth: 1,
    width: '100%',
  },
  agentImg: {
    resizeMode: 'contain',
    height: responsiveHeight(3),
    width: responsiveWidth(7),
  },
  threeDots: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(8),
    // borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
