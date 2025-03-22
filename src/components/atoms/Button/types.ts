import { ViewStyle } from "react-native";

export type MyButtonProps = {
    onPress?: () => void;
    text: string;
    isDisable?: boolean
    style?: ViewStyle
  };