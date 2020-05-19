function enableContactDelete(){
    (<HTMLButtonElement>document.getElementById("btn2")).disabled=false;
    (<HTMLButtonElement>document.getElementById("btn2")).classList.add("btn-danger");
    (<HTMLButtonElement>document.getElementById("btn2")).classList.remove("btn-dark");
    let del=document.getElementsByName("contactsDelete");
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
async function listContact() {
    document.getElementById("content").innerHTML="";
    let title=document.getElementById("titleOfMain");
    title.innerHTML="Contacts";
    let btn1=<HTMLButtonElement>document.getElementById("btn1");
    btn1.innerHTML="+New Contact";
    btn1.disabled=false;
    btn1.setAttribute("onclick","getNewContactTemplate()");
    let btn2=<HTMLButtonElement>document.getElementById("btn2");
    btn2.innerHTML="Delete";
    btn2.disabled=true;
    (<HTMLButtonElement>document.getElementById("btn2")).classList.remove("btn-danger");
    (<HTMLButtonElement>document.getElementById("btn2")).setAttribute("class","btn btn-sm btn-dark") ;
    btn2.setAttribute("onclick","deleteContact()");
    //curl -v -u user@yourcompany.com:test -X GET 'https://domain.freshdesk.com/api/v2/contacts'
  let uri = "https://"+domainName+".freshdesk.com/api/v2/contacts";
  let h = new Headers();
  h.append("Content-Type", "application/json");
//   let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let encoded = window.btoa(apiKey);
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  h.append("Origin","https://vjakash.github.io/Hackathon/");
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
  document.getElementById("content").innerHTML+=`<div class="row"><div class="col-md-9 col-lg-9 overflow-auto" id="ticketCards" style="height:90vh;"></div><div class="col-md-3 col-lg-3 " id="newContact"></div></div>`;
  document.getElementById("ticketCards").innerHTML+=`<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col"></th>
      <th scope="col">Contact</th>
      <th scope="col">Title</th>
      <th scope="col">Company</th>
      <th scope="col">Email</th>
      <th scope="col">Work Phone</th>
      <th scope="col">Time Zone</th>
      <th scope="col">Id</th>
      <th scope="col">Twitter Id</th>
    </tr>
  </thead>
  <tbody id="listOfContacts">
    
  </tbody>
</table>`;
for(let i in jsonData){
  document.getElementById("listOfContacts").innerHTML+=`
  <tr>
  <th scope="row"><form action="#">
  <p>
  <label>
    <input type="checkbox" name="contactsDelete" value="${jsonData[i].id}" onclick="enableContactDelete()"/>
    <span class="text-muted">del</span>
  </label>
</p>
</form></th>
  <td><a href="#" ><span onclick="viewContact(${jsonData[i].id})">${jsonData[i].name}</span></a></td>
  <td>${jsonData[i].job_title}</td>
  <td>${jsonData[i].company_id}</td>
  <td>${jsonData[i].email}</td>
  <td>${jsonData[i].phone}</td>
  <td>${jsonData[i].time_zone}</td>
  <td>${jsonData[i].id}</td>
  <td>${jsonData[i].twitter_id}</td>
</tr>`;
}
}

async function viewContact(id){
    (<HTMLButtonElement>document.getElementById("btn2")).classList.remove("btn-danger");
    (<HTMLButtonElement>document.getElementById("btn2")).setAttribute("class","btn btn-sm btn-dark") ;
    let btn1=<HTMLButtonElement>document.getElementById("btn1");
    btn1.disabled=true;
    let btn2=<HTMLButtonElement>document.getElementById("btn2");
    btn2.disabled=false;
    btn2.innerHTML="Update Contact";

    let uri = "https://"+domainName+".freshdesk.com/api/v2/contacts/"+String(id);
            let h = new Headers();
            // let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
            let encoded = window.btoa(apiKey);
            let auth = `Basic ${encoded}`;
            h.append("Authorization", auth);
            h.append("Origin","https://vjakash.github.io/Hackathon/");
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
             let temp=""
            if(jsonData.avatar==null){
                temp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8zMzMWFhbq6uo3NzcvLy8jIyMdHR0kJCQsLCzt7e0nJycfHx8REREqKioXFxfk5OSurq7T09Nzc3PKysq5ubmHh4dqamqTk5P19fXc3Nx9fX2mpqYLCwtbW1ugoKBRUVFJSUk/Pz9jY2NOTk62trbDw8OPj49DQ0NxcXHoA0ZMAAAEaElEQVR4nO3c23qiMBQF4BFJwiEIKioKHltt+/4vOFjtjO1UCYmyk876b7zd60skB0J+/QIAAAAAAAAAAAAAAAAAAAAAAAAAAFvNo6gfRXPqMh4jmkw3fsyFJ3jsb6aTiLqg+1oU24THrPeBxTLZFgvqsu5muE0v0v1NmW731KXdxTCU/8Y7h5TM/Yz5Tl6JdyJeR9Qlmim9a+33px29KXWRBhZ+3JDvKNhl1IXqmjQ24LkZ0wN1qXrWiVK+o2RIXayOtacc0M2IVZuAdUTnho2Dehc9R3Rs1MhEy4D1FMetmeqr2lP0UriiLrqNgrcOWE9vKuqy1WVLjYC9nudOP12FWgkHY+rCVeWpVsC6EV1ZMW7aP2ZOwjfq0tWM2o31l5Z96uKVjAfaCeOCungVc52R4oNPXb2Kye1F/W2pC3O3Ur+TOtJNW89IL7EtdfnNMv0n6dGSuv5mB5O/YT05tX/QXwdGCbn9K2GjB02vF6ypAzR60pt1fxjYv3uqPSk9Ce1fX5gmtH+lvzJLyBxIaPY/dCDhm1nCcEYdoNGLysuY6wYldYBGldmI78B4mJvN2qT9r6Gittv5n3kOvEs0m7Wl1OUrMJqYOrHbZrR84i68RzTaiRJObOyP9cf88Im6eCUGO8LC/rHi3VZ38s2c2C6tHXS324T9Wxhnz3qNyHbUhSsb6c1rkpy6cHWlzgJjYP/C6a+5zrxGOnU6WqOfJo6MFB/Wbd90CxfeyXxStpu8cft3Ef8xaxMxcGO69sVMfZHBnQxYd1TV/2Jq//bTFVWiMrlhiUPHvb5a7Jp33vjO/leGt0yXt1eL4fKFukRT2ZN3PWPozdw4I3RbvvK++Sio/v8F3pMLh0tUZMVrwj+3ZMiT7fontN8f2XAWCiH5kUwlG+9/VLyzaHSY7If7yWHhxI4aAAAAAAAAPMY8ykb50Sj7YZfwZPmwGG92jIu0XuVLKepfznabcTHMHTjjdVOUV+XzMU8csq97UYyF7zcOPZdV7uaSf1TNmBDBoPFuk0EgRG9WubXrNipWUgRtDg6FgeCrwo2U0f5Nim/3RxtTxoKPbb8hK6s2KTc56B3KdFVZu8/Yr7ZJYPYtwhELkuehjS15mNVDgHG8c0gu3iw7WzNfM2H2FcJXofAre6YF/ak0O6D/Lcb5ix2dNSsTs08srou9Kf1TJyo9s6PrjRmJ++paPDLfe0bSo9+5b3KmW5Wku5av+UK9+2Aezbv+zH/AA/QKviV4qh6u3mj5CGHceU+t9C5K0recdBuw0L1GSF+31/K1ujHwXpYdnuTfUwTs8qT7wuwTQ32dfRXld/kUvRRuugmodaHefYhOnjYRzZ/wJOgiYfGotZIK2UUjdjdX+0YXtyzlRvdAGUse/x6AtJN28qGw4Q07pjq4oWdHNRiedHD3iU8asIuvMIkTdnCzIhIiIRIiIRIiIRIiIRIiIRIi4T3IxKOUyIcn7FN7eEIAAAAAAAAAAAAAAAAAAAAAAAAAgP/abyHWSTVL+7WKAAAAAElFTkSuQmCC";
            }
            else{
                temp=jsonData.avatar.avatar_url;
            }

             document.getElementById("content").innerHTML=` <div class="row">
             <div class="col-lg-7">
                 <div class="card mb-3" style="max-width: 540px;">
                     <div class="row no-gutters">
                         <div class="col-md-4">
                             <img src="${temp}" class="card-img" alt="...">
                         </div>
                         <div class="col-md-8">
                             <div class="card-body">
                                 <h5 class="card-title">${jsonData.name}</h5>
                                 <p class="card-text"><small class="text-muted">ID: ${jsonData.id}</small></p>
                                 <p class="card-text">Email: ${jsonData.email}<br>Time Zone:${jsonData.time_zone}<br>Job Title: ${jsonData.job_title} <br>
                                 Work-Phone: ${jsonData.phone}</p>
     
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="col-lg-4" id="viewContactCard">
             </div>
         </div>`;
             btn2.setAttribute("onclick",`getContactUpdateTemplate(${jsonData.id})`);


}

async function updateContact(id){
    let name=(<HTMLInputElement>document.getElementById("name")).value;
    let email=(<HTMLInputElement>document.getElementById("email")).value;
    let job_title=(<HTMLInputElement>document.getElementById("job_title")).value;
    let phone=(<HTMLInputElement>document.getElementById("phone")).value;
    let obj={};
    if(name!=""){
        obj["name"]=name;
    }
    if(email!=""){
        obj["email"]=email;
    }
    if(job_title!=""){
        obj["job_title"]=job_title;
    }
    if(phone!=""){
        obj["phone"]=phone;
    }
    console.log(obj);
    /*curl -v -u user@yourcompany.com:test -H "Content-Type: application/json" 
    -X PUT -d '{ "priority":2, "status":3 }' 'https://domain.freshdesk.com/api/v2/tickets/1'*/ 
    ///api/v2/tickets/[id] 
    // let data = '{ "priority":2, "status":3 }';
  let uri = "https://"+domainName+".freshdesk.com/api/v2/contacts/"+id;
  let h = new Headers();
  h.append("Content-Type", "application/json");
//   let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let encoded = window.btoa(apiKey);
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  h.append("Origin","https://vjakash.github.io/Hackathon/");
  h.append("Host","vjakash.github.io/Hackathon/")
  let req = new Request(uri, {
    method: "PUT",
    headers: h,
    body:JSON.stringify(obj),
    credentials: "omit",
    mode:"cors"
  });
  let response = await fetch(req);
//   let jsonData = await response.json();
  console.log(response);
  viewContact(id);
}

async function createContact() {
    let name=(<HTMLInputElement>document.getElementById("name")).value;
    let email=(<HTMLInputElement>document.getElementById("email")).value;
    let job_title=(<HTMLInputElement>document.getElementById("title")).value;
    // let company_id=Math.abs(Number((<HTMLInputElement>document.getElementById("company")).value));
    let phone=(<HTMLInputElement>document.getElementById("workPhone")).value;
    let twitter_id=(<HTMLInputElement>document.getElementById("twitter")).value;
    /*curl -v -u user@yourcompany.com:test -H "Content-Type: application/json" 
    -d '{ "description": "Details about the issue...", "subject": "Support Needed...", "email": "tom@outerspace.com", "priority": 1, "status": 2, "cc_emails": ["ram@freshdesk.com","diana@freshdesk.com"] }'
     -X POST 'https://domain.freshdesk.com/api/v2/tickets'*/
  let data =JSON.stringify({name,email,job_title,phone,twitter_id});

  let uri = "https://"+domainName+".freshdesk.com/api/v2/contacts";
  let h = new Headers();
  h.append("Content-Type", "application/json");
//   let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
  let encoded = window.btoa(apiKey);
  let auth = `Basic ${encoded}`;
  h.append("Authorization", auth);
  h.append("Origin","https://vjakash.github.io/Hackathon/");
  h.append("Host","vjakash.github.io/Hackathon/")
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
  listContact();
}

async function deleteContact(){
    let del=document.getElementsByName("contactsDelete");
    for(let i in del)
    {
        if(del[i].checked==true){
            
            let uri = "https://"+domainName+".freshdesk.com/api/v2/contacts/"+del[i].value;
            let h = new Headers();
            // let encoded = window.btoa("xDLGgeXdlwnseTrFTA");
            let encoded = window.btoa(apiKey);
            let auth = `Basic ${encoded}`;
            h.append("Authorization", auth);
            h.append("Origin","https://vjakash.github.io/Hackathon/");
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
    listContact();
    // "/api/v2/tickets/[id] "
    //curl -v -u user@yourcompany.com:test -X DELETE 'https://domain.freshdesk.com/api/v2/tickets/1'
    
}

