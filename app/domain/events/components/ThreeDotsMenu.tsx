import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../../constants/ColorConstants';
import {EntypoIcons} from '../../../components/Icons/EntypoIcons';
import { FontType } from '../../../constants/FontType';

interface MenuOption {
  label: string;
  onPress: () => void;
}

interface ThreeDotsMenuProps {
  options: MenuOption[];
}

const ThreeDotsMenu = ({options}: ThreeDotsMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
  const touchableRef = useRef<TouchableOpacity>(null);

  const openMenu = () => {
    touchableRef.current?.measure((fx, fy, width, height, px, py) => {
      setMenuPosition({x: px, y: Platform.OS === 'android' ? py : py + height});
      setIsVisible(true);
    });
  };

  const handleOptionPress = (onPress: () => void) => {
    setIsVisible(false);
    onPress();
  };

  return (
    <View>
      <TouchableOpacity
        ref={touchableRef}
        style={styles.threeDots}
        onPress={openMenu}>
        <EntypoIcons name="dots-three-vertical" size={responsiveFontSize(2)} />
      </TouchableOpacity>

      {isVisible && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}>
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setIsVisible(false)}>
            <View
              style={[
                styles.menuContainer,
                {
                  top: menuPosition.y,
                  left: menuPosition.x - responsiveWidth(20), // Adjust positioning as needed
                },
              ]}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuOption}
                  onPress={() => handleOptionPress(option.onPress)}>
                  <Text style={styles.menuOptionText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  threeDots: {
    padding: responsiveHeight(1),
  },
  overlay: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  menuContainer: {
    position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: responsiveHeight(1),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: responsiveWidth(29),
  },
  menuOption: {
    paddingVertical: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(2),
  },
  menuOptionText: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.neutral80,
    fontFamily:FontType.Roboto_Regular
  },
});

export default ThreeDotsMenu;
