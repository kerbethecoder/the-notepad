import { viga, inter } from '@/ui/fonts';

export default function GitCmds() {
  return (
    <section>
      <div>
        <h2 className={`${viga.className} text-xl`}>Git Connection</h2>
        <div className="my-2 space-y-1 px-4 text-sm">
          <p>Connecting local machine to github repo:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git remote add origin ssh_or_https_path
            </code>
          </pre>
          <p>Check if the remote path is added or not:</p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">$ git remote -v</code>
          </pre>
          <p>
            Push to your repo. Add{' '}
            <span className={`${inter.className} font-bold`}>-u flag</span> for
            first time.
          </p>
          <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
            <code className="font-bold text-yllw">
              $ git push -u origin branch_name
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
