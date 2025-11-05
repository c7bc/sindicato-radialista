import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroWithFeaturesSection from "@/components/hero-with-features-section";
import BenefitsTabSection, {
  BenefitCategory,
} from "@/components/benefits-tab-section";
import FacilitiesSection from "@/components/facilities-section";
import ContentShowcase from "@/components/content-showcase";
import CTASection from "@/components/cta-section";
import AnnouncementCard from "@/components/announcement-card";

// Dados de exemplo para convênios
const benefitCategories: BenefitCategory[] = [
  {
    id: "educacao",
    name: "Educação",
    benefits: [
      {
        id: "cna",
        name: "CNA Inglês Definitivo",
        discount: "40% nas mensalidades | 50% na matrícula",
        address:
          "Unidades: Umarizal, Icoaraci, Ananindeua, São Braz e Barcarena",
        phone: "(91) 88239-483",
        observations:
          "Desconto válido para cursos presenciais e online, adulto e infantil",
      },
      {
        id: "wizard",
        name: "Wizard",
        discount: "40% na matrícula | 42% nas mensalidades",
        address: "Rua Osvaldo Cruz, 165 – Campina",
        phone: "(91) 3230-2237",
        observations: "Desconto não válido para material didático",
      },
      {
        id: "sophos",
        name: "Sistema Educacional Sophos",
        discount: "45% do Infantil ao Ensino Médio | 50% no Convênio",
        address: "Av. Tavares Bastos, 1055 – Marambaia",
        phone: "(91) 98408-4733",
      },
      {
        id: "universo",
        name: "Sistema de Ensino Universo",
        discount: "20% a 30% conforme número de dependentes",
        address: "Unidade Serzedelo: Av. Serzedelo Corrêa, 514 – Batista Campos",
        phone: "(91) 2122-6942",
        observations: "Válido para 6º ao 9º ano e Ensino Médio",
      },
    ],
  },
  {
    id: "automoveis",
    name: "Automóveis",
    benefits: [
      {
        id: "imperial",
        name: "Imperial Lavagem a Seco",
        discount: "15% em todos os serviços",
        address:
          "Municipalidade – Reduto | Praça Magalhães Barata, 253 – Reduto",
        phone: "(91) 3083-0960 | 98207-5995",
        hours: "Segunda a Sexta: 8h às 17h30",
      },
      {
        id: "hc-pneus",
        name: "HC Pneus",
        discount: "12% à vista | 10% parcelado | 12% em amortecedores",
        address: "Av. Gov. Magalhães Barata, 551 – Nazaré",
        phone: "(91) 4005-0200",
        observations: "10% para peças e serviços",
      },
      {
        id: "monobloco",
        name: "Monobloco",
        discount: "50% em alinhamento e balanceamento | 15% em peças",
        address:
          "Belém: Av. Marquês de Herval, 218 – Pedreira | Ananindeua: Rodovia Mário Covas, 463",
        phone: "(91) 3226-0963",
        hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
        observations: "1 ano de garantia em alinhamento",
      },
      {
        id: "casseb",
        name: "Casseb Auto Peças",
        discount: "7% em todos os produtos",
        address:
          "Cremação: Rua dos Mundurucus, 2883 | Pedreira: Av. Doutor Freitas, 1521",
        phone: "(91) 3344-004 | 98146-6721",
        observations: "Válido para pagamento à vista, PIX e cartão",
      },
    ],
  },
  {
    id: "saude",
    name: "Saúde e Bem-estar",
    benefits: [
      {
        id: "clinica-exemplo",
        name: "Clínica Médica Radialista",
        discount: "20% em consultas | 15% em exames",
        address: "Av. Exemplo, 123 – Bairro Exemplo",
        phone: "(91) 3000-0000",
        hours: "Segunda a Sexta: 8h às 18h",
      },
    ],
  },
  {
    id: "lazer",
    name: "Lazer e Turismo",
    benefits: [
      {
        id: "agencia-exemplo",
        name: "Agência de Viagens Exemplo",
        discount: "10% em pacotes turísticos",
        address: "Rua Exemplo, 456 – Centro",
        phone: "(91) 3000-1111",
        observations: "Consulte condições e destinos disponíveis",
      },
    ],
  },
];

// Dados para ContentShowcase
const showcaseContent = [
  {
    id: "1",
    category: "Novidade",
    date: "20 Mar 2024",
    title: "Novos convênios para 2024",
    description:
      "Confira os novos estabelecimentos parceiros que oferecem descontos exclusivos para sindicalizados.",
    imageUrl: "/category.jpg",
    imageAlt: "Novos convênios",
    link: "/publicacoes",
  },
  {
    id: "2",
    category: "Benefícios",
    date: "15 Mar 2024",
    title: "Guia completo de benefícios",
    description:
      "Saiba como aproveitar todos os benefícios disponíveis para você e sua família.",
    imageUrl: "/cta.jpg",
    imageAlt: "Guia de benefícios",
    link: "/publicacoes",
  },
];

