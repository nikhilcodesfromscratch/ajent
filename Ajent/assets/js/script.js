function navigation() {
    var x = document.getElementById("navigation-bar");
    var t = document.getElementById("one");
    var b = document.getElementById("two");
    if (x.style.display === 'block'){
        x.style.display = "none";
        t.style.visibility="hidden";
        b.style.visibility="visible";
    }
    else {
        x.style.display = "block";
        t.style.visibility="visible";
        b.style.visibility="hidden";
    }
}
function applied() {
    document.getElementById("applied").innerHTML='Applied!';
}
function appliedone() {
    document.getElementById("appliedone").innerHTML='Applied!';
}
function appliedtwo() {
    document.getElementById("appliedtwo").innerHTML='Applied!';
}
function displayPost() {
    document.getElementById("post-job").style.display='block';
}
function closePost() {
    document.getElementById("post-job").style.display='none';
}
function afterUpdate() {
    document.getElementById("updated").style.visibility='visible';
}