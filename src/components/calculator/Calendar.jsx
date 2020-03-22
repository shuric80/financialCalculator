import cn from 'classnames/bind';
import PropType from 'prop-types';

import React from 'react';
import styles from './Calendar.module.scss';
import { Icon } from './Icon';

function Calendar(props) {
    const { beginDate, handler } = props;
    return (
        <div className={cn(styles.Calendar)}>
          <span className={cn(styles.Title)}>
            Starting Date
            <span className={cn(styles.Required)}>*</span>
          </span>
          <div className={cn(styles.Row)}>
            <input value={beginDate} name='beginDate' type='date' onChange={handler} />
            <Icon />
          </div>
        </div>
    );
}

Calendar.propTypes = {
    beginDate: PropType.string.isRequired,
    handler: PropType.func.isRequired,
};

export default Calendar;
