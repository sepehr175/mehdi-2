# Push to GitHub (clean repo)

```bash
cd Under-Belt-clean
git remote add origin https://github.com/sepehr175/mehdi-2.git   # skip if already added
git config http.postBuffer 524288000
git push -u origin main --force
```

If it still fails with "curl 52 / connection reset":

```bash
git config http.version HTTP/1.1
git push -u origin main --force
# or push commit by commit
git push origin ea83211:refs/heads/main --force
git push origin main
# or use SSH
git remote set-url origin git@github.com:sepehr175/mehdi-2.git && git push -u origin main --force
```
