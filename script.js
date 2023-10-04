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
        // Loop through expenses array and create table rows
        for (let i = 0; i < expenses.length; i++) {
            const expense = expenses[i];
            const expenseRow = document.createElement("tr");
            expenseRow.innerHTML = `
          <td>${expense.name}</td>
          <td>$${expense.amount}</td>
          <td class="delete-btn" data-id="${i}">Delete</td>
        `;
            expenseList.appendChild(expenseRow);
      
            // Update total amount
            totalAmount += expense.amount;
        }
      
        // Update total amount display
        totalAmountElement.textContent =
            totalAmount.toFixed(2);
      
        // Save expenses to localStorage
        localStorage.setItem("expenses", 
            JSON.stringify(expenses));
    }