var form= document.getElementById('form');
form.onsubmit= function(){
    var nama= document.getElementById('nama');
    var umur= document.getElementById('umur');
    var email= document.getElementById('email');
    var genderMale= document.getElementById('male');
    var genderFemale= document.getElementById('female');
    var negara= document.getElementById('negara');
    var address= document.getElementById('Address');

    if(nama.value == ""){
        alert("Nama Harus diisi");
        return false;
    } else if(nama.value.lenght <5){
        alert("Panjang nama minimal 5");
        return false;
    } else if(umur.value == ""){
        alert("Umur Harus diisi");
        return false;
    } else if(umur.value < 10){
        alert("Anda terlalu muda");
        return false;
    }else if(umur.value > 40){
        alert("Anda terlalu tua");
        return false;
    } else if(email.value == ""){
        alert("Email Harus diisi");
        return false;
    } else if (email.value.indexOf('.com')==-1){
        alert("email harus ada .com");
    } else if(genderMale.checked == false && genderFemale.checked == false){
        alert("Gender harus dipilih");
        return false;
    } else if(negara.value == ""){
        alert("Negara Harus dipilih");
        return false;
    } else if(address.value == ""){
        alert("Address harus diisi");
    }else if (address.value.indexOf('Street')==-1){
        alert("Address harus ada 'Street'");
        return false;
    } else {
        alert("Data Sukses Diregister");
        return true;}
}

var form1= document.getElementById('form1');
form1.onsubmit= function(){
    var email= document.getElementById('email');
    var pass= document.getElementById('pass');

    if(email.value == ""){
        alert("Email Harus diisi");
        return false;
    }else if (pass.value == ""){
        alert("Password Harus diisi");
        return false;
    } else {
        return true;
        open('$(link-status)', 'hotspot_status', 'toolbar=0,location=0,directories=0,status=0,menubars=0,resizable=1,width=290,height=200');
    location.href = 'Home.html';
    }    
}