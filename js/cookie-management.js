// cookie-management.js
// Função para obter os dados de consentimento
export function getConsentData() {
    if (typeof Cookies !== 'undefined') {
        return {
            functional: Cookies.get('cookies-functional') === 'true',
            statistics: Cookies.get('cookies-statistics') === 'true',
            marketing: Cookies.get('cookies-marketing') === 'true'
        };
    } else {
        console.error('Cookies library not loaded.');
        return null;
    }
}

export const exportConsentData = () => {
    if (typeof Cookies !== 'undefined') {
        window.cookieConsentData = {
            accepted: Cookies.get('cookies-accepted') === 'true',
            rejected: Cookies.get('cookies-rejected') === 'true',
            functional: Cookies.get('cookies-functional') === 'true',
            statistics: Cookies.get('cookies-statistics') === 'true',
            marketing: Cookies.get('cookies-marketing') === 'true',
            mandatory: Cookies.get('cookies-mandatory') === 'true'
        };
        console.log('Dados de consentimento exportados:', window.cookieConsentData);
    } else {
        console.error('Cookies library not loaded.');
    }
};


// Função para definir os dados de consentimento
export function setCookieConsentData(data) {
    window.cookieConsentData = data;
    // Disparar evento para notificar sobre a mudança de consentimento
    const event = new CustomEvent('cookieConsentChanged', { detail: data });
    document.dispatchEvent(event);
}

