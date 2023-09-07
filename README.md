## Getting Started

First, run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Theme Design System
This project uses [ant design](https://ant.design) design system. The configuration for the theme provider is as follows

```ts
import {theme} from "antd";


const CocktailTheme: ThemeConfig = {
  token: {
    colorPrimary: "#008000",
    colorInfo: "#008000",
    borderRadius: 3,
    wireframe: false,
    fontFamily: "Caveat"
  },
  algorithm: theme.darkAlgorithm
}
```
