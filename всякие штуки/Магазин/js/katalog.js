/* cartochki mnogo */
const cardsData = [
    {
        id: 1,
        title: 'Кофе',
        region: 'Веракруз',
        year: 2021,
        treatment: 'сухой',
        roasting: 'светлая',
        count: 3,
        price: 300
    },
    {
        id: 2,
        title: 'Вкусный кофе',
        region: 'Нарьиньо',
        year: 2020,
        treatment: 'анаэробный',
        roasting: 'светлая',
        count: 3,
        price: 33400
    },
    {
        id: 3,
        title: 'Очень вкусный кофе',
        region: 'Уила',
        year: 2022,
        treatment: 'мытый',
        roasting: 'средняя',
        count: 3,
        price: 1000
    },
    {
        id: 4,
        title: 'Не очень вкусный кофе',
        region: 'Урага',
        year: 2020,
        treatment: 'сухой',
        roasting: 'тёмная',
        count: 3,
        price: 2300
    },
    {
        id: 5,
        title: 'Еще кофе',
        region: 'Гуджи',
        year: 2022,
        treatment: 'сухой',
        roasting: 'тёмная',
        count: 100,
        price: 8500
    },
    {
        id: 6,
        title: 'Новинка кофе',
        region: 'Гуджи',
        year: 2022,
        treatment: 'мытый',
        roasting: 'тёмная',
        count: 1,
        price: 73
    },
]

const domElements = {
    results: document.getElementById('results'),
    search: {
        input: document.getElementById('search_input'),
        button: document.getElementById('search_button'),
    },
    filters: {
        pricemin: document.getElementById('amount1'),
        pricemax: document.getElementById('amount2'),
        region: document.getElementById('filter_region'),
        year: document.getElementById('filter_year'),
        treatment: document.getElementById('filter_treatment'),
        roasting: document.getElementById('filter_roasting'),
    }
}

/* generation cards */

function generateCards(cardsData) {
    const cards = [];
    for (let i = 0; i < cardsData.length; i++) {
        cards.push(`
        <div class="card product" data-product-id=${cardsData[i].id} itemscope itemtype="https://schema.org/Product">
                    <div class="card_content">
                        <h1 class="card_title" itemprop="name">${cardsData[i].title}</h1>
                        <div class="card_info">
                            <div class="card_param">
                                <label>Регион:</label>
                                <div id="region">${cardsData[i].region}</div>
                            </div>
                            <div class="card_param">
                                <label>Урожай:</label>
                                <div id="year">${cardsData[i].year}</div>
                            </div>
                            <div class="card_param">
                                <label>Способ обработки:</label>
                                <div id="treatment">${cardsData[i].treatment}</div>
                            </div>
                            <div class="card_param">
                                <label>Обжарка:</label>
                                <div id="roasting">${cardsData[i].roasting}</div>
                            </div>
    
                        </div>
                        <div class="card_footer">
                            <div class="card_count">
                                <label>Количество:</label>
                                <div id="count">${cardsData[i].count}</div>
                            </div>
                            <div class="card_cost">
                                <label>Цена</label>
                                <div id="price" class="price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                                <span itemprop="price">${cardsData[i].price}</span>
                                <meta itemprop="priceCurrency" content="RUB">
                                </div>
                            </div>
                            <button class="product_buy">Купить</button>
                        </div>
                    </div>
                </div>
                `)
    }

    return cards
}
const cardsArr = generateCards(cardsData)
results.innerHTML = cardsArr.join('')


/* poisk tovarov */
{
    let searchValue = ''
    domElements.search.input.oninput = (event) => {
        searchValue = event.target.value
        filterSearch()
    }

    domElements.search.button.onclick = () => {
        filterSearch()
    }

    function filterSearch() {
        const rgx = new RegExp(searchValue, 'i')
        let filteredCardsData = cardsData.filter(card => {
            if (rgx.test(card.title)) {
                return true
            } else {
                return false
            }
        })

        const newFilteredCardsHTML = generateCards(filteredCardsData)
        domElements.results.innerHTML = newFilteredCardsHTML.join('')
    }
}

/* vse filtry */

