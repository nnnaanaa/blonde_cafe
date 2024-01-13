"use strict";

/*-------------------------------------------
サイドナビゲーション
-------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.btn-trigger');
    const sidenav = document.querySelector('.sidenav-trigger');

    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        sidenav.classList.toggle('active');
    });
});

/* 文字が一文字ずつ出現 */
let textAnime = document.querySelectorAll(".textAnime");
for (let i = 0; i < textAnime.length; i++) {
  let text = textAnime[i].innerHTML;
  let textParts = "";
  text.split("").forEach(function (value, index) {
    textParts += '<span style ="animation-delay: ' + index * 0.2 + 's ;">' + value +
      '</span>';
  });
  textAnime[i].innerHTML = textParts;
}