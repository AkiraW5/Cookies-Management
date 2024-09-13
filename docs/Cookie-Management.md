# Documentação do Script de Gerenciamento de Cookies

Este script gerencia a exibição e configuração de cookies em um site, incluindo um pop-up de consentimento de cookies e um modal para configurações detalhadas.

## Estrutura do Código

### Elementos HTML Referenciados

Os seguintes elementos HTML são utilizados pelo script para gerenciar a interface de consentimento de cookies:

- **cookiePopup**: Elemento HTML do pop-up que solicita o consentimento de cookies ao usuário.
- **cookieSettingsModal**: Modal que permite ao usuário configurar suas preferências de cookies detalhadamente.

#### Botões

Estes botões estão associados a diferentes ações relacionadas ao consentimento de cookies:

- **acceptAllBtn**: Botão que aceita todos os cookies.

    ```html
    <button id="acceptAllBtn">Aceitar Todos</button>
    ```
  
- **rejectAllBtn**: Botão que rejeita todos os cookies opcionais.

    ```html
    <button id="rejectAllBtn">Rejeitar Todos</button>
    ```

- **cookieSettingsBtn**: Botão para abrir o modal de configurações de cookies.

    ```html
    <button id="cookieSettingsBtn">Configurações de Cookies</button>
    ```

- **saveSettingsBtn**: Botão para salvar as preferências de cookies no modal de configurações.

    ```html
    <button id="saveSettingsBtn">Salvar Configurações</button>
    ```

- **closeSettingsBtn**: Botão para fechar o modal de configurações.

    ```html
    <button id="closeSettingsBtn">Fechar</button>
    ```

---
#### Elementos de Controle para Abas

- **tabButtons**: Conjunto de botões que controla a navegação entre as diferentes abas dentro do modal de configurações.

    ```html
    <button class="tab-button" data-target="functional">Funcionais</button>
    <button class="tab-button" data-target="statistics">Estatísticas</button>
    <button class="tab-button" data-target="marketing">Marketing</button>
    ```

- **tabContents**: Contém o conteúdo das abas no modal, sendo exibido apenas o conteúdo da aba ativa.

    ```html
    <div class="tab-content" id="functional">Conteúdo Funcional</div>
    <div class="tab-content" id="statistics">Conteúdo Estatísticas</div>
    <div class="tab-content" id="marketing">Conteúdo Marketing</div>
    ```

---
#### Checkboxes

Checkboxes que representam as preferências de consentimento para cada tipo de cookie:

- **functionalCookiesCheckbox**: Checkbox para consentimento de cookies funcionais.

    ```html
    <input type="checkbox" id="functionalCookiesCheckbox" />
    ```

- **statisticsCookiesCheckbox**: Checkbox para consentimento de cookies de estatísticas.

    ```html
    <input type="checkbox" id="statisticsCookiesCheckbox" />
    ```

- **marketingCookiesCheckbox**: Checkbox para consentimento de cookies de marketing.

    ```html
    <input type="checkbox" id="marketingCookiesCheckbox" />
    ```

---
### Variáveis

- **popupShownTimestampKey**: Chave usada no `localStorage` para armazenar o timestamp da última exibição do pop-up.

    ```javascript
    const popupShownTimestampKey = 'cookiePopupShownTimestamp';
    ```

- **popupExpiryDays**: Define o período (em dias) após o qual o pop-up será exibido novamente.

    ```javascript
    const popupExpiryDays = 7; // Exemplo: 7 dias
    ```

---
## Funções Principais

### shouldShowCookiePopup

Verifica se o pop-up de cookies deve ser exibido com base no timestamp armazenado no `localStorage`.

```javascript
function shouldShowCookiePopup() {
    const timestamp = localStorage.getItem(popupShownTimestampKey);
    if (!timestamp) return true;
    const lastShown = new Date(parseInt(timestamp, 10));
    const now = new Date();
    const diffDays = (now - lastShown) / (1000 * 60 * 60 * 24);
    return diffDays >= popupExpiryDays;
}
```
### hideCookiePopup

Esconde o pop-up de cookies definindo o estilo `display` como `none`.
```javascript
function hideCookiePopup() {
    const cookiePopup = document.getElementById('cookiePopup');
    cookiePopup.style.display = 'none';
}
```
### showCookieSettingsModal

Exibe o modal de configurações definindo o estilo `display` como `flex`.
```javascript
function showCookieSettingsModal() {
    const cookieSettingsModal = document.getElementById('cookieSettingsModal');
    cookieSettingsModal.style.display = 'flex';
}
```
### hideCookieSettingsModal

Esconde o modal de configurações definindo o estilo `display` como `none`.
```javascript
function hideCookieSettingsModal() {
    const cookieSettingsModal = document.getElementById('cookieSettingsModal');
    cookieSettingsModal.style.display = 'none';
}
```
### initializeCheckboxes

