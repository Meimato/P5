var request = new XMLHttpRequest();

request.onreadystatechange = function () {

    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

        const myCartElement = document.getElementById("panier");
        const newBox = document.createElement("div");
        const s = localStorage.getItem("AddedToCart");
        myCartElement.appendChild(newBox);
        console.log(s);
    }

}

request.open("GET", "http://localhost:3000/api/cameras");
request.send();