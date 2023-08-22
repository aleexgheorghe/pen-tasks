export function Button({children}) {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md">
        {children}
    </button>
  )
}

export default Button