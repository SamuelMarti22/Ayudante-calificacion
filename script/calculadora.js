cantidadDePreguntas = parseInt(localStorage.getItem('nPreguntas'))
const divPreguntas = document.getElementById('divRespuestas')
const divRespuestas = document.getElementById('divRespuestas2')
const enviar = document.getElementById('enviar')
const volver = document.getElementById('volver')
const notaMax = localStorage.getItem('notaMax')
for (let i = 1; i < cantidadDePreguntas + 1; i++) {
    let respuesta = document.createElement("div")
    let casilla = document.createElement('input')
    casilla.id = i + '.' + i
    respuesta.classList = 'pregunta'
    respuesta.appendChild(casilla)
    divRespuestas.appendChild(respuesta)
    let div = document.createElement("div")
    div.id = i
    div.classList = 'pregunta'
    div.textContent = 'Pregunta ' + i + ' : ' + localStorage.getItem(i)
    divPreguntas.appendChild(div)
}

enviar.addEventListener('click', e => {
    e.preventDefault()
    calificar()
})

volver.addEventListener('click', e => {
    Swal.fire({
        title: 'Cambiar número de preguntas y respuestas?',
        text: "Se te redireccionará a otra página y se perderan los datos actuales",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cambiar preguntas y respuestas',
        cancelButtonText: 'No, conservar preguntas y respuestas'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Confirmado',
                'Se le redireccionará a otra página',
                'success'
            )
            setTimeout(e => {
                window.location.href = '/html/index.html'
            }, 1500)
        }
    })
})

function calificar() {
    let correctas = 0
    for (let x = 1; x < cantidadDePreguntas + 1; x++) {
        let respuestaCorrecta = localStorage.getItem(x)
        let respuesta = document.getElementById(x + '.' + x).value
        if (respuesta == respuestaCorrecta) {
            correctas += 1
        }
    }
    let nota = ((notaMax / cantidadDePreguntas) * correctas).toFixed(1)
    Swal.fire(
        'Confirmado',
        'La nota es: ' + nota,
        'success'
    )
    setTimeout(e => {
        location.reload()
    }, 2500)
}