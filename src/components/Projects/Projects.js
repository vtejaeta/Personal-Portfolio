import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import LiveUrl from "../Icons/LiveUrl"
import Github from "../Icons/Github"

const CardsContainer = styled.div`
  padding: 8rem 3.5rem;
  background-color: var(--footer-bg);

  @media only screen and (max-width: 767px) {
    padding: 8rem 4rem 4rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 6rem 3rem;
  }
`

const Card = styled.section`
  display: flex;

  min-height: 33rem;
  max-width: 85rem;
  overflow: hidden;

  margin: 1.2rem auto;
  border-top: 2px solid var(--footer-border);
  border-radius: 3px;

  @media only screen and (max-width: 1024px) {
    max-width: 85rem;
  }

  @media only screen and (max-width: 767px) {
    min-height: 25rem;
    flex-direction: column;
    padding: 2rem 0;
  }
`

const ImageWrapper = styled.div`
  flex: 0 0 57%;
  align-self: center;
  border: 1px solid var(--footer-border);
  animation-delay: 0.25s;
  transition-property: all;
  transition-duration: 0.65s;
  transition-timing-function: ease;
  transition-delay: 0s;

  @media only screen and (max-width: 767px) {
    ${"" /* display: none; */}
    order: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`

const Content = styled.div`
  flex: 2 2 43%;
  align-self: stretch;
  padding: 5rem 4rem 0 0;

  @media only screen and (max-width: 767px) {
    padding: 2rem 0 0 !important;
    order: 2;
  }

  @media only screen and (max-width: 450px) {
    padding: 2.8rem 0.8rem 0 !important;
  }
`

const Title = styled.h3`
  font-size: 2.6rem;
  margin-bottom: 2.7rem;
  color: var(--invert-primary);

  @media only screen and (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.7rem;
  color: var(--invert-primary);
`

const StyledList = styled.ul`
  display: inline-flex;
  color: var(--invert-primary);

  & > * {
    font-size: 1.4rem;
    margin-right: 1.5rem;
  }
`

const UtilityIcons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 12rem;
  margin-top: 2rem;
  padding-left: 0.3rem;

  & > * {
    margin-right: 2.3rem;
  }
`

const SectionHeading = styled.h2`
  font-size: 2.8rem;
  max-width: 85rem;
  margin: 0 auto;
  padding: 1rem 0;

  @media only screen and (max-width: 1024px) {
    max-width: 85rem;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  padding: 2rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MoreProjectsLink = styled.a`
  text-decoration: none;
`

const MoreProjects = styled.div`
  cursor: pointer;
  font-size: 1.6rem;
  letter-spacing: 1px;

  padding: 1.2rem 1.8rem;
  border: none;
  border-radius: 3px;

  color: var(--root-primary);
  background-color: var(--main-invert-bg);

  &:hover {
    opacity: 0.9;
  }
`

const ChallengeLink = styled.a`
  color: var(--author-name);
  font-weight: 600;
`

const Icons = styled.a`
  color: var(--invert-primary);
  padding: 0.3rem 0.8rem;
`

export default function Projects() {
  return (
    <CardsContainer id="Projects">
      <SectionHeading>
        <span role="img" aria-label="Launching">
          🚀
        </span>{" "}
        Projects
      </SectionHeading>
      <Card>
        <Content>
          <Title>Cinebasketry</Title>
          <Description>
            A Movie library web app to search and get movie details. Includes
            features like filter by category and genre.
          </Description>
          <StyledList>
            <li>React</li>
            <li>Typescript</li>
            <li>Bootstrap</li>
          </StyledList>
          <UtilityIcons>
            <Icons
              href="https://github.com/vtejaeta/Movie-library-TypeScript"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Cinebasketry Github link"
            >
              <Github />
            </Icons>
            <Icons
              href="https://movie-library-type-script.vercel.app/browse/popular/1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Cinebasketry live url"
            >
              <LiveUrl />
            </Icons>
          </UtilityIcons>
        </Content>
        <ImageWrapper>
          <StaticImage
            src="../../assets/images/movie-library.png"
            alt="Cinebasketry Web App"
          />
        </ImageWrapper>
      </Card>
      <Card>
        <ImageWrapper>
          <StaticImage
            src="../../assets/images/youtube-clone.png"
            alt="Youtube Web App Clone"
          />
        </ImageWrapper>
        <Content style={{ padding: "5rem 4rem" }}>
          <Title>Youtube Clone</Title>
          <Description>
            A Youtube Web App clone to find and watch videos from Youtube API.
            Dark mode UI is also available.
          </Description>
          <StyledList>
            <li>React</li>
            <li>Redux-Toolkit</li>
            <li>SCSS</li>
          </StyledList>
          <UtilityIcons>
            <Icons
              href="https://github.com/vtejaeta/youtube-clone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Youtube Clone Github link"
            >
              <Github />
            </Icons>
            <Icons
              href="https://youtube-clone-two-omega.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Youtube Clone live url"
            >
              <LiveUrl />
            </Icons>
          </UtilityIcons>
        </Content>
      </Card>
      <Card>
        <Content>
          <Title>Shortly</Title>
          <Description>
            A URL shortener web app built with the help of Bitly API. This
            website is solution to a{" "}
            <ChallengeLink
              href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit frontend mentor challenge link"
            >
              Frontend Mentor challenge
            </ChallengeLink>
          </Description>
          <StyledList>
            <li>React</li>
            <li>Express</li>
            <li>Mongodb</li>
          </StyledList>
          <UtilityIcons>
            <Icons
              href="https://github.com/vtejaeta/URL-shortening-app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Shortly Github link"
            >
              <Github />
            </Icons>
            <Icons
              href="https://shortly-url-react.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Shorlty live url"
            >
              <LiveUrl />
            </Icons>
          </UtilityIcons>
        </Content>
        <ImageWrapper>
          <StaticImage
            src="../../assets/images/shortly-url-shortener.png"
            alt="Shortly URL shortening Web App"
          />
        </ImageWrapper>
      </Card>
      <ButtonContainer>
        <MoreProjectsLink
          href="https://github.com/vtejaeta?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Github Link for more projects"
        >
          <MoreProjects>
            More Projects{" "}
            <span role="img" aria-label="Launching more projects">
              🚀
            </span>
          </MoreProjects>
        </MoreProjectsLink>
      </ButtonContainer>
    </CardsContainer>
  )
}
