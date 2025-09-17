fetch('https://api.frankfurter.dev/v1/currencies')
.then(res => res.json())
.then(data => {
    const leftSelect = document.querySelector('.left_con');
    const rightSelect = document.querySelector('.right_con');

    for (const [code, name] of Object.entries(data)) {
        const option1 = document.createElement('option');
        option1.value = code;
        option1.textContent = `${code} - ${name}`;
        leftSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = code;
        option2.textContent = `${code} - ${name}`;
        rightSelect.appendChild(option2);
    }
});

let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const leftSelect = document.querySelector('.left_con').value;
    const rightSelect = document.querySelector('.right_con').value;
    const leftAmount = document.querySelector('.left_amount').value;

    if (!leftAmount || Number(leftAmount) <= 0) {
        alert('Please enter a valid amount');
    } else {
        fetch(`https://api.frankfurter.dev/v1/latest?amount=${leftAmount}&from=${leftSelect}&to=${rightSelect}`)
        .then(res => res.json())
        .then(data => {
            const rate = Object.values(data.rates)[0];
            document.querySelector('.right_amount').value = rate;
        });
    }
});
