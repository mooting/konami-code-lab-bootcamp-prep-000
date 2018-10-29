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
  main.addEventListener( 'keydown', event => {
    console.log( event.key )
    console.log( event.code )
  })
}
