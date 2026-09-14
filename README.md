#Git commands live portfolio
git add .
git commit -m "Update portfolio"
git push origin main

npm.cmd run build
npx.cmd gh-pages -d dist
