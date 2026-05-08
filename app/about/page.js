export const metadata = {
  title: 'About — Hacky Sack Central',
  description:
    "We're building the world's first central hub for hacky sack — connecting players, celebrating skills, and bringing the footbag community into a new era.",
};

function Divider() {
  return (
    <div className="bg-white px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="h-px bg-red" />
      </div>
    </div>
  );
}

function TextSection({ heading, children }) {
  return (
    <section className="bg-white text-black px-6 lg:px-16 py-20 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-khand uppercase text-red text-4xl lg:text-6xl">{heading}</h2>
        <div className="w-24 h-1 bg-red mt-4 mb-8" />
        <div className="font-switzer text-lg leading-relaxed space-y-6">{children}</div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-black text-white px-6 lg:px-16 py-32 lg:py-48">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-khand uppercase text-7xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] leading-none">
            About Us
          </h1>
          <p className="font-switzer text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed">
            We're building the world's first central hub for hacky sack — connecting players, celebrating skills, and bringing the footbag community into a new era.
          </p>
        </div>
      </section>

      <TextSection heading="Our Mission">
        <p>
          Hacky Sack Central exists for one reason: to give the footbag world a home. For decades the sport has lived in scattered circles — schoolyards, festivals, parks, parking lots. We're connecting those circles into one community, with the resources, recognition, and gear that the modern player deserves.
        </p>
      </TextSection>

      <Divider />

      <TextSection heading="The Resurgence">
        <p>
          Hacky sack never disappeared — but the algorithm just remembered it exists. A new generation discovered the bag through short-form video, and the freestyle scene that quietly built itself across decades is suddenly everywhere again. This is the moment. We're documenting it, fueling it, and making sure it lasts longer than a trend cycle.
        </p>
      </TextSection>

      {/* PULL QUOTE */}
      <section className="bg-black text-white px-6 lg:px-16 py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-khand uppercase text-red text-5xl sm:text-6xl lg:text-8xl xl:text-9xl leading-[0.95]">
            "Hacky Sack Is For Everyone."
          </p>
        </div>
      </section>

      <TextSection heading="Who We Are">
        <p>
          We're a small crew of long-time freestylers, builders, and circle-keepers from across the country. Some of us have been kicking since the 90s. Some picked up a bag last year. All of us believe footbag deserves a real, lasting home — and we're building it.
        </p>
      </TextSection>
    </>
  );
}
