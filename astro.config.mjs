import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: '@import "./src/css/styles.css";',
        },
      },
    },
  },
})
