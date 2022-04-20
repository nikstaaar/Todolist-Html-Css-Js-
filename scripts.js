function NewTodo(){
    var ListItem = document.createElement("Li");
    var inputField = document.getElementById("my Input").value;
    var tNode = document.createTextNode(inputField)

    ListItem.appendChild(tNode);
        document.getElementById("myUL").appendChild(ListItem)
}

