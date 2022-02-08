const mediaImage = document.querySelectorAll('.media-image')
const mediaTitle = document.querySelectorAll('.media-element .title')
const individualLeft = document.querySelector(
  '.section-individual .media-button.left'
)
const individualRight = document.querySelector(
  '.section-individual .media-button.right'
)
const groupLeft = document.querySelector('.section-group .media-button.left')
const groupRight = document.querySelector('.section-group .media-button.right')

const individualChild = document.querySelectorAll(
  '.section-individual .media-scroller > *'
)

const groupChild = document.querySelectorAll(
  '.section-group .media-scroller > *'
)

let individualIndex = 0
let groupIndex = 0

let scrollLeft = false
let scrollRight = true

individualLeft.addEventListener('click', () => {
  if (individualIndex > 0) {
    if (scrollLeft) {
      individualIndex = individualIndex - 4
      scrollLeft = false
      scrollRight = true
    }

    individualChild[individualIndex - 1].scrollIntoView()
    individualIndex = individualIndex - 1

    if (individualIndex < individualChild.length - 1) {
      individualRight.style.display = 'block'
    }

    if (individualIndex === 0) {
      individualLeft.style.display = 'none'
    }
  }
})

individualRight.addEventListener('click', () => {
  if (individualIndex < individualChild.length - 1) {
    if (scrollRight) {
      individualIndex = individualIndex + 4
      scrollLeft = true
      scrollRight = false
    }
    individualChild[individualIndex + 1].scrollIntoView()
    individualIndex = individualIndex + 1

    if (individualIndex > 0) {
      individualLeft.style.display = 'block'
    }

    if (individualIndex === individualChild.length - 1) {
      individualRight.style.display = 'none'
    }
  }
})

groupLeft.addEventListener('click', () => {
  if (groupIndex > 0) {
    groupChild[groupIndex - 1].scrollIntoView()
    groupIndex = groupIndex - 1

    if (groupIndex < groupChild.length - 1) {
      groupRight.style.display = 'block'
    }

    if (groupIndex === 0) {
      groupLeft.style.display = 'none'
    }
  }
})

groupRight.addEventListener('click', () => {
  if (groupIndex < groupChild.length - 1) {
    groupChild[groupIndex + 1].scrollIntoView()
    groupIndex = groupIndex + 1
  }

  if (groupIndex > 0) {
    groupLeft.style.display = 'block'
  }

  if (groupIndex === groupChild.length - 1) {
    groupRight.style.display = 'none'
  }
})

const randomImage = () => {
  mediaImage.forEach((value, key) => {
    value.src = `https://source.unsplash.com/random/300×300/?${key}`
  })
}

randomImage()
