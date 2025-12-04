import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";

export default function Test() {
  return (
    <AppLayout breadcrumbs={[{ title: 'Testful' }]}>
        <Head title="Test" />
        <div className="p-4 space-y-2">
        <h1 className="text-xl font-medium">Hello from JSX</h1>
        <p className="text-sm text-muted-foreground">This page is rendered from a .jsx component.</p>
      </div>
    </AppLayout>
  );
}
