import { useState } from 'react';

const useToggle = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };
  return { open, toggle, setOpen };
};

export { useToggle };
