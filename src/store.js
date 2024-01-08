import {configureStore, createSlice} from '@reduxjs/toolkit'

let test_state = createSlice({
  name: 'test',
  initialState: 'test_good',
})

const contentsBoxState = createSlice({
  name: 'contentsBoxState',
  initialState: 'default',
})


export default configureStore({
  reducer: {
    test: test_state.reducer,
  }
})