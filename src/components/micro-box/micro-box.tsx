import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { PaddingBottom, PaddingLeft, PaddingRight, PaddingTop, MarginLeft, MarginRight, MarginTop, MarginBottom } from '../units';

@Component({
  tag: 'micro-box',
})
export class MicroBox implements ComponentInterface {

  @Prop() paddingLeft: PaddingLeft;
  @Prop() paddingRight: PaddingRight;
  @Prop() paddingTop: PaddingTop;
  @Prop() paddingBottom: PaddingBottom;

  @Prop() marginLeft: MarginLeft;
  @Prop() marginRight: MarginRight;
  @Prop() marginTop: MarginTop;
  @Prop() marginBottom: MarginBottom;

  // style() {

  // }

  render() {

    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
};