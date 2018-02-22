import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled, { ThemeProvider } from 'styled-components'
import { Grid, Row, Col, Jumbotron, Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { theme } from './theme.js'

import Card from './component/Card.js'
import FooterMenu from './component/FooterMenu.js'
import FooterSocial from './component/FooterSocial.js'

const fakeData = [
  {
    title: 'Best Practices for Minimalist Design',
    description: 'With the growing use of mobile devices, minimalism is on the rise. Minimalism brings ...',
    createdAt: '21 Dec 2017',
    imgUrl: 'http://unsplash.it/1200/630?random=9',
    writer: {
      avatar: 'http://unsplash.it/1200/630?image=9',
      name: 'Luca Longo'
    }
  },
  {
    title: 'UX Login, Register and Password',
    description: 'Today I want to go through a very common problem for designers: the UX of Login, Register and Password ...',
    createdAt: '28 Dec 2017',
    imgUrl: 'http://unsplash.it/1200/630?random=7',
    writer: {
      avatar: 'http://unsplash.it/1200/630?image=6',
      name: 'Kartik Rao'
    }
  },
  {
    title: 'How Pinterest could change the future of Search',
    description: 'For decades we have fiddled away with our keyboards inputting text into a blank ...',
    createdAt: '19 Jan 2018',
    imgUrl: 'http://unsplash.it/1200/630?random=5',
    writer: {
      avatar: 'http://unsplash.it/1200/630?image=6',
      name: 'Jack Strachan'
    }
  },
  {
    title: '12 Mobile UX Design Trends For 2018',
    description: 'Things move quickly in the mobile app universe. To succeed in the field of ...',
    createdAt: '21 Jan 2018',
    imgUrl: 'http://unsplash.it/1200/630?random=2',
    writer: {
      avatar: 'http://unsplash.it/1200/630?image=11',
      name: 'Nick Babich'
    }
  },
  {
    title: 'Mobile APP failure: TOP 6 reasons why it happens',
    description: 'Small-scale mobile app development will cost you up to $8,000, while gaming app ...',
    createdAt: '11 Feb 2018',
    imgUrl: 'http://unsplash.it/1200/630?random=0',
    writer: {
      avatar: 'http://unsplash.it/1200/630?image=10',
      name: 'Maria Kurg'
    }
  },
  {
    title: 'Best Practices for Minimalist Design',
    description: 'With the growing use of mobile devices, minimalism is on the rise. Minimalism brings additional benefits to apps ...',
    createdAt: '21 Dec 2017',
    imgUrl: 'http://unsplash.it/1200/630?random=15',
    writer: {
      avatar: 'http://unsplash.it/1200/630?image=9',
      name: 'Luca Wanda'
    }
  }
]

const ParentContainer = styled.div`
  background-image: url('https://picsum.photos/1200/630?image=452');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const StyledGridContent = styled(Grid)`
  background-color: ${props => props.theme.contentBackground};
  padding-top: 25px;
  padding-bottom: 25px;
  &.header {
    padding-bottom: 20px;
  }
`

const StyledRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
  &.p-0 {
    padding: 0 !important;
  }
  &.footer {
    padding: 40px 0;
    background: ${props => props.theme.backgroundGradient} !important;
  }
`

const StyledCol = styled(Col)`
  display: flex;
  padding: 0 !important;
  &.text-align-center {
    > div {
      margin: 0 auto;
      @media only screen and (max-width: 560px) {
        margin: 15px 20px;
      }
    }
  }
  &.header-link {
    > a {
      color: ${props => props.theme.linkcolor};
      font-size: 16px;
      cursor: pointer;
      white-space: nowrap;
      text-transform: uppercase;
      margin: 0 auto;
      &:hover {
        color: ${props => props.theme.linkcolor};
      }
    }
  }
`

const StyledColLogo = StyledCol.extend`
  > img {
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 768px) {
    position: absolute !important;
    top: 15px;
    z-index: 99;
  }
`

const StyledGrid = styled(Grid)`
  padding: 0 !important;
`

const StyledJumbotron = styled(Jumbotron)`
  width: 100%;
  border-radius: 0 !important;
  margin: 0 !important;
  background: ${props => props.theme.backgroundGradient} !important;
  color: ${props => props.theme.jumbotronColor} !important;
  padding: 80px !important;
  text-align: center;
  @media only screen and (max-width: 640px) {
    padding: 30px !important;
  }
  > h1 {
    font-size: 2.5vw;
    margin: 0 0 20px;
    @media only screen and (max-width: 768px) {
      font-size: 6vw;
    }
    @media only screen and (max-width: 640px) {
      font-size: 8vw;
    }
  }
  > h2 {
    font-size: 2vw;
    margin: 0;
    @media only screen and (max-width: 768px) {
      font-size: 2.5vw;
    }
    @media only screen and (max-width: 640px) {
      font-size: 3.5vw;
    }
  }
`

const Logo = styled.img`
  margin-top: 15px;
  margin-bottom: 15px;
`

const ArticleTitle = styled.p`
  margin: 20px -5px 0;
  font-weight: normal;
  font-size: 18px;
`

const StyledNavbar = styled(Navbar)`
  background-image: none !important;
  background-color: #FFFFFF !important;
  box-shadow: none !important;
  border: none !important;
  margin: 0 !important;
  > div {
    display: flex !important;
    justify-content: center !important;
    font-size: 18px;
    @media only screen and (max-width: 768px) {
      display: block !important;
      padding: 0;
    }
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ParentContainer>
  
          <StyledGridContent fluid theme={theme} className={'header'}>
            <Grid>
              <StyledRow className={'p-0'}>
                <StyledColLogo xs={1} sm={2} smOffset={5}>
                  <Logo src="https://getlinks.co/images/v2/getlinks_logo.png" alt="" />
                </StyledColLogo>
              </StyledRow>
              <StyledNavbar collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} href="#">
                      Job Offers
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      Profile
                    </NavItem>
                     <NavItem eventKey={3} href="#">
                      Message
                    </NavItem>
                     <NavItem eventKey={4} href="#">
                      Refer Friends
                    </NavItem>
                  </Nav>
                </Navbar.Collapse>
              </StyledNavbar>
            </Grid>
          </StyledGridContent>
          
          <StyledGrid fluid>
            <StyledJumbotron>
              <h1>GO BEYOND JOBS</h1>
              <h2>Join the largest Tech Talent Network in Asia</h2>
            </StyledJumbotron>
          </StyledGrid>

          <StyledGridContent fluid>
            <Grid>
              <ArticleTitle>Latest Articles</ArticleTitle>
              <StyledRow>
                {
                  fakeData.map((data) => (
                    <StyledCol xs={12} sm={6} md={3}>
                      <Card
                        imgUrl="http://unsplash.it/1200/600?random=3"
                        contentDetail={data}
                      /> 
                    </StyledCol>
                  ))
                }
              </StyledRow>
            </Grid>
          </StyledGridContent>

          <Grid fluid>
            <StyledRow className={'footer'}>
              <StyledCol className={'text-align-center'} xs={3} sm={2} md={2} smOffset={2}>
                <FooterMenu
                  title="Getlinks"
                  links={["Join us", "Our blog", "Terms of Service"]}
                />
              </StyledCol>
              <StyledCol className={'text-align-center'} xs={3} sm={2} md={2}>
                <FooterMenu
                  title="About"
                  links={["Contact us", "Investors", "FAQ"]}
                />
              </StyledCol>
              <StyledCol className={'text-align-center'} xs={3} sm={2} md={2}>
                <FooterMenu
                  title="Community"
                  links={["Startup Job Fest", "DrinkEntrepreneurs", "AngleHack"]}
                />
              </StyledCol>
              <StyledCol className={'text-align-center'} xs={3} sm={2} md={2}>
                <FooterSocial
                  title="Social"
                />
              </StyledCol>
            </StyledRow>
          </Grid>

        </ParentContainer>
      </ThemeProvider>
      
    );
  }
}

export default App;
