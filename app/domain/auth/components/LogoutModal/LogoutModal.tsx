import React from 'react';
import {Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {MaterialIcons} from '../../../../components/Icons/MaterialIcons';
import ModalPopup from '../../../../components/ModalPopup/ModalPopup';
import Row from '../../../../components/Row/Row';
import CustomText from '../../../../components/Text/CustomText';
import {Colors} from '../../../../constants/ColorConstants';
import SmallButton from '../../../../components/SmallButton/SmallButton';
import {FontType} from '../../../../constants/FontType';

interface LogoutModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({show, setShow, onLogout}) => {
  return (
    <ModalPopup show={show} setShow={() => setShow(!show)}>
      <View>
        <CustomText
          fontSize={responsiveFontSize(3)}
          style={{
            fontFamily: FontType.Roboto_Medium,
            marginTop: '5%',
            color: Colors.black,
          }}>
          {'Logging Out?'}
        </CustomText>
        <CustomText
          fontSize={responsiveFontSize(2)}
          style={{
            marginBottom: responsiveHeight(2.8),
            marginTop: '3%',
            color: Colors.neutral70,
          }}>
          {'Are you sure you want to logout?'}
        </CustomText>
      </View>
      <Row style={{justifyContent: 'flex-end'}}>
        <SmallButton
          outlined
          title="Cancel"
          containerStyle={{
            width: '30%',
            height: responsiveHeight(4.5),
            borderWidth: 0.5,
            justifyContent: 'center',
            marginRight: 5,
            borderColor: Colors.neutral20,
          }}
          textStyle={{color: Colors.neutral70}}
          onPress={() => setShow(false)}
        />
        <SmallButton
          title={'Yes'}
          containerStyle={{
            width: '25%',
            height: responsiveHeight(4.5),
            borderWidth: 0.5,
            justifyContent: 'center',
          }}
          onPress={onLogout}
        />
      </Row>
    </ModalPopup>
  );
};

export default LogoutModal;
