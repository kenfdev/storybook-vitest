import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { storybookNextJsPlugin } from '@storybook/experimental-nextjs-vite/vite-plugin';
import { defineWorkspace } from 'vitest/config';

const config = defineWorkspace([
  {
    plugins: [storybookNextJsPlugin(), storybookTest()],
    publicDir: './public',
    test: {
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        headless: true,
        screenshotFailures: false,
      },
      isolate: true,
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  },
]);

export default config;
