import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import AuthorInformation from "../components/AuthorInformation/AuthorInformation"
import NavBar from "../components/NavBar/NavBar"
import Projects from "../components/Projects/Projects"

import { Banner } from "../styled/Banner"
import { GlobalStyles } from "../styled/globalStyles"

import Footer from "../components/Footer/Footer"

const MainFlexContainer = styled.div`
  padding: 18rem 4rem 0;
  margin: 0 auto 18rem;

  max-width: 85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 767px) {
    display: block;
  }

  @media only screen and (max-width: 450px) {
    padding: 18rem 3rem 0;
  }
`

const BlobContainer = styled.div`
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjk4IiBoZWlnaHQ9IjY4OSIgdmlld0JveD0iMCAwIDY5OCA2ODkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzU2LjM5NiAxLjg3MTg3QzQ1OC42NzcgLTExLjkxNDEgNTU1LjQ4MSA1Mi4zMTgzIDYxOS44NjQgMTMyLjk4MUM2ODQuMjgyIDIxMy42ODggNzEzLjMwNiAzMTguNjM4IDY4OS40MTQgNDE5LjA5OUM2NjUuNzc1IDUxOC40OTYgNTkwLjQ4OSA1OTMuNzU4IDQ5OS4zMTQgNjM5Ljg2MkM0MDUuNTMxIDY4Ny4yODQgMjk3LjI4OSA3MDcuODMgMjAwLjgwOSA2NjYuMTY3Qzk5LjY3MzMgNjIyLjQ5NCA3LjY2NTg2IDUzNC4yODQgMC4yOTA5ODggNDI0LjM2OEMtNi40MTkyOSAzMjQuMzU3IDEwNC41MTIgMjcwLjM3OCAxNjkuMTExIDE5My43MzVDMjI5LjcxIDEyMS44MzkgMjYzLjIxIDE0LjQzMTkgMzU2LjM5NiAxLjg3MTg3WiIgZmlsbD0iIzE4MjQ4QyIvPgo8L3N2Zz4K");
  background-repeat: no-repeat;
  background-position: 2rem 3rem;
  background-size: 75%;

  position: absolute;
  top: -3rem;
`

const Wrapper = styled.div`
  position: relative;

  height: 25rem;
  width: 25rem;

  z-index: 0;

  grid-column-start: 7;
  grid-column-end: 9;

  @media only screen and (max-width: 767px) {
    display: none;
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
        <title>Viswa Teja E. | Software Engineer</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Viswa Teja E., passionate self taught Web Frontend developer"
        ></meta>
        <meta name="theme-color" content="#5D03FC" />
      </Helmet>
      <Banner>
        <NavBar showImg={false} skipLinkId="/#about" />
        <MainFlexContainer>
          <AuthorInformation />
          <Wrapper>
            <BlobContainer>
              <StaticImage
                src="../assets/images/Solo_pic.png"
                alt="Viswa Teja E."
                height={400}
                width={400}
              ></StaticImage>
            </BlobContainer>
          </Wrapper>
        </MainFlexContainer>
        <Projects />
        <Footer />
      </Banner>
    </>
  )
}
