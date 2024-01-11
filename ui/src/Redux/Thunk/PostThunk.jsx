import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const Base = 'http://localhost:8080/api/post'

export const getPost = createAsyncThunk(
  'get/getPost',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${Base}`)
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

export const deletePost = createAsyncThunk(
  'delete/deletePost',
  async (userid, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${Base}/${userid}`)
      return response.data
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

export const updatePost = createAsyncThunk(
  'update/updatePost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${Base}`, data, {
        headers: {
          'Content-Type': 'multi-part/form-data'
        }
      })
      return response.data
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
export const addPost = createAsyncThunk(
  'add/addPost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${Base}`, data, {
        headers: {
          'Content-Type': 'multi-part/form-data'
        }
      })
      return response.data
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)
