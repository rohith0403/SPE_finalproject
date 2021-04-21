import './App.css';
import Sidebar from "./Components/Sidebar";
import Search from "./Components/Search";
import Card from "./Components/Card";
import JSONDATA from "./BOOK_DATA.json";


function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Search/>
      <div class="row">
        <div class="column">
          <Card className="card" img="GT_COK.jpg" title="Game of Thrones: Clash of Kings" summary="A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright." />
        </div>
        <div class="column">
        <Card className="card" img="GT_COK.jpg" title="Game of Thrones: Clash of Kings" summary="A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright." /> 
        </div>
        <div class="column">
          <Card className="card" img="GT_COK.jpg" title="Game of Thrones: Clash of Kings" summary="A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright." />
        </div>
        <div class="column">
          <Card className="card" img="GT_COK.jpg" title="Game of Thrones: Clash of Kings" summary="A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright." />
        </div>
        <div class="column">
          <Card className="card" img="GT_COK.jpg" title="Game of Thrones: Clash of Kings" summary="A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright." />
        </div>
        <div class="column">
          <Card className="card" img="GT_COK.jpg" title="Game of Thrones: Clash of Kings" summary="A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright." />
        </div>
        <div class="column">
          <Card className="card" img="GT_COK.jpg" title="Game of Thrones: Clash of Kings" summary="A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright." />
        </div>
      </div>
    </div>
  );
}

export default App;
