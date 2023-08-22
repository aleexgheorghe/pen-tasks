export function Button({children}) {
  return (
    <button className="relative inline-flex items-center gap-x-2 rounded-md bg-zinc-800 px-3 py-2 text-white hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-800 focus-visible:ring-white">
        {children}
    </button>
  )
}

export default Button