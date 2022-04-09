import React, { FC, ReactNode, useState, useRef, HTMLAttributes } from 'react';
import { useToggle } from '../../hooks/use-toggle';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { SelectContext } from '../../contexts/SelectContext';
import { useClickOutside } from '../../hooks/use-click-outside';

interface SelectProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[];
  value?: any;
  avatar?: boolean;
  defaultAvatar?: string;
  rightIcon?: boolean;
  label?: string | JSX.Element;
  onChange?: (selectedValue: any) => void;
}

const Select: FC<SelectProps> = ({
  children,
  value,
  avatar = false,
  label,
  rightIcon,
  defaultAvatar,
  onChange,
  ...otherProps
}) => {
  const [selectedOption, setSelectedOption] = useState<any>(value || '');
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    defaultAvatar || ''
  );

  const { open, toggle, setOpen } = useToggle();
  const ref = useRef<HTMLButtonElement>(null);
  // const clickOutsideHandler = () => setOpen(false);
  useClickOutside(ref, () => setOpen(false));
  const updateSelectedOption = (option: any) => {
    setSelectedOption(option);
    onChange && onChange(option);
    setOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{
        selectedOption: selectedOption,
        changeSelectedOption: updateSelectedOption,
        selectedAvatar: selectedAvatar,
        changeSelectedAvatar: (url) => setSelectedAvatar(url),
      }}
    >
      <button
        ref={ref}
        onClick={toggle}
        type="button"
        className={
          'relative flex-shrink-0 flex shadow-sm pl-4 py-2 text-left cursor-pointer focus:outline-none ' +
          otherProps.className
        }
        {...otherProps}
      >
        {avatar && defaultAvatar && (
          <img
            src={selectedAvatar}
            alt=""
            className="flex-shrink-1 h-12 w-12 rounded-full"
          />
        )}
        {rightIcon && (
          <span className="ml-4 flex self-center">
            {open ? (
              <ChevronUpIcon className="h-5 w-5 text-exercism-100" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-exercism-100" />
            )}
          </span>
        )}
        {label && <div>{label}</div>}
      </button>

      {open && (
        <ul className="absolute z-[9999] mt-1 max-h-80 max-w-full w-96 max-h-96 bg-white shadow-lg rounded-lg p-2 text-base ring-1 ring-black ring-opacity-5 overflow-y-auto no-scrollbar sm:text-sm">
          {children}
        </ul>
      )}
    </SelectContext.Provider>
  );
};

export default Select;
