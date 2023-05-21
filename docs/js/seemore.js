function ShowDetails(id) {
  var content = document.getElementById(id + "-content");
  var btn = document.getElementById(id + "-btn");
    if (content.style.display == "none"){
      content.style.display = "block";
      btn.innerHTML  = "<b>< SEE LESS</b>";
    }
    else{
      content.style.display = "none";
      btn.innerHTML  = "<b>SEE MORE ></b>";
    }
  }