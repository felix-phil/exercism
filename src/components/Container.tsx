import React, { FC, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ children, ...otherProps }) => {
  return <div {...otherProps}>{children}</div>;
};

export default Container;
