
    
function toast({
    title ="",
    message ="",
    type ="info",
    duration = 3000
}) {
    const toast = document.getElementById('toast')

    if(toast) {
        const section = document.createElement('div')
        
       const autoRemoveId = setTimeout(function() {
            toast.removeChild(section);
        }, duration + 1000);
        
        section.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                toast.removeChild(section)
                clearTimeout(autoRemoveId)
            }

        };
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        };
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)
        
        section.classList.add('toast', `toast--${type}`)
        section.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        section.innerHTML = `
                <div class="toast__icon">
                <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
        `;
        toast.appendChild(section)
        
        
    }

}


  

  