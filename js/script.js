const burgerBtn = document.querySelector('.burger-btn-js');
const navigation = document.querySelector('.navigation-js');
const navigationClose = document.querySelector('.navigation-close-js')

burgerBtn.addEventListener('click', () => {
    navigation.style.right = '0';
});

navigationClose.addEventListener('click', () => {
    navigation.style.right = '';
});

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});

$('.card-deck a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});