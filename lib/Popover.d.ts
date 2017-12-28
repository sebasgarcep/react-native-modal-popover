/// <reference types="react" />
import * as React from 'react';
import { Animated, ViewStyle } from 'react-native';
import { Geometry, Placement, Rect, Size } from './PopoverGeometry';
export interface PopoverProps {
    visible?: boolean;
    onClose?: () => void;
    arrowSize: Size;
    placement: Placement | 'auto';
    fromRect: Rect;
    displayArea: Rect;
    backgroundStyle?: ViewStyle;
    arrowStyle: ViewStyle;
    popoverStyle?: ViewStyle;
    contentStyle: ViewStyle;
}
export interface PopoverState extends Geometry {
    contentSize: Size;
    visible: boolean;
    isAwaitingShow: boolean;
    animation: Animated.Value;
}
export default class Popover extends React.PureComponent<PopoverProps, PopoverState> {
    static propTypes: any;
    static defaultProps: Partial<PopoverProps>;
    static displayName: string;
    constructor(props: PopoverProps);
    private updateState;
    private measureContent;
    private getTranslateOrigin;
    componentWillReceiveProps(nextProps: PopoverProps): void;
    private startAnimation;
    private onHidden;
    private computeStyles;
    render(): JSX.Element;
}
