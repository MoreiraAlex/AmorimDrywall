window.onload = function () {
	navbarScroll();
	if(window.width > 768){
        addActive();
    }
};

window.onscroll = function () {
	navbarScroll();
    if(window.outerWidth > 768){
        addActive();
    }
};


worksSlides();


if(screen.width > 768){
    worksTags();
} else if (screen.width <= 768 & screen.width > 375) {
} else if (screen.width <= 375){
}


function navbarScroll() {
    nav = document.querySelector(".navbar");

	if (document.documentElement.scrollTop > 50) {
        nav.classList.add("custom-nav-reduce");
	} else {
        nav.classList.remove("custom-nav-reduce");
        nav.style.transition = '700ms'
	}
}

function addActive() {

    hash = ScrollSection();
    
    if(hash){

        if(hash == 'call'){
            return
        } else if(hash == 'home'){
			active = document.querySelector('.nav-active');
            if(active)
                active.classList.remove('nav-active');		
		} else {
			target = document.querySelector('.' + hash + '-nav-item');
	
			if(target.classList.contains('nav-active') == false){
				active = document.querySelector('.nav-active');
                if(active)
				    active.classList.remove('nav-active');
				
                target.classList.add('nav-active');
			}
		}
         
    }
}

function ScrollSection(){
    scroll = document.documentElement.scrollTop
    sections = document.querySelectorAll('section')
    arr = []

    for(i = 0; i < sections.length; i++){
        switch(i){
            case 0:
                arr[i] = sections[i].scrollHeight - 550
                break
            default:
                arr[i] = arr[i - 1] + sections[1].scrollHeight
                break
        }
    }

    if (scroll < arr[0] ) {
        return 'home'
    }else if (scroll >= arr[0] & scroll < arr[1]) {
        return 'about'
    }else if (scroll >= arr[1] & scroll < arr[2]) {
        return 'call'
    }else if (scroll >= arr[2] & scroll < arr[3]) {
        return 'services'
    }else if (scroll >= arr[3]) {
        return 'works'
    }
}

function worksSlides(){
    slides = document.querySelectorAll('.work-block');
    buttons = document.querySelectorAll('.works-buttons')
    positions = [];
    position_lenght = 0;
    lg = 0;
    range = slides.length;

    if(screen.width > 768){
        positions = ['155px'];
        position_lenght = 405
        lg = 4;
    } else if (screen.width <= 768 & screen.width > 375) {
        positions = ['130.5px'];
        position_lenght = 256
        lg = 3;
    } else if (screen.width <= 375){
        positions = ['65px'];
        position_lenght = 125
        lg = 3;
    }
    
    switch(slides.length){
        case 0:
            slides[0].style.left = '37%';
            break;
        case 1:
            slides[0].style.left = '25%';
            slides[1].style.left = '51%';
            break;
        case 2:
            slides[0].style.left = '12%';
            slides[1].style.left = '38%';
            slides[2].style.left = '65%';
            break;
        default:
            for(i = 0; i < slides.length; i++){
                if(i == 0){
                    slides[i].style.left = positions[i];       
                } else{
                    posicao = positions[i - 1]
                    n = posicao.replace('px', '')
                    n = parseInt(n)
                    n += position_lenght;
                    positions[i] = (n.toString() + 'px')
    
                    slides[i].style.left = positions[i];        
                }
            }    
            break;
    }  
    
    if(range == slides.length){
        buttons[0].style.display = 'none'
        document.querySelector('.works-container').style.justifyContent = 'flex-end';
    }

    buttons[0].onclick = function(){
        if(range == slides.length - 1){
            move(slides, 1, positions);
            range = range + 1;
            buttons[0].style.display = 'none'
            document.querySelector('.works-container').style.justifyContent = 'flex-end';
        }else if(range == slides.length - (slides.length - lg + 1)){
            move(slides, 1, positions);
            range = range + 1;
            buttons[1].style.display = 'flex'
            document.querySelector('.works-container').style.justifyContent = 'space-between';
        } else {
            move(slides, 1, positions);
            range = range + 1;
        }
    }
    
    buttons[1].onclick = function(){
        if(range == slides.length){
            move(slides, 0, positions);
            range = range - 1;
            buttons[0].style.display = 'flex'
            document.querySelector('.works-container').style.justifyContent = 'space-between';
        } else if(range == slides.length - (slides.length - lg)){
            move(slides, 0, positions);
            range = range - 1;
            buttons[1].style.display = 'none'
        } else {
            move(slides, 0, positions);
            range = range - 1;
        }
    }

    function move(arr, direction, positions){
        switch(direction){
            case 1:        
                for(i = 0; i < arr.length; i++){

                    posicao = positions[i]
                    n = posicao.replace('px', '')
                    n = parseInt(n)
                    n = n + position_lenght;
                    positions[i] = (n.toString() + 'px')

                    arr[i].style.left = positions[i]
                }    
                break;      
            case 0:        
                for(i = 0; i < arr.length; i++){

                    posicao = positions[i]
                    n = posicao.replace('px', '')
                    n = parseInt(n)
                    n = n - position_lenght;
                    positions[i] = (n.toString() + 'px')

                    arr[i].style.left = positions[i]
                }
                break;
        }
    }
}

function worksTags(){
    tags = document.querySelectorAll('.work-block-tags')
    block = document.querySelectorAll('.work-block')
    arr = []
    tag = []

    for(i = 0; i < tags.length; i++){
        arr.push(tags[i].innerText)
        tag.push(arr[i].split(','))

        for(j = 0; j < tag[i].length; j++){
            t = document.createElement('p')
            t.innerText = tag[i][j]
            // block[i].children[2].appendChild(t)
            block[i].appendChild(t)

        }
    }
}