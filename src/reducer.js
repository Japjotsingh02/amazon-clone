export const initialState = {
    basket:[],
    OrderChecked:false,
    ItemChecked:false,
    user:[],
};

export const getBasketTotal=(basket) =>basket.reduce((amount,item)=> {
    return item.price + amount
    } ,0);

const reducer = (state , action) => {
    switch(action && action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state , 
                basket:[...state.basket ,action.item],
            };
        case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(item => {
                    return item.id === action.id;
                });
                let newBasket= [...state.basket];
                index>=0 ? newBasket.splice(index,1) : console.warn("WARNING");
            return {
                ...state , 
                basket:newBasket,
            };
        case "ORDER_CHECKED":
            return{
                ...state,
                OrderChecked:action.Checked,
            };
        case "ITEM_CHECKED":
            return{
                ...state,
                ItemChecked:action.ItemsChecked,
            };    
        case "SET_USER":
            return{
                ...state,
                user:action.user,
            }
        case "EMPTY_BASKET":
            return{
                ...state,
                basket:[],
            }
        // always return the complete updated set,
        // using spread operator will be helpful if you have
        // an object in state
        default:
            return state;
    }
}

export default reducer;
