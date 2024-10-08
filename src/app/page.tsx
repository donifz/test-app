// import BottomBar from "@/components/BottomBar";
// import Categories from "@/components/Categories";
// import Learning from "@/components/Learning";
// import MainHeadContent from "@/components/MainHeadContent";
// import UserStat from "@/components/UserStat";

import dynamic from "next/dynamic";

// const BannerMap = dynamic(() => import('@/components/BannerMap').then((mod) => mod.default), { ssr: false });

const BannerMap = dynamic(() => import("@/components/BannerMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="layout-container rounded-lg">
      {/* <MainHeadContent/>
      <Learning/>
      <Categories/>
      <UserStat/>
      <BottomBar/> */}
      <h1 className="text-3xl font-bold mb-5">Street stories</h1>
      <h1 className="text-xl font-semibold mb-5">Please choose a display to publish </h1>
      <BannerMap/>
    </div>
  );
}
