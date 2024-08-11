import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = useMemo(() => ["Full Stack Developer", "Web Designer"], []);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(index + 1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };

    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [delta, loopNum, isDeleting, text, index, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Zuveriya Munshi`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    I'm a final-year Computer Engineering student with a passion for creating innovative and user-centric web applications.
                  </p>
                  <p>
                    With a solid foundation in both front-end and back-end development, I excel at transforming ideas into robust and scalable digital products.
                  </p>
                  <p>
                    My academic journey has equipped me with a diverse set of technical skills, including expertise in Java, React, and PHP, and has honed my problem-solving abilities.
                  </p>
                  <p>
                    I am eager to leverage my skills and experience in the professional world and contribute to impactful projects.
                  </p>
                  <button className="btn" onClick={() => window.location.href = 'mailto:zuveriyamunshi924@gmail.com'}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
