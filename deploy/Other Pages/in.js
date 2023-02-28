function milliToStamp(mil){
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let milliseconds = 0;
	if(mil % 3600000 != mil){
		hours = Math.floor(mil/3600000);
		mil-=3600000*hours;
	}
	if(mil % 60000 != mil){
		minutes = Math.floor(mil/60000);
		mil-=60000*minutes;
	}
	if(mil % 1000 != mil){
		seconds = Math.floor(mil/1000);
		mil-=1000*seconds;
	}
	milliseconds = mil;
	return ""+hours+":"+minutes+":"+seconds+":"+milliseconds;
}

import {getDatabase, ref, set, update,onValue} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db = getDatabase();

let formIn = document.getElementById("formIn");
formIn.addEventListener("submit",function(event){
	event.preventDefault();
	let end = new Date();
	let date = end.getMonth()+1+"-"+end.getDate()+"-"+end.getFullYear();
	let fName = document.getElementById("fName").value;
	let lName = document.getElementById("lName").value;
	let id = document.getElementById("id").value;
	
	let studentRef = date+"/"+fName+"_"+lName+"_"+id;
	onValue(ref(db,studentRef), (snapshot)=>{
		update(ref(db,studentRef),{
			BackMs : end.getTime(),
			BackStamp : end.getHours()+":"+end.getMinutes()+":"+end.getSeconds()+":"+end.getMilliseconds()+";"+date,
			ElapsedMs : end.getTime()-snapshot.child("LeftMs").val(),
			ElapsedStamp : milliToStamp(end.getTime()-snapshot.child("LeftMs").val())
		});
	});
	update(ref(db,studentRef),{
		First_Name : fName,
		Last_Name : lName,
		ID : id
	});
	

	alert("Welcome back!");
	
});

