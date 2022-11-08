/* variables */
let galFlag = false;
/* functions */
$(function () {
    function galSlide(direction) {
        if (galFlag) return; // если флаг поднят, функция не должна вызываться - она уже работает
        galFlag = true; // поднимаем блокирующий флаг
        /* измеряем текущее положение рельса, ширину его и окна, размер шага (ширину мелкой картинки + промежуток между картинками) */
        let pos = parseInt($('.rail').css('left'));
        let width = parseInt($('.rail').css('width'));
        let windowwidth = parseInt($('.gallery > div').css('width'));
        let step = parseInt($('.rail img').css('width')) + parseInt($('.rail').css('gap'));
        let move = '';
        if (direction == 'left') { // если двигаемся влево
            if (windowwidth >= width + pos) { // правый край рельса не может быть левее правого края окна
                galFlag = false;
                return;
            }
            move += '-=' + step; // составляем команду для сдвига
        } else { // если двигаемся вправо
            if (pos >= 0) { // левый край рельса не может быть правее левого края окна
                galFlag = false;
                return;
            }
            move += '+=' + step; // составляем команду для сдвига
        }
        $('.gallery .disabled').removeClass('disabled'); // отключенная кнопка после сдвига обязательно станет работающей
        /* анимируем сдвиг */
        $('.rail').animate({ left: move }, 1000, function () {
            if (parseInt($('.rail').css('left')) >= 0) { // если ушли до упора вправо, отключаем левую кнопку
                $('.gallery .gal_left').addClass('disabled');
            } else if (windowwidth >= width + parseInt($('.rail').css('left'))) { // если ушли до упора влево, отключаем правую кнопку
                $('.gallery .gal_right').addClass('disabled');
            }
            galFlag = false; // спускаем блокирующий флаг
        });
    }

    function lightbox(curimage) {
        let w, wfix, h, hfix, sides;
        let bigimage = curimage.src.split('images/').join('images/big_'); // добавляем префикс big_
        getModalWindows('lightbox');
        w = document.documentElement.clientWidth - 40; // определяем максимальную доступную ширину
        h = document.documentElement.clientHeight - 40; // определяем максимальную доступную высоту
        sides = curimage.clientWidth / curimage.clientHeight; // определяем соотношение сторон картинки
        if (w > sides * h) { // если по соотношению сторон доступная ширина больше нужной
            wfix = Math.floor(sides * h); // вычисляем нужную ширину
            hfix = h;
        } else if (w < sides * h) { // если по соотношению сторон доступная ширина меньше нужной
            wfix = w
            hfix = Math.floor(w / sides); // вычисляем нужную высоту
        }
        /* устанавливаем размеры модалке */
        document.getElementById('lightbox').style.cssText = `left: ${(w - wfix) / 2 + 20}px; top: ${(h - hfix) / 2 + 20}px; width: ${wfix - 80}px; height: ${hfix - 80}px;`;
        /* вставляем картинку */
        document.getElementById('lightbox').insertAdjacentHTML('beforeend', `<img src="${bigimage}">`);
        /* добавляем класс для плавного проявления */
        setTimeout(function () {
            document.getElementById('lightbox').classList.add('ready');
        });
    }


    if ($('.product_images .gallery').length) {
        $('.bigimage img').click(function () {
            lightbox(this);
        });

        $('.gal_left').click(function () {
            if (!$(this).hasClass('disabled')) galSlide('right');
        });

        $('.gal_right').click(function () {
            if (!$(this).hasClass('disabled')) galSlide('left');
        });

        $('.rail img').click(function () {
            let attr = $(this).attr('src').split('mini_').join('');
            $('.bigimage img').attr('src', attr);
        });
    }

});