{

    domElements.filters.region.onchange = (event) => {
        const value = event.target.value

        const filteredCardsRegion = cardsData.filter(card => {
            const regregion = new RegExp(value)
            if (regregion.test(card.region)) {
                return true
            } else {
                return false
            }
        })

        const filteredCardsHTMLRegion = generateCards(filteredCardsRegion)
        domElements.results.innerHTML = filteredCardsHTMLRegion.join('')
    }

    domElements.filters.year.onchange = (event) => {
        const value = event.target.value

        const filteredCardsYear = cardsData.filter(card => {
            const regyear = new RegExp(value)
            if (regyear.test(card.year)) {
                return true
            } else {
                return false
            }
        })

        const filteredCardsHTMLYear = generateCards(filteredCardsYear)
        domElements.results.innerHTML = filteredCardsHTMLYear.join('')
    }

    domElements.filters.treatment.onchange = (event) => {
        const value = event.target.value

        const filteredCardsTreatment = cardsData.filter(card => {
            const regx = new RegExp(value)
            if (regx.test(card.treatment)) {
                return true
            } else {
                return false
            }
        })

        const filteredCardsHTMLTreatment = generateCards(filteredCardsTreatment)
        domElements.results.innerHTML = filteredCardsHTMLTreatment.join('')
    }

    domElements.filters.roasting.onchange = (event) => {
        const value = event.target.value

        const filteredCardsRoasting = cardsData.filter(card => {
            const regroast = new RegExp(value)
            if (regroast.test(card.roasting)) {
                return true
            } else {
                return false
            }
        })

        const filteredCardsHTMLRoasting = generateCards(filteredCardsRoasting)
        domElements.results.innerHTML = filteredCardsHTMLRoasting.join('')
    }

}

/* filters-slider ^^ */

