function calculateMortgage() {
  const principal = document.getElementById("principal").value;
  const interestRate = document.getElementById("interestRate").value / 100 / 12;
  const loanTermMonths = document.getElementById("loanTerm").value * 12;

  const mortgagePayment =
    (principal * interestRate) /
    (1 - Math.pow(1 + interestRate, -loanTermMonths));

  // convert this formula: (1 + r)n-1
  // into inverse formula: (1−(1+r)−n)

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Monthly Mortgage Payment: £${mortgagePayment.toFixed(
    2
  )}`;
}
