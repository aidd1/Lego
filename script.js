document.addEventListener('DOMContentLoaded', function() {
  var dirImages = 'file:///C:/Users/User/Desktop/Lego/img/';

    // Масссив данных о Новостях
    var news = [
        { 
            title: 'Вышел новый набор Lego Star Wars', 
            excerpt: 'Узнайте о новом наборе Lego Star Wars, который включает в себя новые минифигурки и детали.', 
            date: '4 апреля, 18:30',
            image: '2.jpg' 
        },
        { 
            title: 'Lego объявила о новом наборе для взрослых', 
            excerpt: 'Lego анонсировала новый набор для взрослых, который включает в себя сложные детали и уникальные минифигурки.', 
            date: '17 апреля, 20:55',
            image: '3.jpg' 
        },
    ];

    // Массив данных о наборах Lego в Карусели
    var legoSetsCarousel = [
        { 
            title: 'Lego Star Wars Death Star', 
            description: 'Соберите Death Star из Lego Star Wars и отправьте своих минифигурок в эпичное приключение.', 
            pieces: '4,000+',
            price: '1 499', 
            img: '4.jpg'
        },
        { 
            title: "Lego Ideas NASA Apollo Saturn V", 
            description: 'Соберите Saturn V из Lego Ideas и отправьте своих минифигурок в космос.', 
            pieces: '1,969',
            price: '1 999', 
            img: 'lego_apollo_saturn_v.jpg'
        },
        { 
            title: 'Lego Creator Expert Roller Coaster', 
            description: 'Соберите Roller Coaster из Lego Creator Expert и насладитесь увлекательным приключением.', 
            pieces: '4,500+',
            price: '1 999', 
            img: 'lego_roller_coaster.jpg'
        },
        { 
            title: 'Lego Marvel Avengers Ultimate Quinjet', 
            description: 'Соберите Ultimate Quinjet из Lego Marvel Avengers и отправьте своих минифигурок в эпичное приключение.', 
            pieces: '800+',
            price: '499', 
            img: 'lego_marvel_avengers_quinjet.jpg'
        },
        { 
            title: 'Lego Friends Amusement Park Roller Coaster', 
            description: 'Соберите Amusement Park Roller Coaster из Lego Friends и насладитесь увлекательным приключением.', 
            pieces: '1,100+',
            price: '399', 
            img: 'lego_friends_amusement_park_roller_coaster.jpg'
        },
        { 
            title: 'Lego Creator Expert Carousel', 
            description: 'Соберите Carousel из Lego Creator Expert и насладитесь увлекательным приключением.', 
            pieces: '2,670',
            price: '799', 
            img: 'lego_carousel.jpg'
        },
    ];

    // Массив данных о наборах Lego
    var legoSets = [
        { 
            title: 'Lego Star Wars Death Star', 
            pieces: '4,000+',
            price: '1 499', 
            image: 'lego_star_wars_death_star.jpg' 
        },
        { 
            title: 'Lego Ideas NASA Apollo Saturn V',
            pieces: '1,969',
            price: '1 999', 
            image: 'lego_apollo_saturn_v.jpg'
        },
        { 
            title: 'Lego Creator Expert Roller Coaster',
            pieces: '4,500+',
            price: '1 999', 
            image: 'lego_roller_coaster.jpg'
        },
        { 
            title: 'Lego Marvel Avengers Ultimate Quinjet',
            pieces: '800+',
            price: '499', 
            image: 'lego_marvel_avengers_quinjet.jpg'
        },
        { 
            title: 'Lego Friends Amusement Park Roller Coaster',
            pieces: '1,100+',
            price: '399', 
            image: 'lego_friends_amusement_park_roller_coaster.jpg'
        },
        { 
            title: 'Lego Creator Expert Carousel',
            pieces: '2,670',
            price: '799', 
            image: 'lego_carousel.jpg'
        }
    ];

    // Колонка с Новостями
    var newsColumn = document.querySelector('.news-column');

    // Переменные Карусели
    var legoSetCard = document.getElementById('lego-set');
    var currentIndex = 0;
    var intervalId;

    // Колонка со списком наборов Lego
    var legoSetsListColumn = document.querySelector('.lego-sets-column');

    // --- Новости ---
    // Создать HTML-объект Новости 
    function createNewsHTML(newsItem) {
        var newsHTML = '<div class="news-item">';
        if (newsItem.image) {
            newsHTML += '<img src="' + dirImages + 'news/' + newsItem.image + '" alt="' + newsItem.title + '">';
        }
        newsHTML += '<h3 class="news-title">' + newsItem.title + '</h3>';
        newsHTML += '<p class="news-excerpt">' + newsItem.excerpt + '</p>';
        newsHTML += '<p class="news-date">' + newsItem.date + '</p>';
        newsHTML += '</div>';
        return newsHTML;
    }

    // Заполнить колонку Новостями
    function fillNewsColumn() {
        var newsHTML = '';
        news.forEach(function(newsItem) {
            newsHTML += createNewsHTML(newsItem);
        });
        newsColumn.insertAdjacentHTML('beforeend', newsHTML);
    }

    // --- Карусель ---
    // Заполнить карточки (слайды) в Карусели 
    function updateCard() {
        var legoSet = legoSetsCarousel[currentIndex];
        legoSetCard.style.animation = 'none';
        setTimeout(function() {
            legoSetCard.innerHTML = '<img class="lego-set-img" src="' + dirImages + 'legoSetsCarousel/' + legoSet.img + '"><h2 class="lego-set-title">' + legoSet.title + '</h2><p>' + legoSet.description + '</p><p>' + legoSet.pieces + ' деталей</p><p class="lego-set-price">' + legoSet.price + ' ₽' +'</p>';
            legoSetCard.style.animation = 'slideIn 0.5s ease';
        }, 50);

        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 5000);
    }

    // Перелистывание слайдов с наборами Lego
    function nextSlide() {
        currentIndex = (currentIndex < legoSetsCarousel.length - 1) ? currentIndex + 1 : 0;
        updateCard();
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : legoSetsCarousel.length - 1;
        updateCard();
    }

    // Обработка нажатия кнопки "Назад"
    document.getElementById('prev').addEventListener('click', function() {
        prevSlide();
    });

    // Обработка нажатия кнопки "Вперед"
    document.getElementById('next').addEventListener('click', function() {
        nextSlide();
    });

    // --- Наборы Lego ---
    // Создать HTML-объект Набора Lego 
    function createLegoSetHTML(legoSetItem) {
        var legoSetHTML = '<div class="lego-set-item">';
        legoSetHTML += '<div class="lego-set-image"><img src="' + dirImages + 'legoSets/' + legoSetItem.image + '" alt="' + legoSetItem.title + '"></div>';
        legoSetHTML += '<div class="lego-set-info">';
        legoSetHTML += '<h3 class="lego-set-title">' + legoSetItem.title + '</h3>';
        legoSetHTML += '<p class="lego-set-pieces">' + legoSetItem.pieces + ' деталей</p>';
        legoSetHTML += '</div>';
        legoSetHTML += '<div class="lego-set-price">' + legoSetItem.price + ' ₽' + '</div>';
        legoSetHTML += '</div>';
        return legoSetHTML;
    }

    // Заполнить колонку Наборами Lego
    function fillLegoSetsListColumn() {
        var legoSetsHTML = '';
        legoSets.forEach(function(legoSetItem) {
            legoSetsHTML += createLegoSetHTML(legoSetItem);
        });
        legoSetsListColumn.insertAdjacentHTML('beforeend', legoSetsHTML);
    }

    // Настройка автоперелистывания Карусели
    intervalId = setInterval(nextSlide, 5000);

    // Заполнение страницы контентом
    fillNewsColumn();
    updateCard();
    fillLegoSetsListColumn();
});