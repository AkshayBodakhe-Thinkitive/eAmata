import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {FontType} from '../../constants/FontType';
import {MaterialIcons} from '../../components/Icons/MaterialIcons';
import {Colors} from '../../constants/ColorConstants';

interface CustomDrawerItemProps {
  label: string;
  icon: React.ReactNode;
  onPress: () => void | any;
  subItems?: Array<{ label: string; icon: React.ReactNode; onPress: () => void }>;
}

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({
  label,
  icon,
  onPress,
  subItems = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    if (subItems.length > 0) {
      // If there are sub-items, toggle the expanded state
      setIsExpanded(!isExpanded);
    } else {
      // Otherwise, execute the onPress function
      onPress();
    }
  };

  return (
    <View>
      <DrawerItem
        label={() => (
          <View style={styles.itemContainer}>
            {icon}
            <Text style={styles.itemLabel}>{label}</Text>
            {subItems.length > 0 ? (
              <MaterialIcons
                name={isExpanded ? 'expand-less' : 'expand-more'}
                size={21}
                color={Colors.primary80}
                style={styles.arrowIcon}
              />
            ) : (
             <></>
            )}
          </View>
        )}
        onPress={handlePress}
      />
      {isExpanded &&
        subItems.map((subItem, index) => (
          <View key={index} style={styles.subItemContainer}>
            <CustomDrawerItem
              label={subItem.label}
              icon={subItem.icon}
              onPress={subItem.onPress}
            />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '110%',
    alignItems :'center'
  },
  itemLabel: {
    color: Colors.primary80,
    marginLeft: 20,
    fontFamily: FontType.Roboto_Medium,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  subItemContainer: {
    paddingLeft: 35,
  },
});

export default CustomDrawerItem;
