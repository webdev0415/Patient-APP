import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { H1, Article } from './styles'
import messages from './messages';

export default function NotFound() {
  return (
  	<IntlProvider messages="some description..." locale="en" defaultLocale="en">
      <Article style={{textAlign: 'center', marginTop: '1em'}}>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </Article>
    </IntlProvider>
  );
}
