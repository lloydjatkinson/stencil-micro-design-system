import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";

const purge = purgecss({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.tsx", "./src/**/*.ts", "./src/index.html"],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
});

// https://stenciljs.com/docs/config

export const config: Config = {
  devServer: {
    reloadStrategy: null,
  },
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production" ? [purge, cssnano()] : [purge, cssnano()]),
      ],
    }),
  ],
};
