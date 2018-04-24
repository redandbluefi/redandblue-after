# Universal JavaScript

Thanks to Babel, we are able to use latest (and even up-coming) JavaScript features already now, so that they will still work on even older browsers. Babel is a transpiler which processes all the code before it goes to the browser. So we can write any functionality and use new productive methods, without having to worry about browser support.

We are also using Webpack, which allows us to do some neat tricks and component-approach to the maximum. Normally you `require` / `import` JavaScript modules to your code and that's a normal thing to do. Webpack however allows us to import pretty much everything we want, as long as there is a `webpack-loader` for it. Currently we have few different loaders pre-configured via Razzle, so we can for example import:

* CSS ([style-loader](https://github.com/webpack/style-loader)
* JSON
* Images

And could easily add more when needed.

## Why is that a good thing

Let's take CSS for example. Back in the days you would have few CSS files which all affected the whole document, or in other words, had a global namespace. The bigger the application the harder it was to keep track which classes are affecting which and also the CSS became either huge or you had too many of them to keep up. Now that we can import CSS directly into our React component, it not only allows us to produce very reusable components but also we will never have any CSS namespace issues, as the imported CSS only affects the component it was imported in. This general thing, having CSS in JavaScript files is called [CSS in JS](https://github.com/MicheleBertoli/css-in-js). More specifically our approach (importing CSS files) is called [CSS Modules](https://github.com/css-modules/css-modules).

CSS Modules are good but in the end not the best for our use case. Instead, we try to use `styled-components` instead of CSS Modules as much as possible. `styled-components` allows us to do things such as Critical CSS, which means collecting the CSS needed to view the required page only, so we can get content to the user as fast as possible (they don't have to download CSS for the whole site to see frontpage).

We can also import images to be part of our code and use them in very similar way as the CSS. Large image files will be copied to `build/` folder during build while small images will be included as directly into the file, which in the end will lessen the requests made by client and thus drop the loading times.

### Example

```javascript
// ES6 style importing, equivalent to
// var React = require('react');
import React, { Component } from 'react';
// Importing CSS file as 'styles'
// All the classes in the file will be attributes of styles.
// For example, if file has .banner class it will be accessed with styles.banner
import styles from './LandingBanner.css';

// ES7 decorator syntax
// errorHandler here would be a higher-order component which can be used as a decorator
@errorHandler()
// ES6 class syntax and exporting
export default class UniversalExample extends Component {
  render() {
    // ES6 destructuring assignment
    // Old way of writing would be: var name = this.props.name;
    const { name } = this.props;
    return (
      // JSX which ends up as HTML to the browser
      // Using inline styles and imported CSS as a class
      <div style={{ padding: '2em 3em' }} className={styles.banner}>
        {/* ES6 spread syntax */}
        <button {...this.props} />
      </div>
    );
  }
}
```
