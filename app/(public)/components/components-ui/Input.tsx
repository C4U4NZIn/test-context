import React from "react";
import styles from '../css/input-styles.module.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string
  errorMessage?:string
}

const Input = React.forwardRef<HTMLInputElement , InputProps>(({className,type,label, errorMessage,...props}, ref) => {
  
  

  return (
    <div className={styles.containerLabelInputErrorMessageStyle}>
      <label  className={styles.labelStyle}>
        <h6>{label}</h6>
      </label>
      <input 
       
        type={type}
        //className={`${styles.inputStyle} ${errorMessage ? styles.error : ''} ${className}`}
        ref={ref}
        {...props}
      />      
     
       // <span className={styles.errorMessageStyle}>{errorMessage}</span>
      
    </div>
  )
});

Input.displayName = 'Input';

export {Input};
