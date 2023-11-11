document.addEventListener('DOMContentLoaded', function () {
    openForm(); like();
    lick_mobile();
});
function openForm() {
    var btn__return = document.querySelectorAll('.wrapFormDangKi__btn__fooder--retun')
    var modal = document.querySelector('.modal__wrap');
    var formDangNhap = document.querySelector('.formlogin');
    var formDangKi = document.querySelector('.formDangki');
    var btnDangNhap = document.querySelectorAll(".wrapFormDangKi__header__btn");
    var btnopenmodal = document.querySelectorAll('.btn_openwrap');
    var modal__tong = document.querySelector('.modal');
    var modal__background = document.querySelector('.modal__background');
    // chứa biến ở tren
    // ------------------------------------------------------------
    for (var i = 0; i < btn__return.length; i++) {
        btn__return[i].onclick = function () {
            modal__tong.style.display = 'none';
        }
    }
    modal__background.onclick = function () {
        modal__tong.style.display = 'none';
    }
    for (var i = 0; i < btnDangNhap.length; i++) {
        // ------------------------------------------------------
        btnDangNhap[i].onclick = function () {
            var btnlayout = this;
            formDangKi.style.animation = 'none';
            formDangNhap.style.animation = 'none';


            if (this.innerText === 'ĐĂNG KÝ') {

                modal.setAttribute('style', 'transform:rotatey(0deg)');
                formDangKi.style.transform = 'rotatey(0deg)';

                setTimeout(() => {
                    formDangKi.style.display = 'block';
                    formDangNhap.style.display = 'none';
                    modal.style.height = "432px";
                }, 500);
            } else {
                modal.setAttribute('style', 'transform:rotatey(180deg)');
                formDangNhap.style.transform = 'rotatey(180deg)';
                setTimeout(() => {
                    formDangKi.style.display = 'none';
                    formDangNhap.style.display = 'block';
                    modal.style.height = "380px";
                }, 500)
            }
        }
    }
    for (var j = 0; j < btnopenmodal.length; j++) {
        // --------------------------------------------------------
        btnopenmodal[j].onclick = function () {
            var bienhientai = this;
            formDangKi.style.animation = 'xuathien 0.3s ease-out';
            formDangNhap.style.animation = 'xuathien--login 0.3s ease-out';

            if (this.innerText === 'Đăng kí') {
                modal.setAttribute('style', 'transform:rotatey(0eg)');
                modal__tong.style.display = 'flex';
                formDangKi.style.display = 'block';
                formDangNhap.style.display = 'none'; modal.style.height = "432px";

            } else {
                modal__tong.style.display = 'flex';
                modal.setAttribute('style', 'transform:rotatey(180deg)');
                formDangNhap.style.display = 'block';
                formDangKi.style.display = 'none';
                modal.style.height = "380px";

            }
        }
    }
}
function like() {

    var heart = document.getElementsByClassName("shop__SP__icon__heart")
    for (var i = 0; i < heart.length; i++) {
        heart[i].onclick = function () {
            var bienhientai=this;
            var check_heart =bienhientai.classList.contains("shop__SP__icon__heart-clickheart");
            if (check_heart) {
                bienhientai.setAttribute("class", "shop__SP__icon__heart");
            } else {
                bienhientai.classList.add("shop__SP__icon__heart-clickheart");
                console.log(bienhientai);
            }
        }
    }
}
