const sounds = [
    { name: "(2)첫 시작", file: "(2)첫 시작.mp3" },
    { name: "(3)거리", file: "(3)거리.mp3" },
    { name: "(4)1막 삐", file: "(4)1막 삐.mp3" },
    { name: "(5)알람", file: "(5)알람.mp3" },
    { name: "(6)벨소리", file: "(6)벨소리.mp3" },
    { name: "(7)거리-실험실", file: "(7)거리-실험실.mp3" },
    { name: "(8)기분 안좋아", file: "(8)기분 안좋아.mp3" },
    { name: "(9)1막 회상", file: "(9)1막 회상.mp3" },
    { name: "(10)에너지1", file: "(10)에너지1.mp3" },
    { name: "(11)에너지2", file: "(11)에너지2.mp3" },
    { name: "(12)에너지3", file: "(12)에너지3.mp3" },
    { name: "(13)버튼", file: "(13)버튼.mp3" },
    { name: "(14)경고음", file: "(14)경고음.mp3" },
    { name: "(15)치지직", file: "(15)치지직.mp3" },
    { name: "(16)잠시후", file: "(16)잠시후.MP3" },
    { name: "(17)타임머신 완성", file: "(17)타임머신 완성.mp3" },
    { name: "(18)위 독백", file: "(18)위 독백.mp3" },
    { name: "(19)타임머신-과거", file: "(19)타임머신-과거.mp3" },
    { name: "(20)쿠쿠루삥뽕", file: "(20)쿠쿠루삥뽕.MP3" },
    { name: "(21)쿠쿠루_삥뽕", file: "(21)쿠쿠루_삥뽕.mp3" },
    { name: "(22)쿠쿠루", file: "(22)쿠쿠루.MP3" },
    { name: "(23)삥뽕", file: "(23)삥뽕.MP3" },
    { name: "(24)잠깐 타임", file: "(24)잠깐 타임.mp3" },
    { name: "(25)아!", file: "(25)아!.mp3" },
    { name: "(26)삐끼삐끼", file: "(26)삐끼삐끼.MP3" },
    { name: "(27)NASA1", file: "(27)NASA1.mp3" },
    { name: "(28)NASA2-외소한1", file: "(28)NASA2-외소한1.mp3" },
    { name: "(29)외소한2", file: "(29)외소한2.mp3" },
    { name: "(30)외소한3", file: "(30)외소한3.mp3" },
    { name: "(31)외소한4", file: "(31)외소한4.mp3" },
    { name: "(32)외소한5", file: "(32)외소한5.mp3" },
    { name: "(33)외소한6", file: "(33)외소한6.mp3" },
    { name: "(34)외소한7", file: "(34)외소한7.mp3" },
    { name: "(35)외소한8", file: "(35)외소한8.mp3" },
    { name: "(36)문 두드리는 소리", file: "(36)문 두드리는 소리.mp3" },
    { name: "(37)국 압박", file: "(37)국 압박.mp3" },
    { name: "(38)시뮬레이션", file: "(38)시뮬레이션.mp3" },
    { name: "(39)어버이은혜", file: "(39)어버이은혜.mp3" },
    { name: "(40)침착해", file: "(40)침착해.mp3" },
    { name: "(41)짠짜라", file: "(41)짠짜라.mp3" },
    { name: "(42)패널조작잠금활성화", file: "(42)패널조작잠금활성화.mp3" },
    { name: "(43)기억삭제", file: "(43)기억삭제.mp3" },
    { name: "(44)카드키", file: "(44)카드키.mp3" },
    { name: "(45)시계탑", file: "(45)시계탑.mp3" },
    { name: "(46)40분 삐", file: "(46)40분 삐.mp3" },
    { name: "(47)국 절망", file: "(47)국 절망.mp3" },
    { name: "(48)패널이 잠겨있습니다", file: "(48)패널이 잠겨있습니다.mp3" },
    { name: "(49)쿠쿠루 죽음", file: "(49)쿠쿠루 죽음.mp3" },
    { name: "(50)쿠쿠루 미안", file: "(50)쿠쿠루 미안.mp3" },
    { name: "(51)메시지전송예약", file: "(51)메시지전송예약.mp3" },
    { name: "(52)제한시간1", file: "(52)제한시간1.mp3" },
    { name: "(53)제한시간2", file: "(53)제한시간2.mp3" },
    { name: "(54)메시지 도착", file: "(54)메시지 도착.mp3" },
    { name: "(55)예약 메시지", file: "(55)예약 메시지.mp3" },
    { name: "(56)위 절망", file: "(56)위 절망.mp3" },
    { name: "(57)소행성 충돌 해제", file: "(57)소행성 충돌 해제.mp3" },
    { name: "(58)종소리", file: "(58)종소리.mp3" },
    { name: "(59)국 고백", file: "(59)국 고백.mp3" },
    { name: "(60)커튼콜", file: "(60)커튼콜.mp3" }
];

const soundButtons = document.getElementById('soundButtons');

const audioElements = sounds.map(sound => {
    const audio = new Audio(sound.file);
    audio.loop = false;
    return audio;
});

