'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

export default function Purposes() {
	return (
		<div className="purposes px-[30px]">
			<Swiper
				//modules={[Autoplay]}
				spaceBetween={20}
				slidesPerView={3}
				loop={false}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				breakpoints={{
					0: { slidesPerView: 1.1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
			>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/purpose1.jpg" width={420} height={420} alt="デジタルアート" />
					<dl>
						<dt>デジタルアート</dt>
						<dd>アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。</dd>
					</dl>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
