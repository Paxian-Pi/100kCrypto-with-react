import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    windowDimension: {
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    },
}

export const appSlice = createSlice({
    name: 'app',
    initialState: { value: initialState },
    reducers: {
        getDimensions: (state, action) => {
            state.value.windowDimension = action.payload
        }

    }
})

export const { getDimensions } = appSlice.actions

export default appSlice.reducer