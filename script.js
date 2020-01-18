// мой первый скрипт!
jQuery('document').ready(function(){
    
    
    // события!
    jQuery('#rasschet').on('keyup', function(){
        // alert('поздравляю, ты не умеешь считать в уме!');

        var value1, value2, value3;
        value1 = jQuery('#firstInp').val();
        value2 = jQuery('#secInp').val();
        value1 = parseInt(value1);
        value2 = parseInt(value2);

        value3 = value1 * value2;

        jQuery('#rezultat').html( value3 );


    });

    jQuery('#enter2ch').on('click', function(){
        
        value1 = parseInt(jQuery('#canyou').val());
        

        if (value1 === 2009){
            alert('Ты - настоящий оэлдэ! Заходи к нам!');
            jQuery('body').append('<a href="http://2ch.hk">Перейти на глагне</a>');
        } else{
            alert('Пошел нахуй, школяр ебаный!');
            jQuery('body').append('<a href="http://oper.ru">Пиздуй обратно, cumрад</a>');
        }

        


    });
})

// alert("Ty pidor");