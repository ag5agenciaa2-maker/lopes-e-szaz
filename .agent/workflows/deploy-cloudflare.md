---
description: Como fazer deploy no Cloudflare Pages integrado com GitHub
---

# 🚀 Deploy no Cloudflare Pages (via GitHub)

O Cloudflare Pages é uma das melhores opções para hospedar sites estáticos (HTML/CSS/JS) gratuitamente, oferecendo CDN global ultra-rápida e HTTPS automático.

## 📋 Pré-requisitos

1.  Seu site já deve estar publicado em um repositório no **GitHub** (veja o guia anterior `deploy-github.md`).
2.  Ter uma conta gratuita na [Cloudflare](https://dash.cloudflare.com/sign-up).

---

## 🛠️ Passo a Passo

### 1. Conectar Cloudflare ao GitHub

1.  Acesse o [Dashboard do Cloudflare](https://dash.cloudflare.com/).
2.  No menu lateral, clique em **Workers & Pages**.
3.  Clique no botão azul **Create application** (Criar aplicação).
4.  Aba **Pages** -> Clique em **Connect to Git**.
5.  Selecione a aba **GitHub** e clique em **Connect to GitHub**.
6.  Autorize o acesso da Cloudflare aos seus repositórios (pode selecionar "All repositories" ou apenas o específico do site).

### 2. Configurar o Deploy

1.  Selecione o repositório do seu site (`lopes-e-szaz`, por exemplo) e clique em **Begin setup**.
2.  **Project name:** O nome do seu site (será parte da URL: `nome-do-projeto.pages.dev`).
3.  **Production branch:** Geralmente é `main`.
4.  **Framework preset:** Selecione **None** (já que é um site HTML/CSS/JS puro).
5.  **Build command:** Deixe em branco.
6.  **Build output directory:** Deixe em branco (ou coloque `/` se der erro).
7.  Clique em **Save and Deploy**.

### 3. Aguardar o Deploy

O Cloudflare vai clonar seu repositório e colocar o site no ar. Isso leva cerca de 1 a 2 minutos.
Quando terminar, você verá uma URL verde: `https://seu-projeto.pages.dev`.

---

## 🌐 Configurando Domínio Personalizado (Opcional)

Se você já tem o domínio `lopeseszazadvogados.com.br` na Cloudflare:

1.  Vá na página do seu projeto no **Pages**.
2.  Clique na aba **Custom domains**.
3.  Clique em **Set up a custom domain**.
4.  Digite seu domínio e siga as instruções para criar o registro DNS CNAME automaticamente.

---

## 🔄 Como Atualizar

Como está conectado ao GitHub, **sempre que você fizer um `git push`** para enviar alterações para o GitHub, o Cloudflare Pages vai detectar automaticamente e fazer o deploy da nova versão em segundos!
