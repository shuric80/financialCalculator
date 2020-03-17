import React, {useState} from 'react';
import PropType from 'prop-types';
import cn from 'classnames/bind';

import styles from './Calculator.module.scss';


function Calculator(props){
  const {errors, touched} = props;
  const total  = [100, 300, 500, 1000, 5000, 10000, 50000, 100000];
  const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const profits = [0, 10, 25, 50, 75, 100];
  const [tm, setTm] = useState(new Date().toISOString().split('T')[0]);
  const isMobile = window.innerWidth <= 800;


  return (
    <form onSubmit={()=>{console.log('handler')}} className={cn(styles.Calculator)}>
      <fieldset>
        <legend>Profit Calculator</legend>
        <p>{isMobile ? 'Mobile':'Desktop'}</p>
        <div className={cn(styles.FlexContainer)}>
          <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
            <div className={cn(styles.FlexCell)}>

              <label for='totalPayID'>Initial Investment<span className={cn(styles.Required)}>*</span></label>
              <select name="totalPay" id="totalPayID" className={cn(styles.Select)}>
                { total.map((value) => (<option value="{value}">$ {value}</option>))}
              </select>
            </div>
            <div className={cn(styles.FlexCell)}>

              <label for="yearsID">Projection years<span className={cn(styles.Required)}>*</span>
              </label>

              <select name='yearsPay'id="yearsID" className={cn(styles.Select)}>
                {years.map((value) => (<option value="{value}">{value} years</option>)) }
              </select>
            </div>
          </div>
          <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
            <div className={cn(styles.FlexCell)}>

              <label for="profitIdPay">What % of your profits would you like to reinvest?<span className={cn(styles.Required)}>*</span>
              </label>

              <select id='profitIdPay' className={cn(styles.Select)}>
                {profits.map((value) => (<option value="{value}">{value}%</option>)) }
              </select>
            </div>
            <div className={cn(styles.FlexCell)}>

              <label for="periodIdPay">Starting Date<span className={cn(styles.Required)}>*</span>
              </label>
              <div className={cn(styles.FlexRow)}>
                <input value={tm} name='beginDate' type='date' onChange={(e)=>{setTm(e.target.value)}} id='beginDateId' />
                <div className={cn(styles.CalendarIcon)}></div>
              </div>
            </div>
          </div>
          <div className={cn(isMobile? styles.FlexColumn: styles.FlexRow)}>
            <div className={cn(styles.FlexCell)}>
              <label>Consent<span className={cn(styles.Required)}>*</span>
              </label>

              <input type='checkbox' id='okId'/>
              <span>I understand that this calculator is for demostration purpose only and does not guarantee any results.</span>

            </div>
          </div>
          <p>
            <button className={cn(styles.Button)} type='submit'><span className={cn(styles.Icon)}>&#x2B95;</span>calculate profit</button>
          </p>
        </div>
      </fieldset>
    </form>
  )
}

export default Calculator;
