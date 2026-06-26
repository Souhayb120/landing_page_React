const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-inner">
        <span className="cta-badge">REJOINS LA BATAILLE</span>
        <h2 className="cta-title">Ta légende commence <span>maintenant</span></h2>
        <p className="cta-desc">
          Inscris-toi gratuitement et rejoins des milliers de joueurs
          qui dominent déjà le classement mondial.
        </p>
        <div className="cta-actions">
          <a href="#" className="cta-btn-primary">Créer un compte ▶</a>
          <a href="#" className="cta-btn-secondary">Nous contacter</a>
        </div>

        <form className="cta-form">
          <input type="email" placeholder="ton@email.com" className="cta-input" />
          <button type="submit" className="cta-submit">S'inscrire</button>
        </form>
      </div>
    </section>
  );
};

export default CTA;