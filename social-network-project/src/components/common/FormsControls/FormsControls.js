import React from "react";
import classes from './FormsControls.module.css'

export const ElementForm = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControle + " " + (hasError ? classes.error : " ")}>
            <div>
                <props.typeform {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}