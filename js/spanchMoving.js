const ourHero = document.getElementById('spanch-bob');
ourHero.style.top = '350px'
ourHero.style.left = '400px'


const getKeyCode = (e) => {
  return getStep(e.key);
}



const getStep = (key) => {
    let topPos = parseFloat(ourHero.style.top);
    let leftPos = parseFloat(ourHero.style.left);

    switch(key){
        case 'ArrowUp':
            return ourHero.style.top = `${topPos - 5}px`

        case 'ArrowLeft':
            return ourHero.style.left = `${leftPos - 5}px`

        case 'ArrowRight':
            return ourHero.style.left = `${leftPos + 5}px`

        case 'ArrowDown':
            return ourHero.style.top = `${topPos + 5}px`
    }
    return
} 


window.addEventListener("keydown", getKeyCode);

