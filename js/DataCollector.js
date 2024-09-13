// DataCollector.js

// Função para obter os dados de consentimento
export function getConsentData() {
    // Obtenha os dados de consentimento do localStorage ou cookies
    const consentData = {
        functional: localStorage.getItem('consent_functional') === 'true',
        statistics: localStorage.getItem('consent_statistics') === 'true',
        marketing: localStorage.getItem('consent_marketing') === 'true'
    };

    return consentData;
}