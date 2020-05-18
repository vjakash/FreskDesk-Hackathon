async function listTicket() {
    //curl -v -u user@yourcompany.com:test -X GET 'https://domain.freshdesk.com/api/v2/tickets'
  let uri = "https://vjbakash.freshdesk.com/api/v2/tickets";
  let h = new Headers();
  h.append("Content-Type", "application/json");
  let encoded = window.btoa("vjbakash:Idontno@2");
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  let req = new Request(uri, {
    method: "GET",
    headers: h,
    credentials: "omit",
  });
  let response = await fetch(req);
  let jsonData = await response.json();
  console.log(jsonData);
}

async function createTicket() {
    /*curl -v -u user@yourcompany.com:test -H "Content-Type: application/json" 
    -d '{ "description": "Details about the issue...", "subject": "Support Needed...", "email": "tom@outerspace.com", "priority": 1, "status": 2, "cc_emails": ["ram@freshdesk.com","diana@freshdesk.com"] }'
     -X POST 'https://domain.freshdesk.com/api/v2/tickets'*/
  let data =
    '{ "description": "Details about the issue...", "subject": "Support Needed...", "email": "tom@outerspace.com", "priority": 1, "status": 2, "cc_emails": ["ram@freshdesk.com","diana@freshdesk.com"] }';

  let uri = "https://vjbakash.freshdesk.com/api/v2/tickets";
  let h = new Headers();
  h.append("Content-Type", "application/json");
  let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  let req = new Request(uri, {
    method: "POST",
    headers: h,
    body:data,
    credentials: "omit",
  });
  let response = await fetch(req);
  let jsonData = await response.json();
  console.log(jsonData);
}
async function updateTicket(){
    /*curl -v -u user@yourcompany.com:test -H "Content-Type: application/json" 
    -X PUT -d '{ "priority":2, "status":3 }' 'https://domain.freshdesk.com/api/v2/tickets/1'*/ 
    ///api/v2/tickets/[id] 
    let data = '{ "priority":2, "status":3 }';
  let uri = "https://vjbakash.freshdesk.com/api/v2/tickets/8";
  let h = new Headers();
  h.append("Content-Type", "application/json");
  let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  let req = new Request(uri, {
    method: "PUT",
    headers: h,
    body:data,
    credentials: "omit",
  });
  let response = await fetch(req);
  let jsonData = await response.json();
  console.log(jsonData);
}
async function deleteTicket(){
    // "/api/v2/tickets/[id] "
    //curl -v -u user@yourcompany.com:test -X DELETE 'https://domain.freshdesk.com/api/v2/tickets/1'
    let uri = "https://vjbakash.freshdesk.com/api/v2/tickets/9";
    let h = new Headers();
    let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
    let auth = `Basic ${encoded}`;
    h.append("Authorization", auth);
    let req = new Request(uri, {
      method: "DELETE",
      headers: h,
      credentials: "omit",
    });
    let response = await fetch(req);
     let jsonData = await response.json();
     console.log(response);
}
listTicket();
