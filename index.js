const nameSpan = document.getElementById('cardHolderSpan')
const numberSpan = document.getElementById('cardNumberSpan')
const cardName = document.getElementById('cardHolderName')
const cardNumber = document.getElementById('cardNumber')
const expMonthInput = document.getElementById('expMonthInput')
const expYearInput = document.getElementById('expYearInput')
const expMonthSpanText = document.getElementById('expMonthSpan')
const expYearSpanText = document.getElementById('expYearSpan')
const cvcInput = document.getElementById('cvc')
const cvcSpanText = document.getElementById('cvcSpan')
const confirmBtn = document.getElementById('confirm-btn')
const continueBtn = document.getElementById('continueBtn')

//Exp. Date format //
expMonthInput.onkeyup = function (e) {
    if(this.value == this.lastValue) return;
    let caretPosition = this.selectionStart;
    let sanitizeValue = this.value.replace(/[^0-9]/gi, '');
    let parts = [];

    for (let i = 0, len = sanitizeValue.length; i < len; i += 2) {
        parts.push(sanitizeValue.substring(i, i + 2));
    }

    for (let i = caretPosition - 1; i >= 0; i--) {
        let c = this.value[i];
        if(c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 2);

    this.value = this.lastValue = parts.join('');
    this.selectionStart = this.selectionEnd = caretPosition;
}

expYearInput.onkeyup = function (e) {
    if(this.value == this.lastValue) return;
    let caretPosition = this.selectionStart;
    let sanitizeValue = this.value.replace(/[^0-9]/gi, '');
    let parts = [];

    for (let i = 0, len = sanitizeValue.length; i < len; i += 2) {
        parts.push(sanitizeValue.substring(i, i + 2));
    }

    for (let i = caretPosition - 1; i >= 0; i--) {
        let c = this.value[i];
        if(c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 2);

    this.value = this.lastValue = parts.join('');
    this.selectionStart = this.selectionEnd = caretPosition;
}

// CVC format //
cvcInput.onkeyup = function (e) {
    if(this.value == this.lastValue) return;
    let caretPosition = this.selectionStart;
    let sanitizeValue = this.value.replace(/[^0-9]/gi, '');
    let parts = [];

    for (let i = 0, len = sanitizeValue.length; i < len; i += 2) {
        parts.push(sanitizeValue.substring(i, i + 2));
    }

    for (let i = caretPosition - 1; i >= 0; i--) {
        let c = this.value[i];
        if(c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 2);

    this.value = this.lastValue = parts.join('');
    this.selectionStart = this.selectionEnd = caretPosition;
}

// Credit card number format //
cardNumber.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    let caretPosition = this.selectionStart;
    let sanitizeValue = this.value.replace(/[^0-9]/gi, '');
    let parts = [];

    for (let i = 0, len = sanitizeValue.length; i < len; i += 4) {
        parts.push(sanitizeValue.substring(i, i + 4));
    }

    for(let i = caretPosition - 1; i >= 0; i--) {
        let c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 4);

    this.value = this.lastValue = parts.join(' ');
    this.selectionStart = this.selectionEnd = caretPosition;
}


// Render details on card images //
cardName.addEventListener('input', function (input) {
    nameSpan.innerHTML = input.target.value;
});

cardNumber.addEventListener('input', function (input) {
    numberSpan.innerHTML = input.target.value;
});

expMonthInput.addEventListener('input', function(input) {
    expMonthSpanText.innerHTML = input.target.value;
});

expYearInput.addEventListener('input', function (input) {
    expYearSpanText.innerHTML = input.target.value;
});

cvcInput.addEventListener('input', function(input) {
    cvcSpanText.innerHTML = input.target.value;
});

// Button function //
confirmBtn.addEventListener('click', function() {
    if (cardName.value === '') {
        document.getElementById('errorMessageName').style.display='flex';
    }else if (cardNumber.value === ''){
        document.getElementById('errorMessageCardNumber').style.display='flex';
    }else if (expMonthInput.value === '' || expYearInput === ''){
        document.getElementById('errorMessageExpDate').style.display='flex';
    }else if (cvcInput.value === ''){
        document.getElementById('errorMessageCvc').style.display='flex';
    }else {
        document.getElementById('completedState').style.display='block';
        document.getElementById('continueBtn').style.display='block';
        document.getElementById('formContainer').style.display='none';
        document.getElementById('confirmBtnContainer').style.display='none';
    }
})

continueBtn.addEventListener('click', function () {
    location.reload();
    return false;
})
