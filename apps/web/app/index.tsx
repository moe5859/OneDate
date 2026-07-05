import { Redirect } from 'expo-router';

import { ROUTES } from '@onedate/config';

export default function Index() {
  return <Redirect href={ROUTES.auth} />;
}
