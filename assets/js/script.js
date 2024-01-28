
 const ele = document.getElementById("ele1");

 ele.addEventListener("click", (event) => ((color = 'green')  => {
     event.target.style.backgroundColor = color;
 })('yellow'));

