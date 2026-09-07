"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FILAS_IRN, FILAS_META, type FilaIRN, type Orgao, type Idade } from "@/content/prazos-data";

const WHATSAPP =
  "https://wa.me/351913134260?text=" +
  encodeURIComponent("Olá! Vi o simulador de prazos no site e quero avaliar o meu caso específico.");

/** Nomes únicos das vias disponíveis num órgão, na ordem em que aparecem em FILAS_IRN. */
function viasDoOrgao(orgao: Orgao): string[] {
  const vistas = new Set<string>();
  const ordem: string[] = [];
  for (const f of FILAS_IRN) {
    if (f.orgao === orgao && !vistas.has(f.via)) {
      vistas.add(f.via);
      ordem.push(f.via);
    }
  }
  return ordem;
}

function linhasDaVia(orgao: Orgao, via: string): FilaIRN[] {
  return FILAS_IRN.filter((f) => f.orgao === orgao && f.via === via);
}

const LABEL_IDADE: Record<Idade, string> = {
  maiores: "Maior de idade",
  menores: "Menor de idade",
  todos: "—",
};

function csvDasFilas(): string {
  const cab = ["Via", "Modalidade", "Artigo", "Órgão", "Quem", "Data em análise", "Espera (meses)"];
  const linhas = FILAS_IRN.map((f) =>
    [f.via, f.modalidade ?? "", f.artigo, f.orgao, LABEL_IDADE[f.idade], f.dataAnalise, String(f.esperaMeses)]
      .map((v) => `"${v.replace(/"/g, '""')}"`)
      .join(",")
  );
  return [cab.join(","), ...linhas].join("\n");
}

function baixarCsv() {
  const blob = new Blob([csvDasFilas()], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `prazos-irn-${FILAS_META.referenciaQuadro.replace(/\s+/g, "-")}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function SeletorFilas() {
  const [orgao, setOrgao] = useState<Orgao | "">("");
  const [via, setVia] = useState<string>("");
  const [idade, setIdade] = useState<Idade | "">("");
  const [modalidade, setModalidade] = useState<"transcrição" | "inscrição" | "">("");

  const vias = useMemo(() => (orgao ? viasDoOrgao(orgao) : []), [orgao]);
  const candidatas = useMemo(() => (orgao && via ? linhasDaVia(orgao, via) : []), [orgao, via]);

  const idadesDisponiveis = useMemo(
    () => Array.from(new Set(candidatas.map((f) => f.idade))).filter((i) => i !== "todos"),
    [candidatas]
  );
  const modalidadesDisponiveis = useMemo(
    () => Array.from(new Set(candidatas.map((f) => f.modalidade).filter(Boolean))) as ("transcrição" | "inscrição")[],
    [candidatas]
  );

  const resultado = useMemo(() => {
    let restantes = candidatas;
    if (idadesDisponiveis.length > 1) {
      if (!idade) return null;
      restantes = restantes.filter((f) => f.idade === idade);
    }
    if (modalidadesDisponiveis.length > 1) {
      if (!modalidade) return null;
      restantes = restantes.filter((f) => f.modalidade === modalidade);
    }
    return restantes[0] ?? null;
  }, [candidatas, idade, idadesDisponiveis, modalidade, modalidadesDisponiveis]);

  function escolherOrgao(o: string) {
    setOrgao(o as Orgao);
    setVia("");
    setIdade("");
    setModalidade("");
  }

  function escolherVia(v: string) {
    setVia(v);
    setIdade("");
    setModalidade("");
  }

  return (
    <section aria-labelledby="seletor-filas-titulo" className="not-prose my-8 rounded-2xl border border-border bg-card p-5 shadow-md sm:p-7">
      <h2 id="seletor-filas-titulo" className="mb-1 text-xl font-display text-primary sm:text-2xl">
        Quanto falta para a sua vez
      </h2>
      <p className="mb-5 text-sm text-muted-foreground sm:text-base">
        Escolha onde deu entrada e o seu caso para ver a data que está a ser analisada agora e quanto essa fila
        andou nos últimos meses.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-foreground">1 · Onde você deu entrada?</span>
          <select
            value={orgao}
            onChange={(e) => escolherOrgao(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm sm:text-base"
          >
            <option value="">Escolha o órgão</option>
            {FILAS_META.orgaos.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-foreground">2 · Qual é o seu caso?</span>
          <select
            value={via}
            onChange={(e) => escolherVia(e.target.value)}
            disabled={!orgao}
            className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm disabled:opacity-50 sm:text-base"
          >
            <option value="">{orgao ? "Escolha o seu caso" : "Escolha o órgão primeiro"}</option>
            {vias.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
      </div>

      {(idadesDisponiveis.length > 1 || modalidadesDisponiveis.length > 1) && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {idadesDisponiveis.length > 1 && (
            <fieldset>
              <legend className="mb-1.5 text-sm font-semibold text-foreground">Maior ou menor de idade?</legend>
              <div className="flex gap-2">
                {idadesDisponiveis.map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdade(i)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      idade === i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary"
                    }`}
                  >
                    {LABEL_IDADE[i]}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {modalidadesDisponiveis.length > 1 && (
            <fieldset>
              <legend className="mb-1.5 text-sm font-semibold text-foreground">Por transcrição ou inscrição?</legend>
              <div className="flex gap-2">
                {modalidadesDisponiveis.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setModalidade(m)}
                    className={`rounded-full border px-4 py-1.5 text-sm capitalize transition-colors ${
                      modalidade === m
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </fieldset>
          )}
        </div>
      )}

      {resultado && (
        <div className="mt-6 rounded-xl border-l-4 border-gold bg-muted/60 p-5 sm:p-6">
          <p className="text-4xl font-display text-primary sm:text-5xl">{resultado.esperaMeses} meses</p>
          <p className="mt-2 text-sm text-foreground/90 sm:text-base">
            de espera — {resultado.orgao} está a analisar pedidos entrados em{" "}
            <strong>{resultado.dataAnalise}</strong>, segundo o quadro de {FILAS_META.referenciaQuadro}.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Artigo {resultado.artigo}
            {resultado.modalidade ? ` · por ${resultado.modalidade}` : ""}. Fonte: resposta automática do próprio
            órgão. Os prazos variam e devem ser confirmados no portal irn.mj.pt.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {resultado.slug && (
              <Link
                href={`/cidadania-portuguesa/${resultado.slug}`}
                className="rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Ver esta via em detalhe
              </Link>
            )}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Avaliar o meu caso específico
            </a>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={baixarCsv}
          className="rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground hover:border-primary"
        >
          ⬇ Baixar a planilha (CSV)
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground hover:border-primary"
        >
          🖨 Salvar o quadro em PDF
        </button>
        <span className="text-xs text-muted-foreground">
          Quadro de referência: {FILAS_META.referenciaQuadro}. Todas as filas, com a fonte.
        </span>
      </div>
    </section>
  );
}
