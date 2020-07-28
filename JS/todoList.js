$("ul").on("click","li",function(event){
    $(this).toggleClass("checked");
    event.stopPropagation();
})
$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        
        $(this).remove();
    })
})
$("input").on("keypress",function(event){
    if(event.which === 13)
    {   
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+todo+"</li>");
    }
})
$(".fa-plus").click(function(){
   $("input").fadeToggle();
    
})