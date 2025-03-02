import React, { useEffect } from "react";

const Carousel = () => {
    useEffect(() => {
        // Add the external CSS link
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://carousel-slider.uiinitiative.com/assets/index.0f26cec9.css";
        document.head.appendChild(link);
    
        // Add the module preload link
        const preloadLink = document.createElement("link");
        preloadLink.rel = "modulepreload";
        preloadLink.href =
          "https://carousel-slider.uiinitiative.com/assets/vendor.4ea4e284.js";
        document.head.appendChild(preloadLink);
    
        // Add the external script
        const script = document.createElement("script");
        script.type = "module";
        script.crossOrigin = "anonymous";
        script.src =
          "https://carousel-slider.uiinitiative.com/assets/index.8457301f.js";
        document.body.appendChild(script);
    
        // Cleanup script and links on unmount
        return () => {
          document.head.removeChild(link);
          document.head.removeChild(preloadLink);
          document.body.removeChild(script);
        };
      }, []);
  return (
    < >
    <div className="swiper swiper-carousel swiper-horizontal swiper-watch-progress">
  <div className="swiper-wrapper">
    <div className="swiper-slide">
      <div className="swiper-carousel-animate-opacity">
        <img src="https://carousel-slider.uiinitiative.com/images/dr-strange.jpg" alt="" />
        <div className="slide-content">
          <h2>The Suicide Squad</h2>
          <p>
            Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection
            of nutty cons at Belle Reve prison join the super-secret,
            super-shady Task Force X as they are dropped off at the remote,
            enemy-infused island of Corto Maltese.
          </p>
        </div>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="swiper-carousel-animate-opacity">
        <img src="https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg" alt="" />
        <div className="slide-content">
          <h2>Thor: Ragnarok</h2>
          <p>
            Imprisoned on the planet Sakaar, Thor must race against time to
            return to Asgard and stop Ragnarök, the destruction of his world,
            at the hands of the powerful and ruthless villain Hela.
          </p>
        </div>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="swiper-carousel-animate-opacity">
        <img src="https://carousel-slider.uiinitiative.com/images/dr-strange.jpg" alt="" />
        <div className="slide-content">
          <h2>Doctor Strange</h2>
          <p>
            America Chavez and a version of Stephen Strange are chased by a
            demon in the space between universes while searching for the Book
            of Vishanti.
          </p>
        </div>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="swiper-carousel-animate-opacity">
        <img src="https://carousel-slider.uiinitiative.com/images/eternals.jpg" alt="" />
        <div className="slide-content">
          <h2>Eternals</h2>
          <p>
            In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris, Kingo,
            Sprite, Phastos, Makkari, Druig, Gilgamesh, and Thena—are sent by
            the Celestial Arishem to Earth on their starship, the Domo, to
            exterminate the invasive Deviants.
          </p>
        </div>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="swiper-carousel-animate-opacity">
        <img src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg" alt="" />
        <div className="slide-content">
          <h2>Guardians Of The Galaxy</h2>
          <p>
            A group of intergalactic criminals must pull together to stop a
            fanatical warrior with plans to purge the universe.
          </p>
        </div>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="swiper-carousel-animate-opacity">
        <img src="https://carousel-slider.uiinitiative.com/images/justice-league.jpg" alt="" />
        <div className="slide-content">
          <h2>Justice League</h2>
          <p>
            Determined to ensure Superman's ultimate sacrifice was not in vain,
            Bruce Wayne aligns forces with Diana Prince with plans to recruit a
            team of metahumans to protect the world from an approaching threat
            of catastrophic proportions.
          </p>
        </div>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="swiper-carousel-animate-opacity">
        <img src="https://carousel-slider.uiinitiative.com/images/spider-man.jpg" alt="" />
        <div className="slide-content">
          <h2>Spider-Man: Far from Home</h2>
          <p>
            Following the events of Avengers: Endgame (2019), Spider-Man must
            step up to take on new threats in a world that has changed forever.
          </p>
        </div>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="swiper-carousel-animate-opacity">
        <img src="https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg" alt="" />
        <div className="slide-content">
          <h2>The Suicide Squad</h2>
          <p>
            Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection
            of nutty cons at Belle Reve prison join the super-secret,
            super-shady Task Force X as they are dropped off at the remote,
            enemy-infused island of Corto Maltese.
          </p>
        </div>
      </div>
    </div>

 
  </div>

  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
  <div className="swiper-pagination"></div>
</div>

    
     </>
  )
}

export default Carousel