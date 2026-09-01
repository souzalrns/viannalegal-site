/**
 * Bio de autor — exibida no fim de cada artigo do blog.
 * Migrado de src/components/sections/AuthorBio.tsx (Vite).
 * Hoje só existe uma autora; se o site vier a ter outros colaboradores,
 * isto passa a ser um lookup por nome.
 */
export function AuthorBio({ authorName }: { authorName?: string }) {
  if (authorName !== "Kathia Vianna") return null;

  return (
    <aside className="author-bio" aria-label="Sobre a autora">
      <h2>Kathia Vianna</h2>
      <p className="author-credential">
        Advogada inscrita na Ordem dos Advogados de Portugal, n.º 56666p
      </p>
      <p>
        Especialista em cidadania portuguesa. Mais de 10 anos de actuação presencial em
        Portugal e 1.200+ casos acompanhados.
      </p>
      <p>
        <a href="/quem-somos">Conhecer a Kathia →</a>
        {" · "}
        <a
          href="https://pt.linkedin.com/in/kathiavianna"
          target="_blank"
          rel="noopener noreferrer me"
        >
          LinkedIn
        </a>
      </p>
    </aside>
  );
}
