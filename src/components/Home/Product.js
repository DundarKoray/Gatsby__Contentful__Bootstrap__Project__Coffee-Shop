import React from 'react';
import Img from 'gatsby-image';

const Product = ({product}) => {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-3 mx-auto my-3">
           <div className="card text-center mx-auto d-block py-3">
               <Img fixed={product.image.fixed}/>
               <div className="card-body py-0 px-0">
                   <h6>{product.title}</h6>
                   <h6>€{product.price.toFixed(2)}</h6>
                   <button className="btn btn-yellow mt-3 text-capitalize">
                       add to cart
                   </button>
               </div>
           </div>
        </div>
    );
};

export default Product;