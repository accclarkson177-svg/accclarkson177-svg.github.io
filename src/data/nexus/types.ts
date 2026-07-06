export type NexusLink = {
  label: string;
  href: string;
  note?: string;
};

export type NexusSection =
  | {
      type: 'links';
      layout?: 'grid' | 'wrap' | 'list';
      columns?: number;
      items: NexusLink[];
    }
  | {
      type: 'callout';
      title: string;
      subtitle?: string;
      href: string;
      action: string;
    }
  | {
      type: 'note';
      title: string;
      body: string;
    };

export type NexusCard = {
  title: string;
  accent: string;
  tone?: 'default' | 'danger';
  size?: 'narrow' | 'wide';
  sections: NexusSection[];
};

export type NexusColumn = {
  width: 'narrow' | 'center' | 'wide';
  cards: NexusCard[];
};

export type NexusPage = {
  id: string;
  label: string;
  columns: NexusColumn[];
};
