export const RECEIVE_MENU = 'RECEIVE_MENU'

export function getMenu(){
    return function(dispatch, getState){

        const query = `
            {
                pizzaSizes {
                    name
                    maxToppings
                    basePrice,
                    toppings {
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