type Task = {
    id: number;
    title: string;
    describe: string;
    completed: boolean;
}

type EditingTask = Partial<Task>;

type SummaryTask = Pick<Task, 'id' | 'title'>;

type CompletedTask = Readonly<Task>;

const editingTask: EditingTask = {
    title: '『TypeScriptの基礎を学ぼう』の学習',
};

const summaryTask: SummaryTask = {
    id: 2,
    title: 'ToDoアプリの開発',
};

const completedTask: CompletedTask = {
    id: 2,
    title: '『JavaScriptの基礎を学ぼう』の学習',
    describe: '',
    completed: true,
};

editingTask.completed = false;
summaryTask.title = 'ポートフォリオの作成';

console.log('---- 編集中のタスク ----');
console.log(editingTask);
console.log('---- 一覧表示用のタスク ----');
console.log(summaryTask);
console.log('---- 完了済みのタスク ----');
console.log(completedTask);

