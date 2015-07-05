console.log("proxy");
ServiceProxy = function() //constructor for the proxy
{
  this._baseURL = "http://192.168.0.10:3000";
};

ServiceProxy.prototype =
{
  _defaultErrorHandler: function(xhr, status, error)
  {
    alert(xhr.statusText);
  },

  _doAjax: function(data, fnSuccess, fnError)
  {
    if (!data) data = {};

    if (!fnError) fnError = this._defaultErrorHandler;

    $.ajax({
      type: "GET",
      url: this._baseURL+"/api/parties",
      data: data,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: fnSuccess,
      error: fnError,
      dataFilter: function(data)
          {
              console.log(data);
//            var response;
//
//            if (typeof (JSON) !== "undefined" && typeof (JSON.parse) === "function")
//              response = JSON.parse(data);
//            else
//              response = val("(" + data + ")");
//
//            if (response.hasOwnProperty("d"))
//              return response.d;
//            else
//              return response;
          }
         
    });
  }
};