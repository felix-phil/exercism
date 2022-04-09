import React from 'react';
import Container from '../components/Container';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as NavTracksLogo } from '../assets/NavTracks.svg';
import { ReactComponent as NavDashboardLogo } from '../assets/NavDashboard.svg';
import { ReactComponent as NavDash } from '../assets/NavDash.svg';
import { ReactComponent as NavMonitoring } from '../assets/NavMonitoring.svg';
import { ReactComponent as NavContribute } from '../assets/NavContribute.svg';
import { ReactComponent as SocialIcon } from '../assets/SocialIcon.svg';
import { ReactComponent as Polygon } from '../assets/Polygon.svg';
import { ReactComponent as Bell } from '../assets/Bell.svg';
import { ReactComponent as Rating } from '../assets/Rating.svg';
import UserImage from '../assets/user.png';
import Avatar from '../components/Avatar';
import { ReactComponent as VerticalMenu } from '../assets/VerticalMenu.svg';
import { Nav, NavItem } from '../components/Nav';
import Badge from '../components/Badge';

const Navbar = () => {
  return (
    <Container className="w-full h-[4rem] bg-[#ffffff] border border-border2 flex items-center">
      <Logo className="ml-4 h-[1.5rem] w-[8.29rem] flex-shrink-0" />
      <Nav className="ml-[3rem] flex flex-row items-center h-[3.3rem] gap-[1rem]">
        <NavItem
          left={
            <Container className="relative">
              <NavDashboardLogo className="relative" />
              <NavDash className="top-2 left-[0.9rem] translate-x-2/4 translate-y-2/4 absolute h-[22.5px] w-[19.5px] text-white z-10 font-medium" />
            </Container>
          }
        >
          Dashboard
        </NavItem>
        <NavItem left={<NavTracksLogo className="h-[22.5px] w-[19.5px]" />}>
          Tracks
        </NavItem>
        <NavItem left={<NavMonitoring className="h-[22.5px] w-[19.5px]" />}>
          Monitoring
        </NavItem>
        <NavItem left={<NavContribute className="h-[22.5px] w-[19.5px]" />}>
          Contribute
        </NavItem>
      </Nav>
      <Nav className="ml-auto mr-[5rem] flex flex-row items-center justify-center h-[3.3rem] gap-[1.5rem]">
        <Badge>
          <SocialIcon />
        </Badge>
        <Badge border>
          <Polygon />
        </Badge>
        <Badge size="large" label={2}>
          <Container
            className="p-2 w-[2.7rem] h-[2.34rem] bg-red-500"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #FFF4E3',
            }}
          >
            <Bell className="h-[0.98rem] w-[0.86rem]" />
          </Container>
        </Badge>
        <Badge size="large" label="2">
          <Rating />
        </Badge>
        <Avatar src={UserImage} rounded alt="Current User Image" />
        <VerticalMenu />
      </Nav>
    </Container>
  );
};

export default Navbar;
