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

function init() {
  const body = document.querySelector( 'body' )
  codeIndex = 0
  body.addEventListener( 'keydown', function( event ) {
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
