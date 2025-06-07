 // Typing Effect
        const phrases = [
            "incríveis e interativas",
            "modernas e responsivas", 
            "otimizadas e funcionais",
            "inovadoras e acessíveis"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typedElement = document.getElementById('typed-text');

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        // Matrix Effect
        function createMatrixEffect() {
            const matrix = document.getElementById('matrix');
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            
            function createChar() {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                char.style.left = Math.random() * 100 + 'vw';
                char.style.animationDuration = (Math.random() * 3 + 2) + 's';
                matrix.appendChild(char);

                setTimeout(() => {
                    char.remove();
                }, 5000);
            }

            setInterval(createChar, 200);
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            type();
            createMatrixEffect();
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Retornarei em breve.');
        });


  document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Coloque aqui o seu número do WhatsApp no formato internacional
    const numeroWhatsApp = '553197119388'; // Exemplo: 55 (Brasil) + 31 (DDD) + número

    const texto = `Olá, meu nome é ${nome} ${mensagem}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  });

