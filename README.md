# Nome do Projeto

Descrição do projeto

## Requisitos

- Node.js v20.x

## Scripts

- `npm run dev`: Inicia o servidor em modo de desenvolvimento
- `npm run build`: Compila o projeto
- `npm run start`: Inicia o servidor em modo de produção

## Dependências

- @prisma/client v5.8.1
- fastify v4.25.2
- zod v3.22.4

## Dependências de Desenvolvimento

- @types/node v20.11.5
- prisma v5.8.1
- tsup v8.0.1
- tsx v4.7.0
- typescript v5.3.3

## Licença

ISC

## Observações

Quando executamos o script `npm run dev`, usamos a flag `--env-file .env`. Esta flag permite que o Node.js leia as variáveis de ambiente do arquivo `.env`. Esta funcionalidade está disponível apenas para versões do Node.js 20.x ou superiores.