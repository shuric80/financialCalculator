import React, { useState } from 'react';
import cn from 'classnames/bind';

import styles from './Calculator.module.scss';
import Input from './Input';
import Calendar from './Calendar';
import { Checkbox } from './Checkbox';
import Results from './Results';
import {CalculateMoney} from "./utils";


function Calculator() {
  const [isShowAmount, setShowAmount] = useState(false);
  const [isShowQuestions, setShowQuestion] = useState(false);
  const [isShowReinvestBalance, setShowReinvestBalanse] = useState(false);

  const Initials = ['$100', '$300', '$500', '$1000', '$5000', '$10000', '$50000', '$100000', 'Other Initial'];
  const [initial, setInitial] = useState(Initials[0]);

  const Years = ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years'];
  const [year, setYear] = useState(Years[0]);

  const Profits = ['0%', '10%', '25%', '50%', '75%', '100%'];
  const [profit, setProfit] = useState(0);

  const [beginDate, setBeginDate] = useState(new Date().toISOString().split('T')[0]);


  const Risks = [
    'Low Risk (0.22% per day on avg.).',
    'Medium Risk (0.257% per day on avg.).',
    'High Risk (0.29% per day on avg.).',
  ];


  const [risk, setRisk] = useState(Risks[0]);

  const Questions = ['First day of each week', 'First of each month', 'Each time the value of profits value a certain package(choose below)'];

  const Reinvests = ['$100', '$300', '$500', '$1000', '$5000', '$10000', '$50000', '$100000'];
  const [reinvest, setReinvest] = useState(Reinvests[0]);

  const [results, setResults] = useState([]);

  return (
    <div className={cn(styles.Calculator)}>
      <h1>Profit Calculator</h1>
      <div className={cn(styles.Form)}>
        <Input handler={(event) => { setShowAmount(event.target.value == 8); setInitial(Initials[event.target.value]); }} values={Initials} title="Initial Investment" />
        <Input handler={(event) => { setRisk(Risks[event.target.value]); }} values={Risks} title="Risk Level" />
        {isShowAmount && <Input title="What amount would you like to invest (in USD)?" handler={(event) => {}} /> }
        <Input handler={(event) => { setShowQuestion(event.target.value != 0); setProfit(Profits[event.target.value]); }} values={Profits} title="What % of your profits would you like to reinvest?" />
        {isShowQuestions
              && <Input handler={(event) => { setShowReinvestBalanse(event.target.value == 2); }} values={Questions} title="How often would you like to reinvest?" />}
        { isShowReinvestBalance && isShowQuestions
               && <Input handler={(event) => {}} values={Reinvests} title="If my balance reaches this amount, reinvest with this package" />}
        <Input handler={(event) => { setYear(Years[event.target.value]); }} values={Years} title="Projection years" />
        <Calendar beginDate={beginDate} handler={(event) => setBeginDate(event.target.value)} />
      </div>
      <Checkbox />
      <div>
        <button className={cn(styles.Button)} onClick={()=> setResults(CalculateMoney(1000, new Date(), 1, 0.003, 100))}>
          <span className={cn(styles.Icon)}>&#x2B95;</span>
          calculate profit
        </button>
      </div>
      <Results headers={[initial, risk, profit, reinvest, year]} values={results}/>
    </div>
  );
}

export default Calculator;


