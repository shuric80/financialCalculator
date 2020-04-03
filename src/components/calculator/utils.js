import {withBackgrounds} from "@storybook/addon-backgrounds";
import {func} from "prop-types";

export const Months = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export function CalculateMoney(initial, beginDate, years, risk, reinvenst) {
    const tm = new Date(beginDate);
    const finishDate = new Date(
        tm.getFullYear() + parseInt(years.split(' ')[0]), tm.getMonth(), tm.getDate(),
    );
    console.log(finishDate, beginDate, years);

    const results = [];
    let investment = +initial.replace('$','');
    let totalInvestment = +initial.replace('$','');
    let balance = 0;
    let title = `${Months[tm.getMonth()]} ${ tm.getFullYear()}`;
    let calendar = [];

    let gain = 0;

    if (risk.includes('Low')){
        gain = 0.022;

    } else if (risk.includes('Medium')){
        gain = 0.0257;

    } else if (risk.includes('Hight')){
        gain = 0.029;
    } else {}

    const daily = 1000 * 60 * 60 * 24;


    for (let item = tm.getTime(); item <= finishDate.getTime(); item += daily) {
        const currentDate = new Date(item);
        const last_day_of_month = new Date( currentDate.getFullYear(), currentDate.getMonth()+1, 0);

        investment = '';



        if (currentDate.getDay() === 5 || currentDate.getDay() === 6) {
            calendar.push({
                date: currentDate,
                finishDate,
                investment,
                profit: 'No traiding',
                balance: `$${ balance.toFixed(2)}`,
                totalInvestment: totalInvestment.toFixed(2)
            });
        } else {

            const profit = (totalInvestment * gain);
            balance += profit;

            if (balance > reinvenst) {
                totalInvestment += balance;
                balance = 0;
                investment = `$${reinvenst}`;
            }

            calendar.push({
                date: currentDate,
                finishDate,
                investment,
                profit: `$${profit.toFixed(2)}`,
                balance: `$${balance.toFixed(2)}`,
                totalInvestment: totalInvestment.toFixed(2)
            });
        }

        if(currentDate.getDate() === last_day_of_month.getDate() || currentDate.getTime() > finishDate.getTime()-daily){
            title = `${Months[currentDate.getMonth()]} ${ currentDate.getFullYear()}`;
            results.push({ title, month: calendar });
            calendar = [];
        }
          }

    return results
    }
