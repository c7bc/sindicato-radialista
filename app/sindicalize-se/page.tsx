"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContentShowcase from "@/components/content-showcase";
import CTASection from "@/components/cta-section";
import AnnouncementCard from "@/components/announcement-card";
import SignaturePad from "@/components/signature-pad";

const navItems = [
  { label: "INÍCIO", href: "/" },
  { label: "SINDICATO", href: "/sindicato" },
  { label: "JURÍDICO", href: "/juridico" },
  { label: "PUBLICAÇÕES", href: "/publicacoes" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "NEWSLETTER", href: "/newsletter" },
  { label: "CONTATO", href: "/contato" },
];

const mockPublicacoes = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    imageAlt: "Assessoria jurídica",
    category: "Orientação",
    date: "4 de novembro de 2025",
    title: "Direitos trabalhistas do radialista",
    description: "Conheça seus direitos e deveres como profissional da comunicação.",
    link: "#",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    imageAlt: "Documentação",
    category: "Orientação",
    date: "3 de novembro de 2025",
    title: "Como solicitar assistência jurídica",
    description: "Passo a passo para acessar os serviços jurídicos do sindicato.",
    link: "#",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    imageAlt: "Benefícios",
    category: "Orientação",
    date: "2 de novembro de 2025",
    title: "Benefícios para sindicalizados",
    description: "Descubra todas as vantagens de ser um associado.",
    link: "#",
  },
];

export default function SindicalizeSe() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    email: "",
    celular: "",
    dataNascimento: "",
    empresa: "",
    cargo: "",
  });
  const [signature, setSignature] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!signature) {
      alert("Por favor, assine o formulário antes de enviar.");
      return;
    }

    if (!termsAccepted) {
      alert("Você precisa aceitar os termos para se sindicalizar.");
      return;
    }

    setIsSubmitting(true);

    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Dados de sindicalização:", { ...formData, signature });

    // Simulação de envio
    setTimeout(() => {
      alert("Cadastro realizado com sucesso! Em breve entraremos em contato.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        nomeCompleto: "",
        cpf: "",
        email: "",
        celular: "",
        dataNascimento: "",
        empresa: "",
        cargo: "",
      });
      setSignature(null);
      setTermsAccepted(false);
    }, 1500);
  };

  return (
    <div className="bg-white">
      <main className="max-w-7xl mx-auto">
        <Header navItems={navItems} />

        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-display-md md:text-display-lg font-bold text-text-primary mb-4">
              Faça parte do Sindicato
            </h1>
            <p className="text-lg md:text-xl text-text-secondary">
              Una-se a milhares de radialistas que já contam com a força e proteção do sindicato.
              Juntos somos mais fortes na defesa dos nossos direitos.
            </p>
          </div>

          {/* Formulário de Sindicalização */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xs-skeumorphic p-8 md:p-12">
            <h2 className="text-display-sm font-bold text-text-primary mb-2">
              Formulário de Sindicalização
            </h2>
            <p className="text-md text-text-secondary mb-8">
              Preencha os dados abaixo para iniciar seu processo de sindicalização.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome Completo */}
              <div>
                <label htmlFor="nomeCompleto" className="block text-sm font-medium text-text-secondary mb-2">
                  Nome Completo <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  id="nomeCompleto"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* CPF */}
              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-text-secondary mb-2">
                  CPF <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                  placeholder="000.000.000-00"
                  pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  E-mail <span className="text-error-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Celular */}
              <div>
                <label htmlFor="celular" className="block text-sm font-medium text-text-secondary mb-2">
                  Celular <span className="text-error-600">*</span>
                </label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* Data de Nascimento */}
              <div>
                <label htmlFor="dataNascimento" className="block text-sm font-medium text-text-secondary mb-2">
                  Data de Nascimento <span className="text-error-600">*</span>
                </label>
                <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                />
              </div>

              {/* Empresa/Veículo */}
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-text-secondary mb-2">
                  Empresa/Veículo onde trabalha
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                  placeholder="Nome da empresa ou veículo"
                />
              </div>

              {/* Cargo/Função */}
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-text-secondary mb-2">
                  Cargo/Função
                </label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                  placeholder="Ex: Locutor, Repórter, Produtor"
                />
              </div>

              {/* Assinatura Digital */}
              <SignaturePad onSignatureChange={setSignature} />

              {/* Termos */}
              <div className="flex items-start gap-3 pt-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 text-brand-600 border-border-primary rounded focus:ring-brand-600"
                />
                <label htmlFor="terms" className="text-sm text-text-secondary">
                  Declaro que li e aceito os termos de sindicalização e autorizo o desconto da contribuição
                  sindical conforme estabelecido em convenção coletiva. <span className="text-error-600">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !signature}
                className="w-full bg-brand-solid text-white py-4 px-6 rounded-lg font-semibold
                         hover:bg-brand-solid_hover disabled:bg-gray-300 disabled:cursor-not-allowed
                         transition duration-100 ease-linear shadow-xs"
              >
                {isSubmitting ? "Enviando..." : "Confirmar Sindicalização"}
              </button>
            </form>
          </div>
        </section>

        {/* ContentShowcase */}
        <ContentShowcase
          title="Orientações Jurídicas"
          description="Fique por dentro das últimas orientações e informações jurídicas para a categoria."
          items={mockPublicacoes}
          buttonText="Ver todas as orientações"
          buttonHref="/juridico"
        />

        {/* CTASection */}
        <CTASection
          title="Precisa de assessoria jurídica?"
          description="Não fique sozinho na defesa dos seus direitos. O Sindicato oferece assessoria jurídica completa e gratuita para todos os associados."
          primaryButtonText="Agendar atendimento"
          primaryButtonHref="/juridico"
          secondaryButtonText="Sindicalize-se"
          secondaryButtonHref="/sindicalize-se"
          imageUrl="/category.jpg"
          imageAlt="Assessoria jurídica"
        />

        {/* AnnouncementCard */}
        <div className="px-4 py-16">
          <AnnouncementCard
            imageUrl="/cta.jpg"
            imageAlt="Atendimento jurídico"
            title="Atualize seus dados"
            description="Mantenha seus dados atualizados para receber notificações sobre ações coletivas e outras informações jurídicas importantes."
            primaryButtonText="Atualizar cadastro"
            onPrimaryClick={() => console.log("Atualizar cadastro")}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
