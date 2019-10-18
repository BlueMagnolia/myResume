// ===========================================================
//             CHANGED BACKGROUND COLOR BUTTON
// ===========================================================
function changedBgColor() {
    document.querySelector("body").style.background = "#10ac84";
}

//  ---------------------- DOM ----------------------------
// let color = ["#222f3e", "#f368e0", "#ee5253", "#10ac84"]
// let i = 0;
// document.querySelector("button").addEventListener("click", function () {
//     i = 1 < color.length ? ++i : 0;
//     document.querySelector("body").style.background = color[i]
// })
// ===========================================================
//             DOUBLECLICK NAME FOR CHANGED
// ===========================================================
let oldName = document.querySelector(".newName");
let name = document.querySelector("#name");
let clickStatus = false;

function typeNewName() {
    if (clickStatus == false) {
        let newName = window.prompt("Please, type my new name");
        if (newName == '') {
            return;
        }
        document.getElementById("name").innerHTML = newName;
        clickStatus = true;
    }
    else if (clickStatus == true) {
        document.getElementById("name").innerHTML = "Nutthida Yusenas";
        clickStatus = false;
    }
}
oldName.ondblclick = typeNewName;
// ===========================================================
//             ADD OR DELETED MY SKILL
// ===========================================================

// All Variables
const btnAddVl = document.querySelector('.add-icon');
const buttonAddText = document.getElementById('send');
const inputValue = document.getElementById('inputAdd');
const myList = document.getElementById('list');
const removeBtn = document.getElementsByClassName('delete');


// Show Input
// btnAddVl.addEventListener('click', () => {
//     if (inputValue.style.display == 'none') {
//         inputValue.style.display = 'block'
//         buttonAddText.style.display = 'block'
//         btnAddVl.classList.add('fa-minus');
//     } else {
//         inputValue.style.display = 'none'
//         buttonAddText.style.display = 'none'
//         btnAddVl.classList.remove('fa-minus');
//         btnAddVl.classList.add('fa-plus');
//     }
// })


// When click buttonAddText Add text to li

buttonAddText.addEventListener('click', () => {
    let myNewValue = inputValue.value;

    //Check if input have value or is empty
    if (myNewValue == "") {

    } else {
        // Here will Create Li tag and add it value from input
        let newLi = document.createElement('li');
        let elementNew = myList.appendChild(newLi);
        elementNew.innerHTML = myNewValue + "<span onclick='myFunc(this)' class='delete fa fa-trash-o'></span>";

        inputValue.value = "";

    }
})


// Remove li from list

function myFunc(elem) {
    let li = elem.parentNode;
    li.parentNode.removeChild(li);
}