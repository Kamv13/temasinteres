'use client';

import React from 'react';
import { useTopics } from '../Context/TopicsContext';

type Props = { id: number; modo: 'todos' | 'interesantes' };

const TopicItem = ({ id, modo }: Props) => {
  const { temas, marcarFavorito, eliminarFavorito } = useTopics();
  const tema = temas.find(t => t.id === id);
  if (!tema) return null;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <div className="fw-bold">{tema.titulo}</div>
        <small className={tema.interesante ? 'text-success' : 'text-muted'}>
          {tema.interesante ? 'Interesante' : 'No interesante'}
        </small>
      </div>

      {modo === 'todos' && (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => marcarFavorito(tema.id)}
        >
          Agregar a favoritos
        </button>
      )}

      {modo === 'interesantes' && (
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => eliminarFavorito(tema.id)}
        >
          Eliminar de favoritos
        </button>
      )}
    </li>
  );
};

export default TopicItem;