import rocket from '../images/rocket.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import reddit from '../images/reddit.svg'
import stackoverflow from '../images/stackoverflow.svg'


const Footer = () => {
    return (
        <div>

            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img src={rocket} width="30" height="24" alt="Rocket" />
                        </a>
                        <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                    </div>
                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/daario.aaron/"><img src={instagram} width="30" height="24" alt="Twitter"/></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/dar%C3%ADo-aar%C3%B3n-%C3%A1vila-a3a12b102/"><img src={linkedin} width="30" height="24" alt="LinkedIn"/></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://github.com/darioavila2022"><img src={github} width="30" height="24" alt="Github"/></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://stackoverflow.com/users/21328670/dar%c3%ado-%c3%81vila"><img src={stackoverflow} width="30" height="24" alt="Twitter"/></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://twitter.com/dariofutureal"><img src={twitter} width="30" height="24" alt="Twitter"/></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://www.facebook.com/darioaaron.avila.5/"><img src={facebook} width="30" height="24" alt="Twitter"/></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://www.reddit.com/user/aaronsynth5000"><img src={reddit} width="30" height="24" alt="Twitter"/></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
};

export default Footer;

