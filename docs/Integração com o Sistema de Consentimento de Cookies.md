## Integração com o Sistema de Consentimento de Cookies
### Introdução

Esta documentação descreve como usar o módulo `DataCollector.js` para gerenciar o consentimento de cookies em seu projeto. O módulo fornece uma função para obter dados de consentimento e permite que você controle a coleta de dados com base nas preferências dos usuários.

---

#### Função `getConsentData`

A função `getConsentData` é usada para obter os dados de consentimento do usuário em relação aos cookies. Esta função retorna um objeto contendo valores booleanos que indicam se o consentimento foi dado para diferentes tipos de dados.

##### Exemplo de Código


```js
import { getConsentData } from './DataCollector.js';  const consentData = getConsentData();`
```
##### Dados Retornados

- `consentData.functional`: `true` se o usuário consentiu com a coleta de dados funcionais, `false` caso contrário.
- `consentData.statistics`: `true` se o usuário consentiu com a coleta de dados estatísticos, `false` caso contrário.
- `consentData.marketing`: `true` se o usuário consentiu com a coleta de dados de marketing, `false` caso contrário.

---

#### Utilização dos Dados de Consentimento

Com base nos dados de consentimento retornados, você pode decidir iniciar ou parar a coleta de dados. Abaixo estão exemplos de como fazer isso:

##### Exemplo de Implementação
```js
if (consentData.functional) {     
startFunctionalDataCollection(); 
} else {     
stopFunctionalDataCollection(); 
}  

if (consentData.statistics) 
{    
startStatisticsDataCollection(); 
} else {     
stopStatisticsDataCollection(); 
}  

if (consentData.marketing) {   
startMarketingDataCollection(); 
} else {    
stopMarketingDataCollection(); 
}
```


##### Definição das Funções de Coleta

Você deve definir suas próprias funções para iniciar e parar a coleta de dados de acordo com suas necessidades. Veja exemplos abaixo:

```js
function startFunctionalDataCollection() {
    console.log('Coleta de dados funcionais iniciada.');
    // Código para iniciar a coleta de dados funcionais
}

function stopFunctionalDataCollection() {
    console.log('Coleta de dados funcionais parada.');
    // Código para parar a coleta de dados funcionais
}

function startStatisticsDataCollection() {
    console.log('Coleta de dados estatísticos iniciada.');
    // Código para iniciar a coleta de dados estatísticos
}

function stopStatisticsDataCollection() {
    console.log('Coleta de dados estatísticos parada.');
    // Código para parar a coleta de dados estatísticos
}

function startMarketingDataCollection() {
    console.log('Coleta de dados de marketing iniciada.');
    // Código para iniciar a coleta de dados de marketing
}

function stopMarketingDataCollection() {
    console.log('Coleta de dados de marketing parada.');
    // Código para parar a coleta de dados de marketing
}
```
