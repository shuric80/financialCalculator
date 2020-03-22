import React from 'react';
import cn from 'classnames/bind';
import PropType from 'prop-types';

import styles from './Input.module.scss';

function Input(props) {
  const {
    title, isRequired, handler, values,
  } = props;
  return (
    <div className={cn(styles.Input)}>
      <span className={cn(styles.Title)}>
        {title}
        {isRequired && <span className={cn(styles.Required)}>*</span> }
      </span>
      <select onChange={handler}>
        { values.map((item, index) => (<option value={index}>{item}</option>))}
      </select>
    </div>
  );
}

Input.propTypes = {
  title: PropType.string.isRequired,
  values: PropType.arrayOf(PropType.string).isRequired,
  handler: PropType.func.isRequired,
  isRequired: PropType.bool,
};

Input.defaultProps = {
  isRequired: true,
};

export default Input;
