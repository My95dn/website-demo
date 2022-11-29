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
            singer: 'Jack',
            path: './music/cuoicungthi.mp3',
            image: './img/cd80.jpg'
    
        },
        {
            name: 'Túy Âm',
            singer: 'Masnew',
            path: './music/song1.mp3',
            image: './img/cd11.jpg'
    
        },
        {
            name: 'Có Tất Cả Nhưng Thiếu Em',
            singer: 'Erik',
            path: './music/song8.mp3',
            image: './img/cd10.jpg'
    
        },
        {
            name: 'Waiting For You',
            singer: 'MoNo',
            path: './music/song3.mp3',
            image: './img/cd20.jpg'
    
        },
        {
            name: 'Là Anh',
            singer: 'Mộng Nhiên',
            path: './music/song4.mp3',
            image: './img/cd30.jpg'
    
        },
        {
            name: 'Đau Ở Đây Này',
            singer: 'NAL',
            path: './music/song9.mp3',
            image: './img/cd40.jpg'
    
        },
        {
            name: 'Hôm Nay Em Rất Mẹt',
            singer: 'Như Thùy',
            path: './music/song6.mp3',
            image: './img/cd50.jpg'
    
        },
        {
            name: 'Phía Sau Một Cô Gái',
            singer: 'Vương Anh Tú',
            path: './music/song7.mp3',
            image: './img/cd60.jpg'
    
        }
    ],   
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.iscurrentIndex ? 'active' : 0}" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
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
        
        const cdthum = cd.animate([
            {transform: 'rotate(360deg)'} 
        ], {
            duration: 10000,
            iterations: Infinity, 
           
            
        }
        )
        
        cdthum.pause()
        play.onclick = function() {
            if(_this.isplaying) {
                audio.pause()
            } else {
                audio.play()
                _this.audiotime()
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
                _this.render()
                _this.scrollview()
            } 
           
            // /
        }
        playlist.onclick = function(e) {
            const custom = e.target.closest('.song:not(.active)')
            if(custom || e.target.closest('.option')) {
                if(custom) {
                    _this.iscurrentIndex = Number(custom.dataset.index)
                    _this.loaddow()
                    _this.render()
                    audio.play()
                }
            }
            
        }
      
    },
    randomSong: function() {
        
        let subrandom
        do {
             subrandom = Math.floor(Math.random() * this.songs.length)
             
        } while (this.iscurrentIndex === subrandom) 
            
            
        this.iscurrentIndex = subrandom
        this.loaddow()
        
        
        
        
        
        
        
    },
    audiotime: function() {
       
       
        setInterval(() => {
            let date = audio.duration;
            let audiosub = Math.floor(audio.currentTime);
            let minit = Math.floor(audio.currentTime/60) < 10 ? Math.floor(audio.currentTime/60) : '';
            let scod = Math.floor(audio.currentTime%60);
            let minitscod = `${minit}:${scod}`
            many('.showtime').innerHTML = minitscod + '/'+ Math.floor(date/60)+ ':'+ Math.floor(date%60);
            
        }, 1000)
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
        cdthumb.style.backgroundImage = `url('${this.currentsong.image}')`
    },
    
    start: function() {
        
        this.render()
        this.defineproperties()
        this.handlEvent()
        this.loaddow()
        
    }
}
app.start()
