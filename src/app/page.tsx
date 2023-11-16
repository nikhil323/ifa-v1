import LinkedInCard from "@/components/PostCard/PostCard";
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

export default function Home() {
  const latestInterns = [
    {
      id: 1,
      imageUrl: image1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/1",
    },
    {
      id: 2,
      imageUrl: image2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/2",
    },
    {
      id: 3,
      imageUrl: image3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/3",
    },
    {
      id: 4,
      imageUrl: image4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/4",
    },
    {
      id: 5,
      imageUrl: image5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/5",
    },
    {
      id: 6,
      imageUrl: image1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/1",
    },
  ];

  const inDemandInterns = [
    {
      id: 5,
      imageUrl: image5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/5",
    },
    {
      id: 1,
      imageUrl: image1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/1",
    },
    {
      id: 2,
      imageUrl: image2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/2",
    },
    {
      id: 3,
      imageUrl: image3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/3",
    },
    {
      id: 4,
      imageUrl: image4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/4",
    },
    {
      id: 6,
      imageUrl: image2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/2",
    },
    {
      id: 7,
      imageUrl: image3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, temporibus.",
      detailLink: "/details/3",
    },
  ];
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
