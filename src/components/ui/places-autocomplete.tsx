"use client"

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface PlacesAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  id?: string
  required?: boolean
}

export function PlacesAutocomplete({
  value,
  onChange,
  placeholder = "Enter address",
  className,
  id,
  required = false,
}: PlacesAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)

  useEffect(() => {
    const initializeAutocomplete = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
          version: "weekly",
          libraries: ["places"],
        })

        await loader.load()

        if (inputRef.current && typeof google !== "undefined") {
          autocompleteRef.current = new google.maps.places.Autocomplete(
            inputRef.current,
            {
              types: ["address"],
              componentRestrictions: { country: "us" },
              fields: ["formatted_address", "geometry"],
            }
          )

          autocompleteRef.current.addListener("place_changed", () => {
            const place = autocompleteRef.current?.getPlace()
            if (place && place.formatted_address) {
              onChange(place.formatted_address)
            }
          })
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error)
      }
    }

    initializeAutocomplete()

    return () => {
      if (autocompleteRef.current && typeof google !== "undefined") {
        google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [onChange])

  return (
    <Input
      ref={inputRef}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={cn(className)}
      required={required}
      autoComplete="off"
    />
  )
} 