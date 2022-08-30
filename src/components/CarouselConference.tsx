import React from 'react';

import Symp1 from './../assets/symp-1.jpeg';
import Symp2 from './../assets/symp-2.jpeg';
import Symp3 from './../assets/symp-3.jpeg';
import Symp4 from './../assets/symp-4.jpeg';
import Symp5 from './../assets/symp-5.jpeg';

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function CarouselConference(): JSX.Element {
  return (
    <>
      <MDBCarousel showIndicators fade>
        <MDBCarouselItem className="w-100 d-block" itemId={1} src={Symp1} alt="..." />
        <MDBCarouselItem className="w-100 d-block" itemId={2} src={Symp2} alt="..." />
        <MDBCarouselItem className="w-100 d-block" itemId={3} src={Symp3} alt="..." />
        <MDBCarouselItem className="w-100 d-block" itemId={4} src={Symp4} alt="..." />
        <MDBCarouselItem className="w-100 d-block" itemId={5} src={Symp5} alt="..." />
      </MDBCarousel>
    </>
  );
}
