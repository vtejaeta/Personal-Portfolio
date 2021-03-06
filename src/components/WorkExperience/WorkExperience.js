import React from "react"
import styled from "styled-components"
import ExperienceCard from "../ExperienceCard/ExperienceCard"

const Wrapper = styled.div`
  background: var(--secondary);
`

const ExperienceContainer = styled.div`
  padding: 6rem 4rem;
  margin: 0 auto;
  max-width: 85rem;
  @media only screen and (max-width: 450px) {
    padding: 6rem 3rem;
  }
`

const SectionHeadline = styled.h2`
  text-align: center;
  color: var(--on-tertiary);
  font-size: 2.8rem;
`

const DotsContainer = styled.div`
  position: relative;
  height: 40px;

  @media only screen and (max-width: 800px) {
    width: 95%;
    margin: 2rem auto;
    padding: 1.5rem 3rem;
    padding-right: 0;
    margin-right: 0;
    height: 60px;
  }
`

const MoreIllustration = styled.div`
  position: absolute;
  width: 30px;
  background: var(--secondary);
  height: 30px;
  margin-left: calc(39.5% + 16px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    margin-left: calc(-4.5rem - 13px);
  }
`

const Dot = styled.div`
  height: 5px;
  width: 5px;
  background-color: var(--seperator);
  margin: 2px;
  border-radius: 50%;
`

export default function WorkExperience() {
  return (
    <Wrapper>
      <ExperienceContainer>
        <SectionHeadline>My Work Experience</SectionHeadline>
        <ExperienceCard
          organisationName="Virtusa Consulting Services PVT LTD"
          timePeriod="Nov 2020 - Present"
          designation="Engineer Technology"
          description="Automated test cases for Shakedown, Performance and Regression test suites and was able to
          increase the automation coverage from 85% to 95%."
          id={1}
        ></ExperienceCard>
        <ExperienceCard
          organisationName="Hivericks Technologies  PVT LTD"
          timePeriod="May 2019 - July 2019"
          designation="Intern"
          description="Worked on project titled Power Analysis of a Mobile Battery & Automated devices using Machine learning algorithms. Implemented various algorithms for the analysis by understanding prediction models."
          id={2}
        ></ExperienceCard>
        <ExperienceCard
          organisationName="National Institute of Technology Meghalaya"
          timePeriod="Jul 2016 - May 2020"
          designation="E.C.E Undergrad"
          description="Graduated from National Institute of Meghalaya under the branch Electronics and Communication Engineering."
          id={3}
        ></ExperienceCard>
        <DotsContainer>
          <MoreIllustration>
            <Dot />
            <Dot />
            <Dot />
          </MoreIllustration>
        </DotsContainer>
      </ExperienceContainer>
    </Wrapper>
  )
}
