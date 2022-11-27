const many = document.querySelector.bind(document)
const manys = document.querySelectorAll.bind(document)
const playlist = many('.playlist')
const audio = many('#audio')
const cd = many('.cd')
const cdthumb = many('.cd-thumb')
const heading = many('header h2')
const play = many('.btn-toggle-play')
const player = many('.player')
const progress = many('.progress')
const btnnext = many('.btn-next')
const btnprev = many('.btn-prev')
const btnrandom = many('.btn-random')
const btnRpeat = many('.btn-repeat')
const song = many('.song')
let active = many('.song.active')

const app = {
    isplaying: false,
    israndomSong: false,
    isRepeat: false,
    iscurrentIndex: 0,
    songs: [
        {
            name: 'NeVaDa',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: 'Cuối Cùng Thì',
            singer: 'vicetone',
            path: './music/cuoicungthi.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: '3',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: '4',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: '5',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: '6',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: '7',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: '8',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        },
        {
            name: '9',
            singer: 'vicetone',
            path: './music/song.mp3',
            image: './img/img.jpg'
    
        }
    ],   
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.iscurrentIndex ? 'active' : 0}" data-index="${index}">
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
        playlist.innerHTML = htmls.join('')
    },
    defineproperties: function() {
        Object.defineProperty(this, 'currentsong', {
            get: function() {
              return  this.songs[this.iscurrentIndex]
            }
        })
    },
    handlEvent: function() {
        const _this = this
        const cdWidth = cd.offsetWidth
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newscroll = cdWidth - scrollTop 
            cd.style.width = newscroll > 0 ? newscroll + 'px' : 0
            cd.style.opacity = newscroll / cdWidth
        }
        
        const cdthum = cdthumb.animate([
            {transform: 'rotate(360deg)',}
        ], {
            duration: 10000,
            itedurations: Infinity,
            
        }
        )
        
        cdthum.pause()
        play.onclick = function() {
            if(_this.isplaying) {
                audio.pause()
            } else {
                audio.play()
            }
            
        }
        btnprev.onclick = function() {
            if(_this.israndomSong) {
                _this.randomSong()
                
            } else {
                _this.leftSong()
                _this.render()
                _this.scrollview()
            }
            
            audio.play()
        }
        btnnext.onclick = function() {
            if(_this.israndomSong) {
                _this.randomSong()
                
            } else {
                _this.nextSong()
                _this.render()
                _this.scrollview()
              
            }
            
            audio.play()
            
            
        }
        audio.onpause = function() {
            _this.isplaying = false
            player.classList.remove('playing')
            cdthum.pause()
        }
        audio.onplay = function() {
            _this.isplaying = true
            player.classList.add('playing')
            cdthum.play()
        }
        audio.ontimeupdate = function() {
           if(audio.duration) {
                const time = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = time
           }
           progress.onchange = function(e) {
                const newprogress = audio.duration / 100 * e.target.value
                audio.currentTime = newprogress
           }
        }
        btnrandom.onclick = function() {
            _this.israndomSong = !_this.israndomSong
            btnrandom.classList.toggle('active', _this.israndomSong)


        }
        btnRpeat.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            btnRpeat.classList.toggle('active', _this.isRepeat)
        }
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                _this.nextSong()
                audio.play()
            }
           
            
        }
      
    },
    randomSong: function() {
        
        let subrandom
        do {
             subrandom = Math.floor(Math.random() * this.songs.length)
             
        } while (subrandom === this.iscurrentIndex) 
            
            
        this.iscurrentIndex = subrandom
        this.loaddow()
        
        
        
        
        
        
        
    },
    scrollview: function() {
        setTimeout(() => {
            many('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })
        }, 300)

        
    },
    nextSong: function() {
        this.iscurrentIndex++
        if(this.iscurrentIndex >= this.songs.length) {
            this.iscurrentIndex = 0
           
        }
        this.loaddow()
        
    },
    leftSong: function() {
        this.iscurrentIndex--
        if(this.iscurrentIndex < 0) {
            this.iscurrentIndex = this.songs.length -1
        }
        this.loaddow()
        
    },
    loaddow: function() {
        heading.textContent = this.currentsong.name
        audio.src = this.currentsong.path
        
    },
    
    start: function() {
        
        this.render()
        this.defineproperties()
        this.handlEvent()
        this.loaddow()
        
    }
}
app.start()
