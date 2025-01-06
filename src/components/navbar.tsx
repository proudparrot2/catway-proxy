import { A, useLocation } from '@solidjs/router'
import { Bookmark, Joystick, Layers, Settings } from 'lucide-solid'
import { Show } from 'solid-js'
export default function Navbar() {
  const location = useLocation()

  return (
    <Show when={!location.pathname.includes('/route/')}>
      <div class="navbar m-3.5 w-[calc(100vw-1.75rem)] rounded-btn bg-base-300 px-6">
        <div class="navbar-start">
          <A href="/">
            <div class="btn btn-ghost -ml-2 flex h-11 min-h-11 gap-3">
              <img src="/catway.png" class="h-8 w-8" />
              <h1 class="text-2xl font-semibold">Catway</h1>
            </div>
          </A>
        </div>
        <div class="navbar-end gap-2">
          <A href="/games">
            <button class="btn btn-ghost h-10 min-h-10" type="button">
              <Joystick class="h-5 w-5" /> Games
            </button>
          </A>
          <A href="/shortcuts">
            <button class="btn btn-ghost h-10 min-h-10" type="button">
              <Layers class="h-5 w-5" /> Shortcuts
            </button>
          </A>
          <A href="/bookmarks">
            <button class="btn btn-ghost h-10 min-h-10" type="button">
              <Bookmark class="h-5 w-5" /> Bookmarks
            </button>
          </A>
          <A href="/settings">
            <button class="btn btn-ghost h-10 min-h-10" type="button">
              <Settings class="h-5 w-5" /> Settings
            </button>
          </A>
        </div>
      </div>
    </Show>
  )
}
