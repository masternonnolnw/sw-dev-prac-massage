import React from 'react';

import { Root as RadioGroupRoot } from '@radix-ui/react-radio-group';

import { cn } from '@/libs/utils';

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupRoot>,
    React.ComponentPropsWithoutRef<typeof RadioGroupRoot>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupRoot
            className={cn('grid gap-2', className)}
            {...props}
            ref={ref}
        />
    );
});

RadioGroup.displayName = RadioGroupRoot.displayName;

export default RadioGroup;
