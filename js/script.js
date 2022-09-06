document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.guest__nav-btn').forEach(function(btnGuest) {
        btnGuest.addEventListener('click',function(event) {
            let path = event.currentTarget.dataset.path
            console.log(path)
            
            document.querySelectorAll('.guest__nav-btn').forEach(function(tabGuest) {
                tabGuest.classList.remove('guest__nav-btn--active')
            })
            this.classList.add('guest__nav-btn--active')

            document.querySelectorAll('.guest__tabs-item').forEach(function(tabCatalog) {
                tabCatalog.classList.remove('guest__tabs-item--active')
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('guest__tabs-item--active')
        })
    });

  


  


    let headerBtn = document?.querySelector('.header__btn');
    let searchBtn = document?.querySelector('.header__top-search-btn');
    let search = document.querySelector('.header__top-search');
    let body = document.querySelector('body');

        headerBtn?.addEventListener('click', () => {
            headerBtn?.classList.add('header__btn--none');
            searchBtn?.classList.add('header__top-search-btn--active');
        });

        search.addEventListener('click',function(e) {
            e.stopPropagation();
            this.classList.add('header__top-search--active');
            headerBtn?.classList.remove('header__btn--active');
        });



        body.addEventListener('click', function() {
            search.classList.remove('header__top-search--active');
            searchBtn.classList.remove('header__top-search-btn--active');
            headerBtn.classList.remove('header__btn--none');
          
        });

      
      
        
        let playSwipe = document.querySelector('.playlist__sw-btn');
    
            playSwipe.addEventListener('click',function() {
            playSwipe.classList.add('playlist__sw-btn--active');
    
        });
    

    let podcasts = document.querySelector('.podcasts__button');
    let card = document.querySelector('.podcasts__card-next');

        podcasts.addEventListener('click',function() {
        podcasts.classList.add('podcasts__button--active');
        card.classList.add('podcasts__card-next--active');

        });



    let defaultSelect = () => {
    let element = document.querySelector('.choices');
    let choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        // removeItems: true,
        // renderSelectedChoices: 'always',
    });

    };

    defaultSelect();

    
        



    let burger = document?.querySelector('[data-burger]');
    let nav = document?.querySelector('[data-nav]');
    let navItems = nav?.querySelectorAll('a');
    let boder = document.body;
    let header = document?.querySelector('.header');
    let headerHeight = header.offsetHeight;

        console.log(headerHeight)
        document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

        burger?.addEventListener('click', () => {
        boder.classList.toggle('stop-scroll');
        burger?.classList.toggle('burger--active');
        nav?.classList.toggle('nav--active');

        });

        navItems.forEach(el => {
        el.addEventListener('click', () => {
        boder.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('nav--active');
            });
        });

   
    

    let enterMBtn = document?.querySelector('.header__top-mobile-btn-enter');
    let enterBtn = document?.querySelector('.header__top-nav-btn-enter');
    let enterBlock = document?.querySelector('.enter');
    let enterClose = document?.querySelector('.enter__close-btn');
    let enterBody = document.body;

    
        enterBtn?.addEventListener('click', () => {
        enterBtn?.classList.toggle('header__top-nav-btn-enter--active');
        enterBlock?.classList.add('enter--active');
        enterBody.classList.add('stop-scroll');

    });

        enterMBtn?.addEventListener('click', () => {
        enterBtn?.classList.toggle('header__top-nav-btn-enter--active');
        enterBlock?.classList.add('enter--active');
        enterBody.classList.add('stop-scroll');

    });

        enterClose?.addEventListener('click', () => {
        boder.classList.toggle('stop-scroll');
        enterBlock?.classList.remove('enter--active');
        enterBody.classList.remove('stop-scroll');
    
    });

    let etherBtn = document?.querySelector('.header__why-btn ');
    let etherWhy = document?.querySelector('.header__why-ether');
    let etherList = document?.querySelector('.header__ether-block');
   
   
        etherBtn?.addEventListener('click', () => {
        etherBtn?.classList.toggle('ether__btn--active');
        etherWhy?.classList.toggle('header__why-btn--active');
        etherList?.classList.toggle('header__ether-block--active');
    });

      

 


  







    let storeBtn = document?.querySelector('.store__btn');
    let storeModal = document?.querySelector('.store__modal');
    let storeSwipe = document?.querySelector('.store__swipe-btn ');
   
        storeBtn?.addEventListener('click', () => {
        storeBtn?.classList.toggle('store__btn--active');
        storeModal?.classList.add('store__modal--active');
        boder.classList.toggle('stop-scroll');
    });
    
    storeSwipe?.addEventListener('click', () => {
        storeBtn?.classList.toggle('store__btn--active');
        storeModal?.classList.remove('store__modal--active');
        boder.classList.remove('stop-scroll');
    });


  
   

    let accordions = document.querySelectorAll('.guest__list');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			let self = e.currentTarget;

			self.classList.toggle('guest__list--open');
		});
	});

    let accordions2 = document.querySelectorAll('.guest__date');

	accordions2.forEach(el => {
		el.addEventListener('click', (e) => {
			let self = e.currentTarget;

			self.classList.toggle('guest__date--open');
		});
	});

    
    $( function() {
        $( "#accordion-desktop" ).accordion({
          collapsible: true,
          active: 0 ,
          heightStyle: "content"
        });
      } );


      $( function() {
        $( "#accordion-mobile" ).accordion({
          collapsible: true,
          active: 0 ,
          heightStyle: "content"
        });
      } );

      $( function() {
        $( "#accordion-mobile2" ).accordion({
          collapsible: true,
          active: 0 ,
          heightStyle: "content"
        });
      } );

      $( "guest__accordion" ).accordion( "destroy" );


      var swiper = new Swiper(".storeSwiper", {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,                
        },
      });
})