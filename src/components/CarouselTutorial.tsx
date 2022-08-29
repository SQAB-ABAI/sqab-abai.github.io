import React from "react"

import Tut1 from "./../assets/tut-1.jpeg";
import Tut2 from "./../assets/tut-2.jpeg";
import Tut3 from "./../assets/tut-3.jpeg";
import Tut4 from "./../assets/tut-4.jpeg";
import Tut5 from "./../assets/tut-5.jpeg";
import Tut6 from "./../assets/tut-6.jpeg";
import Tut7 from "./../assets/tut-7.jpeg";
import Tut8 from "./../assets/tut-8.jpeg";
import Tut9 from "./../assets/tut-9.jpeg";
import Tut10 from "./../assets/tut-10.jpeg";
import Tut11 from "./../assets/tut-11.jpeg";
import Tut12 from "./../assets/tut-12.jpeg";
import Tut13 from "./../assets/tut-13.jpeg";

import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function CarouselConference() {
    return <>
        <MDBCarousel showIndicators fade>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={Tut1}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={Tut2}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={Tut3}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={4}
                src={Tut4}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={5}
                src={Tut5}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={6}
                src={Tut6}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={7}
                src={Tut7}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={8}
                src={Tut8}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={9}
                src={Tut9}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={10}
                src={Tut10}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={11}
                src={Tut11}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={12}
                src={Tut12}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={13}
                src={Tut13}
                alt='...'
            />
        </MDBCarousel>
    </>;
}