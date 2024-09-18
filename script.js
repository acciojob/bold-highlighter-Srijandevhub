let strong = document.querySelectorAll('strong')

function highlight() {
    //Write your code here

if (strong) {
 strong.forEach(item =>{
	 item.style.color = 'green';
 });
}
}


function return_normal() {
    //Write your code here
if(strong){
	strong.forEach(item =>{
		item.style.color = 'initial'
	});
}
    
}