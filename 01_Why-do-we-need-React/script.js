const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const basketCount1 = document.querySelector('.basket-1 span')
const basketCount2 = document.querySelector('.basket-2 span')


// rightArrow.addEventListener('click', () => {
//     let firstBasketAppleCount = parseInt(basketCount1.textContent)
//     let secondBasketAppleCount = parseInt(basketCount2.textContent)

//     if (firstBasketAppleCount > 0) {
//         basketCount1.textContent = `${firstBasketAppleCount - 1} Apples`
//         basketCount2.textContent = `${secondBasketAppleCount + 1} Apples`
//     }
// })

// leftArrow.addEventListener('click', () => {
//     let firstBasketAppleCount = parseInt(basketCount1.textContent)
//     let secondBasketAppleCount = parseInt(basketCount2.textContent)

//     if (secondBasketAppleCount > 0) {
//         basketCount1.textContent = `${firstBasketAppleCount + 1} Apples`
//         basketCount2.textContent = `${secondBasketAppleCount - 1} Apples`
//     }
// })

const totalApples = 100

let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApples - secondBasketAppleCount

rightArrow.addEventListener ('click' , () => {
    
    if(firstBasketAppleCount > 0 ) {
        secondBasketAppleCount++
        basketCount2.innerText = secondBasketAppleCount +' '+ "Apples"
        firstBasketAppleCount--
        basketCount1.innerText = firstBasketAppleCount + ' ' + "Apples"
    }
})
leftArrow.addEventListener ('click' , () => {
    
    if(secondBasketAppleCount > 0 ) {
        firstBasketAppleCount++
        basketCount1.innerText = firstBasketAppleCount + ' ' + "Apples"
        secondBasketAppleCount--
        basketCount2.innerText = secondBasketAppleCount + ' ' + "Apples"
    }
})
