import Header from "@/components/header";
import PublicationsHero from "@/components/publications-hero";
import FeaturedPost from "@/components/featured-post";
import PublicationsGrid from "@/components/publications-grid";
import CTASection from "@/components/cta-section";
import AnnouncementCard from "@/components/announcement-card";
import Footer from "@/components/footer";

// Mock data - replace with actual data fetching
const mockFeaturedItems = [
  {
    imageUrl: "/hero.jpeg",
    imageAlt: "Imagem em destaque 1",
    category: "Notícia",
    title: "Sindicato conquista reajuste salarial de 15% para categoria",
    description:
      "Após meses de negociação, o SINRAD-PA garante aumento real no salário dos radialistas paraenses, beneficiando mais de 2.000 profissionais do setor.",
    date: "15 de março de 2024",
    link: "#",
  },
  {
    imageUrl: "/hero.jpeg",
    imageAlt: "Imagem em destaque 2",
    category: "Artigo",
    title: "O futuro da radiodifusão no cenário digital",
    description:
      "Análise sobre as transformações tecnológicas e seus impactos na profissão dos radialistas brasileiros.",
    date: "12 de março de 2024",
    link: "#",
  },
  {
    imageUrl: "/hero.jpeg",
    imageAlt: "Imagem em destaque 3",
    category: "Evento",
    title: "Assembleia Geral aprova pauta de reivindicações",
    description:
      "Categoria define prioridades para negociação coletiva de 2024 com ampla participação dos filiados.",
    date: "10 de março de 2024",
    link: "#",
  },
];

const mockPublications = [
  {
    id: "1",
    imageUrl: "/hero.jpeg",
    imageAlt: "Notícia 1",
    category: "Notícia",
    title: "Assembleia define pauta de reivindicações para 2024",
    date: "10 de março de 2024",
    link: "#",
  },
  {
    id: "2",
    imageUrl: "/hero.jpeg",
    imageAlt: "Artigo 1",
    category: "Artigo",
    title: "O futuro da radiodifusão no Brasil",
    date: "8 de março de 2024",
    link: "#",
  },
  {
    id: "3",
    imageUrl: "/hero.jpeg",
    imageAlt: "Revista 1",
    category: "Revista",
    title: "Revista do Radialista - Edição Março 2024",
    date: "1 de março de 2024",
    link: "#",
  },
  {
    id: "4",
    imageUrl: "/hero.jpeg",
    imageAlt: "Cartilha 1",
    category: "Cartilha",
    title: "Direitos Trabalhistas dos Radialistas",
    date: "28 de fevereiro de 2024",
    link: "#",
  },
  {
    id: "5",
    imageUrl: "/hero.jpeg",
    imageAlt: "Notícia 2",
    category: "Notícia",
    title: "Curso de capacitação abre inscrições",
    date: "25 de fevereiro de 2024",
    link: "#",
  },
  {
    id: "6",
    imageUrl: "/hero.jpeg",
    imageAlt: "Artigo 2",
    category: "Artigo",
    title: "A importância da sindicalização",
    date: "20 de fevereiro de 2024",
    link: "#",
  },
  {
    id: "7",
    imageUrl: "/hero.jpeg",
    imageAlt: "Notícia 3",
    category: "Notícia",
    title: "Sindicato participa de congresso nacional",
    date: "15 de fevereiro de 2024",
    link: "#",
  },
  {
    id: "8",
    imageUrl: "/hero.jpeg",
    imageAlt: "Revista 2",
    category: "Revista",
    title: "Revista do Radialista - Edição Fevereiro 2024",
    date: "1 de fevereiro de 2024",
    link: "#",
  },
  {
    id: "9",
    imageUrl: "/hero.jpeg",
    imageAlt: "Cartilha 2",
    category: "Cartilha",
    title: "Saúde e segurança no trabalho",
    date: "25 de janeiro de 2024",
    link: "#",
  },
  {
    id: "10",
    imageUrl: "/hero.jpeg",
    imageAlt: "Notícia 4",
    category: "Notícia",
    title: "Campanha salarial 2024 tem início",
    date: "20 de janeiro de 2024",
    link: "#",
  },
  {
    id: "11",
    imageUrl: "/hero.jpeg",
    imageAlt: "Artigo 3",
    category: "Artigo",
    title: "Tecnologia e tradição na radiodifusão",
    date: "15 de janeiro de 2024",
    link: "#",
  },
  {
    id: "12",
    imageUrl: "/hero.jpeg",
    imageAlt: "Notícia 5",
    category: "Notícia",
    title: "Parceria garante descontos em cursos",
    date: "10 de janeiro de 2024",
    link: "#",
  },
  {
    id: "13",
    imageUrl: "/hero.jpeg",
    imageAlt: "Notícia 6",
    category: "Notícia",
    title: "Sindicato promove evento comemorativo",
    date: "5 de janeiro de 2024",
    link: "#",
  },
  {
    id: "14",
    imageUrl: "/hero.jpeg",
    imageAlt: "Artigo 4",
    category: "Artigo",
    title: "Desafios da comunicação no século XXI",
    date: "3 de janeiro de 2024",
    link: "#",
  },
  {
    id: "15",
    imageUrl: "/hero.jpeg",
    imageAlt: "Notícia 7",
    category: "Notícia",
    title: "Nova sede do sindicato é inaugurada",
    date: "28 de dezembro de 2023",
    link: "#",
  },
  {
    id: "16",
    imageUrl: "/hero.jpeg",
    imageAlt: "Revista 3",
    category: "Revista",
    title: "Revista do Radialista - Edição Janeiro 2024",
    date: "1 de janeiro de 2024",
    link: "#",
  },
  {
    id: "17",
    imageUrl: "/hero.jpeg",
    imageAlt: "Notícia 8",
    category: "Notícia",
    title: "Radialistas recebem homenagem",
    date: "20 de dezembro de 2023",
    link: "#",
  },
  {
    id: "18",
    imageUrl: "/hero.jpeg",
    imageAlt: "Cartilha 3",
    category: "Cartilha",
    title: "Guia de boas práticas para radialistas",
    date: "15 de dezembro de 2023",
    link: "#",
  },
];

export default function PublicacoesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-12 md:mb-16">
              <PublicationsHero
                badge="Publicações"
                title="Fique por dentro de tudo que acontece no SINRAD-PA"
                description="Notícias, artigos, revistas e cartilhas sobre a categoria dos radialistas paraenses."
              />
            </div>
            <FeaturedPost items={mockFeaturedItems} />
          </div>
        </section>
        <PublicationsGrid publications={mockPublications} />
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
