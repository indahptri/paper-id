import clsx from "clsx"

export function Button({
  children,
  secondary,
  className,
  disabled,
  onClick
}) {

  return (
    <button
      className={
        clsx(
          "px-5 py-3 text-sm rounded-full flex flex-row",
          secondary ? (disabled ? '' : 'border border-primary text-primary block') : (disabled ? 'bg-slate-300 text-white' : 'bg-primary text-white'),
          className
        )
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}