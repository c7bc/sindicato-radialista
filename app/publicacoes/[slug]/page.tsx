import { cacheLife, cacheTag } from 'next/cache';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import TableOfContentsClient from '@/components/publication-detail/table-of-contents-client';
import RelatedPublications from '@/components/publication-detail/related-publications';

// This would normally come from a CMS or database
// For now, using mock data as an example
const MOCK_PUBLICATIONS = {
  'direitos-trabalhistas-radiodifusao': {
    title: 'Direitos Trabalhistas na Radiodifusão',
    description: 'Conheça os principais direitos trabalhistas dos profissionais de rádio e TV. Entenda suas garantias e como exercê-las no dia a dia.',
    date: '20 Jan 2025',
    category: 'Jurídico',
    tags: ['Direitos', 'Trabalhista', 'Legislação'],
    image: '/hero.jpeg',
    content: `
      <h2>Direitos Fundamentais dos Radialistas</h2>
      <p>Os profissionais de radiodifusão possuem direitos específicos garantidos pela legislação trabalhista brasileira, incluindo a CLT e leis específicas da categoria.</p>

      <h2>Jornada de Trabalho</h2>
      <p>A jornada de trabalho dos radialistas é regulamentada pela Lei nº 6.615/78, que estabelece condições especiais para os profissionais da categoria.</p>

      <h3>Horas Extras e Adicional Noturno</h3>
      <p>Todo trabalho realizado além da jornada normal deve ser remunerado com adicional de no mínimo 50%. O trabalho noturno também possui adicional específico.</p>

      <h2>Convenção Coletiva</h2>
      <p>O sindicato negocia anualmente benefícios e melhorias nas condições de trabalho através da convenção coletiva, que estabelece pisos salariais e benefícios.</p>

      <h3>Benefícios Garantidos</h3>
      <p>A convenção coletiva estabelece diversos benefícios como vale-alimentação, auxílio-saúde, e outros direitos específicos da categoria.</p>

      <h2>Férias e 13º Salário</h2>
      <p>Os radialistas têm direito a 30 dias de férias remuneradas após 12 meses de trabalho, além do 13º salário proporcional.</p>

      <h2>Segurança no Trabalho</h2>
      <p>As empresas de radiodifusão devem garantir condições adequadas de trabalho, incluindo equipamentos de qualidade e ambiente salubre.</p>

      <h2>Como Exercer Seus Direitos</h2>
      <p>Em caso de violação de direitos, procure o sindicato para orientação e suporte jurídico. O SINRAD-PA está sempre pronto para defender os trabalhadores.</p>
    `,
  },
  'convencao-coletiva-2025': {
    title: 'Convenção Coletiva 2025: Conquistas e Benefícios',
    description: 'Saiba tudo sobre a nova convenção coletiva e os benefícios conquistados pelo SINRAD-PA para a categoria dos radialistas.',
    date: '15 Jan 2025',
    category: 'Notícias',
    tags: ['Convenção', 'Benefícios', 'Conquistas'],
    image: '/cta.jpg',
    content: `
      <h2>Principais Conquistas da Convenção 2025</h2>
      <p>A convenção coletiva de 2025 trouxe importantes avanços para a categoria dos radialistas, fruto de intensa negociação do sindicato.</p>

      <h2>Reajuste Salarial</h2>
      <p>Foi conquistado reajuste salarial acima da inflação, garantindo ganho real de poder aquisitivo para os trabalhadores.</p>

      <h3>Novos Pisos Salariais</h3>
      <p>Os pisos salariais foram reajustados em todas as categorias, beneficiando desde locutores até técnicos de áudio.</p>

      <h2>Benefícios Ampliados</h2>
      <p>Houve aumento no valor do vale-alimentação e inclusão de novos benefícios como auxílio home office para jornalistas.</p>

      <h2>Condições de Trabalho</h2>
      <p>Foram estabelecidas novas regras para garantir melhor qualidade de vida no trabalho, incluindo pausas e intervalos adequados.</p>

      <h2>Vigência e Aplicação</h2>
      <p>A convenção está em vigor desde 1º de janeiro de 2025 e se aplica a todas as empresas de radiodifusão do Pará.</p>
    `,
  },
  'guia-sindicalizacao': {
    title: 'Guia Completo de Sindicalização',
    description: 'Entenda como se sindicalizar e aproveitar todos os benefícios que o SINRAD-PA oferece aos trabalhadores da radiodifusão.',
    date: '10 Jan 2025',
    category: 'Informativo',
    tags: ['Sindicalização', 'Benefícios', 'Guia'],
    image: '/category.jpg',
    content: `
      <h2>Por Que Se Sindicalizar?</h2>
      <p>A sindicalização garante representação, proteção e acesso a benefícios exclusivos para os trabalhadores da radiodifusão.</p>

      <h2>Benefícios da Sindicalização</h2>
      <p>Ao se filiar ao SINRAD-PA, você tem acesso a assessoria jurídica gratuita, descontos em parceiros, e participação nas decisões da categoria.</p>

      <h3>Assessoria Jurídica</h3>
      <p>Todos os sindicalizados têm direito a consultoria e defesa jurídica gratuita em questões trabalhistas.</p>

      <h3>Convênios e Descontos</h3>
      <p>O sindicato mantém convênios com farmácias, supermercados, escolas e outros estabelecimentos, oferecendo descontos exclusivos.</p>

      <h2>Como Se Sindicalizar</h2>
      <p>O processo é simples e rápido. Basta preencher a ficha de filiação, apresentar documentos e pagar a taxa de inscrição.</p>

      <h3>Documentos Necessários</h3>
      <p>Você precisará de RG, CPF, comprovante de residência e comprovante de vínculo empregatício na área de radiodifusão.</p>

      <h2>Valores e Contribuição</h2>
      <p>A contribuição sindical é um pequeno percentual do salário e garante todos os direitos e benefícios da sindicalização.</p>

      <h2>Seus Direitos Como Sindicalizado</h2>
      <p>Além da proteção jurídica, você pode votar e ser votado nas eleições do sindicato, participando ativamente das decisões.</p>
    `,
  },
  'importancia-sindicato-radiodifusao': {
    title: 'A Importância do Sindicato para os Radialistas',
    description: 'Descubra o papel fundamental do SINRAD-PA na defesa dos direitos e na melhoria das condições de trabalho dos profissionais de rádio e TV.',
    date: '5 Jan 2025',
    category: 'Institucional',
    tags: ['Sindicato', 'Representação', 'História'],
    image: '/hero.jpeg',
    content: `
      <h2>O Papel do Sindicato</h2>
      <p>O SINRAD-PA atua como representante legítimo dos trabalhadores da radiodifusão, defendendo seus interesses e lutando por melhores condições.</p>

      <h2>História e Conquistas</h2>
      <p>Ao longo de décadas, o sindicato conquistou direitos importantes para a categoria, desde pisos salariais até benefícios exclusivos.</p>

      <h3>Principais Marcos</h3>
      <p>Entre as conquistas históricas estão a regulamentação da jornada de trabalho, o reconhecimento profissional e diversos avanços sociais.</p>

      <h2>Atuação Coletiva</h2>
      <p>O sindicato negocia convenções coletivas, representa a categoria perante empresas e governo, e oferece suporte individual aos trabalhadores.</p>

      <h2>Educação e Capacitação</h2>
      <p>Além da defesa de direitos, o SINRAD-PA promove cursos, workshops e eventos para desenvolvimento profissional dos sindicalizados.</p>

      <h2>Solidariedade e União</h2>
      <p>A força do sindicato vem da união dos trabalhadores. Quanto mais unidos, maiores as conquistas para toda a categoria.</p>
    `,
  },
  'seguranca-trabalho-radios': {
    title: 'Segurança do Trabalho em Rádios e TVs',
    description: 'Normas e práticas essenciais para garantir um ambiente de trabalho seguro e saudável nas empresas de radiodifusão.',
    date: '28 Dez 2024',
    category: 'Saúde e Segurança',
    tags: ['Segurança', 'Saúde', 'Normas'],
    image: '/category.jpg',
    content: `
      <h2>Normas de Segurança Aplicáveis</h2>
      <p>As empresas de radiodifusão devem seguir as Normas Regulamentadoras (NRs) do Ministério do Trabalho, garantindo ambiente seguro.</p>

      <h2>Riscos Ocupacionais</h2>
      <p>Radialistas estão expostos a diversos riscos, incluindo problemas vocais, ergonômicos e relacionados a equipamentos elétricos.</p>

      <h3>Prevenção de Lesões Vocais</h3>
      <p>Profissionais da locução devem receber orientação fonoaudiológica e ter pausas adequadas para preservar a saúde vocal.</p>

      <h3>Ergonomia no Estúdio</h3>
      <p>Cadeiras adequadas, iluminação correta e posicionamento de equipamentos são essenciais para prevenir lesões por esforço repetitivo.</p>

      <h2>Equipamentos de Proteção</h2>
      <p>Quando necessário, a empresa deve fornecer EPIs adequados, especialmente para técnicos que trabalham com equipamentos de alta tensão.</p>

      <h2>CIPA e Prevenção</h2>
      <p>A Comissão Interna de Prevenção de Acidentes (CIPA) é obrigatória e deve ter participação ativa dos trabalhadores.</p>

      <h2>Denúncias e Fiscalização</h2>
      <p>Situações de risco devem ser denunciadas ao sindicato, que acionará os órgãos competentes para fiscalização e correção.</p>
    `,
  },
};

