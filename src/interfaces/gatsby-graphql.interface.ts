/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;
/** An object with an id, parent, and children */
export interface Node {
  id: string /** The id of the node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
}

export interface Query {
  allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */;
  allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */;
  allArtist?: ArtistConnection | null /** Connection to all Artist nodes */;
  allRecord?: RecordConnection | null /** Connection to all Record nodes */;
  allReview?: ReviewConnection | null /** Connection to all Review nodes */;
  allReviewMarkdown?: ReviewMarkdownConnection | null /** Connection to all ReviewMarkdown nodes */;
  allMarkdownRemark?: MarkdownRemarkConnection | null /** Connection to all MarkdownRemark nodes */;
  allDatoCmsField?: DatoCmsFieldConnection | null /** Connection to all DatoCmsField nodes */;
  allDatoCmsModel?: DatoCmsModelConnection | null /** Connection to all DatoCmsModel nodes */;
  allDatoCmsSeoMetaTags?: DatoCmsSeoMetaTagsConnection | null /** Connection to all DatoCmsSeoMetaTags nodes */;
  allDatoCmsOneColumnSectionContentTextNode?: DatoCmsOneColumnSectionContentTextNodeConnection | null /** Connection to all DatoCmsOneColumnSectionContentTextNode nodes */;
  allDatoCmsPrice?: DatoCmsPriceConnection | null /** Connection to all DatoCmsPrice nodes */;
  allDatoCmsWeek?: DatoCmsWeekConnection | null /** Connection to all DatoCmsWeek nodes */;
  allDatoCmsHomepage?: DatoCmsHomepageConnection | null /** Connection to all DatoCmsHomepage nodes */;
  allDatoCmsFullWidthImage?: DatoCmsFullWidthImageConnection | null /** Connection to all DatoCmsFullWidthImage nodes */;
  allDatoCmsOneColumnSection?: DatoCmsOneColumnSectionConnection | null /** Connection to all DatoCmsOneColumnSection nodes */;
  allDatoCmsSite?: DatoCmsSiteConnection | null /** Connection to all DatoCmsSite nodes */;
  allDatoCmsTwoColumnSectionFirstColumnContentTextNode?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnection | null /** Connection to all DatoCmsTwoColumnSectionFirstColumnContentTextNode nodes */;
  allDatoCmsTwoColumnSectionSecondColumnContentTextNode?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnection | null /** Connection to all DatoCmsTwoColumnSectionSecondColumnContentTextNode nodes */;
  allDatoCmsTwoColumnSection?: DatoCmsTwoColumnSectionConnection | null /** Connection to all DatoCmsTwoColumnSection nodes */;
  allDatoCmsAsset?: DatoCmsAssetConnection | null /** Connection to all DatoCmsAsset nodes */;
  sitePage?: SitePage | null;
  sitePlugin?: SitePlugin | null;
  site?: Site | null;
  artist?: Artist | null;
  record?: Record | null;
  review?: Review | null;
  reviewMarkdown?: ReviewMarkdown | null;
  markdownRemark?: MarkdownRemark | null;
  datoCmsField?: DatoCmsField | null;
  datoCmsModel?: DatoCmsModel | null;
  datoCmsSeoMetaTags?: DatoCmsSeoMetaTags | null;
  datoCmsOneColumnSectionContentTextNode?: DatoCmsOneColumnSectionContentTextNode | null;
  datoCmsPrice?: DatoCmsPrice | null;
  datoCmsWeek?: DatoCmsWeek | null;
  datoCmsHomepage?: DatoCmsHomepage | null;
  datoCmsFullWidthImage?: DatoCmsFullWidthImage | null;
  datoCmsOneColumnSection?: DatoCmsOneColumnSection | null;
  datoCmsSite?: DatoCmsSite | null;
  datoCmsTwoColumnSectionFirstColumnContentTextNode?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null;
  datoCmsTwoColumnSectionSecondColumnContentTextNode?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null;
  datoCmsTwoColumnSection?: DatoCmsTwoColumnSection | null;
  datoCmsAsset?: DatoCmsAsset | null;
}
/** A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (SitePageEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (SitePageGroupConnectionConnection | null)[] | null;
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating, are there more items? */;
}
/** An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /** The item at the end of the edge */;
  next?: SitePage | null /** The next edge in the connection */;
  previous?: SitePage | null /** The previous edge in the connection */;
}
/** Node of type SitePage */
export interface SitePage extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  jsonName?: string | null;
  internalComponentName?: string | null;
  path?: string | null;
  component?: string | null;
  componentChunkName?: string | null;
  context?: Context | null;
  pluginCreator?: SitePlugin | null;
  pluginCreatorId?: string | null;
  componentPath?: string | null;
  internal?: Internal_23 | null;
}

export interface Context {
  id?: string | null;
  mdid?: string | null;
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  resolve?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: PluginOptions_2 | null;
  nodeAPIs?: (string | null)[] | null;
  browserAPIs?: (string | null)[] | null;
  ssrAPIs?: (string | null)[] | null;
  pluginFilepath?: string | null;
  packageJson?: PackageJson_2 | null;
  internal?: Internal_24 | null;
}

export interface PluginOptions_2 {
  endpoint?: string | null;
  query?: string | null;
  apiToken?: string | null;
  name?: string | null;
  short_name?: string | null;
  start_url?: string | null;
  background_color?: string | null;
  theme_color?: string | null;
  display?: string | null;
  icons?: (Icons_2 | null)[] | null;
  path?: string | null;
  pathCheck?: boolean | null;
}

export interface Icons_2 {
  src?: string | null;
  sizes?: string | null;
  type?: string | null;
}

export interface PackageJson_2 {
  name?: string | null;
  description?: string | null;
  version?: string | null;
  main?: string | null;
  author?: string | null;
  license?: string | null;
  dependencies?: (Dependencies_2 | null)[] | null;
  devDependencies?: (DevDependencies_2 | null)[] | null;
  peerDependencies?: (PeerDependencies_2 | null)[] | null;
  keywords?: (string | null)[] | null;
}

