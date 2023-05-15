import "./Header.css";

export function Header() {
  return (
    <div className="hero">
      <section>
        <img src="https://picsum.photos/1375/1717" alt="" className="mobile" />
        <img src="https://picsum.photos/1920/500" alt="" className="desktop" />
        <div className="user-info">
          <h1>adi m.</h1>
          <h2 className="job-title">learning JS</h2>
          <h2>@transilvaniait</h2>
        </div>
      </section>
    </div>
  );
}
