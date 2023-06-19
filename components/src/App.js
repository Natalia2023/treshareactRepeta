import {PageTitle} from './componentss/PageTitle/PageTitle';
import './App.css';
import {EventBoard} from './componentss/EventBoard/EventBoard';
import upcomingEvents from './upcoming-events.json';



function App() {
  return (
    <>
  
    <PageTitle text="24th Core Worlds Coalition Conference" />
    <EventBoard events={upcomingEvents}/>

    </>
  );


}

export default App;
