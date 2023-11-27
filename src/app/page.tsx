import pageStyles from "./page.module.css";
import Carousel from "@/components/Carousel/Carousel";
import TrendingJob from "@/components/DetailsCard/TrendingJob";

//images
import image1 from "../../public/images/contract.svg";
import image2 from "../../public/images/graduation.svg";
import image3 from "../../public/images/hire.svg";
import image4 from "../../public/images/online_cv.svg";
import image5 from "../../public/images/teacher.svg";
import InfoCard from "@/components/InfoCard/InfoCard";
import { baseUrl } from "./api/auth";

async function getLatestVacancy() {
  const res = await fetch(`${baseUrl}/latest-vacancies`, {
    next: { revalidate: 0 },
  });

  if (res.ok) {
    return res.json();
  }
}

async function getMostInDemand() {
  const res = await fetch(`${baseUrl}/max-applied-company`, {
    next: { revalidate: 0 },
  });

  if (res.ok) {
    return res.json();
  }
}

export default async function Home() {
  const latestInterns = await getLatestVacancy();

  const inDemandInterns = await getMostInDemand();
  console.log("in demand-->", inDemandInterns);

  return (
    <>
      <div className={pageStyles.main}>
        <Carousel />
      </div>
      <TrendingJob title={"Latest Interns"} internships={latestInterns} />
      <TrendingJob title={"Most In Demand"} internships={inDemandInterns} />
      <InfoCard />
    </>
  );
}
