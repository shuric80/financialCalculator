import cn from 'classnames/bind';
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './MonthResult.module.scss';
import { Months, Days } from './utils';


function MonthResults(props) {
    const { values, date } = props;

    const [isShowDetail, setShow ] = useState(false);

    return (
        <div className={cn(styles.MonthResult)} onClick={(event) => { setShow(!isShowDetail); }}>
          <div className={cn(styles.Title)}><h5>{date}</h5>{ isShowDetail || <div>+</div>}</div>
          { isShowDetail
            && (
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
                          values.map((item, index) => (
                              <tr>
                                <td>
                                  {Months[item.date.getMonth()]}
                                  &ensp;
                                  {item.date.getDate()}
                                  &ensp;
                                  {item.date.getFullYear()}
                                </td>
                                <td>{Days[item.date.getDay()]}</td>
                                <td>{item.investment}</td>
                                <td>{item.profit}</td>
                                <td>{item.balance}</td>
                                <td>{item.totalInvestment}</td>
                                { index === 0 && <td>{item.finishDate.getMonth()}-{item.finishDate.getDate()}-{item.finishDate.getFullYear()}</td>}
                              </tr>
                          ))
                      }
                    </tbody>
                  </table>
                </div>
            )}

        </div>
    );
}

MonthResults.propTypes = {
    values: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
};

export default MonthResults;
