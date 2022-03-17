import { SelectChangeEvent } from '@mui/material';
import { ChangeEventHandler, ReactNode } from 'react';

export type SignUpData = {
  email: string;
  nickname: string;
  password: string;
  domain: string;
};

export type InputEventHandler = ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement
> & { (event: SelectChangeEvent<string>, child: ReactNode): void };
