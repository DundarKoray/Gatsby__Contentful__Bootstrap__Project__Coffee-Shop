import React, { Component } from 'react';
import Title from '../Global/Title'
import Img from 'gatsby-image'


class Menu extends Component {
    constructor(props){
        super(props)
        // console.log(props.items)
        // it gives all the coffee items

        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges
        }
    }

    render() {

        return (
            this.state.items.length>0 ?
            <section className="menu py-5">
                <div className="container">
                    <Title title="most popular items"/>
                    {/* categories */}
                    {/* items */}
                    <div className="row">
                        {this.state.coffeeItems.map(({node})=>{
                            return(
                                <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                    <div>
                                        <Img fixed={node.image.fixed}/>
                                    </div>
                                    
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">{node.title}</h6>
                                            <h6 className="mb-0">€{node.price.toFixed(2)}</h6>
                                        </div>
                                        <p className="text-muted"> <small>{node.description.description}</small></p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>
            : <section className="menu py-5">
                <div className="container">
                    <Title title="most popular items"/>
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center">
                            <h3>Sorry, there are no items to display</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Menu;