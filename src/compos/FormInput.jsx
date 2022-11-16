import React from 'react'
import './form.css'
const FormInput = (props) => {
    const {label, errorMessage, onChange, id, ...inputprops } = props
  return (
    <div className='formbox'>
        
            <label>{label}</label>
            <input {...inputprops} onChange={onChange} />
            <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput