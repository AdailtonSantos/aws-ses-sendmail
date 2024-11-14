# Função de Envio de Emails com AWS SES

Esta função foi desenvolvida para o envio de emails utilizando o SES da AWS.

## Parâmetros da Função

- **from**: O remetente que irá enviar o email.
- **destination**: O destinatário que irá receber.
- **subject**: O assunto do email.
- **body**: O conteúdo do corpo do email, que nesta função precisa ser uma string comum.

> Para enviar HTML no corpo do email, basta substituir "Text" na linha 25 por "HTML".

## Dependências do npm

- `dotenv`
- `aws-sdk`

## Variáveis do dotenv

- `AWS_SECRET_KEY`
- `AWS_SECRET_ACCESS_KEY`
