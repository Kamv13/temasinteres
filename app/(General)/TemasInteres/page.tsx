'use client';

import React from 'react';
import TopicList from '../../Components/TopicList';
import Link from 'next/link';
import { TopicsProvider } from '../../Providers/TopicsProvider';

export default function TemasInteres() {
  return (
    <TopicsProvider>
      <section>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h1 className="h4">Temas Favoritos</h1>
            <p className="text-muted mb-0">
              Estos son tus temas favoritos
            </p>
          </div>
          <div>
            <Link href="/" className="btn btn-outline-secondary">
              Volver
            </Link>
          </div>
        </div>
        <TopicList onlyInteresantes />
      </section>
    </TopicsProvider>
  );
}