
const divA = document.querySelector('#a')
const divB = document.querySelector('#b')
const divC = document.querySelector('#c')
const divD = document.querySelector('#d')
const keyDiv = document.querySelector('#key')

const changeBackgroundColor = (event) => {
    const colors = ["purple", "blue", "green", "orange", "yellow", "red"];

    if(event.target.style.backgroundColor != "black"){
        event.target.style.backgroundColor = "black"
        return
    }
   const randomColor = colors[Math.floor(Math.random() * colors.length)]
   event.target.style.backgroundColor = randomColor
}

divA.addEventListener("click", changeBackgroundColor)
divB.addEventListener("click", changeBackgroundColor)
divC.addEventListener("click", changeBackgroundColor)
divD.addEventListener("click", changeBackgroundColor)

const createNewDiv = (color) => {
    const newDiv = document.createElement("div")
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.margin = "20px";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
};

    document.addEventListener('keydown', (event) => {
        const keyDiv = document.querySelector("#key")

        switch (event.key) {
            case 'a':
                keyDiv.style.backgroundColor = "pink"
                break;
            case 's':
                keyDiv.style.backgroundColor = "orange"
                break;
            case 'd':
                keyDiv.style.backgroundColor = "skyblue"
                break;
            case 'q':
                createNewDiv("purple")
                break;
            case 'w':
                createNewDiv("gray")
                break;
            case 'e':
                createNewDiv("brown")
                break;
            default:
                break;
        }
    })

