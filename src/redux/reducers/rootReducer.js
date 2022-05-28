import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import globalReducer from "./globalReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cartReducer,
  globalReducer,
  wishlistReducer,
  shopReducer,
  productReducer,
  categoryReducer,
  userReducer,
});

export default rootReducer;
