let StartCoffeeBasket = [
    {
        id: 1000,
        name: 'Подарочный сертификат',
        price: 0,
        quantity: 1,
        link: ''
    }
];

const russMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

/* Кнопка вверх */
window.addEventListener('scroll', function () {
    var scroll = this.document.querySelector('.app_please');
    scroll.classList.toggle("active", window.scrollY > 500)
})
function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

$('.app_please').click(scrollTopTop);


/* modal city */

$('.location').on('click', function () {
    $('.modal_city_screener').addClass('active');
    $('.okno_city').addClass('active');
    setTimeout(function () {
        $('.okno_city').css({
            transform: "rotateX(0)"
        });
    }, 200);
    $('.okno_city .okno_city_close').click(dropModalLocation);
    $('.modal_city_screener.active').click(dropModalLocation);
});

function dropModalLocation() {
    $('.okno_city').css({
        transform: "rotateX(90deg)"
    });
    setTimeout(function () {
        $('.modal_city_screener').removeClass('active');
        $('.okno_city').removeClass('active');
    }, 200);
};

$('#city span').html(localStorage.getItem('gorod') || 'Москва');

$(function () {
    $('.okno_city p').click(function () {
        let VibraniyGorod = $(this).html()
        $('#city span').html(VibraniyGorod);
        localStorage.setItem('gorod', VibraniyGorod);
        dropModalLocation();
    });
});

function getModalWindows(idname) {
    $('body').append('<div class="screener_modal"></div><div class="modal_modal" id="' + idname + '"><button type="button" class="close_modal">&times;</button></div>');
    $('.screener_modal, .modal_modal .close_modal').click(dropModalWindows);
}
function dropModalWindows() {
    $('.screener_modal, .modal_modal').remove();
}

/* modal enter */
$('.regestry_enter').on('click', function () {
    $('.login_s').addClass('active');
    $('.login').addClass('active');
    setTimeout(function () {
        $('.login').css({
            transform: "rotateX(0)"
        });
    }, 200);
    $('.close_re, .login_s').click(dropModaEnter);
});

function dropModaEnter() {
    $('.login').css({
        transform: "rotateX(90deg)"
    });
    setTimeout(function () {
        $('.login_s').removeClass('active');
        $('.login').removeClass('active');
    }, 200);
};

/* modal menu */
$('.dropdown_toggle').on('click', function () {
    $('.main_menu').addClass('active');
    $('.dropdown_scr').addClass('active');
    $('.dropdown_scr').click(dropModaMenu);
});

function dropModaMenu() {
    $('.main_menu').removeClass('active');
    $('.dropdown_scr').removeClass('active');
};



$('.ask_call_back_item h4').on('click', function () {
    $('.ask_call_back_item').toggleClass('active');
});


/*predlojka*/

$('.predlojka_cofe_sw').on('click', function () {
    $('.Promotion').removeClass('active');
    $('.cofe_w').removeClass('hidden');
    $('.predlojka_cofe_sw').removeClass('hidden');
    $('.predlojka_promotion_sw').removeClass('active');
});

$('.predlojka_promotion_sw').on('click', function () {
    $('.Promotion').addClass('active');
    $('.cofe_w').addClass('hidden');
    $('.predlojka_cofe_sw').addClass('hidden');
    $('.predlojka_promotion_sw').addClass('active');
});

/*predlojka sami towari*/
$('.towar_nb_one .more_less_info').click(function () {
    $('.cartochka_towara_hover').toggleClass('active');
});
$('.towar_nb_two .more_less_info').click(function () {
    $('.cartochka_towara_two_hover').toggleClass('active');
});
$('.towar_nb_tree .more_less_info').click(function () {
    $('.cartochka_towara_tree_hover').toggleClass('active');
});
$('.towar_nb_four .more_less_info').click(function () {
    $('.cartochka_towara_four_hover').toggleClass('active');
});
$('.towar_nb_five .more_less_info').click(function () {
    $('.cartochka_towara_five_hover').toggleClass('active');
});
$('.towar_nb_six .more_less_info').click(function () {
    $('.cartochka_towara_six_hover').toggleClass('active');
});
$('.towar_nb_seven .more_less_info').click(function () {
    $('.cartochka_towara_seven_hover').toggleClass('active');
});
$('.towar_nb_eight .more_less_info').click(function () {
    $('.cartochka_towara_eight_hover').toggleClass('active');
});

/* grid_roasting */

$('.free_delivery').hover(function () {
    $('.free_delivery_hover').toggleClass('active');
});

$('.fry_cofe').hover(function () {
    $('.fry_cofe_hover').toggleClass('active');
});

$('.money_back').hover(function () {
    $('.money_back_hover').toggleClass('active');
});

