import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  isLoading: false,
  error: null,
  record: null,
};

// get posts
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete posts
export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/posts/${data.id}`, {
        method: "DELETE",
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// insert posts

export const insertPost = createAsyncThunk(
  "posts/insertPost",
  async (postData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    postData.userId = auth.id;
    try {
      const res = await fetch(`http://localhost:5000/posts/`, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get post
export const getPost = createAsyncThunk(
  "posts/getPost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "GET",
        header: { "content-type": "application/json; charset=UTF-8" },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // get all posts
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.records = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete all posts
    [deletePosts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deletePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.records = state.records.filter(
        (record) => record.id !== action.payload.id
      );
    },
    [deletePosts.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },

    //insert a new post
    [insertPost.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.records.push(action.payload);
    },
    [insertPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // get post
    [getPost.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.record = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
