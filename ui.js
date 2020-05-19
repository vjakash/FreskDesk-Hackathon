function templateBody() {
    var str = " <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow\">\n    <a class=\"navbar-brand col-8 col-md-2 col-lg-1 mr-0 px-3 text-right\" href=\"#\">Fresh Desk </a>\n    <button class=\"navbar-toggler position-absolute d-md-none collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidebarMenu\" aria-controls=\"sidebarMenu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n            <a class=\"nav-link\" href=\"#\" onclick=\" getAPiKey();\"><span class=\"material-icons\" title=\"Sign Out\">\n            power_settings_new\n            </span></a>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav id=\"sidebarMenu\" class=\"col-md-3 col-lg-1 d-md-block bg-dark text-white sidebar collapse\" style=\"height: 175vh;\">\n            <div class=\"sidebar-sticky pt-3\">\n                <ul class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active astyle\" href=\"#\" onclick=\"dashBoard(0)\">\n                            <span > Dashboard </span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link astyle\" href=\"#\"  onclick=\"listTicket()\">\n                            <span class=\"material-icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tickets\">confirmation_number</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link astyle\" href=\"#\" onclick=\"listContact()\">\n                            <span class=\"material-icons\"  data-toggle=\"tooltip\" data-placement=\"right\" title=\"Contacts\">perm_contact_calendar</span>\n                        </a>\n                    </li>\n\n                </ul>\n                </h6>\n            </div>\n        </nav>\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-11 px-md-4\" id=\"main\">\n            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n                <h1 class=\"h2\" id=\"titleOfMain\">Dashboard</h1>\n                <div class=\"btn-toolbar mb-2 mb-md-0\">\n                    <div class=\"btn-group mr-2\">\n                        <button type=\"button\" class=\"btn btn-sm btn-dark\" id=\"btn1\">-</button>\n                        <button type=\"button\" class=\"btn btn-sm btn-dark\" id=\"btn2\">-</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container-fluid\" id=\"content\">\n            </div>\n        </main>\n    </div>\n</div>";
    document.body.innerHTML += str;
}
var on = 1;
function getNewTicketTemplate() {
    if (on == 1) {
        var str = "<div class=\"col-md-10 order-md-1\">\n    <h4 class=\"mb-3\">New Ticket</h4>\n    <form class=\"needs-validation\" onSubmit=\"createTicket();return false;\">\n        <div class=\"mb-3\">\n            <label for=\"contact\">Contact<span style=\"color: red;\">*</span></label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                </div>\n                <input type=\"email\" class=\"form-control\" id=\"contact\" placeholder=\"abc@freshdesk.com\" required>\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                    Contact is required.\n                </div>\n            </div>\n        </div>\n        <div class=\"mb-3\">\n            <label for=\"eeEmail\">CC Email</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"ccEmail\" placeholder=\"abc@freshdesk.com;xyz@freshdesk.com\">\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                    Contact is required.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"mb-3\">\n            <label for=\"subject\">Subject<span style=\"color: red;\">*</span></label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"\" required>\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                    Subject is required.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"mb-3\">\n            <label for=\"newContactType\">Type</label>\n            <select name=\"type\" id=\"newContactType\" class=\"custom-select custom-select-sm\">\n                <option value=\"question\" selected>Question</option>\n                <option value=\"incident\">Incident</option>\n                <option value=\"problem\">Problem</option>\n                <option value=\"featureRequest\">Feature Request</option>\n                <option value=\"refund\">Refund</option>\n            </select>\n            <div class=\"invalid-feedback\">\n                Select a type\n            </div>\n        </div>\n\n        <div class=\"mb-3\">\n            <label for=\"status\">Status<span style=\"color: red;\">*</span></label>\n            <select name=\"status\" id=\"newContactStatus\" class=\"custom-select custom-select-sm\" required>\n                <option value=\"2\" selected>Open</option>\n                <option value=\"3\">Pending</option>\n                <option value=\"4\">resolved</option>\n                <option value=\"5\"> Closed</option>\n            </select>\n            <div class=\"invalid-feedback\">\n                Select A status\n            </div>\n        </div>\n        <div class=\"mb-3\">\n            <label for=\"priority\">Priority<span style=\"color: red;\">*</span></label>\n            <select name=\"priority\" id=\"newContactPriority\" class=\"custom-select custom-select-sm\" required>\n                <option value=\"1\" selected>Low</option>\n                <option value=\"2\">Medium</option>\n                <option value=\"3\">High</option>\n                <option value=\"4\"> Urgent</option>\n\n            </select>\n            <div class=\"invalid-feedback\">\n                Select a priority\n            </div>\n        </div>\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Description</span>\n            </div>\n            <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"description\"></textarea>\n        </div>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" >Create New Ticket</button>\n    </form>\n</div>\n</div>";
        document.getElementById("newTicket").innerHTML = str;
        on = 0;
    }
    else {
        document.getElementById("newTicket").innerHTML = "";
        on = 1;
    }
}
var updateOn = 1;
function getUpdateTemplate(id) {
    if (updateOn == 1) {
        document.getElementById("viewTicketCard").innerHTML += "\n        <div class=\"col-md-10 order-md-1\">\n        <h4 class=\"mb-3\">New Ticket</h4>\n        <form class=\"needs-validation\" onSubmit=\"updateTicket(" + id + ");return false;\">\n            <div class=\"mb-3\">\n                <label for=\"contact\">Contact</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"email\" class=\"form-control\" id=\"contact\" placeholder=\"abc@freshdesk.com\" >\n                    <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                        Contact is required.\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-3\">\n                <label for=\"eeEmail\">CC Email</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"ccEmail\" placeholder=\"abc@freshdesk.com;xyz@freshdesk.com\">\n                    <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                        Contact is required.\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"mb-3\">\n                <label for=\"subject\">Subject</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"\" >\n                    <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                        Subject is required.\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"mb-3\">\n                <label for=\"newContactType\">Type</label>\n                <select name=\"type\" id=\"newContactType\" class=\"custom-select custom-select-sm\">\n                    <option value=\"question\" selected>Question</option>\n                    <option value=\"incident\">Incident</option>\n                    <option value=\"problem\">Problem</option>\n                    <option value=\"featureRequest\">Feature Request</option>\n                    <option value=\"refund\">Refund</option>\n                </select>\n                <div class=\"invalid-feedback\">\n                    Select a type\n                </div>\n            </div>\n\n            <div class=\"mb-3\">\n                <label for=\"status\">Status</label>\n                <select name=\"status\" id=\"newContactStatus\" class=\"custom-select custom-select-sm\" >\n                <option value=\"0\" selected>Select Status</option>\n                    <option value=\"2\" >Open</option>\n                    <option value=\"3\">Pending</option>\n                    <option value=\"4\">resolved</option>\n                    <option value=\"5\"> Closed</option>\n                </select>\n                <div class=\"invalid-feedback\">\n                    Select A status\n                </div>\n            </div>\n            <div class=\"mb-3\">\n                <label for=\"priority\">Priority</label>\n                <select name=\"priority\" id=\"newContactPriority\" class=\"custom-select custom-select-sm\" >\n                <option value=\"0\" selected>Select Priority</option>\n                    <option value=\"1\" >Low</option>\n                    <option value=\"2\">Medium</option>\n                    <option value=\"3\">High</option>\n                    <option value=\"4\"> Urgent</option>\n    \n                </select>\n                <div class=\"invalid-feedback\">\n                    Select a priority\n                </div>\n            </div>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Description</span>\n                </div>\n                <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"description\"></textarea>\n            </div>\n            <hr class=\"mb-4\">\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Update this Ticket</button>\n        </form>\n    </div>";
        updateOn = 0;
    }
    else {
        document.getElementById("viewTicketCard").innerHTML = "";
        updateOn = 1;
    }
}
/***************************************Contacts */
function getNewContactTemplate() {
    if (on == 1) {
        var str = "<div class=\"col-md-10 order-md-1\">\n      <h4 class=\"mb-3\">New Contact</h4>\n      <form class=\"needs-validation\" onSubmit=\"createContact();return false;\">\n          <div class=\"mb-3\">\n              <label for=\"name\">Name<span style=\"color: red;\">*</span></label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\" required>\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                      Contact is required.\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"mb-3\">\n              <label for=\"email\">Email<span style=\"color: red;\">*</span></label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"abc@freshdesk.com\" required>\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                      Contact is required.\n                  </div>\n              </div>\n          </div>\n  \n          <div class=\"mb-3\">\n              <label for=\"title\">Title</label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"\" >\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                      Subject is required.\n                  </div>\n              </div>\n          </div>\n\n       \n          <div class=\"mb-3\">\n              <label for=\"workPhone\">Work Phone<span style=\"color: red;\">*</span></label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" id=\"workPhone\" placeholder=\"\" required>\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                      Subject is required.\n                  </div>\n              </div>\n          </div>\n          <div class=\"mb-3\">\n              <label for=\"twitter\"> Twitter Id</label>\n              <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" id=\"twitter\" placeholder=\"\" >\n                  <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                      Subject is required.\n                  </div>\n              </div>\n          </div>\n          <hr class=\"mb-4\">\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" >Create New Contact</button>\n      </form>\n  </div>\n  </div>";
        document.getElementById("newContact").innerHTML = str;
        on = 0;
    }
    else {
        document.getElementById("newContact").innerHTML = "";
        on = 1;
    }
}
//   <div class="mb-3">
//   <label for="company">Company Id</label>
//   <div class="input-group">
//       <div class="input-group-prepend">
//           <span class="input-group-text">@</span>
//       </div>
//       <input type="number" class="form-control" id="company" placeholder="" >
//       <div class="invalid-feedback" style="width: 100%;">
//           Subject is required.
//       </div>
//   </div>
// </div>
var conUpdateOn = 1;
function getContactUpdateTemplate(id) {
    if (conUpdateOn == 1) {
        document.getElementById("viewContactCard").innerHTML += "\n        <div class=\"col-md-10 order-md-1\">\n        <h4 class=\"mb-3\">New Ticket</h4>\n        <form class=\"needs-validation\" onSubmit=\"updateContact(" + id + ");return false;\">\n            <div class=\"mb-3\">\n                <label for=\"name\">name</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter the name\" >\n                    <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                        Contact is required.\n                    </div>\n                </div>\n            </div>\n            <div class=\"mb-3\">\n                <label for=\"email\">Email</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"abc@freshdesk.com\">\n                    <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                        Contact is required.\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"mb-3\">\n                <label for=\"job_title\">Job Ttile</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"job_title\" placeholder=\"\" >\n                    <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                        Subject is required.\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"mb-3\">\n                <label for=\"phone\">Work-Phone</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"number\" class=\"form-control\" id=\"phone\" placeholder=\"\" >\n                    <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                        Subject is required.\n                    </div>\n                </div>\n            </div>\n\n            \n            <hr class=\"mb-4\">\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Update this Contact</button>\n        </form>\n    </div>";
        conUpdateOn = 0;
    }
    else {
        document.getElementById("viewContactCard").innerHTML = "";
        conUpdateOn = 1;
    }
}
/**************************************************/
function getAPiKey() {
    document.body.innerHTML = "<div class=\"container-fluid text-center bg-dark text-white\">\n<h1>FRESH DESK</h1>\n</div>\n<div class=\"container-fluid\">\n<div class=\"row mt-9\">\n    <div class=\"col-lg-3 \"></div>\n    <div class=\"col-lg-6 text-center\" style=\"margin-top: 10vh;\">\n        <img src=\"favicon1.png\" alt=\"\" width=\"150\" height=\"150\">\n        <h1>Please Enter API key</h1><br>\n        <form onsubmit=\"dashBoard(1);return false;\">\n        <input type=\" text \" class=\"form-control \" id=\"apikey\" placeholder=\"API KEY \" aria-label=\"Username \" aria-describedby=\"addon-wrapping \" required><br>\n        <button type=\"button \"class=\"btn btn-success \">Log In</button>\n        </form>\n    </div>\n    <div class=\"col-lg-3 \"></div>\n</div>\n</div>";
}
