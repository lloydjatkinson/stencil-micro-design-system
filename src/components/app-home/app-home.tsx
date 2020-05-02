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
      <div class='app-home'>
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
        <micro-box>
          <p class="bg-red-600">
            Hello
          </p>
        </micro-box>
      </div>
    );
  }
}
