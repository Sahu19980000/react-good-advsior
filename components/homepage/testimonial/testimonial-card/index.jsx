"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const TestimonialCards = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
        <div className="testimonial-box">
            <div className="star">
              <Image src="/images/icon/Rating.png" width={50} height={10} alt="rating" />
            </div>
            <p>“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
            <div className="reverw-name">
              <div className="row">
                <div className="col-lg-6">
                  <Image src='/images/reviewer-name.png' width={50} height={50} alt="testiminoal-name" />
                  <div>
                    <h3>Robert Fox</h3>
                    <h5>UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <Image src='/images/Quote.png' width={25} height={25} alt='quote-icon' />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="star">
              <Image src="/images/icon/Rating.png" width={50} height={10} alt="rating" />
            </div>
            <p>“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
            <div className="reverw-name">
              <div className="row">
                <div className="col-lg-6">
                  <Image src='/images/reviewer-name.png' width={50} height={50} alt="testiminoal-name" />
                  <div>
                    <h3>Robert Fox</h3>
                    <h5>UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <Image src='/images/Quote.png' width={25} height={25} alt='quote-icon' />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-box">
            <div className="star">
              <Image src="/images/icon/Rating.png" width={50} height={10} alt="rating" />
            </div>
            <p>“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
            <div className="reverw-name">
              <div className="row">
                <div className="col-lg-6">
                  <Image src='/images/reviewer-name.png' width={50} height={50} alt="testiminoal-name" />
                  <div>
                    <h3>Robert Fox</h3>
                    <h5>UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <Image src='/images/Quote.png' width={25} height={25} alt='quote-icon' />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-box">
            <div className="star">
              <Image src="/images/icon/Rating.png" width={50} height={10} alt="rating" />
            </div>
            <p>“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
            <div className="reverw-name">
              <div className="row">
                <div className="col-lg-6">
                  <Image src='/images/reviewer-name.png' width={50} height={50} alt="testiminoal-name" />
                  <div>
                    <h3>Robert Fox</h3>
                    <h5>UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <Image src='/images/Quote.png' width={25} height={25} alt='quote-icon' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default TestimonialCards;
