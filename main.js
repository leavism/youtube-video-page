var videoList = document.querySelector('.video-list')

for(let element = 0; element <= 10; element++){
  let videoItem = document.createElement('DIV')
  videoItem.className = 'video-item'

  let videoStats = document.createElement('DIV')
  videoStats.className = 'video-item-stats'
  
  let thumbnail = document.createElement('IMG')
  thumbnail.className = 'thumbnail'
  thumbnail.setAttribute('src', 'images/1.png')

  let title = document.createElement('DIV')
  title.className = 'side-title'
  title.appendChild(document.createTextNode('Your First GitHub Pull Request (in 10 Mins)'))

  let author = document.createElement('DIV')
  author.className = 'side-author'
  author.appendChild(document.createTextNode('Jackson Bates'))

  let stats = document.createElement('DIV')
  stats.className = 'side-stats'
  stats.appendChild(document.createTextNode('43k views • 3 years ago'))
  
  let dots = document.createElement('IMG')
  dots.className = 'dots'
  dots.setAttribute('src', 'images/dots.svg')

  videoStats.appendChild(title)
  videoStats.appendChild(author)
  videoStats.appendChild(stats)

  videoItem.appendChild(thumbnail)
  videoItem.appendChild(videoStats)
  videoItem.appendChild(dots)

  videoList.appendChild(videoItem)
}