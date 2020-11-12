# @modyqyw/stylelint-config

A Stylelint shareable config for CSS/LESS/SCSS. Supports miniprogram.

Will be dropped in the future. Try [@modyqyw/fabric](#more-configs).

[Github](https://github.com/MillCloud/stylelint-config#readme) | [Gitee](https://gitee.com/millcloud/stylelint-config#readme)

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
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- Set up `Settings.json`. Then `F1 => File: Save`.

```json
{
  "css.validate": false,
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
  },
  "less.validate": false,
  "scss.validate": false,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

## More Config

- `@modyqyw/prettier-config` - [Github](https://github.com/MillCloud/prettier-config#readme) [Gitee](https://gitee.com/millcloud/prettier-config#readme)
- `@modyqyw/eslint-config` - [Github](https://github.com/MillCloud/eslint-config#readme) [Gitee](https://gitee.com/millcloud/eslint-config#readme)
- `@modyqyw/stylelint-config` - [Github](https://github.com/MillCloud/stylelint-config#readme) [Gitee](https://gitee.com/millcloud/stylelint-config#readme)

`@modyqyw/eslint-config` and `@modyqyw/stylelint-config` do not use any `Prettier` config and plugin, while `@modyqyw/fabric` does.

## License

[MIT](./LICENSE)

Copyright (c) 2020-present MillCloud
