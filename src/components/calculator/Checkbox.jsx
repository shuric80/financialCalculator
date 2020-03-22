import cn from "classnames/bind";
import React from 'react';
import styles from './Checkbox.module.scss';

export function Checkbox(){
    return (
      <div className={cn(styles.Checkbox)}>
        <span className={cn(styles.Title)}>Consent<span className={cn(styles.Required)}>*</span>
          </span>
          <input type='checkbox' id='okId'/>
          <span>I understand that this calculator is for demostration purpose only and does not guarantee any results.</span>
      </div>
    )
}
