type Post = {
    id: number;          // id
    title: string;       // タイトル
    body: string;        // 本文
    published: boolean;  // 公開済みかどうか
};

type editingPost = Partial<Post>;

type summaryPost = Pick<Post, 'id'|'title'>;

type publishedPost = Readonly<Post>;

