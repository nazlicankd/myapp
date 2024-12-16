import React from 'react';

export default function PresentMe({ kisi }) {
  return (
    <div>
      <h1>{kisi.name}</h1>
      <h1>{kisi.hight}</h1>
      <h1>{kisi.salary}</h1>
    </div>
  );
}
