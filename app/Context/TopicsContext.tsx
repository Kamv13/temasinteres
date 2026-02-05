import { createContext, useContext } from 'react';
import { Tema } from '../Models/tema';

export type TopicsContextType = {
  temas: Tema[];
  marcarFavorito: (id: number) => void;
  eliminarFavorito: (id: number) => void;
};

const TopicsContext = createContext<TopicsContextType | undefined>(undefined);

export const useTopics = (): TopicsContextType => {
  const ctx = useContext(TopicsContext);
  if (!ctx) throw new Error('useTopics debe usarse dentro de TopicsProvider');
  return ctx;
};

export default TopicsContext;