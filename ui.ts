function templateBody() {
  let str = ` <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">Sign out</a>
        </li>
    </ul>
</nav>

<div class="container-fluid">
    <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-1 d-md-block bg-dark text-white sidebar collapse" style="height: 100vh;">
            <div class="sidebar-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active astyle" href="#">
                             Dashboard 
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link astyle" href="#">
                            <span class="material-icons" onclick="listTicket()" data-toggle="tooltip" data-placement="right" title="Tickets">confirmation_number</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link astyle" href="#">
                            <span class="material-icons" data-toggle="tooltip" data-placement="right" title="Tickets">perm_contact_calendar</span>
                        </a>
                    </li>

                </ul>
                </h6>
            </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-11 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2" id="titleOfMain">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary" id="btn1">Share</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" id="btn2">Export</button>
                    </div>
                    <select class="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <option value="fae">This week</option> 
                    </select>
                </div>
            </div>
            <div class="container-fluid" id="content">
            </div>
        </main>
    </div>
</div>`;
  document.body.innerHTML += str;
}
let on = 1;
function getNewTicketTemplate() {
  if (on == 1) {
    let str = `<div class="col-md-10 order-md-1">
    <h4 class="mb-3">New Ticket</h4>
    <form class="needs-validation" onSubmit="createTicket();return false;">
        <div class="mb-3">
            <label for="contact">Contact<span style="color: red;">*</span></label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input type="email" class="form-control" id="contact" placeholder="abc@freshdesk.com" required>
                <div class="invalid-feedback" style="width: 100%;">
                    Contact is required.
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="eeEmail">CC Email</label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" id="ccEmail" placeholder="abc@freshdesk.com;xyz@freshdesk.com">
                <div class="invalid-feedback" style="width: 100%;">
                    Contact is required.
                </div>
            </div>
        </div>

        <div class="mb-3">
            <label for="subject">Subject<span style="color: red;">*</span></label>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" id="subject" placeholder="" required>
                <div class="invalid-feedback" style="width: 100%;">
                    Subject is required.
                </div>
            </div>
        </div>

        <div class="mb-3">
            <label for="newContactType">Type</label>
            <select name="type" id="newContactType" class="custom-select custom-select-sm">
                <option value="question" selected>Question</option>
                <option value="incident">Incident</option>
                <option value="problem">Problem</option>
                <option value="featureRequest">Feature Request</option>
                <option value="refund">Refund</option>
            </select>
            <div class="invalid-feedback">
                Select a type
            </div>
        </div>

        <div class="mb-3">
            <label for="status">Status<span style="color: red;">*</span></label>
            <select name="status" id="newContactStatus" class="custom-select custom-select-sm" required>
                <option value="2" selected>Open</option>
                <option value="3">Pending</option>
                <option value="4">resolved</option>
                <option value="5"> Closed</option>
            </select>
            <div class="invalid-feedback">
                Select A status
            </div>
        </div>
        <div class="mb-3">
            <label for="priority">Priority<span style="color: red;">*</span></label>
            <select name="priority" id="newContactPriority" class="custom-select custom-select-sm" required>
                <option value="1" selected>Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
                <option value="4"> Urgent</option>

            </select>
            <div class="invalid-feedback">
                Select a priority
            </div>
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Description</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" id="description"></textarea>
        </div>
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit" >Create New Ticket</button>
    </form>
</div>
</div>`;
    document.getElementById("newTicket").innerHTML = str;
    on=0;
  }
  else{
    document.getElementById("newTicket").innerHTML = "";
    on=1;
  }
}
let updateOn=1;
function getUpdateTemplate(id){
    if(updateOn==1){
        document.getElementById("viewTicketCard").innerHTML+=`
        <div class="col-md-10 order-md-1">
        <h4 class="mb-3">New Ticket</h4>
        <form class="needs-validation" onSubmit="updateTicket(${id});return false;">
            <div class="mb-3">
                <label for="contact">Contact</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="email" class="form-control" id="contact" placeholder="abc@freshdesk.com" >
                    <div class="invalid-feedback" style="width: 100%;">
                        Contact is required.
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="eeEmail">CC Email</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="ccEmail" placeholder="abc@freshdesk.com;xyz@freshdesk.com">
                    <div class="invalid-feedback" style="width: 100%;">
                        Contact is required.
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="subject">Subject</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="subject" placeholder="" >
                    <div class="invalid-feedback" style="width: 100%;">
                        Subject is required.
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="newContactType">Type</label>
                <select name="type" id="newContactType" class="custom-select custom-select-sm">
                    <option value="question" selected>Question</option>
                    <option value="incident">Incident</option>
                    <option value="problem">Problem</option>
                    <option value="featureRequest">Feature Request</option>
                    <option value="refund">Refund</option>
                </select>
                <div class="invalid-feedback">
                    Select a type
                </div>
            </div>

            <div class="mb-3">
                <label for="status">Status</label>
                <select name="status" id="newContactStatus" class="custom-select custom-select-sm" >
                <option value="0" selected>Select Status</option>
                    <option value="2" >Open</option>
                    <option value="3">Pending</option>
                    <option value="4">resolved</option>
                    <option value="5"> Closed</option>
                </select>
                <div class="invalid-feedback">
                    Select A status
                </div>
            </div>
            <div class="mb-3">
                <label for="priority">Priority</label>
                <select name="priority" id="newContactPriority" class="custom-select custom-select-sm" >
                <option value="0" selected>Select Priority</option>
                    <option value="1" >Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                    <option value="4"> Urgent</option>
    
                </select>
                <div class="invalid-feedback">
                    Select a priority
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Description</span>
                </div>
                <textarea class="form-control" aria-label="With textarea" id="description"></textarea>
            </div>
            <hr class="mb-4">
            <button class="btn btn-primary btn-lg btn-block" type="submit">Update this Ticket</button>
        </form>
    </div>`;
    updateOn=0;
    }
    else{
        document.getElementById("viewTicketCard").innerHTML="";
        updateOn=1;
    }
    
}
function getAPiKey(){
    
}