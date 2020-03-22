import React, {useState} from 'react';
import PropType from 'prop-types';
import cn from 'classnames/bind';

import styles from './Calculator.module.scss';
import Input from "./Input";
import Calendar  from './Calendar';
import {Checkbox} from "./Checkbox";


function Calculator(){
    const [isShowAmount, setShowAmount] = useState(false);
    const [isShowQuestions, setShowQuestion] = useState(false);
    const [isShowReinvestBalance, setShowReinvestBalanse] = useState(false);

    const Initials = ['$100', '$300', '$500', '$1000', '$5000', '$10000', '$50000', '$100000', 'Other Initial'];
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

    const Reinvests = ['$100', '$300', '$500', '$1000', '$5000', '$10000', '$50000', '$100000'];
    const [reinvest, setReinvest] = useState(Reinvests[0]);

    return (
        <div className={cn(styles.Calculator)}>
          <h1>Profit Calculator</h1>
          <div className={cn(styles.Form)}>
            <Input handler={(event)=>{setShowAmount(event.target.value)}} values={Initials} title="Initial Investment"  />
            <Input handler={(event)=>(console.log(event))} values={Risks} title="Risk Level" />
              {isShowAmount && <Input title="What amount would you like to invest (in USD)?" handler={(event)=>{}} /> }
            <Input handler={(event)=>{setShowQuestion(event.target.value != 0 ) }} values={Profits} title='What % of your profits would you like to reinvest?' />
              {isShowQuestions &&
              <Input handler={(event)=>{setShowReinvestBalanse(event.target.value==2)}} values={Questions} title="How often would you like to reinvest?" />
              }
              { isShowReinvestBalance && isShowQuestions &&
               <Input handler={(event)=>{}} values={Reinvests} title='If my balance reaches this amount, reinvest with this package' />
               }
             <Input handler={(event)=>{}} values={Years} title="Projection years" />
            <Calendar beginDate={beginDate} handler={(event)=>setBeginDate(event.target.value)} />
          </div>
            <Checkbox />
          <div>
            <button className={cn(styles.Button)} type='submit'><span className={cn(styles.Icon)}>&#x2B95;</span>calculate profit</button>
          </div>
        </div>
    )
}

export default Calculator;
