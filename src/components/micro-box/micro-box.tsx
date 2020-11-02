import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { PaddingBottom, PaddingLeft, PaddingRight, PaddingTop, MarginLeft, MarginRight, MarginTop, MarginBottom } from '../units';
import { margin } from '../styling';

@Component({
  tag: 'micro-box',
  styleUrls: [
    '../../global/app.css',
  ],
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

  render() {

    return (
      <Host class={margin(this.marginLeft, this.marginRight, this.marginTop, this.marginBottom)}>
        <slot></slot>
      </Host>
    );
  }
};