export interface Dependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface DevDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface PeerDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface Internal_24 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface Internal_23 {
  type?: string | null;
  contentDigest?: string | null;
  description?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (SitePageGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  node?: SitePage | null /** The item at the end of the edge */;
  next?: SitePage | null /** The next edge in the connection */;
  previous?: SitePage | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (SitePluginEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (SitePluginGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /** The item at the end of the edge */;
  next?: SitePlugin | null /** The next edge in the connection */;
  previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (SitePluginGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  node?: SitePlugin | null /** The item at the end of the edge */;
  next?: SitePlugin | null /** The next edge in the connection */;
  previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface ArtistConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (ArtistEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (ArtistGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface ArtistEdge {
  node?: Artist | null /** The item at the end of the edge */;
  next?: Artist | null /** The next edge in the connection */;
  previous?: Artist | null /** The previous edge in the connection */;
}
/** Node of type Artist */
export interface Artist extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  name?: string | null;
  slug?: string | null;
  picture?: Picture_2 | null;
  records?: (Records_2 | null)[] | null;
  internal?: Internal_25 | null;
}

export interface Picture_2 {
  id?: string | null;
  handle?: string | null;
  width?: number | null;
  height?: number | null;
}

export interface Records_2 {
  id?: string | null;
  slug?: string | null;
  title?: string | null;
}

export interface Internal_25 {
  type?: string | null;
  content?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface ArtistGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (ArtistGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface ArtistGroupConnectionEdge {
  node?: Artist | null /** The item at the end of the edge */;
  next?: Artist | null /** The next edge in the connection */;
  previous?: Artist | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface RecordConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (RecordEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (RecordGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface RecordEdge {
  node?: Record | null /** The item at the end of the edge */;
  next?: Record | null /** The next edge in the connection */;
  previous?: Record | null /** The previous edge in the connection */;
}
/** Node of type Record */
export interface Record extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  slug?: string | null;
  tracks?: (Tracks_2 | null)[] | null;
  cover?: Cover_2 | null;
  artist?: Artist_3 | null;
  reviews?: (Reviews_2 | null)[] | null;
  createdAt?: Date | null;
  title?: string | null;
  internal?: Internal_26 | null;
}

export interface Tracks_2 {
  id?: string | null;
  title?: string | null;
  aliasedLength?: number | null;
}

export interface Cover_2 {
  handle?: string | null;
}

export interface Artist_3 {
  id?: string | null;
  slug?: string | null;
  name?: string | null;
}

export interface Reviews_2 {
  id?: string | null;
  slug?: string | null;
  title?: string | null;
}

export interface Internal_26 {
  type?: string | null;
  content?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface RecordGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (RecordGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface RecordGroupConnectionEdge {
  node?: Record | null /** The item at the end of the edge */;
  next?: Record | null /** The next edge in the connection */;
  previous?: Record | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface ReviewConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (ReviewEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (ReviewGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface ReviewEdge {
  node?: Review | null /** The item at the end of the edge */;
  next?: Review | null /** The next edge in the connection */;
  previous?: Review | null /** The previous edge in the connection */;
}
/** Node of type Review */
export interface Review extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  review?: string | null;
  slug?: string | null;
  rating?: number | null;
  createdAt?: Date | null;
  title?: string | null;
  record?: Record_2 | null;
  comments?: (Comments_2 | null)[] | null;
  internal?: Internal_27 | null;
}

export interface Record_2 {
  slug?: string | null;
  title?: string | null;
  artist?: Artist_4 | null;
}

export interface Artist_4 {
  slug?: string | null;
  name?: string | null;
}

export interface Comments_2 {
  body?: string | null;
}

export interface Internal_27 {
  type?: string | null;
  content?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface ReviewGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (ReviewGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface ReviewGroupConnectionEdge {
  node?: Review | null /** The item at the end of the edge */;
  next?: Review | null /** The next edge in the connection */;
  previous?: Review | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface ReviewMarkdownConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (ReviewMarkdownEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (ReviewMarkdownGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface ReviewMarkdownEdge {
  node?: ReviewMarkdown | null /** The item at the end of the edge */;
  next?: ReviewMarkdown | null /** The next edge in the connection */;
  previous?: ReviewMarkdown | null /** The previous edge in the connection */;
}
/** Node of type ReviewMarkdown */
export interface ReviewMarkdown extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */;
  internal?: Internal_28 | null;
}
/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  internal?: Internal_29 | null;
  frontmatter?: Frontmatter_2 | null;
  rawMarkdownBody?: string | null;
  html?: string | null;
  htmlAst?: Json | null;
  excerpt?: string | null;
  headings?: (MarkdownHeading | null)[] | null;
  timeToRead?: number | null;
  tableOfContents?: string | null;
  wordCount?: WordCount | null;
}

export interface Internal_29 {
  content?: string | null;
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}

export interface Frontmatter_2 {
  title?: string | null;
  _PARENT?: string | null;
}

export interface MarkdownHeading {
  value?: string | null;
  depth?: number | null;
}

export interface WordCount {
  paragraphs?: number | null;
  sentences?: number | null;
  words?: number | null;
}

export interface Internal_28 {
  type?: string | null;
  mediaType?: string | null;
  content?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface ReviewMarkdownGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (ReviewMarkdownGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface ReviewMarkdownGroupConnectionEdge {
  node?: ReviewMarkdown | null /** The item at the end of the edge */;
  next?: ReviewMarkdown | null /** The next edge in the connection */;
  previous?: ReviewMarkdown | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (MarkdownRemarkEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (MarkdownRemarkGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null /** The item at the end of the edge */;
  next?: MarkdownRemark | null /** The next edge in the connection */;
  previous?: MarkdownRemark | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (MarkdownRemarkGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null /** The item at the end of the edge */;
  next?: MarkdownRemark | null /** The next edge in the connection */;
  previous?: MarkdownRemark | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsFieldConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsFieldEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsFieldGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsFieldEdge {
  node?: DatoCmsField | null /** The item at the end of the edge */;
  next?: DatoCmsField | null /** The next edge in the connection */;
  previous?: DatoCmsField | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsField */
export interface DatoCmsField extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  originalId?: string | null;
  internal?: Internal_30 | null;
  label?: string | null;
  fieldType?: string | null;
  apiKey?: string | null;
  hint?: string | null;
  localized?: boolean | null;
  validators?: Validators_2 | null;
  position?: number | null;
  appeareance?: Appeareance_2 | null;
}

export interface Internal_30 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}

export interface Validators_2 {
  itemItemType?: ItemItemType_2 | null;
  numberRange?: NumberRange_2 | null;
  richTextBlocks?: RichTextBlocks_2 | null;
  extension?: Extension_2 | null;
}

export interface ItemItemType_2 {
  itemTypes?: (string | null)[] | null;
}

export interface NumberRange_2 {
  min?: string | null;
}

export interface RichTextBlocks_2 {
  itemTypes?: (string | null)[] | null;
}

export interface Extension_2 {
  predefinedList?: string | null;
}

export interface Appeareance_2 {
  editor?: string | null;
  parameters?: Parameters_3 | null;
  addons?: (Addons_2 | null)[] | null;
  type?: string | null;
}

export interface Parameters_3 {
  heading?: boolean | null;
  startCollapsed?: boolean | null;
  toolbar?: (string | null)[] | null;
}

export interface Addons_2 {
  id?: string | null;
  parameters?: Parameters_4 | null;
}

export interface Parameters_4 {
  slaveFields?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsFieldGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsFieldGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsFieldGroupConnectionEdge {
  node?: DatoCmsField | null /** The item at the end of the edge */;
  next?: DatoCmsField | null /** The next edge in the connection */;
  previous?: DatoCmsField | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsModelConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsModelEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsModelGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsModelEdge {
  node?: DatoCmsModel | null /** The item at the end of the edge */;
  next?: DatoCmsModel | null /** The next edge in the connection */;
  previous?: DatoCmsModel | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsModel */
export interface DatoCmsModel extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  originalId?: string | null;
  internal?: Internal_31 | null;
  name?: string | null;
  singleton?: boolean | null;
  sortable?: boolean | null;
  apiKey?: string | null;
  tree?: boolean | null;
  modularBlock?: boolean | null;
  draftModeActive?: boolean | null;
  allLocalesRequired?: boolean | null;
  collectionAppeareance?: string | null;
  hasSingletonItem?: boolean | null;
  fields?: (DatoCmsField | null)[] | null;
}

export interface Internal_31 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsModelGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsModelGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsModelGroupConnectionEdge {
  node?: DatoCmsModel | null /** The item at the end of the edge */;
  next?: DatoCmsModel | null /** The next edge in the connection */;
  previous?: DatoCmsModel | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsSeoMetaTagsConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsSeoMetaTagsEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsSeoMetaTagsGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsSeoMetaTagsEdge {
  node?: DatoCmsSeoMetaTags | null /** The item at the end of the edge */;
  next?: DatoCmsSeoMetaTags | null /** The next edge in the connection */;
  previous?: DatoCmsSeoMetaTags | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsSeoMetaTags */
export interface DatoCmsSeoMetaTags extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  tags?: (Tags_2 | null)[] | null;
  internal?: Internal_32 | null;
}

export interface Tags_2 {
  tagName?: string | null;
  content?: string | null;
  attributes?: Attributes_2 | null;
}

export interface Attributes_2 {
  property?: string | null;
  content?: string | null;
  name?: string | null;
}

export interface Internal_32 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsSeoMetaTagsGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsSeoMetaTagsGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsSeoMetaTagsGroupConnectionEdge {
  node?: DatoCmsSeoMetaTags | null /** The item at the end of the edge */;
  next?: DatoCmsSeoMetaTags | null /** The next edge in the connection */;
  previous?: DatoCmsSeoMetaTags | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsOneColumnSectionContentTextNodeConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsOneColumnSectionContentTextNodeEdge | null)[]
    | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?:
    | (DatoCmsOneColumnSectionContentTextNodeGroupConnectionConnection | null)[]
    | null;
}
/** An edge in a connection. */
export interface DatoCmsOneColumnSectionContentTextNodeEdge {
  node?: DatoCmsOneColumnSectionContentTextNode | null /** The item at the end of the edge */;
  next?: DatoCmsOneColumnSectionContentTextNode | null /** The next edge in the connection */;
  previous?: DatoCmsOneColumnSectionContentTextNode | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsOneColumnSectionContentTextNode */
export interface DatoCmsOneColumnSectionContentTextNode extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */;
  content?: string | null;
  internal?: Internal_33 | null;
}

export interface Internal_33 {
  type?: string | null;
  mediaType?: string | null;
  content?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsOneColumnSectionContentTextNodeGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsOneColumnSectionContentTextNodeGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsOneColumnSectionContentTextNodeGroupConnectionEdge {
  node?: DatoCmsOneColumnSectionContentTextNode | null /** The item at the end of the edge */;
  next?: DatoCmsOneColumnSectionContentTextNode | null /** The next edge in the connection */;
  previous?: DatoCmsOneColumnSectionContentTextNode | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsPriceConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsPriceEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsPriceGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsPriceEdge {
  node?: DatoCmsPrice | null /** The item at the end of the edge */;
  next?: DatoCmsPrice | null /** The next edge in the connection */;
  previous?: DatoCmsPrice | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsPrice */
export interface DatoCmsPrice extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childDatoCmsSeoMetaTags?: DatoCmsSeoMetaTags | null /** The child of this node of type datoCmsSeoMetaTags */;
  originalId?: string | null;
  internal?: Internal_34 | null;
  locale?: string | null;
  model?: DatoCmsModel | null;
  title?: string | null;
  base?: number | null;
  isPriceDiscounted?: boolean | null;
  discount?: number | null;
  discounted?: number | null;
  seoMetaTags?: DatoCmsSeoMetaTags | null;
  updatedAt?: Date | null;
}

export interface Internal_34 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsPriceGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsPriceGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsPriceGroupConnectionEdge {
  node?: DatoCmsPrice | null /** The item at the end of the edge */;
  next?: DatoCmsPrice | null /** The next edge in the connection */;
  previous?: DatoCmsPrice | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsWeekConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsWeekEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsWeekGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsWeekEdge {
  node?: DatoCmsWeek | null /** The item at the end of the edge */;
  next?: DatoCmsWeek | null /** The next edge in the connection */;
  previous?: DatoCmsWeek | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsWeek */
export interface DatoCmsWeek extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childDatoCmsSeoMetaTags?: DatoCmsSeoMetaTags | null /** The child of this node of type datoCmsSeoMetaTags */;
  originalId?: string | null;
  internal?: Internal_35 | null;
  locale?: string | null;
  model?: DatoCmsModel | null;
  title?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  price?: DatoCmsPrice | null;
  seoMetaTags?: DatoCmsSeoMetaTags | null;
  updatedAt?: Date | null;
}

export interface Internal_35 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsWeekGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsWeekGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsWeekGroupConnectionEdge {
  node?: DatoCmsWeek | null /** The item at the end of the edge */;
  next?: DatoCmsWeek | null /** The next edge in the connection */;
  previous?: DatoCmsWeek | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsHomepageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsHomepageEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsHomepageGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsHomepageEdge {
  node?: DatoCmsHomepage | null /** The item at the end of the edge */;
  next?: DatoCmsHomepage | null /** The next edge in the connection */;
  previous?: DatoCmsHomepage | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsHomepage */
export interface DatoCmsHomepage extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childDatoCmsAsset?: DatoCmsAsset | null /** The child of this node of type datoCmsAsset */;
  childDatoCmsSeoMetaTags?: DatoCmsSeoMetaTags | null /** The child of this node of type datoCmsSeoMetaTags */;
  originalId?: string | null;
  internal?: Internal_36 | null;
  locale?: string | null;
  model?: DatoCmsModel | null;
  title?: string | null;
  headerImage?: DatoCmsAsset | null;
  content?: (UnionContentNode_2 | null)[] | null;
  seoMetaTags?: DatoCmsSeoMetaTags | null;
  updatedAt?: Date | null;
}
/** Node of type DatoCmsAsset */
export interface DatoCmsAsset extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  internal?: Internal_37 | null;
  format?: string | null;
  size?: number | null;
  width?: number | null;
  height?: number | null;
  url?: string | null;
  resolutions?: DatoCmsFixed | null;
  sizes?: DatoCmsFluid | null;
  inlineSvg?: string | null;
  fluid?: DatoCmsFluid | null;
  fixed?: DatoCmsFixed | null;
}

export interface Internal_37 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}

export interface DatoCmsFixed {
  base64?: string | null;
  aspectRatio?: number | null;
  width?: number | null;
  height?: number | null;
  src?: string | null;
  srcSet?: string | null;
}

export interface DatoCmsFluid {
  base64?: string | null;
  aspectRatio?: number | null;
  src?: string | null;
  srcSet?: string | null;
  sizes?: string | null;
}

export interface Internal_36 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** Node of type DatoCmsOneColumnSection */
export interface DatoCmsOneColumnSection extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childDatoCmsOneColumnSectionContentTextNode?: DatoCmsOneColumnSectionContentTextNode | null /** The child of this node of type datoCmsOneColumnSectionContentTextNode */;
  childDatoCmsSeoMetaTags?: DatoCmsSeoMetaTags | null /** The child of this node of type datoCmsSeoMetaTags */;
  childDatoCmsAsset?: DatoCmsAsset | null /** The child of this node of type datoCmsAsset */;
  originalId?: string | null;
  internal?: Internal_38 | null;
  locale?: string | null;
  model?: DatoCmsModel | null;
  title?: string | null;
  contentNode?: DatoCmsOneColumnSectionContentTextNode | null;
  content?: string | null;
  seoMetaTags?: DatoCmsSeoMetaTags | null;
  updatedAt?: Date | null;
  headerImage?: DatoCmsAsset | null;
}

export interface Internal_38 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** Node of type DatoCmsTwoColumnSection */
export interface DatoCmsTwoColumnSection extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childDatoCmsTwoColumnSectionFirstColumnContentTextNode?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null /** The child of this node of type datoCmsTwoColumnSectionFirstColumnContentTextNode */;
  childDatoCmsTwoColumnSectionSecondColumnContentTextNode?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null /** The child of this node of type datoCmsTwoColumnSectionSecondColumnContentTextNode */;
  childDatoCmsSeoMetaTags?: DatoCmsSeoMetaTags | null /** The child of this node of type datoCmsSeoMetaTags */;
  originalId?: string | null;
  internal?: Internal_39 | null;
  locale?: string | null;
  model?: DatoCmsModel | null;
  title?: string | null;
  firstColumnContentNode?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null;
  firstColumnContent?: string | null;
  secondColumnContentNode?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null;
  secondColumnContent?: string | null;
  seoMetaTags?: DatoCmsSeoMetaTags | null;
  updatedAt?: Date | null;
  headerImage?: DatoCmsAsset | null;
}
/** Node of type DatoCmsTwoColumnSectionFirstColumnContentTextNode */
export interface DatoCmsTwoColumnSectionFirstColumnContentTextNode
  extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */;
  firstColumnContent?: string | null;
  internal?: Internal_40 | null;
}

export interface Internal_40 {
  type?: string | null;
  mediaType?: string | null;
  content?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** Node of type DatoCmsTwoColumnSectionSecondColumnContentTextNode */
export interface DatoCmsTwoColumnSectionSecondColumnContentTextNode
  extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */;
  secondColumnContent?: string | null;
  internal?: Internal_41 | null;
}

export interface Internal_41 {
  type?: string | null;
  mediaType?: string | null;
  content?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}

export interface Internal_39 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsHomepageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsHomepageGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsHomepageGroupConnectionEdge {
  node?: DatoCmsHomepage | null /** The item at the end of the edge */;
  next?: DatoCmsHomepage | null /** The next edge in the connection */;
  previous?: DatoCmsHomepage | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsFullWidthImageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsFullWidthImageEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsFullWidthImageGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsFullWidthImageEdge {
  node?: DatoCmsFullWidthImage | null /** The item at the end of the edge */;
  next?: DatoCmsFullWidthImage | null /** The next edge in the connection */;
  previous?: DatoCmsFullWidthImage | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsFullWidthImage */
export interface DatoCmsFullWidthImage extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childDatoCmsAsset?: DatoCmsAsset | null /** The child of this node of type datoCmsAsset */;
  childDatoCmsSeoMetaTags?: DatoCmsSeoMetaTags | null /** The child of this node of type datoCmsSeoMetaTags */;
  originalId?: string | null;
  internal?: Internal_42 | null;
  locale?: string | null;
  model?: DatoCmsModel | null;
  image?: DatoCmsAsset | null;
  seoMetaTags?: DatoCmsSeoMetaTags | null;
  updatedAt?: Date | null;
}

export interface Internal_42 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsFullWidthImageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsFullWidthImageGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsFullWidthImageGroupConnectionEdge {
  node?: DatoCmsFullWidthImage | null /** The item at the end of the edge */;
  next?: DatoCmsFullWidthImage | null /** The next edge in the connection */;
  previous?: DatoCmsFullWidthImage | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsOneColumnSectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsOneColumnSectionEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsOneColumnSectionGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsOneColumnSectionEdge {
  node?: DatoCmsOneColumnSection | null /** The item at the end of the edge */;
  next?: DatoCmsOneColumnSection | null /** The next edge in the connection */;
  previous?: DatoCmsOneColumnSection | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsOneColumnSectionGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsOneColumnSectionGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsOneColumnSectionGroupConnectionEdge {
  node?: DatoCmsOneColumnSection | null /** The item at the end of the edge */;
  next?: DatoCmsOneColumnSection | null /** The next edge in the connection */;
  previous?: DatoCmsOneColumnSection | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsSiteConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsSiteEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsSiteGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsSiteEdge {
  node?: DatoCmsSite | null /** The item at the end of the edge */;
  next?: DatoCmsSite | null /** The next edge in the connection */;
  previous?: DatoCmsSite | null /** The previous edge in the connection */;
}
/** Node of type DatoCmsSite */
export interface DatoCmsSite extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  name?: string | null;
  locales?: (string | null)[] | null;
  theme?: Theme_2 | null;
  internalDomain?: string | null;
  noIndex?: boolean | null;
  originalId?: Date | null;
  internal?: Internal_43 | null;
  locale?: string | null;
}

export interface Theme_2 {
  primaryColor?: PrimaryColor_2 | null;
  lightColor?: LightColor_2 | null;
  darkColor?: DarkColor_2 | null;
  accentColor?: AccentColor_2 | null;
}

export interface PrimaryColor_2 {
  red?: number | null;
  blue?: number | null;
  alpha?: number | null;
  green?: number | null;
}

export interface LightColor_2 {
  red?: number | null;
  blue?: number | null;
  alpha?: number | null;
  green?: number | null;
}

export interface DarkColor_2 {
  red?: number | null;
  blue?: number | null;
  alpha?: number | null;
  green?: number | null;
}

export interface AccentColor_2 {
  red?: number | null;
  blue?: number | null;
  alpha?: number | null;
  green?: number | null;
}

export interface Internal_43 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface DatoCmsSiteGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsSiteGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsSiteGroupConnectionEdge {
  node?: DatoCmsSite | null /** The item at the end of the edge */;
  next?: DatoCmsSite | null /** The next edge in the connection */;
  previous?: DatoCmsSite | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsTwoColumnSectionFirstColumnContentTextNodeEdge | null)[]
    | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?:
    | (DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionConnection | null)[]
    | null;
}
/** An edge in a connection. */
export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeEdge {
  node?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null /** The item at the end of the edge */;
  next?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null /** The next edge in the connection */;
  previous?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionEdge {
  node?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null /** The item at the end of the edge */;
  next?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null /** The next edge in the connection */;
  previous?: DatoCmsTwoColumnSectionFirstColumnContentTextNode | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsTwoColumnSectionSecondColumnContentTextNodeEdge | null)[]
    | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?:
    | (DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionConnection | null)[]
    | null;
}
/** An edge in a connection. */
export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeEdge {
  node?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null /** The item at the end of the edge */;
  next?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null /** The next edge in the connection */;
  previous?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionEdge {
  node?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null /** The item at the end of the edge */;
  next?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null /** The next edge in the connection */;
  previous?: DatoCmsTwoColumnSectionSecondColumnContentTextNode | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsTwoColumnSectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsTwoColumnSectionEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsTwoColumnSectionGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsTwoColumnSectionEdge {
  node?: DatoCmsTwoColumnSection | null /** The item at the end of the edge */;
  next?: DatoCmsTwoColumnSection | null /** The next edge in the connection */;
  previous?: DatoCmsTwoColumnSection | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsTwoColumnSectionGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsTwoColumnSectionGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsTwoColumnSectionGroupConnectionEdge {
  node?: DatoCmsTwoColumnSection | null /** The item at the end of the edge */;
  next?: DatoCmsTwoColumnSection | null /** The next edge in the connection */;
  previous?: DatoCmsTwoColumnSection | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsAssetConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DatoCmsAssetEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (DatoCmsAssetGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DatoCmsAssetEdge {
  node?: DatoCmsAsset | null /** The item at the end of the edge */;
  next?: DatoCmsAsset | null /** The next edge in the connection */;
  previous?: DatoCmsAsset | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DatoCmsAssetGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (DatoCmsAssetGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface DatoCmsAssetGroupConnectionEdge {
  node?: DatoCmsAsset | null /** The item at the end of the edge */;
  next?: DatoCmsAsset | null /** The next edge in the connection */;
  previous?: DatoCmsAsset | null /** The previous edge in the connection */;
}
/** Node of type Site */
export interface Site extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  siteMetadata?: SiteMetadata_2 | null;
  port?: Date | null;
  host?: string | null;
  pathPrefix?: string | null;
  polyfill?: boolean | null;
  buildTime?: Date | null;
  internal?: Internal_44 | null;
}

export interface SiteMetadata_2 {
  title?: string | null;
}

export interface Internal_44 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface SitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[];
  order?: SitePageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null;
  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null;
  path?: SitePageConnectionPathQueryString_2 | null;
  component?: SitePageConnectionComponentQueryString | null;
  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null;
  context?: SitePageConnectionContextInputObject | null;
  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null;
  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null;
  componentPath?: SitePageConnectionComponentPathQueryString | null;
  id?: SitePageConnectionIdQueryString_2 | null;
  internal?: SitePageConnectionInternalInputObject_2 | null;
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextInputObject {
  id?: SitePageConnectionContextIdQueryString | null;
  mdid?: SitePageConnectionContextMdidQueryString | null;
}

export interface SitePageConnectionContextIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionContextMdidQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null;
  id?: SitePageConnectionPluginCreatorIdQueryString | null;
  name?: SitePageConnectionPluginCreatorNameQueryString | null;
  version?: SitePageConnectionPluginCreatorVersionQueryString | null;
  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null;
  browserAPIs?: SitePageConnectionPluginCreatorBrowserApIsQueryList | null;
  ssrAPIs?: SitePageConnectionPluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null;
  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null;
  parent?: SitePageConnectionPluginCreatorParentQueryString | null;
  internal?: SitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  endpoint?: SitePageConnectionPluginCreatorPluginOptionsEndpointQueryString | null;
  query?: SitePageConnectionPluginCreatorPluginOptionsQueryQueryString | null;
  apiToken?: SitePageConnectionPluginCreatorPluginOptionsApiTokenQueryString | null;
  name?: SitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
  short_name?: SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString | null;
  start_url?: SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString | null;
  background_color?: SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null;
  theme_color?: SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString | null;
  display?: SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString | null;
  icons?: SitePageConnectionPluginCreatorPluginOptionsIconsQueryList | null;
  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsEndpointQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsQueryQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsApiTokenQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPluginOptionsIconsInputObject | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsInputObject {
  src?: SitePageConnectionPluginCreatorPluginOptionsIconsSrcQueryString | null;
  sizes?: SitePageConnectionPluginCreatorPluginOptionsIconsSizesQueryString | null;
  type?: SitePageConnectionPluginCreatorPluginOptionsIconsTypeQueryString | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsSrcQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsSizesQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
  author?: SitePageConnectionPluginCreatorPackageJsonAuthorQueryString | null;
  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null;
  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null;
  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null;
  description?: SitePageConnectionInternalDescriptionQueryString | null;
  owner?: SitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[];
  order?: SitePluginConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null;
  id?: SitePluginConnectionIdQueryString_2 | null;
  name?: SitePluginConnectionNameQueryString_2 | null;
  version?: SitePluginConnectionVersionQueryString_2 | null;
  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null;
  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null;
  browserAPIs?: SitePluginConnectionBrowserApIsQueryList_2 | null;
  ssrAPIs?: SitePluginConnectionSsrApIsQueryList_2 | null;
  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null;
  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null;
  internal?: SitePluginConnectionInternalInputObject_2 | null;
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  endpoint?: SitePluginConnectionPluginOptionsEndpointQueryString_2 | null;
  query?: SitePluginConnectionPluginOptionsQueryQueryString_2 | null;
  apiToken?: SitePluginConnectionPluginOptionsApiTokenQueryString_2 | null;
  name?: SitePluginConnectionPluginOptionsNameQueryString_2 | null;
  short_name?: SitePluginConnectionPluginOptionsShortNameQueryString_2 | null;
  start_url?: SitePluginConnectionPluginOptionsStartUrlQueryString_2 | null;
  background_color?: SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 | null;
  theme_color?: SitePluginConnectionPluginOptionsThemeColorQueryString_2 | null;
  display?: SitePluginConnectionPluginOptionsDisplayQueryString_2 | null;
  icons?: SitePluginConnectionPluginOptionsIconsQueryList_2 | null;
  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null;
  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginConnectionPluginOptionsEndpointQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsQueryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsApiTokenQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsIconsQueryList_2 {
  elemMatch?: SitePluginConnectionPluginOptionsIconsInputObject_2 | null;
}

export interface SitePluginConnectionPluginOptionsIconsInputObject_2 {
  src?: SitePluginConnectionPluginOptionsIconsSrcQueryString_2 | null;
  sizes?: SitePluginConnectionPluginOptionsIconsSizesQueryString_2 | null;
  type?: SitePluginConnectionPluginOptionsIconsTypeQueryString_2 | null;
}

export interface SitePluginConnectionPluginOptionsIconsSrcQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsIconsSizesQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsIconsTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null;
  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null;
  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null;
  author?: SitePluginConnectionPackageJsonAuthorQueryString_2 | null;
  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null;
  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null;
  type?: SitePluginConnectionInternalTypeQueryString_2 | null;
  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionSort {
  fields: (ArtistConnectionSortByFieldsEnum | null)[];
  order?: ArtistConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterArtist {
  id?: ArtistConnectionIdQueryString_2 | null;
  name?: ArtistConnectionNameQueryString_2 | null;
  slug?: ArtistConnectionSlugQueryString_2 | null;
  picture?: ArtistConnectionPictureInputObject_2 | null;
  records?: ArtistConnectionRecordsQueryList_2 | null;
  internal?: ArtistConnectionInternalInputObject_2 | null;
}

export interface ArtistConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionPictureInputObject_2 {
  id?: ArtistConnectionPictureIdQueryString_2 | null;
  handle?: ArtistConnectionPictureHandleQueryString_2 | null;
  width?: ArtistConnectionPictureWidthQueryInteger_2 | null;
  height?: ArtistConnectionPictureHeightQueryInteger_2 | null;
}

export interface ArtistConnectionPictureIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionPictureHandleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionPictureWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ArtistConnectionPictureHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ArtistConnectionRecordsQueryList_2 {
  elemMatch?: ArtistConnectionRecordsInputObject_2 | null;
}

export interface ArtistConnectionRecordsInputObject_2 {
  id?: ArtistConnectionRecordsIdQueryString_2 | null;
  slug?: ArtistConnectionRecordsSlugQueryString_2 | null;
  title?: ArtistConnectionRecordsTitleQueryString_2 | null;
}

export interface ArtistConnectionRecordsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionRecordsSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionRecordsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionInternalInputObject_2 {
  type?: ArtistConnectionInternalTypeQueryString_2 | null;
  content?: ArtistConnectionInternalContentQueryString_2 | null;
  contentDigest?: ArtistConnectionInternalContentDigestQueryString_2 | null;
  owner?: ArtistConnectionInternalOwnerQueryString_2 | null;
}

export interface ArtistConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionSort {
  fields: (RecordConnectionSortByFieldsEnum | null)[];
  order?: RecordConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterRecord {
  id?: RecordConnectionIdQueryString_2 | null;
  slug?: RecordConnectionSlugQueryString_2 | null;
  tracks?: RecordConnectionTracksQueryList_2 | null;
  cover?: RecordConnectionCoverInputObject_2 | null;
  artist?: RecordConnectionArtistInputObject_2 | null;
  reviews?: RecordConnectionReviewsQueryList_2 | null;
  createdAt?: RecordConnectionCreatedAtQueryString_2 | null;
  title?: RecordConnectionTitleQueryString_2 | null;
  internal?: RecordConnectionInternalInputObject_2 | null;
}

export interface RecordConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionTracksQueryList_2 {
  elemMatch?: RecordConnectionTracksInputObject_2 | null;
}

export interface RecordConnectionTracksInputObject_2 {
  id?: RecordConnectionTracksIdQueryString_2 | null;
  title?: RecordConnectionTracksTitleQueryString_2 | null;
  aliasedLength?: RecordConnectionTracksAliasedLengthQueryInteger_2 | null;
}

export interface RecordConnectionTracksIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionTracksTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionTracksAliasedLengthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface RecordConnectionCoverInputObject_2 {
  handle?: RecordConnectionCoverHandleQueryString_2 | null;
}

export interface RecordConnectionCoverHandleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionArtistInputObject_2 {
  id?: RecordConnectionArtistIdQueryString_2 | null;
  slug?: RecordConnectionArtistSlugQueryString_2 | null;
  name?: RecordConnectionArtistNameQueryString_2 | null;
}

export interface RecordConnectionArtistIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionArtistSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionArtistNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionReviewsQueryList_2 {
  elemMatch?: RecordConnectionReviewsInputObject_2 | null;
}

export interface RecordConnectionReviewsInputObject_2 {
  id?: RecordConnectionReviewsIdQueryString_2 | null;
  slug?: RecordConnectionReviewsSlugQueryString_2 | null;
  title?: RecordConnectionReviewsTitleQueryString_2 | null;
}

export interface RecordConnectionReviewsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionReviewsSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionReviewsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionCreatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionInternalInputObject_2 {
  type?: RecordConnectionInternalTypeQueryString_2 | null;
  content?: RecordConnectionInternalContentQueryString_2 | null;
  contentDigest?: RecordConnectionInternalContentDigestQueryString_2 | null;
  owner?: RecordConnectionInternalOwnerQueryString_2 | null;
}

export interface RecordConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionSort {
  fields: (ReviewConnectionSortByFieldsEnum | null)[];
  order?: ReviewConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterReview {
  id?: ReviewConnectionIdQueryString_2 | null;
  review?: ReviewConnectionReviewQueryString_2 | null;
  slug?: ReviewConnectionSlugQueryString_2 | null;
  rating?: ReviewConnectionRatingQueryInteger_2 | null;
  createdAt?: ReviewConnectionCreatedAtQueryString_2 | null;
  title?: ReviewConnectionTitleQueryString_2 | null;
  record?: ReviewConnectionRecordInputObject_2 | null;
  comments?: ReviewConnectionCommentsQueryList_2 | null;
  internal?: ReviewConnectionInternalInputObject_2 | null;
}

export interface ReviewConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionReviewQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionRatingQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ReviewConnectionCreatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionRecordInputObject_2 {
  slug?: ReviewConnectionRecordSlugQueryString_2 | null;
  title?: ReviewConnectionRecordTitleQueryString_2 | null;
  artist?: ReviewConnectionRecordArtistInputObject_2 | null;
}

export interface ReviewConnectionRecordSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionRecordTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionRecordArtistInputObject_2 {
  slug?: ReviewConnectionRecordArtistSlugQueryString_2 | null;
  name?: ReviewConnectionRecordArtistNameQueryString_2 | null;
}

export interface ReviewConnectionRecordArtistSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionRecordArtistNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionCommentsQueryList_2 {
  elemMatch?: ReviewConnectionCommentsInputObject_2 | null;
}

export interface ReviewConnectionCommentsInputObject_2 {
  body?: ReviewConnectionCommentsBodyQueryString_2 | null;
}

export interface ReviewConnectionCommentsBodyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionInternalInputObject_2 {
  type?: ReviewConnectionInternalTypeQueryString_2 | null;
  content?: ReviewConnectionInternalContentQueryString_2 | null;
  contentDigest?: ReviewConnectionInternalContentDigestQueryString_2 | null;
  owner?: ReviewConnectionInternalOwnerQueryString_2 | null;
}

export interface ReviewConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownConnectionSort {
  fields: (ReviewMarkdownConnectionSortByFieldsEnum | null)[];
  order?: ReviewMarkdownConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterReviewMarkdown {
  id?: ReviewMarkdownConnectionIdQueryString_2 | null;
  internal?: ReviewMarkdownConnectionInternalInputObject_2 | null;
}

export interface ReviewMarkdownConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownConnectionInternalInputObject_2 {
  type?: ReviewMarkdownConnectionInternalTypeQueryString_2 | null;
  mediaType?: ReviewMarkdownConnectionInternalMediaTypeQueryString_2 | null;
  content?: ReviewMarkdownConnectionInternalContentQueryString_2 | null;
  contentDigest?: ReviewMarkdownConnectionInternalContentDigestQueryString_2 | null;
  owner?: ReviewMarkdownConnectionInternalOwnerQueryString_2 | null;
}

export interface ReviewMarkdownConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionSort {
  fields: (MarkdownRemarkConnectionSortByFieldsEnum | null)[];
  order?: MarkdownRemarkConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: MarkdownRemarkConnectionIdQueryString_2 | null;
  internal?: MarkdownRemarkConnectionInternalInputObject_2 | null;
  frontmatter?: MarkdownRemarkConnectionFrontmatterInputObject_2 | null;
  excerpt?: ExcerptQueryString_4 | null;
  rawMarkdownBody?: MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 | null;
  html?: HtmlQueryString_4 | null;
  headings?: HeadingsQueryList_4 | null;
  timeToRead?: TimeToReadQueryInt_4 | null;
  tableOfContents?: TableOfContentsQueryString_4 | null;
  wordCount?: WordCountTypeName_4 | null;
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: MarkdownRemarkConnectionInternalContentQueryString_2 | null;
  type?: MarkdownRemarkConnectionInternalTypeQueryString_2 | null;
  contentDigest?: MarkdownRemarkConnectionInternalContentDigestQueryString_2 | null;
  owner?: MarkdownRemarkConnectionInternalOwnerQueryString_2 | null;
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: MarkdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
  _PARENT?: MarkdownRemarkConnectionFrontmatterParentQueryString_2 | null;
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ExcerptQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface HtmlQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface HeadingsQueryList_4 {
  elemMatch?: HeadingsListElemTypeName_4 | null;
}

export interface HeadingsListElemTypeName_4 {
  value?: HeadingsListElemValueQueryString_4 | null;
  depth?: HeadingsListElemDepthQueryInt_4 | null;
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface TimeToReadQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface TableOfContentsQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface WordCountTypeName_4 {
  paragraphs?: WordCountParagraphsQueryInt_4 | null;
  sentences?: WordCountSentencesQueryInt_4 | null;
  words?: WordCountWordsQueryInt_4 | null;
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface WordCountSentencesQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface WordCountWordsQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFieldConnectionSort {
  fields: (DatoCmsFieldConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsFieldConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsField {
  id?: DatoCmsFieldConnectionIdQueryString_2 | null;
  originalId?: DatoCmsFieldConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsFieldConnectionInternalInputObject_2 | null;
  label?: DatoCmsFieldConnectionLabelQueryString_2 | null;
  fieldType?: DatoCmsFieldConnectionFieldTypeQueryString_2 | null;
  apiKey?: DatoCmsFieldConnectionApiKeyQueryString_2 | null;
  hint?: DatoCmsFieldConnectionHintQueryString_2 | null;
  localized?: DatoCmsFieldConnectionLocalizedQueryBoolean_2 | null;
  validators?: DatoCmsFieldConnectionValidatorsInputObject_2 | null;
  position?: DatoCmsFieldConnectionPositionQueryInteger_2 | null;
  appeareance?: DatoCmsFieldConnectionAppeareanceInputObject_2 | null;
}

export interface DatoCmsFieldConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionInternalInputObject_2 {
  type?: DatoCmsFieldConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFieldConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFieldConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFieldConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionLabelQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionFieldTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionHintQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionLocalizedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFieldConnectionValidatorsInputObject_2 {
  itemItemType?: DatoCmsFieldConnectionValidatorsItemItemTypeInputObject_2 | null;
  numberRange?: DatoCmsFieldConnectionValidatorsNumberRangeInputObject_2 | null;
  richTextBlocks?: DatoCmsFieldConnectionValidatorsRichTextBlocksInputObject_2 | null;
  extension?: DatoCmsFieldConnectionValidatorsExtensionInputObject_2 | null;
}

export interface DatoCmsFieldConnectionValidatorsItemItemTypeInputObject_2 {
  itemTypes?: DatoCmsFieldConnectionValidatorsItemItemTypeItemTypesQueryList_2 | null;
}

export interface DatoCmsFieldConnectionValidatorsItemItemTypeItemTypesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionValidatorsNumberRangeInputObject_2 {
  min?: DatoCmsFieldConnectionValidatorsNumberRangeMinQueryString_2 | null;
}

export interface DatoCmsFieldConnectionValidatorsNumberRangeMinQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionValidatorsRichTextBlocksInputObject_2 {
  itemTypes?: DatoCmsFieldConnectionValidatorsRichTextBlocksItemTypesQueryList_2 | null;
}

export interface DatoCmsFieldConnectionValidatorsRichTextBlocksItemTypesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionValidatorsExtensionInputObject_2 {
  predefinedList?: DatoCmsFieldConnectionValidatorsExtensionPredefinedListQueryString_2 | null;
}

export interface DatoCmsFieldConnectionValidatorsExtensionPredefinedListQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionPositionQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFieldConnectionAppeareanceInputObject_2 {
  editor?: DatoCmsFieldConnectionAppeareanceEditorQueryString_2 | null;
  parameters?: DatoCmsFieldConnectionAppeareanceParametersInputObject_2 | null;
  addons?: DatoCmsFieldConnectionAppeareanceAddonsQueryList_2 | null;
  type?: DatoCmsFieldConnectionAppeareanceTypeQueryString_2 | null;
}

export interface DatoCmsFieldConnectionAppeareanceEditorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionAppeareanceParametersInputObject_2 {
  heading?: DatoCmsFieldConnectionAppeareanceParametersHeadingQueryBoolean_2 | null;
  startCollapsed?: DatoCmsFieldConnectionAppeareanceParametersStartCollapsedQueryBoolean_2 | null;
  toolbar?: DatoCmsFieldConnectionAppeareanceParametersToolbarQueryList_2 | null;
}

export interface DatoCmsFieldConnectionAppeareanceParametersHeadingQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFieldConnectionAppeareanceParametersStartCollapsedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFieldConnectionAppeareanceParametersToolbarQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionAppeareanceAddonsQueryList_2 {
  elemMatch?: DatoCmsFieldConnectionAppeareanceAddonsInputObject_2 | null;
}

export interface DatoCmsFieldConnectionAppeareanceAddonsInputObject_2 {
  id?: DatoCmsFieldConnectionAppeareanceAddonsIdQueryString_2 | null;
  parameters?: DatoCmsFieldConnectionAppeareanceAddonsParametersInputObject_2 | null;
}

export interface DatoCmsFieldConnectionAppeareanceAddonsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionAppeareanceAddonsParametersInputObject_2 {
  slaveFields?: DatoCmsFieldConnectionAppeareanceAddonsParametersSlaveFieldsQueryString_2 | null;
}

export interface DatoCmsFieldConnectionAppeareanceAddonsParametersSlaveFieldsQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldConnectionAppeareanceTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionSort {
  fields: (DatoCmsModelConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsModelConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsModel {
  id?: DatoCmsModelConnectionIdQueryString_2 | null;
  originalId?: DatoCmsModelConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsModelConnectionInternalInputObject_2 | null;
  name?: DatoCmsModelConnectionNameQueryString_2 | null;
  singleton?: DatoCmsModelConnectionSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsModelConnectionSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsModelConnectionApiKeyQueryString_2 | null;
  tree?: DatoCmsModelConnectionTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsModelConnectionModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsModelConnectionDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsModelConnectionAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsModelConnectionCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsModelConnectionHasSingletonItemQueryBoolean_2 | null;
  fields?: DatoCmsModelConnectionFieldsQueryList_2 | null;
}

export interface DatoCmsModelConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionInternalInputObject_2 {
  type?: DatoCmsModelConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsModelConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsModelConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsModelConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsQueryList_2 {
  elemMatch?: DatoCmsModelConnectionFieldsInputObject_2 | null;
}

export interface DatoCmsModelConnectionFieldsInputObject_2 {
  id?: DatoCmsModelConnectionFieldsIdQueryString_2 | null;
  originalId?: DatoCmsModelConnectionFieldsOriginalIdQueryString_2 | null;
  internal?: DatoCmsModelConnectionFieldsInternalInputObject_2 | null;
  label?: DatoCmsModelConnectionFieldsLabelQueryString_2 | null;
  fieldType?: DatoCmsModelConnectionFieldsFieldTypeQueryString_2 | null;
  apiKey?: DatoCmsModelConnectionFieldsApiKeyQueryString_2 | null;
  hint?: DatoCmsModelConnectionFieldsHintQueryString_2 | null;
  localized?: DatoCmsModelConnectionFieldsLocalizedQueryBoolean_2 | null;
  validators?: DatoCmsModelConnectionFieldsValidatorsInputObject_2 | null;
  position?: DatoCmsModelConnectionFieldsPositionQueryInteger_2 | null;
  appeareance?: DatoCmsModelConnectionFieldsAppeareanceInputObject_2 | null;
}

export interface DatoCmsModelConnectionFieldsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsInternalInputObject_2 {
  type?: DatoCmsModelConnectionFieldsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsModelConnectionFieldsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsModelConnectionFieldsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsModelConnectionFieldsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsLabelQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsFieldTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsHintQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsLocalizedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsInputObject_2 {
  itemItemType?: DatoCmsModelConnectionFieldsValidatorsItemItemTypeInputObject_2 | null;
  numberRange?: DatoCmsModelConnectionFieldsValidatorsNumberRangeInputObject_2 | null;
  richTextBlocks?: DatoCmsModelConnectionFieldsValidatorsRichTextBlocksInputObject_2 | null;
  extension?: DatoCmsModelConnectionFieldsValidatorsExtensionInputObject_2 | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsItemItemTypeInputObject_2 {
  itemTypes?: DatoCmsModelConnectionFieldsValidatorsItemItemTypeItemTypesQueryList_2 | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsItemItemTypeItemTypesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsNumberRangeInputObject_2 {
  min?: DatoCmsModelConnectionFieldsValidatorsNumberRangeMinQueryString_2 | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsNumberRangeMinQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsRichTextBlocksInputObject_2 {
  itemTypes?: DatoCmsModelConnectionFieldsValidatorsRichTextBlocksItemTypesQueryList_2 | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsRichTextBlocksItemTypesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsExtensionInputObject_2 {
  predefinedList?: DatoCmsModelConnectionFieldsValidatorsExtensionPredefinedListQueryString_2 | null;
}

export interface DatoCmsModelConnectionFieldsValidatorsExtensionPredefinedListQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsPositionQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceInputObject_2 {
  editor?: DatoCmsModelConnectionFieldsAppeareanceEditorQueryString_2 | null;
  parameters?: DatoCmsModelConnectionFieldsAppeareanceParametersInputObject_2 | null;
  addons?: DatoCmsModelConnectionFieldsAppeareanceAddonsQueryList_2 | null;
  type?: DatoCmsModelConnectionFieldsAppeareanceTypeQueryString_2 | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceEditorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceParametersInputObject_2 {
  heading?: DatoCmsModelConnectionFieldsAppeareanceParametersHeadingQueryBoolean_2 | null;
  startCollapsed?: DatoCmsModelConnectionFieldsAppeareanceParametersStartCollapsedQueryBoolean_2 | null;
  toolbar?: DatoCmsModelConnectionFieldsAppeareanceParametersToolbarQueryList_2 | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceParametersHeadingQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceParametersStartCollapsedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceParametersToolbarQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceAddonsQueryList_2 {
  elemMatch?: DatoCmsModelConnectionFieldsAppeareanceAddonsInputObject_2 | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceAddonsInputObject_2 {
  id?: DatoCmsModelConnectionFieldsAppeareanceAddonsIdQueryString_2 | null;
  parameters?: DatoCmsModelConnectionFieldsAppeareanceAddonsParametersInputObject_2 | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceAddonsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceAddonsParametersInputObject_2 {
  slaveFields?: DatoCmsModelConnectionFieldsAppeareanceAddonsParametersSlaveFieldsQueryString_2 | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceAddonsParametersSlaveFieldsQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelConnectionFieldsAppeareanceTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionSort {
  fields: (DatoCmsSeoMetaTagsConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsSeoMetaTagsConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsSeoMetaTags {
  id?: DatoCmsSeoMetaTagsConnectionIdQueryString_2 | null;
  tags?: DatoCmsSeoMetaTagsConnectionTagsQueryList_2 | null;
  internal?: DatoCmsSeoMetaTagsConnectionInternalInputObject_2 | null;
}

export interface DatoCmsSeoMetaTagsConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionTagsQueryList_2 {
  elemMatch?: DatoCmsSeoMetaTagsConnectionTagsInputObject_2 | null;
}

export interface DatoCmsSeoMetaTagsConnectionTagsInputObject_2 {
  tagName?: DatoCmsSeoMetaTagsConnectionTagsTagNameQueryString_2 | null;
  content?: DatoCmsSeoMetaTagsConnectionTagsContentQueryString_2 | null;
  attributes?: DatoCmsSeoMetaTagsConnectionTagsAttributesInputObject_2 | null;
}

export interface DatoCmsSeoMetaTagsConnectionTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionTagsAttributesInputObject_2 {
  property?: DatoCmsSeoMetaTagsConnectionTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsSeoMetaTagsConnectionTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsSeoMetaTagsConnectionTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsSeoMetaTagsConnectionTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionInternalInputObject_2 {
  type?: DatoCmsSeoMetaTagsConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsSeoMetaTagsConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsSeoMetaTagsConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsSeoMetaTagsConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionSort {
  fields: (DatoCmsOneColumnSectionContentTextNodeConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsOneColumnSectionContentTextNodeConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsOneColumnSectionContentTextNode {
  id?: DatoCmsOneColumnSectionContentTextNodeConnectionIdQueryString_2 | null;
  content?: DatoCmsOneColumnSectionContentTextNodeConnectionContentQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionContentTextNodeConnectionInternalInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionContentTextNodeConnectionInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsOneColumnSectionContentTextNodeConnectionInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsOneColumnSectionContentTextNodeConnectionInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionContentTextNodeConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionContentTextNodeConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSort {
  fields: (DatoCmsPriceConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsPriceConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsPrice {
  id?: DatoCmsPriceConnectionIdQueryString_2 | null;
  originalId?: DatoCmsPriceConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsPriceConnectionInternalInputObject_2 | null;
  locale?: DatoCmsPriceConnectionLocaleQueryString_2 | null;
  model?: DatoCmsPriceConnectionModelInputObject_2 | null;
  title?: DatoCmsPriceConnectionTitleQueryString_2 | null;
  base?: DatoCmsPriceConnectionBaseQueryInteger_2 | null;
  isPriceDiscounted?: DatoCmsPriceConnectionIsPriceDiscountedQueryBoolean_2 | null;
  discount?: DatoCmsPriceConnectionDiscountQueryInteger_2 | null;
  discounted?: DatoCmsPriceConnectionDiscountedQueryInteger_2 | null;
  seoMetaTags?: DatoCmsPriceConnectionSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsPriceConnectionUpdatedAtQueryString_2 | null;
}

export interface DatoCmsPriceConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionInternalInputObject_2 {
  type?: DatoCmsPriceConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsPriceConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsPriceConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsPriceConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelInputObject_2 {
  id?: DatoCmsPriceConnectionModelIdQueryString_2 | null;
  originalId?: DatoCmsPriceConnectionModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsPriceConnectionModelInternalInputObject_2 | null;
  name?: DatoCmsPriceConnectionModelNameQueryString_2 | null;
  singleton?: DatoCmsPriceConnectionModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsPriceConnectionModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsPriceConnectionModelApiKeyQueryString_2 | null;
  tree?: DatoCmsPriceConnectionModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsPriceConnectionModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsPriceConnectionModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsPriceConnectionModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsPriceConnectionModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsPriceConnectionModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsPriceConnectionModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelInternalInputObject_2 {
  type?: DatoCmsPriceConnectionModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsPriceConnectionModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsPriceConnectionModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsPriceConnectionModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceConnectionModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceConnectionModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceConnectionModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceConnectionModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceConnectionModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceConnectionModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionBaseQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsPriceConnectionIsPriceDiscountedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceConnectionDiscountQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsPriceConnectionDiscountedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsInputObject_2 {
  id?: DatoCmsPriceConnectionSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsPriceConnectionSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsPriceConnectionSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsPriceConnectionSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsPriceConnectionSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsPriceConnectionSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsPriceConnectionSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsPriceConnectionSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsPriceConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsPriceConnectionSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsPriceConnectionSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsPriceConnectionSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsPriceConnectionSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsPriceConnectionSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceConnectionUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSort {
  fields: (DatoCmsWeekConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsWeekConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsWeek {
  id?: DatoCmsWeekConnectionIdQueryString_2 | null;
  originalId?: DatoCmsWeekConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsWeekConnectionInternalInputObject_2 | null;
  locale?: DatoCmsWeekConnectionLocaleQueryString_2 | null;
  model?: DatoCmsWeekConnectionModelInputObject_2 | null;
  title?: DatoCmsWeekConnectionTitleQueryString_2 | null;
  startDate?: DatoCmsWeekConnectionStartDateQueryString_2 | null;
  endDate?: DatoCmsWeekConnectionEndDateQueryString_2 | null;
  price?: DatoCmsWeekConnectionPriceInputObject_2 | null;
  seoMetaTags?: DatoCmsWeekConnectionSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsWeekConnectionUpdatedAtQueryString_2 | null;
}

export interface DatoCmsWeekConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionInternalInputObject_2 {
  type?: DatoCmsWeekConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsWeekConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsWeekConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsWeekConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelInputObject_2 {
  id?: DatoCmsWeekConnectionModelIdQueryString_2 | null;
  originalId?: DatoCmsWeekConnectionModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsWeekConnectionModelInternalInputObject_2 | null;
  name?: DatoCmsWeekConnectionModelNameQueryString_2 | null;
  singleton?: DatoCmsWeekConnectionModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsWeekConnectionModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsWeekConnectionModelApiKeyQueryString_2 | null;
  tree?: DatoCmsWeekConnectionModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsWeekConnectionModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsWeekConnectionModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsWeekConnectionModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsWeekConnectionModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsWeekConnectionModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsWeekConnectionModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelInternalInputObject_2 {
  type?: DatoCmsWeekConnectionModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsWeekConnectionModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsWeekConnectionModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsWeekConnectionModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekConnectionModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekConnectionModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekConnectionModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekConnectionModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekConnectionModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekConnectionModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionStartDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionEndDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceInputObject_2 {
  id?: DatoCmsWeekConnectionPriceIdQueryString_2 | null;
  originalId?: DatoCmsWeekConnectionPriceOriginalIdQueryString_2 | null;
  children?: DatoCmsWeekConnectionPriceChildrenQueryList_2 | null;
  internal?: DatoCmsWeekConnectionPriceInternalInputObject_2 | null;
  locale?: DatoCmsWeekConnectionPriceLocaleQueryString_2 | null;
  title?: DatoCmsWeekConnectionPriceTitleQueryString_2 | null;
  base?: DatoCmsWeekConnectionPriceBaseQueryInteger_2 | null;
  isPriceDiscounted?: DatoCmsWeekConnectionPriceIsPriceDiscountedQueryBoolean_2 | null;
  discount?: DatoCmsWeekConnectionPriceDiscountQueryInteger_2 | null;
  discounted?: DatoCmsWeekConnectionPriceDiscountedQueryInteger_2 | null;
  updatedAt?: DatoCmsWeekConnectionPriceUpdatedAtQueryString_2 | null;
}

export interface DatoCmsWeekConnectionPriceIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceInternalInputObject_2 {
  type?: DatoCmsWeekConnectionPriceInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsWeekConnectionPriceInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsWeekConnectionPriceInternalOwnerQueryString_2 | null;
}

export interface DatoCmsWeekConnectionPriceInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceBaseQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceIsPriceDiscountedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceDiscountQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceDiscountedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsWeekConnectionPriceUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsInputObject_2 {
  id?: DatoCmsWeekConnectionSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsWeekConnectionSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsWeekConnectionSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsWeekConnectionSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsWeekConnectionSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsWeekConnectionSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsWeekConnectionSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsWeekConnectionSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsWeekConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsWeekConnectionSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsWeekConnectionSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsWeekConnectionSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsWeekConnectionSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsWeekConnectionSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekConnectionUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSort {
  fields: (DatoCmsHomepageConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsHomepageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsHomepage {
  id?: DatoCmsHomepageConnectionIdQueryString_2 | null;
  originalId?: DatoCmsHomepageConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsHomepageConnectionInternalInputObject_2 | null;
  locale?: DatoCmsHomepageConnectionLocaleQueryString_2 | null;
  model?: DatoCmsHomepageConnectionModelInputObject_2 | null;
  title?: DatoCmsHomepageConnectionTitleQueryString_2 | null;
  headerImage?: DatoCmsHomepageConnectionHeaderImageInputObject_2 | null;
  content?: DatoCmsHomepageConnectionContentQueryList_2 | null;
  seoMetaTags?: DatoCmsHomepageConnectionSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsHomepageConnectionUpdatedAtQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionInternalInputObject_2 {
  type?: DatoCmsHomepageConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelInputObject_2 {
  id?: DatoCmsHomepageConnectionModelIdQueryString_2 | null;
  originalId?: DatoCmsHomepageConnectionModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsHomepageConnectionModelInternalInputObject_2 | null;
  name?: DatoCmsHomepageConnectionModelNameQueryString_2 | null;
  singleton?: DatoCmsHomepageConnectionModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsHomepageConnectionModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsHomepageConnectionModelApiKeyQueryString_2 | null;
  tree?: DatoCmsHomepageConnectionModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsHomepageConnectionModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsHomepageConnectionModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsHomepageConnectionModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsHomepageConnectionModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsHomepageConnectionModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsHomepageConnectionModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelInternalInputObject_2 {
  type?: DatoCmsHomepageConnectionModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageConnectionModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageConnectionModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageInputObject_2 {
  id?: DatoCmsHomepageConnectionHeaderImageIdQueryString_2 | null;
  parent?: DatoCmsHomepageConnectionHeaderImageParentQueryString_2 | null;
  internal?: DatoCmsHomepageConnectionHeaderImageInternalInputObject_2 | null;
  format?: DatoCmsHomepageConnectionHeaderImageFormatQueryString_2 | null;
  size?: DatoCmsHomepageConnectionHeaderImageSizeQueryInteger_2 | null;
  width?: DatoCmsHomepageConnectionHeaderImageWidthQueryInteger_2 | null;
  height?: DatoCmsHomepageConnectionHeaderImageHeightQueryInteger_2 | null;
  url?: DatoCmsHomepageConnectionHeaderImageUrlQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionHeaderImageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageInternalInputObject_2 {
  type?: DatoCmsHomepageConnectionHeaderImageInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageConnectionHeaderImageInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageConnectionHeaderImageInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionHeaderImageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageFormatQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsHomepageConnectionHeaderImageUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentQueryList_2 {
  elemMatch?: DatoCmsHomepageConnectionContentInputObject_2 | null;
}

export interface DatoCmsHomepageConnectionContentInputObject_2 {
  id?: DatoCmsHomepageConnectionContentIdQueryString_2 | null;
  originalId?: DatoCmsHomepageConnectionContentOriginalIdQueryString_2 | null;
  children?: DatoCmsHomepageConnectionContentChildrenQueryList_2 | null;
  internal?: DatoCmsHomepageConnectionContentInternalInputObject_2 | null;
  locale?: DatoCmsHomepageConnectionContentLocaleQueryString_2 | null;
  title?: DatoCmsHomepageConnectionContentTitleQueryString_2 | null;
  content?: DatoCmsHomepageConnectionContentContentQueryString_2 | null;
  updatedAt?: DatoCmsHomepageConnectionContentUpdatedAtQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionContentIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentInternalInputObject_2 {
  type?: DatoCmsHomepageConnectionContentInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageConnectionContentInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageConnectionContentInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionContentInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionContentUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsInputObject_2 {
  id?: DatoCmsHomepageConnectionSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsHomepageConnectionSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsHomepageConnectionSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsHomepageConnectionSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsHomepageConnectionSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsHomepageConnectionSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsHomepageConnectionSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsHomepageConnectionSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsHomepageConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsHomepageConnectionSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsHomepageConnectionSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsHomepageConnectionSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageConnectionSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageConnectionSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageConnectionUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsImgixParams {
  auto?:
    | string
    | null /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */;
  ba?:
    | string
    | null /** Changes the blend alignment relative to the parent image. (https://docs.imgix.com/apis/url/blending/ba) */;
  balph?:
    | number
    | null /** Changes the alpha of the blend image. (https://docs.imgix.com/apis/url/blending/balph) */;
  bc?:
    | string
    | null /** Specifies the type of crop for blend images. (https://docs.imgix.com/apis/url/blending/bc) */;
  bf?:
    | string
    | null /** Specifies the fit mode for blend images. (https://docs.imgix.com/apis/url/blending/bf) */;
  bg?:
    | string
    | null /** Colors the background of padded images. (https://docs.imgix.com/apis/url/bg) */;
  bh?:
    | string
    | null /** Adjusts the height of the blend image. (https://docs.imgix.com/apis/url/blending/bh) */;
  blend?:
    | string
    | null /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */;
  blur?:
    | number
    | null /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */;
  bm?:
    | string
    | null /** Sets the blend mode for a blend image. (https://docs.imgix.com/apis/url/blending/bm) */;
  borderRadiusInner?:
    | string
    | null /** Sets the inner radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner) */;
  borderRadius?:
    | string
    | null /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */;
  border?:
    | string
    | null /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */;
  bp?:
    | number
    | null /** Applies padding to the blend image. (https://docs.imgix.com/apis/url/blending/bp) */;
  bri?:
    | number
    | null /** Adjusts the brightness of the source image. (https://docs.imgix.com/apis/url/adjustment/bri) */;
  bs?:
    | string
    | null /** Adjusts the size of the blend image. (https://docs.imgix.com/apis/url/blending/bs) */;
  bw?:
    | string
    | null /** Adjusts the width of the blend image. (https://docs.imgix.com/apis/url/blending/bw) */;
  bx?:
    | number
    | null /** Adjusts the x-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/bx) */;
  by?:
    | number
    | null /** Adjusts the y-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/by) */;
  ch?:
    | string
    | null /** Sets one or more Client-Hints headers (https://docs.imgix.com/apis/url/format/ch) */;
  chromasub?:
    | number
    | null /** Specifies the output chroma subsampling rate. (https://docs.imgix.com/apis/url/format/chromasub) */;
  colorquant?:
    | number
    | null /** Limits the number of unique colors in an image. (https://docs.imgix.com/apis/url/format/colorquant) */;
  colors?:
    | number
    | null /** Specifies how many colors to include in a palette-extraction response. (https://docs.imgix.com/apis/url/color-palette/colors) */;
  con?:
    | number
    | null /** Adjusts the contrast of the source image. (https://docs.imgix.com/apis/url/adjustment/con) */;
  cornerRadius?:
    | string
    | null /** Specifies the radius value for a rounded corner mask. (https://docs.imgix.com/apis/url/mask/corner-radius) */;
  crop?:
    | string
    | null /** Specifies how to crop an image. (https://docs.imgix.com/apis/url/size/crop) */;
  cs?:
    | string
    | null /** Specifies the color space of the output image. (https://docs.imgix.com/apis/url/format/cs) */;
  dl?:
    | string
    | null /** Forces a URL to use send-file in its response. (https://docs.imgix.com/apis/url/format/dl) */;
  dpi?:
    | number
    | null /** Sets the DPI value in the EXIF header. (https://docs.imgix.com/apis/url/format/dpi) */;
  dpr?:
    | number
    | null /** Adjusts the device-pixel ratio of the output image. (https://docs.imgix.com/apis/url/dpr) */;
  exp?:
    | number
    | null /** Adjusts the exposure of the output image. (https://docs.imgix.com/apis/url/adjustment/exp) */;
  expires?:
    | string
    | null /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. (https://docs.imgix.com/apis/url/expires) */;
  faceindex?:
    | number
    | null /** Selects a face to crop to. (https://docs.imgix.com/apis/url/face-detection/faceindex) */;
  facepad?:
    | number
    | null /** Adjusts padding around a selected face. (https://docs.imgix.com/apis/url/face-detection/facepad) */;
  faces?:
    | number
    | null /** Specifies that face data should be included in output when combined with `fm=json`. (https://docs.imgix.com/apis/url/face-detection/faces) */;
  fit?:
    | string
    | null /** Specifies how to map the source image to the output image dimensions. (https://docs.imgix.com/apis/url/size/fit) */;
  flip?:
    | string
    | null /** Flips an image on a specified axis. (https://docs.imgix.com/apis/url/rotation/flip) */;
  fm?:
    | string
    | null /** Changes the format of the output image. (https://docs.imgix.com/apis/url/format/fm) */;
  fpDebug?:
    | boolean
    | null /** Displays crosshairs identifying the location of the set focal point (https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug) */;
  fpX?:
    | number
    | null /** Sets the relative horizontal value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-x) */;
  fpY?:
    | number
    | null /** Sets the relative vertical value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-y) */;
  fpZ?:
    | number
    | null /** Sets the relative zoom value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-z) */;
  gam?:
    | number
    | null /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */;
  h?:
    | string
    | null /** Adjusts the height of the output image. (https://docs.imgix.com/apis/url/size/h) */;
  high?:
    | number
    | null /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/high) */;
  htn?:
    | number
    | null /** Applies a half-tone effect to the source image. (https://docs.imgix.com/apis/url/stylize/htn) */;
  hue?:
    | number
    | null /** Adjusts the hue of the source image. (https://docs.imgix.com/apis/url/adjustment/hue) */;
  invert?:
    | boolean
    | null /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */;
  lossless?:
    | boolean
    | null /** Specifies that the output image should be a lossless variant. (https://docs.imgix.com/apis/url/format/lossless) */;
  mark?:
    | string
    | null /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */;
  markalign?:
    | string
    | null /** Changes the watermark alignment relative to the parent image. (https://docs.imgix.com/apis/url/watermark/markalign) */;
  markalpha?:
    | number
    | null /** Changes the alpha of the watermark image. (https://docs.imgix.com/apis/url/watermark/markalpha) */;
  markbase?:
    | string
    | null /** Changes base URL of the watermark image. (https://docs.imgix.com/apis/url/watermark/markbase) */;
  markfit?:
    | string
    | null /** Specifies the fit mode for watermark images. (https://docs.imgix.com/apis/url/watermark/markfit) */;
  markh?:
    | string
    | null /** Adjusts the height of the watermark image. (https://docs.imgix.com/apis/url/watermark/markh) */;
  markpad?:
    | number
    | null /** Applies padding to the watermark image. (https://docs.imgix.com/apis/url/watermark/markpad) */;
  markscale?:
    | number
    | null /** Adjusts the scale of the watermark image. (https://docs.imgix.com/apis/url/watermark/markscale) */;
  markw?:
    | string
    | null /** Adjusts the width of the watermark image. (https://docs.imgix.com/apis/url/watermark/markw) */;
  markx?:
    | number
    | null /** Adjusts the x-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/markx) */;
  marky?:
    | number
    | null /** Adjusts the y-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/marky) */;
  mask?:
    | string
    | null /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */;
  maskbg?:
    | string
    | null /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */;
  maxH?:
    | number
    | null /** Specifies the maximum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-h) */;
  maxW?:
    | number
    | null /** Specifies the maximum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-w) */;
  minH?:
    | number
    | null /** Specifies the minimum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-h) */;
  minW?:
    | number
    | null /** Specifies the minimum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-w) */;
  mono?:
    | string
    | null /** Applies a monochrome effect to the source image. (https://docs.imgix.com/apis/url/stylize/mono) */;
  nr?:
    | number
    | null /** Reduces the noise in an image. (https://docs.imgix.com/apis/url/noise-reduction/nr) */;
  nrs?:
    | number
    | null /** Provides a threshold by which to sharpen an image. (https://docs.imgix.com/apis/url/noise-reduction/nrs) */;
  or?:
    | number
    | null /** Changes the image orientation. (https://docs.imgix.com/apis/url/rotation/or) */;
  pad?:
    | number
    | null /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */;
  page?:
    | number
    | null /** Selects a page from a PDF for display. (https://docs.imgix.com/apis/url/pdf-page-number) */;
  palette?:
    | string
    | null /** Specifies an output format for palette-extraction. (https://docs.imgix.com/apis/url/color-palette/palette) */;
  prefix?:
    | string
    | null /** Specifies a CSS prefix for all classes in palette-extraction. (https://docs.imgix.com/apis/url/color-palette/prefix) */;
  px?:
    | number
    | null /** Applies a pixelation effect to an image. (https://docs.imgix.com/apis/url/stylize/px) */;
  q?:
    | number
    | null /** Adjusts the quality of an output image. (https://docs.imgix.com/apis/url/format/q) */;
  rect?:
    | string
    | null /** Crops an image to a specified rectangle. (https://docs.imgix.com/apis/url/size/rect) */;
  rot?:
    | number
    | null /** Rotates an image by a specified number of degrees. (https://docs.imgix.com/apis/url/rotation/rot) */;
  sat?:
    | number
    | null /** Adjusts the saturation of an image. (https://docs.imgix.com/apis/url/adjustment/sat) */;
  sepia?:
    | number
    | null /** Applies a sepia effect to an image. (https://docs.imgix.com/apis/url/stylize/sepia) */;
  shad?:
    | number
    | null /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/shad) */;
  sharp?:
    | number
    | null /** Adjusts the sharpness of the source image. (https://docs.imgix.com/apis/url/adjustment/sharp) */;
  trim?:
    | string
    | null /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */;
  trimcolor?:
    | string
    | null /** Specifies a trim color on a trim operation. (https://docs.imgix.com/apis/url/trim/trimcolor) */;
  trimmd?:
    | number
    | null /** Specifies the mean difference on a trim operation. (https://docs.imgix.com/apis/url/trim/trimmd) */;
  trimsd?:
    | number
    | null /** Specifies the standard deviation on a trim operation. (https://docs.imgix.com/apis/url/trim/trimsd) */;
  trimtol?:
    | number
    | null /** Specifies the tolerance on a trim operation. (https://docs.imgix.com/apis/url/trim/trimtol) */;
  txt?:
    | string
    | null /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */;
  txtalign?:
    | string
    | null /** Sets the vertical and horizontal alignment of rendered text relative to the base image. (https://docs.imgix.com/apis/url/text/txtalign) */;
  txtclip?:
    | string
    | null /** Sets the clipping properties of rendered text. (https://docs.imgix.com/apis/url/text/txtclip) */;
  txtclr?:
    | string
    | null /** Specifies the color of rendered text. (https://docs.imgix.com/apis/url/text/txtclr) */;
  txtfit?:
    | string
    | null /** Specifies the fit approach for rendered text. (https://docs.imgix.com/apis/url/text/txtfit) */;
  txtfont?:
    | string
    | null /** Selects a font for rendered text. (https://docs.imgix.com/apis/url/text/txtfont) */;
  txtlead?:
    | number
    | null /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/text/txtlead) */;
  txtlig?:
    | number
    | null /** Controls the level of ligature substitution (https://docs.imgix.com/apis/url/text/txtlig) */;
  txtline?:
    | number
    | null /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txtline) */;
  txtlineclr?:
    | string
    | null /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txtlineclr) */;
  txtpad?:
    | number
    | null /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. (https://docs.imgix.com/apis/url/text/txtpad) */;
  txtshad?:
    | number
    | null /** Applies a shadow to rendered text. (https://docs.imgix.com/apis/url/text/txtshad) */;
  txtsize?:
    | number
    | null /** Sets the font size of rendered text. (https://docs.imgix.com/apis/url/text/txtsize) */;
  txttrack?:
    | number
    | null /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/text/txtlead) */;
  txtwidth?:
    | number
    | null /** Sets the width of rendered text. (https://docs.imgix.com/apis/url/text/txtwidth) */;
  usm?:
    | number
    | null /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */;
  usmrad?:
    | number
    | null /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */;
  vib?:
    | number
    | null /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */;
  w?:
    | string
    | null /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */;
}

export interface DatoCmsFullWidthImageConnectionSort {
  fields: (DatoCmsFullWidthImageConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsFullWidthImageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsFullWidthImage {
  id?: DatoCmsFullWidthImageConnectionIdQueryString_2 | null;
  originalId?: DatoCmsFullWidthImageConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsFullWidthImageConnectionInternalInputObject_2 | null;
  locale?: DatoCmsFullWidthImageConnectionLocaleQueryString_2 | null;
  model?: DatoCmsFullWidthImageConnectionModelInputObject_2 | null;
  image?: DatoCmsFullWidthImageConnectionImageInputObject_2 | null;
  seoMetaTags?: DatoCmsFullWidthImageConnectionSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsFullWidthImageConnectionUpdatedAtQueryString_2 | null;
}

export interface DatoCmsFullWidthImageConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionInternalInputObject_2 {
  type?: DatoCmsFullWidthImageConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFullWidthImageConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFullWidthImageConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFullWidthImageConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelInputObject_2 {
  id?: DatoCmsFullWidthImageConnectionModelIdQueryString_2 | null;
  originalId?: DatoCmsFullWidthImageConnectionModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsFullWidthImageConnectionModelInternalInputObject_2 | null;
  name?: DatoCmsFullWidthImageConnectionModelNameQueryString_2 | null;
  singleton?: DatoCmsFullWidthImageConnectionModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsFullWidthImageConnectionModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsFullWidthImageConnectionModelApiKeyQueryString_2 | null;
  tree?: DatoCmsFullWidthImageConnectionModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsFullWidthImageConnectionModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsFullWidthImageConnectionModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsFullWidthImageConnectionModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsFullWidthImageConnectionModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsFullWidthImageConnectionModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsFullWidthImageConnectionModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelInternalInputObject_2 {
  type?: DatoCmsFullWidthImageConnectionModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFullWidthImageConnectionModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFullWidthImageConnectionModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFullWidthImageConnectionModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageInputObject_2 {
  id?: DatoCmsFullWidthImageConnectionImageIdQueryString_2 | null;
  parent?: DatoCmsFullWidthImageConnectionImageParentQueryString_2 | null;
  internal?: DatoCmsFullWidthImageConnectionImageInternalInputObject_2 | null;
  format?: DatoCmsFullWidthImageConnectionImageFormatQueryString_2 | null;
  size?: DatoCmsFullWidthImageConnectionImageSizeQueryInteger_2 | null;
  width?: DatoCmsFullWidthImageConnectionImageWidthQueryInteger_2 | null;
  height?: DatoCmsFullWidthImageConnectionImageHeightQueryInteger_2 | null;
  url?: DatoCmsFullWidthImageConnectionImageUrlQueryString_2 | null;
}

export interface DatoCmsFullWidthImageConnectionImageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageInternalInputObject_2 {
  type?: DatoCmsFullWidthImageConnectionImageInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFullWidthImageConnectionImageInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFullWidthImageConnectionImageInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFullWidthImageConnectionImageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageFormatQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionImageUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsInputObject_2 {
  id?: DatoCmsFullWidthImageConnectionSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsFullWidthImageConnectionSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsFullWidthImageConnectionSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsFullWidthImageConnectionSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsFullWidthImageConnectionSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsFullWidthImageConnectionSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsFullWidthImageConnectionSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsFullWidthImageConnectionSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsFullWidthImageConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsFullWidthImageConnectionSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsFullWidthImageConnectionSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsFullWidthImageConnectionSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFullWidthImageConnectionSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFullWidthImageConnectionSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageConnectionUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSort {
  fields: (DatoCmsOneColumnSectionConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsOneColumnSectionConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsOneColumnSection {
  id?: DatoCmsOneColumnSectionConnectionIdQueryString_2 | null;
  originalId?: DatoCmsOneColumnSectionConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionConnectionInternalInputObject_2 | null;
  locale?: DatoCmsOneColumnSectionConnectionLocaleQueryString_2 | null;
  model?: DatoCmsOneColumnSectionConnectionModelInputObject_2 | null;
  title?: DatoCmsOneColumnSectionConnectionTitleQueryString_2 | null;
  contentNode?: DatoCmsOneColumnSectionConnectionContentNodeInputObject_2 | null;
  content?: DatoCmsOneColumnSectionConnectionContentQueryString_2 | null;
  seoMetaTags?: DatoCmsOneColumnSectionConnectionSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsOneColumnSectionConnectionUpdatedAtQueryString_2 | null;
  headerImage?: DatoCmsOneColumnSectionConnectionHeaderImageInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelInputObject_2 {
  id?: DatoCmsOneColumnSectionConnectionModelIdQueryString_2 | null;
  originalId?: DatoCmsOneColumnSectionConnectionModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionConnectionModelInternalInputObject_2 | null;
  name?: DatoCmsOneColumnSectionConnectionModelNameQueryString_2 | null;
  singleton?: DatoCmsOneColumnSectionConnectionModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsOneColumnSectionConnectionModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsOneColumnSectionConnectionModelApiKeyQueryString_2 | null;
  tree?: DatoCmsOneColumnSectionConnectionModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsOneColumnSectionConnectionModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsOneColumnSectionConnectionModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsOneColumnSectionConnectionModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsOneColumnSectionConnectionModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsOneColumnSectionConnectionModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionConnectionModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionConnectionModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionConnectionModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeInputObject_2 {
  id?: DatoCmsOneColumnSectionConnectionContentNodeIdQueryString_2 | null;
  parent?: DatoCmsOneColumnSectionConnectionContentNodeParentQueryString_2 | null;
  children?: DatoCmsOneColumnSectionConnectionContentNodeChildrenQueryList_2 | null;
  content?: DatoCmsOneColumnSectionConnectionContentNodeContentQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionConnectionContentNodeInternalInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionConnectionContentNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsOneColumnSectionConnectionContentNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsOneColumnSectionConnectionContentNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionConnectionContentNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionConnectionContentNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsInputObject_2 {
  id?: DatoCmsOneColumnSectionConnectionSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsOneColumnSectionConnectionSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsOneColumnSectionConnectionSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionConnectionSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionConnectionSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionConnectionSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageInputObject_2 {
  id?: DatoCmsOneColumnSectionConnectionHeaderImageIdQueryString_2 | null;
  parent?: DatoCmsOneColumnSectionConnectionHeaderImageParentQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionConnectionHeaderImageInternalInputObject_2 | null;
  format?: DatoCmsOneColumnSectionConnectionHeaderImageFormatQueryString_2 | null;
  size?: DatoCmsOneColumnSectionConnectionHeaderImageSizeQueryInteger_2 | null;
  width?: DatoCmsOneColumnSectionConnectionHeaderImageWidthQueryInteger_2 | null;
  height?: DatoCmsOneColumnSectionConnectionHeaderImageHeightQueryInteger_2 | null;
  url?: DatoCmsOneColumnSectionConnectionHeaderImageUrlQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionConnectionHeaderImageInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionConnectionHeaderImageInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionConnectionHeaderImageInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageFormatQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsOneColumnSectionConnectionHeaderImageUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionSort {
  fields: (DatoCmsSiteConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsSiteConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsSite {
  id?: DatoCmsSiteConnectionIdQueryString_2 | null;
  name?: DatoCmsSiteConnectionNameQueryString_2 | null;
  locales?: DatoCmsSiteConnectionLocalesQueryList_2 | null;
  theme?: DatoCmsSiteConnectionThemeInputObject_2 | null;
  internalDomain?: DatoCmsSiteConnectionInternalDomainQueryString_2 | null;
  noIndex?: DatoCmsSiteConnectionNoIndexQueryBoolean_2 | null;
  originalId?: DatoCmsSiteConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsSiteConnectionInternalInputObject_2 | null;
  locale?: DatoCmsSiteConnectionLocaleQueryString_2 | null;
}

export interface DatoCmsSiteConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionLocalesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeInputObject_2 {
  primaryColor?: DatoCmsSiteConnectionThemePrimaryColorInputObject_2 | null;
  lightColor?: DatoCmsSiteConnectionThemeLightColorInputObject_2 | null;
  darkColor?: DatoCmsSiteConnectionThemeDarkColorInputObject_2 | null;
  accentColor?: DatoCmsSiteConnectionThemeAccentColorInputObject_2 | null;
}

export interface DatoCmsSiteConnectionThemePrimaryColorInputObject_2 {
  red?: DatoCmsSiteConnectionThemePrimaryColorRedQueryInteger_2 | null;
  blue?: DatoCmsSiteConnectionThemePrimaryColorBlueQueryInteger_2 | null;
  alpha?: DatoCmsSiteConnectionThemePrimaryColorAlphaQueryInteger_2 | null;
  green?: DatoCmsSiteConnectionThemePrimaryColorGreenQueryInteger_2 | null;
}

export interface DatoCmsSiteConnectionThemePrimaryColorRedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemePrimaryColorBlueQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemePrimaryColorAlphaQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemePrimaryColorGreenQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeLightColorInputObject_2 {
  red?: DatoCmsSiteConnectionThemeLightColorRedQueryInteger_2 | null;
  blue?: DatoCmsSiteConnectionThemeLightColorBlueQueryInteger_2 | null;
  alpha?: DatoCmsSiteConnectionThemeLightColorAlphaQueryInteger_2 | null;
  green?: DatoCmsSiteConnectionThemeLightColorGreenQueryInteger_2 | null;
}

export interface DatoCmsSiteConnectionThemeLightColorRedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeLightColorBlueQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeLightColorAlphaQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeLightColorGreenQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeDarkColorInputObject_2 {
  red?: DatoCmsSiteConnectionThemeDarkColorRedQueryInteger_2 | null;
  blue?: DatoCmsSiteConnectionThemeDarkColorBlueQueryInteger_2 | null;
  alpha?: DatoCmsSiteConnectionThemeDarkColorAlphaQueryInteger_2 | null;
  green?: DatoCmsSiteConnectionThemeDarkColorGreenQueryInteger_2 | null;
}

export interface DatoCmsSiteConnectionThemeDarkColorRedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeDarkColorBlueQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeDarkColorAlphaQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeDarkColorGreenQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeAccentColorInputObject_2 {
  red?: DatoCmsSiteConnectionThemeAccentColorRedQueryInteger_2 | null;
  blue?: DatoCmsSiteConnectionThemeAccentColorBlueQueryInteger_2 | null;
  alpha?: DatoCmsSiteConnectionThemeAccentColorAlphaQueryInteger_2 | null;
  green?: DatoCmsSiteConnectionThemeAccentColorGreenQueryInteger_2 | null;
}

export interface DatoCmsSiteConnectionThemeAccentColorRedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeAccentColorBlueQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeAccentColorAlphaQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionThemeAccentColorGreenQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteConnectionInternalDomainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionNoIndexQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsSiteConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionInternalInputObject_2 {
  type?: DatoCmsSiteConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsSiteConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsSiteConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsSiteConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteConnectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionSort {
  fields: (DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsTwoColumnSectionFirstColumnContentTextNode {
  id?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionIdQueryString_2 | null;
  firstColumnContent?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionFirstColumnContentQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionFirstColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSort {
  fields: (DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsTwoColumnSectionSecondColumnContentTextNode {
  id?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionIdQueryString_2 | null;
  secondColumnContent?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSecondColumnContentQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSecondColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSort {
  fields: (DatoCmsTwoColumnSectionConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsTwoColumnSectionConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsTwoColumnSection {
  id?: DatoCmsTwoColumnSectionConnectionIdQueryString_2 | null;
  originalId?: DatoCmsTwoColumnSectionConnectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionConnectionInternalInputObject_2 | null;
  locale?: DatoCmsTwoColumnSectionConnectionLocaleQueryString_2 | null;
  model?: DatoCmsTwoColumnSectionConnectionModelInputObject_2 | null;
  title?: DatoCmsTwoColumnSectionConnectionTitleQueryString_2 | null;
  firstColumnContentNode?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInputObject_2 | null;
  firstColumnContent?: DatoCmsTwoColumnSectionConnectionFirstColumnContentQueryString_2 | null;
  secondColumnContentNode?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInputObject_2 | null;
  secondColumnContent?: DatoCmsTwoColumnSectionConnectionSecondColumnContentQueryString_2 | null;
  seoMetaTags?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsTwoColumnSectionConnectionUpdatedAtQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelInputObject_2 {
  id?: DatoCmsTwoColumnSectionConnectionModelIdQueryString_2 | null;
  originalId?: DatoCmsTwoColumnSectionConnectionModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionConnectionModelInternalInputObject_2 | null;
  name?: DatoCmsTwoColumnSectionConnectionModelNameQueryString_2 | null;
  singleton?: DatoCmsTwoColumnSectionConnectionModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsTwoColumnSectionConnectionModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsTwoColumnSectionConnectionModelApiKeyQueryString_2 | null;
  tree?: DatoCmsTwoColumnSectionConnectionModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsTwoColumnSectionConnectionModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsTwoColumnSectionConnectionModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsTwoColumnSectionConnectionModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsTwoColumnSectionConnectionModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsTwoColumnSectionConnectionModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionConnectionModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionConnectionModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionConnectionModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInputObject_2 {
  id?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeIdQueryString_2 | null;
  parent?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeParentQueryString_2 | null;
  children?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeChildrenQueryList_2 | null;
  firstColumnContent?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeFirstColumnContentQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeFirstColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionFirstColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInputObject_2 {
  id?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeIdQueryString_2 | null;
  parent?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeParentQueryString_2 | null;
  children?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeChildrenQueryList_2 | null;
  secondColumnContent?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeSecondColumnContentQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeSecondColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSecondColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsInputObject_2 {
  id?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionConnectionSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionConnectionUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetConnectionSort {
  fields: (DatoCmsAssetConnectionSortByFieldsEnum | null)[];
  order?: DatoCmsAssetConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDatoCmsAsset {
  id?: DatoCmsAssetConnectionIdQueryString_2 | null;
  internal?: DatoCmsAssetConnectionInternalInputObject_2 | null;
  format?: DatoCmsAssetConnectionFormatQueryString_2 | null;
  size?: DatoCmsAssetConnectionSizeQueryInteger_2 | null;
  width?: DatoCmsAssetConnectionWidthQueryInteger_2 | null;
  height?: DatoCmsAssetConnectionHeightQueryInteger_2 | null;
  url?: DatoCmsAssetConnectionUrlQueryString_2 | null;
  resolutions?: ResolutionsTypeName_4 | null;
  sizes?: SizesTypeName_4 | null;
  inlineSvg?: InlineSvgQueryString_4 | null;
  fluid?: FluidTypeName_4 | null;
  fixed?: FixedTypeName_4 | null;
}

export interface DatoCmsAssetConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetConnectionInternalInputObject_2 {
  type?: DatoCmsAssetConnectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsAssetConnectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsAssetConnectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsAssetConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetConnectionFormatQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetConnectionSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsAssetConnectionWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsAssetConnectionHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsAssetConnectionUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ResolutionsTypeName_4 {
  base64?: ResolutionsBase64QueryString_4 | null;
  aspectRatio?: ResolutionsAspectRatioQueryFloat_4 | null;
  width?: ResolutionsWidthQueryFloat_4 | null;
  height?: ResolutionsHeightQueryFloat_4 | null;
  src?: ResolutionsSrcQueryString_4 | null;
  srcSet?: ResolutionsSrcSetQueryString_4 | null;
}

export interface ResolutionsBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ResolutionsSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SizesTypeName_4 {
  base64?: SizesBase64QueryString_4 | null;
  aspectRatio?: SizesAspectRatioQueryFloat_4 | null;
  src?: SizesSrcQueryString_4 | null;
  srcSet?: SizesSrcSetQueryString_4 | null;
  sizes?: SizesSizesQueryString_4 | null;
}

export interface SizesBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface SizesSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SizesSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SizesSizesQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface InlineSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FluidTypeName_4 {
  base64?: FluidBase64QueryString_4 | null;
  aspectRatio?: FluidAspectRatioQueryFloat_4 | null;
  src?: FluidSrcQueryString_4 | null;
  srcSet?: FluidSrcSetQueryString_4 | null;
  sizes?: FluidSizesQueryString_4 | null;
}

export interface FluidBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface FluidSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FluidSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FluidSizesQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FixedTypeName_4 {
  base64?: FixedBase64QueryString_4 | null;
  aspectRatio?: FixedAspectRatioQueryFloat_4 | null;
  width?: FixedWidthQueryFloat_4 | null;
  height?: FixedHeightQueryFloat_4 | null;
  src?: FixedSrcQueryString_4 | null;
  srcSet?: FixedSrcSetQueryString_4 | null;
}

export interface FixedBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface FixedWidthQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface FixedHeightQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface FixedSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FixedSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageContextInputObject {
  id?: SitePageContextIdQueryString | null;
  mdid?: SitePageContextMdidQueryString | null;
}

export interface SitePageContextIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageContextMdidQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null;
  id?: SitePagePluginCreatorIdQueryString | null;
  name?: SitePagePluginCreatorNameQueryString | null;
  version?: SitePagePluginCreatorVersionQueryString | null;
  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null;
  browserAPIs?: SitePagePluginCreatorBrowserApIsQueryList | null;
  ssrAPIs?: SitePagePluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null;
  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null;
  parent?: SitePagePluginCreatorParentQueryString | null;
  internal?: SitePagePluginCreatorInternalInputObject | null;
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  endpoint?: SitePagePluginCreatorPluginOptionsEndpointQueryString | null;
  query?: SitePagePluginCreatorPluginOptionsQueryQueryString | null;
  apiToken?: SitePagePluginCreatorPluginOptionsApiTokenQueryString | null;
  name?: SitePagePluginCreatorPluginOptionsNameQueryString | null;
  short_name?: SitePagePluginCreatorPluginOptionsShortNameQueryString | null;
  start_url?: SitePagePluginCreatorPluginOptionsStartUrlQueryString | null;
  background_color?: SitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null;
  theme_color?: SitePagePluginCreatorPluginOptionsThemeColorQueryString | null;
  display?: SitePagePluginCreatorPluginOptionsDisplayQueryString | null;
  icons?: SitePagePluginCreatorPluginOptionsIconsQueryList | null;
  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null;
  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePagePluginCreatorPluginOptionsEndpointQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsQueryQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsApiTokenQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsIconsQueryList {
  elemMatch?: SitePagePluginCreatorPluginOptionsIconsInputObject | null;
}

export interface SitePagePluginCreatorPluginOptionsIconsInputObject {
  src?: SitePagePluginCreatorPluginOptionsIconsSrcQueryString | null;
  sizes?: SitePagePluginCreatorPluginOptionsIconsSizesQueryString | null;
  type?: SitePagePluginCreatorPluginOptionsIconsTypeQueryString | null;
}

export interface SitePagePluginCreatorPluginOptionsIconsSrcQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsIconsSizesQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsIconsTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null;
  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null;
  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null;
  main?: SitePagePluginCreatorPackageJsonMainQueryString | null;
  author?: SitePagePluginCreatorPackageJsonAuthorQueryString | null;
  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null;
  type?: SitePagePluginCreatorInternalTypeQueryString | null;
  owner?: SitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null;
  contentDigest?: SitePageInternalContentDigestQueryString_2 | null;
  description?: SitePageInternalDescriptionQueryString | null;
  owner?: SitePageInternalOwnerQueryString_2 | null;
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsInputObject_2 {
  endpoint?: SitePluginPluginOptionsEndpointQueryString_2 | null;
  query?: SitePluginPluginOptionsQueryQueryString_2 | null;
  apiToken?: SitePluginPluginOptionsApiTokenQueryString_2 | null;
  name?: SitePluginPluginOptionsNameQueryString_2 | null;
  short_name?: SitePluginPluginOptionsShortNameQueryString_2 | null;
  start_url?: SitePluginPluginOptionsStartUrlQueryString_2 | null;
  background_color?: SitePluginPluginOptionsBackgroundColorQueryString_2 | null;
  theme_color?: SitePluginPluginOptionsThemeColorQueryString_2 | null;
  display?: SitePluginPluginOptionsDisplayQueryString_2 | null;
  icons?: SitePluginPluginOptionsIconsQueryList_2 | null;
  path?: SitePluginPluginOptionsPathQueryString_2 | null;
  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginPluginOptionsEndpointQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsQueryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsApiTokenQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsIconsQueryList_2 {
  elemMatch?: SitePluginPluginOptionsIconsInputObject_2 | null;
}

export interface SitePluginPluginOptionsIconsInputObject_2 {
  src?: SitePluginPluginOptionsIconsSrcQueryString_2 | null;
  sizes?: SitePluginPluginOptionsIconsSizesQueryString_2 | null;
  type?: SitePluginPluginOptionsIconsTypeQueryString_2 | null;
}

export interface SitePluginPluginOptionsIconsSrcQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsIconsSizesQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsIconsTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null;
  description?: SitePluginPackageJsonDescriptionQueryString_2 | null;
  version?: SitePluginPackageJsonVersionQueryString_2 | null;
  main?: SitePluginPackageJsonMainQueryString_2 | null;
  author?: SitePluginPackageJsonAuthorQueryString_2 | null;
  license?: SitePluginPackageJsonLicenseQueryString_2 | null;
  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null;
  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null;
  type?: SitePluginInternalTypeQueryString_2 | null;
  owner?: SitePluginInternalOwnerQueryString_2 | null;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SiteSiteMetadataInputObject_2 {
  title?: SiteSiteMetadataTitleQueryString_2 | null;
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePortQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SiteHostQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SiteIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null;
  type?: SiteInternalTypeQueryString_2 | null;
  owner?: SiteInternalOwnerQueryString_2 | null;
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistPictureInputObject_2 {
  id?: ArtistPictureIdQueryString_2 | null;
  handle?: ArtistPictureHandleQueryString_2 | null;
  width?: ArtistPictureWidthQueryInteger_2 | null;
  height?: ArtistPictureHeightQueryInteger_2 | null;
}

export interface ArtistPictureIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistPictureHandleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistPictureWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ArtistPictureHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ArtistRecordsQueryList_2 {
  elemMatch?: ArtistRecordsInputObject_2 | null;
}

export interface ArtistRecordsInputObject_2 {
  id?: ArtistRecordsIdQueryString_2 | null;
  slug?: ArtistRecordsSlugQueryString_2 | null;
  title?: ArtistRecordsTitleQueryString_2 | null;
}

export interface ArtistRecordsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistRecordsSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistRecordsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistInternalInputObject_2 {
  type?: ArtistInternalTypeQueryString_2 | null;
  content?: ArtistInternalContentQueryString_2 | null;
  contentDigest?: ArtistInternalContentDigestQueryString_2 | null;
  owner?: ArtistInternalOwnerQueryString_2 | null;
}

export interface ArtistInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ArtistInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordTracksQueryList_2 {
  elemMatch?: RecordTracksInputObject_2 | null;
}

export interface RecordTracksInputObject_2 {
  id?: RecordTracksIdQueryString_2 | null;
  title?: RecordTracksTitleQueryString_2 | null;
  aliasedLength?: RecordTracksAliasedLengthQueryInteger_2 | null;
}

export interface RecordTracksIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordTracksTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordTracksAliasedLengthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface RecordCoverInputObject_2 {
  handle?: RecordCoverHandleQueryString_2 | null;
}

export interface RecordCoverHandleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordArtistInputObject_2 {
  id?: RecordArtistIdQueryString_2 | null;
  slug?: RecordArtistSlugQueryString_2 | null;
  name?: RecordArtistNameQueryString_2 | null;
}

export interface RecordArtistIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordArtistSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordArtistNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordReviewsQueryList_2 {
  elemMatch?: RecordReviewsInputObject_2 | null;
}

export interface RecordReviewsInputObject_2 {
  id?: RecordReviewsIdQueryString_2 | null;
  slug?: RecordReviewsSlugQueryString_2 | null;
  title?: RecordReviewsTitleQueryString_2 | null;
}

export interface RecordReviewsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordReviewsSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordReviewsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordCreatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordInternalInputObject_2 {
  type?: RecordInternalTypeQueryString_2 | null;
  content?: RecordInternalContentQueryString_2 | null;
  contentDigest?: RecordInternalContentDigestQueryString_2 | null;
  owner?: RecordInternalOwnerQueryString_2 | null;
}

export interface RecordInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface RecordInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewReviewQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewRatingQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ReviewCreatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewRecordInputObject_2 {
  slug?: ReviewRecordSlugQueryString_2 | null;
  title?: ReviewRecordTitleQueryString_2 | null;
  artist?: ReviewRecordArtistInputObject_2 | null;
}

export interface ReviewRecordSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewRecordTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewRecordArtistInputObject_2 {
  slug?: ReviewRecordArtistSlugQueryString_2 | null;
  name?: ReviewRecordArtistNameQueryString_2 | null;
}

export interface ReviewRecordArtistSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewRecordArtistNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewCommentsQueryList_2 {
  elemMatch?: ReviewCommentsInputObject_2 | null;
}

export interface ReviewCommentsInputObject_2 {
  body?: ReviewCommentsBodyQueryString_2 | null;
}

export interface ReviewCommentsBodyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewInternalInputObject_2 {
  type?: ReviewInternalTypeQueryString_2 | null;
  content?: ReviewInternalContentQueryString_2 | null;
  contentDigest?: ReviewInternalContentDigestQueryString_2 | null;
  owner?: ReviewInternalOwnerQueryString_2 | null;
}

export interface ReviewInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownInternalInputObject_2 {
  type?: ReviewMarkdownInternalTypeQueryString_2 | null;
  mediaType?: ReviewMarkdownInternalMediaTypeQueryString_2 | null;
  content?: ReviewMarkdownInternalContentQueryString_2 | null;
  contentDigest?: ReviewMarkdownInternalContentDigestQueryString_2 | null;
  owner?: ReviewMarkdownInternalOwnerQueryString_2 | null;
}

export interface ReviewMarkdownInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ReviewMarkdownInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: MarkdownRemarkInternalContentQueryString_2 | null;
  type?: MarkdownRemarkInternalTypeQueryString_2 | null;
  contentDigest?: MarkdownRemarkInternalContentDigestQueryString_2 | null;
  owner?: MarkdownRemarkInternalOwnerQueryString_2 | null;
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: MarkdownRemarkFrontmatterTitleQueryString_2 | null;
  _PARENT?: MarkdownRemarkFrontmatterParentQueryString_2 | null;
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ExcerptQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface HtmlQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface HeadingsQueryList_3 {
  elemMatch?: HeadingsListElemTypeName_3 | null;
}

export interface HeadingsListElemTypeName_3 {
  value?: HeadingsListElemValueQueryString_3 | null;
  depth?: HeadingsListElemDepthQueryInt_3 | null;
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface TimeToReadQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface TableOfContentsQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface WordCountTypeName_3 {
  paragraphs?: WordCountParagraphsQueryInt_3 | null;
  sentences?: WordCountSentencesQueryInt_3 | null;
  words?: WordCountWordsQueryInt_3 | null;
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface WordCountSentencesQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface WordCountWordsQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFieldIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldInternalInputObject_2 {
  type?: DatoCmsFieldInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFieldInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFieldInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFieldInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldLabelQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldFieldTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldHintQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldLocalizedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFieldValidatorsInputObject_2 {
  itemItemType?: DatoCmsFieldValidatorsItemItemTypeInputObject_2 | null;
  numberRange?: DatoCmsFieldValidatorsNumberRangeInputObject_2 | null;
  richTextBlocks?: DatoCmsFieldValidatorsRichTextBlocksInputObject_2 | null;
  extension?: DatoCmsFieldValidatorsExtensionInputObject_2 | null;
}

export interface DatoCmsFieldValidatorsItemItemTypeInputObject_2 {
  itemTypes?: DatoCmsFieldValidatorsItemItemTypeItemTypesQueryList_2 | null;
}

export interface DatoCmsFieldValidatorsItemItemTypeItemTypesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldValidatorsNumberRangeInputObject_2 {
  min?: DatoCmsFieldValidatorsNumberRangeMinQueryString_2 | null;
}

export interface DatoCmsFieldValidatorsNumberRangeMinQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldValidatorsRichTextBlocksInputObject_2 {
  itemTypes?: DatoCmsFieldValidatorsRichTextBlocksItemTypesQueryList_2 | null;
}

export interface DatoCmsFieldValidatorsRichTextBlocksItemTypesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldValidatorsExtensionInputObject_2 {
  predefinedList?: DatoCmsFieldValidatorsExtensionPredefinedListQueryString_2 | null;
}

export interface DatoCmsFieldValidatorsExtensionPredefinedListQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldPositionQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFieldAppeareanceInputObject_2 {
  editor?: DatoCmsFieldAppeareanceEditorQueryString_2 | null;
  parameters?: DatoCmsFieldAppeareanceParametersInputObject_2 | null;
  addons?: DatoCmsFieldAppeareanceAddonsQueryList_2 | null;
  type?: DatoCmsFieldAppeareanceTypeQueryString_2 | null;
}

export interface DatoCmsFieldAppeareanceEditorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldAppeareanceParametersInputObject_2 {
  heading?: DatoCmsFieldAppeareanceParametersHeadingQueryBoolean_2 | null;
  startCollapsed?: DatoCmsFieldAppeareanceParametersStartCollapsedQueryBoolean_2 | null;
  toolbar?: DatoCmsFieldAppeareanceParametersToolbarQueryList_2 | null;
}

export interface DatoCmsFieldAppeareanceParametersHeadingQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFieldAppeareanceParametersStartCollapsedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFieldAppeareanceParametersToolbarQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldAppeareanceAddonsQueryList_2 {
  elemMatch?: DatoCmsFieldAppeareanceAddonsInputObject_2 | null;
}

export interface DatoCmsFieldAppeareanceAddonsInputObject_2 {
  id?: DatoCmsFieldAppeareanceAddonsIdQueryString_2 | null;
  parameters?: DatoCmsFieldAppeareanceAddonsParametersInputObject_2 | null;
}

export interface DatoCmsFieldAppeareanceAddonsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldAppeareanceAddonsParametersInputObject_2 {
  slaveFields?: DatoCmsFieldAppeareanceAddonsParametersSlaveFieldsQueryString_2 | null;
}

export interface DatoCmsFieldAppeareanceAddonsParametersSlaveFieldsQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFieldAppeareanceTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelInternalInputObject_2 {
  type?: DatoCmsModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelFieldsQueryList_2 {
  elemMatch?: DatoCmsModelFieldsInputObject_2 | null;
}

export interface DatoCmsModelFieldsInputObject_2 {
  id?: DatoCmsModelFieldsIdQueryString_2 | null;
  originalId?: DatoCmsModelFieldsOriginalIdQueryString_2 | null;
  internal?: DatoCmsModelFieldsInternalInputObject_2 | null;
  label?: DatoCmsModelFieldsLabelQueryString_2 | null;
  fieldType?: DatoCmsModelFieldsFieldTypeQueryString_2 | null;
  apiKey?: DatoCmsModelFieldsApiKeyQueryString_2 | null;
  hint?: DatoCmsModelFieldsHintQueryString_2 | null;
  localized?: DatoCmsModelFieldsLocalizedQueryBoolean_2 | null;
  validators?: DatoCmsModelFieldsValidatorsInputObject_2 | null;
  position?: DatoCmsModelFieldsPositionQueryInteger_2 | null;
  appeareance?: DatoCmsModelFieldsAppeareanceInputObject_2 | null;
}

export interface DatoCmsModelFieldsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsInternalInputObject_2 {
  type?: DatoCmsModelFieldsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsModelFieldsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsModelFieldsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsModelFieldsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsLabelQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsFieldTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsHintQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsLocalizedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelFieldsValidatorsInputObject_2 {
  itemItemType?: DatoCmsModelFieldsValidatorsItemItemTypeInputObject_2 | null;
  numberRange?: DatoCmsModelFieldsValidatorsNumberRangeInputObject_2 | null;
  richTextBlocks?: DatoCmsModelFieldsValidatorsRichTextBlocksInputObject_2 | null;
  extension?: DatoCmsModelFieldsValidatorsExtensionInputObject_2 | null;
}

export interface DatoCmsModelFieldsValidatorsItemItemTypeInputObject_2 {
  itemTypes?: DatoCmsModelFieldsValidatorsItemItemTypeItemTypesQueryList_2 | null;
}

export interface DatoCmsModelFieldsValidatorsItemItemTypeItemTypesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsValidatorsNumberRangeInputObject_2 {
  min?: DatoCmsModelFieldsValidatorsNumberRangeMinQueryString_2 | null;
}

export interface DatoCmsModelFieldsValidatorsNumberRangeMinQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsValidatorsRichTextBlocksInputObject_2 {
  itemTypes?: DatoCmsModelFieldsValidatorsRichTextBlocksItemTypesQueryList_2 | null;
}

export interface DatoCmsModelFieldsValidatorsRichTextBlocksItemTypesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsValidatorsExtensionInputObject_2 {
  predefinedList?: DatoCmsModelFieldsValidatorsExtensionPredefinedListQueryString_2 | null;
}

export interface DatoCmsModelFieldsValidatorsExtensionPredefinedListQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsPositionQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsModelFieldsAppeareanceInputObject_2 {
  editor?: DatoCmsModelFieldsAppeareanceEditorQueryString_2 | null;
  parameters?: DatoCmsModelFieldsAppeareanceParametersInputObject_2 | null;
  addons?: DatoCmsModelFieldsAppeareanceAddonsQueryList_2 | null;
  type?: DatoCmsModelFieldsAppeareanceTypeQueryString_2 | null;
}

export interface DatoCmsModelFieldsAppeareanceEditorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsAppeareanceParametersInputObject_2 {
  heading?: DatoCmsModelFieldsAppeareanceParametersHeadingQueryBoolean_2 | null;
  startCollapsed?: DatoCmsModelFieldsAppeareanceParametersStartCollapsedQueryBoolean_2 | null;
  toolbar?: DatoCmsModelFieldsAppeareanceParametersToolbarQueryList_2 | null;
}

export interface DatoCmsModelFieldsAppeareanceParametersHeadingQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelFieldsAppeareanceParametersStartCollapsedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsModelFieldsAppeareanceParametersToolbarQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsAppeareanceAddonsQueryList_2 {
  elemMatch?: DatoCmsModelFieldsAppeareanceAddonsInputObject_2 | null;
}

export interface DatoCmsModelFieldsAppeareanceAddonsInputObject_2 {
  id?: DatoCmsModelFieldsAppeareanceAddonsIdQueryString_2 | null;
  parameters?: DatoCmsModelFieldsAppeareanceAddonsParametersInputObject_2 | null;
}

export interface DatoCmsModelFieldsAppeareanceAddonsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsAppeareanceAddonsParametersInputObject_2 {
  slaveFields?: DatoCmsModelFieldsAppeareanceAddonsParametersSlaveFieldsQueryString_2 | null;
}

export interface DatoCmsModelFieldsAppeareanceAddonsParametersSlaveFieldsQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsModelFieldsAppeareanceTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionContentTextNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsOneColumnSectionContentTextNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsOneColumnSectionContentTextNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionContentTextNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionContentTextNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentTextNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceInternalInputObject_2 {
  type?: DatoCmsPriceInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsPriceInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsPriceInternalOwnerQueryString_2 | null;
}

export interface DatoCmsPriceInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelInputObject_2 {
  id?: DatoCmsPriceModelIdQueryString_2 | null;
  originalId?: DatoCmsPriceModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsPriceModelInternalInputObject_2 | null;
  name?: DatoCmsPriceModelNameQueryString_2 | null;
  singleton?: DatoCmsPriceModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsPriceModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsPriceModelApiKeyQueryString_2 | null;
  tree?: DatoCmsPriceModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsPriceModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsPriceModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsPriceModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsPriceModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsPriceModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsPriceModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelInternalInputObject_2 {
  type?: DatoCmsPriceModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsPriceModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsPriceModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsPriceModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceBaseQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsPriceIsPriceDiscountedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsPriceDiscountQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsPriceDiscountedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsInputObject_2 {
  id?: DatoCmsPriceSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsPriceSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsPriceSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsPriceSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsPriceSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsPriceSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsPriceSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsPriceSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsPriceSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsPriceSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsPriceSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsPriceSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsPriceSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsPriceSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsPriceSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsPriceSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsPriceSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsPriceSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsPriceSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsPriceUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekInternalInputObject_2 {
  type?: DatoCmsWeekInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsWeekInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsWeekInternalOwnerQueryString_2 | null;
}

export interface DatoCmsWeekInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelInputObject_2 {
  id?: DatoCmsWeekModelIdQueryString_2 | null;
  originalId?: DatoCmsWeekModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsWeekModelInternalInputObject_2 | null;
  name?: DatoCmsWeekModelNameQueryString_2 | null;
  singleton?: DatoCmsWeekModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsWeekModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsWeekModelApiKeyQueryString_2 | null;
  tree?: DatoCmsWeekModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsWeekModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsWeekModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsWeekModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsWeekModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsWeekModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsWeekModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelInternalInputObject_2 {
  type?: DatoCmsWeekModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsWeekModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsWeekModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsWeekModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekStartDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekEndDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceInputObject_2 {
  id?: DatoCmsWeekPriceIdQueryString_2 | null;
  originalId?: DatoCmsWeekPriceOriginalIdQueryString_2 | null;
  children?: DatoCmsWeekPriceChildrenQueryList_2 | null;
  internal?: DatoCmsWeekPriceInternalInputObject_2 | null;
  locale?: DatoCmsWeekPriceLocaleQueryString_2 | null;
  title?: DatoCmsWeekPriceTitleQueryString_2 | null;
  base?: DatoCmsWeekPriceBaseQueryInteger_2 | null;
  isPriceDiscounted?: DatoCmsWeekPriceIsPriceDiscountedQueryBoolean_2 | null;
  discount?: DatoCmsWeekPriceDiscountQueryInteger_2 | null;
  discounted?: DatoCmsWeekPriceDiscountedQueryInteger_2 | null;
  updatedAt?: DatoCmsWeekPriceUpdatedAtQueryString_2 | null;
}

export interface DatoCmsWeekPriceIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceInternalInputObject_2 {
  type?: DatoCmsWeekPriceInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsWeekPriceInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsWeekPriceInternalOwnerQueryString_2 | null;
}

export interface DatoCmsWeekPriceInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekPriceBaseQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsWeekPriceIsPriceDiscountedQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsWeekPriceDiscountQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsWeekPriceDiscountedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsWeekPriceUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsInputObject_2 {
  id?: DatoCmsWeekSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsWeekSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsWeekSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsWeekSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsWeekSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsWeekSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsWeekSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsWeekSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsWeekSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsWeekSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsWeekSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsWeekSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsWeekSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsWeekSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsWeekSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsWeekSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsWeekSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsWeekSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsWeekSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsWeekUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageInternalInputObject_2 {
  type?: DatoCmsHomepageInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelInputObject_2 {
  id?: DatoCmsHomepageModelIdQueryString_2 | null;
  originalId?: DatoCmsHomepageModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsHomepageModelInternalInputObject_2 | null;
  name?: DatoCmsHomepageModelNameQueryString_2 | null;
  singleton?: DatoCmsHomepageModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsHomepageModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsHomepageModelApiKeyQueryString_2 | null;
  tree?: DatoCmsHomepageModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsHomepageModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsHomepageModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsHomepageModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsHomepageModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsHomepageModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsHomepageModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelInternalInputObject_2 {
  type?: DatoCmsHomepageModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsHomepageTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageInputObject_2 {
  id?: DatoCmsHomepageHeaderImageIdQueryString_2 | null;
  parent?: DatoCmsHomepageHeaderImageParentQueryString_2 | null;
  internal?: DatoCmsHomepageHeaderImageInternalInputObject_2 | null;
  format?: DatoCmsHomepageHeaderImageFormatQueryString_2 | null;
  size?: DatoCmsHomepageHeaderImageSizeQueryInteger_2 | null;
  width?: DatoCmsHomepageHeaderImageWidthQueryInteger_2 | null;
  height?: DatoCmsHomepageHeaderImageHeightQueryInteger_2 | null;
  url?: DatoCmsHomepageHeaderImageUrlQueryString_2 | null;
}

export interface DatoCmsHomepageHeaderImageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageInternalInputObject_2 {
  type?: DatoCmsHomepageHeaderImageInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageHeaderImageInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageHeaderImageInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageHeaderImageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageFormatQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsHomepageHeaderImageUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentQueryList_2 {
  elemMatch?: DatoCmsHomepageContentInputObject_2 | null;
}

export interface DatoCmsHomepageContentInputObject_2 {
  id?: DatoCmsHomepageContentIdQueryString_2 | null;
  originalId?: DatoCmsHomepageContentOriginalIdQueryString_2 | null;
  children?: DatoCmsHomepageContentChildrenQueryList_2 | null;
  internal?: DatoCmsHomepageContentInternalInputObject_2 | null;
  locale?: DatoCmsHomepageContentLocaleQueryString_2 | null;
  title?: DatoCmsHomepageContentTitleQueryString_2 | null;
  content?: DatoCmsHomepageContentContentQueryString_2 | null;
  updatedAt?: DatoCmsHomepageContentUpdatedAtQueryString_2 | null;
}

export interface DatoCmsHomepageContentIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentInternalInputObject_2 {
  type?: DatoCmsHomepageContentInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageContentInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageContentInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageContentInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageContentUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsInputObject_2 {
  id?: DatoCmsHomepageSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsHomepageSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsHomepageSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsHomepageSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsHomepageSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsHomepageSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsHomepageSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsHomepageSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsHomepageSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsHomepageSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsHomepageSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsHomepageSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsHomepageSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsHomepageSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsHomepageSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsHomepageSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsHomepageSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsHomepageSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsHomepageSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsHomepageUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageInternalInputObject_2 {
  type?: DatoCmsFullWidthImageInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFullWidthImageInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFullWidthImageInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFullWidthImageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelInputObject_2 {
  id?: DatoCmsFullWidthImageModelIdQueryString_2 | null;
  originalId?: DatoCmsFullWidthImageModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsFullWidthImageModelInternalInputObject_2 | null;
  name?: DatoCmsFullWidthImageModelNameQueryString_2 | null;
  singleton?: DatoCmsFullWidthImageModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsFullWidthImageModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsFullWidthImageModelApiKeyQueryString_2 | null;
  tree?: DatoCmsFullWidthImageModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsFullWidthImageModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsFullWidthImageModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsFullWidthImageModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsFullWidthImageModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsFullWidthImageModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsFullWidthImageModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelInternalInputObject_2 {
  type?: DatoCmsFullWidthImageModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFullWidthImageModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFullWidthImageModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFullWidthImageModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsFullWidthImageImageInputObject_2 {
  id?: DatoCmsFullWidthImageImageIdQueryString_2 | null;
  parent?: DatoCmsFullWidthImageImageParentQueryString_2 | null;
  internal?: DatoCmsFullWidthImageImageInternalInputObject_2 | null;
  format?: DatoCmsFullWidthImageImageFormatQueryString_2 | null;
  size?: DatoCmsFullWidthImageImageSizeQueryInteger_2 | null;
  width?: DatoCmsFullWidthImageImageWidthQueryInteger_2 | null;
  height?: DatoCmsFullWidthImageImageHeightQueryInteger_2 | null;
  url?: DatoCmsFullWidthImageImageUrlQueryString_2 | null;
}

export interface DatoCmsFullWidthImageImageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageImageParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageImageInternalInputObject_2 {
  type?: DatoCmsFullWidthImageImageInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFullWidthImageImageInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFullWidthImageImageInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFullWidthImageImageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageImageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageImageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageImageFormatQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageImageSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFullWidthImageImageWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFullWidthImageImageHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsFullWidthImageImageUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsInputObject_2 {
  id?: DatoCmsFullWidthImageSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsFullWidthImageSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsFullWidthImageSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsFullWidthImageSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsFullWidthImageSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsFullWidthImageSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsFullWidthImageSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsFullWidthImageSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsFullWidthImageSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsFullWidthImageSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsFullWidthImageSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsFullWidthImageSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsFullWidthImageSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsFullWidthImageSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsFullWidthImageUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelInputObject_2 {
  id?: DatoCmsOneColumnSectionModelIdQueryString_2 | null;
  originalId?: DatoCmsOneColumnSectionModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionModelInternalInputObject_2 | null;
  name?: DatoCmsOneColumnSectionModelNameQueryString_2 | null;
  singleton?: DatoCmsOneColumnSectionModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsOneColumnSectionModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsOneColumnSectionModelApiKeyQueryString_2 | null;
  tree?: DatoCmsOneColumnSectionModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsOneColumnSectionModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsOneColumnSectionModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsOneColumnSectionModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsOneColumnSectionModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsOneColumnSectionModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsOneColumnSectionModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsOneColumnSectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeInputObject_2 {
  id?: DatoCmsOneColumnSectionContentNodeIdQueryString_2 | null;
  parent?: DatoCmsOneColumnSectionContentNodeParentQueryString_2 | null;
  children?: DatoCmsOneColumnSectionContentNodeChildrenQueryList_2 | null;
  content?: DatoCmsOneColumnSectionContentNodeContentQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionContentNodeInternalInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionContentNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionContentNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsOneColumnSectionContentNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsOneColumnSectionContentNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionContentNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionContentNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionContentNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsInputObject_2 {
  id?: DatoCmsOneColumnSectionSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsOneColumnSectionSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsOneColumnSectionSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsOneColumnSectionSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsOneColumnSectionSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsOneColumnSectionSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsOneColumnSectionSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsOneColumnSectionSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsOneColumnSectionSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsOneColumnSectionSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsOneColumnSectionSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageInputObject_2 {
  id?: DatoCmsOneColumnSectionHeaderImageIdQueryString_2 | null;
  parent?: DatoCmsOneColumnSectionHeaderImageParentQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionHeaderImageInternalInputObject_2 | null;
  format?: DatoCmsOneColumnSectionHeaderImageFormatQueryString_2 | null;
  size?: DatoCmsOneColumnSectionHeaderImageSizeQueryInteger_2 | null;
  width?: DatoCmsOneColumnSectionHeaderImageWidthQueryInteger_2 | null;
  height?: DatoCmsOneColumnSectionHeaderImageHeightQueryInteger_2 | null;
  url?: DatoCmsOneColumnSectionHeaderImageUrlQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionHeaderImageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageInternalInputObject_2 {
  type?: DatoCmsOneColumnSectionHeaderImageInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsOneColumnSectionHeaderImageInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsOneColumnSectionHeaderImageInternalOwnerQueryString_2 | null;
}

export interface DatoCmsOneColumnSectionHeaderImageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageFormatQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsOneColumnSectionHeaderImageUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteLocalesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteThemeInputObject_2 {
  primaryColor?: DatoCmsSiteThemePrimaryColorInputObject_2 | null;
  lightColor?: DatoCmsSiteThemeLightColorInputObject_2 | null;
  darkColor?: DatoCmsSiteThemeDarkColorInputObject_2 | null;
  accentColor?: DatoCmsSiteThemeAccentColorInputObject_2 | null;
}

export interface DatoCmsSiteThemePrimaryColorInputObject_2 {
  red?: DatoCmsSiteThemePrimaryColorRedQueryInteger_2 | null;
  blue?: DatoCmsSiteThemePrimaryColorBlueQueryInteger_2 | null;
  alpha?: DatoCmsSiteThemePrimaryColorAlphaQueryInteger_2 | null;
  green?: DatoCmsSiteThemePrimaryColorGreenQueryInteger_2 | null;
}

export interface DatoCmsSiteThemePrimaryColorRedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemePrimaryColorBlueQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemePrimaryColorAlphaQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemePrimaryColorGreenQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeLightColorInputObject_2 {
  red?: DatoCmsSiteThemeLightColorRedQueryInteger_2 | null;
  blue?: DatoCmsSiteThemeLightColorBlueQueryInteger_2 | null;
  alpha?: DatoCmsSiteThemeLightColorAlphaQueryInteger_2 | null;
  green?: DatoCmsSiteThemeLightColorGreenQueryInteger_2 | null;
}

export interface DatoCmsSiteThemeLightColorRedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeLightColorBlueQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeLightColorAlphaQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeLightColorGreenQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeDarkColorInputObject_2 {
  red?: DatoCmsSiteThemeDarkColorRedQueryInteger_2 | null;
  blue?: DatoCmsSiteThemeDarkColorBlueQueryInteger_2 | null;
  alpha?: DatoCmsSiteThemeDarkColorAlphaQueryInteger_2 | null;
  green?: DatoCmsSiteThemeDarkColorGreenQueryInteger_2 | null;
}

export interface DatoCmsSiteThemeDarkColorRedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeDarkColorBlueQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeDarkColorAlphaQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeDarkColorGreenQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeAccentColorInputObject_2 {
  red?: DatoCmsSiteThemeAccentColorRedQueryInteger_2 | null;
  blue?: DatoCmsSiteThemeAccentColorBlueQueryInteger_2 | null;
  alpha?: DatoCmsSiteThemeAccentColorAlphaQueryInteger_2 | null;
  green?: DatoCmsSiteThemeAccentColorGreenQueryInteger_2 | null;
}

export interface DatoCmsSiteThemeAccentColorRedQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeAccentColorBlueQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeAccentColorAlphaQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteThemeAccentColorGreenQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsSiteInternalDomainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteNoIndexQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsSiteOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteInternalInputObject_2 {
  type?: DatoCmsSiteInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsSiteInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsSiteInternalOwnerQueryString_2 | null;
}

export interface DatoCmsSiteInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsSiteLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeFirstColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeSecondColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionLocaleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelInputObject_2 {
  id?: DatoCmsTwoColumnSectionModelIdQueryString_2 | null;
  originalId?: DatoCmsTwoColumnSectionModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionModelInternalInputObject_2 | null;
  name?: DatoCmsTwoColumnSectionModelNameQueryString_2 | null;
  singleton?: DatoCmsTwoColumnSectionModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsTwoColumnSectionModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsTwoColumnSectionModelApiKeyQueryString_2 | null;
  tree?: DatoCmsTwoColumnSectionModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsTwoColumnSectionModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsTwoColumnSectionModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsTwoColumnSectionModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsTwoColumnSectionModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsTwoColumnSectionModelHasSingletonItemQueryBoolean_2 | null;
}

export interface DatoCmsTwoColumnSectionModelIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelOriginalIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionModelInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionModelInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionModelInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionModelInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelSingletonQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelSortableQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelApiKeyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelTreeQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelModularBlockQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelDraftModeActiveQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelAllLocalesRequiredQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelCollectionAppeareanceQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionModelHasSingletonItemQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}

export interface DatoCmsTwoColumnSectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeInputObject_2 {
  id?: DatoCmsTwoColumnSectionFirstColumnContentNodeIdQueryString_2 | null;
  parent?: DatoCmsTwoColumnSectionFirstColumnContentNodeParentQueryString_2 | null;
  children?: DatoCmsTwoColumnSectionFirstColumnContentNodeChildrenQueryList_2 | null;
  firstColumnContent?: DatoCmsTwoColumnSectionFirstColumnContentNodeFirstColumnContentQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionFirstColumnContentNodeInternalInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeFirstColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionFirstColumnContentNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsTwoColumnSectionFirstColumnContentNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionFirstColumnContentNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionFirstColumnContentNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionFirstColumnContentNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionFirstColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeInputObject_2 {
  id?: DatoCmsTwoColumnSectionSecondColumnContentNodeIdQueryString_2 | null;
  parent?: DatoCmsTwoColumnSectionSecondColumnContentNodeParentQueryString_2 | null;
  children?: DatoCmsTwoColumnSectionSecondColumnContentNodeChildrenQueryList_2 | null;
  secondColumnContent?: DatoCmsTwoColumnSectionSecondColumnContentNodeSecondColumnContentQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionSecondColumnContentNodeInternalInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeChildrenQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeSecondColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionSecondColumnContentNodeInternalTypeQueryString_2 | null;
  mediaType?: DatoCmsTwoColumnSectionSecondColumnContentNodeInternalMediaTypeQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionSecondColumnContentNodeInternalContentQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionSecondColumnContentNodeInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionSecondColumnContentNodeInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentNodeInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSecondColumnContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsInputObject_2 {
  id?: DatoCmsTwoColumnSectionSeoMetaTagsIdQueryString_2 | null;
  parent?: DatoCmsTwoColumnSectionSeoMetaTagsParentQueryString_2 | null;
  tags?: DatoCmsTwoColumnSectionSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsTwoColumnSectionSeoMetaTagsInternalInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsTagsQueryList_2 {
  elemMatch?: DatoCmsTwoColumnSectionSeoMetaTagsTagsInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsTagsInputObject_2 {
  tagName?: DatoCmsTwoColumnSectionSeoMetaTagsTagsTagNameQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionSeoMetaTagsTagsContentQueryString_2 | null;
  attributes?: DatoCmsTwoColumnSectionSeoMetaTagsTagsAttributesInputObject_2 | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsTagsTagNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsTagsContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsTagsAttributesInputObject_2 {
  property?: DatoCmsTwoColumnSectionSeoMetaTagsTagsAttributesPropertyQueryString_2 | null;
  content?: DatoCmsTwoColumnSectionSeoMetaTagsTagsAttributesContentQueryString_2 | null;
  name?: DatoCmsTwoColumnSectionSeoMetaTagsTagsAttributesNameQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsTagsAttributesPropertyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsTagsAttributesContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsTagsAttributesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsInternalInputObject_2 {
  type?: DatoCmsTwoColumnSectionSeoMetaTagsInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsTwoColumnSectionSeoMetaTagsInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsTwoColumnSectionSeoMetaTagsInternalOwnerQueryString_2 | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionSeoMetaTagsInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsTwoColumnSectionUpdatedAtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetInternalInputObject_2 {
  type?: DatoCmsAssetInternalTypeQueryString_2 | null;
  contentDigest?: DatoCmsAssetInternalContentDigestQueryString_2 | null;
  owner?: DatoCmsAssetInternalOwnerQueryString_2 | null;
}

export interface DatoCmsAssetInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetFormatQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface DatoCmsAssetSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsAssetWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsAssetHeightQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface DatoCmsAssetUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ResolutionsTypeName_3 {
  base64?: ResolutionsBase64QueryString_3 | null;
  aspectRatio?: ResolutionsAspectRatioQueryFloat_3 | null;
  width?: ResolutionsWidthQueryFloat_3 | null;
  height?: ResolutionsHeightQueryFloat_3 | null;
  src?: ResolutionsSrcQueryString_3 | null;
  srcSet?: ResolutionsSrcSetQueryString_3 | null;
}

export interface ResolutionsBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface ResolutionsSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SizesTypeName_3 {
  base64?: SizesBase64QueryString_3 | null;
  aspectRatio?: SizesAspectRatioQueryFloat_3 | null;
  src?: SizesSrcQueryString_3 | null;
  srcSet?: SizesSrcSetQueryString_3 | null;
  sizes?: SizesSizesQueryString_3 | null;
}

export interface SizesBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface SizesSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SizesSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface SizesSizesQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface InlineSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FluidTypeName_3 {
  base64?: FluidBase64QueryString_3 | null;
  aspectRatio?: FluidAspectRatioQueryFloat_3 | null;
  src?: FluidSrcQueryString_3 | null;
  srcSet?: FluidSrcSetQueryString_3 | null;
  sizes?: FluidSizesQueryString_3 | null;
}

export interface FluidBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface FluidSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FluidSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FluidSizesQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FixedTypeName_3 {
  base64?: FixedBase64QueryString_3 | null;
  aspectRatio?: FixedAspectRatioQueryFloat_3 | null;
  width?: FixedWidthQueryFloat_3 | null;
  height?: FixedHeightQueryFloat_3 | null;
  src?: FixedSrcQueryString_3 | null;
  srcSet?: FixedSrcSetQueryString_3 | null;
}

export interface FixedBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface FixedWidthQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface FixedHeightQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}

export interface FixedSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}

export interface FixedSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
}
export interface AllSitePageQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: SitePageConnectionSort | null;
  filter?: FilterSitePage | null;
}
export interface AllSitePluginQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: SitePluginConnectionSort | null;
  filter?: FilterSitePlugin | null;
}
export interface AllArtistQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: ArtistConnectionSort | null;
  filter?: FilterArtist | null;
}
export interface AllRecordQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: RecordConnectionSort | null;
  filter?: FilterRecord | null;
}
export interface AllReviewQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: ReviewConnectionSort | null;
  filter?: FilterReview | null;
}
export interface AllReviewMarkdownQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: ReviewMarkdownConnectionSort | null;
  filter?: FilterReviewMarkdown | null;
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: MarkdownRemarkConnectionSort | null;
  filter?: FilterMarkdownRemark | null;
}
export interface AllDatoCmsFieldQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsFieldConnectionSort | null;
  filter?: FilterDatoCmsField | null;
}
export interface AllDatoCmsModelQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsModelConnectionSort | null;
  filter?: FilterDatoCmsModel | null;
}
export interface AllDatoCmsSeoMetaTagsQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsSeoMetaTagsConnectionSort | null;
  filter?: FilterDatoCmsSeoMetaTags | null;
}
export interface AllDatoCmsOneColumnSectionContentTextNodeQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsOneColumnSectionContentTextNodeConnectionSort | null;
  filter?: FilterDatoCmsOneColumnSectionContentTextNode | null;
}
export interface AllDatoCmsPriceQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsPriceConnectionSort | null;
  filter?: FilterDatoCmsPrice | null;
}
export interface AllDatoCmsWeekQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsWeekConnectionSort | null;
  filter?: FilterDatoCmsWeek | null;
}
export interface AllDatoCmsHomepageQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsHomepageConnectionSort | null;
  filter?: FilterDatoCmsHomepage | null;
}
export interface AllDatoCmsFullWidthImageQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsFullWidthImageConnectionSort | null;
  filter?: FilterDatoCmsFullWidthImage | null;
}
export interface AllDatoCmsOneColumnSectionQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsOneColumnSectionConnectionSort | null;
  filter?: FilterDatoCmsOneColumnSection | null;
}
export interface AllDatoCmsSiteQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsSiteConnectionSort | null;
  filter?: FilterDatoCmsSite | null;
}
export interface AllDatoCmsTwoColumnSectionFirstColumnContentTextNodeQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionSort | null;
  filter?: FilterDatoCmsTwoColumnSectionFirstColumnContentTextNode | null;
}
export interface AllDatoCmsTwoColumnSectionSecondColumnContentTextNodeQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSort | null;
  filter?: FilterDatoCmsTwoColumnSectionSecondColumnContentTextNode | null;
}
export interface AllDatoCmsTwoColumnSectionQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsTwoColumnSectionConnectionSort | null;
  filter?: FilterDatoCmsTwoColumnSection | null;
}
export interface AllDatoCmsAssetQueryArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: DatoCmsAssetConnectionSort | null;
  filter?: FilterDatoCmsAsset | null;
}
export interface SitePageQueryArgs {
  jsonName?: SitePageJsonNameQueryString | null;
  internalComponentName?: SitePageInternalComponentNameQueryString | null;
  path?: SitePagePathQueryString_2 | null;
  component?: SitePageComponentQueryString | null;
  componentChunkName?: SitePageComponentChunkNameQueryString | null;
  context?: SitePageContextInputObject | null;
  pluginCreator?: SitePagePluginCreatorInputObject | null;
  pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null;
  componentPath?: SitePageComponentPathQueryString | null;
  id?: SitePageIdQueryString_2 | null;
  internal?: SitePageInternalInputObject_2 | null;
}
export interface SitePluginQueryArgs {
  resolve?: SitePluginResolveQueryString_2 | null;
  id?: SitePluginIdQueryString_2 | null;
  name?: SitePluginNameQueryString_2 | null;
  version?: SitePluginVersionQueryString_2 | null;
  pluginOptions?: SitePluginPluginOptionsInputObject_2 | null;
  nodeAPIs?: SitePluginNodeApIsQueryList_2 | null;
  browserAPIs?: SitePluginBrowserApIsQueryList_2 | null;
  ssrAPIs?: SitePluginSsrApIsQueryList_2 | null;
  pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null;
  packageJson?: SitePluginPackageJsonInputObject_2 | null;
  internal?: SitePluginInternalInputObject_2 | null;
}
export interface SiteQueryArgs {
  siteMetadata?: SiteSiteMetadataInputObject_2 | null;
  port?: SitePortQueryString_2 | null;
  host?: SiteHostQueryString_2 | null;
  pathPrefix?: SitePathPrefixQueryString_2 | null;
  polyfill?: SitePolyfillQueryBoolean_2 | null;
  buildTime?: SiteBuildTimeQueryString_2 | null;
  id?: SiteIdQueryString_2 | null;
  internal?: SiteInternalInputObject_2 | null;
}
export interface ArtistQueryArgs {
  id?: ArtistIdQueryString_2 | null;
  name?: ArtistNameQueryString_2 | null;
  slug?: ArtistSlugQueryString_2 | null;
  picture?: ArtistPictureInputObject_2 | null;
  records?: ArtistRecordsQueryList_2 | null;
  internal?: ArtistInternalInputObject_2 | null;
}
export interface RecordQueryArgs {
  id?: RecordIdQueryString_2 | null;
  slug?: RecordSlugQueryString_2 | null;
  tracks?: RecordTracksQueryList_2 | null;
  cover?: RecordCoverInputObject_2 | null;
  artist?: RecordArtistInputObject_2 | null;
  reviews?: RecordReviewsQueryList_2 | null;
  createdAt?: RecordCreatedAtQueryString_2 | null;
  title?: RecordTitleQueryString_2 | null;
  internal?: RecordInternalInputObject_2 | null;
}
export interface ReviewQueryArgs {
  id?: ReviewIdQueryString_2 | null;
  review?: ReviewReviewQueryString_2 | null;
  slug?: ReviewSlugQueryString_2 | null;
  rating?: ReviewRatingQueryInteger_2 | null;
  createdAt?: ReviewCreatedAtQueryString_2 | null;
  title?: ReviewTitleQueryString_2 | null;
  record?: ReviewRecordInputObject_2 | null;
  comments?: ReviewCommentsQueryList_2 | null;
  internal?: ReviewInternalInputObject_2 | null;
}
export interface ReviewMarkdownQueryArgs {
  id?: ReviewMarkdownIdQueryString_2 | null;
  internal?: ReviewMarkdownInternalInputObject_2 | null;
}
export interface MarkdownRemarkQueryArgs {
  id?: MarkdownRemarkIdQueryString_2 | null;
  internal?: MarkdownRemarkInternalInputObject_2 | null;
  frontmatter?: MarkdownRemarkFrontmatterInputObject_2 | null;
  excerpt?: ExcerptQueryString_3 | null;
  rawMarkdownBody?: MarkdownRemarkRawMarkdownBodyQueryString_2 | null;
  html?: HtmlQueryString_3 | null;
  headings?: HeadingsQueryList_3 | null;
  timeToRead?: TimeToReadQueryInt_3 | null;
  tableOfContents?: TableOfContentsQueryString_3 | null;
  wordCount?: WordCountTypeName_3 | null;
}
export interface DatoCmsFieldQueryArgs {
  id?: DatoCmsFieldIdQueryString_2 | null;
  originalId?: DatoCmsFieldOriginalIdQueryString_2 | null;
  internal?: DatoCmsFieldInternalInputObject_2 | null;
  label?: DatoCmsFieldLabelQueryString_2 | null;
  fieldType?: DatoCmsFieldFieldTypeQueryString_2 | null;
  apiKey?: DatoCmsFieldApiKeyQueryString_2 | null;
  hint?: DatoCmsFieldHintQueryString_2 | null;
  localized?: DatoCmsFieldLocalizedQueryBoolean_2 | null;
  validators?: DatoCmsFieldValidatorsInputObject_2 | null;
  position?: DatoCmsFieldPositionQueryInteger_2 | null;
  appeareance?: DatoCmsFieldAppeareanceInputObject_2 | null;
}
export interface DatoCmsModelQueryArgs {
  id?: DatoCmsModelIdQueryString_2 | null;
  originalId?: DatoCmsModelOriginalIdQueryString_2 | null;
  internal?: DatoCmsModelInternalInputObject_2 | null;
  name?: DatoCmsModelNameQueryString_2 | null;
  singleton?: DatoCmsModelSingletonQueryBoolean_2 | null;
  sortable?: DatoCmsModelSortableQueryBoolean_2 | null;
  apiKey?: DatoCmsModelApiKeyQueryString_2 | null;
  tree?: DatoCmsModelTreeQueryBoolean_2 | null;
  modularBlock?: DatoCmsModelModularBlockQueryBoolean_2 | null;
  draftModeActive?: DatoCmsModelDraftModeActiveQueryBoolean_2 | null;
  allLocalesRequired?: DatoCmsModelAllLocalesRequiredQueryBoolean_2 | null;
  collectionAppeareance?: DatoCmsModelCollectionAppeareanceQueryString_2 | null;
  hasSingletonItem?: DatoCmsModelHasSingletonItemQueryBoolean_2 | null;
  fields?: DatoCmsModelFieldsQueryList_2 | null;
}
export interface DatoCmsSeoMetaTagsQueryArgs {
  id?: DatoCmsSeoMetaTagsIdQueryString_2 | null;
  tags?: DatoCmsSeoMetaTagsTagsQueryList_2 | null;
  internal?: DatoCmsSeoMetaTagsInternalInputObject_2 | null;
}
export interface DatoCmsOneColumnSectionContentTextNodeQueryArgs {
  id?: DatoCmsOneColumnSectionContentTextNodeIdQueryString_2 | null;
  content?: DatoCmsOneColumnSectionContentTextNodeContentQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionContentTextNodeInternalInputObject_2 | null;
}
export interface DatoCmsPriceQueryArgs {
  id?: DatoCmsPriceIdQueryString_2 | null;
  originalId?: DatoCmsPriceOriginalIdQueryString_2 | null;
  internal?: DatoCmsPriceInternalInputObject_2 | null;
  locale?: DatoCmsPriceLocaleQueryString_2 | null;
  model?: DatoCmsPriceModelInputObject_2 | null;
  title?: DatoCmsPriceTitleQueryString_2 | null;
  base?: DatoCmsPriceBaseQueryInteger_2 | null;
  isPriceDiscounted?: DatoCmsPriceIsPriceDiscountedQueryBoolean_2 | null;
  discount?: DatoCmsPriceDiscountQueryInteger_2 | null;
  discounted?: DatoCmsPriceDiscountedQueryInteger_2 | null;
  seoMetaTags?: DatoCmsPriceSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsPriceUpdatedAtQueryString_2 | null;
}
export interface DatoCmsWeekQueryArgs {
  id?: DatoCmsWeekIdQueryString_2 | null;
  originalId?: DatoCmsWeekOriginalIdQueryString_2 | null;
  internal?: DatoCmsWeekInternalInputObject_2 | null;
  locale?: DatoCmsWeekLocaleQueryString_2 | null;
  model?: DatoCmsWeekModelInputObject_2 | null;
  title?: DatoCmsWeekTitleQueryString_2 | null;
  startDate?: DatoCmsWeekStartDateQueryString_2 | null;
  endDate?: DatoCmsWeekEndDateQueryString_2 | null;
  price?: DatoCmsWeekPriceInputObject_2 | null;
  seoMetaTags?: DatoCmsWeekSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsWeekUpdatedAtQueryString_2 | null;
}
export interface DatoCmsHomepageQueryArgs {
  id?: DatoCmsHomepageIdQueryString_2 | null;
  originalId?: DatoCmsHomepageOriginalIdQueryString_2 | null;
  internal?: DatoCmsHomepageInternalInputObject_2 | null;
  locale?: DatoCmsHomepageLocaleQueryString_2 | null;
  model?: DatoCmsHomepageModelInputObject_2 | null;
  title?: DatoCmsHomepageTitleQueryString_2 | null;
  headerImage?: DatoCmsHomepageHeaderImageInputObject_2 | null;
  content?: DatoCmsHomepageContentQueryList_2 | null;
  seoMetaTags?: DatoCmsHomepageSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsHomepageUpdatedAtQueryString_2 | null;
}
export interface DatoCmsFullWidthImageQueryArgs {
  id?: DatoCmsFullWidthImageIdQueryString_2 | null;
  originalId?: DatoCmsFullWidthImageOriginalIdQueryString_2 | null;
  internal?: DatoCmsFullWidthImageInternalInputObject_2 | null;
  locale?: DatoCmsFullWidthImageLocaleQueryString_2 | null;
  model?: DatoCmsFullWidthImageModelInputObject_2 | null;
  image?: DatoCmsFullWidthImageImageInputObject_2 | null;
  seoMetaTags?: DatoCmsFullWidthImageSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsFullWidthImageUpdatedAtQueryString_2 | null;
}
export interface DatoCmsOneColumnSectionQueryArgs {
  id?: DatoCmsOneColumnSectionIdQueryString_2 | null;
  originalId?: DatoCmsOneColumnSectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsOneColumnSectionInternalInputObject_2 | null;
  locale?: DatoCmsOneColumnSectionLocaleQueryString_2 | null;
  model?: DatoCmsOneColumnSectionModelInputObject_2 | null;
  title?: DatoCmsOneColumnSectionTitleQueryString_2 | null;
  contentNode?: DatoCmsOneColumnSectionContentNodeInputObject_2 | null;
  content?: DatoCmsOneColumnSectionContentQueryString_2 | null;
  seoMetaTags?: DatoCmsOneColumnSectionSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsOneColumnSectionUpdatedAtQueryString_2 | null;
  headerImage?: DatoCmsOneColumnSectionHeaderImageInputObject_2 | null;
}
export interface DatoCmsSiteQueryArgs {
  id?: DatoCmsSiteIdQueryString_2 | null;
  name?: DatoCmsSiteNameQueryString_2 | null;
  locales?: DatoCmsSiteLocalesQueryList_2 | null;
  theme?: DatoCmsSiteThemeInputObject_2 | null;
  internalDomain?: DatoCmsSiteInternalDomainQueryString_2 | null;
  noIndex?: DatoCmsSiteNoIndexQueryBoolean_2 | null;
  originalId?: DatoCmsSiteOriginalIdQueryString_2 | null;
  internal?: DatoCmsSiteInternalInputObject_2 | null;
  locale?: DatoCmsSiteLocaleQueryString_2 | null;
}
export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeQueryArgs {
  id?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeIdQueryString_2 | null;
  firstColumnContent?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeFirstColumnContentQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalInputObject_2 | null;
}
export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeQueryArgs {
  id?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeIdQueryString_2 | null;
  secondColumnContent?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeSecondColumnContentQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalInputObject_2 | null;
}
export interface DatoCmsTwoColumnSectionQueryArgs {
  id?: DatoCmsTwoColumnSectionIdQueryString_2 | null;
  originalId?: DatoCmsTwoColumnSectionOriginalIdQueryString_2 | null;
  internal?: DatoCmsTwoColumnSectionInternalInputObject_2 | null;
  locale?: DatoCmsTwoColumnSectionLocaleQueryString_2 | null;
  model?: DatoCmsTwoColumnSectionModelInputObject_2 | null;
  title?: DatoCmsTwoColumnSectionTitleQueryString_2 | null;
  firstColumnContentNode?: DatoCmsTwoColumnSectionFirstColumnContentNodeInputObject_2 | null;
  firstColumnContent?: DatoCmsTwoColumnSectionFirstColumnContentQueryString_2 | null;
  secondColumnContentNode?: DatoCmsTwoColumnSectionSecondColumnContentNodeInputObject_2 | null;
  secondColumnContent?: DatoCmsTwoColumnSectionSecondColumnContentQueryString_2 | null;
  seoMetaTags?: DatoCmsTwoColumnSectionSeoMetaTagsInputObject_2 | null;
  updatedAt?: DatoCmsTwoColumnSectionUpdatedAtQueryString_2 | null;
}
export interface DatoCmsAssetQueryArgs {
  id?: DatoCmsAssetIdQueryString_2 | null;
  internal?: DatoCmsAssetInternalInputObject_2 | null;
  format?: DatoCmsAssetFormatQueryString_2 | null;
  size?: DatoCmsAssetSizeQueryInteger_2 | null;
  width?: DatoCmsAssetWidthQueryInteger_2 | null;
  height?: DatoCmsAssetHeightQueryInteger_2 | null;
  url?: DatoCmsAssetUrlQueryString_2 | null;
  resolutions?: ResolutionsTypeName_3 | null;
  sizes?: SizesTypeName_3 | null;
  inlineSvg?: InlineSvgQueryString_3 | null;
  fluid?: FluidTypeName_3 | null;
  fixed?: FixedTypeName_3 | null;
}
export interface DistinctSitePageConnectionArgs {
  field?: SitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: SitePageGroupEnum | null;
}
export interface DistinctSitePluginConnectionArgs {
  field?: SitePluginDistinctEnum | null;
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: SitePluginGroupEnum | null;
}
export interface DistinctArtistConnectionArgs {
  field?: ArtistDistinctEnum | null;
}
export interface GroupArtistConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: ArtistGroupEnum | null;
}
export interface DistinctRecordConnectionArgs {
  field?: RecordDistinctEnum | null;
}
export interface GroupRecordConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: RecordGroupEnum | null;
}
export interface CreatedAtRecordArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctReviewConnectionArgs {
  field?: ReviewDistinctEnum | null;
}
export interface GroupReviewConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: ReviewGroupEnum | null;
}
export interface CreatedAtReviewArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctReviewMarkdownConnectionArgs {
  field?: ReviewMarkdownDistinctEnum | null;
}
export interface GroupReviewMarkdownConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: ReviewMarkdownGroupEnum | null;
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null;
  truncate?: boolean | null;
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null;
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string | null;
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: MarkdownRemarkDistinctEnum | null;
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: MarkdownRemarkGroupEnum | null;
}
export interface DistinctDatoCmsFieldConnectionArgs {
  field?: DatoCmsFieldDistinctEnum | null;
}
export interface GroupDatoCmsFieldConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsFieldGroupEnum | null;
}
export interface DistinctDatoCmsModelConnectionArgs {
  field?: DatoCmsModelDistinctEnum | null;
}
export interface GroupDatoCmsModelConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsModelGroupEnum | null;
}
export interface DistinctDatoCmsSeoMetaTagsConnectionArgs {
  field?: DatoCmsSeoMetaTagsDistinctEnum | null;
}
export interface GroupDatoCmsSeoMetaTagsConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsSeoMetaTagsGroupEnum | null;
}
export interface DistinctDatoCmsOneColumnSectionContentTextNodeConnectionArgs {
  field?: DatoCmsOneColumnSectionContentTextNodeDistinctEnum | null;
}
export interface GroupDatoCmsOneColumnSectionContentTextNodeConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsOneColumnSectionContentTextNodeGroupEnum | null;
}
export interface DistinctDatoCmsPriceConnectionArgs {
  field?: DatoCmsPriceDistinctEnum | null;
}
export interface GroupDatoCmsPriceConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsPriceGroupEnum | null;
}
export interface UpdatedAtDatoCmsPriceArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctDatoCmsWeekConnectionArgs {
  field?: DatoCmsWeekDistinctEnum | null;
}
export interface GroupDatoCmsWeekConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsWeekGroupEnum | null;
}
export interface StartDateDatoCmsWeekArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface EndDateDatoCmsWeekArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedAtDatoCmsWeekArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctDatoCmsHomepageConnectionArgs {
  field?: DatoCmsHomepageDistinctEnum | null;
}
export interface GroupDatoCmsHomepageConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsHomepageGroupEnum | null;
}
export interface UpdatedAtDatoCmsHomepageArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface ResolutionsDatoCmsAssetArgs {
  width?: number | null;
  height?: number | null;
  imgixParams?: DatoCmsImgixParams | null;
}
export interface SizesDatoCmsAssetArgs {
  maxWidth?: number | null;
  maxHeight?: number | null;
  sizes?: string | null;
  imgixParams?: DatoCmsImgixParams | null;
}
export interface FluidDatoCmsAssetArgs {
  maxWidth?: number | null;
  maxHeight?: number | null;
  sizes?: string | null;
  imgixParams?: DatoCmsImgixParams | null;
}
export interface FixedDatoCmsAssetArgs {
  width?: number | null;
  height?: number | null;
  imgixParams?: DatoCmsImgixParams | null;
}
export interface UpdatedAtDatoCmsOneColumnSectionArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedAtDatoCmsTwoColumnSectionArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctDatoCmsFullWidthImageConnectionArgs {
  field?: DatoCmsFullWidthImageDistinctEnum | null;
}
export interface GroupDatoCmsFullWidthImageConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsFullWidthImageGroupEnum | null;
}
export interface UpdatedAtDatoCmsFullWidthImageArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctDatoCmsOneColumnSectionConnectionArgs {
  field?: DatoCmsOneColumnSectionDistinctEnum | null;
}
export interface GroupDatoCmsOneColumnSectionConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsOneColumnSectionGroupEnum | null;
}
export interface DistinctDatoCmsSiteConnectionArgs {
  field?: DatoCmsSiteDistinctEnum | null;
}
export interface GroupDatoCmsSiteConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsSiteGroupEnum | null;
}
export interface OriginalIdDatoCmsSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctDatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionArgs {
  field?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeDistinctEnum | null;
}
export interface GroupDatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupEnum | null;
}
export interface DistinctDatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionArgs {
  field?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeDistinctEnum | null;
}
export interface GroupDatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupEnum | null;
}
export interface DistinctDatoCmsTwoColumnSectionConnectionArgs {
  field?: DatoCmsTwoColumnSectionDistinctEnum | null;
}
export interface GroupDatoCmsTwoColumnSectionConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsTwoColumnSectionGroupEnum | null;
}
export interface DistinctDatoCmsAssetConnectionArgs {
  field?: DatoCmsAssetDistinctEnum | null;
}
export interface GroupDatoCmsAssetConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: DatoCmsAssetGroupEnum | null;
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  context___id = "context___id",
  context___mdid = "context___mdid",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum SitePageConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum SitePageDistinctEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  context___id = "context___id",
  context___mdid = "context___mdid",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum SitePageGroupEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  context___id = "context___id",
  context___mdid = "context___mdid",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___endpoint = "pluginOptions___endpoint",
  pluginOptions___query = "pluginOptions___query",
  pluginOptions___apiToken = "pluginOptions___apiToken",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___short_name = "pluginOptions___short_name",
  pluginOptions___start_url = "pluginOptions___start_url",
  pluginOptions___background_color = "pluginOptions___background_color",
  pluginOptions___theme_color = "pluginOptions___theme_color",
  pluginOptions___display = "pluginOptions___display",
  pluginOptions___icons = "pluginOptions___icons",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum SitePluginConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum SitePluginDistinctEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___endpoint = "pluginOptions___endpoint",
  pluginOptions___query = "pluginOptions___query",
  pluginOptions___apiToken = "pluginOptions___apiToken",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___short_name = "pluginOptions___short_name",
  pluginOptions___start_url = "pluginOptions___start_url",
  pluginOptions___background_color = "pluginOptions___background_color",
  pluginOptions___theme_color = "pluginOptions___theme_color",
  pluginOptions___display = "pluginOptions___display",
  pluginOptions___icons = "pluginOptions___icons",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum SitePluginGroupEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___endpoint = "pluginOptions___endpoint",
  pluginOptions___query = "pluginOptions___query",
  pluginOptions___apiToken = "pluginOptions___apiToken",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___short_name = "pluginOptions___short_name",
  pluginOptions___start_url = "pluginOptions___start_url",
  pluginOptions___background_color = "pluginOptions___background_color",
  pluginOptions___theme_color = "pluginOptions___theme_color",
  pluginOptions___display = "pluginOptions___display",
  pluginOptions___icons = "pluginOptions___icons",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum ArtistConnectionSortByFieldsEnum {
  id = "id",
  name = "name",
  slug = "slug",
  picture___id = "picture___id",
  picture___handle = "picture___handle",
  picture___width = "picture___width",
  picture___height = "picture___height",
  records = "records",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ArtistConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum ArtistDistinctEnum {
  id = "id",
  name = "name",
  slug = "slug",
  picture___id = "picture___id",
  picture___handle = "picture___handle",
  picture___width = "picture___width",
  picture___height = "picture___height",
  records = "records",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ArtistGroupEnum {
  id = "id",
  name = "name",
  slug = "slug",
  picture___id = "picture___id",
  picture___handle = "picture___handle",
  picture___width = "picture___width",
  picture___height = "picture___height",
  records = "records",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum RecordConnectionSortByFieldsEnum {
  id = "id",
  slug = "slug",
  tracks = "tracks",
  cover___handle = "cover___handle",
  artist___id = "artist___id",
  artist___slug = "artist___slug",
  artist___name = "artist___name",
  reviews = "reviews",
  createdAt = "createdAt",
  title = "title",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum RecordConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum RecordDistinctEnum {
  id = "id",
  slug = "slug",
  tracks = "tracks",
  cover___handle = "cover___handle",
  artist___id = "artist___id",
  artist___slug = "artist___slug",
  artist___name = "artist___name",
  reviews = "reviews",
  createdAt = "createdAt",
  title = "title",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum RecordGroupEnum {
  id = "id",
  slug = "slug",
  tracks = "tracks",
  cover___handle = "cover___handle",
  artist___id = "artist___id",
  artist___slug = "artist___slug",
  artist___name = "artist___name",
  reviews = "reviews",
  createdAt = "createdAt",
  title = "title",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ReviewConnectionSortByFieldsEnum {
  id = "id",
  review = "review",
  slug = "slug",
  rating = "rating",
  createdAt = "createdAt",
  title = "title",
  record___slug = "record___slug",
  record___title = "record___title",
  record___artist___slug = "record___artist___slug",
  record___artist___name = "record___artist___name",
  comments = "comments",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ReviewConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum ReviewDistinctEnum {
  id = "id",
  review = "review",
  slug = "slug",
  rating = "rating",
  createdAt = "createdAt",
  title = "title",
  record___slug = "record___slug",
  record___title = "record___title",
  record___artist___slug = "record___artist___slug",
  record___artist___name = "record___artist___name",
  comments = "comments",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ReviewGroupEnum {
  id = "id",
  review = "review",
  slug = "slug",
  rating = "rating",
  createdAt = "createdAt",
  title = "title",
  record___slug = "record___slug",
  record___title = "record___title",
  record___artist___slug = "record___artist___slug",
  record___artist___name = "record___artist___name",
  comments = "comments",
  parent = "parent",
  internal___type = "internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ReviewMarkdownConnectionSortByFieldsEnum {
  id = "id",
  parent = "parent",
  children = "children",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ReviewMarkdownConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum HeadingLevels {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6"
}

export enum ReviewMarkdownDistinctEnum {
  id = "id",
  parent = "parent",
  children = "children",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ReviewMarkdownGroupEnum {
  id = "id",
  parent = "parent",
  children = "children",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  id = "id",
  parent = "parent",
  internal___content = "internal___content",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  frontmatter___title = "frontmatter___title",
  frontmatter____PARENT = "frontmatter____PARENT",
  excerpt = "excerpt",
  rawMarkdownBody = "rawMarkdownBody",
  html = "html",
  headings = "headings",
  timeToRead = "timeToRead",
  tableOfContents = "tableOfContents",
  wordCount___paragraphs = "wordCount___paragraphs",
  wordCount___sentences = "wordCount___sentences",
  wordCount___words = "wordCount___words"
}

export enum MarkdownRemarkConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum MarkdownRemarkDistinctEnum {
  id = "id",
  parent = "parent",
  internal___content = "internal___content",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  frontmatter___title = "frontmatter___title",
  frontmatter____PARENT = "frontmatter____PARENT",
  excerpt = "excerpt",
  rawMarkdownBody = "rawMarkdownBody"
}

export enum MarkdownRemarkGroupEnum {
  id = "id",
  parent = "parent",
  internal___content = "internal___content",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  frontmatter___title = "frontmatter___title",
  frontmatter____PARENT = "frontmatter____PARENT",
  excerpt = "excerpt",
  rawMarkdownBody = "rawMarkdownBody"
}

export enum DatoCmsFieldConnectionSortByFieldsEnum {
  id = "id",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  label = "label",
  fieldType = "fieldType",
  apiKey = "apiKey",
  hint = "hint",
  localized = "localized",
  validators___itemItemType___itemTypes = "validators___itemItemType___itemTypes",
  validators___numberRange___min = "validators___numberRange___min",
  validators___richTextBlocks___itemTypes = "validators___richTextBlocks___itemTypes",
  validators___extension___predefinedList = "validators___extension___predefinedList",
  position = "position",
  appeareance___editor = "appeareance___editor",
  appeareance___parameters___heading = "appeareance___parameters___heading",
  appeareance___parameters___startCollapsed = "appeareance___parameters___startCollapsed",
  appeareance___parameters___toolbar = "appeareance___parameters___toolbar",
  appeareance___addons = "appeareance___addons",
  appeareance___type = "appeareance___type",
  defaultValue = "defaultValue"
}

export enum DatoCmsFieldConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsFieldDistinctEnum {
  id = "id",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  label = "label",
  fieldType = "fieldType",
  apiKey = "apiKey",
  hint = "hint",
  localized = "localized",
  validators___itemItemType___itemTypes = "validators___itemItemType___itemTypes",
  validators___numberRange___min = "validators___numberRange___min",
  validators___richTextBlocks___itemTypes = "validators___richTextBlocks___itemTypes",
  validators___extension___predefinedList = "validators___extension___predefinedList",
  position = "position",
  appeareance___editor = "appeareance___editor",
  appeareance___parameters___heading = "appeareance___parameters___heading",
  appeareance___parameters___startCollapsed = "appeareance___parameters___startCollapsed",
  appeareance___parameters___toolbar = "appeareance___parameters___toolbar",
  appeareance___addons = "appeareance___addons",
  appeareance___type = "appeareance___type",
  defaultValue = "defaultValue"
}

export enum DatoCmsFieldGroupEnum {
  id = "id",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  label = "label",
  fieldType = "fieldType",
  apiKey = "apiKey",
  hint = "hint",
  localized = "localized",
  validators___itemItemType___itemTypes = "validators___itemItemType___itemTypes",
  validators___numberRange___min = "validators___numberRange___min",
  validators___richTextBlocks___itemTypes = "validators___richTextBlocks___itemTypes",
  validators___extension___predefinedList = "validators___extension___predefinedList",
  position = "position",
  appeareance___editor = "appeareance___editor",
  appeareance___parameters___heading = "appeareance___parameters___heading",
  appeareance___parameters___startCollapsed = "appeareance___parameters___startCollapsed",
  appeareance___parameters___toolbar = "appeareance___parameters___toolbar",
  appeareance___addons = "appeareance___addons",
  appeareance___type = "appeareance___type",
  defaultValue = "defaultValue"
}

export enum DatoCmsModelConnectionSortByFieldsEnum {
  id = "id",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  name = "name",
  singleton = "singleton",
  sortable = "sortable",
  apiKey = "apiKey",
  tree = "tree",
  modularBlock = "modularBlock",
  draftModeActive = "draftModeActive",
  allLocalesRequired = "allLocalesRequired",
  collectionAppeareance = "collectionAppeareance",
  hasSingletonItem = "hasSingletonItem",
  fields___NODE = "fields___NODE"
}

export enum DatoCmsModelConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsModelDistinctEnum {
  id = "id",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  name = "name",
  singleton = "singleton",
  sortable = "sortable",
  apiKey = "apiKey",
  tree = "tree",
  modularBlock = "modularBlock",
  draftModeActive = "draftModeActive",
  allLocalesRequired = "allLocalesRequired",
  collectionAppeareance = "collectionAppeareance",
  hasSingletonItem = "hasSingletonItem",
  fields___NODE = "fields___NODE"
}

export enum DatoCmsModelGroupEnum {
  id = "id",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  name = "name",
  singleton = "singleton",
  sortable = "sortable",
  apiKey = "apiKey",
  tree = "tree",
  modularBlock = "modularBlock",
  draftModeActive = "draftModeActive",
  allLocalesRequired = "allLocalesRequired",
  collectionAppeareance = "collectionAppeareance",
  hasSingletonItem = "hasSingletonItem",
  fields___NODE = "fields___NODE"
}

export enum DatoCmsSeoMetaTagsConnectionSortByFieldsEnum {
  id = "id",
  parent = "parent",
  tags = "tags",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsSeoMetaTagsConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsSeoMetaTagsDistinctEnum {
  id = "id",
  parent = "parent",
  tags = "tags",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsSeoMetaTagsGroupEnum {
  id = "id",
  parent = "parent",
  tags = "tags",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsOneColumnSectionContentTextNodeConnectionSortByFieldsEnum {
  id = "id",
  parent = "parent",
  children = "children",
  content = "content",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsOneColumnSectionContentTextNodeConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsOneColumnSectionContentTextNodeDistinctEnum {
  id = "id",
  parent = "parent",
  children = "children",
  content = "content",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsOneColumnSectionContentTextNodeGroupEnum {
  id = "id",
  parent = "parent",
  children = "children",
  content = "content",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsPriceConnectionSortByFieldsEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  base = "base",
  isPriceDiscounted = "isPriceDiscounted",
  discount = "discount",
  discounted = "discounted",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsPriceConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsPriceDistinctEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  base = "base",
  isPriceDiscounted = "isPriceDiscounted",
  discount = "discount",
  discounted = "discounted",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsPriceGroupEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  base = "base",
  isPriceDiscounted = "isPriceDiscounted",
  discount = "discount",
  discounted = "discounted",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsWeekConnectionSortByFieldsEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  startDate = "startDate",
  endDate = "endDate",
  price___NODE = "price___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsWeekConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsWeekDistinctEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  startDate = "startDate",
  endDate = "endDate",
  price___NODE = "price___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsWeekGroupEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  startDate = "startDate",
  endDate = "endDate",
  price___NODE = "price___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsHomepageConnectionSortByFieldsEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  headerImage___NODE = "headerImage___NODE",
  content___NODE = "content___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsHomepageConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsHomepageDistinctEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  headerImage___NODE = "headerImage___NODE",
  content___NODE = "content___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsHomepageGroupEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  headerImage___NODE = "headerImage___NODE",
  content___NODE = "content___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsFullWidthImageConnectionSortByFieldsEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  image___NODE = "image___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsFullWidthImageConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsFullWidthImageDistinctEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  image___NODE = "image___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsFullWidthImageGroupEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  image___NODE = "image___NODE",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsOneColumnSectionConnectionSortByFieldsEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  contentNode___NODE = "contentNode___NODE",
  content = "content",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt",
  headerImage___NODE = "headerImage___NODE"
}

export enum DatoCmsOneColumnSectionConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsOneColumnSectionDistinctEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  contentNode___NODE = "contentNode___NODE",
  content = "content",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt",
  headerImage___NODE = "headerImage___NODE"
}

export enum DatoCmsOneColumnSectionGroupEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  contentNode___NODE = "contentNode___NODE",
  content = "content",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt",
  headerImage___NODE = "headerImage___NODE"
}

export enum DatoCmsSiteConnectionSortByFieldsEnum {
  id = "id",
  name = "name",
  locales = "locales",
  theme___primaryColor___red = "theme___primaryColor___red",
  theme___primaryColor___blue = "theme___primaryColor___blue",
  theme___primaryColor___alpha = "theme___primaryColor___alpha",
  theme___primaryColor___green = "theme___primaryColor___green",
  theme___lightColor___red = "theme___lightColor___red",
  theme___lightColor___blue = "theme___lightColor___blue",
  theme___lightColor___alpha = "theme___lightColor___alpha",
  theme___lightColor___green = "theme___lightColor___green",
  theme___darkColor___red = "theme___darkColor___red",
  theme___darkColor___blue = "theme___darkColor___blue",
  theme___darkColor___alpha = "theme___darkColor___alpha",
  theme___darkColor___green = "theme___darkColor___green",
  theme___accentColor___red = "theme___accentColor___red",
  theme___accentColor___blue = "theme___accentColor___blue",
  theme___accentColor___alpha = "theme___accentColor___alpha",
  theme___accentColor___green = "theme___accentColor___green",
  internalDomain = "internalDomain",
  noIndex = "noIndex",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale"
}

export enum DatoCmsSiteConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsSiteDistinctEnum {
  id = "id",
  name = "name",
  locales = "locales",
  theme___primaryColor___red = "theme___primaryColor___red",
  theme___primaryColor___blue = "theme___primaryColor___blue",
  theme___primaryColor___alpha = "theme___primaryColor___alpha",
  theme___primaryColor___green = "theme___primaryColor___green",
  theme___lightColor___red = "theme___lightColor___red",
  theme___lightColor___blue = "theme___lightColor___blue",
  theme___lightColor___alpha = "theme___lightColor___alpha",
  theme___lightColor___green = "theme___lightColor___green",
  theme___darkColor___red = "theme___darkColor___red",
  theme___darkColor___blue = "theme___darkColor___blue",
  theme___darkColor___alpha = "theme___darkColor___alpha",
  theme___darkColor___green = "theme___darkColor___green",
  theme___accentColor___red = "theme___accentColor___red",
  theme___accentColor___blue = "theme___accentColor___blue",
  theme___accentColor___alpha = "theme___accentColor___alpha",
  theme___accentColor___green = "theme___accentColor___green",
  internalDomain = "internalDomain",
  noIndex = "noIndex",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale"
}

export enum DatoCmsSiteGroupEnum {
  id = "id",
  name = "name",
  locales = "locales",
  theme___primaryColor___red = "theme___primaryColor___red",
  theme___primaryColor___blue = "theme___primaryColor___blue",
  theme___primaryColor___alpha = "theme___primaryColor___alpha",
  theme___primaryColor___green = "theme___primaryColor___green",
  theme___lightColor___red = "theme___lightColor___red",
  theme___lightColor___blue = "theme___lightColor___blue",
  theme___lightColor___alpha = "theme___lightColor___alpha",
  theme___lightColor___green = "theme___lightColor___green",
  theme___darkColor___red = "theme___darkColor___red",
  theme___darkColor___blue = "theme___darkColor___blue",
  theme___darkColor___alpha = "theme___darkColor___alpha",
  theme___darkColor___green = "theme___darkColor___green",
  theme___accentColor___red = "theme___accentColor___red",
  theme___accentColor___blue = "theme___accentColor___blue",
  theme___accentColor___alpha = "theme___accentColor___alpha",
  theme___accentColor___green = "theme___accentColor___green",
  internalDomain = "internalDomain",
  noIndex = "noIndex",
  originalId = "originalId",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale"
}

export enum DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionSortByFieldsEnum {
  id = "id",
  parent = "parent",
  children = "children",
  firstColumnContent = "firstColumnContent",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsTwoColumnSectionFirstColumnContentTextNodeDistinctEnum {
  id = "id",
  parent = "parent",
  children = "children",
  firstColumnContent = "firstColumnContent",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupEnum {
  id = "id",
  parent = "parent",
  children = "children",
  firstColumnContent = "firstColumnContent",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSortByFieldsEnum {
  id = "id",
  parent = "parent",
  children = "children",
  secondColumnContent = "secondColumnContent",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsTwoColumnSectionSecondColumnContentTextNodeDistinctEnum {
  id = "id",
  parent = "parent",
  children = "children",
  secondColumnContent = "secondColumnContent",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupEnum {
  id = "id",
  parent = "parent",
  children = "children",
  secondColumnContent = "secondColumnContent",
  internal___type = "internal___type",
  internal___mediaType = "internal___mediaType",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum DatoCmsTwoColumnSectionConnectionSortByFieldsEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  firstColumnContentNode___NODE = "firstColumnContentNode___NODE",
  firstColumnContent = "firstColumnContent",
  secondColumnContentNode___NODE = "secondColumnContentNode___NODE",
  secondColumnContent = "secondColumnContent",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsTwoColumnSectionConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsTwoColumnSectionDistinctEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  firstColumnContentNode___NODE = "firstColumnContentNode___NODE",
  firstColumnContent = "firstColumnContent",
  secondColumnContentNode___NODE = "secondColumnContentNode___NODE",
  secondColumnContent = "secondColumnContent",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsTwoColumnSectionGroupEnum {
  id = "id",
  originalId = "originalId",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  locale = "locale",
  model___NODE = "model___NODE",
  title = "title",
  firstColumnContentNode___NODE = "firstColumnContentNode___NODE",
  firstColumnContent = "firstColumnContent",
  secondColumnContentNode___NODE = "secondColumnContentNode___NODE",
  secondColumnContent = "secondColumnContent",
  seoMetaTags___NODE = "seoMetaTags___NODE",
  updatedAt = "updatedAt"
}

export enum DatoCmsAssetConnectionSortByFieldsEnum {
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  format = "format",
  size = "size",
  width = "width",
  height = "height",
  url = "url",
  resolutions___base64 = "resolutions___base64",
  resolutions___aspectRatio = "resolutions___aspectRatio",
  resolutions___width = "resolutions___width",
  resolutions___height = "resolutions___height",
  resolutions___src = "resolutions___src",
  resolutions___srcSet = "resolutions___srcSet",
  sizes___base64 = "sizes___base64",
  sizes___aspectRatio = "sizes___aspectRatio",
  sizes___src = "sizes___src",
  sizes___srcSet = "sizes___srcSet",
  sizes___sizes = "sizes___sizes",
  inlineSvg = "inlineSvg",
  fluid___base64 = "fluid___base64",
  fluid___aspectRatio = "fluid___aspectRatio",
  fluid___src = "fluid___src",
  fluid___srcSet = "fluid___srcSet",
  fluid___sizes = "fluid___sizes",
  fixed___base64 = "fixed___base64",
  fixed___aspectRatio = "fixed___aspectRatio",
  fixed___width = "fixed___width",
  fixed___height = "fixed___height",
  fixed___src = "fixed___src",
  fixed___srcSet = "fixed___srcSet"
}

export enum DatoCmsAssetConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum DatoCmsAssetDistinctEnum {
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  format = "format",
  size = "size",
  width = "width",
  height = "height",
  url = "url"
}

export enum DatoCmsAssetGroupEnum {
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  format = "format",
  size = "size",
  width = "width",
  height = "height",
  url = "url"
}
/** Union interface for the field "content___NODE" for types [DatoCmsOneColumnSection, DatoCmsTwoColumnSection] */
export type UnionContentNode_2 =
  | DatoCmsOneColumnSection
  | DatoCmsTwoColumnSection;

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    allSitePage?: AllSitePageResolver<
      SitePageConnection | null,
      any,
      Context
    > /** Connection to all SitePage nodes */;
    allSitePlugin?: AllSitePluginResolver<
      SitePluginConnection | null,
      any,
      Context
    > /** Connection to all SitePlugin nodes */;
    allArtist?: AllArtistResolver<
      ArtistConnection | null,
      any,
      Context
    > /** Connection to all Artist nodes */;
    allRecord?: AllRecordResolver<
      RecordConnection | null,
      any,
      Context
    > /** Connection to all Record nodes */;
    allReview?: AllReviewResolver<
      ReviewConnection | null,
      any,
      Context
    > /** Connection to all Review nodes */;
    allReviewMarkdown?: AllReviewMarkdownResolver<
      ReviewMarkdownConnection | null,
      any,
      Context
    > /** Connection to all ReviewMarkdown nodes */;
    allMarkdownRemark?: AllMarkdownRemarkResolver<
      MarkdownRemarkConnection | null,
      any,
      Context
    > /** Connection to all MarkdownRemark nodes */;
    allDatoCmsField?: AllDatoCmsFieldResolver<
      DatoCmsFieldConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsField nodes */;
    allDatoCmsModel?: AllDatoCmsModelResolver<
      DatoCmsModelConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsModel nodes */;
    allDatoCmsSeoMetaTags?: AllDatoCmsSeoMetaTagsResolver<
      DatoCmsSeoMetaTagsConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsSeoMetaTags nodes */;
    allDatoCmsOneColumnSectionContentTextNode?: AllDatoCmsOneColumnSectionContentTextNodeResolver<
      DatoCmsOneColumnSectionContentTextNodeConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsOneColumnSectionContentTextNode nodes */;
    allDatoCmsPrice?: AllDatoCmsPriceResolver<
      DatoCmsPriceConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsPrice nodes */;
    allDatoCmsWeek?: AllDatoCmsWeekResolver<
      DatoCmsWeekConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsWeek nodes */;
    allDatoCmsHomepage?: AllDatoCmsHomepageResolver<
      DatoCmsHomepageConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsHomepage nodes */;
    allDatoCmsFullWidthImage?: AllDatoCmsFullWidthImageResolver<
      DatoCmsFullWidthImageConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsFullWidthImage nodes */;
    allDatoCmsOneColumnSection?: AllDatoCmsOneColumnSectionResolver<
      DatoCmsOneColumnSectionConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsOneColumnSection nodes */;
    allDatoCmsSite?: AllDatoCmsSiteResolver<
      DatoCmsSiteConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsSite nodes */;
    allDatoCmsTwoColumnSectionFirstColumnContentTextNode?: AllDatoCmsTwoColumnSectionFirstColumnContentTextNodeResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsTwoColumnSectionFirstColumnContentTextNode nodes */;
    allDatoCmsTwoColumnSectionSecondColumnContentTextNode?: AllDatoCmsTwoColumnSectionSecondColumnContentTextNodeResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsTwoColumnSectionSecondColumnContentTextNode nodes */;
    allDatoCmsTwoColumnSection?: AllDatoCmsTwoColumnSectionResolver<
      DatoCmsTwoColumnSectionConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsTwoColumnSection nodes */;
    allDatoCmsAsset?: AllDatoCmsAssetResolver<
      DatoCmsAssetConnection | null,
      any,
      Context
    > /** Connection to all DatoCmsAsset nodes */;
    sitePage?: SitePageResolver<SitePage | null, any, Context>;
    sitePlugin?: SitePluginResolver<SitePlugin | null, any, Context>;
    site?: SiteResolver<Site | null, any, Context>;
    artist?: ArtistResolver<Artist | null, any, Context>;
    record?: RecordResolver<Record | null, any, Context>;
    review?: ReviewResolver<Review | null, any, Context>;
    reviewMarkdown?: ReviewMarkdownResolver<
      ReviewMarkdown | null,
      any,
      Context
    >;
    markdownRemark?: MarkdownRemarkResolver<
      MarkdownRemark | null,
      any,
      Context
    >;
    datoCmsField?: DatoCmsFieldResolver<DatoCmsField | null, any, Context>;
    datoCmsModel?: DatoCmsModelResolver<DatoCmsModel | null, any, Context>;
    datoCmsSeoMetaTags?: DatoCmsSeoMetaTagsResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    >;
    datoCmsOneColumnSectionContentTextNode?: DatoCmsOneColumnSectionContentTextNodeResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    >;
    datoCmsPrice?: DatoCmsPriceResolver<DatoCmsPrice | null, any, Context>;
    datoCmsWeek?: DatoCmsWeekResolver<DatoCmsWeek | null, any, Context>;
    datoCmsHomepage?: DatoCmsHomepageResolver<
      DatoCmsHomepage | null,
      any,
      Context
    >;
    datoCmsFullWidthImage?: DatoCmsFullWidthImageResolver<
      DatoCmsFullWidthImage | null,
      any,
      Context
    >;
    datoCmsOneColumnSection?: DatoCmsOneColumnSectionResolver<
      DatoCmsOneColumnSection | null,
      any,
      Context
    >;
    datoCmsSite?: DatoCmsSiteResolver<DatoCmsSite | null, any, Context>;
    datoCmsTwoColumnSectionFirstColumnContentTextNode?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    >;
    datoCmsTwoColumnSectionSecondColumnContentTextNode?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    >;
    datoCmsTwoColumnSection?: DatoCmsTwoColumnSectionResolver<
      DatoCmsTwoColumnSection | null,
      any,
      Context
    >;
    datoCmsAsset?: DatoCmsAssetResolver<DatoCmsAsset | null, any, Context>;
  }

  export type AllSitePageResolver<
    R = SitePageConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSitePageArgs>;
  export interface AllSitePageArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: SitePageConnectionSort | null;
    filter?: FilterSitePage | null;
  }

  export type AllSitePluginResolver<
    R = SitePluginConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSitePluginArgs>;
  export interface AllSitePluginArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: SitePluginConnectionSort | null;
    filter?: FilterSitePlugin | null;
  }

  export type AllArtistResolver<
    R = ArtistConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllArtistArgs>;
  export interface AllArtistArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: ArtistConnectionSort | null;
    filter?: FilterArtist | null;
  }

  export type AllRecordResolver<
    R = RecordConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllRecordArgs>;
  export interface AllRecordArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: RecordConnectionSort | null;
    filter?: FilterRecord | null;
  }

  export type AllReviewResolver<
    R = ReviewConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllReviewArgs>;
  export interface AllReviewArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: ReviewConnectionSort | null;
    filter?: FilterReview | null;
  }

  export type AllReviewMarkdownResolver<
    R = ReviewMarkdownConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllReviewMarkdownArgs>;
  export interface AllReviewMarkdownArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: ReviewMarkdownConnectionSort | null;
    filter?: FilterReviewMarkdown | null;
  }

  export type AllMarkdownRemarkResolver<
    R = MarkdownRemarkConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllMarkdownRemarkArgs>;
  export interface AllMarkdownRemarkArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: MarkdownRemarkConnectionSort | null;
    filter?: FilterMarkdownRemark | null;
  }

  export type AllDatoCmsFieldResolver<
    R = DatoCmsFieldConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsFieldArgs>;
  export interface AllDatoCmsFieldArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsFieldConnectionSort | null;
    filter?: FilterDatoCmsField | null;
  }

  export type AllDatoCmsModelResolver<
    R = DatoCmsModelConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsModelArgs>;
  export interface AllDatoCmsModelArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsModelConnectionSort | null;
    filter?: FilterDatoCmsModel | null;
  }

  export type AllDatoCmsSeoMetaTagsResolver<
    R = DatoCmsSeoMetaTagsConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsSeoMetaTagsArgs>;
  export interface AllDatoCmsSeoMetaTagsArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsSeoMetaTagsConnectionSort | null;
    filter?: FilterDatoCmsSeoMetaTags | null;
  }

  export type AllDatoCmsOneColumnSectionContentTextNodeResolver<
    R = DatoCmsOneColumnSectionContentTextNodeConnection | null,
    Parent = any,
    Context = any
  > = Resolver<
    R,
    Parent,
    Context,
    AllDatoCmsOneColumnSectionContentTextNodeArgs
  >;
  export interface AllDatoCmsOneColumnSectionContentTextNodeArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsOneColumnSectionContentTextNodeConnectionSort | null;
    filter?: FilterDatoCmsOneColumnSectionContentTextNode | null;
  }

  export type AllDatoCmsPriceResolver<
    R = DatoCmsPriceConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsPriceArgs>;
  export interface AllDatoCmsPriceArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsPriceConnectionSort | null;
    filter?: FilterDatoCmsPrice | null;
  }

  export type AllDatoCmsWeekResolver<
    R = DatoCmsWeekConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsWeekArgs>;
  export interface AllDatoCmsWeekArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsWeekConnectionSort | null;
    filter?: FilterDatoCmsWeek | null;
  }

  export type AllDatoCmsHomepageResolver<
    R = DatoCmsHomepageConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsHomepageArgs>;
  export interface AllDatoCmsHomepageArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsHomepageConnectionSort | null;
    filter?: FilterDatoCmsHomepage | null;
  }

  export type AllDatoCmsFullWidthImageResolver<
    R = DatoCmsFullWidthImageConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsFullWidthImageArgs>;
  export interface AllDatoCmsFullWidthImageArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsFullWidthImageConnectionSort | null;
    filter?: FilterDatoCmsFullWidthImage | null;
  }

  export type AllDatoCmsOneColumnSectionResolver<
    R = DatoCmsOneColumnSectionConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsOneColumnSectionArgs>;
  export interface AllDatoCmsOneColumnSectionArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsOneColumnSectionConnectionSort | null;
    filter?: FilterDatoCmsOneColumnSection | null;
  }

  export type AllDatoCmsSiteResolver<
    R = DatoCmsSiteConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsSiteArgs>;
  export interface AllDatoCmsSiteArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsSiteConnectionSort | null;
    filter?: FilterDatoCmsSite | null;
  }

  export type AllDatoCmsTwoColumnSectionFirstColumnContentTextNodeResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnection | null,
    Parent = any,
    Context = any
  > = Resolver<
    R,
    Parent,
    Context,
    AllDatoCmsTwoColumnSectionFirstColumnContentTextNodeArgs
  >;
  export interface AllDatoCmsTwoColumnSectionFirstColumnContentTextNodeArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionSort | null;
    filter?: FilterDatoCmsTwoColumnSectionFirstColumnContentTextNode | null;
  }

  export type AllDatoCmsTwoColumnSectionSecondColumnContentTextNodeResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnection | null,
    Parent = any,
    Context = any
  > = Resolver<
    R,
    Parent,
    Context,
    AllDatoCmsTwoColumnSectionSecondColumnContentTextNodeArgs
  >;
  export interface AllDatoCmsTwoColumnSectionSecondColumnContentTextNodeArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionSort | null;
    filter?: FilterDatoCmsTwoColumnSectionSecondColumnContentTextNode | null;
  }

  export type AllDatoCmsTwoColumnSectionResolver<
    R = DatoCmsTwoColumnSectionConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsTwoColumnSectionArgs>;
  export interface AllDatoCmsTwoColumnSectionArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsTwoColumnSectionConnectionSort | null;
    filter?: FilterDatoCmsTwoColumnSection | null;
  }

  export type AllDatoCmsAssetResolver<
    R = DatoCmsAssetConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDatoCmsAssetArgs>;
  export interface AllDatoCmsAssetArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: DatoCmsAssetConnectionSort | null;
    filter?: FilterDatoCmsAsset | null;
  }

  export type SitePageResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SitePageArgs>;
  export interface SitePageArgs {
    jsonName?: SitePageJsonNameQueryString | null;
    internalComponentName?: SitePageInternalComponentNameQueryString | null;
    path?: SitePagePathQueryString_2 | null;
    component?: SitePageComponentQueryString | null;
    componentChunkName?: SitePageComponentChunkNameQueryString | null;
    context?: SitePageContextInputObject | null;
    pluginCreator?: SitePagePluginCreatorInputObject | null;
    pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null;
    componentPath?: SitePageComponentPathQueryString | null;
    id?: SitePageIdQueryString_2 | null;
    internal?: SitePageInternalInputObject_2 | null;
  }

  export type SitePluginResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SitePluginArgs>;
  export interface SitePluginArgs {
    resolve?: SitePluginResolveQueryString_2 | null;
    id?: SitePluginIdQueryString_2 | null;
    name?: SitePluginNameQueryString_2 | null;
    version?: SitePluginVersionQueryString_2 | null;
    pluginOptions?: SitePluginPluginOptionsInputObject_2 | null;
    nodeAPIs?: SitePluginNodeApIsQueryList_2 | null;
    browserAPIs?: SitePluginBrowserApIsQueryList_2 | null;
    ssrAPIs?: SitePluginSsrApIsQueryList_2 | null;
    pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null;
    packageJson?: SitePluginPackageJsonInputObject_2 | null;
    internal?: SitePluginInternalInputObject_2 | null;
  }

  export type SiteResolver<
    R = Site | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SiteArgs>;
  export interface SiteArgs {
    siteMetadata?: SiteSiteMetadataInputObject_2 | null;
    port?: SitePortQueryString_2 | null;
    host?: SiteHostQueryString_2 | null;
    pathPrefix?: SitePathPrefixQueryString_2 | null;
    polyfill?: SitePolyfillQueryBoolean_2 | null;
    buildTime?: SiteBuildTimeQueryString_2 | null;
    id?: SiteIdQueryString_2 | null;
    internal?: SiteInternalInputObject_2 | null;
  }

  export type ArtistResolver<
    R = Artist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ArtistArgs>;
  export interface ArtistArgs {
    id?: ArtistIdQueryString_2 | null;
    name?: ArtistNameQueryString_2 | null;
    slug?: ArtistSlugQueryString_2 | null;
    picture?: ArtistPictureInputObject_2 | null;
    records?: ArtistRecordsQueryList_2 | null;
    internal?: ArtistInternalInputObject_2 | null;
  }

  export type RecordResolver<
    R = Record | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RecordArgs>;
  export interface RecordArgs {
    id?: RecordIdQueryString_2 | null;
    slug?: RecordSlugQueryString_2 | null;
    tracks?: RecordTracksQueryList_2 | null;
    cover?: RecordCoverInputObject_2 | null;
    artist?: RecordArtistInputObject_2 | null;
    reviews?: RecordReviewsQueryList_2 | null;
    createdAt?: RecordCreatedAtQueryString_2 | null;
    title?: RecordTitleQueryString_2 | null;
    internal?: RecordInternalInputObject_2 | null;
  }

  export type ReviewResolver<
    R = Review | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReviewArgs>;
  export interface ReviewArgs {
    id?: ReviewIdQueryString_2 | null;
    review?: ReviewReviewQueryString_2 | null;
    slug?: ReviewSlugQueryString_2 | null;
    rating?: ReviewRatingQueryInteger_2 | null;
    createdAt?: ReviewCreatedAtQueryString_2 | null;
    title?: ReviewTitleQueryString_2 | null;
    record?: ReviewRecordInputObject_2 | null;
    comments?: ReviewCommentsQueryList_2 | null;
    internal?: ReviewInternalInputObject_2 | null;
  }

  export type ReviewMarkdownResolver<
    R = ReviewMarkdown | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ReviewMarkdownArgs>;
  export interface ReviewMarkdownArgs {
    id?: ReviewMarkdownIdQueryString_2 | null;
    internal?: ReviewMarkdownInternalInputObject_2 | null;
  }

  export type MarkdownRemarkResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MarkdownRemarkArgs>;
  export interface MarkdownRemarkArgs {
    id?: MarkdownRemarkIdQueryString_2 | null;
    internal?: MarkdownRemarkInternalInputObject_2 | null;
    frontmatter?: MarkdownRemarkFrontmatterInputObject_2 | null;
    excerpt?: ExcerptQueryString_3 | null;
    rawMarkdownBody?: MarkdownRemarkRawMarkdownBodyQueryString_2 | null;
    html?: HtmlQueryString_3 | null;
    headings?: HeadingsQueryList_3 | null;
    timeToRead?: TimeToReadQueryInt_3 | null;
    tableOfContents?: TableOfContentsQueryString_3 | null;
    wordCount?: WordCountTypeName_3 | null;
  }

  export type DatoCmsFieldResolver<
    R = DatoCmsField | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsFieldArgs>;
  export interface DatoCmsFieldArgs {
    id?: DatoCmsFieldIdQueryString_2 | null;
    originalId?: DatoCmsFieldOriginalIdQueryString_2 | null;
    internal?: DatoCmsFieldInternalInputObject_2 | null;
    label?: DatoCmsFieldLabelQueryString_2 | null;
    fieldType?: DatoCmsFieldFieldTypeQueryString_2 | null;
    apiKey?: DatoCmsFieldApiKeyQueryString_2 | null;
    hint?: DatoCmsFieldHintQueryString_2 | null;
    localized?: DatoCmsFieldLocalizedQueryBoolean_2 | null;
    validators?: DatoCmsFieldValidatorsInputObject_2 | null;
    position?: DatoCmsFieldPositionQueryInteger_2 | null;
    appeareance?: DatoCmsFieldAppeareanceInputObject_2 | null;
  }

  export type DatoCmsModelResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsModelArgs>;
  export interface DatoCmsModelArgs {
    id?: DatoCmsModelIdQueryString_2 | null;
    originalId?: DatoCmsModelOriginalIdQueryString_2 | null;
    internal?: DatoCmsModelInternalInputObject_2 | null;
    name?: DatoCmsModelNameQueryString_2 | null;
    singleton?: DatoCmsModelSingletonQueryBoolean_2 | null;
    sortable?: DatoCmsModelSortableQueryBoolean_2 | null;
    apiKey?: DatoCmsModelApiKeyQueryString_2 | null;
    tree?: DatoCmsModelTreeQueryBoolean_2 | null;
    modularBlock?: DatoCmsModelModularBlockQueryBoolean_2 | null;
    draftModeActive?: DatoCmsModelDraftModeActiveQueryBoolean_2 | null;
    allLocalesRequired?: DatoCmsModelAllLocalesRequiredQueryBoolean_2 | null;
    collectionAppeareance?: DatoCmsModelCollectionAppeareanceQueryString_2 | null;
    hasSingletonItem?: DatoCmsModelHasSingletonItemQueryBoolean_2 | null;
    fields?: DatoCmsModelFieldsQueryList_2 | null;
  }

  export type DatoCmsSeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsSeoMetaTagsArgs>;
  export interface DatoCmsSeoMetaTagsArgs {
    id?: DatoCmsSeoMetaTagsIdQueryString_2 | null;
    tags?: DatoCmsSeoMetaTagsTagsQueryList_2 | null;
    internal?: DatoCmsSeoMetaTagsInternalInputObject_2 | null;
  }

  export type DatoCmsOneColumnSectionContentTextNodeResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsOneColumnSectionContentTextNodeArgs>;
  export interface DatoCmsOneColumnSectionContentTextNodeArgs {
    id?: DatoCmsOneColumnSectionContentTextNodeIdQueryString_2 | null;
    content?: DatoCmsOneColumnSectionContentTextNodeContentQueryString_2 | null;
    internal?: DatoCmsOneColumnSectionContentTextNodeInternalInputObject_2 | null;
  }

  export type DatoCmsPriceResolver<
    R = DatoCmsPrice | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsPriceArgs>;
  export interface DatoCmsPriceArgs {
    id?: DatoCmsPriceIdQueryString_2 | null;
    originalId?: DatoCmsPriceOriginalIdQueryString_2 | null;
    internal?: DatoCmsPriceInternalInputObject_2 | null;
    locale?: DatoCmsPriceLocaleQueryString_2 | null;
    model?: DatoCmsPriceModelInputObject_2 | null;
    title?: DatoCmsPriceTitleQueryString_2 | null;
    base?: DatoCmsPriceBaseQueryInteger_2 | null;
    isPriceDiscounted?: DatoCmsPriceIsPriceDiscountedQueryBoolean_2 | null;
    discount?: DatoCmsPriceDiscountQueryInteger_2 | null;
    discounted?: DatoCmsPriceDiscountedQueryInteger_2 | null;
    seoMetaTags?: DatoCmsPriceSeoMetaTagsInputObject_2 | null;
    updatedAt?: DatoCmsPriceUpdatedAtQueryString_2 | null;
  }

  export type DatoCmsWeekResolver<
    R = DatoCmsWeek | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsWeekArgs>;
  export interface DatoCmsWeekArgs {
    id?: DatoCmsWeekIdQueryString_2 | null;
    originalId?: DatoCmsWeekOriginalIdQueryString_2 | null;
    internal?: DatoCmsWeekInternalInputObject_2 | null;
    locale?: DatoCmsWeekLocaleQueryString_2 | null;
    model?: DatoCmsWeekModelInputObject_2 | null;
    title?: DatoCmsWeekTitleQueryString_2 | null;
    startDate?: DatoCmsWeekStartDateQueryString_2 | null;
    endDate?: DatoCmsWeekEndDateQueryString_2 | null;
    price?: DatoCmsWeekPriceInputObject_2 | null;
    seoMetaTags?: DatoCmsWeekSeoMetaTagsInputObject_2 | null;
    updatedAt?: DatoCmsWeekUpdatedAtQueryString_2 | null;
  }

  export type DatoCmsHomepageResolver<
    R = DatoCmsHomepage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsHomepageArgs>;
  export interface DatoCmsHomepageArgs {
    id?: DatoCmsHomepageIdQueryString_2 | null;
    originalId?: DatoCmsHomepageOriginalIdQueryString_2 | null;
    internal?: DatoCmsHomepageInternalInputObject_2 | null;
    locale?: DatoCmsHomepageLocaleQueryString_2 | null;
    model?: DatoCmsHomepageModelInputObject_2 | null;
    title?: DatoCmsHomepageTitleQueryString_2 | null;
    headerImage?: DatoCmsHomepageHeaderImageInputObject_2 | null;
    content?: DatoCmsHomepageContentQueryList_2 | null;
    seoMetaTags?: DatoCmsHomepageSeoMetaTagsInputObject_2 | null;
    updatedAt?: DatoCmsHomepageUpdatedAtQueryString_2 | null;
  }

  export type DatoCmsFullWidthImageResolver<
    R = DatoCmsFullWidthImage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsFullWidthImageArgs>;
  export interface DatoCmsFullWidthImageArgs {
    id?: DatoCmsFullWidthImageIdQueryString_2 | null;
    originalId?: DatoCmsFullWidthImageOriginalIdQueryString_2 | null;
    internal?: DatoCmsFullWidthImageInternalInputObject_2 | null;
    locale?: DatoCmsFullWidthImageLocaleQueryString_2 | null;
    model?: DatoCmsFullWidthImageModelInputObject_2 | null;
    image?: DatoCmsFullWidthImageImageInputObject_2 | null;
    seoMetaTags?: DatoCmsFullWidthImageSeoMetaTagsInputObject_2 | null;
    updatedAt?: DatoCmsFullWidthImageUpdatedAtQueryString_2 | null;
  }

  export type DatoCmsOneColumnSectionResolver<
    R = DatoCmsOneColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsOneColumnSectionArgs>;
  export interface DatoCmsOneColumnSectionArgs {
    id?: DatoCmsOneColumnSectionIdQueryString_2 | null;
    originalId?: DatoCmsOneColumnSectionOriginalIdQueryString_2 | null;
    internal?: DatoCmsOneColumnSectionInternalInputObject_2 | null;
    locale?: DatoCmsOneColumnSectionLocaleQueryString_2 | null;
    model?: DatoCmsOneColumnSectionModelInputObject_2 | null;
    title?: DatoCmsOneColumnSectionTitleQueryString_2 | null;
    contentNode?: DatoCmsOneColumnSectionContentNodeInputObject_2 | null;
    content?: DatoCmsOneColumnSectionContentQueryString_2 | null;
    seoMetaTags?: DatoCmsOneColumnSectionSeoMetaTagsInputObject_2 | null;
    updatedAt?: DatoCmsOneColumnSectionUpdatedAtQueryString_2 | null;
    headerImage?: DatoCmsOneColumnSectionHeaderImageInputObject_2 | null;
  }

  export type DatoCmsSiteResolver<
    R = DatoCmsSite | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsSiteArgs>;
  export interface DatoCmsSiteArgs {
    id?: DatoCmsSiteIdQueryString_2 | null;
    name?: DatoCmsSiteNameQueryString_2 | null;
    locales?: DatoCmsSiteLocalesQueryList_2 | null;
    theme?: DatoCmsSiteThemeInputObject_2 | null;
    internalDomain?: DatoCmsSiteInternalDomainQueryString_2 | null;
    noIndex?: DatoCmsSiteNoIndexQueryBoolean_2 | null;
    originalId?: DatoCmsSiteOriginalIdQueryString_2 | null;
    internal?: DatoCmsSiteInternalInputObject_2 | null;
    locale?: DatoCmsSiteLocaleQueryString_2 | null;
  }

  export type DatoCmsTwoColumnSectionFirstColumnContentTextNodeResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<
    R,
    Parent,
    Context,
    DatoCmsTwoColumnSectionFirstColumnContentTextNodeArgs
  >;
  export interface DatoCmsTwoColumnSectionFirstColumnContentTextNodeArgs {
    id?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeIdQueryString_2 | null;
    firstColumnContent?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeFirstColumnContentQueryString_2 | null;
    internal?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeInternalInputObject_2 | null;
  }

  export type DatoCmsTwoColumnSectionSecondColumnContentTextNodeResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<
    R,
    Parent,
    Context,
    DatoCmsTwoColumnSectionSecondColumnContentTextNodeArgs
  >;
  export interface DatoCmsTwoColumnSectionSecondColumnContentTextNodeArgs {
    id?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeIdQueryString_2 | null;
    secondColumnContent?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeSecondColumnContentQueryString_2 | null;
    internal?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeInternalInputObject_2 | null;
  }

  export type DatoCmsTwoColumnSectionResolver<
    R = DatoCmsTwoColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsTwoColumnSectionArgs>;
  export interface DatoCmsTwoColumnSectionArgs {
    id?: DatoCmsTwoColumnSectionIdQueryString_2 | null;
    originalId?: DatoCmsTwoColumnSectionOriginalIdQueryString_2 | null;
    internal?: DatoCmsTwoColumnSectionInternalInputObject_2 | null;
    locale?: DatoCmsTwoColumnSectionLocaleQueryString_2 | null;
    model?: DatoCmsTwoColumnSectionModelInputObject_2 | null;
    title?: DatoCmsTwoColumnSectionTitleQueryString_2 | null;
    firstColumnContentNode?: DatoCmsTwoColumnSectionFirstColumnContentNodeInputObject_2 | null;
    firstColumnContent?: DatoCmsTwoColumnSectionFirstColumnContentQueryString_2 | null;
    secondColumnContentNode?: DatoCmsTwoColumnSectionSecondColumnContentNodeInputObject_2 | null;
    secondColumnContent?: DatoCmsTwoColumnSectionSecondColumnContentQueryString_2 | null;
    seoMetaTags?: DatoCmsTwoColumnSectionSeoMetaTagsInputObject_2 | null;
    updatedAt?: DatoCmsTwoColumnSectionUpdatedAtQueryString_2 | null;
  }

  export type DatoCmsAssetResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DatoCmsAssetArgs>;
  export interface DatoCmsAssetArgs {
    id?: DatoCmsAssetIdQueryString_2 | null;
    internal?: DatoCmsAssetInternalInputObject_2 | null;
    format?: DatoCmsAssetFormatQueryString_2 | null;
    size?: DatoCmsAssetSizeQueryInteger_2 | null;
    width?: DatoCmsAssetWidthQueryInteger_2 | null;
    height?: DatoCmsAssetHeightQueryInteger_2 | null;
    url?: DatoCmsAssetUrlQueryString_2 | null;
    resolutions?: ResolutionsTypeName_3 | null;
    sizes?: SizesTypeName_3 | null;
    inlineSvg?: InlineSvgQueryString_3 | null;
    fluid?: FluidTypeName_3 | null;
    fixed?: FixedTypeName_3 | null;
  }
}
/** A connection to a list of items. */
export namespace SitePageConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (SitePageEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (SitePageGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (SitePageEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: SitePageDistinctEnum | null;
  }

  export type GroupResolver<
    R = (SitePageGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: SitePageGroupEnum | null;
  }
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers<Context = any> {
    hasNextPage?: HasNextPageResolver<
      boolean,
      any,
      Context
    > /** When paginating, are there more items? */;
  }

  export type HasNextPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace SitePageEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePage | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      SitePage | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      SitePage | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type SitePage */
export namespace SitePageResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    jsonName?: JsonNameResolver<string | null, any, Context>;
    internalComponentName?: InternalComponentNameResolver<
      string | null,
      any,
      Context
    >;
    path?: PathResolver<string | null, any, Context>;
    component?: ComponentResolver<string | null, any, Context>;
    componentChunkName?: ComponentChunkNameResolver<
      string | null,
      any,
      Context
    >;
    context?: ContextResolver<Context | null, any, Context>;
    pluginCreator?: PluginCreatorResolver<SitePlugin | null, any, Context>;
    pluginCreatorId?: PluginCreatorIdResolver<string | null, any, Context>;
    componentPath?: ComponentPathResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_23 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type JsonNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalComponentNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ComponentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ComponentChunkNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContextResolver<
    R = Context | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PluginCreatorResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PluginCreatorIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ComponentPathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_23 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ContextResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    mdid?: MdidResolver<string | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MdidResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type SitePlugin */
export namespace SitePluginResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    resolve?: ResolveResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
    version?: VersionResolver<string | null, any, Context>;
    pluginOptions?: PluginOptionsResolver<PluginOptions_2 | null, any, Context>;
    nodeAPIs?: NodeApIsResolver<(string | null)[] | null, any, Context>;
    browserAPIs?: BrowserApIsResolver<(string | null)[] | null, any, Context>;
    ssrAPIs?: SsrApIsResolver<(string | null)[] | null, any, Context>;
    pluginFilepath?: PluginFilepathResolver<string | null, any, Context>;
    packageJson?: PackageJsonResolver<PackageJson_2 | null, any, Context>;
    internal?: InternalResolver<Internal_24 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResolveResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PluginOptionsResolver<
    R = PluginOptions_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BrowserApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SsrApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PluginFilepathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PackageJsonResolver<
    R = PackageJson_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_24 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PluginOptions_2Resolvers {
  export interface Resolvers<Context = any> {
    endpoint?: EndpointResolver<string | null, any, Context>;
    query?: QueryResolver<string | null, any, Context>;
    apiToken?: ApiTokenResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
    short_name?: ShortNameResolver<string | null, any, Context>;
    start_url?: StartUrlResolver<string | null, any, Context>;
    background_color?: BackgroundColorResolver<string | null, any, Context>;
    theme_color?: ThemeColorResolver<string | null, any, Context>;
    display?: DisplayResolver<string | null, any, Context>;
    icons?: IconsResolver<(Icons_2 | null)[] | null, any, Context>;
    path?: PathResolver<string | null, any, Context>;
    pathCheck?: PathCheckResolver<boolean | null, any, Context>;
  }

  export type EndpointResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type QueryResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ApiTokenResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ShortNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StartUrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BackgroundColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ThemeColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DisplayResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IconsResolver<
    R = (Icons_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PathCheckResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Icons_2Resolvers {
  export interface Resolvers<Context = any> {
    src?: SrcResolver<string | null, any, Context>;
    sizes?: SizesResolver<string | null, any, Context>;
    type?: TypeResolver<string | null, any, Context>;
  }

  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SizesResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PackageJson_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
    version?: VersionResolver<string | null, any, Context>;
    main?: MainResolver<string | null, any, Context>;
    author?: AuthorResolver<string | null, any, Context>;
    license?: LicenseResolver<string | null, any, Context>;
    dependencies?: DependenciesResolver<
      (Dependencies_2 | null)[] | null,
      any,
      Context
    >;
    devDependencies?: DevDependenciesResolver<
      (DevDependencies_2 | null)[] | null,
      any,
      Context
    >;
    peerDependencies?: PeerDependenciesResolver<
      (PeerDependencies_2 | null)[] | null,
      any,
      Context
    >;
    keywords?: KeywordsResolver<(string | null)[] | null, any, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MainResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LicenseResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DependenciesResolver<
    R = (Dependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DevDependenciesResolver<
    R = (DevDependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PeerDependenciesResolver<
    R = (PeerDependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type KeywordsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Dependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>;
    version?: VersionResolver<string | null, any, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace DevDependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>;
    version?: VersionResolver<string | null, any, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PeerDependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>;
    version?: VersionResolver<string | null, any, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_24Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    type?: TypeResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_23Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace SitePageGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (SitePageGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (SitePageGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace SitePageGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePage | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      SitePage | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      SitePage | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace SitePluginConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (SitePluginEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (SitePluginGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (SitePluginEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: SitePluginDistinctEnum | null;
  }

  export type GroupResolver<
    R = (SitePluginGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: SitePluginGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace SitePluginEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePlugin | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      SitePlugin | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      SitePlugin | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace SitePluginGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (SitePluginGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (SitePluginGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace SitePluginGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePlugin | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      SitePlugin | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      SitePlugin | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace ArtistConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (ArtistEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (ArtistGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (ArtistEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: ArtistDistinctEnum | null;
  }

  export type GroupResolver<
    R = (ArtistGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: ArtistGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace ArtistEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      Artist | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      Artist | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      Artist | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = Artist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = Artist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = Artist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type Artist */
export namespace ArtistResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    name?: NameResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    picture?: PictureResolver<Picture_2 | null, any, Context>;
    records?: RecordsResolver<(Records_2 | null)[] | null, any, Context>;
    internal?: InternalResolver<Internal_25 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PictureResolver<
    R = Picture_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RecordsResolver<
    R = (Records_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_25 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Picture_2Resolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    handle?: HandleResolver<string | null, any, Context>;
    width?: WidthResolver<number | null, any, Context>;
    height?: HeightResolver<number | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HandleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Records_2Resolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_25Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace ArtistGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (ArtistGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (ArtistGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ArtistGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      Artist | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      Artist | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      Artist | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = Artist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = Artist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = Artist | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace RecordConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (RecordEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (RecordGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (RecordEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: RecordDistinctEnum | null;
  }

  export type GroupResolver<
    R = (RecordGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: RecordGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace RecordEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      Record | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      Record | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      Record | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = Record | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = Record | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = Record | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type Record */
export namespace RecordResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    slug?: SlugResolver<string | null, any, Context>;
    tracks?: TracksResolver<(Tracks_2 | null)[] | null, any, Context>;
    cover?: CoverResolver<Cover_2 | null, any, Context>;
    artist?: ArtistResolver<Artist_3 | null, any, Context>;
    reviews?: ReviewsResolver<(Reviews_2 | null)[] | null, any, Context>;
    createdAt?: CreatedAtResolver<Date | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_26 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TracksResolver<
    R = (Tracks_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CoverResolver<
    R = Cover_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ArtistResolver<
    R = Artist_3 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReviewsResolver<
    R = (Reviews_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreatedAtArgs>;
  export interface CreatedAtArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_26 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Tracks_2Resolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    aliasedLength?: AliasedLengthResolver<number | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AliasedLengthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Cover_2Resolvers {
  export interface Resolvers<Context = any> {
    handle?: HandleResolver<string | null, any, Context>;
  }

  export type HandleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Artist_3Resolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Reviews_2Resolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_26Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace RecordGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (RecordGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (RecordGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace RecordGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      Record | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      Record | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      Record | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = Record | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = Record | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = Record | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace ReviewConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (ReviewEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (ReviewGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (ReviewEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: ReviewDistinctEnum | null;
  }

  export type GroupResolver<
    R = (ReviewGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: ReviewGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace ReviewEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      Review | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      Review | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      Review | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = Review | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = Review | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = Review | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type Review */
export namespace ReviewResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    review?: ReviewResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    rating?: RatingResolver<number | null, any, Context>;
    createdAt?: CreatedAtResolver<Date | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    record?: RecordResolver<Record_2 | null, any, Context>;
    comments?: CommentsResolver<(Comments_2 | null)[] | null, any, Context>;
    internal?: InternalResolver<Internal_27 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReviewResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RatingResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreatedAtArgs>;
  export interface CreatedAtArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RecordResolver<
    R = Record_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CommentsResolver<
    R = (Comments_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_27 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Record_2Resolvers {
  export interface Resolvers<Context = any> {
    slug?: SlugResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    artist?: ArtistResolver<Artist_4 | null, any, Context>;
  }

  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ArtistResolver<
    R = Artist_4 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Artist_4Resolvers {
  export interface Resolvers<Context = any> {
    slug?: SlugResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
  }

  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Comments_2Resolvers {
  export interface Resolvers<Context = any> {
    body?: BodyResolver<string | null, any, Context>;
  }

  export type BodyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_27Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace ReviewGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (ReviewGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (ReviewGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ReviewGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      Review | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      Review | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      Review | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = Review | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = Review | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = Review | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace ReviewMarkdownConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (ReviewMarkdownEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (ReviewMarkdownGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (ReviewMarkdownEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: ReviewMarkdownDistinctEnum | null;
  }

  export type GroupResolver<
    R = (ReviewMarkdownGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: ReviewMarkdownGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace ReviewMarkdownEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      ReviewMarkdown | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      ReviewMarkdown | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      ReviewMarkdown | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = ReviewMarkdown | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = ReviewMarkdown | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = ReviewMarkdown | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type ReviewMarkdown */
export namespace ReviewMarkdownResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childMarkdownRemark?: ChildMarkdownRemarkResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The child of this node of type markdownRemark */;
    internal?: InternalResolver<Internal_28 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildMarkdownRemarkResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_28 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type MarkdownRemark */
export namespace MarkdownRemarkResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    internal?: InternalResolver<Internal_29 | null, any, Context>;
    frontmatter?: FrontmatterResolver<Frontmatter_2 | null, any, Context>;
    rawMarkdownBody?: RawMarkdownBodyResolver<string | null, any, Context>;
    html?: HtmlResolver<string | null, any, Context>;
    htmlAst?: HtmlAstResolver<Json | null, any, Context>;
    excerpt?: ExcerptResolver<string | null, any, Context>;
    headings?: HeadingsResolver<
      (MarkdownHeading | null)[] | null,
      any,
      Context
    >;
    timeToRead?: TimeToReadResolver<number | null, any, Context>;
    tableOfContents?: TableOfContentsResolver<string | null, any, Context>;
    wordCount?: WordCountResolver<WordCount | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_29 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FrontmatterResolver<
    R = Frontmatter_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RawMarkdownBodyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HtmlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HtmlAstResolver<
    R = Json | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ExcerptResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ExcerptArgs>;
  export interface ExcerptArgs {
    pruneLength?: number | null;
    truncate?: boolean | null;
  }

  export type HeadingsResolver<
    R = (MarkdownHeading | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, HeadingsArgs>;
  export interface HeadingsArgs {
    depth?: HeadingLevels | null;
  }

  export type TimeToReadResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TableOfContentsResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, TableOfContentsArgs>;
  export interface TableOfContentsArgs {
    pathToSlugField?: string | null;
  }

  export type WordCountResolver<
    R = WordCount | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_29Resolvers {
  export interface Resolvers<Context = any> {
    content?: ContentResolver<string | null, any, Context>;
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Frontmatter_2Resolvers {
  export interface Resolvers<Context = any> {
    title?: TitleResolver<string | null, any, Context>;
    _PARENT?: ParentResolver<string | null, any, Context>;
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MarkdownHeadingResolvers {
  export interface Resolvers<Context = any> {
    value?: ValueResolver<string | null, any, Context>;
    depth?: DepthResolver<number | null, any, Context>;
  }

  export type ValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DepthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace WordCountResolvers {
  export interface Resolvers<Context = any> {
    paragraphs?: ParagraphsResolver<number | null, any, Context>;
    sentences?: SentencesResolver<number | null, any, Context>;
    words?: WordsResolver<number | null, any, Context>;
  }

  export type ParagraphsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SentencesResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WordsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_28Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    mediaType?: MediaTypeResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MediaTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace ReviewMarkdownGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (ReviewMarkdownGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (ReviewMarkdownGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ReviewMarkdownGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      ReviewMarkdown | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      ReviewMarkdown | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      ReviewMarkdown | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = ReviewMarkdown | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = ReviewMarkdown | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = ReviewMarkdown | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace MarkdownRemarkConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (MarkdownRemarkEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (MarkdownRemarkGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (MarkdownRemarkEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: MarkdownRemarkDistinctEnum | null;
  }

  export type GroupResolver<
    R = (MarkdownRemarkGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: MarkdownRemarkGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace MarkdownRemarkEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace MarkdownRemarkGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (MarkdownRemarkGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (MarkdownRemarkGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace MarkdownRemarkGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsFieldConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsFieldEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsFieldGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsFieldEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsFieldDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsFieldGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsFieldGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsFieldEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsField | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsField | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsField | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsField | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsField | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsField | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsField */
export namespace DatoCmsFieldResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    originalId?: OriginalIdResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_30 | null, any, Context>;
    label?: LabelResolver<string | null, any, Context>;
    fieldType?: FieldTypeResolver<string | null, any, Context>;
    apiKey?: ApiKeyResolver<string | null, any, Context>;
    hint?: HintResolver<string | null, any, Context>;
    localized?: LocalizedResolver<boolean | null, any, Context>;
    validators?: ValidatorsResolver<Validators_2 | null, any, Context>;
    position?: PositionResolver<number | null, any, Context>;
    appeareance?: AppeareanceResolver<Appeareance_2 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_30 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LabelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ApiKeyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HintResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocalizedResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ValidatorsResolver<
    R = Validators_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PositionResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AppeareanceResolver<
    R = Appeareance_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_30Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Validators_2Resolvers {
  export interface Resolvers<Context = any> {
    itemItemType?: ItemItemTypeResolver<ItemItemType_2 | null, any, Context>;
    numberRange?: NumberRangeResolver<NumberRange_2 | null, any, Context>;
    richTextBlocks?: RichTextBlocksResolver<
      RichTextBlocks_2 | null,
      any,
      Context
    >;
    extension?: ExtensionResolver<Extension_2 | null, any, Context>;
  }

  export type ItemItemTypeResolver<
    R = ItemItemType_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NumberRangeResolver<
    R = NumberRange_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type RichTextBlocksResolver<
    R = RichTextBlocks_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ExtensionResolver<
    R = Extension_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ItemItemType_2Resolvers {
  export interface Resolvers<Context = any> {
    itemTypes?: ItemTypesResolver<(string | null)[] | null, any, Context>;
  }

  export type ItemTypesResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace NumberRange_2Resolvers {
  export interface Resolvers<Context = any> {
    min?: MinResolver<string | null, any, Context>;
  }

  export type MinResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace RichTextBlocks_2Resolvers {
  export interface Resolvers<Context = any> {
    itemTypes?: ItemTypesResolver<(string | null)[] | null, any, Context>;
  }

  export type ItemTypesResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Extension_2Resolvers {
  export interface Resolvers<Context = any> {
    predefinedList?: PredefinedListResolver<string | null, any, Context>;
  }

  export type PredefinedListResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Appeareance_2Resolvers {
  export interface Resolvers<Context = any> {
    editor?: EditorResolver<string | null, any, Context>;
    parameters?: ParametersResolver<Parameters_3 | null, any, Context>;
    addons?: AddonsResolver<(Addons_2 | null)[] | null, any, Context>;
    type?: TypeResolver<string | null, any, Context>;
  }

  export type EditorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParametersResolver<
    R = Parameters_3 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AddonsResolver<
    R = (Addons_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Parameters_3Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<boolean | null, any, Context>;
    startCollapsed?: StartCollapsedResolver<boolean | null, any, Context>;
    toolbar?: ToolbarResolver<(string | null)[] | null, any, Context>;
  }

  export type HeadingResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StartCollapsedResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ToolbarResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Addons_2Resolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    parameters?: ParametersResolver<Parameters_4 | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ParametersResolver<
    R = Parameters_4 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Parameters_4Resolvers {
  export interface Resolvers<Context = any> {
    slaveFields?: SlaveFieldsResolver<string | null, any, Context>;
  }

  export type SlaveFieldsResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsFieldGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsFieldGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsFieldGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsFieldGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsField | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsField | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsField | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsField | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsField | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsField | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsModelConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsModelEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsModelGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsModelEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsModelDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsModelGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsModelGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsModelEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsModel | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsModel | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsModel | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsModel */
export namespace DatoCmsModelResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    originalId?: OriginalIdResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_31 | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
    singleton?: SingletonResolver<boolean | null, any, Context>;
    sortable?: SortableResolver<boolean | null, any, Context>;
    apiKey?: ApiKeyResolver<string | null, any, Context>;
    tree?: TreeResolver<boolean | null, any, Context>;
    modularBlock?: ModularBlockResolver<boolean | null, any, Context>;
    draftModeActive?: DraftModeActiveResolver<boolean | null, any, Context>;
    allLocalesRequired?: AllLocalesRequiredResolver<
      boolean | null,
      any,
      Context
    >;
    collectionAppeareance?: CollectionAppeareanceResolver<
      string | null,
      any,
      Context
    >;
    hasSingletonItem?: HasSingletonItemResolver<boolean | null, any, Context>;
    fields?: FieldsResolver<(DatoCmsField | null)[] | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_31 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SingletonResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SortableResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ApiKeyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TreeResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ModularBlockResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DraftModeActiveResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AllLocalesRequiredResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CollectionAppeareanceResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasSingletonItemResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldsResolver<
    R = (DatoCmsField | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_31Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsModelGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsModelGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsModelGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsModelGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsModel | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsModel | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsModel | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsSeoMetaTagsConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsSeoMetaTagsEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsSeoMetaTagsGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsSeoMetaTagsEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsSeoMetaTagsDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsSeoMetaTagsGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsSeoMetaTagsGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsSeoMetaTagsEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsSeoMetaTags */
export namespace DatoCmsSeoMetaTagsResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    tags?: TagsResolver<(Tags_2 | null)[] | null, any, Context>;
    internal?: InternalResolver<Internal_32 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TagsResolver<
    R = (Tags_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_32 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Tags_2Resolvers {
  export interface Resolvers<Context = any> {
    tagName?: TagNameResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    attributes?: AttributesResolver<Attributes_2 | null, any, Context>;
  }

  export type TagNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AttributesResolver<
    R = Attributes_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Attributes_2Resolvers {
  export interface Resolvers<Context = any> {
    property?: PropertyResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    name?: NameResolver<string | null, any, Context>;
  }

  export type PropertyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_32Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsSeoMetaTagsGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsSeoMetaTagsGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsSeoMetaTagsGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsSeoMetaTagsGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsOneColumnSectionContentTextNodeConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsOneColumnSectionContentTextNodeEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      | (DatoCmsOneColumnSectionContentTextNodeGroupConnectionConnection | null)[]
      | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsOneColumnSectionContentTextNodeEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsOneColumnSectionContentTextNodeDistinctEnum | null;
  }

  export type GroupResolver<
    R =
      | (DatoCmsOneColumnSectionContentTextNodeGroupConnectionConnection | null)[]
      | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsOneColumnSectionContentTextNodeGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsOneColumnSectionContentTextNodeEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsOneColumnSectionContentTextNode */
export namespace DatoCmsOneColumnSectionContentTextNodeResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childMarkdownRemark?: ChildMarkdownRemarkResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The child of this node of type markdownRemark */;
    content?: ContentResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_33 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildMarkdownRemarkResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_33 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_33Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    mediaType?: MediaTypeResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MediaTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsOneColumnSectionContentTextNodeGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      | (DatoCmsOneColumnSectionContentTextNodeGroupConnectionEdge | null)[]
      | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R =
      | (DatoCmsOneColumnSectionContentTextNodeGroupConnectionEdge | null)[]
      | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsOneColumnSectionContentTextNodeGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsPriceConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsPriceEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsPriceGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsPriceEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsPriceDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsPriceGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsPriceGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsPriceEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsPrice | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsPrice | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsPrice | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsPrice | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsPrice | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsPrice | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsPrice */
export namespace DatoCmsPriceResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childDatoCmsSeoMetaTags?: ChildDatoCmsSeoMetaTagsResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The child of this node of type datoCmsSeoMetaTags */;
    originalId?: OriginalIdResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_34 | null, any, Context>;
    locale?: LocaleResolver<string | null, any, Context>;
    model?: ModelResolver<DatoCmsModel | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    base?: BaseResolver<number | null, any, Context>;
    isPriceDiscounted?: IsPriceDiscountedResolver<boolean | null, any, Context>;
    discount?: DiscountResolver<number | null, any, Context>;
    discounted?: DiscountedResolver<number | null, any, Context>;
    seoMetaTags?: SeoMetaTagsResolver<DatoCmsSeoMetaTags | null, any, Context>;
    updatedAt?: UpdatedAtResolver<Date | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsSeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_34 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocaleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ModelResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BaseResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IsPriceDiscountedResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DiscountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DiscountedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatedAtArgs>;
  export interface UpdatedAtArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }
}

export namespace Internal_34Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsPriceGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsPriceGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsPriceGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsPriceGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsPrice | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsPrice | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsPrice | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsPrice | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsPrice | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsPrice | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsWeekConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsWeekEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsWeekGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsWeekEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsWeekDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsWeekGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsWeekGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsWeekEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsWeek | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsWeek | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsWeek | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsWeek | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsWeek | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsWeek | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsWeek */
export namespace DatoCmsWeekResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childDatoCmsSeoMetaTags?: ChildDatoCmsSeoMetaTagsResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The child of this node of type datoCmsSeoMetaTags */;
    originalId?: OriginalIdResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_35 | null, any, Context>;
    locale?: LocaleResolver<string | null, any, Context>;
    model?: ModelResolver<DatoCmsModel | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    startDate?: StartDateResolver<Date | null, any, Context>;
    endDate?: EndDateResolver<Date | null, any, Context>;
    price?: PriceResolver<DatoCmsPrice | null, any, Context>;
    seoMetaTags?: SeoMetaTagsResolver<DatoCmsSeoMetaTags | null, any, Context>;
    updatedAt?: UpdatedAtResolver<Date | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsSeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_35 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocaleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ModelResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StartDateResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, StartDateArgs>;
  export interface StartDateArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type EndDateResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, EndDateArgs>;
  export interface EndDateArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type PriceResolver<
    R = DatoCmsPrice | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatedAtArgs>;
  export interface UpdatedAtArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }
}

export namespace Internal_35Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsWeekGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsWeekGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsWeekGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsWeekGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsWeek | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsWeek | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsWeek | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsWeek | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsWeek | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsWeek | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsHomepageConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsHomepageEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsHomepageGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsHomepageEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsHomepageDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsHomepageGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsHomepageGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsHomepageEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsHomepage | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsHomepage | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsHomepage | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsHomepage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsHomepage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsHomepage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsHomepage */
export namespace DatoCmsHomepageResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childDatoCmsAsset?: ChildDatoCmsAssetResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The child of this node of type datoCmsAsset */;
    childDatoCmsSeoMetaTags?: ChildDatoCmsSeoMetaTagsResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The child of this node of type datoCmsSeoMetaTags */;
    originalId?: OriginalIdResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_36 | null, any, Context>;
    locale?: LocaleResolver<string | null, any, Context>;
    model?: ModelResolver<DatoCmsModel | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    headerImage?: HeaderImageResolver<DatoCmsAsset | null, any, Context>;
    content?: ContentResolver<
      (UnionContentNode_2 | null)[] | null,
      any,
      Context
    >;
    seoMetaTags?: SeoMetaTagsResolver<DatoCmsSeoMetaTags | null, any, Context>;
    updatedAt?: UpdatedAtResolver<Date | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsAssetResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsSeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_36 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocaleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ModelResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeaderImageResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = (UnionContentNode_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatedAtArgs>;
  export interface UpdatedAtArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }
}
/** Node of type DatoCmsAsset */
export namespace DatoCmsAssetResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    internal?: InternalResolver<Internal_37 | null, any, Context>;
    format?: FormatResolver<string | null, any, Context>;
    size?: SizeResolver<number | null, any, Context>;
    width?: WidthResolver<number | null, any, Context>;
    height?: HeightResolver<number | null, any, Context>;
    url?: UrlResolver<string | null, any, Context>;
    resolutions?: ResolutionsResolver<DatoCmsFixed | null, any, Context>;
    sizes?: SizesResolver<DatoCmsFluid | null, any, Context>;
    inlineSvg?: InlineSvgResolver<string | null, any, Context>;
    fluid?: FluidResolver<DatoCmsFluid | null, any, Context>;
    fixed?: FixedResolver<DatoCmsFixed | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_37 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FormatResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SizeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResolutionsResolver<
    R = DatoCmsFixed | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ResolutionsArgs>;
  export interface ResolutionsArgs {
    width?: number | null;
    height?: number | null;
    imgixParams?: DatoCmsImgixParams | null;
  }

  export type SizesResolver<
    R = DatoCmsFluid | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SizesArgs>;
  export interface SizesArgs {
    maxWidth?: number | null;
    maxHeight?: number | null;
    sizes?: string | null;
    imgixParams?: DatoCmsImgixParams | null;
  }

  export type InlineSvgResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FluidResolver<
    R = DatoCmsFluid | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FluidArgs>;
  export interface FluidArgs {
    maxWidth?: number | null;
    maxHeight?: number | null;
    sizes?: string | null;
    imgixParams?: DatoCmsImgixParams | null;
  }

  export type FixedResolver<
    R = DatoCmsFixed | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FixedArgs>;
  export interface FixedArgs {
    width?: number | null;
    height?: number | null;
    imgixParams?: DatoCmsImgixParams | null;
  }
}

export namespace Internal_37Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace DatoCmsFixedResolvers {
  export interface Resolvers<Context = any> {
    base64?: Base64Resolver<string | null, any, Context>;
    aspectRatio?: AspectRatioResolver<number | null, any, Context>;
    width?: WidthResolver<number | null, any, Context>;
    height?: HeightResolver<number | null, any, Context>;
    src?: SrcResolver<string | null, any, Context>;
    srcSet?: SrcSetResolver<string | null, any, Context>;
  }

  export type Base64Resolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AspectRatioResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SrcSetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace DatoCmsFluidResolvers {
  export interface Resolvers<Context = any> {
    base64?: Base64Resolver<string | null, any, Context>;
    aspectRatio?: AspectRatioResolver<number | null, any, Context>;
    src?: SrcResolver<string | null, any, Context>;
    srcSet?: SrcSetResolver<string | null, any, Context>;
    sizes?: SizesResolver<string | null, any, Context>;
  }

  export type Base64Resolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AspectRatioResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SrcSetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SizesResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_36Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsOneColumnSection */
export namespace DatoCmsOneColumnSectionResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childDatoCmsOneColumnSectionContentTextNode?: ChildDatoCmsOneColumnSectionContentTextNodeResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    > /** The child of this node of type datoCmsOneColumnSectionContentTextNode */;
    childDatoCmsSeoMetaTags?: ChildDatoCmsSeoMetaTagsResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The child of this node of type datoCmsSeoMetaTags */;
    childDatoCmsAsset?: ChildDatoCmsAssetResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The child of this node of type datoCmsAsset */;
    originalId?: OriginalIdResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_38 | null, any, Context>;
    locale?: LocaleResolver<string | null, any, Context>;
    model?: ModelResolver<DatoCmsModel | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    contentNode?: ContentNodeResolver<
      DatoCmsOneColumnSectionContentTextNode | null,
      any,
      Context
    >;
    content?: ContentResolver<string | null, any, Context>;
    seoMetaTags?: SeoMetaTagsResolver<DatoCmsSeoMetaTags | null, any, Context>;
    updatedAt?: UpdatedAtResolver<Date | null, any, Context>;
    headerImage?: HeaderImageResolver<DatoCmsAsset | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsOneColumnSectionContentTextNodeResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsSeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsAssetResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_38 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocaleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ModelResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentNodeResolver<
    R = DatoCmsOneColumnSectionContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatedAtArgs>;
  export interface UpdatedAtArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type HeaderImageResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_38Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsTwoColumnSection */
export namespace DatoCmsTwoColumnSectionResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childDatoCmsTwoColumnSectionFirstColumnContentTextNode?: ChildDatoCmsTwoColumnSectionFirstColumnContentTextNodeResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    > /** The child of this node of type datoCmsTwoColumnSectionFirstColumnContentTextNode */;
    childDatoCmsTwoColumnSectionSecondColumnContentTextNode?: ChildDatoCmsTwoColumnSectionSecondColumnContentTextNodeResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    > /** The child of this node of type datoCmsTwoColumnSectionSecondColumnContentTextNode */;
    childDatoCmsSeoMetaTags?: ChildDatoCmsSeoMetaTagsResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The child of this node of type datoCmsSeoMetaTags */;
    originalId?: OriginalIdResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_39 | null, any, Context>;
    locale?: LocaleResolver<string | null, any, Context>;
    model?: ModelResolver<DatoCmsModel | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    firstColumnContentNode?: FirstColumnContentNodeResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    >;
    firstColumnContent?: FirstColumnContentResolver<
      string | null,
      any,
      Context
    >;
    secondColumnContentNode?: SecondColumnContentNodeResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    >;
    secondColumnContent?: SecondColumnContentResolver<
      string | null,
      any,
      Context
    >;
    seoMetaTags?: SeoMetaTagsResolver<DatoCmsSeoMetaTags | null, any, Context>;
    updatedAt?: UpdatedAtResolver<Date | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsTwoColumnSectionFirstColumnContentTextNodeResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsTwoColumnSectionSecondColumnContentTextNodeResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsSeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_39 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocaleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ModelResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstColumnContentNodeResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstColumnContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SecondColumnContentNodeResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SecondColumnContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatedAtArgs>;
  export interface UpdatedAtArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }
}
/** Node of type DatoCmsTwoColumnSectionFirstColumnContentTextNode */
export namespace DatoCmsTwoColumnSectionFirstColumnContentTextNodeResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childMarkdownRemark?: ChildMarkdownRemarkResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The child of this node of type markdownRemark */;
    firstColumnContent?: FirstColumnContentResolver<
      string | null,
      any,
      Context
    >;
    internal?: InternalResolver<Internal_40 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildMarkdownRemarkResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstColumnContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_40 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_40Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    mediaType?: MediaTypeResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MediaTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsTwoColumnSectionSecondColumnContentTextNode */
export namespace DatoCmsTwoColumnSectionSecondColumnContentTextNodeResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childMarkdownRemark?: ChildMarkdownRemarkResolver<
      MarkdownRemark | null,
      any,
      Context
    > /** The child of this node of type markdownRemark */;
    secondColumnContent?: SecondColumnContentResolver<
      string | null,
      any,
      Context
    >;
    internal?: InternalResolver<Internal_41 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildMarkdownRemarkResolver<
    R = MarkdownRemark | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SecondColumnContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_41 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_41Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    mediaType?: MediaTypeResolver<string | null, any, Context>;
    content?: ContentResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MediaTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_39Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsHomepageGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsHomepageGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsHomepageGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsHomepageGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsHomepage | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsHomepage | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsHomepage | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsHomepage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsHomepage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsHomepage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsFullWidthImageConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsFullWidthImageEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsFullWidthImageGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsFullWidthImageEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsFullWidthImageDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsFullWidthImageGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsFullWidthImageGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsFullWidthImageEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsFullWidthImage | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsFullWidthImage | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsFullWidthImage | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsFullWidthImage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsFullWidthImage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsFullWidthImage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsFullWidthImage */
export namespace DatoCmsFullWidthImageResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    childDatoCmsAsset?: ChildDatoCmsAssetResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The child of this node of type datoCmsAsset */;
    childDatoCmsSeoMetaTags?: ChildDatoCmsSeoMetaTagsResolver<
      DatoCmsSeoMetaTags | null,
      any,
      Context
    > /** The child of this node of type datoCmsSeoMetaTags */;
    originalId?: OriginalIdResolver<string | null, any, Context>;
    internal?: InternalResolver<Internal_42 | null, any, Context>;
    locale?: LocaleResolver<string | null, any, Context>;
    model?: ModelResolver<DatoCmsModel | null, any, Context>;
    image?: ImageResolver<DatoCmsAsset | null, any, Context>;
    seoMetaTags?: SeoMetaTagsResolver<DatoCmsSeoMetaTags | null, any, Context>;
    updatedAt?: UpdatedAtResolver<Date | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsAssetResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildDatoCmsSeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalResolver<
    R = Internal_42 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocaleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ModelResolver<
    R = DatoCmsModel | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ImageResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SeoMetaTagsResolver<
    R = DatoCmsSeoMetaTags | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdatedAtArgs>;
  export interface UpdatedAtArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }
}

export namespace Internal_42Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsFullWidthImageGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsFullWidthImageGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsFullWidthImageGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsFullWidthImageGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsFullWidthImage | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsFullWidthImage | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsFullWidthImage | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsFullWidthImage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsFullWidthImage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsFullWidthImage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsOneColumnSectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsOneColumnSectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsOneColumnSectionGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsOneColumnSectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsOneColumnSectionDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsOneColumnSectionGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsOneColumnSectionGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsOneColumnSectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsOneColumnSection | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsOneColumnSection | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsOneColumnSection | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsOneColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsOneColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsOneColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsOneColumnSectionGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsOneColumnSectionGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsOneColumnSectionGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsOneColumnSectionGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsOneColumnSection | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsOneColumnSection | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsOneColumnSection | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsOneColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsOneColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsOneColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsSiteConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsSiteEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsSiteGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsSiteEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsSiteDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsSiteGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsSiteGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsSiteEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsSite | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsSite | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsSite | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsSite | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsSite | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsSite | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type DatoCmsSite */
export namespace DatoCmsSiteResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    name?: NameResolver<string | null, any, Context>;
    locales?: LocalesResolver<(string | null)[] | null, any, Context>;
    theme?: ThemeResolver<Theme_2 | null, any, Context>;
    internalDomain?: InternalDomainResolver<string | null, any, Context>;
    noIndex?: NoIndexResolver<boolean | null, any, Context>;
    originalId?: OriginalIdResolver<Date | null, any, Context>;
    internal?: InternalResolver<Internal_43 | null, any, Context>;
    locale?: LocaleResolver<string | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocalesResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ThemeResolver<
    R = Theme_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InternalDomainResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NoIndexResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OriginalIdResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, OriginalIdArgs>;
  export interface OriginalIdArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type InternalResolver<
    R = Internal_43 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocaleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Theme_2Resolvers {
  export interface Resolvers<Context = any> {
    primaryColor?: PrimaryColorResolver<PrimaryColor_2 | null, any, Context>;
    lightColor?: LightColorResolver<LightColor_2 | null, any, Context>;
    darkColor?: DarkColorResolver<DarkColor_2 | null, any, Context>;
    accentColor?: AccentColorResolver<AccentColor_2 | null, any, Context>;
  }

  export type PrimaryColorResolver<
    R = PrimaryColor_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LightColorResolver<
    R = LightColor_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DarkColorResolver<
    R = DarkColor_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AccentColorResolver<
    R = AccentColor_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PrimaryColor_2Resolvers {
  export interface Resolvers<Context = any> {
    red?: RedResolver<number | null, any, Context>;
    blue?: BlueResolver<number | null, any, Context>;
    alpha?: AlphaResolver<number | null, any, Context>;
    green?: GreenResolver<number | null, any, Context>;
  }

  export type RedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BlueResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AlphaResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GreenResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace LightColor_2Resolvers {
  export interface Resolvers<Context = any> {
    red?: RedResolver<number | null, any, Context>;
    blue?: BlueResolver<number | null, any, Context>;
    alpha?: AlphaResolver<number | null, any, Context>;
    green?: GreenResolver<number | null, any, Context>;
  }

  export type RedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BlueResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AlphaResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GreenResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace DarkColor_2Resolvers {
  export interface Resolvers<Context = any> {
    red?: RedResolver<number | null, any, Context>;
    blue?: BlueResolver<number | null, any, Context>;
    alpha?: AlphaResolver<number | null, any, Context>;
    green?: GreenResolver<number | null, any, Context>;
  }

  export type RedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BlueResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AlphaResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GreenResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace AccentColor_2Resolvers {
  export interface Resolvers<Context = any> {
    red?: RedResolver<number | null, any, Context>;
    blue?: BlueResolver<number | null, any, Context>;
    alpha?: AlphaResolver<number | null, any, Context>;
    green?: GreenResolver<number | null, any, Context>;
  }

  export type RedResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BlueResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AlphaResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GreenResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_43Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>;
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsSiteGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsSiteGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsSiteGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsSiteGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsSite | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsSite | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsSite | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsSite | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsSite | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsSite | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsTwoColumnSectionFirstColumnContentTextNodeConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsTwoColumnSectionFirstColumnContentTextNodeEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      | (DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionConnection | null)[]
      | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsTwoColumnSectionFirstColumnContentTextNodeEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeDistinctEnum | null;
  }

  export type GroupResolver<
    R =
      | (DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionConnection | null)[]
      | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsTwoColumnSectionFirstColumnContentTextNodeEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      | (DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionEdge | null)[]
      | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R =
      | (DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionEdge | null)[]
      | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsTwoColumnSectionFirstColumnContentTextNodeGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsTwoColumnSectionFirstColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsTwoColumnSectionSecondColumnContentTextNodeConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsTwoColumnSectionSecondColumnContentTextNodeEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      | (DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionConnection | null)[]
      | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R =
      | (DatoCmsTwoColumnSectionSecondColumnContentTextNodeEdge | null)[]
      | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeDistinctEnum | null;
  }

  export type GroupResolver<
    R =
      | (DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionConnection | null)[]
      | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsTwoColumnSectionSecondColumnContentTextNodeEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      | (DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionEdge | null)[]
      | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R =
      | (DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionEdge | null)[]
      | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsTwoColumnSectionSecondColumnContentTextNodeGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsTwoColumnSectionSecondColumnContentTextNode | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsTwoColumnSectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsTwoColumnSectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsTwoColumnSectionGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsTwoColumnSectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsTwoColumnSectionDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsTwoColumnSectionGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsTwoColumnSectionGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsTwoColumnSectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsTwoColumnSection | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsTwoColumnSection | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsTwoColumnSection | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsTwoColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsTwoColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsTwoColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsTwoColumnSectionGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsTwoColumnSectionGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsTwoColumnSectionGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsTwoColumnSectionGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsTwoColumnSection | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsTwoColumnSection | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsTwoColumnSection | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsTwoColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsTwoColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsTwoColumnSection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsAssetConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsAssetEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>;
    group?: GroupResolver<
      (DatoCmsAssetGroupConnectionConnection | null)[] | null,
      any,
      Context
    >;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsAssetEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>;
  export interface DistinctArgs {
    field?: DatoCmsAssetDistinctEnum | null;
  }

  export type GroupResolver<
    R = (DatoCmsAssetGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: DatoCmsAssetGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DatoCmsAssetEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A connection to a list of items. */
export namespace DatoCmsAssetGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    edges?: EdgesResolver<
      (DatoCmsAssetGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */;
    field?: FieldResolver<string | null, any, Context>;
    fieldValue?: FieldValueResolver<string | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (DatoCmsAssetGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace DatoCmsAssetGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The item at the end of the edge */;
    next?: NextResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The next edge in the connection */;
    previous?: PreviousResolver<
      DatoCmsAsset | null,
      any,
      Context
    > /** The previous edge in the connection */;
  }

  export type NodeResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NextResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PreviousResolver<
    R = DatoCmsAsset | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Node of type Site */
export namespace SiteResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */;
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */;
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */;
    siteMetadata?: SiteMetadataResolver<SiteMetadata_2 | null, any, Context>;
    port?: PortResolver<Date | null, any, Context>;
    host?: HostResolver<string | null, any, Context>;
    pathPrefix?: PathPrefixResolver<string | null, any, Context>;
    polyfill?: PolyfillResolver<boolean | null, any, Context>;
    buildTime?: BuildTimeResolver<Date | null, any, Context>;
    internal?: InternalResolver<Internal_44 | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SiteMetadataResolver<
    R = SiteMetadata_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PortResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PortArgs>;
  export interface PortArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type HostResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PathPrefixResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PolyfillResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BuildTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BuildTimeArgs>;
  export interface BuildTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type InternalResolver<
    R = Internal_44 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace SiteMetadata_2Resolvers {
  export interface Resolvers<Context = any> {
    title?: TitleResolver<string | null, any, Context>;
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace Internal_44Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>;
    type?: TypeResolver<string | null, any, Context>;
    owner?: OwnerResolver<string | null, any, Context>;
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
