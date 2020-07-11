import { createStore, combineReducers,compose,  } from "redux";
import AddProductRed from './AddProduct_reducer';

let reducers = combineReducers({
    AddProduct:AddProductRed
    

});





 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(

  ));

export default store