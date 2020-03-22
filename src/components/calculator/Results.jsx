import PropType from 'prop-types';
import React from "react";
import styles from './Results.module.scss'
import cn from 'classnames/bind';
import {MonthResults} from "./MonthResult";

function Results(props) {

   const {values} = props;
    return (
        <div className={cn(styles.Results)}>
                <div className={cn(styles.HeaderResult)}><h2>Result</h2>
                    <p>Note: Avg. daily profits are calculated based on 0.29%/Day, based on current investors data</p>
                    <div className={cn(styles.HeaderResultFirstRow, styles.HeaderResultMixin)}>
                        <div className={cn(styles.ResultCell)}><h3>Initial Investment</h3><p>{values[0]}</p></div>
                        <div className={cn(styles.ResultCell)}><h3>Risk Level</h3><p>{values[1]}</p></div>
                        <div className={cn(styles.ResultCell)}><h3>Reinvestment %</h3><p>{values[2]}</p></div>
                        <div className={cn(styles.ResultCell)}><h3>Reinvestment Term</h3><p>When balance > {values[3]}</p></div>
                        <div className={cn(styles.ResultCell)}><h3>Projection Years</h3><p>{values[4]}</p></div>
                    </div>
                    <div className={cn(styles.HeaderResultSecondRow, styles.HeaderResultMixin)}>
                        <div className={cn(styles.ResultCell)}><h3>Total Profits</h3><p>{values[5]}</p></div>
                        <div className={cn(styles.ResultCell)}><h3>Total Reinvestment</h3><p>{values[6]}</p></div>
                        <div className={cn(styles.ResultCell)}><h3>Net Profit</h3><p>{values[7]}</p></div>
                        <div className={cn(styles.ResultCell)}><h3>ROI</h3><p>{values[8]}</p></div>
                        <div className={cn(styles.ResultCell)}><h3>Starting Date</h3><p>{values[9]}</p></div>
                    </div>
                </div>
            <MonthResults />

            </div>
    )
}

    Results.propTypes = {
    values: PropType.arrayOf(PropType.string)
    };

export default Results;