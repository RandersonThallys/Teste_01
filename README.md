Para execução do código é necessário ter um campo "<input>" do html desde que haja um identificador no mesmo.

Para captura do valor digitado no campo, apenas, troca-se a string 'entrada' pelo identificador acima citado.

Logo após digitasse: 
	start(numberInput)
ao precionar a Enter valor do somatorio será exibido

código:

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


start(num){
	if(numberInput > 0){
		return somatorio(numberInput);
	}
}