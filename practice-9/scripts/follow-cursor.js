const drawspan = document.getElementById("draw-heart")
console.log(drawspan)

function draw(event) {
    const newspan = drawspan.cloneNode();
    newspan.id = "new-draw-heart"
    newspan.style.top = event.pageY + "px";
    newspan.style.left = event.pageX + "px";

    drawspan.parentElement.appendChild(newspan);
}


let flag = false;

function HandleClick() {
    console.log(flag);
    if (!flag) {
        document.addEventListener("mousemove", draw);
    } else {
        document.removeEventListener("mousemove", draw)
    }
    flag = !flag

}//ОТСЛЕЖИВАЕТ НАЖАТИЕ


drawspan.addEventListener("click", HandleClick);