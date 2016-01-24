var fs  = require('fs');
var args = process.argv.slice(2);
var f1 = fs.readFileSync(args[0]);
var sys = require('sys');
var fileString = f1.toString();
var patt = /\s+/;
var form = fileString.split(patt);
var input = [];
var output = [];




for(var i  =0; i < form.length; i++){
	if(form[i] === "SEQRES"){
		//first seqres
		//find next one
		for (var j = i+4; j < i+ 17; j++){
			input.push(form[j]);
		}
	}
}
if(input.toString().indexOf("HELIX") > -1){
	output.push("0");
}
else if (input.toString().indexOf("SHEET") > -1){
	output.push("1");
}
input = input.toString().split("HELIX")[0].split(",").slice(0,-1);


//now need to format into "question/answer" frormat expected by sscrnn.py
var singleCodeLookUp = {
 "GLY":"G",
 "ALA":"A",
 "LEU":"L",
 "MET":"M",
 "PHE":"F",
 "TRP":"W",
"PRO":"P",
"VAL":'V',
"ILE":"I",
"CYS":'C',
"TYR":"Y",
"HIS":"H",
"LYS":"K",
"GLN":"Q",
"GLU":"E",
"SER":"S",
"ARG":"R",
"ASN":"N",
"ASP":"D",
"THR":"T"

};

var formattedInput = [];
for(var i = 0; i < input.length; i++){
	console.log(input[i]);
	formattedInput.push(singleCodeLookUp[input[i]]);
}

console.log(formattedInput.toString().replace(/,/g,''));

fs.appendFile('input.txt',formattedInput, function (err) {

});
fs.appendFile('output.txt',output, function (err) {

});






