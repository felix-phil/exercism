import React, { FC, InputHTMLAttributes, useRef } from 'react';
import { useOpenClose } from '../../hooks/use-open-close';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  left?: JSX.Element | string;
  width?: string;
  height?: string;
}

const TextInput: FC<TextInputProps> = ({
  label,
  left,
  width = '100%',
  height = '48px',
  ...otherProps
}) => {
  const {
    state: focused,
    handleOpen: handleFocus,
    handleClose: handleBlur,
  } = useOpenClose();

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      style={{ marginLeft: '5px', width: inputRef.current?.style.width }}
      {...otherProps}
    >
      {label && (
        <label
          htmlFor={inputRef.current?.id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1 flex shadow-sm">
        {left && (
          <span
            className={`
            ${
              focused
                ? 'border-exercism-600 rounded-l-md border-2 bg-white'
                : 'border-gray-300 bg-exercism-50'
            } 
            inline-flex items-center px-3 border border-r-0 text-sm transition ease-in-out delay-20`}
          >
            {left}
          </span>
        )}
        <input
          ref={inputRef}
          onFocus={(e) => {
            handleFocus();
            otherProps.onFocus && otherProps.onFocus(e);
          }}
          onBlur={(e) => {
            handleBlur();
            otherProps.onBlur && otherProps.onBlur(e);
          }}
          style={{
            ...otherProps.style,
            width: width,
          }}
          className={
            "transition ease-in-out h-[3rem] delay-20 font-['Poppins'] fw-400 font-normal text-[16px] text-exercism-100 border border-gray-300 focus:outline-none focus:border-exercism-600 focus:border-l-0 focus:border-2  bg-exercism-50 focus:bg-white border-l-0 rounded-none focus:rounded-r-md sm:text-sm"
          }
          {...otherProps}
        />
      </div>
    </div>
  );
};

export default TextInput;
