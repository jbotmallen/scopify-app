"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react";
import { FaCaretUp } from "react-icons/fa6";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];


export function ComboboxDemo({ input, setInput }) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-3/5 justify-between hover:bg-gray-200 dark:hover:bg-gray-950 lg:text-base"
        >
          {input
            ? frameworks.find((framework) => framework.value === input)?.label
            : "Select a collection..."}
          <FaCaretUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." onChange={(e) => setInput(e.target.value)} className="h-9" />
          <CommandGroup>
            {frameworks.length > 0 ? (
              frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setInput(currentValue === input ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      input === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))
            ) : (
              <h2 className="w-full text-xs grid place-items-center p-3">
                No framework found.
              </h2>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
