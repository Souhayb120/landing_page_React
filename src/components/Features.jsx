const Features = () => {
  const features = [
    {
      icon: "⚔",
      title: "Combat en temps réel",
      description: "Affrontez des adversaires du monde entier avec un système de combat fluide et réactif.",
    },
    {
      icon: "🛡",
      title: "Défense de base",
      description: "Construisez et renforcez votre forteresse pour résister aux assauts ennemis.",
    },
    {
      icon: "🏆",
      title: "Classements mondiaux",
      description: "Grimpez dans les rangs et affrontez les meilleurs joueurs de la planète.",
    },
    {
      icon: "⚡",
      title: "Quêtes épiques",
      description: "Des dizaines de missions solo et en équipe pour tester vos compétences.",
    },
    {
      icon: "🎮",
      title: "Mode multijoueur",
      description: "Formez une escouade et partez en guerre avec vos amis en temps réel.",
    },
    {
      icon: "🔮",
      title: "Pouvoirs spéciaux",
      description: "Débloquez des capacités uniques pour dominer le champ de bataille.",
    },
  ];

  return (
    <section className="features">
      <div className="features-header">
        <span className="features-badge">FONCTIONNALITÉS</span>
        <h2 className="features-title">Tout ce dont tu as besoin pour <span>dominer</span></h2>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-card-title">{f.title}</h3>
            <p className="feature-card-desc">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;