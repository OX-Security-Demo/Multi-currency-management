let query = '{ boards (limit:5) {name id} }';
let monday_api_token = 'test_token'
fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : monday_api_token
   },
   body: JSON.stringify({
     'query' : query
   })
  })
   .then(res => res.json())
   .then(res => console.log(JSON.stringify(res, null, 2)));
