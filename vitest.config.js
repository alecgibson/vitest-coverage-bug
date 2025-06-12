import config from './vite.config.js';
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

export default mergeConfig(
  config,
  defineConfig({
    test: {
      coverage: {
        provider: 'istanbul',
      },
      browser: {
        instances: [
          {
            browser: 'chromium',
            launch: {
              // Run against Google Chrome to avoid npx playwright install on CI,
              // which is really slow
              channel: 'chrome',
            },
          },
        ],
        enabled: true,
        provider: 'playwright',
        headless: true,
      },
    },
  })
);
