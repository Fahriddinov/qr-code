let ask = prompt('1. uzb \n 2. русс \n 3. eng \n 4. ❌')
let img = document.querySelector('.img')
let btn1 = document.querySelector('.uzbb')
let btn2 = document.querySelector('.rusb')
let btn3 = document.querySelector('.engb')
let btn4 = document.querySelector('.sh')

if (ask == 1) {
    btn1.style.display = 'block'
} else if (ask == 3) {
    btn3.style.display = 'block'
} else if (ask == 2) {
    btn2.style.display = 'block'
} else if (ask == 4) {
    btn4.style.display = 'block'
} else {
    alert('Xato / Ошыбка / Eror')
}

btn1.onclick = () => {
    img.style.display = 'block'
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytyTiMKl3zcKygOMcFmV3UlF4C5HcvrE1ig&s'
}
btn2.onclick = () => {
    img.style.display = 'block'
    img.src = 'https://cdn.fishki.net/upload/users/2024/05/30/355374/c871b1648c61bd88fc48e2daa959e1de.jpg'
}
btn3.onclick = () => {
    img.style.display = 'block'
    img.src = 'https://pbs.twimg.com/media/GGhubSSa0AA_ie9?format=jpg&name=small'
}

btn4.onclick = () => {
    img.style.display = 'block'
    img.src = 'https://masterpiecer-images.s3.yandex.net/114e83e76a1b11ee8c214659bdca6a39:upscaled'
    setTimeout (() => {
        img.style.display = 'none'
    }, 200)
}

