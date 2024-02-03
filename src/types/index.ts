import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from "styled-components";

export type LoginFormProps = {
  email: string;
  pass: string;
};

export type LoginPageProps = LoginFormProps & {
  onSignUp: (data: LoginFormProps) => Promise<string>;
};

export type SlidesProps = {
  currentIndex: number;
  containerReference: (element: HTMLElement | null) => void;
  itemWidth: number;
};

export type SlideProps = {
  children: React.ReactNode;
};

export type SlideWidthProps = {
  itemWidth: number;
};

export type GetWidthType = (
  props: SlideWidthProps
) => FlattenSimpleInterpolation;

export type Comment = {
  id: number;
  title: string;
  description: string;
};

export type PostType = {
  id: number;
  title: string;
  description: string;
  comments: Comment[];
};

export type PostListProps = PostType[];
