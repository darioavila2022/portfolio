import { Link } from "react-router-dom";
import { cards } from "../assets/cards";

const Cards = () => {
    return (
        <div>
            <div className="album py-5 container my-5">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-sm-3 g-3">

                        {cards.map(item =>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={item.img} alt="Human"  ></img>
                                    <div className="card-body">
                                        <p className="card-text">{item.desc}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">

                                                <Link to={`${item.demo}`} className="btn btn-sm btn-outline-secondary" role="button">Demo</Link>

                                                <a href={`${item.repo}`} className="btn btn-sm btn-outline-secondary" role="button">Source Code</a>
                                            </div>
                                            <small className="text-muted">{item.hash}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

  

                        {/* <div class="col">
                            <div class="card shadow-sm">
                 
                                <img src="https://i.pinimg.com/736x/88/8c/e4/888ce4ee4553e18a26d065b47de2462b.jpg"  alt="Human"></img>
                                <div class="card-body">
                                    <p class="card-text">This project is a restaurant booking system that allows users to obtain relevant information about different menus and reserve a specific date.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">

                                            <a href="https://famous-vacherin-56ae21.netlify.app/" class="btn btn-sm btn-outline-secondary" role="button">Demo</a>

                                            <a href="https://github.com/darioavila2022/react-restaurant-app" class="btn btn-sm btn-outline-secondary" role="button">Source Code</a>
                                        </div>
                                        <small class="text-muted">#Firebase #React</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Health app based on API data from recent COVID-19 deceased in some countries using determined filters. Graphics were made using Chart.js.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">

                                            <a href="https://fancy-piroshki-ade917.netlify.app/" class="btn btn-sm btn-outline-secondary" role="button">Demo</a>

                                            <a href="https://github.com/darioavila2022/proyectoDash" class="btn btn-sm btn-outline-secondary" role="button">Source Code</a>
                                        </div>
                                        <small class="text-muted">#Chart.js #API</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">This project involves the development of a comment section from a newspaper article for viewing and managing users comments.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">

                                            <a href="https://darioavila2022.github.io/Proyecto-2-CRUD/" class="btn btn-sm btn-outline-secondary" role="button">Demo</a>

                                            <a href="https://github.com/darioavila2022/Proyecto-2-CRUD" class="btn btn-sm btn-outline-secondary" role="button">Source Code</a>
                                        </div>
                                        <small class="text-muted">#CRUD #JavaScript</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">My first ever web development assignment. A Simple E-commerce application landing page using HTML and CSS only.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">

                                            <a href="https://serene-begonia-343ec4.netlify.app/" class="btn btn-sm btn-outline-secondary" role="button">Demo</a>

                                            <a href="https://github.com/darioavila2022/Landing-project'" class="btn btn-sm btn-outline-secondary" role="button">Source Code</a>
                                        </div>
                                        <small class="text-muted">#HTML #CSS</small>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cards;