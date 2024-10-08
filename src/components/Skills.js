import html from "../assets/skills/html.png";
import react from "../assets/skills/react.png";
import mysql from "../assets/skills/mysql.png";
import csharp from "../assets/skills/csharp.png";
import css from "../assets/skills/css-3.png";
import js from "../assets/skills/javascript.png";
import php from "../assets/skills/php.png";
import postman from "../assets/skills/postman.png";
import bootstrap from "../assets/skills/bootstrap-logo.png";
import java from "../assets/skills/java.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> Possess a strong foundation in core programming languages and
                frameworks, enabling me to build robust and scalable web
                applications. My expertise lies in crafting user-centric designs and
                implementing efficient solutions.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={js} alt="JS" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="PHP" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="C#" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="JAVA" />
                                <h5>Java</h5>
                            </div>
                            
                            <div className="item">
                                <img src={postman} alt="Postman" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Bootsrap" />
                                <h5>Bootstrap</h5>
                            </div>
                           
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bg-img" />
    </section>
  )
}
