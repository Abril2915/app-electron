const imag = document.querySelectorAll('.img-galeria')
const img_light = document.querySelector('.agregar-imagen')
const ContenedorLight = document.querySelector('.img-light')

imag.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        Showimg(imagen.getAttribute('src'))
        
    })

})

ContenedorLight.addEventListener('click', (e)=>{
    if(e.target != img_light){
        ContenedorLight.classList.toggle('show')
        img_light.classList.toggle('Showimg')
    }
})

const Showimg = (imagen)=>{
    img_light.src = imagen
    ContenedorLight.classList.toggle('show')
    img_light.classList.toggle('Showimg')
}