// Função para definir dados iniciais de consentimento
export function setInitialCookieConsentData() {
    setCookieConsentData({
        mandatory: true,
        functional: true,
        statistics: true,
        marketing: true
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cookiePopup = document.getElementById('cookie-popup');
    const cookieSettingsModal = document.getElementById('cookie-settings-modal');
    
    setInitialCookieConsentData();

    if (!cookieSettingsModal) {
        console.error('Elemento cookie-settings-modal não encontrado.');
        return;
    }

    const acceptAllBtn = document.getElementById('accept-all');
    const rejectAllBtn = document.getElementById('reject-all');
    const cookieSettingsBtn = document.getElementById('cookie-settings');
    const saveSettingsBtn = document.getElementById('save-settings');
    const closeSettingsBtn = document.getElementById('close-settings');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const functionalCookiesCheckbox = document.getElementById('functional-cookies-checkbox');
    const statisticsCookiesCheckbox = document.getElementById('statistics-cookies-checkbox');
    const marketingCookiesCheckbox = document.getElementById('marketing-cookies-checkbox');

    const popupShownTimestampKey = 'cookie-popup-shown-timestamp';
    const popupExpiryDays = 1; // Define o tempo de expiração do pop-up em dias

    // Função para verificar se o pop-up deve ser exibido
    const shouldShowCookiePopup = () => {
        const popupShownTimestamp = localStorage.getItem(popupShownTimestampKey);
        const currentTime = new Date().getTime();
        const expiryTime = popupExpiryDays * 24 * 60 * 60 * 1000;

        console.log(`Última modificação do pop-up: ${popupShownTimestamp ? new Date(parseInt(popupShownTimestamp)).toLocaleString() : 'Nunca'}`);
        console.log(`Hora atual: ${new Date(currentTime).toLocaleString()}`);

        if (!popupShownTimestamp) {
            console.log('Pop-up nunca mostrado antes. Deve ser exibido.');
            return true; // Mostre o pop-up se o timestamp não existir
        }

        const showPopup = (currentTime - popupShownTimestamp) > expiryTime;
        console.log(`Deve mostrar o pop-up? ${showPopup}`);
        return showPopup;
    };

    // Função para esconder o pop-up
    const hideCookiePopup = () => {
        if (cookiePopup) {
            cookiePopup.style.display = 'none';
        }
    };

    // Função para mostrar o modal de configurações
    const showCookieSettingsModal = () => {
        if (cookieSettingsModal) {
            cookieSettingsModal.style.display = 'flex';
        } else {
            console.error('Elemento cookie-settings-modal não encontrado.');
        }
    };

    // Função para esconder o modal de configurações
    const hideCookieSettingsModal = () => {
        if (cookieSettingsModal) {
            cookieSettingsModal.style.display = 'none';
        }
    };
    
    // Função para inicializar o estado dos checkboxes com base nos cookies
    const initializeCheckboxes = () => {
        if (typeof Cookies !== 'undefined') {
            functionalCookiesCheckbox.checked = Cookies.get('cookies-functional') === 'true';
            statisticsCookiesCheckbox.checked = Cookies.get('cookies-statistics') === 'true';
            marketingCookiesCheckbox.checked = Cookies.get('cookies-marketing') === 'true';
        } else {
            console.error('Cookies library not loaded.');
        }
    };

    // Função para garantir que o cookie necessário esteja sempre ativo
    const ensureMandatoryCookiesActive = () => {
        if (typeof Cookies !== 'undefined') {
            Cookies.set('cookies-mandatory', 'true', { expires: 30 });
        } else {
            console.error('Cookies library not loaded.');
        }
    };

    // Função para coletar dados de cookies
    const collectData = (category) => {
        if (typeof Cookies !== 'undefined') {
            const data = {
                mandatory: Cookies.get('cookies-mandatory') === 'true',
                functional: Cookies.get('cookies-functional') === 'true',
                statistics: Cookies.get('cookies-statistics') === 'true',
                marketing: Cookies.get('cookies-marketing') === 'true'
            };
            console.log(`Dados coletados para ${category}:`, data);
        } else {
            console.error('Cookies library not loaded.');
        }
    };

    // Manipuladores de evento dos botões
    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', () => {
            if (typeof Cookies !== 'undefined') {
                Cookies.set('cookies-accepted', 'true', { expires: 30 });
                localStorage.setItem(popupShownTimestampKey, new Date().getTime());
                Cookies.set('cookies-mandatory', 'true', { expires: 30 });
                Cookies.set('cookies-functional', 'true', { expires: 30 });
                Cookies.set('cookies-statistics', 'true', { expires: 30 });
                Cookies.set('cookies-marketing', 'true', { expires: 30 });
                Cookies.remove('cookies-rejected');
                hideCookiePopup();
                collectData('Aceitar todos');
                console.log('Cookies aceitos.');
                exportConsentData();
            } else {
                console.error('Cookies library not loaded.');
            }
        });
    }

    if (rejectAllBtn) {
        rejectAllBtn.addEventListener('click', () => {
            if (typeof Cookies !== 'undefined') {
                Cookies.set('cookies-rejected', 'true', { expires: 30 });
                Cookies.remove('cookies-accepted');
                Cookies.remove('cookies-functional');
                Cookies.remove('cookies-statistics');
                Cookies.remove('cookies-marketing');
                Cookies.remove('cookies-mandatory');
                localStorage.setItem(popupShownTimestampKey, new Date().getTime());
                hideCookiePopup();
                collectData('Rejeitar todos');
                console.log('Cookies rejeitados.');
                exportConsentData();
            } else {
                console.error('Cookies library not loaded.');
            }
        });
    }

    if (cookieSettingsBtn) {
        cookieSettingsBtn.addEventListener('click', () => {
            showCookieSettingsModal();
        });
    }

    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            if (typeof Cookies !== 'undefined') {
                ensureMandatoryCookiesActive();
                Cookies.set('cookies-functional', functionalCookiesCheckbox.checked, { expires: 30 });
                Cookies.set('cookies-statistics', statisticsCookiesCheckbox.checked, { expires: 30 });
                Cookies.set('cookies-marketing', marketingCookiesCheckbox.checked, { expires: 30 });
                Cookies.remove('cookies-accepted');
                Cookies.remove('cookies-rejected');
                hideCookieSettingsModal();
                hideCookiePopup();
                collectData('Salvar configurações');
                console.log('Configurações salvas.');
                exportConsentData();
            } else {
                console.error('Cookies library not loaded.');
            }
        });
    }

    // Função para definir os dados de consentimento
    function setCookieConsentData(data) {
        window.cookieConsentData = data;
        // Disparar evento para notificar sobre a mudança de consentimento
        const event = new CustomEvent('cookieConsentChanged', { detail: data });
        document.dispatchEvent(event);
    };

    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', () => {
            hideCookieSettingsModal();
        });
    }

    // Funcionalidade das Abas
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

       // Mostrar o pop-up de cookies se necessário
    if (shouldShowCookiePopup()) {
        if (cookiePopup) {
            cookiePopup.style.display = 'block';
        }
    } else {
        hideCookiePopup();
    }


    // Inicializa os checkboxes
    initializeCheckboxes();
});
