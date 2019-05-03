document.addEventListener('DOMContentLoaded', function(){
    var todo = document.getElementById("new-todo");
    var filter = document.getElementById("filters");
    var items = JSON.parse(localStorage.getItem('items'));
    if (items == null || items.length == 0) {
        items = []
    } else {
        items.forEach(item => {
            filter.appendChild(createElement(item));        
        });
    }

    todo.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            item = todo.value
            if (item != '') {
                var addItem = (cb) => {
                    setTimeout(() => {
                        li = createElement(item)
                        cb(li, item)
                    }, 1000)
                }
                addItem((li, item) => {
                    filter.appendChild(li);
                    items.push(item)
                    console.log(items);
                    localStorage.setItem('items', JSON.stringify(items));
                })
            }
        }
    });

    function createElement(item) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        var btn = document.createElement("Button");
        btn.innerHTML = 'Delete';
        li.appendChild(btn);
        btn.style="background:yellow; border: 0.5px; margin-left: 20px";
        btn.addEventListener("click", function (e) {
            var r = confirm("Confirm deletion!");
            if (r == true) {
                indexInArrayItems = [...filter.getElementsByTagName("li")].findIndex((ele) => {
                    return ele.id == this.parentNode.id
                })
                var items = JSON.parse(localStorage.getItem('items'));
                if (items != null && items.length != 0) {
                    items.splice(indexInArrayItems, 1)
                    localStorage.setItem('items', JSON.stringify(items));
                }
                this.parentNode.parentNode.removeChild(this.parentNode);

            }
        });
        li.setAttribute("id", filter.getElementsByTagName("li").length);
        return li
    }
});
