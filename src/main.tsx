import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <div style={{
      fontFamily: 'Georgia, serif',
      background: '#0f2d23',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#c9a84c' }}>ViannaLegal</h1>
      <p style={{ fontSize: '1.2rem' }}>Cidadania Portuguesa para Brasileiros</p>
      <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Site em manutenção — voltamos em breve</p>
      <a
        href="https://wa.me/5521986669063"
        style={{
          background: '#25D366',
          color: '#fff',
          padding: '0.8rem 2rem',
          borderRadius: '2rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginTop: '1rem'
        }}
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
