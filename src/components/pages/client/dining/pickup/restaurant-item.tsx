import { Typography } from '@/components';

import { Spacer } from '@/ui';
import { SvgLike } from '@/ui/icons';

type RestaurantItemProps = {
  title: string;
  link: string;
  srcSet: string;
  src: string;
  review: string;
  detail: {
    time: string;
    distance: string;
  };
  mapMarker: boolean;
} & React.ComponentProps<'div'>;

export const RestaurantItem = ({
  title,
  link,
  srcSet,
  src,
  review,
  detail: { time, distance },
  mapMarker,
}: RestaurantItemProps) => (
  <div className='relative overflow-hidden'>
    <a href={link}>
      <h3 className='absolute h-full w-full text-[0px]'>{title}</h3>
    </a>
    <div className='pointer-events-none relative flex overflow-hidden'>
      <div className='relative w-full'>
        <div className='relative h-[128px] w-full overflow-hidden bg-[#f6f6f6]'>
          <RestaurantImage src={src} srcSet={srcSet} />
        </div>

        <RestaurantDetails
          title={title}
          review={review}
          time={time}
          distance={distance}
          mapMarker={mapMarker}
        />
      </div>
    </div>
  </div>
);

type RestaurantDetailsProps = {
  title: string;
  review: string;
  time: string;
  distance: string;
  mapMarker: boolean;
} & React.ComponentProps<'div'>;

export const RestaurantDetails = ({
  title,
  review,
  time,
  distance,
  mapMarker,
}: RestaurantDetailsProps) => (
  <div className={`flex flex-col items-start ${mapMarker ? 'px-3 pb-2' : ''} `}>
    <div className='mt-3 flex w-full items-center justify-between'>
      <div className='overflow-hidden'>
        <Typography as='div' variant='divRestaurantTitle'>
          {title}
        </Typography>
      </div>
      <Spacer className='spacer _4' />

      <ReviewItem review={review} />
    </div>
    <div className='flex w-full flex-nowrap items-center justify-start'>
      <Typography as='span' className='text-sm'>
        {time}
      </Typography>
      <Typography as='span' variant='spanTextDot'>
        &nbsp;•&nbsp;
      </Typography>
      <Typography as='span' className='text-sm'>
        {distance}
      </Typography>
    </div>
  </div>
);

export const ReviewItem = ({ review }: { review: string }) => (
  <div className='flex h-7 w-7 items-center justify-center rounded-[50%] bg-[#eee] text-xs font-medium'>
    {review}
  </div>
);

export const RestaurantImage = ({
  src,
  srcSet,
}: {
  src: string;
  srcSet: string;
}) => (
  <>
    <picture>
      <img
        alt=''
        role='presentation'
        src={src}
        srcSet={srcSet}
        sizes='25vw'
        className='block h-full w-full border-none object-cover'
      />
    </picture>
    <div className='absolute top-0 box-border flex w-full justify-between py-3'>
      <Spacer className='spacer _8' />
      <div className='flex'>
        <Spacer className='spacer _16' />
        <div className='relative'>
          <div className='absolute -left-[26px] -top-[38px] h-20 w-20 rounded-[50%] bg-gradient-rgba-center'></div>
          <button className='pointer-events-auto relative z-10 flex cursor-pointer'>
            <SvgLike />
          </button>
        </div>
        <Spacer className='spacer _12' />
      </div>
    </div>
  </>
);
