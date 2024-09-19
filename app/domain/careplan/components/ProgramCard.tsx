import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Card from '../../../components/Card/Card';
import Row from '../../../components/Row/Row';
import Status from '../../../components/Status/Status';
import moment from 'moment';
import {Colors} from '../../../constants/ColorConstants';
import {FontType} from '../../../constants/FontType';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {MaterialIcons} from '../../../components/Icons/MaterialIcons';
import TextButton from '../../../components/TextButton/TextButton';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import {EntypoIcons} from '../../../components/Icons/EntypoIcons';
import {FeatherIcon} from '../../../components/Icons/FeatherIcon';

const ProgramCard = ({item}: any) => {
  const getFormattedDateTime = (dateTime: string) => {
    return moment(dateTime, moment.ISO_8601).format('MMM DD, YYYY hh:mm A');
  };

  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Row style={styles.cardHeader}>
          <Text style={styles.programType}>{item?.type}</Text>
          <Status status={item?.status} />
        </Row>
        <Text style={styles.assignedDate}>
          {getFormattedDateTime(item?.assignedDate)}
        </Text>
        <Row>
          <Text style={styles.assignedLabel}>Assigned by: </Text>
          <Text style={styles.assignedBy}>{item?.assignedBy}</Text>
        </Row>
      </View>
      <View style={styles.separator}>
        {item?.status === 'Ongoing' ? (
          <TouchableOpacity style={styles.viewButton}>
            <Row style={styles.viewButtonContent}>
              <Text style={styles.viewButtonText}>View</Text>
              <MaterialIcons
                name={'arrow-forward-ios'}
                size={responsiveFontSize(2)}
                color={Colors.primary}
              />
            </Row>
          </TouchableOpacity>
        ) : (
          <Row style={styles.actionButtonsContainer}>
            <TextButton text="View" textStyle={styles.viewTextButton} />
            <Row>
              <Button
                title="Reject"
                textStyle={styles.rejectButtonText}
                leftIcon={
                  <EntypoIcons name="cross" style={styles.rejectIcon} />
                }
                buttonStyle={styles.rejectButton}
              />
              <Button
                title="Accept"
                leftIcon={
                  <FeatherIcon name="check" style={styles.acceptIcon} />
                }
                buttonStyle={styles.acceptButton}
              />
            </Row>
          </Row>
        )}
      </View>
    </Card>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 10,
    height:null
  },
  cardContent: {
    padding: 10,
  },
  cardHeader: {
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  programType: {
    color: Colors.neutral80,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2.1),
  },
  assignedDate: {
    color: Colors.neutral50,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.9),
    marginBottom: 10,
  },
  assignedLabel: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.9),
    color: Colors.neutral60,
  },
  assignedBy: {
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(1.9),
    color: Colors.neutral80,
  },
  separator: {
    borderTopWidth: 1,
    borderColor: Colors.neutral5,
  },
  viewButton: {
    backgroundColor: Colors.primary1,
    padding: 10,
  },
  viewButtonContent: {
    justifyContent: 'space-between',
  },
  viewButtonText: {
    color: Colors.primary,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2),
  },
  actionButtonsContainer: {
    padding: 8,
    justifyContent: 'space-between',
  },
  viewTextButton: {
    color: Colors.neutral80,
  },
  rejectButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.neutral20,
    width: responsiveWidth(28),
    marginRight: 8,
    height: responsiveHeight(4.5),
  },
  rejectButtonText: {
    color: Colors.neutral70,
  },
  rejectIcon: {
    fontSize: responsiveFontSize(2.7),
    color: Colors.neutral70,
  },
  acceptButton: {
    width: responsiveWidth(28),
    height: responsiveHeight(4.5),
  },
  acceptIcon: {
    fontSize: responsiveFontSize(2.7),
    color: Colors.white,
  },
});
