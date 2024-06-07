"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

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
              <img src="../../images/icon/rating.png" />
            </div>
            <p>“Ut ullamcorper hendrerit tempos Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
            <div className="reverw-name">
              <div className="row">
                <div className="col-lg-6">
                  <img src='../../images/reviewer-name.png' />
                  <div>
                    <h3>Robert Fox</h3>
                    <h5>UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <img src='../../images/Quote.png' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-box">
            <div className="star">
              <img src="../../images/icon/rating.png" />
            </div>
            <p>“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
            <div className="reverw-name">
              <div className="row">
                <div className="col-lg-6">
                  <img src='../../images/reviewer-name.png' />
                  <div>
                    <h3>Robert Fox</h3>
                    <h5>UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <img src='../../images/Quote.png' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-box">
            <div className="star">
              <img src="../../images/icon/rating.png" />
            </div>
            <p>“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
            <div className="reverw-name">
              <div className="row">
                <div className="col-lg-6">
                  <img src='../../images/reviewer-name.png' />
                  <div>
                    <h3>Robert Fox</h3>
                    <h5>UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <img src='../../images/Quote.png' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-box">
            <div className="star">
              <img src="../../images/icon/rating.png" />
            </div>
            <p>“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
            <div className="reverw-name">
              <div className="row">
                <div className="col-lg-6">
                  <img src='../../images/reviewer-name.png' />
                  <div>
                    <h3>Robert Fox</h3>
                    <h5>UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 col-12 d-flex align-items-end">
                  <img src='../../images/Quote.png' />
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
