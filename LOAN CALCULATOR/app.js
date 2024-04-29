window.onload =()=>{
   const input= document.querySelectorAll("input");

   input.forEach(input => {
    input.addEventListener('change', calculateLoan)
   })
}

function calculateLoan (){
    const principal = document.querySelector('#amount').value;
    const intrestRate = document.querySelector('#intrest').value;
    const tenure = document.querySelector('#tenure').value;

    if(!principal || !intrestRate || !tenure)return;

    const monthlyInterest=intrestRate/100/12;
    const emi = principal*monthlyInterest*Math.pow(1+monthlyInterest,tenure)/(Math.pow(1+monthlyInterest,tenure)-1);
    
    const totalAmont =emi*tenure;
    const totalInterest= totalAmont-principal;

     document.querySelector('#emi').innerText = 'Emi : ₹ '+emi.toFixed(2);
     document.querySelector('#totalAmount').innerText = 'Total Amount: ₹ '+totalAmont.toFixed(2);
     document.querySelector('#totalInterest').innerText= 'Total Intrest: ₹ '+totalInterest.toFixed(2);
    

}
