'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'

const Hero = () => {
  const t = useTranslations('Hero')
  
  // For carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnInteraction: false })])

  // Background slider datas
  const heros = [
    {
      title: t('title_1'),
      paragraph: t('paragraph_1'),
      button: t('button_1'),
      image: '/hero-backgrounds/backgrounds/background1.webp',
      blurData: '/hero-backgrounds/blurDatas/blurData4.jpg',
      news: {
        news_1 : t('news_1_1'),
        news_2 : t('news_1_2'),
        news_3 : t('news_1_3')
      }
    },
    {
      title: t('title_2'),
      paragraph: t('paragraph_2'),
      button: t('button_2'),
      image: '/hero-backgrounds/backgrounds/background2.jpg',
      blurData: '/hero-backgrounds/blurDatas/blurData4.jpg',
      news: {
        news_1 : t('news_2_1'),
        news_2 : t('news_2_2'),
        news_3 : t('news_2_3')
      }
    },
    {
      title: t('title_3'),
      paragraph: t('paragraph_3'),
      button: t('button_3'),
      image: '/hero-backgrounds/backgrounds/background3.jpg',
      blurData: '/hero-backgrounds/blurDatas/blurData4.jpg',
      news: {
        news_1 : t('news_3_1'),
        news_2 : t('news_3_2'),
        news_3 : t('news_3_3')
      }
    },
    {
      title: t('title_4'),
      paragraph: t('paragraph_4'),
      button: t('button_4'),
      image: '/hero-backgrounds/backgrounds/background4.jpg',
      blurData: '/hero-backgrounds/blurDatas/blurData4.jpg',
      news: {
        news_1 : t('news_4_1'),
        news_2 : t('news_4_2'),
        news_3 : t('news_4_3')
      }
    },
    {
      title: t('title_5'),
      paragraph: t('paragraph_5'),
      button: t('button_5'),
      image: '/hero-backgrounds/backgrounds/background5.jpg',
      blurData: '/hero-backgrounds/blurDatas/blurData4.jpg',
      news: {
        news_1 : t('news_5_1'),
        news_2 : t('news_5_2'),
        news_3 : t('news_5_3')
      }
    },
    {
      title: t('title_6'),
      paragraph: t('paragraph_6'),
      button: t('button_6'),
      image: '/hero-backgrounds/backgrounds/background6.jpg',
      blurData: '/hero-backgrounds/blurDatas/blurData4.jpg',
      news: {
        news_1 : t('news_6_1'),
        news_2 : t('news_6_2'),
        news_3 : t('news_6_3')
      }
    },
    {
      title: t('title_7'),
      paragraph: t('paragraph_7'),
      button: t('button_7'),
      image: '/hero-backgrounds/backgrounds/background7.jpg',
      blurData: '/hero-backgrounds/blurDatas/blurData4.jpg',
      news: {
        news_1 : t('news_7_1'),
        news_2 : t('news_7_2'),
        news_3 : t('news_7_3')
      }
    },
  ]

  // Arrow buttons for slider 
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <div className='flex overflow-hidden w-full embla' ref={emblaRef}>
      <div className="flex w-full [text-shadow:_1px_1px_1px_rgb(24_28_20_/30%)] embla__container">   
        {
          heros.map((hero, index)=>(
            <div className='relative shrink-0 grow-0 basis-full w-full h-screen top-0 left-0 object-cover embla__slide' key={index}>
              <div className="flex flex-col relative top-1/4 sm:top-1/3 ms-3 sm:ms-8 lg:ms-16 xl:ms-40">
                <h1 className='text-3xl lg:text-6xl font-[600] w-3/4 md:w-2/4'>{hero.title}</h1>
                <p className='text-sm md:text-base xl:text-lg w-11/12 md:w-2/3 mt-4 sm:mt-8'>{hero.paragraph}</p>
                <Link href={'tel:+994502053527'} className='self-start rounded backdrop-blur-md bg-[#152A38]/60 py-3 px-6 mt-16 2xl:mt-28'>{hero.button}</Link>
              </div>
              
              {/* News */}
              <div className='hidden md:flex flex-col gap-8 top-1/4 absolute right-6 lg:right-12 xl:right-24 w-56'>
                <div className='flex flex-col gap-1 backdrop-blur-md bg-black/15 rounded-md p-2 lg:py-4 lg:px-6 text-center text-sm'>
                  <p>{hero.news.news_1}</p>
                  <Link href={'#footer'} className='font-[200] text-blue-400'>{t('news_button')}</Link>
                </div>
                <div className='flex flex-col gap-1 backdrop-blur-md bg-black/15 rounded-md p-2 lg:py-4 lg:px-6 text-center text-sm'>
                  <p>{hero.news.news_2}</p>
                  <Link href={'#footer'} className='font-[200] text-blue-400'>{t('news_button')}</Link>
                </div>
                <div className='flex flex-col gap-1 backdrop-blur-md bg-black/15 rounded-md p-2 lg:py-4 lg:px-6 text-center text-sm'>
                  <p>{hero.news.news_3}</p>
                  <Link href={'#footer'} className='font-[200] text-blue-400'>{t('news_button')}</Link>
                </div>
              
              </div>

              <Image
                className='-z-10 object-cover h-full w-full top-0 left-0 absolute'
                alt="Background"
                src={hero.image}
                quality={100}
                width={10000}
                height={10000}
                placeholder="blur"
                blurDataURL={hero.blurData}
              />
            </div>
          ))
        }
      </div>

      
      {/* Buttons for scroll slider */}
      <div className='flex items-center justify-center gap-20 md:gap-5 absolute bottom-5 left-1/2 -translate-x-1/2 text-4xl'>
      
        {/* Previous button */}
        <button
         className="embla__prev active:text-slate-400" 
         onClick={scrollPrev}
         aria-label='Previous slide'
         title='Previous slide'
        >
          <CgArrowLongLeft aria-hidden />
        </button>

        {/* Next button */}
        <button
         className="embla__next active:text-slate-400" 
         onClick={scrollNext}
         aria-label='Next slide'
         title='Next slide'
        >
          <CgArrowLongRight aria-hidden />
        </button>
      </div>
      

    </div>  
  )
}

export default Hero