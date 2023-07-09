import { type Preview } from "@storybook/react"
// import "../src/app/globals.css"
import "../src/styles/globals.css"

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}
