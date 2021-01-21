interface Props {
  invoices: {
    createdAt: string;
    closedAt: string;
    priceInCents: number;
    status: string;
    paymentLink: string;
    invoiceLink: string;
    invoiceDocumentLink: string;
  }[];
}

function MobileInvoicesView({ invoices }: Props) {
  return <div></div>;
}

export default MobileInvoicesView;
