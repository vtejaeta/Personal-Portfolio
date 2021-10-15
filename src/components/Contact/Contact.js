import React, { useState } from "react"
import styled from "styled-components"

import sendEmail, { isEmailValid } from "../../utils/email.utils"

const CardContainer = styled.div`
  max-width: 35rem;

  border: none;
  border-radius: 5px;
  padding: 4rem;

  @media only screen and (max-width: 767px) {
    padding: 2rem;
  }
`

const ProgressTagLine = styled.h2`
  font-size: 2.3rem;
  color: var(--invert-primary);

  margin-bottom: 1.2rem;
`

const ContactFormContainer = styled.div``

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin-bottom: 1.7rem;
  }
`

const Section = styled.div`
  display: flex;
  justify-content: space-between;

  ${props =>
    props.flag &&
    `
    @media only screen and (max-width:450px) {
      margin-bottom: 0;
      flex-direction: column;

      & > * {
        margin-bottom: 1.7rem;
      }
    }
  `}
`

const Input = styled.input`
  font-size: 1.6rem;
  color: var(--invert-primary);
  background-color: var(--footer-bg);

  width: 100%;
  margin-top: 0.4rem;
  padding: 1.2rem;
  border: 1px solid var(--input-border);
  border-radius: 3px;
`

const TextArea = styled.textarea`
  font-family: inherit;
  font-size: 1.6rem;

  min-height: 9rem;
  width: 100%;

  border: 1px solid var(--input-border);
  border-radius: 3px;

  margin-top: 0.4rem;
  padding: 1.2rem;
  color: var(--invert-primary);
  background-color: var(--footer-bg);
`

const FieldLabel = styled.label`
  display: none;
`

const NameField = styled.div`
  flex: 0 0 45%;
`

const EmailField = styled.div`
  flex: 0 0 45%;
`

const ErrorLabel = styled.span`
  color: var(--error-response);
  margin-top: 3px;
`

const SendButton = styled.button`
  cursor: pointer;
  font-size: 1.6rem;

  align-self: flex-start;

  border: none;
  border-radius: 3px;
  padding: 1.2rem 2.1rem;

  color: var(--root-primary);
  background-color: var(--main-invert-bg);

  &:hover {
    opacity: 0.8;
  }
`

const Response = styled.p`
  margin-top: 3px;
  color: var(--invert-primary);
`

export default function Contact() {
  let [senderInfo, setSenderInfo] = useState({
    subject: "",
    username: "",
    email: "",
    message: "",
  })

  let [errorObject, setErrorObject] = useState({
    subjectError: null,
    usernameError: null,
    emailError: null,
    messageError: null,
  })

  let [emailRes, setEmailRes] = useState({
    errorMessage: null,
    response: null,
    alreadySent: false,
  })

  let { subject, username, email, message } = senderInfo
  let { subjectError, usernameError, emailError, messageError } = errorObject
  let { errorMessage, response, alreadySent } = emailRes

  function FormSubmit(e) {
    e.preventDefault()

    if (alreadySent) {
      alert(
        "Sorry! I have limited mails to only one per user, please try contacting through Linkedin or Twitter, Thanks"
      )
      setSenderInfo({
        subject: "",
        username: "",
        email: "",
        message: "",
      })
      return
    }

    if (
      subjectError === null ||
      usernameError === null ||
      emailError === null ||
      messageError === null
    ) {
      setErrorObject(
        ({ subjectError, usernameError, emailError, messageError }) => ({
          subjectError: subjectError === false ? false : true,
          usernameError: usernameError === false ? false : true,
          emailError: emailError === false ? false : true,
          messageError: messageError === false ? false : true,
        })
      )
      return
    }

    if (!subjectError && !usernameError && !emailError && !messageError) {
      sendEmail(senderInfo).then(({ response, errorMessage }) => {
        setEmailRes({
          errorMessage,
          response,
          alreadySent: response && response.status === 200 ? true : false,
        })
      })

      // Clean-up
      setSenderInfo({
        subject: "",
        username: "",
        email: "",
        message: "",
      })
      setErrorObject({
        subjectError: null,
        usernameError: null,
        emailError: null,
        messageError: null,
      })
    }
  }

  return (
    <>
      <CardContainer id="Contact">
        <ProgressTagLine>Let's build progress together</ProgressTagLine>
        <ContactFormContainer>
          <ContactForm onSubmit={FormSubmit}>
            <Section flag>
              <NameField>
                <FieldLabel htmlFor="username">Name:</FieldLabel>
                <Input
                  type="text"
                  id="username"
                  placeholder="Name"
                  aria-label="Enter name"
                  autoComplete="off"
                  value={username}
                  onChange={e => {
                    setErrorObject(state => ({
                      ...state,
                      usernameError:
                        e.target.value.trim().length > 2 ? false : true,
                    }))
                    setSenderInfo(state => ({
                      ...state,
                      username: e.target.value,
                    }))
                  }}
                />
                {usernameError === true && (
                  <ErrorLabel aria-label="Please don't leave this field blank">
                    Required
                  </ErrorLabel>
                )}
              </NameField>
              <EmailField>
                <FieldLabel htmlFor="email">Email:</FieldLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  aria-label="Enter email"
                  autoComplete="off"
                  value={email}
                  onChange={e => {
                    setErrorObject(state => ({
                      ...state,
                      emailError: isEmailValid(e.target.value) ? false : true,
                    }))
                    setSenderInfo(state => ({
                      ...state,
                      email: e.target.value,
                    }))
                  }}
                />
                {emailError === true && (
                  <ErrorLabel aria-label="Please don't leave this field blank">
                    Invalid
                  </ErrorLabel>
                )}
              </EmailField>
            </Section>
            <Section
              style={{ flexDirection: "column", justifyContent: "center" }}
            >
              <FieldLabel htmlFor="subject">Subject:</FieldLabel>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                aria-label="Enter subject"
                autoComplete="off"
                value={subject}
                onChange={e => {
                  setErrorObject(state => ({
                    ...state,
                    subjectError:
                      e.target.value.trim().length > 2 ? false : true,
                  }))
                  setSenderInfo(state => ({
                    ...state,
                    subject: e.target.value,
                  }))
                }}
              />
              {subjectError === true && (
                <ErrorLabel aria-label="Please don't leave this field blank">
                  Required
                </ErrorLabel>
              )}
            </Section>
            <FieldLabel htmlFor="message">Message:</FieldLabel>
            <TextArea
              id="message"
              placeholder="Message"
              aria-label="Enter Message"
              value={message}
              onChange={e => {
                setErrorObject(state => ({
                  ...state,
                  messageError: e.target.value.trim().length > 2 ? false : true,
                }))
                setSenderInfo(state => ({
                  ...state,
                  message: e.target.value,
                }))
              }}
            />
            {messageError === true && (
              <ErrorLabel aria-label="Please don't leave this field blank">
                Required
              </ErrorLabel>
            )}
            <SendButton type="submit">Send</SendButton>
          </ContactForm>
          {response && response.status === 200 && (
            <Response>✓ Email sent successfully</Response>
          )}
          {errorMessage && errorMessage.status !== 200 && (
            <Response>{errorMessage.text}</Response>
          )}
        </ContactFormContainer>
      </CardContainer>
    </>
  )
}