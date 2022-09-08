const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e2b2fcb3dmsh5f66a5b5e298629p178e66jsnfc330f53c1dc',
		'X-RapidAPI-Host': 'sagenda-sagenda-v1.p.rapidapi.com'
	}
};

fetch('https://sagenda-sagenda-v1.p.rapidapi.com/Events/GetAvailability/%7Btoken%7D/%7Bfromdate%7D/%7Btodate%7D?bookableItemId=%7Bbookableitemid%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
