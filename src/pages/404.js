import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import { GlobalStyles } from "../styled/globalStyles"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home = styled(Link)`
  cursor: pointer;
  font-size: 1.6rem;
  letter-spacing: 1px;

  margin: 1.9rem;
  border: none;
  border-radius: 3px;
  padding: 0.8rem 1.2rem;
  
  color: #1f2028;
  background-color: white;
  border: 1px solid #1f2028;

  &:hover{
    color: white;
    background-color: #1f2028;
  }
}
`

export default function RouteNotFound() {
  return (
    <>
      <GlobalStyles />
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Not found</title>
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
      <Container>
        <h1 style={{ fontSize: "6.4rem" }}>404</h1>
        <p>Sorry, page you are looking for is currently unavailable.</p>
        <Home to="/">Go Home</Home>
      </Container>
    </>
  )
}
