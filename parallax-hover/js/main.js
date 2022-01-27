let left = document.querySelector('.left')
let content = document.querySelector('.content')
let proto = document.querySelectorAll('.proto')

left.addEventListener('mousemove', (e) => {
  let move = e.clientX * 0.05 + 4
  let move2 = e.clientX * 0.003

  if (window.innerWidth >= 1024) {
    content.style.transform = `translateX(-${move2}%)`
  } else {
    content.style.transform = 'translateX(0)'
  }

  proto.forEach((value) => {
    value.style.transform = `translateX(${move}%)`
  })
})
