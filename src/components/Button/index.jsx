import React from 'react';
import Link from '@docusaurus/Link';
import './index.less';

const Button = ({
  type = 'primary',
  link = '',
  target = '_self',
  children,
  ...rest
}) => {
  return (
    <Link
      className={`inlong-button inlong-button-${type}`}
      target={target || '_self'}
      to={link}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default Button;
