import { Link } from "gatsby"
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import NavBar from "../components/NavBar/NavBar"
import { Banner } from "../styled/Banner"
import { GlobalStyles } from "../styled/GlobalStyles"

const AboutMeContainer = styled.div`
  max-width: 85rem;
  margin: 7rem auto 1.2rem;
  padding: 4rem 4rem 2.1rem;

  background-color: var(--footer-bg);
`

const HeadLine = styled.h1`
  font-size: 3rem;
`

const AboutMe = styled.div`
  padding: 3rem 0;
`

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 27px;
  margin-bottom: 2.7rem;
`

const Skills = styled.div`
  padding: 4rem 0;
`

const SkillsHeading = styled.h2`
  font-size: 2rem;
  padding: 1.5rem 0;
`

const UnOrderedList = styled.ul`
  list-style: circle;
`

const List = styled.li`
  padding: 0.8rem 0;
`

const StyledLink = styled(Link)`
  letter-spacing: 1px;
  padding: 1.2rem 1.8rem;
  border-radius: 3px;

  background: var(--primary);
  color: var(--on-primary);

  &:hover {
    opacity: 0.9;
  }
`

const Categories = styled.span`
  font-weight: 500;
`

export default function About() {
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
        <NavBar showImg={true} skipLinkId="/about#contact" />
        <AboutMeContainer>
          <HeadLine>Hi I'm Viswa Teja</HeadLine>
          <AboutMe>
            <Paragraph>
              I'm a Frontend Web developer from India, with primary focus on
              building interactive and responsive user interfaces. I was
              graduated from National Institute of Technology Meghalaya under
              Electronics and Communication Engineering in 2020.
            </Paragraph>
            <Paragraph>
              Currently I am working with Virtusa Consulting Services Private
              Limited as Engineer-Technology. I do believe that best way to gain
              expertise in a field is, to actually have correct mental model of
              its functionality and getting a hands on experience of it. I like
              to explore various libraries and tools for better understanding of
              tradeoffs between them. I love building side projects on my free
              time primarily with JavaScript.
            </Paragraph>
            <Skills>
              <SkillsHeading>Languages and Technologies</SkillsHeading>
              <UnOrderedList>
                <List>
                  <Categories>Programming Languages: </Categories>JavaScript
                </List>
                <List>
                  <Categories>Markup: </Categories>HTML5
                </List>
                <List>
                  <Categories>Styling: </Categories>CSS3, Sass, Styled
                  Components
                </List>
                <List>
                  <Categories>UI Library: </Categories>Bootstrap, Material UI
                </List>
                <List>
                  <Categories>JavaScript Library: </Categories>React
                </List>
                <List>
                  <Categories>State Management: </Categories>Redux, Redux
                  Toolkit, Context, redux-thunk
                </List>
                <List>
                  <Categories>Testing: </Categories>Jest, React Testing Library
                </List>
              </UnOrderedList>
              <p style={{ padding: "0.8rem 0" }}>
                *Familiar with TypeScript, MongoDB, Express, Node
              </p>
            </Skills>
            <StyledLink to="/#Contact" id="contact">
              Contact Me
            </StyledLink>
          </AboutMe>
        </AboutMeContainer>
      </Banner>
    </>
  )
}
