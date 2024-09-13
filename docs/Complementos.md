## Testes e Depuração

### Testes Recomendados

1. **Teste de Aceitação de Cookies**: Clique no botão "Aceitar Todos" e verifique se todos os cookies são configurados corretamente e se o pop-up desaparece.
2. **Teste de Rejeição de Cookies**: Clique no botão "Rejeitar Todos" e verifique se os cookies opcionais são rejeitados e se o pop-up desaparece.
3. **Teste de Configurações Personalizadas**: Abra o modal de configurações, ajuste as preferências e salve. Verifique se as configurações são aplicadas corretamente e persistem após recarregar a página.

### Depuração

Use as ferramentas de desenvolvedor do navegador (F12) para inspecionar os elementos HTML e verificar os logs de console. Verifique a presença e o valor dos cookies e do `localStorage`.

## Compatibilidade e Suporte

### Compatibilidade

Este script foi testado nos seguintes navegadores:
- Google Chrome (versão 90+)
- Mozilla Firefox (versão 80+)
- Microsoft Edge (versão 90+)

### Documentação adicional

Para suporte adicional, consulte:
- [JS Cookie](https://github.com/js-cookie/js-cookie)

## Segurança e Privacidade

### Segurança

Certifique-se de que o script esteja hospedado em um ambiente seguro e que não introduza vulnerabilidades, como XSS ou CSRF. Verifique se todos os dados são tratados de forma segura.

### Privacidade

O script respeita as regulamentações de proteção de dados, como GDPR e LGPD. Apenas as preferências do usuário são armazenadas e são usadas exclusivamente para o propósito de gerenciar cookies.

## Personalização e Extensibilidade

### Personalização

Para personalizar o estilo do pop-up e do modal, edite o CSS associado. Exemplo de personalização:

```css
#cookiePopup {
    background-color: #333;
    color: #fff;
}
```
### Extensibilidade

Para adicionar novas categorias de cookies ou funcionalidades:

1. Adicione novos checkboxes no HTML.
2. Atualize a lógica de JavaScript para lidar com esses novos tipos de cookies.
3. Modifique a coleta de dados para incluir novas categorias.

## Exemplos de Uso

### Integração

Para integrar o script em um projeto existente, inclua o código JavaScript e HTML no seu projeto e ajuste os IDs dos elementos para corresponder aos do seu site.
```html
<script src="path/to/cookie-management.js"></script>
```
Certifique-se de que o script seja carregado após o carregamento dos elementos HTML.

---
## Changelog e Atualizações

### Changelog

## [Unreleased]

### Adicionado
- **Segurança e Privacidade:** Adicionadas seções para segurança e conformidade com regulamentações de proteção de dados.
- **Personalização e Extensibilidade:** Adicionadas orientações para personalização e extensibilidade do script.
- **Testes e Depuração:** Adicionadas instruções para testar e depurar o script.
- **Exemplos de Uso:** Adicionada a seção com exemplos de integração do script.

#### [1.1.0] - 2024-09-13

### Adicionado
- **Manuseio de Abas no Modal:** Implementação das abas para configurações detalhadas de cookies.
- **Lógica de Exibição do Pop-up:** Pop-up de cookies agora só aparece na página inicial e respeita o tempo de expiração configurado.
- **Compatibilidade com Navegadores:** Melhorias na compatibilidade com navegadores.
### Corrigido
- **Erro na Variável não Definida:** Correção de variáveis não definidas (`functionalCookiesCheckbox`, `statisticsCookiesCheckbox`, `marketingCookiesCheckbox`).
- **Problema de Exibição do Pop-up:** Ajuste no código para garantir que o pop-up apareça corretamente na tela inicial e não seja exibido nas páginas internas.

#### [1.0.0] - 2024-09-09

### Adicionado
- **Pop-up de Consentimento:** Implementação inicial do pop-up de consentimento de cookies.
- **Modal de Configurações de Cookies:** Criação do modal para configurações detalhadas.
- **Botões de Controle:** Adicionados botões para aceitar todos, rejeitar todos, abrir configurações e salvar configurações.
- **Persistência de Dados:** Implementação do armazenamento de preferências de cookies no `localStorage`.

### Corrigido
- **Problema de Exibição do Pop-up:** Ajustes para garantir que o pop-up não apareça mais de uma vez dentro do período de expiração.
