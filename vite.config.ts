import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages（プロジェクトサイト）は https://<user>.github.io/<repo名>/
// リポジトリ名を変えたら base も同じ名前に合わせてください。
// ユーザー/組織サイト（<user>.github.io リポのルート）だけなら base: '/' に。
const repoName = 'rail-timeline'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? `/${repoName}/` : '/',
})
