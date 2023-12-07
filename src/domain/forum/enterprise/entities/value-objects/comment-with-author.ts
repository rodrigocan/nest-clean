import { ValueObject } from "@/core/entities/value-object";

export interface CommenthWithAuthorProps {
  commentId: string;
  content: string;
  authorId: string;
  author: string;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class CommentWithAuthor extends ValueObject<CommenthWithAuthorProps> {
  get commentId() {
    return this.props.commentId;
  }

  get content() {
    return this.props.content;
  }

  get authorId() {
    return this.props.authorId;
  }

  get author() {
    return this.props.author;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(props: CommenthWithAuthorProps) {
    return new CommentWithAuthor(props);
  }
}
