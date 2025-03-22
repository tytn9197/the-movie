import React from 'react';
import ICWatchList from "#icons/ic_watchlist.svg";
import ICHome from "#icons/ic_home.svg";

export type SvgProps = {
    color?: string;
    width?: number;
    height?: number;
};

export const ICONS = {
    IC_HOME: (props: SvgProps) => <ICHome {...props}/>,
    IC_WATCHLIST: (props: SvgProps) => <ICWatchList {...props}/>,
}