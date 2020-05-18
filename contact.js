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
function listContact() {
    return __awaiter(this, void 0, void 0, function () {
        var title, btn1, btn2, uri, h, encoded, auth, req, response, jsonData, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    document.getElementById("content").innerHTML = "";
                    title = document.getElementById("titleOfMain");
                    title.innerHTML = "Contacts";
                    btn1 = document.getElementById("btn1");
                    btn1.innerHTML = "+New Contact";
                    btn1.disabled = false;
                    btn1.setAttribute("onclick", "getNewContactTemplate()");
                    btn2 = document.getElementById("btn2");
                    btn2.innerHTML = "Delete";
                    btn2.disabled = true;
                    document.getElementById("btn2").classList.remove("btn-danger");
                    document.getElementById("btn2").setAttribute("class", "btn btn-sm btn-outline-secondary");
                    btn2.setAttribute("onclick", "deleteContact()");
                    uri = "https://vjbakash.freshdesk.com/api/v2/contacts";
                    h = new Headers();
                    h.append("Content-Type", "application/json");
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    h.append("Origin", "https://vjakash.github.io/Hackathon/");
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
                    document.getElementById("content").innerHTML += "<div class=\"row\"><div class=\"col-lg-9\" id=\"ticketCards\"></div><div class=\"col-lg-3 \" id=\"newContact\"></div></div>";
                    document.getElementById("ticketCards").innerHTML += "<table class=\"table\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\"></th>\n      <th scope=\"col\">Contact</th>\n      <th scope=\"col\">Title</th>\n      <th scope=\"col\">Company</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Work Phone</th>\n      <th scope=\"col\">Time Zone</th>\n      <th scope=\"col\">Id</th>\n      <th scope=\"col\">TWitter Id</th>\n    </tr>\n  </thead>\n  <tbody id=\"listOfContacts\">\n    \n  </tbody>\n</table>";
                    for (i in jsonData) {
                        document.getElementById("listOfContacts").innerHTML += "\n  <tr>\n  <th scope=\"row\"><input type=\"checkbox\" name=\"contactsDelete\" value=\"" + jsonData[i].id + "\" onclick=\"enableContactDelete()\"/></th>\n  <td><a href=\"#\" ><span onclick=\"viewContact(" + jsonData[i].id + ")\">" + jsonData[i].name + "</span></a></td>\n  <td>" + jsonData[i].job_title + "</td>\n  <td>" + jsonData[i].company_id + "</td>\n  <td>" + jsonData[i].email + "</td>\n  <td>" + jsonData[i].phone + "</td>\n  <td>" + jsonData[i].time_zone + "</td>\n  <td>" + jsonData[i].id + "</td>\n  <td>" + jsonData[i].twitter_id + "</td>\n</tr>";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function viewContact(id) {
    return __awaiter(this, void 0, void 0, function () {
        var btn1, btn2, uri, h, encoded, auth, req, response, jsonData, temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    btn1 = document.getElementById("btn1");
                    btn1.disabled = true;
                    btn2 = document.getElementById("btn2");
                    btn2.disabled = false;
                    btn2.innerHTML = "Update Ticket";
                    uri = "https://vjbakash.freshdesk.com/api/v2/contacts/" + String(id);
                    h = new Headers();
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    h.append("Origin", "https://vjakash.github.io/Hackathon/");
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
                    temp = "";
                    if (jsonData.avatar == null) {
                        temp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8zMzMWFhbq6uo3NzcvLy8jIyMdHR0kJCQsLCzt7e0nJycfHx8REREqKioXFxfk5OSurq7T09Nzc3PKysq5ubmHh4dqamqTk5P19fXc3Nx9fX2mpqYLCwtbW1ugoKBRUVFJSUk/Pz9jY2NOTk62trbDw8OPj49DQ0NxcXHoA0ZMAAAEaElEQVR4nO3c23qiMBQF4BFJwiEIKioKHltt+/4vOFjtjO1UCYmyk876b7zd60skB0J+/QIAAAAAAAAAAAAAAAAAAAAAAAAAAFvNo6gfRXPqMh4jmkw3fsyFJ3jsb6aTiLqg+1oU24THrPeBxTLZFgvqsu5muE0v0v1NmW731KXdxTCU/8Y7h5TM/Yz5Tl6JdyJeR9Qlmim9a+33px29KXWRBhZ+3JDvKNhl1IXqmjQ24LkZ0wN1qXrWiVK+o2RIXayOtacc0M2IVZuAdUTnho2Dehc9R3Rs1MhEy4D1FMetmeqr2lP0UriiLrqNgrcOWE9vKuqy1WVLjYC9nudOP12FWgkHY+rCVeWpVsC6EV1ZMW7aP2ZOwjfq0tWM2o31l5Z96uKVjAfaCeOCungVc52R4oNPXb2Kye1F/W2pC3O3Ur+TOtJNW89IL7EtdfnNMv0n6dGSuv5mB5O/YT05tX/QXwdGCbn9K2GjB02vF6ypAzR60pt1fxjYv3uqPSk9Ce1fX5gmtH+lvzJLyBxIaPY/dCDhm1nCcEYdoNGLysuY6wYldYBGldmI78B4mJvN2qT9r6Gittv5n3kOvEs0m7Wl1OUrMJqYOrHbZrR84i68RzTaiRJObOyP9cf88Im6eCUGO8LC/rHi3VZ38s2c2C6tHXS324T9Wxhnz3qNyHbUhSsb6c1rkpy6cHWlzgJjYP/C6a+5zrxGOnU6WqOfJo6MFB/Wbd90CxfeyXxStpu8cft3Ef8xaxMxcGO69sVMfZHBnQxYd1TV/2Jq//bTFVWiMrlhiUPHvb5a7Jp33vjO/leGt0yXt1eL4fKFukRT2ZN3PWPozdw4I3RbvvK++Sio/v8F3pMLh0tUZMVrwj+3ZMiT7fontN8f2XAWCiH5kUwlG+9/VLyzaHSY7If7yWHhxI4aAAAAAAAAPMY8ykb50Sj7YZfwZPmwGG92jIu0XuVLKepfznabcTHMHTjjdVOUV+XzMU8csq97UYyF7zcOPZdV7uaSf1TNmBDBoPFuk0EgRG9WubXrNipWUgRtDg6FgeCrwo2U0f5Nim/3RxtTxoKPbb8hK6s2KTc56B3KdFVZu8/Yr7ZJYPYtwhELkuehjS15mNVDgHG8c0gu3iw7WzNfM2H2FcJXofAre6YF/ak0O6D/Lcb5ix2dNSsTs08srou9Kf1TJyo9s6PrjRmJ++paPDLfe0bSo9+5b3KmW5Wku5av+UK9+2Aezbv+zH/AA/QKviV4qh6u3mj5CGHceU+t9C5K0recdBuw0L1GSF+31/K1ujHwXpYdnuTfUwTs8qT7wuwTQ32dfRXld/kUvRRuugmodaHefYhOnjYRzZ/wJOgiYfGotZIK2UUjdjdX+0YXtyzlRvdAGUse/x6AtJN28qGw4Q07pjq4oWdHNRiedHD3iU8asIuvMIkTdnCzIhIiIRIiIRIiIRIiIRIiIRIi4T3IxKOUyIcn7FN7eEIAAAAAAAAAAAAAAAAAAAAAAAAAgP/abyHWSTVL+7WKAAAAAElFTkSuQmCC";
                    }
                    else {
                        temp = jsonData.avatar.avatar_url;
                    }
                    document.getElementById("content").innerHTML = " <div class=\"row\">\n             <div class=\"col-lg-7\">\n                 <div class=\"card mb-3\" style=\"max-width: 540px;\">\n                     <div class=\"row no-gutters\">\n                         <div class=\"col-md-4\">\n                             <img src=\"" + temp + "\" class=\"card-img\" alt=\"...\">\n                         </div>\n                         <div class=\"col-md-8\">\n                             <div class=\"card-body\">\n                                 <h5 class=\"card-title\">" + jsonData.name + "</h5>\n                                 <p class=\"card-text\"><small class=\"text-muted\">ID: " + jsonData.id + "</small></p>\n                                 <p class=\"card-text\">Email: " + jsonData.email + "<br>Time Zone:" + jsonData.time_zone + "<br>Job Title: " + jsonData.job_title + " <br>\n                                 Work-Phone: " + jsonData.phone + "</p>\n     \n                             </div>\n                         </div>\n                     </div>\n                 </div>\n             </div>\n             <div class=\"col-lg-4\" id=\"viewContactCard\">\n             </div>\n         </div>";
                    btn2.setAttribute("onclick", "getContactUpdateTemplate(" + jsonData.id + ")");
                    return [2 /*return*/];
            }
        });
    });
}
function updateContact(id) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, job_title, phone, obj, uri, h, encoded, auth, req, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = document.getElementById("name").value;
                    email = document.getElementById("email").value;
                    job_title = document.getElementById("job_title").value;
                    phone = document.getElementById("phone").value;
                    obj = {};
                    if (name != "") {
                        obj["name"] = name;
                    }
                    if (email != "") {
                        obj["email"] = email;
                    }
                    if (job_title != "") {
                        obj["job_title"] = job_title;
                    }
                    if (phone != "") {
                        obj["phone"] = phone;
                    }
                    console.log(obj);
                    uri = "https://vjbakash.freshdesk.com/api/v2/contacts/" + id;
                    h = new Headers();
                    h.append("Content-Type", "application/json");
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    h.append("Origin", "https://vjakash.github.io/Hackathon/");
                    h.append("Host", "vjakash.github.io/Hackathon/");
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
                    //   let jsonData = await response.json();
                    console.log(response);
                    viewContact(id);
                    return [2 /*return*/];
            }
        });
    });
}
function createContact() {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, job_title, phone, twitter_id, data, uri, h, encoded, auth, req, response, jsonData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = document.getElementById("name").value;
                    email = document.getElementById("email").value;
                    job_title = document.getElementById("title").value;
                    phone = document.getElementById("workPhone").value;
                    twitter_id = document.getElementById("twitter").value;
                    data = JSON.stringify({ name: name, email: email, job_title: job_title, phone: phone, twitter_id: twitter_id });
                    uri = "https://vjbakash.freshdesk.com/api/v2/contacts";
                    h = new Headers();
                    h.append("Content-Type", "application/json");
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    h.append("Origin", "https://vjakash.github.io/Hackathon/");
                    h.append("Host", "vjakash.github.io/Hackathon/");
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
                    listContact();
                    return [2 /*return*/];
            }
        });
    });
}
function deleteContact() {
    return __awaiter(this, void 0, void 0, function () {
        var del, _a, _b, _i, i, uri, h, encoded, auth, req, response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    del = document.getElementsByName("contactsDelete");
                    _a = [];
                    for (_b in del)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    i = _a[_i];
                    if (!(del[i].checked == true)) return [3 /*break*/, 3];
                    uri = "https://vjbakash.freshdesk.com/api/v2/contacts/" + del[i].value;
                    h = new Headers();
                    encoded = window.btoa(apiKey);
                    auth = "Basic " + encoded;
                    h.append("Authorization", auth);
                    h.append("Origin", "https://vjakash.github.io/Hackathon/");
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
                    listContact();
                    return [2 /*return*/];
            }
        });
    });
}
function enableContactDelete() {
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn2").setAttribute("class", "btn-danger");
    var del = document.getElementsByName("contactsDelete");
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
