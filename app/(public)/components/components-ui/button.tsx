import { Slot } from "@radix-ui/react-slot";
import React from "react";



  export interface ButtonProps extends
   React.ButtonHTMLAttributes<HTMLButtonElement>
 {
    asChild?:boolean;
    loading?:boolean;
 }

 const Button = React.forwardRef<HTMLButtonElement , ButtonProps>(
   ({className, type, asChild = false, ...props }, ref )=>{
    
    const Comp = asChild ? Slot : 'button';

     return (
        <Comp
         
        ref={ref}
        {...props}

        />
     )


   }

   
 );

 Button.displayName = 'Button';

 export {Button};