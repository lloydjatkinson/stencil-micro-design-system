import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
  styleUrls: [
    '../../global/app.css',
  ],
})
export class AppRoot {

  render() {
    return (
      <div class="container mx-auto m-4">
        <header>
          <h1>Micro Design System</h1>
          <h2>An example design system using Stencil and Tailwind</h2>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
