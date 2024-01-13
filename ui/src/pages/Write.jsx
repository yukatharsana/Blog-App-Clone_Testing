import React, { useCallback, useMemo, useReducer, useState } from 'react'
import ReactQuill from 'react-quill'
import { addPost, updatePost } from '../Redux/Thunk/PostThunk'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { ErrorAlert, ScussAlert } from '../component/Util';
import { useNavigate } from 'react-router-dom';


//Reducer
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
    case 'SET': return action.value;
    default:
      return state
  }
}




//write Component
export default function Write ()
{
  //variables
  const Dispatcher = useDispatch()
  const naviga=useNavigate()
  const [value, setvalue] = useReducer(reducer, {userid:106,hidden:true})
  const [update, setUpdate] = useState(false);
  const disabled = useMemo(() => {
    if (!value?.title || !value?.imgurl || !value?.cat) return true
    else return false
  }, [value])

  //functions


  //Mouse Move on update btn
  const OnMouseOverUpdate = () => {
    if (disabled)
      toast.error('important fields are Empty!', {
        autoClose: 1500
      })
  }


//visiblity box
  const choiseBoxChange = useCallback(e => {
    setvalue({ type: 'CHOISE', payload: e.target })
    toast.info(`Your Post is Now ${e.target.value ? 'Private' : 'Public'}`, {
      autoClose: 1500
    })
    setUpdate(true)
  }, [])

  //upload image
  const uploadimage = useCallback(e => {
    setvalue({ type: 'IMGUPD', value: e.target.files[0] })
    toast.success('1 image uploaded', {
      autoClose: 1500
    })

    setUpdate(true)
  }, [])
  //other inputs
  const otherChnage = useCallback(e => {
    setvalue({ type: 'OTHER', payload: e.target })
    setUpdate(true)
  }, [])


  const onUpdate = useCallback(
    async e => {
      e.preventDefault()
      try {
        //await Dispatcher(updatePost(value))
await ScussAlert({title:'Update',text:`Scussfully Updated ${value.title}`})
        setUpdate(false)
      } catch (error) {
       ErrorAlert({title:"Update",text:error})
        console.error(error)
      }
    },
    [value]
  )



  //Save Or Published
const onSave = useCallback(
  async e => {
    e.preventDefault()
    try
    {
      const formData = new FormData()

for (const key in value) {
  if (value.hasOwnProperty(key)) {
    formData.append(key, value[key])
  }
}

      await Dispatcher(addPost(formData))

      if (value.hidden)
        await ScussAlert({title:'Saved',text:`Scussfully Saved ${value.title}`})
      else
        await ScussAlert({ title: 'Published', text: `Scussfully Published ${value.title}`
        })
      naviga("/")

    } catch (error) {
      toast.error(error, {
        autoClose: 1500
      })
      console.error(error)
    }
  },
  [value]
)

  return (
    <div className='writeadd'>
      <div className='content'>
        <input
          type='text'
          name='title'
          id='Title'
          placeholder='Title'
          required
          value={value?.title??''}
          onChange={otherChnage}
        />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value?.description}
            onChange={val => {
              setvalue({ type: 'DESC', value: val })
              setUpdate(true)
            }}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            Status:<b>{value.hidden ? 'Draft' : 'Post'}</b>
          </span>
          <span>
            Visibility:
            <b>
              <select name='visible' onChange={choiseBoxChange} defaultValue='true'>
                <option value='false'>Public</option>
                <option value='true' >Private</option>
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
            <button onClick={onSave} disabled={disabled}
              onMouseOver={OnMouseOverUpdate}
>
              {value.hidden ? 'Save as A draft' : 'Published'}
            </button>
            <button
              onClick={onUpdate}
              disabled={!update}
            >
              Update
            </button>
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
