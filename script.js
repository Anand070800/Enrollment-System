let submitBtn = document.getElementById("Submit");

const info = {
    s_name: '',
    email: '',
    website: '',
    image: '',
    gender: '',
    sArr: [],

}


const getData = () => {

    info.s_name = document.getElementById('name').value;
    if ((info.s_name) == '' || (/\d/.test(info.s_name))) {

        return false;

    }

    info.email = document.getElementById('email').value;
    if ((info.email) == '') {

        return false;

    }
    info.website = document.getElementById('website').value;

    if (info.website == '') {

        return false;
    }
    info.image = document.getElementById('image').value;

    if (info.image == '') {

        return false;
    }

    info.gender = document.querySelector('input[name="mf"]:checked').value;
    let skills = document.querySelectorAll('.checkbox:checked');

    info.sArr = [];
    skills.forEach((item) => {
        info.sArr.push(item.value);
    })

    if (localStorage.getItem("infoSection") === null) {
        infoItem = [];
    } else {
        infoItem = JSON.parse(localStorage.getItem("infoSection"))
    }
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
}

const showData = () => {
    let cardContainer = document.getElementById("basket");

    let cards = '';

    let getLocalStorage = localStorage.getItem("infoSection");

    if (getLocalStorage === null) {
        console.log("null");
    } else {
        cardDivArr = JSON.parse(getLocalStorage);

        cardDivArr.forEach((item, index) => {

            cards += `<div class="card">
            <img src="${item.image}" alt="PHOTO">
            <div class="info">
                <p style="margin-left:3.7em"><strong>Name</strong> : ${item.s_name}</p>
                <p style="margin-left:3.7em"><strong>Email</strong> : ${item.email}</p>
                <p style="margin-left:3.7em"><strong>website</strong> : <a href ="${item.website}" >${item.website}</a></p>
                <p style="margin-left:3.7em"><strong>Gender</strong> : ${item.gender}</p>
                <p style="margin-left:3.7em"><strong>Skills</strong> : ${item.sArr.join(", ")}</p>
                <button style="margin-left:3.7em" onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
        })
    }
    basket.innerHTML = cards;
}

const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);

    localStorage.setItem("infoSection", JSON.stringify(getList));
    window.location.reload();
}

showData();
submitBtn.addEventListener(('click'), () => {

    if (getData() == false) {
        msg = '';
        return alert(msg += 'Either field is empty or invalid data type!! please enter again');

    } else {
        showData();
    }

})