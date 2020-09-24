var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
    console.log(request.getResponseHeader("Content-type"));
    console.log(JSON.stringify(this.response));
  }
};

request.open("GET", "http://localhost:3000/api/cameras/");
request.responseType = "json";
request.send();
