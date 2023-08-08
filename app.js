// переменные 
let screen = document.querySelector('.screen')
let num = parseInt(screen.value)
let sum = 0
const buttons = Array.from(document.getElementsByClassName('cal-button'))
const symbols = Array.from(document.getElementsByClassName('symbol')) 
const clear = document.querySelector('.clear')
const larr = document.querySelector('.larr')
const equals = document.querySelector('.equals')



// доп переменные
let buffer = '0'
let total = 0

// функция для получение значение цифр
buttons.forEach((button) => {
	button.addEventListener('click', function() {
		const buttonValue = this.value;
		if (screen.value === '0') {
			screen.value = buttonValue
		} else if (screen.value.length = 1) {
			screen.value += buttonValue
		}
		
	});
});

// функция для обуления цифр
clear.addEventListener('click', () => {
	screen.value = '0'
	sum = 0
	num1 = 0
})

larr.addEventListener('click', () => {
	if (screen.value.length === 1) {
		screen.value = '0'
	} else {
		screen.value = screen.value.substring(0, screen.value.length - 1)
	}
})

//	function to sum a numbers

let isAdding = false
let num1 = 0

symbols.forEach((symbol) => {
	symbol.addEventListener('click', function() {
		const symbolValue = this.value;
		
		if(symbolValue === '+') {
			let num = parseInt(screen.value)
			console.log(num);
			if (!isNaN(num)) {
				if (isAdding === true) {
					let sum = num1 + num
					screen.value = sum
					num1 = sum
					console.log('if' + num);
					isAdding = false
				} else {
					num1 = num
					screen.value = '0'
					isAdding = true;
					console.log('else' + num);
				}
			}
				
	
				
		}else if(symbolValue === '-') {
			let num = parseInt(screen.value)
			console.log(num);
			if (!isNaN(num)) {
				if (isAdding === true) {
					let sum = num1 - num
					screen.value = sum
					num1 = sum
					isAdding = false
				} else {
					num1 = num
					screen.value = '0'
					isAdding = true;
				}
			}
		} else if(symbolValue === '÷') {
			let num = parseInt(screen.value)
			console.log(num);
			if (!isNaN(num)) {
				if (isAdding === true) {
					let sum = num1 / num
					screen.value = sum
					num1 = sum
					
					isAdding = false
				} else {
					num1 = num
					screen.value = '0'
					isAdding = true;
				}
			}
		} else if(symbolValue === '×') {
			let num = parseInt(screen.value)
			console.log(num);
			if (!isNaN(num)) {
				if (isAdding === true) {
					let sum = num1 * num
					screen.value = sum
					num1 = sum
					
					isAdding = false
				} else {
					num1 = num
					screen.value = '0'
					isAdding = true;
				}
			}
		} else {
			screen.value = 'You wrote down Not a number!'
		}
		
	})	
})










// ...
// Ваш код до этого момента остается неизменным

equals.addEventListener('click', () => {
	const currentNum = parseInt(screen.value);
	if (!isNaN(currentNum) && isAdding) {
		if (symbols.length > 0) {
			let result;
			switch (symbols[0].value) {
				case '+':
					result = num1 + currentNum;
					break;
				case '-':
					result = num1 - currentNum;
					break;
				case '÷':
					result = num1 / currentNum;
					break;
				case '×':
					result = num1 * currentNum;
					break;
			}
			screen.value = result;
			num1 = result;
			isAdding = false;

			symbols.splice(0, 1);
		}
	}
});



