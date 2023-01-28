process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var got = require('got');
const getData2 = async () => {
    var payloaddata = `<?xml version="1.0" encoding="UTF-8"?>
    <Reports>
        <Report baseline="" rsSync="">
            <Name>Top FortiSIEM Events By Count</Name>
            <Description>Ranks the events by the number of times they have occurred in a given time period.</Description>
            <CustomerScope groupByEachCustomer="false">
            </CustomerScope>
            <SelectClause>
               <AttrList>eventType,rawEventMsg</AttrList>
            </SelectClause>
            <PatternClause window="3600">
                <SubPattern name="Filter_OVERALL_STATUS">
                    <SingleEvtConstr> eventType = "Crowdstrike-Falcon-DetectionSummaryEvent-NGAV
    "</SingleEvtConstr>
                </SubPattern>
            </PatternClause>
        </Report>
    </Reports>`;
const data = await got.post('https://3.110.181.116/phoenix/rest/query/eventQuery', {
	body: payloaddata,
    headers: { 
        'Content-Type': 'text/xml', 
        'Authorization': 'Basic c3VwZXIvYWRtaW46U3Jpc2hAMDUwOQ==', 
      },
})
.catch((err) => {
    console.log('error' , err)
  });
  const queryid= data.body
  console.log(queryid)
}
getData2()