import React from 'react'
import pt from 'prop-types'

function FormikErrorDisplay({formik:{errors,touched},name,children,...props}) {
    return (
        <>
            {errors[name] && touched[name] ? (
                children||<span className="text-danger">{errors[name]}</span>
            ) : null}
            
        </>
    )
}

FormikErrorDisplay.propTypes = {
    formik:pt.object.isRequired,
    name:pt.string,
    children:pt.any
    
}

export default FormikErrorDisplay

