const expenseForm =
    document.getElementById("expense-form");
const expenseList =
    document.getElementById("expense-list");
const totalAmountElement =
    document.getElementById("total-amount");
  
// Initialize expenses array from localStorage
let expenses = 
    JSON.parse(localStorage.getItem("expenses")) || [];
  
// Function to render expenses in tabular form
function renderExpenses() {
  
    // Clear expense list
    expenseList.innerHTML = "";
  
    // Initialize total amount
    let totalAmount = 0;