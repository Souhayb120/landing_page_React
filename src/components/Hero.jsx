const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-badge">⚔ SAISON 4 · NOUVEAU CHAPITRE</div>

        <h2 className="hero-title">
          Domine le champ<br />de <span>bataille</span>
        </h2>

        <p className="hero-description">
          Rejoins des milliers de guerriers, accomplis des quêtes épiques
          et grimpe dans les classements — ta légende commence ici.
        </p>

        <a href="#" className="hero-btn">
          Jouer gratuitement
          <span className="arrow">▶</span>
        </a>
      </div>

      <div className="hero-illustration">
        <div className="game-card">
          <div className="game-card-header">
            <span className="game-tag">LIVE</span>
            <span className="game-title-bar">⚔ BATTLE STATS</span>
            <span className="game-rank">S RANK</span>
          </div>

          <div className="game-chart-area">
            <div className="game-bars">
              <div className="game-bar gb-1"><span className="bar-glow" /></div>
              <div className="game-bar gb-2"><span className="bar-glow" /></div>
              <div className="game-bar gb-3"><span className="bar-glow" /></div>
              <div className="game-bar gb-4"><span className="bar-glow" /></div>
              <div className="game-bar gb-5"><span className="bar-glow" /></div>
            </div>
            <svg className="chart-svg" viewBox="0 0 300 120" preserveAspectRatio="none">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polyline
                points="30,75 90,55 150,30 210,42 270,18"
                fill="none"
                stroke="#00ffcc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              />
              <circle cx="30"  cy="75" r="4" fill="#00ffcc" filter="url(#glow)" />
              <circle cx="90"  cy="55" r="4" fill="#00ffcc" filter="url(#glow)" />
              <circle cx="150" cy="30" r="4" fill="#00ffcc" filter="url(#glow)" />
              <circle cx="210" cy="42" r="4" fill="#00ffcc" filter="url(#glow)" />
              <circle cx="270" cy="18" r="4" fill="#00ffcc" filter="url(#glow)" />
            </svg>
          </div>

          <div className="game-stats-row">
            <div className="game-stat gs-green">
              <div className="gs-icon">⚡</div>
              <div className="gs-label">POWER</div>
              <div className="gs-value">+48%</div>
              <div className="gs-bar"><span style={{ width: "48%" }} /></div>
            </div>
            <div className="game-stat gs-blue">
              <div className="gs-icon">👤</div>
              <div className="gs-label">PLAYERS</div>
              <div className="gs-value">12.4K</div>
              <div className="gs-bar"><span style={{ width: "75%" }} /></div>
            </div>
            <div className="game-stat gs-purple">
              <div className="gs-icon">🏆</div>
              <div className="gs-label">QUESTS</div>
              <div className="gs-value">3 200</div>
              <div className="gs-bar"><span style={{ width: "60%" }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;