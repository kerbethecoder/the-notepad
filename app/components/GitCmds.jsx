import { viga } from '@/ui/fonts';

export default function GitCmds() {
  return (
    <section>
      <div>
        <p className="mb-2 font-bold text-blck/60">
          Here are some useful git commands that may help.
        </p>
        <h2 className={`${viga.className} text-xl`}>Git configuration:</h2>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>To setup git username and email:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git config --global user.name &apos;your username&apos;
            </code>
            <br />
            <code className="font-bold text-yllw">
              $ git config --global user.email &apos;your@email.com&apos;
            </code>
          </pre>
          <p>
            To set the default branch name to <strong>main</strong> instead of
            master:
          </p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git config --global init.defaultBranch main
            </code>
          </pre>
          <p>To check for git configuration:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git config -l</code>
          </pre>
        </div>
        <hr className="my-10 w-3/4 border border-blck/10" />
        <h2 className={`${viga.className} text-xl`}>Git removal:</h2>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>To remove git from directory:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ rm -rf .git*</code>
          </pre>
        </div>
        <hr className="my-10 w-3/4 border border-blck/10" />
        <h2 className={`${viga.className} text-xl`}>Git logs:</h2>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>To get a list of commits:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git log</code>
          </pre>
          <p>To get a list of commits in one line format:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git log --oneline</code>
          </pre>
        </div>
        <hr className="my-10 w-3/4 border border-blck/10" />
        <h2 className={`${viga.className} text-xl`}>Git branches:</h2>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>To check local branches:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git branch</code>
          </pre>
          <p>To create new branch:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git branch branchName</code>
          </pre>
          <p>To go to a branch:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git checkout branchName
            </code>
          </pre>
          <p>To create and go to a new branch:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git checkout -b branchName
            </code>
          </pre>
          <p>To delete a branch:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git branch -d branchName
            </code>
          </pre>
        </div>
        <hr className="my-10 w-3/4 border border-blck/10" />
        <h2 className={`${viga.className} text-xl`}>Git remote:</h2>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>To add a remote repository:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git remote add origin urlHere
            </code>
          </pre>
          <p>To see remote connection:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git remote -v</code>
          </pre>
          <p>To push a new branch and set upstream to the remote repo:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git push -u origin branchName
            </code>
          </pre>
        </div>
        <hr className="my-10 w-3/4 border border-blck/10" />
        <h2 className={`${viga.className} text-xl`}>Git stash:</h2>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>To stash changes and return to the previous state:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git stash</code>
          </pre>
          <p>To see all stashed file changes:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git stash list</code>
          </pre>
          <p>To get the file from the top of the stash stack:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git stash pop</code>
          </pre>
          <p>To discard the changes from the top of the stash stack:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git stash pop</code>
          </pre>
          <p>To apply changes from the selected stashed item:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git stash apply stash@&#123;n&#125;
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
