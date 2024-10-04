"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "./components/ui/Button";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgDivRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const paraBRef = useRef<HTMLDivElement>(null);
  const caveRef = useRef<HTMLDivElement>(null);
  const ilRef = useRef<HTMLDivElement>(null);
  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);
  const card4 = useRef<HTMLDivElement>(null);
  const card5 = useRef<HTMLDivElement>(null);
  const miniCard1 = useRef<HTMLDivElement>(null);
  const miniCard2 = useRef<HTMLDivElement>(null);
  const miniCard3 = useRef<HTMLDivElement>(null);
  const miniCard4 = useRef<HTMLDivElement>(null);
  const miniCard5 = useRef<HTMLDivElement>(null);
  const page4Ref = useRef<HTMLDivElement>(null);
  const persDivRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      gsap.to(imgDivRef.current, {
        height: "100%",
        width: "100%",
        borderRadius: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "0% 0%",
          end: "0% -100%",
          scrub: 2,
          pin: true,
          // markers: true,
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: caveRef.current,
          start: "0% 0%",
          end: "150% 0%",
          pin: true,
          // markers: true,
          scrub: 2,
        },
      });
      tl.to(".sp0", {
        opacity: 1,
      })
        .to(".sp1", {
          opacity: 1,
        })
        .to(".sp2", {
          opacity: 1,
        })
        .to(".sp3", {
          opacity: 1,
        })
        .to(".sp4", {
          opacity: 1,
        })
        .to(".sp5", {
          opacity: 1,
        })
        .to(".sp6", {
          opacity: 1,
        })
        .to(".sp7", {
          opacity: 1,
        })
        .to(paraBRef.current, {
          opacity: 1,
        });
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ilRef.current,
        start: "0% 0%",
        end: "200% 0%",
        scrub: 2,
        pin: true,
      },
    });
    tl2
      .to(card1.current, {
        left: 0,
      })
      .to(card2.current, {
        left: 0,
      });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: page4Ref.current,
        start: "0% 0%",
        end: "500% 0%",
        pin: true,
        scrub: true,
        // markers: true,
      },
    });
    tl3
      .to(
        miniCard1.current,
        {
          top: "50%",
        },
        "<"
      )
      .to(
        page4Ref.current,
        {
          backgroundColor: "#333",
        },
        "<"
      )
      .to(
        miniCard2.current,
        {
          top: "50%",
        },
        "a"
      )
      .to(
        page4Ref.current,
        {
          backgroundColor: "#4F7F9F",
        },
        "a"
      )
      .to(
        miniCard1.current,
        {
          scale: 0.5,
        },
        "a"
      )
      .to(
        miniCard3.current,
        {
          top: "50%",
        },
        "b"
      )
      .to(
        page4Ref.current,
        {
          backgroundColor: "#BCB2A8",
        },
        "b"
      )
      .to(
        miniCard2.current,
        {
          scale: 0.5,
        },
        "b"
      )
      .to(
        miniCard4.current,
        {
          top: "50%",
        },
        "c"
      )
      .to(
        page4Ref.current,
        {
          backgroundColor: "#818DB3",
        },
        "c"
      )
      .to(
        miniCard3.current,
        {
          scale: 0.5,
        },
        "c"
      )
      .to(
        miniCard5.current,
        {
          top: "50%",
        },
        "d"
      )
      .to(
        page4Ref.current,
        {
          backgroundColor: "#7B2C4B",
        },
        "d"
      )
      .to(
        miniCard4.current,
        {
          scale: 0.5,
        },
        "d"
      )
      .to(miniCard5.current, {
        height: "100%",
        width: "100%",
        borderRadius: 0,
      })
      .to(persDivRef.current, {
        opacity: 1,
      });
  });

  return (
    <main ref={mainRef} className="text-white/80 bg-black/20">
      {/* hero section starts */}
      <div
        ref={heroRef}
        className="h-screen w-full flex items-center justify-center"
      >
        <div
          ref={imgDivRef}
          className="h-screen w-full relative lg:h-[90vh] lg:w-[90vw] lg:rounded-3xl overflow-hidden"
          id="backImg"
        >
          <div className="absolute top-1/4 left-5 flex flex-col">
            <h1 className="text-4xl  sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl top-1/4 -translate-y-1/4 left-5 font-extrabold">
              FOCUS
            </h1>
            <p className="sm:text-2xl mb-5 lg:w-10/12 xl:w-2/4">
              In a world where every glance reveals a deeper layer, this page
              invites you to see beyond the surface. Its not just about looking,
              but truly observing the finer details that often go unnoticed.
              Like the intricate patterns of an eye, each element here tells a
              unique story waiting to be uncovered. As you navigate further,
              youll find yourself drawn into a space where vision meets
              imagination. Every corner of this page is designed to spark
              curiosity and inspire new perspectives. So, take a moment to
              pause, explore, and discover the beauty that lies in the details.
            </p>
            <Button />
          </div>
        </div>
      </div>
      {/* hero section ends */}

      {/* Home page Section 2 starts */}
      <div
        ref={caveRef}
        className="h-screen w-full flex items-center justify-center"
      >
        <div className="h-screen w-full relative overflow-hidden" id="cave">
          <div className="absolute top-1/4 left-5 flex flex-col">
            <h1 className="text-4xl  sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl top-1/4 -translate-y-1/4 left-5 font-extrabold">
              <span className="lg:opacity-0 sp0">D</span>
              <span className="lg:opacity-0 sp1">I</span>
              <span className="lg:opacity-0 sp2">S</span>
              <span className="lg:opacity-0 sp3">C</span>
              <span className="lg:opacity-0 sp4">O</span>
              <span className="lg:opacity-0 sp5">V</span>
              <span className="lg:opacity-0 sp6">E</span>
              <span className="lg:opacity-0 sp7">R</span>
            </h1>
            <div ref={paraBRef} className="lg:opacity-0">
              <p className="sm:text-2xl mb-5 lg:w-10/12 xl:w-2/4">
                Discover the unseen and embrace the unknown. With every step
                forward, theres a new layer waiting to be uncovered, a hidden
                story longing to be told. Its in the act of discovery that we
                grow, seeing the world through a lens we hadnt before. Each
                moment presents an opportunity to explore deeper, revealing
                beauty in the details often overlooked. Let curiosity be your
                guide, and let the journey of discovery never end.
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
      {/* Home page Section 2 ends */}

      {/* Home page Section 3 starts */}
      <div
        ref={ilRef}
        id="real"
        className="h-screen relative overflow-x-hidden"
      >
        <div className="absolute top-1/4 left-5 flex flex-col z-20">
          <h1 className="text-4xl  sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl top-1/4 -translate-y-1/4 left-5 font-extrabold">
            REALITY
          </h1>
          <p className="sm:text-2xl mb-5 lg:w-10/12 xl:w-2/4">
            Reality is the foundation upon which all experiences are built,
            grounding us in the present moment. It is the unfiltered truth,
            often raw and unembellished, that shapes our perceptions and
            actions. While dreams and illusions can captivate the mind, reality
            demands recognition, offering clarity in its authenticity. It is
            within this space of truth that we find both challenge and
            understanding, leading us toward growth. Embrace reality for what it
            is—a powerful force that keeps us connected to the world as it truly
            exists.
          </p>
          <Button />
        </div>

        <div
          ref={card1}
          id="card1"
          className="h-screen w-full absolute bg-black top-0 left-full"
        ></div>
        <div
          ref={card2}
          id="card2"
          className="h-screen w-full absolute bg-black top-0 left-full"
        ></div>
        <div
          ref={card3}
          id="card3"
          className="h-screen w-full absolute bg-black top-0 left-full"
        ></div>
        <div
          ref={card4}
          id="card4"
          className="h-screen w-full absolute bg-black top-0 left-full"
        ></div>
        <div
          ref={card5}
          id="card5"
          className="h-screen w-full absolute bg-black top-0 left-full"
        ></div>
      </div>
      {/* Home page Section 3 ends */}

      <div
        ref={page4Ref}
        className="min-h-screen w-full bg-neutral-900 relative overflow-hidden"
      >
        <h1 className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
          PERSPECTIVE
        </h1>
        <div
          ref={miniCard1}
          id="miniCard1"
          className="h-[60vh] w-[60vw] bg-blue-300 absolute top-[170%] left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-2xl"
        ></div>
        <div
          ref={miniCard2}
          id="miniCard2"
          className="h-[60vh] w-[60vw] bg-blue-400 absolute top-[170%] left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-2xl"
        ></div>
        <div
          ref={miniCard3}
          id="miniCard3"
          className="h-[60vh] w-[60vw] bg-blue-500 absolute top-[170%] left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-2xl"
        ></div>
        <div
          ref={miniCard4}
          id="miniCard4"
          className="h-[60vh] w-[60vw] bg-blue-600 absolute top-[170%] left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-2xl"
        ></div>
        <div
          ref={miniCard5}
          id="miniCard5"
          className="h-[60vh] w-[60vw] bg-blue-700 absolute top-[170%] left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-2xl"
        ></div>

        <div
          ref={persDivRef}
          className="absolute top-1/4 left-5 flex flex-col z-20 opacity-0"
        >
          <h1 className="text-4xl  sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl top-1/4 -translate-y-1/4 left-5 font-extrabold">
            PERSPECTIVE
          </h1>
          <p className="sm:text-2xl mb-5 lg:w-10/12 xl:w-2/4">
            shapes the way we see the world, offering unique angles on even the
            most familiar things. I s the lens through which we interpret
            experiences, allowing us to find meaning where others may not. By
            shifting our viewpoint, we open ourselves to new insights and deeper
            understanding, transforming how we engage with lifes complexities.
            Perspective ist just about what we look atits about how we look.
            Embrace the power of perspective to unlock hidden opportunities and
            broaden your vision of whats possible.
          </p>
          <Button />
        </div>
      </div>
    </main>
  );
};

export default Home;
