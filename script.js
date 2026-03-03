/**
 * Lopes e Szaz - Advogados Associados
 * Script principal do site
 */

// ========================================
// CONFIGURAÇÕES E CONSTANTES
// ========================================

const CONFIG = {
    lazyLoadRootMargin: '50px',
    scrollDebounceDelay: 100,
    navbarScrollThreshold: 10
};

// ========================================
// UTILITÁRIOS
// ========================================

/**
 * Debounce function para otimizar eventos de scroll
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Verifica se um elemento está visível no viewport
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// MENU MOBILE
// ========================================

/**
 * Controla o menu hamburguer mobile
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarLinks = document.getElementById('navbar-links');
    const navLinks = navbarLinks.querySelectorAll('.nav-link');

    if (!menuToggle || !navbarLinks) return;

    // Toggle menu ao clicar no botão
    menuToggle.addEventListener('click', () => {
        const isActive = navbarLinks.classList.contains('active');

        navbarLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', !isActive);
        menuToggle.setAttribute('aria-label', isActive ? 'Abrir menu' : 'Fechar menu');

        // Bloquear scroll do body quando menu aberto
        document.body.style.overflow = isActive ? '' : 'hidden';
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
            document.body.style.overflow = '';
        });
    });

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth >= 768) {
            navbarLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }, 250));
}

// ========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ========================================

function initSmoothScroll() {
    // Seleciona todos os links que começam com #
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignora links vazios ou apenas #
            if (!href || href === '#') return;

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                // Calcula a posição considerando a altura do navbar
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                // Faz o scroll suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Atualiza a URL sem recarregar a página
                if (history.pushState) {
                    history.pushState(null, null, href);
                }

                // Move o foco para o elemento alvo (acessibilidade)
                targetElement.focus({ preventScroll: true });
            }
        });
    });
}

// ========================================
// NAVBAR STICKY COM SHADOW AO SCROLL
// ========================================

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = debounce(() => {
        if (window.scrollY > CONFIG.navbarScrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, CONFIG.scrollDebounceDelay);

    window.addEventListener('scroll', handleScroll);

    // Verifica o estado inicial
    handleScroll();
}

// ========================================
// LAZY LOADING DE IMAGENS
// ========================================

function initLazyLoading() {
    // Verifica se o navegador suporta Intersection Observer
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Carrega a imagem
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }

                    // Adiciona classe quando carregada
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });

                    // Para de observar esta imagem
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: CONFIG.lazyLoadRootMargin
        });

        // Observa todas as imagens com loading="lazy"
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback para navegadores sem suporte
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.classList.add('loaded');
        });
    }
}

// ========================================
// ATUALIZAR ANO ATUAL NO FOOTER
// ========================================

function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}

// ========================================
// ANALYTICS (PLACEHOLDER)
// ========================================

function initAnalytics() {
    // Placeholder para Google Analytics ou outra ferramenta
    // Descomente e configure quando necessário

    /*
    // Exemplo: Google Analytics 4
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
    */

    // Tracking de cliques em CTAs importantes
    const ctaButtons = document.querySelectorAll('.btn-whatsapp, .floating-whatsapp');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Exemplo de evento personalizado
            console.log('CTA WhatsApp clicado');

            // Se estiver usando Google Analytics:
            // gtag('event', 'click', {
            //   'event_category': 'CTA',
            //   'event_label': 'WhatsApp Button'
            // });
        });
    });
}

// ========================================
// ACESSIBILIDADE - SKIP TO CONTENT
// ========================================

function initAccessibility() {
    // Adiciona link "Pular para o conteúdo" para leitores de tela
    const skipLink = document.createElement('a');
    skipLink.href = '#services';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.style.cssText = `
    position: absolute;
    left: -9999px;
    z-index: 999;
    padding: 1em;
    background-color: var(--brown);
    color: white;
    text-decoration: none;
  `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.left = '0';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ========================================
// DETECÇÃO DE PREFERÊNCIA DE MOVIMENTO REDUZIDO
// ========================================

function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Desabilita animações se o usuário preferir movimento reduzido
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-normal', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
    }
}

