import React, { Component } from 'react';
import Title from '../Global/Title'
import Img from 'gatsby-image'

//this function gets unique values, how many different categories we have etc "tea" and "coffee"
const getCategories = (items) => {
    let tempItems = items.map(item =>{
        return item.node.category //  // returns all the categories
    })
    let tempCategories = new Set (tempItems) // return uniquie categories inside an object
    let categories = Array.from(tempCategories) //Array.from() converts object into an array
    categories = ["all", ...categories] // we add "all" into categories array
    return categories 
}

class Menu extends Component {
    constructor(props){
        super(props)
        // console.log(props.items)
        // it gives all the coffee items

        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }
    handleItems = (category) => {
        // console.log(category)
        let tempItems = [...this.state.items]
        if(category === "all"){
            this.setState(()=>{
                return {coffeeItems: tempItems}
            })
        }
        else{
            let items = tempItems.filter(({node})=>node.category
            === category)
            this.setState(()=>{
                return {coffeeItems: items}
            })
        }
    }
    render() {
        // console.log(this.state.categories)
        return (
            this.state.items.length>0 ?
            <section className="menu py-5">
                <div className="container">
                    <Title title="most popular items"/>
                    {/* categories */}
                    <div className="row mb-5">
                        <div className="col-10 mx-auto text-center">
                            {this.state.categories.map((category, index)=>{
                                return (
                                    <button 
                                        type="button" 
                                        key={index} 
                                        className="btn btn-yellow text-capitalize m-3" 
                                        onClick={()=> {
                                            this.handleItems(category)
                                        }}
                                    >
                                        {category}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
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