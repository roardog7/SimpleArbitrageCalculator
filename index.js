function toggleLightMode() {
     document.body.classList.toggle("light-mode");
}

function calculateArbitrage2() {
     let amount = parseFloat(document.getElementById("amount2").value);
     let oddA = parseFloat(document.getElementById("oddA").value);
     let oddB = parseFloat(document.getElementById("oddB").value);
     
     if (isNaN(amount) || isNaN(oddA) || isNaN(oddB)) {
         document.getElementById("result2").innerText = "Please enter valid values";
         document.getElementById("profit2").innerText = "";
         return;
     }
     
     let impliedProbability = (1 / oddA) + (1 / oddB);
     if (impliedProbability < 1) {
         let stakeA = (amount / oddA) / impliedProbability;
         let stakeB = (amount / oddB) / impliedProbability;
         let profit = amount * (1 - impliedProbability);
         document.getElementById("result2").innerText = `Bet: ${stakeA.toFixed(2)}, ${stakeB.toFixed(2)}`;
         document.getElementById("profit2").innerText = `Expected Profit: ${profit.toFixed(2)}`;
     } else {
         document.getElementById("result2").innerText = "No arbitrage opportunity available";
         document.getElementById("profit2").innerText = "";
     }
}

function calculateArbitrage3() {
     let amount = parseFloat(document.getElementById("amount3").value);
     let odd1 = parseFloat(document.getElementById("odd1").value);
     let odd2 = parseFloat(document.getElementById("odd2").value);
     let odd3 = parseFloat(document.getElementById("odd3").value);
     
     if (isNaN(amount) || isNaN(odd1) || isNaN(odd2) || isNaN(odd3)) {
         document.getElementById("result3").innerText = "Please enter valid values";
         document.getElementById("profit3").innerText = "";
         return;
     }
     
     let impliedProbability = (1 / odd1) + (1 / odd2) + (1 / odd3);
     if (impliedProbability < 1) {
         let stake1 = (amount / odd1) / impliedProbability;
         let stake2 = (amount / odd2) / impliedProbability;
         let stake3 = (amount / odd3) / impliedProbability;
         let profit = amount * (1 - impliedProbability);
         document.getElementById("result3").innerText = `Bet: ${stake1.toFixed(2)}, ${stake2.toFixed(2)}, ${stake3.toFixed(2)}`;
         document.getElementById("profit3").innerText = `Expected Profit: ${profit.toFixed(2)}`;
     } else {
         document.getElementById("result3").innerText = "No arbitrage opportunity available";
         document.getElementById("profit3").innerText = "";
     }
}