import Header from "@/components/header";
import ContactInfoSection from "@/components/contact-info-section";
import TabsSection from "@/components/tabs-section";
import ContentShowcase from "@/components/content-showcase";
import CTASection from "@/components/cta-section";
import AnnouncementCard from "@/components/announcement-card";
import Footer from "@/components/footer";
import MailIcon from "@/components/icons/mail";
import PhoneIcon from "@/components/icons/phone";
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

// Mock data para informações de contato
const mockContacts = [
  {
    id: "1",
    icon: <MailIcon />,
    title: "E-mail",
    description: "Nossa equipe está pronta para ajudar.",
    linkText: "juridico@sinradpa.org.br",
    linkHref: "mailto:juridico@sinradpa.org.br",
  },
  {
    id: "2",
    icon: <MapPinIcon />,
    title: "Escritório",
    description: "Visite nosso escritório jurídico.",
    linkText: "Rua dos Radialistas, 123\nBelém - PA, 66000-000",
    linkHref: "https://maps.google.com",
  },
  {
    id: "3",
    icon: <PhoneIcon />,
    title: "Telefone",
    description: "Segunda a Sexta: 8h às 18h",
    linkText: "(91) 3344-7769",
    linkHref: "tel:+559133447769",
  },
];

// Content para as tabs
const atendimentoContent = (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-primary">
      Assessoria Jurídica Completa
    </h3>
    <p>
      Os radialistas sindicalizados ao Sindicato dos Radialistas do Pará dispõem
      de estrutura física e de pessoal qualificado para assessoramento jurídico
      contra a violação de direitos, orientação para lutar pelos direitos
      trabalhistas, avaliação jurídica das propostas das emissoras aos
      trabalhadores, acompanhamento de procedimentos administrativos, ações
      judiciais individuais e coletivas, entre outros.
    </p>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-primary">
        Equipe Jurídica
      </h4>
      <ul className="mt-4 space-y-2">
        <li>
          <strong>Diretor Jurídico:</strong> Dr. Carlos Mendes
        </li>
        <li>
          <strong>Assessora:</strong> Dra. Ana Paula Silva
        </li>
      </ul>
    </div>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-primary">
        Horários de Atendimento
      </h4>
      <p className="mt-2">
        <strong>Plantão jurídico:</strong> 8h às 12h e 14h às 18h (segunda a sexta-feira)
      </p>
      <p className="mt-2">
        <strong>E-mail:</strong> juridico@sinradpa.org.br
      </p>
      <p className="mt-2">
        <strong>Telefone:</strong> (91) 3344-7769
      </p>
    </div>
  </div>
);

const plantaoContent = (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-primary">
      Plantão Jurídico
    </h3>
    <p>
      Com o objetivo de atender a todos os radialistas que procuram o Sindicato
      para orientações jurídicas, a entidade oferece plantão jurídico em nossa
      sede em Belém. Confira os horários:
    </p>

    <div className="mt-6 bg-utility-brand-50 p-6 ring-1 ring-utility-brand-200">
      <h4 className="text-lg font-semibold text-primary">
        Sede Principal - Belém
      </h4>
      <p className="mt-2">
        <strong>Segunda a sexta-feira</strong>
        <br />
        9h às 13h e 14h às 18h
      </p>
    </div>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-primary">
        Subsedes
      </h4>
      <p className="mt-4">
        O Sindicato realiza periodicamente plantões jurídicos extraordinários nas
        subsedes em Marabá e Santarém.
      </p>
      <ul className="mt-4 space-y-4">
        <li>
          <strong>Marabá:</strong> Quartas-feiras, das 14h às 17h
        </li>
        <li>
          <strong>Santarém:</strong> Plantão periódico através de agendamento prévio
        </li>
      </ul>
      <p className="mt-4">
        Para saber informações sobre a data dos plantões extraordinários, fique
        ligado em nosso site e redes sociais. Você também pode entrar em contato
        via WhatsApp enviando seus dados (nome completo, emissora e município)
        para (91) 98426-1399.
      </p>
    </div>
  </div>
);

