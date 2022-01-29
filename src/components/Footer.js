import '../styles/footer.css';
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';
import Email from '../images/email.png';
import Phone from '../images/phone.png';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/taylorpaddock" target="_blank" rel="noreferrer"><img src={Github} alt="" className="footer-item" /></a>
            <a href="https://www.linkedin.com/in/taylor-paddock-a21aa091/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="" className="footer-item" /></a>
            <a href="mailto:tayjeep@comcast.net"><img src={Email} alt="" className="footer-item" /></a>
            <a href="tel:206-909-2221"><img src={Phone} alt="" className="footer-item" /></a>
        </div>
    )
};

export default Footer;