function toggleSound(index) {
    const button = document.querySelectorAll('.play-button')[index];
    const icon = button.querySelector('i');
    const audio = audioElements[index];

    if (audio.paused) {
        audio.play();
        button.classList.add('playing');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        updateTimeline(index);
    } else {
        audio.pause();
        button.classList.remove('playing');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function updateTimeline(index) {
    const audio = audioElements[index];
    const timelineSlider = document.querySelectorAll('.timeline-slider')[index];
    const timeDisplay = document.querySelectorAll('.time-display')[index];

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const percentage = (currentTime / duration) * 100;
        timelineSlider.value = percentage;
        timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    });

    timelineSlider.addEventListener('input', () => {
        const time = audio.duration * (timelineSlider.value / 100);
        audio.currentTime = time;
    });
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function changeVolume(index, volume) {
    const normalizedVolume = volume / 100;  // 0-100 값을 0-1 범위로 정규화
    audioElements[index].volume = normalizedVolume;
    const volumeDisplay = document.querySelectorAll('.volume-display')[index];
    volumeDisplay.textContent = Math.round(volume);  // 반올림된 정수 값 표시
}

sounds.forEach((sound, index) => {
    const button = document.createElement('div');
    button.className = 'sound-button';
    button.innerHTML = `
        <div class="button-group">
            <button class="play-button" onclick="toggleSound(${index})">
                <i class="fas fa-play"></i>
            </button>
            <button class="refresh-button" onclick="refreshSound(${index})">
                <i class="fas fa-sync-alt"></i>
            </button>
        </div>
        <div class="sound-info">
            <span class="sound-name">${sound.name}</span>
    <div class="timeline-container">
        <div class="timeline-marks"></div>
            <div class="timeline">
                <input type="range" min="0" max="100" value="0" class="timeline-slider">
            </div>
                <span class="time-display">0:00 / 0:00</span>
                <button class="add-mark-button">+</button>
            </div>
        </div>
        <div class="volume-control">
            <input type="range" min="0" max="100" step="1" value="100" oninput="changeVolume(${index}, this.value)">
            <span class="volume-display">100</span>
        </div>
    `;
    document.querySelector('.container').appendChild(button);
});

function addTouchSupport() {
    const buttons = document.querySelectorAll('.play-button');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        });
    });
}

// 모든 버튼이 생성된 후에 이 함수를 호출해야 해
addTouchSupport();


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    
    // 다크모드 상태에 따라 메타 태그의 theme-color 변경
    const metaThemeColor = document.body.classList.contains('dark-mode') ? '#121212' : '#ffffff';
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    themeColorMeta.setAttribute('content', metaThemeColor);
}


// 페이지 로드 시 다크모드 상태 확인
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// 단축키 이벤트 리스너
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        toggleDarkMode();
    }
});

// 새로고침 함수
function refreshSound(index) {
    const audio = audioElements[index];
    audio.currentTime = 0;
    if (!audio.paused) {
        audio.pause();
        audio.play();
    }
    updateTimeline(index);
}

function addMark(index) {
    const audio = audioElements[index];
    const marksContainer = document.querySelectorAll('.timeline-marks')[index];
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;

    const mark = document.createElement('div');
    mark.className = 'timeline-mark';
    mark.style.left = `${percentage}%`;

    mark.addEventListener('click', (e) => {
        e.stopPropagation();
        removeMark(index, mark);
    });
    marksContainer.appendChild(mark);

    // 마크 정보 저장
    const marks = JSON.parse(localStorage.getItem(`marks-${index}`)) || [];
    marks.push({time: currentTime, position: percentage});
    localStorage.setItem(`marks-${index}`, JSON.stringify(marks));
}

function removeMark(index, markElement) {
    const marksContainer = document.querySelectorAll('.timeline-marks')[index];
    marksContainer.removeChild(markElement);

    // 저장된 마크 정보에서도 제거
    const marks = JSON.parse(localStorage.getItem(`marks-${index}`)) || [];
    const position = parseFloat(markElement.style.left);
    const updatedMarks = marks.filter(mark => Math.abs(mark.position - position) > 0.1);
    localStorage.setItem(`marks-${index}`, JSON.stringify(updatedMarks));
}

function loadMarks(index) {
    const marksContainer = document.querySelectorAll('.timeline-marks')[index];
    const marks = JSON.parse(localStorage.getItem(`marks-${index}`)) || [];
    
    marks.forEach(mark => {
        const markElement = document.createElement('div');
        markElement.className = 'timeline-mark';
        markElement.style.left = `${mark.position}%`;
        markElement.addEventListener('click', (e) => {
            e.stopPropagation();
            removeMark(index, markElement);
        });
        marksContainer.appendChild(markElement);
    });
}

// 페이지 로드 시 저장된 마크 불러오기
document.addEventListener('DOMContentLoaded', () => {
    audioElements.forEach((_, index) => {
        loadMarks(index);
    });

    // 마크 추가 버튼에 이벤트 리스너 연결
    document.querySelectorAll('.add-mark-button').forEach((button, index) => {
        button.addEventListener('click', () => addMark(index));
    });
});
