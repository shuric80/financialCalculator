import cn from "classnames/bind";
import styles from "./MonthResult.module.scss";
import React, {useState} from "react";
import {PropTypes} from "prop-types";
import {Months, Days} from "./utils";

export function MonthResults(props) {

    const { values, date } = props;
    const {isShow, setShow } = useState(true);

    return (
        <div className={cn(styles.MonthResult)} onClick={()=>setShow(true)}>
            <h5>May 2020</h5>
            <div className={cn(styles.Content)}>
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
                    values.map((item) => (<tr>
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

        </div>
    )
};