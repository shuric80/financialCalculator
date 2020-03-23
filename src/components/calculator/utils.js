export function CalculateMoney(initial, beginDate, years, gain, reinvenst) {
  const finishDate = new Date(
    beginDate.getFullYear() + 1, beginDate.getMonth(), beginDate.getDate(),
  );

  const results = [];
  let investment = initial;
  let totalInvestment = initial;
  let balance = 0;


  for (let item = beginDate.getTime(); item <= finishDate.getTime(); item += 86400000) {
    const currentDate = new Date(item);
    investment = '';

    if (currentDate.getDay() === 5 || currentDate.getDay() === 6) {
      results.push({
        date: currentDate,
        investment: investment,
        profit: 'No traiding',
        balance: `$${ balance}`,
          totalInvestment
      });
    } else {

      const profit = (totalInvestment * gain);
      balance += profit;

      if (balance > reinvenst) {
        totalInvestment += balance;
        balance = 0;
        investment = `$${reinvenst}`;
      }

      results.push({
        date: currentDate,
        investment,
        profit: `$${profit}`,
        balance: `$${balance}`,
        totalInvestment
      });
    }
  }
  return results;
}
