trs = document.querySelectorAll('table.questions-list tbody tr');

// let str = "選「"

for(let i in trs){
	if(typeof trs[i] !== "object") continue;
	let rand = ~~(Math.random()*2);
	trs[i].querySelectorAll('td input')[rand].checked = true;
}

