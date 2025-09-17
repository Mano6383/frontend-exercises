fetch('https://api.frankfurter.dev/v1/currencies')
	.then(response=>response.json())
	.then(data=>{
		let currency1=document.querySelector('.left_con')
		let currency2=document.querySelector('.right_con')
		for(let [code,name] of Object.entries(data)){
			let opt=document.createElement('option')
			opt.value=code
			opt.innerHTML=`${code}-${name}`
			currency1.appendChild(opt)
			currency2.appendChild(opt.cloneNode(true))
		}
	})
let btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
	let currency1=document.querySelector('.left_con').value
	let currency2=document.querySelector('.right_con').value
	let amount=document.querySelector('.left_amount').value
    if(currency1==currency2){
        alert("Choose different currencies to convert")
    }
	if(amount==0||amount=="")
		alert("Enter a valid amount to convert")
	else {
    fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency1}&to=${currency2}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);  
        document.querySelector('.right_amount').value = data.rates[currency2];
      });
  }
});
