import Header from "@/components/header";
import Hero from "@/components/hero";
import AnnouncementCard from "@/components/announcement-card";
import RecentNews from "@/components/recent-news";
import NewsByCategory from "@/components/news-by-category";
import RecentArticles from "@/components/recent-articles";
import ArticlesByCategory from "@/components/articles-by-category";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

const navItems = [
  { label: "INÍCIO", href: "/" },
  { label: "SINDICATO", href: "/sindicato" },
  { label: "JURÍDICO", href: "/juridico" },
  { label: "PUBLICAÇÕES", href: "/publicacoes" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "NEWSLETTER", href: "/newsletter" },
  { label: "CONTATO", href: "/contato" },
];

// Mock data for Recent News
const mockRecentNews = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    imageAlt: "Estúdio de rádio profissional",
    category: "Rádio",
    date: "3 de novembro de 2025",
    title:
      "Nova convenção coletiva garante aumento salarial de 8% para radialistas",
    link: "#",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
    imageAlt: "Apresentador de TV",
    category: "TV",
    date: "1 de novembro de 2025",
    title:
      "Sindicato fecha acordo histórico com grandes emissoras de televisão",
    link: "#",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    imageAlt: "Reunião sindical",
    category: "Direitos Trabalhistas",
    date: "30 de outubro de 2025",
    title:
      "Justiça reconhece direito a insalubridade para radialistas noturnos",
    link: "#",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    imageAlt: "Microfone de estúdio",
    category: "Rádio",
    date: "28 de outubro de 2025",
    title: "Sindicato promove curso gratuito de locução e apresentação",
    link: "#",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    imageAlt: "Evento sindical",
    category: "Eventos",
    date: "25 de outubro de 2025",
    title: "Assembleia geral aprova pauta de reivindicações para 2026",
    link: "#",
  },
  {
    id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
    imageAlt: "Advogado trabalhista",
    category: "Direitos Trabalhistas",
    date: "23 de outubro de 2025",
    title:
      "Atendimento jurídico gratuito beneficia mais de 200 associados em 2025",
    link: "#",
  },
];

