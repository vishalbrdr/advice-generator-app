
const num = document.getElementById("num")
const text = document.getElementById("text")
const btn = document.getElementById('next')

async function fetchAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    btn.classList.add("loading")
    const res = await fetch(url);
    const data = await res.json()
    num.textContent = data.slip.id
    text.textContent = data.slip.advice
    btn.classList.remove("loading")
}

document.addEventListener('DOMContentLoaded', async () => {
    try{
        fetchAdvice()
        btn.addEventListener("click", fetchAdvice)
    } catch(e){
        console.log(e);
    }
})
