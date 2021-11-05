import React from "react"
import styled from "styled-components"
import Contact from "../Contact/Contact"
import SocialLinks from "../SocialLinks/SocialLinks"

const FooterContainer = styled.div`
  width: 100%;
  margin-top: 7rem;
`

const FooterElement = styled.footer`
  max-width: 85rem;
  width: 100%;

  margin: 0 auto;
  padding: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 1.2rem;
  }
`

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`

const ContactContainer = styled.div``

const FooterCredits = styled.p`
  text-align: center;
  color: var(--invert-primary);
  padding: 2rem;
`

const FooterName = styled.a`
  color: var(--invert-primary);
  letterspacing: "1px";
`

const GoTopLink = styled.a`
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--invert-primary);

  display: inline-block;
  text-align: center;

  width: fit-content;
  margin: 1.3rem auto;
  padding: 1rem;
  border-bottom: 1px solid #a000ff;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterElement>
        <ContactContainer>
          <Contact />
        </ContactContainer>
        <SocialLinksContainer>
          <SocialLinks />
          <GoTopLink href="#top" aria-label="Scroll to top of the page">
            Go Top{" "}
            <span role="img" aria-label="Click to go to top of page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 18 18"
                height="18px"
                viewBox="0 0 18 18"
                width="24px"
                fill="currentColor"
                fillRule="evenodd"
              >
                <rect fill="none" height="18" width="18" />
                <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
              </svg>
            </span>
          </GoTopLink>
        </SocialLinksContainer>
      </FooterElement>
      <FooterCredits>
        Built with{" "}
        <span role="img" aria-label="Love">
          💙
        </span>{" "}
        by{" "}
        <FooterName
          href="https://github.com/vtejaeta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Github"
        >
          Viswa Teja E.
        </FooterName>
      </FooterCredits>
    </FooterContainer>
  )
}
