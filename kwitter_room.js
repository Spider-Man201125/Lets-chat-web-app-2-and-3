// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAsx6BWb8Ok-U_QugYOB_d77nBqSl3YTh4",
      authDomain: "classtest-7ea5c.firebaseapp.com",
      databaseURL: "https://classtest-7ea5c-default-rtdb.firebaseio.com",
      projectId: "classtest-7ea5c",
      storageBucket: "classtest-7ea5c.appspot.com",
      messagingSenderId: "492207230852",
      appId: "1:492207230852:web:2955ae8f196dc7730cd7d1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.datebase().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
