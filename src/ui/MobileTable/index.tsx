import styled from "styled-components";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  display: block;
  display: grid;
  row-gap: 40px;
  margin: 56px 0;

  ${breakpoints.desktop} {
    display: none;
  }
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 5px 3px 25px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const CardRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px;

  &:not(:last-of-type) {
    border: 1px solid #f2f2f2;
  }
`;

const CardLabel = styled.span`
  font-family: ${typography.roboto};
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  color: #686868;
`;

const CardValue = styled.span`
  font-family: ${typography.roboto};
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  color: #94a2b3;
  text-align: right;
`;

const FullBottomLink = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: 16px;
  background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
  border-radius: 0px 0px 6px 6px;

  color: white;
  font-family: ${typography.inter};
  font-size: 16px;
  font-weight: 600;
  line-height: 29px;
  text-transform: uppercase;
  text-decoration: none;
`;

interface Props {
  queries: {
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
  };
}

function MobileTable({ queries }: Props) {
  const { fields, data } = queries;

  return (
    <Content>
      {data.map(function (stream, i) {
        const { values } = stream;

        return (
          <Card>
            {values.map(function (data, index) {
              const { name, type, mobile } = fields[index];

              if (type === "full-bottom-link") {
                return (
                  <FullBottomLink href={data}>
                    {mobile?.rowLabel}
                  </FullBottomLink>
                );
              }

              return (
                <CardRow>
                  <CardLabel>{name}</CardLabel>
                  <CardValue>{data}</CardValue>
                </CardRow>
              );
            })}
          </Card>
        );
      })}
    </Content>
  );
}

export default MobileTable;
