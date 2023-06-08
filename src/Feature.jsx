import React from "react";

const Feature = (props) => {
  return props.type === "right" ? (
    <div class="jumbotron jumbotron-fluid feature" id="feature-first">
        <div class="container my-5">
            <div class="row justify-content-between text-center text-md-left">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" class="col-md-6">
                    <h2 class="font-weight-bold">Take a look inside</h2>
                    <p class="my-4">Te iisque labitur eos, nec sale argumentum scribentur no,
                        <br/> augue disputando in vim. Erat fugit sit at, ius lorem deserunt deterruisset no.</p>
                    <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" class="col-md-6 align-self-center">
                    <img src="img/feature-1.png" alt="Take a look inside" class="mx-auto d-block"/>
                </div>
            </div>
        </div>
    </div>
  ) : (
<div class="jumbotron jumbotron-fluid feature" id="feature-last">
        <div class="container">
            <div class="row justify-content-between text-center text-md-left">
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" class="col-md-6 flex-md-last">
                    <h2 class="font-weight-bold">Safe and reliable</h2>
                    <p class="my-4">
                        Duo suas detracto maiestatis ad, commodo lucilius invenire nec ad,
                        <br/> eum et oratio disputationi. Falli lobortis his ad
                    </p>
                    <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" class="col-md-6 align-self-center flex-md-first">
                    <img src="img/feature-2.png" alt="Safe and reliable" class="mx-auto d-block"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Feature;
