import React, {Component} from 'react';
import PropType from 'prop-types';
import cn from 'classnames/bind';
import {withFormik} from "formik";

import styles from './Calculator.module.scss';
import CalculatorSchema from './Calculator.schema';


function Calculator(props){
const {errors, touched} = props;
const total  = [100, 300, 500, 1000, 5000, 10000, 50000, 100000];
const years = [1,2,3,4,5,6,7,8,9,10];
const profits = [0,10, 25, 50, 75, 100];
const tm = new Date();
return (
<form onSubmit={()=>{console.log('handler')}} className={cn(styles.Calculator)}>
  <fieldset>
    <legend>Profit Calculator</legend>
    <p>
      <label for='totalPayID'>Initial Investment<span className={cn(styles.Required)}>*</span></label></p>
    <select name="totalPay" id="totalPayID" className={cn(styles.Select)}>
      { total.map((value) => (<option value="{value}">$ {value}</option>))}
    </select>
    {errors.total && touched.total ? (<div>Error</div>): null}

        <p>
        <label for="yearsID">Projection years<span className={cn(styles.Required)}>*</span>
        </label>
        </p>
    <select name='yearsPay'id="yearsID" className={cn(styles.Select)}>
      {years.map((value) => (<option value="{value}">{value} years</option>)) }
    </select>
    {errors.single && touched.single ? (<div>Error</div>): null }
    <p>
      <label for="profitIdPay">What % of your profits would you like to reinvest?<span className={cn(styles.Required)}>*</span>
      </label>
    </p>
    <select id='profitIdPay' className={cn(styles.Select)}>
      {profits.map((value) => (<option value="{value}">{value}%</option>)) }
    </select>
    {errors.regular && touched.regular ? (<div>Error</div>): null }
    <p>
      <label for="periodIdPay">Starting Date<span className={cn(styles.Required)}>*</span>
      </label>
        </p>
        <input value="2020-{tm.getMonth()}-01" name='beginDate' type='date'  min="{tm.getFullYear()}-{tm.getMonth()}-{tm.getDate()}" id='beginDateId' />
    {errors.period && touched.period ? (<div>Error</div>) : null }
        <p>
        <label>Consent<span className={cn(styles.Required)}>*</span>
        </label>
        </p>
      <input type='checkbox' id='okId'/>
      <span>I understand that this calculator is for demostration purpose only and does not guarantee any results.</span>
       <p>
        <button className={cn(styles.Button)} type='submit'><span className={cn(styles.Icon)}>&#x2B95;</span>calculate profit</button>
        </p>
  </fieldset>
</form>
)
}

const CalculatorWrapper  = withFormik({
mapPropsToValues: () =>({}),
validationSchema: CalculatorSchema,
handleSubmit: (values, {}) => {
console.log(values);
}
})(Calculator);

export default CalculatorWrapper;
