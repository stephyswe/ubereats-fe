import { ItemRanking } from '@/components/pages/client/city/food-list';
import { ItemImage } from '@/components/pages/client/items';
import Typography from '@/components/typography';

const resturantData = [
  {
    __typename: 'Restaurant',
    id: 1,
    name: 'BBQ House',
    coverImg:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iNzUwYTg3OC0wNzg2LTRhYWYtYmQ4NS0wMDM2NTRhNThjM2Y=',
    category: {
      __typename: 'Category',
      name: 'Fast Food',
    },
    address: '123 Altavista',
    isPromoted: false,
    ranking: '3.4',
  },
  {
    __typename: 'Restaurant',
    id: 1,
    name: 'BBQ House',
    coverImg:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iNzUwYTg3OC0wNzg2LTRhYWYtYmQ4NS0wMDM2NTRhNThjM2Y=',
    category: {
      __typename: 'Category',
      name: 'Fast Food',
    },
    address: '123 Altavista',
    isPromoted: false,
    ranking: '3.4',
  },
  {
    __typename: 'Restaurant',
    id: 1,
    name: 'BBQ House',
    coverImg:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iNzUwYTg3OC0wNzg2LTRhYWYtYmQ4NS0wMDM2NTRhNThjM2Y=',
    category: {
      __typename: 'Category',
      name: 'Fast Food',
    },
    address: '123 Altavista',
    isPromoted: false,
    ranking: '3.4',
  },
];

// eslint-disable-next-line unused-imports/no-unused-vars
export const RestaurantList = ({ data }: any) => (
  <div className='grid grid-cols-3 gap-[40px_24px]'>
    {resturantData.map((foodItem: any, index: number) => (
      <div key={index} className='min-w-0'>
        <div className='relative overflow-hidden'>
          <div className='pointer-events-none relative flex overflow-hidden'>
            <div className='z-0 w-full'>
              <figure className='relative m-0 h-[128px] overflow-hidden bg-[#f6f6f6]'>
                <div className='absolute left-0 top-0 h-full w-full'>
                  <div className='h-[128px]'>
                    <ItemImage coverImg={foodItem.coverImg} />
                  </div>
                </div>
              </figure>
              <div className='flex items-start pt-3'>
                <div className='flex min-w-0 flex-1 flex-col'>
                  <Typography as='p' variant='pCategoryResItemTitle'>
                    McDonalds Scandinavium
                  </Typography>
                  <ItemTags category={foodItem.category} />
                </div>
                <div className='w-4'></div>
                <ItemRanking ranking='3.4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ItemTags = ({ category }: any) => (
  <div>
    <span className='text-sm'>{category.name}</span>
    <span className='text-sm'>&nbsp;•&nbsp; 59.00SEK Fee • $</span>
  </div>
);