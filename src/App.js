import AccordianComp from './components/accordian/AccordianComp';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';

function App() {
  return (
    <div>
      <AccordianComp />
      <RandomColor />
      <StarRating noOfStar={10} />
    </div>
  );
}

export default App;
