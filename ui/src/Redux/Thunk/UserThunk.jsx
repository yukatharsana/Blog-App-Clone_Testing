import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const Base = 'http://localhost:8080/api/user';

export const getUser = createAsyncThunk("get/getUser", async (_, { rejectWithValue}) =>
{
try {
  const response = await axios.get(Base);
    return response.data;
} catch (error)
{
  console.error(error);
    rejectWithValue(error);
}
})

export const deleteUser = createAsyncThunk(
  'delete/deleteUser',
  async (userid, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${Base}/${userid}`)
        return response.data;
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const updateUser = createAsyncThunk(
  'update/updateUser',
  async (data, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${Base}`, data, {
            headers: {
              "Content-Type":"multi-part/form-data"
          }
      })
      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)
export const addUser = createAsyncThunk(
  'add/addUser',
  async (data, { rejectWithValue }) => {
    try
    {
      console.log(Object.fromEntries(data));
      const response = await axios.post(Base, data)
      console.log(response.data);
      return response.data
    } catch (error)
    {
      console.log(error);
    }
  }
)