$('.gifts').hover(function () {
    $('.gifts_hover').toggleClass('active');
});

$('.our_team').hover(function () {
    $('.our_team_hover').toggleClass('active');
});

$('.best_tools').hover(function () {
    $('.best_tools_hover').toggleClass('active');
});

/* faq */

$('.f_i_f').on('click', function () {
    $('.f_i_f').toggleClass('active');
});

$('.f_i_s').on('click', function () {
    $('.f_i_s').toggleClass('active');
});

$('.f_i_t').on('click', function () {
    $('.f_i_t').toggleClass('active');
});

$('.f_p_f').on('click', function () {
    $('.f_p_f').toggleClass('active');
});

$('.f_p_s').on('click', function () {
    $('.f_p_s').toggleClass('active');
});

$('.f_p_t').on('click', function () {
    $('.f_p_t').toggleClass('active');
});



/* Работаем с корзиной */

/* Таблица в корзине? */
function orderReCount() {
    let point = $('.table');
    let allsum = 0;
    point.find('tbody tr').each(function () {
        let price = +$(this).find('.price').html();
        let qty = +$(this).find('.qty strong').html();
        let sum = qty * price;
        allsum += sum;
        $(this).find('.sum').html(sum);
    });
    point.find('.allsum span').html(allsum);
}
function changeOrder(line, num) {
    let newnum = +$(line).find('.qty strong').html() + num;
    if (newnum > 0) {
        $(line).find('.qty strong').html(newnum);
        orderReCount();
    }
}


/* Добавление штуки в корзину*/
$('.product_buy').click(function () {
    let res = {}
    let aim = $(this).parents('.product');
    res.id = aim.data('product-id');
    res.name = aim.find('h1').html();
    res.price = aim.find('.price span').html();
    res.quantity = 1
    res.link = location.href;
    let CoffeeBasketItems = JSON.parse(localStorage.getItem('Coffeebasket'));
    if (CoffeeBasketItems) {
        let flag = false;
        for (let item of CoffeeBasketItems) {
            if (item.id == res.id) {
                item.quantity = +item.quantity + +res.quantity;
                flag = true;
                break;
            }
        }
        if (!flag) CoffeeBasketItems.push(res);
    } else {
        CoffeeBasketItems = [res];
    }
    localStorage.setItem('Coffeebasket', JSON.stringify(CoffeeBasketItems));
});

/* Генерация таблицы */

if ('.order') {
    let point = $('.table tbody');
    let count = 1;
    let CoffeeBasketItems = JSON.parse(localStorage.getItem('Coffeebasket'));
    if (!CoffeeBasketItems) CoffeeBasketItems = [];
    CoffeeBasketItems.push(...StartCoffeeBasket);
    for (let item of CoffeeBasketItems) {
        let hlpstr = '<tr data-id="' + item.id + '"><th scope="row" class="index">' + count + '</th><td class="name"><a href="' + item.link + '">' + item.name + '</a></td><td class="qty"><span class="minus">&minus;</span><strong>' + item.quantity + '</strong><span class="plus">&plus;</span></td><td class="price">' + item.price + '</td><td class="sum"></td><td class="delete icon">&#xe906;</td></tr>';
        point.append(hlpstr);
        count++;
    }
    orderReCount();
    $('.table .plus').click(function () {
        changeOrder($(this).parents('tr'), 1);
    });
    $('.table .minus').click(function () {
        changeOrder($(this).parents('tr'), -1);
    });
    $('.table .delete.icon').click(function () {
        $(this).parents('tr').remove();
        if ($('tbody tr').length) {
            orderReCount();
        } else {
            $('.order').addClass('empty');
        }
    });
}

/* Отправка форм */
$(function () {
    $('.order form .submit').click(function () {
        $('.is-invalid').removeClass('is-invalid');
        $('.invalid-feedback').remove();
        let form = document.forms[0];
        let valid = true;
        if (!form.name.value) {
            $('form #name').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должно быть указано имя!</div>');
            valid = false;
        }
        if (!form.addr.value) {
            $('form #addr').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должен быть указан адрес!</div>');
            valid = false;
        }
        if (!form.phone.value.match(/^((\+7)|(8))?\s?\(?\d{3}\)?\s?\d{3}\-?\d{2}\-?\d{2}$/)) {
            $('form #phone').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должен быть указан телефон!</div>');
            valid = false;
        }
        if (!form.agree.checked) {
            $('form .form-check-label').addClass('is-invalid');
            valid = false;
        }
        if (valid) {
            let products = [];
            $('.table tbody tr').each(function () {
                let res = {
                    id: this.dataset.id,
                    qty: +$(this).find('.qty strong').html()
                };
                products.push(res);
            })
            let data = {
                name: form.name.value,
                phone: form.phone.value,
                mail: form.mail.value,
                addr: form.addr.value,
                comm: form.comm.value,
                date: form.date.value,
                order: products
            };
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => response.json()).then(function (json) {
                localStorage.removeItem('Coffeebasket')
                getModalWindows('order');
                $('.modal_modal').append('<p>Ваш заказ оформлен под номером ' + json.id + '.</p>');
                $('.order').addClass('empty');
                form.reset();
            });
        }
    });
    $('.order .input-group .icon').click(function () {
        let date = new Date()
        makeDatePicker(`${date.getFullYear()}-${addZero(+date.getMonth() + 1)}-${addZero(+date.getDate())}`)
    });
    console.log('just loaded');
});

