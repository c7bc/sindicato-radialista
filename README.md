<div align="center">
  <img src="./public/hero.jpeg" alt="Sindicato dos Radialistas" width="100%" />

  # 📻 Sindicato dos Radialistas do Pará

  ### Plataforma digital moderna para representação e defesa dos direitos dos profissionais de radiodifusão

  [![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📋 Sobre o Projeto

O **Sindicato dos Radialistas do Pará** é uma plataforma web institucional desenvolvida para fortalecer a comunicação entre o sindicato e os profissionais de radiodifusão. O sistema oferece acesso a informações sobre direitos trabalhistas, serviços exclusivos, publicações relevantes e facilita o processo de sindicalização.

### ✨ Principais Funcionalidades

- 🏠 **Página Inicial**: Hero section com destaque para notícias e artigos recentes
- 🏛️ **Institucional**: Informações sobre a história, missão e diretoria do sindicato
- ⚖️ **Jurídico**: Acesso a orientações legais e assessoria trabalhista
- 📰 **Publicações**: Sistema de blog com cache inteligente e relacionamento de conteúdo
- 🎁 **Serviços**: Convênios, benefícios, alojamento e ginásio para sindicalizados
- ✍️ **Sindicalização**: Formulário digital com assinatura eletrônica
- 📧 **Newsletter**: Sistema de inscrição para receber atualizações
- 📞 **Contato**: Formulário e informações de localização

---

## 🚀 Tecnologias Utilizadas

### Core
- **[Next.js 16.0.1](https://nextjs.org/)** - Framework React com App Router e Cache Components
- **[React 19.2](https://reactjs.org/)** - Biblioteca para construção de interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript

### Estilização
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Framework CSS utility-first
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Plugin para estilização de conteúdo
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animações com Tailwind

### UI Components
- **[@untitledui/icons](https://www.untitledui.com/)** - Sistema de ícones consistente
- **[react-aria-components](https://react-spectrum.adobe.com/react-aria/)** - Componentes acessíveis

### Features Avançadas
- **Next.js Cache Components** - Sistema de cache com TTL configurável
- **Partial Prerendering** - Renderização híbrida estática/dinâmica
- **Responsive Design** - Layout adaptativo para mobile, tablet e desktop
- **SEO Optimized** - Metadados e estrutura otimizada para buscadores

---

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js 20.x ou superior
- Bun 1.x (recomendado) ou npm/yarn/pnpm

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/c7bc/sindicato-radialista.git
cd sindicato-radialista
```

2. Instale as dependências:
```bash
bun install
# ou
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
bun dev
# ou
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

---

## 🏗️ Estrutura do Projeto

```
sindicato-radialista/
├── app/                          # App Router do Next.js
│   ├── contato/                  # Página de contato
│   ├── juridico/                 # Área jurídica
│   ├── newsletter/               # Newsletter
│   ├── publicacoes/              # Sistema de publicações
│   │   └── [slug]/               # Páginas dinâmicas com cache
│   ├── servicos/                 # Serviços e benefícios
│   ├── sindicalize-se/           # Formulário de sindicalização
│   ├── sindicato/                # Página institucional
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Página inicial
│   └── globals.css               # Estilos globais
│
├── components/                   # Componentes reutilizáveis
│   ├── publication-detail/       # Componentes de publicação
│   │   ├── share-buttons.tsx     # Compartilhamento social
│   │   ├── table-of-contents.tsx # Índice automático
│   │   └── related-publications.tsx
│   ├── header.tsx                # Cabeçalho com menu responsivo
│   ├── footer.tsx                # Rodapé
│   ├── hero.tsx                  # Hero section
│   └── ...                       # Outros componentes
│
├── public/                       # Arquivos estáticos
│   ├── hero.jpeg
│   ├── category.jpg
│   └── cta.jpg
│
├── styles/                       # Configurações de estilo
├── next.config.ts                # Configuração do Next.js
├── tailwind.config.ts            # Configuração do Tailwind
└── package.json                  # Dependências do projeto
```

---

## 🎨 Design System

O projeto utiliza um design system baseado em Tailwind CSS com tokens customizados:

### Tipografia
- **Headings**: Baskervville (fonte serifada clássica)
- **Body**: Lato (fonte sans-serif moderna)
- **Tamanhos**: Sistema de display (xs, sm, md, lg, xl)

### Cores
- **Brand**: Paleta principal do sindicato
- **Text**: Primary, Secondary, Tertiary, Quaternary
- **Utility**: Cores funcionais para estados e categorias

### Componentes
- Máxima largura: `max-w-7xl`
- Padding responsivo: `px-4 md:px-8`
- Sombras: Sistema shadow-xs e shadow-xs-skeumorphic
- Espaçamento: Escala consistente baseada em rem

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
bun dev          # Inicia servidor de desenvolvimento

# Build
bun run build    # Gera build de produção
bun start        # Inicia servidor de produção

# Linting
bun lint         # Executa ESLint
```

---

## 📄 Páginas e Funcionalidades

### Sistema de Publicações (`/publicacoes/[slug]`)

Features implementadas:
- ✅ Cache Components com TTL de 6 horas
- ✅ Revalidação em background a cada 1 hora
- ✅ Geração estática de todas as publicações
- ✅ Índice automático (Table of Contents)
- ✅ Botões de compartilhamento social
- ✅ Publicações relacionadas
- ✅ Partial Prerendering

### Formulário de Sindicalização (`/sindicalize-se`)

Features:
- ✅ Validação de CPF
- ✅ Assinatura digital com canvas
- ✅ Validação de termos e condições
- ✅ Feedback visual de envio

### Serviços e Benefícios (`/servicos`)

Inclui:
- 📚 Convênios por categoria (Educação, Automóveis, Saúde, Lazer)
- 🏠 Sistema de reserva de alojamento
- ⚽ Ginásio de esportes com tabela de preços
- 💼 Informações sobre descontos exclusivos

---

## 🚀 Deploy

### Vercel (Recomendado)

O projeto está otimizado para deploy na Vercel:

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/c7bc/sindicato-radialista)

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

---

## 🔐 Cache e Performance

O projeto utiliza o sistema de **Cache Components** do Next.js 16:

```typescript
// Exemplo de configuração de cache
cacheLife({
  stale: 21600,     // 6 horas - conteúdo permanece fresco
  revalidate: 3600, // 1 hora - revalidação em background
  expire: 43200,    // 12 horas - expiração absoluta
});

cacheTag('publications', `publication-${slug}`);
```

---

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é privado e pertence ao **Sindicato dos Radialistas do Pará**.

---

## 📞 Contato

**Sindicato dos Radialistas do Pará**

- 📧 Email: contato@radialistaspa.org.br
- 📱 Telefone: (91) 3344-7770
- 🌐 Website: [em construção]

---

<div align="center">

  **Desenvolvido com ❤️ para os profissionais de radiodifusão do Pará**

  © 2025 Sindicato dos Radialistas do Pará. Todos os direitos reservados.

</div>
