// For hyread online reader

let sel = "bdYfkR";
//  Continue read button container class selector
// sc-1ln7ajv-8 bdYfkR

setInterval(() => {
	let continueReadBtn = document.querySelector(`.${sel}`)?.children[0];
	if(continueReadBtn){
		console.log("Found!");
		continueReadBtn.click();
	}else {
		console.log("Not found!");
	}
	
}, 1000);


// Single page contianer  class selector
// sc-5mvl42-0 gXrbTY

// Page img selector 
// #lwlxu14aeufe54xqjmr > img
