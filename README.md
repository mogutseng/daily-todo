# 今日待辦清單（Next.js）

一個可以新增、勾選、刪除待辦事項的簡單互動小工具。資料會儲存在使用者自己的瀏覽器（localStorage）。

## 本機執行

```bash
npm install
npm run dev
```

瀏覽 `http://localhost:3000`。

## GitHub / Vercel 部署

1. 在 GitHub 建立公開 Repository（例如 `daily-todo`）。
2. 將本專案解壓縮後的**檔案與資料夾**上傳至該 Repository（包括 `package.json`、`app/`、`public/`）。
3. 前往 https://vercel.com/new ，使用 GitHub 登入並授權存取 Repository。
4. 選取 Repository，Framework Preset 選 Next.js，直接按 Deploy。
5. 部署完成後打開 Vercel 給的 `https://xxx.vercel.app` 公開網址；以無痕視窗檢查畫面、圖示和按鈕。

## 作業介紹文字

作品名稱：今日待辦清單

作品簡介：使用 Next.js 製作一個簡單的待辦事項工具。使用者可以新增每日任務、勾選已完成項目、刪除任務，並看到完成進度。資料保存在瀏覽器內，重新整理頁面也不會消失。

技術：Next.js、React、CSS、localStorage、GitHub、Vercel。

公開網址：［部署完成後貼上 Vercel 網址］
