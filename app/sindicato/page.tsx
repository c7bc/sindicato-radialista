import Header from "@/components/header";
import LocationsSection from "@/components/locations-section";
import TeamSection from "@/components/team-section";
import ContentShowcase from "@/components/content-showcase";
import CTASection from "@/components/cta-section";
import AnnouncementCard from "@/components/announcement-card";
import Footer from "@/components/footer";
import MapPinIcon from "@/components/icons/map-pin";

const navItems = [
  { label: "INÍCIO", href: "/" },
  { label: "SINDICATO", href: "/sindicato" },
  { label: "JURÍDICO", href: "/juridico" },
  { label: "PUBLICAÇÕES", href: "/publicacoes" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "NEWSLETTER", href: "/newsletter" },
  { label: "CONTATO", href: "/contato" },
];

// Mock data para localizações
const mockLocations = [
  {
    id: "1",
    icon: <MapPinIcon />,
    title: "Sede Principal - Belém",
    description: "Segunda a Sexta: 8h às 18h",
    address: "Rua dos Radialistas, 123\nBelém - PA, 66000-000",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "2",
    icon: <MapPinIcon />,
    title: "Subsede - Santarém",
    description: "Segunda a Sexta: 9h às 17h",
    address: "Av. Tapajós, 456\nSantarém - PA, 68000-000",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "3",
    icon: <MapPinIcon />,
    title: "Subsede - Marabá",
    description: "Segunda a Sexta: 9h às 17h",
    address: "Rua da Comunicação, 789\nMarabá - PA, 68500-000",
    mapUrl: "https://maps.google.com",
  },
];

// Mock data para Diretoria Executiva
const mockDiretoriaExecutiva = [
  {
    id: "1",
    name: "João Silva",
    role: "Presidente",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    imageAlt: "João Silva - Presidente",
  },
  {
    id: "2",
    name: "Maria Santos",
    role: "Vice-Presidente",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    imageAlt: "Maria Santos - Vice-Presidente",
  },
  {
    id: "3",
    name: "Carlos Oliveira",
    role: "Secretário Geral",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    imageAlt: "Carlos Oliveira - Secretário Geral",
  },
  {
    id: "4",
    name: "Ana Costa",
    role: "Tesoureira",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    imageAlt: "Ana Costa - Tesoureira",
  },
  {
    id: "5",
    name: "Pedro Almeida",
    role: "Diretor de Comunicação",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    imageAlt: "Pedro Almeida - Diretor de Comunicação",
  },
];

// Mock data para Conselho Fiscal
const mockConselhoFiscal = [
  {
    id: "1",
    name: "Lucia Ferreira",
    role: "Conselheira Fiscal",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80",
    imageAlt: "Lucia Ferreira",
  },
  {
    id: "2",
    name: "Roberto Lima",
    role: "Conselheiro Fiscal",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    imageAlt: "Roberto Lima",
  },
  {
    id: "3",
    name: "Fernanda Souza",
    role: "Conselheira Fiscal",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    imageAlt: "Fernanda Souza",
  },
];

// Mock data para Content Showcase
const mockPublicacoes = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    imageAlt: "Estúdio de rádio",
    category: "Institucional",
    date: "4 de novembro de 2025",
    title: "História do Sindicato dos Radialistas: 50 anos de luta",
    description: "Conheça a trajetória do sindicato desde sua fundação até os dias atuais.",
    link: "#",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    imageAlt: "Assembleia",
    category: "Conquistas",
    date: "2 de novembro de 2025",
    title: "Principais conquistas da gestão atual",
    description: "Balanço das vitórias alcançadas pelo sindicato nos últimos anos.",
    link: "#",
  },
];

export default function SindicatoPage() {
  return (
    <div className="bg-white">
      <main className="max-w-7xl mx-auto">
        <Header navItems={navItems} />

        <LocationsSection
          badge="Nossas sedes"
          title="Visite o Sindicato dos Radialistas"
          description="Estamos presentes em diversas cidades para melhor atendê-lo."
          mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.559466550262!2d-48.4689718!3d-1.4393292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c1aea0cf4b9%3A0x11bb128dfc617c9a!2sSindicato%20dos%20Radialistas%20do%20Par%C3%A1%20-%20SINRAD-PA!5e0!3m2!1spt-BR!2sbr!4v1762276086335!5m2!1spt-BR!2sbr"
          locations={mockLocations}
        />

        <TeamSection
          badge="Gestão 2023-2026"
          title="Diretoria Executiva"
          description="Membros eleitos para representar e defender os interesses dos radialistas."
          members={mockDiretoriaExecutiva}
        />

        <TeamSection
          badge="Gestão 2023-2026"
          title="Conselho Fiscal"
          description="Responsáveis pela fiscalização das contas e patrimônio do sindicato."
          members={mockConselhoFiscal}
        />

        <ContentShowcase
          title="Publicações do Sindicato"
          description="Fique por dentro das últimas notícias e informações sobre o sindicato."
          items={mockPublicacoes}
          buttonText="Ver todas as publicações"
          buttonHref="#publicacoes"
        />

        <CTASection
          title="Faça parte da luta dos radialistas"
          description="Sindicalizar-se é fortalecer a categoria e garantir seus direitos. Junte-se a nós e tenha acesso a benefícios exclusivos."
          primaryButtonText="Quero me sindicalizar"
          primaryButtonHref="#sindicalize"
          secondaryButtonText="Saiba mais"
          secondaryButtonHref="#beneficios"
          imageUrl="/category.jpg"
          imageAlt="Radialista trabalhando"
        />

        <AnnouncementCard
          imageUrl="/cta.jpg"
          imageAlt="Newsletter"
          title="Receba nossas atualizações"
          description="Cadastre-se para receber notícias, eventos e informações importantes diretamente no seu e-mail."
          primaryButtonText="Quero receber"
        />
      </main>
      <Footer />
    </div>
  );
}
