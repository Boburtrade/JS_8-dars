let users = [
    {
        login: "azizbek1",
        password: "112233"
    }
];

$(document).ready(function (){
    $('.btn-success').click(function (){
        let login = $('#login').val();
        let password = $('#password').val();
        let num = false;
        if (users.length !=0){
          users.forEach(function (item){
              if (login == item.login){
                  if (password == item.password){
                      num = true;
                      alert("siz tizimga kirdingiz");
                  }
                  else {
                      alert("Parolingiz notogri");
                  }
              }
            });
          if (!num){
              alert("Ro`yhatdan o`tishingiz shart!");
          }

        }else {
            alert("Siz birinchi foydalanuvchidiz. Iltimos, ro`yhatdan o`ting!");
        }
    })
});