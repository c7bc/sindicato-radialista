import Header from "@/components/header";
import PublicationsHero from "@/components/publications-hero";
import FormSection from "@/components/form-section";
import CTASection from "@/components/cta-section";
import AnnouncementCard from "@/components/announcement-card";
import Footer from "@/components/footer";

const newsletterFields = [
  {
    id: "nome",
    name: "nome",
    type: "text" as const,
    label: "Nome completo",
    placeholder: "Digite seu nome completo",
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email" as const,
    label: "E-mail",
    placeholder: "seu@email.com",
    required: true,
  },
  {
    id: "celular",
    name: "celular",
    type: "tel" as const,
    label: "Celular",
    placeholder: "(00) 00000-0000",
    required: false,
  },
];

export default function NewsletterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <PublicationsHero
              badge="Newsletter"
              title="Receba nossas novidades por e-mail"
              description="Inscreva-se na newsletter do SINRAD-PA e fique por dentro das principais notícias, eventos e conquistas da categoria."
            />
          </div>
        </section>
        <FormSection
          title="Cadastre-se na nossa newsletter"
          description="Preencha o formulário abaixo para receber periodicamente informações sobre o sindicato, direitos trabalhistas, eventos e muito mais."
          fields={newsletterFields}
          checkboxLabel="Aceito receber comunicações do SINRAD-PA por e-mail e outros canais digitais."
          checkboxRequired={true}
          submitButtonText="Assinar newsletter"
        />
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
