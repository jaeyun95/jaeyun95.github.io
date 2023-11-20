/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

/*
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
*/
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
        countdownElement.innerHTML = `D+${daysLeft}`;
    }
}

// 카카오 맵 가져오기
function getKakaoMap() {
    
    const mapContainer = document.getElementById('map');
    const mapOption = {
        center: new kakao.maps.LatLng(37.52020441860761, 127.05544016257608), // '빌라드지디 청담'의 위도, 경도
        level: 4 // 지도 확대 레벨
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    var imageSrc = '../assets/img/map_point.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.52020441860761, 127.05544016257608); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
    });

    // 마커 지도에 추가
    marker.setMap(map);

     // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
     var content = '<div class="customoverlay">' +
     '  <a href="https://place.map.kakao.com/1417946142" target="_blank">' +
     '    <span class="title">빌라드지디 청담</span>' +
     '  </a>' +
     '</div>';

     // 커스텀 오버레이가 표시될 위치입니다 
    var position = new kakao.maps.LatLng(37.52020441860761, 127.05544016257608);  

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        position: position,
        content: content,
        yAnchor: 1 });
}

// 링크 복사
function copyLink(){
	var url = 'https://jy-luv-ys.com';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("링크가 복사되었습니다. 널리널리 퍼뜨려주세요💕")
}

// 재윤 계좌번호 복사
function jaeyunAccountNumber(){
	var jaeyun_account = '3333029239052 카카오뱅크';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = jaeyun_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("이재윤의 계좌번호가 복사되었습니다.")
}

// 영석 계좌번호 복사
function yeongseokAccountNumber(){
	var yeongseok_account = '3333075790843 카카오뱅크';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = yeongseok_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("최영석의 계좌번호가 복사되었습니다.")
}

// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('6324846770cc3fff60e3982d062392ac');

    // SDK 초기화 여부를 판단합니다.
    console.log(Kakao.isInitialized());
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
        title: '재윤🤍영석',
        description: '2024.03.01 재윤🤍영석 결혼합니다.',
        imageUrl: 'https://github.com/jaeyun95/jaeyun95.github.io/blob/main/assets/img/url-main.jpg?raw=true',
        link: {
            mobileWebUrl: 'https://jy-luv-ys.com/#!',
            webUrl: 'https://jy-luv-ys.com/#!',
        },
        },
        buttons: [
        {
            title: '모바일 청첩장 보기',
            link: {
            mobileWebUrl: 'https://jy-luv-ys.com/#!',
            webUrl: 'https://jy-luv-ys.com/#!',
            },
        },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}

// 페이지가 로드될 때 D-N Day 표시
window.onload = function() {
    displayDday();

    // 매 초마다 갱신되도록 설정
    setInterval(displayDday, 1000);
    getKakaoMap();
};

