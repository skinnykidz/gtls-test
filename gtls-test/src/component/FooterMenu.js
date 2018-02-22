import React from 'react'
import styled from 'styled-components'
import { theme } from './../theme.js'

const FooterMenuContainer = styled.div`
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
  > a {
    color: ${props => props.theme.footerColor};
    cursor: pointer;
    margin-bottom: 5px;
    &:hover {
      color: ${props => props.theme.footerColor};
    }
  }
`

export default class FooterMenu extends React.Component {
  render() {
    return (
      <FooterMenuContainer theme={theme}>
        <p>{this.props.title}</p>
        {
          this.props.links.map((link) => (
            <a>{link}</a>
          ))
        }
      </FooterMenuContainer>
    )
  }
}