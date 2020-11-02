import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { Level } from '../units';

@Component({
  tag: 'micro-header',
  shadow: true,
  styleUrls: [
    '../../global/app.css',
  ],
})
export class MicroHeader implements ComponentInterface {

  @Prop() level: Level;

  render() {
    return (
      <Host>
        <micro-box marginTop={6} marginBottom={4}>
          <slot></slot>
        </micro-box>
      </Host>
    );
  }
}