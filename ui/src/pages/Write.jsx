import React, { useCallback, useMemo, useReducer, useState } from 'react'
import ReactQuill from 'react-quill'
import { addPost } from '../Redux/Thunk/PostThunk'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
const reducer = (state, action) => {
  switch (action.type) {
    case 'DESC':
      return { ...state, description: action.value }
    case 'IMGUPD':
      return { ...state, imgurl: action.value }
    case 'OTHER':
      return { ...state, [action.payload.name]: action.payload.value }
    case 'CHOISE':
      return { ...state, hidden: Boolean(action.payload.value) }
    default:
      return state
  }
}
export default function Write () {
  const Dispatcher = useDispatch()
  const [value, setvalue] = useReducer(reducer, {})
  const [update, setUpdate] = useState(false);
  const disabled = useMemo(() =>
  {
    if (!value?.title || !value?.imgurl || !value?.cat)
      return true;
    else
      return false;
  },[value])
  const onPublished = useCallback(
    e => {
      e.preventDefault()
      try {
// Dispatcher(addPost(value))

        setUpdate(false)
      } catch (error) {
        console.error(error)
      }
    },
    []
  )
  const OnMouseOverUpdate = () =>
  {
    if (disabled)
  toast.error('important fields are Empty!', {
    autoClose: 1500
  })

  }
  const onSave = useCallback(
    e => {
      e.preventDefault()
      try
      {
        toast.success("Saved Changes", {
          autoClose:1500
        })



      } catch (error) {
        console.error(error)
      }
    },
    [value]
  )
  const choiseBoxChange = useCallback(e => {
    setvalue({ type: 'CHOISE', payload: e.target })
    toast.info(`Your Post is Now ${e.target.value ? "Private" : "Public"}`, {
      autoClose:1500
    })
    setUpdate(true)

  }, [])
  const uploadimage = useCallback(e => {
    setvalue({ type: 'IMGUPD', value: e.target.files[0] })
    toast.success('1 image uploaded', {
      autoClose:1500
    })
    setUpdate(true)
  }, [])
  const otherChnage = useCallback(e => {
    setvalue({ type: 'OTHER', payload: e.target })
    setUpdate(true)
  }, [])
  return (
    <div className='writeadd'>
      <div className='content'>
        <input
          type='text'
          name='title'
          id='Title'
          placeholder='Title'
          required
          autoFocus
          value={value?.title}
          onChange={otherChnage}
        />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value?.description}
            onChange={val => {
              setvalue({ type: 'DESC', value: val })
              setUpdate(true);
            }}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            Status:<b>Draft</b>
          </span>
          <span>
            Visibility:
            <b>
              <select name='visible' onChange={choiseBoxChange}>
                <option value='false'>Public</option>
                <option value='true'>Private</option>
              </select>
            </b>
          </span>
          <input
            type='file'
            name='image'
            id='image'
            accept='image/*'
            onChange={uploadimage}
          />
          <label htmlFor='image' className='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button onClick={onSave} disabled={!update} >Save as A draft</button>
            <button onClick={onPublished} onMouseOver={OnMouseOverUpdate} disabled = { disabled } >Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              onChange={otherChnage}
              value='art'
              id='art'
            />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              onChange={otherChnage}
              value='science'
              id='science'
            />
            <label htmlFor='science'>Science</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              onChange={otherChnage}
              value='tec'
              id='tec'
            />
            <label htmlFor='tec'>Technology</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              onChange={otherChnage}
              value='chinema'
              id='chinema'
            />
            <label htmlFor='chinema'>Chinema</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              onChange={otherChnage}
              name='cat'
              value='design'
              id='design'
            />
            <label htmlFor='design'>Design</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              onChange={otherChnage}
              value='food'
              id='food'
            />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}
