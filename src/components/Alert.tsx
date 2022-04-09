import React, { FC, HTMLAttributes } from 'react';
import Container from './Container';

interface AlertProp extends HTMLAttributes<HTMLDivElement> {
  message: string;
  type: 'info' | 'error' | 'warning';
  open: boolean;
}
const Alert: FC<AlertProp> = ({
  message,
  open,
  type = 'error',
  ...otherProps
}) => {
  return (
    <React.Fragment>
      {open && (
        <Container
          className={`${
            otherProps.className
          } place-self-center h-16 rounded-lg w-2/4 ${
            type === 'error'
              ? 'bg-red-100'
              : type === 'info'
              ? 'bg-sky-100'
              : 'bg-orange-100'
          } flex items-center justify-center mx-5 my-2`}
        >
          <span
            className={`font-['Poppins'] font-medium ${
              type === 'error'
                ? 'text-red-500'
                : type === 'info'
                ? 'text-sky-500'
                : 'text-orange-500'
            } text-[1.2rem]`}
          >
            {message}
          </span>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Alert;
