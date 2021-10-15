import React from 'react';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';
import './index.less';

const propTypes = {
  type: PropTypes.oneOf(['primary', 'normal']),
  link: PropTypes.string,
  target: PropTypes.string,
};
const defaultProps = {
  type: 'primary',
  link: '',
  target: '_self',
};
const Button = (props) => {
  return (
    <Link
      className={`button button-${props.type}`}
      target={props.target || '_self'}
      style={{marginRight: '50px'}}
      to={props.link}
    >
      {props.children}
    </Link>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
