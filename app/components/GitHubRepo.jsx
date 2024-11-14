import { viga } from '@/ui/fonts';

export default function GitHubRepo() {
  return (
    <section>
      <div>
        <h2 className={`${viga.className} text-xl`}>
          Initializing Repository from local machine:
        </h2>
        <p className="font-bold text-blck/60">
          Start a new repository using your local machine and Git. Check this{' '}
          <a
            href="https://github.com/git-guides/install-git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rd hover:text-rd/70"
          >
            installation guide↗
          </a>{' '}
          if you don&apos;t have git.
        </p>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>1. Initialize git in your directory.</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git init</code>
          </pre>
          <p>
            2. Make changes to your directory. Add files, start making your
            project, etc.
          </p>
          <p>3. Add remote origin url from GitHub repository.</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git remote add origin urlFromGitHubHere
            </code>
          </pre>
          <p>4. Change branch name to main if you haven&apos;t.</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git branch -M main</code>
          </pre>
          <p>5. Add all changes.</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git add .</code>
          </pre>
          <p>6. Commit changes.</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git commit -m &apos;commit message&apos;
            </code>
          </pre>
          <p>7. Push changes to GitHub.</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git push -u origin main
            </code>
          </pre>
        </div>
        <h2 className={`${viga.className} mt-10 text-xl`}>
          Cloning Repository from GitHub to local machine:
        </h2>
        <p className="font-bold text-blck/60">
          Assuming you already have a GitHub repository, you can clone it to
          your machine using git clone.
        </p>
        <div className="my-2 space-y-2 px-4 text-sm">
          <p>1. Clone the repository.</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git clone urlFromGitHubHere
            </code>
          </pre>
          <p>2. Make changes. Add changes. Commit changes.</p>
          <p>3. Push to the GitHub Repo.</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git push</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
