import Services from "./_components/Services/page";
import CallToActionNew from "./_components/CallToActionNew/CallToActionNew";
import DoctorsListNew from "./_components/DoctorsListNew/DoctorsListNew";
import Reviews from "./_components/Reviews/Reviews";


export default function Home() {
 
  return (
    <main className="flex flex-col items-center justify-between p-2 pt-20 gap-10">
      <CallToActionNew/>
      <DoctorsListNew/>
      <Services/>
      <Reviews/>
    </main>
  );
}
