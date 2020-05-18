var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
window.onload = function () {
    // templateBody();
    getAPiKey();
};
var apiKey;
function dashBoard(ind) {
    return __awaiter(this, void 0, void 0, function () {
        var uri, h, encoded, auth, req, response, jsonData, unresolved, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("hi");
                    if (ind == 1) {
                        apiKey = document.getElementById("apikey").value;
                    }
                    uri = "https://vjbakash.freshdesk.com/api/v2/tickets";
                    h = new Headers();
                    h.append("Content-Type", "application/json");
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    req = new Request(uri, {
                        method: "GET",
                        headers: h,
                        credentials: "omit",
                        mode: "cors"
                    });
                    return [4 /*yield*/, fetch(req)];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    if (jsonData.hasOwnProperty('code')) {
                        getAPiKey();
                        alert(jsonData.code + "/n" + jsonData.message);
                    }
                    else {
                        document.body.innerHTML = "";
                        templateBody();
                        unresolved = 0;
                        for (i in jsonData) {
                            if (jsonData[i].status == 2 || jsonData[i].status == 3) {
                                unresolved++;
                            }
                        }
                        document.getElementById("content").innerHTML = "\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                    <div class=\"card\" style=\"width: 100%;\">\n                    <div class=\"card-body\">\n                    <h1 class=\"card-title\">Total Tickets</h1>\n                    <h1>" + jsonData.length + "</h1>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                    <div class=\"card\" style=\"width: 100%;\">\n                    <div class=\"card-body\">\n                    <h1 class=\"card-title\">Unresolved Tickets</h1>\n                    <h1>" + unresolved + "</h1>\n                    </div>\n                </div>\n            </div>\n        </div>";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function listTicket() {
    return __awaiter(this, void 0, void 0, function () {
        var title, btn1, btn2, uri, h, encoded, auth, req, response, jsonData, i, createdate, createtime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    document.getElementById("content").innerHTML = "";
                    title = document.getElementById("titleOfMain");
                    title.innerHTML = "Tickets";
                    btn1 = document.getElementById("btn1");
                    btn1.innerHTML = "+New Ticket";
                    btn1.disabled = false;
                    btn1.setAttribute("onclick", "getNewTicketTemplate()");
                    btn2 = document.getElementById("btn2");
                    btn2.innerHTML = "Delete";
                    btn2.disabled = true;
                    document.getElementById("btn2").classList.remove("btn-danger");
                    document.getElementById("btn2").setAttribute("class", "btn btn-sm btn-outline-secondary");
                    btn2.setAttribute("onclick", "deleteTicket()");
                    uri = "https://vjbakash.freshdesk.com/api/v2/tickets";
                    h = new Headers();
                    h.append("Content-Type", "application/json");
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    req = new Request(uri, {
                        method: "GET",
                        headers: h,
                        credentials: "omit",
                        mode: "cors"
                    });
                    return [4 /*yield*/, fetch(req)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    for (i in jsonData) {
                        createdate = new Date(jsonData[i].created_at);
                        createtime = createdate.getUTCDate();
                        document.getElementById("content").innerHTML += "<div class=\"row\"><div class=\"col-lg-8\" id=\"ticketCards\"></div><div class=\"col-lg-4 \" id=\"newTicket\"></div></div>";
                        document.getElementById("ticketCards").innerHTML += "<div class=\"card mb-3\" style=\"max-width: 800px;\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-md-1\">\n            <input type=\"checkbox\" onclick=\"enableDelete()\" class=\"mx-auto\" value=\"" + jsonData[i].id + "\" name=\"deleteTicket\"></input>\n        </div>\n        <div class=\"col-md-8\">\n            <div class=\"card-body\">\n            <a href=\"#\" style=\"text-decoration:none;\"><h5 class=\"card-title\" onclick=\"viewTicket(" + jsonData[i].id + ")\" id=\"ticketTitle\">" + jsonData[i].subject + "#" + jsonData[i].id + "</h5></a>\n                <!-- <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->\n                <p class=\"card-text\"><small class=\"text-muted\">Created at " + createdate + "</small></p>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n  \n        </div>\n    </div>\n  </div>";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function createTicket() {
    return __awaiter(this, void 0, void 0, function () {
        var description, type, subject, email, priority, status, cc_emails, data, uri, h, encoded, auth, req, response, jsonData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    description = document.getElementById("description").value;
                    type = document.getElementById("newContactType").value;
                    subject = document.getElementById("subject").value;
                    email = document.getElementById("contact").value;
                    priority = Number(document.getElementById("newContactPriority").value);
                    status = Number(document.getElementById("newContactStatus").value);
                    cc_emails = document.getElementById("ccEmail").value.split(";");
                    data = JSON.stringify({ description: description, subject: subject, email: email, priority: priority, status: status, cc_emails: cc_emails, type: type });
                    uri = "https://vjbakash.freshdesk.com/api/v2/tickets";
                    h = new Headers();
                    h.append("Content-Type", "application/json");
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    req = new Request(uri, {
                        method: "POST",
                        headers: h,
                        body: data,
                        credentials: "omit",
                        mode: "cors"
                    });
                    return [4 /*yield*/, fetch(req)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    listTicket();
                    return [2 /*return*/];
            }
        });
    });
}
function updateTicket(id) {
    return __awaiter(this, void 0, void 0, function () {
        var description, type, subject, email, priority, status, cc_emails, arr, obj, uri, h, encoded, auth, req, response, jsonData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    description = document.getElementById("description").value;
                    type = document.getElementById("newContactType").value;
                    subject = document.getElementById("subject").value;
                    email = document.getElementById("contact").value;
                    priority = Number(document.getElementById("newContactPriority").value);
                    status = Number(document.getElementById("newContactStatus").value);
                    cc_emails = document.getElementById("ccEmail").value.split(";");
                    arr = [description, subject, email, priority, status, cc_emails];
                    obj = {};
                    if (description != "") {
                        obj["description"] = description;
                    }
                    if (subject != "") {
                        obj["subject"] = subject;
                    }
                    if (email != "") {
                        obj["email"] = email;
                    }
                    if (priority != 0) {
                        obj["priority"] = priority;
                    }
                    if (status != 0) {
                        obj["status"] = status;
                    }
                    if (cc_emails.length != 0 && cc_emails[0] != "") {
                        obj["cc_emails"] = cc_emails;
                    }
                    if (type != "") {
                        obj["type"] = type;
                    }
                    console.log(obj);
                    uri = "https://vjbakash.freshdesk.com/api/v2/tickets/" + id;
                    h = new Headers();
                    h.append("Content-Type", "application/json");
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    req = new Request(uri, {
                        method: "PUT",
                        headers: h,
                        body: JSON.stringify(obj),
                        credentials: "omit",
                        mode: "cors"
                    });
                    return [4 /*yield*/, fetch(req)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    viewTicket(id);
                    return [2 /*return*/];
            }
        });
    });
}
function deleteTicket() {
    return __awaiter(this, void 0, void 0, function () {
        var del, _a, _b, _i, i, uri, h, encoded, auth, req, response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    del = document.getElementsByName("deleteTicket");
                    _a = [];
                    for (_b in del)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    i = _a[_i];
                    if (!(del[i].checked == true)) return [3 /*break*/, 3];
                    uri = "https://vjbakash.freshdesk.com/api/v2/tickets/" + del[i].value;
                    h = new Headers();
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    h.append("Origin", "https://vjakash.github.io/Hackathon/?");
                    h.append("Host", "vjakash.github.io/Hackathon/");
                    req = new Request(uri, {
                        method: "DELETE",
                        headers: h,
                        credentials: "omit",
                        mode: "cors"
                    });
                    return [4 /*yield*/, fetch(req)];
                case 2:
                    response = _c.sent();
                    // let jsonData = await response.json();
                    console.log(response);
                    _c.label = 3;
                case 3:
                    console.log(del[i].checked);
                    _c.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5:
                    listTicket();
                    return [2 /*return*/];
            }
        });
    });
}
function viewTicket(id) {
    return __awaiter(this, void 0, void 0, function () {
        var btn1, btn2, status, priority, uri, h, encoded, auth, req, response, jsonData, updatedDate, updatedTime, tempstr, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    document.getElementById("btn2").classList.remove("btn-danger");
                    document.getElementById("btn2").setAttribute("class", "btn btn-sm btn-outline-secondary");
                    btn1 = document.getElementById("btn1");
                    btn1.disabled = true;
                    btn2 = document.getElementById("btn2");
                    btn2.disabled = false;
                    btn2.innerHTML = "Update Ticket";
                    status = [".", ".", "Open", "Pending", "Resolved", "Closed"];
                    priority = [".", "Low", "Medium", "High", "Urgent"];
                    uri = "https://vjbakash.freshdesk.com/api/v2/tickets/" + String(id) + "?include=requester";
                    h = new Headers();
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    h.append("Origin", "https://vjakash.github.io/Hackathon/?");
                    h.append("Host", "vjakash.github.io/Hackathon/");
                    req = new Request(uri, {
                        method: "GET",
                        headers: h,
                        credentials: "omit",
                        mode: "cors"
                    });
                    return [4 /*yield*/, fetch(req)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    updatedDate = new Date(jsonData.updated_at);
                    updatedTime = updatedDate.getUTCDate();
                    tempstr = "";
                    for (i in jsonData.cc_emails) {
                        if (i == String(jsonData.cc_emails.length - 1)) {
                            tempstr += "" + jsonData.cc_emails[i];
                        }
                        else {
                            tempstr += jsonData.cc_emails[i] + ", ";
                        }
                    }
                    document.getElementById("content").innerHTML = "<div class=\"row\" >\n             <div class=\"col-lg-8\" >\n             <div class=\"card\">\n                <div class=\"card-header\">\n                   " + jsonData.subject + "\n                   <footer class=\"blockquote-footer\"> <cite title=\"Source Title\">" + jsonData.requester.name + "</cite>  reported via the portal </footer>\n                    </blockquote>\n                   <footer class=\"blockquote-footer\">Last updated at <cite title=\"Source Title\">" + updatedDate + "</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"card-body\">\n                    <blockquote class=\"blockquote mb-0\">\n                    <p>Description: " + jsonData.description_text + "</p>\n                    <p>Requester ID: " + jsonData.requester_id + "</p>\n                    <p>Status: " + status[jsonData.status] + " &emsp;&emsp;&emsp;&emsp;&emsp; Priority: " + priority[jsonData.priority] + "</p>\n                    <p>CC-Emails: " + tempstr + "</p>\n                   \n                    \n                </div>\n                </div>\n             </div>\n             <div class=\"col-lg-4\" id=\"viewTicketCard\">\n             </div>\n             </div>";
                    btn2.setAttribute("onclick", "getUpdateTemplate(" + jsonData.id + ")");
                    return [2 /*return*/];
            }
        });
    });
}
function enableDelete() {
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn2").setAttribute("class", "btn-danger");
    var del = document.getElementsByName("deleteTicket");
    var flag = true;
    for (var i in del) {
        if (del[i].checked == true) {
            flag = false;
        }
    }
    if (flag == true) {
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn2").classList.remove("btn-danger");
        document.getElementById("btn2").setAttribute("class", "btn btn-sm btn-outline-secondary");
    }
}
