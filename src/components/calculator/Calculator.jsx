import React, {useState} from 'react';
import PropType from 'prop-types';
import cn from 'classnames/bind';

import styles from './Calculator.module.scss';


function Calculator(props){
  const {errors, touched} = props;
  const [isShow, setShow] = useState(false);
  const total  = [100, 300, 500, 1000, 5000, 10000, 50000, 100000];
  const years = [{value:1,title:'1 Year'},
                 {value:2, title:'2 Years'},
                 {value: 3, title:'3 Years'},
                 {value: 4, title:'4 Years'},
                 {value: 5, title:'5 Years'},
                 {value: 6, title:'6 Years'},
                 {value: 7, title:'7 Years'},
                 {value: 8, title:'8 Years'},
                 {value: 9, title:'9 Years'},
                 {value: 10, title:'10 Years'}
                ];
  const profits = [0, 10, 25, 50, 75, 100];
  const risk = [
    { title: 'Low Risk (0.22% per day on avg.).', value:0.22},
    { title: 'Medium Risk (0.257% per day on avg.).', value: 0.257},
    { title:'High Risk (0.29% per day on avg.).', value:'0.29'}
  ];
  const reinvest = [
    { title: 'First day of each week', value: 0},
    { title: 'First of each month', value: 1 },
    { title: 'Each time the value of profits value a certain package(choose below)', value:2}
  ];
  const amount = [100, 300, 500, 1000, 5000, 10000, 50000, 100000];
  const [tm, setTm] = useState(new Date().toISOString().split('T')[0]);
  const isMobile = window.innerWidth <= 800;


  return (
    <form onSubmit={()=>{console.log('handler')}} className={cn(styles.Calculator)}>
      <fieldset>
        <legend>Profit Calculator</legend>
        <div className={cn(styles.FlexContainer)}>
          <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
            <div className={cn(styles.FlexCell)}>

              <label for='totalPayID'>Initial Investment<span className={cn(styles.Required)}>*</span></label>
              <select name="totalPay" id="totalPayID">
                { total.map((value) => (<option value={value}>$ {value}</option>))}
              </select>
            </div>
            <div className={cn(styles.FlexCell)}>
              <label for="riskFieldID">Risk Level<span className={cn(styles.Required)}>*</span>
              </label>
              <select name='riskField'id="riskFieldID">
                {risk.map((item) => (<option value={item.value}>{item.title}</option>)) }
              </select>
            </div>
          </div>
          <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
            <div className={cn(styles.FlexCell)}>

              <label for="profitIdPay">What % of your profits would you like to reinvest?<span className={cn(styles.Required)}>*</span>
              </label>

              <select id='profitIdPay'>
                {profits.map((value) => (<option value={value}>{value}%</option>)) }
              </select>
            </div>
            <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
              <div className={cn(styles.FlexCell)}>
                <label for="reinvestFieldID">How often would you like to reinvest?<span className={cn(styles.Required)}>*</span></label>
                <select id="reinvestFieldID" onChange={(event)=>{setShow(event.target.value==2)}}>
                  {reinvest.map((item)=>(<option value={item.value}>{item.title}</option>))}
                </select>
              </div>
            </div>
          </div>

          <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
            {isShow &&
             <div className={cn(styles.FlexCell)}>

               <label for="amounFieldID">If my balance reaches this amount, reinvest with this package<span className={cn(styles.Required)}>*</span>
               </label>
               <select id="amounFieldID">
                 {amount.map((item)=>(<option value="{item}">${item}</option>))}
               </select>
             </div>
            }

            <div className={cn(isMobile ? styles.FlexRow: styles.Column)}>
              <div className={cn(styles.FlexCell)}>
                <label for="protectionFieldID">Projection years<span className={cn(styles.Required)}>*</span></label>
                <select id="protectionFieldID">
                  {years.map((item)=>(<option value={item.value}>{item.title}</option>))}
                </select>
              </div>
            </div>
          </div>
          <div className={cn(styles.FlexRow)}>

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
