import Color from './components/Color';
import Counter from './components/Counter';
import Darkmode from './components/Darkmode';
import Message from './components/Message';
import Beers from './components/beers/Beers';
import styled from 'styled-components';
import Notification from './components/notifications/Notification';
import Tasklist from './components/Tasklist';



function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <Message/>
      <Darkmode/>
      <Color/> */}
      {/* <Beers/> */}
      {/* <Notification type="success" title="Success" message="The list has been saved."/>
      <Notification type="error" title="Error" message="Error message."/>
      <Notification type="info" title="Info" message="Info message."/>
      <Notification type="warning" title="Warning" message="Warning message."/> */}
      <Tasklist/>

    </div>
  );
}

export default App;
