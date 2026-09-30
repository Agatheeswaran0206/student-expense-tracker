let total = 0;

function addExpense() {

    let item = document.getElementById("item").value;
    let amount = Number(document.getElementById("amount").value);

    if (item === "" || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    let li = document.createElement("li");

    li.textContent = item + " - ₹" + amount;

    document.getElementById("expenseList").appendChild(li);

    total = total + amount;

    document.getElementById("total").textContent = total;

    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";
}
