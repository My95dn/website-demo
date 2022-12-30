var image = document.querySelectorAll('.content-navbar-img>img');
    
        image.forEach((image)=> {
            image.onclick = function() {
                var bossimg = document.querySelector('.app');
            bossimg.style.display = 'block';
            bossimg.getElementsByTagName('img')[0].src = this.src;
            
            bossimg.getElementsByTagName('div')[0].onclick = function() {
            bossimg.style.display = 'none';
        }
            }
        })
        



