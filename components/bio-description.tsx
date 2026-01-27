export default function BioDescription() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>

      <div className="text-muted-foreground">
        <p className="mb-4">
          {"I'm"} Camilo, a Frontend Developer based in{" "}
          <span className="text-foreground font-medium">Bucaramanga, Colombia</span>.
          I specialize in building scalable, user-centric web applications that
          merge precision engineering with modern aesthetics.
        </p>

        <p className="mb-4">
          Passionate about clean code and creative problem-solving, I thrive in
          dynamic environments where I can drive innovation and deliver impactful
          digital experiences. My focus is on creating interfaces that are not
          only visually appealing but also{" "}
          <span className="text-foreground font-medium">accessible</span> and{" "}
          <span className="text-foreground font-medium">performant</span>.
        </p>
      </div>
    </section>
  );
};
