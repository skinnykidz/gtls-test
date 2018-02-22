import React from 'react'
import styled from 'styled-components'
import { theme } from './../theme.js'

const CardContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 4px;
  overflow: hidden;
  font-family: ${props => props.theme.cardFont};
  font-size: 14px;
  margin: 10px;
  box-shadow: ${props => props.theme.cardShadowColor};
  > img {
    width: 100%;
  }
  > div {
    padding: 15px;
    text-align: left;
    > p {
      margin: 15px 0 0;
      &.title {
        text-transform: uppercase;
        color: ${props => props.theme.cardFontColor};
        margin: 0;
        font-size: 18px;
        font-weight: bold;
      }
    }
    > span {
      font-size: 12px;
      font-weight: 100;
      color: ${props => props.theme.cardCreatedAtColor};
    }  
  }
  &:hover {
    cursor: pointer;
    box-shadow: ${props => props.theme.cardShadowHoberColor};
    transition: box-shadow 0.3s ease-in-out;
  }
`

export default class CardWithDescription extends React.Component {
  render() {
    return (
      <CardContainer theme={theme}>
        <img src={this.props.contentDetail.imgUrl ? this.props.contentDetail.imgUrl : 'http://unsplash.it/1200/630'} />
        <div>
          <p className={'title'}>{this.props.contentDetail.title}</p>
          <span>{this.props.contentDetail.createdAt} by {this.props.contentDetail.writer.name}</span>
          <p>{this.props.contentDetail.description}</p>
        </div>
      </CardContainer>
    )
  }
}