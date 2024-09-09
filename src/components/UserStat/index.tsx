import PenIcon from "../../assets/icons/pen.svg";
import StatisticIcon from "../../assets/icons/statistic.svg";
import CodeIcon from "../../assets/icons/code.svg";
import FavIcon from "../../assets/icons/fav.svg";

const list = [
	{id:1, name:"Mistakes", icon:<PenIcon/>},
	{id:2, name:"Statistics", icon:<StatisticIcon/>},
	{id:3, name:"Highway Code", icon:<CodeIcon/>},
	{id:4, name:"Favorites", icon:<FavIcon/>}
]
const UserStat = () => {
  return (
	<div className="grid grid-cols-4 justify-between mt-6 mb-[72px]">
		{list.map(item=>{
			return (
                <div key={item.id} className="flex flex-col gap-2 items-center">
                    {item.icon}
                    <div className="w-[60px]">
                        <h3 className="subText">{item.name}</h3>
                    </div>
                </div>
            );
		})}
	</div>
  )
}

export default UserStat