import React, { FC, HTMLAttributes } from 'react';

interface PaginationButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  children,
  disabled,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      disabled={disabled}
      className={
        otherProps.className +
        ' ' +
        'min-w-[2.32rem] min-h-[2.5rem] flex flex-row hover:bg-exercism-active disabled:bg-exercism-button-disabled disabled:text-exercism-text-disabled font-medium text-exercism-100 rounded-md items-center justify-center py-[8px] px-[16px] border border-exercism-button-100'
      }
    >
      {children}
    </button>
  );
};

export default PaginationButton;
