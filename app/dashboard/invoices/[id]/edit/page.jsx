
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Form from "@/app/ui/invoices/create-form";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";
// import Form from "@/app/ui/invoices/create-form";
import { notFound } from "next/navigation";

export default async function Page({ params}) {
  const id = params.id;
   const [invoice, customers] = await Promise.all([
     fetchInvoiceById(id),
     fetchCustomers(),
   ]);
    if (!invoice) {
      notFound();
    }
   console.log("inv",invoice,customers)
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
}
