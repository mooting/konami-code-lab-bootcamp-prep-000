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
    console.log( `key: ${ event.code } ${ codeIndex }`)
    if( codes[codeIndex] === event.code ){
      if( codeIndex === codes.length - 1 ){
        codeIndex = 0
        alert('Hurray!')
      }else{
        console.log("increased")
        codeIndex++
      }
    }else{
      console.log("reset")
      codeIndex = 0
    }
  })
}
