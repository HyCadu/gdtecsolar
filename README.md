# 🌞 GDTEC - Energia Solar

Site institucional moderno e responsivo para a GDTEC, empresa especializada em soluções de energia solar fotovoltaica. Desenvolvido com Next.js 15, React 19 e TypeScript.

![GDTEC Solar](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Sobre o Projeto

A GDTEC é uma empresa com mais de 500 projetos entregues, especializada em energia solar fotovoltaica para todos os segmentos: residencial, comercial, industrial, rural e condomínios.

### 🎯 Objetivos
- **Conversão de Leads**: Capturar visitantes interessados em energia solar
- **Educação**: Informar sobre benefícios e funcionamento da energia solar
- **Simulação**: Permitir cálculo de economia personalizada
- **Contato**: Facilitar comunicação direta com a empresa

## ✨ Funcionalidades Principais

### 🏠 Páginas
- **Home**: Página principal com todas as seções
- **Segmentos**: Residencial, Comercial, Industrial, Rural
- **Cases**: Projetos realizados
- **Sobre**: História e valores da empresa
- **Depoimentos**: Testemunhos de clientes
- **Contato**: Formulário e informações
- **FAQ**: Perguntas frequentes

### 🎨 Componentes Principais
- **Hero Section**: Seção principal com vídeo de fundo
- **Navbar**: Navegação responsiva com dropdown
- **Services Segments**: Cards dos segmentos atendidos
- **Solar Simulator**: Calculadora de economia solar
- **Contact Section**: Formulário de contato
- **WhatsApp Button**: Botão flutuante de contato
- **Stats Counter**: Contadores de resultados

### 🎭 Animações e Efeitos
- **Framer Motion**: Animações suaves e profissionais
- **Hover Effects**: Efeitos interativos nos elementos
- **Scroll Animations**: Animações baseadas no scroll
- **Loading States**: Estados de carregamento elegantes

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[Next.js 15](https://nextjs.org/)**: Framework React com SSR/SSG
- **[React 19](https://react.dev/)**: Biblioteca para interfaces
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework CSS utilitário

### UI/UX
- **[Framer Motion](https://www.framer.com/motion/)**: Animações
- **[Lucide React](https://lucide.dev/)**: Ícones
- **[Radix UI](https://www.radix-ui.com/)**: Componentes acessíveis
- **[shadcn/ui](https://ui.shadcn.com/)**: Biblioteca de componentes

### Formulários e Validação
- **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento de formulários
- **[Zod](https://zod.dev/)**: Validação de esquemas

### Deploy e Performance
- **[Vercel](https://vercel.com/)**: Deploy e hospedagem
- **[Next.js Image](https://nextjs.org/docs/basic-features/image-optimization)**: Otimização de imagens

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/gdtec-solar.git
cd gdtec-solar
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.example .env.local
```

### 4. Execute o projeto
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O projeto estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
GDTEC/
├── app/                    # App Router (Next.js 15)
│   ├── cases/             # Página de cases
│   ├── contato/           # Página de contato
│   ├── depoimentos/       # Página de depoimentos
│   ├── faq/              # Página de FAQ
│   ├── segmentos/        # Páginas dos segmentos
│   ├── sobre/            # Página sobre
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página inicial
├── components/           # Componentes React
│   ├── ui/              # Componentes base (shadcn/ui)
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── faq-section.tsx
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── services-segments.tsx
│   ├── solar-simulator.tsx
│   ├── simulator-panel.tsx
│   ├── stats-counter.tsx
│   ├── testimonials.tsx
│   └── whatsapp-button.tsx
├── hooks/               # Custom hooks
├── lib/                 # Utilitários
├── public/              # Arquivos estáticos
│   ├── vid/            # Vídeos
│   └── *.png           # Imagens
└── styles/             # Estilos adicionais
```

## 🎨 Design System

### Cores Principais
- **Azul GDTEC**: `#004E64` (Primary)
- **Laranja GDTEC**: `#FF6B35` (Accent)
- **Verde WhatsApp**: `#25D366` (Social)
- **Cinza**: `#F5F5F5` (Background)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Tamanhos**: Sistema responsivo com Tailwind

### Componentes
- **Botões**: Múltiplas variantes com hover effects
- **Cards**: Design moderno com sombras e animações
- **Formulários**: Validação e feedback visual
- **Navegação**: Responsiva com dropdown

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## ⚡ Performance

### Otimizações Implementadas
- **Next.js Image**: Otimização automática de imagens
- **Code Splitting**: Carregamento sob demanda
- **Lazy Loading**: Componentes carregados quando necessário
- **CSS Purge**: Remoção de CSS não utilizado
- **Bundle Analysis**: Análise de tamanho do bundle

### Métricas de Performance
- **Lighthouse Score**: 90+
- **Core Web Vitals**: Otimizados
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔧 Scripts Disponíveis

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 📊 Analytics e SEO

### SEO
- **Meta Tags**: Otimizadas para cada página
- **Structured Data**: Schema.org markup
- **Sitemap**: Gerado automaticamente
- **Robots.txt**: Configurado

### Analytics
- **Google Analytics**: Integração preparada
- **Conversion Tracking**: Rastreamento de conversões
- **Heatmaps**: Preparado para implementação

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**GDTEC Energia Solar**
- **Website**: [gdtec.com.br](https://gdtec.com.br)
- **Email**: contato@gdtec.com.br
- **WhatsApp**: (11) 99999-9999

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pela excelente documentação
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- [Framer Motion](https://www.framer.com/motion/) pelas animações
- [shadcn/ui](https://ui.shadcn.com/) pelos componentes

---

**Desenvolvido com ❤️ para a GDTEC** 