# GIT

### GIT - version control system (tracks changes of file over time)

### Branch - independent line of development

### Commit - process of saving changes to repo

### Merge conflict - when git can't automatically combine changes

1. For initial setup (once) we:

- set username `git config --global user.name "Name"`
- set email `git config --global user.email "email@mail.com`
- check config `git config --list`

2. Clone existing repo `git clone https://github...`

3. Check what changed `git status`

4. Adding files to staging `git add file.js` or `git add .`

5. Commit changes `git commit -m "bla bla"`

6. Connecting to remote repo `git remote add origin https://github...` or `git remote -v` to check remote

7. Uploading Code (PUSH) `git push origin main`

8. Downloading latest code (PULL) `git pull origin main` or `git fetch` (download changes)

9. Create branch `git branch sample-branch`

10. Switch branch `git checkout sample-branch` or `git switch sample-branch`

11. Create + Switch branch `git checkout -b sample-branch`

12. List branches `git branch`

13. Merging branches `git checkout main` + `git merge sample-branch`

14. View commit history `git log` or `git log --oneline`

15. Unstage file `git reset file.js`

16. Temporarily save unfinished work `git stash` and restore `git stash pop` (when switching branches)

17. Delete branch `git branch -d sample-branch`

**MOST IMPORTANT:**

- `git clone` - клонуєм репо з github
- `git status` - перевірити зміни
- `git add .` - додаєм змінені файли stanged
- `git commit -m "bla bla"` - комітимо зміни
- `git push` - додаємо змінені зміни на репо
- `git pull`/`git pull origin branch_name` or `git fetch` + `git pull` - завантажити останній код з репо
- `git branch br` - створити гілку
- `git checkout br` - змінити гілку
- `git checkout -b` - змінити і створити гілку
- `git merge` or `git rebase main_branch_name` - замьорджити зміни в основну гілку
- `git log` - показати історію комітів
- `git stash` - тимчасово зберегти зміни (корисно коли перемикаємось між гілками)
