
const elements = {
    btnPeriodo1: document.querySelector("#periodo1"),
    btnPeriodo2: document.querySelector("#periodo2"),
    btnPeriodo3: document.querySelector("#periodo3"),
    btnPeriodo4: document.querySelector("#periodo4"),
    btnPeriodo5: document.querySelector("#periodo5"),
    btnPeriodo6: document.querySelector("#periodo6"),
    btnPeriodo7: document.querySelector("#periodo7"),
    btnPeriodo8: document.querySelector("#periodo8"),
    btnPeriodo9: document.querySelector("#periodo9"),
}

const {btnPeriodo1, btnPeriodo2, btnPeriodo3, btnPeriodo4, btnPeriodo5, btnPeriodo6, btnPeriodo7, btnPeriodo8, btnPeriodo9} = elements
const buttons = [btnPeriodo1, btnPeriodo2, btnPeriodo3, btnPeriodo4, btnPeriodo5, btnPeriodo6, btnPeriodo7, btnPeriodo8, btnPeriodo9]


// função especial
const addClass = (btn, changed, classSelected, act = "click") => {
    btn.addEventListener( act, () => {
        changed.classList.toggle(classSelected)
    })
}

const ligaDesliga = (btn, changed) => addClass(btn, changed, "desativado")
const selecionador = (caixaExterna, ccl) => {
    return caixaExterna.querySelector(`${ccl}`)
}

const selecionadorSpace = (caixaExterna) => {
    const selection = selecionador(caixaExterna, ".note")
    ligaDesliga(caixaExterna, selection)
}


// using

buttons.forEach(selecionadorSpace)