const escritoriosContent = (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-primary">
      Escritórios Conveniados
    </h3>
    <p>
      O Sindicato mantém convênio com escritórios de advocacia especializados em
      direito trabalhista para melhor atendê-lo.
    </p>

    <div className="mt-8 space-y-8">
      <div>
        <h4 className="text-lg font-semibold text-primary">Belém</h4>

        <div className="mt-4 space-y-6">
          <div className="border-l-2 border-brand-600 pl-4">
            <h5 className="font-semibold text-primary">
              Silva & Associados Advocacia Trabalhista
            </h5>
            <p className="mt-2 text-sm text-tertiary">
              Edifício Business Center – Av. Presidente Vargas, 1234, 15º andar, sala 1502 – Campina
              <br />
              CEP: 66.010-000 – Belém-Pará
            </p>
            <p className="mt-1 text-sm">
              <strong>Tel:</strong> (91) 3241-1696 | 3241-9112 | 99268-2858
            </p>
          </div>

          <div className="border-l-2 border-brand-600 pl-4">
            <h5 className="font-semibold text-primary">
              Mendes, Costa & Oliveira Advogados
            </h5>
            <p className="mt-2 text-sm text-tertiary">
              Rua dos Tamoios, n° 890 – Batista Campos
              <br />
              CEP: 66033-320 – Belém-Pará
            </p>
            <p className="mt-1 text-sm">
              <strong>Tel:</strong> (91) 3355-3567 | 98806-5060
              <br />
              <strong>E-mail:</strong> contato@mcoadv.com.br
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-primary">Marabá</h4>

        <div className="mt-4">
          <div className="border-l-2 border-brand-600 pl-4">
            <h5 className="font-semibold text-primary">
              Almeida & Santos Advocacia
            </h5>
            <p className="mt-2 text-sm text-tertiary">
              Folha 27, Quadra 14, Lote 18 – Nova Marabá
              <br />
              CEP: 68.509-230 – Marabá-Pará
            </p>
            <p className="mt-1 text-sm">
              <strong>Tel:</strong> (94) 3322-1837
              <br />
              <strong>E-mail:</strong> contato@almeidasantos.adv.br
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const homologacaoContent = (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-primary">
      Homologação de Rescisão
    </h3>
    <p>
      A homologação será obrigatória sempre que se tratar de rescisão de contrato
      firmado por mais de um ano. Este ato consiste no pagamento das verbas
      rescisórias a que o empregado fizer jus. O Sindicato dos Radialistas do Pará
      possui uma equipe especializada, composta por advogados e estagiários da área
      jurídica, preparados para conferir toda a documentação, buscando sempre a
      proteção dos direitos dos radialistas.
    </p>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-primary">
        Serviços Oferecidos na Homologação
      </h4>
      <ul className="mt-4 list-inside list-disc space-y-2">
        <li>Conferência dos dados pessoais e profissionais do radialista</li>
        <li>
          Conferência de todas as verbas rescisórias, ressalvando o direito de
          reclamar judicialmente as parcelas não pagas
        </li>
        <li>
          Conferência da documentação necessária para encaminhamento da liberação
          do FGTS junto à Caixa
        </li>
        <li>Encaminhamento para orientações sobre seus direitos e garantias</li>
      </ul>
    </div>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-primary">
        Agendamento
      </h4>
      <p className="mt-2">
        Segunda a sexta-feira, de 9h às 13h e das 14h às 18h
        <br />
        Telefone: (91) 3344-7769
      </p>
    </div>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-primary">
        Horário das Homologações
      </h4>
      <p className="mt-2">
        As homologações ocorrem de segunda a quinta de 14h30 às 18h.
      </p>
    </div>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-primary">
        Documentação Necessária
      </h4>
      <ul className="mt-4 list-inside list-disc space-y-2">
        <li>5 vias do TRCT (Termo de Rescisão do Contrato de Trabalho)</li>
        <li>
          Exame demissional fornecido pelo médico do trabalho ou exame periódico
          com menos de 60 dias
        </li>
        <li>Carta de preposição</li>
        <li>
          Extrato do FGTS fornecido pela Caixa (em caso de demissão sem justa
          causa)
        </li>
        <li>
          Guia do pagamento da multa de 40% sobre o FGTS (em caso de demissão sem
          justa causa)
        </li>
        <li>
          Chave de identificação para saque do FGTS (em caso de demissão sem justa
          causa)
        </li>
        <li>
          Guias do seguro-desemprego (em caso de demissão sem justa causa)
        </li>
      </ul>
    </div>
  </div>
);

const consultaContent = (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-primary">
      Consulta Processual
    </h3>
    <p>
      Confira os sites que disponibilizam informações do andamento das ações:
    </p>

    <div className="mt-6 space-y-4">
      <div>
        <h4 className="font-semibold text-primary">
          Tribunal Regional do Trabalho 8ª Região (TRT-8)
        </h4>
        <a
          href="http://www.trt8.jus.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-secondary hover:underline"
        >
          www.trt8.jus.br
        </a>
      </div>

      <div>
        <h4 className="font-semibold text-primary">
          Tribunal Superior do Trabalho (TST)
        </h4>
        <a
          href="http://www.tst.jus.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-secondary hover:underline"
        >
          www.tst.jus.br
        </a>
      </div>

      <div>
        <h4 className="font-semibold text-primary">
          Tribunal Regional Federal 1ª Região (TRF-1)
        </h4>
        <a
          href="http://www.trf1.jus.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-secondary hover:underline"
        >
          www.trf1.jus.br
        </a>
      </div>

      <div>
        <h4 className="font-semibold text-primary">
          Tribunal de Justiça do Estado do Pará (TJ-PA)
        </h4>
        <a
          href="http://www.tjpa.jus.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-secondary hover:underline"
        >
          www.tjpa.jus.br
        </a>
      </div>

      <div>
        <h4 className="font-semibold text-primary">
          Superior Tribunal de Justiça (STJ)
        </h4>
        <a
          href="http://www.stj.jus.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-secondary hover:underline"
        >
          www.stj.jus.br
        </a>
      </div>

      <div>
        <h4 className="font-semibold text-primary">
          Supremo Tribunal Federal (STF)
        </h4>
        <a
          href="http://www.stf.jus.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-secondary hover:underline"
        >
          www.stf.jus.br
        </a>
      </div>
    </div>
  </div>
);

const acoesContent = (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-primary">
      Ações Coletivas em Andamento
    </h3>
    <p>
      O Sindicato dos Radialistas do Pará ingressou com diversas ações coletivas
      pleiteando vários direitos para a categoria, incluindo redução de jornada,
      pagamento de horas extras, adicional de insalubridade e periculosidade, entre
      outros direitos trabalhistas.
    </p>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-primary">
        Como Participar
      </h4>
      <p className="mt-4">
        Para saber se você está enquadrado em alguma das ações coletivas ou para
        receber orientações sobre seus direitos, procure o setor jurídico do
        Sindicato de segunda à quinta-feira, no horário de 14h às 17h.
      </p>
      <p className="mt-4">
        É importante manter seus dados atualizados junto ao Sindicato. Você pode
        fazer isso através do nosso site ou presencialmente em nossa sede.
      </p>
    </div>

    <div className="mt-8 bg-utility-warning-50 p-6 ring-1 ring-utility-warning-200">
      <h4 className="text-lg font-semibold text-primary">
        Importante
      </h4>
      <p className="mt-2">
        Algumas ações ainda estão em fase de discussão judicial. O Sindicato
        acompanha de perto cada processo e mantém os associados informados sobre o
        andamento através de nossos canais de comunicação.
      </p>
    </div>
  </div>
);

// Tabs data
const juridicalTabs = [
  { id: "atendimento", label: "Atendimento", content: atendimentoContent },
  { id: "plantao", label: "Plantão Jurídico", content: plantaoContent },
  { id: "escritorios", label: "Escritórios Conveniados", content: escritoriosContent },
  { id: "homologacao", label: "Homologação", content: homologacaoContent },
  { id: "consulta", label: "Consulta Processual", content: consultaContent },
  { id: "acoes", label: "Ações Coletivas", content: acoesContent, badge: "Novo" },
];

// Mock data para Content Showcase
const mockPublicacoes = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    imageAlt: "Direitos trabalhistas",
    category: "Jurídico",
    date: "4 de novembro de 2025",
    title: "Entenda seus direitos: férias, 13º e horas extras",
    description: "Guia completo sobre os principais direitos trabalhistas dos radialistas.",
    link: "#",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
    imageAlt: "Assessoria jurídica",
    category: "Orientações",
    date: "2 de novembro de 2025",
    title: "Como o Sindicato pode te ajudar juridicamente",
    description: "Conheça todos os serviços jurídicos disponíveis para associados.",
    link: "#",
  },
];

