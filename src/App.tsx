import { useState, useEffect } from "react";

function App() {
  const [animationPhase, setAnimationPhase] = useState("initial"); // 'initial', 'moving', 'complete'

  useEffect(() => {
    // Phase 1: Logo seul au centre (2 secondes)
    const timer1 = setTimeout(() => {
      setAnimationPhase("moving");
    }, 2000);

    // Phase 2: Logo se déplace vers sa position finale (1 seconde)
    const timer2 = setTimeout(() => {
      setAnimationPhase("complete");
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF2D7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          animationPhase === "complete" ? "opacity-5" : "opacity-0"
        }`}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Logo d'entrée - centré au milieu de l'écran */}
      {animationPhase === "initial" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#FAF2D7]">
          <div>
            <img
              src="/Logo.svg"
              alt="Fondation Diaka Camara"
              className="h-50 w-auto"
            />
          </div>
        </div>
      )}

      {/* Logo en transition vers sa position finale */}
      {animationPhase === "moving" && (
        <div className="fixed inset-0 z-50 bg-[#FAF2D7]">
          <div className="animate-[moveToTop_1s_ease-in-out_forwards] flex items-center justify-center h-full">
            <img
              src="/Logo.svg"
              alt="Fondation Diaka Camara"
              className="h-40 w-auto"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col justify-between md:justify-around">
        {/* Header with Logo */}
        <header
          className={`pt-12 pb-8 transition-opacity duration-1000 ${
            animationPhase === "complete" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center mb-4">
              <img
                src="/Logo.svg"
                alt="Fondation Diaka Camara"
                className="h-32 md:h-40 w-auto"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main
          className={` flex items-center justify-center px-6 transition-all duration-1000 delay-300 ${
            animationPhase === "complete"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative mb-8">
              <img
                src="/stars_left_animated.svg"
                alt=""
                className="w-20 h-20 md:w-32 md:h-32 absolute -top-16"
              />
              <h1 className="text-3xl md:text-6xl font-bold text-gray-800">
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <span className="font-beautiqueBold text-[#160A00]">
                    NOTRE SITE SE
                    <br /> REFAIT UNE BEAUTÉ
                  </span>
                </div>
              </h1>
              <img
                src="/stars_right_animated.svg"
                alt=""
                className="w-20 h-20 md:w-32 md:h-32 absolute right-1 -top-16"
              />
            </div>

            <p className="font-beautique leading-[2rem] md:leading-[3.5rem] text-2xl md:text-5xl text-[#160A00] mb-16">
              Rendez-vous prochainement pour découvrir nos actualités, ou
              soutenir nos actions.
            </p>
          </div>
        </main>

        {/* Contact Section */}
        <section
          className={`md:pb-12 pb-0 transition-all duration-1000 delay-500 ${
            animationPhase === "complete"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="container mx-auto px-0 md:px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-none md:rounded-3xl p-8 md:p-14 mx-auto max-w-8xl border border-orange-100">
              <div className="text-center mb-8 text-[#160A00]">
                <p className="font-mona text-md md:text-xl mb-2 leading-relaxed">
                  Vous souhaitez soumettre un message à la Fondation,
                  <br />
                  ou découvrir tous les détails du <strong>Gala 2025</strong> en
                  recevant le Dossier de Presse ?
                </p>
              </div>

              <div className="flex justify-center">
                <a href="contact@fondationdiakacamara.org"
                  className="group relative w-full shadow-md bg-[#EBF0EE] hover:bg-[#0A4BA5] text-[#0A4BA5] hover:text-white rounded-full font-semibold text-lg flex items-center py-3 overflow-hidden transition-colors duration-500">
                  <span className="flex-1 text-center font-bold">
                    <span className="block md:hidden">Contactez-nous</span>
                    <span className="hidden md:block">
                      Envoyez-nous un message
                    </span>
                  </span>

                  <img
                    src="/group_arrow.svg"
                    alt="Icon"
                    className="
      w-12 h-12
      absolute top-1/2 -translate-y-1/2
      right-[calc(100%-3rem-0.25rem)]
      group-hover:right-2 
      transition-all duration-500 ease-in-out
    "
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
