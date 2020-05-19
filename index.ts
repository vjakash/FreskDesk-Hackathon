window.onload=()=>{
    // templateBody();
    getAPiKey();
}
let apiKey;
let totalTicket;
async function dashBoard(ind){
    console.log("hi");
    if(ind==1){
        apiKey=(<HTMLInputElement>document.getElementById("apikey")).value;
    }
    let uri = "https://vjbakash.freshdesk.com/api/v2/tickets";
  let h = new Headers();
  h.append("Content-Type", "application/json");
//  h.append("Origin","https://vjakash.github.io/Hackathon/?");
 // h.append("Host","vjakash.github.io/Hackathon/")
//   let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let encoded = window.btoa(apiKey);
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  let req = new Request(uri, {
    method: "GET",
    headers: h,
    credentials: "omit",
    mode:"cors"
  });

    let response = await fetch(req);
    console.log(response);
    let jsonData = await response.json();
    console.log(jsonData);
    if(jsonData.hasOwnProperty('code')){
        getAPiKey();
        alert(jsonData.code+"/n"+ jsonData.message);
    }
    else{
        totalTicket=jsonData.length;
        document.body.innerHTML="";
        templateBody();
        let unresolved=0;
        for(let i in jsonData){
            if(jsonData[i].status==2||jsonData[i].status==3){
                unresolved++;
            }
        }
        document.getElementById("content").innerHTML=`
        <div class="row">
            <div class="col-lg-6">
                    <div class="card" style="width: 100%;">
                    <div class="card-body">
                    <h1 class="card-title text-center bg-dark text-white">Total Tickets</h1>
                    <h1 class="text-center" style="font-size:10vw;">${jsonData.length}</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                    <div class="card" style="width: 100%;">
                    <div class="card-body">
                    <h1 class="card-title text-center bg-dark text-white">Unresolved Tickets</h1>
                    <h1 class="text-center" style="font-size:10vw;">${unresolved}</h1>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
let currentPage=1;
function prevCurrentPage(){
    if((currentPage-1)==0){
        currentPage=1;
    }
    else{
        currentPage--;
    }
    getPage();
    
}
function nextCurrentPage(){
    if((currentPage+1)>=Math.ceil(totalTicket/5)){
          currentPage=Math.ceil(totalTicket/5);
     }
    else{
         currentPage++;
        }
        getPage();

    
    
}
function enableDelete(){
    
    (<HTMLButtonElement>document.getElementById("btn2")).disabled=false;
    (<HTMLButtonElement>document.getElementById("btn2")).classList.add("btn-danger");
    (<HTMLButtonElement>document.getElementById("btn2")).classList.remove("btn-dark");
    let del=document.getElementsByName("deleteTicket");
    let flag=true;
    for(let i in del)
    {
        if(del[i].checked==true){
            flag=false;
        }
    }
    if(flag==true){
        (<HTMLButtonElement>document.getElementById("btn2")).disabled=true;
    (<HTMLButtonElement>document.getElementById("btn2")).classList.remove("btn-danger");
    (<HTMLButtonElement>document.getElementById("btn2")).setAttribute("class","btn btn-sm btn-dark") ;
    }

}
async function listTicket() {
    currentPage=1;
    document.getElementById("content").innerHTML="";
    let title=document.getElementById("titleOfMain");
    title.innerHTML="Tickets";
    let btn1=<HTMLButtonElement>document.getElementById("btn1");
    btn1.innerHTML="+New Ticket";
    btn1.disabled=false;
    btn1.setAttribute("onclick","getNewTicketTemplate()");
    let btn2=<HTMLButtonElement>document.getElementById("btn2");
    btn2.innerHTML="Delete";
    btn2.disabled=true;
    (<HTMLButtonElement>document.getElementById("btn2")).classList.remove("btn-danger");
    (<HTMLButtonElement>document.getElementById("btn2")).setAttribute("class","btn btn-sm btn-dark") ;
    btn2.setAttribute("onclick","deleteTicket()");
    //curl -v -u user@yourcompany.com:test -X GET 'https://domain.freshdesk.com/api/v2/tickets?per_page=5&page=2' 
    getPage();
  
}
async function getPage(){
    console.log("current page",currentPage)
    document.getElementById("content").innerHTML="";
    let status=[".",".","Open","Pending","Resolved","Closed"];
    let priority=[".","Low","Medium","High","Urgent"];
    let uri = "https://vjbakash.freshdesk.com/api/v2/tickets?per_page=5&page="+currentPage;
    let h = new Headers();
    h.append("Content-Type", "application/json");
  //   let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
    let encoded = window.btoa(apiKey);
    let auth = `Basic ${encoded}`;
    h.append("Authorization", auth);
  //  h.append("Origin","https://vjakash.github.io/Hackathon/?");
   // h.append("Host","vjakash.github.io/Hackathon/")
    let req = new Request(uri, {
      method: "GET",
      headers: h,
      credentials: "omit",
      mode:"cors"
    });
    let response = await fetch(req);
    let jsonData = await response.json();
    console.log(jsonData);
    document.getElementById("content").innerHTML+=`<div class="row"><div class="col-lg-8" id="ticketCards"></div><div class="col-lg-4 " id="newTicket"></div></div>
    <div class="row ">
        <div class="col-lg-4 text-center">
                <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary" id="prev" onclick="prevCurrentPage()"><h3>Prev</h3></button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" id="next" onclick="nextCurrentPage()"><h3>Next</h3></button>
                </div>
            </div>
        </div>
    </div>`;
  for(let i in jsonData){
      let createdate=new Date(jsonData[i].created_at);
      let createtime=createdate.getUTCDate();
      
      document.getElementById("ticketCards").innerHTML+=`<div class="card mb-3 border border-dark" style="max-width: 100%; ">
      <div class="row no-gutters">
         <!-- <div class="col-md-1">
              <input type="checkbox" onclick="enableDelete()" class="border border-dark"  value="${jsonData[i].id}" name="deleteTicket" style="margin-top:65%;margin-left:50%;"></input>
          </div>
          <div class="col-md-11 ">-->
              <div class="card-body">
              <a href="#"  style="text-decoration:none;" ><input type="checkbox" onclick="enableDelete()"  value="${jsonData[i].id}" name="deleteTicket" ></input>
              <h1 class="card-title" onclick="viewTicket(${jsonData[i].id})" id="ticketTitle" style="width:100%;">
              ${jsonData[i].subject}#${jsonData[i].id}</h1>
              </a>
                  <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                  <p class="card-text"><small class="text-muted">Created at ${createdate}</small></p>
                  <p>Status: ${status[jsonData[i].status]} &emsp;&emsp;&emsp;&emsp;&emsp; Priority: ${priority[jsonData[i].priority]}</p>
              </div>
          </div>
      </div>
    </div>`;
  }

}
async function createTicket() {
    let description=(<HTMLInputElement>document.getElementById("description")).value;
    let type=(<HTMLInputElement>document.getElementById("newContactType")).value;
    let subject=(<HTMLInputElement>document.getElementById("subject")).value;
    let email=(<HTMLInputElement>document.getElementById("contact")).value;
    let priority=Number((<HTMLSelectElement>document.getElementById("newContactPriority")).value);
    let status=Number((<HTMLSelectElement>document.getElementById("newContactStatus")).value);
    let cc_emails=(<HTMLInputElement>document.getElementById("ccEmail")).value.split(";");
    /*curl -v -u user@yourcompany.com:test -H "Content-Type: application/json" 
    -d '{ "description": "Details about the issue...", "subject": "Support Needed...", "email": "tom@outerspace.com", "priority": 1, "status": 2, "cc_emails": ["ram@freshdesk.com","diana@freshdesk.com"] }'
     -X POST 'https://domain.freshdesk.com/api/v2/tickets'*/
  let data =JSON.stringify({description,subject,email,priority,status,cc_emails,type});

  let uri = "https://vjbakash.freshdesk.com/api/v2/tickets";
  let h = new Headers();
  h.append("Content-Type", "application/json");
//  h.append("Origin","https://vjakash.github.io/Hackathon/?");
 // h.append("Host","vjakash.github.io/Hackathon/")
//   let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let encoded = window.btoa(apiKey);
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  let req = new Request(uri, {
    method: "POST",
    headers: h,
    body:data,
    credentials: "omit",
    mode:"cors"
  });
  let response = await fetch(req);
  let jsonData = await response.json();
  console.log(jsonData);
  listTicket();
}
async function updateTicket(id){
    let description=(<HTMLInputElement>document.getElementById("description")).value;
    let type=(<HTMLInputElement>document.getElementById("newContactType")).value;
    let subject=(<HTMLInputElement>document.getElementById("subject")).value;
    let email=(<HTMLInputElement>document.getElementById("contact")).value;
    let priority=Number((<HTMLSelectElement>document.getElementById("newContactPriority")).value);
    let status=Number((<HTMLSelectElement>document.getElementById("newContactStatus")).value);
    let cc_emails=(<HTMLInputElement>document.getElementById("ccEmail")).value.split(";");
    let arr=[description,subject,email,priority,status,cc_emails];
    let obj={};
    if(description!=""){
        obj["description"]=description;
    }
    if(subject!=""){
        obj["subject"]=subject;
    }
    if(email!=""){
        obj["email"]=email;
    }
    if(priority!=0){
        obj["priority"]=priority;
    }
    if(status!=0){
        obj["status"]=status;
    }
    if(cc_emails.length!=0&&cc_emails[0]!=""){
        obj["cc_emails"]=cc_emails;
    }
    if(type!=""){
        obj["type"]=type;
    }
    console.log(obj);
    /*curl -v -u user@yourcompany.com:test -H "Content-Type: application/json" 
    -X PUT -d '{ "priority":2, "status":3 }' 'https://domain.freshdesk.com/api/v2/tickets/1'*/ 
    ///api/v2/tickets/[id] 
    // let data = '{ "priority":2, "status":3 }';
  let uri = "https://vjbakash.freshdesk.com/api/v2/tickets/"+id;
  let h = new Headers();
  h.append("Content-Type", "application/json");
//   let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let encoded = window.btoa(apiKey);
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
//  h.append("Origin","https://vjakash.github.io/Hackathon/?");
 // h.append("Host","vjakash.github.io/Hackathon/")
  let req = new Request(uri, {
    method: "PUT",
    headers: h,
    body:JSON.stringify(obj),
    credentials: "omit",
    mode:"cors"
  });
  let response = await fetch(req);
  let jsonData = await response.json();
  console.log(jsonData);
  viewTicket(id);
}
async function deleteTicket(){
    let del=document.getElementsByName("deleteTicket");
    for(let i in del)
    {
        if(del[i].checked==true){
            
            let uri = "https://vjbakash.freshdesk.com/api/v2/tickets/"+del[i].value;
            let h = new Headers();
            // let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
            let encoded = window.btoa(apiKey);
            let auth = `Basic ${encoded}`;
            h.append("Authorization", auth);
            h.append("Origin","https://vjakash.github.io/Hackathon/?");
            h.append("Host","vjakash.github.io/Hackathon/")
            let req = new Request(uri, {
            method: "DELETE",
            headers: h,
            credentials: "omit",
            mode:"cors"
            });
            let response = await fetch(req);
            // let jsonData = await response.json();
             console.log(response);
        }
        console.log(del[i].checked);
    }
    listTicket();
    // "/api/v2/tickets/[id] "
    //curl -v -u user@yourcompany.com:test -X DELETE 'https://domain.freshdesk.com/api/v2/tickets/1'
    
}
async function viewTicket(id){
    (<HTMLButtonElement>document.getElementById("btn2")).classList.remove("btn-danger");
    (<HTMLButtonElement>document.getElementById("btn2")).setAttribute("class","btn btn-sm btn-dark") ;
    let btn1=<HTMLButtonElement>document.getElementById("btn1");
    btn1.disabled=true;
    let btn2=<HTMLButtonElement>document.getElementById("btn2");
    btn2.disabled=false;
    btn2.innerHTML="Update Ticket";
    let status=[".",".","Open","Pending","Resolved","Closed"];
    let priority=[".","Low","Medium","High","Urgent"];
    let uri = "https://vjbakash.freshdesk.com/api/v2/tickets/"+String(id)+"?include=requester";
            let h = new Headers();
            // let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
            let encoded = window.btoa(apiKey);
            let auth = `Basic ${encoded}`;
            h.append("Authorization", auth);
            h.append("Origin","https://vjakash.github.io/Hackathon/?");
            h.append("Host","vjakash.github.io/Hackathon/")
            let req = new Request(uri, {
            method: "GET",
            headers: h,
            credentials: "omit",
            mode:"cors"
            });
            let response = await fetch(req);
             let jsonData = await response.json();
             console.log(jsonData);
             let updatedDate=new Date(jsonData.updated_at);
             let updatedTime=updatedDate.getUTCDate();
             let tempstr="";
             for(let i in jsonData.cc_emails){
                 if(i==String(jsonData.cc_emails.length-1)){
                    tempstr+=`${jsonData.cc_emails[i]}`;
                 }
                 else{
                    tempstr+=`${jsonData.cc_emails[i]}, `;
                 }
                
             }
             document.getElementById("content").innerHTML=`<div class="row" >
             <div class="col-lg-8" >
             <div class="card">
                <div class="card-header bg-dark text-white">
                   <h1>${jsonData.subject}</h1>
                   <footer class="blockquote-footer"> <cite title="Source Title">${jsonData.requester.name}</cite>  reported via the portal </footer>
                    </blockquote>
                   <footer class="blockquote-footer">Last updated at <cite title="Source Title">${updatedDate}</cite></footer>
                    </blockquote>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>Description: ${jsonData.description_text}</p>
                    <p>Requester ID: ${jsonData.requester_id}</p>
                    <p>Status: ${status[jsonData.status]} &emsp;&emsp;&emsp;&emsp;&emsp; Priority: ${priority[jsonData.priority]}</p>
                    <p>CC-Emails: ${tempstr}</p>
                   
                    
                </div>
                </div>
             </div>
             <div class="col-lg-4" id="viewTicketCard">
             </div>
             </div>`;
             btn2.setAttribute("onclick",`getUpdateTemplate(${jsonData.id})`);
}
