import { Input } from "ui";
import Select from "ui/Select";

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
  return (
    <div>
      <div>
        <div>
          <label>Buscar:</label>
          <Input
            id="search"
            name="search"
            type="text"
            placeholder="Filtar resultados"
            value=""
            onChange={() => {}}
            hasError={false}
          />

          <label>Período:</label>
          <Select values={[{ value: 1, text: "Janeiro" }]} />
        </div>
      </div>

      <div>
        <div>
          <div>
            <span>Criação</span>
            <span>22/05/2020</span>
          </div>
          <div>
            <span>Fechamento</span>
            <span>22/05/2020</span>
          </div>
          <div>
            <span>Consumo</span>
            <span>R$ 100,00</span>
          </div>
          <div>
            <span>Status</span>
            <span>Aberto</span>
          </div>
          <div>
            <span>Pagamento</span>
            <span>Ver Boleto</span>
          </div>
          <div>
            <span>Fatura</span>
            <span>Ver detalhes</span>
          </div>
          <div>
            <span>Notas fiscais</span>
            <span>Baixar NF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileInvoicesView;
