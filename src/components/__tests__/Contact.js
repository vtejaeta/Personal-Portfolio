import React from "react"
import { render } from "@testing-library/react"
import { screen, fireEvent } from "@testing-library/dom"

import Contact from "../Contact/Contact"
import { sendEmail, isEmailValid } from "../../utils/email.utils"

// Only one fn partial mock implementation, present in email.utils.js file
jest.mock("../../utils/email.utils", () => {
  const originalModule = jest.requireActual("../../utils/email.utils")

  return {
    __esModule: true,
    ...originalModule,
    sendEmail: jest.fn(({ subject, username, email, message }) => {
      if (!subject || !username || !email || !message) {
        return {
          errorMessage: {
            status: 404,
            text: "Something went wrong",
          },
          response: {
            status: 404,
          },
        }
      } else {
        return {
          errorMessage: {
            status: 200,
            text: "",
          },
          response: {
            status: 200,
          },
        }
      }
    }),
  }
})

test("should have values in input fields", () => {
  render(<Contact />)

  let username = screen.getByRole("textbox", { name: /enter name/i })
  let email = screen.getByRole("textbox", { name: /enter email/i })
  let subject = screen.getByRole("textbox", { name: /enter subject/i })
  let message = screen.getByRole("textbox", { name: /enter message/i })

  expect(username).not.toHaveTextContent()
  expect(email).not.toHaveTextContent()
  expect(subject).not.toHaveTextContent()
  expect(message).not.toHaveTextContent()

  fireEvent.change(username, { target: { value: "Viswa" } })
  expect(username.value).toBe("Viswa")
})

test("Should not send email on incorrect email", () => {
  let errorResult = sendEmail({
    username: "Viswa",
    email: "test@gmail.com",
    subject: "",
    message: "Hello",
  })

  expect(errorResult).toEqual({
    errorMessage: {
      status: 404,
      text: "Something went wrong",
    },
    response: {
      status: 404,
    },
  })

  let successResult = sendEmail({
    username: "Viswa",
    email: "viswa",
    subject: "Test",
    message: "Awesome mock testing",
  })

  expect(successResult).toEqual({
    errorMessage: {
      status: 200,
      text: "",
    },
    response: {
      status: 200,
    },
  })
})

test("should return false for wrong emails", () => {
  expect(isEmailValid("test")).toBeFalsy()
  expect(isEmailValid("testing@")).toBeFalsy()

  expect(isEmailValid("testing@gmail.com")).toBeTruthy()
  expect(isEmailValid("testing@abb.cc")).toBeTruthy()

  expect(isEmailValid("testing@z.c")).toBeFalsy()
})
