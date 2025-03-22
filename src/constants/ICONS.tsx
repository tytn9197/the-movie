import React from 'react';
import ICWatchList from "#icons/ic_watchlist.svg";
import ICHome from "#icons/ic_home.svg";
import ICLogo from "#icons/ic_logo.svg";
import { StyleProp, ViewStyle } from 'react-native';

export type SvgProps = {
    color?: string;
    width?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;
};

export const ICONS = {
    IC_HOME: (props: SvgProps) => <ICHome {...props}/>,
    IC_WATCHLIST: (props: SvgProps) => <ICWatchList {...props}/>,
    IC_LOGO: (props: SvgProps) => <ICLogo {...props}/>,
}