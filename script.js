var input1 = document.querySelector("#color1");
var input2 = document.querySelector("#color2");
var body1 = document.getElementsByTagName("body")[0];
console.log(body1);

input1.addEventListener("input", setBgColor);

input2.addEventListener("input", setBgColor);

function setBgColor() {
	body1.style.background = "linear-gradient(to right," +input1.value+ "," + input2.value  +")" ;
	return

}