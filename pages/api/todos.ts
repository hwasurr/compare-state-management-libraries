// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

let todos = [{ id: 1, title: 'test' }];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const { title } = body;
    if (!title) return res.status(400).send('bad request');

    const id = todos.length + 1;
    const newTodo = { id, title };
    todos.push(newTodo);

    return res.status(201).json(newTodo);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    const beforeLength = todos.length;
    todos = todos.filter((x) => x.id !== parseInt(id as string, 10));
    const afterLength = todos.length;

    if (beforeLength - afterLength > 0) return res.status(200).json(true);
    return res.status(200).json(false);
  }
};

export default handler;
