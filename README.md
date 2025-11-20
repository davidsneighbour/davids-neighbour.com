# Setup

```shell
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

# File structure

```shell
.
├── README.md          # README file
├── public             # Public assets folder
├── src
│   ├── layouts        # Shared Astro layouts
│   ├── pages          # Astro pages
│   ├── styles         # Styles folder
│   └── utils          # Utility functions
├── astro.config.mjs   # Astro configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

# Customisation

You can easily configure this Astro + Tailwind starter by updating these files:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/layouts/BaseLayout.astro`: default theme

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.

# Deploy to production

You can see the results locally in production mode with:

```shell
npm run build
npm run preview
```

The generated HTML and CSS files are minified. Unused CSS from [Tailwind CSS](https://tailwindcss.com) is removed during the build.
