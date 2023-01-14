var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display="none";
})


var i=["./public/a.jpg", "./public/b.jpg", "./public/c.jpg", "./public/d.jpg", "./public/e.jpg", "./public/f.jpg", "./public/g.jpg", "./public/h.jpg", "./public/i.jpg", "./public/j.jpg"]
function change(){
  var num=Math.floor(Math.random()*i.length)
  document.getElementById("contact").style.backgroundImage = 'url("'+i[num]+'")';
}
