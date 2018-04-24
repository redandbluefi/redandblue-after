# Internationalization (i18n)

Platform has i18n capabilities that allows us to translate texts, numeric values, etc. to different locales.
Default locale is `en` for English and Finnish is there also as an example. Languages can be easily added and removed depending on the customer requirements.

## Technical implementation

i18n capabilities are provided by `react-intl` libraries. To use the libraries the application needs to be wrapped in a container (`IntlProvider`). This is done both `client.js` and `server.js` respectively. Current localization messages can be found in `i18n`-folder.

Server will automatically determine user's locale based on the headers browser sent. User will then be redirect to the path starting with the locale (unless they were already in it), for example: `/en/`. Once user is on this path, that path prefix will be used as a locale throughout the application.

If we want text to be translatable it needs to be wrapped in a `FormattedMessage` component. More details https://github.com/yahoo/react-intl

## Managing Languages

Currently you would need to modify `utils/locale.js` to load new languages to the application. Additionally you'll of course need to add new location messages to the `i18n` folder, which you'll use in the `utils/locale.js` file.

## Example usage

```javascript
import { FormattedMessage } from 'react-intl';

export default class Example extends Component {
  render() {
    return (
      <div>
        // This text will be translated to the current locale, or default text
        // will show if no locales was determined (or if message is not found)
        <FormattedMessage
          id="header.tagline"
          defaultMessage="By default this text is in English"
        />
      </div>
    );
  }
}
```
