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
                    <div className="row mb-5">
                        <div className="col text-center">
                           <h3>There are items to display</h3> 
                        </div>
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