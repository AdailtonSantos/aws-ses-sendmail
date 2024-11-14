Função desenvolvida para envio de emails utilizando o SES da AWS.
Na função são passados os parâmetros

from: O remetende que irá enviar o email
destination: O destinatário que irá receber
subject: O assunto do email
body: O conteúdo do corpo do email, que nesta função precisa ser uma string comum.

Para enviar html no corpo do email, basta substituir o "Text" na linha 25 por "HTML".

## Dependências do npm:
Dotenv
aws-sdk

## Variáveis do dotenv:
AWS_SECRET_KEY
AWS_SECRET_ACCESS_KEY
