import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { breakpoints } from "ui/theme";
import { ActivePlanCard, FullScreenModal } from "ui";
import QueryDetailsTable from "ui/QueryDetailsTable";
import { CancelModal } from "./components";

const Content = styled.div`
  padding: 0 20px;
`;

const QueriesInfo = styled.div`
  display: grid;
  grid-template-areas:
    "card"
    "queries";

  ${breakpoints.desktop} {
    grid-template-areas: "card queries";
    grid-template-columns: 1fr 3fr;
    column-gap: 32px;
    max-width: 1212px;
    margin: 0 auto;
  }
`;

interface Props {
  fields: {
    name?: string;
    type: "text" | "full-bottom-link";
    mobile?: {
      columnName?: string;
      rowLabel: string;
    };
    desktop?: {
      columnName: string;
      rowLabel: string;
    };
  }[];
  data: {
    values: string[];
  }[];
}

function QueryDetails() {
  const router = useRouter();
  const { query } = router;

  const [activeQuery, setActiveQuery] = useState<Props | null>(null);

  const [isCancelModalOpen, setCancelModalState] = useState<boolean>(false);

  const openCancelModal = () => setCancelModalState(true);
  const closeCancelModal = () => setCancelModalState(false);

  useEffect(() => {
    if (query.qid) {
      // TODO: fetch the query based on its id from the backend
      // TODO: replace this set with the values fetched from the brackend
      setActiveQuery({
        fields: [
          {
            name: "Nome do produto",
            type: "text",
          },
          {
            name: "Quantidade de consultas contratadas",
            type: "text",
          },
          {
            name: "Quantidade de consultas consumidas",
            type: "text",
          },
        ],
        data: [
          {
            values: ["ONC - C20202 - 01895", "10 cons. no mês", "05"],
          },
        ],
      });
    }
  }, [query]);

  if (!activeQuery) return <div>Loading...</div>;

  return (
    <>
      <Content>
        <div>Navbar</div>
        <QueriesInfo>
          <ActivePlanCard />
          <QueryDetailsTable
            queries={activeQuery}
            openCancelModal={openCancelModal}
          />
        </QueriesInfo>
        <div>Newsletter</div>
        <div>Products</div>
        <div>Footer</div>
      </Content>
      <CancelModal isOpen={isCancelModalOpen} close={closeCancelModal} />
    </>
  );
}

export default QueryDetails;
