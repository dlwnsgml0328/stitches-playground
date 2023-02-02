import type { NextPage } from 'next';
import React, { useState } from 'react';

const Home: NextPage = () => {
  const [text, setText] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    location.href = `/movie/${text}`;
  };
  return (
    <div>
      <h1>Hello Next</h1>
      <form onSubmit={submit}>
        <input type='search' value={text} onChange={(e) => setText(e.target.value)} />
        <button type='submit'>search</button>
      </form>
    </div>
  );
};

export default Home;
