const text="ITACHI HUB ⚡";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,90);
}
}
typing();
const title = document.getElementById("typing");

title.addEventListener("click", () => {
  title.style.transform = "scale(3)";
  setTimeout(() => {
    title.style.transform = "scale(1)";
  }, 1000); // 1 second
});