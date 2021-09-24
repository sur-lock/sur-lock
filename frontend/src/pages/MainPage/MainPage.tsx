import React from "react";
import styled from "styled-components";
import { FirstSlide } from "components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import SwiperCore, { Mousewheel, Pagination } from "swiper";

SwiperCore.use([Mousewheel, Pagination]);

export function MainPage() {
	return (
		<StyledSlider
			// eslint-disable-next-line
			direction={"vertical"}
			slidesPerView={1}
			// eslint-disable-next-line
			mousewheel={true}
			pagination={{
				clickable: true,
			}}
			speed={1000}
			className="mySwiper"
		>
			<SwiperSlide>
				<FirstSlide />
			</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
		</StyledSlider>
	);
}

const StyledSlider = styled(Swiper)`
	width: 100vw !important;
	height: 100vh !important;

	.swiper-slide {
		text-align: center;
		background: ${({ theme: { colors } }) => colors.phantomBlue};
		font-size: ${({ theme: { fonts } }) => fonts.size.title};
		${({ theme: { display } }) => display.flexRow()}
	}
`;
