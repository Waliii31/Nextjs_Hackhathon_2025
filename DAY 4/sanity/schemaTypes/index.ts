import { type SchemaTypeDefinition } from 'sanity'
import { carSchema } from './carSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carSchema],
}
