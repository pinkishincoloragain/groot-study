export type nodeId = number;
export type parentNodeId = string | null;
export type isVisible = boolean;
export type children = nodeId[];
export type title = string | null;
export type value = string | null;
export type img = string | null;
export type links = string[] | null;

export interface structure {
  parentNodeId: parentNodeId;
  isVisible: isVisible;
  children: children;
}

export interface data {
  title: title;
  value: value;
  img: img;
  links: links;
}

export interface NodeData {
  id: nodeId;
  structure: structure;
  data: data;
}
