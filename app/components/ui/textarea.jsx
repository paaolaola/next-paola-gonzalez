import * as React from "react"

import { cn } from "../lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] rounded-3xl w-96 bg-grey-light px-8 py-2 text-lg  file:bg-transparent file:text-sm font-bebas file:font-medium  disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-primary-red-light",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
