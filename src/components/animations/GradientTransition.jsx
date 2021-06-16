import { useEffect, useRef } from "react";

// Add `text-transparent` class to activate the gradient
function GradientText({ text, from, to, style = {} }) {
  return (
    <span
      className={`relative bg-clip-text bg-gradient-to-r ${from} ${to}`}
      style={style}
    >
      {text}
    </span>
  );
}

export default function GradientTransition() {
  const dspRef = useRef();

  useEffect(() => {
    const dspContainer = dspRef.current;

    const tween = {
      css: {
        color: "transparent",
      },
      repeat: 1,
      yoyo: true,
    };

    // Use dynamic import for gsap to make sure that it's loaded in client side
    (async () => {
      const { TimelineMax } = await import("gsap");

      const tl = new TimelineMax({ repeat: -1 });
      for (let i = 0; i < dspContainer.children.length; i++) {
        tl.to(dspContainer.children[i], 1.2, tween);
      }
    })();
  }, []);

  return (
    <div className="antialiased">
      <main>
        <div>
          <div
            ref={dspRef}
            className="mb-12 flex flex-col items-center justify-center font-extrabold tracking-tighter text-6xl md:text-10xl"
            style={{ lineHeight: 1.2 }}
          >
            <GradientText
              text="Learn."
              from="from-red-600"
              to="to-yellow-500"
              style={{ bottom: "-0.2em" }}
            />
            <GradientText
              text="Create."
              from="from-purple-600"
              to="to-pink-600"
            />
            <GradientText
              text="Share."
              from="from-logoBlue-light"
              to="to-blueCustom-normal"
              style={{ top: "-0.2em" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
