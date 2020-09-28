# @modyqyw/stylelint-config

A Stylelint shareable config for css, less and scss. Also support miniprograms.

## Usage

- Install the config.

```sh
npm i -D stylelint@~13.7.0 @modyqyw/stylelint-config@~1.0.0
```

For yarn, run scripts below.

```sh
yarn add -D stylelint@~13.7.0 @modyqyw/stylelint-config@~1.0.0
```

- Set up.

```js
// stylelint.config.js
module.exports = {
  extends: ["@modyqyw/stylelint-config/css"], // for css
  // extends: ["@modyqyw/stylelint-config/less"], // for less
  // extends: ["@modyqyw/stylelint-config/scss"], // for scss
};
```

## VSCode

- Install plugins.
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- Set up `Settings.json`. Then `F1 => File: Save`.

```json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "files.associations": {
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.swan": "html",
    "*.ttml": "html",
    "*.ttss": "css",
    "*.jxml": "html",
    "*.jxss": "css",
    "*.wpy": "vue",
    "*.nvue": "vue",
    "*.ux": "vue"
  }
}
```

## More Config

- [@modyqyw/prettier-config](https://github.com/MillCloud/prettier-config#readme)
- [@modyqyw/eslint-config](https://github.com/MillCloud/eslint-config#readme)
- [@modyqyw/eslint-config-react](https://github.com/MillCloud/eslint-config-react#readme)
- [@modyqyw/eslint-config-vue](https://github.com/MillCloud/eslint-config-vue#readme)
- [@modyqyw/eslint-config-vue-ts](https://github.com/MillCloud/eslint-config-vue-ts#readme)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present MillCloud
