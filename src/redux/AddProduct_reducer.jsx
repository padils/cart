
const SET_ITEM = `SET_ITEM`;
const SET_AMOUNT = `SET_AMOUNT`;
const DELETE_I = `DELETE_I`;



let initialState =
{
   
    Items:[]

}

const AddProductRed = (state = initialState, action) => {



    switch (action.type) {



        case SET_ITEM:

            return {

                ...state,
                Items:[ ...state.Items,{...action.Items}]
                
            }
        case SET_AMOUNT:

            return {

                ...state,
                 Items:
                
                    state.Items.map((i)=>{
                        if(i.id===action.id){
                            return {
                                ...i,
                                amount:action.amount}
                        }
                        return i
                        
                    })
                
                
                           
                
        
                
            }
        case DELETE_I:

            return {

                ...state,
                 Items: state.Items.filter((item)=>item.id !== action.id)
            }

    default:
            return state
    }


};

export const setProdName = (Items) => ({ type: SET_ITEM,Items });
export const setAmount = (amount,id) => ({ type: SET_AMOUNT,amount,id });
export const deleteI = (id) => ({ type: DELETE_I,id });




export default AddProductRed