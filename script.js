function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    let lamp = document.getElementById('lampIcon');
    if (document.body.classList.contains('dark-mode')) {
        lamp.innerText = "🌙";
    } else {
        lamp.innerText = "💡";
    }
}

function calculatePrice() {
    let weight = document.getElementById('weight').value;
    let pricePerKg = document.getElementById('type').value;
    
    if (weight <= 0 || weight == "") {
        document.getElementById('priceResult').innerText = "Lütfən düzgün çəki daxil edin!";
        document.getElementById('priceResult').className = "mt-3 text-center fs-6 text-danger";
        return;
    }
    
    let total = weight * pricePerKg;
    document.getElementById('priceResult').innerText = "Təxmini Qiymət: " + total + " AZN";
    document.getElementById('priceResult').className = "mt-3 text-center fs-5 fw-bold text-success";
}

function trackCargo() {
    let code = document.getElementById('trackCode').value.trim();
    let resultDiv = document.getElementById('trackResult');

    if (code === "") {
        resultDiv.innerText = "Lütfən izləmə kodunu yazın.";
        resultDiv.className = "text-center fw-bold text-danger";
    } else if (code.toUpperCase() === "AZ123") {
        resultDiv.innerText = "Status: Yük yoldadır (Bakı çeşidləmə mərkəzi).";
        resultDiv.className = "text-center fw-bold text-success";
    } else {
        resultDiv.innerText = "Status: Yük gömrükdən keçdi, çatdırılmaya hazırlanır.";
        resultDiv.className = "text-center fw-bold text-primary";
    }
}
