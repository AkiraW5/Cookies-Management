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

## Licença

O plugin é distribuído sob a Licença de Uso Restrito - Versão Adaptada da Licença Apache 2.0. Leia o arquivo `LICENSE` para obter todos os detalhes sobre os direitos e restrições associados ao uso do plugin.

**Resumo da Licença:**

- **Uso Permitido:** Apenas para fins pessoais e não comerciais, a menos que autorizado expressamente.
- **Autorização Comercial:** O uso comercial é permitido desde que o autor autorize a usar para no máximo um projeto por empresa. Para mais projetos, é necessária nova autorização.
- **Contribuições:** Contribuições são bem-vindas e concedem ao autor uma licença não exclusiva e mundial para utilização e distribuição.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir com melhorias ou correções, siga estas etapas:

1. **Fork o Repositório**
2. **Crie uma Branch para sua Feature ou Correção**
3. **Submeta um Pull Request**

Certifique-se de seguir as diretrizes de contribuição e manter o código conforme o estilo do projeto.

## Contato

Para perguntas, permissões adicionais ou contribuições, entre em contato com Felipe Benedito Rodrigues pelo e-mail p16195372@gmail.com ou visite [https://github.com/AkiraW5](https://github.com/AkiraW5).

## Atribuição

Ao compartilhar o material, você deve fornecer a atribuição adequada, incluir um link para a licença e indicar se foram feitas alterações. A atribuição deve ser feita de maneira razoável, sem sugerir que o detentor dos direitos autorais endosse ou apoie você ou o uso que você faz do material.