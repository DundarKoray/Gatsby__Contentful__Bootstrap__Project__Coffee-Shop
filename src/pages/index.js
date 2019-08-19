import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from '../components/Global/BackgroundSection'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'

const IndexPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img={data.img.childImageSharp.fluid} 
      title1="Anna & Emma" 
      title2="kahvi roastery"
      styleClass="anna-ja-emma"
    />
    <Info/>
    <Menu items={data.menu}/>

  </Layout>
);

export const query = graphql `
{
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulCofeeItem {
    edges {
      node {
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width:250, height:350){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage;
