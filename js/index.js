const amountE1 = document.querySelector("#amount");
const yearsE1 = document.querySelector("#years");
const ratetE1 = document.querySelector("#rate");
const repayment1E1 = document.querySelector("#repayment1");
const repayment2E1 = document.querySelector("#repayment2");
const feeE1 = document.querySelector("#fee");


const caleE1 = document.querySelector("#cale")


console.log(amountE1, yearsE1, ratetE1, repayment1E1, repayment2E1, feeE1);



caleE1.addEventListener("click", calcLoan);

function calcLoan() {
    let amount = amountE1.value * 10000;
    let years = yearsE1.value;
    let ratet = ratetE1.value / 100;
    let fee = feeE1.checked ? 5000 : 0;
    // 取得不同計算方式
    let rule = repayment1E1.checked ? 1 : 2;

    let interest = amount * ratet * years;
    let totalAmount = amount + interest + fee;
    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? "" : "(含手續費)");
    document.querySelector(".totalinterest").innerText = interest + "元";
    const resultE1 = document.querySelector("#result");
    resultE1.style.display = "none";
    setTimeout(function () {
        resultE1.style.display = "block";
    }, 500);





    //if (feeE1.checked) {
    //  fee = 5000;
    //}
    console.log(amount, years, ratet, fee, totalAmount, interest)

}


