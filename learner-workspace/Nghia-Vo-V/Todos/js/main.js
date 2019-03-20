function newToDo() {
    setTimeout( function() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("title").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Input something!");
        } else {
            document.getElementById("listToDo").appendChild(li);
        }
        document.getElementById("title").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        // Create a "close" button and append it to each list item
        var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }

        // remove todo when click close button.
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var r = confirm("Confirm Remove!");
                if (r == true) {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }
    }, 2000);
}
