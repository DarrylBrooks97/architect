import { cookies } from 'next/headers';
import { Suspense } from 'react';
import Content from './components/client/Content';

const Skeleton = () => {
	return <></>;
};

const ComponentUI = async () => {
	const cookieStore = cookies();
	const seen = !!cookieStore.get('seen');

	return <Content seen={seen} />;
};

export default function RootPage() {
	return (
		<Suspense fallback={<Skeleton />}>
			{/* @ts-expect-error Async Server Component */}
			<ComponentUI />
		</Suspense>
	);
}
