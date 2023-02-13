export interface structure {
  id: string;
  dataNodeId: string;
  parentNodeId: string | null;
  isVisible: boolean;
  children: StructureNode[];
}

export interface data {
  id: string;
  value: string | null;
  img: string | null;
  links: string[] | null;
}
