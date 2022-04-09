import { createContext, useContext } from 'react';

interface SelectContextTypes {
  selectedOption: string | number;
  changeSelectedOption: (option: string | number) => void;
  selectedAvatar?: string;
  changeSelectedAvatar?: (url: string) => void;
}
const SelectContext = createContext<SelectContextTypes>({
  selectedOption: '',
  selectedAvatar: '',
  changeSelectedOption: () => {},
  changeSelectedAvatar: () => {},
});

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Erron creating context');
  }
  return context;
};
export { useSelectContext, SelectContext };
