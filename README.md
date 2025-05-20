# Framer
Framer is the world's best no-code website builder. If you have a Framer website, all your animations are already powered by Motion.

Framer offers a number of animations, interactions and components that mean you usually never need to write any code to achieve amazing effects.

However, advanced users can write code components and overrides, which are custom React components that you can drop into your canvas.

The full Motion for React API is available to use in both.

## Import
Import Motion for React via `"framer-motion"`:
````tsx
import { motion, useSpring } from "framer-motion"
````

Use `"framer-motion"` whenever the Motion docs instruct you to use `"motion/react"`.

## Overrides
Components returned by overrides support the full motion component API. This means you can pass props like animate, transition, whileHover etc:
````tsx
export function withRotateAnimation(Component): ComponentType {
  return forwardRef((props, ref) => {
    return (
      <Component
        ref={ref}
        {...props}
        animate={{rotate: 90}}
        transition={{duration: 2}}
        style={{...props.style, x: 100}}
      />
    )
  })
}
````