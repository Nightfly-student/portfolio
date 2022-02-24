import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import PortfolioCard from "./components/portfolioCard";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#about">
              About<span class="void">()</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              Portfolio<span class="void">()</span>
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <div
          class="intro"
          style={{
            background: "url(/images/me.png)",
            backgroundSize: "650px 450px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="row center">
            <div className="col-2">
              <h2>
                <span className="blue">Hi :)</span>
              </h2>
              <Typewriter
                options={{
                  strings: [
                    'I Am Front-End <span class="blue">Developer</span>',
                    'I Am Back-End <span class="blue">Developer</span>',
                    'I Am Student At <span class="blue">Inholland</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: "type",
                }}
              />
              <p>
                I'm a second year student at the Inholland University of Applied
                Science, and a web developer for the past 3 years.
              </p>
              <div className="introIcon">
                <FontAwesomeIcon
                  className="icon int"
                  icon={faGithub}
                  onClick={() =>
                    window.open("https://github.com/Nightfly-student", "_blank")
                  }
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="icon int"
                  icon={faLinkedinIn}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/jelle-toonen-a99448138/",
                      "_blank"
                    )
                  }
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="col-1">
              <img></img>
            </div>
          </div>
          <div className="bottom">
            <a href="#about">
            <FontAwesomeIcon
              className="icon"
              icon={faChevronDown}
            ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <Container maxWidth="lg">
          <div class="about" id="about">
            <div className="row center">
              <div className="col-1 img-center">
                <img className="nature" src="/images/nature.jpg"></img>
              </div>
              <div className="col-1">
                <h2>
                  Hello my name is <span className="blue">Jelle Toonen</span>
                </h2>
                <p>
                  Welcome to my portfolio site. My name is Jelle and I am a
                  student at Inholland. I am looking to pursuit my dream as
                  Developer. I am a fast learner and a fast worker, this means I
                  am worth every minute at work. Most people know me as a direct
                  person, and sometimes stubborn, but... they also call me a
                  altruistic person, this means I always help out others before
                  I solve my own problems.
                </p>
                <ul>
                  <li>
                    Name <span>Jelle Toonen</span>
                  </li>
                  <li>
                    Age <span>22</span>
                  </li>
                  <li>
                    Email <span>Jelletoonenprive@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="hobbies">
            <h1>
              My <span className="blue">Hobbies</span>
            </h1>
            <hr />
            <div className="row center">
              <div className="col-1">
                <h2>
                  What do I do in my <span className="blue">free time</span>
                </h2>
                <p>
                  You can find me often behind my pc, making projects, listening
                  to music or playing video games. However, this is not the only
                  thing I enjoy in my free time. I love to travel and see more
                  of the world, but I also love to hike in the mountains, and go
                  almost every year to the alphs to do it.
                </p>
              </div>
              <div className="col-1" style={{ textAlign: "center" }}>
                <div className="col-1 img-center">
                  <img className="nature" src="/images/malta.jpg"></img>
                </div>
              </div>
            </div>
          </div>
          <div class="skills">
            <h1>
              My <span className="blue">Skills</span>
            </h1>
            <hr />
            <div className="row center">
              <div className="col-1 img-center">
                <img className="nature" src="/images/relaxing.jpg"></img>
              </div>
              <div className="col-1">
                <h2>
                  What are my <span className="blue">skills</span>
                </h2>
                <p>
                  My personal skills are that I am always on time and never make
                  loose ends on my projects. I am a fast learner and worker. I
                  work best on myself.
                </p>
                <p>
                  My programming and coding skills are, C#, Java, HTML, CSS,
                  PHP, React, NextJS, ExpressJS.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <div class="portfolio" id="portfolio">
          <h1>
            My <span className="blue">Portfolio</span>
          </h1>
          <hr />
          <PortfolioCard />
        </div>
      </main>
      <footer style={{ textAlign: "center", paddingTop: 10 }}>
        You have reached the end :)
      </footer>
    </div>
  );
}

export default App;
