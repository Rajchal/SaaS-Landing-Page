import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative border-2 border-amber-300 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 ">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">Easy Notes</div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We provide simple and easy to use notes for your examinations
              questions answers ,AI support and also have question papers for
              your practice.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              {/* <Button icon="/imgaes/zap.svg">Try it now</Button> */}
            </LinkScroll>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;