import { Col, Row } from "antd";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black mt-20 pt-10 pb-10">
      <Row>
        <Col xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 2 }}></Col>
        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk"
        >
          <h5>Terms of Service</h5>

          <Link href="/term" className="privacyLink">
            <h6> Terms of Service</h6>
          </Link>
          <Link href="/policy" className="privacyLink">
            <h6>Privacy Policy</h6>
          </Link>
          <Link href="/dmca" className="privacyLink">
            <h6>DMCA </h6>
          </Link>
        </Col>

        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk-img"
        >
          <img src="/assets/images/dog.gif" alt="" loading="lazy" />
        </Col>

        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk"
        >
          <h5>Categories</h5>
          <Link href="/breed" className="privacyLink">
            <h6>Breeds</h6>
          </Link>
          <Link href="/training" className="privacyLink">
            <h6>Training</h6>
          </Link>
          <Link href="/health" className="privacyLink">
            <h6>Health</h6>
          </Link>
          <Link href="/funny" className="privacyLink">
            <h6>Funny</h6>
          </Link>
        </Col>

        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk"
        >
          <div className="follows">
            <h5>About</h5>
            <Link href="/about" className="privacyLink">
              <h6>About Us</h6>
            </Link>
            <Link href="/contact" className="privacyLink">
              <h6>Contact Us</h6>
            </Link>
          </div>
        </Col>
        <Col xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 2 }}></Col>
      </Row>
    </footer>
  );
};

export default Footer;
