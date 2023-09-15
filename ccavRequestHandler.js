var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  qs = require("querystring");

exports.postReq = function (request, response) {
  const { name, amount } = request.body;
  var workingKey = "9223AAA9021800C10C706B47E6B0D7C3", //Put in the 32-Bit key shared by CCAvenues.
    accessCode = "AVXS76JC64CK33SXKC"; //Put in the Access Code shared by CCAvenues.

  if (request.method === "POST") {
    var body = [
      {
        name,
        amount,
      },
    ];

    request.on("data", function (data) {
      body += data;
    });

    request.on("end", function () {
      if (body) {
        var encRequest = ccav.encrypt(body, workingKey);
        var formbody =
          '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' +
          encRequest +
          '"><input type="hidden" name="access_code" id="access_code" value="' +
          accessCode +
          '"><input type="submit" value="Submit"></form>';

        response.setHeader("Content-Type", "text/html");
        response.end(formbody);
      } else {
        response.status(400).end("Bad Request");
      }
    });
  } else {
    response.status(405).end("Method Not Allowed");
  }
};
