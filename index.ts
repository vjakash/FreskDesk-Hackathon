window.onload=()=>{
    templateBody();
}
async function listTicket() {
    document.getElementById("content").innerHTML="";
    let title=document.getElementById("titleOfMain");
    title.innerHTML="Tickets";
    let btn1=document.getElementById("btn1");
    btn1.innerHTML="+New Ticket";
    btn1.setAttribute("onclick","getNewTicketTemplate()");
    let btn2=document.getElementById("btn2");
    btn2.innerHTML="Delete";
    btn2.setAttribute("onclick","deleteTicket()");
    //curl -v -u user@yourcompany.com:test -X GET 'https://domain.freshdesk.com/api/v2/tickets'
  let uri = "https://vjbakash.freshdesk.com/api/v2/tickets";
  let h = new Headers();
  h.append("Content-Type", "application/json");
  let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  let req = new Request(uri, {
    method: "GET",
    headers: h,
    credentials: "omit",
  });
  let response = await fetch(req);
  let jsonData = await response.json();
  console.log(jsonData[0].created_at);

for(let i in jsonData){
    let createdate=new Date(jsonData[i].created_at);
    let createtime=createdate.getUTCDate();
    document.getElementById("content").innerHTML+=`<div class="card mb-3" style="max-width: 800px;">
    <div class="row no-gutters">
        <div class="col-md-1">
            <input type="checkbox" onclick="" class="mx-auto" value="${jsonData[i].id}"></input>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${jsonData[i].subject}#${jsonData[i].id}</h5>
                <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                <p class="card-text"><small class="text-muted">Created at ${createdate}</small></p>
            </div>
        </div>
        <div class="col-md-3">
  
        </div>
    </div>
  </div>`;
}
}

async function createTicket() {
    let description=(<HTMLInputElement>document.getElementById("description")).value;
    let subject=(<HTMLInputElement>document.getElementById("subject")).value;
    let email=(<HTMLInputElement>document.getElementById("contact")).value;
    let priority=Number((<HTMLSelectElement>document.getElementById("newContactPriority")).value);
    let status=Number((<HTMLSelectElement>document.getElementById("newContactStatus")).value);
    let cc_emails=(<HTMLInputElement>document.getElementById("ccEmail")).value.split(";");
    /*curl -v -u user@yourcompany.com:test -H "Content-Type: application/json" 
    -d '{ "description": "Details about the issue...", "subject": "Support Needed...", "email": "tom@outerspace.com", "priority": 1, "status": 2, "cc_emails": ["ram@freshdesk.com","diana@freshdesk.com"] }'
     -X POST 'https://domain.freshdesk.com/api/v2/tickets'*/
  let data =JSON.stringify({description,subject,email,priority,status,cc_emails});

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
  listTicket();
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
  let str=getNewTicketTemplate();
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
