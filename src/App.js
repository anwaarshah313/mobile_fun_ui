import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <main className="main">
        <section className="main-section">
          <header>
            <div className="one">
              <img src="https://th.bing.com/th/id/OIP.ed0RqUUqkqGszO7DikXhagAAAA?rs=1&pid=ImgDetMain" />
              <i class="bi bi-inbox"></i>
            </div>
            <div className="two">
              <i class="bi bi-chevron-left"></i>
              <div>TODAY</div>
              <div>Edit</div>
            </div>
          </header>

          <section className="circle">
            <circle>
              <i class="bi bi-bar-chart-steps"></i>
              <h2>10,396</h2>
              <p>Steps</p>
            </circle>
          </section>

          <section className="rows">
            <div class="box">
              <div class="progress">
                <svg viewBox="0 0 100 100">
                  <circle class="bg" cx="50" cy="50" r="40"></circle>
                  <circle class="fg-one" cx="50" cy="50" r="40"></circle>
                </svg>
                <div class="label">
                  <i class="bi bi-fire"></i>
                </div>
              </div>
              <div class="heading">1,850</div>
              <div class="text">Calis</div>
            </div>

            <div class="box">
              <div class="progress">
                <svg viewBox="0 0 100 100">
                  <circle class="bg" cx="50" cy="50" r="40"></circle>
                  <circle class="fg-two" cx="50" cy="50" r="40"></circle>
                </svg>
                <div class="label">
                  <i class="bi bi-geo-alt"></i>
                </div>
              </div>
              <div class="heading">4.7</div>
              <div class="text">Miles</div>
            </div>

            <div class="box">
              <div class="progress">
                <svg viewBox="0 0 100 100">
                  <circle class="bg" cx="50" cy="50" r="40"></circle>
                  <circle class="fg-three" cx="50" cy="50" r="40"></circle>
                </svg>
                <div class="label">
                  <i class="bi bi-lightning-charge"></i>
                </div>
              </div>
              <div class="heading">72</div>
              <div class="text">Mins</div>
            </div>
          </section>

          <section className="section-col">
            <div className="col-in">
              <div class="col-box">
                <i class="bi bi-suit-heart"></i>
              </div>
              <div className="text-out">
                <div class="heading">90 mbp</div>
                <div class="text">76 mbp resting heart rate</div>
              </div>
            </div>

            <div className="col-in">
              <div class="col-box">
                <i class="bi bi-person-arms-up"></i>
              </div>
              <div className="text-out">
                <div class="col-heading">3 of 5 hr</div>
                <div class="col-text">250+ steps per hour</div>
              </div>
            </div>
          </section>

          <section className="btn-section">

            
              <div class="btn-box">
              <i class="bi bi-snow"></i>
              </div>

              <div class="btn-box">
              <i class="bi bi-compass"></i>
              </div>

              <div class="btn-box">
              <i class="bi bi-people"></i>
              </div>

              <div class="btn-box">
              <i class="bi bi-arrow-right"></i>
              </div>

              
           

          </section>

        </section>
      </main>
    </>
  );
}

export default App;
