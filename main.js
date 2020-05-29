move = ""
let submit_move = document.getElementById("submit_move")
submit_move.addEventListener(type = "click", function() {
    let move = document.getElementById("move").innerHTML
});
if (move != "") {
    if (move === "1"){
        document.getElementById("sp1").innerHTML = ("")
        document.getElementById("sp2").innerHTML = ("(o)")
    }
    if (move === "2"){
        document.getElementById("sp1").innerHTML = ("")
        document.getElementById("sp3").innerHTML = ("(o)")
    }
    if (move === "3"){
        document.getElementById("sp1").innerHTML = ("")
        document.getElementById("sp4").innerHTML = ("(o)")
    }
}