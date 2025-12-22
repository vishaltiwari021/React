import React from 'react'

function Card({username}) {
  return (
    <>
    <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" src="cow.jpg" alt="image not found" />

  </div>
  <div class="flex">
    <span class="text-2xl font-medium">{username}</span>
    <span>The Anti-Patterns</span>
    <span class="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </>
  )
}

export default Card