import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NameGradient = styled.span`
  font-size: 4rem;
  color: var(--author-name);

  @media only screen and (max-width: 420px) {
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
  background-color: transparent;

  margin-top: 2.1rem;
  padding: 1.2rem 0 0.8rem 0.3rem;
  border-bottom: 1px solid var(--invert-primary);

  cursor: pointer;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ForwardArrow = styled.span`
  color: var(--invert-primary);
  margin-left: 1px;

  height: 2.5rem;
  width: 2.5rem;
`

const AuthorInfo = styled.main`
  width: 39rem;

  grid-column-start: 3;
  grid-column-end: 5;

  @media only screen and (max-width: 650px) {
    max-width: 100%;
  }
`

export default function AuthorInformation() {
  return (
    <AuthorInfo>
      <HeadLine>
        Hi I'm <NameGradient>Viswa Teja</NameGradient>
      </HeadLine>
      <TagLine>FRONTEND WEB DEVELOPER</TagLine>
      <p>
        Passionate self taught web developer with primary focus on building
        interactive user interfaces.
      </p>
      <InfoLink to="/about" id="about">
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
