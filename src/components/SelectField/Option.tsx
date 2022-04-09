import React, { FC, ReactNode } from 'react';
import { useSelectContext } from '../../contexts/SelectContext';
import Chip from '../Chip';

interface OptionProps {
  children: ReactNode | ReactNode[];
  value: string | number;
  avatarUrl?: string;
  chipNumber?: number;
}

const Option: FC<OptionProps> = ({
  children,
  value,
  avatarUrl,
  chipNumber,
}) => {
  const { selectedOption, changeSelectedOption, changeSelectedAvatar } =
    useSelectContext();

  const handleClickHandler = () => {
    changeSelectedOption(value);
    if (avatarUrl && changeSelectedAvatar) {
      changeSelectedAvatar(avatarUrl);
    }
  };
  return (
    <li
      className={`flex flex-row items-center w-full h-14 font-medium text-base text-exercism-300 fw-500 font-['Poppins'] cursor-default hover:bg-exercism-50 select-none relative py-2 pl-3 pr-9 ${
        value === selectedOption && 'bg-exercism-50'
      }`}
      onClick={handleClickHandler}
    >
      <div className="mr-5">
        <input
          type="radio"
          name="list-option"
          className="w-5 h-5"
          checked={value === selectedOption}
          readOnly
        />
      </div>
      <div className="flex items-center">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt=""
            className="flex-shrink-0 h-10 w-10 rounded-full"
          />
        )}
        <span className="ml-5">{children}</span>
      </div>
      {chipNumber && (
        <Chip content={chipNumber} style={{ marginLeft: 'auto' }} />
      )}
    </li>
  );
};

export default Option;
