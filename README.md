# Fastify com Prisma e Deploy na Render

Servidor Node.js simples com Fastify e Prisma ORM prepadaros para deploy na plataforma [Render](https://render.com/)

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

Ao executar o script `npm run dev`, será usada a flag `--env-file .env`. Esta flag permite que o Node.js leia as variáveis de ambiente do arquivo `.env` (funcionalidade está disponível para versões do Node.js 20.x ou superiores).

O banco utilizado dentro do servidor do Render é o PostgreSQL. Para testes locais aconselho rodar uma imagem Docker desse banco, setar a env de acesso local e fazer os testes que achar necessário.
