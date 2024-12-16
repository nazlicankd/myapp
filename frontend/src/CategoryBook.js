import React from 'react';

export default function CategoryBook({ kitap, renk1, renk2 }) {
  return (
    <div style={{ color: renk1, backgroundColor: renk2 }}>
      <h1>{kitap.baslik}</h1>
      <h1>{kitap.author}</h1>
      <p>{kitap.content}</p>
      <h1>{kitap.publicationNumber}</h1>
    </div>
  );
}
