import Image from "next/image";
import Navbar from "./components/navbar";
import BusinessSec from "./components/bussinessSec";
import ConsumerSec from "./components/consumer";
import QuoteSec3 from "./components/quoteSec3";
import VegetableSec from "./components/vegetableSec";
import Testinomal from "./components/testinomal";
import ResourcesEductaion from "./components/resourcesEductaion";
import { BrandNames } from "./components/brandsName";
import TabSection from "./components/tabSection";
import Footer from "./components/footer";

export default function Home() {
  return (
 <>
 <Navbar/>
 <BusinessSec/>
 <ConsumerSec/>
 <QuoteSec3/>
 <VegetableSec/>
 <Testinomal/>
 <ResourcesEductaion/>
 <BrandNames/>
 <TabSection/>
 <Footer/>
 </>
  );
}