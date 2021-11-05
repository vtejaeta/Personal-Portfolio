import { Link } from "gatsby"
import React, { useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"

const MobileMenuContainer = styled.div`
  display: none;
  margin-bottom: 4px;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

const Wrapper = styled.button`
  position: relative;
  cursor: pointer;
  z-index: 1000;

  height: 2.5rem;
  background: transparent;

  border: none;
  padding: 0;
`

const Menu = styled.div`
  height: 2px;
  width: 2.4rem;

  &:before,
  &:after {
    height: 2px;
    width: 2.4rem;
  }

  position: relative;
  ${"" /* background: var(--invert-primary); */}
  transition: all 0ms 400ms;

  &.animate {
    background: rgba(255, 255, 255, 0);
  }

  &.animate:after {
    background: white;
    top: 0;
    transform: rotate(45deg);
    transition: top 400ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 400ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &.animate:before {
    background: white;
    bottom: 0px;
    transform: rotate(-45deg);
    transition: bottom 400ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 400ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 4px;
    background: var(--invert-primary);
    transition: bottom 400ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 4px;
    background: var(--invert-primary);
    transition: top 400ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > * {
    margin-bottom: 3rem;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0)
  }
`

const slideOut = keyframes`
0% {
    transform: translateY(0)
  }

  to {
      transform: translateY(100%)
  }
`

const MobileNavigation = styled.nav`
  display: none;
  z-index: 1;
  background-color: #0b0b49;

  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  transform: translateY(-100%);
  overflow: hidden;

  &.hidden {
    display: block;
    visibility: visible;
    animation: ${slideOut} 0.4s cubic-bezier(0.645, 0.05, 0.355, 1) both;
    animation-fill-mode: both;
    animation-play-state: running;
  }

  &.active {
    display: block;
    visibility: visible;
    animation: ${slideIn} 0.4s cubic-bezier(0.645, 0.05, 0.355, 1) both;
    animation-fill-mode: both;
    animation-play-state: running;
  }
`

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: white;
`

const AnchorLink = styled.a`
  font-size: 1.8rem;
  color: white;
`

export default function Hamburger() {
  let menuRef = useRef()
  let navMenuRef = useRef()
  let aboutLinkRef = useRef()

  function toggle() {
    menuRef.current?.classList.toggle("animate")
    let isHidden = navMenuRef.current?.classList.contains("hidden")
    let isActive = navMenuRef.current?.classList.contains("active")

    if (!isHidden && !isActive) {
      navMenuRef.current?.classList.add("active")
    } else if (isActive) {
      navMenuRef.current?.classList.remove("active")
      navMenuRef.current?.classList.add("hidden")
    } else if (isHidden) {
      navMenuRef.current.classList.remove("hidden")
      navMenuRef.current.classList.add("active")
    }

    if (!document.body.style.overflow) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.removeProperty("overflow")
    }
  }

  useEffect(() => {
    function shiftFocus(e) {
      if (e.key === "Tab" || e.keyCode === 9) {
        if (!e.shiftKey && document.activeElement === aboutLinkRef.current) {
          menuRef.current?.parentNode && menuRef.current.parentNode.focus()
          e.preventDefault()
        }
      }
    }

    window.addEventListener("keydown", shiftFocus)

    return () => {
      window.removeEventListener("keydown", shiftFocus)
    }
  }, [])

  return (
    <MobileMenuContainer>
      <Wrapper onClick={toggle} aria-label="open menu">
        <Menu ref={menuRef}></Menu>
      </Wrapper>
      <MobileNavigation ref={navMenuRef}>
        <LinksContainer>
          <StyledLink to="/">Home</StyledLink>
          <AnchorLink
            href="ViswaTeja_cv_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Viswa Teja resume"
          >
            Resume
          </AnchorLink>
          <StyledLink to="/about" ref={aboutLinkRef}>
            About
          </StyledLink>
        </LinksContainer>
      </MobileNavigation>
    </MobileMenuContainer>
  )
}
