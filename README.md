# branching-demo
A demo of branching in git with version branches and tagged releases

## Release branches
Major releases get the format `release/v(\d)+.X`.  These are major versions that may not be compatible for pulling in the latest changes into master; however, they can still merge back into master to apply hotfixes.

## Example Hotfix

Assuming that version 1.1 has already been released, branched, and tagged:

```
git checkout -b hotfix/my-hotfix release/v1.X
# Changes are made
git commit -m 'Hotfixes 1.1'
git checkout release/v1.X
git tag -a 'v1.2' -m 'Version 1.2' # New Release
git checkout master
git merge release/v1.X
# Fix any conflicts
```

This causes the release/v1.X to receive the hotfix and master because it could effect other versions.  It is possible that the hotfix needs to be applied to multiple versions, but at least the master branch is patched for when a new release is being branched.
