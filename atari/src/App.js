import Account from "./components/Accounts";
import DashboardHeader from "./components/dasboardHeader";
import Dashboard from "./components/dashboard";
import FinalDashboard from "./components/FinalDashboard";
import Form from "./components/form";
import MobileComponent from "./components/mobileComponent";
import NewsTile from "./components/newsTile";
import Profile_Header from "./components/profileHeader";
import ViewContent from "./components/viewContent";
import VoteForm from "./components/vote";
import Windowsize from "./components/windowsize";

function App() {



  const [width] = Windowsize();
  return (
    <div className="App">
   {/* <Form/> 
        {/* <Profile_Header/> 

        <NewsTile/> 
        <VoteForm/>  

        <ViewContent />

        <Dashboard/> 

        <DashboardHeader/>

        <Account/>
        <FinalDashboard/>*/}

        <div>
      {width < 480 ? <MobileComponent /> : <FinalDashboard />}
    </div>
    </div>
  );
}

export default App;
