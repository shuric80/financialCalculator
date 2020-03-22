import React, {useState} from 'react';
import PropType from 'prop-types';
import cn from 'classnames/bind';

import styles from './Calculator.module.scss';
import Input from "./Input";
import Calendar  from './Calendar';
import {Checkbox} from "./Checkbox";


function Calculator(){
    const [isShow, setShow] = useState(false);
    const [isHideQuestions, setHideQuestion] = useState(true);

    const Initials = ['$100', '$300', '$500', '$1000', '$5000', '$10000', '$50000', '$100000'];
    const [initial, setInitial ] = useState(Initials[0]);

    const Years = ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years'];
    const [year, setYear] = useState(0);

    const Profits = ['0%', '10%', '25%', '50%', '75%', '100%'];
    const [profit, setProfit] = useState(0);

    const [beginDate, setBeginDate] = useState(new Date().toISOString().split('T')[0]);


    const Risks = [
        'Low Risk (0.22% per day on avg.).',
        'Medium Risk (0.257% per day on avg.).',
        'High Risk (0.29% per day on avg.).'
    ];

    const [risk, setRisk] = useState(Risks[0]);

    const Questions = ['First day of each week', 'First of each month', 'Each time the value of profits value a certain package(choose below)'];
    const arr_reinvestment_term = [100, 300, 500, 1000, 5000, 10000, 50000, 100000];
    const [reinvestment_term, setReinvestmentTerm] = useState(arr_reinvestment_term[0]);

    const [total_profit, setTotalProfit] = useState(0);


    const isMobile = window.innerWidth <= 800;


    return (
        <div className={cn(styles.Calculator)}>
          <div>
            <h1>Profit Calculator</h1>
            <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
              <Input handler={(event)=>(console.log(event))} values={Initials} title="Initial Investment"  />
              <Input handler={(event)=>(console.log(event))} values={Risks} title="Risk Level" />
            </div>

            <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
              <Input handler={(event)=>{setHideQuestion(event.target.value == 0 ) }} values={Profits} title='What % of your profits would you like to reinvest?' />
              { isHideQuestions ?
               <Input handler={(event)=>{}} values={Years} title="Projection years" />:
               <Input handler={(event)=>{}} values={Questions} title='How often would you like to reinvest?' /> }
            </div>

            <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
              {isHideQuestions || <Input handler={(event)=>{}} values={Years} title="Projection years" />}
              <Calendar beginDate={beginDate} handler={(event)=>{setBeginDate(event.target.value)}} />
            </div>
            <div>
              <Checkbox />
            </div>
            <div>
              <button className={cn(styles.Button)} type='submit'><span className={cn(styles.Icon)}>&#x2B95;</span>calculate profit</button>
            </div>
          </div>
        </div>

    )
}

export default Calculator;
