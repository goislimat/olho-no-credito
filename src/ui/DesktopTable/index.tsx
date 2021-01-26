import styled from "styled-components";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: grid;
    background: white;
    box-shadow: 5px 3px 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 40px 32px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const ColumnHeader = styled.th`
  background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
  padding: 12px;
  border-radius: 15px 15px 0 0;
  border: 2px solid white;

  font-family: ${typography.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: white;
`;

const TableRow = styled.tr`
  border: 1px solid #e6e6e6;
`;

const TableCell = styled.td`
  background: #f7f7f7;
  padding: 16px 8px;

  font-family: ${typography.inter};
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  color: #838383;
`;

const TableLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;

  font-family: ${typography.inter};
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #2721f3;
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

function DesktopTable({ queries }: Props) {
  const { fields, data } = queries;

  return (
    <Content>
      <Table>
        <thead>
          <tr>
            {fields.map(function (field) {
              const { name, type, desktop } = field;

              if (type === "full-bottom-link") {
                return <ColumnHeader>{desktop?.columnName}</ColumnHeader>;
              }

              return <ColumnHeader>{name}</ColumnHeader>;
            })}
          </tr>
        </thead>

        <tbody>
          {data.map(function (item) {
            const { values } = item;

            return (
              <TableRow>
                {values.map(function (value, index) {
                  if (fields[index].type === "full-bottom-link") {
                    return (
                      <TableCell>
                        <TableLink href={value}>
                          {fields[index].desktop?.rowLabel}
                        </TableLink>
                      </TableCell>
                    );
                  }

                  return <TableCell>{value}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </Content>
  );
}

export default DesktopTable;
