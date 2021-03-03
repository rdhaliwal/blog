import BlogEntry from '../../components/BlogEntry';

export const meta = {
  title: 'Git Tricks'
};

export default ({ children }) => (
  <BlogEntry {...meta}> {children} </BlogEntry>
);

# Git

Amend all the commits in a repository so that the author is anonymous. Useful for code tests.
```bash
#!/bin/bash

FILTER_BRANCH_SQUELCH_WARNING=1 \
git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='Anonymous Candidate'
    GIT_AUTHOR_EMAIL='anonymous@candidate.com'
    GIT_COMMITTER_NAME='Anonymous Candidate'
    GIT_COMMITTER_EMAIL='anonymous@candidate.com'
  " HEAD
```

Override a remote branch with a local branch
```bash
git push {remote-name} {local-branch}:{remote-branch}
# For example
git push heroku feature/new-button:master
```

"Safely" force push. It will force push if your local ref matches the remote ref.
Basically, it will force push if it's safe to do so. If something else has change on the remote,
the force push will fail.

```bash
git push --force-with-lease
```

