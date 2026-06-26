const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h3 className="footer-logo">⚔ BATTLEZONE</h3>
          <p className="footer-tagline">La plateforme des vrais guerriers.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Fonctionnalités</a></li>
            <li><a href="#">Classements</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Légal</h4>
          <ul>
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Réseaux</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">▶</a>
            <a href="#" className="social-icon">📷</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 BattleZone. Tous droits réservés.</span>
      </div>
    </footer>
  );
};

export default Footer;