export default function JuridicoPage() {
  return (
    <div className="bg-white">
      <main className="max-w-7xl mx-auto">
        <Header navItems={navItems} />

        <ContactInfoSection
          badge="Fale conosco"
          title="Estamos aqui para te ajudar"
          description="Nossa equipe jurídica está sempre disponível para orientar e defender seus direitos."
          contacts={mockContacts}
        />

        <TabsSection tabs={juridicalTabs} defaultTab="atendimento" />

        <ContentShowcase
          title="Orientações Jurídicas"
          description="Fique por dentro das últimas orientações e informações jurídicas para a categoria."
          items={mockPublicacoes}
          buttonText="Ver todas as orientações"
          buttonHref="#orientacoes"
        />

        <CTASection
          title="Precisa de assessoria jurídica?"
          description="Não fique sozinho na defesa dos seus direitos. O Sindicato oferece assessoria jurídica completa e gratuita para todos os associados."
          primaryButtonText="Agendar atendimento"
          primaryButtonHref="#atendimento"
          secondaryButtonText="Sindicalize-se"
          secondaryButtonHref="#sindicalize"
          imageUrl="/category.jpg"
          imageAlt="Assessoria jurídica"
        />

        <AnnouncementCard
          imageUrl="/cta.jpg"
          imageAlt="Atendimento jurídico"
          title="Atualize seus dados"
          description="Mantenha seus dados atualizados para receber notificações sobre ações coletivas e outras informações jurídicas importantes."
          primaryButtonText="Atualizar cadastro"
        />
      </main>
      <Footer />
    </div>
  );
}
