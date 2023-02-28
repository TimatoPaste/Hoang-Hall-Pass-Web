import {getDatabase, ref, update,set} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db = getDatabase();

let formIn = document.getElementById("formOut");
formIn.addEventListener("submit",function(event){
	event.preventDefault();
	let start = new Date();
	let date = start.getMonth()+1+"-"+start.getDate()+"-"+start.getFullYear();
	let fName = document.getElementById("fName").value;
	let lName = document.getElementById("lName").value;
	let id = document.getElementById("id").value;
	
	update(ref(db,date+"/"+fName+"_"+lName+"_"+id),{
		First_Name : fName,
		Last_Name : lName,
		ID : id,
		LeftMs : start.getTime(),
		LeftStamp : start.getHours()+":"+start.getMinutes()+":"+start.getSeconds()+":"+start.getMilliseconds()+";"+date
	});
	alert("See you!");
	
});


//things to try/catch:
//Have directories stay same even if someone accidentally comes back on a different day
//Make a forget fail-safe
//Make sure that you can't come back without going out first
//Make sure that you can't go out twice
//Iterate through database and create statistics
//Make case insensitive
//Rid of whitespaces
