
import './App.css';
import Player from './player';

function App() {
    const tableau=[{name:"Ronaldo",age:38,Team:"alnassr",nationality:"Portugal",Number:9,image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCyWy2klOnv0%2F&psig=AOvVaw1AcBRPnhLHiNg9i1MIuMyP&ust=1701202771619000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOD-g9GA5YIDFQAAAAAdAAAAABAD"}
 ,{name:"Messi",age:36,Team:"Miami",nationality:"Argentina",Number:10,image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2F197394889304%2Fposts%2Fleo-messi-not-staying-at-fc-barcelonadespite-club-and-player-reaching-an-agreeme%2F10160683668619305%2F%3Flocale%3Dhi_IN&psig=AOvVaw3z1amQYC44GPzSwuL7lDQ_&ust=1701203105186000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMja7suB5YIDFQAAAAAdAAAAABAI"}
 ,{name:"stones",age:29,Team:"City",nationality:"english",Number:5,image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.skysports.com%2Ffootball%2Fnews%2F11095%2F13003069%2Fjohn-stones-pep-guardiola-says-man-city-defender-will-be-out-for-a-while-after-injury-in-champions-league-win-over-young-boys&psig=AOvVaw3kRyUYeXt3nscie1c0dSj7&ust=1701203605362000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCICg2rmD5YIDFQAAAAAdAAAAABAD"}
 ,{name:"Salah",age:31,Team:"liverpool",nationality:"egypt",Number:11,image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.afrik-foot.com%2Fwp-content%2Fuploads%2F2023%2F08%2Ficon-spi-o67-dk-chelsea-liverpool.jpg&tbnid=_ULgavSM59YPcM&vet=12ahUKEwjGnoeohOWCAxXO6AIHHTebCAgQMygCegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.afrik-foot.com%2Fliverpool-salah-manque-un-incroyable-record&docid=5Er053Lp_qmd7M&w=2048&h=1365&q=salah&ved=2ahUKEwjGnoeohOWCAxXO6AIHHTebCAgQMygCegQIARBv"}]
  return (
    <div className="App">
      <Player  tableau={tableau}/>

    </div>
  );
}

export default App;
