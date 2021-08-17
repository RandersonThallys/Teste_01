let inputValue = document.getElementsById('entrada');
let numberInput = parseInt(inputValue);

somatorio(num){
	let sum = 0;

	for (var i = 0; i < num; i++) {
		
		if(i%3 == 0){
			sum += i;
		}else if(i%5 == 0){
			sum += i;
		}	
	}

	return sum;
}

if(numberInput > 0){
	somatorio(numberInput);
}