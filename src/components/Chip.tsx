import React, { FC, HTMLAttributes } from 'react';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  content: string | number;
}
const Chip: FC<ChipProps> = ({ content, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className="flex items-center text-[14px] justify-center h-[1.5rem] w-[1rem] font-['Poppins'] font-normal text-exercism-400 fw-500 rounded-full border border-exercism-400 p-4"
    >
      {content}
    </div>
  );
};

export default Chip;
