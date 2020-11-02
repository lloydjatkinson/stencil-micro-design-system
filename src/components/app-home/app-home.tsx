import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  // shadow: true,
  styleUrls: [
    '../../global/app.css',
  ],
})
export class AppHome {

  render() {
    return (
      <div>
        {/* <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link> */}
        {/* <micro-header>This is a header</micro-header> */}

        <micro-box marginTop={20}>
          Fuck sake
        </micro-box>
      </div>
    );
  }
}
