import React from 'react'

export default function Emoji({emoji, title}) {
  return (
    <div className="emoji-card">
      <div className="emoji__symbol">
        {emoji}
      </div>
      <div>
        {title}
      </div>
    </div>
  )
}
