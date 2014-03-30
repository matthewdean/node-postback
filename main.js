var request = require('request');
var cheerio = require('cheerio');

function postback(url, callback) {
	request.get(url, function onResponse(err, res, body) {
		var $ = cheerio.load(body);
		var button = callback(err, $);
		if (button) {
			var form = {
				__EVENTTARGET: button.attr('href').match(/['"]([^"^']+)/)[1], // TODO image buttons
				__VIEWSTATE: $('#__VIEWSTATE').val(),
				__EVENTVALIDATION: $('#__EVENTVALIDATION').val(),
				__VIEWSTATEENCRYPTED: $('#__VIEWSTATEENCRYPTED').val()
			};
			request.post(url, { form: form }, onResponse);
		}
	});
}

module.exports = postback;