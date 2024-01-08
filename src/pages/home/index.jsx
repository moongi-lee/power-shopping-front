import Navbar from "../../components/default/Navbar";
import UtilityBox from "../../components/default/UtilityBox";
import Contents from "../../components/default/Contents";

export default function HomePage() {
  return (
      <>
        <div className="layout">
          <Navbar/>
          <UtilityBox/>
          <Contents/>
        </div>
      </>
  )
}