
import Webpages from './webpages';
function App(props) {
  console.log(props);
  return (
    <div>
      <Webpages {...props}/>
    </div>
  );
}
export default App;