export default function ServicosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Features */}
        <HeroWithFeaturesSection
          badge="Vantagens Exclusivas"
          title="Serviços e Benefícios para Radialistas"
          description="O Sindicato dos Radialistas oferece uma ampla gama de serviços e convênios exclusivos para sindicalizados. Aproveite descontos em educação, saúde, automóveis e muito mais."
          features={[]}
          imageUrl="/hero.jpeg"
          imageAlt="Serviços para Radialistas"
        />

        {/* Benefits Tabs */}
        <BenefitsTabSection
          badge="Convênios"
          title="Benefícios e Descontos"
          subtitle="Descontos exclusivos em estabelecimentos parceiros para você e sua família"
          categories={benefitCategories}
        />

        {/* Alojamento */}
        <FacilitiesSection
          badge="Instalações Próprias"
          title="Alojamento para Radialistas"
          description="Hospedagem exclusiva para sindicalizados e dependentes em nossas sedes. Reserve com antecedência e aproveite valores promocionais."
          imageUrl="/hero.jpeg"
          imageAlt="Alojamento Radialista"
          priceTable={[
            {
              description: "Radialista sindicalizado",
              price: "R$ 40,00/diária",
            },
            {
              description: "Radialista não sindicalizado",
              price: "R$ 80,00/diária",
            },
            {
              description: "Dependentes (mesmas regras)",
              price: "R$ 40,00/diária",
            },
          ]}
          generalInfo={[
            "Quartos coletivos com ar condicionado, beliches simples, travesseiro e roupa de cama limpos",
            "Um banheiro por quarto com chuveiro, pia e vaso sanitário",
            "Prazo máximo de hospedagem: 15 dias (prorrogável)",
            "Reservas devem ser feitas com antecedência mínima de 5 dias",
          ]}
          contactInfo={{
            hours: "Segunda a Sexta, 8h às 18h",
            email: "alojamento@radialistaspa.org.br",
            phone: "(91) 3344-7770",
          }}
          regulations={[
            "Manter o máximo de silêncio ao recolher-se à noite, respeitando o repouso dos demais hóspedes",
            "Assinar Termo de Responsabilidade quanto a possíveis danos aos materiais e bens patrimoniais",
            "O Sindicato não se responsabiliza por valores ou objetos deixados nos quartos",
            "Deixar as chaves na recepção ao sair do quarto",
            "Manter os alojamentos e banheiros limpos e em bom estado de higiene",
            "Não é permitido lavar e passar roupas nas dependências do quarto",
            "Proibido colocar pregos ou grampos nas paredes ou portas",
            "Não é permitido mudar a posição dos beliches e móveis",
            "Visitas devem ser atendidas na sala de espera",
            "Proibido bebidas alcoólicas, drogas e animais de qualquer espécie",
          ]}
        />

        {/* Ginásio */}
        <FacilitiesSection
          badge="Esportes"
          title="Ginásio de Esportes"
          description="Espaço disponível para prática esportiva com valores diferenciados para sindicalizados. Ideal para times e grupos."
          imageUrl="/category.jpg"
          imageAlt="Ginásio de Esportes"
          priceTable={[
            { description: "Sindicalizados (qualquer horário)", price: "R$ 120,00" },
            { description: "Não sindicalizados / Externo", price: "R$ 150,00" },
            { description: "Equipes com 5+ sindicalizados", price: "Isento" },
          ]}
          generalInfo={[
            "Reserva deve ser feita até às 16h da quarta-feira",
            "Enviar comprovante de pagamento para esportes@radialistaspa.org.br",
            "Dependentes dos sindicalizados têm as mesmas vantagens",
            "Descontos progressivos conforme número de sindicalizados na equipe",
          ]}
          contactInfo={{
            hours: "Consultar disponibilidade",
            email: "esportes@radialistaspa.org.br",
            phone: "(91) 3344-7799",
          }}
          regulations={[
            "1 sindicalizado na equipe: 20% de desconto",
            "2 sindicalizados: 40% de desconto",
            "3 sindicalizados: 60% de desconto",
            "4 sindicalizados: 80% de desconto",
            "5 ou mais sindicalizados: Isento de taxa",
            "Pagamento via depósito bancário ou PIX",
            "Confirmação da reserva após envio do comprovante",
            "Respeitar os horários reservados",
          ]}
        />

        {/* Content Showcase */}
        <ContentShowcase
          title="Novidades e Informações"
          description="Fique por dentro das últimas novidades sobre benefícios e serviços disponíveis para sindicalizados."
          buttonText="Ver todas as publicações"
          buttonHref="/publicacoes"
          items={showcaseContent}
        />

        {/* CTA Section */}
        <CTASection
          title="Ainda não é sindicalizado?"
          description="Faça sua sindicalização agora e tenha acesso a todos esses benefícios exclusivos. É rápido, fácil e você começa a aproveitar imediatamente."
          primaryButtonText="Sindicalizar-se"
          primaryButtonHref="#"
          secondaryButtonText="Saiba mais"
          secondaryButtonHref="/sindicato"
          imageUrl="/cta.jpg"
          imageAlt="Sindicalização"
        />

        {/* Announcement */}
        <AnnouncementCard
          title="Atenção: Novos convênios disponíveis"
          description="Confira os novos estabelecimentos parceiros que acabaram de firmar convênio com o Sindicato. Mais vantagens para você!"
          primaryButtonText="Ver convênios"
          imageUrl="/hero.jpeg"
          imageAlt="Novos convênios"
        />
      </main>
      <Footer />
    </div>
  );
}
