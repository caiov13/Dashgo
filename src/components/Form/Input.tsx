import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps  extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return(
        <FormControl isInvalid={!!error}>
         { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

          <ChakraInput 
          name={name} 
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgcolor:'gray.900'
          }}
          size="lg" // 48px 
          ref={ref}
          {...rest}
          />
          
          {!!error && (
            <FormErrorMessage>{error.message}</FormErrorMessage>
          )}

          </FormControl>
    );
}

export const Input = forwardRef(InputBase);