import { TextNode } from './text-node.interface'
export interface ValueBlock {
  id: string
  valueTextNode: TextNode
  valueIcon: {
    url: string
  }
}