Inicializa o estado dos checkboxes com base nos cookies salvos.
```javascript
function initializeCheckboxes() {
    const functionalConsent = Cookies.get('functionalConsent') === 'true';
    const statisticsConsent = Cookies.get('statisticsConsent') === 'true';
    const marketingConsent = Cookies.get('marketingConsent') === 'true';

    document.getElementById('functionalCookiesCheckbox').checked = functionalConsent;
    document.getElementById('statisticsCookiesCheckbox').checked = statisticsConsent;
    document.getElementById('marketingCookiesCheckbox').checked = marketingConsent;
}
```
### ensureMandatoryCookiesActive

Garante que o cookie obrigatório esteja sempre ativo.
```javascript
function ensureMandatoryCookiesActive() {
    Cookies.set('mandatoryConsent', 'true', { expires: 30 });
}
```
### collectData

Coleta e exibe no console os dados de consentimento de cookies com base nas ações do usuário.
```javascript
function collectData() {
    const functionalConsent = document.getElementById('functionalCookiesCheckbox').checked;
    const statisticsConsent = document.getElementById('statisticsCookiesCheckbox').checked;
    const marketingConsent = document.getElementById('marketingCookiesCheckbox').checked;

    console.log({
        functionalConsent,
        statisticsConsent,
        marketingConsent
    });
}
```
---
## Manipulação de Eventos

### Botões de Consentimento

- **Aceitar Todos (`acceptAllBtn`)**: Aceita todos os cookies, armazena o timestamp da exibição do pop-up e coleta dados de consentimento.
```javascript
document.getElementById('acceptAllBtn').addEventListener('click', () => {
    Cookies.set('functionalConsent', 'true', { expires: 30 });
    Cookies.set('statisticsConsent', 'true', { expires: 30 });
    Cookies.set('marketingConsent', 'true', { expires: 30 });
    localStorage.setItem(popupShownTimestampKey, Date.now().toString());
    hideCookiePopup();
    collectData();
});
document.getElementById('acceptAllBtn').addEventListener('click', () => {
    Cookies.set('functionalConsent', 'true', { expires: 30 });
    Cookies.set('statisticsConsent', 'true', { expires: 30 });
    Cookies.set('marketingConsent', 'true', { expires: 30 });
    localStorage.setItem(popupShownTimestampKey, Date.now().toString());
    hideCookiePopup();
    collectData();
});
```
- **Rejeitar Todos (`rejectAllBtn`)**: Rejeita todos os cookies opcionais, armazena o timestamp da exibição do pop-up e coleta dados de consentimento.
```js
document.getElementById('rejectAllBtn').addEventListener('click', () => {
    Cookies.set('functionalConsent', 'false', { expires: 30 });
    Cookies.set('statisticsConsent', 'false', { expires: 30 });
    Cookies.set('marketingConsent', 'false', { expires: 30 });
    localStorage.setItem(popupShownTimestampKey, Date.now().toString());
    hideCookiePopup();
    collectData();
});
```
---
### Botões de Configuração

- **Abrir Configurações (`cookieSettingsBtn`)**: Exibe o modal de configurações.
```js
document.getElementById('cookieSettingsBtn').addEventListener('click', showCookieSettingsModal);
```
- **Salvar Configurações (`saveSettingsBtn`)**: Salva as configurações dos checkboxes, garante o cookie obrigatório e coleta dados de consentimento.
```js
document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    const functionalConsent = document.getElementById('functionalCookiesCheckbox').checked;
    const statisticsConsent = document.getElementById('statisticsCookiesCheckbox').checked;
    const marketingConsent = document.getElementById('marketingCookiesCheckbox').checked;

    Cookies.set('functionalConsent', functionalConsent, { expires: 30 });
    Cookies.set('statisticsConsent', statisticsConsent, { expires: 30 });
    Cookies.set('marketingConsent', marketingConsent, { expires: 30 });

    ensureMandatoryCookiesActive();
    collectData();
    hideCookieSettingsModal();
});
```
- **Fechar Configurações (`closeSettingsBtn`)**: Esconde o modal de configurações.
```js
document.getElementById('closeSettingsBtn').addEventListener('click', hideCookieSettingsModal);
```

---
### Funcionalidade das Abas

Os botões das abas alternam entre conteúdos correspondentes no modal, ativando o conteúdo associado ao botão clicado.
```js
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;

        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = content.id === target ? 'block' : 'none';
        });

        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.toggle('active', btn === button);
        });
    });
});
```

---
## Inicialização

- **Inicialização do Pop-up**: Exibe o pop-up de cookies apenas se for necessário.
```js
document.addEventListener('DOMContentLoaded', () => {
    if (shouldShowCookiePopup()) {
        document.getElementById('cookiePopup').style.display = 'block';
    }
});
```


