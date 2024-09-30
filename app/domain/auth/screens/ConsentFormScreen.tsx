import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Colors} from '../../../constants/ColorConstants';
import Header from '../../../components/Header/Header';
import {FontType} from '../../../constants/FontType';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import BottomButton from '../components/BottomButton/BottomButton';
import SignaturePad from '../../../components/SignaturePad/SignaturePad';

const ConsentFormScreen = ({navigation}: any) => {
  const route = useRoute<any>();
  const {item,showBtn} = route.params;

  const [isDrawing, setIsDrawing] = useState(false);

  return (
    <View style={styles.container}>
      <Header title={item?.name} />
      <ScrollView style={styles.page} scrollEnabled={!isDrawing}>
        <View style={{marginBottom: 10}}>
          <FlatList
            data={item?.data}
            scrollEnabled={false}
            renderItem={({item}) => {
              return (
                <View>
                  <Text
                    style={{
                      fontFamily: FontType.Roboto_Medium,
                      fontSize: responsiveFontSize(2.2),
                      color: Colors.neutral90,
                      marginVertical: 5,
                    }}>
                    {item?.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FontType.Roboto_Regular,
                      fontSize: responsiveFontSize(1.8),
                      color: Colors.neutral80,
                      // marginVertical:5
                    }}>
                    {item?.description}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <SignaturePad setIsDrawing={setIsDrawing} onOK={() => {}} />
      </ScrollView>
      {showBtn && (
        <BottomButton
          title="Agree and Continue"
          onPress={() => navigation.goBack()}
        />
      )}
    </View>
  );
};

export default ConsentFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    padding: '4%',
    flex: 1,
  },
});
