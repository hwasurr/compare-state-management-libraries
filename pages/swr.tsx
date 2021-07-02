import { GetStaticProps } from 'next';
import React from 'react';
import useSWR from 'swr';
import Layout from '../components/Layout';

const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(res => res.json());

export default function Swr({
  pokemon
}): React.ReactNode {
  const { data, error } = useSWR('pikachu', getPokemon, { initialData: pokemon });

  if (!error && !data) return 'loading...';
  if (error) return 'error occurred';
  return (
      <Layout>
        <div style={{ marginTop: 16 }}>
          {JSON.stringify(data, null, 2)}
        </div>
      </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemon = await getPokemon();
    return {
      props: {
        pokemon
      }
    }
}