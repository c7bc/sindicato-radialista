"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContentShowcase from "@/components/content-showcase";
import CTASection from "@/components/cta-section";
import AnnouncementCard from "@/components/announcement-card";

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

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    assunto: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Dados de contato:", formData);

    // Simulação de envio
    setTimeout(() => {
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        nome: "",
        email: "",
        celular: "",
        assunto: "",
        mensagem: "",
      });
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
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-text-secondary">
              Estamos aqui para ajudar. Envie sua mensagem e nossa equipe retornará o mais breve possível.
            </p>
          </div>

          {/* Formulário de Contato */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xs-skeumorphic p-8 md:p-12">
            <h2 className="text-display-sm font-bold text-text-primary mb-2">
              Envie sua Mensagem
            </h2>
            <p className="text-md text-text-secondary mb-8">
              Preencha o formulário abaixo com suas informações e dúvidas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Nome <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
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
                <label
                  htmlFor="celular"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
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

              {/* Assunto */}
              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Assunto <span className="text-error-600">*</span>
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition"
                  placeholder="Sobre o que deseja falar?"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Mensagem <span className="text-error-600">*</span>
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border-primary rounded-lg focus:outline-focus-ring focus:border-brand-600 transition resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-solid text-white py-4 px-6 rounded-lg font-semibold
                         hover:bg-brand-solid_hover disabled:bg-gray-300 disabled:cursor-not-allowed
                         transition duration-100 ease-linear shadow-xs"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="max-w-2xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-brand-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Telefone</h3>
              <p className="text-sm text-text-secondary">(91) 3000-0000</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-brand-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">E-mail</h3>
              <p className="text-sm text-text-secondary">contato@sindicato.org.br</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-brand-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Endereço</h3>
              <p className="text-sm text-text-secondary">
                Rua dos Radialistas, 123
                <br />
                Belém - PA
              </p>
            </div>
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
