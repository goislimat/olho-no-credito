import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { breakpoints } from "ui/theme";
import { ActivePlanCard, FullScreenModal } from "ui";
import QueryDetailsTable from "ui/QueryDetailsTable";

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

interface ActiveQueryProps {
  productName: string;
  numberOfQueries: number;
  usedQueriesCount: number;
}

function QueryDetails() {
  const router = useRouter();
  const { query } = router;

  const [activeQuery, setActiveQuery] = useState<ActiveQueryProps | null>(null);

  const [isCancelModalOpen, setCancelModalState] = useState<boolean>(false);

  const openCancelModal = () => setCancelModalState(true);
  const closeCancelModal = () => setCancelModalState(false);

  useEffect(() => {
    if (query.qid) {
      // TODO: fetch the query based on its id from the backend
      // TODO: replace this set with the values fetched from the brackend
      setActiveQuery({
        productName: "ONC Consulta PF - PLANO 10",
        numberOfQueries: 10,
        usedQueriesCount: 5,
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
          <QueryDetailsTable openCancelModal={openCancelModal} />
        </QueriesInfo>
        <div>Newsletter</div>
        <div>Products</div>
        <div>Footer</div>
      </Content>
      <FullScreenModal isOpen={isCancelModalOpen} close={closeCancelModal} />
    </>
  );
}

export default QueryDetails;
