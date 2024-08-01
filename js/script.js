function formValidation() {
    let name = document.getElementById('name').value;
    console.log(name);

    let mail = document.getElementById('mail').value;
    console.log(mail);

    if (mail == '') {
        alert('Email Anda Kosong!')
    }

    if (name == '') {
        alert('Nama Anda Kosong!')
    }
    else {
        alert('Form Sukses')
    } 
}







