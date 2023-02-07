const formulario = document.getElementById('form')

const botonEnviar = document.getElementById('enviar')

const divPreguntas = document.getElementById('preguntas')

const respuestasCorrectas = document.getElementById('respuestasCorrectas')

var nPreguntas = 0

formulario.addEventListener('submit', e => {
    e.preventDefault()
    nPreguntas = verificarDatos()
})

function verificarDatos() {
    var nPreguntas = parseInt(document.getElementById('cantidadDePreguntas').value)
    let instrucciones = document.createElement('div')
    instrucciones.textContent = 'Coloque en las casillas las respuestas correctas'
    instrucciones.classList = 'instrucciones'
    formulario.appendChild(instrucciones)
    for (let i = 1; i < nPreguntas + 1; i++) {
        let div = document.createElement("div")
        div.textContent = 'Pregunta ' + i
        div.classList = 'pregunta'
        let casilla = document.createElement("input")
        casilla.class = 'pregunta'
        casilla.id = i
        casilla.type = 'text'
        casilla.textContent = "Pregunta " + i
        div.appendChild(casilla)
        divPreguntas.appendChild(div)
    }
    return nPreguntas
}

botonEnviar.addEventListener('click', e => {
    Swal.fire({
        title: 'Subir respuestas?',
        text: "Se te redireccionará a otra página y no podrás cambiar las respuestas",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, enviar',
        cancelButtonText: 'No, cambiar respuestas'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Confirmado',
                'Se le redireccionará a otra página',
                'success'
            )
            var notaMax = parseInt(document.getElementById('notaMax').value)
            localStorage.setItem('nPreguntas', nPreguntas)
            localStorage.setItem('notaMax', notaMax)
            for (let x = 1; x < nPreguntas + 1; x++) {
                dato = document.getElementById(x).value
                console.log(dato)
                localStorage.setItem(x, dato)
            }
            setTimeout(e => {
                window.location.href = '/html/calificar.html'
            }, 2000)
        }
    })
})