import { useRouter } from 'next/router';
import Company_registration_step from './page'; // Adjust the path if needed

const DynamicCompanyRegistration = () => {
  const router = useRouter();
  const { id } = router.query; // This extracts the dynamic `id` from the URL

  // You can use `id` to fetch data or customize the component if needed
  return <Company_registration_step />;
};

export default DynamicCompanyRegistration;
