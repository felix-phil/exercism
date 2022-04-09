import React, { FC, HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  label?: string | number;
  size?: 'small' | 'large';
  border?: boolean;
}
const Badge: FC<BadgeProps> = ({
  children,
  label,
  size,
  border,
  ...otherProps
}) => {
  return (
    <div className="relative">
      <span
        className={`
          ${
            size === 'small' || !label
              ? 'h-[8px] w-[8px] right-0 top-[-2px]'
              : 'h-[24px] w-[24px] top-[-2%] right-[-2%] flex items-center text-white justify-center text-[0.8rem]'
          }  absolute bg-exercism-badge z-10  rounded-[100%] ${
          border ? 'border-[1.5px] border-[#fff]' : 'border'
        }`}
      >
        {label}
      </span>
      <div {...otherProps}>{children}</div>
    </div>
  );
};

export default Badge;
