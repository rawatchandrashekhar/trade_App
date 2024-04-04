import { configureStore } from '@reduxjs/toolkit'
import TradeReducer from './slices/tradeSlice/TradeSlice'

export const store = configureStore({
    reducer: {
        trade: TradeReducer
    },
})