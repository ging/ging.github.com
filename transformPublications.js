const fs = require("fs");
const Cite = require('citation-js')

fs.readFile("publications.bib", function(err, buf) {
  	let bib = buf.toString();//.replace(/@\w*{(\w*)/,(a)=>a+Math.floor(10000*Math.random()))
  	let output = new Cite(bib).format('bibliography', {
	  format: 'html',
	  template: 'ieee',
	  lang: 'en-US',
	  prepend (entry) {
	  	let {id, issued, DOI, type} = entry;
	  	if (DOI && !DOI.match(/http/)) {
	  		DOI = "https://doi.org/" + DOI;
	  	}
	    return `{  
	    		${(issued && issued['date-parts']) ? ('"date": ' + '[' + issued['date-parts'] + "]," ): "" }
	    		${ DOI ? ('"doi": "' + DOI + '",'): "" }
	    		${ type ? ('"type": "' + type + '",'): "" }
	    		"content": "`
	  },
	  append: () => '"},'

	});
	output = output.replace(/<div data-csl-entry-id=".*" class="csl-entry">/gim,"")
	output = output.replace(/<\/div>/gim,"");
	output = output.replace('<div class="csl-bib-body">',"");
	output = output.replace(/,([^,]*)$/,"$1");
	output = "["+output+"]";
	const str = JSON.parse(output).sort(function(a, b){
		if (a.date && b.date) {
			return b.date[0] - a.date[0]
		} else if (a.date) {
			return -1;
		} else if (b.date) {
			return 1;
		} else {
			return 0;
		}
	});

	fs.writeFile('public/assets/publications.json', JSON.stringify(str), (err) => {
		if (err) throw err;
	});
});
