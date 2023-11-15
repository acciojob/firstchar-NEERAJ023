function firstChar(text) {
  // your code here
	for(let k=0; k<text.length; k++){
		if(text[k]!==" "){
			return text[k];
		}
	}
	return "";
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));


