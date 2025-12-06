/* ============================================
   名侦探作业帮 - JavaScript 脚本
   ============================================ */

// ========== 创建星星 ==========
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';

        // 随机大小
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        starsContainer.appendChild(star);
    }
}

// ========== 创建粒子 ==========
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const symbols = ['🔍', '❓', '💡', '⚛️', '🧪', '📐', '✨', '🎯'];
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.fontSize = (Math.random() * 15 + 15) + 'px';

        particlesContainer.appendChild(particle);
    }
}

// ========== 切换学科 ==========
let currentSubject = 'physics';

function switchTab(subject) {
    if (currentSubject === subject) return;
    currentSubject = subject;

    const btnPhy = document.getElementById('btnPhysics');
    const btnChem = document.getElementById('btnChemistry');
    const submitBtn = document.getElementById('submitBtn');
    const inputArea = document.getElementById('problemInput');
    const mainCard = document.getElementById('mainCard');

    if (subject === 'physics') {
        // 物理模式
        btnPhy.className = 'tab-btn flex-1 py-5 text-center font-bold transition-all duration-300 flex items-center justify-center gap-3 tab-active-phy';
        btnChem.className = 'tab-btn flex-1 py-5 text-center font-bold transition-all duration-300 flex items-center justify-center gap-3 tab-inactive';

        submitBtn.classList.remove('chem-mode');
        inputArea.classList.remove('chem-mode');
        mainCard.classList.remove('glow-border-red');
        mainCard.classList.add('glow-border-blue');

        // 更新粒子颜色主题
        updateParticleTheme('physics');

    } else {
        // 化学模式
        btnChem.className = 'tab-btn flex-1 py-5 text-center font-bold transition-all duration-300 flex items-center justify-center gap-3 tab-active-chem';
        btnPhy.className = 'tab-btn flex-1 py-5 text-center font-bold transition-all duration-300 flex items-center justify-center gap-3 tab-inactive';

        submitBtn.classList.add('chem-mode');
        inputArea.classList.add('chem-mode');
        mainCard.classList.remove('glow-border-blue');
        mainCard.classList.add('glow-border-red');

        // 更新粒子颜色主题
        updateParticleTheme('chemistry');
    }

    // 添加切换动画效果
    mainCard.style.animation = 'none';
    mainCard.offsetHeight; // 触发重排
    mainCard.style.animation = 'glow-pulse 4s ease-in-out infinite';
}

// ========== 更新粒子主题 ==========
function updateParticleTheme(theme) {
    const particles = document.querySelectorAll('.particle');
    const physicsSymbols = ['🔍', '❓', '💡', '⚛️', '📐', '🎯', '⚡', '🌟'];
    const chemistrySymbols = ['🧪', '⚗️', '🔬', '💊', '🧬', '💥', '🌡️', '✨'];

    particles.forEach(particle => {
        const symbols = theme === 'physics' ? physicsSymbols : chemistrySymbols;
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    });
}

// ========== 图片预览 ==========
function previewImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('imgPreview').src = e.target.result;
            document.getElementById('previewContainer').classList.remove('hidden');
            document.getElementById('uploadHint').classList.add('hidden');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// ========== 清除图片 ==========
function clearImage() {
    document.getElementById('previewContainer').classList.add('hidden');
    document.getElementById('uploadHint').classList.remove('hidden');
    // 清除input的值
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createParticles();
});
