import Nav_Tailwind_Complete from "./components/nav_complete";
import Nav_Tailwind_Slim from "./components/nav_slim";
import Section_Form_TailWind from "./components/section";

export default function Home() {
    return (<div>
      <Nav_Tailwind_Slim/>
      <div className="w80 container">
      <Section_Form_TailWind/>
      </div>
    </div>
    )
  }
  