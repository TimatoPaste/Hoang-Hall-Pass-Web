import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db = getDatabase();

let formIn = document.getElementById("formIn");
formIn.addEventListener("submit",function(event){
	event.preventDefault();
	let start = new Date();
	let fName = document.getElementById("fName");
	let lName = document.getElementById("lName");
	let id = document.getElementById("id");
	
	set(ref(db,"student/"+fName+"_"+lName+"_"+id),{
		First_Name : fName,
		Last_Name : lName,
		ID : id
		Left : start.getTime();
		
	});
	
});