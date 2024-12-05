import  {type SchemaTypeDefinition} from 'sanity'
import { post } from './schemaTypes/post'
import { tag } from './schemaTypes/tag'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}
