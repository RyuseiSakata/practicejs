'use strict'

{
  //ここにおみくじの処理
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  btn.addEventListener('click', () => {
    const results = ['大吉','中吉','凶','小吉']
    const n = Math.floor(Math.random()*results.length);
    result.textContent  =results[n];

  });
  //ここん画像スライドの処理
  var mySwiper = new Swiper('.swiper-container', {
    effect: "slide",
    loop: true,
    autoplay: 5000,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })
  //ここに時間表示の処理
  window.onload = function() {
    setInterval(function() {
      var dd = new Date();
      document.getElementById("T1").innerHTML = dd.toLocaleString();
    }, 1000);
  }
  //ここがボタンの処理
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  btn2.addEventListener('click', () =>{
    document.getElementById("T1").style.display="block";
  })
  btn3.addEventListener('click', () =>{
    document.getElementById("T1").style.display="none";
  })

}
