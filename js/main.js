$(document).ready(function(){

    $("button").on('click', function(){
        if($(this).find("+div").hasClass('open')){
            $("div").removeClass('open')
        } else {
        $("div").removeClass('open')
        $(this).find("+ div").addClass('open')
        }    
    })




})