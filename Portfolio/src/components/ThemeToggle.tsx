"use client"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun, Palette, X } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/Button"
import { HexColorPicker } from "react-colorful"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [customColor, setCustomColor] = useState("#2803fc")
  const [showColorPicker, setShowColorPicker] = useState(false)
  const colorPickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const storedColor = localStorage.getItem("customColor")
    if (storedColor) {
      setCustomColor(storedColor)
      updateCustomColor(storedColor)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const updateCustomColor = (color: string) => {
    setCustomColor(color)
    document.documentElement.style.setProperty("--custom-color", color)
    localStorage.setItem("customColor", color)

    const rgb = Number.parseInt(color.slice(1), 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b

    if (luma < 128) {
      document.documentElement.style.setProperty("--custom-color-foreground", "white")
    } else {
      document.documentElement.style.setProperty("--custom-color-foreground", "black")
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="outline" size="icon" onClick={() => setShowColorPicker(!showColorPicker)}>
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Customize color</span>
        </Button>
      </div>

      {showColorPicker && (
        <div
          ref={colorPickerRef}
          className="absolute right-0 mt-2 p-4 bg-background border border-border rounded-md shadow-lg z-50"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Choose a color</span>
            <Button variant="ghost" size="icon" onClick={() => setShowColorPicker(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <HexColorPicker color={customColor} onChange={updateCustomColor} />
          <div
            className="mt-2 p-2 rounded"
            style={{
              backgroundColor: customColor,
              color: customColor === "#ffffff" ? "#000000" : "#ffffff",
            }}
          >
            Sample Text
          </div>
        </div>
      )}
    </div>
  )
}

