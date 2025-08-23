import logo from '../logo.svg';
import './App.css';
import Header from './header/Heder.js';
import Article from './article/Arcticle.js';
import Footer from './footer/Footer.js';
import Nav from './nav/Nav.js';

function App(props) {
  return(
    <div className="App">
   <Header/>
   <Nav navigation = {props.navigation}/>
   <Article/>
   <Article title = "«Современные  десктопные процессоры архитектуры x86: общие принципы работы (x86 CPU FAQ 1.0)».  "
    content = " <p><b>Первая</b> — это те, кто вдруг обнаружил, что ему действительно интересно узнать,
                как работает современный x86-процессор. Для них мы попытались сосредоточить
                в рамках статьи максимальное количество полезных сведений, которые позволяют
                получить более-менее полное представление об этом процессе, даже не имея до
                этого (почти) никаких специальных знаний: здесь объясняется значение основных
                терминов, устройство современных CPU, принципы взаимодействия различных их
                составляющих между собой, а также процессора с компьютерной системой в целом."/>
   <Footer/>
 
    </div>
  );
}


export default App;
