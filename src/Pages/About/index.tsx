import { Link } from "react-router-dom";
import './index.css'

const About = () => {
    return(
        <body>
            <header>
                <h1>About</h1>
                <p>
                    <Link to= "/">Home</Link>
                </p>
                <p>
                    <Link to= "/About">About</Link>
                </p>   
            </header>
            <p>
                <ol>
                    <li>consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet ut labore et dolore magna aliqua.</li>
                    <li>sed do eiusmod tempor incididunt</li>
                    <li>Viverra tellus in hac habitasse platea dictumst vestibulum.</li>
                </ol>
            </p>
        </body>
    )
}

export default About;
