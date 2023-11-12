/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};


// D-Day 설정 (년, 월(0부터 시작), 일)
const dDay = new Date('2024-03-01');

// D-Day까지의 시간 계산하는 함수
function calculateDday() {
    const now = new Date();
    const difference = dDay.getTime() - now.getTime();

    // 시간 차이를 일 단위로 변환
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

// D-N Day를 HTML에 표시하는 함수
function displayDday() {
    const daysLeft = calculateDday();
    const countdownElement = document.getElementById('countdown');

    if (daysLeft === 0) {
        countdownElement.innerHTML = "D-Day";
    } else if (daysLeft > 0) {
        countdownElement.innerHTML = `D-${daysLeft}`;
    } else {
        countdownElement.innerHTML = "D+${daysLeft}";
    }
}

// 카카오 맵 가져오기
function getKakaoMap() {
    Kakao.init('6324846770cc3fff60e3982d062392ac');

    Kakao.Local.searchAddress('빌라드지디 청담', function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            const container = document.getElementById('map');
            const options = {
                center: coords,
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
            const marker = new kakao.maps.Marker({
                position: coords,
                map: map
            });
        }
    });
}

function getKakaoMap2() {
    
    const mapContainer = document.getElementById('map');
    const mapOption = {
        center: new kakao.maps.LatLng(37.52052, 127.022581), // '빌라드지디 청담'의 위도, 경도
        level: 3 // 지도 확대 레벨
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const markerPosition = new kakao.maps.LatLng(37.52052, 127.022581);

    // 마커 표시
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커 지도에 추가
    marker.setMap(map);
}

// 페이지가 로드될 때 D-N Day 표시
window.onload = function() {
    displayDday();

    // 매 초마다 갱신되도록 설정
    setInterval(displayDday, 1000);
    getKakaoMap2();
    //getKakaoMap();
};