const RELATED_PUBLICATIONS = [
  {
    slug: 'direitos-trabalhistas-radiodifusao',
    title: 'Direitos Trabalhistas na Radiodifusão',
    excerpt: 'Conheça os principais direitos trabalhistas dos profissionais de rádio e TV.',
    category: 'Jurídico',
    date: '20 Jan 2025',
    image: '/hero.jpeg',
  },
  {
    slug: 'convencao-coletiva-2025',
    title: 'Convenção Coletiva 2025',
    excerpt: 'Saiba tudo sobre a nova convenção coletiva e os benefícios conquistados.',
    category: 'Notícias',
    date: '15 Jan 2025',
    image: '/cta.jpg',
  },
  {
    slug: 'guia-sindicalizacao',
    title: 'Guia de Sindicalização',
    excerpt: 'Entenda como se sindicalizar e aproveitar todos os benefícios.',
    category: 'Informativo',
    date: '10 Jan 2025',
    image: '/category.jpg',
  },
  {
    slug: 'importancia-sindicato-radiodifusao',
    title: 'A Importância do Sindicato para os Radialistas',
    excerpt: 'Descubra o papel fundamental do SINRAD-PA na defesa dos direitos dos profissionais.',
    category: 'Institucional',
    date: '5 Jan 2025',
    image: '/hero.jpeg',
  },
  {
    slug: 'seguranca-trabalho-radios',
    title: 'Segurança do Trabalho em Rádios e TVs',
    excerpt: 'Normas e práticas essenciais para garantir um ambiente de trabalho seguro.',
    category: 'Saúde e Segurança',
    date: '28 Dez 2024',
    image: '/category.jpg',
  },
];

