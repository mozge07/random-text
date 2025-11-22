let main = document.querySelector("main")
let h1 = document.querySelector("h1")
let btn = document.querySelector("button")

let arr = ['what the heck', 'damn', 'whats this', 'such a fool', 'not doing anything']

btn.addEventListener("click", function () {

    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)
    let x = Math.random() * 100
    let y = Math.random() * 100
    let rot = Math.floor(Math.random() * 360)

    let a = Math.floor(Math.random() * arr.length)

    let h1 = document.createElement("h1")
    h1.innerHTML = arr[a]

    h1.style.position = "absolute"
    h1.style.left = x + "%"
    h1.style.top = y + "%"
    h1.style.transform = `rotate(${rot}deg)`
    h1.style.color = `rgb(${c1},${c2},${c3})`


    main.appendChild(h1)
})