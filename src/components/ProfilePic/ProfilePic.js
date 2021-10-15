import React from "react"

import styled from "styled-components"

import ProfilePicRound from "../../assets/images/profile-pic-round.png"

const RoundPic = styled.img`
  background-color: rgb(40, 28, 77);
  border-radius: 100%;

  display: ${props => (props.showImg ? "block" : "none")};
  position: absolute;
  height: 5rem;
  width: 5rem;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

export default function ProfilePic({ showImg }) {
  return (
    <RoundPic
      src={ProfilePicRound}
      alt="Viswa Teja E. rounded profile image"
      showImg={showImg}
    />
  )
}
