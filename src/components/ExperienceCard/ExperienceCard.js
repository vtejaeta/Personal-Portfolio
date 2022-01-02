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
    content: "";
    position: absolute;

    background-image: ${({ id }) => {
      switch (id) {
        case 1:
          return `url(work_office.svg)`
        case 2:
          return `url(internship.svg)`
        case 3:
          return `url(education.svg)`
      }
    }};
    background-color: #cee4fe;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 25px 25px;

    margin-left: 37%;
    border-radius: 50%;
    padding: 2rem;

    z-index: 1;

    @media only screen and (max-width: 800px) {
      margin-left: -6.5rem;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: calc(100%);
    background-color: var(--seperator);
    margin-left: 39.5%;
    margin-top: 4.3rem;

    @media only screen and (max-width: 800px) {
      margin-left: -4.5rem;
    }
  }
`

const OrganisationDetails = styled.div`
  flex: 0 0 30%;

  @media only screen and (max-width: 800px) {
    flex: 0 0 40%;
  }
`

const EmploymentDetails = styled.div`
  flex: 0 0 50%;

  @media only screen and (max-width: 800px) {
    flex: 0 0 40%;
  }
`

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
            color: "var(--on-secondary)",
          }}
        >
          {organisationName}
        </h3>
        <span
          style={{
            color: "var(--on-secondary)",
            opacity: 0.7,
          }}
        >
          {timePeriod}
        </span>
      </OrganisationDetails>
      <EmploymentDetails>
        <h3
          style={{
            color: "var(--on-secondary)",
          }}
        >
          {designation}
        </h3>
        <p
          style={{
            color: "var(--on-secondary)",
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
