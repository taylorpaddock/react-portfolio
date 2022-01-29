import '../styles/resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <a href="https://drive.google.com/file/d/132DXqgxzk8iy0ZQYNpqQibQ_AuGDfrY0/view?usp=sharing" target="_blank">My Resume</a>
            <div className="resume-prof">
                <h2>My coding expertise:</h2>
                    <h3>Front End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>UI and UX</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    <h3>Back End</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
            </div>
        </div>
    )
}

export default Resume;