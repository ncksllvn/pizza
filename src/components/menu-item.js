import React, { Component } from 'react'
import {Button, Checkbox} from 'react-mdl'

export default class MenuItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            toppings: this.getDefaultToppings(props.pizza)
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.pizza != this.props.pizza){
            this.setState({ toppings: this.getDefaultToppings(nextProps.pizza )})
        }
    }

    getDefaultToppings(pizza){
        return pizza.toppings.filter(t => t.defaultSelected)
    }

    addTopping(topping){
        this.setState({ toppings: this.state.toppings.concat([topping]) })
    }

    removeTopping(topping){
        this.setState({ toppings: this.state.toppings.filter(t => t != topping) })
    }

    addToCart(){
        this.props.addToCart({
            size: this.props.pizza.name,
            basePrice: this.props.pizza.basePrice,
            toppings: this.state.toppings
        })
    }

    render(){

        const basePrice = this.props.pizza.basePrice
        const toppingsPrice = this.state.toppings.reduce((memo, topping) => memo + topping.topping.price, 0)
        const disableCheckboxes = this.state.toppings.length === this.props.pizza.maxToppings

        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                    <ul className="mdl-list">
                        {this.props.pizza.toppings.map(topping => {

                            const isChecked = this.state.toppings.some(t => t.topping.name == topping.topping.name)
                            const label = (
                                <span>{topping.topping.name} <small>${topping.topping.price.toFixed(2)}</small></span>
                            )
                            const onChange = () => isChecked ? this.removeTopping(topping) : this.addTopping(topping)

                            return (
                                <li key={topping.topping.name} className="mdl-list__item">
                                    <Checkbox
                                        onChange={onChange}
                                        checked={isChecked}
                                        disabled={!isChecked && disableCheckboxes}
                                        label={label}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="mdl-cell mdl-cell--6-col">
                    <ul className="mdl-list">
                        <li className="mdl-list__item">Base Price: ${basePrice.toFixed(2)}</li>
                        <li className="mdl-list__item">Toppings: ${toppingsPrice.toFixed(2)}</li>
                        <li className="mdl-list__item">Total: <strong>${(basePrice + toppingsPrice).toFixed(2)}</strong></li>
                        <li className="mdl-list__item">
                            <Button onClick={this.addToCart.bind(this)} raised colored>Add to cart</Button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}