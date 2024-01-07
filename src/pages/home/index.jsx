import Navbar from "../../components/Navbar";
import UtilityBox from "../../components/UtilityBox";
import Contents from "../../components/Contents";

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