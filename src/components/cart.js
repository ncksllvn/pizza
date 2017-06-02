import React, { Component } from 'react'
import {DataTable, TableHeader, IconButton} from 'react-mdl'

export default class Cart extends Component {

    formatPrice(price){
        return '$' + price.toFixed(2)
    }

    removePizza(pizza){
        return this.props.removePizza(pizza)
    }

    render(){

        const formattedCart = this.props.cart.map((pizza, index) => {

            const toppingsCost = pizza.toppings.reduce((m, t) => m + t.topping.price, 0)
            const price = pizza.basePrice + toppingsCost

            return {
                size: pizza.size,
                toppings: pizza.toppings.map(t => t.topping.name).join(', '),
                price,
                remove: <IconButton onClick={() => this.removePizza(pizza)} name="close"/>
            }
        })

        const total = formattedCart.reduce((m, p) => p.price + m, 0)

        return (
            <div style={{ maxWidth: '50%', margin: '0 auto' }}>
                <h1 className="mdl-typography--text-center">Your pizzas</h1>
                <DataTable style={{width: '100%'}} rows={formattedCart}>
                    <TableHeader name="size">Size</TableHeader>
                    <TableHeader name="toppings">Toppings</TableHeader>
                    <TableHeader numeric name="price" cellFormatter={this.formatPrice}>Price</TableHeader>
                    <TableHeader name="remove" width={25}></TableHeader>
                </DataTable>
                <h3 className="mdl-typography--text-right">Total: {this.formatPrice(total)}</h3>
            </div>
        )
    }

}