import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CommonHeader from '../../../components/Header/CommonHeader';
import {Colors} from '../../../constants/ColorConstants';
import Row from '../../../components/Row/Row';
import {Ionicons} from '../../../components/Icons/Ionicons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {FeatherIcon} from '../../../components/Icons/FeatherIcon';
import {FontType} from '../../../constants/FontType';

const Resources = () => {
  const dataArray = [
    {
      name: 'Understanding Your IV Infusion',
      size: '243.12 KB',
    },
    {
      name: 'IV Infusion Patient Education Guide',
      size: '1.7 MB',
    },
    {
      name: 'Heart Health Tips',
      size: '806.10 KB',
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.itemContainer}>
        <Row style={styles.row}>
          <Row>
            <View style={styles.iconContainer}>
              <Ionicons
                name="document-outline"
                color={Colors.primary40}
                size={responsiveFontSize(3)}
                style={styles.icon}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item?.name}</Text>
              <Text style={styles.itemSize}>{item?.size}</Text>
            </View>
          </Row>
          <TouchableOpacity style={styles.downloadButton}>
            <FeatherIcon
              name="download"
              size={responsiveFontSize(2.5)}
              color={Colors.neutral70}
            />
          </TouchableOpacity>
        </Row>
      </View>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <CommonHeader title="Resources" hideprofileIcon />
      <View style={styles.page}>
        <FlatList
          data={dataArray}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

export default Resources;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex: 1,
    padding: '3%',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    width: '100%',
  },
  itemContainer: {
    borderWidth: 0,
    paddingVertical: 15,
  },
  row: {
    justifyContent: 'space-between',
  },
  iconContainer: {
    borderRadius: responsiveFontSize(10),
    padding: 5,
    backgroundColor: Colors.primary5,
    marginRight: 10,
  },
  icon: {
    padding: 3,
  },
  textContainer: {
    width: '80%',
  },
  itemName: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.8),
    color: Colors.primary,
  },
  itemSize: {
    color: Colors.neutral60,
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(1.5),
  },
  downloadButton: {
    marginRight: 5,
  },
});
