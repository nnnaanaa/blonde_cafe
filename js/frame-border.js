"use strict";

/*-------------------------------------------
マグカップ
-------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const mag_icon_box = document.querySelectorAll('.mag-icon-box');
    mag_icon_box.forEach(function (icon) {
        icon.addEventListener('click', function() {
            icon.parentNode.classList.toggle('active');
        });
    });
});