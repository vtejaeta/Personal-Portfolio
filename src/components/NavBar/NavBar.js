import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Hamburger from "../Hamburger/Hamburger"
import ProfilePic from "../ProfilePic/ProfilePic"

import useTheme from "../../hooks/useTheme"

const Nav = styled.nav`
  position: relative;
  padding: 2.5rem 2rem 1.2rem;

  @media only screen and (max-width: 767px) {
    padding: 2.2rem 4rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 2.2rem 3rem;
  }

  @media only screen and (max-width: 321px) {
    padding: 2.2rem;
  }
`

const List = styled.div`
  max-width: 85rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`

const ListItem = styled.a`
  color: var(--invert-primary);
  background: transparent;

  font-weight: 400;
  padding: 0.8rem 1rem;

  &:hover,
  &:focus {
    color: var(--invert-primary);
    background: var(--footer-bg);
  }
`

const StyledLink = styled(Link)`
  color: var(--invert-primary);
  background: transparent;

  font-weight: 400;
  padding: 0.8rem 1rem;

  &:hover,
  &:focus {
    color: var(--invert-primary);
    background: var(--footer-bg);
  }
`

const ThemeToggle = styled.div`
  height: 2.5rem;
  width: 2.5rem;

  cursor: pointer;
  background: var(--theme-icons-url);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0.8rem 1rem;
`

const Name = styled.span`
  font-size: 1.8rem;
  font-weight: 600;

  height: 5rem;
  line-height: 5rem;

  color: var(--invert-primary);
  align-self: center;

  ${props =>
    props.showImg &&
    `
  transform: translateX(6rem);
  `}

  @media only screen and (max-width: 767px) {
    transform: translateX(6rem);
  }
`

const Section = styled.section`
  width: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`

const ProfilePicContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
`

const ThemeContainer = styled.div`
  cursor: pointer;
  background-color: var(--footer-bg);

  padding: 1rem;
  border-radius: 50%;

  @media only screen and (max-width: 767px) {
    margin-right: 2.2rem;
  }
`

const MobileIconsContainer = styled.div`
  @media only screen and (max-width: 767px) {
    width: 11rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 450px) {
    width: 8rem;
  }
`

const SkipLink = styled.a`
  position: absolute;
  color: var(--invert-primary);
  background-color: var(--root-primary);

  border: 1px solid var(--root-primary);
  padding: 0.2rem 0.4rem;
  margin-left: 3rem;
  transform: translateY(-220%);

  &:focus {
    transform: translateY(-50%);
  }
`

export default function NavBar({ showImg = false, skipLinkId = "/#about" }) {
  const [theme, setTheme] = useTheme()

  function toggleTheme() {
    setTheme(theme => (theme === "dark" ? "light" : "dark"))
  }

  function checkEnterKey(e) {
    if (e.key === "Enter" || e.keyCode === 13) toggleTheme()
  }

  return (
    <Nav id="top">
      <List>
        <ProfilePicContainer to="/" aria-label="Go to home page">
          <ProfilePic showImg={showImg} />
          <Name showImg={showImg}>Viswa Teja E.</Name>
        </ProfilePicContainer>
        <SkipLink href={skipLinkId}>Skip to main content</SkipLink>
        <Section>
          <ListItem href="/#Projects" aria-label="View projects">
            Projects
          </ListItem>
          <ListItem href="/#Contact" aria-label="View contact">
            Contact
          </ListItem>
          <ListItem
            href="ViswaTeja_cv_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Viswa Teja resume"
          >
            Resume
          </ListItem>
          <StyledLink to="/about" aria-label="View about page">
            About
          </StyledLink>
        </Section>
        <MobileIconsContainer>
          <ThemeContainer
            onClick={toggleTheme}
            tabIndex={0}
            onKeyPress={checkEnterKey}
          >
            <ThemeToggle
              role="img"
              aria-label={`Currently in ${theme} mode, Click to toggle theme`}
            />
          </ThemeContainer>
          <Hamburger />
        </MobileIconsContainer>
      </List>
    </Nav>
  )
}
