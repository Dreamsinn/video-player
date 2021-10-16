const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)

function handleplay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')
}

function handlepause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    // $video.currentTime = $video.currentTime - 10
    $video.currentTime -= 10
    console.log('atras 10 segs', $video.currentTime)
}

$forward.addEventListener('click', handleFordward)

function handleFordward() {
    $video.currentTime = $video.currentTime + 10
    console.log('adelante 10 segs', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log("ha cargado mi video", $video.duration)
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