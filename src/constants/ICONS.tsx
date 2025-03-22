import React from 'react';
import ICWatchList from "#icons/ic_watchlist.svg";
import ICHome from "#icons/ic_home.svg";
import ICLogo from "#icons/ic_logo.svg";
import ICChevronDown from "#icons/ic_chevron_down.svg";
import ICChevronRight from "#icons/ic_chevron_right.svg";
import { StyleProp, ViewStyle } from 'react-native';
import ICArrowUp from "#icons/ic_arrow_up.svg";

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
    IC_CHEVRON_DOWN: (props: SvgProps) => <ICChevronDown {...props}/>,
    IC_CHEVRON_RIGHT: (props: SvgProps) => <ICChevronRight {...props}/>,
    IC_ARROW_UP: (props: SvgProps) => <ICArrowUp {...props}/>,
}