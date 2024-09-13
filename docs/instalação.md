## Guia de Instalação e Configuração do Plugin de Gerenciamento de Cookies

### 1. Requisitos

- **Biblioteca de Cookies**: Certifique-se de que a biblioteca `js-cookie` está incluída no projeto para gerenciar cookies. Se não estiver, você pode adicionar a biblioteca seguindo as instruções na seção [Instalação da Biblioteca de Cookies](https://github.com/js-cookie/js-cookie).

### 2. Instalação

1. **Baixar o Plugin**:
    
    - Baixe o arquivo do plugin contendo os arquivos HTML, CSS e JavaScript. 
2. **Adicionar os Arquivos ao Projeto**:
    
    - Extraia os arquivos do plugin e adicione-os ao diretório do seu projeto. Os arquivos principais incluem:
        - `index.html` 
        - `style.css`
        - `cookie-management.js`
    - Certifique-se de que esses arquivos estão localizados nas pastas corretas do seu projeto.
3. **Integrar o CSS e o JavaScript no HTML**:
    
    - No arquivo HTML, adicione links para o arquivo CSS e o script JavaScript. O exemplo abaixo mostra como incluir esses arquivos:
		
```HTML
<!DOCTYPE html> 
<html lang="pt-BR"> 
<head>     
	<meta charset="UTF-8">     
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Meu Site</title>    
	<link rel="stylesheet" href="path/to/style.css">     
	<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js"></script>     
	<script src="path/to/cookie-management.js" defer></script>
</head> 
<body>     
	<!-- Conteúdo da página --> 
</body>
</html>
```

### 3. Configuração

1. **Configuração de Cookies**:
    
    - No arquivo `cookie-management.js`, você pode ajustar as configurações do plugin de cookies, como a duração dos cookies e as preferências padrão.
2. **Definir Tempo de Expiração do Pop-up**:
    
    - A variável `popupExpiryDays` define o número de dias após o qual o pop-up de cookies será mostrado novamente. Modifique este valor conforme necessário:
        
```javascript
const popupExpiryDays = 0; // Define o tempo de expiração do pop-up em dias
```

### 4. Testes

- **Teste de Aceitação e Rejeição de Cookies**:
    
    - Acesse o site e verifique se o pop-up de cookies aparece na página inicial. Teste os botões "Aceitar Todos" e "Rejeitar Todos" para garantir que os cookies sejam definidos ou removidos conforme esperado.
- **Teste das Configurações**:
    
    - Abra o modal de configurações e ajuste as preferências dos cookies. Certifique-se de que as configurações são salvas corretamente e que o pop-up não reaparece indevidamente.
- **Verificação no Navegador**:
    
    - Teste o plugin em diferentes navegadores para garantir que a funcionalidade e o design sejam consistentes em todos os ambientes.