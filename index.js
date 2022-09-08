document.addEventListener('DOMContentLoaded', function(){
    function renderObject(object){
        console.log(object);
        let row = document.createElement('array');
        row.innerHTML = 
        `<p> ${object.info.category} </p>`;
    }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e2b2fcb3dmsh5f66a5b5e298629p178e66jsnfc330f53c1dc',
		'X-RapidAPI-Host': 'sagenda-sagenda-v1.p.rapidapi.com'
	}
};

fetch('https://sagenda-sagenda-v1.p.rapidapi.com/Events/GetBookableItemList', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    const fom = document.querySelector("#A-bookings");

    
       fom.addEventListener("book",forme)
    
    function forme(event){
        event.preventDefault()
    
        const date = document.querySelector("#date").value;
        const day = document.querySelector("#day").value;
        const time = document.querySelector("#time").value;
    
        if(date == ""){
            return alert("Kindly specify the date")
        }else if(day == ""){
           return alert("The date section seems empty")
        }else if(time == ""){
            return alert("Did you key in the time?")
        }else{
            alert("Thank you for booking an appointment with us!!");
        }
        return fom.reset()
    }

      const book = document.getElementById ("book");
    const div1 = document.getElementById ("about");
    
    book.addEventListener("click", function(){
        div1.style.background = "grey"
    });
    
    book.onclick =function(){
        div1.style.background = "grey"
    };
})