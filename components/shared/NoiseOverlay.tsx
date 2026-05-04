'use client'

import { useEffect, useRef } from 'react'

export default function NoiseOverlay() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx || !ref.current) return

    canvas.width = 200
    canvas.height = 200
    const img = ctx.createImageData(200, 200)

    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.floor(Math.random() * 255)
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v
      img.data[i + 3] = 255
    }
    ctx.putImageData(img, 0, 0)
    ref.current.style.backgroundImage = `url(${canvas.toDataURL()})`
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999] opacity-[0.035]"
      style={{ backgroundRepeat: 'repeat', backgroundSize: '200px 200px' }}
    />
  )
}
