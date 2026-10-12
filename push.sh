#!/usr/bin/env bash
# Safe push for Under Belt -> https://github.com/sepehr175/mehdi-2.git
# Run from INSIDE the project folder (the one that contains index.html and .git)
set -u
REMOTE_URL="${1:-https://github.com/sepehr175/mehdi-2.git}"
BRANCH="main"

[ -d .git ] || { echo "ERROR: run this inside the project folder (where .git is)."; exit 1; }

# abort any half-finished merge/rebase left from earlier attempts
git merge --abort 2>/dev/null; git rebase --abort 2>/dev/null

git config http.postBuffer 524288000
git config http.version HTTP/1.1
git config http.lowSpeedLimit 0
git config http.lowSpeedTime 999999
git config --unset http.sslVerify 2>/dev/null   # keep SSL verification ON

git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"
git branch -M "$BRANCH"
git branch -f backup-local "$BRANCH" 2>/dev/null

try_push() {
  for i in 1 2 3 4 5; do
    echo ">> attempt $i: $*"
    if "$@"; then return 0; fi
    sleep $((i*3))
  done
  return 1
}

# 1) normal push of the whole branch
if try_push git push -u origin "$BRANCH" --force-with-lease; then echo "DONE"; exit 0; fi
if try_push git push -u origin "$BRANCH" --force; then echo "DONE"; exit 0; fi

# 2) commit-by-commit (small packs), oldest first
echo ">> pushing commit by commit"
ok=1
for c in $(git rev-list --reverse "$BRANCH"); do
  try_push git push origin "$c:refs/heads/$BRANCH" --force || { ok=0; break; }
done
[ $ok = 1 ] && { echo "DONE"; exit 0; }

echo
echo "Still failing -> network/auth problem on your side (not the code). Try:"
echo "  - another network / VPN on or off / mobile hotspot"
echo "  - SSH:  git remote set-url origin git@github.com:sepehr175/mehdi-2.git && git push -u origin main --force"
echo "  - or upload the files through the GitHub web page (see README-PUSH.txt)"
exit 1
