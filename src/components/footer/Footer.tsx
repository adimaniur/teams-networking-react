import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="slide-to-nav" /*onClick="slideToNav()"*/>
            <svg viewBox="0 0 100 80" width="20" height="20">
              <rect width="100" height="3"></rect>
              <rect y="30" width="100" height="3"></rect>
              <rect y="60" width="100" height="3"></rect>
            </svg>
          </div>
          <a href="http://linkedin.com" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
