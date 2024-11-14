import { viga, inter } from '@/ui/fonts';

export default function UserAuth() {
  return (
    <section>
      <div>
        <h2 className={`${viga.className} text-xl`}>
          User Authentication between local machine and GitHub:
        </h2>
        <div className="border-l-4 border-blgrn px-2 font-bold text-blck/60">
          <p className="text-blgrn">Note:</p>
          <p className="px-2 text-sm">
            You can check these links for references:{' '}
          </p>
          <ul className="px-4 text-sm">
            <li>
              <a
                href="https://stackoverflow.com/questions/3466626/how-to-permanently-add-a-private-key-with-ssh-add-on-ubuntu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-rd hover:text-rd/70"
              >
                How to permanently add a private key with ssh-add on Ubuntu?↗
              </a>
            </li>
            <li>
              <a
                href="https://www.ssh.com/academy/ssh/keygen#what-is-ssh-keygen?"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-rd hover:text-rd/70"
              >
                How to use ssh-keygen to generate a new SSH Key?↗
              </a>
            </li>
          </ul>
        </div>
        <div className="my-2 space-y-1 px-4 text-sm">
          <div className="my-2 space-y-2 px-4 text-sm">
            <p>1. Generate SSH key pair:</p>
            <div className="space-y-2 px-4 text-sm">
              <p>
                a. Use the command{' '}
                <span className={`${inter.className} font-bold`}>
                  ssh-keygen
                </span>{' '}
                to generate a new key pair.
              </p>
              <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
                <code className="font-bold text-gry"># root directory</code>
                <br />
                <code className="font-bold text-yllw">$ ssh-keygen</code>
              </pre>
              <p>
                b. Save the key{' '}
                <span className="text-blck/60">
                  (usually in /home/user/.ssh/id_rsa_fileName)
                </span>
                . <strong>Follow the prompts.</strong>
              </p>
              <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
                <code className="font-bold text-yllw">$ ssh-keygen</code>
                <br />
                <code className="font-bold text-yllw">
                  $ Enter file in which to save the key
                  (/home/user/.ssh/id_rsa):
                </code>
                <br />
                <code className="font-bold text-yllw">
                  $ Enter passphrase (empty for no passphrase):
                </code>
                <br />
                <code className="font-bold text-yllw">
                  $ Enter same passphrase again:
                </code>
                <br />
                <code className="font-bold text-yllw">
                  $ Your identification has been saved in
                  /home/user/.ssh/id_rsa_fileName
                </code>
                <br />
                <code className="font-bold text-yllw">
                  $ Your public key has been saved in
                  /home/user/.ssh/id_rsa_fileName.pub
                </code>
                <br />
                <code className="font-bold text-yllw">$ ...</code>
              </pre>
              <p>
                c. Check{' '}
                <span className={`${inter.className} font-bold`}>
                  public key
                </span>
                <span className="text-blck/60">
                  {' '}
                  (/home/user/.ssh/id_rsa_fileName.pub)
                </span>
                .
              </p>
              <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
                <code className="font-bold text-gry"># root directory</code>
                <br />
                <code className="font-bold text-yllw">
                  <span className="text-blgrn">~</span>$ cd .ssh/
                </code>
                <br />
                <code className="font-bold text-yllw">
                  <span className="text-blgrn">~/.ssh</span>$ cat
                  id_rsa_fileName.pub
                </code>
              </pre>
            </div>
            <p>
              2. Copy and add <strong>public key</strong> to GitHub main
              settings <strong>(SSH and GPG Keys &gt; New SSH Key)</strong>:
            </p>
            <p>
              3. Add a config file on{' '}
              <span className={`${inter.className} font-bold`}>~/.ssh</span>{' '}
              <span className="text-blck/60">
                (this method use <strong>Nano</strong>, a terminal-based text
                editor)
              </span>
              :
            </p>
            <div className="space-y-2 px-4 text-sm">
              <p>a. Create a config file:</p>
              <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
                <code className="font-bold text-yllw">
                  <span className="text-blgrn">~/.ssh</span>$ nano config
                </code>

                <br />
                <code className="font-bold text-gry"># or</code>
                <br />
                <code className="font-bold text-yllw">
                  <span className="text-blgrn">~</span>$ nano ~/.ssh/config
                </code>
              </pre>
              <p>b. Add private key.</p>
              <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
                <code className="font-bold text-rd">
                  IdentityFile ~/.ssh/id_rsa_fileName
                </code>
              </pre>
            </div>
            <p>4. Run SSH Agent:</p>
            <div className="px-4 text-sm">
              <pre className="w-1/2 rounded bg-blck/80 px-3 py-2">
                <code className="font-bold text-yllw">
                  <span className="text-blgrn">~</span>$ eval
                  $(&apos;ssh-agent&apos;)
                </code>
                <br />
                <code className="font-bold text-yllw">
                  <span className="text-blgrn">~</span>$ ssh-add
                  ~/.ssh/id_rsa_fileName
                </code>
              </pre>
            </div>
          </div>
          {/* <p>Connecting local machine to github repo:</p>
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
          </pre> */}
          {/* sap tol */}
        </div>
      </div>
    </section>
  );
}
