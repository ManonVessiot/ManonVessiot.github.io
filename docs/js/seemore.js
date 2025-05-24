function ShowDetails(id) {
  var content = document.getElementById(id + "-content");
  var btn_more = document.getElementById(id + "-btn-more");
  var btn_less = document.getElementById(id + "-btn-less");
  content.style.display = "block";
  btn_less.style.display = "block";
  btn_more.style.display = "none";
  }

  function HideDetails(id) {
    var content = document.getElementById(id + "-content");
    var btn_more = document.getElementById(id + "-btn-more");
    var btn_less = document.getElementById(id + "-btn-less");
    content.style.display = "none";
    btn_more.style.display = "block";
    btn_less.style.display = "none";
    }