import React from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';

const LocalizedLink = props => {
  const { intl, to, children, ...rest } = props;
  const { locale } = intl;
  return (
    <NavLink
      activeStyle={{
        borderBottom: '2px solid #ffca05'
      }}
      exact
      to={`/${locale}${to}`}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default injectIntl(LocalizedLink);
