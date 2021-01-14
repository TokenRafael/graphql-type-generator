import { db } from './db'
export const resolver = {
  <%%>: {
    id: (parent, args) => parent.id
  },
  Query: {
    <%%>s: (parent, args) => {},
    <%%>: (parent, args) => {}
  },
  Mutation: {
    create<%%>: (parent, args) => {},
    update<%%>: (parent, args) => {},
    delete<%%>: (parent, args) => {}
  }
};