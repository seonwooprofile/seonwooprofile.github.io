// 갤러리 이미지 데이터
const galleryImages = [
    // 일상
    { src: '이선우 에셋/seonwoo_drinking_coffee.jpg', title: '커피 마시는 선우', category: 'daily' },
    { src: '이선우 에셋/seonwoo_talking_on_sofa.jpg', title: '소파에서 대화', category: 'daily' },
    { src: '이선우 에셋/seonwoo_watching_phone_with_cat.jpg', title: '고양이와 함께', category: 'daily' },
    { src: '이선우 에셋/seonwoo_falling_asleep.jpg', title: '잠드는 모습', category: 'daily' },
    { src: '이선우 에셋/seonwoo_after_shower.jpg', title: '샤워 후', category: 'daily' },
    { src: '이선우 에셋/seonwoo_taking_off_shirt.jpg', title: '셔츠를 벗는 모습', category: 'daily' },
    { src: '이선우 에셋/seonwoo_unbuttoning_shirt.jpg', title: '셔츠 단추를 푸는 모습', category: 'daily' },
    
    // 로맨틱
    { src: '이선우 에셋/seonwoo_kitchen_hug_in_sunset.jpg', title: '석양의 부엌 포옹', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_kitchen_backhug.jpg', title: '부엌 백허그', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_back_hug.jpg', title: '백허그', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_hug.jpg', title: '포옹', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_hand_kiss.jpg', title: '손등 키스', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_holding_hands_on_stairs.jpg', title: '계단에서 손잡기', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_covering_with_umbrella.jpg', title: '우산을 씌워주는 모습', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_wet_holding_umbrella.jpg', title: '비에 젖은 모습', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_playfully_petting_head.jpg', title: '머리 쓰다듬기', category: 'romantic' },
    { src: '이선우 에셋/seonwoo_resting_on_lap_pillow.jpg', title: '무릎베개', category: 'romantic' },
    
    // 감정
    { src: '이선우 에셋/seonwoo_shy.jpg', title: '수줍은 모습', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_tears.jpg', title: '눈물', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_drunk.jpg', title: '취한 모습', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_jealousy.jpg', title: '질투하는 모습', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_irritation.jpg', title: '짜증내는 모습', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_nagging.jpg', title: '잔소리하는 모습', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_pouting.jpg', title: '삐진 모습', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_silence_after_confession.jpg', title: '고백 후 침묵', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_approaching_and_talking.jpg', title: '다가와서 말하는 모습', category: 'emotional' },
    { src: '이선우 에셋/seonwoo_messy_face_with_bruise_after_fight.jpg', title: '싸움 후 상처', category: 'emotional' },
    
    // 친밀함
    { src: '이선우 에셋/seonwoo_passionate_kiss.jpg', title: '열정적인 키스', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_deepening_kiss.jpg', title: '깊어지는 키스', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_shaky_kiss.jpg', title: '떨리는 키스', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_breathless_after_kiss.jpg', title: '키스 후 숨가쁜 모습', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_kabedon.jpg', title: '카베동', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_hand_grab_after_pinning_to_wall.jpg', title: '벽에 밀착', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_bed_in_evening_glow.jpg', title: '저녁 노을의 침대', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_blush_on_bed.jpg', title: '침대에서 수줍은 모습', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_smile_on_bed.jpg', title: '침대에서 미소', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_bodies_on_bed.jpg', title: '침대에서의 모습', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_pull_wrist_on_bed.jpg', title: '손목을 잡는 모습', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_leaning_in_shirtless.jpg', title: '상의 탈의 후 기댄 모습', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_leans_into_touch.jpg', title: '손길에 기대는 모습', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_looking_up_from_below.jpg', title: '아래에서 올려다보는 모습', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_guiding_to_touch_his_bulge.jpg', title: '손을 이끄는 모습', category: 'intimate' },
    
    // NSFW 이미지들 (친밀함 카테고리에 포함)
    { src: '이선우 에셋/seonwoo_nsfw_bl_before_oral.jpg', title: '친밀한 순간 1', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_bottom_seonwoo_sex_scene.jpg', title: '친밀한 순간 2', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_dog_cosplay.jpg', title: '특별한 모습', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_doggy_penetration.jpg', title: '친밀한 순간 3', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_explicit_lubrication_on_bed.jpg', title: '친밀한 순간 4', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_hl_cunnilingus.jpg', title: '친밀한 순간 5', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_kissing_grinding_cock.jpg', title: '친밀한 순간 6', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_missionary_pleasure.jpg', title: '친밀한 순간 7', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_orgasm_expression_closeup.jpg', title: '절정의 표정', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_sex_ejaculation.jpg', title: '친밀한 순간 8', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_sex_rough_penetration.jpg', title: '친밀한 순간 9', category: 'intimate' },
    { src: '이선우 에셋/seonwoo_nsfw_undressing_mounting.jpg', title: '친밀한 순간 10', category: 'intimate' }
];

// DOM 요소들
const loader = document.getElementById('loader');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.querySelector('.gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

// 로더 숨기기
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hide');
    }, 1500);
});

// 음악 플레이어
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.classList.add('playing');
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    }
});

// 네비게이션 토글 (모바일)
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 탭 기능
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // 모든 탭 버튼과 패널 비활성화
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // 클릭한 탭 활성화
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// 갤러리 초기화
function initGallery() {
    galleryGrid.innerHTML = '';
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${image.category}`;
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}" data-index="${index}">
            <div class="gallery-item-overlay">
                <h3 class="gallery-item-title">${image.title}</h3>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
        
        // 클릭 이벤트
        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

// 갤러리 필터링
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // 버튼 활성화 상태 변경
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 갤러리 아이템 필터링
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

// 라이트박스 열기
function openLightbox(index) {
    const image = galleryImages[index];
    lightboxImage.src = image.src;
    lightboxCaption.textContent = image.title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 라이트박스 닫기
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ESC 키로 라이트박스 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// fade-in 요소들 관찰
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// 헤더 스크롤 효과
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 248, 240, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(139, 111, 71, 0.15)';
    } else {
        header.style.background = 'rgba(255, 248, 240, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(139, 111, 71, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 초기화
initGallery(); 