import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Emoji from './Emoji';
import './emoji.css';
import EmojiSearch from './EmojiSearch';
export default function EmojiList() {
  const url = 'https://www.pgm.gent/pgm-4/data/emojis.json';
  const [searchTerm, setSearchTerm] = useState("");
  const { data: emojis, isLoading, isError } = useFetch(url);

  const [filteredEmojis, setFilteredEmojis] = useState([]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }
  setFilteredEmojis(emojis);
  return (
    
    <>
      <EmojiSearch emojis={emojis} filteredEmojis={filteredEmojis} setFiltedEmojis={setFilteredEmojis} />
      <ul className="emoji-list">
        {console.log(filteredEmojis)}
        {filteredEmojis.map((emoji) => {
          return (
            <li>
              <Emoji emoji={emoji.symbol} title={emoji.title} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