/*  */
function addZero(num) {
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

/* календарик */

function makeDatePicker(fieldDate) {
    getModalWindows('calendar');
    makeCalendar(fieldDate);
    // здесь можно добавить анимацию появления календаря
}
function makeCalendar(fieldDate) {
    let hlpdate = new Date(); // вспомогательная дата. берем сегодняшнюю.

    /* фиксируем сегодняшний день */
    let tyear = hlpdate.getFullYear();
    let tmonth = hlpdate.getMonth();
    let tday = hlpdate.getDate();

    if (fieldDate.match(/^\d{4}\-\d{2}\-\d{2}$/)) { // если аргумент соответствует ГГГГ-ММ-ДД, берем его
        /* hlpdate = new Date(fieldDate);  */
        let [fd1, fd2, fd3] = fieldDate.split('-');
        hlpdate = new Date(fd1, --fd2, fd3);
    }

    /* сохраняем основную дату */
    let curyear = hlpdate.getFullYear();
    let curmonth = hlpdate.getMonth();
    let curday = hlpdate.getDate();

    /* считаем, сколько дней первой недели месяца относятся к предыдущему месяцу */
    hlpdate = new Date(curyear, curmonth); // берем первый день текущего месяца
    let prevdays = ((hlpdate.getDay() + 6) % 7); // перед пн - 0, перед вт - 1 ... сб - 5, вс - 6

    /* определяем число недель в месяце */
    hlpdate = new Date(curyear, curmonth + 1, 0); // получаем последний день текущего месяца
    let lastday = hlpdate.getDate() + prevdays; // последний день месяца + дни до начала месяца
    let weeks = Math.ceil(lastday / 7);

    /* начинаем создавать разметку календаря */
    let hlpstr = '<button type="button" class="close_modal">&times;</button><div class="dp_header"><span class="bigprev"><<</span><span class="prev"><</span><strong>' + russMonth[curmonth] + ' ' + curyear + '</strong><span class="next">></span><span class="bignext">>></span></div>';
    hlpstr += '<div class="dp_grid"><span class="headday">Пн</span><span class="headday">Вт</span><span class="headday">Ср</span><span class="headday">Чт</span><span class="headday">Пт</span><span class="headday holiday">Сб</span><span class="headday holiday">Вс</span>';

    /* отрисовываем дни всех недель, отмечая дни не в нашем месяце */
    for (let i = 0; i < weeks * 7; i++) {
        if ((i >= prevdays) && (i < lastday)) {
            let getdate = curyear + '-' + addZero(curmonth + 1) + '-' + addZero(i - prevdays + 1);
            hlpstr += '<span class="getter';
            if ((i % 7 == 5) || (i % 7 == 6)) hlpstr += ' holiday';
            if (((i - prevdays + 1) == tday) && (tmonth == curmonth) && (tyear == curyear)) hlpstr += ' today';
            hlpstr += '" data-get="' + getdate + '">' + (i - prevdays + 1) + '</span>';
        } else {
            hlpstr += '<span class="empty"></span>';
        }
    }

    /* завершаем разметку и вставляем ее в ДОМ */
    hlpstr += '</div>';
    $('#calendar').html(hlpstr);

    /* развешиваем обработчики событий */
    $('.modal_modal .close_modal').click(dropModalWindows);
    $('#calendar .prev').click(function () {
        makeCalendar(`${curyear}-${addZero(curmonth)}-01`);
    })
    $('#calendar .next').click(function () {
        makeCalendar(`${curyear}-${addZero(curmonth + 2)}-01`);
    })
    $('#calendar .bigprev').click(function () {
        makeCalendar(`${curyear - 1}-${addZero(curmonth + 1)}-01`);
    })
    $('#calendar .bignext').click(function () {
        makeCalendar(`${curyear + 1}-${addZero(curmonth + 1)}-01`);
    })
    $('#calendar .getter').click(function () { // вставляем в поле ввода даты указанный день
        $('#date').val(this.dataset.get);
        dropModalWindows();
        // здесь можно добавить анимацию удаления календаря
    });
}





