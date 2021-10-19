import { createAction, createReducer,nanoid  } from '@reduxjs/toolkit'

export const updateUser = createAction('user/update')
export const clearUser = createAction('user/clear')



const initialState = {
}


const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateUser, (state, action) => {
      return {...state,...action.payload}
    })
    .addCase(clearUser, (state, action) => {
      return  {}
    })
    
})


export default userReducer