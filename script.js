buttonDom = document.getElementById("enter_button");
inputDom = document.getElementById("input");

outputDom = document.getElementById("output");

buttonDom.addEventListener("click", () => {
  outputDom.innerText = "Hello " + inputDom.value;
  outputDom.innerText.length;
  inputDom.value = "";

});