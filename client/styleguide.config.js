const path = require('path');
module.exports = {
  ignore: ['**/*.spec.js'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/StyleGuideWrapper.js'),
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Righteous',
        },
      ],
    },
  },
};
