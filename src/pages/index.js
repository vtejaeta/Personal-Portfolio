import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import AuthorInformation from "../components/AuthorInformation/AuthorInformation"
import NavBar from "../components/NavBar/NavBar"
import Projects from "../components/Projects/Projects"

import { Banner } from "../styled/Banner"
import { GlobalStyles } from "../styled/GlobalStyles"

import Footer from "../components/Footer/Footer"
import WorkExperience from "../components/WorkExperience/WorkExperience"

const MainFlexContainer = styled.div`
  padding: 10rem 4rem;
  margin: 0 auto 7rem;

  max-width: 85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding: 4rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 4rem 3rem;
  }
`

const Wrapper = styled.div`
  height: 45%;
  width: 45%;

  z-index: 0;

  @media only screen and (max-width: 767px) {
    order: 1;
    height: 50%;
    width: 50%;
  }

  @media only screen and (max-width: 550px) {
    order: 1;
    height: 75%;
    width: 75%;
  }
`

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = ""
  }, [])

  return (
    <>
      <GlobalStyles />
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Viswa Teja E. | Frontend Web developer</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Viswa Teja E., passionate self taught Web Frontend developer"
        ></meta>
        <meta name="theme-color" content="#c8c5e2" />
      </Helmet>
      <Banner>
        <NavBar showImg={false} skipLinkId="/#about" />
        <MainFlexContainer>
          <AuthorInformation />
          <Wrapper>
            <StaticImage
              src="../assets/images/fixing-bugs-illustration.svg"
              alt="Viswa Teja E. fixing bugs"
              height={400}
              width={400}
            ></StaticImage>
          </Wrapper>
        </MainFlexContainer>
        <WorkExperience />
        <Projects />
        <Footer />
      </Banner>
    </>
  )
}
