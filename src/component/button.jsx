import clsx from "clsx"

export function Button({
  children,
  secondary,
  className,
  disabled,
  onClick,
  tertiary
}) {

  return (
    <button
      className={
        clsx(
          "px-5 py-3 text-sm rounded-full flex flex-row",
          secondary ? (tertiary ? 'border border-blue-500 text-blue-500' : 'border border-primary text-primary block') : (disabled ? 'bg-slate-300 text-white' : 'bg-primary text-white'),
          className,
        )
      }
      disabled={disabled}
      onClick={onClick}
      tertiary={tertiary}
    >
      {children}
    </button>
  )
}