import React from "react"

type CircularProgressProps = {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
}

export function CircularProgress({
  value,
  size = 80,
  strokeWidth = 8,
  color = "text-blue-500",
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg
      width={size}
      height={size}
      className="rotate-[-90deg]" // começa no topo
    >
      {/* fundo */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        className="text-gray-300"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* progresso */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        className={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  )
}