// ========================================
// FAQ ACCORDION
// ========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// ========================================
// PERFORMANCE MONITORING (OPCIONAL)
// ========================================

function logPerformanceMetrics() {
    if ('performance' in window && 'getEntriesByType' in performance) {
        window.addEventListener('load', () => {
            // Aguarda um pouco para garantir que todas as métricas estejam disponíveis
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];

                if (perfData) {
                    console.log('📊 Performance Metrics:');
                    console.log(`⏱️  DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
                    console.log(`⏱️  Load Complete: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
                    console.log(`⏱️  Total Page Load: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
                }

                // Core Web Vitals (se disponível)
                if ('PerformanceObserver' in window) {
                    try {
                        // Largest Contentful Paint (LCP)
                        new PerformanceObserver((list) => {
                            const entries = list.getEntries();
                            const lastEntry = entries[entries.length - 1];
                            console.log(`🎨 LCP: ${Math.round(lastEntry.renderTime || lastEntry.loadTime)}ms`);
                        }).observe({ entryTypes: ['largest-contentful-paint'] });

                        // First Input Delay (FID)
                        new PerformanceObserver((list) => {
                            const entries = list.getEntries();
                            entries.forEach(entry => {
                                console.log(`⚡ FID: ${Math.round(entry.processingStart - entry.startTime)}ms`);
                            });
                        }).observe({ entryTypes: ['first-input'] });
                    } catch (e) {
                        // Navegador não suporta essas métricas
                    }
                }
            }, 0);
        });
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

function init() {
    // Aguarda o DOM estar completamente carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }
}

function initializeApp() {
    console.log('🚀 Lopes e Szaz - Site inicializado');

    // Inicializa todas as funcionalidades
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initLazyLoading();
    updateCurrentYear();
    initAnalytics();
    initAccessibility();
    checkReducedMotion();
    initContactForm(); // Inicializa formulário de contato

    // Performance monitoring (apenas em desenvolvimento)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        logPerformanceMetrics();
    }

    console.log('✅ Todas as funcionalidades carregadas');
}

// Inicia a aplicação
init();

// ========================================
// SERVICE WORKER (OPCIONAL - PWA)
// ========================================

// Descomente para habilitar Service Worker e transformar em PWA
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('✅ Service Worker registrado:', registration);
      })
      .catch(error => {
        console.log('❌ Erro ao registrar Service Worker:', error);
      });
  });
}
*/


// ========================================
// FORMULÁRIO DE CONTATO - WHATSAPP
// ========================================

/**
 * Aplica máscara de telefone brasileiro
 */
function phoneMask(value) {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
}

/**
 * Inicializa o formulário de contato
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const phoneInput = document.getElementById('contact-phone');

    if (!form) return;

    // Aplica máscara no campo de telefone
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = phoneMask(e.target.value);
        });
    }

    // Processa envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Coleta dados do formulário
        const formData = {
            name: document.getElementById('contact-name').value.trim(),
            phone: document.getElementById('contact-phone').value.trim(),
            email: document.getElementById('contact-email').value.trim(),
            service: document.getElementById('contact-service').value,
            message: document.getElementById('contact-message').value.trim()
        };

        // Valida campos obrigatórios
        if (!formData.name || !formData.phone || !formData.service) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Formata mensagem para WhatsApp
        const whatsappMessage = `Olá! Gostaria de agendar uma consulta.

*Nome:*
${formData.name}

*Telefone:*
${formData.phone}

*Email:*
${formData.email || 'Não informado'}

*Serviço de interesse:*
${formData.service}

*Mensagem:*
${formData.message || 'Não informado'}`;

        // Número do WhatsApp (sem caracteres especiais)
        const whatsappNumber = '5521995743558';

        // Cria URL do WhatsApp com mensagem pré-formatada
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Redireciona para WhatsApp
        window.open(whatsappURL, '_blank');

        // Opcional: Limpa o formulário após envio
        // form.reset();
    });
}

// ========================================
// EXPORTAÇÕES (PARA TESTES)
// ========================================

// Se estiver usando módulos ES6, descomente:
// export { initSmoothScroll, initNavbarScroll, initLazyLoading, initContactForm };
