import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import SignatureScreen from 'react-native-signature-canvas';
import {EntypoIcons} from '../Icons/EntypoIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import { MaterialIcons } from '../Icons/MaterialIcons';
import { FontType } from '../../constants/FontType';
import { Colors } from '../../constants/ColorConstants';

const SignaturePad = ({setIsDrawing, onOK, dataUrl}: SignaturePadProps) => {
  const ref = useRef<any>();

  const handleOK = (signature: any) => {
    console.log(signature);
    onOK(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleClear = () => {
    ref.current.undo();
    console.log('clear success!');
  };

  const handleEnd = () => {
    ref.current.readSignature();
    setIsDrawing(false);
  };

  const handleData = (data: any) => {
    console.log(data);
  };

  const handleBegin = () => {
    setIsDrawing(true);
  };

  const webStyle = `.m-signature-pad--footer
    .save {
        display: none;
    }
    .clear {
        display: none;
    }
    .m-signature-pad {
        box-shadow: none; 
        border: 0px;
        position : absolute;
        top : 0;
        left : 0;
        right : 0;
        margin-left: 0px;
        margin-top: 0px;
        height : 50px:
        height: 50px;
        background-color:'grey';
        border-radius : 10
    } 
    .m-signature-pad--body {
        position: absolute;
        left: 0px;
         right: 0px;
         top: 0px;
        bottom: 0px;
       
        border:1px solid #D2D2D2;
       
        border-radius : 8px;
      }
`;

  return (
    <View>
      <Text
        style={{
          fontFamily: FontType.Roboto_Medium,
          fontSize: 12,
          marginBottom: 10,
          color: Colors.neutral80,
        }}>
        Digital Signature
      </Text>
      <View style={{height: 120, width: 300, marginBottom: 10}}>
        <SignatureScreen
          ref={ref}
          dataURL={dataUrl}
          webStyle={webStyle}
          onBegin={handleBegin}
          onEnd={handleEnd}
          onOK={handleOK}
          onEmpty={handleEmpty}
          onClear={handleClear}
          onGetData={handleData}
          descriptionText={' '}
        />
        <TouchableOpacity
          onPress={handleClear}
          style={{
            position: 'absolute',
            right: 0,
            bottom:0,
            margin: 6,
            borderRadius: 15,
            padding:3,
            backgroundColor: Colors.neutral20,
          }}>
          {/* <MaterialIcons
            name="undo"
            size={responsiveFontSize(1.5)}
            color={colors.grey80}
          /> */}
           <EntypoIcons
            name="cross"
            size={responsiveFontSize(1.5)}
            color={Colors.neutral70}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignaturePad;

interface SignaturePadProps {
  setIsDrawing: (isDrawing: boolean) => void;
  onOK: (signature: any) => void;
  dataUrl?: string;
}
