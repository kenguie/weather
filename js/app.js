
function askTemp() {
	var temp = prompt('Give me a temperature please.');
	var transform = prompt('Would you like to transform that into Farenheit or Celcius? Type F or C.')

	if (transform == "F" || transform == "f") {
		cTof(temp);
	} else if (transform == "C" || transform == "c") {
		fToc(temp);
	} else {
		document.write('Sorry, you have to choose c or f.');
	};
};

var cTof = function(c) {
	document.write(((c*9)/5)+32);
};

var fToc = function(f) {
	document.write(((f-32)*5)/9);
};

// askTemp();