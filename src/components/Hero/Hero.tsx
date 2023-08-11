import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import Wrapper from "../UI/Wrapper/Wrapper";
import balloon from "../../assets/balloon.svg";
import { gsap } from "gsap";

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const [elements] = root.current!.children;

    const title1 = elements.getElementsByClassName("title1");
    const title2 = elements.getElementsByClassName("title2");
    const balloon = elements.getElementsByClassName("balloon");

    gsap.set([title1, title2], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.to(title1, { autoAlpha: 1 })
      .to(title2, { autoAlpha: 1 })
      .to(balloon, { y: "-=3000", duration: "3" });
  }, []);

  return (
    <div className={styles.hero} ref={root}>
      <Wrapper customStyles={styles.heroWrapper}>
        <div>
          <h1 className="title1">Cześć!</h1>
          <h2 className="title2">Jestem Wiktoria</h2>
        </div>
        <div>
          <img src={undefined} alt="portait photo" />
        </div>
        <img
          src={balloon}
          alt="balloon"
          className={`${styles.balloon} balloon`}
        />
      </Wrapper>
    </div>
  );
};

export default Hero;
