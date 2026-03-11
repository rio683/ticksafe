import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tick Allergy Death in Australia | TickSafe News',
    description: 'News about the first confirmed death in Australia from tick-induced red meat allergy and why tick protection is important.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
