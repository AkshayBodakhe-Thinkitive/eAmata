import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/ColorConstants';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export const Homescreenstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  pageContainer : {
    borderWidth: 0,
    flex : 1,
    paddingHorizontal:'3%',
    paddingTop:'2%'
  },
  eventCard : {
    width:'100%',
    height : null,
    padding : '2%',
    marginVertical : 5
  },
  vitalCard : {
    width:responsiveWidth(50),
    marginHorizontal : 5,
    height : null,
    padding : 7,
  },
  goalCard : {
    height : null,
    width : '100%'
  },
  goaLVitalCard : {
    height:null,
    width: '49%',
    marginRight:5,
    padding: 5,
    borderWidth:0,
    shadowOpacity :0.1,
    shadowOffset : {
        height:1,
        width:0
    }
  }
});
