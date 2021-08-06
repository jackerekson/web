console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has successfully submitted') ;
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let compliment = document.querySelector('img')

const yourCompliment = () => {
	alert('Hey... is that a new hair cut? Looks good!')
}

compliment.addEventListener('mouseover', yourCompliment)