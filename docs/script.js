

$(function() {

    $('input:not(#alertInput)').attr('readonly','readonly');
    $('textarea').attr('readonly','readonly');

    $("#sideMenuBTN").on("click", function() {
        $("#sideMenu").addClass("ht-60");
        // $(".super-body").addClass("blur-4");
        
    });

    $("#closeSideMenu").on("click", function(){
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
    });

    var copyLib = new ClipboardJS('.btn');

    $(".copy-btn").on("click", function (e) {
        let thisElText = $(this).text();
        let thisEl = $(this);
        $(this).animate({ opacity: 0.2}).text("Copied!").delay(0).animate({ opacity: 1});
        setTimeout(function () {
            $(thisEl).text(thisElText);
        }, 2000);
    });

    $("#showDemoAlert1").on("click", function (e) {
        swalt("Hello there! This is a sample Swalt Alert. There is even much more to it.");
    });

    $("#showIntergration1").on("click", function (e) {
        $(".super-body").animate({
            scrollTop: $(".section-1").height()
        }, 400);
    });

    $(".s-item-1").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: 0
        }, 400);
    });

    $(".s-item-2").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: $(".section-1").height()
        }, 400);
    });

    $(".s-item-3").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: $(".section-1").height() + $(".section-2-super").height()
        }, 400);
    });

    $(".s-item-4").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: $(".section-1").height() + $(".section-2-super").height() + $(".section-3-BBBB").height()
        }, 400);
    });

    $(".s-item-5").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: $(".section-1").height() + $(".section-2-super").height() + $(".section-3-BBBB").height() + $(".section-3-CCCC").height()
        }, 400);
    });

    // Navbar

    $(".nav-1").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: 0
        }, 400);
    });

    $(".nav-2").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: $(".section-1").height()
        }, 400);
    });

    $(".nav-3").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: $(".section-1").height() + $(".section-2-super").height()
        }, 400);
    });

    $(".nav-4").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: $(".section-1").height() + $(".section-2-super").height() + $(".section-3-BBBB").height()
        }, 400);
    });

    $(".nav-5").on("click", function (e) {
        $("#sideMenu").removeClass("ht-60");
        // $(".super-body").removeClass("blur-4");
        $(".super-body").animate({
            scrollTop: $(".section-1").height() + $(".section-2-super").height() + $(".section-3-BBBB").height() + $(".section-3-CCCC").height()
        }, 400);
    });

    $("#sBtn1").on("click", function(){
        swalt ( "Hello World! This is a sample swalt template.", {
             input: false,
            showIcon: false
            }  ) ;
    });

    $("#sBtn2").on("click", function(){
        swalt ( "Hello World! This is a sample swalt template.", {
             input: true
            } ) ;
    });

    $("#sBtn3").on("click", function(){
        swalt ( "Hello World! This is a sample swalt template.", {
             showIcon: true
            } ) ;
    });

    $("#sBtn4").on("click", function(){
        swalt ( "Hello World! This is a sample swalt template.", {
             mode: "dark"
            } ) ;
    });

    $("#sBtn5").on("click", function(){
        swalt ( "Hello World! This is a sample swalt template.", {
             title: "My Custom Title"
            } ) ;
    });

    $("#sBtn6").on("click", function(){
        swalt ( "Hello World! This is a sample swalt template.", {
             btnValue: "My Custom Button"
            } ) ;
    });





});

