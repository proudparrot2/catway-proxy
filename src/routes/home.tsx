import { A, useNavigate } from '@solidjs/router'
import { Search } from 'lucide-solid'
import { createSignal } from 'solid-js'

export default function Home() {
  const [query, setQuery] = createSignal('')
  const navigate = useNavigate()
  function processInput() {
    if (!query()) return
    navigate(`/route/${btoa(query())}`)
  }
  return (
    <div>
      <div class="absolute left-1/2 top-1/2 flex w-screen -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4">
        <div class="flex items-center gap-3">
          <img src="/catway.png" class="h-14 w-14" />
          <h1 class="text-5xl font-semibold">Catway</h1>
        </div>
        <div class="join w-1/3">
          <input
            onKeyPress={(e) => {
              if (e.key !== 'Enter') return
              processInput()
            }}
            value={query()}
            onInput={(e) => setQuery(e.target.value)}
            placeholder="Enter a search query or URL"
            type="text"
            class="input join-item w-full bg-base-300"
          />
          <button class="btn btn-square join-item bg-base-300 border-none" type="button" onClick={processInput}>
            <Search class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div class="absolute bottom-0 flex w-screen items-center justify-between p-4 px-6 text-sm">
        <span></span>
        <p class="absolute left-1/2 -translate-x-1/2 italic text-base-content/50">Powered by <a class="link link-hover" href="https://github.com/cafe-labs/mocha">Mocha</a></p>
        <div class="flex gap-4">
          <button
            class="link-hover link p-0 m-0 -mt-1"
            type="button"
            onClick={() => {
              const modal = document.querySelector('#discordmodal') as HTMLDialogElement
              modal.showModal()
            }}
          >
            Discord
          </button>
          <A href="/faq" class="link-hover link -mt-1">
            FAQ
          </A>
        </div>
      </div>

      <dialog id="discordmodal" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">Opening a link</h3>
          <p class="py-4">Would you like to open our Discord server in a normal tab, or inside the proxy?</p>
          <div class="modal-action">
            <a
              class="btn btn-primary"
              href="https://discord.gg/GrQXKXjf6a"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                const modal = document.querySelector('#discordmodal') as HTMLDialogElement
                modal.close()
              }}
            >
              Normal Window
            </a>
            <button
              class="btn btn-primary"
              type="button"
              onClick={() => {
                navigate(`/route/${btoa('https://discord.gg/GrQXKXjf6a')}`)
              }}
            >
              Inside Proxy
            </button>
          </div>
        </div>

        <form method="dialog" class="modal-backdrop">
          <button class="cursor-default" type="button" />
        </form>
      </dialog>
    </div>
  )
}
