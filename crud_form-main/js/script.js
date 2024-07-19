let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("inputEmail4");
let password = document.getElementById("password");
let age = document.getElementById("age");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let isEdit = false;
let isIndex;

const getData = () => {
    let data = JSON.parse(localStorage.getItem("data"));

    if (data) {
        return data;
    } else {
        return [];
    }
}
let storage = getData();
let AddData = () => {

    event.preventDefault();

    let StudentData = {
        id : isIndex ? isIndex : storage.length + 1,
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value,
        age: age.value,
        state: state.value,
        zip: zip.value

    }

    if (isEdit) {

        console.log("obj", StudentData);

        let data = [...storage];
        let updatedRec = data.map((rec) => {

            if (rec.id == isIndex) {
                return rec = StudentData;
            } else {
                return rec;
            }

        })
        console.log('updated successfully..', updatedRec);
        storage = updatedRec;
        isEdit = false;
        isIndex = ' ';

    } else {

        storage = [...storage, StudentData];
        console.log(StudentData);
        console.log(storage);

    }
    displayData();

    fname.value = "";
    lname.value = "";
    email.value = "";
    password.value = "";
    age.value = "";
    state.value = "";
    zip.value = "";


    let setData = JSON.stringify(storage);
    localStorage.setItem("data", setData);

}
let singleRecord = (id) => {
    console.log("Edit Your Data..");

    let data = [...storage];

    let single = data.filter(() => {

        return id === id;

    })

    isEdit = true;
    isIndex = id;

    console.log("single", single[0]);

    fname.value = single[0].fname;
    lname.value = single[0].lname;
    email.value = single[0].email;
    password.value = single[0].password;
    age.value = single[0].age;
    state.value = single[0].state;
    zip.value = single[0].zip;

}
let deletRec = (id) => {

    console.log("delet..");
    let data = [...storage]

    let newRec = data.filter((rec) => {
        return rec.id != id
    })

    console.log(newRec);

    storage = newRec;

    let setData = JSON.stringify(storage);
    localStorage.setItem("data", setData);

    displayData();

}
let displayData = () => {

    tbody.innerHTML = "";
    storage.forEach((rec) => {

        tbody.innerHTML += `<tr>
        <td>${rec.fname}</td>
        <td>${rec.lname}</td>
        <td>${rec.email}</td>
        <td>${rec.password}</td>
        <td>${rec.age}</td>
        <td>${rec.state}</td>
        <td>${rec.zip}</td>
        <td><button class="btn btn-primary" onClick="return singleRecord(${rec.id})" >Edit..</button> || <button class="btn btn-danger" onClick="return deletRec(${rec.id})">Delete</button></td>
        </tr>`
    })
}
displayData();