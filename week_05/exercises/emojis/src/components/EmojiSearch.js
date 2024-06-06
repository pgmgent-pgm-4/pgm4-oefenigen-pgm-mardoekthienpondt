import React from 'react'

export default function EmojiSearch({emojis, filteredEmojis, setFiltedEmojis}) {
  return (
    <input name="filter" onChange={(e)=>{setFiltedEmojis(filteredEmojis.filter((emoji)=>{emoji.title.includes(e.target.value)}))}}>
        
    </input>
  )
}