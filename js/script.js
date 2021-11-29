document.addEventListener("DOMContentLoaded",()=>{
    const title = document.querySelectorAll('.js-accordion-title');
    for (let i = 0; i < title.length; i++){
      let titleEach = title[i];
      let content = titleEach.nextElementSibling;
      titleEach.addEventListener('click', () => {
        titleEach.classList.toggle('is-active');
        content.classList.toggle('is-open');
      });
    }
  
  });
  function showimg1(){
    document.getElementById("imgLink").src = "img/196726_s.jpg";
    document.getElementById("message").innerHTML = "海や山の自然を感じながら走ることができるためサイクリングをしている方が多く<br>海ではオーシャンブルーと潮の香を感じながら山では爽やかな空気の中走ることができる<br>また散歩やランニングも多い";
  }
  function showimg2(){
    document.getElementById("imgLink").src = "img/DSC_0144.JPG";
    document.getElementById("message").innerHTML ="葉山は釣りをできる場所が多く休日には小学生や若い女性の方など<br>多くの人が集まって釣りをしているボートを貸りて釣りをすることもできる";
  }
  function showimg3(){
    document.getElementById("imgLink").src = "img/3936847_m.jpg";
    document.getElementById("message").innerHTML = "クラブやサーフィンスクールなど初心者でも学び楽しむことができる<br>また波がなくてもできるスタンドアップサーフィンや風の力を使って進むウインドサーフィンがある";
  }
   function showimg4(){
    document.getElementById("imgLink").src = "img/kayak-1714591_1280.jpg";
    document.getElementById("message").innerHTML = "初心者でも安定して乗れて<br>シーカヤックは海からしか行くことのできない場所に降りることができる<br>二人乗りや四人乗りなど複数人で乗ることができる";
  }