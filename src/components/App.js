import '../styles/App.scss';
import callToApi from '../services/api';
import { useState, useEffect } from 'react';

function App() {
  /*variables de estado*/
  const [dataList, setDataList] = useState([]);
  const [searchQuote, setSearchQuote] = useState('');
  const [selectCharacter, setSelectCharacter] = useState('');

  /*funciones*/

  useEffect(() => {
    callToApi()
    .then((data) => {
      setDataList(data);
    })
  }, []) 

  const renderDataList = (dataList) => {
    return dataList.filter((eachElement)=> eachElement.quote.toLowerCase().includes(searchQuote.toLowerCase())).filter((eachElement) => eachElement.character.toLowerCase().includes(selectCharacter.toLowerCase())).map((eachElement) => {
      return <li key={eachElement.id}>
        <p>{eachElement.quote}</p>
        <p>{eachElement.character}</p>
        </li>
    })
  };

  const handleInputSearch = (ev) => {
    setSearchQuote(ev.target.value);
  };

  const handleSelectCharacter = (ev) => {
    setSelectCharacter(ev.target.value);
  };

  const handelOnSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <div className='main'>
      <h1 className='main__title'>Frases de Friends</h1>
      <form onSubmit={handelOnSubmit}>
        <label htmlFor="quote">Filtrar por frase </label>
        <input name='quote' id='quote' type="text" value={searchQuote} onInput={handleInputSearch}/>
        <label htmlFor="character">Filtrar por personaje </label>
        <select name="character" id="character" onChange={handleSelectCharacter}>
          <option value="">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
      </form>
      <ul>{renderDataList(dataList)}</ul>
    </div>
  );
}

export default App;
