"use strict";

/*-------------------------------------------
ヘッダー
-------------------------------------------*/
// document.addEventListener("DOMContentLoaded", function() {
//     const listItems = document.querySelectorAll(".rotate-word");
//     let currentIndex = 0;

//     function showTtlItem() {
//         // 一つ前の要素からクラスを削除
//         // 最初の要素から削除する場合は、最後の要素にクラスがないことを確認
//         if (currentIndex > 0) {
//           listItems[currentIndex - 1].classList.remove("show-ttl");
//         } else {
//           listItems[listItems.length - 1].classList.remove("show-ttl");
//         }
    
//         // 現在の要素にクラスを追加
//         listItems[currentIndex].classList.add("show-ttl");
    
//         // インデックスを更新し、10秒後に再度showTtlItemを呼び出す
//         currentIndex = (currentIndex + 1) % listItems.length;
//         setTimeout(showTtlItem, 3500); // 7秒ごとに表示が変わる
//       }
  
//     // 初回呼び出し
//     showTtlItem();
// });

/*-------------------------------------------
メイン
-------------------------------------------*/
function showPage(pageNumber) {
    const itemsPerPage = 3;
    const historyItems = document.querySelectorAll('.history');
    const totalPages = Math.ceil(historyItems.length / itemsPerPage);

    for (let i = 0; i < historyItems.length; i++) {
        historyItems[i].classList.add('history-hidden');
    }

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
        if (historyItems[i]) {
            historyItems[i].classList.remove('history-hidden');
        }
    }
}