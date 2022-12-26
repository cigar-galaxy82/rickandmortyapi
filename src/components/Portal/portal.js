import './portal.css'

//This is the portal loader from Rick and Morty inspired from codepen project
function Portal() {
  return (
    <div className="portal">
      <div className="swish">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="swirl">
        <span></span>
        <span></span>
        <span></span>
        <div className="swirl">
          <span></span>
          <div className="swirl">
            <span></span>
            <div className="swirl">
              <span></span>
              <div className="swirl">
                <span></span>
                <div className="swirl">
                  <span></span>
                  <div className="swirl">
                    <span></span>
                    <div className="swirl">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
