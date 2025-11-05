"use client";

import { useState, FormEvent } from "react";

interface FormField {
  id: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

interface FormSectionProps {
  title: string;
  description?: string;
  fields: FormField[];
  checkboxLabel?: string;
  checkboxRequired?: boolean;
  submitButtonText?: string;
  onSubmit?: (data: Record<string, string>) => void;
}

export default function FormSection({
  title,
  description,
  fields,
  checkboxLabel,
  checkboxRequired = false,
  submitButtonText = "Enviar",
  onSubmit,
}: FormSectionProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (onSubmit) {
      await onSubmit(formData);
    } else {
      // Default behavior - log to console for now
      console.log("Form submitted:", formData);
      // TODO: Implement actual form submission logic (API call, etc.)
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 md:mb-12">
            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg text-tertiary md:text-xl">
                {description}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label
                  htmlFor={field.id}
                  className="text-sm font-medium text-secondary"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-error-primary"> *</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    rows={field.rows || 4}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="bg-primary px-3.5 py-2.5 text-md text-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset placeholder:text-fg-quaternary focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-disabled resize-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="bg-primary px-3.5 py-2.5 text-md text-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset placeholder:text-fg-quaternary focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-disabled"
                  />
                )}
              </div>
            ))}

            {checkboxLabel && (
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required={checkboxRequired}
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                  className="mt-0.5 size-4 shrink-0 cursor-pointer accent-brand-solid"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-secondary cursor-pointer"
                >
                  {checkboxLabel}
                  {checkboxRequired && (
                    <span className="text-error-primary"> *</span>
                  )}
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-brand-solid px-5 py-3 text-md font-semibold text-fg-white shadow-xs outline-focus-ring transition duration-100 ease-linear hover:bg-brand-solid_hover focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-fg-disabled disabled:shadow-none"
            >
              {isSubmitting ? "Enviando..." : submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
