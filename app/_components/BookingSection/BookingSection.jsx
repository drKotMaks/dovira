import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
  } from "@/components/ui/sheet"
import LoginBlock from '../LoginBlock/LoginBlock';
import { setting } from '@/lib/setting';


const BookingSection = ({children, params}) => {
  
 
  return (
    <Sheet>
    <SheetTrigger asChild>{children}</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Записатися на прийом:</SheetTitle>
        <SheetDescription>
          <LoginBlock params={params}/>
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <div className='bg-slate-400 items-center'>
         <span>{setting.phone_primery}</span>
         <span>{setting.schedulle}</span>
         <span>{setting.adress}</span>
        </div>

      </SheetFooter>
    </SheetContent>
  </Sheet>
  
  );
};

export default BookingSection;
