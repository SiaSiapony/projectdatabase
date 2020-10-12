function AddItem() {
    var number = document.getElementById("add");
    var content = document.getElementById("content");
    var count = [];
    if (number >= 1) {
        alert("Nice");
    }
}

function DeleteItem() {
    var container = document.getElementById("container");
    var content = document.getElementById("content");
    container.style.backgroundColor = "#000000";
    content.style.color = "#CC0099";
}

function Topping() {
    var checkboxes = document.getElementsByName("topping");
    var numberOfCheckedItems = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked)
            numberOfCheckedItems++;
    }
    if (numberOfCheckedItems > 2) {
        alert("You can't select more than two Menu!");
        return false;
    }
}