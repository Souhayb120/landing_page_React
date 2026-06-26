const Testimonials = () => {
  const reviews = [
    {
      name: "ShadowX",
      rank: "Rang S · 4 200 heures",
      avatar: "🧑‍💻",
      text: "Depuis que j'utilise cette plateforme, mon taux de victoire a grimpé de 30%. L'interface est propre et les stats sont enfin lisibles.",
    },
    {
      name: "ValkyrieGG",
      rank: "Rang A · Streameuse",
      avatar: "👩‍🎮",
      text: "Mes viewers adorent suivre mes stats en direct. C'est devenu un outil indispensable pour mes sessions live.",
    },
    {
      name: "IronClaw",
      rank: "Rang S+ · Chef de guilde",
      avatar: "🧔",
      text: "On gère toute notre guilde ici. Les outils de coordination sont parfaits pour organiser nos raids hebdomadaires.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <span className="testimonials-badge">TÉMOIGNAGES</span>
        <h2 className="testimonials-title">Ce que disent les <span>guerriers</span></h2>
      </div>

      <div className="testimonials-grid">
        {reviews.map((r, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-text">"{r.text}"</p>
            <div className="testimonial-author">
              <span className="testimonial-avatar">{r.avatar}</span>
              <div>
                <div className="testimonial-name">{r.name}</div>
                <div className="testimonial-rank">{r.rank}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;