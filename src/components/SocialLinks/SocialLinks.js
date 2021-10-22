import React from "react"
import styled from "styled-components"
import Github from "../Icons/Github"
import Linkedin from "../Icons/Linkedin"
import Twitter from "../Icons/Twitter"

const SocialIconsContainer = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`
const SocialIcon = styled.a`
  padding: 1.1rem 1.3rem;
  color: var(--invert-primary);

  &:hover {
    color: ${props => props.hoverColor};
  }
`

export default function SocialLinks() {
  return (
    <SocialIconsContainer>
      <SocialIcon
        href="https://www.linkedin.com/in/viswa-teja-69b307189"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Linkedin profile"
        hoverColor="#0077b5"
      >
        <Linkedin />
      </SocialIcon>
      <SocialIcon
        href="https://github.com/vtejaeta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Github profile"
        hoverColor="grey"
      >
        <Github />
      </SocialIcon>
      <SocialIcon
        href="https://twitter.com/vtejaeta9493"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Twitter profile"
        hoverColor="#1DA1F2"
      >
        <Twitter />
      </SocialIcon>
    </SocialIconsContainer>
  )
}
