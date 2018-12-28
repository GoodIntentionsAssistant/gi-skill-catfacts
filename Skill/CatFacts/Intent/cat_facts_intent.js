/**
 * Cat Facts Intent
 */
const Intent = girequire('src/Intent/intent');
const Config = girequire('src/Config/config');

const Promise = require('promise');
const _ = require('underscore');

module.exports = class CatFactsIntent extends Intent {

	setup() {
		this.train([
			'catfact',
			'cat facts',
			'cat fact'
		]);
	}

	response(request) {
		let filename = Config.path('skills.app')+'/CatFacts/Data/catfacts.txt';

		return new Promise((resolve, reject) => {
			let fs = require('fs');
			fs.readFile(filename, 'utf8', (err, data) => {
				let lines = data.split(/\r?\n/);
				resolve(_.sample(lines));
			});
		});
	}

}

