const About = () => {
  return (
    <section className="about">
      <div className="about-inner">
        <div className="about-left">
          <span className="about-badge">À PROPOS</span>
          <h2 className="about-title">Fait pour les <span>vrais joueurs</span></h2>
          <p className="about-desc">
            Conçu pour les gamers compétitifs qui veulent aller plus loin.
            Fini les plateformes lentes et sans âme — ici, chaque fonctionnalité
            est pensée pour la performance, l'immersion et la victoire.
          </p>
        </div>

        <div className="about-right">
          <div className="about-card">
            <span className="about-card-icon">🎯</span>
            <div>
              <h4>Pour qui ?</h4>
              <p>Joueurs compétitifs, streamers et guildes qui veulent dominer leur classement.</p>
            </div>
          </div>
          <div className="about-card">
            <span className="about-card-icon">⚡</span>
            <div>
              <h4>Quel problème ?</h4>
              <p>Des outils fragmentés, des stats illisibles et aucune vraie communauté de combat.</p>
            </div>
          </div>
          <div className="about-card">
            <span className="about-card-icon">🏆</span>
            <div>
              <h4>Pourquoi nous ?</h4>
              <p>Une plateforme unifiée, rapide et immersive — tout ce qu'il faut pour gagner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;