document.getElementById('visible').onclick = function() {
    var x = document.getElementById('myTopnav');
    if(x.className === "nav")
    {
        x.className += " resp";
    }
    else{
        x.className = "nav";
    }
}