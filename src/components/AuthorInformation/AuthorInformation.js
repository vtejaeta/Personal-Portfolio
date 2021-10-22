import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"

const NameGradient = styled.span`
  font-size: 4rem;
  color: var(--author-name);

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

  color: var(--tagline-color);
  margin-bottom: 2.1rem;
`

const InfoLink = styled(Link)`
  font-size: 1.8rem;
  color: var(--invert-primary);

  margin-top: 2.1rem;
  padding: 1.1rem 0.7rem 0.5rem 0;
  border-bottom: 1px solid var(--invert-primary);

  cursor: pointer;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
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

const ForwardArrow = styled.span`
  color: var(--invert-primary);
  margin-left: 1px;
  margin-bottom: 0.3rem;

  height: 2.5rem;
  width: 2.5rem;

  position: relative;
  animation: ${bounce} 3s infinite;
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
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
        interactive user interfaces.
      </SmallDescription>
      <InfoLink to="/about" id="about" aria-label="Click to know more about me">
        <span>More about me</span>{" "}
        <ForwardArrow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </ForwardArrow>
      </InfoLink>
    </AuthorInfo>
  )
}
