import updateData from './update-data';
import updateModal from './update-modal';
import updateCart from './update-cart';

const initialState = {
    dataItems: [],
    cart: [],
    modal: {
        isModalOpen: false,
        openedItemId: null,
    }
}



const updateModal1 = (state, action) => {
    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                isModalOpen: true,
                openedItemId: action.payload
            }
        case 'MODAL_CLOSE':
            return {
                isModalOpen: false
            }
        default:
            return state.modal
    }
}

const updateData1 = (state, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
            return action.payload
        default:
            return state.dataItems
    }
}

const updateCart1 = (state, action) => {
    switch (action.type) {
        case 'ITEM_ADD_TO_CART':
            const newItemAlreadyInCartIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            const newItemAlreadyInCart = state.cart.find(item => item.id === action.payload.itemId)
            const addedItem = state.dataItems.find(item => item.id === action.payload.itemId)
            if (newItemAlreadyInCart) {
                return [
                    ...state.cart.slice(0, newItemAlreadyInCartIndex),
                    {
                        id: addedItem.id,
                        title: addedItem.title,
                        count: newItemAlreadyInCart.count + 1
                    },
                    ...state.cart.slice(newItemAlreadyInCartIndex + 1)
                ]
            }
            else {
                return [
                    ...state.cart,
                    {
                        id: addedItem.id,
                        title: addedItem.title,
                        count: action.payload.count
                    }
                ]
            }

        case 'ITEM_REMOVE_FROM_CART':
            const removeItem = state.cart.find(item => item.id === action.payload.itemId)
            const removeItemIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            if (removeItem.count > 1) {
                return [
                    ...state.cart.slice(0, removeItemIndex),
                    {
                        ...removeItem,
                        count: removeItem.count - 1
                    },
                    ...state.cart.slice(removeItemIndex + 1)
                ]
            }
            else {
                return [
                    ...state.cart.slice(0, removeItemIndex),
                    ...state.cart.slice(removeItemIndex + 1)
                ]
            }

        case 'ALL_ITEMS_REMOVE_FROM_CART':
            const removeItemsIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            return [
                ...state.cart.slice(0, removeItemsIndex),
                ...state.cart.slice(removeItemsIndex + 1)
            ]
        default:
            return state.cart
    }
}

const reducer = (state, action) => {
    return {
        dataItems: updateData(state, action),
        cart: updateCart(state, action),
        modal: updateModal(state, action)
    };
}

export default reducer;