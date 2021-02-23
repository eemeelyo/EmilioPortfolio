// function loadUsers() {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET','index.html',true);
//   xhr.onload = function() {
//     if(this.status == 200){
//       var users = JSON.parse(this.responseText);
//       var output = '';
//       for(var i in users){
//         var output +=
//         '<div class="loadUsers>'+
//         '<img src="'+avatar_url+'" width="78" height="78"></img>'+
//         '<ul>'+
//         '<li>ID: '+users.id+'</li>'+
//         '<li>Login: '+users.login+'</li>'+
//         '</ul>'+
//         '</div>';
//       }
//       document.getElemetnById('users').innerHTML = output;
//     }
//   }
//   xhr.send();
// }

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET','users.html',true);
  xhr.onload =  function() {
    if(this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = '';
      for (var i in users){
        output +=
        '<div class="users">
        '<img src="'+users_avatar+'" width="100" height="100">'+
        '<ul>'+
        '<li>''</li>'
        '</ul>'
        '</div>'
        
      }
    }
  }
}