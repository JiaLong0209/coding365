// https://www.collegesidekick.com/study-docs/7379312
let $a = (s) => document.querySelectorAll(s);
let $ = s => document.querySelector(s);
let print = (s) => console.log(s);

let allPreview = $a('div[data-testid="html-preview-wrapper"]');
$('#bdp_image-preview_container').children[0].style.display = "none";

for (let i of allPreview) {
	i.children[0].children[0].style.filter = "none";
	i.children[0].children[0].style.userSelect = "auto";
	if (i.children[1]) {
		i.children[1].style.display = "none";
	}
}

