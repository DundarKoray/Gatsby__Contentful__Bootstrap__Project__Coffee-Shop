import React from 'react';
import Product from './Product'
import Title from '../Global/Title'
import { StaticQuery, graphql } from 'gatsby'

const getProducts = graphql`{
    products:allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image{
            fixed(width: 120){
                src
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }`


const Products = () => {
    return (
        <StaticQuery query={getProducts} render={data =>{
           return (
                <section className="py-5">
                    <div className="container">
                        <Title title="our products"/>
                        <div className="row">
                            {data.products.edges.slice(0,4).map(({node:product})=>{
                                return <Product key={product.id} product={product} />
                            })}
                        </div>
                        <div className="row">
                            <div className="col text-center">
                             <button className="btn btn-brown mt-3 text-uppercase">
                                see all products
                            </button>

                            </div>
                        </div>
                    </div>
                </section>
            ) 
        }}/>
    );
};

export default Products;