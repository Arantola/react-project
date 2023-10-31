export interface ChildrenProps {
  children?: React.ReactNode;
}

export interface ErrorHandler {
  onErrorChange: (isError: boolean) => void;
}

export interface MockItem {
  id: string;
  name: string;
  image: string;
  description: string;
}
