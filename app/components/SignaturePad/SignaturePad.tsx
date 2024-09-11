import {Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import SignatureScreen from 'react-native-signature-canvas';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../constants/FontType';
import {Colors} from '../../constants/ColorConstants';

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
       background-color : #CDD7DA;
        border-radius : 8px;
      }
`;

  return (
    <View>
      <Text
        style={{
          fontFamily: FontType.Roboto_Medium,
          fontSize: responsiveFontSize(2),
          marginBottom: 10,
          color: Colors.neutral80,
        }}>
        Signature
      </Text>
      <View
        style={{height: responsiveHeight(20), width: '100%', marginBottom: 10}}>
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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            padding: 3,
            borderWidth: 1,
            width: '100%',
            height: responsiveHeight(5),
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderColor: Colors.neutral20,
            justifyContent:'center',
            backgroundColor:"white"
          }}>
          <TouchableOpacity
            onPress={handleClear}
            style={{alignItems: 'center', justifyContent: 'center',height:'100%'}}>
            <Text style={{fontFamily:FontType.Roboto_Regular,fontSize:responsiveFontSize(2)}}>Remove</Text>
          </TouchableOpacity>
        </View>
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
