let balance = 56780;
let chartLoaded = false;
let cardFrozen = false;

function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  if(u && p){
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("dashboard").classList.add("active");
    if(!chartLoaded){ setTimeout(loadChart, 200); chartLoaded = true; }
  }
}

function logout() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("login").classList.add("active");
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function deposit() { balance += 500; updateBalance(); }
function withdraw() { balance -= 200; updateBalance(); }
function updateBalance() { document.getElementById("balance").innerText = "$" + balance.toLocaleString(); }

function freeze() {
  cardFrozen = !cardFrozen;
  document.getElementById("cardStatus").innerText = cardFrozen ? "Frozen" : "Active";
}

function togglePassword() {
  let pass = document.getElementById("pass");
  pass.type = pass.type === "password" ? "text" : "password";
}

function loadChart() {
  new Chart(document.getElementById("chart"), {
    type: 'doughnut',
    data: {
      labels: ["Food", "Shopping", "Bills", "Transport"],
      datasets: [{ data: [400, 600, 300, 200], backgroundColor: ["#2a63ff","#ff7a00","#ff3d3d","#00c49f"] }]
    },
    options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
  });
}