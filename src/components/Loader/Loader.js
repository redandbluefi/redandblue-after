import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  ${p =>
    p.small &&
    `
    height: 100%;
  `};
`;

const Text = styled.div`
  margin-left: 15px;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Loader = props => {
  if (!props.visible) {
    return null;
  }
  const { small } = props;
  return (
    <Container small={small}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="38"
        viewBox="0 0 37 38"
      >
        <path
          fill="#a0aeb7"
          fillRule="evenodd"
          d="M37 23.915l-4.738 8.122-10.942-8.348 1.805 13.537h-9.25l1.805-13.537-10.942 8.348L0 23.915l12.634-5.302L0 13.31l4.738-8.122 10.942 8.348L13.875 0h9.25L21.32 13.537l10.942-8.348L37 13.311l-12.634 5.302z"
        />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 0 0"
          to="360 0 0"
          dur="1s"
          repeatCount="indefinite"
        />
      </svg>
      {!props.small && (
        <Text>
          <FormattedMessage id="label.loading" />
        </Text>
      )}
    </Container>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool
};
Loader.defaultProps = {
  visible: false
};

export default Loader;
