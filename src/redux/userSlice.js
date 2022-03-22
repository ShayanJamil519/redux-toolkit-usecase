import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Shayan",
        email: "shayanjamil500@gmail.com"
    },

    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        },
        remove: (state) => {
            state = null
        },
        addHello: (state, action) => {
            state.name = "Hello " + action.payload.name
        }
    }

})

export const { update, remove, addHello } = userSlice.actions
export default userSlice.reducer