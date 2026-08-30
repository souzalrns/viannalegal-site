"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  function validate() {
    const e: Partial<typeof formData> = {};
    if (formData.name.trim().length < 2) e.name = "Informe o seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "E-mail inválido.";
    if (formData.message.trim().length < 10) e.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot anti-spam — mesmo mecanismo do site actual.
    const honeypot = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement)?.value;
    if (honeypot) {
      setFormState("success");
      return;
    }

    setFormState("submitting");

    try {
      // Web3Forms — mesma access_key já confirmada em produção (destino: kathia.vianna-56666p@adv.oa.pt).
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "c310b18f-8bc6-4b53-a42b-73e2b4ae2b60",
          subject: "Novo contacto — Site ViannaLegal",
          from_name: "ViannaLegal — Formulário de Contacto",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setFormState("success");
      } else {
        throw new Error(data.message || "Falha no envio");
      }
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="answer-block">
        <strong>Mensagem enviada com sucesso.</strong> A Kathia Vianna responde em até 24 horas.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="contact-name">Nome completo *</label>
        <br />
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
          required
          style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
        />
        {errors.name && <p style={{ color: "#b91c1c", fontSize: "0.85rem" }}>{errors.name}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="contact-email">E-mail *</label>
        <br />
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          required
          style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
        />
        {errors.email && <p style={{ color: "#b91c1c", fontSize: "0.85rem" }}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="contact-phone">Telefone / WhatsApp</label>
        <br />
        <input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
          style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="contact-message">Mensagem *</label>
        <br />
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          required
          rows={5}
          style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
        />
        {errors.message && <p style={{ color: "#b91c1c", fontSize: "0.85rem" }}>{errors.message}</p>}
      </div>

      <button type="submit" disabled={formState === "submitting"}>
        {formState === "submitting" ? "A enviar…" : "Enviar mensagem"}
      </button>

      {formState === "error" && (
        <p style={{ color: "#b91c1c", marginTop: "0.75rem" }}>
          Não foi possível enviar agora.{" "}
          <a href="https://wa.me/351913134260" target="_blank" rel="noopener noreferrer">
            Fale por WhatsApp
          </a>{" "}
          em alternativa.
        </p>
      )}
    </form>
  );
}
