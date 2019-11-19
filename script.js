$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800, 'linear');
    });
});

const zoom_btn = document.getElementById('zoom');
const iframe = document.getElementById('frame');

zoom_btn.addEventListener('click', () => {

    if(zoom_btn.classList.contains("fa-expand-arrows-alt")){
        iframe.style.zIndex = '1';
        zoom_btn.classList.remove("fa-expand-arrows-alt");
        zoom_btn.classList.add("fa-compress-arrows-alt");
    }

    else{
        iframe.style.zIndex = '-1';
        zoom_btn.classList.add("fa-expand-arrows-alt");
        zoom_btn.classList.remove("fa-compress-arrows-alt");
    }

    
});
