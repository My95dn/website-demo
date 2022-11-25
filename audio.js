const many = document.querySelector.bind(document)
const manys = document.querySelectorAll.bind(document)
const heading = many('header h2')
const audio = many('#audio')
const cd = many('.cd')
const btn = many('.btn-toggle-play')
const player = many('.player')
const btnnet = many('.btn-next')
const time = many('#progress')
const cdthumb = many('.cd-thumb')
const btnprev = many('.btn-prev')

const app = {
      isplaying: false,
      currentIndex: 0,
      songs: [
        {
            name: 'nevada',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'hoc lap trinh',
            singer: 'vicetone',
            path: './music/song3.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'hoc lap trinh',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'hoc lap trinh',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'hoc lap trinh',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'hoc lap trinh',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'hoc lap trinh',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'hoc lap trinh',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'hoc lap trinh',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        }
    ],
    render: function() {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
            <div class="thumb" style="background-image: url('https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
            </div>
            `
        })
        many('.playlist').innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentsong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this
        const cdsub = cd.offsetWidth
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newcd = cdsub - scrollTop
            cd.style.width = newcd > 0 ? newcd + 'px' : 0
            cd.style.opacity = newcd / cdsub
        }
        const subcdthumb = cdthumb.animate([
            {transform: 'rotate(360deg)'}
        ],{
                duration: 10000,
                iterations: Infinity
            }
        )
        subcdthumb.pause()
        btn.onclick = function() {
          if (_this.isplaying)  {
            
            audio.pause()
           
          } else {
            
            audio.play()
           
          }
           
        }
        btnnet.onclick = function() {
            _this.nextSong()
            audio.play()
        }
        btnprev.onclick = function() {
            _this.leftsong()
            audio.play()
        }
        audio.onpause = function() {
            _this.isplaying = false
            player.classList.remove('playing')
            subcdthumb.pause()
        }
        audio.onplay = function() {
            _this.isplaying = true
            player.classList.add('playing')
            subcdthumb.play()
        }
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const timesub = Math.floor(audio.currentTime / audio.duration * 100)
                time.value = timesub
            }
        }
        time.onchange = function(e) {
            const percen = audio.duration / 100 * e.target.value
            audio.currentTime = percen
        }
    },
    loaddow: function() {
       
        heading.textContent = this.currentsong.name
        audio.src = this.currentsong.path
    },
    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loaddow()
    },
    leftsong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1
        }
        this.loaddow()
    },
    start: function() {
        this.defineProperties()
        this.handleEvents()
        this.loaddow()
        this.render()
    }
}
app.start();

