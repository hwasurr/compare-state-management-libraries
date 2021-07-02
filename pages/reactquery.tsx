import { GetStaticProps } from 'next';
import React from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/Layout';

const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(res => res.json());

export default function Reactquery({
  pokemon
}): React.ReactNode {
  const { data, isLoading, isError } = useQuery('pikachu', getPokemon, { initialData: pokemon });

  if (isError) return 'error occurred';
  if (isLoading) return 'loading...';

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