
/* 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */


let date = new Date();
console.log('Curr date: '+date);

let day=date.getDay();
let  daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
day =daylist[day];
 
let hour =date.getHours();
let min= date.getMinutes();
let sec=date.getSeconds();
let dd=date.getDate();
let mm=date.getMonth()+1;
let year=date.getFullYear();

prepand = (hour>12)? "PM": "AM";
hour = (hour>12)?hour-12:hour;

if (hour===0 && prepand==="PM"){
	if( min===0 && sec===0 ){
		hour=12;
		prepand= ' Noon'}
	else{

		hour=12;
		prepand= ' PM';
	}
}

if (hour===0 && prepand==="AM" ){
	if (min===0 && sec===0 ){
		hour=12;
		prepand= ' Midnight';
	}else{
		hour=12;
		prepand= ' AM';
	}
}

if (dd<10){dd='0'+dd;}
if (mm<10){mm='0'+mm;}

console.log('Today is: '+day);
console.log('Current Time is: '+hour+prepand+' : '+min+' : '+sec);
console.log('Today Date is '+dd+'-'+mm+'-'+year );

// function printCurrentPageContent(){
// 	window.print();
// }


// console.log('printCurrentPageContent: '+printCurrentPageContent());








