import React from 'react';
import UserNav from '../UserNav/UserNav';
import { useEffect, useRef } from 'react';
import {
  SideBarWrap,
  TopWrap,
  StyledLogoWrapper,
  SideBarImg,
  StyledTitle,
  StyledCloseButton,
  Overlay,
} from './SideBar.styled';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';
import GooseDeskLogo2x from '../../images/goose-logo/goose-logo-desktop-2x.webp';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

export const SideBar = ({ isModalMenuOpen, closeModalMenu }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
  dispatch(logout());
};

  const node = useRef();
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

useOnClickOutside(node, () => {
  if (isModalMenuOpen) {
    closeModalMenu();
  }
});

  useEffect(() => {
    const close = e => {
        closeModalMenu(false);
    };
    isModalMenuOpen && window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isModalMenuOpen, closeModalMenu]);

  const handleCloseModalMenu = () => {
    closeModalMenu(false);
  };

  return (
    <>
      <SideBarWrap className={isModalMenuOpen && 'openModalMenu'} ref={node}>
        <TopWrap>
          <StyledLogoWrapper>
            <SideBarImg src={`${GooseDeskLogo2x}`}/>
            <StyledTitle>GooseTrack</StyledTitle>
          </StyledLogoWrapper>
          <StyledCloseButton onClick={handleCloseModalMenu}></StyledCloseButton>
        </TopWrap>

        <UserNav closeModalMenu={closeModalMenu} />
        <LogoutButton onClick={handleLogOut}/>
      </SideBarWrap>
      {isModalMenuOpen && <Overlay onClick={handleCloseModalMenu} />}
    </>
  );
};

export default SideBar;
