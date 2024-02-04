import {

Button as ButtonElement,
ButtonProps as ButtonElementProps,

} from '../components-ui/button';

import { ReloadIcon } from '@radix-ui/react-icons'

import { Fragment } from 'react';


type ButtonProps = ButtonElementProps & {
    loading?:boolean;
}

export function Button({loading, ...props}:ButtonProps){
    
    return (
    
        <ButtonElement {...props} disabled={props.disabled || loading}>

      {
        loading && (
            <Fragment>
                <ReloadIcon/>
                Por favor, espere
            </Fragment>
        )
      }
       {!loading && props.children}
        </ButtonElement>


    )

}