import React from 'react';
import Container from '../components/Container';
import { ReactComponent as PolygonSocial } from '../assets/PolygonSocial.svg';
import { ReactComponent as Floor } from '../assets/Floor.svg';
import Chip from '../components/Chip';
const Header = () => {
  return (
    <Container className="self-center flex justify-center items-center flex-col gap-[0.75rem] w-full py-[3rem]">
      <PolygonSocial />
      <Container className="flex flex-row gap-2 items-center justify-center">
        <h2 className="h-[2.69rem] font['Poppins'] font-[700] not-italic text-[2rem] leading-[138%] text-exercism-400">
          Testimonies I've left
        </h2>
        <Chip content={47} />
      </Container>
      <Floor />
    </Container>
  );
};

export default Header;
