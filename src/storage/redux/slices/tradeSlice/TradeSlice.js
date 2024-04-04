import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    createOrderData: []
}

export const TradeSlice = createSlice({
    name: 'trade',
    initialState,
    reducers: {
        createOrder: (state, actions) => {
            console.log("actions", actions);
            state.createOrderData.push(actions.payload);
        },
    },
})

export const { createOrder } = TradeSlice.actions

export default TradeSlice.reducer