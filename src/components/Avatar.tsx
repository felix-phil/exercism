import React, { FC, HTMLAttributes } from 'react';
interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  rounded?: boolean;
  alt?: string;
}
const Avatar: FC<AvatarProps> = ({ src, rounded, alt, ...otherProps }) => {
  return (
    <div>
      <img
        src={src}
        className={`h-[2rem] w-[2rem] bg-cover ${
          rounded ? 'rounded-full' : ''
        } ${otherProps.className}`}
        {...otherProps}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
