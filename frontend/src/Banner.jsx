import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

function Banner() {
  return (
    <>
            <Carousel fade>
              <Carousel.Item>
                <Image src="plan/skii01.jpg" fluid rounded />
              </Carousel.Item>
              {/* <Carousel.Item>
                <Image src="plan/skii02.jpg" fluid rounded />
              </Carousel.Item>
              <Carousel.Item>
                <Image src="plan/skii03.jpg" fluid rounded />
              </Carousel.Item>
              <Carousel.Item>
                <Image src="plan/skii04.jpg" fluid rounded />
              </Carousel.Item> */}
            </Carousel>
    </>
  );
}

export default Banner;
