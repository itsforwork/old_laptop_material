process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const querystring = require("querystring");
const got = require('got');
const getData = async () => {
    const query = {access_token: '38gwn4Gq4zdmQGny7k4mg7dcGq1p5q'};
    const baseUrl = 'https://3.6.168.139/api/v2/log/disk/traffic/forward' ; 
	try {
		const res = await got
			.get(`${baseUrl}?${querystring.stringify(query)}`)
			.json();
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};