// Cached content component
async function PublicationContent({ slug }: { slug: string }) {
  'use cache';

  // Configure cache with 6 hours TTL
  cacheLife({
    stale: 21600,     // 6 hours - how long content stays fresh on client
    revalidate: 3600, // 1 hour - background revalidation interval
    expire: 43200,    // 12 hours - absolute expiration
  });

  // Add cache tags for on-demand revalidation
  cacheTag('publications', `publication-${slug}`);

  // Get publication data
  const publication = MOCK_PUBLICATIONS[slug as keyof typeof MOCK_PUBLICATIONS];

  if (!publication) {
    notFound();
  }

  // Filter related publications (exclude current)
  const relatedPubs = RELATED_PUBLICATIONS.filter(pub => pub.slug !== slug);

  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
              {/* Metadata */}
              <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                <span className="text-sm font-semibold text-secondary md:text-md">
                  Publicado em {publication.date}
                </span>
                <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                  {publication.title}
                </h1>
                <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                  {publication.description}
                </p>
              </div>

              {/* Category Tags */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex bg-utility-brand-50 px-2 py-0.5 text-xs font-medium text-brand-600 ring-1 ring-inset ring-utility-brand-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <img
              className="mt-12 h-60 w-full rounded object-cover md:mt-16 md:h-160"
              src={publication.image}
              alt={`${publication.title} - imagem destacada`}
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_250px] xl:gap-16">
              {/* Main Content - Client Wrapper for TOC */}
              <TableOfContentsClient
                content={publication.content}
                slug={slug}
                title={publication.title}
              />
            </div>
          </div>
        </section>

        {/* Related Publications */}
        <RelatedPublications publications={relatedPubs} />
    </main>
  );
}

// Generate static params for all publications
export function generateStaticParams() {
  return Object.keys(MOCK_PUBLICATIONS).map((slug) => ({
    slug,
  }));
}

// Main page component (not cached)
export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Suspense fallback={
        <main className="flex-1 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-600 border-r-transparent"></div>
            <p className="mt-4 text-tertiary">Carregando publicação...</p>
          </div>
        </main>
      }>
        <PublicationContent slug={slug} />
      </Suspense>
      <Footer />
    </div>
  );
}
