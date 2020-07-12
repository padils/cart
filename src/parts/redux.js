
const reducer = (state , action) => {



    switch (action.type) {
      case `ITEM`:

            return {

                ...state,
                Items:[ ...state.Items,{...action.Items}]
                
            }
        case `AMOUNT`:

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
        case `DELETE`:

            return {

                ...state,
                 Items: state.Items.filter((item)=>item.id !== action.id)
            }

    default:
            return state
    }


};

export default reducer


