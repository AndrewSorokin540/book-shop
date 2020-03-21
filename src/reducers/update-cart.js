export const updateCart = (state, action) => {

    if (!state) {
        return {
            order: [],
            total: 0
        }
    }

    switch (action.type) {
        case 'ITEM_ADD_TO_CART':
            const newItemAlreadyInCartIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size);
            const newItemAlreadyInCart = state.cart.order[newItemAlreadyInCartIndex]
            if (newItemAlreadyInCart) {
                const { id, title, price, size, count } = newItemAlreadyInCart;
                return {
                    order: [
                        ...state.cart.order.slice(0, newItemAlreadyInCartIndex),
                        {
                            id,
                            title,
                            count: newItemAlreadyInCart.count + action.payload.count,
                            price,
                            size,
                            total: price * (count + action.payload.count)
                        },
                        ...state.cart.order.slice(newItemAlreadyInCartIndex + 1)
                    ],
                    total: state.cart.total + price * action.payload.count
                }
            }
            else {
                // ToDo: решить проблему с разделенным массивом dataItems
                const totalDataItems = [...state.dataItems.pizza, ...state.dataItems.drinks]
                const addedItemNew = totalDataItems.find(item => item.id === action.payload.itemId)
                const { id, title, details } = addedItemNew;
                const { count, size } = action.payload;
                
                return {
                    order: [
                        ...state.cart.order,
                        {
                            id,
                            title,
                            count,
                            price: details[size].price,
                            size,
                            total: details[size].price * count
                        }
                    ],
                    total: state.cart.total + details[size].price * count
                }
            }

        case 'ITEM_REMOVE_FROM_CART':
            const removeItemIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size)
            const removeItem = state.cart.order[removeItemIndex]
            const { price, count } = removeItem;
            if (count > 1) {
                return {
                    order: [
                        ...state.cart.order.slice(0, removeItemIndex),
                        {
                            ...removeItem,
                            count: count - 1,
                            total: removeItem.total - price
                        },
                        ...state.cart.order.slice(removeItemIndex + 1)
                    ],
                    total: state.cart.total - price
                }
            }
            else {
                return {
                    order: [
                        ...state.cart.order.slice(0, removeItemIndex),
                        ...state.cart.order.slice(removeItemIndex + 1)
                    ],
                    total: state.cart.total - price
                }
            }

        case 'ALL_ITEMS_REMOVE_FROM_CART':
            const removeItemsIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size);
            const removeItems = state.cart.order[removeItemsIndex]
            console.log(removeItemsIndex)
            return {
                order: [
                    ...state.cart.order.slice(0, removeItemsIndex),
                    ...state.cart.order.slice(removeItemsIndex + 1)
                ],
                total: state.cart.total - removeItems.price * removeItems.count
            }

        case 'ORDER_PLACED':
            return {
                order: [],
                total: 0
            };

        default:
            return state.cart;
    }
}

export default updateCart;