{
    let rangemin = 0;
    let rangemax = 3000;

    if ($('#slider-range').length) {
        $('#slider-range').slider({
            range: true,
            min: rangemin,
            max: rangemax,
            values: [rangemin, rangemax],
            slide: function (event, ui) {
                $('#amount1').val(ui.values[0]);
                $('#amount2').val(ui.values[1]);
            }
        });
        $('#amount1').on('change', function () {
            let v1 = +$('#amount1').val();
            let v2 = +$('#amount2').val();
            if (v1 > rangemax) {
                v1 = rangemax;
            } else if (v1 < rangemin) {
                v1 = rangemin;
            }
            $('#amount1').val(v1);
            if (v1 > v2) {
                v2 = v1;
                $('#amount2').val(v2);
            }
            $('#slider-range').slider('values', [v1, v2]);
        });
        $('#amount2').on('change', function () {
            let v1 = +$('#amount1').val();
            let v2 = +$('#amount2').val();
            if (v2 > rangemax) {
                v2 = rangemax;
            } else if (v2 < rangemin) {
                v2 = rangemin;
            }
            $('#amount2').val(v2);
            if (v1 > v2) {
                v1 = v2;
                $('#amount1').val(v1);
            }
            $('#slider-range').slider('values', [v1, v2]);
        });
        $('#amount1').val(rangemin);
        $('#amount2').val(rangemax);
    }

    /* variables */
    let slider = {};
    let sliderCursor = {};
    let sliderFlag = {};
    /* functions */
    function makeSlider(slider_id, time) {
        slider[slider_id] = $('#' + slider_id); // создаем указатель на блок с нашим слайдером
        sliderCursor[slider_id] = 0; // курсор слайдера ставим на 0
        sliderFlag[slider_id] = false; // флаг блокировки вызова
        let blocks = slider[slider_id].find('.slider_block');
        /* подключаем кнопки влево и вправо */
        slider[slider_id].find('button.to_left').click(function () {
            sliderGo(slider_id, 'to_left');
        });
        slider[slider_id].find('button.to_right').click(function () {
            sliderGo(slider_id, 'to_right');
        });
        /* создаем и подключаем кнопки по номерам слайдов */
        for (let i = 0; i < blocks.length; i++) {
            slider[slider_id].find('.slider_points').append(`<span onclick="sliderGo('${slider_id}', ${i})"></span>`);
        }
        slider[slider_id].find('.slider_points span').eq(0).addClass('active'); // помечаем кнопку текущего слайда
        /* расставляем классы слайдов */
        blocks.eq(0).addClass('current');
        blocks.eq(1).addClass('next');
        blocks.eq(blocks.length - 1).addClass('prev');
        setTimeout(function hlpsld() { // запускаем таймер для запуска слайдера 
            sliderGo(slider_id, 'to_left');
            setTimeout(hlpsld, time); // внутри таймера создаем и запускаем следующий таймер для рекурсивного запуска
        }, time);
    }
    function sliderGo(slider_id, align) {
        if (sliderFlag[slider_id]) return; // если слайдер действует, его нельзя запустить еще раз
        sliderFlag[slider_id] = true; // поднимаем флаг "слайдер действует"
        let blockparent = slider[slider_id].find('.slider_desk');
        let blocks = slider[slider_id].find('.slider_block');
        /*
        определяем новый current и направление движения слайдов
        */
        if (align == 'to_left') { // next станет current, current станет prev
            sliderCursor[slider_id]++;
            if (sliderCursor[slider_id] >= blocks.length) sliderCursor[slider_id] -= blocks.length;
            align = 'prev';
        } else if (align == 'to_right') { // prev станет current, current станет next
            sliderCursor[slider_id]--;
            if (sliderCursor[slider_id] < 0) sliderCursor[slider_id] += blocks.length;
            align = 'next';
        } else {
            let oldcursor = sliderCursor[slider_id]
            sliderCursor[slider_id] = align;
            if (oldcursor > align) { // новый слайд станет prev, дальше как to_right
                blockparent.find('.prev').removeClass('prev');
                blocks.eq(sliderCursor[slider_id]).addClass('prev');
                align = 'next';
            } else if (oldcursor < align) { // новый слайд станет next, дальше как to_left
                blockparent.find('.next').removeClass('next');
                blocks.eq(sliderCursor[slider_id]).addClass('next');
                align = 'prev';
            } else {
                sliderFlag[slider_id] = false;
                return;
            }
        }
        setTimeout(function () {
            slider[slider_id].find('.slider_points span').removeClass('active').eq(sliderCursor[slider_id]).addClass('active');
            blockparent.find('.current').addClass('was_current'); // помечаем старый current классом was_current
            /*
            если align == 'prev':
            next становится current, потом с него убираем класс next
            старый current становится prev, потом с него убираем класс current
            если align == 'next':
            prev становится current, потом с него убираем класс prev
            старый current становится next, потом с него убираем класс current    
            */
            blocks.eq(sliderCursor[slider_id]).addClass('current');
            blockparent.find('.was_current').addClass(align).removeClass('current');
            /*
            дожидаемся конца анимации
            */
            blocks.on('transitionend', function () {
                /*
                убираем was_current и все prev и next
                */
                blocks.removeClass('prev').removeClass('next').removeClass('was_current');
                /*
                добавляем prev и next соответственно новому current
                */
                blocks.eq((sliderCursor[slider_id] == blocks.length - 1) ? 0 : sliderCursor[slider_id] + 1).addClass('next');
                blocks.eq((sliderCursor[slider_id] == 0) ? blocks.length - 1 : sliderCursor[slider_id] - 1).addClass('prev');
                sliderFlag[slider_id] = false;
            });
        });
    }

    domElements.filters.pricemin.onchange = (event) => {
        const value = event.target.value

        const filteredCardsPriceMin = cardsData.filter(card => {

            const regxmi = new Number(value)
            if (regxmi <= card.price) {
                return true
            } else {
                return false
            }
        })

        const filteredCardsHTMLPriceMin = generateCards(filteredCardsPriceMin)
        domElements.results.innerHTML = filteredCardsHTMLPriceMin.join('')
    }

    domElements.filters.pricemax.onchange = (event) => {
        const value = event.target.value

        const filteredCardsPriceMax = cardsData.filter(card => {

            const regxma = new Number(value)
            if (regxma >= card.price) {
                return true
            } else {
                return false
            }
        })

        const filteredCardsHTMLPriceMax = generateCards(filteredCardsPriceMax)
        domElements.results.innerHTML = filteredCardsHTMLPriceMax.join('')
    }
}
