import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import staticdata from '../../staticdata.json'
import Cell from '../components/cell';
import styled from 'styled-components';

const SectionCaption = styled.p`
  font-weight:600;
  font-size:18px;
  text-transform:uppercase;
  color:#FF0000;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width:800px;
  margin: 0 auto 100px;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap:20px;
  padding: 0 20px;

  @media (max-width=800px) {
    grid-tempalte-columns: repeat(1, 1fr);
    
  }

`


const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>I think I understand how this works...</h1>
        <p>Wuuuut?</p>
        <p>So this is react?!? I wanna have a bit more text so we can see how stuff works eeeeh??</p>
        <Link to="/page-2/">Go to page 2</Link>

        <div className="Logos">
        <img src="https://d9m3e2gledt2x.cloudfront.net/images/ysura-v3/cover-alt3.jpg" width="50" />
        <img src="https://d9m3e2gledt2x.cloudfront.net/images/ysura-mobile/ys-mobile-cover-2.jpg" width="50" />
        <img src="https://d9m3e2gledt2x.cloudfront.net/images/pinapp/PinappCover.jpg" width="50" />
        <img src="https://d9m3e2gledt2x.cloudfront.net/images/viewsense/vs-cover-alt.jpg" width="50" />
        <img src="https://d9m3e2gledt2x.cloudfront.net/images/other/portfolio.jpg" width="50" />
        </div>
      </div>
    </div>
    <div className="Cards">
      <h2> Many sections, probably more of them coming soon! </h2>
      <div className="CardGroup">
      <Card
      title="React for Xectors"
      text="Whaversd"
      image="https://d9m3e2gledt2x.cloudfront.net/images/pinapp/PinappCover.jpg"
      /> 
      <Card
      title="Blorg"
      text="Whaversd"
      image="https://d9m3e2gledt2x.cloudfront.net/images/pinapp/cover2.png"
      /> 
      <Card
      title="React for Xectors"
      text="Whaversd"
      image="https://d9m3e2gledt2x.cloudfront.net/images/pinapp/cover2.png"
      /> 
      <Card
      title="React for Xampions"
      text="Whaversd"
      image="https://d9m3e2gledt2x.cloudfront.net/images/pinapp/cover2.png"
      /> 
      </div>
    </div>

    <Section
      image="https://geeglenews.com/ct-geeglenews/uploads/2017/03/cool-backgrounds-1288125.jpg"
      logo="https://logopond.com/logos/dc5cc8314658dcbce4536affc4772f78.png"
      title="This is like a stuff"
      text="Styled components allow you to take your CSS to the next level. Not only does it allow you to nest your CSS like in SCSS, but it also gives you the power to use javascript and transfer Props to your CSS, making it super customiza"
    />

    
    <SectionCaption>12 sections, 6 hours, 3 lifes, 1.5 slips</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
      <Cell 
        title={cell.title}
        image={cell.image} />
    ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
