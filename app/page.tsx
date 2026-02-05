'use client';

import React from 'react';
import TopicList from './Components/TopicList';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1 className="h4">Temas Disponibles</h1>
        </div>
        <div>
          <Link href="/TemasInteres" className="btn btn-primary">
            Ver Favoritos
          </Link>
        </div>
      </div>

      <TopicList />
    </section>
  );
}