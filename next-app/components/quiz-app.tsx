"use client";

import { useState } from "react";
import { NODES } from "@/content/quiz-nodes-data";

// Slugs de blog que já existem no site novo (SSG). Vazio até o M3 migrar o blog —
// isto evita links 404 para os 15 artigos que a árvore original referenciava.
const AVAILABLE_BLOG_SLUGS = new Set<string>(["como-tirar-cidadania-portuguesa"]);

const colorMap: Record<string, string> = {
  green: "#059669",
  yellow: "#d97706",
  orange: "#ea580c",
  red: "#dc2626",
};

export function QuizApp() {
  const [history, setHistory] = useState<string[]>(["q1"]);
  const [showLead, setShowLead] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", email: "", whatsapp: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const currentKey = history[history.length - 1];
  const currentNode = NODES[currentKey];

  function goTo(key: string) {
    setHistory((prev) => [...prev, key]);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function restart() {
    setHistory(["q1"]);
    setShowLead(false);
    setSent(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleLead(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      // Mesma access_key Web3Forms já confirmada em produção.
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "c310b18f-8bc6-4b53-a42b-73e2b4ae2b60",
          subject: "Novo lead do Quiz de Elegibilidade — ViannaLegal",
          from_name: "ViannaLegal — Quiz de Elegibilidade",
          name: leadData.name,
          email: leadData.email,
          whatsapp: leadData.whatsapp,
          resultado: currentKey,
        }),
      });
    } catch {
      // silencioso — mostramos sucesso na mesma para não bloquear o utilizador;
      // o WhatsApp continua disponível como alternativa sempre visível.
    }
    setSending(false);
    setSent(true);
  }

  const totalSteps = 5;
  const progress = Math.min(Math.round(((history.length - 1) / totalSteps) * 100), 95);
  const isResult = currentNode?.kind === "result";

  if (!currentNode) return null;

  return (
    <div>
      {!isResult && (
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#666", marginBottom: "0.25rem" }}>
            <span>Progresso</span>
            <span>{progress}%</span>
          </div>
          <div style={{ width: "100%", background: "#eee", borderRadius: "999px", height: "6px" }}>
            <div style={{ width: `${progress}%`, background: "#163c2c", height: "6px", borderRadius: "999px" }} />
          </div>
        </div>
      )}

      {currentNode.kind === "question" && (
        <div className="quiz-card">
          <p className="quiz-category">{currentNode.category}</p>
          <h2 style={{ marginTop: 0 }}>{currentNode.text}</h2>
          {currentNode.hint && <p style={{ fontSize: "0.9rem", color: "#666" }}>{currentNode.hint}</p>}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
            {currentNode.options.map((opt, i) => (
              <button key={i} onClick={() => goTo(opt.next)} className="quiz-option-button">
                <span style={{ fontSize: "1.4rem", marginRight: "0.75rem" }}>{opt.icon}</span>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {currentNode.kind === "comparison" && (
        <div>
          <div className="quiz-card">
            <p className="quiz-category">{currentNode.category}</p>
            <h2 style={{ marginTop: 0 }}>{currentNode.text}</h2>
            {currentNode.subtitle && <p style={{ fontSize: "0.9rem", color: "#666" }}>{currentNode.subtitle}</p>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            {currentNode.options.map((opt, i) => (
              <button key={i} onClick={() => goTo(opt.next)} className="quiz-comparison-button">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem" }}>{opt.icon}</span>
                  <strong>{opt.label}</strong>
                  <span style={{ fontSize: "0.75rem", background: "#f6f3ea", padding: "0.15rem 0.5rem", borderRadius: "999px" }}>
                    {opt.tag}
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontSize: "0.85rem" }}>
                  <div>
                    <p style={{ fontWeight: 600, color: "#059669", margin: "0 0 0.4rem" }}>Vantagens</p>
                    <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                      {opt.pros.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: "#d97706", margin: "0 0 0.4rem" }}>Desvantagens</p>
                    <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                      {opt.cons.map((c, j) => (
                        <li key={j}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {currentNode.kind === "result" &&
        (() => {
          const r = currentNode;
          const validRelated = (r.relatedArticles ?? []).filter((a) => AVAILABLE_BLOG_SLUGS.has(a.slug));
          return (
            <div>
              <div style={{ border: `2px solid ${colorMap[r.type]}`, borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{r.icon}</span>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", opacity: 0.7 }}>
                      {r.tag}
                    </span>
                    <h2 style={{ margin: "0.25rem 0 0" }}>{r.title}</h2>
                  </div>
                </div>
                <p>{r.desc}</p>
              </div>

              {r.docs.length > 0 && (
                <div className="quiz-card" style={{ marginTop: "1rem" }}>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
                    Documentos típicos para este perfil
                  </p>
                  <ul>
                    {r.docs.map((doc, i) => (
                      <li key={i}>{doc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {validRelated.length > 0 && (
                <div className="quiz-card" style={{ marginTop: "1rem" }}>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
                    Artigos relacionados ao seu perfil
                  </p>
                  {validRelated.map((a) => (
                    <p key={a.slug}>
                      <a href={`/blog/${a.slug}`}>{a.title} →</a>
                    </p>
                  ))}
                </div>
              )}

              <div style={{ background: "#163c2c", color: "#fff", borderRadius: "1rem", padding: "1.5rem", marginTop: "1rem" }}>
                {!sent ? (
                  <>
                    <h3 style={{ marginTop: 0 }}>Quer uma avaliação do seu caso?</h3>
                    <p style={{ opacity: 0.85, fontSize: "0.9rem" }}>
                      A Kathia Vianna analisa pessoalmente o seu perfil e responde em até 24 horas.
                    </p>
                    {!showLead ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <button
                          onClick={() => setShowLead(true)}
                          style={{ background: "#fff", color: "#163c2c", fontWeight: 700, padding: "0.75rem", borderRadius: "0.75rem", border: "none", cursor: "pointer" }}
                        >
                          Quero avaliação por e-mail
                        </button>
                        <a
                          href="https://wa.me/351913134260?text=Ol%C3%A1%20Kathia%2C%20fiz%20o%20quiz%20no%20site%20e%20gostaria%20de%20uma%20an%C3%A1lise%20do%20meu%20caso."
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ background: "#25D366", color: "#fff", fontWeight: 700, padding: "0.75rem", borderRadius: "0.75rem", textAlign: "center", textDecoration: "none" }}
                        >
                          Falar no WhatsApp
                        </a>
                      </div>
                    ) : (
                      <form onSubmit={handleLead} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        <input
                          type="text"
                          placeholder="Seu nome"
                          required
                          maxLength={100}
                          value={leadData.name}
                          onChange={(e) => setLeadData((p) => ({ ...p, name: e.target.value }))}
                          style={{ padding: "0.6rem", borderRadius: "0.6rem", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: "#fff" }}
                        />
                        <input
                          type="email"
                          placeholder="Seu e-mail"
                          required
                          maxLength={200}
                          value={leadData.email}
                          onChange={(e) => setLeadData((p) => ({ ...p, email: e.target.value }))}
                          style={{ padding: "0.6rem", borderRadius: "0.6rem", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: "#fff" }}
                        />
                        <input
                          type="tel"
                          placeholder="WhatsApp (opcional)"
                          maxLength={20}
                          value={leadData.whatsapp}
                          onChange={(e) => setLeadData((p) => ({ ...p, whatsapp: e.target.value }))}
                          style={{ padding: "0.6rem", borderRadius: "0.6rem", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: "#fff" }}
                        />
                        <button
                          type="submit"
                          disabled={sending}
                          style={{ background: "#fff", color: "#163c2c", fontWeight: 700, padding: "0.75rem", borderRadius: "0.75rem", border: "none", cursor: "pointer" }}
                        >
                          {sending ? "A enviar…" : "Enviar e receber análise"}
                        </button>
                      </form>
                    )}
                  </>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>Recebemos o seu contacto!</p>
                    <p style={{ opacity: 0.85, fontSize: "0.9rem" }}>
                      A Kathia vai analisar o seu caso e entrar em contacto em até 24 horas.
                    </p>
                  </div>
                )}
              </div>

              <p style={{ fontSize: "0.8rem", color: "#666", textAlign: "center", marginTop: "1rem" }}>
                Este resultado é indicativo e não substitui análise jurídica. Cada caso tem
                especificidades que podem alterar o diagnóstico.
              </p>
            </div>
          );
        })()}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
        <button onClick={goBack} disabled={history.length <= 1} className="quiz-nav-button">
          ← Voltar
        </button>
        {isResult && (
          <button onClick={restart} className="quiz-nav-button">
            Refazer o quiz
          </button>
        )}
      </div>
    </div>
  );
}
