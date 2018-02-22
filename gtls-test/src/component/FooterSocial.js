import React from 'react'
import styled from 'styled-components'
import { theme } from './../theme.js'

const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: ${props => props.theme.footerColor};
  > p {
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    > button {
      border-radius: 3px;
      color: ${props => props.theme.footerSocialBg};
      outline: 0;
      border: 0;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      > span {
        font-family: 'fontAwesome';
      }
    }
  }
`

export default class FooterSocial extends React.Component {
  render() {
    return (
      <FooterSocialContainer theme={theme}>
        <p>{this.props.title}</p>
        <div>
          <button><span className={'fa', 'fa-facebook-f'}/></button>
          <button><span className={'fa', 'fa-twitter'}/></button>
          <button><span className={'fa', 'fa-linkedin'}/></button>
        </div>
      </FooterSocialContainer>
    )
  }
}