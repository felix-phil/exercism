import React, { FC, HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  left?: JSX.Element;
  right?: JSX.Element;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  left,
  right,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      disabled={disabled}
      className={
        otherProps.className +
        ' ' +
        'transition ease-in delay-100 min-h-[2.5rem] disabled:opacity-90 flex flex-row hover:bg-exercism-active disabled:bg-exercism-button-disabled disabled:text-exercism-text-disabled font-medium text-exercism-100 rounded-md items-center justify-center py-[8px] px-[16px] border border-exercism-button-100'
      }
    >
      {left && <span className="ml-1 mr-1 flex self-start">{left}</span>}
      {children}
      {right && <span className="mr-1 ml-1 flex self-end">{right}</span>}
    </button>
  );
};

export default Button;
