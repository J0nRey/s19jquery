/* Con vanilla */

/* document.getElementById("save-user").addEventListener("click", () => {
    console.log("guardando usuario")
}) */

/* Con JQuery 
$('#save-user').click( () =>{
    console.log('guardando usuario')
})*/


$('#toggle-text').click( () => {
    console.log('toogleando')

/* Quitar elemento con vanila y bootstrap */
    //document.getElementById("text").classList.add("d-none")

/* Ocultar elemento con JQuery */
   // $('#text').hide()

/* Conmutar el elemento con vanila y bootstrap

    let element = document.getElementById("text")

    let elementIsVisible = !element.classList.contains("d-none")
    console.log(elementIsVisible)

    elementIsVisible ? element.classList.add("d-none") : element.classList.remove('d-none')
*/

/* Conmutar el elemento con JQuery*/
$('#text').toggle()

})

//document.getElementById('save-user') --> vanilla
//.hide() --> JQuery

/*document.getElementById('save-user').hide()
no se oculta por que se selecciono 'save-user' con vanilla y solo se tienen las propiedades y metodos de cualquier elemento de vanilla*/


let buttonWithVanilla = document.getElementById('save-user')
console.log( buttonWithVanilla )


let buttonWithJquery = $('#save-user')
//es una instancia de un objeto de JQuery, tiene todos los atributos que le da JQuery
//por lo tanto ya se le pueden aplicar los metodos
buttonWithJquery.hide()
buttonWithJquery.show()

$('.text-controls .btn-secondary').click( event => {
    console.log('click on secondary')
//  let type =  event.target.dataset.controlsType
    let type =  $(event.target).data('controls-type')
    console.log(type)
    $(`.text-${type}`).remove()
})

/*.remove() $('#btn-dangers').click( ()=> {
    $('.text-danger').remove()
})
$('#btn-warnings').click( ()=> {
    $('.text-warning').remove()
})
$('#btn-success').click( ()=> {
    $('.text-success').remove()
}) */


$(".text-danger").text('Los amantes de lola')
$(".text-warning").html('<div class="bg-dark" >otra cosa</div>')

console.log( $(".text-warning").html())
console.log( $(".text-  ").text())