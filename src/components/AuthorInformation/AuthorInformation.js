import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NameGradient = styled.span`
  font-size: 4rem;

  @media only screen and (max-width: 460px) {
    font-size: 3.2rem;
  }
`

const HeadLine = styled.h1`
  font-size: 3rem;
`

const TagLine = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 2px;

  color: var(--tagline-color);
  margin-bottom: 2.1rem;
`

const InfoLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 400;

  margin-top: 3rem;
  border-radius: 3px;
  padding: 1rem 1.2rem;

  cursor: pointer;
  background: #087ea4;
  color: white;
`

const AuthorInfo = styled.main`
  width: 39rem;

  grid-column-start: 3;
  grid-column-end: 5;

  @media only screen and (max-width: 767px) {
    order: 2;
    width: 100%;
    margin-top: 4rem;
  }
`

const SmallDescription = styled.p`
  line-height: 2.6rem;
`

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default function AuthorInformation() {
  return (
    <AuthorInfo>
      <HeadLine>
        Hi I'm <NameGradient>Viswa Teja</NameGradient>
      </HeadLine>
      <TagLine>FRONTEND WEB DEVELOPER</TagLine>
      <SmallDescription>
        Passionate self taught web developer with primary focus on building
        interactive and responsive user interfaces.
      </SmallDescription>
      <ButtonsContainer>
        <InfoLink
          to="/about"
          id="about"
          aria-label="Click to know more about me"
        >
          Know more
        </InfoLink>
        <InfoLink
          as="a"
          href="/#Contact"
          aria-label="Fill in the form to contact me"
          style={{
            marginLeft: "3rem",
            backgroundColor: "transparent",
            color: "var(--invert-primary)",
            border: "1px solid #087ea4",
          }}
        >
          Contact
        </InfoLink>
      </ButtonsContainer>
    </AuthorInfo>
  )
}
