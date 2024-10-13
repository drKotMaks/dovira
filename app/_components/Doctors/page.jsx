//import DoctorIter from "../DoctorIter/page";

import Image from "next/image"
import React from "react";
import DoctorIter from "../DoctorIter/page";

export default function Doctors () {

    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 ">
         <DoctorIter/>
         <DoctorIter/>
         <DoctorIter/>
         <DoctorIter/>
        
        

      </div>
    );
}