const fs = require('fs');

const message = 'これはfsモジュールで書き込んだテキストです。';

fs.writeFile('./module/module-fs.txt', message, (err) => {
    if (err) {
        console.error('書き込みエラー：', err);
        return;
    }

    console.log('ファイルへの書き込みが完了しました。');

    fs.readFile('./module/module-fs.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('読み込みエラー：', err);
            return;
        }
        console.log('読み込んだ内容：', data);
    });
});