// Mock data for News by Category (6 items per category for 2-column layout)
const mockCategorizedNews = {
  Rádio: [
    {
      id: "r1",
      imageUrl:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&q=80",
      imageAlt: "Rádio",
      date: "3 de novembro de 2025",
      title: "Novas regras para trabalho em rádios FM entram em vigor",
      link: "#",
    },
    {
      id: "r2",
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&q=80",
      imageAlt: "Rádio",
      date: "1 de novembro de 2025",
      title: "Sindicato firma parceria com rádios comunitárias",
      link: "#",
    },
    {
      id: "r3",
      imageUrl:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200&q=80",
      imageAlt: "Rádio",
      date: "28 de outubro de 2025",
      title: "Podcast: o futuro do rádio e oportunidades para radialistas",
      link: "#",
    },
    {
      id: "r4",
      imageUrl:
        "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=200&q=80",
      imageAlt: "Rádio",
      date: "26 de outubro de 2025",
      title: "Rádios AM migram para FM digital em todo o país",
      link: "#",
    },
    {
      id: "r5",
      imageUrl:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&q=80",
      imageAlt: "Rádio",
      date: "24 de outubro de 2025",
      title: "Sindicato oferece curso de produção de conteúdo radiofônico",
      link: "#",
    },
    {
      id: "r6",
      imageUrl:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&q=80",
      imageAlt: "Rádio",
      date: "22 de outubro de 2025",
      title: "Audiência de rádio FM cresce 15% no último trimestre",
      link: "#",
    },
  ],
  TV: [
    {
      id: "tv1",
      imageUrl:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=200&q=80",
      imageAlt: "TV",
      date: "2 de novembro de 2025",
      title: "TVs regionais devem contratar mais profissionais em 2026",
      link: "#",
    },
    {
      id: "tv2",
      imageUrl:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=200&q=80",
      imageAlt: "TV",
      date: "30 de outubro de 2025",
      title: "Sindicato negocia melhores condições para repórteres de rua",
      link: "#",
    },
    {
      id: "tv3",
      imageUrl:
        "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=200&q=80",
      imageAlt: "TV",
      date: "26 de outubro de 2025",
      title: "Streaming não substitui TV tradicional, aponta pesquisa",
      link: "#",
    },
    {
      id: "tv4",
      imageUrl:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=200&q=80",
      imageAlt: "TV",
      date: "24 de outubro de 2025",
      title: "TV aberta mantém liderança em audiência nacional",
      link: "#",
    },
    {
      id: "tv5",
      imageUrl:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=200&q=80",
      imageAlt: "TV",
      date: "21 de outubro de 2025",
      title: "Jornalistas de TV conquistam adicional de periculosidade",
      link: "#",
    },
    {
      id: "tv6",
      imageUrl:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&q=80",
      imageAlt: "TV",
      date: "19 de outubro de 2025",
      title: "Sindicato promove debate sobre jornalismo televisivo",
      link: "#",
    },
  ],
  "Direitos Trabalhistas": [
    {
      id: "dt1",
      imageUrl:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&q=80",
      imageAlt: "Direitos",
      date: "3 de novembro de 2025",
      title: "Entenda seus direitos: férias, 13º e horas extras",
      link: "#",
    },
    {
      id: "dt2",
      imageUrl:
        "https://images.unsplash.com/photo-1560439514-4e9645039924?w=200&q=80",
      imageAlt: "Direitos",
      date: "29 de outubro de 2025",
      title: "Sindicato ganha ação coletiva sobre adicional noturno",
      link: "#",
    },
    {
      id: "dt3",
      imageUrl:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80",
      imageAlt: "Direitos",
      date: "24 de outubro de 2025",
      title: "Cartilha de direitos trabalhistas está disponível para download",
      link: "#",
    },
    {
      id: "dt4",
      imageUrl:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&q=80",
      imageAlt: "Direitos",
      date: "22 de outubro de 2025",
      title: "Como funciona o seguro-desemprego para radialistas",
      link: "#",
    },
    {
      id: "dt5",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80",
      imageAlt: "Direitos",
      date: "20 de outubro de 2025",
      title: "Rescisão trabalhista: seus direitos e como proceder",
      link: "#",
    },
    {
      id: "dt6",
      imageUrl:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&q=80",
      imageAlt: "Direitos",
      date: "18 de outubro de 2025",
      title: "PLR 2025: sindicato negocia participação nos lucros",
      link: "#",
    },
  ],
  Eventos: [
    {
      id: "e1",
      imageUrl:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=200&q=80",
      imageAlt: "Eventos",
      date: "2 de novembro de 2025",
      title: "Confraternização de fim de ano será no dia 15 de dezembro",
      link: "#",
    },
    {
      id: "e2",
      imageUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&q=80",
      imageAlt: "Eventos",
      date: "27 de outubro de 2025",
      title: "Workshop sobre comunicação digital acontece na próxima semana",
      link: "#",
    },
    {
      id: "e3",
      imageUrl:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=200&q=80",
      imageAlt: "Eventos",
      date: "22 de outubro de 2025",
      title: "Dia do Radialista será celebrado com evento especial",
      link: "#",
    },
    {
      id: "e4",
      imageUrl:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&q=80",
      imageAlt: "Eventos",
      date: "20 de outubro de 2025",
      title: "Palestra sobre saúde mental no trabalho",
      link: "#",
    },
    {
      id: "e5",
      imageUrl:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=200&q=80",
      imageAlt: "Eventos",
      date: "18 de outubro de 2025",
      title: "Assembleia extraordinária debate campanha salarial",
      link: "#",
    },
    {
      id: "e6",
      imageUrl:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&q=80",
      imageAlt: "Eventos",
      date: "15 de outubro de 2025",
      title: "Encontro regional de radialistas reúne 500 profissionais",
      link: "#",
    },
  ],
};

