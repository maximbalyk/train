import "./App.css";
import Carousel from "./component/carousel/Carousel";
import { CarouselItem } from "./component/carousel/CarouselItem";

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem price={100}>Maksym Balyk</CarouselItem>
        <CarouselItem price={200}>Vitaliy Bondar</CarouselItem>
        <CarouselItem price={300}>Solomiya Fox</CarouselItem>
        <CarouselItem price={400}>Jack Bear</CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
