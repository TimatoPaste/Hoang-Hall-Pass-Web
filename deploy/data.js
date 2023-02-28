import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db = getDatabase();

function outData(){
	let end = new Date();
	set(ref(db,"student/"+fName+" "+lName+" "+id),{
		First_Name : fName,
		Last_Name : lName,
		Student_ID : id,
		Back : start.getTime()
	});
}

function test(){
	console.log("worksasdfasfasdfsadfasdfffffffffffffffffffffffffff");
}

let form = document.getElementById("form");
formIn.addEventListener("submit",function(event){
	event.preventDefault();
	let start = new Date();
	let fName = document.getElementById("fName").value;
	let lName = document.getElementById("lName").value;
	let id = document.getElementById("id").value;
	set(ref(db,"student/"+fName+"_"+lName+"_"+id),{
		First_Name : fName,
		Last_Name : lName,
		Student_ID : id,
		Left : start.getTime()
	});
});
