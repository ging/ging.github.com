const Cite = require('citation-js')
let example = new Cite('10.1109/ACCESS.2019.2902976')
var fs = require("fs");

fs.readFile("publications.bib", function(err, buf) {
  	let str = buf.toString()
  	let output = new Cite(str).format('bibliography', {
	  format: 'html',
	  template: 'ieee',
	  lang: 'en-US'
	});
	fs.writeFile('publications.html', output, (err) => {
		if (err) throw err;
	});
});

