import { PixelRatio } from "react-native";

export const getPx = (size : number) : number => {
    return PixelRatio.getPixelSizeForLayoutSize(size)
}