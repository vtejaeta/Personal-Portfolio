import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  position: relative;

  margin: 2rem auto;
  padding: 1.5rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 95%;
    padding-right: 0;
    margin-right: 0;

    & > * {
      margin-bottom: 2rem;
    }
  }

  &::before {
    content: ${({ id }) => {
      switch (id) {
        case 1:
          return `url(work_office.svg)`
        case 2:
          return `url(internship.svg)`
        case 3:
          return `url(education.svg)`
      }
    }};

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    background-color: var(--secondary);

    margin-left: 37%;
    border: 1px solid var(--secondary);
    border-radius: 50%;
    padding: 2rem;

    z-index: 1;

    font-size: 5px;
    font-weight: 600;

    height: 24px;
    width: 24px;
    text-align: center;

    @media only screen and (max-width: 800px) {
      margin-left: -6.5rem;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: calc(100%);
    background-color: var(--line-border);
    margin-left: 39.5%;
    margin-top: 4.3rem;

    @media only screen and (max-width: 800px) {
      margin-left: -4.5rem;
    }
  }
`

const OrganisationDetails = styled.div({
  flex: "0 0 30%",
  // border: "1px solid black",

  "@media only screen and (max-width:800px)": {
    flex: "0 0 40%",
  },
})

const EmploymentDetails = styled.div({
  flex: "0 0 50%",
  // border: "1px solid black",

  "@media only screen and (max-width:800px)": {
    flex: "0 0 40%",
  },
})

export default function ExperienceCard({
  organisationName,
  timePeriod,
  designation,
  description,
  id = 1,
}) {
  return (
    <CardContainer id={id}>
      <OrganisationDetails>
        <h3
          style={{
            color: "var(--work-exp-main)",
          }}
        >
          {organisationName}
        </h3>
        <span
          style={{
            color: "var(--work-exp-main)",
            opacity: 0.7,
          }}
        >
          {timePeriod}
        </span>
      </OrganisationDetails>
      <EmploymentDetails>
        <h3
          style={{
            color: "var(--work-exp-main)",
          }}
        >
          {designation}
        </h3>
        <p
          style={{
            color: "var(--work-exp-main)",
            opacity: 0.8,
            marginTop: "0.7rem",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </EmploymentDetails>
    </CardContainer>
  )
}
