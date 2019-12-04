//mobile-navbar collapse coding
$(document).ready(function(){
    $(".nav-icon").click(function(){
        $("#mobile-menu").collapse('toggle');
        $("#mobile-menu").addClass("animated zoomIn");
    });
});

//typing coding
$(document).ready(function(){
    var string="BE STYLISH";
    var i=0;
    if(i<string.length)
        {
            setInterval(function(){
                document.querySelector(".add-header").innerHTML+=string.charAt(i);
                i++;
            },100);
        }
})

//project showing coding
$(window).scroll(function(){
    if(sessionStorage.getItem('user_scroll')==null){
    var value = $("#projec-head").attr('class');
    if(value.indexOf("animated")!=-1)
    {
        animate();
        sessionStorage.setItem('user_scroll','yes');
    }
}
});

function animate(){
$(document).ready(function(){
    var num=0;
    var repeat=setInterval(function(){
        num+=1;
        $("#num-one").html(num+"+");
        if(num==500)
        {
            clearInterval(repeat);
        }
    },1)
})
$(document).ready(function(){
    var num=0;
    var repeat=setInterval(function(){
        num+=1;
        $("#num-two").html(num+"+");
        if(num==700)
        {
            clearInterval(repeat);
        }
    },1)
})

$(document).ready(function(){
    var num=0;
    var repeat=setInterval(function(){
        num+=1;
        $("#num-three").html(num+"+");
        if(num==100)
        {
            clearInterval(repeat);
        }
    },1)
})
$(document).ready(function(){
    var num=0;
    var repeat=setInterval(function(){
        num+=1;
        $("#num-four").html(num+"+");
        if(num==200)
        {
            clearInterval(repeat);
        }
    },1)
})
}










        
        