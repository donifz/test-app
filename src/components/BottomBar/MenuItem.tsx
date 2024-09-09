import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ menu }) => {
    const pathName = usePathname();
    const active = "/" + menu.slug === pathName;
	const activeClass = active? " bg-orange bg-opacity-10 " : "";
    return (
        <Link
            href={"/" + menu.slug}
            className={
                "h-full flex flex-col gap-2 items-center justify-center "
            }
        >
			<div className={"w-10 h-10 flex justify-center items-center rounded-[15px]" + activeClass}>
			{menu.icon}

			</div>
            <p className="text-gray text-xs font-medium">{menu.name}</p>
        </Link>
    );
};

export default MenuItem;
