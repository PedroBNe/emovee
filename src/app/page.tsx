'use client';

import Home from '@/app/Home/page';
import { useEffect } from 'react';

export default function Page() {
  async function fetchColors() {
    try {
      const response = await fetch('/api/color');
      if (!response.ok) {
        throw new Error('Erro ao buscar as cores.');
      }
      const colors = await response.json();
      console.log('Cores:', colors);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  useEffect(() => {
    fetchColors();
  }, []);

  return <Home />;
}
