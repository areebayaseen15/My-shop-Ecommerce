// import Container from  "@/app/component/Container"
import Banner from "./component/Banner";
import Facilities from "./component/facilities";
import Productlist from "./component/productlist";
export default function Home() {
  return (
    <div className="py-10">
      <Banner/>
   <Facilities/>
      < Productlist/> 
   </div>
  );
}
