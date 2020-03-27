import PropType from 'prop-types';
import React from "react";
import styles from './Results.module.scss'
import cn from 'classnames/bind';
import MonthResults from "./MonthResult";

function showRisk(risk)   {

    if(risk.includes('Low')){ return '0.22%'; }
    else if( risk.includes('Medium')){ return '0.257%';}
    else if(risk.includes('High')){ return '0.29%';}
}

function Results(props) {

    const {values, headers} = props;
    const risk = showRisk(headers[1]);
    return (
        <div className={cn(styles.Results)}>
          <div className={cn(styles.HeaderResult)}><h2>Result</h2>
            <p>Note: Avg. daily profits are calculated based on {risk}/Day, based on current investors data</p>
            <div className={cn(styles.HeaderResultFirstRow, styles.HeaderResultMixin)}>
              <div className={cn(styles.ResultCell)}><h3>Initial Investment</h3><p>{headers[0]}</p></div>
              <div className={cn(styles.ResultCell)}><h3>Risk Level</h3><p>{headers[1]}</p></div>
              <div className={cn(styles.ResultCell)}><h3>Reinvestment %</h3><p>{headers[2]}</p></div>
              <div className={cn(styles.ResultCell)}><h3>Reinvestment Term</h3><p>When balance > {headers[3]}</p></div>
              <div className={cn(styles.ResultCell)}><h3>Projection Years</h3><p>{headers[4]}</p></div>
            </div>
            <div className={cn(styles.HeaderResultSecondRow, styles.HeaderResultMixin)}>
              <div className={cn(styles.ResultCell)}><h3>Total Profits</h3><p>{headers[5]}</p></div>
              <div className={cn(styles.ResultCell)}><h3>Total Reinvestment</h3><p>{headers[6]}</p></div>
              <div className={cn(styles.ResultCell)}><h3>Net Profit</h3><p>{headers[7]}</p></div>
              <div className={cn(styles.ResultCell)}><h3>ROI</h3><p>{headers[8]}</p></div>
              <div className={cn(styles.ResultCell)}><h3>Starting Date</h3><p>{headers[9]}</p></div>
            </div>
          </div>
          {values.map((months, index)=>(<MonthResults values={months.month} date={months.title} key={index}/>))}
        </div>

    )
}

Results.propTypes = {
    values: PropType.arrayOf(PropType.string)
};

export default Results;
