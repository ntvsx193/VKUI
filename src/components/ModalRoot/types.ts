export enum ModalType {
  PAGE = 'page',
  CARD = 'card',
}

export interface ModalsStateEntry {
  id: string;
  onClose?: () => any;
  type?: ModalType;

  settlingHeight?: number;
  dynamicContentHeight?: boolean;
  expandable?: boolean;

  modalElement?: HTMLElement | null;
  innerElement?: HTMLElement | null;
  headerElement?: HTMLElement | null;
  contentElement?: HTMLElement | null;
  footerElement?: HTMLElement | null;

  translateY?: number;
  translateYFrom?: number;
  translateYCurrent?: number;
  touchStartTime?: Date;
  touchStartContentScrollTop?: number;
  touchMovePositive?: boolean | null;
  touchShiftYPercent?: number;
  expanded?: boolean;
  collapsed?: boolean;
  hidden?: boolean;
  contentScrolled?: boolean;
  expandedRange?: [number, number];
  collapsedRange?: [number, number];
  hiddenRange?: [number, number];
  contentScrollStopTimeout?: number;
}
