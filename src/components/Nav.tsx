import React, { FC, HTMLAttributes } from 'react';

interface NavProps extends HTMLAttributes<HTMLDivElement> {}
const Nav: FC<NavProps> = ({ children, ...otherProps }) => {
  return (
    <nav
      className={"min-h-[3.3rem] font=['Poppins'] " + otherProps.className}
      {...otherProps}
    >
      {children}
    </nav>
  );
};

interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  left?: JSX.Element | string;
}
const NavItem: FC<NavItemProps> = ({ left, children, ...otherProps }) => {
  return (
    <div
      className={
        'min-h-[1rem] flex flex-row cursor-pointer items-center' +
        ' ' +
        otherProps.className
      }
      {...otherProps}
    >
      {left && <span className="mr-3">{left}</span>}
      <span className="mr-[1rem]  font-['Poppins'] font-[600]  text-exercism-100 not-italic text-[1rem]">
        {children}
      </span>
    </div>
  );
};

export { Nav, NavItem };
