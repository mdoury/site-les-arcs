import { TextNode } from './text-node.interface';
import { ValueBlock } from './value-blocks.interface';
export interface LandingPage {
    id: string;
    slug: string;
    title: string;
    headerImage: GatsbyDatoCmsFluid;
    headerTextNode: TextNode;
    valueBlocks: ValueBlock[];
  }