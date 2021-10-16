const $video = document.querySelector('#video')
    // se podria hacer referencia al tag "video", pero para hacer referencia a una cosa concreta se hace mediante una id "#"
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)
    // click es el evento que se busca, un evento es cualquier interaccion con la pagina, 
    // desde de reducir un margen a poner el raton encima de algo, 
    // addEventListener es para empezar a escuchar de un nuevo evento

function handleplay() {
    $video.play()
        // .[...]() designa un metodo, algo qe ya existe por defecto
    $play.hidden = true
        // .[...] = / == / != /... es una propiedad que se asigna un valor 
    $pause.hidden = false
    console.log('le diste click al boton de play')
}
// las propiedades como hidden o currentTime se pueden reasignar con =
function handlepause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
}

$backward.addEventListener('click', handleBackward)
    // cuando se detecte el evento que active la funcion
function handleBackward() {
    // $video.currentTime = $video.currentTime - 10
    $video.currentTime -= 10
        // si quiero operar con el mismo valor que quiero de resultado se puede hacer de la forma anterior, aunque la dos son correctas
    console.log('atras 10 segs', $video.currentTime)
}

$forward.addEventListener('click', handleFordward)

function handleFordward() {
    $video.currentTime = $video.currentTime + 10
    console.log('adelante 10 segs', $video.currentTime)
        // currentTime dice donde esta en segundos el video
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log("ha cargado mi video", $video.duration)
        // no puedo saber la duracion hasta que la funcion se ha ejecutado, porque no ha cargado los metadatos
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
        // console.log('Tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleImput)

function handleImput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}