// Mock data for Recent Articles
const mockRecentArticles = [
  {
    id: "art1",
    imageUrl:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    imageAlt: "Análise sobre radiodifusão",
    category: "Rádio",
    date: "3 de novembro de 2025",
    title: "O futuro da radiodifusão no Brasil: desafios e oportunidades",
    link: "#",
  },
  {
    id: "art2",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    imageAlt: "Direitos trabalhistas",
    category: "Direitos Trabalhistas",
    date: "1 de novembro de 2025",
    title: "Reforma trabalhista: como ficaram os direitos dos radialistas",
    link: "#",
  },
  {
    id: "art3",
    imageUrl:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
    imageAlt: "Jornalismo televisivo",
    category: "TV",
    date: "30 de outubro de 2025",
    title: "Jornalismo na era digital: adaptação ou extinção?",
    link: "#",
  },
];

// Mock data for Articles by Category
const mockCategorizedArticles = {
  Opinião: [
    {
      id: "op1",
      imageUrl:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&q=80",
      imageAlt: "Opinião",
      date: "3 de novembro de 2025",
      title: "Por que o sindicato é essencial para os radialistas",
      link: "#",
    },
    {
      id: "op2",
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&q=80",
      imageAlt: "Opinião",
      date: "1 de novembro de 2025",
      title: "A importância da valorização profissional na comunicação",
      link: "#",
    },
    {
      id: "op3",
      imageUrl:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200&q=80",
      imageAlt: "Opinião",
      date: "28 de outubro de 2025",
      title: "Radiodifusão comunitária: uma ferramenta de inclusão social",
      link: "#",
    },
    {
      id: "op4",
      imageUrl:
        "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=200&q=80",
      imageAlt: "Opinião",
      date: "26 de outubro de 2025",
      title: "O papel do rádio na democracia brasileira",
      link: "#",
    },
    {
      id: "op5",
      imageUrl:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&q=80",
      imageAlt: "Opinião",
      date: "24 de outubro de 2025",
      title: "Podcast vs. Rádio tradicional: uma falsa dicotomia",
      link: "#",
    },
    {
      id: "op6",
      imageUrl:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&q=80",
      imageAlt: "Opinião",
      date: "22 de outubro de 2025",
      title: "Saúde mental dos radialistas: precisamos falar sobre isso",
      link: "#",
    },
  ],
  Análises: [
    {
      id: "an1",
      imageUrl:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=200&q=80",
      imageAlt: "Análises",
      date: "2 de novembro de 2025",
      title: "Mercado de TV aberta: análise das audiências em 2025",
      link: "#",
    },
    {
      id: "an2",
      imageUrl:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=200&q=80",
      imageAlt: "Análises",
      date: "30 de outubro de 2025",
      title: "Como as redes sociais impactaram o jornalismo televisivo",
      link: "#",
    },
    {
      id: "an3",
      imageUrl:
        "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=200&q=80",
      imageAlt: "Análises",
      date: "26 de outubro de 2025",
      title: "Streaming vs. TV: quem vence essa batalha?",
      link: "#",
    },
    {
      id: "an4",
      imageUrl:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=200&q=80",
      imageAlt: "Análises",
      date: "24 de outubro de 2025",
      title: "Panorama salarial dos radialistas brasileiros",
      link: "#",
    },
    {
      id: "an5",
      imageUrl:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=200&q=80",
      imageAlt: "Análises",
      date: "21 de outubro de 2025",
      title: "Concentração de mídia no Brasil: riscos e desafios",
      link: "#",
    },
    {
      id: "an6",
      imageUrl:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&q=80",
      imageAlt: "Análises",
      date: "19 de outubro de 2025",
      title: "O impacto da IA no jornalismo contemporâneo",
      link: "#",
    },
  ],
  Entrevistas: [
    {
      id: "ent1",
      imageUrl:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&q=80",
      imageAlt: "Entrevistas",
      date: "3 de novembro de 2025",
      title: "Entrevista: presidente do sindicato fala sobre conquistas",
      link: "#",
    },
    {
      id: "ent2",
      imageUrl:
        "https://images.unsplash.com/photo-1560439514-4e9645039924?w=200&q=80",
      imageAlt: "Entrevistas",
      date: "29 de outubro de 2025",
      title: "Conversa com radialista veterano sobre mudanças na profissão",
      link: "#",
    },
    {
      id: "ent3",
      imageUrl:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80",
      imageAlt: "Entrevistas",
      date: "24 de outubro de 2025",
      title: "Jovem radialista conta sua trajetória de sucesso",
      link: "#",
    },
    {
      id: "ent4",
      imageUrl:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&q=80",
      imageAlt: "Entrevistas",
      date: "22 de outubro de 2025",
      title: "Advogado trabalhista explica novos direitos da categoria",
      link: "#",
    },
    {
      id: "ent5",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80",
      imageAlt: "Entrevistas",
      date: "20 de outubro de 2025",
      title: "Especialista em comunicação analisa tendências do setor",
      link: "#",
    },
    {
      id: "ent6",
      imageUrl:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&q=80",
      imageAlt: "Entrevistas",
      date: "18 de outubro de 2025",
      title: "Produtor de conteúdo digital compartilha experiências",
      link: "#",
    },
  ],
  Tutoriais: [
    {
      id: "tut1",
      imageUrl:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=200&q=80",
      imageAlt: "Tutoriais",
      date: "2 de novembro de 2025",
      title: "Como fazer uma boa entrevista para rádio",
      link: "#",
    },
    {
      id: "tut2",
      imageUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&q=80",
      imageAlt: "Tutoriais",
      date: "27 de outubro de 2025",
      title: "Técnicas de locução profissional para iniciantes",
      link: "#",
    },
    {
      id: "tut3",
      imageUrl:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=200&q=80",
      imageAlt: "Tutoriais",
      date: "22 de outubro de 2025",
      title: "Guia completo: como montar seu home studio",
      link: "#",
    },
    {
      id: "tut4",
      imageUrl:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&q=80",
      imageAlt: "Tutoriais",
      date: "20 de outubro de 2025",
      title: "Edição de áudio: ferramentas gratuitas e profissionais",
      link: "#",
    },
    {
      id: "tut5",
      imageUrl:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=200&q=80",
      imageAlt: "Tutoriais",
      date: "18 de outubro de 2025",
      title: "Como criar um podcast do zero",
      link: "#",
    },
    {
      id: "tut6",
      imageUrl:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&q=80",
      imageAlt: "Tutoriais",
      date: "15 de outubro de 2025",
      title: "Dicas para melhorar sua presença no ar",
      link: "#",
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-white">
      <main className="max-w-7xl mx-auto">
        <Header navItems={navItems} />
        <Hero />
        <RecentArticles articles={mockRecentArticles} />
        <RecentNews news={mockRecentNews} />
        <NewsByCategory categories={mockCategorizedNews} />
        <ArticlesByCategory categories={mockCategorizedArticles} />
        <CTASection
          title="Junte-se à luta pelos direitos dos radialistas"
          description="Faça parte do maior sindicato de radialistas do país. Garantimos representação forte, assistência jurídica completa e defesa dos seus direitos trabalhistas."
          primaryButtonText="Quero me sindicalizar"
          primaryButtonHref="#sindicalize"
          secondaryButtonText="Saiba mais"
          secondaryButtonHref="#about"
          imageUrl="/category.jpg"
          imageAlt="Radialista trabalhando em estúdio"
        />
        <AnnouncementCard
          imageUrl="/cta.jpg"
          imageAlt="Radialista sorrindo"
          title="A voz dos radialistas não para!"
          description="Receba notícias, atualizações e conquistas da categoria direto no seu e-mail. Fique por dentro das ações do sindicato e fortaleça a luta por uma comunicação mais justa."
          primaryButtonText="Quero receber as novidades"
        />
      </main>
      <Footer />
    </div>
  );
}
