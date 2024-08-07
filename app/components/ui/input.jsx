import * as React from "react"

import { cn } from "../lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-14 rounded-3xl w-96 bg-grey-light px-8 py-2 text-lg  file:bg-transparent file:text-sm font-bebas file:font-medium  disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-primary-red-light",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
