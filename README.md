# @modyqyw/stylelint-config

A Stylelint shareable config for CSS/LESS/SCSS. Supports miniprogram.

## Usage

```sh
npm i -D stylelint@~13.7.0 @modyqyw/stylelint-config@~1.0.0
# or
# yarn add -D stylelint@~13.7.0 @modyqyw/stylelint-config@~1.0.0
```

```js
// ${PROJECT_DIR}/stylelint.config.js
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
    "source.fixAll.stylelint": true
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
- [@modyqyw/stylelint-config](https://github.com/MillCloud/stylelint-config#readme)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present MillCloud
