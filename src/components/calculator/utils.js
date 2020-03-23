import {withBackgrounds} from "@storybook/addon-backgrounds";

export const Months = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function CalculateMoney(initial, beginDate, years, gain, reinvenst) {
  const finishDate = new Date(
    beginDate.getFullYear() + 1, beginDate.getMonth(), beginDate.getDate(),
  );

  const results = [];
  let investment = initial;
  let totalInvestment = initial;
  let balance = 0;
  let title = `${Months[beginDate.getMonth()]} ${ beginDate.getFullYear()}`;
  let calendar = [];


  for (let item = beginDate.getTime(); item <= finishDate.getTime(); item += 86400000) {
    const currentDate = new Date(item);

    if(currentDate.getDate() == 1){
        title = `${Months[currentDate.getMonth()]} ${ currentDate.getFullYear()}`;
        results.push({ title, month: calendar });
        calendar = [];
    }

    investment = '';

    if (currentDate.getDay() === 5 || currentDate.getDay() === 6) {
      calendar.push({
        date: currentDate,
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
        investment,
        profit: `$${profit.toFixed(2)}`,
        balance: `$${balance.toFixed(2)}`,
        totalInvestment: totalInvestment.toFixed(2)
      });
    }
  }

  return results;
}
