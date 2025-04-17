// src/ui/Heading.tsx
import { FC, ReactNode, JSX } from "react"
import clsx from "clsx"

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  className?: string
  center?: boolean
}

const baseStyles = "font-bold mb-4"

const sizeByLevel: Record<number, string> = {
  1: "text-2xl sm:text-3xl",
  2: "text-xl sm:text-2xl",
  3: "text-lg sm:text-xl",
  4: "text-base sm:text-lg",
  5: "text-sm sm:text-base",
  6: "text-sm",
}

export const Heading: FC<HeadingProps> = ({
  level = 1,
  children,
  className = "",
  center = false,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={clsx(baseStyles, sizeByLevel[level], center && "text-center", className)}>
      {children}
    </Tag>
  )
}
