// SettingsPage.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { trpc } from '@/utils/trpc';
import { ClerkUser } from '@clerk/clerk-sdk-node';

import { Button } from '@/components/Button';
import { FormField } from '@/components/FormField';
import { Layout } from '@/components/Layout';

interface SettingsPageProps {}

interface FormData extends ClerkUser {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  username?: string;
}

const schema = yup.object().shape({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  emailAddress: yup.string().email().optional(),
  phoneNumber: yup.string().optional(),
  username: yup.string().optional(),
});

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  const router = useRouter();
  const { data: session } = trpc.useQuery(['session']);
  const { mutate: updateUser } = trpc.useMutation(['user', 'update']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: session?.user,
  });

  const onSubmit = async (data: FormData) => {
    if (!session?.user.id) return;

    await updateUser({ id: session.user.id, data });

    router.push('/settings');
  };

  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <h1 className="text-3xl font-medium text-gray-900">Settings</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            label="First Name"
            error={errors.firstName?.message}
            {...register('firstName')}
          />
          <FormField
            label="Last Name"
            error={errors.lastName?.message}
            {...register('lastName')}
          />
          <FormField
            label="Email Address"
            error={errors.emailAddress?.message}
            {...register('emailAddress')}
          />
          <FormField
            label="Phone Number"
            error={errors.phoneNumber?.message}
            {...register('phoneNumber')}
          />
          <FormField
            label="Username"
            error={errors.username?.message}
            {...register('username')}
          />
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </Layout>
  );
};

export default SettingsPage;