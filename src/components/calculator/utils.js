import {withBackgrounds} from "@storybook/addon-backgrounds";
import {func} from "prop-types";

export const Months = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export function CalculateMoney(initial, beginDate, years, risk, reinvenst, profit) {
    const tm = new Date(beginDate);

    const finishDate = new Date(
        tm.getFullYear() + parseInt(years.split(' ')[0]), tm.getMonth(), tm.getDate(),
    );

    const results = {timeline:[], total: {}};

    let investment = +initial.replace('$','');
    let totalInvestment = +initial.replace('$','');
    let balance = 0;
    let title = `${Months[tm.getMonth()]} ${ tm.getFullYear()}`;
    let calendar = [];
    let reinvenstment = 0;

    let totalProfit = 0;
    let totalReinvestment = 0;

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

            const profit_day = (totalInvestment * gain);
            totalReinvestment += profit_day;
            totalProfit += profit_day;

            balance += profit_day;

            if (balance > reinvenst) {
                totalInvestment += balance * profit * 0.01;
                balance = 0;

                investment = `$${reinvenst}`;
            }

            calendar.push({
                date: currentDate,
                finishDate,
                investment,
                profit: `$${profit_day.toFixed(2)}`,
                balance: `$${balance.toFixed(2)}`,
                totalInvestment: totalInvestment.toFixed(2)
            });
        }

        if(currentDate.getDate() === last_day_of_month.getDate() || currentDate.getTime() > finishDate.getTime()-daily){
            title = `${Months[currentDate.getMonth()]} ${ currentDate.getFullYear()}`;
            results.timeline.push({ title, month: calendar });
            calendar = [];
        }
    }

    results.total =  {
        profit:  totalProfit.toFixed(0) + investment,
        reinvenstment: totalReinvestment.toFixed(2),
        net:  0 ,
        roi: 0
    }

    return results
    }
