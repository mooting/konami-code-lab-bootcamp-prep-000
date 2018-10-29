const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
var codeIndex = 0
function init() {
  const body = document.querySelector( 'body' )
  
  body.addEventListener( 'keydown', event => {
    if( codes[codeIndex] === event.code ){

      if( codeIndex === codes.length - 1 ){
        codeIndex = 0
        alert('Hurray!')
      }else{
        codeIndex++
      }
    }else{
      codeIndex = 0
    }
  })
}
