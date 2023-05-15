export function SideMenu() {
  return (
    <div className="side">
      <h3>Find me</h3>
      <form action="" method="get">
        <div className="row">
          <input type="text" name="" id="userName" className="form-field" required />
          <label htmlFor="userName" className="form-label">
            Name
          </label>
        </div>
        <div className="row">
          <input type="email" name="" id="userEmail" className="form-field" required />
          <label htmlFor="userEmail" className="form-label">
            Email
          </label>
        </div>
        <div className="row">
          <input type="text" name="" id="userPhone" className="form-field" required />
          <label htmlFor="userPhone" className="form-label">
            Phone
          </label>
        </div>
        <div className="button">
          <button type="submit">
            <span>Send</span>
          </button>
        </div>
      </form>
    </div>
  );
}
