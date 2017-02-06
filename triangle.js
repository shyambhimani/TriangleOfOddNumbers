function triangleOfOddNumber(param){

	var number = 1;

	for (var i = 0; i < param; i++){

		var output = "";

		for (var space = 0; space < param-i; space++){

			output +=" ";

		}

		for (var k = 1; k <= i; k++){

			output += number + ' ';
			number += 2;
		}
		
		console.log(output);

	}	

}


triangleOfOddNumber(10);

function pyramid(param){
	
	var number = 1;
	
	for(var i = 0; i < param; i++){
		
		for(var j = number; j >= i; j--){
			var output = number + ' ';
			number+2;
			
			console.log(number);
			
		}
				
	}
}

pyramid(10);

