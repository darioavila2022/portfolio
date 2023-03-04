import rocket from '../images/rocket.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import reddit from '../images/reddit.svg'
import stackoverflow from '../images/stackoverflow.svg'
import { socials } from '../data/socials'

const Footer = () => {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 px-5 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={rocket} width="30" height="24" alt="Rocket" />
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2023 Darío Ávila, Bootcamp DWFS</span>
                </div>
                {socials.map(item =>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href={item.ig}><img src={instagram} width="30" height="24" alt="Twitter" /></a></li>
                        <li className="ms-3"><a className="text-muted" href={item.linkedin}><img src={linkedin} width="30" height="24" alt="LinkedIn" /></a></li>
                        <li className="ms-3"><a className="text-muted" href={item.gh}><img src={github} width="30" height="24" alt="Github" /></a></li>
                        <li className="ms-3"><a className="text-muted" href={item.stack}><img src={stackoverflow} width="30" height="24" alt="Twitter" /></a></li>
                        <li className="ms-3"><a className="text-muted" href={item.tw}><img src={twitter} width="30" height="24" alt="Twitter" /></a></li>
                        <li className="ms-3"><a className="text-muted" href={item.fb}><img src={facebook} width="30" height="24" alt="Twitter" /></a></li>
                        <li className="ms-3"><a className="text-muted" href={item.reddit}><img src={reddit} width="30" height="24" alt="Twitter" /></a></li>
                    </ul>
                )}
            </footer>
        </div>
    )
};

export default Footer;

