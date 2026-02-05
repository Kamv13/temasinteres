'use client';

import React from 'react';
import TopicList from '../../Components/TopicList';
import Link from 'next/link';

export default function TemasInteres() {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1 className="h4">Temas Favoritos</h1>
        </div>
        <div>
          <Link href="/" className="btn btn-outline-secondary">Volver al inicio</Link>
        </div>
      </div>

      <TopicList onlyInteresantes />
    </section>
  );
}