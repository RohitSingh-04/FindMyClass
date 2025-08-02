import {parseClasses, parseBlocks} from './data_parse.js'

const searchBar = document.getElementById("input-txt")
const searchbtn = document.getElementById("search-btn")
const FloorElement = document.getElementById("floor")
const classNameElement = document.getElementById("className")
const blockElement = document.getElementById("block")
const blockImage = document.getElementById("Block-Image")
const out = document.getElementById("result")
const classList = document.getElementById('classesList')

out.style.display = "none";

const class_data = parseClasses();
const block_data = parseBlocks();

async function fetchCustom(query) {
    const data = class_data.find(item => item.Class_Name === query);
    return data;
}

function fetchBlocks(block){
    const data = block_data.find(item => item.Block === block);
    console.log(data)
    data.latitude = Number(data.Latitude)
    data.longitude = Number(data.Longitude)
    return data;
}

async function fetchNames() {
    const data = class_data.filter(item => item.Class_Name.includes(formatString(searchBar.value)))
    return data
}

function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

function formatString(inputStr) {
    // Convert the string to uppercase
    let formattedStr = inputStr.toUpperCase();

    // Define a regular expression pattern to find '0' not followed by a digit
    let pattern = /(?<=\D)0+(?=\d)|[^a-zA-Z0-9_]/g;

    // Replace '0' with an empty string using the regular expression pattern
    formattedStr = formattedStr.replace(pattern, '');

    return formattedStr;

}

function querynRedirect() {
    if (searchBar.value == '') {
        return
    }
    else {
        let toSearch = searchBar.value
        let enhancedSearch = formatString(toSearch)

        let responce = fetchCustom(enhancedSearch)

        responce.then(x => {
            if (!x) {
                blockElement.innerHTML = "Not Found!"
                FloorElement.innerHTML = "Please Check the Spelling."
                classNameElement.innerHTML = searchBar.value
                blockImage.src = `img/NotFound.png`
            }
            else {
                blockElement.innerHTML = x.Block
                FloorElement.innerHTML = x.Floor
                classNameElement.innerHTML = searchBar.value
                blockImage.src = `img/${x.Block}.jpg`
                let block = fetchBlocks(x.Block)
                initMap(block.latitude, block.longitude, block.Block)
            }
        })

        hidealternate();

    }
}

function addDataList() {
    let responce = fetchNames();
    var dataHTML = ""
    responce.then(x => {
        for (let i = 0; i < x.length; i++) {
            dataHTML += `<option value = ${x[i].Class_Name} class="classes-names">`
            classList.innerHTML = dataHTML;
        }
    })
}



searchBar.addEventListener("focus", () => {
    if (searchBar.value == "Enter class to search") {
        searchBar.value = ""
    }
})


searchBar.addEventListener("input", (event) => {


    if (searchBar.value == "") {
        classList.innerHTML = "";
    }

    else {
        addDataList();
    }

})

searchBar.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        querynRedirect();
    }
}
)

searchbtn.addEventListener("click", querynRedirect)

function initMap(latitude, longitude, title) {
    // Initialize the map
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 18
    });

    // Create and place the marker
    marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: title
    });
    }
