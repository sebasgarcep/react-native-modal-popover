/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Rect } from './PopoverGeometry';
export interface Props {
    onPopoverDisplayed?: () => any;
}
export interface State {
    showPopover: boolean;
    popoverAnchor: Rect;
}
declare class PopoverTouchable extends React.PureComponent<Props, State> {
    static propTypes: {
        onPopoverDisplayed: PropTypes.Requireable<any>;
    };
    constructor(props: Props);
    private touchable;
    private setRef;
    private onPress;
    private onTouchableMeasured;
    private onClosePopover;
    render(): React.ReactElement<any>[];
}
export default PopoverTouchable;
