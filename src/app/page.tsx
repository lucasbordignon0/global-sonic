import React from "react"
export default function Home() {
  return (

    <div className="flex flex-col w-full h-screen items-center justify-center font-sans bg-neutral-950 antialiased">

        <div className="flex flex-col w-full max-w-[510px] rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden">
          <div className="flex gap-4 p-4 items-center border-b border-neutral-800">
            <span className="text-purple-500"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="currentColor"/>
                <path d="M12.6952 19.889H19.3056C19.3056 18.4638 19.8313 17.4651 20.3745 16.433C20.9552 15.3296 21.5559 14.1882 21.5559 12.447C21.5559 9.49826 19.1649 7.11121 16.0004 7.11121C12.8358 7.11121 10.4448 9.49826 10.4448 12.447C10.4448 14.1882 11.0456 15.3296 11.6263 16.433C12.1695 17.4651 12.6952 18.4638 12.6952 19.889Z" fill="white"/>
                <rect opacity="0.8" x="12.667" y="20.4445" width="6.66667" height="1.11111" rx="0.555556" fill="white"/>
                <rect opacity="0.8" x="12.667" y="22.1111" width="6.66667" height="1.11111" rx="0.555555" fill="white"/>
                <path d="M14.0557 23.7778H17.9446V23.7778C17.9446 24.3915 17.4471 24.8889 16.8334 24.8889H15.1668C14.5531 24.8889 14.0557 24.3915 14.0557 23.7778V23.7778Z" fill="white"/>
                </svg>
            </span>
            <div className="flex flex-col w-full gap-0.5">
              <p className="text-white/50 text-xs font-medium uppercase tracking-">device</p>
              <h3 className="text-white text-sm font-medium">LXZ12374</h3>
            </div>
            <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors ease-in-out duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>

          <div className="flex py-4 px-2 border-b border-neutral-800">
            <div className="flex px-4 py-2 rounded-full bg-white/10">
              <p className="text-white text-sm font-medium">Status</p>
            </div>
            <div className="flex px-4 py-2 rounded-full">
              <p className="text-white/50 text-sm font-medium">Actions</p>
            </div>
            <div className="flex px-4 py-2 rounded-full">
              <p className="text-white/50 text-sm font-medium">Neighbors</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4">
            <div className="flex h-10 items-center justify-between">
              <p className="text-white text-base font-normal">Name</p>
              <p className="text-white text-base font-medium">LXZ12374</p>
            </div>
            <div className="flex h-10 items-center justify-between">
              <p className="text-white text-base font-normal">Zone</p>
              <p className="text-white text-base font-medium">Third Floor</p>
            </div>
            <div className="flex h-10 items-center justify-between">
              <p className="text-white text-base font-normal">Battery Level</p>
              <div className="flex gap-2 items-center">
                <span className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M16 7H5C4.02892 7 3.40121 7.00212 2.9387 7.06431C2.50496 7.12262 2.36902 7.21677 2.29289 7.29289C2.21677 7.36902 2.12262 7.50496 2.06431 7.9387C2.00212 8.40121 2 9.02892 2 10V14C2 14.9711 2.00212 15.5988 2.06431 16.0613C2.12262 16.495 2.21677 16.631 2.29289 16.7071C2.36902 16.7832 2.50496 16.8774 2.9387 16.9357C3.40121 16.9979 4.02892 17 5 17H16C16.9711 17 17.5988 16.9979 18.0613 16.9357C18.495 16.8774 18.631 16.7832 18.7071 16.7071C18.7832 16.631 18.8774 16.495 18.9357 16.0613C18.9979 15.5988 19 14.9711 19 14V10C19 9.02892 18.9979 8.40121 18.9357 7.9387C18.8774 7.50496 18.7832 7.36902 18.7071 7.29289C18.631 7.21677 18.495 7.12262 18.0613 7.06431C17.5988 7.00212 16.9711 7 16 7ZM1.58579 6.58579C1 7.17157 1 8.11438 1 10V14C1 15.8856 1 16.8284 1.58579 17.4142C2.17157 18 3.11438 18 5 18H16C17.8856 18 18.8284 18 19.4142 17.4142C20 16.8284 20 15.8856 20 14V10C20 8.11438 20 7.17157 19.4142 6.58579C18.8284 6 17.8856 6 16 6H5C3.11438 6 2.17157 6 1.58579 6.58579Z" fill="white"/>
                  <path opacity="0.5" d="M21 10C21.9428 10 22.4142 10 22.7071 10.2929C23 10.5858 23 11.0572 23 12C23 12.9428 23 13.4142 22.7071 13.7071C22.4142 14 21.9428 14 21 14V10Z" fill="currentColor"/>
                  <path d="M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H16C16.9428 8 17.4142 8 17.7071 8.29289C18 8.58579 18 9.05719 18 10V14C18 14.9428 18 15.4142 17.7071 15.7071C17.4142 16 16.9428 16 16 16H5C4.05719 16 3.58579 16 3.29289 15.7071C3 15.4142 3 14.9428 3 14V10Z" fill="currentColor"/>
                </svg>
                </span>
                <p className="text-white text-base font-medium">100%</p>
              </div>
            </div>
            <div className="flex h-10 items-center justify-between">
              <p className="text-white text-base font-normal">Group</p>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <p className="text-white text-base font-medium">Meeting Room Master</p>
              </div>
            </div>
            <div className="flex h-10 items-center justify-between">
              <p className="text-white text-base font-normal">Status</p>
              <div className="flex items-center h-6 bg-green-500/10 rounded-md border border-green-500 px-2 py-1">
                <p className="text-green-500 text-xs uppercase tracking-widest font-semibold">Online</p>
              </div>
            </div>
          </div>

        </div>

      </div>

  )
}
