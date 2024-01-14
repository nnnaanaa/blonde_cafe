"use strict";

/*-------------------------------------------
ヘッダー
-------------------------------------------*/

/*-------------------------------------------
メイン
-------------------------------------------*/
/* ページネーション機能 */
document.addEventListener('DOMContentLoaded', function () {
    const historyContainer = document.querySelector('.history-container');
    const historyItems = historyContainer.querySelectorAll('.history');
    const itemsPerPage = 3;

    function showPage(pageNumber) {
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

    function generatePagination(totalPages) {
        const paginationContainer = document.getElementById('pagination');

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.classList.add('pagination-button');
            li.textContent = i;
            li.onclick = function () {
                showPage(i);
            };
            paginationContainer.appendChild(li);
        }
    }

    showPage(1); // 初期ページ
    generatePagination(Math.ceil(historyItems.length / itemsPerPage));
});

/* アクティブボタン */
document.addEventListener('DOMContentLoaded', function () {
    /* 初期化 */
    const activeButton = document.querySelector('.pagination-button');
    if (activeButton) {
        activeButton.classList.add('active-button');
    }

    const PaginationButton = document.querySelectorAll('.pagination-button');
    PaginationButton.forEach(function(button) {
        button.addEventListener("click", function(){
            PaginationButton.forEach(function(button) {
                button.classList.remove('active-button');
            });
            button.classList.add('active-button');
        });
    });
});

/*-------------------------------------------
ScrollReveal
-------------------------------------------*/
ScrollReveal({ reset: false, distance: "60px" , duration: 2000, delay: 200});
ScrollReveal().reveal('.lower-content ul', { reset: true, delay: 100, origin: "left", duration: 2000});
ScrollReveal().reveal('.page-title', { reset: true, delay: 100, origin: "left", duration: 2000});
ScrollReveal().reveal('.history-container', { reset: true, delay: 100, origin: "bottom", duration: 2000});
ScrollReveal().reveal('.contact-form', { reset: true, delay: 100, origin: "bottom", duration: 2000});
