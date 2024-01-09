import React, { useState } from 'react'
import ReactQuill from 'react-quill'

export default function Write () {
  const [value, setvalue] = useState('')
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
        />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setvalue}
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
          <input type='file' name='image' id='image' accept='images/*' />
          <label htmlFor='image' className='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as A draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='science' id='science' />
            <label htmlFor='science'>Science</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='tec' id='tec' />
            <label htmlFor='tec'>Technology</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='chinema' id='chinema' />
            <label htmlFor='chinema'>Chinema</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='design' id='design' />
            <label htmlFor='design'>Design</label>
          </div>
          <div className="cat">
             <input type='radio' name='cat' value='food' id='food' />
          <label htmlFor='food'>Food</label>
</div>

        </div>
      </div>
    </div>
  )
}
