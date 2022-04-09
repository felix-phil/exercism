import { useState } from 'react';

const useOpenClose = (initial: boolean = false) => {
  const [state, setState] = useState<boolean>(initial);
  const handleOpen = () => setState(true);
  const handleClose = () => setState(false);

  return { state, handleOpen, handleClose };
};
export { useOpenClose };
