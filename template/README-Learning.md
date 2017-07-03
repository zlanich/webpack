# Vue.js 2, Typescript 2, Webpack 2 Experiment

## Resources Used
- [Vue.js Typescript Support](https://vuejs.org/v2/guide/typescript.html)
- [Vue Class Component - ES / TypeScript decorator for class-style Vue components](https://github.com/vuejs/vue-class-component)
- [Vue Webpack 2 Full Template](https://github.com/vuejs-templates/webpack)
- [Vue CLI](https://github.com/vuejs/vue-cli)
- [TS Loader](https://github.com/TypeStrong/ts-loader)
- [Vue2 + TypeScript2 -- an introductory guide (slightly outdated)](https://herringtondarkholme.github.io/2016/10/03/vue2-ts2/)
- [Vue Typescript Class Components](https://alligator.io/vuejs/typescript-class-components/)

## Additional Packages Needed
- typescript
- ts-loader
- vue-class-component

## Further Configuration

### Added tsconfig.json
- "allowSyntheticDefaultImports": true - Required
- "allowJs": true - Doesn't work with VueType (see **Possible Future Tools** below)
- "experimentalDecorators": true - Removes VSCode warnings about Experimental Decorator Syntax

## Webpack config (`/build/webpack.base.config.js`)
- Added '.ts' to `resolve.extemsions`
- Converted `main.js` to `main.ts`
- Changed `entry.app` to './src/main.ts'
- Added 'ts' extension to 'eslint-loader' rule
- Added 'ts-loader' rule

### sfc.d.ts
General types declaration so VSCode allows TS imports from .vue files

`import App from './App.vue'` requires the .vue suffix for VSCode to understand it using the above configuration. Compiler doesn't need it with `appendTsSuffixTo: [/\.vue$/]` webpack configuration found in `/build/webpack.base.config.js`.

### Using
- `npm run dev` for local dev server

## Further Learning
- [VueX - Centralized State Management for Vue.js](https://github.com/vuejs/vuex) or [Killimanjaro for TS2](https://github.com/HerringtonDarkholme/kilimanjaro)
- [Webpack from First Principles - Video](https://www.youtube.com/watch?v=WQue1AN93YU)
- [Webbpack Course](https://egghead.io/courses/using-webpack-for-production-javascript-applications)

## Possible Future Tools
- [VueType - CLI tool that creates TS Typings files for .vue files](https://github.com/ktsn/vuetype)

## ToDo
- Get Intellisense woring throughout
- Get TS2 Vue snippets working (if available)
- Get any source mapping working (where applicable)
- Research where Typescript can be used in Vue.js projects effectively
- Research Unit Testing in Vue.js
- Research debugging (Typescript, .vue files, etc)
- Seek out a frictionless build path for using Vue.js to create ad-hoc Wordpress features (widgets, admin panels, etc)
- Research building a forked Vue CLI template for Ad-Hoc Wordpress projects