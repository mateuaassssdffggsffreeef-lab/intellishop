IntelliShop - Starter Next.js + Tailwind
=======================================

O projeto é um starter simples para sua loja IntelliShop (produtos inteligentes).
Arquivos principais gerados:
- pages/index.jsx (home e listagem)
- pages/product/[id].jsx (página de produto)
- components/Header.jsx
- components/ProductCard.jsx
- styles/globals.css
- next.config.js, tailwind.config.cjs, package.json

Instruções para rodar local (PC):
1. Instale Node.js (recomendado v18+).
2. No terminal, dentro da pasta do projeto:
   npm install
   npm run dev
3. Abra http://localhost:3000

Deploy no Vercel:
- Crie conta em https://vercel.com
- Importe este repositório (ou faça push para GitHub e importe)
- Vercel detecta Next.js e faz deploy automático.

Observações:
- Este é um starter. Para conectar com Shopify (Headless) ou fazer dropshipping automático,
  é necessário integrar com a Storefront API ou usar apps que gerenciam pedidos.
