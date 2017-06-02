export const RECEIVE_MENU = 'RECEIVE_MENU'
export const ADD_PIZZA = 'ADD_PIZZA'
export const REMOVE_PIZZA = 'REMOVE_PIZZA'

export function getMenu(){
    return function(dispatch, getState){

        const query = `
            {
                pizzaSizes {
                    name
                    maxToppings
                    basePrice
                    toppings {
                        defaultSelected
                        topping {
                            name
                            price
                        }
                    }
                }
            }
        `

        return fetch(`https://core-graphql.dev.waldo.photos/pizza?query=${encodeURIComponent(query)}`)

                    .then(response => response.json())

                    .then(json => dispatch({ type: RECEIVE_MENU, menu: json.data.pizzaSizes }))

    }
}

export function addPizza(pizza){
    return { type: ADD_PIZZA, pizza }
}

export function removePizza(pizza){
    return { type: REMOVE_PIZZA, pizza }
}