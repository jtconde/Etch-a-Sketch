/**
 * Created by julianconde on 4/24/17.
 */
function makeDivs(v){
    var e = document.body; // appending to body
    for(var i = 0; i < v; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (var x = 1; x <= v; x++) {
            var cell = document.createElement("div");
            cell.className = "gridSquare";
            row.appendChild(cell);
        }
            e.appendChild(row);


    }
    var button = document.getElementById("submit");
    var box = document.getElementById("numberSquares")
    if (button.style.display !== "none") {
        button.style.display = "none";
    }
    if (box.style.display !== "none") {
        box.style.display = "none";
    }

    $(document).ready(function(){
        $("div").hover(function(){
            $(this).css("background-color", "black");
        }, function(){
            $(this).css("background-color", "black");
        });
    });

    document.getElementById("code").innerText = e.innerHTML;
}

