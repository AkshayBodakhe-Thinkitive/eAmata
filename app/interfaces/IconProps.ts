import { StyleProp, TextStyle, ViewStyle } from "react-native";


export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
  }