
const reducer = (state, action) => {

    switch (action.type) {
        case `ITEM`: return {
            ...state,
            items: [...state.items, { ...action.items }]
        }
        case `AMOUNT`: return {
                ...state,
                items:
                    state.items.map((i) => {
                        if (i.id === action.id) {
                            return {
                                ...i,
                                amount: action.amount
                            }
                        }
                        return i
                    })
            }
        case `DELETE`: return {
                ...state,
                items: state.items.filter((item) => item.id !== action.id)
            }
        default:
            return state
    }
};

export default reducer
