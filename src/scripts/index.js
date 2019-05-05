$(document).ready(function () {
    //Aktywowanie bocznego menu nawigacji
    $('.sidenav').sidenav();

    //Aktywowanie karuzeli ze zdjęciami wraz z interwałem na zmianę zdjęć
    $('.carousel').carousel();
    window.setInterval(function(){$('.carousel').carousel('next')},3500);

    //Aktwywowanie parallaxu
    $('.parallax').parallax();

    //Aktwywanie zakładek
    $('.tabs').tabs();

    //Aktywanie funkcji wyboru daty + zablokowanie weekendów oraz dat wcześniejszych niż dzisiejszy dzień
    $('.datepicker').datepicker({
        disableWeekends: true,
        format: 'dd.mm.yyyy',
        minDate: new Date()
    });

    //Aktywanie funkcji scrollSpy
    $('.scrollspy').scrollSpy();

    /*DOTYCZY WSZYSTKICH PONIŻEJ, MAJĄ ONE ZMIENIONE TYLKO ID!!
    KAŻDA Z PONIŻYSZCH FUNKCJI UAKTYWNIA PULSOWANIE PRZYCISKU "PRZEJDŹ DO STRONY",
    KTÓRY ZNAJDUJE SIĘ W PLIKU KATALOG.HTML, GDY UŻYTKOWNIK NAJEDZIE NA PRZYCISK MYSZKĄ. 
    */
   
    $('#atb_puls').mouseenter(function(){
        $('#atb_puls').addClass('pulse');
    });
    $('#atb_puls').mouseleave(function(){
        $('#atb_puls').removeClass('pulse');
    });

    $('#bmx_puls').mouseenter(function(){
        $('#bmx_puls').addClass('pulse');
    });
    $('#bmx_puls').mouseleave(function(){
        $('#bmx_puls').removeClass('pulse');
    });

    $('#elektryk_puls').mouseenter(function(){
        $('#elektryk_puls').addClass('pulse');
    });
    $('#elektryk_puls').mouseleave(function(){
        $('#elektryk_puls').removeClass('pulse');
    });

    $('#goral_puls').mouseenter(function(){
        $('#goral_puls').addClass('pulse');
    });
    $('#goral_puls').mouseleave(function(){
        $('#goral_puls').removeClass('pulse');
    });

    $('#miejski_puls').mouseenter(function(){
        $('#miejski_puls').addClass('pulse');
    });
    $('#miejski_puls').mouseleave(function(){
        $('#miejski_puls').removeClass('pulse');
    });

    $('#skladak_puls').mouseenter(function(){
        $('#skladak_puls').addClass('pulse');
    });
    $('#skladak_puls').mouseleave(function(){
        $('#skladak_puls').removeClass('pulse');
    });

    $('#szosowy_puls').mouseenter(function(){
        $('#szosowy_puls').addClass('pulse');
    });
    $('#szosowy_puls').mouseleave(function(){
        $('#szosowy_puls').removeClass('pulse');
    });

    $('#tandem_puls').mouseenter(function(){
        $('#tandem_puls').addClass('pulse');
    });
    $('#tandem_puls').mouseleave(function(){
        $('#tandem_puls').removeClass('pulse');
    });

    $('#torowy_puls').mouseenter(function(){
        $('#torowy_puls').addClass('pulse');
    });
    $('#torowy_puls').mouseleave(function(){
        $('#torowy_puls').removeClass('pulse');
    });

    $('#trekingowy_puls').mouseenter(function(){
        $('#trekingowy_puls').addClass('pulse');
    });
    $('#trekingowy_puls').mouseleave(function(){
        $('#trekingowy_puls').removeClass('pulse');
    });
});