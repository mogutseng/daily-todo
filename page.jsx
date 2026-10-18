'use client';

import { useEffect, useState } from 'react';

const KEY = 'daily-todo-items-v1';

export default function Home() {
  const [items, setItems] = useState([]);
  const [draft, setDraft] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || '[]');
      if (Array.isArray(saved)) setItems(saved);
    } catch { /* ignore invalid saved data */ }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, loaded]);

  const completed = items.filter((item) => item.done).length;

  function addItem(event) {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;
    setItems((current) => [...current, { id: crypto.randomUUID(), title, done: false }]);
    setDraft('');
  }

  function toggleItem(id) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, done: !item.done } : item));
  }

  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <main className="page">
      <section className="card" aria-label="待辦清單工具">
        <div className="header-icon"><img src="/checklist.svg" alt="待辦清單圖示" width="62" height="62" /></div>
        <p className="eyebrow">MY LITTLE PRODUCTIVITY TOOL</p>
        <h1>今日待辦清單</h1>
        <p className="subtitle">把想做的事寫下來，一件一件完成 ✨</p>

        <form className="add-form" onSubmit={addItem}>
          <label htmlFor="task-input" className="sr-only">新增待辦事項</label>
          <input id="task-input" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="例如：閱讀 30 分鐘" maxLength={80} />
          <button type="submit">＋ 新增</button>
        </form>

        <div className="summary" aria-live="polite">
          <span>今天的進度</span>
          <strong>{completed} / {items.length} 已完成</strong>
        </div>
        <div className="progress"><div style={{ width: items.length ? `${completed / items.length * 100}%` : '0%' }} /></div>

        <ul className="task-list">
          {items.length === 0 ? (
            <li className="empty">目前還沒有待辦事項，新增第一件事吧！</li>
          ) : items.map((item) => (
            <li className="task" key={item.id}>
              <label className={item.done ? 'done' : ''}>
                <input type="checkbox" checked={item.done} onChange={() => toggleItem(item.id)} />
                <span>{item.title}</span>
              </label>
              <button className="delete" onClick={() => removeItem(item.id)} aria-label={`刪除${item.title}`} title="刪除">✕</button>
            </li>
          ))}
        </ul>
        <p className="note">✓ 資料只儲存在目前使用的瀏覽器中</p>
      </section>
      <footer>Made with Next.js · My First Web App</footer>
    </main>
  );
}
