import { RefObject, useEffect } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (e: any): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
export { useClickOutside };
