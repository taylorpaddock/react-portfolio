import '../styles/about.css';
import image from '../images/profilepicture.png';

const About = () => {
    return (
        <div className="about">
            <img src={image} alt="" className="about-image" />
            <div className="about-text">
                <p>My name is Taylor Paddock. I am a beginning developer trying to grow my skills by taking the UW Coding BOOTCAMP.</p>
                <p>I live in Edmonds, WA where I love to hand out with friends and family and play with my dogs.</p>
                <p>As I grow my knowledge and skills of being a developer I will regularly update this portfolio.</p>
            </div>
        </div>
    )
}

export default About;