export type nodeId = string;
export type parentNodeId = string | null;
export type isVisible = boolean;
export type children = nodeId[];

export interface structure {
  id: nodeId;
  parentNodeId: parentNodeId;
  isVisible: isVisible;
  children: children;
}

export interface data {
  id: string;
  value: string | null;
  img: string | null;
  links: string[] | null;
}

export interface NodeData {
  structure: structure;
  data: data;
}
