`This project implements a clone of cat function 

Functions:

1: node wcat.js [options] [filepath]

OPTIONS:
-s -> Remove extra multiple line spaces and show contents
-n -> Show number before each line.
-b -> Don't show number for empty lines

`
const fs = require("fs")
// Taking arguments from console

const input = process.argv.slice(2);

// 

let filesAr = [];
let optionAr = [];
//Push the files to be appended if exists.
for(let i = 0 ; i<input.length; i++){
	if(input[i][0]=='-'){
		optionAr.push(input[i]);
	}
	else{
	if(fs.existsSync(input[i])){
		filesAr.push(input[i]);}
	else{
		console.log(`Path Error: File ${input[i]} doesn't exists.`);
		return;// End the program
		}
	}
}

console.log("Files to open: "+ filesAr +"\n\n" );

// Append the contents of all File(s)
let content = ""
for(let i = 0;i<filesAr.length;i++){
	let fileContent = fs.readFileSync(filesAr[i])+"";
	// apply flags to the content

	fileContent = do_flag(fileContent,optionAr);
	// console.log(fileContent);

	content += fileContent+"\n-----------------------------------\n"
}

//Printing the appended File

console.log(content);


// Creating function to remove extra newline in between
function doflag_s(string){
	let arr = string.split("\r\n")
	// console.log(arr)
	let con = "";

	for(let i=0;i<arr.length;i++){
		if(!(arr[i]=="" && arr[i-1]==""))
			con+= '\n' + arr[i];
	}
	// console.log(con);
 return con;
}
// Creating function to add numbers to the newline
function doflag_n(string){
	let content = "";
	let sarr =  string.split("\r\n");
	// console.log(sarr);
	let num = 1;
	for(let i of sarr){
		content+=num+++"." + i + "\n";
	}
 return content;
}
// Creating function to add numbers only to non empty lines after a new line
function doflag_b(string){
	let content = "";
	let sarr =  string.split("\r\n");
	// console.log(sarr);
	let num = 1;
	for(let i of sarr){

		content+= (i!=""?num+++".":"") + i + "\n";
	}
 return content;
}

//Function to combine multiple flags

function do_flag(string,flag_array){
 for(let i of flag_array){
 	if(i=='-s'){
 		string = doflag_s(string);
 		// console.log("Apply -s");
 	}

 	else if(i=='-n')
 		string = doflag_n(string);
  

  else if(i=='-b')
  	string = doflag_b(string);

  else
  	throw "Flag Error: Use only -s -n and -b flags. "


}
return string;
}
