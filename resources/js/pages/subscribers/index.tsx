import { columns } from '@/components/datatable/columns';
import { DataTable } from '@/components/datatable/data-table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Assinantes',
        href: dashboard().url,
    },
];

export default function Index() {
    const data: any[] = [];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <DataTable columns={columns} data={data} />
            </div>
        </AppLayout>
    );
}
