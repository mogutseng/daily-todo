import './globals.css';

export const metadata = {
  title: '今日待辦 | My To-Do List',
  description: '簡單好用的每日待辦清單，整理今天想完成的事。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
