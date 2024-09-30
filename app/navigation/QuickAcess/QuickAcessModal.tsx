import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
  Dimensions,
  Easing,
  Image,
} from 'react-native';
import {OctiIcons} from '../../components/Icons/OctiIcons';
import {Colors} from '../../constants/ColorConstants';
import {FontType} from '../../constants/FontType';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ImagePath} from '../../constants/ImagePaths';

const {height} = Dimensions.get('window');

const QuickAccessModal = ({visible, onClose}: any) => {
  const translateY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }).start(() => onClose());
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlay} onPress={onClose} />
        <Animated.View
          style={[
            styles.modalContainer,
            {transform: [{translateY: translateY}]},
          ]}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Quick Access</Text>
            <TouchableOpacity onPress={onClose}>
              <OctiIcons name="x" size={25} color={Colors.neutral60} />
            </TouchableOpacity>
          </View>
          <View style={styles.quickAccessIcons}>
            <View style={styles.iconContainer}>
              <View style={styles.iconImgContainer}>
                <Image
                  source={ImagePath.drop_focused}
                  style={styles.iconStyles}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.iconText}>BP</Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconImgContainer}>
                <Image
                  source={ImagePath.weight_focused}
                  style={styles.iconStyles}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.iconText}>Weight</Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconImgContainer}>
                <Image
                  source={ImagePath.drop_focused}
                  style={styles.iconStyles}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.iconText}>Glucose</Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={[styles.iconImgContainer,{padding:10}]}>
                <Image
                  source={ImagePath.event_focused}
                  style={[styles.iconStyles, {width: responsiveWidth(7)}]}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.iconText}>Appointment</Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 10,
    paddingBottom: 30,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingBottom:10,
   borderBottomWidth:1,
   borderColor:'#E8EBEC'
  },
  modalTitle: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2),
    color: Colors.neutral80,
  },
  quickAccessIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 8,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.5),
    color: Colors.neutral80,
  },
  iconStyles: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(3.5),
  },
  iconImgContainer: {
    // borderWidth: 1,
    padding: 8,
    borderRadius: responsiveFontSize(6),
    backgroundColor: '#DCF7FF',
  },
});

export default QuickAccessModal;
