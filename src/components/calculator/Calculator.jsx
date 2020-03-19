import React, {useState} from 'react';
import PropType from 'prop-types';
import cn from 'classnames/bind';

import styles from './Calculator.module.scss';


function Calculator(){
  const [isShow, setShow] = useState(false);
  const arr_initialInvestman  = [100, 300, 500, 1000, 5000, 10000, 50000, 100000];

  const [initialInvestmen, setInitialInvestman] = useState(arr_initialInvestman[0]);
  const arr_years = ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years'];
  const [years, setYears] = useState(0);

  const arr_Reinvest = [0, 10, 25, 50, 75, 100];
  const [reinvest, setReinvest] = useState(0);

  const arr_riskLevel = [
    { title: 'Low Risk (0.22% per day on avg.).', value:0.22},
    { title: 'Medium Risk (0.257% per day on avg.).', value: 0.257},
    { title:'High Risk (0.29% per day on avg.).', value:'0.29'}
  ];
  const [riskLevel, setRiskLevel] = useState(0);

  const sarr_Reinvest = ['First day of each week', 'First of each month', 'Each time the value of profits value a certain package(choose below)'];
  const [sreinvest, ssetReinvest] = useState(0);

  const arr_reinvestment_term = [100, 300, 500, 1000, 5000, 10000, 50000, 100000];
  const [reinvestment_term, setReinvestmentTerm] = useState(arr_reinvestment_term[0]);

  const [starting_day, setStartingDay] = useState(new Date().toISOString().split('T')[0]);
  const [total_profit, setTotalProfit] = useState(0);


  const isMobile = window.innerWidth <= 800;


  return (
    <div className={cn(styles.Calculator)}>
      <form onSubmit={()=>{console.log('handler')}}>
        <fieldset>
          <legend>Profit Calculator</legend>
          <div className={cn(styles.FlexContainer)}>
            <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
              <div className={cn(styles.FlexCell)}>

                <label for='initialD'>Initial Investment<span className={cn(styles.Required)}>*</span></label>
                <select name="initialID" id="initialPayID" onChange={(item)=>{setInitialInvestman(item.target.value)}}>
                  { arr_initialInvestman.map((value) => (<option value={value}>$ {value}</option>))}
                </select>
              </div>
              <div className={cn(styles.FlexCell)}>
                <label for="riskFieldID">Risk Level<span className={cn(styles.Required)}>*</span>
                </label>
                <select name='riskField'id="riskFieldID" onChange={(event)=>{setRiskLevel(event.target.value)}}>
                  {arr_riskLevel.map((item, index) => (<option value={index}>{item.title}</option>)) }
                </select>
              </div>
            </div>
            <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
              <div className={cn(styles.FlexCell)}>

                <label for="profitId">What % of your profits would you like to reinvest?<span className={cn(styles.Required)}>*</span>
                </label>

                <select id='reinvestId' onChange={(event)=>{setReinvest(event.target.value)}}>
                  {arr_Reinvest.map((item, index) => (<option value={index}>{item}%</option>)) }
                </select>
              </div>
              <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
                <div className={cn(styles.FlexCell)}>
                  <label for="reinvestFieldID">How often would you like to reinvest?<span className={cn(styles.Required)}>*</span></label>
                  <select id="reinvestFieldID" onChange={(event)=>{setShow(event.target.value==2); setReinvest(event.target.value)}}>
                    {arr_Reinvest.map((item, index)=>(<option value={index}>{item}</option>))}
                  </select>
                </div>
              </div>
            </div>

            <div className={cn(isMobile ? styles.FlexColumn: styles.FlexRow)}>
              {isShow &&
               <div className={cn(styles.FlexCell)}>

                 <label for="amounFieldID">If my balance reaches this amount, reinvest with this package<span className={cn(styles.Required)}>*</span>
                 </label>
                 <select id="amounFieldID" onChange={(event)=>{setReinvestmentTerm(event.target.value)}}>
                   {arr_reinvestment_term.map((item)=>(<option value="{item}">${item}</option>))}
                 </select>
               </div>
              }

              <div className={cn(isMobile ? styles.FlexRow: styles.Column)}>
                <div className={cn(styles.FlexCell)}>
                  <label for="yearsID">Projection years<span className={cn(styles.Required)}>*</span></label>
                  <select id="yearsID" onChange={(item)=>{setYears(item.target.value)}}>
                    {arr_years.map((item, index)=>(<option value={index}>{item}</option>))}
                  </select>
                </div>
              </div>
            </div>
            <div className={cn(styles.FlexRow)}>

              <div className={cn(styles.FlexCell)}>
                <label for="beginDateId">Starting Date<span className={cn(styles.Required)}>*</span>
                </label>
                <div className={cn(styles.FlexRow)}>
                  <input value={starting_day} name='beginDate' type='date' onChange={(e)=>{setStartingDay(e.target.value)}} id='beginDateId' />
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
      <div id="resultID">
        <div className={cn(styles.HeaderResult)}><h2>Result</h2>
          <p>Note: Avg. daily profits are calculated based on 0.29%/Day, based on current investors data</p>
          <div className={cn(styles.HeaderResultFirstRow, styles.HeaderResultMixin)}>
            <div className={cn(styles.ResultCell)}><h3>Initial Investment</h3><p>{initialInvestmen}</p></div>
            <div className={cn(styles.ResultCell)}><h3>Risk Level</h3><p>{arr_riskLevel[riskLevel].title}</p></div>
            <div className={cn(styles.ResultCell)}><h3>Reinvestment %</h3><p>{arr_Reinvest[reinvest]}%</p></div>
            <div className={cn(styles.ResultCell)}><h3>Reinvestment Term</h3><p>When balance > {reinvestment_term}</p></div>
            <div className={cn(styles.ResultCell)}><h3>Projection Years</h3><p>{arr_years[years]}</p></div>
          </div>
          <div className={cn(styles.HeaderResultSecondRow, styles.HeaderResultMixin)}>
            <div className={cn(styles.ResultCell)}><h3>Total Profits</h3><p>{total_profit}</p></div>
            <div className={cn(styles.ResultCell)}><h3>Total Reinvestment</h3><p>{total_profit}</p></div>
            <div className={cn(styles.ResultCell)}><h3>Net Profit</h3><p>{total_profit}</p></div>
            <div className={cn(styles.ResultCell)}><h3>ROI</h3><p>{total_profit}</p></div>
            <div className={cn(styles.ResultCell)}><h3>Starting Date</h3><p>{starting_day}</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator;
