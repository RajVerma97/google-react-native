import { auth } from '@utils/firebase';
import { useState, useEffect } from 'react';
import { FirebaseUser } from '../types/user';
import { User } from 'firebase/auth';

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setUser(user as User);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    error,
  };
}
