let kz=true
const myGuoDu=()=>{
   
   if(kz){
    $(".top-box").css("transform","translateX(100%)")
    $(".top-box").css("background-color","rgb(227,213,253)")
    $("img").attr("src","./img/02.jpg")
    kz=!kz
   }else{
    $(".top-box").css("transform","translateX(0%)")
    $(".top-box").css("background-color","rgb(183,221,251)")
    $("img").attr("src","./img/01.jpg")
    kz=!kz
   }
   

}