---
description: Como fazer deploy no GitHub Pages
---

# 🚀 Guia de Deploy no GitHub Pages

Este guia explica como colocar seu site online gratuitamente usando o GitHub Pages.

## 📋 Pré-requisitos

1.  Ter uma conta no [GitHub](https://github.com/).
2.  Ter o **Git** instalado no computador.

---

## 🛠️ Passo a Passo

### 1. Criar um Repositório no GitHub

1.  Acesse [github.com/new](https://github.com/new).
2.  **Repository name:** Digite um nome (ex: `lopes-szaz-site`).
3.  **Public/Private:** Escolha "Public" (obrigatório para Pages gratuito).
4.  Clique em **Create repository**.

### 2. Enviar os Arquivos (Via Terminal)

Abra o terminal na pasta do projeto e execute os comandos abaixo, um por um:

```bash
# 1. Inicializar o Git (se ainda não fez)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Criar o primeiro commit
git commit -m "Deploy inicial do site"

# 4. Renomear a branch principal para 'main'
git branch -M main

# 5. Conectar com o repositório remoto
# SUBSTITUA 'SEU_USUARIO' E 'NOME_DO_REPO' PELOS SEUS DADOS!
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git

# 6. Enviar os arquivos
git push -u origin main
```

### 3. Ativar o GitHub Pages

1.  Vá para a página do seu repositório no GitHub.
2.  Clique em **Settings** (Configurações) no menu superior.
3.  No menu lateral esquerdo, clique em **Pages**.
4.  Em **Build and deployment** > **Source**, selecione **Deploy from a branch**.
5.  Em **Branch**, selecione `main` e a pasta `/(root)`.
6.  Clique em **Save**.

### 🎉 Pronto!

Em alguns minutos, o GitHub vai gerar um link (ex: `https://seu-usuario.github.io/lopes-szaz-site/`).

---

## 🔄 Atualizando o Site

Sempre que você fizer alterações nos arquivos, basta rodar estes comandos no terminal para atualizar o site online:

```bash
git add .
git commit -m "Atualizando site"
git push
```
