import ButtonItem from "@/components/ButtonItem";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex gap-4">
      <SearchBox/>
        <ButtonItem text="Biography" isActive={true}/>
        <ButtonItem text="About" isActive={false}/>
        <ButtonItem text="Services" isActive={false}/>
      </div>
    </div>
  );
}
