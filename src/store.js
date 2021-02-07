import { createSlice, configureStore } from '@reduxjs/toolkit'

const gitUserSlice = createSlice({
  name: 'git-user',
  initialState: {
    search: "",
    listUsers: [],
    totalUsers: 0,
    loading: false
  },
  reducers: {
    setListUsers: (state, action) => {
      state.listUsers = action.payload;
      state.loading = false;
    },
    setTotalUsers: (state, action) => {
      state.totalUsers = action.payload;
    },
    setLoading: state => {
      state.loading = true;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
})

export const { setListUsers, setLoading, setTotalUsers, setSearch } = gitUserSlice.actions

const store = configureStore({
  reducer: gitUserSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log("store subscribed"))
export default store;
