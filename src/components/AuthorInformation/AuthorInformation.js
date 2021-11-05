import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"

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
  color: var(--invert-primary);

  margin-top: 3rem;

  cursor: pointer;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--author-name);
  color: var(--root-primary);
  padding: 1rem 1.2rem;
  border: 1px solid grey;
  border-radius: 22px;
`

const bounce = keyframes`
  0% {
      left: 0
  }

  20% {
      left: 10px
  }

  40% {
      left: 0
  }

  to {
      left: 0
  }
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
      <InfoLink to="/about" id="about" aria-label="Click to know more about me">
        More about me
      </InfoLink>
    </AuthorInfo>
  )
}
