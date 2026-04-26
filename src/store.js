import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
// ya esta para la tarea 5
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
