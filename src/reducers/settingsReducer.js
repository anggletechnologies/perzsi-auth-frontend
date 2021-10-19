import { createAction, createReducer,nanoid  } from '@reduxjs/toolkit'

export const updateSettings = createAction('settings/update')
export const resetSettings = createAction('settings/reset')



const initialState = {
    livemode:true
}

const settingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateSettings, (state, action) => {
      return {...state,...action.payload}
    })
    .addCase(resetSettings, (state, action) => {
      return  initialState
    })
    
})


export default settingsReducer