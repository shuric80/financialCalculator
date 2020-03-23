import cn from "classnames/bind";
import styles from "./MonthResult.module.scss";
import React from "react";
import {PropTypes} from "prop-types";

const Months = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export function MonthResults(props) {
    const { values } = props;
    // const date =  new Date();
    // const daysInMonth = 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
    // const calendar = [];

    // for (let i = 0; i <= daysInMonth; ++i){
    //     calendar.push(new Date(date.getFullYear(), date.getMonth(), i));
    // };
    return (
        <div className={cn(styles.MonthResult)}>
            <h5>Feb 2002</h5>
            <table>
                <tbody>
                <tr>
                    <td>Date</td>
                    <td>Day</td>
                    <td>Investment</td>
                    <td>Profit</td>
                    <td>Balance</td>
                    <td>Total Investment</td>
                    <td>Contract Finish Date</td>
                </tr>
                {
                    values.map((item)=>(<tr>
                        <td>{Months[item.date.getMonth()]}&ensp;{item.date.getDate()}&ensp;{item.date.getFullYear()}</td>
                        <td>{Days[item.date.getDay()]}</td>
                        <td>{item.investment}</td>
                        <td>{item.profit}</td>
                        <td>{item.balance}</td>
                        <td>{item.totalInvestment}</td>
                    </tr>))
                }
                </tbody>
            </table>

        </div>
    )
};