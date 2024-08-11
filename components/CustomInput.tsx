import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { z } from 'zod';
import { Control, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';


const formSchema = authFormSchema("sign-up")

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
    type?: string;
}

const CustomInput = ({control, name, label, placeholder, type="text"}: CustomInputProps) => {
  return (
      <FormField
          control={control}
          name={name}
          render={({ field }) => (
              <div className="form-item">
                  <FormLabel className="form-label">{label}</FormLabel>
                  <div className="flex w-full flex-col">
                      <FormControl>
                          <Input
                              placeholder={placeholder}
                              className="input-class"
                              type={type}
                              {...field}
                              id={`input${name}`}
                          />
                      </FormControl>
                      <FormMessage className="form-message mt-2" />
                  </div>
              </div>
          )}
      />
  );
}

export default CustomInput