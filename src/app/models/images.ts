export interface Guid {
    rendered: string;
  }
  
  export interface Title {
    rendered: string;
  }
  
  export interface Content {
    rendered: string;
    protected: boolean;
  }
  
  export interface Excerpt {
    rendered: string;
    protected: boolean;
  }
  
  export interface Meta {
    amp_status: string;
  }
  
  export interface UrlMeta {
    origin: number;
    position: number;
  }
  
  export interface Img {
    src: string;
    width: number;
    height: number;
  }
  
  export interface JetpackRelatedPost {
    id: number;
    url: string;
    url_meta: UrlMeta;
    title: string;
    date: string;
    format: boolean;
    excerpt: string;
    rel: string;
    context: string;
    img: Img;
    classes: any[];
  }
  
  export interface Self {
    href: string;
  }
  
  export interface Collection {
    href: string;
  }
  
  export interface About {
    href: string;
  }
  
  export interface Author {
    embeddable: boolean;
    href: string;
  }
  
  export interface Reply {
    embeddable: boolean;
    href: string;
  }
  
  export interface VersionHistory {
    href: string;
  }
  
  export interface WpFeaturedmedia {
    embeddable: boolean;
    href: string;
  }
  
  export interface WpAttachment {
    href: string;
  }
  
  export interface WpTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
  }
  
  export interface Cury {
    name: string;
    href: string;
    templated: boolean;
  }
  
  export interface Links {
    self: Self[];
    collection: Collection[];
    about: About[];
    author: Author[];
    replies: Reply[];
    version_history: VersionHistory[];
    wp_featuredmedia: WpFeaturedmedia[];
    wp_attachment: WpAttachment[];
    wp_term: WpTerm[];
    curies: Cury[];
  }
  export class WordPressImg {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: Guid;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: Meta;
    categories: number[];
    tags: number[];
    jetpack_related_posts: JetpackRelatedPost[];
    _links: Links;
  }