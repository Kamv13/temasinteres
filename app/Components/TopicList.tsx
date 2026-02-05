'use client';

import React from 'react';
import { useTopics } from '../Context/TopicsContext';
import TopicItem from './TopicItem';

type Props = { onlyInteresantes?: boolean };

const TopicList = ({ onlyInteresantes = false }: Props) => {
  const { temas } = useTopics();
  const lista = onlyInteresantes ? temas.filter(t => t.interesante) : temas;

  if (!lista || lista.length === 0) {
    return <div className="alert alert-info">No hay temas en favoritos.</div>;
  }

  return (
    <ul className="list-group">
      {lista.map(t => (
        <TopicItem
          key={t.id}
          id={t.id}
          modo={onlyInteresantes ? 'interesantes' : 'todos'}
        />
      ))}
    </ul>
  );
};

export default TopicList;