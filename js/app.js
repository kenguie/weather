
window.onload = function() {

  document.getElementById("submit").onclick = convert;

  function convert() {
  	var temp = document.getElementById("temp").value;
  	var transform = document.getElementById("convert").value;

  	if (isNaN(temp)) {
  		document.getElementById("answer").innerHTML = 'Sorry, you have to enter a number for a temperature.';
  		return false;
  	}
  
	  if (transform == "F" || transform == "f") {
			cTof(temp);
		} else if (transform == "C" || transform == "c") {
			fToc(temp);
		} else {
			document.getElementById("answer").innerHTML = 'Sorry, you have to choose c or f.';
		};
  };

	function cTof(c) {
		var answer = (((c*9)/5)+32);
		checkFloat(answer);
	};

	function fToc(f) {
		var answer = (((f-32)*5)/9);
		checkFloat(answer);
	};

	function checkFloat(answer) {
		if (answer % 1 === 0) {
			document.getElementById("answer").innerHTML = answer;
		} else {
			document.getElementById("answer").innerHTML = answer.toFixed(2);
		}
	}
};