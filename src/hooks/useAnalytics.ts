/**
 * useAnalytics — wrapper centralizado para GA4, Meta Pixel e eventos customizados
 * ViannaLegal — eventos de negócio mapeados
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function useAnalytics() {
  const isGA4 = () =>
    typeof window !== 'undefined' && typeof window.gtag === 'function';

  const isPixel = () =>
    typeof window !== 'undefined' && typeof window.fbq === 'function';

  // ── Evento genérico GA4 ──────────────────────────────────────
  const trackEvent = (
    eventName: string,
    params?: Record<string, string | number | boolean>
  ) => {
    if (!isGA4()) return;
    window.gtag!('event', eventName, params);
  };

  // ── QUIZ — funil completo ────────────────────────────────────

  /** Quiz aberto pelo utilizador */
  const trackQuizStart = () => {
    trackEvent('quiz_started', { event_category: 'quiz' });
    if (isPixel()) window.fbq!('trackCustom', 'QuizStarted');
  };

  /** Cada passo do quiz */
  const trackQuizStep = (from: string, to: string) => {
    trackEvent('quiz_step', { event_category: 'quiz', from, to });
  };

  /** Resultado final visualizado */
  const trackQuizResult = (resultKey: string) => {
    trackEvent('quiz_completed', {
      event_category: 'quiz',
      result: resultKey,
    });
    if (isPixel()) window.fbq!('trackCustom', 'QuizCompleted', { result: resultKey });
  };

  /** Formulário de lead submetido no quiz */
  const trackQuizLead = (resultKey: string) => {
    trackEvent('generate_lead', {
      event_category: 'conversion',
      event_label: 'quiz_form',
      result: resultKey,
    });
    if (isPixel()) window.fbq!('track', 'Lead', { content_name: resultKey });
  };

  // ── WHATSAPP — cliques ───────────────────────────────────────

  /** Clique em qualquer botão WhatsApp */
  const trackWhatsAppClick = (source: string) => {
    trackEvent('whatsapp_click', {
      event_category: 'conversion',
      event_label: source,
    });
    if (isPixel()) window.fbq!('track', 'Contact', { source });
  };

  // ── BLOG ─────────────────────────────────────────────────────

  /** Artigo aberto */
  const trackArticleView = (slug: string, category: string) => {
    trackEvent('article_view', {
      event_category: 'blog',
      article_slug: slug,
      article_category: category,
    });
  };

  /** Scroll até ao fim do artigo */
  const trackArticleComplete = (slug: string) => {
    trackEvent('article_completed', {
      event_category: 'blog',
      article_slug: slug,
    });
  };

  // ── CONVERSÃO GERAL ──────────────────────────────────────────

  const trackConversion = (
    type: 'lead_whatsapp' | 'lead_form' | 'lead_quiz',
    params?: Record<string, string | number | boolean>
  ) => {
    if (!isGA4()) return;
    window.gtag!('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: type,
      ...params,
    });
  };

  // ── PAGE VIEW (SPA) ──────────────────────────────────────────

  const trackPageView = (path: string, title: string) => {
    if (!isGA4()) return;
    window.gtag!('config', 'G-HLQ0ZPK4BP', {
      page_path: path,
      page_title: title,
    });
  };

  // ── SCROLL DEPTH ─────────────────────────────────────────────

  const trackScrollDepth = (percent: 25 | 50 | 75 | 100) => {
    trackEvent('scroll_depth', { event_category: 'engagement', percent });
  };

  // ── META PIXEL ───────────────────────────────────────────────

  const trackPixelLead = (params?: Record<string, string | number>) => {
    if (isPixel()) window.fbq!('track', 'Lead', params);
  };

  // ── GOOGLE ADS ───────────────────────────────────────────────

  const trackGoogleAdsConversion = (sendTo: string) => {
    if (!isGA4()) return;
    window.gtag!('event', 'conversion', { send_to: sendTo });
  };

  return {
    trackEvent,
    trackQuizStart,
    trackQuizStep,
    trackQuizResult,
    trackQuizLead,
    trackWhatsAppClick,
    trackArticleView,
    trackArticleComplete,
    trackConversion,
    trackPageView,
    trackScrollDepth,
    trackPixelLead,
    trackGoogleAdsConversion,
  };
}
