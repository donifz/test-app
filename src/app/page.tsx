import BottomBar from "@/components/BottomBar";
import Categories from "@/components/Categories";
import Learning from "@/components/Learning";
import MainHeadContent from "@/components/MainHeadContent";
import UserStat from "@/components/UserStat";

export default function Home() {
  return (
    <div className="layout-container rounded-lg">
      <MainHeadContent/>
      <Learning/>
      <Categories/>
      <UserStat/>
      <BottomBar/>
    </div>
  );
}
