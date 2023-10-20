function myFunction1(b){
    b.classList.toggle('random1')
    var c = document.getElementsByClassName('nav-iii')[0]
    c.classList.toggle('show1')
    var d = document.getElementsByClassName('nav-ii')[0]
    d.classList.toggle('show2')
    }

var men1Count = 1;

function myFunction10(b){
    myFunction9(men1Count += b)
}

function myFunction11(b){
    myFunction9(men1Count += b)
}

function menProductEquall(a){
    myFunction9(men1Count = a)
}

myFunction9()
function myFunction9(){
    var productMen1 = document.getElementsByClassName('product-men1')
    var menProductBtn1 = document.getElementById('menProductBtn1')
    var menProductBtn2 = document.getElementById('menProductBtn2')
    
    if(men1Count > productMen1.length){men1Count = productMen1.length}
    if(men1Count < 1){men1Count = 1 }
    if(men1Count === 1){
        menProductBtn1.style.cursor='not-allowed'
        menProductBtn1.style.opacity='.5'
    }else{
        menProductBtn1.style.cursor='pointer'
        menProductBtn1.style.opacity='1'
    }
    if(men1Count === productMen1.length){
        menProductBtn2.style.cursor='not-allowed'
        menProductBtn2.style.opacity='.5'
    }else{
        menProductBtn2.style.cursor='pointer'
        menProductBtn2.style.opacity='1'
    }
    for(var i = 0; i < productMen1.length;i++){
        productMen1[i].style.display='none'
    }
    productMen1[men1Count-1].style.display='flex';
 
    var MenBtnNum = document.getElementsByClassName('menBtnNum')
    for(var i = 0; i < MenBtnNum.length;i++){
        MenBtnNum[i].style.color=''
    }
MenBtnNum[men1Count - 1].style.color='orange'
    
}

// starting of women product javascrip &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var Women1Count = 1;
function myFunction13(b){
    myFunction12(Women1Count += b)
}

function myFunction14(b){
    myFunction12(Women1Count += b)
}

function womenProductEquall(b){
    myFunction12(Women1Count = b)
}
myFunction12()
function myFunction12(){
    var productWomen1 = document.getElementsByClassName('product-women1')
   var womenBtn1 = document.getElementById('womenbtn1');
   var womenBtn2= document.getElementById('womenbtn2')
    if(Women1Count > productWomen1.length){Women1Count = productWomen1.length}
    if(Women1Count < 1){Women1Count = 1 }
    if(Women1Count === 1){
        womenBtn1.style.opacity='.5';
        womenBtn1.style.cursor='not-allowed'
    }else{
        womenBtn1.style.opacity='1';
        womenBtn1.style.cursor='pointer'
    }
    if(Women1Count === productWomen1.length){
        womenBtn2.style.opacity='.5';
        womenBtn2.style.cursor='not-allowed'
    }else{
        womenBtn2.style.opacity='1';
        womenBtn2.style.cursor='pointer'
    }
    for(var i = 0; i < productWomen1.length;i++){
        productWomen1[i].style.display='none'
    }
  
    productWomen1[Women1Count-1].style.display='flex';
    console.log(Women1Count)

    var womenNum = document.getElementsByClassName('women-num')
    for(var i = 0; i < womenNum.length;i++){
        womenNum[i].style.color=''
    }
    womenNum[Women1Count - 1].style.color='orange'
}
// Ending of women product javascrip &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// starting of babies product javascript side ((((((((((((((((((((()))))))))))))))))))))
var Babies1Count = 1;
function myFunction16(b){
    myFunction15(Babies1Count += b)
}

function myFunction17(b){
    myFunction15(Babies1Count += b)
}
function babiesProductEquall(b){
    myFunction15(Babies1Count = b)
}
myFunction15()
function myFunction15(){
    var productBabies1 = document.getElementsByClassName('product-babies')
   var babiesBtn1 = document.getElementById('babies-btn1')
   var babiesBtn2 = document.getElementById('babies-btn2')
    if(Babies1Count > productBabies1.length){Babies1Count = productBabies1.length}
    if(Babies1Count < 1){Babies1Count = 1 }
    if(Babies1Count === 1){
        babiesBtn1.style.opacity='.5'
        babiesBtn1.style.cursor='not-allowed'
    }else{
        babiesBtn1.style.opacity='1'
        babiesBtn1.style.cursor='pointer'
    }
    if(Babies1Count === productBabies1.length){
        babiesBtn2.style.opacity='.5'
        babiesBtn2.style.cursor='not-allowed'
    }else{
        babiesBtn2.style.opacity='1'
        babiesBtn2.style.cursor='pointer'
    }
    for(var i = 0; i < productBabies1.length;i++){
        productBabies1[i].style.display='none'
    }
  
    productBabies1[Babies1Count-1].style.display='flex';
    console.log(Babies1Count)

    var babiesNum = document.getElementsByClassName('babies-num')
    for(var i = 0; i < babiesNum.length;i++){
        babiesNum[i].style.color=''
    }
    babiesNum[Babies1Count - 1].style.color='orange'
}
// Ending of babies product javascrip side product ((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))

//Starting of btn product selection gender ********************************************** 
function myFunction18(a,b,x){

   var productsGeneralGender = document.getElementsByClassName('all-men-shoes-product-general-container')
   for(var i = 0; i < productsGeneralGender.length;i++){
   productsGeneralGender[i].style.display ='none'

   }
//    document.getElementById(a).style.display='block'
   var bc=document.getElementsByClassName(a)
   for(var i = 0; i < bc.length;i++){
       bc[i].style.display='block'
   }

   var nextShowing = document.getElementsByClassName('next-showing-shoe-container')
   for(var i = 0; i < nextShowing.length;i++){
       nextShowing[i].style.display='none'
   }
   var bd=document.getElementsByClassName(b)
   for(var i = 0; i < bd.length;i++){
       bd[i].style.display='flex'
   }

   var nextShowingW = document.getElementsByClassName('next-showing-women-shoe-container')
   for(var i = 0; i < nextShowingW.length;i++){
       nextShowingW[i].style.display='none'
   }
   var cd=document.getElementsByClassName(b)
   for(var i = 0; i < cd.length;i++){
        cd[i].style.display='flex'
   }

   var btnSelectionProduct = document.getElementsByClassName('btnSelectionProduct')
   for(var i = 0; i < btnSelectionProduct.length;i++){
       btnSelectionProduct[i].style.backgroundColor=''
   }
   x.style.backgroundColor='orange'

}
document.getElementById('product-active').click()
//Ending of btn product selection gender ********************************************** 




