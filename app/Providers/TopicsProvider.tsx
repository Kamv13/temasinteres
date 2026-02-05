'use client';

import React, { useState } from 'react';
import TopicsContext from '../Context/TopicsContext';
import { Tema } from '../Models/tema';
import temasData from '../data/temas.json';

type Props = { children: React.ReactNode };

export const TopicsProvider = ({ children }: Props) => {
  const [temas, setTemas] = useState<Tema[]>(temasData);

  const marcarFavorito = (id: number) => {
    setTemas(prev =>
      prev.map(t => (t.id === id ? { ...t, interesante: true } : t))
    );
  };

  const eliminarFavorito = (id: number) => {
    setTemas(prev =>
      prev.map(t => (t.id === id ? { ...t, interesante: false } : t))
    );
  };

  return (
    <TopicsContext.Provider value={{ temas, marcarFavorito, eliminarFavorito }}>
      {children}
    </TopicsContext.Provider>
  );
};