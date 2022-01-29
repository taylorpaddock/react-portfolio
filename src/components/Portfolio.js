import '../styles/portfolio.css';
import Project1 from '../images/music-trivia-logo-v1.png';
import Project2 from '../images/music-trivia-logo-v2.png';
import Project3 from '../images/note-taker.jpg';
import Project4 from '../images/weather-dashboard.jpg';
import Project5 from '../images/nfl-dashboard.jpg';
import Project6 from '../images/workdayplanner.jpg';
import Github from '../images/github.png';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-item">
                <img src={Project1} alt="screenshot of music trivia logo" />
                <div className="portfolio-item-description">
                    <div><a href="https://morning-peak-90413.herokuapp.com/" target="_blank" rel="noreferrer">Music Trivia Final</a></div>
                    <a href="https://github.com/ChonaC/FinalProject-MusicTrivia" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    <p>MERN Stack</p>
                </div>
            </div>
            <div className="portfolio-item">
                <img src={Project2} alt="screenshot of music trivia logo" />
                <div className="portfolio-item-description">
                    <div><a href="https://protected-falls-91774.herokuapp.com/login" target="_blank" rel="noreferrer">Music Trivia 2.0</a></div>
                    <a href="https://github.com/ChonaC/Project-2-MUSICTRIVIA" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    <p>MVC Stack</p>
                </div>
            </div>
            <div className="portfolio-item">
                <img src={Project3} alt="screenshot of note taker" />
                <div className="portfolio-item-description">
                    <div><a href="https://note-take2021.herokuapp.com/" target="_blank" rel="noreferrer">Note Taker</a></div>
                    <a href="https://github.com/taylorpaddock/note-taker" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </div>
            <div className="portfolio-item">
                <img src={Project4} alt="screenshot of weather dashboard" />
                <div className="portfolio-item-description">
                    <div><a href="https://taylorpaddock.github.io/weatherdashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a></div>
                    <a href="https://github.com/taylorpaddock/weatherdashboard" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </div>
            <div className="portfolio-item">
                <img src={Project5} alt="screenshot of nfl dashboard" />
                <div className="portfolio-item-description">
                    <div><a href="https://chonac.github.io/BootCamp-Project-One/" target="_blank" rel="noreferrer">NFL Dashboard</a></div>
                    <a href="https://github.com/ChonaC/BootCamp-Project-One" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </div>
            <div className="portfolio-item">
                <img src={Project6} alt="screenshot of work day planner" />
                <div className="portfolio-item-description">
                    <div><a href="https://taylorpaddock.github.io/workdayplanner/" target="_blank" rel="noreferrer">Work Day Planner</a></div>
                    <a href="https://github.com/taylorpaddock/workdayplanner" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;