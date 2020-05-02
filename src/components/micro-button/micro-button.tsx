import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'micro-button',
  shadow: true,
})
export class MicroButton implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
