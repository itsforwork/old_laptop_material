// var axios = require('axios');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
// var config = {
//   method: 'get',
//   url: 'https://3.6.168.139/api/v2/log/disk/traffic/forward?start=1&rows=200&access_token=38gwn4Gq4zdmQGny7k4mg7dcGq1p5q&filter=srcip==172.31.155.63,srcip==172.31.155.61&filter=dstip==13.59.106.40',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
// var request = require('request');
// var options = {
//   'method': 'GET',
//   'url': 'https://3.6.168.139/api/v2/log/disk/traffic/forward?start=1&rows=200&access_token=38gwn4Gq4zdmQGny7k4mg7dcGq1p5q&filter=srcip==172.31.155.63,srcip==172.31.155.61&filter=dstip==13.59.106.40',
//   strictSSL: false,
 
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

// var a= request.defaults({
//   'method': 'GET',
// 'url': 'https://3.6.168.139/api/v2/log/disk/traffic/forward?start=1&rows=200&access_token=38gwn4Gq4zdmQGny7k4mg7dcGq1p5q&filter=srcip==172.31.155.63,srcip==172.31.155.61&filter=dstip==13.59.106.40',
// strictSSL: false,
// function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// }
// })
const got = require('got');
const getFortisiemData = async () => {
    const url = 'https://3.110.181.116/phoenix/rest/query/eventQuery';
    var data = '<?xml version="1.0" encoding="UTF-8"?>\n<Reports>\n    <Report baseline="" rsSync="">\n        <Name>Top FortiSIEM Events By Count</Name>\n        <Description>Ranks the events by the number of times they have occurred in a given time period.</Description>\n        <CustomerScope groupByEachCustomer="false">\n        </CustomerScope>\n        <SelectClause>\n           <AttrList>eventType,rawEventMsg</AttrList>\n        </SelectClause>\n        <PatternClause window="3600">\n            <SubPattern name="Filter_OVERALL_STATUS">\n                <SingleEvtConstr> eventType = "Crowdstrike-Falcon-DetectionSummaryEvent-NGAV\n"</SingleEvtConstr>\n            </SubPattern>\n        </PatternClause>\n    </Report>\n</Reports>';

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'text/xml', 
            'Authorization': 'Basic c3VwZXIvYWRtaW46U3Jpc2hAMDUwOQ==', 
            
        },
        data: data
        
    };
    const fortidata =  await got(url, options)
    .catch((err) => {
    console.log('error' , err)
  });
  const queryid= fortidata.body
  console.log(queryid)
}
    
	

getFortisiemData();
