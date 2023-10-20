// nav-ii java script
function myFunction1(b){
b.classList.toggle('random1')
var c = document.getElementsByClassName('nav-iii')[0]
c.classList.toggle('show1')
var d = document.getElementsByClassName('nav-ii')[0]
d.classList.toggle('show2')
}
//ending of nav-ii javascript *****************************************************

// starting of landing page javascript *********************************************
var landShoei = 2;

function landingAdd(b){
    myFunction2(landShoei += b)
}
function landingMinus(b){
    myFunction2(landShoei += b)
}

function landingEquall(b){
    myFunction2(landShoei = b)
}
myFunction2()
function myFunction2(){
  var landingShoe = document.getElementsByClassName('left-landing-page-img')  

 if(landShoei > landingShoe.length){landShoei = 1}
 if(landShoei < 1){landShoei = landingShoe.length}
  for(var i = 0; i < landingShoe.length;i++){
      landingShoe[i].style.display='none'
  }

  landingShoe[landShoei - 1].style.display='block'

  
  var equallLength = document.getElementsByClassName('equal-img-length')[0]

  if(landShoei === 1){
      equallLength.style.transform='translateX(0%)'
      
      document.getElementsByClassName('left-landing-page-holder')[0].style.transition='0s'
      document.getElementsByClassName('left-landing-page-holder')[0].style.color='#D7B4AB'

      
  }
  if(landShoei === 2){
      equallLength.style.transform='translateX(-20%)'
      document.getElementsByClassName('left-landing-page-holder')[0].style.color='white'

  }
  if(landShoei === 3){
      equallLength.style.transform='translateX(-40%)'
      document.getElementsByClassName('left-landing-page-holder')[0].style.color='#94140D'

  }
  if(landShoei === 4){
      equallLength.style.transform='translateX(-60%)'
      document.getElementsByClassName('left-landing-page-holder')[0].style.color='#7C7C63'

  }
  if(landShoei === 5){
      equallLength.style.transform='translateX(-80%)'
      document.getElementsByClassName('left-landing-page-holder')[0].style.color='#0E44AC'

      
  }
}

function myFunction3(){
    landShoei++
    myFunction2()
    setTimeout(myFunction3,5000)
}
myFunction3()
// Ending  of landing page javascript *********************************************


// Men shoe selection starting **************************************************
function myFunction4(x,cl){
    var MaleSelection = document.getElementsByClassName('M-overall')
    for(var i = 0; i < MaleSelection.length;i++){
        MaleSelection[i].style.display='none'

    }


    var menCollection = document.getElementsByClassName(cl);
    var menColor = document.getElementsByClassName('recent-color')
    for(var i = 0; i < menCollection.length;i++){
        menCollection[i].style.display='block';
        
    }

    for(var i = 0; i < menColor.length;i++){
        menColor[i].style.color=''
    }
    x.style.color='orange'
    x.style.transition='0s'


}
document.getElementById('auto1').click()
// Men shoe selection ending **************************************************


// starting of women shoe collection ********************************************

function myFunction6(x,cl){
    var WOverall = document.getElementsByClassName('W-overall')
    for(var i = 0; i <WOverall.length;i++){
        WOverall[i].style.display='none'
    }

    var cl = document.getElementsByClassName(cl);
    var WrecentColor = document.getElementsByClassName('Wrecent-color')
    for(var i = 0; i < cl.length;i++){
        cl[i].style.display='block'
    }

    for(var i = 0; i < WrecentColor.length;i++){
        WrecentColor[i].style.color=''
    }
    x.style.color='orange'
    x.style.transition='0s'
}

document.getElementById('auto2').click()
// Ending of women shoe collection ***************************************

var mover1 = 0;
var arrow3 = document.getElementById('arrow1')
var arrow4 = document.getElementById('arrow2')
function arrow1(n){
    myFunction5(mover1 += n)
}
myFunction5()
function myFunction5(){
    // var dontMissOut = document.getcly
    var donMissOut = document.getElementsByClassName('dont-miss-out-long-length')[0]
    if(mover1 < 1){
        mover1 = 0
    }
    if(mover1 > 3){
        mover1 = 3
    }
    if(mover1 === 0){
        arrow3.style.opacity= '.5'
        arrow3.style.cursor='not-allowed'
    }else{
        arrow3.style.opacity= '1'
        arrow3.style.cursor='pointer'


    }

    if(mover1 === 3){
        arrow4.style.opacity= '.5'
        arrow4.style.cursor='not-allowed'

    }else{
        arrow4.style.opacity= '1'
        arrow4.style.cursor='pointer'

    }


    donMissOut.style.transform= 'translateX(' + -20 * mover1 + '%' +')'
}


// starting of scroll to top *************************

function myFunction8(){
document.body.scrollTop = '0'
}
// Ending of scroll to top *********************************






