let img :any = document.querySelector('.skate')
let box :any = document.querySelector('.skate__wrapper')
let shadow: any = document.querySelector('.bg')

let positionX :number = 0
let positionY :number = 0
let lerpPositionX :number = 0
let lerpPositionY :number = 0
let lerpShadowX :number = 0
let lerpShadowY :number = 0


const lerp = (a :number, b :number, t :number) => {
    return (1 - t) * a + t * b;
}


window.addEventListener('load', (e) => {
    shadow.style.height = img.clientHeight
    shadow.style.width = img.clientWidth
})

document.addEventListener('mousemove', (e) => {
    moveAnimation(e)
})  


const moveAnimation = (e: any) => {
    const multiplier = 30
    const speed = 5
    let easePositionX :number = 0
    let easePositionY :number = 0
  
    positionX = (e.clientX / window.innerWidth) * 2 - 1
    positionY = (e.clientY / innerHeight) * 2 - 1

    positionX >= 0 ? ( easePositionX = easeOutExpo(positionX)) : ( easePositionX = -easeOutExpo(-positionX))
    positionY >= 0 ? ( easePositionY = easeOutExpo(positionY)) : ( easePositionY = -easeOutExpo(-positionY))
    lerpPositionX  = lerp(lerpPositionX, easePositionX * multiplier, 1 / speed)
    lerpPositionY  = lerp(lerpPositionY, easePositionY * multiplier, 1 / speed)
  
}

const easeOutExpo = (x: number): number => {
    // return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    return x * 1
}

const animationFrame = () => {
    const speedReducer = 15
    lerpShadowX  = lerp(lerpShadowX, lerpPositionX, 1 / speedReducer )
    lerpShadowY  = lerp(lerpShadowY, lerpPositionY , 1 / speedReducer )
    shadow.style.transform = `translate3D(calc(-50% + ${lerpShadowX}px), calc(-50% + ${lerpShadowY}px), ${0})`
    box.style.transform = `translate3D(calc(-50% + ${lerpPositionX}px), calc(-50% + ${lerpPositionY}px), ${0})`
    img.style.transform = `scale(1.2) translate3D(${lerpPositionX}px, ${lerpPositionY}px, ${0})`
    requestAnimationFrame(animationFrame)
}

requestAnimationFrame(animationFrame)








