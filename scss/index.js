module.exports = {
  extends: ['stylelint-config-twbs-bootstrap/scss'],
  rules: {
    'comment-empty-line-before': null,
    'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class', 'id'] }],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['/^v-/'] }],
    'selector-type-no-unknown': [true, { ignore: ['custom-elements', 'default-namespace'] }],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  },
};
