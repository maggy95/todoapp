function getInputValue() {
    var inputBox = document.getElementById("inputBox");
    return inputBox.value;
}
function tweet() {
    var inputBoxValue = getInputValue();
    if (inputBoxValue !== "") {
        doTweet(inputBoxValue);
        clean();
    }
}
function doTweet(tweetText) {
    var tweets = document.getElementById("tweets");
    //Crear el elemento
    var elemento = document.createElement("div");
    elemento.className = "tweet";
    elemento.innerHTML = '<input type="checkbox" onclick="tachado(this)"><span>' +tweetText+'</span>';
    //para eliminar
    var tacho = document.createElement("span");
    tacho.className="glyphicon glyphicon-trash pull-right";
    tacho.onclick=function(){
        tweets.removeChild(elemento);
    }
    //Agregar elementos a tweets
    tweets.appendChild(elemento);
    elemento.appendChild(tacho);
}
function clean() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = "";
    inputBox.focus();
}
function tachado(date){
    date.nextSibling.className = "tachar";
}