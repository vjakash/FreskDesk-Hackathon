function templateBody() {
    var str = " <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow\">\n    <a class=\"navbar-brand col-md-3 col-lg-2 mr-0 px-3\" href=\"#\">Company name</a>\n    <button class=\"navbar-toggler position-absolute d-md-none collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidebarMenu\" aria-controls=\"sidebarMenu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n            <a class=\"nav-link\" href=\"#\">Sign out</a>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav id=\"sidebarMenu\" class=\"col-md-3 col-lg-1 d-md-block bg-dark text-white sidebar collapse\" style=\"height: 100vh;\">\n            <div class=\"sidebar-sticky pt-3\">\n                <ul class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" href=\"#\">\n                             Dashboard \n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <span class=\"material-icons\" onclick=\"listTicket()\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tickets\">confirmation_number</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <span class=\"material-icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tickets\">perm_contact_calendar</span>\n                        </a>\n                    </li>\n\n                </ul>\n                </h6>\n            </div>\n        </nav>\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-11 px-md-4\">\n            <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n                <h1 class=\"h2\" id=\"titleOfMain\">Dashboard</h1>\n                <div class=\"btn-toolbar mb-2 mb-md-0\">\n                    <div class=\"btn-group mr-2\">\n                        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" id=\"btn1\">Share</button>\n                        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" id=\"btn2\">Export</button>\n                    </div>\n                    <select class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n                        <option value=\"fae\">This week</option> \n                    </select>\n                </div>\n            </div>\n            <div class=\"container-fluid\" id=\"content\">\n            </div>\n        </main>\n    </div>\n</div>";
    document.body.innerHTML += str;
}
function getNewTicketTemplate() {
    var str = "<div class=\"col-md-10 order-md-1\">\n    <h4 class=\"mb-3\">New Ticket</h4>\n    <form class=\"needs-validation\" onSubmit=\"createTicket();return false;\">\n        <div class=\"mb-3\">\n            <label for=\"contact\">Contact<span style=\"color: red;\">*</span></label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                </div>\n                <input type=\"email\" class=\"form-control\" id=\"contact\" placeholder=\"abc@freshdesk.com\" required>\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                    Contact is required.\n                </div>\n            </div>\n        </div>\n        <div class=\"mb-3\">\n            <label for=\"eeEmail\">CC Email</label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"ccEmail\" placeholder=\"abc@freshdesk.com;xyz@freshdesk.com\">\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                    Contact is required.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"mb-3\">\n            <label for=\"subject\">Subject<span style=\"color: red;\">*</span></label>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"\" required>\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                    Subject is required.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"mb-3\">\n            <label for=\"newContactType\">Type</label>\n            <select name=\"type\" id=\"newContactType\" class=\"custom-select custom-select-sm\">\n                <option value=\"question\" selected>Question</option>\n                <option value=\"incident\">Incident</option>\n                <option value=\"problem\">Problem</option>\n                <option value=\"featureRequest\">Feature Request</option>\n                <option value=\"refund\">Refund</option>\n            </select>\n            <div class=\"invalid-feedback\">\n                Select a type\n            </div>\n        </div>\n\n        <div class=\"mb-3\">\n            <label for=\"status\">Status<span style=\"color: red;\">*</span></label>\n            <select name=\"status\" id=\"newContactStatus\" class=\"custom-select custom-select-sm\" required>\n                <option value=\"2\" selected>Open</option>\n                <option value=\"3\">Pending</option>\n                <option value=\"4\">resolved</option>\n                <option value=\"5\"> Closed</option>\n            </select>\n            <div class=\"invalid-feedback\">\n                Select A status\n            </div>\n        </div>\n        <div class=\"mb-3\">\n            <label for=\"priority\">Priority<span style=\"color: red;\">*</span></label>\n            <select name=\"priority\" id=\"newContactPriority\" class=\"custom-select custom-select-sm\" required>\n                <option value=\"1\" selected>Low</option>\n                <option value=\"2\">Medium</option>\n                <option value=\"3\">High</option>\n                <option value=\"4\"> Urgent</option>\n\n            </select>\n            <div class=\"invalid-feedback\">\n                Select a priority\n            </div>\n        </div>\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Description</span>\n            </div>\n            <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"description\"></textarea>\n        </div>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" >Create New Ticket</button>\n    </form>\n</div>\n</div>";
    document.getElementById("content").innerHTML = str;
}
