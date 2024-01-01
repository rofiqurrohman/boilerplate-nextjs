'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { rootReducer, userReducer } from '@/containers';
import { AuthService } from '@/services/auth.service';
import { RiEyeFill, RiEyeOffFill } from '@remixicon/react';

type FormValues = {
  identity: string;
  password: string;
};

const authService = new AuthService();

export default function SignInForm() {
  const dispatch = useDispatch();
  const { setIsLoggedIn } = rootReducer.actions;
  const { setUserAccount, setUserToken } = userReducer.actions;
  const { register, handleSubmit } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (formValues: FormValues) => {
    authService
      .signIn(formValues.identity, formValues.password)
      .then((authenticated) => {
        dispatch(setUserToken(authenticated.token));
        dispatch(setUserAccount(authenticated.user));
        dispatch(setIsLoggedIn(true));
      }, console.log);
  };

  return (
    <form
      className="flex w-full flex-wrap gap-4 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        size="sm"
        type="text"
        isRequired
        isClearable
        autoComplete="username"
        placeholder="Email / Username"
        {...register('identity')}
      />
      <Input
        size="sm"
        type={showPassword ? 'text' : 'password'}
        isRequired
        isClearable
        autoComplete="off"
        placeholder="Password"
        {...register('password')}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
          </button>
        }
      />
      <Button type="submit" className="sm:w-full hover:bg-yellow-400">
        Sign In
      </Button>
    </form>
  );
}
