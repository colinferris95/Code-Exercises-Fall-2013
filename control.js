var resp 
var num 
do

	 resp = prompt( "Enter a number 1 to 10: ");
	 num = parseFloat(resp);

	if (num < 1) {
		alert( "I need a number greater than or equal to 1!");
		continue;
	}
	 else   ( num > 10) {
		alert( "I need a number less than or equal to 10!' ");
		break;
	}
	while (false);
	
	alert( "hooray! your number is " + num );