import React, { useCallback, useReducer } from 'react'
import ReactQuill from 'react-quill'
const reducer = (state, action) => {
  switch (action.type) {
    case 'DESC':
      return { ...state, description: action.value }
    case 'IMGUPD':
      return { ...state, imgurl: action.value }
    case 'OTHER':
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
export default function Write () {
  const [value, setvalue] = useReducer(reducer, {})
  const onPublished = useCallback(
    e => {
      e.preventDefault()
      try {
        console.log(value)
        if (!value?.title || !value?.imgurl || !value?.cat) {
          throw new Error('Title,catogory and image must Required!')
        }
        console.log(value)
      } catch (error) {
        console.error(error)
      }
    },
    [value]
  )
  const uploadimage = useCallback(e => {
    setvalue({ type: 'IMGUPD', value: e.target.files[0] })
  }, [])
  const otherChnage = useCallback(e => {
    setvalue({ type: 'OTHER', payload: e.target })
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
            <b>Public</b>
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
            <button>Save as A draft</button>
            <button onClick={onPublished}>Update</button>
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
