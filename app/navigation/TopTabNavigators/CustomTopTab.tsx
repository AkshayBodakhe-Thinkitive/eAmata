import React from 'react';
import {FontType} from '../../constants/FontType';
import {
  StyleProp,
  Text,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/ColorConstants';

const CustomTopTab: React.FC<Props> = ({tabs, onTabChange, style}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderScene = SceneMap(
    Object.fromEntries(
      tabs.map((tab: Tab) => [
        tab.key,
        tab.component ? tab.component : () => null,
      ]),
    ),
  );

  // console.log(index)

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
    onTabChange && onTabChange(newIndex);
  };

  return (
    <TabView
      navigationState={{
        index,
        routes: tabs.map(tab => ({key: tab.key, title: tab.title})),
      }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      initialLayout={{width: layout.width}}
      renderTabBar={props => {
        return (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: Colors.primary}}
            activeColor={Colors.primary}
            inactiveColor={Colors.neutral40}
            labelStyle={{
              fontSize: responsiveFontSize(1.8),
              fontFamily: FontType.Roboto_Regular,
              textTransform: 'capitalize',
            }}
            style={[
              {
                backgroundColor: Colors.white,
                height: responsiveHeight(5.5),
              },
              style,
            ]}
          />
        );
      }}
    />
  );
};

export default CustomTopTab;

interface Tab {
  key: string;
  title: string;
  component?: React.ComponentType<any>;
}

interface Props {
  tabs: Tab[];
  onTabChange?: (index: number) => void;
  style?: StyleProp<ViewStyle>;
}
