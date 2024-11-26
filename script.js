// Constants for correct values and formulas
const correctFormula = { var1: "pizzas_sold", operator: "*", var2: "pizza_price" };
const correctValues = {
    pizzas_sold: 50,
    pizza_price: 20,
    oven_cost: 25000,
    profit_margin: 0.20,
};

// Pre-calculated values
const dailyRevenue = correctValues.pizzas_sold * correctValues.pizza_price;
const dailyProfit = dailyRevenue * correctValues.profit_margin;

// Function to manage screen navigation
function nextScreen(screen) {
    const activeScreen = document.querySelector('.screen.active');
    activeScreen.classList.remove('active');
    const nextScreen = document.getElementById(`screen${screen}`);
    if (nextScreen) {
        nextScreen.classList.add('active');
    }
}

function prevScreen(screen) {
    const activeScreen = document.querySelector('.screen.active');
    activeScreen.classList.remove('active');
    const previousScreen = document.getElementById(`screen${screen}`);
    if (previousScreen) {
        previousScreen.classList.add('active');
    }
}

// Revenue calculation check
function checkRevenueFormula() {
    const var1 = document.getElementById('var1').value;
    const operator = document.getElementById('operator').value;
    const var2 = document.getElementById('var2').value;

    if (var1 === correctFormula.var1 && operator === correctFormula.operator && var2 === correctFormula.var2) {
        alert("Correct! You have chosen the right formula for daily revenue.");
        nextScreen(3);
        document.getElementById('selectedOperator').innerText = operator;
    } else {
        alert("Incorrect. Please try again.");
    }
}

// Revenue calculation function
function checkRevenueCalculation() {
    const value1 = parseInt(document.getElementById('value1').value);
    const value2 = parseInt(document.getElementById('value2').value);
    const revenueResult = parseInt(document.getElementById('revenueResult').value);

    if (value1 === correctValues.pizzas_sold && value2 === correctValues.pizza_price && revenueResult === dailyRevenue) {
        alert("Correct! The calculated daily revenue is correct.");
        nextScreen(3.1);
    } else {
        alert("Incorrect. Please try again.");
    }
}

// Profit calculation check
function checkProfitCalculation() {
    const dailyRevenueInput = parseInt(document.getElementById('dailyRevenue').value);
    const profitMarginInput = parseFloat(document.getElementById('profitMargin').value);
    const profitResultInput = parseInt(document.getElementById('profitResult').value);

    if (dailyRevenueInput === dailyRevenue && profitMarginInput === correctValues.profit_margin && profitResultInput === dailyProfit) {
        alert("Correct! The calculated daily profit is correct.");
        nextScreen(3.5);
    } else {
        alert("Incorrect. Please try again.");
    }
}

// Break-even formula check
function checkBreakEvenFormula() {
    const breakEvenVar1 = document.getElementById('breakEvenVar1').value;
    const breakEvenOperator = document.getElementById('breakEvenOperator').value;
    const breakEvenVar2 = document.getElementById('breakEvenVar2').value;

    if (breakEvenVar1 === "oven_cost" && breakEvenOperator === "/" && breakEvenVar2 === "daily_profit") {
        alert("Correct! You have chosen the right formula for break-even.");
        nextScreen(4.5);
        document.getElementById('selectedBreakEvenOperator').innerText = breakEvenOperator;
    } else {
        alert("Incorrect. Please try again.");
    }
}

// Break-even days calculation check
function checkBreakEvenDaysCalculation() {
    const breakEvenValue1 = parseInt(document.getElementById('breakEvenValue1').value);
    const breakEvenValue2 = parseInt(document.getElementById('breakEvenValue2').value);
    const breakEvenResultInput = parseInt(document.getElementById('breakEvenResult').value);

    if (breakEvenValue1 === correctValues.oven_cost && breakEvenValue2 === dailyProfit && breakEvenResultInput === (correctValues.oven_cost / dailyProfit)) {
        alert("Correct! The calculated break-even days is correct.");
        nextScreen(5);
    } else {
        alert("Incorrect. Please try again.");
    }
}
