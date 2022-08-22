import { windowCheck } from '@/lib/apollo';

import { LinkLogin, LinkSignup } from '@/components/links/NavLink';

import { LOCALSTORAGE_TOKEN } from '@/constant/env';
import { useDelivery } from '@/contexts';
import { NavItemDelivery, NavItemSearch, Spacer } from '@/ui';
import { Cart } from '@/ui/cart';
import { DiningToggler } from '@/ui/toggler';

export function NavbarDiningContent() {
  let auth;
  if (windowCheck) {
    auth = localStorage.getItem(LOCALSTORAGE_TOKEN ? LOCALSTORAGE_TOKEN : '');
  }

  const { isComplete } = useDelivery();
  if (auth)
    return (
      <>
        <Spacer className='w-10' />
        {isComplete ? <DiningToggler /> : null}
        <Spacer className='w-4' />
        <NavItemDelivery />
        <Spacer className='w-16' />
        <NavItemSearch />
        <Spacer className='w-6' />
        <Cart />
      </>
    );

  return (
    <>
      <Spacer className='w-10' />
      <DiningToggler />
      <Spacer className='w-4' />
      <NavItemDelivery />
      <Spacer className='w-16' />
      <NavItemSearch />
      <Spacer className='w-4' />
      <div className='flex flex-grow-0 items-center justify-end'>
        <Cart size='small' />
        <Spacer className='w-4' />
        <LinkLogin size='small' />
        <Spacer className='w-4' />
        <LinkSignup size='small' />
      </div>
    </>
  );
}